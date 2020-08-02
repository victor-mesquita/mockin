<template>
  <container title="Nova rota" :can-add="false" :can-back="true">
    <div>
      <div v-if="form.route.active" class="text-center w-full animated pulse mb-8">
        <div
          class="p-2 bg-green-800 items-center text-green-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span class="flex rounded-full bg-green-500 uppercase px-2 py-1 text-xs font-bold mr-3"
            >Ativo em</span
          >
          <a class="font-semibold mr-2 text-left flex-auto" :href="mockUrl" target="_blank"
            >({{ form.route.httpMethod }}) {{ mockUrl }}</a
          >
        </div>
      </div>
    </div>

    <div class="w-full">
      <form @submit.prevent="submit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="flex items-center mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="route-path"
              >Path</label
            >
            <input
              class="w-full block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="route-path"
              id="route-path"
              v-model="form.route.path"
              placeholder="/exemplo/create/"
              :required="true"
              :class="{ 'border-red-500': $v.form.route.path.$error }"
            />
          </div>
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="route-description"
              >Descrição</label
            >
            <input
              class="w-full block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="route-description"
              id="route-description"
              v-model="form.route.description"
              placeholder="Ex: Minha rota para autenticação"
              maxlength="60"
            />
          </div>
        </div>

        <div class="flex items-center mb-6">
          <Select
            class="md:w-1/3 px-3"
            label="Status code"
            id-property="name"
            value-property="name"
            :data="statusCodes"
            :model.sync="form.route.statusCode"
            :has-error="$v.form.route.statusCode.$error"
          ></Select>
          <Select
            class="md:w-1/3 px-3"
            label="Http Method"
            id-property="name"
            value-property="name"
            :data="httpMethods"
            :model.sync="form.route.httpMethod"
            :has-error="$v.form.route.httpMethod.$error"
          ></Select>
        </div>

        <div class="flex items-center mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="route-response"
              >Response</label
            >
            <ace-editor
              name="route-response"
              id="route-response"
              v-model="form.route.response"
              @init="editorInit"
              lang="json"
              theme="crimson_editor"
              width="100%"
              height="200"
            ></ace-editor>
          </div>
        </div>

        <div class="flex items-center mt-10">
          <button
            :disabled="this.$v.$anyError"
            :class="{ 'opacity-50': this.$v.$anyError }"
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-5"
            type="submit"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  </container>
</template>

<script>
import AceEditor from "vue2-ace-editor";
import { mapGetters } from "vuex";
import { required, maxLength } from "vuelidate/lib/validators";
import constants from "@/util/constants";
import Select from "@/components/Common/Select";
import Container from "@/components/Common/Container";
import store from "@/store";

export default {
  name: "RouteForm",
  data() {
    return {
      form: { route: { response: "" } },
      baseDomainMocks: constants.baseDomainMocks,
      apiPath: constants.apiPath
    };
  },
  validations: {
    form: {
      route: {
        statusCode: { required },
        path: { required, max: maxLength(500) },
        httpMethod: { required }
      }
    }
  },
  computed: {
    ...mapGetters({
      mockUserId: "mockUser/selectedUser",
      httpMethods: "global/httpMethods",
      statusCodes: "global/statusCodes",
      persistedRoute: "route/route",
      project: "global/project"
    }),
    mockUrl() {
      return `${this.baseDomainMocks}/${this.project.uniqueName}${this.form.route.path}`;
    }
  },
  mounted() {
    this.goBackToHomeUnlessExistUser();

    this.$store.dispatch("global/fetchHttpMethods");
    this.$store.dispatch("global/fetchHttpStatusCode");
    this.$store.dispatch("global/hideSearch", true);
  },
  components: {
    Select,
    AceEditor,
    Container
  },
  methods: {
    submit() {
      this.$v.form.$touch();

      if (this.$v.form.$error) return;

      // eslint-disable-next-line operator-linebreak
      const path =
        this.form.route.path[0] !== "/" ? `/${this.form.route.path}` : this.form.route.path;

      this.form.route = { ...this.form.route, path, active: true };
      const route = {
        ...this.form.route,
        mockUserId: this.mockUserId,
        path,
        projectId: this.project.id
      };

      this.$store.dispatch("route/createRoute", {
        route
      });
    },
    editorInit: function editorInit() {
      require("brace/ext/language_tools");
      require("brace/mode/json");
      require("brace/theme/crimson_editor");
    },
    goBackToHomeUnlessExistUser: function goBackToHomeUnlessExistUser() {
      if (!this.mockUserId) {
        this.$router.go(-2);
      }
    }
  },
  watch: {
    persistedRoute() {
      this.form = { ...this.form, route: { ...this.persistedRoute } };
    }
  },
  destroyed() {
    this.$store.dispatch("global/hideSearch", false);
  },
  beforeRouteEnter(to, from, next) {
    const { id } = to.params;
    if (!id) {
      next();
      return;
    }

    const fetchRoute = store.dispatch("route/getRoute", id);

    Promise.all([fetchRoute]).then(() => {
      next();
    });
  }
};
</script>

<style lang="scss">
@import "../assets/styles/variables";
</style>

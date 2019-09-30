<template>
  <div
    class="mx-auto px-6 py-8 w-full min-h-screen flex-grow bg-gray-100 animated slideInUp faster"
  >
    <div class="flex mb-5 items-center py-4 lg:px-4">
      <a @click="$router.go(-1)" class="cursor-pointer">
        <img class="float-left" src="@/assets/images/arrow-left.svg" alt="Voltar para rotas" />
      </a>
      <div v-if="form.active" class="text-center w-full animated pulse">
        <div
          class="p-2 bg-green-800 items-center text-green-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span
            class="flex rounded-full bg-green-500 uppercase px-2 py-1 text-xs font-bold mr-3"
          >Ativo em</span>
          <a
            class="font-semibold mr-2 text-left flex-auto"
            :href="`${baseDomain}${route.path}`"
            target="_blank"
          >({{route.httpMethod}}) {{`${baseDomain}${route.path}`}}</a>
        </div>
      </div>
    </div>

    <div class="w-full h-full">
      <form @submit.prevent="submit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="flex items-center mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="route-path"
            >Path</label>
            <input
              class="w-full block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="route-path"
              id="route-path"
              v-model="route.path"
              placeholder="/exemplo/create/"
              disabled="disabled"
            />
          </div>
          <Select
            class="md:w-1/3 px-3"
            label="Status code"
            id-property="name"
            value-property="name"
            :data="statusCodes"
            :model.sync="form.statusCode"
            :has-error="$v.form.statusCode.$error"
          ></Select>
        </div>

        <div class="flex items-center mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="route-response"
            >Response</label>
            <ace-editor
              name="route-response"
              id="route-response"
              v-model="form.response"
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
            :class="{'opacity-50': this.$v.$anyError}"
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-5"
            type="submit"
          >Salvar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AceEditor from "vue2-ace-editor";
import constants from "@/util/constants";
import { mapGetters } from "vuex";
import { required } from "vuelidate/lib/validators";
import Select from "./Common/Select";

export default {
  name: "RouteDetailForm",
  data() {
    return { form: { response: "" }, baseDomain: constants.baseDomain };
  },
  validations: {
    form: {
      statusCode: { required }
    }
  },
  computed: {
    ...mapGetters({
      userId: "user/selectedUser",
      route: "route/route",
      statusCodes: "global/statusCodes",
      routeDetail: "route/routeDetail"
    })
  },
  mounted() {
    const { userId } = this;
    const { routeId } = this.$route.params;

    this.$store.dispatch("global/fetchHttpStatusCode");
    this.$store.dispatch("route/getRoute", routeId);
    this.$store.dispatch("route/getRouteDetail", { userId, routeId });
    this.$store.dispatch("global/hideSearch", true);
  },
  watch: {
    routeDetail(newValue) {
      this.form = { ...newValue };
    }
  },
  components: {
    Select,
    AceEditor
  },
  methods: {
    submit() {
      this.$v.form.$touch();
      if (this.$v.form.$error) return;

      const { userId } = this;
      const { routeId } = this.$route.params;

      this.$store.dispatch("route/persistRouteDetail", {
        ...this.form,
        userId,
        routeId,
        active: true
      });
    },
    editorInit: function editorInit() {
      require("brace/ext/language_tools");
      require("brace/mode/json");
      require("brace/theme/crimson_editor");
      // require("brace/mode/javascript"); //language
      // require("brace/mode/less");

      // require("brace/snippets/javascript"); //snippet
    }
  },
  destroyed() {
    this.$store.dispatch("global/hideSearch", false);
  }
};
</script>

<style lang="scss">
@import "../assets/styles/variables";
</style>

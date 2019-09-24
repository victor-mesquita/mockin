<template>
  <div
    class="conteiner mx-auto px-6 py-8 w-full min-h-screen flex-grow bg-gray-100 animated slideInUp faster"
  >
    <div>
      <a @click="$router.go(-1)" class="cursor-pointer">
        <img class="float-left" src="../assets/images/arrow-left.svg" alt="Voltar para rotas" />
      </a>

      <h2 class="text-2xl text-primary font-bold mb-8 text-center">Nova rota</h2>
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
              :required="true"
              :class="{ 'border-red-500': $v.route.path.$error }"
            />
          </div>
          <Select
            class="md:w-1/3 px-3"
            label="Http Method"
            id-property="name"
            value-property="name"
            :data="httpMethods"
            :model.sync="route.httpMethod"
            :has-error="$v.route.httpMethod.$error"
          ></Select>
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
import { mapGetters } from "vuex";
import { required, maxLength } from "vuelidate/lib/validators";
import Select from "./Common/Select";

export default {
  name: "RouteForm",
  data() {
    return {
      route: {}
    };
  },
  validations: {
    route: {
      httpMethod: { required },
      path: { required, max: maxLength(500) }
    }
  },
  computed: {
    ...mapGetters({
      httpMethods: "global/httpMethods"
    })
  },
  mounted() {
    this.$store.dispatch("global/fetchHttpMethods");
  },
  components: {
    Select
  },
  methods: {
    submit() {
      this.$v.route.$touch();
      if (this.$v.route.$error) return;

      this.$store.dispatch("route/createRoute", {
        route: this.route
      });
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/variables";
</style>

<template>
  <div
    class="conteiner mx-auto px-6 py-8 w-full min-h-screen flex-grow bg-gray-100 animated slideInUp faster"
  >
    <div>
      <router-link to="/">
        <img class="float-left" src="../assets/images/arrow-left.svg" alt="Voltar para massas" />
      </router-link>

      <h2 class="text-2xl text-primary font-bold mb-8 text-center">Rotas</h2>
    </div>

    <h4
      v-show="hasError"
      v-on:click="fetchRoutes"
      class="text-xl text-primary mb-8 text-center cursor-pointer"
    >Falha ao recuperar rotas, Toque para atualizar!</h4>

    <div v-show="!hasError">
      <RouteLoading v-show="loading"></RouteLoading>

      <div v-show="!loading" class="flex flex-col mt-5">
        <RouteElement v-for="route in routes" :key="route.id" :routeId="route.id" :httpMethod="route.httpMethod" :path="route.path"></RouteElement>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import RouteElement from "./Routes/RouteElement";
import RouteLoading from "./Routes/RouteLoading";

export default {
  name: "Routes",
  components: { RouteElement, RouteLoading },
  computed: {
    ...mapGetters({
      routes: "route/routes",
      loading: "route/fetching",
      hasError: "route/hasError"
    })
  },
  mounted() {
    this.$store.dispatch("route/getRoutes", {
      userId: this.$route.params.userId
    });

    this.$store.dispatch("global/setPage", {
      pageName: "Rotas"
    });
  },
  methods: {
    fetchRoutes: function fetchRoutes() {
      this.$store.dispatch("route/getRoutes", {
        userId: this.$route.params.userId
      });
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/variables";
</style>

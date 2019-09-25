<template>
  <div
    class="mx-auto px-6 py-8 w-full min-h-screen flex-grow bg-gray-100 animated slideInUp faster"
  >
    <div>
      <router-link to="/">
        <img class="float-left" src="../assets/images/arrow-left.svg" alt="Voltar para massas" />
      </router-link>

      <div class="flex mb-8 justify-center">
        <router-link class="flex" :to="`/route/`">
          <img
            class="mr-2 w-5 cursor-pointer"
            src="../assets/images/circle-plus.svg"
            alt="Adicionar rota"
          />
        </router-link>
        <h2 class="text-2xl text-primary font-bold">
          Rotas de
          <span v-msisdn-format>{{$route.params.msisdn}}</span>
        </h2>
      </div>
    </div>

    <h4
      v-show="hasError"
      v-on:click="fetchRoutes"
      class="text-xl text-primary mb-8 text-center cursor-pointer"
    >Falha ao recuperar rotas, Toque para atualizar!</h4>

    <h4
      v-show="noRouteResult && !hasError"
      class="text-xl text-primary mb-8 text-center"
    >Nenhuma rota encontrada!</h4>

    <div v-show="!hasError">
      <RouteLoading v-show="loading"></RouteLoading>

      <div v-show="!loading" class="flex flex-col mt-5">
        <RouteElement
          v-for="route in filteredRoutes"
          :key="route.id"
          :routeId="route.id"
          :httpMethod="route.httpMethod"
          :path="route.path"
        ></RouteElement>
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
      hasError: "route/hasError",
      searchTerm: "global/searchTerm"
    }),
    filteredRoutes: function filteredRoutes() {
      return this.routes.filter(route => route.path.includes(this.searchTerm));
    },
    noRouteResult: function noRouteResult() {
      return this.filteredRoutes.length === 0;
    }
  },
  mounted() {
    this.$store.dispatch("route/getRoutes");

    this.$store.dispatch("global/setPage", {
      pageName: "Rotas"
    });
  },
  methods: {
    fetchRoutes: function fetchRoutes() {
      this.$store.dispatch("route/getRoutes");
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/variables";
</style>

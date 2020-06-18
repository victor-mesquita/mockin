<template>
  <container :title="'Gestão de rodas'" :can-add="true" :can-back="false" v-on:add="addRoute()">
    <popup
      v-show="showPopup"
      v-on:cancel="showPopup = false"
      :data="popupData"
      title="Deseja excluir essa rota?"
      message="Essa mudança afetará todas as aplicações utilizando a mesma."
    ></popup>

    <h4
      v-show="hasError"
      v-on:click="fetchRoutes"
      class="text-xl text-primary mb-8 text-center cursor-pointer"
    >Falha ao recuperar rotas, Toque para atualizar!</h4>

    <h4
      v-show="canShowNoRoutes"
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
          v-on:view="viewRoute(route)"
          v-on:delete="deleteRoute()"
        ></RouteElement>
      </div>
    </div>
  </container>
</template>

<script>
import { mapGetters } from "vuex";

import RouteElement from "./Routes/RouteElement";
import RouteLoading from "./Routes/RouteLoading";
import Popup from "@/components/Common/Popup";
import Container from "@/components/Common/Container";
import { formatMsisdn } from "@/filters/msisdnFormat";

export default {
  name: "Routes",
  components: {
    RouteElement,
    RouteLoading,
    Popup,
    Container
  },
  data() {
    return {
      showPopup: false,
      popupData: {}
    };
  },
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
    formattedMsisdn: function formattedMsisdn() {
      return formatMsisdn(this.$route.params.msisdn);
    },
    canShowNoRoutes: function canShowNoRoutes() {
      if (this.loading || this.hasError) return false;

      const hasNoRoutesToShow = this.filteredRoutes.length === 0;

      return hasNoRoutesToShow;
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
    },
    viewRoute: function viewRoute(route) {
      this.$router.push({ name: "route", params: { id: route.id } });
    },
    addRoute: function addRoute() {
      this.$router.push({ name: "route" });
    },
    deleteRoute: function deleteRoute(routeId) {
      this.showPopup = true;
      this.popupData = { routeId };
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/variables";
</style>

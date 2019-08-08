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

    <div class="flex flex-col mt-5">
      <RouteElement httpMethod="POST" path="/usageConsumption/create"></RouteElement>
    </div>
  </div>
</template>

<script>
import RouteElement from "./Routes/RouteElement";
export default {
  name: "Routes",
  components: { RouteElement }
};
</script>

<style lang="scss">
@import "../assets/styles/variables";
</style>

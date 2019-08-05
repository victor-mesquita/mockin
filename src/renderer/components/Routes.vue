<template>
  <div class="conteiner mx-auto px-6 py-8 w-full min-h-screen flex-grow bg-gray-100  animated slideInUp faster">
    <div>
      <router-link to="/">
        <img class="float-left" src="../assets/images/arrow-left.svg" alt="Voltar para massas" />
      </router-link>

      <h2 class="text-2xl text-primary font-bold mb-8 text-center">Rotas</h2>
    </div>

<div class="flex flex-col mt-5">
      <div
        class="flex mb-5 justify-between bg-white rounded p-10 select-none relative"
      >
        <span
          class="absolute top-0 left-0 bg-indigo-500 text-white uppercase px-2 py-1 text-xs font-bold"
        >POST</span>
        <span>/usageConsumption/create</span>

        <router-link to="/route/21982098605">
          <img class="cursor-pointer" src="../assets/images/settings.svg" alt="Abrir massa" />
        </router-link>
      </div>

      <div
        class="flex mb-5 justify-between bg-white rounded p-10 select-none relative"
      >
        <span
          class="absolute top-0 left-0 bg-purple-500 text-white uppercase px-2 py-1 text-xs font-bold"
        >GET</span>
        <span>/usageConsumption/123</span>
        <router-link to="/route/21982098605">
          <img class="cursor-pointer" src="../assets/images/settings.svg" alt="Abrir massa" />
        </router-link>
      </div>

      <div
        class="flex mb-5 justify-between bg-white rounded p-10 select-none relative"
      >
        <span
          class="absolute top-0 left-0 bg-red-500 text-white uppercase px-2 py-1 text-xs font-bold"
        >PUT</span>
        <span>/usageConsumption/123</span>
        <router-link to="/user/21982098605">
          <img class="cursor-pointer" src="../assets/images/settings.svg" alt="Abrir massa" />
        </router-link>
      </div>
    </div>

    <div class="flex flex-col lg:justify-around mt-5">
      <div
        class="flex mb-5 justify-between bg-white rounded p-10 select-none relative"
      >
        <span
          class="absolute top-0 left-0 bg-indigo-500 text-white uppercase px-2 py-1 text-xs font-bold"
        >DELETE</span>
        <span>/usageConsumption/123</span>
        <router-link to="/route/21982098605">
          <img class="cursor-pointer" src="../assets/images/settings.svg" alt="Abrir massa" />
        </router-link>
      </div>

      <div
        class="flex mb-5 justify-between bg-white rounded p-10 select-none relative"
      >
        <span
          class="absolute top-0 left-0 bg-purple-500 text-white uppercase px-2 py-1 text-xs font-bold"
        >POST</span>
        <span>/usageConsumption/123</span>
        <router-link to="/route/21982098605">
          <img class="cursor-pointer" src="../assets/images/settings.svg" alt="Abrir massa" />
        </router-link>
      </div>

      <div
        class="flex mb-5 justify-between bg-white rounded p-10 select-none relative"
      >
        <span
          class="absolute top-0 left-0 bg-red-500 text-white uppercase px-2 py-1 text-xs font-bold"
        >POST</span>
        <span>/usageConsumption/123</span>
        <router-link to="/route/21982098605">
          <img class="cursor-pointer" src="../assets/images/settings.svg" alt="Abrir massa" />
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "repositories",
  components: {}
};
</script>

<style lang="scss">
@import "../assets/styles/variables";
</style>

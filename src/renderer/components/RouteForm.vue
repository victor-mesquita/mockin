<template>
  <div
    class="conteiner mx-auto px-6 py-8 w-full min-h-screen flex-grow bg-gray-100 animated slideInUp faster"
  >
    <div>
      <router-link to="/user/123121">
        <img class="float-left" src="../assets/images/arrow-left.svg" alt="Voltar para massas" />
      </router-link>

      <h2 class="text-2xl text-primary font-bold mb-8 text-center">POST /usageConsumption/create/</h2>
    </div>

    <div class="w-full h-full">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="route-status">Status code</label>
          <div class="relative">
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="route-status">
              <option>200</option>
              <option>400</option>
              <option>500</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <img class="fill-current h-4 w-4" src="../assets/images/chevron-bottom.svg" alt="Status code">
            </div>
          </div>
        </div>
        <div class="w-full px-3 mt-10">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="route-body">Response</label>
          <textarea
            class="w-full block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="route-body"
            id="route-body"></textarea>
        </div>
        <div class="flex items-center mt-10">
          <button
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-5"
            type="button">Salvar</button>
          <button
            class="bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button">Cancelar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "RouteForm",
  components: {}
};
</script>

<style lang="scss">
@import "../assets/styles/variables";
</style>

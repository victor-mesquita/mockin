<template>
  <header class="font-sans w-full m-0  select-none" style="-webkit-app-region: drag">
    <div class="bg-white shadow">
      <div class="container mx-auto px-4 lg:px-20">
        <div class="flex items-center justify-between py-4">
          <div class="h-15 text-purple-600">Mock-in ⏣</div>

          <div class="lg:px-6 xl:w-3/4 xl:px-12">
            <div class="relative">
              <input
                class="transition focus:outline-none border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-900 rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal ds-input"
                type="text"
                placeholder="Buscar massa"
                autocomplete="off"
                spellcheck="false"
                role="combobox"
                dir="auto"
              />
              <div class="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
                <img src="../assets/images/search.svg" alt="Buscar massa" />
              </div>
            </div>
          </div>

          <div class="hidden sm:flex items-center">
            <a href="#" class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Home</a>
            <a
              href="#"
              class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
            >Clonar massa</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  components: {},
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
</style>

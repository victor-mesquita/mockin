<template>
  <header class="font-sans w-full m-0 select-none" style="-webkit-app-region: drag">
    <div class="bg-white shadow">
      <div class="container mx-auto px-4 lg:px-20">
        <div class="flex items-center justify-between py-4">
          <div class="h-15 text-purple-600">Mock-in ⏣</div>

          <div class="lg:px-6 xl:w-3/4 sm:w-1/2 xl:px-12">
            <Search @onSearch="onSearch" :pageName="pageName"></Search>
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
import { mapGetters } from "vuex";
import Search from "./Header/Search";

export default {
  name: "app-header",
  components: {
    Search
  },
  computed: {
    ...mapGetters({
      pageName: "global/pageName"
    })
  },
  methods: {
    onSearch: function onSearch(value) {
      this.$store.dispatch('global/doSearch', { searchTerm: value });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
</style>

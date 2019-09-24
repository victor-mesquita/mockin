<template>
  <header class="font-sans w-full m-0 select-none" style="-webkit-app-region: drag">
    <div class="bg-white shadow">
      <div class="container mx-auto px-4 lg:px-20">
        <div class="flex items-center justify-between py-4 h-20">
          <router-link class="text-purple-600 cursor-pointer flex items-center" to="/">
            <span class="mr-2">Mock-in</span>
            <img class="h-5" src="../assets/images/icons/128x128.png" alt="mockin" />
          </router-link>

          <div v-show="hideSearch == false" class="lg:px-6 sm:w-1/2">
            <Search @onSearch="onSearch" :pageName="pageName"></Search>
          </div>

          <Menu :items="menus"></Menu>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import Search from "./Header/Search";
import Menu from "./Header/Menu";

export default {
  name: "app-header",
  components: {
    Search,
    Menu
  },
  data: function headerData() {
    return {
      menus: [
        { name: "Home", link: "/" },
        { name: "Clonar massa", link: "/clone" },
        { name: "Editor KPS", link: "/kps-editor" }
      ]
    };
  },
  computed: {
    ...mapGetters({
      pageName: "global/pageName",
      hideSearch: "global/hideSearch"
    })
  },
  methods: {
    onSearch: function onSearch(value) {
      this.$store.dispatch("global/doSearch", { searchTerm: value });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
</style>

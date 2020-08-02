<template>
  <header class="font-sans w-full m-0 select-none" style="-webkit-app-region: drag">
    <div class="bg-white shadow">
      <div class="container mx-auto px-4 lg:px-20">
        <div class="flex items-center justify-between py-4 h-20">
          <div class="flex items-center">
            <router-link class="text-purple-600 cursor-pointer flex items-center mr-5" to="/">
              <img class="h-5 mr-2" src="@/assets/images/icons/128x128.png" alt="mockin" />
              <span>Mock-in</span>
            </router-link>
            <dropdown
              id-property="id"
              value-property="name"
              :items="projects"
              :model.sync="project.id"
              @input="onChangeProject"
            ></dropdown>
          </div>

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
import Search from "../Header/Search";
import Menu from "../Header/Menu";
import Dropdown from "./Dropdown";

export default {
  name: "app-header",
  components: {
    Search,
    Menu,
    Dropdown
  },
  data: function headerData() {
    return {
      menus: [
        { name: "Home", link: "/" },
        { name: "Acessos", link: "/", soon: true }
        // { name: "Editor KPS", link: "/kps-editor" }
      ]
    };
  },
  mounted() {
    this.$store.dispatch("global/fetchProjects");
  },
  watch: {
    projects() {
      // console.log("changed");
    }
  },
  computed: {
    ...mapGetters({
      pageName: "global/pageName",
      hideSearch: "global/hideSearch",
      projects: "global/projects",
      project: "global/project"
    })
  },
  methods: {
    onSearch: function onSearch(value) {
      this.$store.dispatch("global/doSearch", { searchTerm: value });
    },
    onChangeProject: function onChangeProject() {
      // console.log(projectId);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variables";
</style>

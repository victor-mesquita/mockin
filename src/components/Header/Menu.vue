<template>
  <div class="sm:flex items-center">
    <MenuItem v-for="menu in items" :key="menu.name" :name="menu.name" :link="menu.link" />
  </div>
</template>

<script>
import MenuItem from "./MenuItem";

export default {
  name: "menu-header",
  components: {
    MenuItem
  },
  props: {
    items: Array
  }
};
</script>

<style lang="scss" scoped>
</style>

<template>
  <router-link
    class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
    :to="link"
  >{{name}}</router-link>
</template>

<script>
export default {
  name: "menu-item",
  components: {},
  props: {
    name: String,
    link: String
  }
};
</script>

<style lang="scss" scoped>
</style>

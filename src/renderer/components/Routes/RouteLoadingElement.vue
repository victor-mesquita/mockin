<template>
  <vue-content-loading >
    <rect width="20" height="10" />
    <rect x="15" y="20"  width="130" height="10" />
    <rect x="370" y="20"  width="10" height="10" />
  </vue-content-loading>
</template>

<script>
import VueContentLoading from "vue-content-loading";

export default {
  name: "RouteLoadingElement",
  components: {
    VueContentLoading
  }
};
</script>

<style lang="scss" scoped>

</style>

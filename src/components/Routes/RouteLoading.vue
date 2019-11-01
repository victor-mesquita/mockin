<template>
  <div class="flex flex-col mt-5">
    <RouteLoadingElement></RouteLoadingElement>
  </div>
</template>

<script>
import RouteLoadingElement from "./RouteLoadingElement";

export default {
  name: "RouteLoading",
  components: {
    RouteLoadingElement
  }
};
</script>

<style lang="scss" scoped>

</style>

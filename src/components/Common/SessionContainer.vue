<template>
  <div
    class="w-full h-auto px-6 py-8 md:px-2  md:py-2 flex-grow bg-gray-200 flex flex-col justify-center items-center"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SessionContainer"
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variables";
</style>

<template>
  <div class="flex flex-col lg:flex-row lg:flex-wrap mt-5">
    <UserLoadingElement></UserLoadingElement>
    <UserLoadingElement></UserLoadingElement>
    <UserLoadingElement></UserLoadingElement>
  </div>
</template>

<script>
import UserLoadingElement from "./UserLoadingElement";

export default {
  name: "UserLoading",
  components: {
    UserLoadingElement
  }
};
</script>

<style lang="scss" scoped>

</style>

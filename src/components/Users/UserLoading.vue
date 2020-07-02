<template>
  <div class="flex flex-col lg:flex-row lg:flex-wrap">
    <UserLoadingElement class="mt-2"></UserLoadingElement>
    <UserLoadingElement class="mt-2"></UserLoadingElement>
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

<style lang="scss" scoped></style>

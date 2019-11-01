<template>
  <vue-content-loading class="user-card">
    <rect width="90" height="22" />
    <rect x="50" y="40" rx="4" ry="4" width="130" height="15" />
    <rect x="55" y="65" rx="4" ry="4" width="50" height="10" />
    <rect x="350" y="50"  width="25" height="25" />
  </vue-content-loading>
</template>

<script>
import VueContentLoading from "vue-content-loading";

export default {
  name: "UserLoadingElement",
  components: {
    VueContentLoading
  }
};
</script>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  .user-card {
    width: 31.333333%;
    margin-left: 1.25rem;
  }
}
.user-card {
  margin-bottom: 1.25rem;
}
</style>

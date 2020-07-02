<template>
  <vue-content-loading :width="900" preserveAspectRatio="xMaxYMid slice" class="user-card">
    <rect x="10" y="60" rx="4" ry="4" width=120 height="15" />
    <rect x="830" y="55" width="20" height="20" />
    <rect x="860" y="55" width="20" height="20" />
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
.user-card {
  width: 100%;
  height: 60px;
  border-bottom: #cbd5e0 1px solid;
}
</style>

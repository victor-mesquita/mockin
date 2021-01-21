<template>
  <div class="h-full">
    <AppHeader></AppHeader>
    <router-view> </router-view>
  </div>
</template>

<script>
import AppHeader from './Common/Header';

export default {
  name: 'layout',
  components: { AppHeader }
};
</script>

<style lang="scss">
@import '../assets/styles/variables';
</style>

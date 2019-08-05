<template>
  <div id="app">
    <AppHeader></AppHeader>
     <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/Header';

export default {
  name: 'mockin',
  components: {
    AppHeader,
  },
};
</script>

<style>
  @tailwind base;

  @tailwind components;

  @tailwind utilities;

  @import "~animate.css/animate.css"
</style>

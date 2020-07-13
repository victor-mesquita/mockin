<template>
  <div class="flex flex-col h-full" id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "mockin"
};
</script>

<style>
@tailwind base;

@tailwind components;

@tailwind utilities;

@import "~animate.css/animate.css";
</style>

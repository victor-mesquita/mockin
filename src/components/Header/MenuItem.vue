<template>
  <div>
    <router-link class="flex items-center text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4" :to="link">
      {{name}}
      <span
        v-if="soon"
        class="soon-badge ml-2 flex rounded-full bg-indigo-500 text-indigo-100 px-2 py-1 text-xs font-bold mr-3"
      >Em breve</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "menu-item",
  components: {},
  props: {
    name: String,
    link: String,
    soon: Boolean
  }
};
</script>

<style lang="scss" scoped>
.soon-badge {
  font-size: 0.5rem;
}
</style>

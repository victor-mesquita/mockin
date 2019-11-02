<template>
  <div
    class="mx-auto px-6 py-8 w-full min-h-screen flex-grow bg-gray-100 animated slideInUp faster"
  >
    <h2 class="text-2xl text-primary font-bold mb-8 text-center">Clonar massa!</h2>
  </div>
</template>

<script>
export default {
  name: "CloneUser",
  components: {},
  computed: {},
  mounted() {
    this.$store.dispatch("global/hideSearch", true);
  },
  destroyed() {
    this.$store.dispatch("global/hideSearch", false);
  },
  methods: {}
};
</script>

<style lang="scss">
@import "../assets/styles/variables";
</style>

<template>
  <div
    class="conteiner mx-auto px-6 py-8 w-full min-h-screen flex-grow bg-gray-100 animated slideInUp faster"
  >
    <h2 class="text-2xl text-primary font-bold mb-8 text-center">Editor de KPS</h2>

    <div class="w-full h-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <table class="text-left m-4 w-full" style="border-collapse:collapse">
        <thead>
          <tr>
            <th
              class="py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light"
            >Configuração</th>
            <th
              colspan="4"
              class="py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light"
            ></th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover:bg-blue-lightest">
            <td class="py-4 px-6 border-b border-grey-light">Android</td>
            <td class="py-4 px-6 border-b border-grey-light text-center">
              <img class="w-5 m-auto" src="../assets/images/pencil.svg" />
            </td>
          </tr>

          <tr class="hover:bg-blue-lightest">
            <td class="py-4 px-6 border-b border-grey-light">Android</td>
            <td class="py-4 px-6 border-b border-grey-light text-center">
              <img class="w-5 m-auto" src="../assets/images/pencil.svg" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "KpsEditor",
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

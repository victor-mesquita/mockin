<template>
  <div class="relative">
    <input
      class="transition focus:outline-none border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-900 rounded-lg bg-gray-200 py-1 pr-4 pl-10 block w-full appearance-none leading-normal ds-input"
      type="text"
      :placeholder="`Buscar ${pageName}`"
      v-on:input="$emit('onSearch', $event.target.value)"
      autocomplete="off"
      spellcheck="false"
      role="combobox"
      dir="auto"
    />
    <div class="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
      <img src="@/assets/images/search.svg" :alt="`Buscar ${pageName}`" />
    </div>
  </div>
</template>

<script>
export default {
  name: "search-header",
  components: {},
  props: {
    pageName: String
  },
};
</script>

<style lang="scss" scoped>
</style>

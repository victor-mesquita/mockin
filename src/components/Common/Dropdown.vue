<template>
  <div class="relative mr-4">
    <select
      class="appearance-none block bg-white pl-2 pr-8 py-1 text-gray-500 font-medium text-base focus:outline-none focus:text-gray-800"
      :id="label"
      :value="model"
      @input="$emit('input', $event.target.value)"
      :disabled="disabled"
    >
      <option v-for="item in items" :value="item[idProperty]" v-bind:key="item[idProperty]">{{
        item[valueProperty]
      }}</option>
    </select>
    <div
      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500"
    >
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Container",
  props: {
    label: String,
    idProperty: String,
    valueProperty: String,
    items: Array,
    model: Number,
    disabled: Boolean
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/variables";
</style>

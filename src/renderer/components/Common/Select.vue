<template>
  <div class="w-full">
    <label
      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      :for="label"
    >{{label}}</label>
    <div class="relative">
      <select
        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        :id="label"
        :value="model"
        @input="$emit('update:model', $event.target.value)"
        :disabled="disabled"
        :class="{'border-red-500': hasError}"
      >
        <option :selected="true" value>Selecione</option>
        <option
          v-for="item in data"
          :value="item[idProperty]"
          v-bind:key="item[idProperty]"
        >{{item[valueProperty]}}</option>
      </select>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
      >
        <img class="fill-current h-4 w-4" src="../../assets/images/chevron-bottom.svg" :alt="label" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    label: String,
    idProperty: String,
    valueProperty: String,
    data: Array,
    model: {
      required: true
    },
    disabled: Boolean,
    hasError: Boolean
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/variables";
</style>

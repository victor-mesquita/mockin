<template>
  <div class="mb-4 w-full">
    <label class="block text-gray-700 text-sm font-bold mb-2" :for="name">
      {{label}}
    </label>
    <input
      class="transition focus:outline-none border focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded bg-gray-200 py-2 pr-4 pl-2 block w-full appearance-none leading-normal ds-input"
      :type="type"
      :placeholder="placeholder"
      autocomplete="off"
      spellcheck="false"
      dir="auto"
      :name="name"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      :class="{ 'border-red-500': hasError }"
    />
  </div>
</template>

<script>
export default {
  name: "MockInput",
  props: {
    label: String,
    type: String,
    name: String,
    placeholder: String,
    hasError: Boolean,
    value: String
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/variables";
</style>

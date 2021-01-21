<template>
  <flex
    align="center"
    justify="center"
    class="p-4 bg-gray-50 rounded-lg rounded-b-none border-b border-gray-200"
  >
    <base-text :text="title" size="lg" color="#475569" />
  </flex>
</template>

<script>
import BaseText from '../BaseText.vue';
import Flex from '../Flex.vue';

export default {
  components: { BaseText, Flex },
  props: {
    title: { type: String, required: true }
  }
};
</script>

<style lang="scss" scoped></style>

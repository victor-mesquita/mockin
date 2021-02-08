<template>
  <flex
    align="center"
    justify="center"
    class="p-5 bg-white rounded-lg rounded-b-none border-b border-gray-200"
  >
    <base-text font="normal" :text="title" size="lg" />
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

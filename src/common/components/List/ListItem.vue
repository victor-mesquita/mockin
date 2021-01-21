<template>
  <div class="border-b border-gray-200 p-5 bg-white cursor-pointer" @click="onClick">
    <flex align="center" justify="between">
      <base-text :text="title" :showBullet="true" :bulletColor="color" />
      <img
        class="select-none"
        src="@/assets/images/arrow.svg"
        :alt="`Selecionar projeto ${title}`"
      />
    </flex>
  </div>
</template>

<script>
import BaseText from '../BaseText.vue';
import Flex from '../Flex.vue';

export default {
  components: { BaseText, Flex },
  props: {
    title: { type: String, required: true },
    color: { type: String, required: true }
  },
  methods: {
    onClick() {
      this.$emit('onClick');
    }
  }
};
</script>

<style lang="scss" scoped></style>

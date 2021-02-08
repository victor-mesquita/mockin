<template>
  <flex align="center">
    <span
      class="rounded-full h-2 w-2 flex items-center justify-center bg-black mr-2"
      v-bind:style="{ backgroundColor: bulletColor }"
      v-bind:class="{ hidden: !showBullet }"
    ></span>
    <p class="font-semibold" :class="classes" :style="styles">{{ text }}</p>
  </flex>
</template>

<script>
import Flex from './Flex.vue';

export default {
  components: { Flex },
  props: {
    text: { type: String, required: true },
    font: { type: String, default: 'normal' },
    bulletColor: { type: String },
    color: { type: String, default: '#475569' },
    showBullet: { type: Boolean },
    size: { type: String, default: 'sm' }
  },
  computed: {
    classes() {
      return {
        [`text-${this.size}`]: true,
        [`font-${this.font}`]: true
      };
    },
    styles() {
      return {
        color: this.color
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>

<template>
  <span v-bind:class="classes" class="shimmer animated flex items-center justify-center"></span>
</template>

<script>
export default {
  components: {},
  props: {
    width: { type: String, required: true, default: '1' },
    height: { type: String, required: true, default: '1' },
    type: { type: String, default: 'square' }
  },
  computed: {
    classes() {
      return {
        [`h-${this.height}`]: !!this.height,
        [`w-${this.width}`]: !!this.width,
        'rounded-full': this.type === 'circle'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.shimmer {
  &.animated {
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-name: shimmerLoading;
    background: #f6f7f8;
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background-size: 800px 104px;
    position: relative;
  }
}

@keyframes shimmerLoading {
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: 400px 0;
  }
}
</style>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    justify: {
      type: String,
      validator(value) {
        return ['start', 'end', 'center', 'between', 'around', 'evenly'].indexOf(value) !== -1;
      }
    },
    align: {
      type: String,
      validator(value) {
        return ['start', 'end', 'center', 'baseline', 'stretch'].indexOf(value) !== -1;
      }
    },
    flex: {
      type: String,
      validator(value) {
        return ['1', 'auto', 'initial', 'none'].indexOf(value) !== -1;
      }
    },
    direction: {
      type: String,
      defaultValue: 'row',
      validator(value) {
        return ['row', 'col', 'row-reverse', 'col-reverse'].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    classes() {
      return {
        flex: true,
        [`justify-${this.justify}`]: !!this.justify,
        [`items-${this.align}`]: !!this.align,
        [`flex-${this.flex}`]: !!this.flex,
        [`flex-${this.direction}`]: !!this.direction
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>

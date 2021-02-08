<template>
  <flex align="center" justify="between">
    <flex align="center" flex="1">
      <shimmer type="circle" width="2" height="2" class="mr-2"></shimmer>
      <shimmer class="self-start" width="1/4" height="3"></shimmer>
    </flex>
    <shimmer width="5" height="5"></shimmer>
  </flex>
</template>

<script>
import Shimmer from '../Shimmer.vue';
import Flex from '../Flex.vue';

export default {
  components: { Flex, Shimmer },
  props: {}
};
</script>

<style lang="scss" scoped></style>

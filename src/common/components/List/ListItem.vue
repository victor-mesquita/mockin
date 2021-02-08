<template>
  <div class="border-b border-gray-200 p-5 bg-white cursor-pointer" @click="onClick">
    <template v-if="loading">
      <list-item-loading></list-item-loading>
    </template>
    <template v-else>
      <flex align="center" justify="between">
        <base-text :text="title" :showBullet="true" :bulletColor="color" />
        <img
          class="select-none"
          src="@/assets/images/arrow.svg"
          :alt="`Selecionar projeto ${title}`"
        />
      </flex>
    </template>
  </div>
</template>

<script>
import BaseText from '../BaseText';
import ListItemLoading from './ListItemLoading';
import Flex from '../Flex';

export default {
  components: { BaseText, Flex, ListItemLoading },
  props: {
    title: { type: String },
    color: { type: String },
    loading: { type: Boolean }
  },
  methods: {
    onClick() {
      this.$emit('onClick');
    }
  }
};
</script>

<style lang="scss" scoped></style>

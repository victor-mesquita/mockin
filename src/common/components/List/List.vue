<template>
  <div>
    <list-header :title="title"></list-header>
    <template v-if="loading">
      <list-item v-for="item in 3" :key="item" :loading="loading"></list-item>
    </template>
    <template v-else>
      <list-item
        v-for="project in projects"
        :key="project.id"
        :title="project.name"
        :color="project.color"
      ></list-item>
    </template>
  </div>
</template>

<script>
import ListHeader from './ListHeader.vue';
import ListItem from './ListItem.vue';

export default {
  components: { ListHeader, ListItem },
  props: {
    projects: { type: Array, required: true, default: () => [] },
    loading: { type: Boolean },
    title: { type: String }
  }
};
</script>

<style lang="scss" scoped></style>

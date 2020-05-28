<template>
  <div
    class="shadow user-card flex w-full justify-between items-center bg-white rounded p-10 select-none relative cursor-pointer"
    v-on:click.self="$emit('view', $event.target.value)"
  >
    <!-- <span
      class="absolute top-0 left-0 bg-indigo-500 text-white uppercase px-2 py-1 text-xs font-bold"
    >{{segment}}</span> -->

    <div class="flex flex-col" v-on:click="$emit('view', $event.target.value)">
      <span>{{msisdn}}</span>
      <span class="ml-1 text-sm text-gray-600">{{plan}}</span>
    </div>

    <div class="flex w-16 justify-between">
      <img src="@/assets/images/pencil-edit.svg" alt="Editar massa" class="cursor-pointer" v-on:click="$emit('edit', $event.target.value)">
      <img src="@/assets/images/trash.svg" alt="Excluir massa" class="cursor-pointer" v-on:click="$emit('delete', userId)">
    </div>
  </div>
</template>

<script>
export default {
  name: "UserElement",
  props: {
    msisdn: String,
    // segment: String,
    plan: String,
    userId: Number
  }
};
</script>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  .user-card {
    width: 31.333333%;
    margin-left: 1.25rem;
  }
}
.user-card {
  margin-bottom: 1.25rem;
}
</style>

<template>
  <div class="shadow flex mb-5 justify-between bg-white rounded p-10 select-none relative" v-on:click.self="$emit('view', $event.target.value)">
    <span
      class="absolute top-0 left-0 bg-indigo-500 text-white uppercase px-2 py-1 text-xs font-bold"
    >{{httpMethod}}</span>
    <span class="cursor-pointer" v-on:click.self="$emit('view', $event.target.value)">{{path}}</span>

    <div class="flex w-16 justify-between">
      <img
        src="@/assets/images/trash.svg"
        alt="Excluir rota"
        class="cursor-pointer"
        v-on:click="$emit('delete', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "RouteElement",
  props: {
    httpMethod: String,
    path: String,
    routeId: Number
  }
};
</script>

<style lang="scss" scoped>
</style>

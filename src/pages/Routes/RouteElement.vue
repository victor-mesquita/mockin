<template>
  <div
    class="route-card flex w-full justify-between items-center bg-white py-4 px-5 select-none relative cursor-pointer"
    v-on:click.self="$emit('view', $event.target.value)"
  >
    <div class="flex flex-row items-around" v-on:click="$emit('view', $event.target.value)">
      <span class="h-6 rounded-full bg-indigo-100 px-2 py-1 text-xs text-indigo-400 font-bold">{{
        httpMethod
      }}</span>
      <span class="mx-8 text-indigo-400 "> | </span>
      <span class="text-md text-gray-600 truncate">{{ path }}</span>
      <span v-if="description" class="mx-8 text-indigo-400 "> | </span>
      <span class="text-md text-gray-600">{{ description }}</span>
    </div>

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
  name: 'RouteElement',
  props: {
    httpMethod: String,
    path: String,
    routeId: Number,
    description: String
  }
};
</script>

<style lang="scss" scoped>
.route-card {
  border-bottom: #cbd5e0 1px solid;
}
</style>

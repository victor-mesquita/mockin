<template>
  <div
    class="user-card flex w-full justify-between items-center bg-white py-4 px-5 select-none cursor-pointer"
    v-on:click.self="$emit('view', $event.target.value)"
  >
    <div class="flex flex-row items-around" v-on:click="$emit('view', $event.target.value)">
      <span class="rounded-full bg-indigo-100 px-2 py-1 text-xs text-indigo-400 font-bold">{{
        msisdn
      }}</span>
      <span v-if="description" class="mx-8 text-indigo-400 "> | </span>
      <span class="text-sm text-gray-600">{{ description }}</span>
    </div>

    <div class="flex w-16 justify-between">
      <img
        src="@/assets/images/pencil-edit.svg"
        alt="Editar massa"
        class="cursor-pointer"
        v-on:click="$emit('edit', $event.target.value)"
      />
      <img
        src="@/assets/images/trash.svg"
        alt="Excluir massa"
        class="cursor-pointer"
        v-on:click="$emit('delete', userId)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserElement',
  props: {
    description: String,
    msisdn: String,
    userId: Number
  }
};
</script>

<style lang="scss" scoped>
.user-card {
  border-bottom: #cbd5e0 1px solid;
}
</style>

<template>
  <div
    class="mx-auto px-6 py-8 w-full min-h-screen flex-grow bg-gray-100 animated slideInUp faster"
  >
    <div>
      <img
        class="float-left cursor-pointer"
        src="@/assets/images/arrow-left.svg"
        :alt="`Sair da tela de ${title}`"
        @click="$router.go(-1)"
        v-if="canBack"
      />

      <div class="flex mb-8 justify-center">
        <img
          v-if="canAdd"
          class="mr-2 w-5 cursor-pointer"
          src="@/assets/images/circle-plus.svg"
          :alt="`Adicionar ${title}`"
          v-on:click="$emit('add', $event.target.value)"
        />
        <h2 class="text-2xl text-primary font-bold">{{title}}</h2>
      </div>
    </div>

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Container",
  props: {
    title: String,
    canAdd: Boolean,
    canBack: Boolean
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/variables";
</style>

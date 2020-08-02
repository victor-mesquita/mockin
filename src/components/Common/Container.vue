<template>
  <div class="flex flex-col h-full flex-grow bg-gray-100">
    <div class="w-full h-auto px-6 py-8 flex-grow">
      <img
        class="float-left cursor-pointer"
        src="@/assets/images/arrow-left.svg"
        :alt="`Sair da tela de ${title}`"
        @click="$router.go(-1)"
        v-if="canBack"
      />

      <div class="flex mb-8 justify-center">
        <h2 class="text-2xl text-primary font-bold">{{title}}</h2>
      </div>

      <div v-if="canAdd" class="flex mb-8 justify-start">
        <div class="flex cursor-pointer" v-on:click="$emit('add', $event.target.value)">
          <img class="mr-2 w-5" src="@/assets/images/circle-plus.svg" :alt="`Adicionar ${title}`" />
          <p class="text-1xl">Adicionar</p>
        </div>
      </div>

      <slot></slot>
    </div>
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

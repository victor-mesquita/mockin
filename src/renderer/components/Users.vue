<template>
  <div class="conteiner mx-auto px-6 py-8 w-full min-h-screen flex-grow bg-gray-100 animated slideInUp faster">
    <h2 class="text-2xl text-primary font-bold mb-8 text-center">Massas</h2>

    <div class="flex flex-col lg:flex-row lg:justify-around mt-5">
      <div
        class="flex w-full mb-5 lg:w-1/4 lg:mb-0 justify-between bg-white rounded p-10 select-none relative"
      >
        <span
          class="absolute top-0 left-0 bg-indigo-500 text-white uppercase px-2 py-1 text-xs font-bold"
        >Pós-pago</span>
        <span>(21) 982098605</span>

        <router-link to="/user/21982098605">
          <img class="cursor-pointer" src="../assets/images/send.svg" alt="Abrir massa" />
        </router-link>
      </div>

      <div
        class="flex w-full mb-5 lg:w-1/4 lg:mb-0 justify-between bg-white rounded p-10 select-none relative"
      >
        <span
          class="absolute top-0 left-0 bg-purple-500 text-white uppercase px-2 py-1 text-xs font-bold"
        >Controle</span>
        <span>(91) 982098605</span>
        <router-link to="/user/21982098605">
          <img class="cursor-pointer" src="../assets/images/send.svg" alt="Abrir massa" />
        </router-link>
      </div>

      <div
        class="flex w-full mb-5 lg:w-1/4 lg:mb-0 justify-between bg-white rounded p-10 select-none relative"
      >
        <span
          class="absolute top-0 left-0 bg-red-500 text-white uppercase px-2 py-1 text-xs font-bold"
        >Digital</span>
        <span>(92) 982098605</span>
        <router-link to="/user/21982098605">
          <img class="cursor-pointer" src="../assets/images/send.svg" alt="Abrir massa" />
        </router-link>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row lg:justify-around mt-5">
      <div
        class="flex w-full mb-5 lg:w-1/4 lg:mb-0  justify-between bg-white rounded p-10 select-none relative"
      >
        <span
          class="absolute top-0 left-0 bg-indigo-500 text-white uppercase px-2 py-1 text-xs font-bold"
        >Pós-pago</span>
        <span>(21) 982098605</span>
        <router-link to="/user/21982098605">
          <img class="cursor-pointer" src="../assets/images/send.svg" alt="Abrir massa" />
        </router-link>
      </div>

      <div
        class="flex w-full mb-5 lg:w-1/4 lg:mb-0 justify-between bg-white rounded p-10 select-none relative"
      >
        <span
          class="absolute top-0 left-0 bg-purple-500 text-white uppercase px-2 py-1 text-xs font-bold"
        >Controle</span>
        <span>(91) 982098605</span>
        <router-link to="/user/21982098605">
          <img class="cursor-pointer" src="../assets/images/send.svg" alt="Abrir massa" />
        </router-link>
      </div>

      <div
        class="flex w-full mb-5 lg:w-1/4 lg:mb-0 justify-between bg-white rounded p-10 select-none relative"
      >
        <span
          class="absolute top-0 left-0 bg-red-500 text-white uppercase px-2 py-1 text-xs font-bold"
        >Digital</span>
        <span>(92) 982098605</span>
        <router-link to="/user/21982098605">
          <img class="cursor-pointer" src="../assets/images/send.svg" alt="Abrir massa" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'users',
  components: {},
};
</script>

<style lang="scss">
@import "../assets/styles/variables";
</style>

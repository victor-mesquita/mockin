<template>
       <div
        class="flex mb-5 justify-between bg-white rounded p-10 select-none relative"
      >
        <span
          class="absolute top-0 left-0 bg-indigo-500 text-white uppercase px-2 py-1 text-xs font-bold"
        >{{httpMethod}}</span>
        <span>{{path}}</span>

        <router-link to="/route/21982098605">
          <img class="cursor-pointer" src="../../assets/images/settings.svg" alt="Abrir rota" />
        </router-link>
      </div>
</template>

<script>
export default {
  name: "UserElement",
  props: {
    httpMethod: String,
    path: String,
  }
};
</script>

<style lang="scss" scoped>

</style>

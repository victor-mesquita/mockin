<template>
       <div
        class="flex mb-5 justify-between bg-white rounded p-10 select-none relative"
      >
        <span
          class="absolute top-0 left-0 bg-indigo-500 text-white uppercase px-2 py-1 text-xs font-bold"
        >{{httpMethod}}</span>
        <span>{{path}}</span>

        <router-link :to="`/user-route/${routeId}/`">
          <img class="cursor-pointer" src="../../assets/images/settings.svg" alt="Abrir rota" />
        </router-link>
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

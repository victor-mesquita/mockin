<template>
  <div
    class="user-card flex w-full justify-between items-center bg-white rounded p-10 select-none relative"
  >
    <span
      class="absolute top-0 left-0 bg-indigo-500 text-white uppercase px-2 py-1 text-xs font-bold"
    >{{segment}}</span>

    <div class="flex flex-col">
      <span v-msisdn-format>{{msisdn}}</span>
      <span class="ml-1 text-sm text-gray-600">{{plan}}</span>
    </div>

    <router-link :to="`/routes/`">
      <img class="cursor-pointer" src="../../assets/images/send.svg" alt="Abrir massa" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "UserElement",
  props: {
    msisdn: String,
    segment: String,
    plan: String
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

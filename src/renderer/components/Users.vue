<template>
  <div
    class="conteiner mx-auto px-6 py-8 w-full min-h-screen flex-grow bg-gray-100 animated slideInUp faster"
  >
    <h2 class="text-2xl text-primary font-bold mb-8 text-center">Massas</h2>

    <h4
      v-show="hasError"
      v-on:click="fetchUsers"
      class="text-xl text-primary mb-8 text-center cursor-pointer"
    >Falha ao recuperar massas, Toque para atualizar!</h4>

    <div v-show="!hasError">
      <UserLoading v-show="loading"></UserLoading>

      <div v-show="!loading" class="flex flex-col lg:flex-row lg:flex-wrap mt-5">
        <UserElement
          v-for="user in users"
          :key="user.msisdn"
          :msisdn="user.msisdn"
          :segment="user.segment | segment-filter"
          :plan="user.name"
        ></UserElement>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import UserElement from "./Users/UserElement";
import UserLoading from "./Users/UserLoading";

export default {
  name: "users",
  components: {
    UserElement,
    UserLoading
  },
  computed: {
    ...mapGetters({
      users: "user/users",
      loading: "user/fetching",
      hasError: "user/hasError"
    })
  },
  mounted() {
    this.$store.dispatch("user/getUsers");

    this.$store.dispatch("global/setPage", {
      pageName: "Massas"
    });
  },
  methods: {
    fetchUsers: function fetchUsers() {
      this.$store.dispatch("user/getUsers");
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/variables";

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

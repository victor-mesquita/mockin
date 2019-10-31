<template>
  <container title="Massas" :can-add="true" v-on:add="editUser({})">
    <h4
      v-show="hasError"
      v-on:click="fetchUsers"
      class="text-xl text-primary mb-8 text-center cursor-pointer"
    >Falha ao recuperar massas, Toque para atualizar!</h4>

    <h4
      v-show="noRouteResult && !hasError"
      class="text-xl text-primary mb-8 text-center"
    >Nenhum usuário encontrado!</h4>

    <div v-show="!hasError">
      <UserLoading v-show="loading"></UserLoading>

      <div v-show="!loading" class="flex flex-col lg:flex-row lg:flex-wrap mt-5">
        <UserElement
          v-for="user in filteredUsers"
          :key="user.msisdn"
          :msisdn="user.msisdn"
          :segment="user.segment.name"
          :plan="user.name"
          v-on:view="viewUser(user)"
          v-on:edit="editUser(user)"
        ></UserElement>
      </div>
    </div>
  </container>
</template>

<script>
import { mapGetters } from "vuex";

import Container from "@/components/Common/Container";
import UserElement from "./Users/UserElement";
import UserLoading from "./Users/UserLoading";

export default {
  name: "users",
  components: {
    UserElement,
    UserLoading,
    Container
  },
  computed: {
    ...mapGetters({
      users: "user/users",
      loading: "user/fetching",
      hasError: "user/hasError",
      searchTerm: "global/searchTerm"
    }),
    filteredUsers: function filteredUsers() {
      return this.users.filter(user => user.msisdn.includes(this.searchTerm));
    },
    noRouteResult: function noRouteResult() {
      return this.filteredUsers.length === 0;
    }
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
    },
    viewUser: function viewUser(user) {
      this.$store.dispatch("user/setUser", user.id);

      this.$router.push({ name: "routes", params: { msisdn: user.msisdn } });
    },
    editUser: function editUser(user) {
      this.$router.push({ name: "user", params: { id: user.id } });
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

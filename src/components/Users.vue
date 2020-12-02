<template>
  <container title="Massas" :can-add="true" v-on:add="editUser({})">
    <h4
      v-show="hasError"
      v-on:click="fetchUsers"
      class="text-xl text-primary mb-8 text-center cursor-pointer"
    >
      Falha ao recuperar massas, Toque para atualizar!
    </h4>

    <popup
      v-show="showPopup"
      v-on:cancel="showPopup = false"
      v-on:confirm="confirmDeleteUser"
      :data="popupData"
      title="Deseja execluir essa massa?"
      message="Essa mudança afetará todas as rotas associadas a essa massa."
    ></popup>

    <h4 v-show="canShowNoUsers" class="text-xl text-primary mb-8 text-center">
      Nenhum usuário encontrado!
    </h4>

    <div v-show="!hasError">
      <div v-if="!loading" class="flex flex-col mb-5">
        <UserElement
          class="mt-2"
          v-for="user in filteredUsers"
          :key="user.msisdn"
          :user-id="user.id"
          :msisdn="user.msisdn | msisdnFormat"
          :description="user.description"
          v-on:view="viewUser(user)"
          v-on:edit="editUser(user)"
          v-on:delete="deleteUser"
        ></UserElement>
      </div>
      <UserLoading v-else></UserLoading>
    </div>
  </container>
</template>

<script>
import { mapGetters } from "vuex";

import Container from "@/components/Common/Container";
import Popup from "@/components/Common/Popup";
import UserElement from "./Users/UserElement";
import UserLoading from "./Users/UserLoading";
import routeNames from "../router/routes";

export default {
  name: "users",
  components: {
    UserElement,
    UserLoading,
    Container,
    Popup
  },
  data() {
    return {
      showPopup: false,
      popupData: {}
    };
  },
  computed: {
    ...mapGetters({
      users: "mockUser/users",
      loading: "mockUser/fetching",
      hasError: "mockUser/hasError",
      searchTerm: "global/searchTerm",
      project: "global/project"
    }),
    filteredUsers: function filteredUsers() {
      return this.users.filter(user => user.msisdn.includes(this.searchTerm));
    },
    canShowNoUsers: function canShowNoUsers() {
      if (this.loading || this.hasError) return false;

      const hasNoUsersToShow = this.filteredUsers.length === 0;

      return hasNoUsersToShow;
    }
  },
  mounted() {
    if (this.project) {
      this.$store.dispatch("mockUser/getUsers", { projectId: this.project.id });
    }

    this.$store.dispatch("global/setPage", {
      pageName: "Massas"
    });
  },
  watch: {
    project() {
      if (this.project) {
        this.$store.dispatch("mockUser/getUsers", { projectId: this.project.id });
      }
    }
  },
  methods: {
    fetchUsers: function fetchUsers() {
      this.$store.dispatch("mockUser/getUsers", { projectId: this.project.id });
    },
    viewUser: function viewUser(user) {
      this.$store.dispatch("mockUser/setUser", user.id);

      this.$router.push({ name: routeNames.routes, params: { msisdn: user.msisdn } });
    },
    editUser: function editUser(user) {
      this.$router.push({
        name: routeNames.userForm,
        params: { id: user.id, projectId: this.project.id }
      });
    },
    deleteUser: function deleteUser(userId) {
      this.showPopup = true;
      this.popupData = { userId };
    },
    confirmDeleteUser: function confirmDeleteUser(data) {
      this.showPopup = false;

      this.$store.dispatch("mockUser/deleteUser", { userId: data.userId });
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/variables";
</style>

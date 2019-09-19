import Vue from "vue";
import { RepositoryFactory } from "../../../api/repositoryFactory";
const UserFactory = RepositoryFactory.user;

const getUsers = async context => {
  try {
    context.commit("FETCHING", true);

    const response = await UserFactory.list();

    const { users } = response.data;

    context.commit("USERS_FETCHED", users);
    context.commit("FETCHING", false);
  } catch (error) {
    context.commit("FETCHING", false);
    context.commit("FETCHING_FAILED", true);
  }
};

const createUser = async (context, payload) => {
  try {
    context.commit("FETCHING", true);

    const response = await UserFactory.create(payload.user);

    const { user } = response.data;

    context.commit("USER_CREATED", user);
    context.commit("FETCHING", false);

    Vue.toasted.success("Usuário criado com sucesso!").goAway(1500);
  } catch (error) {
    context.commit("FETCHING", false);
    context.commit("FETCHING_FAILED", true);

    Vue.toasted.error("Falha ao criar usuário").goAway(1500);
  }
};

export default {
  getUsers,
  createUser
};

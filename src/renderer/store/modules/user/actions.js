import { showSuccess, showApiErrors } from "@/util/toastManager";
import { RepositoryFactory } from "@/api/repositoryFactory";
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

    showSuccess("Usuário criado com sucesso!").goAway(1500);
  } catch (error) {
    context.commit("FETCHING", false);
    context.commit("FETCHING_FAILED", true);

    if (error.response.data) showApiErrors(error.response.data.errors);
  }
};

const setUser = (context, payload) => {
  context.commit("SELECTED_USER", payload);
};

export default {
  getUsers,
  createUser,
  setUser
};

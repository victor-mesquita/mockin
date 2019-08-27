import { RepositoryFactory } from "../../../api/repositoryFactory";
const UserFactory = RepositoryFactory.user;

const getUsers = async context => {
  try {
    context.commit("FETCHING_USERS", true);

    const response = await UserFactory.list();

    const { users } = response.data;

    context.commit("USERS_UPDATED", users);
    context.commit("FETCHING_USERS", false);
  } catch (error) {
    context.commit("FETCHING_USERS", false);
    context.commit("FETCHING_USERS_FAILED", true);
  }
};

export default {
  getUsers
};

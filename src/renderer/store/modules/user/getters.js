const users = state => state.users;
const fetching = state => state.fetching;
const hasError = state => state.hasError;
const didCreateUser = state => state.didCreateUser;
const selectedUser = state => state.selectedUser;

export default {
  users,
  fetching,
  hasError,
  didCreateUser,
  selectedUser
};

const USERS_FETCHED = (state, users) => {
  state.users = users;
};

const FETCHING = (state, fetching) => {
  state.fetching = fetching;
  state.hasError = false;
};

const FETCHING_FAILED = (state, hasError) => {
  state.hasError = hasError;
};

const USER_CREATED = (state, didCreateUser) => {
  state.didCreateUser = didCreateUser;
};

const SELECTED_USER = (state, selectedUser) => {
  state.selectedUser = selectedUser;
};

export default {
  USERS_FETCHED,
  FETCHING,
  FETCHING_FAILED,
  USER_CREATED,
  SELECTED_USER
};

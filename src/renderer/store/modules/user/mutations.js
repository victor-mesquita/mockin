const USERS_UPDATED = (state, users) => {
  state.users = users;
};

const FETCHING_USERS = (state, fetching) => {
  state.fetching = fetching;
  state.hasError = false;
};

const FETCHING_USERS_FAILED = (state, hasError) => {
  state.hasError = hasError;
};

export default {
  USERS_UPDATED,
  FETCHING_USERS,
  FETCHING_USERS_FAILED
};

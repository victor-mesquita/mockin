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

export default {
  USERS_FETCHED,
  FETCHING,
  FETCHING_FAILED,
  USER_CREATED
};

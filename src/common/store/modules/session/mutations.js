const USER_AUTHENTICATED = (state, authenticated) => {
  state.authenticated = authenticated;
};

const FETCHING = (state, fetching) => {
  state.fetching = fetching;
  state.hasError = false;
};

const FETCHING_FAILED = (state, hasError) => {
  state.hasError = hasError;
};

export default {
  USER_AUTHENTICATED,
  FETCHING,
  FETCHING_FAILED
};

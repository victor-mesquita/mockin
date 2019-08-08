const ROUTES_UPDATED = (state, routes) => {
  state.routes = routes;
};

const FETCHING_ROUTES = (state, fetching) => {
  state.fetching = fetching;
  state.hasError = false;
};

const FETCHING_ROUTES_FAILED = (state, hasError) => {
  state.hasError = hasError;
};

export default {
  ROUTES_UPDATED,
  FETCHING_ROUTES,
  FETCHING_ROUTES_FAILED
};

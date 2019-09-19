const ROUTES_UPDATED = (state, routes) => {
  state.routes = routes;
};

const FETCHING = (state, fetching) => {
  state.fetching = fetching;
  state.hasError = false;
};

const FETCHING_FAILED = (state, hasError) => {
  state.hasError = hasError;
};

const ROUTE_CREATED = (state, didCreateRoute) => {
  state.didCreateRoute = didCreateRoute;
};

export default {
  ROUTES_UPDATED,
  FETCHING,
  FETCHING_FAILED,
  ROUTE_CREATED
};

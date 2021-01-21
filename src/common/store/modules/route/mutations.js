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

const ROUTES_FETCHED = (state, route) => {
  state.route = route;
};

export default {
  ROUTES_UPDATED,
  FETCHING,
  FETCHING_FAILED,
  ROUTE_CREATED,
  ROUTES_FETCHED
};

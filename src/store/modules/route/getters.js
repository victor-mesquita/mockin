const routes = state => state.routes;
const fetching = state => state.fetching;
const hasError = state => state.hasError;
const didCreateRoute = state => state.didCreateRoute;
const route = state => state.route;

export default {
  routes,
  fetching,
  hasError,
  didCreateRoute,
  route
};

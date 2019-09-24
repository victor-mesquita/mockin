const routes = state => state.routes;
const fetching = state => state.fetching;
const hasError = state => state.hasError;
const didCreateRoute = state => state.didCreateRoute;
const route = state => state.route;
const userRoute = state => state.userRoute;
const didPersistUserRoute = state => state.didPersistUserRoute;

export default {
  routes,
  fetching,
  hasError,
  didCreateRoute,
  didPersistUserRoute,
  route,
  userRoute
};

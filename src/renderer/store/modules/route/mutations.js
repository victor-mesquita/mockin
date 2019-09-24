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

const USER_ROUTE_FETCHED = (state, userRoute) => {
  state.userRoute = userRoute;
};

const USER_ROUTE_PERSISTED = (state, didPersistUserRoute) => {
  state.didPersistUserRoute = didPersistUserRoute;
};


export default {
  ROUTES_UPDATED,
  FETCHING,
  FETCHING_FAILED,
  ROUTE_CREATED,
  USER_ROUTE_PERSISTED,
  ROUTES_FETCHED,
  USER_ROUTE_FETCHED
};

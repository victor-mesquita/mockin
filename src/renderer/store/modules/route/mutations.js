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

const ROUTE_DETAIL_FETCHED = (state, routeDetail) => {
  state.routeDetail = routeDetail;
};

const ROUTE_DETAIL_PERSISTED = (state, didPersistRouteDetail) => {
  state.didPersistRouteDetail = didPersistRouteDetail;
};


export default {
  ROUTES_UPDATED,
  FETCHING,
  FETCHING_FAILED,
  ROUTE_CREATED,
  ROUTE_DETAIL_PERSISTED,
  ROUTES_FETCHED,
  ROUTE_DETAIL_FETCHED
};

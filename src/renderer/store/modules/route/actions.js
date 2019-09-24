import Vue from "vue";
import { RepositoryFactory } from "@/api/repositoryFactory";
import { showApiErrors } from "@/util/toastManager";
const RouteRepository = RepositoryFactory.route;
const UserRouteRepository = RepositoryFactory.userRoute;

const getRoutes = async context => {
  try {
    context.commit("FETCHING", true);

    const response = await RouteRepository.list();

    const { routes } = response.data;

    context.commit("ROUTES_UPDATED", routes);
    context.commit("FETCHING", false);
  } catch (error) {
    context.commit("FETCHING", false);
    context.commit("FETCHING_FAILED", true);
  }
};

const getRoute = async (context, routeId) => {
  try {
    context.commit("FETCHING", true);

    const response = await RouteRepository.get(routeId);

    const { route } = response.data;

    context.commit("ROUTES_FETCHED", route);
    context.commit("FETCHING", false);
  } catch (error) {
    context.commit("FETCHING", false);
    context.commit("FETCHING_FAILED", true);
  }
};

const createRoute = async (context, payload) => {
  try {
    context.commit("FETCHING", true);

    const response = await RouteRepository.create(payload.route);

    const { route } = response.data;

    context.commit("ROUTE_CREATED", route != null);
    context.commit("FETCHING", false);

    Vue.toasted.success("Rota criada com sucesso!").goAway(1500);
  } catch (error) {
    context.commit("FETCHING", false);
    context.commit("FETCHING_FAILED", true);

    if (error.response.data) showApiErrors(error.response.data.errors);
  }
};

const getUserRoute = async (context, { userId, routeId }) => {
  try {
    context.commit("FETCHING", true);

    const response = await UserRouteRepository.get(userId, routeId);

    const { userRoute } = response.data;

    context.commit("USER_ROUTE_FETCHED", userRoute);
    context.commit("FETCHING", false);
  } catch (error) {
    context.commit("FETCHING", false);
    context.commit("FETCHING_FAILED", true);
  }
};

const persistUserRoute = async (context, payload) => {
  try {
    context.commit("FETCHING", true);
    let response = {};

    if (payload.id) {
      response = await UserRouteRepository.update(payload);
    } else {
      response = await UserRouteRepository.create(payload);
    }
    const { userRoute } = response.data;

    context.commit("USER_ROUTE_PERSISTED", true);
    context.commit("USER_ROUTE_FETCHED", userRoute);
    context.commit("FETCHING", false);

    Vue.toasted.success("Rota criada com sucesso!").goAway(1500);
  } catch (error) {
    context.commit("FETCHING", false);
    context.commit("FETCHING_FAILED", true);

    if (error.response.data) showApiErrors(error.response.data.errors);
  }
};

export default {
  getRoutes,
  createRoute,
  getRoute,
  getUserRoute,
  persistUserRoute
};

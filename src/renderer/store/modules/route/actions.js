import Vue from "vue";
import { RepositoryFactory } from "@/api/repositoryFactory";
import { showApiErrors } from "@/util/toastManager";
const RouteRepository = RepositoryFactory.route;
const RouteDetailRepository = RepositoryFactory.routeDetail;

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

    if (error.response && error.response.data) showApiErrors(error.response.data.errors);
  }
};

const getRouteDetail = async (context, { userId, routeId }) => {
  try {
    context.commit("FETCHING", true);

    const response = await RouteDetailRepository.get(userId, routeId);

    const { routeDetail } = response.data;

    context.commit("ROUTE_DETAIL_FETCHED", routeDetail);
    context.commit("FETCHING", false);
  } catch (error) {
    context.commit("FETCHING", false);
    context.commit("FETCHING_FAILED", true);
  }
};

const persistRouteDetail = async (context, payload) => {
  try {
    context.commit("FETCHING", true);
    let response = {};

    if (payload.id) {
      response = await RouteDetailRepository.update(payload);
    } else {
      response = await RouteDetailRepository.create(payload);
    }
    const { routeDetail } = response.data;

    context.commit("ROUTE_DETAIL_PERSISTED", true);
    context.commit("ROUTE_DETAIL_FETCHED", routeDetail);
    context.commit("FETCHING", false);

    Vue.toasted.success("Rota criada com sucesso!").goAway(1500);
  } catch (error) {
    context.commit("FETCHING", false);
    context.commit("FETCHING_FAILED", true);

    if (error.response && error.response.data) showApiErrors(error.response.data.errors);
  }
};

export default {
  getRoutes,
  createRoute,
  getRoute,
  getRouteDetail,
  persistRouteDetail
};

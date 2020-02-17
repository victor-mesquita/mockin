import Vue from "vue";
import { RepositoryFactory } from "@/api/repositoryFactory";
import { asyncHandler } from "@/util/vuexAsync";
import { showApiErrors } from "@/util/toastManager";
const RouteRepository = RepositoryFactory.route;
const RouteDetailRepository = RepositoryFactory.routeDetail;

const getRoutes = async context => {
  asyncHandler(context, async () => {
    const response = await RouteRepository.list();

    const { routes } = response.data;

    context.commit("ROUTES_UPDATED", routes);
  });
};

const getRouteDetail = async (context, { userId, routeId }) => {
  asyncHandler(context, async () => {
    const response = await RouteDetailRepository.get(userId, routeId);

    const { routeDetail } = response.data;

    if (routeDetail) {
      context.commit("ROUTE_DETAIL_FETCHED", routeDetail);
    }
  });
};

const persistRouteDetail = async (context, payload) => {
  asyncHandler(context, async () => {
    try {
      let response = {};

      if (payload.id) {
        response = await RouteDetailRepository.update(payload);
      } else {
        response = await RouteDetailRepository.create(payload);
      }
      const { routeDetail } = response.data;

      context.commit("ROUTE_DETAIL_FETCHED", routeDetail);
    } catch (error) {
      if (error.response && error.response.data) {
        showApiErrors(error.response.data.errors);
      }
    }
  });
};

const getRoute = async (context, routeId) => {
  asyncHandler(context, async () => {
    const response = await RouteRepository.get(routeId);

    const { route } = response.data;

    context.commit("ROUTES_FETCHED", route);
  });
};

const createRoute = async (context, payload) => {
  asyncHandler(context, async () => {
    try {
      const routeDoNotExists = !payload.route.id;
      let persistedRoute = null;

      if (routeDoNotExists) {
        const response = await RouteRepository.create(payload.route);
        persistedRoute = response.data.route;
      } else {
        const response = await RouteRepository.update(payload.route);
        persistedRoute = response.data.route;
      }

      await context.dispatch("persistRouteDetail", { ...payload.routeDetail, routeId: persistedRoute.id });

      context.commit("ROUTE_CREATED", persistedRoute != null);

      Vue.toasted.success("Rota criada com sucesso!").goAway(1500);
    } catch (error) {
      if (error.response && error.response.data) {
        showApiErrors(error.response.data.errors);
      }
    }
  });
};

export default {
  getRoutes,
  createRoute,
  getRoute,
  getRouteDetail,
  persistRouteDetail
};

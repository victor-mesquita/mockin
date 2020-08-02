import { RepositoryFactory } from "@/api/repositoryFactory";
import { asyncHandler } from "@/util/vuexAsync";
import { showApiErrors, showError, showSuccess } from "@/util/toastManager";
const RouteRepository = RepositoryFactory.route;

const getRoutes = async (context, payload) => {
  asyncHandler(context, async () => {
    const response = await RouteRepository.list(payload.msisdn);

    const { routes } = response.data;

    context.commit("ROUTES_UPDATED", routes);
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

      context.commit("ROUTE_CREATED", persistedRoute != null);

      showSuccess("Rota criada com sucesso!");
    } catch (error) {
      showApiErrors(error);
    }
  });
};

const deleteRoute = async (context, payload) => {
  asyncHandler(context, async () => {
    if (!payload.routeId) return;

    const response = await RouteRepository.delete(payload.routeId);

    if (response.data) {
      const currentRoutes = [...context.state.routes];
      const routeIndexToRemove = currentRoutes.findIndex(route => route.id === payload.routeId);
      const filteredRoutes = [
        ...currentRoutes.splice(0, routeIndexToRemove),
        ...currentRoutes.splice(routeIndexToRemove + 1)
      ];

      context.commit("ROUTES_UPDATED", filteredRoutes);
    } else {
      showError("Falha ao excluir usuário!");
    }
  });
};

export default {
  getRoutes,
  createRoute,
  getRoute,
  deleteRoute
};

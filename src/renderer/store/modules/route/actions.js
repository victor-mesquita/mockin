import { RepositoryFactory } from "../../../api/repositoryFactory";
const RouteFactory = RepositoryFactory.route;

const getRoutes = async (context, payload) => {
  try {
    context.commit("FETCHING_ROUTES", true);

    const response = await RouteFactory.list(payload.userId);

    context.commit("ROUTES_UPDATED", response.data);
    context.commit("FETCHING_ROUTES", false);
  } catch (error) {
    context.commit("FETCHING_ROUTES", false);
    context.commit("FETCHING_ROUTES_FAILED", true);
  }
};

export default {
  getRoutes
};

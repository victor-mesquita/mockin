import { RepositoryFactory } from "../../../api/repositoryFactory";
const RouteFactory = RepositoryFactory.route;

const getRoutes = async context => {
  try {
    context.commit("FETCHING_ROUTES", true);

    const response = await RouteFactory.list();

    const { routes } = response.data;

    context.commit("ROUTES_UPDATED", routes);
    context.commit("FETCHING_ROUTES", false);
  } catch (error) {
    context.commit("FETCHING_ROUTES", false);
    context.commit("FETCHING_ROUTES_FAILED", true);
  }
};

export default {
  getRoutes
};

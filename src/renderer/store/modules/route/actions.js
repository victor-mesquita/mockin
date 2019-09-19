import Vue from "vue";
import { RepositoryFactory } from "../../../api/repositoryFactory";
const RouteFactory = RepositoryFactory.route;

function showErrors(errors) {
  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(errors)) {
    Vue.toasted.error(`${key} ${errors[key]}`).goAway(1500);
  }
}

const getRoutes = async context => {
  try {
    context.commit("FETCHING", true);

    const response = await RouteFactory.list();

    const { routes } = response.data;

    context.commit("ROUTES_UPDATED", routes);
    context.commit("FETCHING", false);
  } catch (error) {
    context.commit("FETCHING", false);
    context.commit("FETCHING_FAILED", true);
  }
};

const createRoute = async (context, payload) => {
  try {
    context.commit("FETCHING", true);

    const response = await RouteFactory.create(payload.route);

    const { route } = response.data;

    context.commit("ROUTE_CREATED", route);
    context.commit("FETCHING", false);

    Vue.toasted.success("Rota criada com sucesso!").goAway(1500);
  } catch (error) {
    context.commit("FETCHING", false);
    context.commit("FETCHING_FAILED", true);

    if (error.response.data) showErrors(error.response.data.errors);
  }
};

export default {
  getRoutes,
  createRoute
};

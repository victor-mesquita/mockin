import repository from "./repository";

const routesResource = "/routes";
const routeResource = "/route";

export default {
  get(routeId) {
    return repository.get(`${routeResource}/${routeId}`);
  },
  list(userId) {
    return repository.get(`${routesResource}/${userId}`);
  }
};

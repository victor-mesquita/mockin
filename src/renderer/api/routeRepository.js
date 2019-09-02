import repository from "./repository";

const routeResource = "/route/";

export default {
  get(routeId) {
    return repository.get(`${routeResource}/${routeId}`);
  },
  list() {
    return repository.get(`${routeResource}`);
  }
};

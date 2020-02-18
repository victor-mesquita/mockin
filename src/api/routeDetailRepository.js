import repository from "./repository";

const resource = "/routeDetail/";
export default {
  get(userId, routeId) {
    return repository.get(`${resource}${userId}/${routeId}`);
  },
  create(routeDetail) {
    return repository.post(`${resource}`, { routeDetail });
  },
  update(routeDetail) {
    return repository.put(`${resource}`, { routeDetail });
  },
  delete(routeDetailId) {
    return repository.put(`${resource}${routeDetailId}`);
  }
};

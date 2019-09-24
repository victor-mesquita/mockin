import repository from "./repository";

const resource = "/userRoute/";
export default {
  get(userId, routeId) {
    return repository.get(`${resource}${userId}/${routeId}`);
  },
  create(userRoute) {
    return repository.post(`${resource}`, { userRoute });
  },
  update(userRoute) {
    return repository.put(`${resource}`, { userRoute });
  }
};

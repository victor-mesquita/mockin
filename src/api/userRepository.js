import repository from "./repository";

const resource = "/user/";
export default {
  list() {
    return repository.get(`${resource}`);
  },

  get(id) {
    return repository.get(`${resource}${id}`);
  },

  create(user) {
    return repository.post(`${resource}`, { user });
  },

  update(user) {
    return repository.put(`${resource}`, { user });
  },

  delete(userId) {
    return repository.delete(`${resource}${userId}`);
  }
};

import repository from "./repository";

const resource = "/mock-user/";
export default {
  list(projectId) {
    return repository.get(`${resource}${projectId}`);
  },

  get(id) {
    return repository.get(`${resource}${id}`);
  },

  create(user) {
    return repository.post(`${resource}`, { mock_user: user });
  },

  update(user) {
    return repository.put(`${resource}`, { mock_user: user });
  },

  delete(userId) {
    return repository.delete(`${resource}${userId}`);
  }
};

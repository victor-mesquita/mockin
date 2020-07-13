import repository from "./repository";

const resource = "/session/";
export default {
  login(user) {
    return repository.post(`${resource}`, { user });
  },
  logout() {
    return repository.delete(`${resource}`);
  }
};

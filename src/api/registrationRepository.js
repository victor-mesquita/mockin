import repository from "./repository";

const resource = "/registration/";
export default {
  create(user) {
    return repository.post(`${resource}`, { user });
  },
};

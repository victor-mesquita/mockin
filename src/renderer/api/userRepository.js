import repository from "./repository";

const resource = "/users/";
export default {
  get() {
    return repository.get(`${resource}`);
  },
};

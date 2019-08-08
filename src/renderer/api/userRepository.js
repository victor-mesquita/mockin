import repository from "./repository";

const resource = "/users/";
export default {
  list() {
    return repository.get(`${resource}`);
  },
};

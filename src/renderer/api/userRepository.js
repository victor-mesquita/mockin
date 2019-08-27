import repository from "./repository";

const resource = "/user/";
export default {
  list() {
    return repository.get(`${resource}`);
  },
};

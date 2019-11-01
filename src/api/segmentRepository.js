import repository from "./repository";

const resource = "/segment/";
export default {
  list() {
    return repository.get(`${resource}`);
  },
};

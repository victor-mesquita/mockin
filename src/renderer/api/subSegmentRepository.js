import repository from "./repository";

const resource = "/subsegment/";
export default {
  list(segmentId) {
    return repository.get(`${resource}`, { params: { segmentId } });
  }
};

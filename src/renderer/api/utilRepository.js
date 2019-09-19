import httpMethods from "../util/httpMethods";

export default {
  listHttpMethods() {
    return Promise.resolve(httpMethods);
  }
};

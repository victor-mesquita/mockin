import httpMethods from '../util/httpMethods';
import statusCodes from '../util/httpCodes';

export default {
  listHttpMethods() {
    return Promise.resolve(httpMethods);
  },
  listStatusCodes() {
    return Promise.resolve(statusCodes);
  }
};

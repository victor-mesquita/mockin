const pageName = state => state.pageName;
const searchTerm = state => state.searchTerm;
const hideSearch = state => state.hideSearch;
const httpMethods = state => state.httpMethods;
const statusCodes = state => state.statusCodes;

export default {
  pageName,
  searchTerm,
  hideSearch,
  httpMethods,
  statusCodes
};

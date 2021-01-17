const pageName = state => state.pageName;
const searchTerm = state => state.searchTerm;
const hideSearch = state => state.hideSearch;
const httpMethods = state => state.httpMethods;
const statusCodes = state => state.statusCodes;
const project = state => state.project;
const projects = state => state.projects;

export default {
  pageName,
  searchTerm,
  hideSearch,
  httpMethods,
  statusCodes,
  project,
  projects
};

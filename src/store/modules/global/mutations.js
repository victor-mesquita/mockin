const GLOBAL_PAGE = (state, pageName) => {
  state.pageName = pageName;
};

const GLOBAL_SEARCH_TERM = (state, searchTerm) => {
  state.searchTerm = searchTerm;
};

const GLOBAL_HIDE_SEARCH = (state, hideSearch) => {
  state.hideSearch = hideSearch;
};

const HTTP_METHODS = (state, httpMethods) => {
  state.httpMethods = httpMethods;
};

const HTTP_STATUS_CODES = (state, statusCodes) => {
  state.statusCodes = statusCodes;
};

const GLOBAL_PROJECT = (state, project) => {
  state.project = project;
};

const PROJECTS = (state, projects) => {
  state.projects = projects;
};

export default {
  GLOBAL_PAGE,
  GLOBAL_SEARCH_TERM,
  GLOBAL_HIDE_SEARCH,
  HTTP_METHODS,
  HTTP_STATUS_CODES,
  GLOBAL_PROJECT,
  PROJECTS
};

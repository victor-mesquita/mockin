import { RepositoryFactory } from "../../../api/repositoryFactory";
const UtilRepository = RepositoryFactory.util;

const setPage = (context, payload) => {
  context.commit("GLOBAL_PAGE", payload.pageName);
  context.commit("GLOBAL_SEARCH_TERM", "");
};

const doSearch = (context, payload) => {
  context.commit("GLOBAL_SEARCH_TERM", payload.searchTerm);
};

const hideSearch = (context, payload) => {
  context.commit("GLOBAL_HIDE_SEARCH", payload);
};

const fetchHttpMethods = async (context) => {
  try {
    const methods = await UtilRepository.listHttpMethods();

    context.commit("HTTP_METHODS", methods);
  } catch (error) {
    context.commit("HTTP_METHODS", []);
  }
};

const fetchHttpStatusCode = async (context) => {
  try {
    const statusCodes = await UtilRepository.listStatusCodes();

    context.commit("HTTP_STATUS_CODES", statusCodes);
  } catch (error) {
    context.commit("HTTP_STATUS_CODES", []);
  }
};

export default {
  setPage,
  doSearch,
  hideSearch,
  fetchHttpMethods,
  fetchHttpStatusCode
};
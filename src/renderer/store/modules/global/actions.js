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

export default {
  setPage,
  doSearch,
  hideSearch
};

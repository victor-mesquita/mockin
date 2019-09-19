import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
  pageName: "",
  searchTerm: "",
  hideSearch: false,
  httpMethods: []
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};

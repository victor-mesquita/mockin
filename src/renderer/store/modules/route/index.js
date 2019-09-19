import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
  routes: [],
  fetching: false,
  hasError: false,
  didCreateRoute: false
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};

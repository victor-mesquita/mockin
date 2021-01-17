import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
  authenticated: false,
  fetching: false,
  hasError: false,
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};

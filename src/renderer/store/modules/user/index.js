import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
  users: [],
  fetching: false,
  hasError: false,
  didCreateUser: false,
  selectedUser: null
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};

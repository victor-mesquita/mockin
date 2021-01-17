import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import globaModule from "./modules/global";
import mockUserModule from "./modules/mockUser";
import routeModule from "./modules/route";
import sessionModule from "./modules/session";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global: globaModule,
    mockUser: mockUserModule,
    route: routeModule,
    session: sessionModule,
  },
  plugins: [
    createPersistedState()
  ],
  strict: process.env.NODE_ENV !== "production"
});

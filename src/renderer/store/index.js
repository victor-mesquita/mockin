import Vue from 'vue';
import Vuex from 'vuex';
import { createPersistedState } from 'vuex-electron';

import globaModule from './modules/global';
import userModule from './modules/user';
import routeModule from './modules/route';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global: globaModule,
    user: userModule,
    route: routeModule
  },
  plugins: [
    createPersistedState(),
    // createSharedMutations(),
  ],
  strict: process.env.NODE_ENV !== 'production',
});

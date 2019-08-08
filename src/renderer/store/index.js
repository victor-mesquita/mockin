import Vue from 'vue';
import Vuex from 'vuex';
import { createPersistedState } from 'vuex-electron';

import userModule from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: userModule
  },
  plugins: [
    createPersistedState(),
    // createSharedMutations(),
  ],
  strict: process.env.NODE_ENV !== 'production',
});

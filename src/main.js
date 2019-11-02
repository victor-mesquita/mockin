import Vue from "vue";
import axios from "axios";
import Vuelidate from "vuelidate";
import Toasted from "vue-toasted";
import VueTheMask from "vue-the-mask";

import './registerServiceWorker';
import "./assets/styles/main.scss";

import App from "./App";
import router from "./router";
import store from "./store";
import directives from "./directives";
import filters from "./filters";

Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(Toasted);
Vue.use(VueTheMask);

/* eslint-disable no-new */
new Vue({
  components: { App },
  directives,
  filters,
  router,
  store,
  template: "<App/>"
}).$mount("#app");

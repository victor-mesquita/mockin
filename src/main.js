import Vue from "vue";

import './registerServiceWorker';
import "./assets/styles/main.scss";

import App from "./App";
import router from "./router";
import store from "./store";
import directives from "./directives";
import filters from "./filters";
import registerThirdPartyServices from "./thirdPartyServices";
import tokenMiddleware from './middlewares/tokenMiddleware';

registerThirdPartyServices(Vue);
tokenMiddleware(router);

/* eslint-disable no-new */
new Vue({
  components: { App },
  directives,
  filters,
  router,
  store,
  template: "<App/>"
}).$mount("#app");

import Vue from 'vue';

import './util/service-worker/register';
import './assets/styles/main.scss';

import App from './App';
import router from './router';
import store from './common/store';
import directives from './common/directives';
import filters from './common/filters';
import registerThirdPartyServices from './common/vue-third-party';
import routerMiddlewares from './router/middleware';

registerThirdPartyServices();
routerMiddlewares.forEach(middleware => middleware(router));

new Vue({
  components: { App },
  directives,
  filters,
  router,
  store,
  template: '<App/>'
}).$mount('#app');

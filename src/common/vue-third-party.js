import axios from 'axios';
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import Toasted from 'vue-toasted';
import VueTheMask from 'vue-the-mask';

function registerThirdPartyServices() {
  Vue.prototype.$http = axios;
  Vue.http = Vue.prototype.$http;
  Vue.config.productionTip = false;

  const dependencies = [Vuelidate, Toasted, VueTheMask];

  dependencies.forEach(Vue.use);
}

export default registerThirdPartyServices;

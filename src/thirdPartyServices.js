import axios from "axios";
import Vuelidate from "vuelidate";
import Toasted from "vue-toasted";
import VueTheMask from "vue-the-mask";

function registerThirdPartyServices(Vue) {
  Vue.http = Vue.prototype.$http = axios;
  Vue.config.productionTip = false;

  const dependencies = [Vuelidate, Toasted, VueTheMask];

  dependencies.forEach((dependency) => {
    Vue.use(dependency);
  });
}

export default registerThirdPartyServices;

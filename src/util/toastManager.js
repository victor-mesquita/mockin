import Vue from "vue";
const toastLifeTime = 3000;

function showSuccess(message) {
  Vue.toasted.success(message).goAway(toastLifeTime);
}

function showError(message) {
  Vue.toasted.error(message).goAway(toastLifeTime);
}

function showApiErrors(errors) {
  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(errors)) {
    Vue.toasted.error(`${key} ${errors[key]}`).goAway(toastLifeTime);
  }
}

export { showApiErrors, showSuccess, showError };

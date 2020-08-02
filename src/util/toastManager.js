import Vue from "vue";

const toastedOptions = {
  duration: 3000,
  singleton: true
};


function showSuccess(message) {
  Vue.toasted.success(message, toastedOptions);
}

function showError(message) {
  Vue.toasted.error(message, toastedOptions);
}

function showApiValidationErrors(errors) {
  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(errors)) {
    Vue.toasted.error(`${key} ${errors[key]}`, toastedOptions);
  }
}

function showApiErrors(errorObject) {
  let successToShowError = false;
  const apiHaveSendSomeMessages = errorObject.response && errorObject.response.data;

  if (!errorObject.response || !apiHaveSendSomeMessages) {
    showError("Não foi possível realizar sua requisição, Tente novamente mais tarde!");
  }

  const { message, errors, error } = errorObject.response.data;

  if (message) {
    showError(message);
  } else if (error) {
    showError(error.message);
  } else {
    showApiValidationErrors(errors);
  }

  successToShowError = true;

  return successToShowError;
}

export { showApiErrors, showSuccess, showError };

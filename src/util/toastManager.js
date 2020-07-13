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

function showApiLevelMessages(errorObject, error) {
  if (errorObject.errors) {
    showApiValidationErrors(errorObject.errors);
  } else {
    showError(error.response.data.error.message);
  }
}

function showApiErrors(error) {
  let successToShowError = false;

  if (!error.response && !error.response.data && !error.response.data.message) {
    showError("Não foi possível realizar sua requisição, Tente novamente mais tarde!");
  }

  const { message } = error.response.data;

  const errorObject = error.response.data.error;

  if (errorObject) {
    showApiLevelMessages(errorObject, error);
  } else {
    showError(message);
  }

  successToShowError = true;

  return successToShowError;
}

export { showApiErrors, showSuccess, showError };

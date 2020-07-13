import { showError } from "../util/toastManager";

function registerTokenInterceptor(axios) {
  axios.interceptors.request.use((config) => {
    const token = window.localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    config.params = { ...config.params, key: process.env.VUE_APP_API_KEY };

    return config;
  }, (err) => Promise.reject(err));

  axios.interceptors.response.use((response) => response, (error) => {
    if (error.response.status === 401) {
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('auth-user');

      showError('Sua sessão expirou!');
    }
    return Promise.reject(error);
  });
}

export default registerTokenInterceptor;

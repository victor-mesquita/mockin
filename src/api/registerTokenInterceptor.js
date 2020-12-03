import { showError } from "../util/toastManager";
import sessionRepository from './sessionRepository';

async function refreshToken() {
  const savedRenewalToken = window.localStorage.getItem('renewalToken');
  try {
    const { accessToken, renewalToken } = await sessionRepository.renew(savedRenewalToken);
    window.localStorage.setItem('token', accessToken);
    window.localStorage.setItem('renewalToken', renewalToken);

    return accessToken;
  } catch (error) {
    if (error.response.status === 401) {
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('auth-user');

      showError('Sua sessão expirou!');
      window.location = '/';
    }
  }
  return null;
}

function registerRefeshTokenListener(axios) {
  axios.interceptors.response.use((response) => response, (error) => {
    if (error.response.status === 401 && error.config.url !== '/mockinapi/session/renew') {
      refreshToken()
        .then((newToken) => {
          if (newToken) {
            const { config } = error;
            config.headers.Authorization = `Bearer ${newToken}`;

            return new Promise((resolve, reject) => {
              axios.request(config).then(response => {
                resolve(response);
              }).catch((error) => {
                reject(error);
              });
            });
          }

          return Promise.reject(error);
        });
    }
    return Promise.reject(error);
  });
}


function registerBearerTokenListener(axios) {
  axios.interceptors.request.use((config) => {
    const token = window.localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    config.params = { ...config.params, key: process.env.VUE_APP_API_KEY };

    return config;
  }, (err) => Promise.reject(err));
}

function registerTokenInterceptor(axios) {
  registerBearerTokenListener(axios);
  registerRefeshTokenListener(axios);
}

export default registerTokenInterceptor;

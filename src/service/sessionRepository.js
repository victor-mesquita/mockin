import axios from 'axios';
import constants from '@/util/constants';

const resource = '/session/';
const baseURL = `${constants.baseDomain}${constants.apiPath}`;

const axiosInstance = axios.create({
  baseURL
});

export default {
  login(user) {
    return axiosInstance.post(`${resource}`, { user });
  },
  logout() {
    return axiosInstance.delete(`${resource}`);
  },
  renew(refreshToken) {
    return axiosInstance.post(`${resource}renew`, {}, { headers: { Authorization: refreshToken } });
  }
};

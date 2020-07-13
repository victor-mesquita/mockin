import axios from "axios";
import constants from "@/util/constants";
import registerTokenInterceptor from './registerTokenInterceptor';

const baseURL = `${constants.baseDomain}${constants.apiPath}`;

const axiosInstance = axios.create({
  baseURL
});

registerTokenInterceptor(axiosInstance);

export default axiosInstance;

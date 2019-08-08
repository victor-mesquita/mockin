import axios from "axios";

const baseDomain = "http://demo1773516.mockable.io/";

const baseURL = `${baseDomain}`;

export default axios.create({
  baseURL
});

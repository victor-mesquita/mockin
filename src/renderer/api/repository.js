import axios from "axios";

const baseDomain = "http://0.0.0.0:4000/";

const baseURL = `${baseDomain}`;

export default axios.create({
  baseURL
});

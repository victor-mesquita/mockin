import axios from "axios";
import constants from "@/util/constants";

const baseURL = `${constants.baseDomain}${constants.apiPath}`;

export default axios.create({
  baseURL
});

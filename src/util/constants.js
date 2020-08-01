const constants = {
  baseDomain:
    process.env.NODE_ENV === "production" ? "https://mockin.app" : "http://10.3.102.17:4000",
  baseDomainMocks:
    process.env.NODE_ENV === "production" ? "https://api.mockin.app" : "http://10.3.102.17:4000",
  apiPath: "/mockinapi/",
  dynamicApiPath: "/api/"
};

export default constants;

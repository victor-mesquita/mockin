const constants = {
  baseDomain:
    process.env.NODE_ENV === "production" ? "https://mockin.app" : "http://localhost:4000",
  baseDomainMocks:
    process.env.NODE_ENV === "production" ? "https://api.mockin.app" : "http://localhost:4000",
  apiPath: "/api/"
};

export default constants;

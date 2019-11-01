// eslint-disable-next-line import/no-extraneous-dependencies
const Deployer = require("ssh-deploy-release");

const options = {
  localPath: "build",
  host: "10.2.1.194",
  username: "admin",
  password: "srv21393@brq2019",
  deployPath: "/var/www/doczin.dev/public_html/"
};

const deployer = new Deployer(options);
deployer.deployRelease(() => {
  console.log("Deploy successful!");
});

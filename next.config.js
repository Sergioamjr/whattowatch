const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");
const withImages = require("next-images");
dotenvLoad();
const withNextEnv = nextEnv();

module.exports = withNextEnv(
  withImages({
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.node = {
          fs: "empty"
        };
      }

      return config;
    },
    distDir: "build"
  })
);

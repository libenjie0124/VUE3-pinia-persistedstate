const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        fs: false,
        path: require.resolve("path-browserify"),
        util: false,
        crypto: false,
        vm: false,
        request: false,
        yamlparser: false,
      },
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        config: {
          path: __dirname,
        },
      },
    },
  },
});

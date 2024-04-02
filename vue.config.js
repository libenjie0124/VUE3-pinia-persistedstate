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
        // 在这里直接配置 postcss 相关的选项
        postcssOptions: {
          plugins: {
            // 这里是 PostCSS 插件的配置
          },
          // 其他 postcss 选项
        },
      },
    },
  },

});

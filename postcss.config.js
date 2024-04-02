module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 16, // 基准字体大小
      propList: ["*"], // 需要转换的属性，* 表示全部属性
      selectorBlackList: [], // 不进行转换的选择器
      minPixelValue: 2, // 小于 2px 不转换
    },
  },
};

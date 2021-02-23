/*
 * @,@Description: ,: 
 * @,@Version: ,: 1.0.0
 * @,@Author: ,: perfect
 * @,@Date: ,: 2021-02-22 17:51:08
 * @,@LastEditors: ,: perfect
 * @,@LastEditTime: ,: 2021-02-22 17:56:22
 */
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vueDataV/" : "/",
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    port: 8080,
    // proxy: {
    //   "/api": {
    //     target: "https://api.github.com",
    //     changeOrigin: true,
    //     ws: false,
    //     pathRewrite: {
    //       "^/api": ""
    //     }
    //   }
    // }
  },
  configureWebpack: {
    // 把原本需要写在webpack.config.js中的配置代码 写在这里 会自动合并
    externals: {
     'jquery' : '$',
     'echarts': 'echarts',
     'axios' : 'axios'
    }
  }
};
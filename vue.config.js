const path = require('path');

module.exports = {
  outputDir: 'dist',  // 生产环境构建输出目录
  assetsDir: '',   // 放置生成的静态资源 (js、css、images、fonts)
  lintOnSave: false, // 关闭eslintrc检测
  devServer: {
    open: false, // 设置自动打开浏览器
    host: '0.0.0.0',
    // host: 'localhost',
    port: 9080,
    https: false   // 是否开启用https
  },
  css: {
    loaderOptions: {
      less: {
        // globalVars: {
        //   primary: '#03ff00'
        // }
      }
    }
  }
};

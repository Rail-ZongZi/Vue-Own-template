const path = require('path');

module.exports = {
  lintOnSave: false, // 关闭eslintrc检测
  devServer: {
    host: 'localhost',
    port: 9080
  },
  css: {
    loaderOptions: {
      less: {
        // prependData: `@import "~@/assets/styles/index.less"`
        globalVars: {
          primary: '#03ff00'
        }
      }
    }
  }
};

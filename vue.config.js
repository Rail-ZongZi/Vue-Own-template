const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

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
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('api', resolve('src/api'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('config', resolve('src/config'))
      .set('views', resolve('src/views'))
      .set('store', resolve('src/store'))
      .set('lib', resolve('src/lib'))
  }
};

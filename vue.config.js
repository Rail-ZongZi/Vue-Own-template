const path = require('path');
const resolve = dir => path.join(__dirname, dir);
const port = 9080;

module.exports = {
  // 生产环境构建输出目录
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、images、fonts)
  assetsDir: '',
  // 关闭eslintrc检测
  lintOnSave: false,
  // 生产source map设置，提高打包以后文件包的大小
  productionSourceMap: false,
  devServer: {
    overlay: {   // 开启浏览器的警告和错误
      warnings: true,
      errors: true
    },
    open: false, // 设置自动打开浏览器
    host: '0.0.0.0',
    // host: 'localhost',
    port: port,
    https: false, // 是否开启用https
    hotOnly: true, // 热更新
    // 配置跨域
    // proxy: {
    //   '/api': {
    //     target: '',
    //     secure: false,
    //     changeOrigin: true, // 开启代理, 在本地创建一个虚拟服务端
    //     ws: true,   // 是否弃用websockets
    //     pathRewrite: {
    //       '^/api': '/'
    //     }
    //   }
    // }
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
  },
  css: {
    loaderOptions: {
      less: {
        globalVars: {
          primary: '#000'
        }
      }
    }
  }
};

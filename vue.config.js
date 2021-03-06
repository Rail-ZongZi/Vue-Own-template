const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  devServer: {
    port: 9080
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'))
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "./src/assets/styles/variables.scss";`
      }
    }
  }
}

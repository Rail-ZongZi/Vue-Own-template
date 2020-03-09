#### 一： 编辑器配置设置

```markdown
root = true
[*]
charset = utf-8
```

#### 二： 目录结构设置

```
├─public
│      favicon.ico   # 网页图标
│      index.html
└─src
    │  App.vue
    │  main.js
    ├─api      # 接口文件
    ├─assets   # 静态文件
    │  ├─fonts      # 字体文件
    │  ├─images     # 图片文件
    │  │      logo.png
    │  └─styles    # 样式文件
    │      │  index.less
    │      └─realize  
    │              reset.less
    ├─components    # 组件文件
    ├─config       # 配置文件
    │      index.js
    ├─directve
    │      index.js
    ├─lib
    │      tools.js
    │      util.js
    ├─mock      # 模拟假数据文件
    │      index.js
    ├─router     # 路由文件
    │      index.js
    │      router.js
    ├─store     # 数据状态文件
    │  │  actions.js
    │  │  index.js
    │  │  mutations.js
    │  │  state.js
    │  └─module     # 模块文件
    │          user.js   # 存储用户信息
    └─views     # 存放页面
```

#### 三： 配置 `css`前缀 使用插件 `autoprefixer` 

- 在 `postcss.config.js` 中写入

```javascript
    module.exports = {
      plugins: {
        autoprefixer: {}
      }
    };
```

#### 四： 配置变量环境和模式

> **1:** 使用构建和部署相关的变量在 `webpack.config.js` 中的配置

~~Vue-cli3.3中已弃用**baseUrl**~~

- 目前使用`publicPath`进行 设置

- 通过 `process.env.NODE_ENV` 来执行判断环境， 来设置不同的参数

> **2:** 使用单独文件进行配置

**<font color=red>我是红色</font>**

-






#### 一： 编辑器配置设置

```markdown
root = true
[*]
charset = utf-8
```

#### 二： 目录结构设置

```
├─public
│      favicon.ico   // 网页图标
│      index.html
└─src
    │  App.vue
    │  main.js
    ├─api      // 接口文件
    ├─assets   // 静态文件
    │  ├─fonts      // 字体文件
    │  ├─images     // 图片文件
    │  │      logo.png
    │  └─styles    // 样式文件
    │      │  index.less
    │      └─realize
    │              reset.less
    ├─components    // 组件文件
    ├─config       // 配置文件
    │      index.js
    ├─directve
    │      index.js
    ├─lib
    │      tools.js
    │      util.js
    ├─mock      // 模拟假数据文件
    │      index.js
    ├─router     // 路由文件
    │      index.js
    │      router.js
    ├─store     // 数据状态文件
    │  │  actions.js
    │  │  index.js
    │  │  mutations.js
    │  │  state.js
    │  └─module     // 模块文件
    │          user.js
    └─views     // 存放页面
```


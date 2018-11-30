# 安装

全局安装
```bash
npm install webpack webpack-cli -g
```
本地安装
```
npm install webpack
```

# 配置文件

gulp的配置文件`gulpfile.js`

webpack的配置文件`webpack.config.js`,在该文件下写入以下信息

```javascript
// webpack配置文件
const path = require('path');
module.exports = {
    mode: "production", // "production" | "development" | "none"  // Chosen mode tells webpack to use its built-in optimizations accordingly.
    entry: "./input/index.js", // string | object | array  // 这里应用程序开始执行 接受JS的入口文件
    // webpack 开始打包
    output: {
        // webpack 如何输出结果的相关选项
        path: path.resolve(__dirname, "output"), // string //输出到该目录下的output文件夹下
        // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）
        filename: "bundle.js", // string  //输出后该文件名字为bundle.js   // 「入口分块(entry chunk)」的文件名模板（出口分块？）
        publicPath: "/assets/", // string    // 输出解析文件的目录，url 相对于 HTML 页面
        library: "MyLibrary", // string,
        // 导出库(exported library)的名称
        libraryTarget: "umd", // 通用模块定义    // 导出库(exported library)的类型
        /* 高级输出配置（点击显示） */
    }
}
```

# 编译文件

在该目录下执行`webpack`，如果编译成功，就会在output下生产一份输出文件


webpack入口`entry/index.js`文件只能是输入JS文件,但是文件可以引入各种模块（内置模块，第三方模块，自定义模块）

webpack自带的只是处理JS格式的文件，如果你要处理其他类型的文件，请安装对应的`loader`,webpack的文件处理插件

```js
path(node里面内置)
jquery(第三方)
cookie(自定义模块)
```

# loader

webpack提供很多处理非JS文件的`loader`
```
https://www.webpackjs.com/loaders/
```
比如要处理css，找到对应的`css-loader`下载
```
npm install css-loader
```
在`webpack.config.js`下面配置该`loader`
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}
```
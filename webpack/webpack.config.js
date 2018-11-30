// webpack配置文件
const path = require('path');
// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin');
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
    },
    module: {
        rules: [{
                test: /\.css$/, //处理css文件
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.js$/, //处理JS文件，ES6代码，ES5
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            {
                test: /\.vue$/, //处理vue组件
                use: ['vue-loader']
            }

        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]
}
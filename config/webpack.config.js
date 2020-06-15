/*
 * @Author: liyingg
 * @Date: 2020-06-15 10:44:43
 * @LastEditTime: 2020-06-15 17:51:50
 * @LastEditors: liyingg
 * @Description: 
 */

//webpack 4.0

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const del = require('del');

//del file 

//watch file 

//debugger file
del.sync([path.resolve(process.cwd(), './test/self/dist/**')]);
module.exports = {
    entry: './test/self/src/main.js',
    output: {
        path: path.resolve(process.cwd(), './test/self/dist'),
        filename: 'main.js'
    },
    devServer: {
        //
        port: 8084,
        // 自动打开浏览器
        open: true,
        // 告诉服务器从哪里dist目录中提供内容
        // contentBase: path.resolve(process.cwd(), './test/self/src/index.html')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(process.cwd(), './test/self/src/index.html')
        })
    ]
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: path.resolve(process.cwd(), './test/self/src/index.html')
    //     }),
    //     new webpack.NamedModulesPlugin(),
    //     new webpack.HotModuleReplacementPlugin()
    // ]
};
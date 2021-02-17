const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: false
    },
    plugins: [
        // inject is set to true so there is no need to create the entry in index.html by hand
        new HtmlWebpackPlugin({
            title: 'Abfragetest',
            filename: path.resolve(__dirname, './dist/index.html'),
            template: path.resolve(__dirname, './src/index.html'),
            inject: true,
            xhtml: true
        })
    ]
}
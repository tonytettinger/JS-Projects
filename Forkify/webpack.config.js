const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
//include a node module called path
module.exports = {
    entry:  './src/js/index.js',
    output: {
        //this is an absolute path, __dirname is the current absolute path, .resolve comes from the path package.
        //
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
};
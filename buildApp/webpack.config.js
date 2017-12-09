const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = function () {
    const path = __dirname;
    return {
        entry: {
            app: './src/server-webpack.js',
        },
        target: 'node',
        output: {
            path: path + '/src',
            filename: 'server.js',
            libraryTarget: "umd"
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        externals: [
            // 排除 node全局模块打包
            function (context, request, callback) {
                if (/^[a-z\-0-9]+$/.test(request)) {
                    return callback(null, 'commonjs ' + request);
                }
                callback();
            }
        ],
        // https://doc.webpack-china.org/configuration/node/
        node: {
            console: true,
            global: true,
            process: true,
            Buffer: true,
            __filename: false,
            __dirname: false,
            setImmediate: true
        },
        // devtool: "source-map",
        module: {
            loaders: [{
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }]
        },
        plugins: [
            // new UglifyJSPlugin({
            //     // warning: false,
            //     // mangle: true,
            //     // compress: {
            //     //     warnings: false,
            //     //     drop_debugger: true,
            //     //     drop_console: true
            //     // }
            // }),
            new CleanWebpackPlugin(['src/www']),
            new CopyWebpackPlugin([
                {
                    from: '../webMusic/build',
                    to: 'www'
                }
            ]),
        ]
    };
}
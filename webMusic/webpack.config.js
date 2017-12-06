const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const commonCss = new ExtractTextPlugin('common.css');
const styleCss = new ExtractTextPlugin('styles.css');
module.exports = (evn = {}) => {
    evn.Generative = evn.Generative == "true"
    console.log(`------------------- ${evn.Generative?'生产':'开发'}环境 -------------------`);
    let plugins = [
        //全局变量
        // new webpack.ProvidePlugin({
        // }),
        new CleanWebpackPlugin(['build']),
        commonCss,
        styleCss,
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: function (module) {
                // This prevents stylesheet resources with the .css or .scss extension
                // from being moved from their original chunk to the vendor chunk
                // console.log("module.context----------------------",module.context);
                if (module.resource && (/^.*\.(css|scss)$/).test(module.resource)) {
                    return false;
                }
                return module.context && module.context.indexOf("node_modules") !== -1;
            }
        }),
        // 把生成的文件插入到 启动页中
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CopyWebpackPlugin([{
            from: 'src/assets',
            to: 'assets'
        }]),
    ];
    // 生产环境添加压缩插件
    evn.Generative ? plugins.push(new UglifyJSPlugin({
        // warning: false,
        // mangle: true,
        // compress: {
        //     warnings: false,
        //     drop_debugger: true,
        //     drop_console: true
        // }
    })) : undefined;
    return {
        entry: {
            // 'vendor': './src/vendor.ts', //第三方依赖
            'app': './src/index.tsx' //应用程序
        },
        output: {
            path: path.resolve(__dirname, "build"),
            // publicPath: evn.Generative ? '' : '/',
            publicPath: '/',
            filename: '[name].js',
            chunkFilename: '[id].chunk.js'
        },
        // 启动 dev-server 的服务配置
        devServer: {
            // contentBase: "www", //本地服务器所加载的页面所在的目录
            inline: true, //检测文件变化，实时构建并刷新浏览器
            port: "3002",
            // https: true,
            proxy: {
                '/api': {
                    target: 'http://localhost:4001',
                    pathRewrite: {
                        "^/api": ""
                    },
                    secure: false
                },
            },
            //404 页面返回 index.html 
            historyApiFallback: true,
            // setup(app) { //模拟数据
            //     // data(app);
            // }
        },
        // 开发环境 生成 map 文件  
        devtool: evn.Generative ? 'nosources-source-map' : 'source-map',
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"]
        },
        module: {
            rules: [{
                    test: /\.tsx?$/,
                    include: path.resolve(__dirname, "src"),
                    loader: 'awesome-typescript-loader',
                }, {
                    test: /\.css$/,
                    include: path.resolve(__dirname, "src"),
                    use: styleCss.extract({
                        fallback: "style-loader",
                        // 生产环境 不生成map 且压缩css
                        use: `css-loader?sourceMap=${!evn.Generative}&minimize=${evn.Generative}`
                    })
                }, {
                    test: /\.css$/,
                    exclude: path.resolve(__dirname, "src"),
                    use: commonCss.extract({
                        fallback: "style-loader",
                        // 生产环境 不生成map 且压缩css
                        use: `css-loader?sourceMap=${!evn.Generative}&minimize=${evn.Generative}`
                    })
                },
                {
                    test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                    loader: 'url-loader?limit=50000&name=[path][name].[ext]'
                },

                {
                    test: /\.html$/,
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                },
            ]
        },
        plugins: plugins,

    }
}
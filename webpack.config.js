const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    optimization: {
        minimize: false // 关闭代码压缩，可选
    },

    entry: "./src/index.ts", //入口文件

    devtool: "inline-source-map",

    devServer: {
        contentBase: './dist'
    },

    output: {
        path: path.resolve(__dirname, "dist"), //输出文件位置
        filename: "bundle.js", //输出文件名
        environment: {
            arrowFunction: false // 关闭webpack的箭头函数，可选
        }
    },

    resolve: {
        extensions: [".ts", ".js"] //打包文件类型
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: "ts-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            browsers: 'last 2 versions',
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            },
            {
                test: /\.(woff2?|eot|TTF|otf|ttf)(\?.*)?$/,
                exclude: /(node_modules)/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    outputPath: 'fonts/',
                    name: '[name].[hash:7].[ext]'
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ]

}
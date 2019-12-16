const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const autoprefixer = require('autoprefixer');
const TerserPlugin = require('terser-webpack-plugin');
const path = require("path");

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist/js')
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: true,
                cache: true,
                parallel: true,
            })
        ],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: false
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            autoprefixer: {
                                browsers: ["last 2 versions"]
                            },
                            sourceMap: false,
                            plugins: () => [
                                autoprefixer
                            ]
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: false
                        }
                    }
                ],
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [{
                    loader: "file-loader",
                    options: { 
                        name: '[name].[ext]',
                        useRelativePath: true,
                        publicPath: '../img' 
                    }
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '../css/[name].css',
            chunkFilename: '../css/[id].css',
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'src/assets/img'),
            to: path.resolve(__dirname, 'dist/img'),
            force: true
        }]),
    ]
}; 
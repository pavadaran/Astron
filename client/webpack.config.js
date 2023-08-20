var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv')
const isProduction = process.env.NODE_ENV === "production";

/**
 * Webpack configuration file.
 */

dotenv.config();

const config = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, "site/public/dist"),
        filename: 'index_bundle.js'
    },
    resolve: {
        alias: {
            "react-dom": "@hot-loader/react-dom"
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset',
                generator: {
                    filename: 'images/[name][ext]',
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, "site/public/dist/index.html"),
            favicon: path.resolve(__dirname, "site/public/images/favicon.png"),
            template: path.resolve(__dirname, "site/public/pages/index.template.html"),
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env),
        }),
    ],
    devServer: {
        open: '/astron/home',
        host: 'localhost',
        historyApiFallback: true,
        hot: true,
        server: 'https'
    }
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";
        config.output.publicPath = "/booking/site/public/dist/";
    } else {
        config.mode = "development";
        config.output.publicPath = "/";
    }
    return config;
};

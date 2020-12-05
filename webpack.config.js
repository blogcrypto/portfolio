const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const TerserPlugin = require('terser-webpack-plugin');


module.exports = (env, options) => {
    const clean = () => {
        return options.mode === 'production'
           ? new CleanWebpackPlugin({
                cleanAfterEveryBuildPatterns: ['dist'],
            })
           : () => {
        };
    };

    const analyze = () => {
        return options.mode === 'analyze'
           ? new BundleAnalyzerPlugin()
           : () => {
        };
    };

    return {
        mode: options.mode,
        entry: ['@babel/polyfill', './src/index.js'],
        output: {
            path: path.resolve(__dirname, 'dist'),
            // publicPath: './dist',
            filename: '[name].bundle.js',
            chunkFilename: '[name].bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx|mjs)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images',
                            },
                        },
                    ],
                },
            ],
        },
        stats: {
            all: false,
            builtAt: true,
            timings: true,
            version: true,
            modules: false,
            assets: false,
            errors: true,
            warnings: true,
            moduleTrace: true,
            errorDetails: true
        },
        resolve: {
            extensions: ['.js', '.json', '.jsx'],
            // modules: ['node_modules', path.resolve(__dirname, 'src')],
        },
        // optimization: {
        //     splitChunks: {
        //         chunks: 'all',
        //     },
        //     minimize: !!devMode,
        //     minimizer: [
        //         new TerserPlugin({
        //             test: /\.js(\?.*)?$/i,
        //             sourceMap: !!devMode,
        //             terserOptions: {
        //                 keep_classnames: true,
        //                 keep_fnames: true,
        //             },
        //         }),
        //         new MiniCssExtractPlugin({
        //             filename: 'style.[contenthash].css',
        //         }),
        //     ],
        // },
        plugins: [
            clean(),
            new HtmlWebPackPlugin({
                template: './public/index.html',
                // filename: './index.html',
            }),
            //     new webpack.HotModuleReplacementPlugin(),
            //     new MiniCssExtractPlugin({
            //         filename: 'style.[contenthash].css',
            //         chunkFilename: '[id].css',
            //     }),
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            analyze()
        ],
        devtool: 'cheap-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            port: 3000,
            host: '0.0.0.0',
            publicPath: 'http://localhost:3000/',
            hot: true
        },
    };
};

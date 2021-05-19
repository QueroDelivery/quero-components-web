const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = async ({ config }) => {
    // styles
    config.module.rules.push({
        test: /\.(sass|scss)$/,
        use: ['resolve-url-loader'], include: path.resolve(__dirname, '../')
    });

    // fonts
    config.module.rules.push({
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [
            {
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]'
                }
            }
        ],
        include: path.resolve(__dirname, '../')
    });

    // config.plugins = [
    //     ...config.plugins,
    //     new HtmlWebpackPlugin({
    //         template: path.resolve(__dirname, '../', 'public', 'index.html')
    //     })
    // ];

    // don't forget to return.
    return config;
};

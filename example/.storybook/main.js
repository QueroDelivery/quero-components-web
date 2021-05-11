const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    "stories": [
        "../src/**/**/*.stories.mdx",
        "../src/**/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/preset-create-react-app"
    ],
    managerWebpack: async (config) => {
        config.plugins.push(
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.resolve(__dirname, '../', 'public', 'index.html')
            }),
        );
        return config;
    },
}

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  managerWebpack:
    process.env.NODE_ENV === 'production'
      ? async config => {
          config.plugins.push(
            new HtmlWebpackPlugin({
              filename: 'index.html',
              template: path.resolve(__dirname, '../', 'src', 'template.html'),
            }),
          );
          return config;
        }
      : null,
};

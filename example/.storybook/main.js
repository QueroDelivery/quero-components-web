const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  managerWebpack: async config => {
    config.plugins.push(
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, '../', 'src', 'template.html'),
      }),
    );

    config.module.rules.push({
      test: /\.(sass|scss)$/,
      use: ['resolve-url-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // fonts
    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });
    return config;
  },
};

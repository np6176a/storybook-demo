module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
          modules: true,
          modules : {
            localIdentName: '[name]__[local]__[hash:base64:5]',
          },
        }
      }
    },
  ]
}

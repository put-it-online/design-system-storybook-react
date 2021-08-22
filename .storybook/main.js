const path = require('path');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config) => {
    config.module.rules.push(
      {
         test:/\.(js|jsx)?$/,
         include: [
          path.resolve(__dirname, "stories"),
          path.resolve(__dirname, "components"),
          path.resolve(__dirname, "node_modules/design-system-react"),
          '/Users/wimput/Documents/vrt/test/DS/components/Base/components'
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      });
    return config;
  }
}
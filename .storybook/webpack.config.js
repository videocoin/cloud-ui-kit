const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });
  config.module.rules.push({
    test: /\.scss$/,
    loaders: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
          modules: {
            mode: 'local',
            localIdentName: '[name]__[local]--[hash:base64:5]',
            context: path.resolve(__dirname, 'src'),
          },
        },
      },
      require.resolve('sass-loader')
    ],
  });
  const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'));
  fileLoaderRule.exclude = /\.svg$/;
  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack", "url-loader"],
  });
  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};

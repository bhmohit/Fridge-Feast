const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        "stream": require.resolve("stream-browserify"),
        "assert": require.resolve("assert/"),
        "crypto": require.resolve("crypto-browserify"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "os": require.resolve("os-browserify/browser"),
        "path": require.resolve("path-browserify"),
        "querystring": require.resolve("querystring-es3"),
        "util": require.resolve("util/"),
        "fs": false,
        "net": false,
        "tls": false,
        "child_process": false,
        "vm": require.resolve("vm-browserify"),  // Add this line to include the 'vm' polyfill
        // "vm": false,  // Uncomment this line if you don't want to include the 'vm' polyfill
      };

      webpackConfig.plugins.push(
        new webpack.ProvidePlugin({
          process: 'process/browser',
          Buffer: ['buffer', 'Buffer'],
        })
      );

      return webpackConfig;
    },
  },
};

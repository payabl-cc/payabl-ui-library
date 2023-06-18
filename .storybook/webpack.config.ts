module.exports = {
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(svg)$/,
      use: ["@svgr/webpack", "url-loader"],
      include: path.resolve(__dirname, "../")
    });
    return config;
  }
};

module.exports = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: { loader: 'ts-loader' },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
}

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js'
  },
  devServer: {
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.pug'
    }),
    new MiniCssExtractPlugin({
        filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      { 
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // fallback to style-loader in development
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
        ]
      }
    ]
  }
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {}
    if (argv.mode === 'production') {}
    return config;
}
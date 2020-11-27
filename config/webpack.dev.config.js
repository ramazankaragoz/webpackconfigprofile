const path = require('path');

const PRODJECT_DIR = path.resolve(__dirname, "../");
const SRC_DIR = `${PRODJECT_DIR}/src`;
const BUILD_DIR = process.env.PROJECT_DEVELOPMENT_UI_DIR
    || `${PRODJECT_DIR}/build`;

console.log("########### PROJE DEV PROFIL DE ÇALIŞTIRILIYOR ###########");

module.exports = {
  entry: {
    main: `${SRC_DIR}/index.js`,
  },
  mode: "production",
  devtool: false,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    chunkFilename: '[id].js',
    publicPath: ''
  },
  resolve: {
    extensions: ['.js', '.jsx', '*', '.json']
  },
  devServer: {
    publicPath: "/",
    contentBase: "./public",
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.j(sx|s)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: ["cache-loader", "style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true,
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        include: /fonts/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  }
};
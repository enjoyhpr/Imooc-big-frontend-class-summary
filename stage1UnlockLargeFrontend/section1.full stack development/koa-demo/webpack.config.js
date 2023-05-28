const path = require('path')
const nodeExcternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackconfig = {
  target: 'node',
  mode: 'development',
  entry: {
    server: path.join(__dirname, 'src/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, './dist')
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: [path.join(__dirname, '/node_modules')]
      }
    ]
  },
  externals: [nodeExcternals()],
  plugins: [
    new CleanWebpackPlugin()
  ],
  node: {
    // webpack v4
    // console: true,
    // process: true,//它包含了当前进程的信息，可以用于在应用程序中获取或设置环境变量、退出进程等
    // Buffer: true,
    // path: true,
    // setImmediate: true,
    // webpack v5
    __filename: true, // 用于获取当前文件所在的绝对路径和文件名。
    __dirname: true,
    global: true,//Node.js 中一个常用的全局对象，它是一个类似于浏览器中的  window  对象的全局变量。
  }
}

module.exports = webpackconfig
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // webpack打包后适用的环境
    environment: {
      arrowFunction: false,
      const: false
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      chrome: '58',
                      ie: '11'
                    },
                    corejs: '3', // 如需要使用Promise语法，但ie11不兼容，core-js会自己实现一个Promise
                    useBuiltIns: 'usage' // 按需引用
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader', // 处理css兼容性问题，如display: flex 处理后加前缀
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      browers: 'last 2 versions'
                    }
                  ]
                ]
              }
            }
          },
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './index.html'
    })
  ],
  resolve: {
    extensions: ['.ts', '.js'] // 在项目中引入.ts后缀模块
  }
};

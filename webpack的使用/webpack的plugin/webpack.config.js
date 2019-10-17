//npm init给该项目初始化
/* 
"name": "meetwebpack", 名字随意取
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC" 开源需要此项目
}
__dirname node里面的全局变量
*/
/* const path = require('path')
export const entry = './src/main.js';
export const output = {
  path: path.resolve(__dirname,'dist'),
  filename: 'bundle.js'
}; */
const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const uglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当加载的图片大于limit时,需要使用file-loader模块进行加载
              //当加载的图片大于limit时,需要使用file-loader模块进行加载
              limit: 10000,
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        //exclude:排除
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: ['@babel/preset-env']
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    //代表以后这些后缀名都可以简写了
    extensions: ['.js', '.css', '.vue'],
    //alias别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin('最终版权归小火苗所有'),
    new htmlWebpackPlugin({
      //根据这个模板生成html文件
      template:'index.html'
    }),
    // new uglifyjsWebpackPlugin()
  ],
  //搭建本地服务器
  devServer: {
    contentBase: './dist',
    inline: true,
  }
}
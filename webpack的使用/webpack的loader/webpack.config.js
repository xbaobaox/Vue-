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

module.exports = {
  entry : './src/main.js',
  output : {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  }
}
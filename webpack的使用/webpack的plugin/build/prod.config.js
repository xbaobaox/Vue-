
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig=require('./base.config')
module.exports = webpackMerge(baseConfig, {
  plugins: [
    new uglifyjsWebpackPlugin()
  ]
})

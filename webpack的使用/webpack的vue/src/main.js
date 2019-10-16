import { add, mul } from './js/mathUtils';
console.log(add(20, 30));
console.log(mul(20, 30));
import { name, age, home } from "./js/info.js"
console.log(name, age, home)
//依赖css文件
require('./css/normal.css')
//依赖less文件
require('./css/special.less')
//使用vue进行开发
//是因为node_modules(node模块中)有一行代码:导出默认语法=>export default vue 所以能直接导入vue
import Vue from 'vue'
// import App from './js/vue/app'
import App from './js/vue/App.vue'
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
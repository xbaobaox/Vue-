//ES5的模块化实现
var moduleA = (function () {
  var obj = {}
  var str = 'hello';
  var flag = true;
  function sun(a, b) {
    return a + b;
  }
  obj.str = str;
  obj.flag = flag;
  obj.sun = sun;
  return obj;
})();
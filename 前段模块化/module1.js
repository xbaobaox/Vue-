var name = 'tom';
var age = 15;
var flag = true;
function sum(sum1, sum2) {
  return sum1 + sum2
};
if (flag) {
  console.log(sum(20, 30))
};
export { flag, sum };
export default function () {
  console.log('something');
}
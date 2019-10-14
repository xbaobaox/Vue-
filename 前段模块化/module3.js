import { flag, sum } from "./module1";
if (flag) {
  console.log('引用flag后输出');
  console.log(sum(20, 50));
}
import something from "./module1";
something();
//导入所有的export
import * as module1 from './module1'
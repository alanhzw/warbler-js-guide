<!--
 * @Author: 一尾流莺
 * @Description:模拟延迟
 * @Date: 2021-09-13 18:16:32
 * @LastEditTime: 2021-09-16 18:22:30
 * @FilePath: \warblerjs-guide\docs\guide\methods\imitateDelay.md
-->

# 模拟延迟

## 语法

```js
import { imitateDelay } from 'warbler-js';
imitateDelay(timeout);
```

## 参数

- `timeout` (**Number**) ： 延迟的时间，单位毫秒(`ms`)。

## 返回值

**Promise** ： **Promise**。

## 源码

```js
const imitateDelay = (timeout) =>
  new Promise((resolve) => {
    const timeoutHandle = setTimeout(() => {
      clearTimeout(timeoutHandle);
      resolve();
    }, timeout);
  });
```

## 例子

```js
import { imitateDelay } from 'warbler-js';
async function test() {
  console.log('The first log');
  await imitateDelay(1000);
  console.log('The second log with 1000 ms delay'); // => 1000 毫秒后输出 The second log with 1000 ms delay
}
test();
```

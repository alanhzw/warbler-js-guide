<!--
 * @Author: 一尾流莺
 * @Description:base64格式
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-14 09:48:04
 * @FilePath: \warblerjs-guide\docs\guide\form\baseReg.md
-->

# base64格式

验证 `base64` 格式。

## 语法

```js
import { baseReg } from 'warbler-js';
const result = baseReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const baseReg = (value) => {
  const reg = /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i;
  return reg.test(value);
};
```

## 例子

```js
import { baseReg } from 'warbler-js';
const result1 = baseReg('data:image/gif;base64,xxxx==')
const result2 = baseReg('data:image/gif;base63,xxxx==')

console.log(result1) // true
console.log(result2) // false
```

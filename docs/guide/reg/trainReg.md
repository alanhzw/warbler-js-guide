<!--
 * @Author: 一尾流莺
 * @Description:火车车次
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-13 19:08:29
 * @FilePath: \warblerjs-guide\docs\guide\reg\trainReg.md
-->

# 火车车次

验证火车的车次号码，由 `GCDZTSPKXLY1-9` 开头。

## 语法

```js
import { trainReg } from 'warbler-js';
const result = trainReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const trainReg = (value) => {
  const reg = /^[GCDZTSPKXLY1-9]\d{1,4}$/;
  return reg.test(value);
};
```

## 例子

```js
import { trainReg } from 'warbler-js';
const result1 = trainReg('G1234')
const result2 = trainReg('A18')

console.log(result1) // true
console.log(result2) // false
```

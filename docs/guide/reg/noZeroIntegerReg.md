<!--
 * @Author: 一尾流莺
 * @Description:整数(不包含0)
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-13 18:46:02
 * @FilePath: \warblerjs-guide\docs\guide\reg\noZeroIntegerReg.md
-->

# 整数(不包含0)

验证非 **0** 整数，包括 **正整数**、**负整数**。

## 语法

```js
import { noZeroIntegerReg } from 'warbler-js';
const result = noZeroIntegerReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const noZeroIntegerReg = (value) => {
  const reg = /^([1-9][0-9]*|-[1-9][0-9]*)$/;
  return reg.test(value);
};
```

## 例子

```js
import { noZeroIntegerReg } from 'warbler-js';
const result1 = noZeroIntegerReg('0')
const result2 = noZeroIntegerReg('-3')
const result3 = noZeroIntegerReg('4')
const result4 = noZeroIntegerReg('1.1')
const result5 = noZeroIntegerReg('一尾流莺')

console.log(result1) // false
console.log(result2) // true
console.log(result3) // true
console.log(result4) // false
console.log(result5) // false
```

<!--
 * @Author: 一尾流莺
 * @Description:正整数(包含0)
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-13 18:46:17
 * @FilePath: \warblerjs-guide\docs\guide\reg\nonPositiveIntegerReg.md
-->

# 正整数(包含0)

验证 **0** 、 **正整数**。

## 语法

```js
import { nonPositiveIntegerReg } from 'warbler-js';
const result = nonPositiveIntegerReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const nonPositiveIntegerReg = (value) => {
  const reg = /^([1-9]\d*|[0]{1,1})$/;
  return reg.test(value);
};
```

## 例子

```js
import { nonPositiveIntegerReg } from 'warbler-js';
const result1 = nonPositiveIntegerReg('0')
const result2 = nonPositiveIntegerReg('-3')
const result3 = nonPositiveIntegerReg('4')
const result4 = nonPositiveIntegerReg('1.1')
const result5 = nonPositiveIntegerReg('一尾流莺')

console.log(result1) // true
console.log(result2) // false
console.log(result3) // true
console.log(result4) // false
console.log(result5) // false
```

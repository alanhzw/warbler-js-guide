<!--
 * @Author: 一尾流莺
 * @Description:负整数(包含0)
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-13 18:46:38
 * @FilePath: \warblerjs-guide\docs\guide\reg\zeroNegativeIntegerReg.md
-->

# 负整数(包含0)

验证 **0** 、 **负整数**。

## 语法

```js
import { zeroNegativeIntegerReg } from 'warbler-js';
const result = zeroNegativeIntegerReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const zeroNegativeIntegerReg = (value) => {
  const reg = /^(-[1-9]\d*|[0]{1,1})$/;
  return reg.test(value);
};
```

## 例子

```js
import { zeroNegativeIntegerReg } from 'warbler-js';
const result1 = zeroNegativeIntegerReg('0')
const result2 = zeroNegativeIntegerReg('-3')
const result3 = zeroNegativeIntegerReg('4')
const result4 = zeroNegativeIntegerReg('1.1')
const result5 = zeroNegativeIntegerReg('一尾流莺')

console.log(result1) // true
console.log(result2) // true
console.log(result3) // false
console.log(result4) // false
console.log(result5) // false
```

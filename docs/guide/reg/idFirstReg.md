<!--
 * @Author: 一尾流莺
 * @Description:身份证号（一代）
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-13 19:01:50
 * @FilePath: \warblerjs-guide\docs\guide\reg\idFirstReg.md
-->

# 身份证号（一代）

验证一代身份证号，`15` 位，基本用不到。

## 语法

```js
import { idFirstReg } from 'warbler-js';
const result = idFirstReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const idFirstReg = (value) => {
  const reg = /^[1-9]\d{7}(?:0\d|10|11|12)(?:0[1-9]|[1-2][\d]|30|31)\d{3}$/;
  return reg.test(value);
};
```

## 例子

```js
import { idFirstReg } from 'warbler-js';
const result1 = idFirstReg('123456991010193')
const result2 = idFirstReg('1234569910101934')

console.log(result1) // true
console.log(result2) // false
```

<!--
 * @Author: 一尾流莺
 * @Description:中国手机号(简单)
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-13 18:50:50
 * @FilePath: \warblerjs-guide\docs\guide\reg\easyTelReg.md
-->

# 中国手机号(简单)

验证手机号，**11** 位，只要是 **1** 开头即可，允许 **0086** 、**+86** 前缀。

## 语法

```js
import { easyTelReg } from 'warbler-js';
const result = easyTelReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const easyTelReg = (value) => {
  const reg = /^(?:(?:\+|00)86)?1\d{10}$/;
  return reg.test(value);
};
```

## 例子

```js
import { easyTelReg } from 'warbler-js';
const result1 = easyTelReg('008617612340174')
const result2 = easyTelReg('+8617612340174')
const result3 = easyTelReg('17612340174')
const result4 = easyTelReg('176123401745')

console.log(result1) // true
console.log(result2) // true
console.log(result3) // true
console.log(result4) // false
```

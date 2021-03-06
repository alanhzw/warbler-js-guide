<!--
 * @Author: 一尾流莺
 * @Description:身份证号（香港）
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-13 19:04:50
 * @FilePath: \warblerjs-guide\docs\guide\reg\idHongKongReg.md
-->

# 身份证号（香港）

验证香港地区身份证号。

## 语法

```js
import { idHongKongReg } from 'warbler-js';
const result = idHongKongReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const idHongKongReg = (value) => {
  const reg = /^[a-zA-Z]\d{6}\([\dA]\)$/;
  return reg.test(value);
};
```

## 例子

```js
import { idHongKongReg } from 'warbler-js';
const result1 = idHongKongReg('K034169(1)')

console.log(result1) // true
```

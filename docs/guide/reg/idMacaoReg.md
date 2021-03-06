<!--
 * @Author: 一尾流莺
 * @Description:身份证号（澳门）
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-13 19:05:43
 * @FilePath: \warblerjs-guide\docs\guide\reg\idMacaoReg.md
-->

# 身份证号（澳门）

验证澳门地区身份证号。

## 语法

```js
import { idMacaoReg } from 'warbler-js';
const result = idMacaoReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const idMacaoReg = (value) => {
  const reg = /^[1|5|7]\d{6}[(\d)]{3}$/;
  return reg.test(value);
};
```

## 例子

```js
import { idMacaoReg } from 'warbler-js';
const result1 = idMacaoReg('5686611(1)')

console.log(result1) // true
```

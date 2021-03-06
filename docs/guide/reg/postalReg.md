<!--
 * @Author: 一尾流莺
 * @Description:邮政编码
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-14 09:32:58
 * @FilePath: \warblerjs-guide\docs\guide\form\postalReg.md
-->

# 邮政编码

验证中国 `邮政编码`。

## 语法

```js
import { postalReg } from 'warbler-js';
const result = postalReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const postalReg = (value) => {
  const reg = /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/;
  return reg.test(value);
};
```

## 例子

```js
import { postalReg } from 'warbler-js';
const result1 = postalReg('734500')

console.log(result1) // true
```

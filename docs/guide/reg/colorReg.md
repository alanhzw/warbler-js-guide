<!--
 * @Author: 一尾流莺
 * @Description:16进制颜色
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-14 09:49:02
 * @FilePath: \warblerjs-guide\docs\guide\form\colorReg.md
-->

# 16进制颜色

验证 `16进制颜色`。

## 语法

```js
import { colorReg } from 'warbler-js';
const result = colorReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const colorReg = (value) => {
  const reg = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  return reg.test(value);
};
```

## 例子

```js
import { colorReg } from 'warbler-js';
const result1 = colorReg('#fff')
const result2 = colorReg('#000000')

console.log(result1) // true
console.log(result2) // true
```

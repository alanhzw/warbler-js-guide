<!--
 * @Author: 一尾流莺
 * @Description:护照
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-13 19:06:49
 * @FilePath: \warblerjs-guide\docs\guide\reg\passportReg.md
-->

# 护照

验证护照，包含香港、澳门。

## 语法

```js
import { passportReg } from 'warbler-js';
const result = passportReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const passportReg = (value) => {
  const reg = /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/;
  return reg.test(value);
};
```

## 例子

```js
import { passportReg } from 'warbler-js';
const result1 = passportReg('s28233515')
const result2 = passportReg('MA1234567')

console.log(result1) // true
console.log(result2) // true
```

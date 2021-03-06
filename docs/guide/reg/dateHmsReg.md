<!--
 * @Author: 一尾流莺
 * @Description:24小时制时间
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-14 09:47:05
 * @FilePath: \warblerjs-guide\docs\guide\form\dateHmsReg.md
-->

# 24小时制时间

验证时间，`24` 小时制，格式符合 `HH:mm:ss` 。

## 语法

```js
import { dateHmsReg } from 'warbler-js';
const result = dateHmsReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const dateHmsReg = (value) => {
  const reg = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/;
  return reg.test(value);
};
```

## 例子

```js
import { dateHmsReg } from 'warbler-js';
const result1 = dateHmsReg('09:02:34')
const result2 = dateHmsReg('13:41:25')

console.log(result1) // true
console.log(result2) // true
```

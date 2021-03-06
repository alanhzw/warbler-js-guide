<!--
 * @Author: 一尾流莺
 * @Description:日期 YYYY-MM-DD
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-14 09:49:59
 * @FilePath: \warblerjs-guide\docs\guide\form\ymdReg.md
-->

# 日期 YYYY-MM-DD

验证日期，符合 `YYYY-MM-DD` 格式。

## 语法

```js
import { ymdReg } from 'warbler-js';
const result = ymdReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const ymdReg = (value) => {
  const reg = /^\d{4}(\-)\d{1,2}\1\d{1,2}$/;
  return reg.test(value);
};
```

## 例子

```js
import { ymdReg } from 'warbler-js';
const result1 = ymdReg('2021-10-13 17:34:00')
const result2 = ymdReg('2021-10-13')

console.log(result1) // false
console.log(result2) // true
```

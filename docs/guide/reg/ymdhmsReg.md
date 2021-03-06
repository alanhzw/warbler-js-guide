<!--
 * @Author: 一尾流莺
 * @Description:日期 YYYY-MM-DD hh:mm:ss
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-14 09:50:22
 * @FilePath: \warblerjs-guide\docs\guide\form\ymdhmsReg.md
-->

# 日期 YYYY-MM-DD hh:mm:ss

验证日期，符合 `YYYY-MM-DD hh:mm:ss` 格式。

## 语法

```js
import { ymdhmsReg } from 'warbler-js';
const result = ymdhmsReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const ymdhmsReg = (value) => {
  const reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
  return reg.test(value);
};
```

## 例子

```js
import { ymdhmsReg } from 'warbler-js';
const result1 = ymdhmsReg('2021-10-13 17:34:00')
const result2 = ymdhmsReg('13:41:25')

console.log(result1) // true
console.log(result2) // false
```

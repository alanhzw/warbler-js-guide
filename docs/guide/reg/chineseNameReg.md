<!--
 * @Author: 一尾流莺
 * @Description:中文名字
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-14 09:27:18
 * @FilePath: \warblerjs-guide\docs\guide\form\chineseNameReg.md
-->

# 中文名字

验证名字，纯 `中文`，允许连字符 `·`。

## 语法

```js
import { chineseNameReg } from 'warbler-js';
const result = chineseNameReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const chineseNameReg = (value) => {
  const reg = /^(?:[\u4e00-\u9fa5·]{2,16})$/;
  return reg.test(value);
};
```

## 例子

```js
import { chineseNameReg } from 'warbler-js';
const result1 = chineseNameReg('一尾·流莺')
const result2 = chineseNameReg('warbler')

console.log(result1) // true
console.log(result2) // false
```

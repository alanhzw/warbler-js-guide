<!--
 * @Author: 一尾流莺
 * @Description:英文名字
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-14 09:27:54
 * @FilePath: \warblerjs-guide\docs\guide\form\englishNameReg.md
-->

# 英文名字

验证名字，纯 `英文`，允许空格。

## 语法

```js
import { englishNameReg } from 'warbler-js';
const result = englishNameReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const englishNameReg = (value) => {
  const reg = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;
  return reg.test(value);
};
```

## 例子

```js
import { englishNameReg } from 'warbler-js';
const result1 = englishNameReg('一尾·流莺')
const result2 = englishNameReg('warbler')

console.log(result1) // false
console.log(result2) // true
```

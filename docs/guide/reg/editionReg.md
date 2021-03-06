<!--
 * @Author: 一尾流莺
 * @Description:版本号
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-14 09:45:35
 * @FilePath: \warblerjs-guide\docs\guide\form\editionReg.md
-->

# 版本号

验证版本号，格式必须为 `X.Y.Z` 。

## 语法

```js
import { editionReg } from 'warbler-js';
const result = editionReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const editionReg = (value) => {
  const reg = /^\d+(?:\.\d+){2}$/;
  return reg.test(value);
};
```

## 例子

```js
import { editionReg } from 'warbler-js';
const result1 = editionReg('1.0.1')
const result2 = editionReg('13.4')

console.log(result1) // true
console.log(result2) // false
```

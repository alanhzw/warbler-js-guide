<!--
 * @Author: 一尾流莺
 * @Description:小写英文
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-14 09:30:22
 * @FilePath: \warblerjs-guide\docs\guide\form\lowercaseReg.md
-->

# 小写英文

验证 `小写英文`。

## 语法

```js
import { lowercaseReg } from 'warbler-js';
const result = lowercaseReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const lowercaseReg = (value) => {
  const reg = /^[a-z]+$/;
  return reg.test(value);
};
```

## 例子

```js
import { lowercaseReg } from 'warbler-js';
const result1 = lowercaseReg('warbler')
const result2 = lowercaseReg('Warbler')

console.log(result1) // true
console.log(result2) // false
```

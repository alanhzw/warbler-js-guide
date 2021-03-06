<!--
 * @Author: 一尾流莺
 * @Description:不能包含字母
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-14 09:34:03
 * @FilePath: \warblerjs-guide\docs\guide\form\noLetterReg.md
-->

# 不能包含字母

验证字符串，不能包含 `字母`。

## 语法

```js
import { noLetterReg } from 'warbler-js';
const result = noLetterReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const noLetterReg = (value) => {
  const reg = /^[^A-Za-z]*$/;
  return reg.test(value);
};
```

## 例子

```js
import { noLetterReg } from 'warbler-js';
const result1 = noLetterReg('一尾流莺1!@#')
const result2 = noLetterReg('a')

console.log(result1) // true
console.log(result2) // false
```

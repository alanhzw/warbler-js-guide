<!--
 * @Author: 一尾流莺
 * @Description:英文
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-14 09:29:49
 * @FilePath: \warblerjs-guide\docs\guide\form\englishReg.md
-->

# 英文

验证纯 `英文`。

## 语法

```js
import { englishReg } from 'warbler-js';
const result = englishReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const englishReg = (value) => {
  const reg = /^[a-zA-Z]+$/;
  return reg.test(value);
};
```

## 例子

```js
import { englishReg } from 'warbler-js';
const result1 = englishReg('一尾流莺')
const result2 = englishReg('Warbler')

console.log(result1) // false
console.log(result2) // true
```

<!--
 * @Author: 一尾流莺
 * @Description:统一社会信用代码(严格)
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-13 19:10:07
 * @FilePath: \warblerjs-guide\docs\guide\reg\strictCodsReg.md
-->

# 统一社会信用代码(严格)

验证统一社会信用代码，须符合 `《法人和其他组织统一社会信用代码编码规则》` 。

## 语法

```js
import { strictCodsReg } from 'warbler-js';
const result = strictCodsReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const strictCodsReg = (value) => {
  const reg = /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/;
  return reg.test(value);
};
```

## 例子

```js
import { strictCodsReg } from 'warbler-js';
const result1 = strictCodsReg('9134052155323005XL')
const result2 = strictCodsReg('91330526MA345BR13A')

console.log(result1) // true
console.log(result2) // true
```

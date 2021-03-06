<!--
 * @Author: 一尾流莺
 * @Description:邮箱
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-14 09:28:36
 * @FilePath: \warblerjs-guide\docs\guide\form\emailReg.md
-->

# 邮箱

验证邮箱。

## 语法

```js
import { emailReg } from 'warbler-js';
const result = emailReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const emailReg = (value) => {
  const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(value);
};
```

## 例子

```js
import { emailReg } from 'warbler-js';
const result1 = emailReg('1741847465@qq.com')
const result2 = emailReg('http://warbler.duwanyu.com/')

console.log(result1) // true
console.log(result2) // false
```

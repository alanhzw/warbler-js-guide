<!--
 * @Author: 一尾流莺
 * @Description:用户名校验
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-14 09:32:31
 * @FilePath: \warblerjs-guide\docs\guide\form\usernameReg.md
-->

# 用户名校验

验证用户名，`4` 到 `16` 位，允许 `字母`，`数字`，`下划线`，`减号`。

## 语法

```js
import { usernameReg } from 'warbler-js';
const result = usernameReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const usernameReg = (value) => {
  const reg = /^[a-zA-Z0-9_-]{4,16}$/;
  return reg.test(value);
};
```

## 例子

```js
import { usernameReg } from 'warbler-js';
const result1 = usernameReg('warbler_js01')

console.log(result1) // true
```

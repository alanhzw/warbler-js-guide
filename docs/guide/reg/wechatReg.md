<!--
 * @Author: 一尾流莺
 * @Description:微信号
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-13 19:08:03
 * @FilePath: \warblerjs-guide\docs\guide\reg\wechatReg.md
-->

# 微信号

验证 `微信` 号。`6` 至 `20` 位，要求以 `字母` 开头，允许 `字母`，`数字`，`减号`，`下划线`。

## 语法

```js
import { wechatReg } from 'warbler-js';
const result = wechatReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const wechatReg = (value) => {
  const reg = /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/;
  return reg.test(value);
};
```

## 例子

```js
import { wechatReg } from 'warbler-js';
const result1 = wechatReg('duwanyu515')
const result2 = wechatReg('warbler_js')

console.log(result1) // true
console.log(result2) // true
```

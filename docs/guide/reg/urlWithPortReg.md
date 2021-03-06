<!--
 * @Author: 一尾流莺
 * @Description:必须带端口号的网址
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-14 09:43:40
 * @FilePath: \warblerjs-guide\docs\guide\form\urlWithPortReg.md
-->

# 必须带端口号的网址

验证网址，必须带有端口号，支持`IP`。

## 语法

```js
import { urlWithPortReg } from 'warbler-js';
const result = urlWithPortReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const urlWithPortReg = (value) => {
  const reg = /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/;
  return reg.test(value);
};
```

## 例子

```js
import { urlWithPortReg } from 'warbler-js';
const result1 = urlWithPortReg('http://warblerjs.duwanyu.com')
const result2 = urlWithPortReg('http://warblerjs.duwanyu.com:3000')
const result3 = urlWithPortReg('https://warblerjs.duwanyu.com:3000')

console.log(result1) // false
console.log(result2) // true
console.log(result3) // true
```

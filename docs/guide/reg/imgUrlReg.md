<!--
 * @Author: 一尾流莺
 * @Description:图片链接地址
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-14 09:46:34
 * @FilePath: \warblerjs-guide\docs\guide\form\imgUrlReg.md
-->

# 图片链接地址

验证图片链接地址，`图片格式` 可按需增删，必须包含 `http/https` 。

## 语法

```js
import { imgUrlReg } from 'warbler-js';
const result = imgUrlReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const imgUrlReg = (value) => {
  const reg = /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i;
  return reg.test(value);
};
```

## 例子

```js
import { imgUrlReg } from 'warbler-js';
const result1 = imgUrlReg('http://warbler.duwanyu.com/wc.png')
const result2 = imgUrlReg('https://warbler.duwanyu.com/wc.png')
const result3 = imgUrlReg('warbler.duwanyu.com/wc.png')

console.log(result1) // true
console.log(result2) // true
console.log(result3) // false
```

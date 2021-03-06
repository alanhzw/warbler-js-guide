<!--
 * @Author: 一尾流莺
 * @Description:视频链接地址
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-14 09:46:01
 * @FilePath: \warblerjs-guide\docs\guide\form\videoUrlReg.md
-->

# 视频链接地址

验证视频链接地址，`视频格式` 可按需增删，必须包含 `http/https` 。

## 语法

```js
import { videoUrlReg } from 'warbler-js';
const result = videoUrlReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const videoUrlReg = (value) => {
  const reg = /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i;
  return reg.test(value);
};
```

## 例子

```js
import { videoUrlReg } from 'warbler-js';
const result1 = videoUrlReg('http://warbler.duwanyu.com/wc.mp4')
const result2 = videoUrlReg('https://warbler.duwanyu.com/wc.mp4')
const result3 = videoUrlReg('warbler.duwanyu.com/wc.mp4')

console.log(result1) // true
console.log(result2) // true
console.log(result3) // false
```

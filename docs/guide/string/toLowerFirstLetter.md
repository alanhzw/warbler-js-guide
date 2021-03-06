<!--
 * @Author: 一尾流莺
 * @Description:将字符串的首字母转换成小写字母
 * @Date: 2021-09-13 18:19:33
 * @LastEditTime: 2021-09-16 18:23:18
 * @FilePath: \warblerjs-guide\docs\guide\string\toLowerFirstLetter.md
-->

# 将字符串的首字母转换成小写字母

## 语法


```js
import { toLowerFirstLetter } from 'warbler-js'
const result = toLowerFirstLetter(str)
```

## 参数

- `[first, ...rest]` (**String**) ： 需要将首字母转换成小写字母的字符串 。

## 返回值

**String** ： 将首字母转换成小写字母的字符串。

## 源码

```js
const toLowerFirstLetter = ([first, ...rest]) => first.toLowerCase() + rest.join('');
```

## 例子

```js
import { toLowerFirstLetter } from 'warbler-js'
const initStr = 'Hello,world'
const finallyStr = toLowerFirstLetter(initStr)
console.log(finallyStr) //=> 'hello,world'
```
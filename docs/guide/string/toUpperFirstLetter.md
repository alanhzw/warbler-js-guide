<!--
 * @Author: 一尾流莺
 * @Description:将字符串的首字母转换成大写字母
 * @Date: 2021-09-13 18:19:33
 * @LastEditTime: 2021-09-16 18:23:24
 * @FilePath: \warblerjs-guide\docs\guide\string\toUpperFirstLetter.md
-->

# 将字符串的首字母转换成大写字母

## 语法

```js
import { toUpperFirstLetter } from 'warbler-js'
const result = toUpperFirstLetter(str)
```

## 参数

- `[first, ...rest]` (**String**) ： 需要将首字母转换成大写字母的字符串 。

## 返回值

**String** ： 将首字母转换成大写字母的字符串。

## 源码

```js
const toUpperFirstLetter = ([first, ...rest]) => first.toUpperCase() + rest.join('');
```

## 例子

```js
import { toUpperFirstLetter } from 'warbler-js'
const initStr = 'hello,world'
const finallyStr = toUpperFirstLetter(initStr)
console.log(finallyStr) //=> 'Hello,world
```
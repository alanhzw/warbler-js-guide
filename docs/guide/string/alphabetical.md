<!--
 * @Author: 一尾流莺
 * @Description:将字符串按字母顺序排列
 * @Date: 2021-09-13 18:19:33
 * @LastEditTime: 2021-09-17 18:13:49
 * @FilePath: \warblerjs-guide\docs\guide\string\alphabetical.md
-->

# 将字符串按字母顺序排列

## 语法

```js
import { alphabetical } from 'warbler-js'
const result = alphabetical(str)
```

## 参数

- `str` (**String**) ： 需要按字母顺序排列的字符串 。


## 返回值

**String** ： 按字母顺序排列后的字符串。

## 源码

```js
const alphabetical = (str) => str.split('').sort((a, b) => a.localeCompare(b)).join('');
```

## 例子

```js
import { alphabetical } from 'warbler-js'
const initStr = 'adaskjdhaskjdhjkgrjheg'
const result = alphabetical(initStr)
console.log(result) //=> aaadddegghhhjjjjkkkrss
```
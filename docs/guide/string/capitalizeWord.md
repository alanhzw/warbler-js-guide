<!--
 * @Author: 一尾流莺
 * @Description:将字符串中每个单词的首字母转为大写
 * @Date: 2021-09-13 18:19:33
 * @LastEditTime: 2021-10-08 11:04:03
 * @FilePath: \warblerjs-guide\docs\guide\string\capitalizeWord.md
-->

# 将字符串中每个单词的首字母转为大写

## 语法


```js
import { capitalizeWord } from 'warbler-js'
const result = capitalizeWord(str)
```

## 参数

- `str` (**String**) ： 需要将每个单词的首字母转为大写的字符串 。


## 返回值

**String** ： 每个单词的首字母转为大写后的字符串。

## 源码

```js
const capitalizeWord = (string) => string.replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
```


## 例子


```js
import { capitalizeWord } from 'warbler-js'
const initStr = 'hello world , my name is warbler !'
const finallyStr = capitalizeWord(initStr)
console.log(finallyStr) //=> Hello World , My Name Is Warbler !
```

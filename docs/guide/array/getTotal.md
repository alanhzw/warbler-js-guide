<!--
 * @Author: 一尾流莺
 * @Description:计算数组元素的总和
 * @Date: 2021-09-13 17:26:25
 * @LastEditTime: 2021-09-17 18:12:57
 * @FilePath: \warblerjs-guide\docs\guide\array\getTotal.md
-->

# 计算数组元素的总和

## 语法

```js
import { getTotal } from 'warbler-js'
const result = getTotal(arr)
```

## 参数

- `arr` (**Array**) ： 需要计算总和的数组。

## 返回值

**Number** ： 返回所有元素的总和。

## 源码

```js
const getTotal = (arr) => arr.reduce((pre, cur) => pre + cur, 0);
```

## 例子

```js
import { getTotal } from 'warbler-js'
const ages = [1,3,5,7,8]
const result = getTotal(ages)
console.log(result) //=> 24
```
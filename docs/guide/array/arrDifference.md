<!--
 * @Author: 一尾流莺
 * @Description:获取两个数组之间不同的元素
 * @Date: 2021-09-13 17:26:25
 * @LastEditTime: 2021-09-17 18:12:22
 * @FilePath: \warblerjs-guide\docs\guide\array\arrDifference.md
-->


# 获取两个数组之间不同的元素

## 语法

```js
import { arrDifference } from 'warbler-js'
const result = arrDifference(arr1, arr2)
```

## 参数

- `arr1` (**Array**) ： 需要获取不同元素的数组一。
- `arr2` (**Array**) ： 需要获取不同元素的数组二。


## 返回值

**Array** ： 两个数组之间不同的元素组成的数组。

## 源码


```js
const arrDifference = (arr1, arr2) => arr1.concat(arr2).filter((v, i, arr) => arr.indexOf(v) === arr.lastIndexOf(v));
```

## 例子


```js
import { arrDifference } from 'warbler-js'
const arr1 = [1,2,4,5,8]
const arr2 = [2,3,5,8,9]
const result = arrDifference(arr1,arr2)
console.log(result) //=> [1,4,3,9]
```

<!--
 * @Author: 一尾流莺
 * @Description:获取两个数组之间相同的元素
 * @Date: 2021-09-13 17:26:25
 * @LastEditTime: 2021-09-17 18:12:40
 * @FilePath: \warblerjs-guide\docs\guide\array\arrSimilarity.md
-->

# 获取两个数组之间相同的元素

## 语法

```js
import { arrSimilarity } from 'warbler-js'
const result = arrSimilarity(arr1, arr2)
```

## 参数

- `arr1` (**Array**) ： 需要获取相同元素的数组一。
- `arr2` (**Array**) ： 需要获取相同元素的数组二。


## 返回值

**Array** ： 两个数组之间相同的元素组成的数组。

## 源码


```js
const arrSimilarity = (arr1, arr2) => arr1.filter((v) => arr2.includes(v));
```

## 例子


```js
import { arrSimilarity } from 'warbler-js'
const arr1 = [1,2,4,5,8]
const arr2 = [2,3,5,8,9]
const result = arrSimilarity(arr1,arr2)
console.log(result) //=> [2,5,8]
```

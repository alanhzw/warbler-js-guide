<!--
 * @Author: 一尾流莺
 * @Description:获取数组中指定个数的最大元素
 * @Date: 2021-09-13 17:26:25
 * @LastEditTime: 2021-10-08 10:59:32
 * @FilePath: \warblerjs-guide\docs\guide\array\maxArray.md
-->

# 获取数组中指定个数的最大元素

## 语法

```js
import { maxArray } from 'warbler-js'
const result = maxArray(arr, n)
```

## 参数

- `arr` (**Array**) ： 需要获取最大元素的数组 。
- `n` (**Number**) ： 需要获取最大元素的数量 。

## 返回值

**Array** ： 指定数量的最大元素组成的数组。

## 源码

```js
const maxArray = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);
```

## 例子

```js
import { maxArray } from 'warbler-js'
const ages = [10, 2, 5, 8, 100, 500, 3, 30, 9];
const result1 = maxArray(ages)
const result2 = maxArray(ages,3)
console.log(result1) //=> [500]
console.log(result2) //=> [500, 100, 30]
```
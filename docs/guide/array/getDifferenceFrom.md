<!--
 * @Author: 一尾流莺
 * @Description:获取数组二相对于数组一不同的元素
 * @Date: 2021-09-13 17:26:25
 * @LastEditTime: 2021-09-17 18:12:50
 * @FilePath: \warblerjs-guide\docs\guide\array\getDifferenceFrom.md
-->


# 获取数组二相对于数组一不同的元素

## 语法

```js
import { getDifferenceFrom } from 'warbler-js'
const result = getDifferenceFrom(arr1, arr2)
```

## 参数

- `arr1` (**Array**) ： 需要获取不同元素的数组一。
- `arr2` (**Array**) ： 需要获取不同元素的数组二。


## 返回值

**Array** ： 数组二相对于数组一不同的元素组成的数组。

## 源码


```js
const getDifferenceFrom = (arr1, arr2) => {
  const values = new Set(arr2);
  return arr1.filter((element) => !values.has(element));
};
```

## 例子


```js
import { getDifferenceFrom } from 'warbler-js'
const arr1 = [1,2,4,5,8]
const arr2 = [2,3,5,8,9]
const result = getDifferenceFrom(arr1,arr2)
console.log(result) //=> [1,4]
```
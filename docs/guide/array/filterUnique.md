<!--
 * @Author: 一尾流莺
 * @Description:过滤数组中的唯一值
 * @Date: 2021-09-15 11:17:01
 * @LastEditTime: 2021-09-16 18:21:38
 * @FilePath: \warblerjs-guide\docs\guide\array\filterUnique.md
-->
# 过滤数组中的唯一值

## 语法

```js
import { filterUnique } from 'warbler-js'
const result = filterUnique(arr)
```

## 参数

- `arr` (**Array**) ： 需要过滤的数组。

## 返回值

**Array** ： 过滤后的数组。

## 源码

```js
const filterUnique = (arr) => arr.filter((i) => arr.indexOf(i) !== arr.lastIndexOf(i));
```

## 例子

```js
import { filterUnique } from 'warbler-js'
const arr = [1,2,2,3,3,4,5,5,6]
const result = filterUnique(arr)
console.log(result) //=> [2,2,3,3,5,5]
```
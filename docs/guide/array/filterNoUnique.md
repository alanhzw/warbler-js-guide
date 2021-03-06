<!--
 * @Author: 一尾流莺
 * @Description:过滤数组中的非唯一值
 * @Date: 2021-09-15 11:17:10
 * @LastEditTime: 2021-09-16 18:21:32
 * @FilePath: \warblerjs-guide\docs\guide\array\filterNoUnique.md
-->
# 过滤数组中的非唯一值

## 语法

```js
import { filterNoUnique } from 'warbler-js'
const result = filterNoUnique(arr)
```

## 参数

- `arr` (**Array**) ： 需要过滤的数组。

## 返回值

**Array** ： 过滤后的数组。

## 源码

```js
const filterNoUnique = (arr) => arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));
```

## 例子

```js
import { filterNoUnique } from 'warbler-js'
const arr = [1,2,2,3,3,4,5,5,6]
const result = filterNoUnique(arr)
console.log(result) //=> [1,4,6]
```
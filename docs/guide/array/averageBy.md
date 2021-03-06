<!--
 * @Author: 一尾流莺
 * @Description:计算对象数组指定健的平均值
 * @Date: 2021-09-13 17:26:25
 * @LastEditTime: 2021-09-16 18:21:14
 * @FilePath: \warblerjs-guide\docs\guide\array\averageBy.md
-->

# 计算对象数组指定健的平均值

## 语法

```js
import { averageBy } from 'warbler-js'
const result = averageBy(arr, key)
```

## 参数

- `arr` (**Array**) ： 需要计算平均值的数组。
- `key` (**String**) ： 需要计算平均值的 `key`。


## 返回值

**Number** ： 指定 `key` 的平均值。


## 源码

```js
const averageBy = (arr, key) => arr.reduce((pre, cur) => pre + cur[key], 0) / arr.length;
```

## 例子


```js
import { averageBy } from 'warbler-js'
const fruits = [
    {name: 'Grapes', quantity: 2},
    {name: 'Bananas', quantity: 5},
    {name: 'Apples', quantity: 10},
    {name: 'Grapes', quantity: 4},
    {name: 'Grapes', quantity: 6},
];
const result = averageBy(fruits,'quantity')
console.log(result) //=> 5.4
```

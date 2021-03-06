<!--
 * @Author: 一尾流莺
 * @Description:计算对象数组某个属性值的总和
 * @Date: 2021-09-13 17:26:25
 * @LastEditTime: 2021-09-17 18:13:03
 * @FilePath: \warblerjs-guide\docs\guide\array\getTotalBy.md
-->

# 计算对象数组某个属性值的总和

## 语法

```js
import { getTotalBy } from 'warbler-js'
const result = getTotalBy(arr, key)
```

## 参数

- `arr` (**Array**) ： 需要计算某个属性值总和的对象数组。
- `key` (**String**) ： 需要计算总和的 `key`。

## 返回值

**Number** ： 对象数组某个属性值的总和。

## 源码

```js
const getTotalBy = (arr, key) => arr.reduce((pre, cur) => pre + cur[key], 0);
```

## 例子

```js
import { getTotalBy } from 'warbler-js'
const fruits = [
  {name: 'Grapes', quantity: 2},
  {name: 'Bananas', quantity: 5},
  {name: 'Apples', quantity: 10},
  {name: 'Grapes', quantity: 4},
  {name: 'Grapes', quantity: 6},
];
const result = getTotalBy(fruits,'quantity')
console.log(result) //=> 27
```
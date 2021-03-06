<!--
 * @Author: 一尾流莺
 * @Description:根据对象的键值在数组中查找对象
 * @Date: 2021-09-13 18:00:49
 * @LastEditTime: 2021-09-16 18:21:45
 * @FilePath: \warblerjs-guide\docs\guide\array\findObjectInArray.md
-->

# 根据对象的键值在数组中查找对象

## 语法

```js
import { findObjectInArray } from 'warbler-js';
const result = findObjectInArray(arr, key, value);
```

## 参数

- `arr` (**Array**) ： 待查找的目标数组。
- `key` (**String**) ： 需要查找的对象的 `key` 。
- `value` (**String | number**) ： 需要查找的对象的 `value` 。

## 返回值

**Obj** ： 返回查找到的对象。

## 源码

```js
const findObjectInArray = (arr, key, value) => arr.find((obj) => obj[key] === value);
```

## 例子

```js
import { findObjectInArray } from 'warbler-js';
const fruits = [
  { name: 'Bananas', quantity: 5 },
  { name: 'Apples', quantity: 10 },
  { name: 'Grapes', quantity: 2 },
];
const result = findObjectInArray(fruits, 'name', 'Apples');
console.log(result); //=> {name: 'Apples', quantity: 10}
```

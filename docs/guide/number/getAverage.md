<!--
 * @Author: 一尾流莺
 * @Description:求平均值
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-09-16 18:22:44
 * @FilePath: \warblerjs-guide\docs\guide\number\getAverage.md
-->

# 求平均值

## 语法

```js
import { getAverage } from 'warbler-js';
const result = getAverage(...args);
```

## 参数

- `...args` (**Number**) ： 目标数字，不限制参数数量。

## 返回值

**Number** ： 所有参数的平均数。

## 源码

```js
const getAverage = (...args) => args.reduce((a, b) => a + b) / args.length;
```

## 例子

```js
import { getAverage } from 'warbler-js';
const result1 = getAverage(1, 2, 3, 4);
const result2 = getAverage(1, 2, 3, 4, 5, 6, 7, 8);
console.log(result1); //=> 2.5
console.log(result2); //=> 4.5
```

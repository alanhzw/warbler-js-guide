<!--
 * @Author: 一尾流莺
 * @Description:生成范围内的随机数
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-09-17 18:13:34
 * @FilePath: \warblerjs-guide\docs\guide\number\randomInRange.md
-->

# 生成范围内的随机数

## 语法

```js
import { randomInRange } from 'warbler-js'
const result1 = randomInRange(min, max)
```

## 参数

- `min` (**Number**) ： 生成随机数的最小范围 。
- `max` (**Number**) ： 生成随机数的最大范围 。

## 返回值

**Number** ：一个范围内的随机数。


## 源码

```js
const randomInRange = (min, max) => Math.random() * (max - min) + min;
```

## 例子

```js
import { randomInRange } from 'warbler-js'
const result = randomInRange(3,9)
console.log(result) //=> 7.807953357253535
```

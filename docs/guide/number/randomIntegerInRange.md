<!--
 * @Author: 一尾流莺
 * @Description:生成范围内的随机整数
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-09-17 18:13:40
 * @FilePath: \warblerjs-guide\docs\guide\number\randomIntegerInRange.md
-->
# 生成范围内的随机整数

## 语法

```js
import { randomIntegerInRange } from 'warbler-js'
const result1 = randomIntegerInRange(min, max)
```

## 参数

- `min` (**Number**) ： 生成随机整数的最小范围 。
- `max` (**Number**) ： 生成随机整数的最大范围 。

## 返回值

**Number** ：一个范围内的随机整数。


## 源码

```js
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
```

## 例子

```js
import { randomIntegerInRange } from 'warbler-js'
const result = randomIntegerInRange(3,9)
console.log(result) //=> 7
```
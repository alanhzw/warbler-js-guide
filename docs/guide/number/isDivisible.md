<!--
 * @Author: 一尾流莺
 * @Description:判断数字是否可以整除
 * @Date: 2021-09-15 11:19:03
 * @LastEditTime: 2021-09-26 14:24:44
 * @FilePath: \warblerjs-guide\docs\guide\number\isDivisible.md
-->
# 判断数字是否可以整除

## 语法

```js
import { isDivisible } from 'warbler-js'
const result1 = isDivisible(dividend, divisor)
```

## 参数

- `dividend` (**Number**) ： 被除数 。
- `divisor` (**Number**) ： 除数 。

## 返回值

**Boolean** ：`true` 可以整除， `false` 不可以整除。


## 源码

```js
const isDivisible = (dividend, divisor) => dividend % divisor === 0;
```

## 例子

```js
import { isDivisible } from 'warbler-js'
const result1 = isDivisible(6,3)
const result2 = isDivisible(5,3)
console.log(result1) //=> true
console.log(result2) //=> false
```
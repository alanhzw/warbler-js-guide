<!--
 * @Author: 一尾流莺
 * @Description:判断奇偶
 * @Date: 2021-09-13 18:17:43
 * @LastEditTime: 2021-09-16 18:22:57
 * @FilePath: \warblerjs-guide\docs\guide\number\isEvenNumber.md
-->

# 判断奇偶

## 语法

```js
import { isEvenNumber } from 'warbler-js';
const result = isEvenNumber(num);
```

## 参数

- `num` (**Number**) ： 需要判断奇偶的数字。

## 返回值

**Boolean** ： `true` 偶数， `false` 奇数。

## 源码

```js
const isEvenNumber = (num) => num % 2 === 0;
```

## 例子

```js
import { isEvenNumber } from 'warbler-js';
const result1 = isEvenNumber(4);
const result2 = isEvenNumber(5);
console.log(result1); //=> true
console.log(result2); //=> false
```

<!--
 * @Author: 一尾流莺
 * @Description:随机化数组元素的顺序
 * @Date: 2021-09-13 17:26:25
 * @LastEditTime: 2021-09-17 18:13:12
 * @FilePath: \warblerjs-guide\docs\guide\array\shuffleArr.md
-->


# 随机化数组元素的顺序

## 语法

```js
import { shuffleArr } from 'warbler-js'
const result = shuffleArr(arr)
```

## 参数

- `arr` (**Array**) ： 需要打乱顺序的数组。

## 返回值

**Array** ： 打乱顺序后的数组。

## 源码


```js
const shuffleArr = (arr) => arr.sort(() => Math.random() - 0.5);
```

## 例子


```js
import { shuffleArr } from 'warbler-js'
const ages = [1,2,3,4,5,6,7,8]
const result = shuffleArr(ages)
console.log(result) //=> [1, 7, 2, 3, 8, 4, 5, 6]
```
<!--
 * @Author: 一尾流莺
 * @Description:检测所有元素是否符合要求
 * @Date: 2021-09-13 17:26:25
 * @LastEditTime: 2021-09-16 18:21:51
 * @FilePath: \warblerjs-guide\docs\guide\array\isAllPass.md
-->

# 检测所有元素是否符合要求

## 语法

```js
import { isAllPass } from 'warbler-js'
const result = isAllPass(arr, fn)
```

## 参数

- `arr` (**Array**) ： 需要检测的数组。
- `fn` (**Function**) ： 验证条件的回调函数。

## 返回值


**Boolean** ：  `true` 所有元素都通过检测 ， `false` 存在元素没有通过检测。


## 源码

```js
const isAllPass = (arr, fn) => arr.every(fn);
```

## 例子


```js
import { isAllPass } from 'warbler-js'
const ages = [30, 24, 28, 32];
const result1 = isAllPass(ages, (item) => item < 40);
const result2 = isAllPass(ages, (item) => item > 30);
console.log(result1); //=> true
console.log(result2); //=> false
```
<!--
 * @Author: 一尾流莺
 * @Description:获取指定日期是所在年份的第几天
 * @Date: 2021-09-13 18:16:32
 * @LastEditTime: 2021-09-26 18:05:07
 * @FilePath: \warblerjs-guide\docs\guide\date\dayOfYear.md
-->
# 获取指定日期是所在年份的第几天

## 语法


```js
import { dayOfYear } from 'warbler-js'
const result = dayOfYear(date)
```

## 参数

- `date` (**String**) ： 指定日期，可传参数同 `new Date()`，并且支持 `yyyy-mm-dd`格式，不传默认获取当天。


## 返回值

**Number** ： 指定日期所在年份的第几天。


## 源码

```js
const dayOfYear = (date) => {
  const myData = date ? new Date(typeof date === 'string' && date.includes('-') ? date.replace(/-/g, '/') : date) : new Date();
  return Math.floor((myData - new Date(myData.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
};
```

## 例子


```js
import { dayOfYear } from 'warbler-js'
const result1 = dayOfYear()
const result2 = dayOfYear("2021,9,15")
const result3 = dayOfYear("2021-9-16")
console.log(result1) //=> 257
console.log(result2) //=> 258
console.log(result3) //=> 259
```
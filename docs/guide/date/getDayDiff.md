<!--
 * @Author: 一尾流莺
 * @Description:获取两个日期之间以天为单位的差值
 * @Date: 2021-09-13 18:16:32
 * @LastEditTime: 2021-09-18 11:47:12
 * @FilePath: \warblerjs-guide\docs\guide\date\getDayDiff.md
-->

# 获取两个日期之间以天为单位的差值

## 语法


```js
import { getDayDiff } from 'warbler-js'
const result = getDayDiff(date1, date2)
```

## 参数

- `date1` (**String**) ： 指定日期1，可传参数同 `new Date()`，并且支持 `yyyy-mm-dd`格式。
- `date2` (**String**) ： 指定日期2，可传参数同 `new Date()`，并且支持 `yyyy-mm-dd`格式。

## 返回值

**Number** ： 两个日期之间以天为单位的差值。


## 源码

```js
const getDayDiff = (date1, date2) => {
  const myDate1 = typeof date1 === 'string' && date1.includes('-') ? date1.replace(/-/g, '/') : date1;
  const myDate2 = typeof date2 === 'string' && date2.includes('-') ? date2.replace(/-/g, '/') : date2;
  return Math.abs((new Date(myDate2) - new Date(myDate1)) / (1000 * 3600 * 24));
};
```

## 例子


```js
import { getDayDiff } from 'warbler-js'
// 大的日期在后面
const result1 = getDayDiff("2021,9,15",'2021-12-03')
// 大的日期在前面
const result2 = getDayDiff("2022,9,15",'2021-12-03')
console.log(result1) //=> 79
console.log(result2) //=> 286
```

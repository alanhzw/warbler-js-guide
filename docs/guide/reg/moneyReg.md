<!--
 * @Author: 一尾流莺
 * @Description:货币金额
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-13 18:47:08
 * @FilePath: \warblerjs-guide\docs\guide\reg\moneyReg.md
-->

# 货币金额

验证货币金额，只支持 `正数`、不支持校验 `千分位分隔符`。

## 语法

```js
import { moneyReg } from 'warbler-js';
const result = moneyReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const moneyReg = (value) => {
  const reg = /(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/;
  return reg.test(value);
};
```

## 例子

```js
import { moneyReg } from 'warbler-js';
  const result1 = moneyReg('500')
  const result2 = moneyReg('-3')
  const result3 = moneyReg('3.99')
  const result4 = moneyReg('12,345,678.90')
  console.log(result1) // true
  console.log(result2) // false
  console.log(result3) // true
  console.log(result4) // false
```

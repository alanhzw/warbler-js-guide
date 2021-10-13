<!--
 * @Author: 一尾流莺
 * @Description:银行卡号
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-13 18:54:01
 * @FilePath: \warblerjs-guide\docs\guide\reg\bankReg.md
-->

# 银行卡号

验证银行卡号，`10` 到 `30` 位，覆盖对公/私账户， 参考[微信支付](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=22_1)。

## 语法

```js
import { bankReg } from 'warbler-js';
const result = bankReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const bankReg = (value) => {
  const reg = /^[1-9]\d{9,29}$/;
  return reg.test(value);
};
```

## 例子

```js
import { bankReg } from 'warbler-js';
const result1 = bankReg('6212262502009182455')

console.log(result1) // true
```
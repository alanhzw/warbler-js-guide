<!--
 * @Author: 一尾流莺
 * @Description:网址
 * @Date: 2021-09-13 18:18:23
 * @LastEditTime: 2021-10-14 09:42:57
 * @FilePath: \warblerjs-guide\docs\guide\form\urlReg.md
-->

# 网址

验证网址，支持 `端口号` ，和 `?+参数` 以及 `#+参数`。

## 语法

```js
import { urlReg } from 'warbler-js';
const result = urlReg(value);
```

## 参数

- `value` (**String**) ： 待验证字符串。

## 返回值

**Boolean** ： 是否通过验证，`true` 通过验证， `false` 没有通过验证。

## 源码

```js
const urlReg = (value) => {
  const reg = /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;
  return reg.test(value);
};
```

## 例子

```js
import { urlReg } from 'warbler-js';
const result1 = urlReg('http://warblerjs.duwanyu.com')
const result2 = urlReg('https://warblerjs.duwanyu.com')
const result3 = urlReg('https://warblerjs.duwanyu.com:3000')
const result4 = urlReg('https://warblerjs.duwanyu.com?name=hzw&age=18')
const result5 = urlReg('https://warblerjs.duwanyu.com/#/name=hzw&age=18')

console.log(result1) // true
console.log(result2) // true
console.log(result3) // true
console.log(result4) // true
console.log(result5) // true
```

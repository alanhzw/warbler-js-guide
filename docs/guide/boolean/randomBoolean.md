<!--
 * @Author: 一尾流莺
 * @Description:获得一个随机的布尔值
 * @Date: 2021-09-13 18:15:08
 * @LastEditTime: 2021-09-16 18:22:14
 * @FilePath: \warblerjs-guide\docs\guide\boolean\randomBoolean.md
-->

# 获得一个随机的布尔值

## 语法

```js
import { randomBoolean } from 'warbler-js';
const result = randomBoolean();
```

## 参数

- `null`

## 返回值

**Boolean** ： 一个随机的布尔值。

## 源码

```js
const randomBoolean = () => Math.random() >= 0.5;
```

## 例子

```js
import { randomBoolean } from 'warbler-js';
const result = randomBoolean();
console.log(result); //=> true
```

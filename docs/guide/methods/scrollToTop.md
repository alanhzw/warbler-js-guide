<!--
 * @Author: 一尾流莺
 * @Description:滚动到页面顶部
 * @Date: 2021-09-13 17:26:25
 * @LastEditTime: 2021-09-17 18:13:28
 * @FilePath: \warblerjs-guide\docs\guide\methods\scrollToTop.md
-->

# 滚动到页面顶部

## 语法


```js
import { scrollToTop } from 'warbler-js';
scrollToTop()
```

## 参数

- `null`

## 返回值

- `void`

## 源码


```js
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
```

## 例子


```js
import { scrollToTop } from 'warbler-js';
scrollToTop()
```
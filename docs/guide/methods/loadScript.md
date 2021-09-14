<!--
 * @Author: 一尾流莺
 * @Description:异步加载script脚本
 * @Date: 2021-09-13 18:16:32
 * @LastEditTime: 2021-09-14 17:10:01
 * @FilePath: \warblerjs-guide\docs\guide\methods\imitateDelay copy.md
-->

# 异步加载script脚本

## 语法

```js
loadScript('https://cdn.bootcdn.net/ajax/libs/vConsole/3.7.0/vconsole.min.js')
```

## 参数

- `src` (**String**) ： 需要异步加载的脚本地址。


## 返回值

- **Promise**：Promise

## 源码


```js
const loadScript = (src) => new Promise((resolve) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.onload = () => {
    resolve();
  };
  script.src = src;
  document.body.appendChild(script);
});
```

## 例子


```js
import { loadScript } from 'warbler-js';
const loadVConsole = async () => {
  await loadScript('https://cdn.bootcdn.net/ajax/libs/vConsole/3.7.0/vconsole.min.js');
};
loadVConsole()
```
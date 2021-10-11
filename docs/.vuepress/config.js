/*
 * @Author: 一尾流莺
 * @Description:配置文件
 * @Date: 2021-09-13 15:29:43
 * @LastEditTime: 2021-10-09 18:07:53
 * @FilePath: \warblerjs-guide\docs\.vuepress\config.js
 */

const nav = require('./nav')
const sidebar = require('./sidebar')

module.exports = {
  head: [
    [
      'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
      { rel: 'icon', href: '/images/favicon.png' }
    ],
    [
      "script",
      {},
      `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?e9587bb399d9da1f501a9d086b136fa9";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
        `
    ]
  ],
  title: 'warbler-js',
  description: '一个 JavaScript 实用工具库',
  themeConfig: {
    logo: '/images/favicon.png',
    nav,
    sidebar,
    sidebarDepth: 0
  },
  markdown: {
    // lineNumbers: true,
    extractHeaders: ['h1', 'h2', 'h3', 'h4']
  },
  smoothScroll: true,
}

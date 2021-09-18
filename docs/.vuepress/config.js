/*
 * @Author: 一尾流莺
 * @Description:配置文件
 * @Date: 2021-09-13 15:29:43
 * @LastEditTime: 2021-09-18 09:32:39
 * @FilePath: \warblerjs-guide\docs\.vuepress\config.js
 */

const nav = require('./nav')
const sidebar = require('./sidebar')

module.exports = {
  head: [
    [
      'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
      { rel: 'icon', href: '/images/favicon.png' }
    ]
  ],
  title: 'warbler-js',
  description: '一个 JavaScript 实用工具库',
  themeConfig: {
    logo: '/images/favicon.png',
    nav,
    sidebar,
    sidebarDepth: 2
  },
  markdown: {
    // lineNumbers: true,
    extractHeaders: ['h1', 'h2', 'h3', 'h4']
  },
  smoothScroll: true,
}

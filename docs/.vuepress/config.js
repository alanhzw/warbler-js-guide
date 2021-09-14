/*
 * @Author: 一尾流莺
 * @Description:配置文件
 * @Date: 2021-09-13 15:29:43
 * @LastEditTime: 2021-09-14 17:19:45
 * @FilePath: \warblerjs-guide\docs\.vuepress\config.js
 */

const nav = require('./nav')
const sidebar = require('./sidebar')

module.exports = {
  title: 'warbler-js',
  description: '一个 JavaScript 实用工具库',
  themeConfig: {
    logo: '/images/main.jpg',
    nav,
    sidebar,
    sidebarDepth: 3
  },
  markdown: {
    // lineNumbers: true,
    extractHeaders: ['h1', 'h2', 'h3', 'h4']
  },
  smoothScroll: true,
}

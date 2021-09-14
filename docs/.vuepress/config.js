/*
 * @Author: 一尾流莺
 * @Description:配置文件
 * @Date: 2021-09-13 15:29:43
 * @LastEditTime: 2021-09-14 10:14:34
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
  },
  markdown: {
    extractHeaders: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  },
  smoothScroll: true,
}

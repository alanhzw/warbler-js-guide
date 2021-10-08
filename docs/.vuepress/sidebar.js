/*
 * @Author: 一尾流莺
 * @Description:侧边栏
 * @Date: 2021-09-13 16:58:40
 * @LastEditTime: 2021-10-08 09:55:13
 * @FilePath: \warblerjs-guide\docs\.vuepress\sidebar.js
 */

const sidebar = {
  "/guide/": require('../guide/sidebar'),
  "/version/": require('../version/sidebar'),
  "/warbler/": require('../warbler/sidebar')

}
module.exports = sidebar
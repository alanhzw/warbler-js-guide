/*
 * @Author: 一尾流莺
 * @Description:
 * @Date: 2021-10-08 10:29:19
 * @LastEditTime: 2021-10-08 10:35:52
 * @FilePath: \warblerjs-guide\docs\guide\sidebar\number.js
 */
module.exports = [
  {
    title: '判断',
    collapsable: false,
    children: [
      ['number/isEvenNumber', '判断奇偶'],
      ['number/isDivisible', '判断数字是否可以整除'],
    ],
  },
  {
    title: '计算',
    collapsable: false,
    children: [
      ['number/getAverage', '求平均值'],
    ],
  },
  {
    title: '随机数',
    collapsable: false,
    children: [
      ['number/randomInRange', '生成范围内的随机数'],
      ['number/randomIntegerInRange', '生成范围内的随机整数'],
    ],
  },
];

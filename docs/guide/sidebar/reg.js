/*
 * @Author: 一尾流莺
 * @Description:正则表达式
 * @Date: 2021-10-08 10:30:04
 * @LastEditTime: 2021-10-13 18:48:48
 * @FilePath: \warblerjs-guide\docs\guide\sidebar\reg.js
 */
module.exports = [
  {
    title: '数字',
    collapsable: false,
    children: [
      ['reg/integerReg', '整数(包含0)'],
      ['reg/noZeroIntegerReg', '整数(不包含0)'],
      ['reg/nonPositiveIntegerReg', '正整数(包含0)'],
      ['reg/positiveIntegerReg', '正整数(不包含0)'],
      ['reg/zeroNegativeIntegerReg', '负整数(包含0)'],
      ['reg/negativeIntegerReg', '负整数(不包含0)'],
      ['reg/currencyReg', '货币金额，支持负数'],
      ['reg/moneyReg', '货币金额'],
      ['reg/numberReg', '数字'],
    ],
  },
  {
    title: '号码',
    collapsable: false,
    children: [
    ],
  },
  {
    title: '表单',
    collapsable: false,
    children: [
    ],
  },
  {
    title: '网络',
    collapsable: false,
    children: [
    ],
  },
];

/*
 * @Author: 一尾流莺
 * @Description:正则表达式
 * @Date: 2021-10-08 10:30:04
 * @LastEditTime: 2021-10-13 19:14:00
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
      ['reg/easyTelReg', '中国手机号(简单)'],
      ['reg/complexTelReg', '中国手机号(复杂)'],
      ['reg/strictTelReg', '中国手机号(严格)'],
      ['reg/bankReg', '银行卡号'],
      ['reg/newCarsReg', '车牌号（新能源）'],
      ['reg/carsReg', '车牌号（非新能源）'],
      ['reg/allCarsReg', '车牌号（全）'],
      ['reg/landlineReg', '座机'],
      ['reg/idFirstReg', '身份证号（一代）'],
      ['reg/idSecondReg', '身份证号（二代）'],
      ['reg/idReg', '身份证号（一二代）'],
      ['reg/idHongKongReg', '身份证号（香港）'],
      ['reg/idMacaoReg', '身份证号（澳门）'],
      ['reg/idTaiwanReg', '身份证号（台湾）'],
      ['reg/passportReg', '护照'],
      ['reg/qqReg', 'QQ号'],
      ['reg/wechatReg', '微信号'],
      ['reg/trainReg', '火车车次'],
      ['reg/imeiReg', '手机机身码(IMEI)'],
      ['reg/codsReg', '统一社会信用代码(宽松)'],
      ['reg/strictCodsReg', '统一社会信用代码(严格)'],
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

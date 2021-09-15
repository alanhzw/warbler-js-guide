/*
 * @Author: 一尾流莺
 * @Description:
 * @Date: 2021-09-13 17:03:55
 * @LastEditTime: 2021-09-15 11:19:30
 * @FilePath: \warblerjs-guide\docs\guide\sidebar.js
 */

module.exports = [
  ['', '文档'],
  {
    title: '数组',
    collapsable: true,
    children: [
      ['array/arrWithoutDupli', '删除数组中的重复元素'],
      ['array/arrObjectWithoutDupli', '删除对象数组中的重复元素'],
      ['array/findObjectInArray', '根据对象的键值在数组中查找对象'],
      ['array/countFrequency', '计算数组中元素的出现次数'],
      ['array/countObjFrequency', '计算对象数组中某个属性值的出现次数'],
      ['array/filterUnique', '过滤数组中的唯一值'],
      ['array/filterNoUnique', '过滤数组中的非唯一值'],
    ],
  },
  {
    title: '布尔值',
    collapsable: true,
    children: [
      ['boolean/randomBoolean', '获得一个随机的布尔值'],
    ],
  },
  {
    title: '日期',
    collapsable: true,
    children: [
      ['date/dayOfYear', '获取指定日期是所在年份的第几天'],
    ],
  },

  {
    title: '函数',
    collapsable: true,
    children: [
    ],
  },
  {
    title: '常用方法',
    collapsable: true,
    children: [
      ['methods/imitateDelay', '模拟延迟'],
      ['methods/loadScript', '异步加载script脚本'],

    ],
  },
  {
    title: '数字',
    collapsable: true,
    children: [
      ['number/getAverage', '求平均值'],
      ['number/isEvenNumber', '判断奇偶'],
      ['number/isDivisible', '判断数字是否可以整除'],
    ],
  },
  {
    title: '对象',
    collapsable: true,
    children: [
    ],
  },
  {
    title: '字符串',
    collapsable: true,
    children: [
      ['string/reverseString', '反转字符串'],
      ['string/toUpperFirstLetter', '将字符串的首字母转换成大写字母'],
      ['string/toLowerFirstLetter', '将字符串的首字母转换成小写字母'],

    ],
  },
];

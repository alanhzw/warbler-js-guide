/*
 * @Author: 一尾流莺
 * @Description:
 * @Date: 2021-09-13 17:03:55
 * @LastEditTime: 2021-09-30 11:04:06
 * @FilePath: \warblerjs-guide\docs\guide\sidebar.js
 */

module.exports = [
  ['', '文档'],
  {
    title: '数组(17)',
    collapsable: true,
    children: [
      ['array/arrWithoutDupli', '删除数组中的重复元素'],
      ['array/arrObjectWithoutDupli', '删除对象数组中的重复元素'],
      ['array/findObjectInArray', '根据对象的键值在数组中查找对象'],
      ['array/countFrequency', '计算数组中元素的出现次数'],
      ['array/countObjFrequency', '计算对象数组中某个属性值的出现次数'],
      ['array/filterUnique', '过滤数组中的唯一值'],
      ['array/filterNoUnique', '过滤数组中的非唯一值'],
      ['array/averageBy', '计算对象数组指定健的平均值'],
      ['array/isAllPass', '检测所有元素是否符合要求'],
      ['array/minArray', '获取数组中指定个数的最小元素'],
      ['array/maxArray', '获取数组中指定个数的最大元素'],
      ['array/arrDifference', '获取两个数组之间不同的元素'],
      ['array/arrSimilarity', '获取两个数组之间相同的元素'],
      ['array/getDifferenceFrom', '获取数组二相对于数组一不同的元素'],
      ['array/getTotal', '计算数组元素的总和'],
      ['array/getTotalBy', '计算对象数组某个属性值的总和'],
      ['array/shuffleArr', '随机化数组元素的顺序'],
    ],
  },
  {
    title: '日期(5)',
    collapsable: true,
    children: [
      ['date/dayOfYear', '获取指定日期是所在年份的第几天'],
      ['date/getDayDiff', '获取两个日期之间的差值'],
      ['date/isToday', '判断指定日期是不是今天'],
      ['date/isTomorrow', '判断指定日期是不是n天后'],
      ['date/isYesterday', '判断指定日期是不是n天前'],
    ],
  },
  {
    title: '数字(5)',
    collapsable: true,
    children: [
      ['number/getAverage', '求平均值'],
      ['number/isEvenNumber', '判断奇偶'],
      ['number/isDivisible', '判断数字是否可以整除'],
      ['number/randomInRange', '生成范围内的随机数'],
      ['number/randomIntegerInRange', '生成范围内的随机整数'],
    ],
  },
  {
    title: '字符串(5)',
    collapsable: true,
    children: [
      ['string/reverseString', '反转字符串'],
      ['string/alphabetical', '将字符串按字母顺序排列'],
      ['string/toUpperFirstLetter', '将字符串的首字母转换成大写字母'],
      ['string/toLowerFirstLetter', '将字符串的首字母转换成小写字母'],
      ['string/capitalizeWord', '将字符串中每个单词的首字母转为大写'],
    ],
  },
  {
    title: '正则(0)',
    collapsable: true,
    children: [
    ],
  },
  {
    title: '函数(0)',
    collapsable: true,
    children: [
    ],
  },
  {
    title: '对象(0)',
    collapsable: true,
    children: [
    ],
  },
  {
    title: '布尔值(1)',
    collapsable: true,
    children: [
      ['boolean/randomBoolean', '获得一个随机的布尔值'],
    ],
  },
  {
    title: '常用方法(4)',
    collapsable: true,
    children: [
      ['methods/imitateDelay', '模拟延迟'],
      ['methods/loadScript', '异步加载script脚本'],
      ['methods/getCurrentUrl', '获取当前页面的URL'],
      ['methods/scrollToTop', '滚动到页面顶部'],
    ],
  },
];

/*
 * @Author: 一尾流莺
 * @Description:
 * @Date: 2021-10-08 10:29:12
 * @LastEditTime: 2021-10-29 11:29:06
 * @FilePath: \warblerjs-guide\docs\guide\sidebar\array.js
 */
module.exports = [
  {
    title: '去重',
    collapsable: false,
    children: [
      ['array/arrWithoutDupli', '删除数组中的重复元素'],
      ['array/arrObjectWithoutDupli', '删除对象数组中的重复元素'],
    ],
  },
  {
    title: '检测',
    collapsable: false,
    children: [
      ['array/isAllPass', '检测所有元素是否符合要求'],

    ],
  },
  {
    title: '过滤',
    collapsable: false,
    children: [
      ['array/filterUnique', '过滤数组中的唯一值'],
      ['array/filterNoUnique', '过滤数组中的非唯一值'],
    ],
  },
  {
    title: '查找',
    collapsable: false,
    children: [
      ['array/findObjectInArray', '根据对象的键值在数组中查找对象'],
      ['array/minArray', '获取数组中指定个数的最小元素'],
      ['array/maxArray', '获取数组中指定个数的最大元素'],
      ['array/arrDifference', '获取两个数组之间不同的元素'],
      ['array/arrSimilarity', '获取两个数组之间相同的元素'],
      ['array/getDifferenceFrom', '获取数组二相对于数组一不同的元素'],

    ],
  },
  {
    title: '计算',
    collapsable: false,
    children: [
      ['array/countFrequency', '计算数组中元素的出现次数'],
      ['array/countObjFrequency', '计算对象数组中某个属性值的出现次数'],
      ['array/averageBy', '计算对象数组指定健的平均值'],
      ['array/getTotal', '计算数组元素的总和'],
      ['array/getTotalBy', '计算对象数组某个属性值的总和'],
    ],
  },
  {
    title: '移除',
    collapsable: false,
    children: [
      ['array/arrRemoveEle', '根据元素值移除数组的元素'],
      ['array/arrRemoveFunEle', '根据函数名称移除函数数组的元素'],
      ['array/arrRemoveObjEle', '根据对象数组的属性值移除数组的元素'],
    ],
  },
  {
    title: '其它',
    collapsable: false,
    children: [
      ['array/shuffleArr', '随机化数组元素的顺序'],
    ],
  },
];

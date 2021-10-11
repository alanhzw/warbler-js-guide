/*
 * @Author: 一尾流莺
 * @Description:
 * @Date: 2021-09-13 17:03:55
 * @LastEditTime: 2021-10-09 17:52:37
 * @FilePath: \warblerjs-guide\docs\guide\sidebar.js
 */

const arrayChildren = require('./sidebar/array');
const methodsChildren = require('./sidebar/methods');
const numberChildren = require('./sidebar/number');
const regChildren = require('./sidebar/reg');
const stringChildren = require('./sidebar/string');
const booleanChildren = require('./sidebar/boolean');
const functionChildren = require('./sidebar/function');
const objectChildren = require('./sidebar/object');
const dateChildren = require('./sidebar/date');

// 计算每种分类的方法的总数量
const getTotalBy = (arr, key) => arr.reduce((pre, cur) => {
  if (cur[key]) {
    return pre + cur[key].length;
  }
  return pre;
}, 0);

module.exports = [
  ['', '文档'],
  {
    title: `数组(${getTotalBy(arrayChildren, 'children')})`,
    collapsable: true,
    children: arrayChildren,
  },
  {
    title: `日期(${getTotalBy(dateChildren, 'children')})`,
    collapsable: true,
    children: dateChildren,
  },
  {
    title: `数字(${getTotalBy(numberChildren, 'children')})`,
    collapsable: true,
    children: numberChildren,
  },
  {
    title: `字符串(${getTotalBy(stringChildren, 'children')})`,
    collapsable: true,
    children: stringChildren,
  },
  {
    title: `正则(${getTotalBy(regChildren, 'children')})`,
    collapsable: true,
    children: regChildren,
  },
  {
    title: `函数(${getTotalBy(functionChildren, 'children')})`,
    collapsable: true,
    children: functionChildren,
  },
  {
    title: `对象(${getTotalBy(objectChildren, 'children')})`,
    collapsable: true,
    children: objectChildren,
  },
  {
    title: `布尔值(${getTotalBy(booleanChildren, 'children')})`,
    collapsable: true,
    children: booleanChildren,
  },
  {
    title: `常用方法(${getTotalBy(methodsChildren, 'children')})`,
    collapsable: true,
    children: methodsChildren,
  },
];

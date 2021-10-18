/*
 * @Author: 一尾流莺
 * @Description:
 * @Date: 2021-10-08 10:29:32
 * @LastEditTime: 2021-10-18 11:37:54
 * @FilePath: \warblerjs-guide\docs\guide\sidebar\date.js
 */
module.exports = [
  {
    title: '判断',
    collapsable: false,
    children: [
      ['date/isToday', '判断指定日期是不是今天'],
      ['date/isTomorrow', '判断指定日期是不是n天后'],
      ['date/isYesterday', '判断指定日期是不是n天前'],
      ['date/isScheduled', '判断是否达到指定时间'],
    ],
  },
  {
    title: '获取',
    collapsable: false,
    children: [
      ['date/dayOfYear', '获取指定日期是所在年份的第几天'],
      ['date/getDayDiff', '获取两个日期之间的差值'],
    ],
  },

];

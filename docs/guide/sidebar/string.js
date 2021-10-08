/*
 * @Author: 一尾流莺
 * @Description:
 * @Date: 2021-10-08 10:29:27
 * @LastEditTime: 2021-10-08 10:35:41
 * @FilePath: \warblerjs-guide\docs\guide\sidebar\string.js
 */
module.exports = [
  {
    title: '排序',
    collapsable: false,
    children: [
      ['string/alphabetical', '将字符串按字母顺序排列'],
    ],
  },
  {
    title: '转换',
    collapsable: false,
    children: [
      ['string/toUpperFirstLetter', '将字符串的首字母转换成大写字母'],
      ['string/toLowerFirstLetter', '将字符串的首字母转换成小写字母'],
      ['string/capitalizeWord', '将字符串中每个单词的首字母转为大写'],
    ],
  },
  {
    title: '其它',
    collapsable: false,
    children: [
      ['string/reverseString', '反转字符串'],
    ],
  },

];

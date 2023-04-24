/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "_",
    text: ""
  },
  {
    type: 1,
    count: 3,
    text: "",
    title: "무너 인형",
    img: "../img/muno2.jpg"
  },
  {
    type: 2,
    count: 5,
    text: "",
    title: "스타벅스 1만원상당 기프티콘",
    img: "../img/starbucks2.jpg"
  },
  {
    type: 3,
    count: 5,
    text: "",
    title: "스타벅스 1만원상당 기프티콘",
    img: "../img/starbucks2.jpg"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [5, 3, 5, 5];

/**
 * 卡片公司名称标识
 */
const COMPANY = "LG U+";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};

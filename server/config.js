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
    title: "스벅",
    text: ""
  },
  {
    type: 1,
    count: 1,
    text: "",
    title: "회식지원-20만원",
    img: "../img/money.png"
  },
  {
    type: 2,
    count: 1,
    text: "",
    title: "일품진로-엑스트라 프리미엄",
    img: "../img/whayo.jpg"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [5, 1, 1];

/**
 * 卡片公司名称标识
 */
const COMPANY = "LG U+";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};

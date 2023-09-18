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
    count: 1,
    text: "",
    title: "모바일 백화점 상품권 3만원",
    img: "../img/sinsegea.jpg"
  },
  {
    type: 2,
    count: 2,
    text: "",
    title: "치킨세트 모바일 쿠폰",
    img: "../img/chickin.jpg"
  },
  {
    type: 3,
    count: 5,
    text: "",
    title: "스타벅스 아메리카노",
    img: "../img/ahah.jpg"
  },
  {
    type: 4,
    count: 5,
    text: "",
    title: "스타벅스 아메리카노",
    img: "../img/ahah.jpg"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [5, 1, 2, 5, 5];

/**
 * 卡片公司名称标识
 */
const COMPANY = "LG 전자";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};

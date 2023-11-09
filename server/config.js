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
    title: "투 핸즈 와인",
    img: "../img/wine.png"
  },
  {
    type: 2,
    count: 2,
    text: "",
    title: "스타벅스 2만원권",
    img: "../img/starbugs_2.jpeg"
  },
  {
    type: 3,
    count: 3,
    text: "",
    title: "스타벅스 1만원권",
    img: "../img/starbugs_1.png"
  },
  
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 2, 3];

/**
 * 卡片公司名称标识
 */
const COMPANY = "LG U+";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};

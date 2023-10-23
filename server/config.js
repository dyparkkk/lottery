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
    count: 1,
    title: "_",
    text: ""
  },
  {
    type: 1,
    count: 10,
    text: "",
    title: "도서 - 일이란 무엇인가",
    img: "../img/image (6).png"
  },
  {
    type: 2,
    count: 10,
    text: "",
    title: "도서 - 일이란 무엇인가",
    img: "../img/image (6).png"
  },
  {
    type: 3,
    count: 10,
    text: "",
    title: "도서 - 일이란 무엇인가",
    img: "../img/image (6).png"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 10, 10, 10];

/**
 * 卡片公司名称标识
 */
const COMPANY = "LG U+";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};

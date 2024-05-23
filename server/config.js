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
    title: "회식비 10만원 상품권",
    img: "../img/10.png"
  },
  {
    type: 2,
    count: 3,
    text: "",
    title: "화이트와인 3명",
    img: "../img/wine3.png"
  },
  {
    type: 3,
    count: 4,
    text: "",
    title: "스타벅스 기프티콘 4명",
    img: "../img/coffee.png"
  },
  // {
  //   type: 4,
  //   count: 7,
  //   text: "",
  //   title: "바나나우유",
  //   img: "../img/banana.png"
  // },
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 3, 4];

/**
 * 卡片公司名称标识
 */
const COMPANY = "LG U+";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};

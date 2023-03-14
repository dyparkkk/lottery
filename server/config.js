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
    title: "커피 기프티콘",
    text: ""
  },
  {
    type: 1,
    count: 1,
    text: "",
    title: "화이트와인",
    img: "../img/whiteWine.png"
  },
  {
    type: 2,
    count: 1,
    text: "",
    title: "레드와인",
    img: "../img/redWine.png"
  },
  {
    type: 3,
    count: 1,
    text: "",
    title: "스타벅스 상품권(50,000원)",
    img: "../img/starbucks.png"
  },
  {
    type: 4,
    count: 1,
    text: "",
    title: "스타벅스 상품권(30,000원)",
    img: "../img/starbucks.png"
  },
  {
    type: 5,
    count: 2,
    text: "",
    title: "판교 호감샌드",
    img: "../img/sand.png"
  },
  {
    type: 6,
    count: 4,
    text: "",
    title: "무너달력",
    img: "../img/muno.png"
  },
  {
    type: 7,
    count: 1,
    text: "",
    title: "CJ 통합 기프트카드(55,000원)",
    img: "../img/CJGiftCard.png"
  },
  {
    type: 8,
    count: 1,
    text: "",
    title: "CJ 통합 기프트카드(35,000원)",
    img: "../img/CJGiftCard.png"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [5, 1, 1, 1, 1, 2, 4, 1, 1];

/**
 * 卡片公司名称标识
 */
const COMPANY = "LG U+";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};

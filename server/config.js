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
    title: "LG아트센터 상품권 10만원",
    img: "../img/art.jpeg"
  },
  {
    type: 2,
    count: 1,
    text: "",
    title: "Two Hands 와인",
    img: "../img/win1.jpeg"
  },
  {
    type: 3,
    count: 1,
    text: "",
    title: "Moldavian 와인세트",
    img: "../img/win2.jpeg"
  },
  {
    type: 4,
    count: 1,
    text: "",
    title: "Dr.Groot 트리트먼스 세트",
    img: "../img/trm.jpeg"
  },
  {
    type: 5,
    count: 1,
    text: "",
    title: "서울대 필기구세트",
    img: "../img/pens.jpeg"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 1, 1, 1, 1];

/**
 * 卡片公司名称标识
 */
const COMPANY = "LG U+";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};

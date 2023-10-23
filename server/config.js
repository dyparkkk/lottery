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
    title: "키크론 Q1 Pro 기계식 적축 키보드",
    img: "../img/image (1).png"
  },
  {
    type: 2,
    count: 1,
    text: "",
    title: "[다시뽑기] LG 틔운 미니",
    img: "../img/image (2).png"
  },
  {
    type: 3,
    count: 2,
    text: "",
    title: "LG 틔운 미니",
    img: "../img/image (2).png"
  },
  {
    type: 4,
    count: 1,
    text: "",
    title: "[다시뽑기] LG아트센터 상품권 10만원",
    img: "../img/image (3).png"
  },
  {
    type: 5,
    count: 3,
    text: "",
    title: "LG아트센터 상품권 10만원",
    img: "../img/image (3).png"
  },
  {
    type: 6,
    count: 1,
    text: "",
    title: "[다시뽑기] 라라웨어 미니 온풍기",
    img: "../img/image (4).png"
  },
  {
    type: 7,
    count: 4,
    text: "",
    title: "라라웨어 미니 온풍기",
    img: "../img/image (4).png"
  },
  {
    type: 8,
    count: 1,
    text: "",
    title: "[다시뽑기] 루메나 듀얼 가습기",
    img: "../img/image (5).png"
  },
  {
    type: 9,
    count: 5,
    text: "",
    title: "루메나 듀얼 가습기",
    img: "../img/image (5).png"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 1, 2, 1, 3, 1, 4, 1, 5];

/**
 * 卡片公司名称标识
 */
const COMPANY = "LG U+";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};

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
    title: "무너 크루 NFT",
    img: "../img/munonft.png"
  },
  // {
  //   type: 2,
  //   count: 1,
  //   text: "",
  //   title: "김포예주 (프리미엄 청주)",
  //   img: "../img/kimpo.jpeg"
  // },
  // {
  //   type: 3,
  //   count: 1,
  //   text: "",
  //   title: "배민 상품권 (25,000)",
  //   img: "../img/baemin.png"
  // },
  // {
  //   type: 6,
  //   count: 1,
  //   text: "",
  //   title: "무너 필름카메라",
  //   img: "../img/munocamera.jpeg"
  // }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [5, 1, 1, 1, 1, 1];

/**
 * 卡片公司名称标识
 */
const COMPANY = "LG U+";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};

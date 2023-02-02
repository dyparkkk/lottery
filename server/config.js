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
    title: "",
    text: "커피 기프티콘"
  },
  {
    type: 1,
    count: 2,
    text: "特等奖",
    title: "상품권",
    img: "../img/secrit.jpg"
  },
  {
    type: 2,
    count: 5,
    text: "",
    title: "와인",
    img: "../img/mbp.jpg"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 3, 5];

/**
 * 卡片公司名称标识
 */
const COMPANY = "LG U+";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};

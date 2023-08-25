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
    title: "클라우드베이 (소비뇽블랑)",
    img: "../img/cloud.jpg"
  },
  {
    type: 2,
    count: 1,
    text: "",
    title: "베라톤 (스페인와인)",
    img: "../img/beraton.jpg"
  },
  {
    type: 3,
    count: 1,
    text: "",
    title: "베라톤 (스페인와인)",
    img: "../img/beraton.jpg"
  },
  {
    type: 4,
    count: 3,
    text: "",
    title: "스타벅스 기프티콘",
    img: "../img/sb.jpg"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [5, 1, 1, 1, 3];

/**
 * 卡片公司名称标识
 */
const COMPANY = "LG U+";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};

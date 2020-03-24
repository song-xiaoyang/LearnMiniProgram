// pages/wxml/wxml.js
Page({
  data: {
    isShow: true,
    score: 47,
    movies:['哈哈', '化合物', '河下游'],
    nums: [
      [10, 23, 34],
      [32, 35, 65],
      [65, 64, 45]
    ],
    letters: ['a', 'b', 'c']

  },
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleIncreament() {
    this.setData({
      score: this.data.score +6
    })
  },

})
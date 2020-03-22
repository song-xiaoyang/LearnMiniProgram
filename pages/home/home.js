// pages/home/home.js
//getApp（)获取App() 产生的示例对象
const app = getApp()
//console.log(app.globalData.name)
const name = app.globalData.name;
const age = app.globalData.age


//注册一个页面
//页面也有自己的生命周期函数
//----1.监听页面的的生命周期函数------
Page({
  //------------2.初始化数据---------------
  data: {
    message: '哈哈哈',
    list: []
  },
 

  //1.监听页面的周期函数
  //页面被加载
  onLoad() {
    console.log('onLoad')
    wx.request({
      url: 'http://123.207.32.32:8000/home/multidata',
      success: (res) => {
        console.log(res)
        const data = res.data.data.banner.list
        console.log(data)
        this.setData({
          list: data
        })
      }
    })
  },
  //页面显示出来时
  onShow() {
    console.log('onShow')
  },
  //页面初次渲染完成时
  onReady() {
    console.log('onReady')
  },
  //当页面被隐藏
  onHide() {
    console.log('onHide')
  },
  onUnload() {  
    console.log('onUnload')
  },

  //---3.监听wxml中相关的一些事件---------
  handleGetUserInfo(event) {
    console.log('--------')
    console.log(event)
  },
  handViewClick() {
    console.log('哈哈哈  被点击')
  },
  //---4.监听其他事件------
  //监听页面的滚动
  onPageScroll(obj) {
    console.log(obj)
  },
  //监听页面滚动到底部
  onReachBottom() {
    console.log('页面滚动到底部')
  },
  onPullDownRefresh() {
    console.log('页面被刷新')
  }
})
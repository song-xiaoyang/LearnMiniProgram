App({
  // 生命周期函数: 后台存活2个小时
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    console.log('小程序初始化完成：onLaunch')
    // console.log(options)
    // wx.request({
    //   url: '',
    // })
    // wx.getUserInfo({
    //   //数据拿到之后在打印进行回调（异步）
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })

    // setTimeout(function() {
    //   const err = new Error()
    //   throw err 
    // },3000)

    //网络请求
    //获取用户的信息
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    // console.log('界面显示出来：onShow')
    //1. 判断小程序的进入场景
    switch(options.scene) {
      case 1001:
        break;
      case 1005:
        break
    }

    //2.获取用户的信息，并且获取到用户信息之后，将用户的信息传递给服务器
    wx.getUserInfo({
      success: function(res) {
        // console.log(res)
        wx.chooseContact({
          success: function(res) {},
          fail: function(res) {}
        })
      }
    })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide,界面被隐藏
   */
  onHide: function () {
    console.log('界面被隐藏: onHide')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('小程序发生错误： onError')
  },
  globalData: {
    name: 'song',
    age: 18
  }
})

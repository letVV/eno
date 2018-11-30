// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [{
      name: "ly",
      age: 19
    }, {
      name: "lx",
      age: 20
    }, {
      name: "lt",
      age: 18
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("页面进场，数据和虚拟DOM结构在编译中")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("页面渲染，把虚拟的DOM挂载到真实节点上")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("页面离场，就是从页面上把该页面删掉")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting', //仅为示例，并非真实的接口地址
      data: {
        method: 'baidu.ting.billboard.billList',
        type: 1,
        size: 1,
        offset: 0
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        wx.stopPullDownRefresh()
        console.log(res.data)
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
// miniprogram/pages/ContactUs/ContactUs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgalist: ['http://pazp3d0xt.bkt.clouddn.com/wechat-QRCode-left.png'],
    imgalist2: ['http://pazp3d0xt.bkt.clouddn.com/wechat-QRCode-right.png'],
  },

  previewImage: function (e) {
    wx.previewImage({
      current: this.data.imgalist, // 当前显示图片的http链接   
      urls: this.data.imgalist // 需要预览的图片http链接列表   
    })
    wx.getImageInfo({// 获取图片信息（此处可不要）
      src: 'http://pazp3d0xt.bkt.clouddn.com/wechat-QRCode-left.png',
      success: function (res) {
        console.log(res.width)
        console.log(res.height)
      }
    })

  },

  previewImage2: function (e) {
    wx.previewImage({
      current: this.data.imgalist2, // 当前显示图片的http链接   
      urls: this.data.imgalist2 // 需要预览的图片http链接列表   
    })
    wx.getImageInfo({// 获取图片信息（此处可不要）
      src: 'http://pazp3d0xt.bkt.clouddn.com/wechat-QRCode-right.png',
      success: function (res) {
        console.log(res.width)
        console.log(res.height)
      }
    })

  },
  tel: function () {
    wx.makePhoneCall({
      phoneNumber: '0571-83731743',
    })
  },
  tel2: function () {
    wx.makePhoneCall({
      phoneNumber: '15906631121',
    })
  },
  tel3: function () {
    wx.makePhoneCall({
      phoneNumber: '15858232263',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

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
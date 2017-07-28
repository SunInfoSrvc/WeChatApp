//index.js
Page({
  data: {
    motto: '朝阳信息服务'
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }
})

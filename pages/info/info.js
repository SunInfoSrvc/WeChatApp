var dialog = require("../../utils/dialog")
Page({
  data: {
    hiddenProgress:true,
    imgUrls: [
      '/images/swiper/1.jpg',
      '/images/swiper/2.jpg',
      '/images/swiper/3.jpg'
    ],

    poster: 'http://29040141.qcloud.la:81/sun.jpg',
    name: 'SunRise',
    author: 'Andy',
    src: 'http://29040141.qcloud.la:81/audio.mp3',

  },
  goAbout:function(e){
    wx.navigateTo({
      url: '/pages/about/about',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  loadToast: function (e) {
    this.setData({ hiddenProgress:false});
    dialog.loading();
  }
})
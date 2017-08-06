var dialog = require("../../utils/dialog")
Page({
  data: {
    hiddenProgress: true,
    imgUrls: [
      '/images/swiper/1.jpg',
      '/images/swiper/2.jpg',
      '/images/swiper/3.jpg'
    ],

    poster: 'http://29040141.qcloud.la:81/sun.jpg',
    name: 'SunRise',
    author: 'Andy',
    src: 'http://29040141.qcloud.la:81/audio.mp3',

    array: ['朝阳', '信息', '服务', '演示'],
    index: 0,

  },

  goTest: function (e) {
    wx.navigateTo({
      url: '/pages/test/test',
    })
  },

  goPhone: function (e) {
    wx.makePhoneCall({
      phoneNumber: '18601680360' //仅为示例，并非真实的电话号码
    })
  },

  goScan: function (e) {
    //允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
        console.log(res)

        wx.setClipboardData({ data: JSON.stringify(res) })

        wx.showModal({
          title: '扫码结果',
          showCancel:false,
          content: JSON.stringify(res)
        })

      }
    })
  },

  goMap: function (e) {
    wx.vibrateLong()

    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 8000,
      mask:true
    })

    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })

  },

  loadToast: function (e) {


    this.setData({ hiddenProgress: false });
    dialog.loading(); //用wx.showLoading代替？



  }
})
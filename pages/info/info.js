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

  },
  goAbout: function (e) {
    wx.navigateTo({
      url: '/pages/about/about',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
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
      }
    })
  },

  goMap: function (e) {
    wx.vibrateShort()

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
    try {
      var res = wx.getSystemInfoSync()
      console.log('model: ' + res.model)
      console.log('pixelRatio: ' + res.pixelRatio)
      console.log('windowWidth: ' + res.windowWidth)
      console.log('windowHeight: ' + res.windowHeight)
      console.log('language: ' + res.language)
      console.log('version: ' + res.version)
      console.log('platform: ' + res.platform)
    } catch (e) {
      // Do something when catch error
    }

    wx.getNetworkType({
      success: function (res) {
        console.log('networkType: ' + res.networkType)
      }
    })


    wx.request({
      url: 'http://29040141.qcloud.la:81/sun.jpg', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        wx.showModal({
          title: '提示',
          content: '这是一个模态弹窗',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    })
    this.setData({ hiddenProgress: false });
    dialog.loading();
  }
})
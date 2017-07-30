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
      duration: 5000,
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

    this.setData({ hiddenProgress: false });
    dialog.loading(); //用wx.showLoading代替？

    wx.showModal({
      title: '设备信息',
      showCancel: false,
      content: JSON.stringify(res)
    })


  }
})
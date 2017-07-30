//index.js
Page({
  data: {
    motto: '朝阳信息服务',
    animationData: {},
    animationData2: {},
    animationData3: {}
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad:function(){
    wx.playBackgroundAudio({
      dataUrl: 'http://29040141.qcloud.la:81/audio.mp3',
      title: '背景音乐',
      coverImgUrl: 'http://29040141.qcloud.la:81/sun.jpg'
    })

  },

  showModal: function () {
    wx.showModal({
      title: 'Welcome',
      content: '欢迎光临',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },

  animationRun: function () {
    var animation = wx.createAnimation({
      duration: 5000,
      timingFunction: 'ease',
      delay: 0

    })

    animation
    .translateY(-250)
    .scale(3, 3)
    .rotate(360)
    .step()

    animation
    .rotate(3600)
    .step({
      duration: 10000,
      timingFunction: 'ease',
    })

    this.setData({
      animationData: animation.export()
    })
  },

  animationRun2: function () {
    var animation = wx.createAnimation({
      duration: 5000,
      timingFunction: 'step-start',

    })

    animation.opacity(0).step()
    animation.opacity(1).step({
      duration: 2000,
      timingFunction: 'ease-out',
    })

    this.setData({
      animationData2: animation.export()
    })
  },
  animationRun3: function () {
    var animation = wx.createAnimation({
      timingFunction: 'step-start',
    })

    animation.opacity(0).step()

    animation.opacity(1).step({
      duration: 5000,
      timingFunction: 'linear',

    })

    this.setData({
      animationData3: animation.export()
    })
  },


  onShow: function () {
    this.animationRun()
    this.animationRun2()
    this.animationRun3()

  }



})

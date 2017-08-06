//获取应用实例
var app = getApp()

var initData = '这是第一行'
var extraLine = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    text: initData,
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  add: function (e) {
    extraLine.push('other line')
    this.setData({
      text: initData + '\n' + extraLine.join('\n')
    })
  },

  switch1Change: function (e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  switch2Change: function (e) {
    console.log('switch2 发生 change 事件，携带值为', e.detail.value)

    if (e.detail.value) {
      wx.startRecord({
        success: function (res) {
          var tempFilePath = res.tempFilePath
        },
        fail: function (res) {
          //录音失败
        }
      })
    }
    else {
      wx.stopRecord()

    }

  },

  showActionSheet: function () {
    var that = this
    wx.showActionSheet({
      itemList: ['进入设置', '选择地址', '打开文档', '设备信息'],
      success: function (res) {
        console.log(res.tapIndex)

        switch (res.tapIndex) {
          case 0:
            wx.openSetting()
            break;
          case 1:
            wx.chooseAddress()
            break;
          case 2:
            that.openDocument()
            break;
          case 3:
            that.showDeviceInfo()
            break;
          default:
        }

      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },

  openDocument: function () {
    wx.downloadFile({
      url: 'http://29040141.qcloud.la:81/test.pdf',
      success: function (res) {
        var filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
          }
        })
      }
    })
  },

  showDeviceInfo: function(){
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


    wx.showModal({
      title: '设备信息',
      showCancel: false,
      content: JSON.stringify(res)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log('onLoad')

    wx.setNavigationBarTitle({
      title: '关于',
    })
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
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
//index.js

Page({
  data: {
    navShow:true,
    list:[
      {
        id:'xian',
        name:'周末逛西安',
        url:'logs'
      },
      {
        id: 'kiwi',
        name: '秦岭猕猴桃',
        url: 'logs'
      }
    ]
  },
  onLoad:function(){

    console.log('onLoad')
    var that = this

    wx.request({
      url: 'https://29040141.qcloud.la/api/App', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        //更新数据
        that.setData({
          list: res.data
        })
      }
    })

  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      // title: '自定义转发标题',
      // path: '/page/user?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  onPullDownRefresh: function () {

  },

  navToApp:function(){
    console.log('nav to App')
    wx.navigateToMiniProgram({
      appId: 'wxa68f90b9b5d774a8',
      path: 'pages/logs/logs?id=123',
      extraData: {
        foo: 'bar'
      },
      envVersion: 'develop',
      success(res) {
        // 打开成功
        console.log('打开成功')
      }
    })
  }
})

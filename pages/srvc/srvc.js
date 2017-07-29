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
      },
      {
        id: 'game',
        name: '聚会小游戏',
        url: 'logs'
      },
      {
        id: 'party',
        name: '约饭小助手',
        url: 'logs'
      },
      {
        id: 'credit',
        name: '征信小助手',
        url: 'logs'
      },
      {
        id: 'house',
        name: '验房小助手',
        url: 'logs'
      },
      {
        id: 'scrum',
        name: 'Scrum Pocker',
        url: 'logs'
      }
    ]
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

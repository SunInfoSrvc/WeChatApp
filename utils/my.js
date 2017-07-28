var my = {
  upper: function () {
    wx.showNavigationBarLoading()
    this.refresh();
    console.log("upper");
    setTimeout(function () { wx.hideNavigationBarLoading(); wx.stopPullDownRefresh(); }, 2000);
  },

  refresh: function () {
    wx.showToast({
      title: '刷新中',
      icon: 'loading',
      duration: 3000
    });
    var feed = util.getData2();
    console.log("loaddata");
    var feed_data = feed.data;
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length
    });
    setTimeout(function () {
      wx.showToast({
        title: '刷新成功',
        icon: 'success',
        duration: 2000
      })
    }, 3000)

  },

  getData: function (url) {
    return new Promise(function (resolve, reject) {
      wx.request({
        url: url,
        data: {},
        header: {
          //'Content-Type': 'application/json'
        },
        success: function (res) {
          console.log("success")
          resolve(res)
        },
        fail: function (res) {
          reject(res)
          console.log("failed")
        }
      })
    })
  },

  GetPlace: function () {
    console.log('地图定位！')
    let that = this
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: (res) => {
        console.log(res)
        let latitude = res.latitude;
        let longitude = res.longitude;
        let marker = this.createMarker(res);
        this.setData({
          centerX: longitude,
          centerY: latitude,
          markers: this.getSchoolMarkers()
        })
      }
    });
  },
}

module.exports = my
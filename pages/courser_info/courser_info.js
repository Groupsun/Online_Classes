// pages/courser_info/courser_info.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
        courser_no: null,
        courser_name: null,
        courser_description: null,
        courser_begin_date: null,
        courser_end_date: null,
        courser_status: null,
        is_selected: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        var index = options.index;
        var list = wx.getStorageSync("courser_list");
        var status = "";
        var select = 0;
        if(list[index].courser_status == 1)
            status = "已开课";
        else status = "未开课";
        if(options.select == "已选")
            select = 1;
        else select = 0;
        this.setData({
            courser_no: list[index].courser_no,
            courser_name: list[index].courser_name,
            courser_description: list[index].courser_description,
            courser_begin_date: list[index].courser_begin_date.substr(0,10),
            courser_end_date: list[index].courser_end_date.substr(0, 10),
            courser_status: status,
            is_selected: select
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
  
  },

  select: function() {
      wx.request({
          url: 'http://47.106.66.176:8081/courser/' + this.data.courser_no,
          data: {
              openid: app.globalData.openid,
          },
          method: 'put',
          success: function() {
              console.log('success');
          },
      })
  }
})
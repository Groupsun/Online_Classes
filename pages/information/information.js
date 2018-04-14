// pages/information/imformation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    open: false,
    stu_id: '',
    stu_name: '',
    stu_birth: '',
    stu_sex: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var id = wx.getStorageSync("user_id");
      var name = wx.getStorageSync("user_name");
      var birth = wx.getStorageSync("user_birthday");
      var sex = wx.getStorageSync("user_sex");
      this.setData({
          stu_id: id,
          stu_name: name,
          stu_birth: birth,
          stu_sex: sex
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
  tap_ch: function (e) {
      if (this.data.open) {
          this.setData({
              open: false
          });
      } else {
          this.setData({
              open: true
          });
      }
  },
  student_index: function() {
      wx.redirectTo({
          url: '../student_index/student_index',
      })
  },
  courser_list: function() {
      wx.redirectTo({
          url: '../courser/courser',
      })
  }
})
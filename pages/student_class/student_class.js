// pages/student_class/student_class.js
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
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var id = options.courser_no;
        var that = this;
        wx.request({
            url: 'https://www.sunnychen.top/courser/' + id,
            success: function (res) {
                that.setData({
                    courser_no: res.data.courser_no,
                    courser_name: res.data.courser_name,
                    courser_description: res.data.courser_description,
                    courser_begin_date: res.data.courser_begin_date.substr(0, 10),
                    courser_end_date: res.data.courser_end_date.substr(0, 10),
                    courser_status: status
                })
            }
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
// pages/modify_courser/modify_courser.js
var app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        courser_no: null,
        couresr_name: null,
        couresr_des: null,
        courser_start: null,
        courser_end: null,
        string_length: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var id = options.courser_no;
        var that = this;
        wx.request({
            url: 'https://www.sunnychen.top/courser/' + id,
            success: function(res) {
                that.setData({
                    courser_no: res.data.courser_no,
                    courser_name: res.data.courser_name,
                    courser_des: res.data.courser_description,
                    courser_start: res.data.courser_begin_date.substr(0, 10),
                    courser_end: res.data.courser_end_date.substr(0, 10),
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

    },

    name: function (e) {
        this.setData({
            courser_name: e.detail.value
        })
    },

    des: function (e) {
        this.setData({
            courser_des: e.detail.value,
            string_length: e.detail.value.length
        })
    },

    start_time: function (e) {
        this.setData({
            courser_start: e.detail.value
        })
    },

    end_time: function (e) {
        this.setData({
            courser_end: e.detail.value
        })
    },

    submit: function (e) {
        wx.request({
            url: 'https://www.sunnychen.top/courser/update/' + app.globalData.openid,
            data: {
                courser_no: this.data.courser_no,
                courser_name: this.data.courser_name,
                courser_description: this.data.courser_des,
                courser_begin_date: this.data.courser_start,
                courser_end_date: this.data.courser_end,
            },
            success: function () {
                wx.showToast({
                    title: '成功',
                    icon: 'success'
                }),
                    setTimeout(function () {
                        wx.navigateBack({
                        })
                    }, 2000)
            },
            fail: function () {
                wx.showToast({
                    title: '失败',
                    icon: 'fail'
                })
            }
        })
    }
})
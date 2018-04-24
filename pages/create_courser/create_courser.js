// pages/create_courser/create_courser.js
var app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        couresr_name: null,
        couresr_des: null,
        courser_start: null,
        courser_end: null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    
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

    name: function(e){
        this.setData({
            courser_name: e.detail.value
        })
    },

    des: function(e){
        this.setData({
            courser_des: e.detail.value
        })
    },

    start_time: function(e) {
        this.setData({
            courser_start: e.detail.value
        })
    },

    end_time: function(e){
        this.setData({
            courser_end: e.detail.value
        })
    },

    submit: function(e) {
        wx.request({
            url: 'https://www.sunnychen.top:8081/courser/create',
            data: {
                courser_name: this.data.courser_name,
                courser_description: this.data.courser_description,
                courser_begin_date: this.data.courser_start,
                courser_end_date: this.data.courser_end,
                courser_teacher_openid: app.globalData.openid
            },
            method: 'put',
            success: function() {
                wx.showToast({
                    title: '成功',
                    icon: 'success'
                })
            },
            faile: function() {
                wx.showToast({
                    title: '失败',
                    icon: 'fail'
                })
            }
        })
    }
})
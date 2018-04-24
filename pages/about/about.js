// pages/about/about.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        open: false
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
    tap_start: function (e) {
        // touchstart事件
        this.data.mark = this.data.newmark = e.touches[0].pageX;
    },
    tap_drag: function (e) {
        // touchmove事件

        /*
         * 手指从左向右移动
         * @newmark是指移动的最新点的x轴坐标 ， @mark是指原点x轴坐标
         */
        this.data.newmark = e.touches[0].pageX;
        if (this.data.mark < this.data.newmark) {
            this.istoright = true;
        }
        /*
         * 手指从右向左移动
         * @newmark是指移动的最新点的x轴坐标 ， @mark是指原点x轴坐标
         */
        if (this.data.mark > this.data.newmark) {
            this.istoright = false;

        }
        this.data.mark = this.data.newmark;

    },
    tap_end: function (e) {
        // touchend事件
        this.data.mark = 0;
        this.data.newmark = 0;
        if (this.istoright) {
            this.setData({
                open: true
            });
        } else {
            this.setData({
                open: false
            });
        }
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

    student_index: function() {
        if (wx.getStorageSync('identity_type') == 'S'){
            wx.redirectTo({
                url: '../student_index/student_index',
            })
        }else{
            wx.redirectTo({
                url: '../teacher_index/teacher_index',
            })
        }
    },

    courser_list: function() {
        if (wx.getStorageSync('identity_type') == 'S'){
            wx.redirectTo({
                url: '../courser/courser',
            })
        }else{
            wx.redirectTo({
                url: '../courser_teacher/courser_teacher',
            })
        }
    },

    information: function() {
        wx.redirectTo({
            url: '../information/information',
        })
    },
    
    github: function() {
        wx.navigateTo({
            url: '../src/src',
        })
    }
})
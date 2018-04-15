// page/one/index.js
var list;
var app = getApp();

Page({
    data: {
        open: false,
        list: null
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
    onLoad: function () {
        
    },
    onShow: function () {
        var that = this;
        wx.request({
            url: 'http://47.106.66.176:8081/courser/',
            data: {
                openid: app.globalData.openid
            },
            success: function (res) {
                var i;
                for (i = 0; i < res.data.length; i++) {
                    if (res.data[i].is_selected == 1)
                        res.data[i].is_selected = "已选";
                    else res.data[i].is_selected = "未选";
                }
                that.setData({
                    list: res.data
                })
                wx.setStorageSync('courser_list', res.data)
            }
        })
    },
    onReady: function () {

    },
    onHide: function () {

    },
    onUnload: function () {

    },
    student_index: function() {
        wx.redirectTo({
            url: '../student_index/student_index',
        })
    },
    information: function() {
        wx.redirectTo({
            url: '../information/information',
        })
    },
    info: function(event) {
        console.log(event);
        wx.navigateTo({
            url: '../courser_info/courser_info?index=' + event.currentTarget.dataset.index + '&select=' + event.currentTarget.dataset.select,
        })
    }
})
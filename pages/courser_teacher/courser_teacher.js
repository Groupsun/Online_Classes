// page/one/index.js
var list;
var app = getApp();

Page({
    data: {
        open: false,
        list: null,
        array: ['已选课程', '未选课程', '全部课程'],
        index: null
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
        console.log(this.data.index);
        wx.request({
            url: 'https://www.sunnychen.top:8081/courser/',
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
                wx.setStorageSync('courser_list', res.data);
                if (that.data.index != null) {
                    var temp = [];
                    if (that.data.index == 0) {
                        var j = 0;
                        for (var i = 0; i < that.data.list.length; i++)
                            if (that.data.list[i].is_selected == "已选")
                                temp[j++] = that.data.list[i];
                        that.setData({
                            list: temp
                        })
                    } else if (that.data.index == 1) {
                        var j = 0;
                        for (var i = 0; i < that.data.list.length; i++)
                            if (that.data.list[i].is_selected == "未选")
                                temp[j++] = that.data.list[i];
                        that.setData({
                            list: temp
                        })
                    }
                }
            }
        })
    },
    onReady: function () {

    },
    onHide: function () {

    },
    onUnload: function () {

    },
    student_index: function () {
        wx.redirectTo({
            url: '../teacher_index/teacher_index',
        })
    },
    information: function () {
        wx.redirectTo({
            url: '../information/information',
        })
    },
    about: function () {
        wx.redirectTo({
            url: '../about/about',
        })
    },
    info: function (event) {
        console.log(event);
        wx.navigateTo({
            url: '../courser_info/courser_info?index=' + event.currentTarget.dataset.index + '&select=' + event.currentTarget.dataset.select,
        })
    },
    create: function() {
        wx.navigateTo({
            url: '../create_courser/create_courser',
        })
    }
})
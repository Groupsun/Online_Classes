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
            is_selected: null,
            identity_type: null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
            this.setData({
                identity_type: wx.getStorageSync('identity_type')
            })
            var index = options.index;
            var list = wx.getStorageSync("courser_list");
            var status = "";
            var select = 0;
            var that = this;
            wx.request({
                url: 'https://www.sunnychen.top/courser/' + index,
                success: function(res) {
                    if (res.data.courser_status == 1)
                        status = "已开课";
                    else status = "未开课";
                    if (options.select == "已选")
                        select = 1;
                    else select = 0;
                    that.setData({
                        courser_no: res.data.courser_no,
                        courser_name: res.data.courser_name,
                        courser_description: res.data.courser_description,
                        courser_begin_date: res.data.courser_begin_date.substr(0, 10),
                        courser_end_date: res.data.courser_end_date.substr(0, 10),
                        courser_status: status,
                        is_selected: select
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

    select: function() {
        wx.request({
            url: 'https://www.sunnychen.top/courser/' + this.data.courser_no,
            data: {
                openid: app.globalData.openid,
            },
            method: 'put',
            success: function() {
                console.log('success');
                wx.showToast({
                    title: '成功',
                    icon: 'success',
                    duration: 2000
                })
            },
            fail: function() {
                console.log('fail');
                wx.showToast({
                    title: '失败',
                    icon: 'fail',
                    duration: 2000
                })
            }
        })
    },

    cancel: function() {
        wx.request({
            url: 'https://www.sunnychen.top/courser/' + this.data.courser_no,
            data: {
                openid: app.globalData.openid,
            },
            method: 'delete',
            success: function () {
                console.log('success');
                wx.showToast({
                    title: '成功',
                    icon: 'success',
                    duration: 2000
                })
            },
            fail: function () {
                console.log('fail');
                wx.showToast({
                    title: '失败',
                    icon: 'fail',
                    duration: 2000
                })
            }
        })
    },

    delete_courser: function() {
        wx.request({
            url: 'https://www.sunnychen.top/courser/delete/' + this.data.courser_no,
            data: {
                courser_teacher_openid: app.globalData.openid
            },
            success: function(e) {
                if(e.data.result_code == 1){
                    wx.showToast({
                        title: '删除成功',
                        icon: 'success'
                    }),
                    setTimeout(function() {
                        wx.navigateBack({
                        })
                    }, 2000)
                }else if(e.data.result_code == 0){
                    wx.showToast({
                        title: '非本人创建课程无法删除',
                        icon: 'failed'
                    })
                }
            },
            fail: function(e) {
                wx.showToast({
                    title: '删除失败',
                    icon: 'failed'
                })
            }
        })
    }
})
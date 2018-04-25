//app.js
App({
    onLaunch: function () {
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            // 可以将 res 发送给后台解码出 unionId
                            this.globalData.userInfo = res.userInfo

                            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况
                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res)
                            }
                        }
                    })
                }
            }
        })

        // 登录
        wx.login({
        success: res => {
            var that = this;
            wx.request({
                url: 'https://www.sunnychen.top/login',
                data: {
                    "jscode": res.code
                },
                success: function(res) {
                    console.log(res.data);
                    that.globalData.openid = res.data.openid;
                    if(res.data.result_code == 0){
                        wx.redirectTo({
                            url: '/pages/first_login/first_login',
                        })
                    } else if (wx.getStorageSync('identity_type') == 'S'){
                        wx.redirectTo({
                            url: '/pages/student_index/student_index',
                        })
                    }
                    else{
                        wx.redirectTo({
                            url: '/pages/teacher_index/teacher_index',
                        })
                    }
                },
                fail: function(res) {
                    wx.showToast({
                        title: '验证登陆信息失败',
                    })
                    wx.redirectTo({
                        url: '../student_index/student_index',
                    })
                }
            })
        } 
        })
    },
    globalData: {
        userInfo: null,
        openid: null,
    },

    
})
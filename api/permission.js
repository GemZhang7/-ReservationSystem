import Mock from 'mockjs'
export default {
    getMenu: config => {
        console.log(config);
        const { username, password } = JSON.parse(config.body)
        console.log(JSON.parse(config.body))
            // 先判断用户是否存在
            // 判断账号和密码是否对应
        if (username === 'admin' && password === 'admin') {
            return {
                code: 20000,
                data: {
                    menu: [{
                            path: '/manage',
                            name: 'manage',
                            component: Manage,
                            url: '../../pages/Manage.vue'
                        },
                        {
                            path: '/user',
                            name: 'user',
                            component: User,
                            url: '../../pages/User.vue'
                        },
                    ],
                    token: Mock.Random.guid(),
                    message: '获取成功'
                }
            }
        } else if (username === 'xiaoxiao' && password === 'xiaoxiao') {
            return {
                code: 20000,
                data: {
                    menu: [{
                            path: '/',
                            name: 'home',
                            label: '首页',
                            icon: 's-home',
                            url: 'home/index'
                        },
                        {
                            path: '/video',
                            name: 'video',
                            label: '商品管理',
                            icon: 'video-play',
                            url: 'VideoManage/VideoManage'
                        }
                    ],
                    token: Mock.Random.guid(),
                    message: '获取成功'
                }
            }
        } else {
            return {
                code: -999,
                data: {
                    message: '密码错误'
                }
            }
        }

    }
}
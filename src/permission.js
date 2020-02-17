/*
*权限校验
*vue Router中的 前置钩子函数 beforeEach（to,fromm,next）
*当进行路由跳转之前，进行判断是否已经登录过，登录过则允许访问非登录页面，否则跳转到登录页面

* to:即将要进入的目标路由对象
* from：即将要离开的路由对象
* next: 是一个方法，可以指定路由地址，进行路由跳转

*/

import router from './router/index.js'
import {getUserInfo} from './api/login'

router.beforeEach((to,from,next) => {
    //1 获取token
    //1.1 如果没有和获取到token ，要访问非登录页面，则不让访问，返回到登陆页面
    const token = localStorage.getItem('cjw-msm-token')
    //如果获取不到token
    if(!token){
        if(to.path !=='/login'){
            next({path:'/login'})
        }else{
            next()
        }
    }else{
        if(to.path === '/login'){
            next()
        }else{
            const userInfo = localStorage.getItem('cjw-msm-user')
            if(userInfo){
                next()
            }else{
                getUserInfo(token).then(response => {
                    const resp = response.data
                    if(resp.flag){
                        localStorage.setItem('cjw-msm-user',JSON.stringify(resp.data))
                        next()
                    }else{
                        //如果获取不到用户信息 例如token过期 就回到登录页面重新登录
                        next({path:'/login'})
                    }
                })
            }
        }
    }
})
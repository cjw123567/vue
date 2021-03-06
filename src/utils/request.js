import axios from 'axios'

// axios.get('/db.json').then(response => {
//     console.log(response.data)
// })

const request = axios.create({
    //db.json > 通过axios > /dev-api/db.json >通过 代理转发（vue.config.js） > http://localhost:8001/db.json
    // baseURL:'/dev-api',
    //baseURL:'/',
    baseURL:process.env.VUE_APP_BASE_API,
    timeout:5000 //请求超时，5000毫秒
})

//请求拦截器
request.interceptors.request.use(config => {
    //请求拦截
    return config
},error => {
    //出现异常
    return Promise.reject(error);
})

//响应拦截
request.interceptors.response.use(response => {
    //response.data
    return response
}, error => {
    return Promise.reject(error)
})

//http://localhost:8888/dev-api/db.json
// request.get('/db.json').then(response => {
//     console.log(response.data)
// })

export default request //导出自定义创建 axios 对象 
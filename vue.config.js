module.exports={
    //publicPath:'/demo2',
    devServer:{
        port:8555,//端口号,如果端口号被占用 ，会自动提升1
        host:"localhost",//主机名 127.0.0.1 真机0.0.0.0
        https:false,//协议
        open:true, //启动服务时自动打开浏览器访问
        proxy:{//开发环境代理配置
            //'/dev-api':{
            [process.env.VUE_APP_BASE_API] : {    
                //目标服务器地址，代理访问 http://localhost:8001
                target: process.env.VUE_APP_SERVICE_URL,
                changeOrigin:true,//开启代理服务器
                pathRewrite:{
                    //将请求地址前缀 /dev-api 替换空的
                    //'^/dev-api':'',
                    ['^' + process.env.VUE_APP_BASE_API] : '',
                }
            }
        }
    },
    lintOnSave:false,//关闭格式检查
    // outputDir:"dist2",//打包之后所在目录
    // assetsDir:"assets",//静态资源打包之后存放路径 相对（outputDir）路径，默认值 ''
    // indexPath:"out/index.html",//index.html页面打包之后存放的目录，默认值'index.html' 相对（outputDir）路径
    productionSourceMap:false,//打包时不会生成 .map文件 加快打包速度
    //filenameHashing:false, 打包时，静态文件不会生成hash值
}
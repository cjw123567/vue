import Vue from "vue";
import VueRouter from "vue-router";
//import Login from '../views/login/index.vue'
//下面情况，默认的会导入 ../views/login 下的index文件
import Login from '../views/login'
import Layout from '@/components/Layout.vue'
import DefendLine from '@/views/otManage/defendLine'


Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login', //路由名称
    component:Login //组件对象
  },
  {
    path: '/',
    name: 'layout', //路由名称
    component:Layout, //组件对象
    children:[
      {
        path: '/defendLine',
        name: 'defendLine', //路由名称
        component:DefendLine //组件对象
      }
    ]
  }
  
];

const router = new VueRouter({
  //mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass:'active',
  routes
});

export default router;

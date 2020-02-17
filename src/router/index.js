import Vue from "vue";
import VueRouter from "vue-router";
//import Login from '../views/login/index.vue'
//下面情况，默认的会导入 ../views/login 下的index文件
import Login from '../views/login'
import Layout from '@/components/Layout.vue'
import DefendLine from '@/views/otManage/defendLine'
import Home from '@/views/home'
import Member from '@/views/member'
import Supplier from '@/views/supplier'
import Goods from '@/views/goods'
import Staff from '@/views/staff'


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
    redirect:'/home',
    children:[
      {
        path:'/home',
        name:'home',
        component:Home,
        meta:{title:'首页'}
      },
      
      {
        path: '/defendLine',
        name: 'defendLine', //路由名称
        component:DefendLine //组件对象
      }
    ]
  },
  {
    path: '/OT',
    name: 'layout', //路由名称
    component:Layout, //组件对象
    meta:{title:'加班单管理'},
    children:[
      {
        path:'/member',
        name:'member',
        component:Member,
        meta:{title:'会员管理'}
      },
      {
        path:'/supplier',
        name:'supplier',
        component:Supplier,
        meta:{title:'供应商管理'}
      },
      {
        path:'/goods',
        name:'goods',
        component:Goods,
        meta:{title:'商品管理'}
      },
      {
        path:'/staff',
        name:'staff',
        component:Staff,
        meta:{title:'员工管理'}
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

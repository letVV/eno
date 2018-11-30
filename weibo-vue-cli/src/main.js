import Vue from 'vue'
import App from './App.vue'

// 第三方模块
var $ = require("jquery");
window.$ = $;
import axios from "axios";
Vue.prototype.$axios = axios;
Vue.prototype.$ = $;
// vue-router
//$("body").html("<p>hello world</p>");
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 1. Define route components.
// These can be imported from other files
//import Home from "./containers/Home/Home.js";

// 一级路由
import Home from "./containers/Home.vue";
import Detail from "./containers/Detail.vue";
import Search from "./containers/Search.vue";


// 二级路由
import Channel from "./containers/Channel.vue";
import Tab from "./containers/Tab.vue";


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [{
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'hot',
        name: 'hot',
        component: Channel
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: 'fresh',
        name: 'fresh',
        component: Channel
      }
    ]
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail,
    children: [{
        path: 'repost',
        name: 'repost',
        component: Tab
      },
      {
        path: 'comment',
        name: 'comment',
        component: Tab
      },
      {
        path: 'like',
        name: 'like',
        component: Tab
      }
    ]
  }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})


// vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 创建中介
const store = new Vuex.Store({
  // 公告栏，信息表
  state: {
    project: "买卖楼盘",
    author: "laoyao",
    description: "交换数据",
    age: 18,
    arr: [{
      price: 38000,
      place: "guangzhou",
    }, {
      price: 55000,
      place: "beijing",
    }, {
      price: 9999,
      place: "hongkong",
    }],
    nav: 0, //频道
    navs: [{
      title: "热门",
      path: "hot"
    }, {
      title: "新鲜事",
      path: "fresh"
    }]
  },
  // 修改公告栏
  mutations: {
    setAuthor(state, data) {
      state.author = data;
    },
    setAge(state, data) {
      state.age = data;
    },
    setNav(state, data) {
      state.nav = data;
    }
  },
  // 获取公告信息
  getters: {
    // 获取房源的方法
    getInformation: state => {
      // 把所有的房源信息
      return state
    },
    getNavs: state => {
      // 把所有的房源信息
      return state.navs
    },
    getNav: state => {
      // 把所有的房源信息
      return state.nav
    },
  },
  // 汇总公告信息
  actions: {
    doneSetAuthor(context, data) {
      // 触发mutations里面的setAuthor方法
      // 可以在这里触发多个mutations
      context.commit('setAuthor', data)
      context.commit('setAge', data)
    },
    doneSetNav(context, data) {
      context.commit('setNav', data)
    }
  }
})



// getters   中介把数据交给组件

//自定义模块
//var tool = require("./tool.js");
//window.tool = tool;

// 自定义模块 css模块
require("./css/base.css");
// 第三方模块 css模块
//require("bootstrap/dist/css/bootstrap.css");

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router, //选项卡
  store, //中介入驻
}).$mount('#app')
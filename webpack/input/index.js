console.log("1");
console.log("2");

// 第三方模块
var $ = require("jquery");
window.$ = $;
//$("body").html("<p>hello world</p>");
var Vue = require("vue/dist/vue.js");
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 1. Define route components.
// These can be imported from other files
//import Home from "./containers/Home/Home.js";
import Home from "./containers/Home.vue";
//import Search from "./containers/Search/Search.js";
import Search from "./containers/Search.vue";

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [{
        path: '/home',
        component: Home
    },
    {
        path: '/search',
        component: Search
    }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes // short for `routes: routes`
})


new Vue({
    el: "#app",
    router,
    template: `
        <router-view></router-view>
    `
})

//自定义模块
var tool = require("./tool.js");
window.tool = tool;
console.log(tool);

// 自定义模块 css模块
require("./css/index.css");
// 第三方模块 css模块
require("bootstrap/dist/css/bootstrap.css");
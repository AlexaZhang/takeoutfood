import Vue from "vue";
import Router from "vue-router";

// import Home from "../views/Home/Home";
// import Order from "../views/Order/Order";
// import Profile from "../views/Profile/Profile";
// import Login from "../views/Login/Login";

const Home=()=>import("../views/Home/Home.vue");
const Order=()=>import("../views/Order/Order.vue");
const Profile=()=>import("../views/Profile/Profile.vue");
const Login=()=>import("../views/Login/Login.vue");

import Search from "../views/Search/Search";
import Shop from "../views/Shop/Shop.vue";
import ShopGoods from "../views/Shop/ShopGoods/ShopGoods";
import ShopRatings from "../views/Shop/ShopRatings/ShopRatings";
import ShopInfo from "../views/Shop/ShopInfo/ShopInfo";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/home',
      component:Home,
      meta:{
        showFooter:true
      }

    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/shop',
      component:Shop,
      children:[
        {
          path:'/shop/goods',
          component:ShopGoods
        },
        {
          path:'/shop/ratings',
          component:ShopRatings
        },
        {
          path:'/shop/info',
          component:ShopInfo
        },
        {
          path:'',
          redirect:'/shop/goods'
        }
      ]
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
});

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("views/Login")
  },
  {
    path: "/finance", //财务中心
    name: "Finance",
    component: () => import("views/Finance")
  },
  {
    path: "/finance_detail", //财务明细
    name: "FinanceDetail",
    component: () => import("views/FinanceDetail")
  },
  {
    path: "/accounts", //转账
    name: "Accounts",
    component: () => import("views/Accounts")
  },
  {
    path: "/mention", //提币
    name: "Mention",
    component: () => import("views/Mention")
  },
  {
    path: "/charge", //充币
    name: "Charge",
    component: () => import("views/Charge")
  },
  {
    path: "/level", //合伙人级别
    name: "Level",
    component: () => import("views/Level")
  },
  {
    path: "/insert", //推广下线
    name: "Insert",
    component: () => import("views/Insert")
  },
  {
    path: "/insert_list", //下线列表
    name: "InsertList",
    component: () => import("views/InsertList")
  },
  {
    path: "/profit", //下线分成数据
    name: "Profit",
    component: () => import("views/Profit")
  },
  {
    path: "/edit_pwd", //修改密码
    name: "EditPwd",
    component: () => import("views/EditPwd")
  },
  {
    path: "/user_search", //用户搜索
    name: "UserSearch",
    component: () => import("views/UserSearch")
  },
  {
    path: "/coin_address", //币地址管理
    name: "CoinAddress",
    component: () => import("views/CoinAddress")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes
});

export default router;

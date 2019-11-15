import http from "./Api";
import { lStore } from "./utli";
import router from "../router";
import Store from "../Store";

/***********************用户相关接口 ***********************/

//登录接口
export function loginHandle(req) {
  return http({
    url: "/auth/agent",
    data: req,
    method: "put",
    notToken: true
  });
}

//重置密码&&找回密码
export function forgetPwd(req) {
  return http({
    url: "/auth/find_pwd",
    data: req,
    method: "put",
    notToken: true
  });
}

//修改密码
export function editPwd(req) {
  return http({
    url: "/v1/user/update_login_pwd",
    data: req,
    method: "put"
  });
}

//成员列表      GET  /agent/memberList?pageNo=0&pageSize=10&from=xx&to=xx
export function memberList(req) {
  return http({
    url: "/agent/memberList",
    data: req,
    method: "get"
  });
}

//代理商总资产  GET  /agent/total/asserts

export function assertsTotal(req) {
  return http({
    url: "/agent/total/asserts",
    data: req,
    method: "get"
  });
}

// 钱包转账
// url：/v1/trade/detail/walletTransfer
// 请求方式：post
// 请求参数：
//                 token：String，必填
// 	amount:  double，必填，转账数量
// 	uuid：String，必填，收款用户uuid
// 响应参数：
// 	{
//   "status": 200,
//   "timestamp": 1573207987507

// }
export function walletTransfer(req) {
  return http({
    url: "/v1/trade/detail/walletTransfer",
    method: "post",
    data: req
  });
}

//获取钱包地址
export function getAddressList(req) {
  return http({
    url: "/v1/user/wallet_address",
    method: "post",
    data: req
  });
}

/****************钱包资金明细****************** */
// 请求参数：
//                 token：String，必填
// 	type:  int，必填，时间类型 1 周 2 月 3 3月
export function getStatisticsAmount(req) {
  return http({
    url: "/agent/statisticsAmount",
    method: "get",
    data: req
  });
}

/****************钱包资金明细列表****************** */
export function getDetailList(req) {
  return http({
    url: "/agent/accountDetailList",
    method: "get",
    data: req
  });
}

//获取提币地址列表
export function drawAddressList() {
  return http({
    url: "/v1/user/draw_address/USDT",
    method: "get"
  });
}
//添加提币地址
export function addressDraw(req) {
  return http({
    url: "/v1/user/add_draw_address",
    data: req,
    method: "post"
  });
}

//删除提币地址
export function deletAddressDraw(req) {
  return http({
    url: "/v1/user/delete_draw_address",
    data: req,
    method: "delete"
  });
}

//   /agent/statisticsProfit?pageNo=xx&pageSize=xx&from=xx&to=xx

// /agent/totalProfit

//分成数据
export function profitList(req) {
  return http({
    url: "/agent/statisticsProfit",
    data: req,
    method: "get"
  });
}

//分成总汇
export function profitTotal(req) {
  return http({
    url: "/agent/totalProfit",
    data: req,
    method: "get"
  });
}

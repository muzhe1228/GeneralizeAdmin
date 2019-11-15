import * as types from "./mutation-types";
import { Toast } from "vant";
import http from "common/Api";
const getUserInfo = function(commit) {
  http({
    url: "/v1/user/user_info",
    method: "get"
  }).then(res => {
    if (res.status == 200) {
      commit(types.SET_USERINFO, res.data);
    }
  });
};
export default {
  // 不请求直接异步改变
  updatedUserInfo({ commit }, userInfo) {
    commit(types.SET_USERINFO, userInfo);
  },

  //通过ajax 异步请求
  getUserInfo({ commit }) {
    getUserInfo(commit);
  }
};

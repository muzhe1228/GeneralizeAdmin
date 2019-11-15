<template>
  <div class="login">
    <h2>币通合伙人管理后台登录</h2>
    <div class="login_wrap">
      <div class="login_logo">
        <p>
          <img class="logo" src="~assets/Images/logo.png" alt />
        </p>
        <p>
          <img class="logo_size" src="~assets/Images/logo_size.png" alt />
        </p>
      </div>
      <div class="login_form">
        <p class="custom_inp">
          <input
            type="text"
            v-model="loginData.loginName"
            v-debounce="{
              fn: verify,
              method: 'input'
            }"
            placeholder="请输入您的账号"
          />
        </p>
        <p class="custom_inp">
          <input
            type="password"
            v-model="loginData.loginPwd"
            @keyup.enter="login"
            v-debounce="{
              fn: verify,
              method: 'input'
            }"
            placeholder="请输入你的登录密码"
          />
        </p>
      </div>
      <button class="custom_bigBtn" @click="login(loginData)" :disabled="isClick">登录</button>
    </div>
  </div>
</template>

<script>
import { isAccount, isPwd } from "common/utli";
import { loginHandle } from "common/http-req";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isClick: true,
      loginData: {
        loginName: "13800138003",
        loginPwd: "a666666",
        type: 0
      }
    };
  },
  components: {},
  mounted() {
    this.verify();
  },
  methods: {
    login(req) {
      loginHandle(req).then(res => {
        if (res.status == this.STATUS) {
          this.$lStore.set("token", res.data.token);
          this.updatedUserInfo(res.data);
          this.$router.push("/");
        }
      });
    },
    verify() {
      let pwdStr, loginNameStr;
      pwdStr = isPwd(this.loginData.loginPwd);
      loginNameStr = isAccount(this.loginData.loginName);
      pwdStr || loginNameStr ? (this.isClick = true) : (this.isClick = false);
    },
    ...mapActions(["updatedUserInfo"])
  }
};
</script>

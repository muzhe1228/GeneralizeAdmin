<template>
  <div class="editpwd">
    <div class="editpwd_top bgMain">
      <div class="title">
        <router-link tag="p" to="/" class="title_icon">
          <img src="~assets/Images/icon_back.png" alt />
        </router-link>
        <p class="title_size">修改密码</p>
      </div>
    </div>
    <div class="editpwd_wrap">
      <div class="editpwd_info">
        <p class="custom_inp">
          <input
            type="password"
            v-model="editData.oldLoginPwd"
            v-debounce="{
          fn: verify,
          method: 'input'
        }"
            placeholder="输入原密码"
          />
        </p>
        <p class="custom_inp">
          <input
            type="password"
            placeholder="输入新密码"
            v-model="editData.password"
            v-debounce="{
          fn: verify,
          method: 'input'
        }"
          />
        </p>
        <p class="custom_inp">
          <input
            type="password"
            placeholder="再次输入新密码"
            v-model="editData.againPassword"
            v-debounce="{
          fn: verify,
          method: 'input'
        }"
          />
        </p>
        <button class="custom_bigBtn" :disabled="isClick" @click="editPwd">提交</button>
      </div>
    </div>
    <Popup v-model="show" :close-on-click-overlay="false">
      <p class="close" @click="closePopup">
        <img src="~assets/Images/icon_close.png" alt />
      </p>
      <div class="editpwd_popup">
        <img class="succeed" src="~assets/Images/icon_succeed.png" alt />

        <div class="tips">
          <p>
            密码修改成功，请重新
            <router-link to="/login">登录</router-link>
          </p>
        </div>
        <button class="custom_bigBtn" @click="closePopup">确定</button>
      </div>
    </Popup>
  </div>
</template>

<script>
import { Popup } from "vant";
import { isPwd } from "common/utli";
import { editPwd } from "common/http-req";
export default {
  data() {
    return {
      show: false,
      isClick: true,
      editData: {
        oldLoginPwd: "",
        password: "",
        againPassword: "",
        codeType: 7
      }
    };
  },
  components: { Popup },
  mounted() {
    this.verify();
  },
  methods: {
    editPwd() {
      let req = {
        oldLoginPwd: this.editData.oldLoginPwd,
        password: this.editData.password,
        codeType: 7
      };
      if (this.editData.password !== this.editData.againPassword) {
        this.$toast("两次密码输入不一致！");
      } else {
        editPwd(req).then(res => {
          if (res.status == this.STATUS) {
            this.show = true;
          }
        });
      }
    },
    verify() {
      let errStr = isPwd(this.editData.oldLoginPwd),
        errStr1 = isPwd(this.editData.password),
        errStr2 = isPwd(this.editData.againPassword);
      errStr || errStr1 || errStr2
        ? (this.isClick = true)
        : (this.isClick = false);
    },
    showPopup() {
      this.show = true;
    },
    closePopup() {
      this.$lStore.clear();
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped lang="stylus"></style>

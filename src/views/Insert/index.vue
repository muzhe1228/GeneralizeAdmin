<template>
  <div class="insert">
    <div class="insert_top bgMain">
      <div class="title">
        <router-link tag="p" to="/" class="title_icon">
          <img src="~assets/Images/icon_back.png" alt />
        </router-link>
        <p class="title_size">推广下线</p>
      </div>
    </div>
    <div class="insert_wrap">
      <div class="insert_info">
        <p class="title">专属推广二维码</p>
        <p class="code">
          <img
            :src="`http://testweb.asiabitmex.com/auth/image/get?imageContent=http://www.cnbtc88.com/H5/inviteReg/?userCode=${userInfo.userCode}`"
            alt
          />
        </p>
        <p class="shareBtn">
          <button
            class="custom_bigBtn share"
            v-clipboard:copy="`http://www.cnbtc88.com/H5/inviteReg/?userCode=${userInfo.userCode}`"
            v-clipboard:success="onSuccess"
            v-clipboard:error="onError"
          >立即分享</button>
        </p>
        <p class="tips color3">至朋友圈</p>
        <p class="border"></p>
        <p
          class="location"
          v-clipboard:copy="`http://www.cnbtc88.com/H5/inviteReg/?userCode=${userInfo.userCode}`"
          v-clipboard:success="onSuccess"
          v-clipboard:error="onError"
        >{{`http://www.cnbtc88.com/H5/inviteReg/?userCode=${userInfo.userCode}`}}</p>
        <p class="tips color9">长按复制专属推广链接发展下级用户</p>
      </div>
      <div class="insert_banner">
        <p class="banner">
          <img src="~assets/Images/banner.png" alt />
        </p>
        <p class="banner">
          <img src="~assets/Images/banner.png" alt />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      url: "http://192.168.0.124:8080/insert"
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  components: {},
  methods: {
    onSuccess() {
      this.$toast("复制成功");
    },
    onError() {
      this.$toast("浏览器不支持复制");
    }
  }
};
</script>

<style scoped lang="stylus"></style>

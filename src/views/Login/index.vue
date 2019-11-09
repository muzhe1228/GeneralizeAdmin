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
          <input type="text" placeholder="请输入您的账号" />
        </p>
        <p class="custom_inp">
          <input type="password" placeholder="请输入你的登录密码" />
        </p>
      </div>
      <button class="custom_bigBtn" :disabled="disabled">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: false
    };
  },
  components: {},
  methods: {}
};
</script>

<template>
  <div class="home">
    <div class="bgMain home_top">
      <h2 class="title">币通合伙人管理中心</h2>
      <ul class="info">
        <li class="info_avatar">
          <img src="~assets/Images/logo.png" alt />
        </li>
        <li class="info_cont">
          <p>ID:215342</p>
          <p>您好，欢迎加入币通</p>
          <p class="info">
            <span>账号：15560048888</span>
            <span>级别：A级</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="home_banner">
      <img src="~assets/Images/banner.png" alt />
    </div>
    <div class="home_wrap">
      <p class="title">管理列表</p>
      <ul class="home_wrap_list">
        <router-link to="/insert_list" tag="li" class="single">
          <img class="icon36" src="~assets/Images/icon_1.png" alt />
          <p>下线列表</p>
        </router-link>
        <router-link to="/profit" tag="li" class="single">
          <img class="icon36" src="~assets/Images/icon_2.png" alt />
          <p>分成数据</p>
        </router-link>
        <router-link to="/finance" tag="li" class="single">
          <img class="icon29" src="~assets/Images/icon_3.png" alt />
          <p>财务中心</p>
        </router-link>
        <router-link to="/insert" tag="li" class="single">
          <img class="icon31" src="~assets/Images/icon_4.png" alt />
          <p>推广下线</p>
        </router-link>
        <router-link to="/level" tag="li" class="single">
          <img class="icon36" src="~assets/Images/icon_5.png" alt />
          <p>合伙级别</p>
        </router-link>
        <li class="single">
          <img class="icon29" src="~assets/Images/icon_6.png" alt />
          <p>修改密码</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {}
};
</script>



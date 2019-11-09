<template>
  <div class="finance">
    <subHeader Path="/" title="财务中心">
      <div class="info_btn">
        <router-link tag="button" to="/charge">充币</router-link>
        <router-link tag="button" to="/mention">提币</router-link>
      </div>
    </subHeader>
    <!-- <div class="finance_wrap"> -->
    <div class="finance_menu">
      <router-link tag="div" to="/accounts" class="single">
        <img src="~assets/Images/icon_accounts.png" alt />
        <p>转账</p>
      </router-link>
      <router-link tag="div" to="/finance_detail" class="single">
        <img src="~assets/Images/icon_finance.png" alt />
        <p>财务明细</p>
      </router-link>
    </div>
    <div class="finance_list">
      <ul class="single" v-for="(item,index) in List" :key="index">
        <li class="single_left">
          <p>{{index%2 ? "转账" : "提币"}}</p>
          <p>2019-11-10 12:26:52</p>
        </li>
        <li class="single_right">
          <p>
            -788.22
            <span>USDT</span>
          </p>
          <p v-if="index%2">转账ID: 23345</p>
        </li>
      </ul>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import subHeader from "components/subHeader";
export default {
  data() {
    return {
      List: new Array(10)
    };
  },
  components: { subHeader },
  methods: {}
};
</script>

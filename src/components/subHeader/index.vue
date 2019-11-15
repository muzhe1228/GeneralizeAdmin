<template>
  <div class="subHeader">
    <div class="bgMain subHeader_top">
      <div class="title">
        <router-link tag="p" :to="Path" class="title_icon">
          <img src="~assets/Images/icon_back.png" alt />
        </router-link>
        <p class="title_size">{{title}}</p>
      </div>
    </div>
    <div class="subHeader_wrap" :style="{height:(Heig-2.88)+'rem'}">
      <div class="subHeader_info" :style="{height:Heig+'rem'}">
        <p class="avatar">
          <img src="~assets/Images/avatar.png" alt />
        </p>
        <div class="info">
          <p class="info_label">资产总额</p>
          <p class="info_fund">
            {{headeData.amount}}
            <span>USDT</span>
          </p>
          <p class="info_btc">≈{{headeData.btcAmount}} BTC</p>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { assertsTotal } from "common/http-req";
export default {
  props: {
    Heig: {
      type: [String, Number],
      default: "5.16"
    },
    Path: {
      type: String,
      default: "/"
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      headeData: {}
    };
  },
  mounted() {
    this.getAssertsTotal();
  },
  methods: {
    //请求我的资产
    getAssertsTotal() {
      assertsTotal().then(res => {
        if (res.status == this.STATUS) {
          this.headeData = res.data;
        }
      });
    }
  }
};
</script>

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
    <div class="finance_list" v-if="detailData.total">
      <ul class="single" v-for="item in detailData.list" :key="item.tradeId">
        <li class="single_left">
          <p>{{detailType(item.handleType)}}</p>
          <p>{{item.createTime}}</p>
        </li>
        <li class="single_right">
          <p :class="item.amountSign == '-'?'color-red':'color-green'">
            {{`${item.amountSign}${item.amount}`}}
            <span>USDT</span>
          </p>
          <p>转账ID: {{item.id}}</p>
        </li>
      </ul>
      <router-link to="/finance_detail" tag="p" class="finance_more">点击查看更多</router-link>
    </div>
    <NotData v-else />
    <!-- </div> -->
  </div>
</template>

<script>
import NotData from "components/NotData";
import subHeader from "components/subHeader";
import { assertsTotal, getDetailList } from "common/http-req";
export default {
  data() {
    return {
      List: new Array(10),
      detailData: { list: [] }
    };
  },
  components: { subHeader,NotData },
  mounted() {
    this._initPage();
  },
  methods: {
    _initPage() {
      this.getDetailList();
    },
    detailType(type) {
      switch (Number(type)) {
        case 20090005:
          return "年化收益";
        case 20090001:
          return "任务收入";
        case 10010005:
          return "平台转入";
        case 10010015:
          return "平台转出";
        case 10010012:
          return "站内转出";
        case 10010013:
          return "站内转入";
        default:
          return;
      }
    },
    getDetailList(initReq) {
      initReq = initReq || { pageNo: 1, pageSize: 4 };
      getDetailList(initReq).then(res => {
        if (res.status == this.STATUS) {
          this.detailData = res.data;
        }
      });
    }
  }
};
</script>

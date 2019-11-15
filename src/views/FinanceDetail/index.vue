<template>
  <div class="financeDetail">
    <subHeader Path="/finance" title="财务明细">
      <div class="info_profit">
        <div>
          <p>今日分红</p>
          <p>12</p>
        </div>
        <div>
          <p>总分红</p>
          <p>12</p>
        </div>
      </div>
    </subHeader>
    <div class="financeDetail_wrap">
      <div class="financeDetail_list">
        <div class="listHead">
          <ul class="head">
            <li>时间</li>
            <li>交易金额</li>
            <li>交易明细</li>
          </ul>
        </div>
        <van-pull-refresh
          v-model="isLoading"
          class="List"
          v-if="detailData.total"
          @refresh="pullDown"
        >
          <van-list
            v-model="loading"
            :finished="!detailData.hasNextPage"
            :offset="80"
            finished-text="没有更多了"
            @load="pullUp"
            class="List_wrap"
            :immediate-check="false"
          >
            <ul class="List_single" v-for="item in detailData.list" :key="item.tradeId">
              <li>{{item.createTime}}</li>
              <li
                :class="item.amountSign=='-'?'color-red':'color-green'"
              >{{`${item.amountSign}${item.amount}`}} USDT</li>
              <li>{{detailType(item.handleType)}}</li>
            </ul>
          </van-list>
        </van-pull-refresh>
        <NotData v-else />
      </div>
    </div>
    <div class="financeDetail_bot">
      <div class="wrap">
        <p>总计:</p>
        <p>{{AllAmount.amountSign}}{{AllAmount.amount}} USDT</p>
      </div>
    </div>
  </div>
</template>

<script>
import NotData from "components/NotData";
import subHeader from "components/subHeader";
import { getStatisticsAmount, getDetailList } from "common/http-req";
export default {
  data() {
    return {
      AllAmount: {},
      detailData: { list: [] },
      pageNo: 1,
      loading: false,
      finished: false,
      isLoading: false
    };
  },
  components: { subHeader, NotData },
  mounted() {
    this._initPage();
  },
  methods: {
    _initPage() {
      this.getStatisticsAmount();
      this.getDetailList();
    },
    getStatisticsAmount() {
      getStatisticsAmount().then(res => {
        if (res.status == this.STATUS) {
          this.AllAmount = res.data;
        }
      });
    },
    getDetailList(initReq) {
      initReq = initReq || { pageNo: 1, pageSize: 20 };
      getDetailList(initReq).then(res => {
        if (res.status == this.STATUS) {
          if (initReq.pageNo != 1) {
            res.data.list = [...this.detailData.list, ...res.data.list];
          }
          this.detailData = res.data;
          this.pageNo = initReq.pageNo;
          this.loading = false;
          if (initReq.refresh) {
            this.isLoading = false;
            this.$toast({
              message: "刷新成功",
              duration: 300
            });
          }
        }
      });
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
    pullDown() {
      this.getDetailList({
        pageNo: 1,
        pageSize: 20,
        refresh: true
      });
    },
    pullUp() {
      this.getDetailList({
        pageNo: this.pageNo + 1,
        pageSize: 20
      });
    }
  }
};
</script>

<template>
  <div class="profit">
    <div class="profit_top bgMain">
      <div class="title">
        <router-link tag="p" to="/" class="title_icon">
          <img src="~assets/Images/icon_back.png" alt />
        </router-link>
        <p class="title_size">下线分成数据</p>
      </div>
    </div>
    <div class="profit_wrap">
      <div class="profit_search">
        <p class="title">查询：</p>
        <div class="dateRange">
          <p class="left">时间段</p>
          <date-picker v-model="startTime" @change="changeStart" width="114"></date-picker>
          <p class="mid">至</p>
          <date-picker v-model="endTime" @change="changeEnd" width="114"></date-picker>
        </div>
        <div class="uuid">
          <button class="custom_bigBtn" @click="searchHandle">确定</button>
        </div>
      </div>
      <div class="profit_mid">
        <p>综合总收益：{{totalData.totalProfit | priceFormat}}</p>
        <p>总分成：{{totalData.totalFee | priceFormat}}</p>
      </div>
      <div class="profit_list">
        <div class="listHead">
          <ul class="head">
            <li>日期</li>
            <li>累计用户</li>
            <li>注册用户</li>
            <li>综合收益</li>
            <li>分成</li>
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
            <ul class="List_single" v-for="(item, index) in detailData.list" :key="index">
              <li>2019-11-07</li>
              <li>1250</li>
              <li>6</li>
              <li>999111</li>
              <li>5</li>
            </ul>
          </van-list>
        </van-pull-refresh>
        <NotData v-else />
      </div>
    </div>
  </div>
</template>

<script>
import NotData from "components/NotData";
import { dateFormat } from "common/utli";
import DatePicker from "vue2-datepicker";
import { profitList, profitTotal } from "common/http-req";
export default {
  data() {
    return {
      startTime: "",
      endTime: "",
      ListArr: new Array(30),
      totalData: {},
      detailData: { list: [] },
      pageNo: 1,
      loading: false,
      finished: false,
      isLoading: false
    };
  },
  components: { DatePicker, NotData },
  mounted() {
    this._initPage();
  },
  methods: {
    _initPage() {
      this.getProfitList();
      this.getProfitTotal();
    },
    searchHandle() {
      this.getProfitList({
        pageNo: 1,
        pageSize: 20,
        form: this.startTime,
        to: this.endTime
      });
    },
    getProfitList(initReq) {
      initReq = initReq || { pageNo: 1, pageSize: 20 };
      profitList(initReq).then(res => {
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
    getProfitTotal() {
      profitTotal().then(res => {
        if (res.status == this.STATUS) {
          this.totalData = res.data;
        }
      });
    },
    pullDown() {
      this.getProfitList({
        pageNo: 1,
        pageSize: 20,
        refresh: true
      });
    },
    pullUp() {
      this.getProfitList({
        pageNo: this.pageNo + 1,
        pageSize: 20
      });
    },
    changeEnd(val) {
      console.log(dateFormat(val, "yyyy-MM-dd"));
    },
    changeStart(val) {
      console.log(dateFormat(val, "yyyy-MM-dd"));
    }
  }
};
</script>

<style scoped lang="stylus"></style>

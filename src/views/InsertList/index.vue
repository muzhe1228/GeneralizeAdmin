<template>
  <div class="insertList">
    <div class="insertList_top bgMain">
      <div class="title">
        <router-link tag="p" to="/" class="title_icon">
          <img src="~assets/Images/icon_back.png" alt />
        </router-link>
        <p class="title_size">下线列表</p>
      </div>
    </div>
    <div class="insertList_wrap">
      <div class="insertList_search">
        <p class="title">查询：</p>
        <div class="dateRange">
          <p class="left">时间段</p>
          <date-picker v-model="startTime" @change="changeStart" width="114"></date-picker>
          <p class="mid">至</p>
          <date-picker v-model="endTime" @change="changeEnd" width="114"></date-picker>
        </div>
        <div class="uuid">
          <!-- <p class="custom_inp">
            <input type="number" placeholder="用户ID" />
          </p>-->
          <button class="custom_bigBtn" @click="searchHandle">确定</button>
        </div>
      </div>
      <div class="insertList_mid">当前注册用户：{{memberData.total}}</div>
      <div class="insertList_list">
        <div class="listHead">
          <ul class="head">
            <li>时间</li>
            <li>用户ID</li>
            <li>手机/Email</li>
          </ul>
        </div>
        <!-- v-if="detailData.total" -->
        <van-pull-refresh
          v-model="isLoading"
          v-if="memberData.total"
          class="List"
          @refresh="pullDown"
        >
          <van-list
            v-model="loading"
            :finished="true"
            :offset="80"
            finished-text="没有更多了"
            @load="pullUp"
            :immediate-check="false"
            class="List_wrap"
          >
            <ul class="List_single" v-for="(item, index) in memberData.list" :key="index">
              <li>{{item.regTime | dateFormat("yyyy-MM-dd")}}</li>
              <li>{{item.userId}}</li>
              <li>{{item.mobile?item.mobile:item.email}}</li>
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
import { memberList } from "common/http-req";
export default {
  data() {
    return {
      startTime: "",
      endTime: "",
      loading: false,
      finished: false,
      isLoading: false,
      memberData: { list: [] },
      pageNo: 1
    };
  },
  components: { DatePicker, NotData },
  mounted() {
    this._initPage();
  },
  methods: {
    _initPage() {
      this.getMemberList();
    },
    searchHandle() {
      this.getMemberList({
        pageNo: 1,
        pageSize: 20,
        form: this.startTime,
        to: this.endTime
      });
    },
    getMemberList(initReq) {
      initReq = initReq || {
        pageNo: 1,
        pageSize: 20
      };
      memberList(initReq).then(res => {
        if (res.status == this.STATUS) {
          console.log(res.data);
          if (initReq.pageNo != 1) {
            res.data.list = [...this.memberData.list, ...res.data.list];
          }
          this.memberData = res.data;
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
    changeEnd(val) {
      console.log(dateFormat(val, "yyyy-MM-dd"));
    },
    changeStart(val) {
      console.log(dateFormat(val, "yyyy-MM-dd"));
    },
    pullDown() {
      this.getMemberList({
        pageNo: 1,
        pageSize: 20,
        refresh: true
      });
    },
    pullUp() {
      this.getMemberList({
        pageNo: this.pageNo + 1,
        pageSize: 20
      });
    }
  }
};
</script>

<style scoped lang="stylus"></style>

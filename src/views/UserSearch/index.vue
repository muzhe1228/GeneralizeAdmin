<template>
  <div class="userSearch">
    <div class="userSearch_top bgMain">
      <div class="title">
        <router-link tag="p" to="/" class="title_icon">
          <img src="~assets/Images/icon_back.png" alt />
        </router-link>
        <p class="title_size">用户查询</p>
      </div>
    </div>
    <div class="userSearch_wrap">
      <div class="userSearch_search">
        <p class="title">查询：</p>
        <div class="dateRange">
          <p class="left">时间段</p>
          <date-picker v-model="startTime" @change="changeStart" width="114"></date-picker>
          <p class="mid">至</p>
          <date-picker v-model="endTime" @change="changeEnd" width="114"></date-picker>
        </div>
        <div class="uuid">
          <p class="custom_inp">
            <input type="number" placeholder="用户ID" />
          </p>
          <button class="custom_bigBtn">确定</button>
        </div>
      </div>
      <div class="userSearch_mid">
        <p>综合总收益：978965842</p>
        <p>总分成：6212354</p>
      </div>
      <div class="userSearch_list">
        <div class="listHead">
          <ul class="head">
            <li>日期</li>
            <li>综合收益</li>
            <li>分成</li>
          </ul>
        </div>
        <div class="List">
          <div class="List_wrap">
            <ul class="List_single" v-for="(item, index) in ListArr" :key="index">
              <li>2019-11-07</li>
              <li>999111</li>
              <li>5</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dateFormat } from "common/utli";
import DatePicker from "vue2-datepicker";
export default {
  data() {
    return {
      startTime: "",
      endTime: "",
      ListArr: new Array(30)
    };
  },
  components: { DatePicker },
  methods: {
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

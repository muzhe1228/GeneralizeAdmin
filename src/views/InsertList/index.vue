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
          <p class="custom_inp">
            <input type="number" placeholder="用户ID" />
          </p>
          <button class="custom_bigBtn">确定</button>
        </div>
      </div>
      <div class="insertList_mid">当前注册用户：789</div>
      <div class="insertList_list">
        <div class="listHead">
          <ul class="head">
            <li>时间</li>
            <li>用户ID</li>
            <li>手机/Email</li>
          </ul>
        </div>
        <div class="List">
          <div class="List_wrap">
            <ul class="List_single" v-for="(item, index) in ListArr" :key="index">
              <li>2019-11-07</li>
              <li>7620800222</li>
              <li>muzhe1228@163.com</li>
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

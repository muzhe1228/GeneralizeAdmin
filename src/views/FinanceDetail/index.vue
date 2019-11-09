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

        <div class="List">
          <div class="List_wrap">
            <ul class="List_single" v-for="(item, index) in ListArr" :key="index">
              <li>2019-11-07</li>
              <li :class="index%2?'color-red':'color-green'">+50 USDT</li>
              <li>利息收入</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="financeDetail_bot">
      <div class="wrap">
        <p>总计:</p>
        <p>+3330666 USDT</p>
      </div>
    </div>
  </div>
</template>

<script>
import subHeader from "components/subHeader";
export default {
  data() {
    return {
      ListArr: new Array(30)
    };
  },
  components: { subHeader },
  methods: {}
};
</script>

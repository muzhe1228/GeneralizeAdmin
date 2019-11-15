<template>
  <div class="accounts">
    <subHeader ref="subHeader" Heig="3.76" Path="/finance" title="转账" />
    <div class="accounts_wrap">
      <div class="accounts_form" v-if="!Success">
        <div class="form_single">
          <p class="label">用户ID</p>
          <p class="custom_inp">
            <input
              type="number"
              v-debounce="{
              fn: verify,
              method: 'input'
            }"
              v-model="req.uuid"
              placeholder="请输入转账地址"
            />
          </p>
        </div>
        <div class="form_single">
          <p class="label">提币数量</p>
          <p class="custom_inp">
            <input
              type="number"
              v-debounce="{
              fn: verify,
              method: 'input'
            }"
              v-model="req.amount"
              placeholder="请输入转账数量"
            />
          </p>
        </div>
        <button class="custom_bigBtn" :disabled="isClick" @click="walletTransfer(req)">确定</button>
      </div>
      <div class="accounts_success" v-else>
        <p>
          您已向ID: {{req.uuid}}
          <span class="color-red">成功</span>转账
        </p>
        <p class="num">
          <span>{{req.amount}}</span>
          USDT
        </p>
        <button class="custom_bigBtn" @click="back">返回</button>
      </div>
      <div class="accounts_tips">
        <p class="title">注意：</p>
        <p class="text">请输入正确的USDT钱包地址，并仔细核对，如地址错误将产生无法挽回的损失。</p>
      </div>
    </div>
  </div>
</template>

<script>
import subHeader from "components/subHeader";
import { isUuid, isNumPrice } from "common/utli";
import { walletTransfer } from "common/http-req";
export default {
  data() {
    return {
      List: new Array(10),
      req: { amount: "", uuid: "" },
      isClick: true,
      Success: false
    };
  },
  components: { subHeader },
  methods: {
    walletTransfer(req) {
      walletTransfer(req).then(res => {
        if (res.status == this.STATUS) {
          this.Success = true;
          this.isClick = true;
          this.$refs.subHeader.getAssertsTotal();
        }
      });
    },
    back() {
      this.Success = false;
      this.req = { amount: "", uuid: "" };
    },
    verify() {
      let uuidStr, amountStr;
      uuidStr = isUuid(this.req.uuid);
      amountStr = isNumPrice(this.req.amount);
      uuidStr || amountStr ? (this.isClick = true) : (this.isClick = false);
    }
  }
};
</script>

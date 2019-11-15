<template>
  <div class="charge">
    <subHeader Heig="3.76" Path="/finance" title="充币" />
    <div class="charge_wrap">
      <div class="charge_code">
        <p class="img">
          <img :src="`http://qr.liantu.com/api.php?text=${hash}`" alt />
        </p>
        <p class="tips">请使用数字钱包扫码进行充值</p>
        <p
          class="hash"
          v-clipboard:copy="hash"
          v-clipboard:success="onSuccess"
          v-clipboard:error="onError"
        >{{hash}}</p>
        <p class="tips">长按复制地址进行充值</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import subHeader from "components/subHeader";
import { getAddressList } from "common/http-req";
export default {
  data() {
    return {
      hash: ""
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  components: { subHeader },
  mounted() {
    this._initPage();
  },
  methods: {
    _initPage() {
      this.getAddress();
    },
    getAddress() {
      getAddressList({ coinType: "USDT", userId: this.userInfo.userId }).then(
        res => {
          if (res.status == this.STATUS) {
            this.hash = res.data.rechargeAdd;
          }
        }
      );
    },
    onSuccess() {
      this.$toast("复制成功");
    },
    onError() {
      this.$toast("浏览器不支持复制");
    }
  }
};
</script>

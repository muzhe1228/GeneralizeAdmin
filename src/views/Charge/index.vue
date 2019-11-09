<template>
  <div class="charge">
    <subHeader Heig="3.76" Path="/finance" title="充币" />
    <div class="charge_wrap">
      <div class="charge_code">
        <p class="img">
          <img src="http://qr.liantu.com/api.php?text=123" alt />
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
import subHeader from "components/subHeader";
export default {
  data() {
    return {
      List: new Array(10),
      disabled: false,
      hash: "lkdasfdfcvv2vcv0vd21v3f0v0.r2v1vfvrvev0.vsvs.0vsvsdv3130"
    };
  },
  components: { subHeader },
  methods: {
    onSuccess() {
      this.$toast("复制成功");
    },
    onError() {
      this.$toast("浏览器不支持复制");
    }
  }
};
</script>

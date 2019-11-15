<template>
  <div class="mention">
    <subHeader Heig="3.76" Path="/finance" title="提币" />
    <div class="mention_wrap">
      <div class="mention_form">
        <div class="form_single">
          <p class="label">提币地址</p>
          <router-link tag="p" to="/coin_address" class="seletAddress">
            选择提币地址
            <van-icon class="icon" name="arrow" />
          </router-link>
          <!-- <p class="custom_inp">
            <input type="text" placeholder="请输入提币地址" />
          </p>-->
        </div>
        <div class="form_single">
          <p class="label">提币数量</p>
          <p class="custom_inp">
            <input type="number" placeholder="请输入提币数量" />
          </p>
        </div>
        <button class="custom_bigBtn" :disabled="disabled">确定</button>
      </div>
      <div class="mention_tips">
        <p class="title">注意：</p>
        <p class="text">请输入正确的USDT钱包地址，并仔细核对，如地址错误将产生无法挽回的损失。</p>
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
      disabled: false
    };
  },
  components: { subHeader },
  methods: {}
};
</script>

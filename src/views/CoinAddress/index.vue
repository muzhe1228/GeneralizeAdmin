<template>
  <div class="Coinadd">
    <subHeader Heig="3.76" Path="/mention" title="币地址管理" />
    <div class="Coinadd_list" v-if="addList.length">
      <ul class="single" v-for="item in addList" :key="item.drawAdd">
        <li class="single_left">
          <p>
            提币地址
            <span>{{item.remarks}}</span>
          </p>
          <p>{{item.drawAdd}}</p>
        </li>
        <li class="single_right" @click="deletAdd(item.drawAdd)">点击删除</li>
      </ul>
    </div>
    <NotData v-else />
    <div class="Coinadd_btn">
      <button class="custom_bigBtn" @click="showPopup">新增地址</button>
    </div>
    <Popup v-model="show" :close-on-click-overlay="false" class="Coinadd_new">
      <p class="close" @click="closePopup">
        <img src="~assets/Images/icon_close.png" alt />
      </p>
      <div class="Coinadd_info">
        <p class="title">新增提币地址</p>
        <div class="form_single">
          <p class="label">提币地址</p>
          <p class="custom_inp">
            <input
              type="text"
              v-model="req.drawAdd"
              v-debounce="{
                fn: verify,
                method: 'input'
              }"
              placeholder="请输入提币地址"
            />
          </p>
        </div>
        <div class="form_single">
          <p class="label">地址标签</p>
          <p class="custom_inp">
            <input
              type="text"
              v-model="req.remarks"
              v-debounce="{
                fn: verify,
                method: 'input'
              }"
              placeholder="15个字以内"
            />
          </p>
        </div>
        <button class="custom_bigBtn" :disabled="isClick" @click="addAddress">新增地址</button>
      </div>
    </Popup>
  </div>
</template>

<script>
import NotData from "components/NotData";
import { Popup } from "vant";
import subHeader from "components/subHeader";
import {
  addressDraw,
  drawAddressList,
  deletAddressDraw
} from "common/http-req";
import { isAddress } from "common/utli";
export default {
  data() {
    return {
      show: false,
      addList: [],
      isClick: true,
      req: {
        coinCode: "USDT",
        drawAdd: "",
        remarks: "",
        codeType: 10
      }
    };
  },
  components: { subHeader, Popup, NotData },
  mounted() {
    this._initPage();
  },
  methods: {
    _initPage() {
      this.getAddressList();
    },
    getAddressList() {
      drawAddressList().then(res => {
        if (res.status == this.STATUS) {
          this.addList = res.data;
          this.$lStore.set("drawSite", res.data[0]);
        }
      });
    },
    addAddress() {
      addressDraw(this.req).then(res => {
        if (res.status == this.STATUS) {
          this.closePopup();
          this.getAddressList();
        }
      });
    },
    deletAdd(drawAdd) {
      if (this.$lStore.get("drawSite").drawAdd == drawAdd) {
        this.$lStore.remove("drawSite");
      }
      deletAddressDraw({ coinCode: "USDT", drawAdd: drawAdd }).then(res => {
        if (res.status == this.STATUS) {
          this.getAddressList();
        }
      });
    },
    verify() {
      let addressStr, remarksStr;
      addressStr = isAddress(this.req.drawAdd);
      remarksStr = !this.req.remarks.trim();
      addressStr || remarksStr ? (this.isClick = true) : (this.isClick = false);
    },
    showPopup() {
      this.show = true;
    },
    closePopup() {
      this.show = false;
    }
  }
};
</script>

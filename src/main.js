// import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./Store";
import "./common/extend";
import "./common/filter";
import FastClick from "fastclick";
import "./assets/stylus/reset.styl";
import VueClipboard from "vue-clipboard2";
import { List, PullRefresh, Toast, Icon } from "vant";
FastClick.prototype.onTouchEnd = function() {};
if ("addEventListener" in document) {
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      FastClick.attach(document.body);
    },
    false
  );
}
Vue.use(VueClipboard)
  .use(List)
  .use(PullRefresh)
  .use(Toast)
  .use(Icon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

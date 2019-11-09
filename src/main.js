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
Vue.use(VueClipboard);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

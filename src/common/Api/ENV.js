export default {
  // 测试地址
  testENV: {
    name: "test",
    httpApi: "http://web.asiabitmex.com",
    TVsocket: "ws://3.0.67.19:8195/ws",
    market: "app1"
    // TVsocket: "ws://192.168.0.104:8085/"
  },
  //生产地址
  // 18.139.211.91:8183
  proENV: {
    name: "prod",
    httpApi: "http://18.139.211.91:8183",
    TVsocket: "ws://3.0.67.19:8085",
    chartSocket:"ws://18.139.211.91:8017",
    mainTVsocket: "ws://47.244.45.195:8085",
    market: "testIOS"
    // TVsocket: "ws://192.168.50.71:8195/ws",
  },
  aliENV: {
    name: "test",
    httpApi: "http://testweb.asiabitmex.com",
    TVsocket: "ws://114.55.211.149:8085",
    chartSocket:"ws://114.55.211.149:8017",
    mainTVsocket: "ws://47.244.45.195:8085",
    market: "alIOS"
    // TVsocket: "ws://192.168.50.71:8195/ws",
  },
  getENV: function() {
    return this.aliENV;
  }
};

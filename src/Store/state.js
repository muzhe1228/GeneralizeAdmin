import { lStore } from "../common/utli";
export default {
  userInfo: lStore.get("userInfo") || ""
};

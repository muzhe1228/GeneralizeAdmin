import * as types from "./mutation-types";
import { lStore } from "../common/utli";
export default {
    [types.SET_USERINFO](state, userInfo) {
        if (userInfo) {
            lStore.set("userInfo", userInfo);
        } else {
            lStore.remove("userInfo");
        }
        state.userInfo = userInfo;
    },
   
};

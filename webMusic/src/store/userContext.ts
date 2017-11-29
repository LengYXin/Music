/**
 * 用户
 */
import { observable, computed, autorun } from "mobx"
// import axios from "axios"
import Http from "../utils/http"
class ObservableStore {
    //当前用户
    @observable UserContext = {};
    // 登录状态
    @observable State = false;
    // 首次加载用户数据中
    @observable Loading = true;
    // @observable list = [];
    constructor() {
        // 模拟一下网速慢
        // setTimeout(() => {
        // this.onLogin({ phone: "18611752863", password: "leng5201314" });
        // }, 1000);
        // autorun(() => console.log("-----autorun------", this.State));
    }
    async onLogin(params: { phone: string, password: string }) {
        this.UserContext = await Http.get(`login/cellphone?phone=${params.phone}&password=${params.password}`);
    }
    // @computed get complete() {

    // }
}
const Store = new ObservableStore();
// console.log("Store----UserContext", Store);
export default Store;




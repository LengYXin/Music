/**
 * 推荐
 */
import { observable, computed, autorun } from "mobx"
import  Http from "../utils/http"
class ObservableStore {
    @observable Store = {};
    @observable resource = JSON.parse(window.sessionStorage.getItem("getResource"));
    personalized
    constructor() {
        this.getResource();
    }
    // 获取每日推荐歌单
    async getResource() {
        if (!this.resource) {
            this.resource = await Http.get(`recommend/resource`);
            window.sessionStorage.setItem("getResource", JSON.stringify(this.resource));
        }
        return this.resource;
    }
    //获取每日推荐歌曲
    getSongs() {
        return Http.get(`recommend/songs`).then(x => {

        }).catch(e => {
        })
    }
}
const Store = new ObservableStore();
console.log("Store----recommend", Store);
export default Store;



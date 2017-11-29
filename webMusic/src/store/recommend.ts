/**
 * 推荐
 */
import { observable, computed, autorun } from "mobx"
import Http from "../utils/http"
import Cache from "../utils/cache"
class ObservableStore {
    // @observable Store = {};
    @observable resource = Cache.storageGet("getResource");
    personalized
    constructor() {
        this.getResource();
    }
    // 获取每日推荐歌单
    async getResource() {
        if (!this.resource) {
            this.resource = await Http.get(`recommend/resource`);
            Cache.storageSet("getResource", this.resource);
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
// console.log("Store----recommend", Store);
export default Store;



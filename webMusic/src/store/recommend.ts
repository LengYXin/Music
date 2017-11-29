/**
 * 推荐
 */
import { observable, computed, autorun } from "mobx"
import { Http, Cache } from "../utils"
import formatTool from './formatTool';
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
            let data = await Http.get(`recommend/resource`);
            this.resource = formatTool.formatSongSheet(data.recommend, {
                id: "id",
                img: "picUrl",
                name: "name"
            });
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



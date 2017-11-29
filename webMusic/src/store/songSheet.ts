/**
 * 精品歌单
 */
import { observable, computed, autorun } from "mobx"
import Http from "../utils/http"
import Help from "../utils/help"
import Cache from "../utils/cache"
class ObservableStore {
    // @observable Store = {};
    // 歌单
    @observable playlist = Cache.storageGet("getPlaylist");
    // 详情
    @observable details = {};
    // 详情集合
    @observable detailsList = {};


    constructor() {
        // console.log(Help);
        this.getPlaylist();
    }
    // 获取歌单
    async getPlaylist() {
        if (!this.playlist) {
            this.playlist = await Http.get(`top/playlist`);
            Cache.storageSet("getPlaylist", this.playlist);
        }
        return this.playlist;
    }
    async getDetails(id) {
        // playlist/detail?id=20320734
        this.details = {};
        const details = Cache.storageGet(`detail?id=${id}`);
        if (!this.detailsList[id]) {
            if (details) {
                this.detailsList[id] = details;
            } else {
                this.detailsList[id] = await Http.get(`playlist/detail?id=${id}`);
                Cache.storageSet(`detail?id=${id}`, this.detailsList[id]);
            }
        }
        this.details = this.detailsList[id];
        return this.details;
    }
}
const Store = new ObservableStore();
// console.log("Store----songSheet", Store);
export default Store;



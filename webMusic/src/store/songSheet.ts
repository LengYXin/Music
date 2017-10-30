/**
 * 精品歌单
 */
import { observable, computed, autorun } from "mobx"
import Http from "../utils/http"
import Help from "../utils/help"
class ObservableStore {
    @observable Store = {};
    // 歌单
    @observable playlist = JSON.parse(window.sessionStorage.getItem("getPlaylist"));
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
            window.sessionStorage.setItem("getPlaylist", JSON.stringify(this.playlist));
        }
        return this.playlist;
    }
    async getDetails(id) {
        // playlist/detail?id=20320734
        this.details = {};
        const details = window.sessionStorage.getItem(`detail?id=${id}`);
        if (!this.detailsList[id]) {
            if (details) {
                this.detailsList[id] = JSON.parse(details);
            } else {
                this.detailsList[id] = await Http.get(`playlist/detail?id=${id}`);
                window.sessionStorage.setItem(`detail?id=${id}`, JSON.stringify(this.detailsList[id]));
            }
        }
        this.details = this.detailsList[id];
        return this.details;
    }
}
const Store = new ObservableStore();
console.log("Store----songSheet", Store);
export default Store;



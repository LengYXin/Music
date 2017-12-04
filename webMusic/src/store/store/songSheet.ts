/**
 * 精品歌单
 */
import { observable, computed, autorun } from "mobx"
import { Http, Cache } from "../../utils"
import formatTool from './formatTool';
export default class ObservableStore {
    // @observable Store = {};
    // 歌单
    @observable playlist = Cache.localGet("getPlaylist");
    // 详情
    @observable details = {};
    // 详情集合
    @observable detailsList = {};
    // 每日推荐歌单
    @observable resource = Cache.localGet("getResource");
   
    constructor() {
        // console.log(Help);
        // this.getPlaylist();
        // this.getResource();
    }
   
    /**
     * 获取每日推荐歌单
     */
    async getResource() {
        if (!this.resource) {
            this.resource = await Http.get(`recommend/resource`).map(x => formatTool.formatSongSheet(x.recommend, {
                img: "picUrl",
            })).toPromise();
            Cache.localSet("getResource", this.resource);
        }
        return this.resource;
    }
    /**
     * 获取歌单
     */
    async getPlaylist() {
        if (!this.playlist) {
            this.playlist = await Http.get(`top/playlist`).map(x => formatTool.formatSongSheet(x.playlists, {
                img: "coverImgUrl",
            })).toPromise();
            Cache.localSet("getPlaylist", this.playlist);
        }
        return this.playlist;
    }
    /**
     * 获取歌单详情
     * @param id 
     */
    async getDetails(id) {
        // playlist/detail?id=20320734
        this.details = {};
        const details = Cache.localGet(`detail?id=${id}`);
        if (!this.detailsList[id]) {
            if (details) {
                this.detailsList[id] = details;
            } else {
                this.detailsList[id] = await Http.get(`playlist/detail?id=${id}`).toPromise();
                Cache.localSet(`detail?id=${id}`, this.detailsList[id]);
            }
        }
        this.details = this.detailsList[id];
        return this.details;
    }
}




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
    // 详情加载中
    @observable detailsLoading = false;
    // 当前详情id
    detailsId = "";
    // 详情
    @observable details = {};
    // 详情集合
    detailsList = {};
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
            let resource = await Http.get(`recommend/resource`).map(x => formatTool.formatSongSheet(x.recommend, {
                img: "picUrl",
            })).toPromise();
            // 凑个数
            let highquality = await Http.get(`top/playlist?limit=5`).map(x => formatTool.formatSongSheet(x.playlists, {
                img: "coverImgUrl",
            })).toPromise();
            this.resource = [...resource, ...highquality];
            Cache.localSet("getResource", this.resource);
        }
        return this.resource;
    }
    /**
     * 获取歌单
     */
    async getPlaylist() {
        if (!this.playlist) {
            this.playlist = await Http.get(`top/playlist?limit=54`).map(x => formatTool.formatSongSheet(x.playlists, {
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
        this.detailsLoading = false;
        this.detailsId = id;
        if (!this.detailsList[id]) {
            this.detailsList[id] = await Http.get(`playlist/detail?id=${id}`).map(x => formatTool.formatSongSheetDetails(x)).toPromise();
        }
        // 防止网速响应慢的情况覆盖当前歌单详情。
        if (this.detailsId == id) {
            this.details = this.detailsList[id];
            this.detailsLoading = true;
        }
        console.log("object", id, this.detailsList);
        return this.details;
    }
}




/**
 * 推荐
 */
import { observable, computed, autorun } from "mobx"
import { Http, Cache } from "../../utils"
import formatTool from './formatTool';
export default  class ObservableStore {
    // @observable Store = {};
    @observable resource = Cache.localGet("getResource");
    personalized
    constructor() {
        this.getResource();
    }
    // 获取每日推荐歌单
    async getResource() {
        if (!this.resource) {
            let data = await Http.get(`recommend/resource`).toPromise();
            this.resource = formatTool.formatSongSheet(data.recommend, {
                id: "id",
                img: "picUrl",
                name: "name"
            });
            Cache.localSet("getResource", this.resource);
        }
        return this.resource;
    }
    //获取每日推荐歌曲
    getSongs() {
        return Http.get(`recommend/songs`).toPromise()
    }
}




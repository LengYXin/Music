/**
 * 推荐
 */
import { observable, computed, autorun } from "mobx"
import { Http, Cache } from "../../utils"
import formatTool from './formatTool';
export default class ObservableStore {
    @observable banner = Cache.localGet("banner");
    constructor() {
        
    }
    /**可获取 banner(轮播图)数据 */
    async getBanner() {
        if (!this.banner) {
            this.banner = await Http.get(`banner`).map(x => x.banners).toPromise();
            Cache.localSet("banner", this.banner);
        }
        return this.banner;
    }

}




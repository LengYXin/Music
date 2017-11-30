/**
 * 推荐
 */
import { observable, computed, autorun } from "mobx"
import { Http, Cache } from "../../utils"
import formatTool from './formatTool';
export default class ObservableStore {
    @observable banner = null;
    constructor() {
        this.init();
    }
    // 初始化数据
    init() {

    }
    // 可获取 banner(轮播图)数据
    async getBanner() {
        if (!this.banner) {
            this.banner = await Http.get(`banner`).toPromise();
        }
        return this.banner;
    }
   
}




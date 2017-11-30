/**
 * Music
 */
import { observable, computed, autorun } from "mobx"
import { Http,Cache } from "../../utils"

export default class ObservableStore {
    constructor() { }
    // MV列表
    @observable MVList = Cache.localGet("MVList", {});
    // 播放
    @observable current = {};
    /**
    * 播放歌曲
    * getMusic 获取歌曲地址
    * getLyric 获取歌词信息
    * 默认缓存下一首歌曲地址。
    */
    async play(id?) {
        this.current = {};
        await this.getMV(id);
        let MV = { ...this.MVList[id] };
        MV.brs = Object.keys(MV.brs).map(x => {
            return { brs: x, url: Http.address + "mv/url?url=" + MV.brs[x] }
        })
        // 存储当前播放歌曲信息
        this.current = MV;
    }
    /**
     * 获取 MV
     * 先从内存数据中读取，如果内存存在这条数据跳过http请求。
     * @param id /mv?mvid=5436712
     */
    async getMV(id: string) {
        // 已经获取过的歌曲略过
        let res: any = {};
        let data = {};
        if (!this.MVList.hasOwnProperty(id)) {
            res = await Http.get(`mv?mvid=` + id).toPromise();
            data[id] = res.data;
        } else {
            res = this.MVList[id];
        }
        this.MVList = { ...this.MVList, ...data };
        Cache.localSet("MVList",this.MVList);
        return res;
    }

}



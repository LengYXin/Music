import windowsStore from './store/windows';
import basicDataStore from "./store/basicData";
import UserContextStore from './store/userContext';
import songSheetStore from './store/songSheet';
import musicStore from './store/music';
import playStore from './store/play';
import mvStore from './store/mv';
import { create, persist } from 'mobx-persist'
//中控
import controller from "./controller";

class store {
    constructor() {

        this.ready();
        this.init();
    }
    hydrate = create({})
    // model = new model();
    // 窗口
    windowsStore = new windowsStore();
    // 中控
    controller = new controller(this);
    // 歌曲播放
    playStore = new playStore(this.controller);
    // mv
    mvStore = new mvStore(this.controller);
    // 基础数据
    basicDataStore = new basicDataStore();
    // 用户
    UserContextStore = new UserContextStore(this.controller);
    // 个性推荐
    // recommendStore = new recommendStore();
    // 歌单
    songSheetStore = new songSheetStore();
    // 音乐
    musicStore = new musicStore();
    /**
     * 定义全局 变量 枚举 ===
     */
    ready() {
        // 设置全局 变量
        window["globalMusic"] = {
            defaultImg: "/assets/img/default_album.jpg"
        }
        // 通知枚举
        window["EnumNotice"] = {
            LoginOut: 0,
            LoginSuccess: 1,
            MusicPlay: 2,
            MVPlay: 3
        }
        console.log("-----------ready Store------------", this);
    }
    /**
     * 初始化数据
     */
    init() {
        this.hydrate('playStore', this.playStore)
            .then(() => {
                this.playStore.playParam.playState = false;
                this.playStore.playParam.showList = false;
            })

        this.basicDataStore.getBanner();
        this.songSheetStore.getPlaylist();
        this.UserContextStore.onRefresh();
    }

};
export default new store();
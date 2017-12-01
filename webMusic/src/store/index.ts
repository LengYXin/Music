import windowsStore from './store/windows';
import basicDataStore from "./store/basicData";
import UserContextStore from './store/userContext';
import songSheetStore from './store/songSheet';
import musicStore from './store/music';
import playStore from './store/play';
import mvStore from './store/mv';

//中控
import { controller } from "./controller";
class store {
    constructor() {
        this.ready();
        this.init();
        // 订阅通知
        this.controller.subject.subscribe({
            next: this.subscribe.bind(this),
            error: e => {
                console.error("controller Error", e);
            }
        });
        // console.log("Enum");
    }

    // model = new model();
    // 窗口
    windowsStore = new windowsStore();
    // 中控
    controller = controller;
    // 歌曲播放
    playStore = new playStore(this.controller);
    // mv
    mvStore = new mvStore(this.controller);
    // 基础数据
    basicDataStore = new basicDataStore();
    // 用户
    UserContextStore = new UserContextStore();
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
        this.basicDataStore.getBanner();
        this.songSheetStore.getPlaylist();
    }
    subscribe(x: controllerObserver) {
        console.log("subscribe",x);
        switch (x.type) {
            // 登录成功
            case EnumNotice.LoginSuccess:
                break;
            // 音乐播放
            case EnumNotice.MusicPlay:
                break;
            //mv 播放
            case EnumNotice.MVPlay:
                this.playStore.updatePlayState(!x.data);
                break;
            default:
                break;
        }
    }
};
export default new store();
import windowsStore from './store/windows';
import UserContextStore from './store/userContext';
import recommendStore from './store/recommend';
import songSheetStore from './store/songSheet';
import musicStore from './store/music';
import playStore from './store/play';
import mvStore from './store/mv';

class store {
    constructor() {
        this.ready();
    }
    // 窗口
    windowsStore = new windowsStore();
    // 歌曲播放
    playStore = new playStore();
    // mv
    mvStore = new mvStore();
    // 用户
    UserContextStore = new UserContextStore();
    // 个性推荐
    recommendStore = new recommendStore();
    // 歌单
    songSheetStore = new songSheetStore();
    // 音乐
    musicStore = new musicStore();
    ready() {
        let time = new Date().getTime();
        try {
            let cacheTime = + window.localStorage.getItem("cacheTime");
            if (time - cacheTime > 7200000) {
                window.localStorage.clear();
                window.sessionStorage.clear();
                window.localStorage.setItem("cacheTime", time.toString());
            }
        } catch (error) {
            window.localStorage.clear();
            window.sessionStorage.clear();
            window.localStorage.setItem("cacheTime", time.toString());
        }

        window["globalMusic"] = {
            defaultImg: "/assets/img/default_album.jpg"
        }
        console.log("-----------ready Store------------", this);
    }
};
export default new store();
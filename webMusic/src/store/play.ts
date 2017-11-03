import { observable, computed, autorun, useStrict } from "mobx"
// useStrict(true);
import Help from "../utils/help";
import musicStore from "./music";
class ObservableStore {
    // 音乐播放标签
    audio = document.createElement("audio");
    // 歌曲地址
    @observable url = "";
    // 播放状态
    @observable playState = false;
    // 当前播放位置
    @observable currentProportion = 0;
    @observable currentTime = "00:00";
    // 歌曲长度
    @observable duration = 0;
    @observable durationTime = "00:00";
    // 歌曲缓存长度
    @observable cacheTime = 0;
    // 播放模式  循环 loop 随机 random  单曲 single 
    @observable pattern = "loop";
    // 播放器样式 footer  screen
    @observable patternStyle = "footer";
    // 显示播放列表
    @observable showList = false;
    // 显示歌词
    @observable showLyric = false;
    constructor() {
        this.audio.autoplay = true;
        this.addEventListener();
    }

    /**
     * 设置播放地址
     * @param url 
     */
    setUrl(url) {
        this.url = url;
        if (this.url && this.audio.src != this.url) {
            this.audio.src = this.url;
        }
    }
    /**
     * 显示播放列表
     */
    updateShowList() {
        this.showList = !this.showList;
    }
    /**
   * 显示歌词
   */
    updateShowLyric() {
        this.showLyric = !this.showLyric;
    }
    /**
     * 设置播放状态
     * @param state 
     */
    updatePlayState(state = true) {
        if (!this.duration) {
            return
        }
        this.playState = state;
        if (this.playState) {
            if (this.audio.paused) {
                this.audio.play();
            }
        } else {
            if (!this.audio.paused) {
                this.audio.pause();
            }
        }
    }
    /**
     * 修改 播放位置
     * @param proportion 比例 
     */
    updateCurrentTime(proportion) {
        if (!this.duration) {
            return
        }
        this.audio.currentTime = this.duration * proportion;
    }
    /**
     * 修改播放模式
     * @param pattern 
     */
    updatePattern(pattern) {
        if (this.pattern == pattern) {
            return;
        }
        if (pattern == "loop" || pattern == "random" || pattern == "single") {
            this.pattern = pattern;
        } else {
            throw "pattern = loop || random || single";
        }
    }
    /**
     * 修改播放器样式
     * @param style 
     */
    updatePatternStyle(style) {
        if (this.patternStyle == style) {
            return;
        }
        if (style == "footer" || style == "screen") {
            this.showList = false;
            this.patternStyle = style;
        } else {
            throw "patternStyle = footer || screen";
        }
    }
    /**
     * 添加播放事件
     */
    addEventListener() {
        // 当浏览器开始查找音频/视频时
        this.audio.addEventListener("loadstart", e => {


        });
        // 当音频/视频的时长已更改时
        this.audio.addEventListener("durationchange", e => {


        });
        // 当浏览器已加载音频/视频的元数据时
        this.audio.addEventListener("loadedmetadata", e => {
            this.duration = this.audio.duration;
            this.durationTime = Help.DateFormat(this.duration * 1000, "mm:ss");
        });
        // 当浏览器已加载音频/视频的当前帧时
        this.audio.addEventListener("loadeddata", e => {


        });
        // 当浏览器正在下载音频/视频时
        this.audio.addEventListener("progress", e => {
            try {
                this.cacheTime = (this.audio.buffered.end(this.audio.buffered.length - 1) / this.duration) * 100;
            } catch (error) {
            }
        });
        // 当浏览器可以播放音频/视频时
        this.audio.addEventListener("canplay", e => {


        });
        // 当浏览器可在不因缓冲而停顿的情况下进行播放时
        this.audio.addEventListener("canplaythrough", e => {

        });
        // 当音频/视频在已因缓冲而暂停或停止后已就绪时
        this.audio.addEventListener("playing", e => {


        });
        // 当音频/视频的播放速度已更改时
        this.audio.addEventListener("ratechange", e => {


        });
        // 当目前的播放位置已更改时
        this.audio.addEventListener("timeupdate", e => {
            if (!this.duration) {
                return
            }
            let currentProportion = (this.audio.currentTime / this.duration) * 100;
            if (currentProportion > 99.4) {
                currentProportion = 99.4;
            }
            this.currentTime = Help.DateFormat(new Date(this.audio.currentTime * 1000), "mm:ss");
            this.currentProportion = currentProportion;
        });
        // 当目前的播放列表已结束时
        this.audio.addEventListener("ended", e => {
            musicStore.next();
        });
        //当浏览器尝试获取媒体数据，但数据不可用时
        this.audio.addEventListener("stalled", e => {

        });
        // 当在音频/视频加载期间发生错误时
        this.audio.addEventListener("error", e => {

        });
        // 开始播放
        this.audio.addEventListener("play", e => {
            this.updatePlayState(true);
        });
        //暂停
        this.audio.addEventListener("pause", e => {
            this.updatePlayState(false);
        });

    }
}

const Store = new ObservableStore();
console.log("Play", Store);
export default Store;




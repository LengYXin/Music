import { observable, computed, autorun, useStrict } from "mobx"
// useStrict(true);
import { Http, Help, Cache } from "../../utils"
import Store from "../index";
import notification from "antd/lib/notification";
notification.config({
    duration: 3,
    top: 65
});
// import { notification } from "antd";
export default class ObservableStore {
    // 音乐播放标签
    audio = document.createElement("audio");
    // 音量
    volume = Cache.localGet("__audio_volume", 100);
    //歌曲参数
    // @observable musicParam = {
    //     index: 0,//播放的当前索引
    //     url: "",//播放的当前url
    // };
    //播放参数
    @observable playParam = {
        playState: false,//播放状态
        pattern: "loop",//播放模式  循环 loop 随机 random  单曲 single 
        patternStyle: "footer",//播放器样式 footer  screen
        patternSimpleStyle: "normal",//简易界面 normal screen 
        showList: false,// 显示播放列表
        showLyric: false,// 显示歌词
        showSimple: false,//显示迷你版播放信息
    };
    //时间
    @observable timeParam = {
        //当前播放
        currentPlay: {
            proportion: 0,//比例
            timeStr: "00:00", //时间长度
            time: 0//时间 毫秒
        },
        //歌曲长度
        duration: {
            time: 0,
            timeStr: "00:00"
        },
        // 歌曲缓存长度
        cacheTime: 0
    };
    // @observable Store = {};
    // 播放列表 没有播放地址
    @observable playList = [];
    // 随机播放索引
    randomIndex = [];
    // 当前播放歌曲索引
    @computed get playIndex() {
        return this.currentIndex;
    }
    // 当前播放的音乐索引
    @observable currentIndex = 0;
    // 当前播放的音乐 源数据  地址  歌词 详情
    @observable current: any = {
        //歌词
        lyric: {},
        // 音乐地址信息
        music: {},
        // 歌曲信息
        play: {},
    };
    // 歌曲地址
    url = "";
    /**
     * 
     * @param controller 中控
     */
    constructor(public controller) {
        // 就绪自动播放
        this.audio.autoplay = true;
        //注册事件
        this.addEventListener();
        // 设置音量
        this.setVolume(this.volume);
    }
    /**
     * 设置音量
     */
    setVolume(volume) {
        this.audio.volume = volume / 100;
        Cache.localSet("__audio_volume", volume);
    }
    /**
     * 设置播放地址
     * @param url 
     */
    setUrl(url) {
        this.url = url;
        if (this.url && this.audio.src != this.url) {
            this.audio.src = this.url;
            // 显示简易窗口
            this.playParam.showSimple = true;
        }
    }
    /**
     * 显示播放列表
     */
    updateShowList() {
        this.playParam.showList = !this.playParam.showList;
    }
    /**
   * 显示歌词
   */
    updateShowLyric() {
        this.playParam.showLyric = !this.playParam.showLyric;
    }
    /**
     * 设置播放状态
     * @param state 
     */
    updatePlayState(state = true) {
        if (!this.timeParam.duration.time) {
            return
        }
        this.playParam.playState = state;
        if (this.playParam.playState) {
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
        if (!this.timeParam.duration.time) {
            return
        }
        this.audio.currentTime = this.timeParam.duration.time * proportion;
    }
    /**
     * 修改播放模式
     * @param pattern 
     */
    updatePattern(pattern) {
        if (this.playParam.pattern == pattern) {
            return;
        }
        if (pattern == "loop" || pattern == "random" || pattern == "single") {
            this.playParam.pattern = pattern;
        } else {
            throw "pattern = loop || random || single";
        }
    }
    /**
     * 修改Mini播放器样式
     * @param style
     *  patternMiniStyle: "normal",//迷你播放器样式 normal screen  mini 
     */
    updatePatternSimpleStyle(style?) {
        if ("undefined" === typeof style) {
            if (this.playParam.patternSimpleStyle == "normal") {
                this.playParam.patternSimpleStyle = "screen";
            } else {
                this.playParam.patternSimpleStyle = "normal"
            }
            return
        }
        if (this.playParam.patternSimpleStyle == style) {
            return;
        }
        if (style == "normal" || style == "screen") {
            this.playParam.patternSimpleStyle = style;
        } else {
            throw "patternSimpleStyle = normal || screen";
        }
    }
    /**
     * 修改播放器样式
     * @param style 
     */
    updatePatternStyle(style?) {
        if ("undefined" === typeof style) {
            if (this.playParam.patternStyle == "footer") {
                this.playParam.patternStyle = "screen";
            } else {
                this.playParam.patternStyle = "footer"
            }
            return
        }
        if (this.playParam.patternStyle == style) {
            return;
        }
        if (style == "footer" || style == "screen") {
            this.playParam.showList = false;
            this.playParam.patternStyle = style;
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
            this.timeParam.duration.time = this.audio.duration;
            this.timeParam.duration.timeStr = Help.DateFormat(this.timeParam.duration.time * 1000, "mm:ss");
        });
        // 当浏览器已加载音频/视频的当前帧时
        this.audio.addEventListener("loadeddata", e => {


        });
        // 当浏览器正在下载音频/视频时
        this.audio.addEventListener("progress", e => {
            try {
                this.timeParam.cacheTime = (this.audio.buffered.end(this.audio.buffered.length - 1) / this.timeParam.duration.time) * 100;
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
            if (!this.timeParam.duration.time) {
                return
            }
            let currentProportion = (this.audio.currentTime / this.timeParam.duration.time) * 100;
            if (currentProportion > 99.4) {
                currentProportion = 99.4;
            }
            let time = this.audio.currentTime * 1000;
            let timeStr = Help.DateFormat(new Date(time), "mm:ss");
            // this.currentProportion = currentProportion;
            this.timeParam.currentPlay = {
                proportion: currentProportion,
                time: time,
                timeStr: timeStr
            };
        });
        // 当目前的播放列表已结束时
        this.audio.addEventListener("ended", e => {
            this.next(this.playParam.pattern);
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
            // console.log("pause", this.audio.src, this.url);
            this.updatePlayState(false);
        });

    }


    /**
     * 加入播放列表
     * 如果播放列表已存在该歌曲跳过添加 直接播放 该歌曲。
     * @param playList 列表 
     * @param replace  替换整个播放列表   true 替换  默认false 累加
     */
    addPlayList(playList = [], replace = false) {
        // console.log(...playList);
        if (playList.length) {
            // 播放全部操作，替换整个播放列表。
            if (replace) {
                this.currentIndex = 0;
                this.playList = [...playList];
                this.play();
            } else {
                // 处理单曲
                if (playList.length == 1) {
                    const music = playList[0];
                    // 需要播放的索引
                    let index = 0;
                    // 歌曲已经存在列表中 拿到这条数据索引 执行播放操作。 
                    const existence = this.playList.some((element, i) => {
                        const exis = element.id == music.id;
                        if (exis) {
                            index = i;
                        }
                        return exis;
                    });
                    if (existence) {
                        //歌曲存在列表中 不进行添加操作
                    } else {
                        // 歌曲不在播放列表中，加入并且拿到歌曲索引
                        this.playList.push(music);
                        index = this.playList.length - 1;
                    }
                    //播放歌曲
                    this.currentIndex = index;
                    this.play();
                } else {
                    // 追加多歌曲进入列表 去重复
                    const newList = playList.filter(x => {
                        return !this.playList.some(xx => xx.id == x.id);
                    });
                    if (newList.length) {
                        this.playList = [...this.playList, ...newList];
                    }
                }
            }
            // console.log("addPlayList", this.playList);
            return this.playList;
        }
    }

    /**
     * 计算索引
     * @param index 
     */
    computationalIndex(index = 0) {

    }
    /**
     * 上
     */
    last(pattern?) {
        this.currentIndex > 0 ? this.currentIndex-- : undefined;
        this.play();
    }
    /**
     * 下
     */
    next(pattern?) {
        this.currentIndex < this.playList.length ? this.currentIndex++ : this.currentIndex = 0;
        this.play();
    }
    /**
     * 播放歌曲
     * getMusic 获取歌曲地址
     * getLyric 获取歌词信息
     * 默认缓存下一首歌曲地址。
     */
    async play(currentIndex?) {
        if (currentIndex) {
            this.currentIndex = currentIndex;
        }
        let ids = [];
        // 当前歌曲
        const play = this.playList[this.currentIndex];
        // 缓存下一首
        // const cachePlay = this.playList[this.currentIndex + 1];
        if (play && play.id) {
            // 设置当前播放歌曲
            this.current.play = play;
            // 还没有获取到歌曲地址暂停播放
            this.updatePlayState(false);
            this.updateCurrentTime(0);
            ids.push(play.id);
            // if (cachePlay && cachePlay.id) {
            //     ids.push(cachePlay.id);
            // }
            // 获取歌曲播放地址信息
            const music = await Store.musicStore.getMusic(ids.join(","));
            if (music.code == -110) {
                notification["error"]({
                    message: '购买专辑',
                    description: '版权方要求，当前专辑需单独付费，购买数字专辑即可无限畅享',
                });
                // 下一首
                return this.next();
            }
            this.current.music = music;
            this.setUrl(this.current.music.url);
            // 获取歌词信息
            const lyric = await Store.musicStore.getLyric(play.id);
            this.current.lyric = lyric;
            // console.log(music, lyric);
            // 存储当前播放歌曲信息
            // this.current = {
            //     //歌词
            //     lyric: lyric,
            //     // 音乐地址信息
            //     music: music,
            //     // 歌曲信息
            //     play: this.playList[this.currentIndex],
            // }
        }

    }
}




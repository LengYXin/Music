/**
 * Music
 */
import { observable, computed, autorun } from "mobx"
import Http from "../utils/http"
import Cache from "../utils/cache"
import playStore from "./play";
class ObservableStore {
    // @observable Store = {};
    // 播放列表 没有播放地址
    @observable playList = [];
    // 歌曲列表 有播放地址
    @observable musicList = {};
    // 歌词列表 
    @observable lyricList = {};
    // 当前播放的音乐索引
    @observable currentIndex = 0;
    // 当前播放的音乐 源数据  地址  歌词 详情
    @observable current: any = {};

    constructor() { }

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
                        this.playList.push(music);
                        index = this.playList.length - 1;
                    }
                    this.currentIndex = index;
                    this.play();
                } else {
                    this.playList = [...this.playList, ...playList];
                }
            }
            // console.log("addPlayList", this);
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
        const cachePlay = this.playList[this.currentIndex + 1];
        if (play && play.id) {
            ids.push(play.id);
            if (cachePlay && cachePlay.id) {
                ids.push(cachePlay.id);
            }
            await this.getMusic(ids.join(","));
            await this.getLyric(play.id);
            // 存储当前播放歌曲信息
            this.current = {
                //歌词
                lyric: this.formatLyric(this.lyricList[play.id]),
                // 音乐地址信息
                music: this.musicList[play.id],
                // 歌曲信息
                play: this.playList[this.currentIndex],
            }
            playStore.setUrl(this.current.music.url);
        }

    }
    /**
     * 格式化 歌词
     * 将服务器返回字符串格式化成 [{time:时间段毫秒,lyric:歌词}] 数组形式
     * [01:41.51][00:15.52]一开始 我以为 爱本来会很容易↵[01:50.24][00:24.19]所以没有 经过允许 就把你放心底↵[01:58.24][00:32.29]直到后来有一天 你和他走在一起↵[02:06.11][00:40.30]我才发现 原来爱情 不是真心就可以↵[03:27.02][03:11.50][02:33.15][02:16.63][01:07.23][00:50.82]我感动天 感动地 怎么感动不了你↵[03:20.26][02:26.06][01:00.16]明明知道 没有结局 却还死心塌地↵[03:36.07][02:42.13][01:16.28]总相信爱情会有奇迹 都是我骗自己↵[02:52.81]以为自己不再去想你↵[02:57.10]保持不被刺痛的距离↵[03:01.19]就算早已忘了我自己↵[03:04.33]却还想要知道你的消息↵
     * @param param 服务器返回的歌词数据
     */
    formatLyric(param) {
        let regTime = /(\[\d{2}:\d{2}.\d*\])/g;       //匹配 单个[01:50.24]
        let regStr = /(\[.*])/g;                      //匹配 整个[01:50.24]...替换使用
        let regD = /\d{2}/g;                          //匹配 [01:50.24] 中的 数字转换成功毫秒时间点
        let lyrics = [];
        if (param && param.lrc && param.lrc.lyric) {
            //根据换行符 分解歌词
            param.lrc.lyric.split('\n').map((x: string) => {
                let times = x.match(regTime);//时间段
                let lyr = x.replace(regStr, "");//歌词
                if (times) {
                    //同一条歌词存在 多个时间点   :[03:27.02][03:11.50][02:33.15][02:16.63][01:07.23][00:50.82]我感动天 感动地 怎么感动不了你
                    times.map(t => {
                        let time: any[] = t.match(regD).map(tt => parseInt(tt));
                        lyrics.push({
                            time: time[0] * 60000 + time[1] * 1000 + time[2],
                            lyric: lyr
                        });
                    });
                }
            });
        }
        // 返回  根据 时间点 排序 后的数组
        lyrics = lyrics.sort((a, b) => a.time - b.time);
        // .map((x, i, arr) => {
        //     let length = 0;
        //     try {
        //         let next = arr[i + 1];
        //         length = next.time - x.time;
        //     } catch (error) {

        //     }
        //     return { ...x, length: length };
        // })
        // console.log(lyrics);
        return lyrics;
    }
    // 缓存
    // async cachePlay() {
    //     let ids = [];
    //     for (let i = 1, len = this.playList.length; i < len; i++) {
    //         const cachePlay = this.playList[i];
    //         if (cachePlay && cachePlay.id) {
    //             ids.push(cachePlay.id);
    //         }
    //     }
    //     const music = await this.getMusic(ids.join(","));
    // }
    /**
     * 获取 歌曲地址
     * 先从内存数据中读取，如果内存存在这条数据跳过http请求。
     * @param ids /music/url?id=347230,347231
     */
    async getMusic(ids: string) {
        const keys: string[] = ids.toString().split(",");
        // 已经获取过的歌曲略过
        const id = keys.filter(key => !this.musicList.hasOwnProperty(key));
        let res = { data: [] };
        if (id.length) {
            res = await Http.get(`music/url?id=` + id.join(","));
        }
        let musicList = {};
        res.data.map(x => {
            musicList[x.id] = x;
        });
        this.musicList = { ...this.musicList, ...musicList };
        return res.data;
    }
    /**
     * 获取 歌曲地址
     * 先从内存数据中读取，如果内存存在这条数据跳过http请求。
     * @param id /lyric?id=347230
     */
    async getLyric(id: string) {
        // 已经获取过的歌曲略过
        let res = {};
        let lyric = {};
        if (!this.lyricList.hasOwnProperty(id)) {
            res = await Http.get(`lyric?id=` + id);
            lyric[id] = res;
        }
        this.lyricList = { ...this.lyricList, ...lyric };
        return res;
    }
}
const Store = new ObservableStore();
console.log("Store----Music", Store);
export default Store;



/**
 * Music
 */
import { observable, computed, autorun } from "mobx"
import { Http, Cache } from "../../utils";
import Store from "../index";
import formatTool from './formatTool';
import { notification } from "antd";
export default class ObservableStore {
    // @observable Store = {};
    // 播放列表 没有播放地址
    @observable playList = [];
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
            const music = await Store.model.Music.getMusic(ids.join(","));
            const lyric = await Store.model.Music.getLyric(play.id);
            console.log(music, lyric);
            if (music.code == -110) {
                notification["error"]({
                    message: '购买专辑',
                    description: '版权方要求，当前专辑需单独付费，购买数字专辑即可无限畅享',
                });
                return;
            }
            // await this.getMusic(ids.join(","));
            // await this.getLyric(play.id);
            // 存储当前播放歌曲信息
            this.current = {
                //歌词
                lyric: lyric,
                // 音乐地址信息
                music: music,
                // 歌曲信息
                play: this.playList[this.currentIndex],
            }
            Store.playStore.setUrl(this.current.music.url);
        }

    }
}



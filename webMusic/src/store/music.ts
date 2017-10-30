/**
 * Music
 */
import { observable, computed, autorun } from "mobx"
import Http from "../utils/http"
class ObservableStore {
    @observable Store = {};
    // 播放列表 没有播放地址
    @observable playList = [];
    // 歌曲列表 有播放地址
    @observable musicList = {};
    // 当前播放的音乐索引
    @observable currentIndex = 0;
    // 当前播放的音乐
    @observable current: any = {};
    // 模式  
    @observable pattern = "footer";
    constructor() { }

    /**
     * 加入播放列表
     * @param playList 列表 
     * @param replace true 替换当前 false 累加
     */
    addPlayList(playList = [], replace = false) {
        // console.log(...playList);
        if (playList.length) {
            if (replace) {
                this.currentIndex = 0;
                this.playList = [...playList];
                this.play();
            } else {
                if (playList.length == 1) {
                    const music = playList[0];
                    // 需要播放的索引
                    let index = 0;
                    // 歌曲已经存在列表中
                    const existence = this.playList.some((element, i) => {
                        const exis = element.id == music.id;
                        if (exis) {
                            index = i;
                        }
                        return exis;
                    });
                    if (existence) {

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
            console.log("addPlayList", this);
            return this.playList;
        }
    }
    /**
     * 上
     */
    last() {
        this.currentIndex > 0 ? this.currentIndex-- : undefined;
        this.play();
    }
    /**
     * 下
     */
    next() {
        this.currentIndex < this.playList.length ? this.currentIndex++ : this.currentIndex = 0;
        this.play();
    }
    /**
     * 播放
     */
    async play() {
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
            this.current = {
                music: this.musicList[play.id],
                
            }
        }

    }
    // 缓存
    async cachePlay() {
        let ids = [];
        for (let i = 1, len = this.playList.length; i < len; i++) {
            const cachePlay = this.playList[i];
            if (cachePlay && cachePlay.id) {
                ids.push(cachePlay.id);
            }
        }
        const music = await this.getMusic(ids.join(","));
    }
    /**
     * 获取 歌曲地址
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
        this.musicList = { ...musicList, ...this.musicList };
        return res.data;
    }
}
const Store = new ObservableStore();
console.log("Store----Music", Store);
export default Store;



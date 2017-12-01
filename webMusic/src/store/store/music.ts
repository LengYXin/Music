/**
 * Music
 */
import { observable, computed, autorun } from "mobx"
import { Http, Cache } from "../../utils";
import Store from "../index";
import formatTool from './formatTool';
// import { notification } from "antd";
class cacheData {
    constructor() {
    }
    //歌曲
    private _Music = null;
    get Music(): Object {
        // 首次获取数据从 缓存中取
        if (!this._Music) {
            this._Music = Cache.localGet("_Music", {});
        }
        return this._Music;
    }

    set Music(v: Object) {
        this._Music = { ...this._Music, ...v };
        // Cache.localSet("_Music", this._Music);
    }

    //歌词
    private _Lyric = null;
    get Lyric(): Object {
        // 首次获取数据从 缓存中取
        if (!this._Lyric) {
            this._Lyric = Cache.localGet("_Lyric", {});
        }
        return this._Lyric;
    }
    set Lyric(v: Object) {
        this._Lyric = { ...this._Lyric, ...v };
        // Cache.localSet("_Lyric", this._Lyric);
    }


    // 缓存
    cache(name: string) {
        Cache.localSet(name, this["_" + name]);
    }
}
export default class ObservableStore extends cacheData{
    constructor() { super(); }
    /**
     * 获取 歌曲地址
     * 先从内存数据中读取，如果内存存在这条数据跳过http请求。
     * @param ids /music/url?id=347230,347231
     */
    async getMusic(ids: string) {
        const keys: string[] = ids.toString().split(",");
        // 已经获取过的歌曲略过
        const id = keys.filter(key => !this.Music.hasOwnProperty(key));
        let res = { data: [] };
        if (id.length) {
            res = await Http.get(`music/url?id=` + id.join(",")).toPromise();
        }
        let Music = {};
        res.data.map(x => {
            Music[x.id] = x;
        });
        this.Music = Music;
        return this.Music[keys[0]];
    }
    /**
     * 获取 歌词
     * 先从内存数据中读取，如果内存存在这条数据跳过http请求。
     * @param id /lyric?id=347230
     */
    async getLyric(id: string) {
        // 已经获取过的歌曲略过
        let res = {};
        let lyric = {};
        if (!this.Lyric.hasOwnProperty(id)) {
            res = await Http.get(`lyric?id=` + id).toPromise();
            lyric[id] = res;
            this.Lyric = lyric;
        }
        return formatTool.formatLyric(this.Lyric[id]);
    }
}



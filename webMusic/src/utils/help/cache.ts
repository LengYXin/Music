export default class Cache {
    constructor() {
        this.testing();
    }
    // 定义私有 缓存属性，复杂对象自行设计
    // private __dataCache = null;
    // // get set 不解释了。
    // get dataCache(): Object {
    //     // 首次获取数据从 缓存中取
    //     if (!this.__dataCache) {
    //         this.__dataCache = this.locaGet("dataCache", {});
    //     }
    //     return this.__dataCache;
    // }
    private localStorage = window.localStorage;
    private sessionStorage = window.sessionStorage;
    private cacheTime = JSON.parse(this.localStorage.getItem("cacheTime") || "0");
    testing() {
        //清理缓存 10分钟一次
        let time = new Date().getTime();
        try {
            // debugger
            if (time - this.cacheTime < 600000) {
                return //console.log("----no cacheTime");;
            }
            let cacheTime = JSON.parse(this.localStorage.getItem("cacheTime") || "0");
            if (time - cacheTime > 600000) {
                this.localRemove(null, true);
                this.sessionRemove(null, true);
                console.log("cacheTime");
                this.cacheTime = time;
                this.localSet("cacheTime", time);
            }
        } catch (error) {
            this.localRemove(null, true);
            this.sessionRemove(null, true);
            console.log("cacheTime", error);
            this.cacheTime = time;
            this.localSet("cacheTime", time);
        }
    }
    /**
     * 获取
     * @param key 缓存对应的key
     * @param value 没有值的情况下返回的默认值
     */
    localGet(key, value = null) {
        // console.log("localGet");
        this.testing();
        try {
            const v = this.localStorage.getItem(key);
            // 存在值返回  不存在 返回默认
            return v && JSON.parse(v) || value;
        } catch (error) {
            return value;
        }
    }
    /**
     * 设置
     * @param key 缓存的唯一key 
     * @param value 
     */
    localSet(key, value) {
        // 这里怎么处理，用什么处理 外界不用担心
        try {
            // 数组为空跳过 
            if (Array.isArray(value) && value.length < 1) {
                return;
            }
            // ObservableArray Array.isArray 没用所以。。。
            if (value.length == 0) {
                return;
            }
            this.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    }
    // 删除对应的 信息 删除全部的时候 保留用户登录id
    localRemove(key = null, clear = false) {
        if (key) {
            this.localStorage.removeItem(key);
        } else {
            if (clear) {
                // 循环调用。。。跟个zz一样。哈哈。
                // let __UserID = this.localGet("__UserID");
                let __UserID = JSON.parse(this.localStorage.getItem("__UserID"));
                let __audio_volume = JSON.parse(this.localStorage.getItem("__audio_volume"));
                this.localStorage.clear();
                // this.localSet("__UserID", __UserID);
                __UserID && this.localStorage.setItem("__UserID", JSON.stringify(__UserID));
                __audio_volume && this.localStorage.setItem("__audio_volume", JSON.stringify(__audio_volume));
            }
        }
    }
    /**
     * 获取
     * @param key 缓存对应的key
     * @param value 没有值的情况下返回的默认值
     */
    sessionGet(key, value = null) {
        try {
            const v = this.sessionStorage.getItem(key);
            // 存在值返回  不存在 返回默认
            return v && JSON.parse(v) || value;
        } catch (error) {
            return value;
        }
    }
    /**
     * 设置
     * @param key 缓存的唯一key 
     * @param value 
     */
    sessionSet(key, value) {
        // 这里怎么处理，用什么处理 外界不用担心
        try {
            this.sessionStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    }
    sessionRemove(key = null, clear = false) {
        if (key) {
            this.sessionStorage.removeItem(key);
        } else {
            if (clear) {
                this.sessionStorage.clear();
            }
        }
    }
}

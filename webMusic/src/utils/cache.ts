class Cache {
    constructor() {
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
    /**
     * 获取
     * @param key 缓存对应的key
     * @param value 没有值的情况下返回的默认值
     */
    storageGet(key, value = null) {
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
    storageSet(key, value) {
        // 这里怎么处理，用什么处理 外界不用担心
        try {
            this.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    }
}
export default new Cache();
declare interface formatSongSheet {
    id?: string
    img?: string
    name?: string
    userId?: string
    [key: string]: string
}
const formatSongSheet = {
    id: "id", img: "img", name: "name", userId: "userId"
}
// 数据格式化
class formatTool {
    constructor() {

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
        let lyrics = [];                              //歌词
        let tlyric = [];                              //翻译
        //计算 函数   保存数组   歌词||翻译
        let format = (list, isLyric = false) => {
            return (x) => {
                let times = x.match(regTime);//时间段
                let lyr = x.replace(regStr, "");//歌词

                if (times) {
                    //同一条歌词存在 多个时间点   :[03:27.02][03:11.50][02:33.15][02:16.63][01:07.23][00:50.82]我感动天 感动地 怎么感动不了你
                    times.map(t => {
                        // 计算时间点
                        let times: any[] = t.match(regD).map(tt => parseInt(tt));
                        let time = times[0] * 60000 + times[1] * 1000 + times[2];
                        // 歌词数据
                        let data = {
                            time: time,
                            lyric: lyr
                        };
                        // 获取翻译
                        if (isLyric) {
                            let tlyrs = tlyric.filter(tly => tly.time == time);
                            if (tlyrs.length) {
                                data["tlyric"]=tlyrs[0].lyric;
                            }
                        }
                        list.push(data);
                    });
                }
            }
        }
        // 歌词 跟 翻译 个数不一致，歌词中带有空行 站位 所以分别计算出歌词跟翻译在进行组合
        // 先计算翻译 少一次 循环。
        // 翻译
        if (param && param.tlyric && param.tlyric.lyric) {
            param.tlyric.lyric.split('\n').map(format(tlyric));
        }
        // 歌词
        if (param && param.lrc && param.lrc.lyric) {
            //根据换行符 分解歌词
            param.lrc.lyric.split('\n').map(format(lyrics, true));
        }
        // 返回  根据 时间点 排序 后的数组
        lyrics = lyrics.sort((a, b) => a.time - b.time);
        // tlyric = tlyric.sort((a, b) => a.time - b.time);
        // .map((x, i, arr) => {
        //     let length = 0;
        //     try {
        //         let next = arr[i + 1];
        //         length = next.time - x.time;
        //     } catch (error) {

        //     }
        //     return { ...x, length: length };
        // })
        // console.log(lyrics, tlyric);
        return lyrics;
    }
    /**
     *  格式化 歌单
     * @param list 数据 数组 或者对象
     * @param param 需要字段所对应的 数据中的字段
     */
    formatSongSheet(list: any[], param: formatSongSheet = formatSongSheet): any {
        try {
            if (Array.isArray(list)) {
                let data = list.map(x => toSS(x));
                return data;
            }
            if (typeof list === "object") {
                return toSS(list);
            }
        } catch (error) {
            return [];
        }
        function toSS(x) {
            let d = {
                to: `/ssd/${x.id}`,
                id: x[param.id || formatSongSheet.id],
                img: x[param.img || formatSongSheet.img] + "?param=250y250",
                name: x[param.name || formatSongSheet.name],
                userId: x[param.userId || formatSongSheet.userId]
            }
            for (const key in param) {
                if (param.hasOwnProperty(key)) {
                    d[key] = x[param[key]];
                }
            }
            return d;
        }
    }
}
export default new formatTool();
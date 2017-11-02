import * as React from 'react'
import './style.css'
interface Props {
    autoPlay?: boolean;
    controls?: boolean;
    crossOrigin?: string;
    loop?: boolean;
    mediaGroup?: string;
    muted?: boolean;
    playsinline?: boolean;
    preload?: string;
    src?: string;
    on?: {
        loadstart?: Function,
        durationchange?: Function,
        loadedmetadata?: Function,
        loadeddata?: Function,
        progress?: Function,
        canplay?: Function,
        canplaythrough?: Function,
        playing?: Function,
        ratechange?: Function,
        timeupdate?: Function,
        ended?: Function,
        error?: Function,
    };
}
export class AudioPlay extends React.Component<Props, any> {
    constructor(props) {
        super(props);
        this.audio = document.createElement("audio");
        // 设置自动播放
        this.audio.autoplay = true;
        this.addEventListener();
    }
    state = {
        currentTime: "00:00",
        currentTimeProportion: 0,
        cacheTime: 0
    }
    playState = true;//当前播放状态
    /**
     *  http://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp
     *  0 = HAVE_NOTHING - 没有关于音频/视频是否就绪的信息
     *  1 = HAVE_METADATA - 关于音频/视频就绪的元数据
     *  2 = HAVE_CURRENT_DATA - 关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒
     *  3 = HAVE_FUTURE_DATA - 当前及至少下一帧的数据是可用的
     *  4 = HAVE_ENOUGH_DATA - 可用数据足以开始播放
     */
    audio: HTMLAudioElement;
    duration: number = 0;//音频时长
    durationTime: string = "00:00";
    addEventListener() {
        const on = this.props.on || {};
        // 当浏览器开始查找音频/视频时
        this.audio.addEventListener("loadstart", e => {
            // console.log("loadstart", e);
            on.loadstart && on.loadstart(e, this.audio);

        });
        // 当音频/视频的时长已更改时
        this.audio.addEventListener("durationchange", e => {
            // console.log("durationchange", e);
            on.durationchange && on.durationchange(e, this.audio);

        });
        // 当浏览器已加载音频/视频的元数据时
        this.audio.addEventListener("loadedmetadata", e => {
            this.duration = this.audio.duration;
            this.durationTime = this.DateFormat(this.duration * 1000, "mm:ss");
            on.loadedmetadata && on.loadedmetadata(e, this.audio);
        });
        // 当浏览器已加载音频/视频的当前帧时
        this.audio.addEventListener("loadeddata", e => {
            // console.log("loadeddata", e);
            on.loadeddata && on.loadeddata(e, this.audio);

        });
        // 当浏览器正在下载音频/视频时
        this.audio.addEventListener("progress", e => {
            on.progress && on.progress(e, this.audio);
            this.progress(e);
        });
        // 当浏览器可以播放音频/视频时
        this.audio.addEventListener("canplay", e => {
            // console.log("canplay", e);
            on.canplay && on.canplay(e, this.audio);

        });
        // 当浏览器可在不因缓冲而停顿的情况下进行播放时
        this.audio.addEventListener("canplaythrough", e => {
            // console.log("canplaythrough", e);
            on.canplaythrough && on.canplaythrough(e, this.audio);

        });
        // 当音频/视频在已因缓冲而暂停或停止后已就绪时
        this.audio.addEventListener("playing", e => {
            // console.log("playing", e);
            on.playing && on.playing(e, this.audio);

        });
        // 当音频/视频的播放速度已更改时
        this.audio.addEventListener("ratechange", e => {
            // console.log("ratechange", e);
            on.ratechange && on.ratechange(e, this.audio);

        });
        // 当目前的播放位置已更改时
        this.audio.addEventListener("timeupdate", e => {
            on.timeupdate && on.timeupdate(e, this.audio);
            this.timeupdate(e);
        });
        // 当目前的播放列表已结束时
        this.audio.addEventListener("ended", e => {
            // console.log("ended", e);
            on.ended && on.ended(e, this.audio);
        });
        //当浏览器尝试获取媒体数据，但数据不可用时
        this.audio.addEventListener("stalled", e => {
            // console.log("stalled");
            on.ended && on.ended(e, this.audio);
        });
        // 当在音频/视频加载期间发生错误时
        this.audio.addEventListener("error", e => {
            // console.log("error", e);
            on.error && on.error(e, this.audio);
            on.ended && on.ended(e, this.audio);
        });



    }
    // 当浏览器正在下载音频/视频时
    progress(e) {
        // console.log("progress", e, this);
        try {
            let cacheTime = (this.audio.buffered.end(this.audio.buffered.length - 1) / this.duration) * 100;
            this.setState({ cacheTime: cacheTime });
        } catch (error) {
        }
    }
    // 当目前的播放位置已更改时
    timeupdate(e) {
        // console.log("timeupdate", this.audio.duration, e.timeStamp, this.audio.currentTime);
        if (!this.duration) {
            return
        }
        let currentTimeProportion = (this.audio.currentTime / this.duration) * 100;
        if (currentTimeProportion > 99.4) {
            currentTimeProportion = 99.4;
        }
        let currentTime = this.DateFormat(new Date(this.audio.currentTime * 1000), "mm:ss");
        this.setState({ currentTimeProportion: currentTimeProportion, currentTime: currentTime });
    }

    DateFormat(date, fmt) {
        try {
            if (!date) {
                return date;
            }
            if (typeof date == "number") {
                date = new Date(date);
            }
            // console.log(date);
            var o = {
                "M+": date.getMonth() + 1, //月份
                "d+": date.getDate(), //日
                "h+": date.getHours(), //小时
                "m+": date.getMinutes(), //分
                "s+": date.getSeconds(), //秒
                "q+": Math.floor((date.getMonth() + 3) / 3), //季度
                "S": date.getMilliseconds() //毫秒
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        } catch (error) {
            return date;
        }
    }
    play(Callback?) {
        if (this.playState) {
            this.audio.pause();
        } else {
            this.audio.play();
        }
        this.playState = !this.playState;
        Callback && Callback(this.playState);
    };
    onClick(e) {
        console.log("哈哈", e, e.clientX, e.screenX, e.pageX);
    }

    progressInner(pro: HTMLDivElement) {
        // console.log(pro);
        pro.addEventListener("click", e => {
            if (!this.duration) {
                return
            }
            // console.log(this.audio.readyState);
            this.audio.currentTime = this.duration * (e.offsetX / pro.offsetWidth);
            let currentTimeProportion = (this.audio.currentTime / this.duration) * 100;
            if (currentTimeProportion > 99.4) {
                currentTimeProportion = 99.4;
            }
            console.log(currentTimeProportion, this.audio.currentTime, this.duration);
            // this.setState({ currentTimeProportion: currentTimeProportion });
            // console.log(e.offsetX / pro.offsetWidth * 100);
        });
    };

    componentDidMount() {
        this.progressInner(this.refs["progressInner"] as any);
    }
    render() {
        // this.props
        // console.log("AudioPlay", this);
        if (this.props.src && this.audio.src != this.props.src) {
            this.audio.src = this.props.src;
            // this.audio.autoplay = this.props.autoPlay;
            this.playState = true;
        }
        // console.log(this.state.currentTime);
        return (
            // <div className="AudioPlay-body">
            //     <div className="AudioPlay-btns">
            //         <a onClick={this.last.bind(this)}>上一首</a>
            //         <a onClick={this.play.bind(this)}>播放/暂停</a>
            //         <a onClick={this.next.bind(this)}>下一首</a>
            //     </div>
            //     <div className="AudioPlay-img">
            //         <img src="http://p1.music.126.net/Wty6mk2k3TS4IqwJy1qmFw==/18189220858862905.jpg?param=34y34" />
            //         {/* <a href="/song?id=28923460" hidefocus="true" class="mask"></a> */}
            //     </div>
            //     <div className="AudioPlay-play">
            <div className="play-progress">
                <span className="play-progress-time current">{this.state.currentTime}</span>
                <div className="play-progress-inner" ref="progressInner">
                    <div className="play-progress-bg cache" style={{ width: this.state.cacheTime + "%" }} ></div>
                    <div className="play-progress-bg" style={{ width: this.state.currentTimeProportion + "%" }} ></div>
                    <span className="play-btn" style={{ left: this.state.currentTimeProportion + "%" }} >
                        <i></i>
                    </span>
                </div>
                <span className="play-progress-time duration">{this.durationTime}</span>
            </div >
            //     </div>
            //     <div className="AudioPlay-menu">

            //     </div>
            // </div>
        );
    }
}

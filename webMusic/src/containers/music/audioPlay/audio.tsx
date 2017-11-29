import * as React from 'react'
// import Help from "../../../utils/help"
import { observer, inject } from 'mobx-react';
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
@inject('playStore')
@observer
export default class extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.audio = document.createElement("audio");
        // 设置自动播放
        this.audio.autoplay = true;
        this.addEventListener();
    }

    /**
     *  http://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp
     *  0 = HAVE_NOTHING - 没有关于音频/视频是否就绪的信息
     *  1 = HAVE_METADATA - 关于音频/视频就绪的元数据
     *  2 = HAVE_CURRENT_DATA - 关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒
     *  3 = HAVE_FUTURE_DATA - 当前及至少下一帧的数据是可用的
     *  4 = HAVE_ENOUGH_DATA - 可用数据足以开始播放
     */
    audio: HTMLAudioElement;
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
            // this.duration = this.audio.duration;
            // this.durationTime = Help.DateFormat(this.duration * 1000, "mm:ss");
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
        this.audio.addEventListener("play", e => {
            this.props.playStore.updatePlayState(true);
        });
        this.audio.addEventListener("pause", e => {
            this.props.playStore.updatePlayState(false);
        });

    }
    // 当浏览器正在下载音频/视频时
    progress(e) {
        // console.log("progress", e, this);
        try {
            // let cacheTime = (this.audio.buffered.end(this.audio.buffered.length - 1) / this.duration) * 100;
            // this.setState({ cacheTime: cacheTime });
        } catch (error) {
        }
    }
    // 当目前的播放位置已更改时
    timeupdate(e) {
        // console.log("timeupdate", this.audio.duration, e.timeStamp, this.audio.currentTime);
        // if (!this.duration) {
        //     return
        // }
        // let currentTimeProportion = (this.audio.currentTime / this.duration) * 100;
        // if (currentTimeProportion > 99.4) {
        //     currentTimeProportion = 99.4;
        // }
        // let currentTime = Help.DateFormat(new Date(this.audio.currentTime * 1000), "mm:ss");
        // this.setState({ currentTimeProportion: currentTimeProportion, currentTime: currentTime });
    }
    play(Callback?) {
        // if (this.playState) {
        //     this.audio.pause();
        // } else {
        //     this.audio.play();
        // }
        // this.playState = !this.playState;
        // Callback && Callback(this.playState);
    };

    componentDidMount() {
        // this.props.playStore.updatePlayState();// = true;
    }
    render() {
        if (this.props.playStore.url && this.audio.src != this.props.playStore.url) {
            this.audio.src = this.props.playStore.url;
        }
        if (this.props.playStore.playState) {
            if (this.audio.paused) {
                this.audio.play();
            }
        } else {
            if (!this.audio.paused) {
                this.audio.pause();
            }
        }
        return null;
    }
}

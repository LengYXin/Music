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
        last?: Function,
        next?: Function,
    };
}
export class Audio<P, S> extends React.Component<Props, any> {
    constructor(public props) {
        super(props);
        this.audio = document.createElement("audio");
        // 设置自动播放
        this.audio.autoplay = true;
        this.audio.addEventListener("ended", e => {
            console.log(e);
            this.props.on.next();
        });
    }
    playState = true;//当前播放状态
    audio: HTMLAudioElement;
    // 上一首
    last() {
        this.props.on.last();
    };
    // 下一首
    next() {
        this.props.on.next();
    };
    play() {
        if (this.playState) {
            this.audio.pause();
        } else {
            this.audio.play();
        }
        this.playState = !this.playState;
    };
}
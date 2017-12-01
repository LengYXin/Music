import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
// import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { observer, inject } from 'mobx-react';
import videojs from "video.js"

import './style.css'
@inject('mvStore')
@observer
export class MVDetailsComponent extends React.Component<any, any> {
    componentWillMount() {
        // 获取播放地址。
        this.props.mvStore.play(this.props.MVid || this.props.match.params.id);
    }
    video;
    refVideo(e: HTMLVideoElement) {
        if (e && e.src) {
            // console.log("refVideo");
            this.video = videojs(e, {
                controls: true,
                autoplay: true,
                preload: 'auto'
            });
            this.addEventListener();
            // console.log(this.video);
        }
    }
    addEventListener() {
        // 开始播放
        this.video.on("play", e => {
            // 通知 mv 播放
            this.props.mvStore.controller.subject.next({ type: EnumNotice.MVPlay, data: true });
        });
        //暂停
        this.video.on("pause", e => {
            // 通知 mv 播放
            this.props.mvStore.controller.subject.next({ type: EnumNotice.MVPlay, data: false });
        });
    }
    render() {
        // console.log(this.props.mvStore.current.id);
        let url = "";
        try {
            url = this.props.mvStore.current.brs && this.props.mvStore.current.brs[1].url
        } catch (error) {
        }
        return <div className="mv-details">
            {url ? <video className="video-js mv-video" src={url} ref={this.refVideo.bind(this)}>
                <source src={url} type="video/mp4" />
            </video> : <div></div>}
        </div>
    }
}
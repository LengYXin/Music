import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import QueueAnim from 'rc-queue-anim';
import './style.css'
@inject('musictStore')
@observer
export class MusicPlayComponent extends React.Component<any, any> {

    render() {
        console.log(this);
        const music = this.props.musictStore.current.music || {};
        if (this.props.musictStore.pattern == "play") {
            return <div className="music-play-main">播放界面</div>;
        }
        if (this.props.musictStore.pattern == "footer") {
            return <div className="music-footer-main">
                <audio src={music.url} autoPlay={true} controls={true}></audio>
            </div>;
        }
        return null;
    }
}
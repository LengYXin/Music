import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import QueueAnim from 'rc-queue-anim';
import './style.css'

import { AudioPlay } from "../audioPlay"
@inject('musicStore')
@observer
export default class extends React.Component<any, any> {
    state = {
        playState: true
    }
    AudioPlay: AudioPlay;
    // 上一首
    last() {
        this.props.musicStore.last();
    };
    // 下一首
    next() {
        this.props.musicStore.next();
    };
    play() {
        // this.AudioPlay.play(e => {
        //     this.setState({ playState: e });
        // });
    };
    render() {
        console.log("AudioPlay", this);
        const music = this.props.musicStore.current.music || {};
        const play = this.props.musicStore.current.play || {};
        const playState = this.state.playState && music.url;
        return (
            <div className="AudioPlay-body">
                <div className="AudioPlay-btns">
                    <a onClick={this.last.bind(this)}>上一首</a>
                    <a onClick={this.play.bind(this)}>{playState ? "暂停" : "播放"}</a>
                    <a onClick={this.next.bind(this)}>下一首</a>
                </div>
                <div className="AudioPlay-img">
                    <div className={playState ? "AudioPlay-img-pic play" : "AudioPlay-img-pic "}>
                        <img alt="" src={(play.al && play.al.picUrl + "?param=40y40") || globalMusic.defaultImg} width="40" height="40" />
                    </div>
                </div>
                <div className="AudioPlay-play">
                    <span className="AudioPlay-play-name">{play.name}</span>
                    <AudioPlay ref={e => { this.AudioPlay = e; }} src={music.url} on={{
                        ended: () => {
                            this.next()
                        }
                    }} />
                </div>
                <div className="AudioPlay-menu">
                    <span>
                        {this.props.musicStore.playList.length}
                    </span>
                </div>
            </div>
        )
    }
}
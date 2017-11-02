import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';

@inject('musictStore', 'playStore')
@observer
export default class extends React.Component<any, any> {
    // 上一首
    last() {
        this.props.musictStore.last();
    };
    // 下一首
    next() {
        this.props.musictStore.next();
    };
    play() {
        // this.AudioPlay.play(e => {
        //     this.setState({ playState: e });
        // });
        this.props.playStore.updatePlayState(!this.props.playStore.playState);
    };
    render() {
        // console.log("btns", this);
        const music = this.props.musictStore.current.music || {};
        // const play = this.props.musictStore.current.play || {};
        const playState = this.props.playStore.playState && music.url;
        return (
            <div className="AudioPlay-btns">
                <a onClick={this.last.bind(this)}>上一首</a>
                <a onClick={this.play.bind(this)}>{playState ? "暂停" : "播放"}</a>
                <a onClick={this.next.bind(this)}>下一首</a>
            </div>
        )
    }
}
import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
// import { Icon } from 'antd';
import Icon from 'antd/lib/icon';

@inject('playStore')
@observer
export default class extends React.Component<any, any> {
    // 上一首
    last() {
        this.props.playStore.last();
    };
    // 下一首
    next() {
        this.props.playStore.next();
    };
    play() {
        // this.AudioPlay.play(e => {
        //     this.setState({ playState: e });
        // });
        this.props.playStore.updatePlayState(!this.props.playStore.playParam.playState);
    };
    render() {
        // console.log("btns", this);
        const music = this.props.playStore.current.music || {};
        // const play = this.props.playStore.current.play || {};
        const playState = this.props.playStore.playParam.playState && music.url;
        return (
            <div className="AudioPlay-btns">
                <a onClick={this.last.bind(this)} title="上一首"><Icon type="backward" /></a>
                <a onClick={this.play.bind(this)} title={playState ? "暂停" : "播放"}>{playState ? <Icon type="pause-circle-o" /> : <Icon type="play-circle-o" />}</a>
                <a onClick={this.next.bind(this)} title="下一首"><Icon type="forward" /></a>
            </div>
        )
    }
}
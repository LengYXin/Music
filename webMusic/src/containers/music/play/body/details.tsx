import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import QueueAnim from 'rc-queue-anim';

@inject('playStore')
@observer
export default class extends React.Component<any, any> {
    updateShowLyric() {
        this.props.playStore.updateShowLyric();
    }
    render() {
        return (
            <div className="AudioPlay-details" onClick={this.updateShowLyric.bind(this)}>
                {this.props.playStore.showLyric&&this.props.playStore.patternStyle=="screen" ? <Lyric /> : <ImgDtl />}
            </div>
        )
    }
}
@inject('musictStore', 'playStore')
@observer
class ImgDtl extends React.Component<any, any> {
    render() {
        const play = this.props.musictStore.current.play || {};
        return (
            <QueueAnim type="scale" delay={100} animConfig={[
                { opacity: [1, 0], },
                { opacity: [1, 0], }
            ]} >
                <div key="1" className={this.props.playStore.playState ? "AudioPlay-img-pic play" : "AudioPlay-img-pic "}>
                    <img src={(play.al && play.al.picUrl + "?param=400y400") || "/assets/img/default_album.jpg"} />
                </div>
            </QueueAnim >

        )
    }
}
@inject('musictStore', 'playStore')
@observer
class Lyric extends React.Component<any, any> {
    render() {
        let lyric = "--没有歌词--";
        let lyricList = [];
        try {
            lyric = this.props.musictStore.current.lyric.lrc.lyric;
            lyricList = lyric.split('\n').map(x => {
                let str = x.split("]");
                let time = str[0].substr(1);
                let lyricStr = str[1];
                return { time, lyricStr }
            });
            console.log(lyricList);
        } catch (error) {
        }
        return (
            <QueueAnim type="scale" delay={100} animConfig={[
                { opacity: [1, 0], },
                { opacity: [1, 0], }
            ]} >
                <div key="1" className="play-lyric" >

                    {
                        lyricList.map((x, i) => {
                            return <div key={i}>{x.lyricStr}</div>
                        })
                    }
                </div>
            </QueueAnim >

        )
    }
}

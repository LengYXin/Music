import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import QueueAnim from 'rc-queue-anim';
import { DiscoverMusicComponent } from '../../../discoverMusic/index';

@inject('playStore')
@observer
export default class extends React.Component<any, any> {
    updateShowLyric() {
        this.props.playStore.updateShowLyric();
    }
    render() {
        return (
            <div className="AudioPlay-details" onClick={this.updateShowLyric.bind(this)}>
                {this.props.playStore.showLyric && this.props.playStore.patternStyle == "screen" ? <Lyric /> : <ImgDtl />}
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
                    <img alt="" src={(play.al ? play.al.picUrl + "?param=400y400" :globalMusic.defaultImg)} />
                </div>
            </QueueAnim >

        )
    }
}
@inject('musictStore', 'playStore')
@observer
class Lyric extends React.Component<any, any> {
    render() {
        // console.log(this);
        let lyric = this.props.musictStore.current.lyric || [];
        // console.log(lyric, this.props.playStore.currentTimeS);
        let currentTimeS = this.props.playStore.currentTimeS;
        return (
            <QueueAnim type="scale" delay={100} animConfig={[
                { opacity: [1, 0], },
                { opacity: [1, 0], }
            ]} >
                <div key="1" className="play-lyric"  >
                    {
                        lyric.length ? lyric.map((x, i, arr) => {
                            return this.renderItem(currentTimeS, x, i, arr);
                        }) : <div className="play-lyric-not">
                                <span>纯音乐，请您欣赏</span>
                            </div>
                    }
                </div>
            </QueueAnim >

        )
    }
    renderItem(currentTimeS, lyricTime, index, arr) {
        // 计算当前时间段是否是歌词时间段
        let current = false;
        try {
            if (lyricTime.time) {
                // let difference = this.props.playStore.currentTimeS - x.time;
                let next = arr[index + 1];
                current = currentTimeS >= lyricTime.time && currentTimeS <= next.time;
                // console.log(index);
            }
        } catch (error) {
            current = true;
        }
        return <div key={index} className={current ? "play-lyric-item activity" : "play-lyric-item"} ref={e => { this.refLyric(e, lyricTime.time, current) }} >
            <span >{lyricTime.lyric}</span>
        </div>
    }
    time;
    offsetParent;
    height;
    refLyric(e: HTMLDivElement, time, current) {
        if (!current || this.time == time) {
            return
        }
        this.time = time;
        let offsetParent = this.offsetParent = e.offsetParent;
        let offsetTop = e.offsetTop;
        let scrollHeight = offsetParent.scrollHeight;
        let scrollTop = offsetParent.scrollTop;
        let clientHeight = offsetParent.clientHeight;
        // 可见区域
        let soHeight = scrollTop + clientHeight;
        if (offsetTop >= scrollTop && offsetTop < soHeight && soHeight - offsetTop > 28) {
            // console.log("在", offsetTop, scrollTop, soHeight);
        } else {
            let height = this.height = offsetTop - clientHeight + clientHeight / 2;
            this.scrolltop(offsetParent as any, height);
            // offsetParent.scrollTop = height;
            // console.log("不在", offsetTop, scrollTop, soHeight);
        }
    }
    scrolltop(offsetParent: HTMLDivElement, height) {
        let sun = 15;
        let scrollStep = -Math.ceil((offsetParent.scrollTop - height) / sun);
        let count = 1;
        let scrollInterval = setInterval(() => {
            // console.log("scrollStep", scrollStep);
            try {
                if (count <= sun ) {
                    // offsetParent.scrollBy(0, scrollStep);
                    offsetParent.scrollTop = offsetParent.scrollTop + scrollStep;
                    count++;
                }
                else {
                    // console.log(offsetParent.scrollTop);
                    clearInterval(scrollInterval)
                };
            } catch (error) {
                clearInterval(scrollInterval)
            }
        }, sun);
    }
}

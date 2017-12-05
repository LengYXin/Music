import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import QueueAnim from 'rc-queue-anim';
// import { Card } from 'antd';
import './style.css';
import Card from 'antd/lib/card';
import { SSCardComponent } from '../public/card';
const gridStyle = {
    width: '25%',
    height: "287px",
    textAlign: 'center',
};
/**
 * 个性推荐
 */
@inject('songSheetStore')
@observer
export default class extends React.Component<any, any> {
    render() {
        if (this.props.songSheetStore.resource && this.props.songSheetStore.resource.length) {

            let playlist = this.props.songSheetStore.resource.slice();
            playlist && playlist.unshift(
                {
                    to: `/ssd/day`,
                    img: () => {
                        const date = new Date();
                        const days = ["日", "一", "二", "三", "四", "五", "六"];
                        const day = days[date.getDay()];
                        const dat = date.getDate();
                        return <div className="recommend-day">
                            <div className="recommend-day-1">星期{day}</div>
                            <div className="recommend-day-2">{dat}</div>
                        </div>
                    },
                    name: "每日歌曲推荐"
                }
            );
            return (
                <QueueAnim key="queue"
                    leaveReverse
                >
                    <h3 style={{ textAlign: "left", padding: "2px" }}>推荐歌单</h3>
                    <SSCardComponent songSheet={playlist} />
                </QueueAnim>

            )
        }
        return <div className="text-center">没有歌单</div>
    }
}
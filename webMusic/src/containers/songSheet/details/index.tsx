import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import QueueAnim from 'rc-queue-anim';
import { Card, Tag, Row, Col, Tabs, Icon, Avatar, Button } from 'antd';
const { TabPane } = Tabs;
import './style.css'
import Help from "../../../utils/help"
import SongList from "./songList"
@inject('songSheetStore')
@observer
export class songSheetDetailsComponent extends React.Component<any, any> {
    componentDidMount() {
        this.props.songSheetStore.getDetails(this.props.match.params.id);
    }
    render() {
        // console.log(this.props.songSheetStore.details);
        const detalis = this.props.songSheetStore.details.playlist || {};
        const creator = detalis.creator || {};
        return <div style={{ padding: "15px 0" }}>
            <Row>
                <Col span={6} >
                    <Card style={{ width: "100%", minHeight: "220px" }} bodyStyle={{ padding: 0 }}>
                        <img width="223" height="223" src={detalis.coverImgUrl + "?param=180y180"} />
                    </Card>
                </Col>
                <Col span={18}>
                    <Introduce detalis={{ ...detalis }} />
                </Col>
            </Row>
            <Row>
                <Col span={24} >
                    <Tabs >
                        <TabPane tab={<span>歌曲列表</span>} key="1">
                            <SongList tracks={detalis.tracks} />
                        </TabPane>
                        <TabPane tab={<span>评论({detalis.commentCount})</span>} key="2">
                        </TabPane>
                        <TabPane tab={<span>收藏者</span>} key="3">
                            主播电台
                         </TabPane>

                    </Tabs>
                </Col>
            </Row>
        </div>
    }
}
/**
 * 介绍部分
 */
@inject('songSheetStore', 'musictStore')
@observer
class Introduce extends React.Component<any, any> {
    playAll() {
        console.log( this.props.musictStore);
        this.props.musictStore.addPlayList(this.props.songSheetStore.details.playlist.tracks, true);
    }
    render() {
        const detalis = this.props.songSheetStore.details.playlist || {};
        const creator = detalis.creator || {};
        return <div className="ss-d-introduce">
            <div>
                <h1 style={{ display: "inline-block" }}><span>{detalis.name}</span> </h1>
                <span><Icon type="notification" />{detalis.trackCount}</span> <span><Icon type="play-circle-o" />{detalis.playCount}</span>
            </div>
            <div> <Avatar src={creator.avatarUrl} /><span>{creator.nickname}</span> <span>{Help.DateFormat(detalis.createTime, "yyyy-MM-dd")}创建</span></div>
            <div>
                <Button type="dashed" onClick={this.playAll.bind(this)}><Icon type="play-circle-o" />播放全部</Button>
                <Button type="dashed"><Icon type="plus" /></Button>
                <Button type="dashed"><Icon type="folder-add" />收藏({detalis.subscribedCount})</Button>
                <Button type="dashed"><Icon type="export" />分享({detalis.shareCount})</Button>
                <Button type="dashed" disabled ><Icon type="download" />下载全部</Button>
            </div>
            <div>
                <span>标签：{detalis.tags && detalis.tags.map(x => <span key={x}><Link to={x} >{x}</Link> / </span>)}</span>
            </div>
            <div>
                <span>简介：{detalis.description}</span>
            </div>
        </div>

    }
}
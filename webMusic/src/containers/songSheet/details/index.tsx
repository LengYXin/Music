import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import QueueAnim from 'rc-queue-anim';
// import { Card, Tag, Row, Col, Tabs, Icon, Avatar, Button } from 'antd';
import './style.css'
import { Help } from "../../../utils"
import { SongList, SongListComponent } from "./songList"
import Row from 'antd/lib/grid/row';
import Col from 'antd/lib/grid/col';
import Card from 'antd/lib/card';
import Tabs from 'antd/lib/tabs';
import Avatar from 'antd/lib/avatar';
import Button from 'antd/lib/button/button';
import Icon from 'antd/lib/icon';

const { TabPane } = Tabs;

/**
 * 歌单详情
 */
@inject('songSheetStore')
@observer
export class songSheetDetailsComponent extends React.Component<any, any> {
    componentDidMount() {
        this.props.songSheetStore.getDetails(this.props.match.params.id);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id != this.props.match.params.id) {
            this.props.songSheetStore.getDetails(this.props.match.params.id);
        }
    }
    render() {
        const { details={}, tracks } = this.props.songSheetStore.details;
        return <div style={{ padding: "15px 0" }}>
            <Row type="flex">
                <Col span={6} >
                    <Card style={{ width: "100%", minHeight: "220px" }} bodyStyle={{ padding: 0 }}>
                        <img alt="" width="223" height="223" src={details.coverImgUrl ? details.coverImgUrl + "?param=223y223" : globalMusic.defaultImg} style={{ display: "block" }} />
                    </Card>
                </Col>
                <Col span={18}>
                    <Introduce />
                </Col>
            </Row>
            <Row>
                <Col span={24} >
                    <Tabs >
                        <TabPane tab={<span>歌曲列表</span>} key="1">
                            {/* <SongList tracks={detalis.tracks} /> */}
                            <SongListComponent songList={tracks} />
                        </TabPane>
                        <TabPane tab={<span>评论({details.commentCount})</span>} key="2">
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
@inject('songSheetStore', 'playStore')
@observer
class Introduce extends React.Component<any, any> {
    playAll() {
        this.props.playStore.addPlayList(this.props.songSheetStore.details.tracks, true);
    }
    render() {
        const detalis = this.props.songSheetStore.details.details || {};
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
import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import QueueAnim from 'rc-queue-anim';
// import { Card, Tag, Row, Col, Tabs, Icon, Avatar, Button } from 'antd';
import './style.css'
import { Help } from "../../../utils"
import Row from 'antd/lib/grid/row';
import Col from 'antd/lib/grid/col';
import Card from 'antd/lib/card';
import Tabs from 'antd/lib/tabs';
import Avatar from 'antd/lib/avatar';
import Button from 'antd/lib/button/button';
import Icon from 'antd/lib/icon';
import { Introduce } from './Introduce';
import { SongList, SongListComponent } from "./songList"

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
        if (this.props.songSheetStore.detailsLoading) {
            return <QueueAnim type="scale" delay={100} animConfig={[
                { opacity: [0.95, 0], },
                { opacity: [0.95, 0], }
            ]} >
                <SongSheetDetails key="1" />
            </QueueAnim >

        }
        return <div className="music-loading ">
            <div className="music-loading-icon">
                <i className="musicicon musicicon-8"></i>
            </div>
            加载中...
        </div>
    }
}
@inject('songSheetStore')
@observer
class SongSheetDetails extends React.Component<any, any> {
    render() {
        const { details = {}, tracks } = this.props.songSheetStore.details;
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

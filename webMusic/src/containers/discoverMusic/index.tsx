import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { Tabs, Icon } from 'antd';
const TabPane = Tabs.TabPane;
import { observer, inject } from 'mobx-react';
import './style.css'

import {PersonalityComponent,SongSheetComponent} from "../songSheet"

// @inject('UserContextStore', 'recommendStore')
// @observer
export class DiscoverMusicComponent extends React.Component<any, any> {
    async getA() {
        console.log(await this.props.recommendStore.getResource());
    }
    render() {
        // console.log(this.props.recommendStore.resource);
        return (
            <Tabs style={{ textAlign: "center" }}>
                <TabPane tab={<span><Icon type="apple" />个性推荐</span>} key="1">
                    <PersonalityComponent {...this.props} />
                </TabPane>
                <TabPane tab={<span><Icon type="android" />歌单</span>} key="2">
                    <SongSheetComponent {...this.props} />
                </TabPane>
                <TabPane tab={<span><Icon type="android" />主播电台</span>} key="3">
                    主播电台
                 </TabPane>
                <TabPane tab={<span><Icon type="android" />排行榜</span>} key="4">
                    排行榜
                 </TabPane>
                <TabPane tab={<span><Icon type="android" />歌手</span>} key="5">
                    歌手
                 </TabPane>
                <TabPane tab={<span><Icon type="android" />最新音乐</span>} key="6">
                    最新音乐
                 </TabPane>
            </Tabs>
        )
    }
}
import * as React from 'react'
import { renderRoutes } from 'react-router-config';
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { Tabs, Icon } from 'antd';
const TabPane = Tabs.TabPane;
import { observer, inject } from 'mobx-react';
import './style.css'

import { PersonalityComponent, SongSheetComponent } from "../songSheet"

// @inject('UserContextStore', 'recommendStore')
// @observer
export class DiscoverMusicComponent extends React.Component<any, any> {
    async getA() {
        console.log(await this.props.recommendStore.getResource());
    }
    onTabClick(tab) {
        // console.log(tab);
        this.props.history.push(tab);
    }
    render() {
        // console.log(this.props.location.pathname);
        return (
            <div>
                <Tabs style={{ textAlign: "center" }} onTabClick={this.onTabClick.bind(this)} activeKey={this.props.location.pathname}>
                    <TabPane tab={<span><Icon type="apple" />个性推荐</span>} key="/find" />
                    <TabPane tab={<span><Icon type="android" />歌单</span>} key="/find/ss" />
                    <TabPane tab={<span><Icon type="android" />主播电台</span>} key="/find/dt" />
                    <TabPane tab={<span><Icon type="android" />排行榜</span>} key="/find/ph" />
                    <TabPane tab={<span><Icon type="android" />歌手</span>} key="/find/gs" />
                    <TabPane tab={<span><Icon type="android" />最新音乐</span>} key="/find/new" />
                </Tabs>
                {renderRoutes(this.props.route.routes)}
            </div>
        )
    }
}
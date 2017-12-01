import * as React from 'react'
import { renderRoutes } from 'react-router-config';
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
// import { Tabs, Icon } from 'antd';
import Tabs from 'antd/lib/tabs';
const TabPane = Tabs.TabPane;
import { observer, inject } from 'mobx-react';
import './style.css'

import { PersonalityComponent, SongSheetComponent } from "../songSheet"


/**
 * 发现音乐
 */
export class FindMusicComponent extends React.Component<any, any> {
    onTabClick(tab) {
        this.props.history.push(tab);
    }
    render() {
        // console.log(this.props.location.pathname);
        return (
            <div>
                <Tabs style={{ textAlign: "center" }} onTabClick={this.onTabClick.bind(this)} activeKey={this.props.location.pathname}>
                    <TabPane tab={<span>个性推荐</span>} key="/find" />
                    <TabPane tab={<span>歌单</span>} key="/find/ss" />
                    <TabPane tab={<span>主播电台</span>} key="/find/dt" />
                    <TabPane tab={<span>排行榜</span>} key="/find/ph" />
                    <TabPane tab={<span>歌手</span>} key="/find/gs" />
                    <TabPane tab={<span>最新音乐</span>} key="/find/new" />
                </Tabs>
                {renderRoutes(this.props.route.routes)}
            </div>
        )
    }
}
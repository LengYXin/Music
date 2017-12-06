import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import { Help } from "../../../utils"
import Avatar from 'antd/lib/avatar';
import Button from 'antd/lib/button/button';
import Icon from 'antd/lib/icon';
/**
 * 介绍部分
 */
@inject('songSheetStore', 'playStore')
@observer
export class Introduce extends React.Component<any, any> {
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
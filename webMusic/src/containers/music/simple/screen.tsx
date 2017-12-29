import * as React from 'react'
import { observer, inject } from 'mobx-react';
import Icon from 'antd/lib/icon';
import Animate from 'rc-animate';
import Row from 'antd/lib/grid/row';
import Col from 'antd/lib/grid/col';

import { Lyric, PlayImg } from '../details/index';
import Avatar from 'antd/lib/avatar';
import List from 'antd/lib/list';
import { observable } from 'mobx';
/**
 * 全屏界面
 */
@inject('playStore', 'musicStore')
export default class extends React.Component<any, any> {
    onAlt() {
        this.props.playStore.updatePatternSimpleStyle();
    }
    render() {
        return <div className="music-simple-screen">
            <div className="music-simple-o-btn" onClick={this.onAlt.bind(this)}>
                <Icon type="shrink" />
            </div>
            <div className="music-simple-s-content">
                <Row type="flex" justify="start" className="music-simple-details">
                    <Col span={12} className="music-simple-d-img">
                        <PlayImg />
                    </Col>
                    <Col span={12} className="music-simple-d-lyric">
                        <Lyric />
                    </Col>
                </Row>
                <Interaction />
            </div>
        </div>
    }
}
@inject('playStore', 'musicStore')
@observer
class Interaction extends React.Component<any, any> {
    @observable comments = [];
    componentWillMount() {
        // 获取播放地址。
        this.getComment();
    }
    componentDidUpdate(prevProps, prevState) {
        // this.getComment();
    }
    async getComment() {
        var comment = await this.props.musicStore.getComment(this.props.playStore.current.music.id);
        this.comments = [...this.comments, ...comment.comments];
    }
    // async getComment() {
    //     let comment = await this.props.songSheetStore.getComment(this.state.limit, this.state.offset);
    //     let state = { hotComments: this.state.hotComments, comments: null, offset: this.state.offset + 1 };
    //     if (this.state.offset == 0) {
    //         state.comments = comment.comments;
    //         state.hotComments = comment.hotComments;
    //     } else {
    //         state.comments = [...this.state.comments, comment.comments]
    //     }
    //     this.setState(state);
    // }
    render() {
        console.log("this.comments",this.comments);
        return <Row type="flex" justify="start" className="music-simple-Interaction">
            <Col span={16}>
                <div>
                    <h3 style={{ textAlign: "left", padding: "2px" }}>最新评论</h3>
                    <List
                        className="s-s-comment-list"
                        // loading={loading}
                        itemLayout="horizontal"
                        // loadMore={loadMore}
                        dataSource={this.comments}
                        renderItem={item => (
                            <List.Item actions={[
                                <a><Icon type="like-o" />({item.likedCount})</a>,
                                <a>分享</a>,
                                <a>回复</a>,
                            ]} extra>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.user.avatarUrl} />}
                                    title={<a href="https://ant.design">{item.user.nickname}</a>}
                                    description={item.timeStr}
                                />
                                <div>{item.content}</div>
                                {item.beReplied.length ?
                                    <div><a href="">@{item.beReplied[0].user.nickname}</a> {item.beReplied[0].content}</div> :
                                    <div></div>}
                            </List.Item>
                        )}
                    />
                </div>
            </Col>
            <Col span={8}>
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={[
                        'Racing car sprays burning fuel into crowd.',
                        'Japanese princess to wed commoner.',
                        'Australian walks 100km after outback crash.',
                        'Man charged over missing wedding girl.',
                        'Los Angeles battles huge wildfires.',
                    ]}
                    renderItem={item => (<List.Item extra>{item}</List.Item>)}
                />
            </Col>
        </Row>
    }
}
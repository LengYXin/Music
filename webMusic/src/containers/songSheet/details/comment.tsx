import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';


import { MVDetailsComponent } from "../../mv"
import { Help } from "../../../utils"

import './style.css'
import Button from 'antd/lib/button/button';
import Icon from 'antd/lib/icon';
import Modal from 'antd/lib/modal/Modal';
import Table from 'antd/lib/table/Table';
import Row from 'antd/lib/grid/row';
import Col from 'antd/lib/grid/col';
import List from 'antd/lib/list';
import Avatar from 'antd/lib/avatar';
import Spin from 'antd/lib/spin';
/**
 * 评论列表
 */
@inject('songSheetStore')
@observer
export class CommentComponent extends React.Component<any, any> {
    state = {
        hotComments: [],
        comments: [],
        limit: 20,
        offset: 0,
        loading: false,
        loadingMore: false,
        showLoadingMore: true,
    };
    componentDidMount() {
        this.getComment();
    }
    async getComment() {
        let comment = await this.props.songSheetStore.getComment(this.state.limit, this.state.offset);
        let state = { hotComments: this.state.hotComments, comments: null, offset: this.state.offset + 1 };
        if (this.state.offset == 0) {
            state.comments = comment.comments;
            state.hotComments = comment.hotComments;
        } else {
            state.comments = [...this.state.comments, comment.comments]
        }
        this.setState(state);
    }
    onLoadMore() {

    }
    render() {
        console.log(this.state);
        const { loading, loadingMore, showLoadingMore } = this.state;
        const loadMore = showLoadingMore ? (
            <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
                {loadingMore && <Spin />}
                {!loadingMore && <Button onClick={this.onLoadMore}>loading more</Button>}
            </div>
        ) : null;
        return (
            <div>
                <div>
                    <h3 style={{ textAlign: "left", padding: "2px" }}>精彩评论</h3>
                    {/* {this.state.hotComments.map((x, i) => {
                        return <div key={i}>
                            {x.content}
                        </div>
                    })} */}
                    <List
                        className="s-s-comment-list"
                        loading={loading}
                        itemLayout="horizontal"
                        // loadMore={loadMore}
                        dataSource={this.state.hotComments}
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
                                    <div>{item.beReplied[0].content}</div> :
                                    <div></div>}

                            </List.Item>
                        )}
                    />
                </div>
                <div>
                    <h3 style={{ textAlign: "left", padding: "2px" }}>最新评论</h3>
                    {/* {this.state.comments.map((x, i) => {
                        return <div key={i}>
                            {x.content}
                        </div>
                    })} */}

                    <List
                        className="s-s-comment-list"
                        loading={loading}
                        itemLayout="horizontal"
                        loadMore={loadMore}
                        dataSource={this.state.comments}
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
            </div>
        )
    }
}

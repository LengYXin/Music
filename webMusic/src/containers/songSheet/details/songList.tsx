import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import QueueAnim from 'rc-queue-anim';
// import { Table, Button, Icon, Modal } from 'antd';

import { MVDetailsComponent } from "../../mv"
import { Help } from "../../../utils"

import './style.css'
import Button from 'antd/lib/button/button';
import Icon from 'antd/lib/icon';
import Modal from 'antd/lib/modal/Modal';
import Table from 'antd/lib/table/Table';
import Row from 'antd/lib/grid/row';
import Col from 'antd/lib/grid/col';
/**
 * 歌曲列表
 */
@inject('playStore')
@observer
export class SongListComponent extends React.Component<{ songList: any[] }, any> {

    render() {
        return (
            <div className="song-sheet-list">
                <Row type="flex">
                    <Col span={2} ></Col>
                    <Col span={2} >操作</Col>
                    <Col span={8} >标题</Col>
                    <Col span={5} >歌手</Col>
                    <Col span={5} >专辑</Col>
                    <Col span={2} >时长</Col>
                </Row>
                <div className="song-sheet-item">
                    {this.props.songList && this.props.songList.map((x, i) => (
                        <Row type="flex" key={i}>
                            <Col span={2} >{i + 1 < 10 ? `0${i + 1}` : i + 1}</Col>
                            <Col span={2} >
                                {
                                    x.like ?
                                        <Icon type="heart" />
                                        :
                                        <Icon type="heart-o" />
                                }
                            </Col>
                            <Col span={8} >
                                {
                                    <span className="song-list-name">{x.name}
                                        {
                                            x.mv ?
                                                <Link to={x.mvTo} > <Icon type="play-circle" /></Link>
                                                :
                                                null
                                        }
                                    </span>
                                }
                            </Col>
                            <Col span={5} >
                                {
                                    <span title={x.singer}>{x.singer}</span>
                                }
                            </Col>
                            <Col span={5} ><span title={x.al.name}>{x.al.name}</span></Col>
                            <Col span={2} ><span>{x.dtStr}</span></Col>
                        </Row>
                    ))}
                </div>

            </div>
        )
    }
}
/**
 * 歌曲列表
 */
@inject('playStore')
@observer
export class SongList extends React.Component<any, any> {
    columns = [{
        title: '',
        dataIndex: '',
        render: (text, record, index) => {
            index = index + 1;
            index = index < 10 ? `0${index}` : index;
            return (
                <span>{index}</span>
            );
        },
        width: '10%',
    }, {
        title: '操作',
        dataIndex: '',
        render: (text, record) => {
            // <Icon type="heart-o" /> <Icon type="heart" />
            // return [
            //     <Button shape="circle" icon="heart-o" size="small" />,
            //     <Button shape="circle" icon="download" size="small" />
            // ];
            return (
                <div>
                    <Button icon="heart-o" size="small" />,
                <Button icon="download" disabled size="small" />
                </div>
            );
        },
        width: '10%',

    }, {
        title: '音乐标题',
        dataIndex: '',
        width: '30%',
        render: (text, record) => {
            return (
                <span className="song-list-name" onClick={e => {
                    this.setState({ modal2Visible: !this.state.modal2Visible, MVid: text.mv, Name: text.name });
                }}>{text.name} {
                        text.mv ?
                            <Link to={`/mv/${text.mv}`} > <Icon type="play-circle" /></Link>
                            : null
                    }</span>
            );
        },

    }, {
        title: '歌手',
        dataIndex: '',
        render: (text, record) => {
            let names = text.ar && text.ar.map(x => {
                return x.name
            }) || [];
            return (
                <span>{names.join(" / ")}</span>
            );
        },
        width: '20%',

    }, {
        title: '专辑',
        dataIndex: '',
        render: (text, record) => {
            return (
                <span>{text.al.name}</span>
            );
        },
        width: '20%',

    }, {
        title: '时长',
        dataIndex: '',
        render: (text, record) => {
            return (
                <span>{Help.DateFormat(text.dt, "mm:ss")}</span>
            );
        },
        width: '10%',
    }];
    state = {
        modal2Visible: false,
        MVid: 0,
        Name: ""
    };
    setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
    };
    onRowClickCount = 0;
    onRowClicksetTimeout;
    onRowClick(t) {
        this.onRowClickCount++;
        if (this.onRowClickCount == 2) {
            this.props.playStore.addPlayList([t]);
            this.onRowClickCount = 0;
            clearTimeout(this.onRowClicksetTimeout);
        }
        this.onRowClicksetTimeout = setTimeout(() => {
            this.onRowClickCount = 0;
        }, 500);
    }
    render() {
        const data = this.props.tracks && this.props.tracks.map(x => x);
        return (
            <div>
                {/* <style>
                    {`.ant-table-row.s-s-songlist:nth-child(${this.props.playStore.currentIndex+1}) {
                            background:#ecf6fd;
                       }
                    `}
                </style> */}
                <Modal
                    title={this.state.Name}
                    wrapClassName="vertical-center-modal"
                    visible={this.state.modal2Visible}
                    onOk={() => this.setModal2Visible(false)}
                    onCancel={() => this.setModal2Visible(false)}
                >
                    {this.state.modal2Visible ? <MVDetailsComponent MVid={this.state.MVid} /> : null}
                </Modal>
                <Table rowKey="id" rowClassName={() => "s-s-songlist"} pagination={false} columns={this.columns} dataSource={data} onRowClick={this.onRowClick.bind(this)} />
            </div>
        )
    }
}
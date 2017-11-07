import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import QueueAnim from 'rc-queue-anim';
import { Table, Button, Icon, Modal } from 'antd';

import { MVDetailsComponent } from "../../mv"
import Help from "../../../utils/help"

import './style.css'
/**
 * 歌曲列表
 */
@inject('musictStore')
@observer
export default class extends React.Component<any, any> {
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
                    this.setState({ modal2Visible: !this.state.modal2Visible, MVid: text.mv,Name:text.name });
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
        Name:""
    };
    setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
    };
    onRowClickCount = 0;
    onRowClicksetTimeout;
    onRowClick(t) {
        this.onRowClickCount++;
        if (this.onRowClickCount == 2) {
            this.props.musictStore.addPlayList([t]);
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
                    {`.ant-table-row.s-s-songlist:nth-child(${this.props.musictStore.currentIndex+1}) {
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
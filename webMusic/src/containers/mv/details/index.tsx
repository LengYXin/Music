import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
// import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { observer, inject } from 'mobx-react';
import './style.css'
@inject('mvStore')
@observer
export class MVDetailsComponent extends React.Component<any, any> {
    componentDidMount() {
        // 获取播放地址。
        this.props.mvStore.play(this.props.MVid || this.props.match.params.id);
    }
    render() {
        console.log(this.props.mvStore.current);
        let url = this.props.mvStore.current.brs && this.props.mvStore.current.brs[0].url
        return <div className="mv-details">
            <video className="mv-video" autoPlay={true} src={url} controls={true}></video>
        </div>
    }
}
import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
// import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { observer, inject } from 'mobx-react';
import './style.css'
import Icon from 'antd/lib/icon';
@inject('windowsStore')
@observer
export class HomeComponent extends React.Component<any, any> {
    openExternal(url) {
        this.props.windowsStore.openExternal(url);
    }
    render() {
        console.log(this.props);
        return <div className="home">
            <section className="cover show" >
                <div className="cover-main">
                    <h1>草履虫：为世界所有的美好而战！</h1>
                    <h1 > <Icon type="github" /> <a className="anchor" href="javascript:void(0)" onClick={e => { this.openExternal("https://github.com/Binaryify/NeteaseCloudMusicApi") }}><span>网易云音乐 API</span></a></h1>
                    <h1 > <Icon type="github" /> <a className="anchor" href="javascript:void(0)" onClick={e => { this.openExternal("https://github.com/LengYXin/Music") }}><span>源码地址</span></a></h1>
                </div>
            </section>
        </div>
    }
}
import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
// import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { observer, inject } from 'mobx-react';
import './style.css'
@inject('UserContextStore', 'recommendStore')
@observer
export class HomeComponent extends React.Component<any, any> {
    render() {
        console.log(this.props);
        return <div>
            <section className="cover show" >
                <div className="cover-main">
                    <h1 id="网易云音乐-api">
                        <a className="anchor"><span>网易云音乐 API</span></a></h1><blockquote>
                        <p>网易云音乐 NodeJS 版 API</p></blockquote>
                    <ul>
                        <li>全部接口已升级到最新</li>
                        <li>具备登录接口</li>
                        <li>更完善的文档</li>
                    </ul>
                    <p><a href="https://github.com/Binaryify/NeteaseCloudMusicApi" target="_blank">GitHub</a>
                        <a href="https://binaryify.github.io/NeteaseCloudMusicApi">Get Started</a></p></div><div className="mask"></div>
            </section>
        </div>
    }
}
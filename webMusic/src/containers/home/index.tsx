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
        return <div className="home">
            <section className="cover show" >
                <div className="cover-main">
                    <h1 ><a className="anchor" href="https://github.com/Binaryify/NeteaseCloudMusicApi" target="_blank"><span>网易云音乐 API</span></a></h1>
                    <h1 ><a className="anchor" href="https://github.com/LengYXin/Music" target="_blank"><span>源码地址</span></a></h1>
                </div>
            </section>
        </div>
    }
}
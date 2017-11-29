import * as React from 'react'
import './style.css'
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
@inject('windowsStore')
@observer
export default class extends React.Component<any, any>{
    componentDidMount() {
    }
    onBack() {
        // console.log(this.props);
        this.props.history.goBack();
    }
    onForward() {
        // console.log(this.props);
        this.props.history.goForward();
    }
    onMinus() {
        this.props.windowsStore.onMinus();
    }
    onAlt() {
        this.props.windowsStore.onAlt();
    }
    onClose() {
        this.props.windowsStore.onClose();
    }
    render() {
        return (
            <div className="root-header-body" >
                <div className="root-header-logo">
                    <Link to="/">
                        <img alt="" src={globalMusic.defaultImg} />
                        <strong>小音乐盒子</strong>
                    </Link>
                </div>
                <div className="root-header-btns">
                    <a onClick={this.onBack.bind(this)} title="后退"><Icon type="left" /></a>
                    <a onClick={this.onForward.bind(this)} title="前进" ><Icon type="right" /></a>
                </div>
                <div className="root-header-search"></div>
                <div className="root-header-user"></div>
                <div className="root-header-operation">
                    <a onClick={this.onMinus.bind(this)} title="最小化"><Icon type="minus" /></a>
                    <a onClick={this.onAlt.bind(this)} title="最大化" ><Icon type="arrows-alt" /></a>
                    <a onClick={this.onClose.bind(this)} title="关闭" ><Icon type="close" /></a>
                </div>
            </div>
        );
    }
}
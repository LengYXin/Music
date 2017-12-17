import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
// import { AudioPlay } from "../../audioPlay"
// import { Icon } from 'antd';
import Icon from 'antd/lib/icon';
import Slider from 'antd/lib/slider';

@inject('playStore')
@observer
export default class extends React.Component<any, any> {
    showPlayList(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        this.props.playStore.updateShowList();
    }
    onChange(value) {
        this.props.playStore.setVolume(value);
        // console.log("onChange",value);
    }
    // onAfterChange(value) {  console.log("onAfterChange",value);}
    render() {
        return (
            <div className="audio-menu">
                <div className="menu-volume">
                    <i className="musicicon musicicon-12"></i>
                    <Slider defaultValue={this.props.playStore.volume} onChange={this.onChange.bind(this)} />
                </div>
                <a className="menu-playList" onClick={this.showPlayList.bind(this)}>
                    <Icon type="bars" />  {this.props.playStore.playList.length}
                </a>
            </div>
        )
    }
}
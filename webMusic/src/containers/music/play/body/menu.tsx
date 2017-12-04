import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import { AudioPlay } from "../../audioPlay"
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
    onChange() { }
    onAfterChange() { }
    render() {
        return (
            <div className="AudioPlay-menu">
                <Icon type="sound" />
                <Slider {...{ style: { width: 100 } }} defaultValue={30} onChange={this.onChange.bind(this)} onAfterChange={this.onAfterChange.bind(this)} />
                <a className="menu-playList" onClick={this.showPlayList.bind(this)}>
                    <Icon type="bars" />  {this.props.playStore.playList.length}
                </a>
            </div>
        )
    }
}
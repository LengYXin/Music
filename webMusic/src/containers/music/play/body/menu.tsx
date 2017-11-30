import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import { AudioPlay } from "../../audioPlay"
import { Icon } from 'antd';
@inject('musicStore','playStore')
@observer
export default class extends React.Component<any, any> {
    showPlayList(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        this.props.playStore.updateShowList();
    }
    render() {
        return (
            <div className="AudioPlay-menu">
                <a onClick={this.showPlayList.bind(this)}>
                    <Icon type="bars" />  {this.props.musicStore.playList.length}
                </a>
            </div>
        )
    }
}
import * as React from 'react'
import { observer, inject } from 'mobx-react';
import Icon from 'antd/lib/icon';
import Animate from 'rc-animate';

@inject('playStore')
@observer
export default class extends React.Component<any, any> {
    onAlt() {
        this.props.playStore.updatePatternMiniStyle();
    }
    render() {
        const play = this.props.playStore.current.play || {};
        return [
            <div key="1" className="music-mini-img" onClick={this.onAlt.bind(this)}>
                <img alt="" src={(play.al ? play.al.picUrl + "?param=100y100" : globalMusic.defaultImg)} />
                <div className="music-mini-o-btn" >
                    <Icon type="arrows-alt" />
                </div>
            </div>,
            <div key="2" className="music-mini-details">
                <p>{play.name}</p>
                <p>{play.singer}</p>
            </div>,
            <div key="3" className="music-mini-operation">
                <div className="music-mini-o-btn">
                    <Icon type="heart-o" />
                </div>
                <div className="music-mini-o-btn">
                    <Icon type="heart-o" />
                </div>
            </div>
        ]


    }
}
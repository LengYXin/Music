import * as React from 'react'
import { observer, inject } from 'mobx-react';
import Icon from 'antd/lib/icon';

import './style.css'

@inject('playStore')
@observer
export class MusicPlayMiniComponent extends React.Component<any, any> {
    render() {
        const play = this.props.playStore.current.play || {};
        return (
            <div className={"music-mini-body " + this.props.playStore.playParam.patternMiniStyle}>
                <div className="music-mini-img">
                    <img  alt="" src={(play.al ? play.al.picUrl + "?param=100y100" : globalMusic.defaultImg)} />
                </div>
                <div className="music-mini-details">
                    <span >{play.name}</span>
                </div>
                <div className="music-mini-operation">
                    <Icon type="arrows-alt" />
                    <Icon type="arrows-alt" />
                </div>
            </div>
        )
    }
}
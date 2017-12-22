import * as React from 'react'
import { observer, inject } from 'mobx-react';
import Icon from 'antd/lib/icon';
import Animate from 'rc-animate';
import { MusicImg } from '../details/index';

/**
 * 正常小界面
 */
@inject('playStore')
@observer
export default class extends React.Component<any, any> {
    onAlt() {
        this.props.playStore.updatePatternSimpleStyle();
    }
    render() {
        const play = this.props.playStore.current.play || {};
        return [
            <div key="1" className="music-simple-img" onClick={this.onAlt.bind(this)}>
                <MusicImg />
                <div className="music-simple-o-btn" >
                    <Icon type="arrows-alt" />
                </div>
            </div>,
            <div key="2" className="music-simple-details">
                <p>{play.name}</p>
                <p>{play.singer}</p>
            </div>,
            <div key="3" className="music-simple-operation">
                <div className="music-simple-o-btn">
                    <Icon type="heart-o" />
                </div>
                <div className="music-simple-o-btn">
                    <Icon type="heart-o" />
                </div>
            </div>
        ]


    }
}
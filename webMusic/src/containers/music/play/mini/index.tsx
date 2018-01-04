import * as React from 'react'
import { observer, inject } from 'mobx-react';
import Icon from 'antd/lib/icon';
import Animate from 'rc-animate';
import "./mini.css"
import Btns from "../body/btns";
import { MusicImg } from '../../details/index';

/**
 * 迷你播放器
 */
@inject('windowsStore')
@observer
export default class extends React.Component<any, any> {
    onAlt() {
        this.props.windowsStore.onMini();
    }
    render() {
        return <div className="music-mini">
            <div className="music-mini-img">
                <MusicImg />
            </div>
            <div className="music-mini-control">
                <div className="music-mini-cont-1">
                    <div className="music-mini-btns">
                        <Btns />
                    </div>
                </div>
                <div className="music-mini-cont-2">
                    <Lyric />
                </div>
            </div>
            <div className="music-mini-operation">
                <a onClick={this.onAlt.bind(this)}>
                    <Icon type="arrows-alt" />
                </a>
            </div>

        </div>
    }
}
@inject('playStore')
@observer
class Lyric extends React.Component<any, any> {
    render() {
        let lyric = this.props.playStore.current.lyric.details || [];
        return <div className="music-mini-lyric" >
            <p >  <span >{lyric.lyric}</span></p>
            <p > <span >{lyric.tlyric}</span></p>
        </div>

    }
}
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
            <MusicImg />
            <Btns />
            <div className="mini-operation">
                <span onClick={this.onAlt.bind(this)}>
                    <Icon type="arrows-alt" />
                </span>
            </div>

        </div>
    }
}
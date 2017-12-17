import * as React from 'react'
import { observer, inject } from 'mobx-react';
import Icon from 'antd/lib/icon';
import Animate from 'rc-animate';

import Btns from "./../play/body/btns";

@inject('playStore', 'windowsStore')
@observer
export default class extends React.Component<any, any> {
    onAlt() {
        this.props.playStore.updatePatternMiniStyle("normal");
        this.props.windowsStore.onMini();
    }
    render() {
        const play = this.props.playStore.current.play || {};
        return <div className="music-mini">
            <img alt="" src={(play.al ? play.al.picUrl + "?param=100y100" : globalMusic.defaultImg)} />
            <Btns />
            <div className="mini-operation">
                <span onClick={this.onAlt.bind(this)}>
                    <Icon type="arrows-alt" />
                </span>
            </div>

        </div>
    }
}
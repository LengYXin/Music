import * as React from 'react'
import { observer, inject } from 'mobx-react';
import Icon from 'antd/lib/icon';
import Animate from 'rc-animate';

@inject('playStore','windowsStore')
@observer
export default class extends React.Component<any, any> {
    onAlt() {
        this.props.playStore.updatePatternMiniStyle();
        this.props.windowsStore.onMini();
    }
    render() {
        const play = this.props.playStore.current.play || {};
        return <Animate transitionName="fade"
            transitionAppear={true} component="">
            <div key="1" className="mini-body" onClick={this.onAlt.bind(this)}>
                我是迷你界面
            </div>
        </Animate>

    }
}
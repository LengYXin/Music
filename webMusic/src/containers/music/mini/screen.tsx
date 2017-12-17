import * as React from 'react'
import { observer, inject } from 'mobx-react';
import Icon from 'antd/lib/icon';
import Animate from 'rc-animate';
import Row from 'antd/lib/grid/row';
import Col from 'antd/lib/grid/col';

import { Lyric, MusicImg } from '../details/index';
@inject('playStore')
export default class extends React.Component<any, any> {
    onAlt() {
        this.props.playStore.updatePatternMiniStyle();
    }
    render() {
        return <div className="music-mini-screen">
            <button onClick={this.onAlt.bind(this)}>按钮</button>
            <Row type="flex" justify="start">
                <Col span={12}>
                    <MusicImg />
                </Col>
                <Col span={12}>
                    <Lyric />
                </Col>
            </Row>
        </div>
    }
}
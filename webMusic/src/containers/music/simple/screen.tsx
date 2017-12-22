import * as React from 'react'
import { observer, inject } from 'mobx-react';
import Icon from 'antd/lib/icon';
import Animate from 'rc-animate';
import Row from 'antd/lib/grid/row';
import Col from 'antd/lib/grid/col';

import { Lyric, PlayImg } from '../details/index';
/**
 * 全屏界面
 */
@inject('playStore')
export default class extends React.Component<any, any> {
    onAlt() {
        this.props.playStore.updatePatternSimpleStyle();
    }
    render() {
        return <div className="music-simple-screen">
            <div className="music-simple-o-btn" onClick={this.onAlt.bind(this)}>
                <Icon type="shrink" />
            </div>
            <Row type="flex" justify="start">
                <Col span={12}>
                    <PlayImg />
                </Col>
                <Col span={12}>
                    <Lyric />
                </Col>
            </Row>
            <Row type="flex" justify="start">
                <Col span={12}>
                    <PlayImg />
                </Col>
                <Col span={12}>
                    <Lyric />
                </Col>
            </Row>
        </div>
    }
}
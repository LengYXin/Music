import * as React from 'react'
import { observer, inject } from 'mobx-react';
import Icon from 'antd/lib/icon';
import Animate from 'rc-animate';
import Row from 'antd/lib/grid/row';
import Col from 'antd/lib/grid/col';

import { Lyric, PlayImg } from '../details/index';
import Avatar from 'antd/lib/avatar';
import List from 'antd/lib/list';
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
            <div className="music-simple-s-content">
                <Row type="flex" justify="start" className="music-simple-details">
                    <Col span={12} className="music-simple-d-img">
                        <PlayImg />
                    </Col>
                    <Col span={12} className="music-simple-d-lyric">
                        <Lyric />
                    </Col>
                </Row>
                <Row type="flex" justify="start">
                    <Col span={16}>
                        <div>
                            <Avatar icon="user" />
                            <Avatar>U</Avatar>
                            <Avatar>USER</Avatar>
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
                            <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
                        </div>
                    </Col>
                    <Col span={8}>
                        <List
                            header={<div>Header</div>}
                            footer={<div>Footer</div>}
                            bordered
                            dataSource={[
                                'Racing car sprays burning fuel into crowd.',
                                'Japanese princess to wed commoner.',
                                'Australian walks 100km after outback crash.',
                                'Man charged over missing wedding girl.',
                                'Los Angeles battles huge wildfires.',
                            ]}
                            renderItem={item => (<List.Item extra>{item}</List.Item>)}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    }
}
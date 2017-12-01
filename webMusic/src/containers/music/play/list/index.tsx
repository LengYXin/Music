import * as React from 'react'
import { observer, inject } from 'mobx-react';
// import { Row as row, Col, Icon } from 'antd';
import Col from 'antd/lib/grid/col';
import row  from 'antd/lib/grid/row';
import Icon from 'antd/lib/icon';

const Row: any = row;
import './style.css'
import {Help} from "../../../../utils"
@inject('playStore')
@observer
export default class extends React.Component<any, any> {
    componentDidMount() {
        document.addEventListener("click", e => {
            if (this.props.playStore.showList) {
                this.props.playStore.updateShowList();
            }
        });
    }
    singer(text) {
        let names = text.ar && text.ar.map(x => {
            return x.name
        }) || [];
        return names.join(" / ");
    }
    selectPlay(index) {
        this.props.playStore.play(index);
    }
    render() {
        return (
            <div onClick={e => { e.stopPropagation(); e.nativeEvent.stopImmediatePropagation(); }} className={(this.props.playStore.showList ? "play-list-body play-list-show " : "play-list-body play-list-hide ") + this.props.className}>
                <h3>播放列表 ({this.props.playStore.playList.length})</h3>
                <Row className="play-list-title">
                    <Col span={1}>
                    </Col>
                    <Col span={11}>
                        <div>名称</div>
                    </Col>
                    <Col span={9}>
                        <div>歌手</div>
                    </Col>
                    <Col span={3}>
                        <div>时长</div>
                    </Col>
                </Row>
                <div className="play-list" >
                    {
                        this.props.playStore.playList.map((x, i) => {
                            let play = this.props.playStore.currentIndex == i;
                            return (<Row title={"播放 ：" + x.name} className={"play-list-item " + (play ? "play" : "")} key={x.id} onClick={e => {
                                this.selectPlay(i);
                            }}  >
                                <Col span={1}>
                                    <div>{play ? <Icon type="caret-right" /> : null}</div>
                                </Col>
                                <Col span={11}>
                                    <div>{x.name}</div>
                                </Col>
                                <Col span={9}>
                                    <div>{this.singer(x)}</div>
                                </Col>
                                <Col span={3}>
                                    <div>{Help.DateFormat(x.dt, "mm:ss")}</div>
                                </Col>
                            </Row>)
                        }
                        )
                    }
                </div>
            </div>
        )
    }
}
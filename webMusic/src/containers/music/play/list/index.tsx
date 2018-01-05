import * as React from 'react'
import { observer, inject } from 'mobx-react';
// import { Row as row, Col, Icon } from 'antd';
import Col from 'antd/lib/grid/col';
import row from 'antd/lib/grid/row';
import Icon from 'antd/lib/icon';

const Row: any = row;
import './style.css'
import { Help } from "../../../../utils"
@inject('playStore', 'windowsStore')
@observer
export default class extends React.Component<any, any> {
    componentDidMount() {
        document.addEventListener("click", e => {
            if (this.props.windowsStore.isMini) {
                return;
            }
            if (this.props.playStore.playParam.showList) {
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
    renderTitle() {
        if (this.props.type) {
            return null;
        }
        return <div>
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
        </div>
    }
    renderItem(x, i) {

        let play = this.props.playStore.currentIndex == i;
        if (this.props.type) {
            return (<Row title={"播放 ：" + x.name} className={"play-list-item " + (play ? "play" : "")} key={x.id} onClick={e => {
                this.selectPlay(i);
            }}  >
                <Col span={1}>
                    <div>{play ? <Icon type="caret-right" /> : null}</div>
                </Col>
                <Col span={11}>
                    <div>{x.name}</div>
                </Col>
            </Row>)
        }
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
    render() {
        return (
            <div onClick={e => { e.stopPropagation(); e.nativeEvent.stopImmediatePropagation(); }} className={(this.props.playStore.playParam.showList ? "play-list-body play-list-show footer" : "play-list-body play-list-hide footer")}>
                {this.renderTitle()}
                <div className="play-list" >
                    {
                        this.props.playStore.playList.map((x, i) => this.renderItem(x, i))
                    }
                </div>
            </div>
        )
    }
}
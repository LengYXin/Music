import * as React from "react";
import { inject, observer } from "mobx-react";
import Animate from 'rc-animate';

/**
 * 图片
 */
@inject('playStore')
@observer
export class MusicImg extends React.Component<any, any> {
    render() {
        const play = this.props.playStore.current.play || {};
        return <img alt="" src={(play.al ? play.al.picUrl + "?param=300y300" : globalMusic.defaultImg)} />
    }
}
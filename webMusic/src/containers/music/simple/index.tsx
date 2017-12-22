import * as React from 'react'
import { observer, inject } from 'mobx-react';
import Animate from 'rc-animate';
import './style.css'
import Normal from "./normal"
// import Mini from "./mini"
import Screen from "./screen"

/**
 * 菜单左边 播放迷你界面
 */
@inject('playStore')
@observer
export class MusicPlaySimpleComponent extends React.Component<any, any> {

    renderMini() {
        if (this.props.playStore.playParam.patternSimpleStyle == "normal") {
            return <Normal />
        }
        return <Screen />
    }
    render() {
     
        return <Animate transitionName="fade"
            transitionAppear={true} component=""> 
            <div className={"music-simple-body " + this.props.playStore.playParam.patternSimpleStyle}>
                {this.renderMini()}
            </div>
        </Animate>
    }
}
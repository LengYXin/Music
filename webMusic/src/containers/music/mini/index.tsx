import * as React from 'react'
import { observer, inject } from 'mobx-react';
import Animate from 'rc-animate';
import './style.css'
import Normal from "./normal"
import Mini from "./mini"
import Screen from "./screen"

@inject('playStore', 'windowsStore')
@observer
export class MusicPlayMiniComponent extends React.Component<any, any> {
 
    renderMini() {
        if (this.props.playStore.playParam.patternMiniStyle == "normal") {
            return <Normal />
        }
        if (this.props.playStore.playParam.patternMiniStyle == "mini") {
            return <Mini />
        }
        return <Screen/>
    }
    render() {
        return <Animate transitionName="fade"
            transitionAppear={true} component="">
            <div className={"music-mini-body " + this.props.playStore.playParam.patternMiniStyle}>
                {this.renderMini()}
            </div>
        </Animate>
    }
}
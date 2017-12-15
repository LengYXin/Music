import * as React from 'react'
import { observer, inject } from 'mobx-react';

import './style.css'
import Normal from "./normal"
import Mini from "./mini"

@inject('playStore','windowsStore')
@observer
export class MusicPlayMiniComponent extends React.Component<any, any> {
    onAlt() {
        this.props.playStore.updatePatternMiniStyle();
        this.props.windowsStore.onMini(false);
    }
    renderMini() {
        if (this.props.playStore.playParam.patternMiniStyle == "normal") {
            return <Normal />
        }
        if (this.props.playStore.playParam.patternMiniStyle == "mini") {
            return <Mini />
        }
        return <div onClick={this.onAlt.bind(this)}>Null</div>
    }
    render() {
        return <div className={"music-mini-body " + this.props.playStore.playParam.patternMiniStyle}>
            {this.renderMini()}
        </div>
    }
}
import * as React from "react";
import { inject, observer } from "mobx-react";
import Animate from 'rc-animate';

@inject('playStore')
@observer
export class MusicImg extends React.Component<any, any> {
    render() {
        const play = this.props.playStore.current.play || {};
        return (
            <Animate transitionName="fade" transitionAppear={true} component="">
                <div key="1">
                    <div  className={this.props.playStore.playParam.playState ? "audio-img-pic play" : "audio-img-pic "}>
                        <img alt="" src={(play.al ? play.al.picUrl + "?param=400y400" : globalMusic.defaultImg)} />
                    </div>
                </div>
            </Animate >

        )
    }
}
import * as React from "react";
import { inject, observer } from "mobx-react";
import Animate from 'rc-animate';
import { MusicImg } from "./musicImg";

/**
 * 播放滚动图片
 */
@inject('playStore')
@observer
export class PlayImg extends React.Component<any, any> {
    render() {
        const playState = this.props.playStore.playParam.playState;
        return (
            <Animate transitionName="fade" transitionAppear={true} component="">
                <div key="1">
                    <div className={playState ? "audio-img-pic play" : "audio-img-pic "}>
                        <MusicImg />
                    </div>
                </div>
            </Animate >

        )
    }
}
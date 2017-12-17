import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import Animate from 'rc-animate';
import { Lyric, MusicImg } from '../../details/index';


@inject('playStore')
@observer
export default class extends React.Component<any, any> {
    updateShowLyric() {
        this.props.playStore.updateShowLyric();
    }
    render() {
        // console.log(this.props.playStore.playParam.showLyric);
        return (
            <div className="AudioPlay-details" onClick={this.updateShowLyric.bind(this)}>
                {this.props.playStore.playParam.showLyric && this.props.playStore.playParam.patternStyle == "screen" ? <Lyric /> : <MusicImg />}
            </div>
        )
    }
}

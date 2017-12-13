import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
@inject('playStore')
@observer
export default class extends React.Component<any, any> {
    render() {
        const play = this.props.playStore.current.play || {};
        return (
            <div className="AudioPlay-details">
                <div className={this.props.playStore.playParam.playState ? "AudioPlay-img-pic play" : "AudioPlay-img-pic "}>
                    <img  alt=""src={(play.al && play.al.picUrl + "?param=400y400") || globalMusic.defaultImg}/>
                </div>
            </div>
        )
    }
}
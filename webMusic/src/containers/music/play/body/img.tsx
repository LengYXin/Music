import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
@inject('musictStore', 'playStore')
@observer
export default class extends React.Component<any, any> {
    render() {
        const play = this.props.musictStore.current.play || {};
        return (
            <div className="AudioPlay-details">
                <div className={this.props.playStore.playState ? "AudioPlay-img-pic play" : "AudioPlay-img-pic "}>
                    <img src={(play.al && play.al.picUrl + "?param=400y400") || "/assets/img/default_album.jpg"}/>
                </div>
            </div>
        )
    }
}
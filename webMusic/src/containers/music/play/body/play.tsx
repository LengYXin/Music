import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import { AudioPlay } from "../../audioPlay"

export default class extends React.Component<any, any> {
    render() {
        // console.log("play", this);
        return (
            <div className="AudioPlay-play">
                <MusicName />
                <AudioPlay />
            </div>
        )
    }
};
@inject('playStore')
@observer
class MusicName extends React.Component<any, any> {
    render() {
        const play = this.props.playStore.current.play || {};
        return (
            <span className="AudioPlay-play-name">{play.name}</span>
        )
    }
}
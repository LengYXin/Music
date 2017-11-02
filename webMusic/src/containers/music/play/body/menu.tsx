import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import { AudioPlay } from "../../audioPlay"
@inject('musictStore')
@observer
export default class extends React.Component<any, any> {
    render() {
        return (
                <div className="AudioPlay-menu">
                    <span>
                        {this.props.musictStore.playList.length}
                    </span>
                </div>
        )
    }
}
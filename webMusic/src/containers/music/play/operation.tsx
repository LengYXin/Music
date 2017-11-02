import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import QueueAnim from 'rc-queue-anim';
import './style.css'

import { AudioPlay } from "../../../components"
@inject('musictStore')
@observer
export default class extends React.Component<any, any> {
    render() {
        console.log("PlayOperation", this);
        return (
            <div className="AudioPlay-operation">
                <span>点我放大</span>
            </div>
        )
    }
}
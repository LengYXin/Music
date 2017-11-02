import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import QueueAnim from 'rc-queue-anim';
import './style.css'

import PlayBody from "./body/index"
import PlayOperation from "./operation"

export class MusicPlayComponent extends React.Component<any, any> {
    render() {
        return [
            <PlayOperation key="operation" />
            ,
            <PlayBody key="body" />
        ]
    }
}
import * as React from 'react'
import { observer, inject } from 'mobx-react';
import './style.css'

import PlayBody from "./body/index"
import PlayList from "./list/index"
import PlayOperation from "./operation"
@inject('playStore')
@observer
export class MusicPlayComponent extends React.Component<any, any> {
    render() {
        return [
            // <PlayOperation key="operation" className={this.props.playStore.playParam.patternStyle} />
            // ,
            <PlayBody key="body" className={this.props.playStore.playParam.patternStyle}/>,
            <PlayList key="list" className={this.props.playStore.playParam.patternStyle}/>
        ]
    }
}
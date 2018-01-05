import * as React from 'react'
import { observer, inject } from 'mobx-react';
import './style.css'
import Mini from "./mini";
import PlayBody from "./body/index"
import PlayList from "./list/index"
import PlayOperation from "./operation"
@inject('playStore', 'windowsStore')
@observer
export class MusicPlayComponent extends React.Component<any, any> {
    render() {
        if (this.props.windowsStore.isMini) {
            return <div className="music-play-mini">
                <Mini />
                <PlayList type="mini"/>
            </div>;
        }
        return [
            <PlayBody key="body" />,
            <PlayList key="list" />
        ]
    }
}
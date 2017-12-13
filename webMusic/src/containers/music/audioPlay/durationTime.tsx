import * as React from 'react'
import { observer, inject } from 'mobx-react';
@inject('playStore')
@observer
export default class extends React.Component<any, any> {
    render() {
        return (
            <span className="play-progress-time duration ">{this.props.playStore.timeParam.duration.timeStr}</span>
        );
    }
}

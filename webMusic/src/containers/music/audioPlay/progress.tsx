import * as React from 'react'
import { observer, inject } from 'mobx-react';
@inject('playStore')
@observer
export default class extends React.Component<any, any> {
    progressInner(pro: HTMLDivElement) {
        // console.log(pro);
        pro.addEventListener("click", e => {
            this.props.playStore.updateCurrentTime(e.offsetX / pro.offsetWidth);
        });
    };
    componentDidMount() {
        this.progressInner(this.refs["progressInner"] as any);
    }
    render() {
        return (
            <div className="play-progress-inner" ref="progressInner">
                <div className="play-progress-bg cache" style={{ width: this.props.playStore.cacheTime + "%" }} ></div>
                <div className="play-progress-bg" style={{ width: this.props.playStore.currentProportion + "%" }} ></div>
                <span className="play-btn" style={{ left: this.props.playStore.currentProportion + "%" }} >
                    <i></i>
                </span>
            </div>
        );
    }
}

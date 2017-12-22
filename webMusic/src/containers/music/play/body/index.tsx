import * as React from 'react'
import { observer, inject } from 'mobx-react';
import './style.css'
import Btns from "./btns";
import Details from "./details";
import Play from "./play";
import Menu from "./menu";

import Mini from "../mini";

/**
 * 播放器
 */
@inject('windowsStore')
@observer
export default class extends React.Component<any, any> {
    render() {
        if (this.props.windowsStore.isMini) {
            return <Mini />
        }
        return (
            <div className={"audio-body " + this.props.className}>
                <div className="audio-content">
                    {/* {this.props.className == "footer" ? <Btns /> : null} */}
                    {/* <Details /> */}
                    <Btns />
                    <Play />
                    {/* {this.props.className == "screen" ? <Btns /> : null} */}
                    <Menu />
                </div>
            </div>
        )
    }
}
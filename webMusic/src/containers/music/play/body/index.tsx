import * as React from 'react'
import { observer, inject } from 'mobx-react';
import './style.css'
import Btns from "./btns";
import Details from "./details";
import Play from "./play";
import Menu from "./menu";


/**
 * 播放器
 */
export default class extends React.Component<any, any> {
    render() {
        return (
            <div className={"audio-body footer"}>
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
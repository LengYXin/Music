import * as React from 'react'
import { observer, inject } from 'mobx-react';

import Btns from "./btns";
import Img from "./img";
import Play from "./play";
import Menu from "./menu";

export default class extends React.Component<any, any> {
    render() {
        return (
            <div className="AudioPlay-body">
                <Btns/>
                <Img/>
                <Play/>
                <Menu/>
            </div>
        )
    }
}
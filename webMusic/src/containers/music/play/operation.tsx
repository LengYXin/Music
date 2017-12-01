import * as React from 'react'
import { observer, inject } from 'mobx-react';

import './style.css'
import { AudioPlay } from "../../../components"
// import { Icon } from 'antd';
import Icon from 'antd/lib/icon';

@inject('playStore')
@observer
export default class extends React.Component<any, any> {
    onClick() {
        let style = this.props.playStore.patternStyle == "footer" ? 'screen' : 'footer';
        this.props.playStore.updatePatternStyle(style);
    }
    render() {
        // console.log("PlayOperation", this);
        return (
            <div className={"AudioPlay-operation " + this.props.className}>
                <span onClick={this.onClick.bind(this)}>
                    <Icon type={this.props.className=="footer"?"arrows-alt":"shrink"} />
                </span>
            </div>
        )
    }
}
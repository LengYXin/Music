import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import QueueAnim from 'rc-queue-anim';
// import { Card } from 'antd';
import './style.css';
import Card from 'antd/lib/card';
const gridStyle = {
    width: '25%',
    height: "287px",
    textAlign: 'center',
};
/**
 * 个性推荐
 */
@inject('songSheetStore')
@observer
export default class  extends React.Component<any, any> {
    render() {
        if (this.props.songSheetStore.resource && this.props.songSheetStore.resource.length) {
            return (
                <QueueAnim key="queue"
                    leaveReverse
                >
                    <h3 style={{ textAlign: "left", padding: "2px" }}>推荐歌单</h3>
                    <Card>
                        {this.props.songSheetStore.resource.map(x => {
                            return <Card.Grid style={gridStyle} key={x.id}>
                                <Link to={x.to}>
                                    <div className="custom-image">
                                        <img alt="" width="100%" src={x.img} />
                                    </div>
                                    <div className="custom-card">
                                        <h3> {x.name}</h3>
                                    </div>
                                </Link>
                            </Card.Grid>
                        })}
                    </Card>
                </QueueAnim>

            )
        }
        return <div className="text-center">没有歌单</div>
    }
}
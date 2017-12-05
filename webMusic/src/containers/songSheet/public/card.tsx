import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import QueueAnim from 'rc-queue-anim';
// import { Card, Tag } from 'antd';
import './style.css'
import Grid from 'antd/lib/card/Grid';
import Row from 'antd/lib/grid/row';
import Col from 'antd/lib/grid/col';
import Card from 'antd/lib/card';

declare interface songSheet {
    songSheet: {
        to?: string,
        img?: string,
        name?: string
    } | any[],
    style?: React.CSSProperties
}
export class SSCardComponent extends React.Component<songSheet, any> {
    render() {
        const { songSheet } = this.props;
        if (Array.isArray(songSheet)) {
            return <Row type="flex" justify="start">
                {songSheet.map((x, i) => {
                    return <Col span={6} key={i}>
                        <Card className="ant-card-contain-grid">
                            <SSCard songSheet={x} />
                        </Card>
                    </Col>
                })}
            </Row>
        } else {
            return <Card className="ant-card-contain-grid">
                <SSCard songSheet={songSheet} />
            </Card>
        }
    }
}
class SSCard extends React.Component<{
    songSheet: {
        to?: string,
        img?: string | Function,
        name?: string
    }, style?: React.CSSProperties
}, any> {
    renImg() {
        const { songSheet } = this.props;
        if (typeof songSheet.img == "string") {
            return <img alt="" width="100%" height="100%" src={songSheet.img} />;
        } else {
            return songSheet.img();
        }
    }
    render() {
        const { songSheet } = this.props;
        return <Grid style={this.props.style || { width: '100%', textAlign: 'center', }} className="s-s-card">
            <Link to={songSheet.to} className="s-s-body">
                <div className="s-s-image">
                  {this.renImg()}
                </div>
                <div className="s-s-txt">
                    <span> {songSheet.name}</span>
                </div>
            </Link>
        </Grid>
    }
}

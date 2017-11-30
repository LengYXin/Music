import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import QueueAnim from 'rc-queue-anim';
import { Card, Carousel } from 'antd';
import './style.css'

/**
 * 个性推荐
 */
@inject('recommendStore')
@observer
export default class extends React.Component<any, any> {
    render() {
        return (
            <Carousel >
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </Carousel>
        )
    }
}
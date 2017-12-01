import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import QueueAnim from 'rc-queue-anim';
// import { Card } from 'antd';
import './style.css';
import Banner from "./banner";
import Resource from "./resource";

/**
 * 个性推荐
 */
export class PersonalityComponent extends React.Component<any, any> {
    render() {
        return [
            <Banner key="1"/>,
            <Resource key="2"/>,
        ]
    }
}
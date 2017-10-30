import * as React from 'react'
import createReactClass from "create-react-class"
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { renderRoutes, RouteConfig, RouteConfigComponentProps } from 'react-router-config'
// import { Spin } from 'antd';
import { observer, inject } from 'mobx-react';
// import CSSTransition from 'react-transition-group/CSSTransition';
import QueueAnim from 'rc-queue-anim';

import * as containers from "./containers"
@inject('UserContextStore')
@observer
export default class RootRoutes extends React.Component<any, any> {
    NoMatch = ({ location }) => (
        <div>
            <h3>无法匹配 <code>{location.pathname}</code></h3>
        </div>
    )
    // 创建过渡动画
    createCSSTransition = (Component: any, classNames = "fade") => {
        // return Component;  
        return createReactClass({
            getInitialState: function () {
                return {
                    CSSTransitionShow: false
                };
            },
            componentDidMount: function () {
                this.setState({ CSSTransitionShow: true });
            },
            render: function () {
                // return (
                //     <CSSTransition in={this.state.CSSTransitionShow} timeout={500} classNames={classNames}>
                //         <Component {...this.props} />
                //     </CSSTransition>
                // );
                return (
                    <QueueAnim type="scale" delay={100} animConfig={[
                        { opacity: [0.95, 0], },
                        { opacity: [0.95, 0], }
                    ]} >
                        <Component key="1" {...this.props} />
                    </QueueAnim >
                );
            },
        });
    }
    routes: RouteConfig[] = [
        {
            component: this.createCSSTransition(containers.RootApp),
            routes: [
                {
                    path: "/",
                    exact: true,
                    component: this.createCSSTransition(containers.DiscoverMusicComponent),
                },
                {
                    path: "/ssd/:id",
                    component: this.createCSSTransition(containers.songSheetDetailsComponent),
                },
                // {
                //     path: "/music/:id",
                //     component: this.createCSSTransition(containers.MusicPlayComponent),
                // },
                // 没有匹配的路由
                {
                    component: this.createCSSTransition(this.NoMatch)
                }
            ],
        },

    ]
    render() {

        return (
            <BrowserRouter>
                {renderRoutes(this.routes)}
            </BrowserRouter>
        );
    }
}

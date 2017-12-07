import * as React from 'react'
import createReactClass from "create-react-class"
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { renderRoutes, RouteConfig, RouteConfigComponentProps } from 'react-router-config'
// import { Spin } from 'antd';
import { observer, inject } from 'mobx-react';
// import CSSTransition from 'react-transition-group/CSSTransition';
// import QueueAnim from 'rc-queue-anim';
import Animate from 'rc-animate';

import * as containers from "./containers"
// @inject('UserContextStore')
// @observer
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
            // getInitialState: function () {
            //     return {
            //         CSSTransitionShow: false
            //     };
            // },
            // componentDidMount: function () {
            //     this.setState({ CSSTransitionShow: true });
            // },
            render: function () {
                // return (
                //     <CSSTransition in={this.state.CSSTransitionShow} timeout={500} classNames={classNames}>
                //         <Component {...this.props} />
                //     </CSSTransition>
                // );
                // console.log(this.props);
                return (
                    <Animate transitionName="fade"
                        transitionAppear={true} component="">
                        <Component key="1" {...this.props} />
                    </Animate  >
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
                    component: this.createCSSTransition(containers.HomeComponent),
                },
                {
                    //发现音乐
                    path: "/find",
                    component: this.createCSSTransition(containers.FindMusicComponent),
                    routes: [

                        {//歌单
                            path: "/find/ss",
                            component: this.createCSSTransition(containers.SongSheetComponent),
                        },
                        {//个性推荐
                            // path: "/find/",
                            component: this.createCSSTransition(containers.PersonalityComponent),
                        },
                    ]
                },
                {
                    //歌单详情
                    path: "/ssd/:id",
                    component: this.createCSSTransition(containers.songSheetDetailsComponent),
                },
                {
                    // MV
                    path: "/mv",
                    exact: true,
                    component: this.createCSSTransition(containers.MVComponent),
                },
                {
                    //MV详情
                    path: "/mv/:id",
                    component: this.createCSSTransition(containers.MVDetailsComponent),
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

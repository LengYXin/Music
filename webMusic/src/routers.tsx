import * as React from 'react'
import createReactClass from "create-react-class"
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { renderRoutes, RouteConfig, RouteConfigComponentProps } from 'react-router-config'
// import { Spin } from 'antd';
import { observer, inject } from 'mobx-react';
// import CSSTransition from 'react-transition-group/CSSTransition';
// import QueueAnim from 'rc-queue-anim';
import Animate from 'rc-animate';
import Loadable from 'react-loadable';
// import * as containers from "./containers"
const Loading = () => <div className="music-loading ">
    <div className="music-loading-icon">
        <i className="musicicon musicicon-8"></i>
    </div>
    加载中...
</div>;


// @inject('UserContextStore')
// @observer
export default class RootRoutes extends React.Component<any, any> {
    NoMatch = ({ location }) => (
        <div>
            <h3>无法匹配 <code>{location.pathname}</code></h3>
        </div>
    )
    // 创建过渡动画
    createCSSTransition = (Component: any, content = true, classNames = "fade") => {
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
                    <Animate transitionName={classNames}
                        transitionAppear={true} component="">
                        {content ?
                            <div className="root-content">
                                <Component key="1" {...this.props} />
                            </div>
                            :
                            <Component key="1" {...this.props} />
                        }
                    </Animate  >
                );
            },
        });
    };
    // 组件加载动画
    Loading = () => (
        <div className="music-loading ">
            <div className="music-loading-icon">
                <i className="musicicon musicicon-8"></i>
            </div>
            加载中...
       </div>
    );
    /**
     * 组件加载
     * @param Component 组件 
     * @param Animate 路由动画 
     * @param Loading 加载动画
     */
    Loadable(Component, Animate = true, Loading = this.Loading, cssTranParams = { content: true, classNames: "fade" }) {
        if (!Loading) {
            Loading = () => null;
        }
        const loadable = Loadable({ loader: () => Component, loading: Loading });
        if (Animate) {
            return this.createCSSTransition(loadable, cssTranParams.content, cssTranParams.classNames);
        }
        return loadable;
    };
    routes: RouteConfig[] = [
        {
            component: this.Loadable(import('./containers/root').then(x => x.RootApp), false),
            routes: [
                {
                    path: "/",
                    exact: true,
                    component: this.Loadable(import('./containers/home').then(x => x.HomeComponent), false),
                },
                {
                    //发现音乐
                    path: "/find",
                    component: this.Loadable(import('./containers/findMusic').then(x => x.FindMusicComponent), true, null),
                    // component: HomeTest,
                    routes: [

                        {//歌单
                            path: "/find/ss",
                            component: this.Loadable(import('./containers/songSheet').then(x => x.SongSheetComponent), false),
                        },
                        {//个性推荐
                            // path: "/find/",
                            component: this.Loadable(import('./containers/songSheet').then(x => x.PersonalityComponent), false),
                        },
                    ]
                },
                {
                    //歌单详情
                    path: "/ssd/:id",
                    component: this.Loadable(import('./containers/songSheet').then(x => x.songSheetDetailsComponent)),
                },
                {
                    // MV
                    path: "/mv",
                    exact: true,
                    component: this.Loadable(import('./containers/mv').then(x => x.MVComponent)),
                },
                {
                    //MV详情
                    path: "/mv/:id",
                    component: this.Loadable(import('./containers/mv').then(x => x.MVDetailsComponent)),
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

import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { renderRoutes, RouteConfig, RouteConfigComponentProps } from 'react-router-config'
import { observer, inject } from 'mobx-react';
import CSSTransition from 'react-transition-group/CSSTransition';

import HeaderR from "./header";
import FooterR from "./footer";
import Body from "./body";
import Menu from "./menu";
import { MusicPlaySimpleComponent } from "../music"
import Layout from 'antd/lib/layout';
const { Header, Footer, Sider, Content } = Layout;
import './style.css'
/**
 * RootApp
 */
// @inject('windowsStore')
// @observer
export class RootApp extends React.Component<any, any>{
    componentDidMount() {
    }
    render() {
        // console.log(this.props.windowsStore.isMini);
        // if (this.props.windowsStore.isMini) {
        //     return <MusicPlayMiniComponent />
        // }
        console.log("RootApp");
        return (
            <Layout className="skin-default" style={{ height: '100vh' }}>
                <Header className="root-header">
                    <HeaderR  {...this.props} />
                </Header>
                <Layout className="root-Layout">
                    <Menu  {...this.props} />
                    {/* </Sider> */}
                    <Content>
                        <Body  {...this.props} />
                    </Content>
                    <MusicPlaySimpleComponent />
                </Layout>
                <div style={{ height: " 3.75rem", flex: " 0 0 auto" }}></div>
                <FooterR />
            </Layout>
        );
    }
}
import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { renderRoutes, RouteConfig, RouteConfigComponentProps } from 'react-router-config'
import { observer, inject } from 'mobx-react';
import CSSTransition from 'react-transition-group/CSSTransition';

import HeaderR from "./header";
import FooterR from "./footer";
import Body from "./body";
import Menu from "./menu";
import { MusicPlayMiniComponent } from "../music"
import Layout from 'antd/lib/layout';
const { Header, Footer, Sider, Content } = Layout;
import './style.css'
/**
 * RootApp
 */
@inject('windowsStore')
@observer
export class RootApp extends React.Component<any, any>{
    componentDidMount() {
    }
    render() {
        if (this.props.windowsStore.isMini) {
            return <MusicPlayMiniComponent />
        }
        return (
            <Layout className="skin-default" style={{ height: '100vh' }}>
                <Header className="root-header">
                    <HeaderR  {...this.props} />
                </Header>
                <Layout style={{ position: "relative" }}>
                    <Sider style={{ overflow: 'auto', borderRight: " 1px solid #4e4e4e" }}>
                        <Menu  {...this.props} />
                    </Sider>
                    <Content>
                        <Body  {...this.props} />
                    </Content>
                    <MusicPlayMiniComponent />
                </Layout>
                <FooterR />
            </Layout>
        );
    }
}
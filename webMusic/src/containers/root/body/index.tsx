import * as React from 'react'
import { renderRoutes, RouteConfig, RouteConfigComponentProps } from 'react-router-config'
import { Menu, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;
const Item = Menu.Item;
export default class extends React.Component<any, any>{
    componentDidMount() {
    }
    render() {
        return <div className="root-body">
            <div className="container">
                {renderRoutes(this.props.route.routes)}
            </div>
        </div>;
    }
}
import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
// import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { observer, inject } from 'mobx-react';
import './style.css'
@inject('UserContextStore', 'recommendStore')
@observer
export class HomeComponent extends React.Component<any, any> {
    render() {
        console.log(this.props);
        return <div>
            首页{JSON.stringify(this.props.UserContextStore.UserContext)}
        </div>
    }
}
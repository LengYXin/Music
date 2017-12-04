import * as React from 'react'
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import Avatar from 'antd/lib/avatar';
import Popover from 'antd/lib/popover';
import Icon from 'antd/lib/icon';
import Modal from 'antd/lib/modal/Modal';
import Button from 'antd/lib/button/button';
import './style.css'
@inject('UserContextStore')
@observer
export class HeaderUserComponent extends React.Component<any, any>{
    componentDidMount() {
    }

    render() {
        const { UserContext = {}, login } = this.props.UserContextStore;
        const { profile = {} } = UserContext;
        console.log("profile", profile);
        return login ? (
            <Popover content={this.content()} placement="bottom" trigger="click"><div className="header-user-body">
                <Avatar size="large" src={profile.avatarUrl} />
                <span className="header-user-nickname">{profile.nickname}  <Icon type="down" /></span>
            </div>
            </Popover>
        )
            : <LoginModal />
            ;
    }
    content() {
        return <div className="header-user-context">
            <p>Content</p>
            <p>Content</p>
        </div>
    }

}
@inject('UserContextStore')
class LoginModal extends React.Component<any, any>{
    state = {
        modal: false
    }
    onShowLogin() {
        this.setState({ modal: !this.state.modal });
    }
    onLogin() {
        this.props.UserContextStore.onLogin({ phone: "18611752863", password: "leng5201314" });
    }
    render() {
        // 登录框配置
        const modal = {
            // title: "登录",
            wrapClassName: "vertical-center-modal login-modal",
            // bodyStyle:"login-modal",
            width: 350,
            visible: this.state.modal,
            footer: null,
            onCancel: this.onShowLogin.bind(this),
        };
        return <div className="header-user-body" onClick={this.onShowLogin.bind(this)}>
            <Avatar size="large" icon="user" />
            <span className="header-user-nickname">未登录  <Icon type="down" /></span>
            <Modal {...modal} >
                <Button type="primary"  onClick={this.onLogin.bind(this)}>
                    登录
        </Button>
            </Modal>
        </div>
    }
}
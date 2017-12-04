import * as React from 'react'
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import Avatar from 'antd/lib/avatar';
import Popover from 'antd/lib/popover';
import Icon from 'antd/lib/icon';
import Modal from 'antd/lib/modal/Modal';
import Button from 'antd/lib/button/button';
import './style.css'
import Form from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import Input from 'antd/lib/input/Input';
import Alert from 'antd/lib/alert';
import Row from 'antd/lib/grid/row';
import Col from 'antd/lib/grid/col';
@inject('UserContextStore')
@observer
export class HeaderUserComponent extends React.Component<any, any>{
    componentDidMount() {
    }
    avatar(icon?) {
        const { UserContext = {} } = this.props.UserContextStore;
        const { profile = {} } = UserContext;
        return [
            <Avatar size="large" src={profile.avatarUrl} key="1" />,
            <span className="header-user-nickname" key="2">{profile.nickname}  <Icon type={icon} /></span>
        ]
    }
    render() {
        const { login } = this.props.UserContextStore;
        return login ? (
            <Popover overlayClassName="header-user-Popover" content={this.content()} placement="bottom" trigger="click"><div className="header-user-body">
                {this.avatar("down")}
            </div>
            </Popover>
        )
            : <LoginModal />
            ;
    }
    onLoginOut() {
        this.props.UserContextStore.onLoginOut();
    }
    content() {
        const { UserContext = {} } = this.props.UserContextStore;
        const { profile = {} } = UserContext;

        return <div className="header-user-context">
            <Row style={{ height: 40 }}>
                <Col span={18} className="user-context">{this.avatar()}</Col>
                <Col span={6} className="user-context">   <Button>签到</Button></Col>
            </Row>
            <Row style={{ padding: "5px 0" }}>
                <Col span={8} className="user-context column-reverse"><div>{profile.eventCount}</div> <div>动态</div> </Col>
                <Col span={8} className="user-context column-reverse"><div>{profile.follows}</div><div>关注</div></Col>
                <Col span={8} className="user-context column-reverse"><div>{profile.followeds}</div><div>粉丝</div></Col>
            </Row>
            <Row className="user-row" >
                <Col span={12} className="user-context"> <Icon type="github" /> <span>我的会员</span></Col>
                <Col span={12} className="user-context"> <Icon type="right" /></Col>
            </Row>
            <Row className="user-row" >
                <Col span={12} className="user-context"> <Icon type="github" /> <span>等级</span></Col>
                <Col span={12} className="user-context"> <Icon type="right" /></Col>
            </Row>
            <Row className="user-row" >
                <Col span={12} className="user-context"> <Icon type="github" /> <span>积分商城</span></Col>
                <Col span={12} className="user-context"> <Icon type="right" /></Col>
            </Row>
            <Row className="user-row" >
                <Col span={12} className="user-context"> <Icon type="github" /> <span>个人信息设置</span></Col>
                <Col span={12} className="user-context"> <Icon type="right" /></Col>
            </Row>
            <Row className="user-row" >
                <Col span={12} className="user-context"> <Icon type="github" /> <span>绑定社交账号</span></Col>
                <Col span={12} className="user-context"> <Icon type="right" /></Col>
            </Row>
            <Row className="user-row" >
                <Col span={12} className="user-context"> <Icon type="github" /> <span>导入歌单</span></Col>
                <Col span={12} className="user-context"> <Icon type="right" /></Col>
            </Row>
            <Row className="user-row" {...{ onClick: this.onLoginOut.bind(this) }}>
                <Col span={12} className="user-context"> <Icon type="github" /> <span>退出登录</span></Col>
                <Col span={12} className="user-context"> <Icon type="right" /></Col>
            </Row>
        </div>
    }

}
/**
 * 登录  表单 
 */
@inject('UserContextStore')
class NormalLoginForm extends React.Component<any, any> {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.UserContextStore.onLogin(values.Phone, values.Password);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('Phone', {
                        // rules: [{ required: false, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Phone" />
                        )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('Password', {
                        // rules: [{ required: false, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="Password" placeholder="Password" />
                        )}
                </FormItem>
                <FormItem>
                    <Button htmlType="submit" className="login-form-button">
                        登录
            </Button>
                </FormItem>
            </Form>
        );
    }
}
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

class LoginModal extends React.Component<any, any>{
    state = {
        modal: false
    }
    onShowLogin() {
        this.setState({ modal: !this.state.modal });
    }
    onLogin() {
        this.props.UserContextStore.onLogin();
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
                <img className="login-back" src="/assets/img/login.png" alt="" height="168" width="350" />
                <WrappedNormalLoginForm />
                <Alert
                    message="Warning"
                    description="登录API 只能使用手机登录，其他方式被网易和谐了。代码开源，不放心的账号安全留空，默认使用开发者网易账号登录"
                    type="warning"
                    showIcon
                />
            </Modal>
        </div>
    }
}


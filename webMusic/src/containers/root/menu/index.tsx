import * as React from 'react'
// import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import { inject, observer } from 'mobx-react';
import Sider from 'antd/lib/layout/Sider';
const { Item, ItemGroup } = Menu;
@inject('UserContextStore', 'playStore')
@observer
export default class extends React.Component<any, any>{
    componentDidMount() {
    }
    render() {
        const { userPlaylist = [] } = this.props.UserContextStore;
        const create = userPlaylist.filter(x => x.createYourself)
        const nocreate = userPlaylist.filter(x => !x.createYourself)
        // 选中的 列表项
        let pathname = this.props.location.pathname;
        if (pathname.indexOf("find/") > 0) {
            pathname = "/find";
        }
        let sidercss = this.props.playStore.playParam.showSimple ? "root-Layout-Sider simple-show" : "root-Layout-Sider";
        return (
            <Sider className={sidercss}>

                <nav className="nav">

                    <Menu theme="dark" selectedKeys={[pathname]}>
                        <ItemGroup key="g1" title="推荐">
                            <Item key="/find">
                                <Link to="/find"><i className="musicicon musicicon-10"></i> 发现音乐</Link>
                            </Item>
                            <Item key="/fm">
                                <Link to="/fm"><i className="musicicon musicicon-10"></i> 私人FM</Link>
                            </Item>
                            <Item key="/mv">
                                <Link to="/mv"> <i className="musicicon musicicon-10"></i> MV</Link>
                            </Item>
                            <Item key="/rriend">
                                <Link to="/rriend">  <i className="musicicon musicicon-10"></i> 朋友</Link>
                            </Item>
                        </ItemGroup>
                        <ItemGroup key="g2" title="我的音乐">
                            <Item key="/yun">
                                <Link to="/yun">   <i className="musicicon musicicon-10"></i> 音乐云盘</Link>
                            </Item>
                            <Item key="/singer">
                                <Link to="/singer">       <i className="musicicon musicicon-10"></i> 我的歌手</Link>
                            </Item>
                            <Item key="/radio">
                                <Link to="/radio">   <i className="musicicon musicicon-10"></i> 我的电台</Link>
                            </Item>
                        </ItemGroup>
                        {create.length ? <ItemGroup key="user1" title="创建的歌单">
                            {create.map(x => <Item key={x.to} title={x.name}>
                                <Link to={x.to} className="text-ellipsis"> <i className="musicicon musicicon-10"></i> {x.name}</Link>
                            </Item>)}

                        </ItemGroup> : null}
                        {nocreate.length ? <ItemGroup key="user2" title="收藏的歌单">
                            {nocreate.map(x => <Item key={x.to} title={x.name}>
                                <Link to={x.to} className="text-ellipsis"><i className="musicicon musicicon-10"></i> {x.name}</Link>
                            </Item>)}
                        </ItemGroup> : null}
                    </Menu>
                </nav>
            </Sider>
        );
    }
}
// @inject('UserContextStore')
// @observer
// class UserMenu extends React.Component<any, any>{
//     componentDidMount() {
//     }
//     render() {
//         const { userPlaylist = [] } = this.props.UserContextStore;
//         const create = userPlaylist.filter(x => x.createYourself)
//         const nocreate = userPlaylist.filter(x => !x.createYourself)
//         return [
//             <ItemGroup key="user1" title="创建的歌单">
//                 {create.map(x => <Item key={x.id}>
//                     <Link to={x.to}>                         <i className="musicicon musicicon-10"></i>{x.name}</Link>
//                 </Item>)}

//             </ItemGroup>,
//             <ItemGroup key="user2" title="收藏的歌单">
//                 {nocreate.map(x => <Item key={x.id}>
//                     <Link to={x.to}>                         <i className="musicicon musicicon-10"></i>{x.name}</Link>
//                 </Item>)}
//             </ItemGroup>
//         ];
//     }
// }
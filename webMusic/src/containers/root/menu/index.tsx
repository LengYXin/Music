import * as React from 'react'
// import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import { inject, observer } from 'mobx-react';
const { Item, ItemGroup } = Menu;
@inject('UserContextStore')
@observer
export default class extends React.Component<any, any>{
    componentDidMount() {
    }
    render() {
        const { userPlaylist = [] } = this.props.UserContextStore;
        const create = userPlaylist.filter(x => x.createYourself)
        const nocreate = userPlaylist.filter(x => !x.createYourself)
        return (
            <nav className="nav">

                <Menu theme="dark">
                    <ItemGroup key="g1" title="推荐">
                        <Item key="1">
                            <Link to="/find">     <Icon type="github" />发现音乐</Link>
                        </Item>
                        <Item key="2">
                            <Link to="/fm">  <Icon type="github" />私人FM</Link>
                        </Item>
                        <Item key="3">
                            <Link to="/mv">  <Icon type="github" />MV</Link>
                        </Item>
                        <Item key="4">
                            <Icon type="github" />朋友
                        </Item>
                    </ItemGroup>
                    <ItemGroup key="g2" title="我的音乐">
                        <Item key="5">
                            <Icon type="github" />音乐云盘
                        </Item>
                        <Item key="6">
                            <Icon type="github" />我的歌手
                         </Item>
                        <Item key="7">
                            <Icon type="github" />我的电台
                        </Item>
                    </ItemGroup>
                    {create.length ? <ItemGroup key="user1" title="创建的歌单">
                        {create.map(x => <Item key={x.id} title={x.name}>
                            <Link to={x.to} className="text-ellipsis">     <Icon type="github" />{x.name}</Link>
                        </Item>)}

                    </ItemGroup> : null}
                    {nocreate.length ? <ItemGroup key="user2" title="收藏的歌单">
                        {nocreate.map(x => <Item key={x.id} title={x.name}>
                            <Link to={x.to} className="text-ellipsis">     <Icon type="github" />{x.name}</Link>
                        </Item>)}
                    </ItemGroup> : null}
                </Menu>
            </nav>
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
//                     <Link to={x.to}>     <Icon type="github" />{x.name}</Link>
//                 </Item>)}

//             </ItemGroup>,
//             <ItemGroup key="user2" title="收藏的歌单">
//                 {nocreate.map(x => <Item key={x.id}>
//                     <Link to={x.to}>     <Icon type="github" />{x.name}</Link>
//                 </Item>)}
//             </ItemGroup>
//         ];
//     }
// }
import * as React from 'react'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
const { Item, ItemGroup } = Menu;

export default class extends React.Component<any, any>{
    componentDidMount() {
    }
    render() {
        return (
            <nav className="nav">

                <Menu>
                    <ItemGroup key="g1" title="推荐">
                        <Item key="1">
                            <Link to="/">     <Icon type="mail" />发现音乐</Link>
                        </Item>
                        <Item key="2">
                            <Link to="/FM">  <Icon type="mail" />私人FM</Link>
                        </Item>
                        <Item key="3">
                            <Icon type="mail" />MV
                        </Item>
                        <Item key="4">
                            <Icon type="mail" />朋友
                        </Item>
                    </ItemGroup>
                    <ItemGroup key="g2" title="我的音乐">
                        <Item key="5">
                            <Icon type="mail" />音乐云盘
                        </Item>
                        <Item key="6">
                            <Icon type="mail" />我的歌手
                         </Item>
                        <Item key="7">
                            <Icon type="mail" />我的电台
                        </Item>
                    </ItemGroup>
                    <ItemGroup key="g3" title="创建的歌单">
                        <Item key="8">
                            <Icon type="mail" />音乐云盘
                        </Item>
                    </ItemGroup>
                    <ItemGroup key="g4" title="收藏的歌单">
                        <Item key="9">
                            <Icon type="mail" />音乐云盘
                        </Item>
                    </ItemGroup>

                </Menu>
            </nav>
        );
    }
}
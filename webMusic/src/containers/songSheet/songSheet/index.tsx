import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import QueueAnim from 'rc-queue-anim';
import { Card, Tag } from 'antd';
import './style.css'
const { CheckableTag } = Tag;
const gridStyle = {
    width: '25%',
    textAlign: 'center',
};
@inject('songSheetStore')
@observer
export class SongSheetComponent extends React.Component<any, any> {
    tagsFromServer = ["华语", "流行", "摇滚", "民谣", "电子", "轻音乐", "影视原声", "ACG", "怀旧", "治愈"];
    state = {
        selectedTags: [],
    };

    handleChange(tag, checked) {
        const { selectedTags } = this.state;
        const nextSelectedTags = checked ?
            [...selectedTags, tag] :
            selectedTags.filter(t => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        this.setState({ selectedTags: nextSelectedTags });
    }
    render() {
        console.log(this.props);
        if (this.props.songSheetStore.playlist.playlists.length) {
            const { selectedTags } = this.state;
            return (
                <QueueAnim key="queue"
                    leaveReverse
                >
                    <div style={{ textAlign: "left", padding: "2px" }}>
                        <strong style={{ marginRight: 8 }}>热门标签：</strong>
                        {this.tagsFromServer.map(tag => (
                            <CheckableTag
                                key={tag}
                                checked={selectedTags.indexOf(tag) > -1}
                                onChange={checked => this.handleChange(tag, checked)}
                            >
                                {tag}
                            </CheckableTag>
                        ))}
                    </div>
                    <Card>
                        <Card.Grid style={gridStyle} key={111}>
                            <div className="custom-image">
                                <img alt="example" width="100%" src={"/assets/img/jpgd.png?param=180y180"} />
                            </div>
                            <div className="custom-card">
                                <h3>精品歌单倾心推荐，给最懂音乐的你</h3>
                            </div>
                        </Card.Grid>
                        {this.props.songSheetStore.playlist.playlists.map(x => {
                            return <Card.Grid style={gridStyle} key={x.id}>
                                <Link to={`ssd/${x.id}`}>
                                    <div className="custom-image">
                                        <img alt="example" width="100%" src={x.coverImgUrl + "?param=180y180"} />
                                    </div>
                                    <div className="custom-card">
                                        <h3> {x.name}</h3>
                                    </div>
                                </Link>
                            </Card.Grid>
                        })}
                    </Card>
                </QueueAnim>

            )
        }
    }
}
import * as React from "react";
import { inject, observer } from "mobx-react";
import Animate from 'rc-animate';

/**
 * 歌词
 */
@inject('playStore')
@observer
export class Lyric extends React.Component<any, any> {
    // componentDidUpdate(prevProps, prevState) {
    //     console.log("componentDidUpdate", prevProps.playStore.currentIndex, this.props.playStore.currentIndex);
    //     if (prevProps.playStore.currentIndex != this.props.playStore.currentIndex) {
    //         this.offsetParent.scrollTop = 0;
    //     }
    // }
    render() {
        // console.log(this);
        let lyric = this.props.playStore.current.lyric.item || [];
        return (
            <Animate transitionName="fade" transitionAppear={true} component="">

                <div key="1" className="play-lyric"  >
                    {
                        lyric.length ? lyric.map((x, i, arr) => {
                            return this.renderItem(x, i);
                        }) : <div className="play-lyric-not">
                                <span>纯音乐，请您欣赏</span>
                            </div>
                    }
                </div>
            </Animate >

        )
    }
    renderItem(lyric, index) {
        return <div key={index} className={lyric.current ? "play-lyric-item activity" : "play-lyric-item"} ref={e => { this.refLyric(e, lyric.time, lyric.current) }} >
            <p className="play-lyric-lyric">  <span >{lyric.lyric}</span></p>
            <p className="play-lyric-tlyric"> <span >{lyric.tlyric}</span></p>
        </div>
    }
    time;
    offsetParent;
    height;
    refLyric(e: HTMLDivElement, time, current) {
        if (!e || !current || this.time == time) {
            return
        }
        this.time = time;
        let offsetParent = this.offsetParent = e.offsetParent;
        let offsetTop = e.offsetTop;
        let scrollHeight = offsetParent.scrollHeight;
        let scrollTop = offsetParent.scrollTop;
        let clientHeight = offsetParent.clientHeight;
        // 可见区域
        let soHeight = scrollTop + clientHeight;
        if (offsetTop >= scrollTop && offsetTop < soHeight && soHeight - offsetTop > 28) {
            // console.log("在", offsetTop, scrollTop, soHeight);
        } else {
            let height = this.height = offsetTop - clientHeight + clientHeight / 2;
            this.scrolltop(offsetParent as any, height);
            // offsetParent.scrollTop = height;
            // console.log("不在", offsetTop, scrollTop, soHeight);
        }
    }
    scrollInterval;
    scrolltop(offsetParent: HTMLDivElement, height) {
        let sun = 15;
        let scrollStep = -Math.ceil((offsetParent.scrollTop - height) / sun);
        let count = 1;
        this.scrollInterval = setInterval(() => {
            // console.log("scrollStep", scrollStep);
            try {
                if (count <= sun) {
                    // offsetParent.scrollBy(0, scrollStep);
                    offsetParent.scrollTop = offsetParent.scrollTop + scrollStep;
                    count++;
                }
                else {
                    // console.log(offsetParent.scrollTop);
                    clearInterval(this.scrollInterval)
                };
            } catch (error) {
                clearInterval(this.scrollInterval)
            }
        }, sun);
    }
}
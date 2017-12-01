import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import QueueAnim from 'rc-queue-anim';
import { Card, Carousel } from 'antd';
import './style.css'

/**
 * 个性推荐
 */
@inject('basicDataStore')
@observer
export default class extends React.Component<any, any> {
    render() {
        if (this.props.basicDataStore.banner && this.props.basicDataStore.banner.length) {
            const settings = {
                className: 'banner-center',
                centerMode: true,
                // fade: true,
                // infinite: true,
                centerPadding: '100px',
                // slidesToShow: 3,
                // speed: 500
                beforeChange: (e, i) => {
                    console.log(e, i);
                }
            };
            return (
                <Carousel {...settings} >
                    {this.props.basicDataStore.banner.map((x, i) =>
                        <div className="banner-img" key={i}>
                            <img src={x.pic} alt="" />
                        </div>
                    )}
                </Carousel>
            )
        }
        return <Carousel >
            <div><img src={globalMusic.defaultImg} alt="" /></div>
        </Carousel>

    }
}
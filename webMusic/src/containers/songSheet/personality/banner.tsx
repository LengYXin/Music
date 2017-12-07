import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';

import './style.css'
// import Carousel from 'antd/lib/carousel';
import Swiper from "swiper";
/**
 * 个性推荐
 */
@inject('basicDataStore')
@observer
export default class extends React.Component<any, any> {
    banner;
    prev;
    next;
    pagination;
    componentDidMount() {
        // console.log("banner", this.banner);
        new Swiper(this.banner, {
            watchSlidesProgress: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: true,
            loopedSlides: this.props.basicDataStore.banner.length,
            autoplay: true,
            navigation: {
                nextEl: this.next,
                prevEl: this.prev,
            },
            pagination: {
                el: this.pagination,
                //clickable :true,
            },
            on: {
                progress: function (progress) {
                    for (let i = 0; i < this.slides.length; i++) {
                        let slide = this.slides.eq(i);
                        let slideProgress = this.slides[i].progress;
                        let modify = 1;
                        if (Math.abs(slideProgress) > 1) {
                            modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                        }
                        let translate = slideProgress * modify * 260 + 'px';
                        let scale = 1 - Math.abs(slideProgress) / 5;
                        let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                        slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                        slide.css('zIndex', zIndex);
                        slide.css('opacity', 1);
                        if (Math.abs(slideProgress) > 3) {
                            slide.css('opacity', 0);
                        }
                    }
                },
                setTransition: function (transition) {
                    for (let i = 0; i < this.slides.length; i++) {
                        let slide = this.slides.eq(i)
                        slide.transition(transition);
                    }

                }
            }

        })
    }
    render() {
        if (this.props.basicDataStore.banner && this.props.basicDataStore.banner.length) {
            return (
                <div className="banner-center" >
                    <div className="swiper-container" ref={e => this.banner = e}>
                        <div className="swiper-wrapper">
                            {this.props.basicDataStore.banner.map((x, i) =>
                                <div key={i} className="swiper-slide banner-img"><img src={x.pic} alt="" /></div>
                            )}
                        </div>
                    </div>
                    <div className="swiper-pagination" ref={e => this.pagination = e}></div>
                    <div className="swiper-button-prev swiper-button-white" ref={e => this.prev = e}></div>
                    <div className="swiper-button-next swiper-button-white" ref={e => this.next = e}></div>
                </div>
            )
        }
        return <div></div>
    }
}
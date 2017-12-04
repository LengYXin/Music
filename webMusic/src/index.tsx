/// <reference path="../typings/index.d.ts" />

import "antd/dist/antd.css";
import "video.js/dist/video-js.css";
import "swiper/dist/css/swiper.css";

import * as React from 'react';
import { render } from 'react-dom';
import { Provider, observer } from 'mobx-react';
import store from './store';
import Routers from "./routers";


import "./style.css";
render(
  <Provider
    UserContextStore={store.UserContextStore}        //用户
    basicDataStore={store.basicDataStore}            //基础数据
    songSheetStore={store.songSheetStore}            //歌单列表
    musicStore={store.musicStore}                    //音乐列表
    playStore={store.playStore}                      //音频播放器
    mvStore={store.mvStore}                          //mv
    windowsStore={store.windowsStore}                //窗口
  >
    <Routers />
  </Provider>,
  document.getElementById('root')
);

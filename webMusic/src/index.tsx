/// <reference path="../typings/index.d.ts" />

import * as React from 'react';
import './assets/css/antd.css';
import './assets/css/video-js.css';
import './assets/css/swiper.css';
import { render } from 'react-dom';
import { Provider, observer } from 'mobx-react';
// import { RootApp } from './containers';
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

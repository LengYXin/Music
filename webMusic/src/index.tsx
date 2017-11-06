import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import './assets/css/antd.css'
// import { RootApp } from './containers';
import UserContextStore from './store/userContext';
import recommendStore from './store/recommend';
import songSheet from './store/songSheet';
import music from './store/music';
import play from './store/play';
import Routers from "./routers";
import "./style.css";
render(
  <Provider 
  UserContextStore={UserContextStore} //用户
  recommendStore={recommendStore}     //推荐
  songSheetStore={songSheet}          //歌单
  musictStore={music}                 //音乐
  playStore={play}                    //播放
  >
    <Routers />
  </Provider>,
  document.getElementById('root')
);

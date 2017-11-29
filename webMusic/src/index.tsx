import * as React from 'react';
import './assets/css/antd.css';
import './assets/css/video-js.css';

import { render } from 'react-dom';
import { Provider, observer } from 'mobx-react';
// import { RootApp } from './containers';
import UserContextStore from './store/userContext';
import recommendStore from './store/recommend';
import songSheet from './store/songSheet';
import music from './store/music';
import play from './store/play';
import mv from './store/mv';
import windows from './store/windows';
import Routers from "./routers";
import "./style.css";

render(
  <Provider
    UserContextStore={UserContextStore} //用户
    recommendStore={recommendStore}     //推荐列表
    songSheetStore={songSheet}          //歌单列表
    musictStore={music}                 //音乐列表
    playStore={play}                    //音频播放器
    mvStore={mv}                        //mv
    windowsStore={windows}              //窗口
  >
    <Routers />
  </Provider>,
  document.getElementById('root')
);
/**
 * name
 */
// class ObserverTest {
//   constructor() { }
//   message = {};
//   regiset(key, fn) {
//     if (this.message.hasOwnProperty(key)) {
//       this.message[key].push(fn);
//     } else {
//       this.message[key] = [fn];
//     }
//   }
//   fire(key, args = {}) {
//     if (!this.message.hasOwnProperty(key)) {
//       return
//     }
//     let events = {
//       key, args
//     }
//     this.message[key].map(x => { x(events); });
//   }
//   remove(key, fn) {
//     if (this.message.hasOwnProperty(key)) {
//       this.message[key].map(x => {
//         x === fn;
//       });
//       let index = 0;
//       // 歌曲已经存在列表中 拿到这条数据索引 执行播放操作。 
//       const existence = this.message[key].some((e, i) => {
//         let exis = e === fn
//         if (exis) {
//           index = i;
//         }
//         return exis;
//       });
//       existence && this.message[key].splice(index, 1);
//     }
//   }
// }
// console.log(new ObserverTest());

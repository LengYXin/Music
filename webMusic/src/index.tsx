import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import '../node_modules/antd/dist/antd.css'
// import { RootApp } from './containers';
import UserContextStore from './store/userContext';
import recommendStore from './store/recommend';
import songSheet from './store/songSheet';
import music from './store/music';

import Routers from "./routers"
import "./style.css"
render(
  <Provider 
  UserContextStore={UserContextStore} 
  recommendStore={recommendStore}
  songSheetStore={songSheet}
  musictStore={music}
  >
    <Routers />
  </Provider>,
  document.getElementById('root')
);

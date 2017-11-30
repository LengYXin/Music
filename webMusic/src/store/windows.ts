/**
 * 窗口程序
 */
import { observable, computed, autorun } from "mobx"

class ObservableStore {
  electron = null;
  constructor() {
    this.ready();
    if (window["require"]) {
      this.electron = window["require"]("electron");
    }
  }
  ready() {
    let time = new Date().getTime();
    try {
      let cacheTime = + window.localStorage.getItem("cacheTime");
      if (time - cacheTime > 7200000) {
        window.localStorage.clear();
        window.sessionStorage.clear();
        window.localStorage.setItem("cacheTime", time.toString());
      }
    } catch (error) {
      window.localStorage.clear();
      window.sessionStorage.clear();
      window.localStorage.setItem("cacheTime", time.toString());
    }

    window["globalMusic"] = {
      defaultImg: "/assets/img/default_album.jpg"
    }
    console.log("-----------ready------------");
  }
  onMinus() {
    if (this.electron) {
      this.electron.remote.app.win.minimize();
    }
  }
  onAlt() {
    if (this.electron) {
      const win = this.electron.remote.app.win;
      if (win.isMaximized()) {
        win.unmaximize();
      } else {
        win.maximize();
      }
    }
  }
  onClose() {
    if (this.electron) {
      this.electron.remote.app.exit();
    }
  }
}
const Store = new ObservableStore();
console.log("Store----Windows", Store);
export default Store;




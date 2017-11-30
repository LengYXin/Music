/**
 * 窗口程序
 */
import { observable, computed, autorun } from "mobx"

export default class ObservableStore {
  electron = null;
  constructor() {
    if (window["require"]) {
      this.electron = window["require"]("electron");
    }
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




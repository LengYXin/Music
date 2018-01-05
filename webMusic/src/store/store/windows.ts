/**
 * 窗口程序
 */
import { observable, computed, autorun } from "mobx"

export default class ObservableStore {
  // 是否是迷你窗口
  @observable isMini = false;
  electron = null;
  size = {
    Content: null,
    Minimum: null,

  };
  isMaximized = false;
  win = null;
  constructor() {
    try {
      if (window["require"]) {
        this.electron = window["require"]("electron");
        this.win = this.electron.remote.app.win;

      }
    } catch (error) {
      console.log("error", error);
    }
  }
  // 切换mini模式
  onMini(mini?) {
    if ("undefined" === typeof mini) {
      this.isMini = !this.isMini;
    } else {
      if (this.isMini != mini) {
        this.isMini = mini;
      }
    }
    if (this.electron) {
      const win = this.win;
      win.hide();
      if (this.isMini) {
        this.getSize();
        // 设置最小宽高
        win.setMinimumSize(1, 1);
        this.setSize(400, 60);
        // 禁止调整大小
        win.setResizable(false);
        // 设置窗口是否应始终显示在其他窗口的顶部
        win.setAlwaysOnTop(true);
      } else {
        // 设置最小宽高
        win.setMinimumSize(1150, 670);
        this.setSize(this.size[0], this.size[1]);
        // 可以调整大小
        win.setResizable(true);
        // 设置窗口是否应始终显示在其他窗口的顶部
        win.setAlwaysOnTop(false);
      }
      // 将窗口移动到屏幕中央。
      setTimeout(() => {
        win.center();
        win.show();
      },50);
    }
  }
  setSize(w, h, a = true) {
    if (this.electron) {
      this.win.setSize(w, h, a);
    }
  }
  getSize() {
    if (this.electron) {
      this.size = this.win.getSize();
    }
  }
  // 浏览器打开链接
  openExternal(url) {
    if (this.electron) {
      this.electron.shell.openExternal(url);
    } else {
      window.open(url);
    }
  }
  // 删除 cookie
  emptyCookie() {
    if (this.electron) {
      const { cookies } = this.electron.remote.session.defaultSession;
      const { origin } = window.location;

      cookies.get({ url: origin }, (err, cks) => {
        err && console.error(err);
        cks && cks.map(x => {
          cookies.remove(origin, x.name, r => {
            console.log(`remove cookies  ${x.name}`);
          })
        })
      });
    }
  }
  // 最小化
  onMinus() {
    if (this.electron) {
      this.win.minimize();
    }
  }
  // 最大化
  onAlt() {
    if (this.electron) {
      const win = this.win;
      // win.isMaximized() 有bug
      if (this.isMaximized) {
        win.unmaximize();
        this.isMaximized = false;
      } else {
        win.maximize();
        this.isMaximized = true;
      }
    }
  }
  //关闭
  onClose() {
    if (this.electron) {
      this.electron.remote.app.exit();
    }
  }
}




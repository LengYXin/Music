import Rx from "rxjs";

// 中控
export default class Observer {
    constructor(private store) {
        // 订阅通知
        this.subject.subscribe({
            next: this.subscribe.bind(this),
            error: e => {
                console.error("controller Error", e);
            }
        });
    }
    subject = new Rx.Subject<controllerObserver>();
    subscribe(x: controllerObserver) {
        // console.log("subscribe", x);
        switch (x.type) {
            // 退出登录
            case EnumNotice.LoginOut:
                // 删除 cookie
                this.store.windowsStore.emptyCookie();
                this.store.songSheetStore.getResource();
                break;
            // 登录成功
            case EnumNotice.LoginSuccess:
                if (x.data) {
                    this.store.UserContextStore.getUserPlaylist();
                } else {
                    console.log("没有登陆");
                }
                this.store.songSheetStore.getResource(x.data);
                break;
            // 音乐播放
            case EnumNotice.MusicPlay:
                break;
            //mv 播放
            case EnumNotice.MVPlay:
                // 停止播放音乐
                this.store.playStore.updatePlayState(!x.data);
                break;
            default:
                break;
        }
    }
}
// export const controller = new Observer();
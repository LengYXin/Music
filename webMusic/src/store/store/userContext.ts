/**
 * 用户
 */
import { observable, computed, autorun } from "mobx"
import notification from "antd/lib/notification";
import { Http, Cache } from "../../utils";
import controller from "../controller";
import formatTool from './formatTool';

export default class ObservableStore {
    UserID = Cache.localGet("__UserID");
    //当前用户
    @observable UserContext = {};
    // 用户歌单
    @observable userPlaylist = [];
    // 登录状态
    @observable login = false;
    // 首次加载用户数据中
    @observable Loading = true;
    constructor(controller) {
        this.controller = controller;
    }
    controller: controller;
    /**登录 只支持手机*/
    async onLogin(phone = "18611752863", password = "leng5201314") {
        let UserContext = await Http.get(`login/cellphone?phone=${phone}&password=${password}&timestamp=${new Date().getTime()}`).toPromise();
        if (UserContext.code == 200) {
            this.UserContext = UserContext;
            this.login = true;
            this.UserID = UserContext.profile.userId;
            Cache.localSet("__UserID", this.UserID);
            this.controller.subject.next({ type: EnumNotice.LoginSuccess, data: true });
        } else {
            notification["error"]({
                message: '登陆错误',
                description: UserContext.msg,
            });
            this.controller.subject.next({ type: EnumNotice.LoginSuccess, data: false });
        }
    }
    /**退出登录 */
    onLoginOut() {
        this.login = false;
        this.UserContext = {};
        this.userPlaylist = [];
        this.controller.subject.next({ type: EnumNotice.LoginOut });
        console.log("退出登录");
    }
    /**刷新登录 */
    async onRefresh() {
        let data = await Http.get(`login/refresh?timestamp=${new Date().getTime()}`).toPromise();
        if (data.code == 200 || data.code == 400) {
            if (this.UserID) {
                // 发送登陆通知
                this.login = true;
                this.UserContext = await this.getDetail(this.UserID);
                this.controller.subject.next({ type: EnumNotice.LoginSuccess, data: true });
            }
        } else {
            // 发送登陆通知
            this.controller.subject.next({ type: EnumNotice.LoginSuccess, data: false });
        }
    }
    /**获取用户详情 */
    async getDetail(uid) {
        return await Http.get(`user/detail?uid=${uid}`).toPromise();
    }
    /** 获取用户信息,歌单，收藏，mv, dj 数量*/
    async getSubcount() {
        await Http.get(`user/subcount`).toPromise();
    }
    /**获取用户歌单 */
    async getUserPlaylist(uid = this.UserID) {
        this.userPlaylist = await Http.get(`user/playlist?uid=${uid}`).map(x =>
            x.playlist.map(x => {
                x.createYourself = x.userId == this.UserID;
                return formatTool.formatSongSheet(x, {
                    img: "coverImgUrl",
                    createYourself: "createYourself"
                });
            })
        ).toPromise();
    }
    // @computed get complete() {

    // }
}





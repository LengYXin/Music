/**
 * 用户
 */
import { observable, computed, autorun } from "mobx"
import notification from "antd/lib/notification";
import { Http, Cache } from "../../utils";
import controller from "../controller";
export default class ObservableStore {
    UserID = Cache.localGet("__UserID");
    //当前用户
    @observable UserContext = {};
    // 登录状态
    @observable login = false;
    // 首次加载用户数据中
    @observable Loading = true;
    constructor(controller) {
        this.controller = controller;
    }
    controller: controller;
    async onLogin(params: { phone: string, password: string }) {
        let UserContext = await Http.get(`login/cellphone?phone=${params.phone}&password=${params.password}`).toPromise();
        if (UserContext.code == 200) {
            this.UserContext = UserContext;
            this.login = true;
            Cache.localSet("__UserID", UserContext.profile.userId);
            this.controller.subject.next({ type: EnumNotice.LoginSuccess, data: true });
        } else {
            notification["error"]({
                message: '登陆错误',
                description: UserContext.msg,
            });
            this.controller.subject.next({ type: EnumNotice.LoginSuccess, data: false });
        }
    }
    /**刷新登录 */
    async onRefresh() {
        let data = await Http.get(`login/refresh?timestamp=${new Date().getTime()}`).toPromise();
        if (data.code == 301) {
            // 发送登陆通知
            this.controller.subject.next({ type: EnumNotice.LoginSuccess, data: false });
        } else {
            // 发送登陆通知
            this.login = true;
            this.UserContext = await this.getDetail(this.UserID);
            this.controller.subject.next({ type: EnumNotice.LoginSuccess, data: true });
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
    // @computed get complete() {

    // }
}





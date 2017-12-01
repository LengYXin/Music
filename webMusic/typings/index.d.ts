declare var globalMusic: {
    defaultImg: string
}
declare enum EnumNotice {
    /**登录成功 */
    LoginSuccess = 1,
    /**音乐播放 */
    MusicPlay = 2,
    /**MV 播放*/
    MVPlay = 3,
}
declare interface controllerObserver {
    type: EnumNotice;
    data?: any;
}
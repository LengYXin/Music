declare var globalMusic: {
    defaultImg: string
}
declare enum EnumNotice {
    /**
     * 退出登录
     */ 
    LoginOut = 0,
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
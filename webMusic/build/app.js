webpackJsonp([0],{

/***/ 1050:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_css_antd_css__ = __webpack_require__(1051);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_css_antd_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_css_antd_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_css_video_js_css__ = __webpack_require__(1052);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_css_video_js_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_css_video_js_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx_react__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_userContext__ = __webpack_require__(1053);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_recommend__ = __webpack_require__(1054);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_songSheet__ = __webpack_require__(1055);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store_music__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_play__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_mv__ = __webpack_require__(1056);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__store_windows__ = __webpack_require__(1057);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routers__ = __webpack_require__(1058);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__style_css__ = __webpack_require__(1099);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__style_css__);





// import { RootApp } from './containers';









Object(__WEBPACK_IMPORTED_MODULE_3_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_mobx_react__["a" /* Provider */], { UserContextStore: __WEBPACK_IMPORTED_MODULE_5__store_userContext__["a" /* default */], recommendStore: __WEBPACK_IMPORTED_MODULE_6__store_recommend__["a" /* default */], songSheetStore: __WEBPACK_IMPORTED_MODULE_7__store_songSheet__["a" /* default */], musictStore: __WEBPACK_IMPORTED_MODULE_8__store_music__["a" /* default */], playStore: __WEBPACK_IMPORTED_MODULE_9__store_play__["a" /* default */], mvStore: __WEBPACK_IMPORTED_MODULE_10__store_mv__["a" /* default */], windowsStore: __WEBPACK_IMPORTED_MODULE_11__store_windows__["a" /* default */] },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12__routers__["a" /* default */], null)), document.getElementById('root'));
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


/***/ }),

/***/ 1051:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1052:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1053:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_http__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * 用户
 */

// import axios from "axios"

var ObservableStore = /** @class */ (function () {
    // @observable list = [];
    function ObservableStore() {
        //当前用户
        this.UserContext = {};
        // 登录状态
        this.State = false;
        // 首次加载用户数据中
        this.Loading = true;
        // 模拟一下网速慢
        // setTimeout(() => {
        // this.onLogin({ phone: "18611752863", password: "leng5201314" });
        // }, 1000);
        // autorun(() => console.log("-----autorun------", this.State));
    }
    ObservableStore.prototype.onLogin = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__utils_http__["a" /* default */].get("login/cellphone?phone=" + params.phone + "&password=" + params.password)];
                    case 1:
                        _a.UserContext = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* observable */]
    ], ObservableStore.prototype, "UserContext", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* observable */]
    ], ObservableStore.prototype, "State", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* observable */]
    ], ObservableStore.prototype, "Loading", void 0);
    return ObservableStore;
}());
var Store = new ObservableStore();
// console.log("Store----UserContext", Store);
/* harmony default export */ __webpack_exports__["a"] = (Store);


/***/ }),

/***/ 1054:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_http__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * 推荐
 */


var ObservableStore = /** @class */ (function () {
    function ObservableStore() {
        // @observable Store = {};
        this.resource = JSON.parse(window.sessionStorage.getItem("getResource"));
        this.getResource();
    }
    // 获取每日推荐歌单
    ObservableStore.prototype.getResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.resource) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__utils_http__["a" /* default */].get("recommend/resource")];
                    case 1:
                        _a.resource = _b.sent();
                        window.sessionStorage.setItem("getResource", JSON.stringify(this.resource));
                        _b.label = 2;
                    case 2: return [2 /*return*/, this.resource];
                }
            });
        });
    };
    //获取每日推荐歌曲
    ObservableStore.prototype.getSongs = function () {
        return __WEBPACK_IMPORTED_MODULE_1__utils_http__["a" /* default */].get("recommend/songs").then(function (x) {
        }).catch(function (e) {
        });
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* observable */]
    ], ObservableStore.prototype, "resource", void 0);
    return ObservableStore;
}());
var Store = new ObservableStore();
// console.log("Store----recommend", Store);
/* harmony default export */ __webpack_exports__["a"] = (Store);


/***/ }),

/***/ 1055:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_http__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * 精品歌单
 */


var ObservableStore = /** @class */ (function () {
    function ObservableStore() {
        // @observable Store = {};
        // 歌单
        this.playlist = JSON.parse(window.localStorage.getItem("getPlaylist"));
        // 详情
        this.details = {};
        // 详情集合
        this.detailsList = {};
        // console.log(Help);
        this.getPlaylist();
    }
    // 获取歌单
    ObservableStore.prototype.getPlaylist = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.playlist) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__utils_http__["a" /* default */].get("top/playlist")];
                    case 1:
                        _a.playlist = _b.sent();
                        window.localStorage.setItem("getPlaylist", JSON.stringify(this.playlist));
                        _b.label = 2;
                    case 2: return [2 /*return*/, this.playlist];
                }
            });
        });
    };
    ObservableStore.prototype.getDetails = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var details, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        // playlist/detail?id=20320734
                        this.details = {};
                        details = window.localStorage.getItem("detail?id=" + id);
                        if (!!this.detailsList[id]) return [3 /*break*/, 3];
                        if (!details) return [3 /*break*/, 1];
                        this.detailsList[id] = JSON.parse(details);
                        return [3 /*break*/, 3];
                    case 1:
                        _a = this.detailsList;
                        _b = id;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__utils_http__["a" /* default */].get("playlist/detail?id=" + id)];
                    case 2:
                        _a[_b] = _c.sent();
                        window.localStorage.setItem("detail?id=" + id, JSON.stringify(this.detailsList[id]));
                        _c.label = 3;
                    case 3:
                        this.details = this.detailsList[id];
                        return [2 /*return*/, this.details];
                }
            });
        });
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* observable */]
    ], ObservableStore.prototype, "playlist", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* observable */]
    ], ObservableStore.prototype, "details", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* observable */]
    ], ObservableStore.prototype, "detailsList", void 0);
    return ObservableStore;
}());
var Store = new ObservableStore();
// console.log("Store----songSheet", Store);
/* harmony default export */ __webpack_exports__["a"] = (Store);


/***/ }),

/***/ 1056:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_http__ = __webpack_require__(89);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * Music
 */


var ObservableStore = /** @class */ (function () {
    function ObservableStore() {
        // MV列表
        this.MVList = JSON.parse(window.localStorage.getItem("MVList")) || {};
        // 播放
        this.current = {};
    }
    /**
    * 播放歌曲
    * getMusic 获取歌曲地址
    * getLyric 获取歌词信息
    * 默认缓存下一首歌曲地址。
    */
    ObservableStore.prototype.play = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var MV;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.current = {};
                        return [4 /*yield*/, this.getMV(id)];
                    case 1:
                        _a.sent();
                        MV = __assign({}, this.MVList[id]);
                        MV.brs = Object.keys(MV.brs).map(function (x) {
                            return { brs: x, url: __WEBPACK_IMPORTED_MODULE_1__utils_http__["a" /* default */].address + "mv/url?url=" + MV.brs[x] };
                        });
                        // 存储当前播放歌曲信息
                        this.current = MV;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 获取 MV
     * 先从内存数据中读取，如果内存存在这条数据跳过http请求。
     * @param id /mv?mvid=5436712
     */
    ObservableStore.prototype.getMV = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var res, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        res = {};
                        data = {};
                        if (!!this.MVList.hasOwnProperty(id)) return [3 /*break*/, 2];
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__utils_http__["a" /* default */].get("mv?mvid=" + id)];
                    case 1:
                        res = _a.sent();
                        data[id] = res.data;
                        return [3 /*break*/, 3];
                    case 2:
                        res = this.MVList[id];
                        _a.label = 3;
                    case 3:
                        this.MVList = __assign({}, this.MVList, data);
                        window.localStorage.setItem("MVList", JSON.stringify(this.MVList));
                        return [2 /*return*/, res];
                }
            });
        });
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* observable */]
    ], ObservableStore.prototype, "MVList", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* observable */]
    ], ObservableStore.prototype, "current", void 0);
    return ObservableStore;
}());
var Store = new ObservableStore();
console.log("Store----MV", Store);
/* harmony default export */ __webpack_exports__["a"] = (Store);


/***/ }),

/***/ 1057:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var ObservableStore = /** @class */ (function () {
    function ObservableStore() {
        this.electron = null;
        if (window["require"]) {
            this.electron = window["require"]("electron");
        }
    }
    ObservableStore.prototype.onMinus = function () {
        if (this.electron) {
            this.electron.remote.app.win.minimize();
        }
    };
    ObservableStore.prototype.onAlt = function () {
        if (this.electron) {
            var win = this.electron.remote.app.win;
            if (win.isMaximized()) {
                win.unmaximize();
            }
            else {
                win.maximize();
            }
        }
    };
    ObservableStore.prototype.onClose = function () {
        if (this.electron) {
            this.electron.remote.app.exit();
        }
    };
    return ObservableStore;
}());
var Store = new ObservableStore();
console.log("Store----Windows", Store);
/* harmony default export */ __webpack_exports__["a"] = (Store);


/***/ }),

/***/ 1058:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_create_react_class__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_config__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rc_queue_anim__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers__ = __webpack_require__(1059);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};






// @inject('UserContextStore')
// @observer
var RootRoutes = /** @class */ (function (_super) {
    __extends(RootRoutes, _super);
    function RootRoutes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NoMatch = function (_a) {
            var location = _a.location;
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null,
                    "\u65E0\u6CD5\u5339\u914D ",
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("code", null, location.pathname))));
        };
        // 创建过渡动画
        _this.createCSSTransition = function (Component, classNames) {
            if (classNames === void 0) { classNames = "fade"; }
            // return Component;  
            return __WEBPACK_IMPORTED_MODULE_1_create_react_class___default()({
                getInitialState: function () {
                    return {
                        CSSTransitionShow: false
                    };
                },
                componentDidMount: function () {
                    this.setState({ CSSTransitionShow: true });
                },
                render: function () {
                    // return (
                    //     <CSSTransition in={this.state.CSSTransitionShow} timeout={500} classNames={classNames}>
                    //         <Component {...this.props} />
                    //     </CSSTransition>
                    // );
                    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_rc_queue_anim__["a" /* default */], { type: "scale", delay: 100, animConfig: [
                            { opacity: [0.95, 0], },
                            { opacity: [0.95, 0], }
                        ] },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Component, __assign({ key: "1" }, this.props))));
                },
            });
        };
        _this.routes = [
            {
                component: _this.createCSSTransition(__WEBPACK_IMPORTED_MODULE_5__containers__["f" /* RootApp */]),
                routes: [
                    {
                        path: "/",
                        exact: true,
                        component: _this.createCSSTransition(__WEBPACK_IMPORTED_MODULE_5__containers__["b" /* HomeComponent */]),
                    },
                    {
                        //发现音乐
                        path: "/find",
                        component: _this.createCSSTransition(__WEBPACK_IMPORTED_MODULE_5__containers__["a" /* DiscoverMusicComponent */]),
                        routes: [
                            {
                                path: "/find/ss",
                                component: _this.createCSSTransition(__WEBPACK_IMPORTED_MODULE_5__containers__["g" /* SongSheetComponent */]),
                            },
                            {
                                // path: "/find/",
                                component: _this.createCSSTransition(__WEBPACK_IMPORTED_MODULE_5__containers__["e" /* PersonalityComponent */]),
                            },
                        ]
                    },
                    {
                        //歌单详情
                        path: "/ssd/:id",
                        component: _this.createCSSTransition(__WEBPACK_IMPORTED_MODULE_5__containers__["h" /* songSheetDetailsComponent */]),
                    },
                    {
                        // MV
                        path: "/mv",
                        exact: true,
                        component: _this.createCSSTransition(__WEBPACK_IMPORTED_MODULE_5__containers__["c" /* MVComponent */]),
                    },
                    {
                        //MV详情
                        path: "/mv/:id",
                        component: _this.createCSSTransition(__WEBPACK_IMPORTED_MODULE_5__containers__["d" /* MVDetailsComponent */]),
                    },
                    // {
                    //     path: "/music/:id",
                    //     component: this.createCSSTransition(containers.MusicPlayComponent),
                    // },
                    // 没有匹配的路由
                    {
                        component: _this.createCSSTransition(_this.NoMatch)
                    }
                ],
            },
        ];
        return _this;
    }
    RootRoutes.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["a" /* BrowserRouter */], null, Object(__WEBPACK_IMPORTED_MODULE_3_react_router_config__["a" /* renderRoutes */])(this.routes)));
    };
    return RootRoutes;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (RootRoutes);


/***/ }),

/***/ 1059:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_index__ = __webpack_require__(1060);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__home_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__discoverMusic_index__ = __webpack_require__(1062);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__discoverMusic_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__root_index__ = __webpack_require__(1064);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__root_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__songSheet_index__ = __webpack_require__(1087);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__songSheet_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__songSheet_index__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__songSheet_index__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__music_index__ = __webpack_require__(454);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mv_index__ = __webpack_require__(457);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__mv_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__mv_index__["b"]; });








/***/ }),

/***/ 1060:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__(1061);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { Form, Icon, Input, Button, Checkbox, message } from 'antd';


var HomeComponent = /** @class */ (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeComponent.prototype.render = function () {
        console.log(this.props);
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "home" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("section", { className: "cover show" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "cover-main" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "anchor", href: "https://github.com/Binaryify/NeteaseCloudMusicApi", target: "_blank" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "\u7F51\u6613\u4E91\u97F3\u4E50 API"))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "anchor", href: "https://github.com/LengYXin/Music", target: "_blank" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "\u6E90\u7801\u5730\u5740"))))));
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* inject */])('UserContextStore', 'recommendStore'),
        __WEBPACK_IMPORTED_MODULE_1_mobx_react__["c" /* observer */]
    ], HomeComponent);
    return HomeComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));



/***/ }),

/***/ 1061:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1062:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverMusicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_config__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_css__ = __webpack_require__(1063);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_css__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var TabPane = __WEBPACK_IMPORTED_MODULE_2_antd__["k" /* Tabs */].TabPane;

// @inject('UserContextStore', 'recommendStore')
// @observer
var DiscoverMusicComponent = /** @class */ (function (_super) {
    __extends(DiscoverMusicComponent, _super);
    function DiscoverMusicComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiscoverMusicComponent.prototype.getA = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = console).log;
                        return [4 /*yield*/, this.props.recommendStore.getResource()];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        return [2 /*return*/];
                }
            });
        });
    };
    DiscoverMusicComponent.prototype.onTabClick = function (tab) {
        // console.log(tab);
        this.props.history.push(tab);
    };
    DiscoverMusicComponent.prototype.render = function () {
        // console.log(this.props.location.pathname);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_antd__["k" /* Tabs */], { style: { textAlign: "center" }, onTabClick: this.onTabClick.bind(this), activeKey: this.props.location.pathname },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](TabPane, { tab: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "\u4E2A\u6027\u63A8\u8350"), key: "/find" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](TabPane, { tab: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "\u6B4C\u5355"), key: "/find/ss" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](TabPane, { tab: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "\u4E3B\u64AD\u7535\u53F0"), key: "/find/dt" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](TabPane, { tab: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "\u6392\u884C\u699C"), key: "/find/ph" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](TabPane, { tab: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "\u6B4C\u624B"), key: "/find/gs" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](TabPane, { tab: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "\u6700\u65B0\u97F3\u4E50"), key: "/find/new" })),
            Object(__WEBPACK_IMPORTED_MODULE_1_react_router_config__["a" /* renderRoutes */])(this.props.route.routes)));
    };
    return DiscoverMusicComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));



/***/ }),

/***/ 1063:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1064:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header__ = __webpack_require__(1065);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer__ = __webpack_require__(1067);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__body__ = __webpack_require__(1084);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu__ = __webpack_require__(1085);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_css__ = __webpack_require__(1086);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__style_css__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};






var Header = __WEBPACK_IMPORTED_MODULE_5_antd__["f" /* Layout */].Header, Footer = __WEBPACK_IMPORTED_MODULE_5_antd__["f" /* Layout */].Footer, Sider = __WEBPACK_IMPORTED_MODULE_5_antd__["f" /* Layout */].Sider, Content = __WEBPACK_IMPORTED_MODULE_5_antd__["f" /* Layout */].Content;

/**
 * RootApp
 */
// @inject('UserContextStore')
// @observer
var RootApp = /** @class */ (function (_super) {
    __extends(RootApp, _super);
    function RootApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RootApp.prototype.componentDidMount = function () {
    };
    RootApp.prototype.render = function () {
        return (
        // <div className="root">
        //     <Header  />
        //     <Body  {...this.props} />
        //     <Footer />
        // </div>
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_antd__["f" /* Layout */], { style: { height: '100vh' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Header, { className: "root-header" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__header__["a" /* default */], __assign({}, this.props))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_antd__["f" /* Layout */], { style: { position: "relative" } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Sider, { style: { overflow: 'auto', } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__menu__["a" /* default */], null)),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Content, null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__body__["a" /* default */], __assign({}, this.props)))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__footer__["a" /* default */], null)));
    };
    return RootApp;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));



/***/ }),

/***/ 1065:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(1066);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx_react__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.componentDidMount = function () {
    };
    default_1.prototype.onBack = function () {
        // console.log(this.props);
        this.props.history.goBack();
    };
    default_1.prototype.onForward = function () {
        // console.log(this.props);
        this.props.history.goForward();
    };
    default_1.prototype.onMinus = function () {
        this.props.windowsStore.onMinus();
    };
    default_1.prototype.onAlt = function () {
        this.props.windowsStore.onAlt();
    };
    default_1.prototype.onClose = function () {
        this.props.windowsStore.onClose();
    };
    default_1.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "root-header-body" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "root-header-logo" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Link */], { to: "/" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { alt: "", src: "/assets/img/default_album.jpg" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, "\u5C0F\u97F3\u4E50\u76D2\u5B50"))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "root-header-btns" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { onClick: this.onBack.bind(this), title: "后退" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_antd__["e" /* Icon */], { type: "left" })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { onClick: this.onForward.bind(this), title: "前进" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_antd__["e" /* Icon */], { type: "right" }))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "root-header-search" }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "root-header-user" }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "root-header-operation" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { onClick: this.onMinus.bind(this), title: "最小化" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_antd__["e" /* Icon */], { type: "minus" })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { onClick: this.onAlt.bind(this), title: "最大化" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_antd__["e" /* Icon */], { type: "arrows-alt" })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { onClick: this.onClose.bind(this), title: "关闭" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_antd__["e" /* Icon */], { type: "close" })))));
    };
    default_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4_mobx_react__["b" /* inject */])('windowsStore'),
        __WEBPACK_IMPORTED_MODULE_4_mobx_react__["c" /* observer */]
    ], default_1);
    return default_1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (default_1);


/***/ }),

/***/ 1066:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1067:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__music__ = __webpack_require__(454);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.componentDidMount = function () {
    };
    default_1.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "root-footer" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__music__["a" /* MusicPlayComponent */], null)));
    };
    return default_1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (default_1);


/***/ }),

/***/ 1068:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicPlayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__body_index__ = __webpack_require__(1069);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_index__ = __webpack_require__(1080);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__operation__ = __webpack_require__(1082);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MusicPlayComponent = /** @class */ (function (_super) {
    __extends(MusicPlayComponent, _super);
    function MusicPlayComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MusicPlayComponent.prototype.render = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__operation__["a" /* default */], { key: "operation", className: this.props.playStore.patternStyle }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__body_index__["a" /* default */], { key: "body", className: this.props.playStore.patternStyle }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__list_index__["a" /* default */], { key: "list", className: this.props.playStore.patternStyle })
        ];
    };
    MusicPlayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* inject */])('playStore'),
        __WEBPACK_IMPORTED_MODULE_1_mobx_react__["c" /* observer */]
    ], MusicPlayComponent);
    return MusicPlayComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));



/***/ }),

/***/ 1069:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(1070);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__btns__ = __webpack_require__(1071);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details__ = __webpack_require__(1072);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__play__ = __webpack_require__(1073);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu__ = __webpack_require__(1079);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "AudioPlay-body " + this.props.className },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "AudioPlay-content" },
                this.props.className == "footer" ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__btns__["a" /* default */], null) : null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__details__["a" /* default */], null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__play__["a" /* default */], null),
                this.props.className == "screen" ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__btns__["a" /* default */], null) : null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__menu__["a" /* default */], null))));
    };
    return default_1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (default_1);


/***/ }),

/***/ 1070:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1071:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__(25);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 上一首
    default_1.prototype.last = function () {
        this.props.musictStore.last();
    };
    ;
    // 下一首
    default_1.prototype.next = function () {
        this.props.musictStore.next();
    };
    ;
    default_1.prototype.play = function () {
        // this.AudioPlay.play(e => {
        //     this.setState({ playState: e });
        // });
        this.props.playStore.updatePlayState(!this.props.playStore.playState);
    };
    ;
    default_1.prototype.render = function () {
        // console.log("btns", this);
        var music = this.props.musictStore.current.music || {};
        // const play = this.props.musictStore.current.play || {};
        var playState = this.props.playStore.playState && music.url;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "AudioPlay-btns" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { onClick: this.last.bind(this), title: "上一首" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_antd__["e" /* Icon */], { type: "backward" })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { onClick: this.play.bind(this), title: playState ? "暂停" : "播放" }, playState ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_antd__["e" /* Icon */], { type: "pause-circle-o" }) : __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_antd__["e" /* Icon */], { type: "play-circle-o" })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { onClick: this.next.bind(this), title: "下一首" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_antd__["e" /* Icon */], { type: "forward" }))));
    };
    default_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* inject */])('musictStore', 'playStore'),
        __WEBPACK_IMPORTED_MODULE_1_mobx_react__["c" /* observer */]
    ], default_1);
    return default_1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (default_1);


/***/ }),

/***/ 1072:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_queue_anim__ = __webpack_require__(85);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.updateShowLyric = function () {
        this.props.playStore.updateShowLyric();
    };
    default_1.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "AudioPlay-details", onClick: this.updateShowLyric.bind(this) }, this.props.playStore.showLyric && this.props.playStore.patternStyle == "screen" ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Lyric, null) : __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](ImgDtl, null)));
    };
    default_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* inject */])('playStore'),
        __WEBPACK_IMPORTED_MODULE_1_mobx_react__["c" /* observer */]
    ], default_1);
    return default_1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (default_1);
var ImgDtl = /** @class */ (function (_super) {
    __extends(ImgDtl, _super);
    function ImgDtl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImgDtl.prototype.render = function () {
        var play = this.props.musictStore.current.play || {};
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_rc_queue_anim__["a" /* default */], { type: "scale", delay: 100, animConfig: [
                { opacity: [1, 0], },
                { opacity: [1, 0], }
            ] },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: "1", className: this.props.playStore.playState ? "AudioPlay-img-pic play" : "AudioPlay-img-pic " },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { alt: "", src: (play.al ? play.al.picUrl + "?param=400y400" : "/assets/img/default_album.jpg") }))));
    };
    ImgDtl = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* inject */])('musictStore', 'playStore'),
        __WEBPACK_IMPORTED_MODULE_1_mobx_react__["c" /* observer */]
    ], ImgDtl);
    return ImgDtl;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
var Lyric = /** @class */ (function (_super) {
    __extends(Lyric, _super);
    function Lyric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lyric.prototype.render = function () {
        var _this = this;
        // console.log(this);
        var lyric = this.props.musictStore.current.lyric || [];
        // console.log(lyric, this.props.playStore.currentTimeS);
        var currentTimeS = this.props.playStore.currentTimeS;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_rc_queue_anim__["a" /* default */], { type: "scale", delay: 100, animConfig: [
                { opacity: [1, 0], },
                { opacity: [1, 0], }
            ] },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: "1", className: "play-lyric" }, lyric.length ? lyric.map(function (x, i, arr) {
                return _this.renderItem(currentTimeS, x, i, arr);
            }) : __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "play-lyric-not" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "\u7EAF\u97F3\u4E50\uFF0C\u8BF7\u60A8\u6B23\u8D4F")))));
    };
    Lyric.prototype.renderItem = function (currentTimeS, lyricTime, index, arr) {
        var _this = this;
        // 计算当前时间段是否是歌词时间段
        var current = false;
        try {
            if (lyricTime.time) {
                // let difference = this.props.playStore.currentTimeS - x.time;
                var next = arr[index + 1];
                current = currentTimeS >= lyricTime.time && currentTimeS <= next.time;
                // console.log(index);
            }
        }
        catch (error) {
            current = true;
        }
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: index, className: current ? "play-lyric-item activity" : "play-lyric-item", ref: function (e) { _this.refLyric(e, lyricTime.time, current); } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, lyricTime.lyric));
    };
    Lyric.prototype.refLyric = function (e, time, current) {
        if (!current || this.time == time) {
            return;
        }
        this.time = time;
        var offsetParent = this.offsetParent = e.offsetParent;
        var offsetTop = e.offsetTop;
        var scrollHeight = offsetParent.scrollHeight;
        var scrollTop = offsetParent.scrollTop;
        var clientHeight = offsetParent.clientHeight;
        // 可见区域
        var soHeight = scrollTop + clientHeight;
        if (offsetTop >= scrollTop && offsetTop < soHeight && soHeight - offsetTop > 28) {
            // console.log("在", offsetTop, scrollTop, soHeight);
        }
        else {
            var height = this.height = offsetTop - clientHeight + clientHeight / 2;
            this.scrolltop(offsetParent, height);
            // offsetParent.scrollTop = height;
            // console.log("不在", offsetTop, scrollTop, soHeight);
        }
    };
    Lyric.prototype.scrolltop = function (offsetParent, height) {
        var sun = 15;
        var scrollStep = -Math.ceil((offsetParent.scrollTop - height) / sun);
        var count = 1;
        var scrollInterval = setInterval(function () {
            // console.log("scrollStep", scrollStep);
            try {
                if (count <= sun) {
                    // offsetParent.scrollBy(0, scrollStep);
                    offsetParent.scrollTop = offsetParent.scrollTop + scrollStep;
                    count++;
                }
                else {
                    // console.log(offsetParent.scrollTop);
                    clearInterval(scrollInterval);
                }
                ;
            }
            catch (error) {
                clearInterval(scrollInterval);
            }
        }, sun);
    };
    Lyric = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* inject */])('musictStore', 'playStore'),
        __WEBPACK_IMPORTED_MODULE_1_mobx_react__["c" /* observer */]
    ], Lyric);
    return Lyric;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));


/***/ }),

/***/ 1073:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audioPlay__ = __webpack_require__(1074);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.render = function () {
        // console.log("play", this);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "AudioPlay-play" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](MusicName, null),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__audioPlay__["a" /* AudioPlay */], null)));
    };
    return default_1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (default_1);
;
var MusicName = /** @class */ (function (_super) {
    __extends(MusicName, _super);
    function MusicName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MusicName.prototype.render = function () {
        var play = this.props.musictStore.current.play || {};
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "AudioPlay-play-name" }, play.name));
    };
    MusicName = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* inject */])('musictStore'),
        __WEBPACK_IMPORTED_MODULE_1_mobx_react__["c" /* observer */]
    ], MusicName);
    return MusicName;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));


/***/ }),

/***/ 1074:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioPlay; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(1075);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__currentTime__ = __webpack_require__(1076);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__durationTime__ = __webpack_require__(1077);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress__ = __webpack_require__(1078);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var AudioPlay = /** @class */ (function (_super) {
    __extends(AudioPlay, _super);
    function AudioPlay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AudioPlay.prototype.render = function () {
        console.log("AudioPlay", this);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "play-progress" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__currentTime__["a" /* default */], null),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__progress__["a" /* default */], null),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__durationTime__["a" /* default */], null)));
    };
    return AudioPlay;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));



/***/ }),

/***/ 1075:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1076:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "play-progress-time current" }, this.props.playStore.currentTime));
    };
    default_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* inject */])('playStore'),
        __WEBPACK_IMPORTED_MODULE_1_mobx_react__["c" /* observer */]
    ], default_1);
    return default_1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (default_1);


/***/ }),

/***/ 1077:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "play-progress-time duration " }, this.props.playStore.durationTime));
    };
    default_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* inject */])('playStore'),
        __WEBPACK_IMPORTED_MODULE_1_mobx_react__["c" /* observer */]
    ], default_1);
    return default_1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (default_1);


/***/ }),

/***/ 1078:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.progressInner = function (pro) {
        var _this = this;
        // console.log(pro);
        pro.addEventListener("click", function (e) {
            _this.props.playStore.updateCurrentTime(e.offsetX / pro.offsetWidth);
        });
    };
    ;
    default_1.prototype.componentDidMount = function () {
        this.progressInner(this.refs["progressInner"]);
    };
    default_1.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "play-progress-inner", ref: "progressInner" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "play-progress-bg cache", style: { width: this.props.playStore.cacheTime + "%" } }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "play-progress-bg", style: { width: this.props.playStore.currentProportion + "%" } }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "play-btn", style: { left: this.props.playStore.currentProportion + "%" } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", null))));
    };
    default_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* inject */])('playStore'),
        __WEBPACK_IMPORTED_MODULE_1_mobx_react__["c" /* observer */]
    ], default_1);
    return default_1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (default_1);


/***/ }),

/***/ 1079:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__(25);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.showPlayList = function (e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        this.props.playStore.updateShowList();
    };
    default_1.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "AudioPlay-menu" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { onClick: this.showPlayList.bind(this) },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_antd__["e" /* Icon */], { type: "bars" }),
                "  ",
                this.props.musictStore.playList.length)));
    };
    default_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* inject */])('musictStore', 'playStore'),
        __WEBPACK_IMPORTED_MODULE_1_mobx_react__["c" /* observer */]
    ], default_1);
    return default_1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (default_1);


/***/ }),

/***/ 1080:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_css__ = __webpack_require__(1081);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_help__ = __webpack_require__(114);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Row = __WEBPACK_IMPORTED_MODULE_2_antd__["i" /* Row */];


var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.componentDidMount = function () {
        var _this = this;
        document.addEventListener("click", function (e) {
            if (_this.props.playStore.showList) {
                _this.props.playStore.updateShowList();
            }
        });
    };
    default_1.prototype.singer = function (text) {
        var names = text.ar && text.ar.map(function (x) {
            return x.name;
        }) || [];
        return names.join(" / ");
    };
    default_1.prototype.selectPlay = function (index) {
        this.props.musictStore.play(index);
    };
    default_1.prototype.render = function () {
        var _this = this;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { onClick: function (e) { e.stopPropagation(); e.nativeEvent.stopImmediatePropagation(); }, className: (this.props.playStore.showList ? "play-list-body play-list-show " : "play-list-body play-list-hide ") + this.props.className },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null,
                "\u64AD\u653E\u5217\u8868 (",
                this.props.musictStore.playList.length,
                ")"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Row, { className: "play-list-title" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_antd__["d" /* Col */], { span: 1 }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_antd__["d" /* Col */], { span: 11 },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, "\u540D\u79F0")),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_antd__["d" /* Col */], { span: 9 },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, "\u6B4C\u624B")),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_antd__["d" /* Col */], { span: 3 },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, "\u65F6\u957F"))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "play-list" }, this.props.musictStore.playList.map(function (x, i) {
                var play = _this.props.musictStore.currentIndex == i;
                return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Row, { title: "播放 ：" + x.name, className: "play-list-item " + (play ? "play" : ""), key: x.id, onClick: function (e) {
                        _this.selectPlay(i);
                    } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_antd__["d" /* Col */], { span: 1 },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, play ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_antd__["e" /* Icon */], { type: "caret-right" }) : null)),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_antd__["d" /* Col */], { span: 11 },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, x.name)),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_antd__["d" /* Col */], { span: 9 },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, _this.singer(x))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_antd__["d" /* Col */], { span: 3 },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_4__utils_help__["a" /* default */].DateFormat(x.dt, "mm:ss")))));
            }))));
    };
    default_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* inject */])('musictStore', 'playStore'),
        __WEBPACK_IMPORTED_MODULE_1_mobx_react__["c" /* observer */]
    ], default_1);
    return default_1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (default_1);


/***/ }),

/***/ 1081:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1082:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd__ = __webpack_require__(25);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.onClick = function () {
        var style = this.props.playStore.patternStyle == "footer" ? 'screen' : 'footer';
        this.props.playStore.updatePatternStyle(style);
    };
    default_1.prototype.render = function () {
        // console.log("PlayOperation", this);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "AudioPlay-operation " + this.props.className },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { onClick: this.onClick.bind(this) },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_antd__["e" /* Icon */], { type: this.props.className == "footer" ? "arrows-alt" : "shrink" }))));
    };
    default_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* inject */])('playStore'),
        __WEBPACK_IMPORTED_MODULE_1_mobx_react__["c" /* observer */]
    ], default_1);
    return default_1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (default_1);


/***/ }),

/***/ 1083:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1084:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_config__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__(25);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SubMenu = __WEBPACK_IMPORTED_MODULE_2_antd__["g" /* Menu */].SubMenu;
var Item = __WEBPACK_IMPORTED_MODULE_2_antd__["g" /* Menu */].Item;
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.componentDidMount = function () {
    };
    default_1.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "root-body" }, Object(__WEBPACK_IMPORTED_MODULE_1_react_router_config__["a" /* renderRoutes */])(this.props.route.routes));
    };
    return default_1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (default_1);


/***/ }),

/***/ 1085:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(40);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Item = __WEBPACK_IMPORTED_MODULE_1_antd__["g" /* Menu */].Item, ItemGroup = __WEBPACK_IMPORTED_MODULE_1_antd__["g" /* Menu */].ItemGroup;
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.componentDidMount = function () {
    };
    default_1.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("nav", { className: "nav" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_antd__["g" /* Menu */], { theme: "dark" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](ItemGroup, { key: "g1", title: "推荐" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Item, { key: "1" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], { to: "/find" },
                            "     ",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_antd__["e" /* Icon */], { type: "mail" }),
                            "\u53D1\u73B0\u97F3\u4E50")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Item, { key: "2" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], { to: "/fm" },
                            "  ",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_antd__["e" /* Icon */], { type: "mail" }),
                            "\u79C1\u4EBAFM")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Item, { key: "3" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */], { to: "/mv" },
                            "  ",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_antd__["e" /* Icon */], { type: "mail" }),
                            "MV")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Item, { key: "4" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_antd__["e" /* Icon */], { type: "mail" }),
                        "\u670B\u53CB")),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](ItemGroup, { key: "g2", title: "我的音乐" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Item, { key: "5" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_antd__["e" /* Icon */], { type: "mail" }),
                        "\u97F3\u4E50\u4E91\u76D8"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Item, { key: "6" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_antd__["e" /* Icon */], { type: "mail" }),
                        "\u6211\u7684\u6B4C\u624B"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Item, { key: "7" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_antd__["e" /* Icon */], { type: "mail" }),
                        "\u6211\u7684\u7535\u53F0")),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](ItemGroup, { key: "g3", title: "创建的歌单" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Item, { key: "8" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_antd__["e" /* Icon */], { type: "mail" }),
                        "\u97F3\u4E50\u4E91\u76D8")),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](ItemGroup, { key: "g4", title: "收藏的歌单" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Item, { key: "9" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_antd__["e" /* Icon */], { type: "mail" }),
                        "\u97F3\u4E50\u4E91\u76D8")))));
    };
    return default_1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (default_1);


/***/ }),

/***/ 1086:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1087:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__personality__ = __webpack_require__(1088);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__personality__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__details__ = __webpack_require__(1090);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__details__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__songSheet__ = __webpack_require__(1096);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__songSheet__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_css__ = __webpack_require__(1098);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_css__);






/***/ }),

/***/ 1088:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_queue_anim__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_css__ = __webpack_require__(1089);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__style_css__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var gridStyle = {
    width: '25%',
    height: "287px",
    textAlign: 'center',
};
/**
 * 个性推荐
 */
var PersonalityComponent = /** @class */ (function (_super) {
    __extends(PersonalityComponent, _super);
    function PersonalityComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PersonalityComponent.prototype.render = function () {
        if (this.props.recommendStore.resource && this.props.recommendStore.resource.recommend.length) {
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_rc_queue_anim__["a" /* default */], { key: "queue", leaveReverse: true },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", { style: { textAlign: "left", padding: "2px" } }, "\u63A8\u8350\u6B4C\u5355"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd__["c" /* Card */], null, this.props.recommendStore.resource.recommend.map(function (x) {
                    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd__["c" /* Card */].Grid, { style: gridStyle, key: x.id },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */], { to: "ssd/" + x.id },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "custom-image" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { alt: "", width: "100%", src: x.picUrl + "?param=180y180" })),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "custom-card" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null,
                                    " ",
                                    x.name))));
                }))));
        }
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "text-center" }, "\u6CA1\u6709\u6B4C\u5355");
    };
    PersonalityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["b" /* inject */])('recommendStore'),
        __WEBPACK_IMPORTED_MODULE_2_mobx_react__["c" /* observer */]
    ], PersonalityComponent);
    return PersonalityComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));



/***/ }),

/***/ 1089:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1090:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return songSheetDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_css__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_help__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__songList__ = __webpack_require__(1091);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TabPane = __WEBPACK_IMPORTED_MODULE_3_antd__["k" /* Tabs */].TabPane;



/**
 * 歌单详情
 */
var songSheetDetailsComponent = /** @class */ (function (_super) {
    __extends(songSheetDetailsComponent, _super);
    function songSheetDetailsComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    songSheetDetailsComponent.prototype.componentDidMount = function () {
        this.props.songSheetStore.getDetails(this.props.match.params.id);
    };
    songSheetDetailsComponent.prototype.render = function () {
        // console.log(this.props.songSheetStore.details);
        var detalis = this.props.songSheetStore.details.playlist || {};
        var creator = detalis.creator || {};
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { padding: "15px 0" } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_antd__["i" /* Row */], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_antd__["d" /* Col */], { span: 6 },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_antd__["c" /* Card */], { style: { width: "100%", minHeight: "220px" }, bodyStyle: { padding: 0 } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { alt: "", width: "223", height: "223", src: detalis.coverImgUrl ? detalis.coverImgUrl + "?param=223y223" : "/assets/img/default_album.jpg", style: { display: "block" } }))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_antd__["d" /* Col */], { span: 18 },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Introduce, { detalis: __assign({}, detalis) }))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_antd__["i" /* Row */], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_antd__["d" /* Col */], { span: 24 },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_antd__["k" /* Tabs */], null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](TabPane, { tab: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "\u6B4C\u66F2\u5217\u8868"), key: "1" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__songList__["a" /* default */], { tracks: detalis.tracks })),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](TabPane, { tab: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null,
                                "\u8BC4\u8BBA(",
                                detalis.commentCount,
                                ")"), key: "2" }),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](TabPane, { tab: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "\u6536\u85CF\u8005"), key: "3" }, "\u4E3B\u64AD\u7535\u53F0")))));
    };
    songSheetDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["b" /* inject */])('songSheetStore'),
        __WEBPACK_IMPORTED_MODULE_2_mobx_react__["c" /* observer */]
    ], songSheetDetailsComponent);
    return songSheetDetailsComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));

/**
 * 介绍部分
 */
var Introduce = /** @class */ (function (_super) {
    __extends(Introduce, _super);
    function Introduce() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Introduce.prototype.playAll = function () {
        console.log(this.props.musictStore);
        this.props.musictStore.addPlayList(this.props.songSheetStore.details.playlist.tracks, true);
    };
    Introduce.prototype.render = function () {
        var detalis = this.props.songSheetStore.details.playlist || {};
        var creator = detalis.creator || {};
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "ss-d-introduce" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", { style: { display: "inline-block" } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, detalis.name),
                    " "),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_antd__["e" /* Icon */], { type: "notification" }),
                    detalis.trackCount),
                " ",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_antd__["e" /* Icon */], { type: "play-circle-o" }),
                    detalis.playCount)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                " ",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_antd__["a" /* Avatar */], { src: creator.avatarUrl }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, creator.nickname),
                " ",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null,
                    __WEBPACK_IMPORTED_MODULE_5__utils_help__["a" /* default */].DateFormat(detalis.createTime, "yyyy-MM-dd"),
                    "\u521B\u5EFA")),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_antd__["b" /* Button */], { type: "dashed", onClick: this.playAll.bind(this) },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_antd__["e" /* Icon */], { type: "play-circle-o" }),
                    "\u64AD\u653E\u5168\u90E8"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_antd__["b" /* Button */], { type: "dashed" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_antd__["e" /* Icon */], { type: "plus" })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_antd__["b" /* Button */], { type: "dashed" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_antd__["e" /* Icon */], { type: "folder-add" }),
                    "\u6536\u85CF(",
                    detalis.subscribedCount,
                    ")"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_antd__["b" /* Button */], { type: "dashed" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_antd__["e" /* Icon */], { type: "export" }),
                    "\u5206\u4EAB(",
                    detalis.shareCount,
                    ")"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_antd__["b" /* Button */], { type: "dashed", disabled: true },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_antd__["e" /* Icon */], { type: "download" }),
                    "\u4E0B\u8F7D\u5168\u90E8")),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null,
                    "\u6807\u7B7E\uFF1A",
                    detalis.tags && detalis.tags.map(function (x) { return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { key: x },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */], { to: x }, x),
                        " / "); }))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null,
                    "\u7B80\u4ECB\uFF1A",
                    detalis.description)));
    };
    Introduce = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["b" /* inject */])('songSheetStore', 'musictStore'),
        __WEBPACK_IMPORTED_MODULE_2_mobx_react__["c" /* observer */]
    ], Introduce);
    return Introduce;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));


/***/ }),

/***/ 1091:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mv__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_help__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_css__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__style_css__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/**
 * 歌曲列表
 */
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.columns = [{
                title: '',
                dataIndex: '',
                render: function (text, record, index) {
                    index = index + 1;
                    index = index < 10 ? "0" + index : index;
                    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, index));
                },
                width: '10%',
            }, {
                title: '操作',
                dataIndex: '',
                render: function (text, record) {
                    // <Icon type="heart-o" /> <Icon type="heart" />
                    // return [
                    //     <Button shape="circle" icon="heart-o" size="small" />,
                    //     <Button shape="circle" icon="download" size="small" />
                    // ];
                    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_antd__["b" /* Button */], { icon: "heart-o", size: "small" }),
                        ",",
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_antd__["b" /* Button */], { icon: "download", disabled: true, size: "small" })));
                },
                width: '10%',
            }, {
                title: '音乐标题',
                dataIndex: '',
                width: '30%',
                render: function (text, record) {
                    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "song-list-name", onClick: function (e) {
                            _this.setState({ modal2Visible: !_this.state.modal2Visible, MVid: text.mv, Name: text.name });
                        } },
                        text.name,
                        " ",
                        text.mv ?
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */], { to: "/mv/" + text.mv },
                                " ",
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_antd__["e" /* Icon */], { type: "play-circle" }))
                            : null));
                },
            }, {
                title: '歌手',
                dataIndex: '',
                render: function (text, record) {
                    var names = text.ar && text.ar.map(function (x) {
                        return x.name;
                    }) || [];
                    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, names.join(" / ")));
                },
                width: '20%',
            }, {
                title: '专辑',
                dataIndex: '',
                render: function (text, record) {
                    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, text.al.name));
                },
                width: '20%',
            }, {
                title: '时长',
                dataIndex: '',
                render: function (text, record) {
                    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, __WEBPACK_IMPORTED_MODULE_5__utils_help__["a" /* default */].DateFormat(text.dt, "mm:ss")));
                },
                width: '10%',
            }];
        _this.state = {
            modal2Visible: false,
            MVid: 0,
            Name: ""
        };
        _this.onRowClickCount = 0;
        return _this;
    }
    default_1.prototype.setModal2Visible = function (modal2Visible) {
        this.setState({ modal2Visible: modal2Visible });
    };
    ;
    default_1.prototype.onRowClick = function (t) {
        var _this = this;
        this.onRowClickCount++;
        if (this.onRowClickCount == 2) {
            this.props.musictStore.addPlayList([t]);
            this.onRowClickCount = 0;
            clearTimeout(this.onRowClicksetTimeout);
        }
        this.onRowClicksetTimeout = setTimeout(function () {
            _this.onRowClickCount = 0;
        }, 500);
    };
    default_1.prototype.render = function () {
        var _this = this;
        var data = this.props.tracks && this.props.tracks.map(function (x) { return x; });
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_antd__["h" /* Modal */], { title: this.state.Name, wrapClassName: "vertical-center-modal", visible: this.state.modal2Visible, onOk: function () { return _this.setModal2Visible(false); }, onCancel: function () { return _this.setModal2Visible(false); } }, this.state.modal2Visible ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__mv__["b" /* MVDetailsComponent */], { MVid: this.state.MVid }) : null),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_antd__["j" /* Table */], { rowKey: "id", rowClassName: function () { return "s-s-songlist"; }, pagination: false, columns: this.columns, dataSource: data, onRowClick: this.onRowClick.bind(this) })));
    };
    default_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["b" /* inject */])('musictStore'),
        __WEBPACK_IMPORTED_MODULE_2_mobx_react__["c" /* observer */]
    ], default_1);
    return default_1;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (default_1);


/***/ }),

/***/ 1092:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MVComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_css__ = __webpack_require__(1093);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_css__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { Form, Icon, Input, Button, Checkbox, message } from 'antd';


var MVComponent = /** @class */ (function (_super) {
    __extends(MVComponent, _super);
    function MVComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MVComponent.prototype.render = function () {
        console.log(this.props);
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            "MV",
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */], { to: "/mv/1111" }, "aaaa"));
    };
    MVComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["b" /* inject */])('UserContextStore', 'recommendStore'),
        __WEBPACK_IMPORTED_MODULE_2_mobx_react__["c" /* observer */]
    ], MVComponent);
    return MVComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));



/***/ }),

/***/ 1093:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1094:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MVDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_video_js__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_video_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_video_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_css__ = __webpack_require__(1095);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_css__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { Form, Icon, Input, Button, Checkbox, message } from 'antd';



var MVDetailsComponent = /** @class */ (function (_super) {
    __extends(MVDetailsComponent, _super);
    function MVDetailsComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MVDetailsComponent.prototype.componentWillMount = function () {
        // 获取播放地址。
        this.props.mvStore.play(this.props.MVid || this.props.match.params.id);
    };
    MVDetailsComponent.prototype.refVideo = function (e) {
        if (e && e.src) {
            // console.log("refVideo");
            this.video = __WEBPACK_IMPORTED_MODULE_2_video_js___default()(e, {
                controls: true,
                autoplay: true,
                preload: 'auto'
            });
            console.log(this.video);
        }
    };
    MVDetailsComponent.prototype.render = function () {
        // console.log(this.props.mvStore.current.id);
        var url = "";
        try {
            url = this.props.mvStore.current.brs && this.props.mvStore.current.brs[1].url;
        }
        catch (error) {
        }
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "mv-details" }, url ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("video", { className: "video-js mv-video", src: url, ref: this.refVideo.bind(this) },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("source", { src: url, type: "video/mp4" })) : __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null));
    };
    MVDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["b" /* inject */])('mvStore'),
        __WEBPACK_IMPORTED_MODULE_1_mobx_react__["c" /* observer */]
    ], MVDetailsComponent);
    return MVDetailsComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));



/***/ }),

/***/ 1095:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1096:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongSheetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_queue_anim__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_css__ = __webpack_require__(1097);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__style_css__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CheckableTag = __WEBPACK_IMPORTED_MODULE_4_antd__["l" /* Tag */].CheckableTag;
var gridStyle = {
    width: '25%',
    textAlign: 'center',
};
/**
 * 歌单
 */
var SongSheetComponent = /** @class */ (function (_super) {
    __extends(SongSheetComponent, _super);
    function SongSheetComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tagsFromServer = ["华语", "流行", "摇滚", "民谣", "电子", "轻音乐", "影视原声", "ACG", "怀旧", "治愈"];
        _this.state = {
            selectedTags: [],
        };
        return _this;
    }
    SongSheetComponent.prototype.handleChange = function (tag, checked) {
        var selectedTags = this.state.selectedTags;
        var nextSelectedTags = checked ? selectedTags.concat([tag]) :
            selectedTags.filter(function (t) { return t !== tag; });
        console.log('You are interested in: ', nextSelectedTags);
        this.setState({ selectedTags: nextSelectedTags });
    };
    SongSheetComponent.prototype.render = function () {
        var _this = this;
        console.log(this.props);
        if (this.props.songSheetStore.playlist && this.props.songSheetStore.playlist.playlists.length) {
            var selectedTags_1 = this.state.selectedTags;
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_rc_queue_anim__["a" /* default */], { key: "queue", leaveReverse: true },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { textAlign: "left", padding: "2px" } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", { style: { marginRight: 8 } }, "\u70ED\u95E8\u6807\u7B7E\uFF1A"),
                    this.tagsFromServer.map(function (tag) { return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](CheckableTag, { key: tag, checked: selectedTags_1.indexOf(tag) > -1, onChange: function (checked) { return _this.handleChange(tag, checked); } }, tag)); })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd__["c" /* Card */], null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd__["c" /* Card */].Grid, { style: gridStyle, key: 111 },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "custom-image" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { alt: "", width: "100%", src: "/assets/img/jpgd.png?param=180y180" })),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "custom-card" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "\u7CBE\u54C1\u6B4C\u5355\u503E\u5FC3\u63A8\u8350\uFF0C\u7ED9\u6700\u61C2\u97F3\u4E50\u7684\u4F60"))),
                    this.props.songSheetStore.playlist.playlists.map(function (x) {
                        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd__["c" /* Card */].Grid, { style: gridStyle, key: x.id },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */], { to: "/ssd/" + x.id },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "custom-image" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { alt: "", width: "100%", src: x.coverImgUrl + "?param=180y180" })),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "custom-card" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null,
                                        " ",
                                        x.name))));
                    }))));
        }
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "text-center" }, "\u6CA1\u6709\u6B4C\u5355");
    };
    SongSheetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["b" /* inject */])('songSheetStore'),
        __WEBPACK_IMPORTED_MODULE_2_mobx_react__["c" /* observer */]
    ], SongSheetComponent);
    return SongSheetComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));



/***/ }),

/***/ 1097:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1098:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1099:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Help = /** @class */ (function () {
    function Help() {
    }
    // 日期格式化
    Help.prototype.DateFormat = function (date, fmt) {
        try {
            if (!date) {
                return date;
            }
            if (typeof date == "number") {
                date = new Date(date);
            }
            // console.log(date);
            var o = {
                "M+": date.getMonth() + 1,
                "d+": date.getDate(),
                "h+": date.getHours(),
                "m+": date.getMinutes(),
                "s+": date.getSeconds(),
                "q+": Math.floor((date.getMonth() + 3) / 3),
                "S": date.getMilliseconds() //毫秒
            };
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt))
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        }
        catch (error) {
            return date;
        }
    };
    return Help;
}());
/* harmony default export */ __webpack_exports__["a"] = (new Help());


/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__play__ = __webpack_require__(453);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * Music
 */



var ObservableStore = /** @class */ (function () {
    function ObservableStore() {
        // @observable Store = {};
        // 播放列表 没有播放地址
        this.playList = [];
        // 歌曲列表 有播放地址
        this.musicList = {};
        // 歌词列表 
        this.lyricList = {};
        // 当前播放的音乐索引
        this.currentIndex = 0;
        // 当前播放的音乐 源数据  地址  歌词 详情
        this.current = {};
    }
    /**
     * 加入播放列表
     * 如果播放列表已存在该歌曲跳过添加 直接播放 该歌曲。
     * @param playList 列表
     * @param replace  替换整个播放列表   true 替换  默认false 累加
     */
    ObservableStore.prototype.addPlayList = function (playList, replace) {
        if (playList === void 0) { playList = []; }
        if (replace === void 0) { replace = false; }
        // console.log(...playList);
        if (playList.length) {
            // 播放全部操作，替换整个播放列表。
            if (replace) {
                this.currentIndex = 0;
                this.playList = playList.slice();
                this.play();
            }
            else {
                if (playList.length == 1) {
                    var music_1 = playList[0];
                    // 需要播放的索引
                    var index_1 = 0;
                    // 歌曲已经存在列表中 拿到这条数据索引 执行播放操作。 
                    var existence = this.playList.some(function (element, i) {
                        var exis = element.id == music_1.id;
                        if (exis) {
                            index_1 = i;
                        }
                        return exis;
                    });
                    if (existence) {
                        //歌曲存在列表中 不进行添加操作
                    }
                    else {
                        this.playList.push(music_1);
                        index_1 = this.playList.length - 1;
                    }
                    this.currentIndex = index_1;
                    this.play();
                }
                else {
                    this.playList = this.playList.concat(playList);
                }
            }
            // console.log("addPlayList", this);
            return this.playList;
        }
    };
    /**
     * 计算索引
     * @param index
     */
    ObservableStore.prototype.computationalIndex = function (index) {
        if (index === void 0) { index = 0; }
    };
    /**
     * 上
     */
    ObservableStore.prototype.last = function (pattern) {
        this.currentIndex > 0 ? this.currentIndex-- : undefined;
        this.play();
    };
    /**
     * 下
     */
    ObservableStore.prototype.next = function (pattern) {
        this.currentIndex < this.playList.length ? this.currentIndex++ : this.currentIndex = 0;
        this.play();
    };
    /**
     * 播放歌曲
     * getMusic 获取歌曲地址
     * getLyric 获取歌词信息
     * 默认缓存下一首歌曲地址。
     */
    ObservableStore.prototype.play = function (currentIndex) {
        return __awaiter(this, void 0, void 0, function () {
            var ids, play, cachePlay;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (currentIndex) {
                            this.currentIndex = currentIndex;
                        }
                        ids = [];
                        play = this.playList[this.currentIndex];
                        cachePlay = this.playList[this.currentIndex + 1];
                        if (!(play && play.id)) return [3 /*break*/, 3];
                        ids.push(play.id);
                        if (cachePlay && cachePlay.id) {
                            ids.push(cachePlay.id);
                        }
                        return [4 /*yield*/, this.getMusic(ids.join(","))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getLyric(play.id)];
                    case 2:
                        _a.sent();
                        // 存储当前播放歌曲信息
                        this.current = {
                            //歌词
                            lyric: this.formatLyric(this.lyricList[play.id]),
                            // 音乐地址信息
                            music: this.musicList[play.id],
                            // 歌曲信息
                            play: this.playList[this.currentIndex],
                        };
                        __WEBPACK_IMPORTED_MODULE_2__play__["a" /* default */].setUrl(this.current.music.url);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 格式化 歌词
     * 将服务器返回字符串格式化成 [{time:时间段毫秒,lyric:歌词}] 数组形式
     * [01:41.51][00:15.52]一开始 我以为 爱本来会很容易↵[01:50.24][00:24.19]所以没有 经过允许 就把你放心底↵[01:58.24][00:32.29]直到后来有一天 你和他走在一起↵[02:06.11][00:40.30]我才发现 原来爱情 不是真心就可以↵[03:27.02][03:11.50][02:33.15][02:16.63][01:07.23][00:50.82]我感动天 感动地 怎么感动不了你↵[03:20.26][02:26.06][01:00.16]明明知道 没有结局 却还死心塌地↵[03:36.07][02:42.13][01:16.28]总相信爱情会有奇迹 都是我骗自己↵[02:52.81]以为自己不再去想你↵[02:57.10]保持不被刺痛的距离↵[03:01.19]就算早已忘了我自己↵[03:04.33]却还想要知道你的消息↵
     * @param param 服务器返回的歌词数据
     */
    ObservableStore.prototype.formatLyric = function (param) {
        var regTime = /(\[\d{2}:\d{2}.\d*\])/g; //匹配 单个[01:50.24]
        var regStr = /(\[.*])/g; //匹配 整个[01:50.24]...替换使用
        var regD = /\d{2}/g; //匹配 [01:50.24] 中的 数字转换成功毫秒时间点
        var lyrics = [];
        if (param && param.lrc && param.lrc.lyric) {
            //根据换行符 分解歌词
            param.lrc.lyric.split('\n').map(function (x) {
                var times = x.match(regTime); //时间段
                var lyr = x.replace(regStr, ""); //歌词
                if (times) {
                    //同一条歌词存在 多个时间点   :[03:27.02][03:11.50][02:33.15][02:16.63][01:07.23][00:50.82]我感动天 感动地 怎么感动不了你
                    times.map(function (t) {
                        var time = t.match(regD).map(function (tt) { return parseInt(tt); });
                        lyrics.push({
                            time: time[0] * 60000 + time[1] * 1000 + time[2],
                            lyric: lyr
                        });
                    });
                }
            });
        }
        // 返回  根据 时间点 排序 后的数组
        lyrics = lyrics.sort(function (a, b) { return a.time - b.time; });
        // .map((x, i, arr) => {
        //     let length = 0;
        //     try {
        //         let next = arr[i + 1];
        //         length = next.time - x.time;
        //     } catch (error) {
        //     }
        //     return { ...x, length: length };
        // })
        // console.log(lyrics);
        return lyrics;
    };
    // 缓存
    // async cachePlay() {
    //     let ids = [];
    //     for (let i = 1, len = this.playList.length; i < len; i++) {
    //         const cachePlay = this.playList[i];
    //         if (cachePlay && cachePlay.id) {
    //             ids.push(cachePlay.id);
    //         }
    //     }
    //     const music = await this.getMusic(ids.join(","));
    // }
    /**
     * 获取 歌曲地址
     * 先从内存数据中读取，如果内存存在这条数据跳过http请求。
     * @param ids /music/url?id=347230,347231
     */
    ObservableStore.prototype.getMusic = function (ids) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var keys, id, res, musicList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        keys = ids.toString().split(",");
                        id = keys.filter(function (key) { return !_this.musicList.hasOwnProperty(key); });
                        res = { data: [] };
                        if (!id.length) return [3 /*break*/, 2];
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__utils_http__["a" /* default */].get("music/url?id=" + id.join(","))];
                    case 1:
                        res = _a.sent();
                        _a.label = 2;
                    case 2:
                        musicList = {};
                        res.data.map(function (x) {
                            musicList[x.id] = x;
                        });
                        this.musicList = __assign({}, this.musicList, musicList);
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    /**
     * 获取 歌曲地址
     * 先从内存数据中读取，如果内存存在这条数据跳过http请求。
     * @param id /lyric?id=347230
     */
    ObservableStore.prototype.getLyric = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var res, lyric;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        res = {};
                        lyric = {};
                        if (!!this.lyricList.hasOwnProperty(id)) return [3 /*break*/, 2];
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__utils_http__["a" /* default */].get("lyric?id=" + id)];
                    case 1:
                        res = _a.sent();
                        lyric[id] = res;
                        _a.label = 2;
                    case 2:
                        this.lyricList = __assign({}, this.lyricList, lyric);
                        return [2 /*return*/, res];
                }
            });
        });
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* observable */]
    ], ObservableStore.prototype, "playList", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* observable */]
    ], ObservableStore.prototype, "musicList", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* observable */]
    ], ObservableStore.prototype, "lyricList", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* observable */]
    ], ObservableStore.prototype, "currentIndex", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* observable */]
    ], ObservableStore.prototype, "current", void 0);
    return ObservableStore;
}());
var Store = new ObservableStore();
console.log("Store----Music", Store);
/* harmony default export */ __webpack_exports__["a"] = (Store);


/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_help__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music__ = __webpack_require__(452);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// useStrict(true);


var ObservableStore = /** @class */ (function () {
    function ObservableStore() {
        // 音乐播放标签
        this.audio = document.createElement("audio");
        // 歌曲地址
        this.url = "";
        // 播放状态
        this.playState = false;
        // 当前播放位置
        this.currentProportion = 0;
        this.currentTime = "00:00";
        this.currentTimeS = 0; //毫秒位置
        // 歌曲长度
        this.duration = 0;
        this.durationTime = "00:00";
        // 歌曲缓存长度
        this.cacheTime = 0;
        // 播放模式  循环 loop 随机 random  单曲 single 
        this.pattern = "loop";
        // 播放器样式 footer  screen
        this.patternStyle = "footer";
        // 显示播放列表
        this.showList = false;
        // 显示歌词
        this.showLyric = false;
        this.audio.autoplay = true;
        this.addEventListener();
    }
    /**
     * 设置播放地址
     * @param url
     */
    ObservableStore.prototype.setUrl = function (url) {
        this.url = url;
        if (this.url && this.audio.src != this.url) {
            this.audio.src = this.url;
        }
    };
    /**
     * 显示播放列表
     */
    ObservableStore.prototype.updateShowList = function () {
        this.showList = !this.showList;
    };
    /**
   * 显示歌词
   */
    ObservableStore.prototype.updateShowLyric = function () {
        this.showLyric = !this.showLyric;
    };
    /**
     * 设置播放状态
     * @param state
     */
    ObservableStore.prototype.updatePlayState = function (state) {
        if (state === void 0) { state = true; }
        if (!this.duration) {
            return;
        }
        this.playState = state;
        if (this.playState) {
            if (this.audio.paused) {
                this.audio.play();
            }
        }
        else {
            if (!this.audio.paused) {
                this.audio.pause();
            }
        }
    };
    /**
     * 修改 播放位置
     * @param proportion 比例
     */
    ObservableStore.prototype.updateCurrentTime = function (proportion) {
        if (!this.duration) {
            return;
        }
        this.audio.currentTime = this.duration * proportion;
    };
    /**
     * 修改播放模式
     * @param pattern
     */
    ObservableStore.prototype.updatePattern = function (pattern) {
        if (this.pattern == pattern) {
            return;
        }
        if (pattern == "loop" || pattern == "random" || pattern == "single") {
            this.pattern = pattern;
        }
        else {
            throw "pattern = loop || random || single";
        }
    };
    /**
     * 修改播放器样式
     * @param style
     */
    ObservableStore.prototype.updatePatternStyle = function (style) {
        if (this.patternStyle == style) {
            return;
        }
        if (style == "footer" || style == "screen") {
            this.showList = false;
            this.patternStyle = style;
        }
        else {
            throw "patternStyle = footer || screen";
        }
    };
    /**
     * 添加播放事件
     */
    ObservableStore.prototype.addEventListener = function () {
        var _this = this;
        // 当浏览器开始查找音频/视频时
        this.audio.addEventListener("loadstart", function (e) {
        });
        // 当音频/视频的时长已更改时
        this.audio.addEventListener("durationchange", function (e) {
        });
        // 当浏览器已加载音频/视频的元数据时
        this.audio.addEventListener("loadedmetadata", function (e) {
            _this.duration = _this.audio.duration;
            _this.durationTime = __WEBPACK_IMPORTED_MODULE_1__utils_help__["a" /* default */].DateFormat(_this.duration * 1000, "mm:ss");
        });
        // 当浏览器已加载音频/视频的当前帧时
        this.audio.addEventListener("loadeddata", function (e) {
        });
        // 当浏览器正在下载音频/视频时
        this.audio.addEventListener("progress", function (e) {
            try {
                _this.cacheTime = (_this.audio.buffered.end(_this.audio.buffered.length - 1) / _this.duration) * 100;
            }
            catch (error) {
            }
        });
        // 当浏览器可以播放音频/视频时
        this.audio.addEventListener("canplay", function (e) {
        });
        // 当浏览器可在不因缓冲而停顿的情况下进行播放时
        this.audio.addEventListener("canplaythrough", function (e) {
        });
        // 当音频/视频在已因缓冲而暂停或停止后已就绪时
        this.audio.addEventListener("playing", function (e) {
        });
        // 当音频/视频的播放速度已更改时
        this.audio.addEventListener("ratechange", function (e) {
        });
        // 当目前的播放位置已更改时
        this.audio.addEventListener("timeupdate", function (e) {
            if (!_this.duration) {
                return;
            }
            var currentProportion = (_this.audio.currentTime / _this.duration) * 100;
            if (currentProportion > 99.4) {
                currentProportion = 99.4;
            }
            _this.currentTimeS = _this.audio.currentTime * 1000;
            _this.currentTime = __WEBPACK_IMPORTED_MODULE_1__utils_help__["a" /* default */].DateFormat(new Date(_this.currentTimeS), "mm:ss");
            _this.currentProportion = currentProportion;
        });
        // 当目前的播放列表已结束时
        this.audio.addEventListener("ended", function (e) {
            __WEBPACK_IMPORTED_MODULE_2__music__["a" /* default */].next(_this.pattern);
        });
        //当浏览器尝试获取媒体数据，但数据不可用时
        this.audio.addEventListener("stalled", function (e) {
        });
        // 当在音频/视频加载期间发生错误时
        this.audio.addEventListener("error", function (e) {
        });
        // 开始播放
        this.audio.addEventListener("play", function (e) {
            _this.updatePlayState(true);
        });
        //暂停
        this.audio.addEventListener("pause", function (e) {
            _this.updatePlayState(false);
        });
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* observable */]
    ], ObservableStore.prototype, "url", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* observable */]
    ], ObservableStore.prototype, "playState", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* observable */]
    ], ObservableStore.prototype, "currentProportion", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* observable */]
    ], ObservableStore.prototype, "currentTime", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* observable */]
    ], ObservableStore.prototype, "currentTimeS", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* observable */]
    ], ObservableStore.prototype, "duration", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* observable */]
    ], ObservableStore.prototype, "durationTime", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* observable */]
    ], ObservableStore.prototype, "cacheTime", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* observable */]
    ], ObservableStore.prototype, "pattern", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* observable */]
    ], ObservableStore.prototype, "patternStyle", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* observable */]
    ], ObservableStore.prototype, "showList", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* observable */]
    ], ObservableStore.prototype, "showLyric", void 0);
    return ObservableStore;
}());
var Store = new ObservableStore();
console.log("Play", Store);
/* harmony default export */ __webpack_exports__["a"] = (Store);


/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__play__ = __webpack_require__(1068);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__play__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(1083);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);




/***/ }),

/***/ 455:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 456:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_index__ = __webpack_require__(1092);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__details_index__ = __webpack_require__(1094);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__details_index__["a"]; });




/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);

// const address = "/api/"
var Http = /** @class */ (function () {
    function Http() {
        this.axios = __WEBPACK_IMPORTED_MODULE_0_axios___default.a;
        this.address = "/";
        if (window.location.port == "3002") {
            this.address = "/api/";
        }
    }
    Http.prototype.post = function (url, data, config) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post("" + _this.address + url, data, config).then(function (x) {
                // console.log(x);
                if (x.status == 200) {
                    resolve(x.data.data);
                }
                else {
                    reject(x.data);
                }
            }).catch(function (e) {
                reject(e);
            });
        });
    };
    Http.prototype.get = function (url, config) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get("" + _this.address + url, config).then(function (x) {
                // console.log(x);
                if (x.status == 200 && x.data.code == 200) {
                    resolve(x.data);
                }
                else {
                    reject(x.data);
                }
            }).catch(function (e) {
                reject(e);
            });
        });
    };
    return Http;
}());
/* harmony default export */ __webpack_exports__["a"] = (new Http());


/***/ })

},[1050]);
//# sourceMappingURL=app.js.map
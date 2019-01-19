(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("express"), require("crypto"), require("request"), require("path"), require("apicache"), require("connect-history-api-fallback"), require("big-integer"), require("querystring"), require("http"));
	else if(typeof define === 'function' && define.amd)
		define(["express", "crypto", "request", "path", "apicache", "connect-history-api-fallback", "big-integer", "querystring", "http"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("express"), require("crypto"), require("request"), require("path"), require("apicache"), require("connect-history-api-fallback"), require("big-integer"), require("querystring"), require("http")) : factory(root["express"], root["crypto"], root["request"], root["path"], root["apicache"], root["connect-history-api-fallback"], root["big-integer"], root["querystring"], root["http"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_55__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Encrypt = __webpack_require__(10);
const request = __webpack_require__(3);
const querystring = __webpack_require__(12);

// request.debug = true;

function randomUserAgent() {
  const userAgentList = [
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
    "Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Mobile Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_2 like Mac OS X) AppleWebKit/603.2.4 (KHTML, like Gecko) Mobile/14F89;GameHelper",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/603.2.4 (KHTML, like Gecko) Version/10.1.1 Safari/603.2.4",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 10_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/10.0 Mobile/14A300 Safari/602.1",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:46.0) Gecko/20100101 Firefox/46.0",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:46.0) Gecko/20100101 Firefox/46.0",
    "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)",
    "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)",
    "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)",
    "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Win64; x64; Trident/6.0)",
    "Mozilla/5.0 (Windows NT 6.3; Win64, x64; Trident/7.0; rv:11.0) like Gecko",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/13.10586",
    "Mozilla/5.0 (iPad; CPU OS 10_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/10.0 Mobile/14A300 Safari/602.1"
  ];
  const num = Math.floor(Math.random() * userAgentList.length);
  return userAgentList[num];
}

function createWebAPIRequest(
  host,
  path,
  method,
  data,
  cookie,
  callback,
  errorcallback
) {
  console.log(cookie);
  const proxy = cookie.split("__proxy__")[1];
  cookie = cookie.split("__proxy__")[0];
  const cryptoreq = Encrypt(data);
  const options = {
    url: `http://${host}${path}`,
    method: method,
    headers: {
      Accept: "*/*",
      "Accept-Language": "zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4",
      Connection: "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded",
      Referer: "http://music.163.com",
      Host: "music.163.com",
      Cookie: cookie,
      "User-Agent": randomUserAgent()
    },
    body: querystring.stringify({
      params: cryptoreq.params,
      encSecKey: cryptoreq.encSecKey
    }),
    proxy: proxy
  };

  request(options, function (error, res, body) {
    if (error) {
      errorcallback(error);
    } else {
      //解决 网易云有些 cookie 添加了 .music.163.com 域设置。
      //如： Domain=.music.163.com
      let cookie = res.headers["set-cookie"];
      if (Array.isArray(cookie)) {
        cookie = cookie.map(x => x.replace(/.music.163.com/g, "")).sort((a, b) => a.length - b.length)
      }
      callback(body, cookie);
    }
  });
}

function createRequest(path, method, data) {
  return new Promise((resolve, reject) => {
    const options = {
      url: `http://music.163.com${path}`,
      method: method,
      headers: {
        Referer: "http://music.163.com",
        Cookie: "appver=1.5.2",
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": randomUserAgent()
      }
    };

    if (method.toLowerCase() === "post") {
      options.body = data;
    }

    request(options, function (error, res, body) {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
}
module.exports = {
  createWebAPIRequest,
  createRequest
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const server = __webpack_require__(6);
const express = __webpack_require__(0);
const path = __webpack_require__(4);
module.exports = function (port, url) {
    server(port, express.static(path.join(__dirname, "www")));
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0);
const apicache = __webpack_require__(7);
const path = __webpack_require__(4);
const history =  __webpack_require__(8)

const app = express();
let cache = apicache.middleware;

// 跨域设置
app.all("*", function(req, res, next) {
  if (req.path !== "/" && !req.path.includes(".")) {
    res.header("Access-Control-Allow-Credentials", true);
    // 这里获取 origin 请求头 而不是用 *
    res.header("Access-Control-Allow-Origin", req.headers["origin"] || "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
  }
  next();
});

const onlyStatus200 = (req, res) => res.statusCode === 200;

app.use(cache("2 minutes", onlyStatus200));

app.use(express.static(path.resolve(__dirname, "public")));

app.use(function(req, res, next) {
  const proxy = req.query.proxy;
  if (proxy) {
    req.headers.cookie = req.headers.cookie + `__proxy__${proxy}`;
  }
  next();
});

// 获取专辑内容
app.use("/album", __webpack_require__(9));

// 获取歌手单曲
app.use("/artists", __webpack_require__(13));

// 获取歌手专辑列表
app.use("/artist/album", __webpack_require__(14));

//艺术家-信息
app.use("/artist/desc", __webpack_require__(15));

//艺术家-mv
app.use("/artist/mv", __webpack_require__(16));

// 获取 banner
app.use("/banner", __webpack_require__(17));

app.use("/check/music", __webpack_require__(18));

app.use("/comment/music", __webpack_require__(19));

app.use("/comment/mv", __webpack_require__(20));

app.use("/comment/album", __webpack_require__(21));

app.use("/comment/playlist", __webpack_require__(22));

//未知 api
app.use("/comment/like", __webpack_require__(23));

app.use("/comment/dj", __webpack_require__(24));

//签到
app.use("/daily_signin", __webpack_require__(25));

//djradio detail
app.use("/dj/detail", __webpack_require__(26));

//dj主播 radio
app.use("/dj/program", __webpack_require__(27));

app.use("/dj/program/detail", __webpack_require__(28));

app.use("/dj/sub", __webpack_require__(29));

app.use("/dj/catelist", __webpack_require__(30));

app.use("/dj/hot", __webpack_require__(31));

// 精选电台
app.use("/dj/recommend", __webpack_require__(32));

//精选电台-分类电台
app.use("/dj/recommend/type", __webpack_require__(33));

//获取动态
app.use("/event", __webpack_require__(34));

//垃圾桶
app.use("/fm_trash", __webpack_require__(35));

app.use("/follow", __webpack_require__(36));

// 喜欢歌曲
app.use("/like", __webpack_require__(37));

app.use("/likelist", __webpack_require__(38));

//手机登录
app.use("/login/cellphone", __webpack_require__(39));

//邮箱登录
app.use("/login", __webpack_require__(40));

//登录刷新
app.use("/login/refresh", __webpack_require__(41));

// 不明 api
app.use("/log/web", __webpack_require__(42));

// 获取歌词
app.use("/lyric", __webpack_require__(43));

// 获取音乐 url
app.use("/music/url", __webpack_require__(44));

//最新 mv
app.use("/mv/first", __webpack_require__(45));

//播放 mv
app.use("/mv/url", __webpack_require__(46));

//mv
app.use("/mv", __webpack_require__(47));

// 私人 FM
app.use("/personal_fm", __webpack_require__(48));

//推荐歌单
app.use("/personalized", __webpack_require__(49));

//推荐dj
app.use("/personalized/djprogram", __webpack_require__(50));

//推荐新音乐
app.use("/personalized/newsong", __webpack_require__(51));

//独家放送
app.use(
  "/personalized/privatecontent",
  __webpack_require__(52)
);

//推荐mv
app.use("/personalized/mv", __webpack_require__(53));

// 获取歌单内列表
app.use("/playlist/detail", __webpack_require__(54));

//收藏单曲到歌单,从歌单删除歌曲 op=del,add;pid=歌单id,tracks=歌曲id
app.use("/playlist/tracks", __webpack_require__(56));

app.use("/playlist/hot", __webpack_require__(57));

app.use("/playlist/catlist", __webpack_require__(58));

//推荐节目
app.use("/program/recommend", __webpack_require__(59));

// 获取每日推荐歌曲
app.use("/recommend/songs", __webpack_require__(60));

// 获取每日推荐歌单
app.use("/recommend/resource", __webpack_require__(61));

//取消推荐
app.use("/recommend/dislike", __webpack_require__(62));

app.use("/resource/like", __webpack_require__(63));

// 搜索
app.use("/search", __webpack_require__(64));

//搜索 multimatch
app.use("/search/multimatch", __webpack_require__(65));

// 搜索 suggest,搜索结果包含单曲,歌手,歌单,mv信息
app.use("/search/suggest", __webpack_require__(66));

//simi ,相似歌单
app.use("/simi/playlist", __webpack_require__(67));

//simi ,相似歌曲
app.use("/simi/song", __webpack_require__(68));

//相似 mv
app.use("/simi/mv", __webpack_require__(69));

//simi ,相似关注的用户
app.use("/simi/user", __webpack_require__(70));

//相似歌手
app.use("/simi/artist", __webpack_require__(71));

// 获取音乐详情
app.use("/song/detail", __webpack_require__(72));

// 新碟上架 http://music.163.com/#/discover/album/
app.use("/top/album", __webpack_require__(73));

// 热门歌手 http://music.163.com/#/discover/artist/
app.use("/top/artists", __webpack_require__(74));

app.use("/top/list", __webpack_require__(75));

app.use("/top/mv", __webpack_require__(76));

//分类歌单
app.use("/top/playlist", __webpack_require__(77));

//精品歌单
app.use(
  "/top/playlist/highquality",
  __webpack_require__(78)
);

app.use("/top/song", __webpack_require__(79));

app.use("/toplist", __webpack_require__(80));

app.use("/toplist/artist", __webpack_require__(81));

app.use("/toplist/detail", __webpack_require__(82));

// 获取用户歌单
app.use("/user/playlist", __webpack_require__(83));

// 获取用户电台
app.use("/user/audio", __webpack_require__(84));

//云盘数据
app.use("/user/cloud", __webpack_require__(85));

//云盘数据详情? 暂时不要使用
app.use("/user/cloud/search", __webpack_require__(86));
//用户动态
app.use("/user/event", __webpack_require__(87));

app.use("/user/detail", __webpack_require__(88));

app.use("/user/dj", __webpack_require__(89));

app.use("/user/followeds", __webpack_require__(90));

app.use("/user/follows", __webpack_require__(91));

app.use("/user/subcount", __webpack_require__(92));

app.use("/user/record", __webpack_require__(93));

app.use(history());
// const port = process.env.PORT || 4001
module.exports = function (port, url) {
  port = port || 4001
  if (typeof url == "function") {
    app.use(url)
  } else {
    app.use(express.static(url || path.join(path.dirname(__dirname), "webMusic", "build")))
  }
  // app.use(function(req, res, next) {
  //   res.status(404).render("./");
  // });
  app.listen(port, () => {
    console.log(`server running @${port}`)
  })
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("apicache");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("connect-history-api-fallback");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    csrf_token: ''
  }
  const id = req.query.id
  createWebAPIRequest(
    'music.163.com',
    `/weapi/v1/album/${id}`,
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 参考 https://github.com/darknessomi/musicbox/wiki/

const crypto = __webpack_require__(2)
const bigInt = __webpack_require__(11)
const modulus =
  '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7'
const nonce = '0CoJUm6Qyw8W8jud'
const pubKey = '010001'

String.prototype.hexEncode = function() {
  let hex, i

  let result = ''
  for (i = 0; i < this.length; i++) {
    hex = this.charCodeAt(i).toString(16)
    result += ('' + hex).slice(-4)
  }
  return result
}

function createSecretKey(size) {
  const keys = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let key = ''
  for (let i = 0; i < size; i++) {
    let pos = Math.random() * keys.length
    pos = Math.floor(pos)
    key = key + keys.charAt(pos)
  }
  return key
}

function aesEncrypt(text, secKey) {
  const _text = text
  const lv = new Buffer('0102030405060708', 'binary')
  const _secKey = new Buffer(secKey, 'binary')
  const cipher = crypto.createCipheriv('AES-128-CBC', _secKey, lv)
  let encrypted = cipher.update(_text, 'utf8', 'base64')
  encrypted += cipher.final('base64')
  return encrypted
}

function zfill(str, size) {
  while (str.length < size) str = '0' + str
  return str
}

function rsaEncrypt(text, pubKey, modulus) {
  const _text = text.split('').reverse().join('')
  const biText = bigInt(new Buffer(_text).toString('hex'), 16),
    biEx = bigInt(pubKey, 16),
    biMod = bigInt(modulus, 16),
    biRet = biText.modPow(biEx, biMod)
  return zfill(biRet.toString(16), 256)
}

function Encrypt(obj) {
  const text = JSON.stringify(obj)
  const secKey = createSecretKey(16)
  const encText = aesEncrypt(aesEncrypt(text, nonce), secKey)
  const encSecKey = rsaEncrypt(secKey, pubKey, modulus)
  return {
    params: encText,
    encSecKey: encSecKey
  }
}

module.exports = Encrypt


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("big-integer");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    csrf_token: ''
  }
  const id = req.query.id
  const offset = req.query.offset || 0
  const limit = req.query.limit || 50
  createWebAPIRequest(
    'music.163.com',
    `/weapi/v1/artist/${id}?offset=${offset}&limit=${limit}`,
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const id = req.query.id
  const data = {
    offset: req.query.offset || 0,
    total: true,
    limit: req.query.limit || 30,
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    `/weapi/artist/albums/${id}`,
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const id = req.query.id
  const data = {
    id,
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    `/weapi/artist/introduction`,
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const id = req.query.id
  const data = {
    artistId: id,
    total: true,
    offset: req.query.offset,
    limit: req.query.limit,
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    `/weapi/artist/mvs`,
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {}
  createWebAPIRequest(
    'music.163.com',
    '/weapi/v2/banner/get',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const request = __webpack_require__(3)
const { createWebAPIRequest } = __webpack_require__(1)
router.get('/', (req, res) => {
  const id = parseInt(req.query.id)
  const br = parseInt(req.query.br || 999000)
  const data = {
    ids: [id],
    br: br,
    csrf_token: ''
  }
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''

  createWebAPIRequest(
    'music.163.com',
    '/weapi/song/enhance/player/url',
    'POST',
    data,
    cookie,
    music_req => {
      if (JSON.parse(music_req).code == 200) {
        return res.send({ success: true, message: 'ok' })
      }
      return res.send({ success: false, message: '亲爱的,暂无版权' })
    },
    err => {
      res.status(502).send('fetch error')
    }
  )
})

module.exports = router


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0);
const router = express();
const { createWebAPIRequest } = __webpack_require__(1);

router.get("/", (req, res) => {
  const rid = req.query.id;
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const data = {
    offset: req.query.offset || 0,
    rid: rid,
    limit: req.query.limit || 20,
    csrf_token: ""
  };
  createWebAPIRequest(
    "music.163.com",
    `/weapi/v1/resource/comments/R_SO_4_${rid}/?csrf_token=`,
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
    },
    err => res.status(502).send(err.message)
  );
});

module.exports = router;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const rid = req.query.id
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    offset: req.query.offset || 0,
    rid: rid,
    limit: req.query.limit || 20,
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    `/weapi/v1/resource/comments/R_MV_5_${rid}/?csrf_token=`,
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const rid = req.query.id
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    offset: req.query.offset || 0,
    rid: rid,
    limit: req.query.limit || 20,
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    `/weapi/v1/resource/comments/R_AL_3_${rid}/?csrf_token=`,
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const rid = req.query.id
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    offset: req.query.offset || 0,
    rid: rid,
    limit: req.query.limit || 20,
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    `/weapi/v1/resource/comments/A_PL_0_${rid}/?csrf_token=`,
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

//comment like
const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const cid = req.query.cid //评论 id
  const id = req.query.id //  歌曲 id
  const typeMap = {
    0: 'R_SO_4_', //歌曲
    1: 'R_MV_5_', //mv
    2: 'A_PL_0_', //歌单
    3: 'R_AL_3_', //专辑
    4: 'A_DJ_1_' //电台
  }
  const type = typeMap[req.query.type]
  const data = {
    threadId: `${type}${id}`,
    commentId: cid,
    csrf_token: ''
  }
  const action = req.query.t == 1 ? 'like' : 'unlike'

  const url = `/weapi/v1/comment/${action}`
  createWebAPIRequest(
    'music.163.com',
    url,
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const rid = req.query.id
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    offset: req.query.offset || 0,
    rid: rid,
    limit: req.query.limit || 20,
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    `/weapi/v1/resource/comments/A_DJ_1_${rid}/?csrf_token=`,
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 签到
const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  let type = req.query.type || 0 //0为安卓端签到 3点经验,1为网页签到,2点经验
  const data = {
    csrf_token: '',
    type
  }
  // {'android': {'point': 3, 'code': 200}, 'web': {'point': 2, 'code': 200}}
  // {'android': {'code': -2, 'msg': '重复签到'}, 'web': {'code': -2, 'msg': '重复签到'}}
  // 'android': {'code': 301}, 'web': {'code': 301}}

  createWebAPIRequest(
    'music.163.com',
    '/weapi/point/dailyTask',
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const rid = req.query.rid
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    id: rid,
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/djradio/get',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const rid = req.query.rid
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    asc: req.query.asc,
    radioId: rid,
    limit: req.query.limit,
    offset: req.query.offset,
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/dj/program/byradio',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    id: req.query.id,
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/dj/program/detail',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    id: req.query.rid,
    csrf_token: ''
  }
  const action = req.query.t == 1 ? 'sub' : 'unsub'
  createWebAPIRequest(
    'music.163.com',
    `/weapi/djradio/${action}`,
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/djradio/category/get',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    cat: req.query.type,
    cateId: req.query.type,
    type: req.query.type,
    categoryId: req.query.type,
    category: req.query.type,
    limit: req.query.limit,
    offset: req.query.offset,
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/djradio/hot/v1',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/djradio/recommend/v1',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    cateId: req.query.type,
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/djradio/recommend',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/v1/event/get',
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const songId = req.query.id
  const alg = 'RT'
  const time = req.query.time || 25
  const data = {
    csrf_token: '',
    songId
  }

  createWebAPIRequest(
    'music.163.com',
    `/weapi/radio/trash/add?alg=${alg}&songId=${songId}&time=${time}`,
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    csrf_token: ''
  }
  const url = req.query.type == 'add' ? 'follow' : 'delfollow'
  const id = req.query.id
  createWebAPIRequest(
    'music.163.com',
    `/weapi/user/${url}/${id}`,
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const trackId = req.query.id
  const like = req.query.like || true
  const alg = req.query.alg || 'itembased'
  const time = req.query.time || 25
  const data = {
    csrf_token: '',
    trackId,
    like
  }
  createWebAPIRequest(
    'music.163.com',
    `/weapi/radio/like?alg=${alg}&trackId=${trackId}&like=${like}&time=${time}`,
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    uid: req.query.uid,
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    `/weapi/song/like/get`,
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0);
const crypto = __webpack_require__(2);
const router = express();
const {
  createWebAPIRequest
} = __webpack_require__(1);

router.get("/", (req, res) => {
  const phone = req.query.phone;
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const md5sum = crypto.createHash("md5");
  md5sum.update(req.query.password);
  const data = {
    phone: phone,
    password: md5sum.digest("hex"),
    rememberLogin: "true"
  };
  createWebAPIRequest(
    "music.163.com",
    "/weapi/login/cellphone",
    "POST",
    data,
    cookie,
    (music_req, cookie) => {
      res.set({
        "Set-Cookie": cookie
      });
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
});

module.exports = router;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const crypto = __webpack_require__(2)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const email = req.query.email
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const md5sum = crypto.createHash('md5')
  md5sum.update(req.query.password)
  const data = {
    username: email,
    password: md5sum.digest('hex'),
    rememberLogin: 'true',
    clientToken:
      '1_jVUMqWEPke0/1/Vu56xCmJpo5vP1grjn_SOVVDzOc78w8OKLVZ2JH7IfkjSXqgfmh'
  }
  console.log(email, req.query.password)

  createWebAPIRequest(
    'music.163.com',
    '/weapi/login?csrf_token=',
    'POST',
    data,
    cookie,
    (music_req, cookie) => {
      // console.log(music_req)
      cookie = cookie&&cookie.map(x => x.replace("Domain=.music.163.com", ""))
      res.set({
        'Set-Cookie': cookie
      })
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    `/weapi/login/token/refresh`,
    'POST',
    data,
    cookie,
    (music_req, cookie) => {
      res.set({
        'Set-Cookie': cookie
      })
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    csrf_token: ''
  }

  createWebAPIRequest(
    'music.163.com',
    '/weapi/feedback/weblog',
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {}
  const id = req.query.id
  createWebAPIRequest(
    'music.163.com',
    '/weapi/song/lyric?os=osx&id=' + id + '&lv=-1&kv=-1&tv=-1',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const id = req.query.id
  const br = req.query.br || 999000
  const data = {
    ids: [id],
    br: br,
    csrf_token: ''
  }
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''

  createWebAPIRequest(
    'music.163.com',
    '/weapi/song/enhance/player/url',
    'POST',
    data,
    cookie,
    music_req => {
      res.setHeader('Content-Type', 'application/json')
      res.send(music_req)
    },
    err => {
      res.status(502).send('fetch error')
    }
  )
})

module.exports = router


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

//最新mv
const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

// type ALL, ZH,EA,KR,JP
router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    // 'offset': req.query.offset || 0,
    total: true,
    limit: req.query.limit || 30,
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/mv/first',
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const request = __webpack_require__(3)

router.get('/', (req, res) => {
  const url = req.query.url
  const headers = {
    Referer: 'http://music.163.com/',
    Cookie: 'appver=1.5.0.75771;',
    'Content-Type': 'video/mp4',
    Location: url
  }
  const options = {
    header: headers,
    url: url
  }
  request(options)
    .on('error', err => {
      res.send({ err })
    })
    .pipe(res)
})

module.exports = router


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const mvid = req.query.mvid
  const data = {
    id: mvid
  }

  createWebAPIRequest(
    'music.163.com',
    `/weapi/mv/detail`,
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/v1/radio/get',
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0);
const router = express();
const { createWebAPIRequest } = __webpack_require__(1);

router.get("/", (req, res) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const data = {
    limit: req.query.limit || 30,
    offset: req.query.limit || 0,
    total: true,
    n: 1000,
    csrf_token: ""
  };
  createWebAPIRequest(
    "music.163.com",
    "/weapi/personalized/playlist",
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
});

module.exports = router;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {}
  createWebAPIRequest(
    'music.163.com',
    '/weapi/personalized/djprogram',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    type: 'recommend'
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/personalized/newsong',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {}
  createWebAPIRequest(
    'music.163.com',
    '/weapi/personalized/privatecontent',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {}
  createWebAPIRequest(
    'music.163.com',
    '/weapi/personalized/mv',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

const http = __webpack_require__(55);
const express = __webpack_require__(0);
const router = express();
const {
  createWebAPIRequest
} = __webpack_require__(1);

router.get("/", (req, res) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const data = {
    id: req.query.id,
    offset: 0,
    total: true,
    limit: 1000,
    n: 1000,
    csrf_token: ""
  };

  createWebAPIRequest(
    "music.163.com",
    "/weapi/v3/playlist/detail",
    "POST",
    data,
    cookie,
    music_req => {
      // console.log(music_req)
      res.send(music_req);
    },
    err => {
      res.status(502).send("fetch error");
    }
  );

  // FIXME:i dont know the api to get coverimgurl
  // so i get it by parsing html
  // const http_client = http.get({
  //   hostname: 'music.163.com',
  //   path: '/playlist?id=' + req.query.id,
  //   headers: {
  //     'Referer': 'http://music.163.com',
  //   },
  // }, function (res) {
  //   res.setEncoding('utf8')
  //   let html = ''
  //   res.on('data', function (chunk) {
  //     html += chunk
  //   })
  //   res.on('end', function () {
  //     console.log('end', html)
  //     const regImgCover = /\<img src=\"(.*)\" class="j-img"/ig
  //     imgurl = regImgCover.exec(html)[1]
  //     mergeRes()

  //   })
  // })

  // function mergeRes() {
  //   if (imgurl != undefined && detail != undefined) {
  //     detail = JSON.parse(detail)
  //     detail.playlist.picUrl = imgurl
  //     res.send(detail)
  //   }
  // }
});

module.exports = router;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)
//收藏单曲到歌单，从歌单删除歌曲 op=del,add;pid=歌单id,tracks=歌曲id
router.get('/', (req, res) => {
  const op = req.query.op
  const pid = req.query.pid
  const tracks = req.query.tracks
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  // console.log('COOKIESS', cookie)
  const data = {
    op: op,
    pid: pid,
    tracks: tracks,
    trackIds: JSON.stringify([tracks]),
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/playlist/manipulate/tracks',
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {}
  createWebAPIRequest(
    'music.163.com',
    '/weapi/playlist/hottags',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/playlist/catalogue',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    cateId: req.query.type,
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/program/recommend/v1',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    offset: 0,
    total: true,
    limit: 20,
    csrf_token: ''
  }

  createWebAPIRequest(
    'music.163.com',
    '/weapi/v1/discovery/recommend/songs',
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    csrf_token: ''
  }

  createWebAPIRequest(
    'music.163.com',
    '/weapi/v1/discovery/recommend/resource',
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    csrf_token: ''
  }

  createWebAPIRequest(
    'music.163.com',
    '/weapi/v1/radio/get',
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    threadId: req.query.id,
    csrf_token: ''
  }
  const action = req.query.t == 1 ? 'like' : 'unlike'
  createWebAPIRequest(
    'music.163.com',
    `/weapi/resource/${action}`,
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0);
const router = express();
const { createWebAPIRequest } = __webpack_require__(1);

router.get("/", (req, res) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const keywords = req.query.keywords;
  const type = req.query.type || 1;
  const limit = req.query.limit || 30;
  const offset = req.query.offset || 0;
  // *(type)* 搜索单曲(1)，歌手(100)，专辑(10)，歌单(1000)，用户(1002)
  const data = {
    csrf_token: "",
    limit,
    type,
    s: keywords,
    offset
  };

  createWebAPIRequest(
    "music.163.com",
    "/weapi/search/get",
    "POST",
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send("fetch error")
  );
});

module.exports = router;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    csrf_token: '',
    type: req.query.type || 1,
    s: req.query.keywords || ''
  }

  createWebAPIRequest(
    'music.163.com',
    '/weapi/search/suggest/multimatch',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    csrf_token: '',
    s: req.query.keywords || ''
  }

  createWebAPIRequest(
    'music.163.com',
    '/weapi/search/suggest/web',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    songid: req.query.id,
    offset: req.query.offset || 0,
    limit: req.query.limit || 50
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/discovery/simiPlaylist',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    songid: req.query.id,
    offset: req.query.offset || 0,
    limit: req.query.limit || 50
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/v1/discovery/simiSong',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    mvid: req.query.mvid
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/discovery/simiMV',
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    songid: req.query.id,
    offset: req.query.offset || 0,
    limit: req.query.limit || 50
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/discovery/simiUser',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const id = req.query.id
  const data = {
    artistid: id,
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    `/weapi/discovery/simiArtist`,
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const id = parseInt(req.query.ids)
  const data = {
    // "id": id,
    c: JSON.stringify([{ id: id }]),
    ids: '[' + id + ']',
    csrf_token: ''
  }
  console.log(data)
  createWebAPIRequest(
    'music.163.com',
    '/weapi/v3/song/detail',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

//最新mv
const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

// type ALL, ZH,EA,KR,JP
router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    offset: req.query.offset || 0,
    total: true,
    limit: req.query.limit || 50,
    area: req.query.type,
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/album/new',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    offset: req.query.offset || 0,
    total: true,
    limit: req.query.limit || 50,
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    `/weapi/artist/top`,
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

const top_list_all = {
  "0": ["云音乐新歌榜", "3779629"],
  "1": ["云音乐热歌榜", "3778678"],
  "2": ["网易原创歌曲榜", "2884035"],
  "3": ["云音乐飙升榜", "19723756"],
  "4": ["云音乐电音榜", "10520166"],
  "5": ["UK排行榜周榜", "180106"],
  "6": ["美国Billboard周榜", "60198"],
  "7": ["KTV嗨榜", "21845217"],
  "8": ["iTunes榜", "11641012"],
  "9": ["Hit FM Top榜", "120001"],
  "10": ["日本Oricon周榜", "60131"],
  "11": ["韩国Melon排行榜周榜", "3733003"],
  "12": ["韩国Mnet排行榜周榜", "60255"],
  "13": ["韩国Melon原声周榜", "46772709"],
  "14": ["中国TOP排行榜(港台榜)", "112504"],
  "15": ["中国TOP排行榜(内地榜)", "64016"],
  "16": ["香港电台中文歌曲龙虎榜", "10169002"],
  "17": ["华语金曲榜", "4395559"],
  "18": ["中国嘻哈榜", "1899724"],
  "19": ["法国 NRJ EuroHot 30周榜", "27135204"],
  "20": ["台湾Hito排行榜", "112463"],
  "21": ["Beatport全球电子舞曲榜", "3812895"],
  "22": ["云音乐ACG音乐榜", "71385702"],
  "23": ["云音乐嘻哈榜", "991319590"]
};
const express = __webpack_require__(0);
const router = express();
const { createWebAPIRequest } = __webpack_require__(1);

router.get("/", (req, res) => {
  const idx = req.query.idx;
  const id = top_list_all[idx][1];
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const action = "/weapi/v3/playlist/detail";
  const data = {
    id,
    limit: req.query.limit || 30,
    offset: req.query.limit || 0,
    total: true,
    n: 1000,
    csrf_token: ""
  };
  createWebAPIRequest(
    "music.163.com",
    action,
    "POST",
    data,
    cookie,
    music_req => {
      res.setHeader("Content-Type", "application/json");
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
});

module.exports = router;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    offset: req.query.offset || 0,
    total: true,
    limit: req.query.limit || 30,
    csrf_token: ''
  }

  createWebAPIRequest(
    'music.163.com',
    '/weapi/mv/toplist',
    'POST',
    data,
    cookie,
    music_req => {
      res.setHeader('Content-Type', 'application/json')
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

//分类歌单
const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  // order可为 'hot' 可为 'new'
  const data = {
    cat: req.query.cat || '全部',
    order: req.query.order || 'hot',
    offset: req.query.offset || 0,
    total: req.query.total ? 'true' : 'false',
    limit: req.query.limit || 50
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/playlist/list',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0);
const router = express();
const { createWebAPIRequest } = __webpack_require__(1);

router.get("/", (req, res) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const data = {
    cat: req.query.cat || "全部",
    offset: req.query.offset || 0,
    limit: req.query.limit || 20,
    csrf_token: ""
  };
  createWebAPIRequest(
    "music.163.com",
    "/weapi/playlist/highquality/list",
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
});

module.exports = router;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

//新歌上架
const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

// type ALL, ZH,EA,KR,JP
router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    offset: req.query.offset,
    total: true,
    limit: req.query.limit,
    area: req.query.type,
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/v1/discovery/new/songs',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// 排行榜
const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/toplist',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

//歌手榜
const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    type: req.query.type,
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    '/eapi/toplist/artist?params=B5CAE4715306477C2EFA74D383640F01BF227BF8E889F80E2E2A442958463A7E589CC99878CFCE88D165B64712332AF39EC61B7E68903B2F9F079E8D1AB99FC61049A6D5B97AF8E6FFE8DA16ED540D2CFA80205B889ACA39F8B05AE593FDF5A094F118FF4600C2025094ECF6EB58F6D424B7A97B21A8C1D7CF0609AF2FBE9FDD88826E1667C889757BA920684C5C425FF01B5514AF1EB08AB7D298DB4D65187829E315F9FFBBEB43C2AE3DC21222B31CEC6FF337957AC122FBCB3E793FC1960151B0BDEBB1565BFD835E7A7D6A2D034A5591070D42C32DA4B69E0061C46D61239221A1C64EF676D891B44D7B855E27C82A7EB376F0B0C27952F2006E302B47DA1DE86C3488D53FD98ED9FDC6AA341DF0ECF92BA2E8F77E41811BF9447973C5C34FFED13E28AC544347F9E6ADF4B0008C371FC41C4490D3C9E1A225791D2170326231C40662633AA93D5CEF9AABC777AF268A4B13C560157339478DFAD5D910C966B43E1F017410DBF06D189E2BD6D0CD2682F343A83994E66CA73B5E2A67A122842BF945F2B434CBDE4C5A589A3A90F70DF1A8B63E7BAFBEB624956C62CFB1114AB841379541E5BB4625F2C28CAEA6A67E77A7EEAA1149D9D0F7E190D3A3408DF88B62FBF27996ABC925A93E5A67B4B0D1D931214BB07064F2BA4DCBA2E548E5A110E9B992C21E3930EB488172929C02C06D76BB193EF923D1906E0A0C4D75F5EB909AE77B0A2E55539A182D0B2533C654F2C90A038406B8850BFC022639F2B3FB7EDF40FD74AEA0B9119E9987D2909C01C587794F53459DB8EE83AA8D15FBEAC71EB3A00D8E40E78FE9A9A4068495D9257B39D8F825086F391FD5E7A48AACA96BC261E334A1929C81633234A0B22C573AEAD05BC8B4216283ACFD9E022950AEC812F554B913B4457FDF68AA2CC5E476922C2670D49154BC1DEB6D464F60DBFAD2BB4144762CD3721F52D42FDAE56DB9C529EDB6FB946CD725B3E2EA2AFDCF3F759D384B4F7F75AAA6F01F8093C8A140B3B388FF57272A6A7E10274290A79CDCA69E37BC066CE8CCD5B4BB4E12DA841B',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// 排行榜详情
const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    id: req.query.id,
    limit: 20,
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/toplist/detail',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0);
const router = express();
const { createWebAPIRequest } = __webpack_require__(1);

router.get("/", (req, res) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const data = {
    offset: req.query.offset || 0,
    uid: req.query.uid,
    limit: req.query.limit || 30, //貌似无效
    csrf_token: ""
  };
  createWebAPIRequest(
    "music.163.com",
    "/weapi/user/playlist",
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
      // console.log(JSON.parse(music_req))
    },
    err => res.status(502).send("fetch error")
  );
});

module.exports = router;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const data = {
    userId: req.query.uid,
    csrf_token: ''
  }
  console.log(data)
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''

  createWebAPIRequest(
    'music.163.com',
    '/weapi/djradio/get/byuser',
    'POST',
    data,
    cookie,
    music_req => {
      res.setHeader('Content-Type', 'application/json')
      res.send(music_req)
    },
    err => {
      res.status(502).send('fetch error')
    }
  )
})

module.exports = router


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const data = {
    limit: req.query.limit || 10,
    offset: req.query.offset || 0,
    csrf_token: ''
  }
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  createWebAPIRequest(
    'music.163.com',
    '/weapi/v1/cloud/get',
    'POST',
    data,
    cookie,
    music_req => {
      res.setHeader('Content-Type', 'application/json')
      res.send(music_req)
    },
    err => {
      res.status(502).send('fetch error')
    }
  )
})

module.exports = router


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const data = {
    byids: req.query.id,
    id: req.query.id,
    csrf_token: ''
  }
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  createWebAPIRequest(
    'music.163.com',
    '/weapi/v1/cloud/get/byids',
    'POST',
    data,
    cookie,
    music_req => {
      res.setHeader('Content-Type', 'application/json')
      res.send(music_req)
    },
    err => {
      res.status(502).send('fetch error')
    }
  )
})

module.exports = router


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const id = req.query.uid
  const data = {
    time: -1,
    getcounts: true,
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    `/weapi/event/get/${id}`,
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// 用户详情
const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const id = req.query.uid
  const data = {
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    `/weapi/v1/user/detail/${id}`,
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// 用户电台
const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const id = req.query.uid
  const data = {
    offset: req.query.offset || '0',
    limit: req.query.limit || 30,
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    `/weapi/dj/program/${id}`,
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    userId: req.query.uid,
    offset: req.query.offset || '0',
    limit: req.query.limit || 30,
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    `/weapi/user/getfolloweds/`,
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const id = req.query.uid
  const data = {
    offset: req.query.offset || '0',
    limit: req.query.limit || 30,
    order: true
  }
  createWebAPIRequest(
    'music.163.com',
    `/weapi/user/getfollows/${id}`,
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/subcount',
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

//播放记录
const express = __webpack_require__(0)
const router = express()
const { createWebAPIRequest } = __webpack_require__(1)

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''

  // type=1时只返回weekData, type=0时返回allData
  const data = {
    type: req.query.type || 0,
    uid: req.query.uid, //用户 id,
    csrf_token: ''
  }
  const action = `/weapi/v1/play/record`
  createWebAPIRequest(
    'music.163.com',
    action,
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router


/***/ })
/******/ ]);
});
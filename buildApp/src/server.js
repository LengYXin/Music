!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var s in o)("object"==typeof exports?exports:e)[s]=o[s]}}(this,function(){return function(e){function t(s){if(o[s])return o[s].exports;var i=o[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,s){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(e,t){e.exports=require("express")},function(e,t,o){function s(){const e=["Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36","Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1","Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1","Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Mobile Safari/537.36","Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Mobile Safari/537.36","Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Mobile Safari/537.36","Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_2 like Mac OS X) AppleWebKit/603.2.4 (KHTML, like Gecko) Mobile/14F89;GameHelper","Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/603.2.4 (KHTML, like Gecko) Version/10.1.1 Safari/603.2.4","Mozilla/5.0 (iPhone; CPU iPhone OS 10_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/10.0 Mobile/14A300 Safari/602.1","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36","Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:46.0) Gecko/20100101 Firefox/46.0","Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:46.0) Gecko/20100101 Firefox/46.0","Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)","Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)","Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)","Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Win64; x64; Trident/6.0)","Mozilla/5.0 (Windows NT 6.3; Win64, x64; Trident/7.0; rv:11.0) like Gecko","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/13.10586","Mozilla/5.0 (iPad; CPU OS 10_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/10.0 Mobile/14A300 Safari/602.1"];return e[Math.floor(Math.random()*e.length)]}function i(e,t,o,u,a,d,f){let l="";const p=r(u),m=n.request({hostname:e,method:o,path:t,headers:{Accept:"*/*","Accept-Language":"zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4",Connection:"keep-alive","Content-Type":"application/x-www-form-urlencoded",Referer:"http://music.163.com",Host:"music.163.com",Cookie:a,"User-Agent":s()}},function(s){s.on("error",function(e){f(e)}),s.setEncoding("utf8"),200==s.statusCode?(s.on("data",function(e){l+=e}),s.on("end",function(){""!=l?s.headers["set-cookie"]?d(l,s.headers["set-cookie"]):d(l):i(e,t,o,u,a,d)})):i(e,t,o,u,a,d)});m.write(c.stringify({params:p.params,encSecKey:p.encSecKey})),m.end()}const r=o(10),n=o(2),c=o(12);e.exports={createWebAPIRequest:i,createRequest:function(e,t,o,i,r){return new Promise((i,r)=>{let c="";const u=n.request({hostname:"music.163.com",method:t,path:e,headers:{Referer:"http://music.163.com",Cookie:"appver=1.5.2","Content-Type":"application/x-www-form-urlencoded","User-Agent":s()}},e=>{e.setEncoding("utf8"),e.on("error",e=>{r(e)}),e.on("data",e=>{c+=e}),e.on("end",()=>{i(c)})});"POST"==t&&u.write(o),u.end()})}}},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("crypto")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("request")},function(e,t,o){const s=o(7),i=o(0),r=o(4);e.exports=function(e,t){s(e,i.static(r.join(r.dirname(__dirname),"www")))}},function(e,t,o){const s=o(0),i=(o(2),o(8)),r=o(4),n=s();let c=i.middleware;n.use(c("2 minutes",(e,t)=>200===t.statusCode)),n.use("/album",o(9)),n.use("/artists",o(13)),n.use("/artist/album",o(14)),n.use("/artist/desc",o(15)),n.use("/artist/mv",o(16)),n.use("/banner",o(17)),n.use("/check/music",o(18)),n.use("/comment/music",o(19)),n.use("/comment/mv",o(20)),n.use("/comment/album",o(21)),n.use("/comment/playlist",o(22)),n.use("/comment/like",o(23)),n.use("/comment/dj",o(24)),n.use("/daily_signin",o(25)),n.use("/dj/detail",o(26)),n.use("/dj/program",o(27)),n.use("/dj/program/detail",o(28)),n.use("/dj/sub",o(29)),n.use("/dj/catelist",o(30)),n.use("/dj/hot",o(31)),n.use("/dj/recommend",o(32)),n.use("/dj/recommend/type",o(33)),n.use("/event",o(34)),n.use("/fm_trash",o(35)),n.use("/follow",o(36)),n.use("/like",o(37)),n.use("/likelist",o(38)),n.use("/login/cellphone",o(39)),n.use("/login",o(40)),n.use("/login/refresh",o(41)),n.use("/log/web",o(42)),n.use("/lyric",o(43)),n.use("/music/url",o(44)),n.use("/mv/first",o(45)),n.use("/mv/url",o(46)),n.use("/mv",o(47)),n.use("/personal_fm",o(48)),n.use("/personalized",o(49)),n.use("/personalized/djprogram",o(50)),n.use("/personalized/newsong",o(51)),n.use("/personalized/privatecontent",o(52)),n.use("/personalized/mv",o(53)),n.use("/playlist/detail",o(54)),n.use("/playlist/tracks",o(55)),n.use("/playlist/hot",o(56)),n.use("/playlist/catlist",o(57)),n.use("/program/recommend",o(58)),n.use("/recommend/songs",o(59)),n.use("/recommend/resource",o(60)),n.use("/recommend/dislike",o(61)),n.use("/resource/like",o(62)),n.use("/search",o(63)),n.use("/search/multimatch",o(64)),n.use("/search/suggest",o(65)),n.use("/simi/playlist",o(66)),n.use("/simi/song",o(67)),n.use("/simi/mv",o(68)),n.use("/simi/user",o(69)),n.use("/simi/artist",o(70)),n.use("/song/detail",o(71)),n.use("/top/album",o(72)),n.use("/top/artists",o(73)),n.use("/top/list",o(74)),n.use("/top/mv",o(75)),n.use("/top/playlist",o(76)),n.use("/top/playlist/highquality",o(77)),n.use("/top/song",o(78)),n.use("/toplist",o(79)),n.use("/toplist/artist",o(80)),n.use("/toplist/detail",o(81)),n.use("/user/playlist",o(82)),n.use("/user/audio",o(83)),n.use("/user/cloud",o(84)),n.use("/user/cloud/search",o(85)),n.use("/user/event",o(86)),n.use("/user/detail",o(87)),n.use("/user/dj",o(88)),n.use("/user/followeds",o(89)),n.use("/user/follows",o(90)),n.use("/user/subcount",o(91)),n.use("/user/record",o(92)),e.exports=function(e,t){e=e||4001,"function"==typeof t?n.use(t):n.use(s.static(t||r.join(r.dirname(__dirname),"webMusic","build"))),n.listen(e,()=>{console.log(`server running @${e}`)})}},function(e,t){e.exports=require("apicache")},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s=e.query.id;i("music.163.com",`/weapi/v1/album/${s}`,"POST",{csrf_token:""},o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){"use strict";function s(e,t){const o=e,s=new Buffer("0102030405060708","binary"),i=new Buffer(t,"binary"),n=r.createCipheriv("AES-128-CBC",i,s);let c=n.update(o,"utf8","base64");return c+=n.final("base64")}function i(e){const t=JSON.stringify(e),o=function(e){const t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";let o="";for(let s=0;s<e;s++){let e=Math.random()*t.length;e=Math.floor(e),o+=t.charAt(e)}return o}(16);return{params:s(s(t,u),o),encSecKey:function(e,t,o){const s=e.split("").reverse().join(""),i=n(new Buffer(s).toString("hex"),16),r=n(t,16),c=n(o,16);return function(e,t){for(;e.length<t;)e="0"+e;return e}(i.modPow(r,c).toString(16),256)}(o,a,c)}}const r=o(3),n=o(11),c="00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7",u="0CoJUm6Qyw8W8jud",a="010001";String.prototype.hexEncode=function(){let e,t,o="";for(t=0;t<this.length;t++)o+=(""+(e=this.charCodeAt(t).toString(16))).slice(-4);return o},e.exports=i},function(e,t){e.exports=require("big-integer")},function(e,t){e.exports=require("querystring")},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s=e.query.id,r=e.query.offset||0,n=e.query.limit||50;i("music.163.com",`/weapi/v1/artist/${s}?offset=${r}&limit=${n}`,"POST",{csrf_token:""},o,e=>t.send(e),e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s=e.query.id,r={offset:e.query.offset||0,total:!0,limit:e.query.limit||30,csrf_token:""};i("music.163.com",`/weapi/artist/albums/${s}`,"POST",r,o,e=>t.send(e),e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s=e.query.id;i("music.163.com","/weapi/artist/introduction","POST",{id:s,csrf_token:""},o,e=>t.send(e),e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s={artistId:e.query.id,total:!0,offset:e.query.offset,limit:e.query.limit,csrf_token:""};i("music.163.com","/weapi/artist/mvs","POST",s,o,e=>t.send(e),e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"";i("music.163.com","/weapi/v2/banner/get","POST",{},o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);o(5);s.get("/",(e,t)=>{const o={ids:[parseInt(e.query.id)],br:parseInt(e.query.br||999e3),csrf_token:""},s=e.get("Cookie")?e.get("Cookie"):"";i("music.163.com","/weapi/song/enhance/player/url","POST",o,s,e=>200==JSON.parse(e).code?t.send({success:!0,message:"ok"}):t.send({success:!1,message:"亲爱的,暂无版权"}),e=>{t.status(502).send("fetch error")})}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.query.id,s=e.get("Cookie")?e.get("Cookie"):"",r={offset:e.query.offset||0,rid:o,limit:e.query.limit||20,csrf_token:""};i("music.163.com",`/weapi/v1/resource/comments/R_SO_4_${o}/?csrf_token=`,"POST",r,s,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.query.id,s=e.get("Cookie")?e.get("Cookie"):"",r={offset:e.query.offset||0,rid:o,limit:e.query.limit||20,csrf_token:""};i("music.163.com",`/weapi/v1/resource/comments/R_MV_5_${o}/?csrf_token=`,"POST",r,s,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.query.id,s=e.get("Cookie")?e.get("Cookie"):"",r={offset:e.query.offset||0,rid:o,limit:e.query.limit||20,csrf_token:""};i("music.163.com",`/weapi/v1/resource/comments/R_AL_3_${o}/?csrf_token=`,"POST",r,s,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.query.id,s=e.get("Cookie")?e.get("Cookie"):"",r={offset:e.query.offset||0,rid:o,limit:e.query.limit||20,csrf_token:""};i("music.163.com",`/weapi/v1/resource/comments/A_PL_0_${o}/?csrf_token=`,"POST",r,s,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s=e.query.cid,r=e.query.id,n={threadId:`${{0:"R_SO_4_",1:"R_MV_5_",2:"A_PL_0_",3:"R_AL_3_",4:"A_DJ_1_"}[e.query.type]}${r}`,commentId:s,csrf_token:""},c=1==e.query.t?"like":"unlike";i("music.163.com",`/weapi/v1/comment/${c}`,"POST",n,o,e=>t.send(e),e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.query.id,s=e.get("Cookie")?e.get("Cookie"):"",r={offset:e.query.offset||0,rid:o,limit:e.query.limit||20,csrf_token:""};i("music.163.com",`/weapi/v1/resource/comments/A_DJ_1_${o}/?csrf_token=`,"POST",r,s,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"";let s=e.query.type||0;i("music.163.com","/weapi/point/dailyTask","POST",{csrf_token:"",type:s},o,e=>t.send(e),e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.query.rid,s=e.get("Cookie")?e.get("Cookie"):"";i("music.163.com","/weapi/djradio/get","POST",{id:o,csrf_token:""},s,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.query.rid,s=e.get("Cookie")?e.get("Cookie"):"",r={asc:e.query.asc,radioId:o,limit:e.query.limit,offset:e.query.offset,csrf_token:""};i("music.163.com","/weapi/dj/program/byradio","POST",r,s,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s={id:e.query.id,csrf_token:""};i("music.163.com","/weapi/dj/program/detail","POST",s,o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s={id:e.query.rid,csrf_token:""},r=1==e.query.t?"sub":"unsub";i("music.163.com",`/weapi/djradio/${r}`,"POST",s,o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"";i("music.163.com","/weapi/djradio/category/get","POST",{csrf_token:""},o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s={cat:e.query.type,cateId:e.query.type,type:e.query.type,categoryId:e.query.type,category:e.query.type,limit:e.query.limit,offset:e.query.offset,csrf_token:""};i("music.163.com","/weapi/djradio/hot/v1","POST",s,o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"";i("music.163.com","/weapi/djradio/recommend/v1","POST",{csrf_token:""},o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s={cateId:e.query.type,csrf_token:""};i("music.163.com","/weapi/djradio/recommend","POST",s,o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"";i("music.163.com","/weapi/v1/event/get","POST",{csrf_token:""},o,e=>t.send(e),e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s=e.query.id,r=e.query.time||25;i("music.163.com",`/weapi/radio/trash/add?alg=RT&songId=${s}&time=${r}`,"POST",{csrf_token:"",songId:s},o,e=>t.send(e),e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s="add"==e.query.type?"follow":"delfollow",r=e.query.id;i("music.163.com",`/weapi/user/${s}/${r}`,"POST",{csrf_token:""},o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s=e.query.id,r=e.query.like||!0,n=e.query.alg||"itembased",c=e.query.time||25;i("music.163.com",`/weapi/radio/like?alg=${n}&trackId=${s}&like=${r}&time=${c}`,"POST",{csrf_token:"",trackId:s,like:r},o,e=>t.send(e),e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s={uid:e.query.uid,csrf_token:""};i("music.163.com","/weapi/song/like/get","POST",s,o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0),i=o(3),r=s(),{createWebAPIRequest:n}=o(1);r.get("/",(e,t)=>{const o=e.query.phone,s=e.get("Cookie")?e.get("Cookie"):"",r=i.createHash("md5");r.update(e.query.password);const c={phone:o,password:r.digest("hex"),rememberLogin:"true"};n("music.163.com","/weapi/login/cellphone","POST",c,s,(e,o)=>{t.set({"Set-Cookie":o}),t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=r},function(e,t,o){const s=o(0),i=o(3),r=s(),{createWebAPIRequest:n}=o(1);r.get("/",(e,t)=>{const o=e.query.email,s=e.get("Cookie")?e.get("Cookie"):"",r=i.createHash("md5");r.update(e.query.password);const c={username:o,password:r.digest("hex"),rememberLogin:"true",clientToken:"1_jVUMqWEPke0/1/Vu56xCmJpo5vP1grjn_SOVVDzOc78w8OKLVZ2JH7IfkjSXqgfmh"};console.log(o,e.query.password),n("music.163.com","/weapi/login?csrf_token=","POST",c,s,(e,o)=>{t.set({"Set-Cookie":o}),t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=r},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"";console.log({cookie:o}),i("music.163.com","/weapi/login/token/refresh","POST",{csrf_token:""},o,(e,o)=>{console.log({cookie:o}),t.set({"Set-Cookie":o}),t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"";i("music.163.com","/weapi/feedback/weblog","POST",{csrf_token:""},o,e=>t.send(e),e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s=e.query.id;i("music.163.com","/weapi/song/lyric?os=osx&id="+s+"&lv=-1&kv=-1&tv=-1","POST",{},o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o={ids:[e.query.id],br:e.query.br||999e3,csrf_token:""},s=e.get("Cookie")?e.get("Cookie"):"";i("music.163.com","/weapi/song/enhance/player/url","POST",o,s,e=>{t.setHeader("Content-Type","application/json"),t.send(e)},e=>{t.status(502).send("fetch error")})}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s={total:!0,limit:e.query.limit||30,csrf_token:""};i("music.163.com","/weapi/mv/first","POST",s,o,e=>t.send(e),e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),i=o(5);s.get("/",(e,t)=>{const o=e.query.url;i({header:{Referer:"http://music.163.com/",Cookie:"appver=1.5.0.75771;","Content-Type":"video/mp4",Location:o},url:o}).on("error",e=>{t.send({err:e})}).pipe(t)}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s=e.query.mvid;i("music.163.com","/weapi/mv/detail","POST",{id:s},o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"";i("music.163.com","/weapi/v1/radio/get","POST",{csrf_token:""},o,e=>t.send(e),e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"";i("music.163.com","/weapi/personalized/playlist","POST",{},o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"";i("music.163.com","/weapi/personalized/djprogram","POST",{},o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"";i("music.163.com","/weapi/personalized/newsong","POST",{type:"recommend"},o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"";i("music.163.com","/weapi/personalized/privatecontent","POST",{},o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"";i("music.163.com","/weapi/personalized/mv","POST",{},o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){o(2);const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"";const s={id:e.query.id,offset:0,total:!0,limit:1e3,n:1e3,csrf_token:""};i("music.163.com","/weapi/v3/playlist/detail","POST",s,o,e=>{t.send(e)},e=>{t.status(502).send("fetch error")})}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.query.op,s=e.query.pid,r=e.query.tracks,n=e.get("Cookie")?e.get("Cookie"):"",c={op:o,pid:s,tracks:r,trackIds:JSON.stringify([r]),csrf_token:""};i("music.163.com","/weapi/playlist/manipulate/tracks","POST",c,n,e=>t.send(e),e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"";i("music.163.com","/weapi/playlist/hottags","POST",{},o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"";i("music.163.com","/weapi/playlist/catalogue","POST",{csrf_token:""},o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s={cateId:e.query.type,csrf_token:""};i("music.163.com","/weapi/program/recommend/v1","POST",s,o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"";i("music.163.com","/weapi/v1/discovery/recommend/songs","POST",{offset:0,total:!0,limit:20,csrf_token:""},o,e=>t.send(e),e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"";i("music.163.com","/weapi/v1/discovery/recommend/resource","POST",{csrf_token:""},o,e=>t.send(e),e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"";i("music.163.com","/weapi/v1/radio/get","POST",{csrf_token:""},o,e=>t.send(e),e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s={threadId:e.query.id,csrf_token:""},r=1==e.query.t?"like":"unlike";i("music.163.com",`/weapi/resource/${r}`,"POST",s,o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s=e.query.keywords,r=e.query.type||1,n=e.query.limit||30,c=e.query.offset||0;i("music.163.com","/weapi/search/get","POST",{csrf_token:"",limit:n,type:r,s:s,offset:c},o,e=>t.send(e),e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s={csrf_token:"",type:e.query.type||1,s:e.query.keywords||""};i("music.163.com","/weapi/search/suggest/multimatch","POST",s,o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s={csrf_token:"",s:e.query.keywords||""};i("music.163.com","/weapi/search/suggest/web","POST",s,o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s={songid:e.query.id,offset:e.query.offset||0,limit:e.query.limit||50};i("music.163.com","/weapi/discovery/simiPlaylist","POST",s,o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s={songid:e.query.id,offset:e.query.offset||0,limit:e.query.limit||50};i("music.163.com","/weapi/v1/discovery/simiSong","POST",s,o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s={mvid:e.query.mvid};i("music.163.com","/weapi/discovery/simiMV","POST",s,o,e=>t.send(e),e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s={songid:e.query.id,offset:e.query.offset||0,limit:e.query.limit||50};i("music.163.com","/weapi/discovery/simiUser","POST",s,o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s=e.query.id;i("music.163.com","/weapi/discovery/simiArtist","POST",{artistid:s,csrf_token:""},o,e=>t.send(e),e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s=parseInt(e.query.ids),r={c:JSON.stringify([{id:s}]),ids:"["+s+"]",csrf_token:""};i("music.163.com","/weapi/v3/song/detail","POST",r,o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s={offset:e.query.offset||0,total:!0,limit:e.query.limit||50,area:e.query.type,csrf_token:""};i("music.163.com","/weapi/album/new","POST",s,o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s={offset:e.query.offset||0,total:!0,limit:e.query.limit||50,csrf_token:""};i("music.163.com","/weapi/artist/top","POST",s,o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s={0:["云音乐新歌榜","/api/playlist/detail?id=3779629"],1:["云音乐热歌榜","/api/playlist/detail?id=3778678"],2:["网易原创歌曲榜","/api/playlist/detail?id=2884035"],3:["云音乐飙升榜","/api/playlist/detail?id=19723756"],4:["云音乐电音榜","/api/playlist/detail?id=10520166"],5:["UK排行榜周榜","/api/playlist/detail?id=180106"],6:["美国Billboard周榜","/api/playlist/detail?id=60198"],7:["KTV嗨榜","/api/playlist/detail?id=21845217"],8:["iTunes榜","/api/playlist/detail?id=11641012"],9:["Hit FM Top榜","/api/playlist/detail?id=120001"],10:["日本Oricon周榜","/api/playlist/detail?id=60131"],11:["韩国Melon排行榜周榜","/api/playlist/detail?id=3733003"],12:["韩国Mnet排行榜周榜","/api/playlist/detail?id=60255"],13:["韩国Melon原声周榜","/api/playlist/detail?id=46772709"],14:["中国TOP排行榜(港台榜)","/api/playlist/detail?id=112504"],15:["中国TOP排行榜(内地榜)","/api/playlist/detail?id=64016"],16:["香港电台中文歌曲龙虎榜","/api/playlist/detail?id=10169002"],17:["华语金曲榜","/api/playlist/detail?id=4395559"],18:["中国嘻哈榜","/api/playlist/detail?id=1899724"],19:["法国 NRJ EuroHot 30周榜","/api/playlist/detail?id=27135204"],20:["台湾Hito排行榜","/api/playlist/detail?id=112463"],21:["Beatport全球电子舞曲榜","/api/playlist/detail?id=3812895"]},i=o(0)(),{createRequest:r}=o(1);i.get("/",(e,t)=>{const o=e.query.idx,i="http://music.163.com"+s[o][1];r(`${i}`,"GET",null).then(e=>{t.setHeader("Content-Type","application/json"),t.send(e)}).catch(e=>{t.status(502).send("fetch error")})}),e.exports=i},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s={offset:e.query.offset||0,total:!0,limit:e.query.limit||30,csrf_token:""};i("music.163.com","/weapi/mv/toplist","POST",s,o,e=>{t.setHeader("Content-Type","application/json"),t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s={cat:e.query.cat||"全部",order:e.query.order||"hot",offset:e.query.offset||0,total:e.query.total?"true":"false",limit:e.query.limit||50};i("music.163.com","/weapi/playlist/list","POST",s,o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s={cat:e.query.cat||"全部",offset:e.query.offset||0,limit:e.query.limit||20,csrf_token:""};i("music.163.com","/weapi/playlist/highquality/list","POST",s,o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s={offset:e.query.offset,total:!0,limit:e.query.limit,area:e.query.type,csrf_token:""};i("music.163.com","/weapi/v1/discovery/new/songs","POST",s,o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"";i("music.163.com","/weapi/toplist","POST",{csrf_token:""},o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s={type:e.query.type,csrf_token:""};i("music.163.com","/weapi/toplist/artist","POST",s,o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s={id:e.query.id,limit:20,csrf_token:""};i("music.163.com","/weapi/toplist/detail","POST",s,o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s={offset:0,uid:e.query.uid,limit:1e3,csrf_token:""};i("music.163.com","/weapi/user/playlist","POST",s,o,e=>t.send(e),e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o={userId:e.query.uid,csrf_token:""},s=e.get("Cookie")?e.get("Cookie"):"";i("music.163.com","/weapi/djradio/get/byuser","POST",o,s,e=>{t.setHeader("Content-Type","application/json"),t.send(e)},e=>{t.status(502).send("fetch error")})}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o={limit:e.query.limit||10,offset:e.query.offset||0,csrf_token:""},s=e.get("Cookie")?e.get("Cookie"):"";i("music.163.com","/weapi/v1/cloud/get","POST",o,s,e=>{t.setHeader("Content-Type","application/json"),t.send(e)},e=>{t.status(502).send("fetch error")})}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o={byids:e.query.id,id:e.query.id,csrf_token:""},s=e.get("Cookie")?e.get("Cookie"):"";i("music.163.com","/weapi/v1/cloud/get/byids","POST",o,s,e=>{t.setHeader("Content-Type","application/json"),t.send(e)},e=>{t.status(502).send("fetch error")})}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s=e.query.uid;i("music.163.com",`/weapi/event/get/${s}`,"POST",{time:-1,getcounts:!0,csrf_token:""},o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s=e.query.uid;i("music.163.com",`/weapi/v1/user/detail/${s}`,"POST",{csrf_token:""},o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s=e.query.uid,r={offset:e.query.offset||"0",limit:e.query.limit||30,csrf_token:""};i("music.163.com",`/weapi/dj/program/${s}`,"POST",r,o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s={userId:e.query.uid,offset:e.query.offset||"0",limit:e.query.limit||30,csrf_token:""};i("music.163.com","/weapi/user/getfolloweds/","POST",s,o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s=e.query.uid,r={offset:e.query.offset||"0",limit:e.query.limit||30,order:!0};i("music.163.com",`/weapi/user/getfollows/${s}`,"POST",r,o,e=>{t.send(e)},e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"";i("music.163.com","/weapi/subcount","POST",{csrf_token:""},o,e=>t.send(e),e=>t.status(502).send("fetch error"))}),e.exports=s},function(e,t,o){const s=o(0)(),{createWebAPIRequest:i}=o(1);s.get("/",(e,t)=>{const o=e.get("Cookie")?e.get("Cookie"):"",s={type:e.query.type||0,uid:e.query.uid,csrf_token:""};i("music.163.com","/weapi/v1/play/record","POST",s,o,e=>t.send(e),e=>t.status(502).send("fetch error"))}),e.exports=s}])});
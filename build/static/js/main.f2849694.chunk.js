(window["webpackJsonpmoment-music"]=window["webpackJsonpmoment-music"]||[]).push([[0],{0:function(e,t){e.exports=react},103:function(e,t){},115:function(e,t,n){e.exports=n(204)},121:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){},182:function(e,t,n){},198:function(e,t,n){},20:function(e,t,n){"use strict";var a=n(4);var c=function(e,t,n){return fetch(e,{method:t,body:JSON.stringify(n)}).then((function(e){return e.json()}))},r="http://129.226.190.242:3000",o={fetch_recommend_tags:function(){return c("".concat(r,"/playlist/hot"),"GET")},fetch_recommend_tags_detail:function(e){return c("".concat(r,"/top/playlist?&cat=").concat(e),"GET")},fetch_playlist_detail:function(e){return c("".concat(r,"/playlist/detail?id=").concat(e),"GET")},fetch_song_url:function(e){return c("".concat(r,"/song/url?id=").concat(e),"GET")},fetch_rank_list:function(){return c("".concat(r,"/toplist"),"GET")},fetch_lyric:function(e){return c("".concat(r,"/lyric?id=").concat(e),"GET")}},u=function(){return function(e){o.fetch_recommend_tags().then((function(t){var n;e((n=t,{type:a.e.SUCCESS,payload:n}))})).catch((function(t){var n;e((n=t,{type:a.e.ERROR,payload:n}))}))}},i=function(e){return function(t){o.fetch_recommend_tags_detail(e).then((function(e){t(function(e){var t=[];return 200===e.code&&e.playlists.forEach((function(e){t.find((function(t){return t.id===e.id}))||t.push(e)})),{type:a.f.SUCCESS,payload:{playlists:t}}}(e))})).catch((function(e){var n;t((n=e,{type:a.f.ERROR,payload:n}))}))}},s=n(15),l=n.n(s),f=(n(199),n(113)),m=n(26),d=function(e){return function(t){var n;t((n=void 0,{type:a.c.START,payload:n})),o.fetch_playlist_detail(e).then((function(e){t(function(e){return{type:a.c.SUCCESS,payload:e}}(e))})).catch((function(e){t(function(e){return{type:a.c.ERROR,payload:e}}(e))}))}},p=function(){var e=Object(m.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.fetch_song_url(t);case 2:return n=e.sent,(a=n.data[0].url)||f.a.warn("\u7531\u4e8e\u7248\u6743\u95ee\u9898, \u8be5\u6b4c\u66f2\u6682\u65f6\u4e0b\u67b6\uff01"),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function S(){return{type:a.h.PLAY_MUSIC,payload:!0}}function E(){return{type:a.h.STOP_MUSIC,payload:!1}}function h(){return{type:a.h.LOAD_SOURCE,payload:null}}function y(e){return{type:a.h.SET_SOURCE,payload:e}}function v(){return{type:a.h.SET_LOOP}}function g(e){return{type:a.h.SET_STATUS,payload:e}}var O=function(){return function(e){o.fetch_rank_list().then((function(t){var n;e((n=t,{type:a.d.SUCCESS,payload:n}))})).catch((function(t){var n;e((n=t,{type:a.d.ERROR,payload:n}))}))}},b=(n(54),n(46),n(55),n(80),n(103),function(e){return function(t){o.fetch_lyric(e).then((function(e){var n;t((n=e,{type:a.b.SUCCESS,payload:n}))})).catch((function(e){var n;t((n=e,{type:a.b.ERROR,payload:n}))}))}}),_=function(e){return{type:a.i,payload:e}},C=function(e){return{type:a.a,payload:e}};n.d(t,"f",(function(){return u})),n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return d})),n.d(t,"g",(function(){return p})),n.d(t,"j",(function(){return _})),n.d(t,"i",(function(){return S})),n.d(t,"n",(function(){return E})),n.d(t,"h",(function(){return h})),n.d(t,"l",(function(){return y})),n.d(t,"k",(function(){return v})),n.d(t,"m",(function(){return g})),n.d(t,"d",(function(){return O})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return C}))},203:function(e,t,n){},204:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),o=n.n(r),u=n(38),i=n(39),s=n(59),l=n(60),f=n(15),m=n.n(f),d=n(26),p=n(49),S=n(29),E=n(30),h=n(21);n(121);var y=function(e){var t=e.customStyle;return a.createElement("header",{className:"app-header",style:t},a.createElement("div",{className:"header-bg"}),a.createElement("div",{className:"header-container",style:t},a.createElement(h.b,{to:"recommend"},a.createElement("h1",{className:"app-title"},"MOMENT")),a.createElement("ul",{className:"menu-list"},a.createElement(h.b,{to:"/recommend",className:"menu-item",activeClassName:"active"},a.createElement("li",null,"\u63a8\u8350")),a.createElement(h.b,{to:"/rank",className:"menu-item",activeClassName:"active"},a.createElement("li",null,"\u6392\u884c\u699c")))))},v=(n(205),n(86));n(125),n(126);function g(e){var t=e.href,n=e.customStyle,a=e.event;return c.a.createElement("svg",{className:"icon svg-icon",style:n,"aria-hidden":"true",onClick:function(e){return function(e){e.stopPropagation(),a()}(e)}},c.a.createElement("use",{href:"#".concat(t)}))}var O=function(){function e(){Object(u.a)(this,e)}return Object(i.a)(e,null,[{key:"getInstance",value:function(){return this._instance.loop=!0,this._instance}}]),e}();O._instance=new Audio;var b=n(42),_=n(47);var C=function(e){var t=e.customStyle,n=e.setStatus,r=e.status,o=e.stopMusic,u=e.playMusic,i=e.curSongInfo,s=e.playTracks,l=e.fetchSongUrl,f=e.setSource,p=e.fetchLyric,E=O.getInstance(),h=["play-icon"];r&&h.push("active");var y=Object(a.useState)(100*E.volume),C=Object(S.a)(y,2),T=C[0],R=C[1],j=Object(a.useState)(E.currentTime),U=Object(S.a)(j,2),N=U[0],I=U[1],k=Object(a.useState)(!1),A=Object(S.a)(k,2),L=A[0],M=A[1],w=Object(a.useContext)(_.b),x={width:32,height:32};function D(e,t){return P.apply(this,arguments)}function P(){return(P=Object(d.a)(m.a.mark((function e(t,a){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=9;break}return e.next=3,l(t.id);case 3:c=e.sent,t.source=c,f(t),a&&H(a),u(),n(!0);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){var t,n=s.findIndex((function(e){return e.id===i.id}));-1===e?t=function(e){if(e>0)return s[e-1]}(n):1===e&&(t=function(e){if(e<s.length-1)return s[e+1]}(n)),D(t,0)}function H(e){M(!1),I(e),E.currentTime=e}return E.ontimeupdate=function(e){if(!L){var t=e.path[0].currentTime;I(t),w.update(t)}},Object(a.useEffect)((function(){E.volume=.25,R(100*E.volume)}),[]),Object(a.useEffect)((function(){i&&i.id&&p(i.id)}),[i.id]),c.a.createElement("footer",{className:"app-footer",style:t},c.a.createElement("div",{className:"footer-bg"}),c.a.createElement("div",{className:"footer-container"},c.a.createElement("div",{className:"player-control"},c.a.createElement(g,{href:"iconshangyige",customStyle:x,event:function(){return F(-1)}}),c.a.createElement("div",{className:"play-btn",onClick:function(){r?o():D(i,N)}},c.a.createElement("div",{className:h.join(" ")})),c.a.createElement(g,{href:"iconxiayige",customStyle:x,event:function(){return F(1)}})),c.a.createElement("div",{className:"time-bar"},c.a.createElement("span",{className:"slide-time"},Object(b.a)(1e3*N)),c.a.createElement(v.a,{onChange:function(e){M(!0),I(e)},onAfterChange:H,value:N,min:0,max:Math.round(i.dt/1e3),tipFormatter:null}),c.a.createElement("span",{className:"slide-time"},Object(b.a)(i.dt))),c.a.createElement("div",{className:"volume-bar"},c.a.createElement(g,{href:"iconyinliang",customStyle:{width:20,height:20},event:function(){}}),c.a.createElement(v.a,{onChange:function(e){R(e),E.volume=e/100},min:0,max:100,onAfterChange:function(){return u()},value:T,tipFormatter:null}))))},T=(n(182),n(87));var R=function(e){var t,n=e.deleteTrack,a=e.curSongInfo,r=e.fetchSongUrl,o=e.loadSource,u=e.setSource,i=e.setStatus,s=e.playMusic,l=e.customStyle,f=e.playTracks,p=localStorage.getItem("songTracks"),S=Object(E.g)();function h(){return(h=Object(d.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(t.id);case 2:(n=e.sent)&&(a={id:t.id,name:t.name,picUrl:t.picUrl,source:n,player:t.player,dt:t.dt},u(a),o(),s(),i(!0));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}p&&(t=f.map((function(e,t){return c.a.createElement("li",{className:"list-item",key:e.id,onClick:function(){!function(e){h.apply(this,arguments)}(e)}},c.a.createElement("span",{className:"song-name text-overflow"},e.name),c.a.createElement("span",{className:"song-time"},Object(b.a)(e.dt)),c.a.createElement(g,{href:"iconlajitong",event:function(){!function(e){n(e)}(t)}}))})));var y,v=["cur-music-box"];return a.id?v.push("active"):y={height:"calc(100% - 40px)"},c.a.createElement("aside",{className:"left-side",style:l},c.a.createElement("h2",{className:"title",style:l},"\u64ad\u653e\u5217\u8868"),c.a.createElement("div",{className:"track-container",style:y},c.a.createElement(T.Scrollbars,{style:{width:"100%",height:"100%"},autoHide:!0},c.a.createElement("ul",{className:"track-list"},t))),c.a.createElement("div",{className:v.join(" "),style:l},c.a.createElement(g,{href:"iconfangda",event:function(){S.push({pathname:"/song",state:{id:a.id}})}}),c.a.createElement("img",{className:"music-img",src:"".concat(a.picUrl,"?param=60y60"),alt:"song-cover"}),c.a.createElement("div",{className:"music-info"},c.a.createElement("h3",{className:"music-title text-overflow"},a.name),c.a.createElement("span",{className:"music-time",style:l},a.player,"\xa0\xa0\xa0",Object(b.a)(a.dt)))))},j=(n(198),Object(a.lazy)((function(){return n.e(3).then(n.bind(null,216))}))),U=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,213))})),N=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,215))})),I=Object(a.lazy)((function(){return n.e(4).then(n.bind(null,214))}));var k=n(20);var A=Object(p.b)((function(e){return e}),(function(e){return{loadSource:function(){return e(k.h())},setSource:function(t){return e(k.l(t))},stopMusic:function(){return e(k.n())},playMusic:function(){return e(k.i())},setStatus:function(t){return e(k.m(t))},fetchSongUrl:function(){var e=Object(d.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.g(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fetchLyric:function(t){return e(k.b(t))},deleteTrack:function(t){return e(k.a(t))}}}))((function(e){var t=e.setStatus,n=e.curSongInfo,r=e.stopMusic,o=e.playMusic,u=e.playTracks,i=e.loadSource,s=e.setSource,l=e.fetchSongUrl,f=e.fetchLyric,m=e.deleteTrack,d=Object(a.useState)(_.a),p=Object(S.a)(d,2),h=p[0],v=p[1],g=Object(a.useState)(0),O=Object(S.a)(g,2),b=O[0],T=O[1],k=Object(a.useState)(0),A=Object(S.a)(k,2),L=A[0],M=A[1],w={value:h,update:function(e){v(e)}},x={},D={},P=!!Object(E.i)("/song");return Object(a.useEffect)((function(){T(document.body.offsetWidth/3.9),M(document.body.offsetHeight/3.9)}),[]),P&&b&&L&&(x={backgroundImage:"url(".concat(n.picUrl,"?param=").concat(b,"y").concat(L,")")},D={background:"none",border:"none",color:"white"}),c.a.createElement(_.b.Provider,{value:w},c.a.createElement("div",{className:"mask home-bg",style:x}),c.a.createElement("div",{className:"mask home-fg"}),c.a.createElement("div",{className:"home"},c.a.createElement(y,{customStyle:D}),c.a.createElement("main",{className:"app-main",style:D},c.a.createElement(R,{deleteTrack:m,playTracks:u,customStyle:D,curSongInfo:n,playMusic:o,loadSource:i,setSource:s,setStatus:t,fetchSongUrl:l}),c.a.createElement("article",{className:"container",style:D},c.a.createElement(a.Suspense,{fallback:c.a.createElement(c.a.Fragment,null)},c.a.createElement(E.d,null,c.a.createElement(E.a,{from:"/",exact:!0,to:"/recommend"}),c.a.createElement(E.b,{path:"/recommend",component:I,exact:!0}),c.a.createElement(E.b,{path:"/recommend/detail",component:N}),c.a.createElement(E.b,{path:"/rank/detail",component:N}),c.a.createElement(E.b,{path:"/rank",component:j,exact:!0}),c.a.createElement(E.b,{path:"/song",component:U,exact:!0}))))),c.a.createElement(C,{customStyle:D,status:n.status,stopMusic:r,playMusic:o,playTracks:u,curSongInfo:n,setSource:s,setStatus:t,fetchSongUrl:l,fetchLyric:f})))})),L=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.createElement(h.a,null,a.createElement(E.b,{path:"/",component:A}))}}]),n}(a.Component),M=n(27),w=n(4);var x=Object(M.combineReducers)({recommendTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.e.SUCCESS:return Object.assign({},e,t.payload)}return e},recommendTagDetail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.f.SUCCESS:return Object.assign({},e,t.payload)}return e},playlistDetail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.c.SUCCESS:return Object.assign({},e,t.payload);case w.c.START:return{}}return e},songUrl:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.g.SUCCESS:return Object.assign({},e,t.payload)}return e},curSongInfo:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,a=O.getInstance(),c=localStorage.getItem("curSongInfo");switch(c&&(e=JSON.parse(c)),n.type){case w.h.PLAY_MUSIC:return!a.src&&c&&(a.src=e.source),a.play().catch((function(){})),Object.assign({},t,{status:n.payload});case w.h.STOP_MUSIC:return a.pause(),Object.assign({},t,{status:n.payload});case w.h.SET_SOURCE:return a.src=n.payload.source,localStorage.setItem("curSongInfo",JSON.stringify(n.payload)),Object.assign({},t,n.payload);case w.h.LOAD_SOURCE:a.load();break;case w.h.SET_PLAY_INDEX:return Object.assign({},t,{playIndex:n.payload});case w.h.SET_STATUS:return Object.assign({},t,{status:n.payload})}return Object.assign({},t,e)},playTracks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=localStorage.getItem("songTracks"),a=[];function c(e){return a.find((function(t){return t.id===e.id}))||a.push(e),localStorage.setItem("songTracks",JSON.stringify(a)),a}function r(e){return a.splice(e,1),localStorage.setItem("songTracks",JSON.stringify(a)),a}switch(n&&(e=a=JSON.parse(n)),t.type){case w.i:return c(t.payload);case w.a:return r(t.payload)}return e},rankList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.d.SUCCESS:return Object.assign({},e,t.payload)}return e},lyricData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.b.SUCCESS:return Object.assign({},e,t.payload)}return e}}),D=n(111),P=n(112),F=Object(M.createStore)(x,Object(P.composeWithDevTools)(Object(M.applyMiddleware)(D.a))),H=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.createElement(p.a,{store:F},a.createElement(L,null))}}]),n}(a.Component);n(203);o.a.render(c.a.createElement(H,null),document.getElementById("root"))},4:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"g",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return i})),n.d(t,"h",(function(){return s})),n.d(t,"i",(function(){return l})),n.d(t,"a",(function(){return f}));var a={SUCCESS:"FETCH_RECOMMEND_TAGS_SUCCESS",ERROR:"FETCH_RECOMMEND_TAGS_ERROR"},c={SUCCESS:"FETCH_RECOMMEND_DETAIL_TAGS_SUCCESS",ERROR:"FETCH_RECOMMEND_DETAIL_TAGS_ERROR"},r={START:"FETCH_PLAYLIST_DETAIL_START",SUCCESS:"FETCH_PLAYLIST_DETAIL_SUCCESS",ERROR:"FETCH_PLAYLIST_DETAIL_ERROR"},o={SUCCESS:"FETCH_SONG_URL_SUCCESS",ERROR:"FETCH_SONG_URL_ERROR"},u={SUCCESS:"FFETCH_RANK_LIST_SUCCESS",ERROR:"FETCH_RANK_LIST_ERROR"},i={SUCCESS:"FETCH_LYRIC_SUCCESS",ERROR:"FETCH_LYRIC_ERROR"},s={PLAY_MUSIC:"PLAY_MUSIC",STOP_MUSIC:"STOP_MUSIC",SET_SOURCE:"SET_SOURCE",LOAD_SOURCE:"LOAD_SOURCE",SET_LOOP:"SET_LOOP",SET_PLAY_INDEX:"SET_PLAY_INDEX",SET_STATUS:"SET_STATUS",CURRENT_TIME:"CURRENT_TIME"},l="PUSH_TRACKS",f="DELETE_TRACKS"},42:function(e,t,n){"use strict";function a(e){e||(e=0);var t=e/1e3,n=Math.floor(t%60),a=Math.floor(t/60);return"".concat(a<10?"0"+a:a,":").concat(n<10?"0"+n:n)}n.d(t,"a",(function(){return a}))},46:function(e,t){},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r}));var a=n(0),c={value:0,update:function(e){}},r=n.n(a).a.createContext(c)},54:function(e,t){},55:function(e,t){},8:function(e,t){e.exports=reactDom},80:function(e,t){}},[[115,1,2]]]);
//# sourceMappingURL=main.f2849694.chunk.js.map
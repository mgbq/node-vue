webpackJsonp([1],{"/lZI":function(e,t,_){"use strict";var i=_("GQaK"),s=_("3Q4o"),n={data:function(){return{dots:[],currentPageIndex:0}},mounted:function(){var e=this;this._setSliderWidth(!1),this._initDots(),this._initSlider(),this.autoPlay&&this._play();var t=this;window.addEventListener("resize",function(){if(!e.slider)return!1;t._setSliderWidth(!0)})},props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3}},methods:{_setSliderWidth:function(e){for(var t=this.$refs.sliderGroup.children,_=0,i=this.$refs.slider.clientWidth,n=0;n<t.length;n++)Object(s.a)(t[n],"slider-item"),t[n].style.width=i+"px",_+=i;this.loop&&!e&&(_+=2*i),this.$refs.sliderGroup.style.width=_+"px"},_initSlider:function(){var e=this,t=this;this.slider=new i.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:{loop:this.loop,threshold:.1,speed:400}}),this.slider.on("scrollEnd",function(){var _=e.slider.getCurrentPage().pageX;e.currentPageIndex=_,e.autoPlay&&(clearTimeout(t.timer),t._play())})},_initDots:function(){var e=this.$refs.sliderGroup.children.length;this.dots=new Array(e)},_play:function(){var e=this;this.timer=setTimeout(function(){e.slider.next()},this.interval)}},computed:{winWidth:function(){return window.innerWidth}},watch:{winWidth:function(e,t){alert(e)}}},r={render:function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{ref:"slider",staticClass:"slider"},[_("div",{ref:"sliderGroup",staticClass:"slider-group"},[e._t("default")],2),e._v(" "),_("div",{staticClass:"dots"},e._l(e.dots,function(t,i){return _("span",{key:i,staticClass:"dot",class:{active:e.currentPageIndex===i}})}))])},staticRenderFns:[]};var a=_("VU/8")(n,r,!1,function(e){_("eLK/")},"data-v-173c171e",null);t.a=a.exports},Haw9:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__=__webpack_require__("Dd8w"),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__),__WEBPACK_IMPORTED_MODULE_1__api_recommend_js__=__webpack_require__("m40h"),__WEBPACK_IMPORTED_MODULE_2__api_config__=__webpack_require__("T452"),__WEBPACK_IMPORTED_MODULE_3__base_slider_slider__=__webpack_require__("/lZI"),__WEBPACK_IMPORTED_MODULE_4__base_scroll_scroll__=__webpack_require__("qwAB"),__WEBPACK_IMPORTED_MODULE_5__common_js_mixin__=__webpack_require__("F4+m"),__WEBPACK_IMPORTED_MODULE_6_vuex__=__webpack_require__("NYxO"),__WEBPACK_IMPORTED_MODULE_7__base_loading_loading__=__webpack_require__("y/jF");__webpack_exports__.a={mixins:[__WEBPACK_IMPORTED_MODULE_5__common_js_mixin__.b],data:function(){return{recommends:[],discList:[],showLoading:!0}},created:function(){this._getRecommend(),this._getDiscList()},methods:__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({_getRecommend:function(){var e=this;Object(__WEBPACK_IMPORTED_MODULE_1__api_recommend_js__.b)().then(function(t){t.code===__WEBPACK_IMPORTED_MODULE_2__api_config__.a?e.recommends=t.data.slider:console.log("内部错误")}).catch(function(e){console.log(e)})},_getDiscList:function _getDiscList(){var _this=this;Object(__WEBPACK_IMPORTED_MODULE_1__api_recommend_js__.a)().then(function(res){function MusicJsonCallback(e){__WEBPACK_IMPORTED_MODULE_2__api_config__.a===e.code?(_this.discList=e.data.list,_this.showLoading=!1):console.log("内部错误")}eval(res)}).catch(function(e){console.log(e)})},handlePlaylist:function(e){var t=e.length>0?"60px":"";this.$refs.recommend.style.bottom=t,this.discList.length>0&&(console.log(this.$refs.recScroll),this.$refs.recScroll.refresh())},selectItem:function(e){this.$router.push({path:"/recommend/"+e.dissid}),this.setDisc(e)}},Object(__WEBPACK_IMPORTED_MODULE_6_vuex__.d)({setDisc:"SET_DISC"})),components:{Slider:__WEBPACK_IMPORTED_MODULE_3__base_slider_slider__.a,scroll:__WEBPACK_IMPORTED_MODULE_4__base_scroll_scroll__.a,Loading:__WEBPACK_IMPORTED_MODULE_7__base_loading_loading__.a}}},"W1+L":function(e,t,_){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=_("Haw9"),s={render:function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{ref:"recommend",staticClass:"recommend"},[e.discList.length>0?_("scroll",{ref:"recScroll",staticClass:"recommend-content",attrs:{data:e.discList}},[_("div",[e.recommends.length>0?_("div",{staticClass:"slider-wrapper"},[_("slider",e._l(e.recommends,function(e,t){return _("div",{key:t,staticClass:"sliderinner"},[_("a",{attrs:{href:e.linkUrl}},[_("img",{attrs:{src:e.picUrl,alt:""}})])])}))],1):e._e(),e._v(" "),_("div",{staticClass:"recommend-list"},[_("h1",{staticClass:"list-title"},[e._v("热门歌单推荐")]),e._v(" "),_("ul",e._l(e.discList,function(t,i){return _("li",{key:i,staticClass:"item",on:{click:function(_){e.selectItem(t)}}},[_("div",{staticClass:"icon"},[_("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgurl,expression:"item.imgurl"}],attrs:{alt:""}})]),e._v(" "),_("div",{staticClass:"text"},[_("h2",{staticClass:"name",domProps:{innerHTML:e._s(t.creator.name)}}),e._v(" "),_("p",{staticClass:"desc",domProps:{innerHTML:e._s(t.dissname)}})])])}))])])]):e._e(),e._v(" "),e.showLoading?_("loading",{staticClass:"loading"}):e._e(),e._v(" "),_("router-view")],1)},staticRenderFns:[]};var n=function(e){_("toOf")},r=_("VU/8")(i.a,s,!1,n,"data-v-a698f142",null);t.default=r.exports},"eLK/":function(e,t){},m40h:function(e,t,_){"use strict";t.b=function(){var e=r()({},a.b,{platform:"h5",uin:0,needNewCode:1});return l.a.get("/api/getRecommend",{params:e}).then(function(e){return s.a.resolve(e.data)})},t.a=function(){var e=r()({},a.b,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random()});return l.a.get("/api/getDiscList",{params:e}).then(function(e){return s.a.resolve(e.data)})},t.c=function(e){var t=r()({},a.b,{platform:"yqq",hostUin:0,type:1,json:1,onlysong:0,needNewCode:0,gtk:67232076,disstid:e});return l.a.get("/api/getSongList",{params:t}).then(function(e){return s.a.resolve(e.data)})};var i=_("//Fk"),s=_.n(i),n=_("woOf"),r=_.n(n),a=_("T452"),o=_("mtWM"),l=_.n(o);l.a.defaults.withCredentials=!0,l.a.defaults.baseURL="http://10.202.2.112:9000"},toOf:function(e,t){}});
//# sourceMappingURL=1.3fa86c4ebfb71c3c6c85.js.map
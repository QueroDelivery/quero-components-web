(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{413:function(module,exports,__webpack_require__){__webpack_require__(414),__webpack_require__(764),__webpack_require__(765),__webpack_require__(769),__webpack_require__(770),__webpack_require__(766),__webpack_require__(760),__webpack_require__(762),__webpack_require__(763),__webpack_require__(761),__webpack_require__(767),module.exports=__webpack_require__(768)},481:function(module,exports){},764:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var esm=__webpack_require__(60),dist_esm=__webpack_require__(1),colors_brand10="#9B4DEE",colors_brand30="#F7EA48",colors_white="#FFFFFF",logo_qd=__webpack_require__.p+"static/media/logo-qd.beb8e713.png",qdTheme=Object(dist_esm.e)({base:"light",fontBase:"MontSerrat, Arial, Helvetica, sans-serif",fontCode:"monospace",barTextColor:colors_white,barSelectedColor:colors_brand30,barBg:colors_brand10,brandUrl:"https://querodelivery.github.io/quero-components-web/",brandImage:logo_qd}),public_api=(__webpack_require__(24),__webpack_require__(19),__webpack_require__(47)),core_events_dist_esm=__webpack_require__(4);public_api.a.register("TitleAddon",(function(api){var interval=null,setTitle=function setTitle(){clearTimeout(interval);var title,storyData=null;try{storyData=api.getCurrentStoryData()}catch(e){}title=storyData?"".concat(storyData.kind," - ").concat(storyData.name," ⋅ ").concat("Quero Delivery"):"Quero Delivery",document.title!==title&&(document.title=title),interval=setTimeout(setTitle,100)};setTitle(),api.on(core_events_dist_esm.STORY_RENDERED,(function(story){setTitle()}))})),esm.a.setConfig({theme:qdTheme})}},[[413,3,4]]]);
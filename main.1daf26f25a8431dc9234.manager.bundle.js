(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{476:function(module,exports,__webpack_require__){__webpack_require__(477),__webpack_require__(866),__webpack_require__(862),__webpack_require__(871),__webpack_require__(872),__webpack_require__(863),__webpack_require__(867),__webpack_require__(865),__webpack_require__(868),__webpack_require__(864),__webpack_require__(869),module.exports=__webpack_require__(870)},544:function(module,exports){},866:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var esm=__webpack_require__(87),create=__webpack_require__(218),colors_brand10="#9B4DEE",colors_brand30="#F7EA48",colors_white="#FFFFFF",logo_qd=__webpack_require__.p+"static/media/logo-qd.beb8e713.png",qdTheme=Object(create.a)({base:"light",fontBase:"MontSerrat, Arial, Helvetica, sans-serif",fontCode:"monospace",barTextColor:colors_white,barSelectedColor:colors_brand30,barBg:colors_brand10,brandUrl:"https://querodelivery.github.io/quero-components-web/",brandImage:logo_qd}),public_api=(__webpack_require__(18),__webpack_require__(14),__webpack_require__(56)),dist_esm=__webpack_require__(21);public_api.a.register("TitleAddon",(function(api){var interval=null,setTitle=function setTitle(){clearTimeout(interval);var title,storyData=null;try{storyData=api.getCurrentStoryData()}catch(e){}title=storyData?"".concat(storyData.kind," - ").concat(storyData.name," ⋅ ").concat("Quero Delivery"):"Quero Delivery",document.title!==title&&(document.title=title),interval=setTimeout(setTitle,100)};setTitle(),api.on(dist_esm.STORY_RENDERED,(function(story){setTitle()}))})),esm.a.setConfig({theme:qdTheme})}},[[476,2,3]]]);
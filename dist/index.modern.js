import"semantic-ui-css/semantic.min.css";import e,{useState as t,useEffect as r}from"react";import n,{css as o}from"styled-components";import{Dropdown as i}from"semantic-ui-react";import a from"react-datepicker";import c from"react-dom";
/*!
 * Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){p(e,t,r[t])})}return e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d={},u={};try{"undefined"!=typeof window&&(d=window),"undefined"!=typeof document&&(u=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&performance}catch(ne){}var m=(d.navigator||{}).userAgent,f=void 0===m?"":m,h=d,g=u,b=!!g.documentElement&&!!g.head&&"function"==typeof g.addEventListener&&"function"==typeof g.createElement,x=(~f.indexOf("MSIE")||f.indexOf("Trident/"),function(){try{process}catch(e){return!1}}(),"group"),w=h.FontAwesomeConfig||{};g&&"function"==typeof g.querySelector&&[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(e){var t=s(e,2),r=t[1],n=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=g.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(t[0]));null!=n&&(w[r]=n)});var v=l({},{familyPrefix:"fa",replacementClass:"svg-inline--fa",autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},w);v.autoReplaceSvg||(v.observeMutations=!1);var k=l({},v);h.FontAwesomeConfig=k;var y=h||{};y.___FONT_AWESOME___||(y.___FONT_AWESOME___={}),y.___FONT_AWESOME___.styles||(y.___FONT_AWESOME___.styles={}),y.___FONT_AWESOME___.hooks||(y.___FONT_AWESOME___.hooks={}),y.___FONT_AWESOME___.shims||(y.___FONT_AWESOME___.shims=[]);var _=y.___FONT_AWESOME___,E=[];b&&((g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState)||g.addEventListener("DOMContentLoaded",function e(){g.removeEventListener("DOMContentLoaded",e),E.map(function(e){return e()})})),"undefined"==typeof setImmediate?setTimeout:setImmediate;var C={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function O(){for(var e=12,t="";e-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function S(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function z(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,": ").concat(e[r],";")},"")}function $(e){return e.size!==C.size||e.x!==C.x||e.y!==C.y||e.rotate!==C.rotate||e.flipX||e.flipY}function F(e){var t=e.transform,r=e.iconWidth,n={transform:"translate(".concat(e.containerWidth/2," 256)")},o="translate(".concat(32*t.x,", ").concat(32*t.y,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)");return{outer:n,inner:{transform:"".concat(o," ").concat(i," ").concat(a)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}var M={x:0,y:0,width:"100%",height:"100%"};function D(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function I(e){var t=e.icons,r=t.main,n=t.mask,o=e.prefix,i=e.iconName,a=e.transform,c=e.symbol,p=e.title,s=e.maskId,d=e.titleId,u=e.extra,m=e.watchable,f=void 0!==m&&m,h=n.found?n:r,g=h.width,b=h.height,x="fak"===o,w=x?"":"fa-w-".concat(Math.ceil(g/b*16)),v=[k.replacementClass,i?"".concat(k.familyPrefix,"-").concat(i):"",w].filter(function(e){return-1===u.classes.indexOf(e)}).filter(function(e){return""!==e||!!e}).concat(u.classes).join(" "),y={children:[],attributes:l({},u.attributes,{"data-prefix":o,"data-icon":i,class:v,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(b)})},_=x&&!~u.classes.indexOf("fa-fw")?{width:"".concat(g/b*16*.0625,"em")}:{};f&&(y.attributes["data-fa-i2svg"]=""),p&&y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(d||O())},children:[p]});var E=l({},y,{prefix:o,iconName:i,main:r,mask:n,maskId:s,transform:a,symbol:c,styles:l({},_,u.styles)}),C=n.found&&r.found?function(e){var t,r=e.children,n=e.attributes,o=e.main,i=e.mask,a=e.maskId,c=o.icon,p=i.icon,s=F({transform:e.transform,containerWidth:i.width,iconWidth:o.width}),d={tag:"rect",attributes:l({},M,{fill:"white"})},u=c.children?{children:c.children.map(D)}:{},m={tag:"g",attributes:l({},s.inner),children:[D(l({tag:c.tag,attributes:l({},c.attributes,s.path)},u))]},f={tag:"g",attributes:l({},s.outer),children:[m]},h="mask-".concat(a||O()),g="clip-".concat(a||O()),b={tag:"mask",attributes:l({},M,{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,f]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:(t=p,"g"===t.tag?t.children:[t])},b]};return r.push(x,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(h,")")},M)}),{children:r,attributes:n}}(E):function(e){var t=e.children,r=e.attributes,n=e.main,o=e.transform,i=z(e.styles);if(i.length>0&&(r.style=i),$(o)){var a=F({transform:o,containerWidth:n.width,iconWidth:n.width});t.push({tag:"g",attributes:l({},a.outer),children:[{tag:"g",attributes:l({},a.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l({},n.icon.attributes,a.path)}]}]})}else t.push(n.icon);return{children:t,attributes:r}}(E),S=C.attributes;return E.children=C.children,E.attributes=S,c?function(e){var t=e.iconName,r=e.children,n=e.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l({},e.attributes,{id:!0===n?"".concat(e.prefix,"-").concat(k.familyPrefix,"-").concat(t):n}),children:r}]}]}(E):function(e){var t=e.children,r=e.main,n=e.mask,o=e.attributes,i=e.styles,a=e.transform;if($(a)&&r.found&&!n.found){var c={x:r.width/r.height/2,y:.5};o.style=z(l({},i,{"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}(E)}var B=function(e,t,r,n){var o,i,a,c=Object.keys(e),p=c.length,l=void 0!==n?function(e,t){return function(r,n,o,i){return e.call(t,r,n,o,i)}}(t,n):t;for(void 0===r?(o=1,a=e[c[0]]):(o=0,a=r);o<p;o++)a=l(a,e[i=c[o]],i,e);return a};function A(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.skipHooks,o=void 0!==n&&n,i=Object.keys(t).reduce(function(e,r){var n=t[r];return n.icon?e[n.iconName]=n.icon:e[r]=n,e},{});"function"!=typeof _.hooks.addPack||o?_.styles[e]=l({},_.styles[e]||{},i):_.hooks.addPack(e,i),"fas"===e&&A("fa",t)}var P=_.styles,j=_.shims,N=function(){var e=function(e){return B(P,function(t,r,n){return t[n]=B(r,e,{}),t},{})};e(function(e,t,r){return t[3]&&(e[t[3]]=r),e}),e(function(e,t,r){var n=t[2];return e[r]=r,n.forEach(function(t){e[t]=r}),e});var t="far"in P;B(j,function(e,r){var n=r[1];return"far"!==n||t||(n="fas"),e[r[0]]={prefix:n,iconName:r[2]},e},{})};function T(e,t,r){if(e&&e[t]&&e[t][r])return{prefix:t,iconName:r,icon:e[t][r]}}function L(e){var t=e.tag,r=e.attributes,n=void 0===r?{}:r,o=e.children,i=void 0===o?[]:o;return"string"==typeof e?S(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,'="').concat(S(e[r]),'" ')},"").trim()}(n),">").concat(i.map(L).join(""),"</").concat(t,">")}function V(e){this.name="MissingIcon",this.message=e||"Icon unavailable",this.stack=(new Error).stack}N(),(V.prototype=Object.create(Error.prototype)).constructor=V;var q={fill:"currentColor"},R={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},U=(l({},q,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}),l({},R,{attributeName:"opacity"}));function W(e){var t=e[0],r=e[1],n=s(e.slice(4),1)[0];return{found:!0,width:t,height:r,icon:Array.isArray(n)?{tag:"g",attributes:{class:"".concat(k.familyPrefix,"-").concat(x)},children:[{tag:"path",attributes:{class:"".concat(k.familyPrefix,"-").concat("secondary"),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(k.familyPrefix,"-").concat("primary"),fill:"currentColor",d:n[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:n}}}}function H(){k.autoAddCss&&!K&&(function(e){if(e&&b){var t=g.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var r=g.head.childNodes,n=null,o=r.length-1;o>-1;o--){var i=r[o],a=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(n=i)}g.head.insertBefore(t,n)}}(function(){var e="svg-inline--fa",t=k.familyPrefix,r=k.replacementClass,n='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';if("fa"!==t||r!==e){var o=new RegExp("\\.".concat("fa","\\-"),"g"),i=new RegExp("\\--".concat("fa","\\-"),"g"),a=new RegExp("\\.".concat(e),"g");n=n.replace(o,".".concat(t,"-")).replace(i,"--".concat(t,"-")).replace(a,".".concat(r))}return n}()),K=!0)}function X(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return L(e)})}}),Object.defineProperty(e,"node",{get:function(){if(b){var t=g.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function Y(e){var t=e.prefix,r=void 0===t?"fa":t,n=e.iconName;if(n)return T(J.definitions,r,n)||T(_.styles,r,n)}l({},q,{cx:"256",cy:"364",r:"28"}),l({},R,{attributeName:"r",values:"28;14;28;28;14;28;"}),l({},U,{values:"1;0;1;1;0;1;"}),l({},q,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),l({},U,{values:"1;0;0;0;0;1;"}),l({},q,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),l({},U,{values:"0;0;1;1;0;0;"});var Z,J=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}}var t;return(t=[{key:"add",value:function(){for(var e=this,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(t){e.definitions[t]=l({},e.definitions[t]||{},o[t]),A(t,o[t]),N()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var r=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(r).map(function(t){var n=r[t],o=n.prefix,i=n.iconName,a=n.icon;e[o]||(e[o]={}),e[o][i]=a}),e}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,t),e}()),K=!1,G=(Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.transform,n=void 0===r?C:r,o=t.symbol,i=void 0!==o&&o,a=t.mask,c=void 0===a?null:a,p=t.maskId,s=void 0===p?null:p,d=t.title,u=void 0===d?null:d,m=t.titleId,f=void 0===m?null:m,h=t.classes,g=void 0===h?[]:h,b=t.attributes,x=void 0===b?{}:b,w=t.styles,v=void 0===w?{}:w;if(e){var y=e.prefix,_=e.iconName,E=e.icon;return X(l({type:"icon"},e),function(){return H(),k.autoA11y&&(u?x["aria-labelledby"]="".concat(k.replacementClass,"-title-").concat(f||O()):(x["aria-hidden"]="true",x.focusable="false")),I({icons:{main:W(E),mask:c?W(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:_,transform:l({},C,n),symbol:i,title:u,maskId:s,titleId:f,extra:{attributes:x,styles:v,classes:g}})})}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(e||{}).icon?e:Y(e||{}),n=t.mask;return n&&(n=(n||{}).icon?n:Y(n||{})),Z(r,l({},t,{mask:n}))});function Q(e,t){return e(t={exports:{}},t.exports),t.exports
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */}var ee="function"==typeof Symbol&&Symbol.for,te=ee?Symbol.for("react.element"):60103,re=ee?Symbol.for("react.portal"):60106,ne=ee?Symbol.for("react.fragment"):60107,oe=ee?Symbol.for("react.strict_mode"):60108,ie=ee?Symbol.for("react.profiler"):60114,ae=ee?Symbol.for("react.provider"):60109,ce=ee?Symbol.for("react.context"):60110,pe=ee?Symbol.for("react.async_mode"):60111,le=ee?Symbol.for("react.concurrent_mode"):60111,se=ee?Symbol.for("react.forward_ref"):60112,de=ee?Symbol.for("react.suspense"):60113,ue=ee?Symbol.for("react.suspense_list"):60120,me=ee?Symbol.for("react.memo"):60115,fe=ee?Symbol.for("react.lazy"):60116,he=ee?Symbol.for("react.block"):60121,ge=ee?Symbol.for("react.fundamental"):60117,be=ee?Symbol.for("react.responder"):60118,xe=ee?Symbol.for("react.scope"):60119;function we(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case te:switch(e=e.type){case pe:case le:case ne:case ie:case oe:case de:return e;default:switch(e=e&&e.$$typeof){case ce:case se:case fe:case me:case ae:return e;default:return t}}case re:return t}}}function ve(e){return we(e)===le}var ke={AsyncMode:pe,ConcurrentMode:le,ContextConsumer:ce,ContextProvider:ae,Element:te,ForwardRef:se,Fragment:ne,Lazy:fe,Memo:me,Portal:re,Profiler:ie,StrictMode:oe,Suspense:de,isAsyncMode:function(e){return ve(e)||we(e)===pe},isConcurrentMode:ve,isContextConsumer:function(e){return we(e)===ce},isContextProvider:function(e){return we(e)===ae},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===te},isForwardRef:function(e){return we(e)===se},isFragment:function(e){return we(e)===ne},isLazy:function(e){return we(e)===fe},isMemo:function(e){return we(e)===me},isPortal:function(e){return we(e)===re},isProfiler:function(e){return we(e)===ie},isStrictMode:function(e){return we(e)===oe},isSuspense:function(e){return we(e)===de},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===ne||e===le||e===ie||e===oe||e===de||e===ue||"object"==typeof e&&null!==e&&(e.$$typeof===fe||e.$$typeof===me||e.$$typeof===ae||e.$$typeof===ce||e.$$typeof===se||e.$$typeof===ge||e.$$typeof===be||e.$$typeof===xe||e.$$typeof===he)},typeOf:we},ye=Q(function(e,t){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,c=e?Symbol.for("react.provider"):60109,p=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,s=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,m=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,h=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,x=e?Symbol.for("react.responder"):60118,w=e?Symbol.for("react.scope"):60119;function v(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var m=e.type;switch(m){case l:case s:case o:case a:case i:case u:return m;default:var g=m&&m.$$typeof;switch(g){case p:case d:case h:case f:case c:return g;default:return t}}case n:return t}}}var k=s,y=p,_=c,E=r,C=d,O=o,S=h,z=f,$=n,F=a,M=i,D=u,I=!1;function B(e){return v(e)===s}t.AsyncMode=l,t.ConcurrentMode=k,t.ContextConsumer=y,t.ContextProvider=_,t.Element=E,t.ForwardRef=C,t.Fragment=O,t.Lazy=S,t.Memo=z,t.Portal=$,t.Profiler=F,t.StrictMode=M,t.Suspense=D,t.isAsyncMode=function(e){return I||(I=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),B(e)||v(e)===l},t.isConcurrentMode=B,t.isContextConsumer=function(e){return v(e)===p},t.isContextProvider=function(e){return v(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return v(e)===d},t.isFragment=function(e){return v(e)===o},t.isLazy=function(e){return v(e)===h},t.isMemo=function(e){return v(e)===f},t.isPortal=function(e){return v(e)===n},t.isProfiler=function(e){return v(e)===a},t.isStrictMode=function(e){return v(e)===i},t.isSuspense=function(e){return v(e)===u},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===s||e===a||e===i||e===u||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===f||e.$$typeof===c||e.$$typeof===p||e.$$typeof===d||e.$$typeof===b||e.$$typeof===x||e.$$typeof===w||e.$$typeof===g)},t.typeOf=v}()}),_e=Q(function(e){e.exports="production"===process.env.NODE_ENV?ke:ye}),Ee=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable;function Se(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var ze=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,n,o=Se(e),i=1;i<arguments.length;i++){for(var a in r=Object(arguments[i]))Ce.call(r,a)&&(o[a]=r[a]);if(Ee){n=Ee(r);for(var c=0;c<n.length;c++)Oe.call(r,n[c])&&(o[n[c]]=r[n[c]])}}return o},$e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Fe=function(){};if("production"!==process.env.NODE_ENV){var Me=$e,De={},Ie=Function.call.bind(Object.prototype.hasOwnProperty);Fe=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function Be(e,t,r,n,o){if("production"!==process.env.NODE_ENV)for(var i in e)if(Ie(e,i)){var a;try{if("function"!=typeof e[i]){var c=Error((n||"React class")+": "+r+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.");throw c.name="Invariant Violation",c}a=e[i](t,i,n,r,null,Me)}catch(e){a=e}if(!a||a instanceof Error||Fe((n||"React class")+": type specification of "+r+" `"+i+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof a+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),a instanceof Error&&!(a.message in De)){De[a.message]=!0;var p=o?o():"";Fe("Failed "+r+" type: "+a.message+(null!=p?p:""))}}}Be.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(De={})};var Ae=Be,Pe=Function.call.bind(Object.prototype.hasOwnProperty),je=function(){};function Ne(){return null}function Te(){}function Le(){}"production"!==process.env.NODE_ENV&&(je=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),Le.resetWarningCache=Te;var Ve=Q(function(e){e.exports="production"!==process.env.NODE_ENV?function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,n={array:c("array"),bool:c("boolean"),func:c("function"),number:c("number"),object:c("object"),string:c("string"),symbol:c("symbol"),any:a(Ne),arrayOf:function(e){return a(function(t,r,n,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var c=t[r];if(!Array.isArray(c))return new i("Invalid "+o+" `"+a+"` of type `"+l(c)+"` supplied to `"+n+"`, expected an array.");for(var p=0;p<c.length;p++){var s=e(c,p,n,o,a+"["+p+"]",$e);if(s instanceof Error)return s}return null})},element:a(function(t,r,n,o,a){var c=t[r];return e(c)?null:new i("Invalid "+o+" `"+a+"` of type `"+l(c)+"` supplied to `"+n+"`, expected a single ReactElement.")}),elementType:a(function(e,t,r,n,o){var a=e[t];return _e.isValidElementType(a)?null:new i("Invalid "+n+" `"+o+"` of type `"+l(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")}),instanceOf:function(e){return a(function(t,r,n,o,a){var c;return t[r]instanceof e?null:new i("Invalid "+o+" `"+a+"` of type `"+((c=t[r]).constructor&&c.constructor.name?c.constructor.name:"<<anonymous>>")+"` supplied to `"+n+"`, expected instance of `"+(e.name||"<<anonymous>>")+"`.")})},node:a(function(e,t,r,n,o){return p(e[t])?null:new i("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")}),objectOf:function(e){return a(function(t,r,n,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var c=t[r],p=l(c);if("object"!==p)return new i("Invalid "+o+" `"+a+"` of type `"+p+"` supplied to `"+n+"`, expected an object.");for(var s in c)if(Pe(c,s)){var d=e(c,s,n,o,a+"."+s,$e);if(d instanceof Error)return d}return null})},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&je(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),Ne;function t(t,r,n,a,c){for(var p=t[r],l=0;l<e.length;l++)if(o(p,e[l]))return null;var d=JSON.stringify(e,function(e,t){return"symbol"===s(t)?String(t):t});return new i("Invalid "+a+" `"+c+"` of value `"+String(p)+"` supplied to `"+n+"`, expected one of "+d+".")}return a(t)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&je("Invalid argument supplied to oneOfType, expected an instance of array."),Ne;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return je("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+d(r)+" at index "+t+"."),Ne}return a(function(t,r,n,o,a){for(var c=0;c<e.length;c++)if(null==(0,e[c])(t,r,n,o,a,$e))return null;return new i("Invalid "+o+" `"+a+"` supplied to `"+n+"`.")})},shape:function(e){return a(function(t,r,n,o,a){var c=t[r],p=l(c);if("object"!==p)return new i("Invalid "+o+" `"+a+"` of type `"+p+"` supplied to `"+n+"`, expected `object`.");for(var s in e){var d=e[s];if(d){var u=d(c,s,n,o,a+"."+s,$e);if(u)return u}}return null})},exact:function(e){return a(function(t,r,n,o,a){var c=t[r],p=l(c);if("object"!==p)return new i("Invalid "+o+" `"+a+"` of type `"+p+"` supplied to `"+n+"`, expected `object`.");var s=ze({},t[r],e);for(var d in s){var u=e[d];if(!u)return new i("Invalid "+o+" `"+a+"` key `"+d+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=u(c,d,n,o,a+"."+d,$e);if(m)return m}return null})}};function o(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function i(e){this.message=e,this.stack=""}function a(e){function t(t,r,n,o,a,c,p){if(o=o||"<<anonymous>>",c=c||n,p!==$e){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}return null==r[n]?t?new i(null===r[n]?"The "+a+" `"+c+"` is marked as required in `"+o+"`, but its value is `null`.":"The "+a+" `"+c+"` is marked as required in `"+o+"`, but its value is `undefined`."):null:e(r,n,o,a,c)}process;var r=t.bind(null,!1);return r.isRequired=t.bind(null,!0),r}function c(e){return a(function(t,r,n,o,a,c){var p=t[r];return l(p)!==e?new i("Invalid "+o+" `"+a+"` of type `"+s(p)+"` supplied to `"+n+"`, expected `"+e+"`."):null})}function p(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(p);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!n)return!1;var o,i=n.call(t);if(n!==t.entries){for(;!(o=i.next()).done;)if(!p(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!p(a[1]))return!1}return!0;default:return!1}}function l(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function s(e){if(null==e)return""+e;var t=l(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function d(e){var t=s(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return i.prototype=Error.prototype,n.checkPropTypes=Ae,n.resetWarningCache=Ae.resetWarningCache,n.PropTypes=n,n}(_e.isElement):function(){function e(e,t,r,n,o,i){if(i!==$e){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Le,resetWarningCache:Te};return r.PropTypes=r,r}()});function qe(e){return(qe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Re(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function We(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ue(Object(r),!0).forEach(function(t){Re(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ue(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function He(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Xe(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Ye(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1);var t}function Ze(e){return e.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var r,n=t.indexOf(":"),o=Ye(t.slice(0,n)),i=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=i:e[o]=i,e},{})}var Je=!1;try{Je="production"===process.env.NODE_ENV}catch(ne){}function Ke(e){return null===e?null:"object"===qe(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function Ge(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Re({},e,t):{}}function Qe(e){var t=e.forwardedRef,r=He(e,["forwardedRef"]),n=r.mask,o=r.symbol,i=r.className,a=r.title,c=Ke(r.icon),p=Ge("classes",[].concat(Xe(function(e){var t,r=e.flip,n=e.size,o=e.rotation,i=e.pull,a=(Re(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-inverse":e.inverse,"fa-border":e.border,"fa-li":e.listItem,"fa-flip-horizontal":"horizontal"===r||"both"===r,"fa-flip-vertical":"vertical"===r||"both"===r},"fa-".concat(n),null!=n),Re(t,"fa-rotate-".concat(o),null!=o&&0!==o),Re(t,"fa-pull-".concat(i),null!=i),Re(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(a).map(function(e){return a[e]?e:null}).filter(function(e){return e})}(r)),Xe(i.split(" ")))),l=Ge("transform","string"==typeof r.transform?function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e?e.toLowerCase().split(" ").reduce(function(e,t){var r=t.toLowerCase().split("-"),n=r[0],o=r.slice(1).join("-");if(n&&"h"===o)return e.flipX=!0,e;if(n&&"v"===o)return e.flipY=!0,e;if(o=parseFloat(o),isNaN(o))return e;switch(n){case"grow":e.size=e.size+o;break;case"shrink":e.size=e.size-o;break;case"left":e.x=e.x-o;break;case"right":e.x=e.x+o;break;case"up":e.y=e.y-o;break;case"down":e.y=e.y+o;break;case"rotate":e.rotate=e.rotate+o}return e},t):t}(r.transform):r.transform),s=Ge("mask",Ke(n)),d=G(c,We({},p,{},l,{},s,{symbol:o,title:a}));if(!d)return function(){var e;!Je&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",c),null;var u=d.abstract,m={ref:t};return Object.keys(r).forEach(function(e){Qe.defaultProps.hasOwnProperty(e)||(m[e]=r[e])}),et(u[0],m)}Qe.displayName="FontAwesomeIcon",Qe.propTypes={border:Ve.bool,className:Ve.string,mask:Ve.oneOfType([Ve.object,Ve.array,Ve.string]),fixedWidth:Ve.bool,inverse:Ve.bool,flip:Ve.oneOf(["horizontal","vertical","both"]),icon:Ve.oneOfType([Ve.object,Ve.array,Ve.string]),listItem:Ve.bool,pull:Ve.oneOf(["right","left"]),pulse:Ve.bool,rotation:Ve.oneOf([0,90,180,270]),size:Ve.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Ve.bool,symbol:Ve.oneOfType([Ve.bool,Ve.string]),title:Ve.string,transform:Ve.oneOfType([Ve.string,Ve.object]),swapOpacity:Ve.bool},Qe.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var et=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map(function(r){return e(t,r)}),i=Object.keys(r.attributes||{}).reduce(function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=Ze(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[Ye(t)]=n}return e},{attrs:{}}),a=n.style,c=void 0===a?{}:a,p=He(n,["style"]);return i.attrs.style=We({},i.attrs.style,{},c),t.apply(void 0,[r.tag,We({},i.attrs,{},p)].concat(Xe(o)))}.bind(null,e.createElement),tt={prefix:"fas",iconName:"bell",icon:[448,512,[],"f0f3","M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"]},rt={prefix:"fas",iconName:"check",icon:[512,512,[],"f00c","M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"]},nt={prefix:"fas",iconName:"minus",icon:[448,512,[],"f068","M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"]},ot={prefix:"fas",iconName:"plus",icon:[448,512,[],"f067","M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"]};
/*!
 * Font Awesome Pro 5.15.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Commercial License)
 */let it,at,ct,pt,lt,st,dt=e=>e;const ut=e=>{switch(e){case"mini":return"10px";case"tiny":return"11px";case"small":return"12px";case"medium":return"14px";case"large":return"16px";case"big":return"18px";case"huge":return"20px";case"massive":return"22px";default:return e}},mt=n.button(it||(it=dt`
    background-color: ${0};
    height: ${0};
    width: ${0};
    border-radius: 30px;
    cursor: pointer;
    border: ${0};
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${0};

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
    }

    &:hover {
        background-color: ${0};

        span {
            color: ${0};
        }
    }
`),e=>e.secundary||e.tertiary?"#FFFFFF":e.noBorder?"transparent":"#F7EA48",e=>e.size?(e=>{switch(e){case"mini":return"25px";case"tiny":return"30px";case"small":return"35px";case"medium":return"40px";case"large":return"45px";case"big":return"50px";case"huge":return"55px";case"massive":return"60px";default:return e}})(e.size):"40px",e=>e.width?e.width+"%":e.icon||e.tertiary?"":"100%",e=>e.secundary?"1px solid #9B4DEE":e.tertiary?"1px solid #ACACAC":"none",e=>e.icon||e.tertiary?"0 15px":"",e=>e.secundary?"rgba(155, 77, 238, 0.2)":e.backPurple?"#E0457B":e.noBorder?"transparent":e.tertiary?"rgba(211, 211, 211, 0.4)":"#9B4DEE",e=>e.secundary?"#9B4DEE":e.backPurple?"#FFFFFF":e.noBorder?e.colorText?e.colorText:"#9B4DEE":e.tertiary?"#707070":"#F7EA48"),ft=n.span(at||(at=dt`
    color: ${0};
    font-weight: ${0};
    font-size: ${0};
`),e=>e.colorText?e.colorText:e.tertiary?"#707070":"#9B4DEE",e=>e.firstStrong||e.strong?"bold":"normal",e=>e.size?ut(e.size):"14px"),ht=n.span(ct||(ct=dt`
    color: ${0};
    font-weight: ${0};
    font-size: ${0};
`),e=>e.colorText?e.colorText:e.tertiary?"#707070":"#9B4DEE",e=>e.firstStrong||e.notStrong?"normal":"bold",e=>e.size?ut(e.size):"14px"),gt=n.button(pt||(pt=dt`
    background-color: ${0};
    height: 40px;
    width: 100%;
    border-radius: 30px;
    cursor: pointer;
    border: 1px solid ${0};
    outline: none;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
    }

    &:hover {
        background-color: ${0};
    }

    span {
        color: ${0};
        margin-left: 20px;
        font-weight: bold;
    }
`),"#9B4DEE","#F7EA48","rgba(155, 77, 238, 0.9)","#F7EA48"),bt=n.div(lt||(lt=dt``)),xt=n.div(st||(st=dt`
    background-color: ${0};
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: ${0};
    font-size: 10px;
`),"#F7EA48","#9B4DEE");let wt,vt,kt=e=>e;const yt=e=>{switch(e){case"mini":return"1em";case"tiny":return"1.5em";case"small":return"2em";case"medium":return"2.5em";case"large":return"3em";case"big":return"3.5em";case"huge":return"4em";case"massive":return"4.5em";default:return e}},_t=e=>{switch(e){case"mini":return"2px";case"tiny":return"2.5px";case"small":return"3px";case"medium":return"3.5px";case"large":return"4px";case"big":return"4.5px";case"huge":return"5px";case"massive":return"5.5px";default:return e}},Et=n.div(wt||(wt=kt`
    width: 100%;
    display: flex;
    justify-content: ${0};
`),e=>"left"===e.position?"flex-start":"right"===e.position?"flex-end":"center"),Ct=n.div(vt||(vt=kt`
    border-width: ${0};
    border-style: solid;
    border-color: ${0};
    border-top-width: ${0};
    border-top-style: solid;
    border-top-color: ${0};

    border-radius: 50%;
    width: ${0};
    height: ${0};
    animation: spin 0.6s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`),e=>e.size?_t(e.size):"3.5px","#E1E6EB",e=>e.size?_t(e.size):"3.5px",e=>e.color?e.color:"#9B4DEE",e=>e.size?yt(e.size):"2.5em",e=>e.size&&e.size?yt(e.size):"2.5em"),Ot=({color:t,size:r,className:n,style:o,position:i})=>e.createElement(Et,{position:i},e.createElement(Ct,{color:t,size:r,style:o,className:n})),St=({textFirst:t,textEnd:r,firstStrong:n,notStrong:o,strong:i,loading:a,secundary:c,backPurple:p,children:l,notification:s,amount:d,height:u,width:m,icon:f,colorIcon:h,noBorder:g,colorText:b,tertiary:x,size:w,...v})=>s?e.createElement(gt,Object.assign({},v),a?e.createElement(Ot,{size:"tiny"}):l||e.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",height:"50%",padding:10}},e.createElement("div",{style:{display:"flex",alignItems:"center"}},e.createElement(bt,null,e.createElement(Qe,{icon:tt,size:"lg",color:"#F7EA48"})),e.createElement("span",null,"notificações")),e.createElement(xt,null,d))):e.createElement(mt,Object.assign({},v,{secundary:c,backPurple:p,height:u,width:m,icon:f,noBorder:g,colorText:b,tertiary:x,size:w}),a?e.createElement(Ot,{size:"tiny"}):l||e.createElement("div",null,e.createElement(ft,{firstStrong:n,strong:i,notStrong:o,colorText:b,tertiary:x,size:w},t+" "),e.createElement(ht,{firstStrong:n,strong:i,notStrong:o,colorText:b,tertiary:x,size:w},r),f&&e.createElement(e.Fragment,null,e.createElement(Qe,{icon:f,color:h||"#9B4DEE",size:"lg",style:{marginLeft:10}}))));let zt,$t,Ft,Mt,Dt,It,Bt=e=>e;const At=n.div(zt||(zt=Bt`
    ${0}
`),e=>o(e.open?$t||($t=Bt`
                  opacity: 1;
                  visibility: visible;
                  position: fixed;
                  top: 0;
                  right: 0;
                  bottom: 0;
                  left: 0;
                  background: rgba(0, 0, 0, 0.5);
                  transition: opacity 0.25s ease;
                  overflow: auto;
                  display: flex;
                  z-index: 999;
              `):Ft||(Ft=Bt`
                  opacity: 1;
                  visibility: hidden;
              `))),Pt=n.div(Mt||(Mt=Bt`
    ${0}
`),e=>e.open?o(Dt||(Dt=Bt`
                  transition: bottom 0.25s ease;
                  width: 97%;
                  background: ${0};
                  border-top-left-radius: 30px;
                  border-top-right-radius: 30px;
                  margin-top: auto;
                  margin-left: auto;
                  margin-right: auto;
                  padding: 20px;
                  position: relative;

                  .box-dialog {
                      max-height: ${0};
                      overflow: auto;
                      margin-bottom: -20px;
                  }

                  .loading-dialog {
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      background-color: rgba(255, 255, 255, 0.8);
                      width: 100%;
                      height: 100%;
                      top: 0;
                      left: 0;
                      right: 0;
                      bottom: 0;
                      border-radius: 30px;
                      z-index: 2;
                      position: absolute;
                  }
              `),"#FFFFFF",e.maxHeight?e.maxHeight+"px":"100%"):o(It||(It=Bt`
                  transition: bottom 0.25s ease;
                  bottom: -100%;
              `))),jt=({open:t,children:r,onClose:n,loading:o,maxHeight:i})=>e.createElement(At,{open:t,onClick:e=>{e.stopPropagation(),n()}},e.createElement(Pt,{open:t,onClick:e=>e.stopPropagation(),maxHeight:i},o&&e.createElement("div",{className:"loading-dialog"},e.createElement(Ot,null)),e.createElement("div",{className:"box-dialog"},r)));let Nt,Tt,Lt,Vt,qt,Rt,Ut=e=>e;const Wt=n.div(Nt||(Nt=Ut`
    width: ${0};
    position: relative;

    opacity: ${0};

    input {
        color: ${0};
        width: 100%;
        height: 100%;
        padding-top: 20px;
        padding-left: ${0};
        padding-bottom: 5px;
        padding-right: ${0};
        border: none;
        outline: none;
        background-color: transparent;

        &::placeholder {
            color: ${0};
        }
    }

    input:disabled {
        background-color: transparent;
    }

    label {
        position: absolute;
        bottom: 0px;
        top: 0px;
        left: 0px;
        width: 100%;
        right: 100%;
        pointer-events: none;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: ${0};

        ${0}
    }

    span {
        position: absolute;
        bottom: 5px;
        left: ${0};
        transition: all 0.3s ease;

        ${0}
    }

    .icon {
        position: absolute;
        bottom: 0;
        padding: 5px 10px;
        ${0}
    }

    .icon-action {
        position: absolute;
        bottom: 0;
        padding: 5px 10px;
        ${0}
        cursor: pointer;
    }
`),e=>e.width?e.width:"100%",e=>e.disabled?"50%":"100%",e=>e.textColor?e.textColor:"#707070",e=>e.icon&&!e.action?"right"===e.iconPosition?"15px":"40px":e.action&&!e.icon?"left"===e.actionPosition?"40px":"15px":e.action||e.icon?"40px":"15px",e=>e.icon&&!e.action?"right"===e.iconPosition?"40px":"0px":e.action&&!e.icon?"left"===e.actionPosition?"0px":"40px":e.action&&e.icon?"40px":"0px","#F1F1F1",e=>(e.requiredText||e.errorMessage)&&e.errorColor?e.errorColor:e.requiredText||e.errorMessage?"#E53935":"#ACACAC",e=>e.isFieldActive?o(Tt||(Tt=Ut`
                      color: ${0};
                  `),"#9B4DEE"):o(Lt||(Lt=Ut`
                      color: ${0};
                  `),"#707070"),e=>e.icon&&!e.action?"right"===e.iconPosition?"15px":"40px":e.action&&!e.icon?"left"===e.actionPosition?"40px":"15px":e.action||e.icon?"40px":"15px",e=>e.isFieldActive?o(Vt||(Vt=Ut`
                      transform: translateY(-100%);
                      font-size: 12px;
                      color: ${0};
                  `),e=>(e.requiredText||e.errorMessage)&&e.errorColor?e.errorColor:e.requiredText||e.errorMessage?"#E53935":"#9B4DEE"):o(qt||(qt=Ut`
                      font-size: 14px;
                      color: ${0};
                  `),e=>(e.requiredText||e.errorMessage)&&e.errorColor?e.errorColor:e.requiredText||e.errorMessage?"#E53935":"#707070"),e=>"right"===e.iconPosition&&"right: 0;",e=>e.actionPosition&&"left"===e.actionPosition?"left: 0;":"right: 0;"),Ht=n.span(Rt||(Rt=Ut`
    font-size: 10px;
    margin-left: 0;
    color: ${0};
`),e=>e.errorColor?e.errorColor:"#E53935"),Xt=({containerStyle:n,label:o,labelStyle:i,errorMessage:a,width:c,textColor:p,inputRef:l,name:s,icon:d,iconPosition:u,iconColor:m,action:f,...h})=>{const[g,b]=t(!1);return r(()=>{h.value&&(g||b(!0))},[h.value]),e.createElement("div",{style:{paddingBottom:a?0:20}},e.createElement(Wt,{isFieldActive:g,errorMessage:a,containerStyle:n,width:c,disabled:h.disabled?h.disabled:void 0,style:n,textColor:p,icon:!!d,iconPosition:u,action:f,actionPosition:null==f?void 0:f.position},d&&e.createElement("div",{className:"icon"},e.createElement(Qe,{icon:d,color:m||"#9B4DEE"})),f&&e.createElement("div",{className:"icon-action",onClick:f.onClick},e.createElement(Qe,{icon:f.icon,color:f.iconColor||"#9B4DEE"})),e.createElement("input",Object.assign({},h,{onFocus:()=>{g||b(!0)},onBlur:()=>{g&&!h.value&&b(!1)},name:s,placeholder:g?h.placeholder:"",ref:l})),e.createElement("label",{style:i},e.createElement("span",null,o))),a?e.createElement(Ht,null,a):null)},Yt=({register:n,errors:o,validate:i,name:a,required:c,values:p,limit:l,minimum:s,...d})=>{var u;const[m,f]=t(!1),[h,g]=t(""),b=p?p(a)||d.defaultValue:d.value;return r(()=>{b&&(m||f(!0))},[b]),e.createElement("div",{style:{paddingBottom:h||o?0:20}},e.createElement(Wt,{isFieldActive:m,requiredText:!(!o||"required"!==o.type),errorMessage:o,containerStyle:d.containerStyle,width:d.width,disabled:d.disabled,style:d.containerStyle,textColor:d.textColor,icon:!!d.icon,iconPosition:d.iconPosition,action:d.action,actionPosition:null===(u=d.action)||void 0===u?void 0:u.position},d.icon&&e.createElement("div",{className:"icon"},e.createElement(Qe,{icon:d.icon,color:d.iconColor||"#9B4DEE"})),d.action&&e.createElement("div",{className:"icon-action",onClick:d.action.onClick},e.createElement(Qe,{icon:d.action.icon,color:d.action.iconColor||"#9B4DEE"})),e.createElement("input",Object.assign({},d,{onFocus:()=>{m||f(!0)},onBlur:()=>{m&&!b&&f(!1)},name:a,placeholder:m?d.placeholder:"",ref:n?n({required:c,validate:i&&c?e=>i(e)?(g(i(e)),!1):(g(""),!0):l&&c?e=>e.length>l?(g(l+" caracteres permitidos."),!1):(g(""),!0):s&&c?e=>e.length<s?(g(`${a} deve ter ${s} ou mais caracteres.`),!1):(g(""),!0):null}):null})),e.createElement("label",{style:d.labelStyle},e.createElement("span",null,d.label))),o?e.createElement(Ht,null,"required"===o.type?"Obrigatório":""+h):null)};let Zt,Jt,Kt,Gt,Qt,er,tr,rr,nr,or=e=>e;const ir=n.div(Zt||(Zt=or`
    ${0}
`),e=>o(e.open?Jt||(Jt=or`
                  opacity: 1;
                  visibility: visible;
                  position: fixed;
                  top: 0;
                  right: 0;
                  bottom: 0;
                  left: 0;
                  background: rgba(0, 0, 0, 0.5);
                  transition: opacity 0.25s ease;
                  overflow: auto;
                  padding: 40px 0;
                  display: flex;
                  z-index: 999;
              `):Kt||(Kt=or`
                  opacity: 1;
                  visibility: hidden;
              `))),ar=n.div(Gt||(Gt=or`
    transition: top 0.25s ease;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: ${0};
    margin: auto;
    background: ${0};
    border-radius: 30px;
`),e=>e.width?"string"==typeof e.width?e.width.replace("%","")+"%":e.width+"px":e.size?(e=>{switch(e){case"mini":return"35%";case"tiny":return"45%";case"small":return"55%";case"large":return"65%";case"fullscreen":return"95%";default:return e}})(e.size):"80%","#FFFFFF"),cr=(n.div(Qt||(Qt=or`
    transition: bottom 1s ease;
    width: 90%;
    background: ${0};
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`),"#FFFFFF"),n.div(er||(er=or`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: ${0};
    font-size: 20px;

    .name-icon-modal {
        display: flex;
        align-items: center;
    }

    & strong {
        padding: ${0};
        color: ${0};
    }
`),e=>e.noBorder?"none":"1px solid #E1E6EB",e=>e.iconBack?"20px 0":"20px 30px","#9B4DEE")),pr=n.div(tr||(tr=or`
    padding: 20px 30px;
    cursor: pointer;
`)),lr=n.div(rr||(rr=or`
    padding: 20px 30px;
    height: 100%;
    position: relative;

    .loading-modal {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.8);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 30px;
        z-index: 2;
        position: absolute;
    }
`)),sr=n.div(nr||(nr=or`
    border-top: 1px solid ${0};
    margin: 0 30px;
    padding: 20px 0;
    display: flex;
    flex-direction: row-reverse;
`),"#E1E6EB");
/*!
 * Font Awesome Pro 5.15.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Commercial License)
 */
var dr={prefix:"fal",iconName:"angle-down",icon:[256,512,[],"f107","M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"]},ur={prefix:"fal",iconName:"angle-left",icon:[192,512,[],"f104","M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L25 264.5c-4.6-4.7-4.6-12.3.1-17z"]},mr={prefix:"fal",iconName:"angle-up",icon:[256,512,[],"f106","M136.5 185.1l116 117.8c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L128 224.7 27.6 326.9c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17l116-117.8c4.7-4.6 12.3-4.6 17 .1z"]},fr={prefix:"fal",iconName:"times",icon:[320,512,[],"f00d","M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"]};const hr=({open:t,title:n,children:o,actions:i,width:a,onClose:c,closeOnDimerClick:p,loading:l,onBack:s,size:d,noBorder:u,closeIcon:m=!0})=>{function f(e){t&&"Escape"==e.key&&p&&(console.log("oi"),e.stopPropagation(),c())}return r(()=>(t?window.addEventListener("keydown",e=>f(e)):window.removeEventListener("keydown",e=>f(e)),window.removeEventListener("keydown",e=>f(e))),[t]),e.createElement(ir,{open:t,onClick:e=>{p&&(e.stopPropagation(),c())}},e.createElement(ar,{size:d,width:a,onClick:e=>e.stopPropagation()},e.createElement(cr,{iconBack:!!s,noBorder:u},e.createElement("div",{className:"name-icon-modal"},s?e.createElement(pr,{onClick:()=>s()},e.createElement(Qe,{icon:ur,size:"lg",color:"#9B4DEE"})):null,e.createElement("strong",null,n)),m&&e.createElement(pr,{onClick:e=>{e.stopPropagation(),c()}},e.createElement(Qe,{icon:fr,size:"lg",color:"#9B4DEE"}))),e.createElement(lr,null,l&&e.createElement("div",{className:"loading-modal"},e.createElement(Ot,null)),o),i&&e.createElement(sr,null,i)))};let gr,br,xr,wr,vr,kr,yr,_r=e=>e;const Er=n.span(gr||(gr=_r`
    font-size: 14px;
    color: ${0};
    margin-left: 15px;
`),e=>e.errorMessage?"#E0457B":e.labelColor?e.labelColor:"#9B4DEE"),Cr=n.div(br||(br=_r`
    width: ${0};
    position: relative;

    opacity: ${0};

    textarea {
        color: ${0};
        resize: none;
        width: 100%;
        border-radius: 20px;
        height: ${0};
        margin: 0px;
        outline: none;
        padding: 20px;
        border-color: ${0};

        &::placeholder {
            color: ${0};
        }

        -moz-appearance: none;
        -webkit-appearance: none;
    }

    label {
        position: absolute;
        bottom: 0px;
        top: 0px;
        left: 0px;
        width: 100%;
        right: 100%;
        pointer-events: none;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: ${0};

        ${0}
    }

    textarea::-webkit-scrollbar {
        width: 7px;
        border-radius: 50px;
    }

    textarea::-webkit-scrollbar-thumb {
        background-color: ${0};
        border-radius: 50px;
    }

    textarea::-webkit-scrollbar-thumb:hover {
        background-color: ${0};
    }
`),e=>e.width?e.width:"100%",e=>e.disabled?"50%":"100%",e=>e.textColor?e.textColor:"#707070",e=>e.height?e.height+"px":"100px",e=>e.errorMessage&&e.errorColor?e.errorColor:e.errorMessage?"#E53935":"#ACACAC","#F1F1F1",e=>e.errorMessage&&e.errorColor?e.errorColor:e.errorMessage?"#E53935":"#ACACAC",e=>e.isFieldActive?o(xr||(xr=_r`
                      color: ${0};
                  `),"#9B4DEE"):o(wr||(wr=_r`
                      color: ${0};
                  `),"#707070"),"#9B4DEE","rgba(155, 77, 238, 0.9)"),Or=n.span(vr||(vr=_r`
    font-size: 10px;
    margin-left: 0;
    margin-top: -2px;
    color: ${0};
`),e=>e.errorColor?e.errorColor:"#E0457B"),Sr=n.div(kr||(kr=_r`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 10px;
`)),zr=n.div(yr||(yr=_r`
    font-size: ${0};
    color: ${0};
`),e=>e.lengthInfo?"10px":"14px",e=>e.lengthInfo?"#ACACAC":"#9B4DEE"),$r=({containerStyle:t,label:r,labelColor:n,labelStyle:o,errorMessage:i,errorColor:a,width:c,height:p,textColor:l,textAreaRef:s,lengthInfo:d,...u})=>e.createElement("div",{style:{paddingBottom:i?0:20}},r&&e.createElement(Er,{errorMessage:i,labelColor:n},r),e.createElement(Cr,{errorMessage:i,errorColor:a,labelStyle:o,containerStyle:t,width:c,style:t,disabled:u.disabled,textColor:l,height:p},e.createElement("textarea",Object.assign({},u,{placeholder:u.placeholder,ref:s}))),e.createElement(Sr,null,e.createElement(Or,{errorColor:a},i),d&&u.maxLength&&e.createElement(zr,{lengthInfo:d},`${"string"==typeof u.value?u.value.length:0}/${u.maxLength} caracteres`))),Fr=({register:r,errors:n,validate:o,name:i,required:a,limit:c,minimum:p,...l})=>{const[s,d]=t("");return e.createElement($r,Object.assign({},l,{name:i,errorMessage:n?"required"===n.type?"Obrigatório":""+s:"",textAreaRef:r?r({required:a,validate:o&&a?e=>o(e)?(d(o(e)),!1):(d(""),!0):c&&a?e=>e.length>c?(d(c+" caracteres permitidos."),!1):(d(""),!0):p&&a?e=>e.length<p?(d(`${i} deve ter ${p} ou mais caracteres.`),!1):(d(""),!0):null}):null}))};let Mr;const Dr=e=>{switch(e){case"mini":return"10px";case"tiny":return"12px";case"small":return"14px";case"medium":return"17px";case"large":return"20px";case"big":return"23px";case"huge":return"26px";case"massive":return"30px";default:return e}},Ir=n.div(Mr||(Mr=(e=>e)`
    display: flex;
    align-items: center;

    > input {
        display: none;
    }

    label {
        font-size: ${0};
        color: ${0};
        cursor: ${0};
        opacity: ${0};
    }

    > input + div {
        position: relative;
        cursor: ${0};
        opacity: ${0};
        display: flex;
        align-items: center;

        &:before {
            content: '';
            position: absolute;
            width: ${0};
            height: ${0};
            border: 1px solid ${0};
            background: ${0};
            border-radius: 5px;
        }
        &:after {
            content: ' ';
            position: absolute;
            width: ${0};
            height: ${0};
            border: 1px solid ${0};
            background: ${0};
            border-radius: 5px;
            color: ${0};
            text-align: center;
            font-size: 12px;
        }
    }
    > input:not(:checked) + div {
        &:after {
            opacity: 0;
            transform: scale(0);
        }
    }
    > input:checked + div {
        &:after {
            opacity: 1;
            transform: scale(1);
        }
    }

    span {
        margin-left: ${0};
        margin-right: ${0};
        font-size: ${0};
        color: ${0};
        z-index: 1;
    }
`),e=>e.sizeBox?(e=>{switch(e){case"mini":return"10px";case"tiny":return"13px";case"small":return"14px";case"medium":return"16px";case"large":return"18px";case"big":return"20px";case"huge":return"22px";case"massive":return"24px";default:return e}})(e.sizeBox):"17px","#707070",e=>e.disabled?"default":"pointer",e=>e.disabled?.5:1,e=>e.disabled?"default":"pointer",e=>e.disabled?.5:1,e=>e.sizeBox?Dr(e.sizeBox):"17px",e=>e.sizeBox?Dr(e.sizeBox):"17px","#E1E6EB","#E1E6EB",e=>e.sizeBox?Dr(e.sizeBox):"17px",e=>e.sizeBox?Dr(e.sizeBox):"17px","#68349F","#68349F","#FFFFFF",e=>e.sizeBox?(e=>{switch(e){case"mini":return"1px";case"tiny":return"1.2px";case"small":return"1.4px";case"medium":case"large":case"big":return"2px";case"huge":return"3px";case"massive":return"4px";default:return e}})(e.sizeBox):"2.5px",e=>e.sizeBox?(e=>{switch(e){case"mini":return"5px";case"tiny":return"6px";case"small":return"7px";case"medium":return"8px";case"large":return"9px";case"big":return"10px";case"huge":return"11px";case"massive":return"12px";default:return e}})(e.sizeBox):"8px",e=>e.sizeBox?(e=>{switch(e){case"mini":return"8px";case"tiny":return"10px";case"small":return"11px";case"medium":return"13px";case"large":return"16px";case"big":return"19px";case"huge":return"21px";case"massive":return"23px";default:return e}})(e.sizeBox):"13px",e=>e.checked?"#FFFFFF":"#E1E6EB"),Br=({label:t,labelStyle:r,sizeBox:n,...o})=>e.createElement(Ir,{onClick:()=>o.disabled?null:o.onChange?o.onChange():null,disabled:o.disabled,sizeBox:n,checked:o.checked},e.createElement("input",Object.assign({type:"checkbox"},o)),e.createElement("div",null,e.createElement("span",null,e.createElement(Qe,{icon:rt})),e.createElement("label",{style:r},t)));let Ar;const Pr=e=>{switch(e){case"mini":return"10px";case"tiny":return"12px";case"small":return"14px";case"medium":return"17px";case"large":return"20px";case"big":return"23px";case"huge":return"26px";case"massive":return"30px";default:return e}},jr=e=>{switch(e){case"mini":return"2px";case"tiny":return"4px";case"small":return"6px";case"medium":return"9px";case"large":return"12px";case"big":return"15px";case"huge":return"18px";case"massive":return"22px";default:return e}},Nr=n.div(Ar||(Ar=(e=>e)`
    > input {
        display: none;
    }

    label {
        font-size: ${0};
        color: ${0};
        cursor: ${0};
        opacity: ${0};
        padding-top: ${0};
    }

    > input + div {
        position: relative;
        padding-left: ${0};
        cursor: ${0};
        opacity: ${0};
        display: flex;
        align-items: center;

        &:before {
            content: "";
            position: absolute;
            left: 0;
            top: ${0};
            width: ${0};
            height: ${0};
            border: 1px solid ${0};
            background: ${0};
            border-radius: 50%;
        }
        &:after {
            content: " ";
            position: absolute;
            left: 4px;
            top: ${0};
            width: ${0};
            height: ${0};
            border: 1px solid ${0};
            background: ${0};
            border-radius: 50%;
            color: ${0};
            text-align: center;
            font-size: 12px;
        }
    }
    > input:not(:checked) + div {
        &:after {
            opacity: 0;
            transform: scale(0);
        }
    }
    > input:checked + div {
        &:after {
            opacity: 1;
            transform: scale(1);
        }
    }
`),e=>e.sizeBox?(e=>{switch(e){case"mini":return"10px";case"tiny":return"13px";case"small":return"14px";case"medium":return"16px";case"large":return"18px";case"big":return"20px";case"huge":return"22px";case"massive":return"24px";default:return e}})(e.sizeBox):"17px","#707070",e=>e.disabled?"default":"pointer",e=>e.disabled?.5:1,e=>e.sizeBox?(e=>{switch(e){case"mini":case"tiny":case"small":case"medium":return"0px";case"large":case"big":return"2px";case"huge":return"3px";case"massive":return"4px";default:return e}})(e.sizeBox):"0px",e=>e.sizeBox?(e=>{switch(e){case"mini":return"15px";case"tiny":return"18px";case"small":return"20px";case"medium":return"25px";case"large":return"28px";case"big":return"32px";case"huge":return"35px";case"massive":return"40px";default:return e}})(e.sizeBox):"25px",e=>e.disabled?"default":"pointer",e=>e.disabled?.5:1,e=>e.sizeBox?(e=>{switch(e){case"mini":return"5px";case"tiny":return"4px";case"small":return"3px";case"medium":return"1px";case"large":case"big":case"huge":case"massive":return"0px";default:return e}})(e.sizeBox):"1px",e=>e.sizeBox?Pr(e.sizeBox):"17px",e=>e.sizeBox?Pr(e.sizeBox):"17px","#D1D8DC","#E1E6EB",e=>e.sizeBox?(e=>{switch(e){case"mini":return"9px";case"tiny":return"8px";case"small":return"7px";case"medium":return"5px";case"large":case"big":case"huge":case"massive":return"4px";default:return e}})(e.sizeBox):"5px",e=>e.sizeBox?jr(e.sizeBox):"9px",e=>e.sizeBox?jr(e.sizeBox):"9px","#707070","#707070","#FFFFFF"),Tr=({label:t,labelStyle:r,sizeBox:n,...o})=>e.createElement(Nr,{onClick:()=>o.disabled?null:o.onChange?o.onChange():null,disabled:o.disabled,sizeBox:n},e.createElement("input",Object.assign({type:"radio"},o)),e.createElement("div",null,e.createElement("label",{style:r},t)));let Lr;const Vr=n.div(Lr||(Lr=(e=>e)`
    width: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    padding-bottom: ${0};

    label {
        margin-left: 15px;
        color: ${0};
    }

    /*!
 * # Semantic UI 2.4.0 - Dropdown
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

    /*******************************
            Dropdown
*******************************/

    .ui.dropdown {
        cursor: pointer;
        position: relative;
        display: inline-block;
        outline: none;
        text-align: ${0};
        color: ${0};
        -webkit-transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;
        transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;
        transition: box-shadow 0.1s ease, width 0.1s ease;
        transition: box-shadow 0.1s ease, width 0.1s ease,
            -webkit-box-shadow 0.1s ease;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    /*******************************
            Content
*******************************/

    /*--------------
      Menu
---------------*/

    .ui.dropdown .menu {
        cursor: auto;
        position: absolute;
        display: none;
        outline: none;
        top: 100%;
        min-width: -webkit-max-content;
        min-width: -moz-max-content;
        min-width: max-content;
        margin: 0em;
        padding: 0em 0em;
        background: #ffffff;
        font-size: 1em;
        text-shadow: none;
        text-align: left;
        -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
        box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
        border: 1px solid rgba(34, 36, 38, 0.15);
        border-radius: 0.28571429rem;
        -webkit-transition: opacity 0.1s ease;
        transition: opacity 0.1s ease;
        z-index: 11;
        will-change: transform, opacity;
    }
    .ui.dropdown .menu > * {
        white-space: nowrap;
    }

    /*--------------
  Hidden Input
---------------*/

    .ui.dropdown > input:not(.search):first-child,
    .ui.dropdown > select {
        display: none !important;
    }

    /*--------------
 Dropdown Icon
---------------*/

    .ui.dropdown > .dropdown.icon {
        position: relative;
        width: auto;
        font-size: 0.85714286em;
        margin: 0em 0em 0em 1em;
    }
    .ui.dropdown .menu > .item .dropdown.icon {
        width: auto;
        float: right;
        margin: 0em 0em 0em 1em;
    }
    .ui.dropdown .menu > .item .dropdown.icon + .text {
        margin-right: 1em;
    }

    /*--------------
      Text
---------------*/

    .ui.dropdown > .text {
        display: inline-block;
        -webkit-transition: none;
        transition: none;
    }

    /*--------------
    Menu Item
---------------*/

    .ui.dropdown .menu > .item {
        position: relative;
        cursor: pointer;
        display: block;
        border: none;
        height: auto;
        text-align: left;
        border-top: none;
        line-height: 1em;
        color: ${0};
        padding: 0.78571429rem 1.14285714rem !important;
        font-size: 1rem;
        text-transform: none;
        font-weight: normal;
        -webkit-box-shadow: none;
        box-shadow: none;
        -webkit-touch-callout: none;
    }
    .ui.dropdown .menu > .item:first-child {
        border-top-width: 0px;
    }

    /*--------------
  Floated Content
---------------*/

    .ui.dropdown > .text > [class*="right floated"],
    .ui.dropdown .menu .item > [class*="right floated"] {
        float: right !important;
        margin-right: 0em !important;
        margin-left: 1em !important;
    }
    .ui.dropdown > .text > [class*="left floated"],
    .ui.dropdown .menu .item > [class*="left floated"] {
        float: left !important;
        margin-left: 0em !important;
        margin-right: 1em !important;
    }
    .ui.dropdown .menu .item > .icon.floated,
    .ui.dropdown .menu .item > .flag.floated,
    .ui.dropdown .menu .item > .image.floated,
    .ui.dropdown .menu .item > img.floated {
        margin-top: 0em;
    }

    /*--------------
  Menu Divider
---------------*/

    .ui.dropdown .menu > .header {
        margin: 1rem 0rem 0.75rem;
        padding: 0em 1.14285714rem;
        color: rgba(0, 0, 0, 0.85);
        font-size: 0.78571429em;
        font-weight: bold;
        text-transform: uppercase;
    }
    .ui.dropdown .menu > .divider {
        border-top: 1px solid rgba(34, 36, 38, 0.1);
        height: 0em;
        margin: 0.5em 0em;
    }
    .ui.dropdown.dropdown .menu > .input {
        width: auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin: 1.14285714rem 0.78571429rem;
        min-width: 10rem;
    }
    .ui.dropdown .menu > .header + .input {
        margin-top: 0em;
    }
    .ui.dropdown .menu > .input:not(.transparent) input {
        padding: 0.5em 1em;
    }
    .ui.dropdown .menu > .input:not(.transparent) .button,
    .ui.dropdown .menu > .input:not(.transparent) .icon,
    .ui.dropdown .menu > .input:not(.transparent) .label {
        padding-top: 0.5em;
        padding-bottom: 0.5em;
    }

    /*-----------------
  Item Description
-------------------*/

    .ui.dropdown > .text > .description,
    .ui.dropdown .menu > .item > .description {
        float: right;
        margin: 0em 0em 0em 1em;
        color: rgba(0, 0, 0, 0.4);
    }

    /*-----------------
       Message
-------------------*/

    .ui.dropdown .menu > .message {
        padding: 0.78571429rem 1.14285714rem;
        font-weight: normal;
    }
    .ui.dropdown .menu > .message:not(.ui) {
        color: rgba(0, 0, 0, 0.4);
    }

    /*--------------
    Sub Menu
---------------*/

    .ui.dropdown .menu .menu {
        top: 0% !important;
        left: 100%;
        right: auto;
        margin: 0em 0em 0em -0.5em !important;
        border-radius: 0.28571429rem !important;
        z-index: 21 !important;
    }

    /* Hide Arrow */
    .ui.dropdown .menu .menu:after {
        display: none;
    }

    /*--------------
   Sub Elements
---------------*/

    /* Icons / Flags / Labels / Image */
    .ui.dropdown > .text > .icon,
    .ui.dropdown > .text > .label,
    .ui.dropdown > .text > .flag,
    .ui.dropdown > .text > img,
    .ui.dropdown > .text > .image {
        margin-top: 0em;
    }
    .ui.dropdown .menu > .item > .icon,
    .ui.dropdown .menu > .item > .label,
    .ui.dropdown .menu > .item > .flag,
    .ui.dropdown .menu > .item > .image,
    .ui.dropdown .menu > .item > img {
        margin-top: 0em;
    }
    .ui.dropdown > .text > .icon,
    .ui.dropdown > .text > .label,
    .ui.dropdown > .text > .flag,
    .ui.dropdown > .text > img,
    .ui.dropdown > .text > .image,
    .ui.dropdown .menu > .item > .icon,
    .ui.dropdown .menu > .item > .label,
    .ui.dropdown .menu > .item > .flag,
    .ui.dropdown .menu > .item > .image,
    .ui.dropdown .menu > .item > img {
        margin-left: 0em;
        float: none;
        margin-right: 0.78571429rem;
    }

    /*--------------
     Image
---------------*/

    .ui.dropdown > .text > img,
    .ui.dropdown > .text > .image,
    .ui.dropdown .menu > .item > .image,
    .ui.dropdown .menu > .item > img {
        display: inline-block;
        vertical-align: top;
        width: auto;
        margin-top: -0.5em;
        margin-bottom: -0.5em;
        max-height: 2em;
    }

    /*******************************
            Coupling
*******************************/

    /*--------------
      Menu
---------------*/

    /* Remove Menu Item Divider */
    .ui.dropdown .ui.menu > .item:before,
    .ui.menu .ui.dropdown .menu > .item:before {
        display: none;
    }

    /* Prevent Menu Item Border */
    .ui.menu .ui.dropdown .menu .active.item {
        border-left: none;
    }

    /* Automatically float dropdown menu right on last menu item */
    .ui.menu .right.menu .dropdown:last-child .menu,
    .ui.menu .right.dropdown.item .menu,
    .ui.buttons > .ui.dropdown:last-child .menu {
        left: auto;
        right: 0em;
    }

    /*--------------
      Label
---------------*/

    /* Dropdown Menu */
    .ui.label.dropdown .menu {
        min-width: 100%;
    }

    /*--------------
     Button
---------------*/

    /* No Margin On Icon Button */
    .ui.dropdown.icon.button > .dropdown.icon {
        margin: 0em;
    }
    .ui.button.dropdown .menu {
        min-width: 100%;
    }

    /*******************************
              Types
*******************************/

    /*--------------
    Selection
---------------*/

    /* Displays like a select box */
    .ui.selection.dropdown {
        cursor: pointer;
        word-wrap: break-word;
        line-height: 1em;
        white-space: normal;
        outline: 0;
        -webkit-transform: rotateZ(0deg);
        transform: rotateZ(0deg);
        min-width: 14em;
        min-height: 2.71428571em;
        background: ${0};
        display: inline-block;
        padding: 0.78571429em 2.6em 0.78571429em 1.1em;
        color: ${0};
        -webkit-box-shadow: none;
        box-shadow: none;
        border: 1px solid
            ${0};
        border-radius: 0.28571429rem;
        -webkit-transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;
        transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;
        transition: box-shadow 0.1s ease, width 0.1s ease;
        transition: box-shadow 0.1s ease, width 0.1s ease,
            -webkit-box-shadow 0.1s ease;
        border-radius: 20px;
    }
    .ui.selection.dropdown.visible,
    .ui.selection.dropdown.active {
        z-index: 10;
    }
    select.ui.dropdown {
        height: 38px;
        padding: 0.5em;
        border: 1px solid rgba(34, 36, 38, 0.15);
        visibility: visible;
    }
    .ui.selection.dropdown > .search.icon,
    .ui.selection.dropdown > .delete.icon,
    .ui.selection.dropdown > .dropdown.icon {
        cursor: pointer;
        position: absolute;
        width: auto;
        height: auto;
        line-height: 1.21428571em;
        top: 0.78571429em;
        right: 1em;
        z-index: 3;
        margin: -0.78571429em;
        padding: 0.91666667em;
        opacity: 0.8;
        -webkit-transition: opacity 0.1s ease;
        transition: opacity 0.1s ease;
    }

    /* Compact */
    .ui.compact.selection.dropdown {
        min-width: 0px;
    }

    /*  Selection Menu */
    .ui.selection.dropdown .menu {
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-overflow-scrolling: touch;
        border-top-width: 0px !important;
        width: auto;
        outline: none;
        margin: 0px -1px;
        min-width: calc(100% + 2px);
        width: calc(100% + 2px);
        border-radius: 0em 0em 0.28571429rem 0.28571429rem;
        -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
        box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
        -webkit-transition: opacity 0.1s ease;
        transition: opacity 0.1s ease;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
    .ui.selection.dropdown .menu:after,
    .ui.selection.dropdown .menu:before {
        display: none;
    }

    /*--------------
    Message
---------------*/

    .ui.selection.dropdown .menu > .message {
        padding: 0.78571429rem 1.14285714rem;
    }
    @media only screen and (max-width: 767px) {
        .ui.selection.dropdown .menu {
            max-height: 8.01428571rem;
        }
    }
    @media only screen and (min-width: 768px) {
        .ui.selection.dropdown .menu {
            max-height: 10.68571429rem;
        }
    }
    @media only screen and (min-width: 992px) {
        .ui.selection.dropdown .menu {
            max-height: 16.02857143rem;
        }
    }
    @media only screen and (min-width: 1920px) {
        .ui.selection.dropdown .menu {
            max-height: 21.37142857rem;
        }
    }

    /* Menu Item */
    .ui.selection.dropdown .menu > .item {
        border-top: 1px solid #fafafa;
        padding: 0.78571429rem 1.04285714rem !important;
        white-space: normal;
        word-wrap: normal;
    }

    /* User Item */
    .ui.selection.dropdown .menu > .hidden.addition.item {
        display: none;
    }

    /* Hover */
    .ui.selection.dropdown:hover {
        border-color: ${0};
        -webkit-box-shadow: none;
        box-shadow: none;
    }

    /* Active */
    .ui.selection.active.dropdown {
        border-color: ${0};
        -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
        box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
    }
    .ui.selection.active.dropdown .menu {
        border-color: ${0};
        -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
        box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
    }

    /* Focus */
    .ui.selection.dropdown:focus {
        border-color: ${0};
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    .ui.selection.dropdown:focus .menu {
        border-color: ${0};
        -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
        box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
    }

    /* Visible */
    .ui.selection.visible.dropdown > .text:not(.default) {
        font-weight: normal;
        color: ${0};
    }

    /* Visible Hover */
    .ui.selection.active.dropdown:hover {
        border-color: ${0};
        -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
        box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
    }
    .ui.selection.active.dropdown:hover .menu {
        border-color: ${0};
        -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
        box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
    }

    /* Dropdown Icon */
    .ui.active.selection.dropdown > .dropdown.icon,
    .ui.visible.selection.dropdown > .dropdown.icon {
        opacity: "";
        z-index: 3;
    }

    /* Connecting Border */
    .ui.active.selection.dropdown {
        border-bottom-left-radius: 0em !important;
        border-bottom-right-radius: 0em !important;
    }

    /* Empty Connecting Border */
    .ui.active.empty.selection.dropdown {
        border-radius: 0.28571429rem !important;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
    }
    .ui.active.empty.selection.dropdown .menu {
        border: none !important;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
    }

    /*--------------
   Searchable
---------------*/

    /* Search Selection */
    .ui.search.dropdown {
        min-width: "";
    }

    /* Search Dropdown */
    .ui.search.dropdown > input.search {
        background: none transparent !important;
        border: none !important;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
        cursor: text;
        top: 0em;
        left: 1px;
        width: 100%;
        outline: none;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        padding: inherit;
        color: ${0};
        text-align: ${0};
    }

    /* Text Layering */
    .ui.search.dropdown > input.search {
        position: absolute;
        z-index: 2;
    }
    .ui.search.dropdown > .text {
        cursor: text;
        position: relative;
        left: 1px;
        z-index: 3;
    }

    /* Search Selection */
    .ui.search.selection.dropdown > input.search {
        line-height: 1.21428571em;
        padding: 0.67857143em 2.1em 0.67857143em 1em;
    }

    /* Used to size multi select input to character width */
    .ui.search.selection.dropdown > span.sizer {
        line-height: 1.21428571em;
        padding: 0.67857143em 2.1em 0.67857143em 1em;
        display: none;
        white-space: pre;
    }

    /* Active/Visible Search */
    .ui.search.dropdown.active > input.search,
    .ui.search.dropdown.visible > input.search {
        cursor: auto;
        color: ${0};
    }
    .ui.search.dropdown.active > .text,
    .ui.search.dropdown.visible > .text {
        pointer-events: none;
    }

    /* Filtered Text */
    .ui.active.search.dropdown input.search:focus + .text .icon,
    .ui.active.search.dropdown input.search:focus + .text .flag {
        opacity: 0.45;
    }
    .ui.active.search.dropdown input.search:focus + .text {
        color: rgba(115, 115, 115, 0.87) !important;
    }

    .input.search::placeholder {
        color: ${0};
    }
    /* Search Menu */
    .ui.search.dropdown .menu {
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-overflow-scrolling: touch;
    }
    @media only screen and (max-width: 767px) {
        .ui.search.dropdown .menu {
            max-height: 8.01428571rem;
        }
    }
    @media only screen and (min-width: 768px) {
        .ui.search.dropdown .menu {
            max-height: 10.68571429rem;
        }
    }
    @media only screen and (min-width: 992px) {
        .ui.search.dropdown .menu {
            max-height: 16.02857143rem;
        }
    }
    @media only screen and (min-width: 1920px) {
        .ui.search.dropdown .menu {
            max-height: 21.37142857rem;
        }
    }

    /*--------------
    Multiple
---------------*/

    /* Multiple Selection */
    .ui.multiple.dropdown {
        padding: 0.22619048em 2.1em 0.22619048em 0.35714286em;
    }
    .ui.multiple.dropdown .menu {
        cursor: auto;
    }

    /* Multiple Search Selection */
    .ui.multiple.search.dropdown,
    .ui.multiple.search.dropdown > input.search {
        cursor: text;
    }

    /* Selection Label */
    .ui.multiple.dropdown > .label {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display: inline-block;
        vertical-align: top;
        white-space: normal;
        font-size: 1em;
        padding: 0.35714286em 0.78571429em;
        margin: 0.14285714rem 0.28571429rem 0.14285714rem 0.5em;
        -webkit-box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.15) inset;
        box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.15) inset;
        border-radius: 20px;
        color: ${0};
        background-color: ${0};
    }

    /* Dropdown Icon */
    .ui.multiple.dropdown .dropdown.icon {
        margin: "";
        padding: "";
    }

    /* Text */
    .ui.multiple.dropdown > .text {
        position: static;
        padding: 0;
        max-width: 100%;
        margin: 0.45238095em 0em 0.45238095em 0.64285714em;
        line-height: 1.21428571em;
    }
    .ui.multiple.dropdown > .label ~ input.search {
        margin-left: 0.14285714em !important;
    }
    .ui.multiple.dropdown > .label ~ .text {
        display: none;
    }

    /*-----------------
  Multiple Search
-----------------*/

    /* Prompt Text */
    .ui.multiple.search.dropdown > .text {
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        padding: inherit;
        margin: 0.45238095em 0em 0.45238095em 0.64285714em;
        line-height: 1.21428571em;
    }
    .ui.multiple.search.dropdown > .label ~ .text {
        display: none;
    }

    /* Search */
    .ui.multiple.search.dropdown > input.search {
        position: static;
        padding: 0;
        max-width: 100%;
        margin: 0.45238095em 0em 0.45238095em 0.64285714em;
        width: 2.2em;
        line-height: 1.21428571em;
    }

    /*--------------
     Inline
---------------*/

    .ui.inline.dropdown {
        cursor: pointer;
        display: inline-block;
        color: inherit;
    }
    .ui.inline.dropdown .dropdown.icon {
        margin: 0em 0.21428571em 0em 0.21428571em;
        vertical-align: baseline;
    }
    .ui.inline.dropdown > .text {
        font-weight: bold;
    }
    .ui.inline.dropdown .menu {
        cursor: auto;
        margin-top: 0.21428571em;
        border-radius: 0.28571429rem;
    }

    /*******************************
            States
*******************************/

    /*--------------------
        Active
----------------------*/

    /* Menu Item Active */
    .ui.dropdown .menu .active.item {
        background: transparent;
        font-weight: bold;
        color: ${0};
        -webkit-box-shadow: none;
        box-shadow: none;
        z-index: 12;
    }

    /*--------------------
        Hover
----------------------*/

    /* Menu Item Hover */
    .ui.dropdown .menu > .item:hover {
        background: rgba(0, 0, 0, 0.05);
        color: ${0};
        z-index: 13;
    }

    /*--------------------
       Loading
---------------------*/

    .ui.loading.dropdown > i.icon {
        height: 1em !important;
    }
    .ui.loading.selection.dropdown > i.icon {
        padding: 1.5em 1.28571429em !important;
    }
    .ui.loading.dropdown > i.icon:before {
        position: absolute;
        content: "";
        top: 50%;
        left: 50%;
        margin: -0.64285714em 0em 0em -0.64285714em;
        width: 1.28571429em;
        height: 1.28571429em;
        border-radius: 500rem;
        border: 0.2em solid rgba(0, 0, 0, 0.1);
    }
    .ui.loading.dropdown > i.icon:after {
        position: absolute;
        content: "";
        top: 50%;
        left: 50%;
        -webkit-box-shadow: 0px 0px 0px 1px transparent;
        box-shadow: 0px 0px 0px 1px transparent;
        margin: -0.64285714em 0em 0em -0.64285714em;
        width: 1.28571429em;
        height: 1.28571429em;
        -webkit-animation: dropdown-spin 0.6s linear;
        animation: dropdown-spin 0.6s linear;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        border-radius: 500rem;
        border-color: ${0} transparent transparent;
        border-style: solid;
        border-width: 0.2em;
    }

    /* Coupling */
    .ui.loading.dropdown.button > i.icon:before,
    .ui.loading.dropdown.button > i.icon:after {
        display: none;
    }
    @-webkit-keyframes dropdown-spin {
        from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes dropdown-spin {
        from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    /*--------------------
     Default Text
----------------------*/

    .ui.dropdown:not(.button) > .default.text,
    .ui.default.dropdown:not(.button) > .text {
        color: ${0};
    }
    .ui.dropdown:not(.button) > input:focus ~ .default.text,
    .ui.default.dropdown:not(.button) > input:focus ~ .text {
        color: ${0};
    }

    /*--------------------
        Loading
----------------------*/

    .ui.loading.dropdown > .text {
        -webkit-transition: none;
        transition: none;
    }

    /* Used To Check Position */
    .ui.dropdown .loading.menu {
        display: block;
        visibility: hidden;
        z-index: -1;
    }
    .ui.dropdown > .loading.menu {
        left: 0px !important;
        right: auto !important;
    }
    .ui.dropdown > .menu .loading.menu {
        left: 100% !important;
        right: auto !important;
    }

    /*--------------------
    Keyboard Select
----------------------*/

    /* Selected Item */
    .ui.dropdown.selected,
    .ui.dropdown .menu .selected.item {
        background: rgba(0, 0, 0, 0.03);
        color: ${0};
    }

    /*--------------------
    Search Filtered
----------------------*/

    /* Filtered Item */
    .ui.dropdown > .filtered.text {
        visibility: hidden;
    }
    .ui.dropdown .filtered.item {
        display: none !important;
    }

    /*--------------------
        Error
----------------------*/

    .ui.dropdown.error,
    .ui.dropdown.error > .text,
    .ui.dropdown.error > .default.text {
        color: #9f3a38;
    }
    .ui.selection.dropdown.error {
        background: ${0};
        border-color: ${0};
    }
    .ui.selection.dropdown.error:hover {
        border-color: ${0};
    }
    .ui.dropdown.error > .menu,
    .ui.dropdown.error > .menu .menu {
        border-color: ${0};
    }
    .ui.dropdown.error > .menu > .item {
        color: ${0};
    }
    .ui.multiple.selection.error.dropdown > .label {
        border-color: ${0};
    }

    /* Item Hover */
    .ui.dropdown.error > .menu > .item:hover {
        background-color: ${0};
    }

    /* Item Active */
    .ui.dropdown.error > .menu .active.item {
        background-color: ${0};
    }

    /*--------------------
        Clear
----------------------*/

    .ui.dropdown > .clear.dropdown.icon {
        opacity: 0.8;
        -webkit-transition: opacity 0.1s ease;
        transition: opacity 0.1s ease;
    }
    .ui.dropdown > .clear.dropdown.icon:hover {
        opacity: 1;
    }

    /*--------------------
        Disabled
----------------------*/

    /* Disabled */
    .ui.disabled.dropdown,
    .ui.dropdown .menu > .disabled.item {
        cursor: default;
        pointer-events: none;
        opacity: 0.45;
    }

    /*******************************
           Variations
*******************************/

    /*--------------
    Direction
---------------*/

    /* Flyout Direction */
    .ui.dropdown .menu {
        left: 0px;
    }

    /* Default Side (Right) */
    .ui.dropdown .right.menu > .menu,
    .ui.dropdown .menu .right.menu {
        left: 100% !important;
        right: auto !important;
        border-radius: 0.28571429rem !important;
    }

    /* Leftward Opening Menu */
    .ui.dropdown > .left.menu {
        left: auto !important;
        right: 0px !important;
    }
    .ui.dropdown > .left.menu .menu,
    .ui.dropdown .menu .left.menu {
        left: auto;
        right: 100%;
        margin: 0em -0.5em 0em 0em !important;
        border-radius: 0.28571429rem !important;
    }
    .ui.dropdown .item .left.dropdown.icon,
    .ui.dropdown .left.menu .item .dropdown.icon {
        width: auto;
        float: left;
        margin: 0em 0em 0em 0em;
    }
    .ui.dropdown .item .left.dropdown.icon,
    .ui.dropdown .left.menu .item .dropdown.icon {
        width: auto;
        float: left;
        margin: 0em 0em 0em 0em;
    }
    .ui.dropdown .item .left.dropdown.icon + .text,
    .ui.dropdown .left.menu .item .dropdown.icon + .text {
        margin-left: 1em;
        margin-right: 0em;
    }

    /*--------------
     Upward
---------------*/

    /* Upward Main Menu */
    .ui.upward.dropdown > .menu {
        top: auto;
        bottom: 100%;
        -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08);
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08);
        border-radius: 0.28571429rem 0.28571429rem 0em 0em;
    }

    /* Upward Sub Menu */
    .ui.dropdown .upward.menu {
        top: auto !important;
        bottom: 0 !important;
    }

    /* Active Upward */
    .ui.simple.upward.active.dropdown,
    .ui.simple.upward.dropdown:hover {
        border-radius: 0.28571429rem 0.28571429rem 0em 0em !important;
    }
    .ui.upward.dropdown.button:not(.pointing):not(.floating).active {
        border-radius: 0.28571429rem 0.28571429rem 0em 0em;
    }

    /* Selection */
    .ui.upward.selection.dropdown .menu {
        border-top-width: 1px !important;
        border-bottom-width: 0px !important;
        -webkit-box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.08);
        box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.08);
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }
    .ui.upward.selection.dropdown:hover {
        -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.05);
        box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.05);
    }

    /* Active Upward */
    .ui.active.upward.selection.dropdown {
        border-radius: 0em 0em 20px 20px !important;
    }

    /* Visible Upward */
    .ui.upward.selection.dropdown.visible {
        -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08);
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08);
        border-radius: 0em 0em 20px 20px !important;
    }

    /* Visible Hover Upward */
    .ui.upward.active.selection.dropdown:hover {
        -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);
    }
    .ui.upward.active.selection.dropdown:hover .menu {
        -webkit-box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.08);
        box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.08);
    }

    /*--------------
     Simple
---------------*/

    /*  Selection Menu */
    .ui.scrolling.dropdown .menu,
    .ui.dropdown .scrolling.menu {
        overflow-x: hidden;
        overflow-y: auto;
    }
    .ui.scrolling.dropdown .menu {
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-overflow-scrolling: touch;
        min-width: 100% !important;
        width: auto !important;
    }
    .ui.dropdown .scrolling.menu {
        position: static;
        overflow-y: auto;
        border: none;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
        border-radius: 0 !important;
        margin: 0 !important;
        min-width: 100% !important;
        width: auto !important;
        border-top: 1px solid rgba(34, 36, 38, 0.15);
    }
    .ui.scrolling.dropdown .menu .item.item.item,
    .ui.dropdown .scrolling.menu > .item.item.item {
        border-top: none;
    }
    .ui.scrolling.dropdown .menu .item:first-child,
    .ui.dropdown .scrolling.menu .item:first-child {
        border-top: none;
    }
    .ui.dropdown > .animating.menu .scrolling.menu,
    .ui.dropdown > .visible.menu .scrolling.menu {
        display: block;
    }

    /* Scrollbar in IE */
    @media all and (-ms-high-contrast: none) {
        .ui.scrolling.dropdown .menu,
        .ui.dropdown .scrolling.menu {
            min-width: calc(100% - 17px);
        }
    }
    @media only screen and (max-width: 767px) {
        .ui.scrolling.dropdown .menu,
        .ui.dropdown .scrolling.menu {
            max-height: 10.28571429rem;
        }
    }
    @media only screen and (min-width: 768px) {
        .ui.scrolling.dropdown .menu,
        .ui.dropdown .scrolling.menu {
            max-height: 15.42857143rem;
        }
    }
    @media only screen and (min-width: 992px) {
        .ui.scrolling.dropdown .menu,
        .ui.dropdown .scrolling.menu {
            max-height: 20.57142857rem;
        }
    }
    @media only screen and (min-width: 1920px) {
        .ui.scrolling.dropdown .menu,
        .ui.dropdown .scrolling.menu {
            max-height: 20.57142857rem;
        }
    }

    /*--------------
     Simple
---------------*/

    /* Displays without javascript */
    .ui.simple.dropdown .menu:before,
    .ui.simple.dropdown .menu:after {
        display: none;
    }
    .ui.simple.dropdown .menu {
        position: absolute;
        display: block;
        overflow: hidden;
        top: -9999px !important;
        opacity: 0;
        width: 0;
        height: 0;
        -webkit-transition: opacity 0.1s ease;
        transition: opacity 0.1s ease;
    }
    .ui.simple.active.dropdown,
    .ui.simple.dropdown:hover {
        border-bottom-left-radius: 0em !important;
        border-bottom-right-radius: 0em !important;
    }
    .ui.simple.active.dropdown > .menu,
    .ui.simple.dropdown:hover > .menu {
        overflow: visible;
        width: auto;
        height: auto;
        top: 100% !important;
        opacity: 1;
    }
    .ui.simple.dropdown > .menu > .item:active > .menu,
    .ui.simple.dropdown:hover > .menu > .item:hover > .menu {
        overflow: visible;
        width: auto;
        height: auto;
        top: 0% !important;
        left: 100% !important;
        opacity: 1;
    }
    .ui.simple.disabled.dropdown:hover .menu {
        display: none;
        height: 0px;
        width: 0px;
        overflow: hidden;
    }

    /* Visible */
    .ui.simple.visible.dropdown > .menu {
        display: block;
    }

    /*--------------
      Fluid
---------------*/

    .ui.fluid.dropdown {
        display: block;
        width: 100%;
        min-width: 0em;
    }
    .ui.fluid.dropdown > .dropdown.icon {
        float: right;
    }

    /*--------------
    Floating
---------------*/

    .ui.floating.dropdown .menu {
        left: 0;
        right: auto;
        -webkit-box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12),
            0px 2px 10px 0px rgba(34, 36, 38, 0.15) !important;
        box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12),
            0px 2px 10px 0px rgba(34, 36, 38, 0.15) !important;
        border-radius: 0.28571429rem !important;
    }
    .ui.floating.dropdown > .menu {
        margin-top: 0.5em !important;
        border-radius: 0.28571429rem !important;
    }

    /*--------------
     Pointing
---------------*/

    .ui.pointing.dropdown > .menu {
        top: 100%;
        margin-top: 0.78571429rem;
        border-radius: 0.28571429rem;
    }
    .ui.pointing.dropdown > .menu:after {
        display: block;
        position: absolute;
        pointer-events: none;
        content: "";
        visibility: visible;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        width: 0.5em;
        height: 0.5em;
        -webkit-box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);
        box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);
        background: #ffffff;
        z-index: 2;
    }
    .ui.pointing.dropdown > .menu:after {
        top: -0.25em;
        left: 50%;
        margin: 0em 0em 0em -0.25em;
    }

    /* Top Left Pointing */
    .ui.top.left.pointing.dropdown > .menu {
        top: 100%;
        bottom: auto;
        left: 0%;
        right: auto;
        margin: 1em 0em 0em;
    }
    .ui.top.left.pointing.dropdown > .menu {
        top: 100%;
        bottom: auto;
        left: 0%;
        right: auto;
        margin: 1em 0em 0em;
    }
    .ui.top.left.pointing.dropdown > .menu:after {
        top: -0.25em;
        left: 1em;
        right: auto;
        margin: 0em;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    /* Top Right Pointing */
    .ui.top.right.pointing.dropdown > .menu {
        top: 100%;
        bottom: auto;
        right: 0%;
        left: auto;
        margin: 1em 0em 0em;
    }
    .ui.top.pointing.dropdown > .left.menu:after,
    .ui.top.right.pointing.dropdown > .menu:after {
        top: -0.25em;
        left: auto !important;
        right: 1em !important;
        margin: 0em;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    /* Left Pointing */
    .ui.left.pointing.dropdown > .menu {
        top: 0%;
        left: 100%;
        right: auto;
        margin: 0em 0em 0em 1em;
    }
    .ui.left.pointing.dropdown > .menu:after {
        top: 1em;
        left: -0.25em;
        margin: 0em 0em 0em 0em;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
    .ui.left:not(.top):not(.bottom).pointing.dropdown > .left.menu {
        left: auto !important;
        right: 100% !important;
        margin: 0em 1em 0em 0em;
    }
    .ui.left:not(.top):not(.bottom).pointing.dropdown > .left.menu:after {
        top: 1em;
        left: auto;
        right: -0.25em;
        margin: 0em 0em 0em 0em;
        -webkit-transform: rotate(135deg);
        transform: rotate(135deg);
    }

    /* Right Pointing */
    .ui.right.pointing.dropdown > .menu {
        top: 0%;
        left: auto;
        right: 100%;
        margin: 0em 1em 0em 0em;
    }
    .ui.right.pointing.dropdown > .menu:after {
        top: 1em;
        left: auto;
        right: -0.25em;
        margin: 0em 0em 0em 0em;
        -webkit-transform: rotate(135deg);
        transform: rotate(135deg);
    }

    /* Bottom Pointing */
    .ui.bottom.pointing.dropdown > .menu {
        top: auto;
        bottom: 100%;
        left: 0%;
        right: auto;
        margin: 0em 0em 1em;
    }
    .ui.bottom.pointing.dropdown > .menu:after {
        top: auto;
        bottom: -0.25em;
        right: auto;
        margin: 0em;
        -webkit-transform: rotate(-135deg);
        transform: rotate(-135deg);
    }

    /* Reverse Sub-Menu Direction */
    .ui.bottom.pointing.dropdown > .menu .menu {
        top: auto !important;
        bottom: 0px !important;
    }

    /* Bottom Left */
    .ui.bottom.left.pointing.dropdown > .menu {
        left: 0%;
        right: auto;
    }
    .ui.bottom.left.pointing.dropdown > .menu:after {
        left: 1em;
        right: auto;
    }

    /* Bottom Right */
    .ui.bottom.right.pointing.dropdown > .menu {
        right: 0%;
        left: auto;
    }
    .ui.bottom.right.pointing.dropdown > .menu:after {
        left: auto;
        right: 1em;
    }

    /* Upward pointing */
    .ui.pointing.upward.dropdown .menu,
    .ui.top.pointing.upward.dropdown .menu {
        top: auto !important;
        bottom: 100% !important;
        margin: 0em 0em 0.78571429rem;
        border-radius: 0.28571429rem;
    }
    .ui.pointing.upward.dropdown .menu:after,
    .ui.top.pointing.upward.dropdown .menu:after {
        top: 100% !important;
        bottom: auto !important;
        -webkit-box-shadow: 1px 1px 0px 0px rgba(34, 36, 38, 0.15);
        box-shadow: 1px 1px 0px 0px rgba(34, 36, 38, 0.15);
        margin: -0.25em 0em 0em;
    }

    /* Right Pointing Upward */
    .ui.right.pointing.upward.dropdown:not(.top):not(.bottom) .menu {
        top: auto !important;
        bottom: 0 !important;
        margin: 0em 1em 0em 0em;
    }
    .ui.right.pointing.upward.dropdown:not(.top):not(.bottom) .menu:after {
        top: auto !important;
        bottom: 0 !important;
        margin: 0em 0em 1em 0em;
        -webkit-box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);
        box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);
    }

    /* Left Pointing Upward */
    .ui.left.pointing.upward.dropdown:not(.top):not(.bottom) .menu {
        top: auto !important;
        bottom: 0 !important;
        margin: 0em 0em 0em 1em;
    }
    .ui.left.pointing.upward.dropdown:not(.top):not(.bottom) .menu:after {
        top: auto !important;
        bottom: 0 !important;
        margin: 0em 0em 1em 0em;
        -webkit-box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);
        box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);
    }

    /*******************************
         Theme Overrides
*******************************/

    /* Dropdown Carets */
    .ui.dropdown > .dropdown.icon {
        font-family: "Dropdown";
        line-height: 1;
        height: 1em;
        width: 1.23em;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        font-weight: normal;
        font-style: normal;
        text-align: center;
    }
    .ui.dropdown > .dropdown.icon {
        width: auto;
    }
    .ui.dropdown > .dropdown.icon:before {
        content: "\f0d7";
    }

    /* Sub Menu */
    .ui.dropdown .menu .item .dropdown.icon:before {
        content: "\f0da" /*rtl:'\f0d9'*/;
    }
    .ui.dropdown .item .left.dropdown.icon:before,
    .ui.dropdown .left.menu .item .dropdown.icon:before {
        content: "\f0d9" /*rtl:"\f0da"*/;
    }

    /* Vertical Menu Dropdown */
    .ui.vertical.menu .dropdown.item > .dropdown.icon:before {
        content: "\f0da" /*rtl:"\f0d9"*/;
    }
    .ui.dropdown > .clear.icon:before {
        content: "\f00d";
    }

    .ui.selection.active.dropdown .menu::-webkit-scrollbar {
        width: 7px;
        border-radius: 50px;
        z-index: -1px;
    }

    .ui.selection.active.dropdown .menu::-webkit-scrollbar-thumb {
        background-color: ${0};
        border-radius: 50px;
    }

    .ui.selection.active.dropdown .menu::-webkit-scrollbar-thumb:hover {
        background-color: ${0};
    }
    /* Icons for Reference (Subsetted in 2.4.0)
  .dropdown.down:before { content: "\f0d7"; }
  .dropdown.up:before { content: "\f0d8"; }
  .dropdown.left:before { content: "\f0d9"; }
  .dropdown.right:before { content: "\f0da"; }
  .dropdown.close:before { content: "\f00d"; }
*/

    /*******************************
        User Overrides
*******************************/

    small {
        margin-left: 15px;
        font-size: 10px;
        color: ${0};
    }
`),e=>e.error?"":"20px",e=>e.error?"#E0457B":e.colorLabel?e.colorLabel:"#9B4DEE",e=>e.textAlign&&"center"===e.textAlign?"center":"left","#707070",e=>e.brand?"#9B4DEE":"#707070",e=>e.brand?"#D8B8F9":"#FFFFFF",e=>e.brand?"#9B4DEE":"#707070",e=>e.brand?"#D8B8F9":"rgba(34, 36, 38, 0.15)",e=>e.brand?"#D8B8F9":"#ACACAC",e=>e.brand?"rgba(155, 77, 238, 0.2)":"#ACACAC",e=>e.error?"#E0457B":e.brand?"#D8B8F9":"#ACACAC",e=>e.error?"#E0457B":e.brand?"#D8B8F9":"#ACACAC",e=>e.error?"#E0457B":e.brand?"#D8B8F9":"#ACACAC",e=>e.brand?"#68349F":"#000000",e=>e.error?"#E0457B":e.brand?"#D8B8F9":"#ACACAC",e=>e.error?"#E0457B":e.brand?"#D8B8F9":"#ACACAC",e=>e.brand?"#9B4DEE":"#707070",e=>e.textAlign&&"center"===e.textAlign?"center":"left",e=>e.brand?"#68349F":"#000000",e=>e.brand?"rgba(155, 77, 238, 0.2)":"#ACACAC",e=>e.brand?"#D8B8F9":"#707070",e=>e.brand?"#9B4DEE":"#eeeeee",e=>e.brand?"#68349F":"#000000",e=>e.brand?"#68349F":"#000000","#9B4DEE",e=>e.brand?"rgba(155, 77, 238, 0.2)":"#E1E6EB",e=>e.brand?"rgba(155, 77, 238, 0.2)":"#E1E6EB",e=>e.brand?"#68349F":"#000000","#e0457b25","#E0457B","#E0457B","#E0457B","#E0457B","#E0457B","#e0457b25","#e0457b25","#9B4DEE","rgba(155, 77, 238, 0.9)","#E0457B"),qr=({options:t,brand:r,textAlign:n,errorMessage:o,label:a,colorLabel:c,...p})=>e.createElement(Vr,{brand:r,textAlign:n,error:o,colorLabel:c},a&&e.createElement("label",null,a),e.createElement(i,Object.assign({},p,{selection:!0,noResultsMessage:"Nenhum resultado encontrado",error:!!o,options:t})),o&&e.createElement("small",null,o)),Rr=({value:n,clearError:o,errors:i,name:a,register:c,required:p,setValue:l,validate:s,...d})=>{const[u,m]=t(),[f,h]=t("");return r(()=>{l(a,u||n)},[u]),r(()=>{m(n)},[n]),r(()=>{c&&c({name:a},{required:p,validate:s&&p?e=>s(e)?(h(s(e)),!1):(h(""),!0):null})},[c]),e.createElement(qr,Object.assign({},d,{value:u,onChange:(e,t)=>{m(t.value),l(a,n),i&&o&&o(a)},errorMessage:i?"required"===i.type?"Obrigatório":""+f:""}))};let Ur,Wr,Hr,Xr,Yr=e=>e;const Zr=n.div(Ur||(Ur=Yr`
    display: flex;
    width: ${0};
    justify-content: space-between;
    background-color: ${0};
    border: 1px solid ${0};
    padding: 15px 20px;
    align-items: center;
    cursor: pointer;
    box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.16);

    .icon-title {
        display: flex;
        align-items: center;
    }

    .title-subtitle {
        display: flex;
        flex-direction: column;
        flex: 1;
        margin-left: ${0};

        .title {
            font-size: ${0};
            color: ${0};
        }

        .subtitle {
            color: ${0};
            font-size: 12px;
        }
    }

    .value-icon {
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: flex-end;

        .value {
            margin-right: 20px;
            color: ${0};
        }
    }

    ${0}
`),e=>e.width?e.width+"%":"100%",e=>e.secundary?"#eeeeee":"#FFFFFF","#eeeeee",e=>e.icon?"15px":"0",e=>e.fontSizeTitle?e.fontSizeTitle+"px":e.subtitle?"14px":"16px",e=>e.colorTitle?e.colorTitle:"#707070",e=>e.colorSubtitle?e.colorSubtitle:"#ACACAC",e=>e.colorValue?e.colorValue:"#707070",e=>o(e.open?Wr||(Wr=Yr`
                  border-top-left-radius: 20px;
                  border-top-right-radius: 20px;
              `):Hr||(Hr=Yr`
                  border-radius: 30px;
              `))),Jr=n.div(Xr||(Xr=Yr`
    width: ${0};
    padding: 20px;
    border: 1px solid ${0};
    border-top: 0;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    display: ${0};
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.16);
`),e=>e.width?e.width+"%":"100%","#eeeeee",e=>e.open?"block":"none"),Kr=({title:t,colorTitle:r,subtitle:n,colorSubtitle:o,value:i,colorValue:a,children:c,secundary:p,open:l,onChange:s,width:d,icon:u,colorIcon:m,fontSizeTitle:f})=>e.createElement(e.Fragment,null,e.createElement(Zr,{colorTitle:r,colorSubtitle:o,colorValue:a,secundary:p,subtitle:n,open:l,onClick:()=>s(),width:d,icon:!!u,fontSizeTitle:f},e.createElement("div",{className:"icon-title"},u&&e.createElement(Qe,{icon:u,size:"lg",color:m||"#9B4DEE"}),e.createElement("div",{className:"title-subtitle"},e.createElement("span",{className:"title"},t),n&&e.createElement("span",{className:"subtitle"},n))),e.createElement("div",{className:"value-icon"},e.createElement("span",{className:"value"},i),e.createElement(Qe,p?{icon:l?mr:dr,size:"lg"}:{icon:l?mr:dr,size:"2x",color:"#9B4DEE"}))),e.createElement(Jr,{open:l,width:d},c));let Gr,Qr,en,tn=e=>e;const rn=e=>{switch(e){case"mini":return 30;case"tiny":return 35;case"small":return 40;case"medium":return 50;case"large":return 60;case"big":return 70;case"huge":return 80;case"massive":return 90;default:return 50}},nn=e=>{switch(e){case"mini":return 20;case"tiny":return 22.5;case"small":return 25;case"medium":return 30;case"large":return 35;case"big":return 40;case"huge":return 45;case"massive":return 50;default:return 30}},on=e=>{switch(e){case"mini":case"tiny":case"small":case"medium":case"large":case"big":case"huge":case"massive":default:return 5}},an=e=>{switch(e){case"mini":return"40px !important";case"tiny":return"50px !important";case"small":return"60px !important";case"medium":return"65px !important";case"large":return"70px !important";case"big":return"80px !important";case"huge":return"90px !important";case"massive":return"100px !important";default:return"65px !important"}},cn=n.label(Gr||(Gr=tn`
    display: flex !important;
    flex-direction: row !important;
    position: relative !important;
    /* padding-left: ${0}; */
    /* margin-bottom: 12px; */
    cursor: ${0};
    font-size: 22px !important;
    user-select: none !important;

    input {
        position: absolute !important;
        opacity: 0 !important;
        cursor: pointer !important;
        height: 0 !important;
        width: 0 !important;
        display: none !important;
    }

    input:checked ~ .control {
        background-color: ${0};

        &:after {
            left: ${0};
        }
    }

    .control {
        height: ${0};
        width: ${0};
        border-radius: ${0};
        background-color: ${0} !important;
        transition: background-color 0.15s ease-in !important;

        &:after {
            content: '' !important;
            position: absolute !important;
            left: 5px !important;
            top: 5px !important;
            height: ${0};
            width: ${0};
            border-radius: 50px !important;
            background-color: white !important;
            transition: left 0.15s ease-in !important;
            border: 1px solid ${0} !important;
        }
    }
`),e=>e.size?rn(e.size)+"px":"50px",e=>e.disabled?"normal !important":"pointer !important",e=>e.disabled?"rgba(155, 77, 238, 0.2) !important":"#68349F !important",e=>e.size?rn(e.size)-(nn(e.size)-2*on(e.size))-on(e.size)+"px !important":"25px !important",e=>e.size?nn(e.size)+"px !important":"30px !important",e=>e.size?rn(e.size)+"px !important":"50px !important",e=>e.size?nn(e.size)/2+"px !important":"15px !important","#eeeeee",e=>e.size?nn(e.size)-2*on(e.size)+"px !important":"20px !important",e=>e.size?nn(e.size)-2*on(e.size)+"px !important":"20px !important","#F1F1F1"),pn=n.div(Qr||(Qr=tn`
    display: flex !important;
    flex-direction: row !important;

    .btn {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        opacity: ${0};
        width: ${0};
        border: 1px solid ${0} !important;
        padding: 4px 0 !important;

        span {
            font-size: ${0};
        }
    }

    .left {
        cursor: ${0};
        background-color: ${0};
        border-top-left-radius: 20px !important;
        border-bottom-left-radius: 20px !important;
        border-right: 0 !important;
        transition: 400ms !important;

        span {
            color: ${0};
        }
    }

    .right {
        cursor: ${0};
        background-color: ${0};
        border-top-right-radius: 20px !important;
        border-bottom-right-radius: 20px !important;
        border-left: 0 !important;
        transition: 400ms !important;

        span {
            color: ${0};
        }
    }
`),e=>e.disabled?"0.5 !important":"1 !important",e=>e.size?an(e.size):"65px !important","#eeeeee",e=>e.size?(e=>{switch(e){case"mini":return"8px !important";case"tiny":return"9px !important";case"small":return"10px !important";case"medium":return"11px !important";case"large":return"12px !important";case"big":return"13px !important";case"huge":return"14px !important";case"massive":return"15px !important";default:return"11px !important"}})(e.size):"11px !important",e=>e.disabled?"default !important":e.checked?"pointer !important":"default !important",e=>e.checked?"#FFFFFF !important":"#9B4DEE !important",e=>e.checked?"#707070 !important":"#FFFFFF !important",e=>e.disabled||e.checked?"default !important":"pointer !important",e=>e.checked?"#9B4DEE !important":"#FFFFFF !important",e=>e.checked?"#FFFFFF !important":"#707070 !important"),ln=n.div(en||(en=tn`
    display: flex !important;
    flex-direction: row !important;

    .btn {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        opacity: ${0};
        width: ${0};
        border: 1px solid ${0} !important;
        padding: 4px 0 !important;

        span {
            font-size: ${0};
        }
    }

    .left {
        cursor: ${0};
        background-color: ${0};
        border-top-left-radius: 20px !important;
        border-bottom-left-radius: 20px !important;
        border-right: 0 !important;
        transition: 400ms !important;

        span {
            color: ${0};
        }
    }

    .right {
        cursor: ${0};
        background-color: ${0};
        border-top-right-radius: 20px !important;
        border-bottom-right-radius: 20px !important;
        border-left: 0 !important;
        transition: 400ms !important;

        span {
            color: ${0};
        }
    }
`),e=>e.disabled?"0.5 !important":"1 !important",e=>e.size?an(e.size):"70px !important","#eeeeee",e=>e.size?(e=>{switch(e){case"mini":return"7px !important";case"tiny":return"8px !important";case"small":return"9px !important";case"medium":return"10px !important";case"large":return"11px !important";case"big":return"12px !important";case"huge":return"13px !important";case"massive":return"14px !important";default:return"10px !important"}})(e.size):"10px !important",e=>e.disabled?"default !important":e.checked?"pointer !important":"default !important",e=>e.checked?"#FFFFFF !important":"#E0457B !important",e=>e.checked?"#707070 !important":"#FFFFFF !important",e=>e.disabled||e.checked?"default !important":"pointer !important",e=>e.checked?"#4BA047 !important":"#FFFFFF !important",e=>e.checked?"#FFFFFF !important":"#707070 !important"),sn=({type:t,checked:r,onChange:n,size:o,disabled:i,selectionRef:a})=>{switch(t){case"switch":return e.createElement(cn,{size:o,ref:a,disabled:i},e.createElement("input",{type:"checkbox",defaultChecked:r}),e.createElement("span",{className:"control",onClick:()=>i?null:n?n():null}));case"toggle":return e.createElement(pn,{checked:r,ref:a,size:o,disabled:i},e.createElement("div",{className:"btn left",onClick:()=>i?null:r&&n?n():null},e.createElement("span",null,"não")),e.createElement("div",{className:"btn right",onClick:()=>i||r?null:n?n():null},e.createElement("span",null,"sim")));case"activeInactive":return e.createElement(ln,{checked:r,ref:a,size:o,disabled:i},e.createElement("div",{className:"btn left",onClick:()=>i?null:r&&n?n():null},e.createElement("span",null,r?"desativar":"inativo")),e.createElement("div",{className:"btn right",onClick:()=>i||r?null:n?n():null},e.createElement("span",null,r?"ativo":"ativar")))}return e.createElement("div",null)};let dn;const un=e=>{switch(e){case"small":return"10px";case"medium":return"15px";case"big":return"22px";default:return"15px"}},mn=n.div(dn||(dn=(e=>e)`
    display: flex;
    flex-direction: row;
    align-items: center;
    opacity: ${0};

    .btn {
        width: ${0};
        font-size: ${0};
        display: flex;
        align-items: center;
        justify-content: center;
        height: ${0};
        color: ${0};
    }

    .left {
        opacity: ${0};

        cursor: ${0};
    }

    .right {
        opacity: ${0};

        cursor: ${0};
    }

    input {
        text-align: center;
        width: ${0};
        font-size: ${0};
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${0};
        border: none;
        outline: none;
    }

    input[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input[type='number'] {
        -moz-appearance: textfield;
        appearance: textfield;
    }

    input:disabled {
        background-color: transparent;
    }
`),e=>e.disabled?"0.5":"1",e=>e.size?(e=>{switch(e){case"small":return"20px";case"medium":return"30px";case"big":return"40px";default:return"30px"}})(e.size):"30px",e=>e.size?un(e.size):"15px",e=>e.size?(e=>{switch(e){case"small":return"20px";case"medium":return"30px";case"big":return"40px";default:return"30px"}})(e.size):"30px","#707070",e=>e.noLess?"0.2":"1",e=>e.disabled||e.noLess?"default":"pointer",e=>e.noMore?"0.2":"1",e=>e.disabled||e.noMore?"default":"pointer",e=>{return e.size?(r=e.value,"small"===(t=e.size)?r<100?"15px":r<1e3?"20px":r<1e4?"25px":"30px":"medium"===t?r<100?"20px":r<1e3?"30px":r<1e4?"40px":"50px":"big"===t?r<100?"30px":r<1e3?"40px":r<1e4?"55px":"70px":"50px"):"15px";var t,r},e=>e.size?un(e.size):"15px","#707070"),fn=({size:n,disabled:o,value:i,limit:a,minimum:c,more:p,less:l,onChange:s})=>{const[d,u]=t(!1),[m,f]=t(!1),[h,g]=t("medium");return r(()=>{n&&g(n)},[n]),r(()=>{u(!!(c&&i<=c||i<=0))},[c,i]),r(()=>{f(!!(a&&i>=a))},[a,i]),e.createElement(mn,{limit:a,minimum:c,value:i,size:h,disabled:o,noLess:d,noMore:m},e.createElement("div",{className:"btn left",onClick:()=>o?null:l?d?null:l():null},e.createElement(Qe,{icon:nt})),e.createElement("input",{value:i||0===i?i.toString():"",type:"number",onChange:e=>s?s(Number(e.target.value)):null,disabled:o||!s}),e.createElement("div",{className:"btn right",onClick:()=>o||m?null:p?p():null},e.createElement(Qe,{icon:ot})))};let hn,gn,bn=e=>e;const xn=n.div(hn||(hn=bn`
    padding: 20px;
    box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.16);
    background-color: ${0};
    border-radius: 30px;
    position: relative;

    width: ${0};

    .loading-card {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(255,255,255,.8);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 30px;
        z-index: 2;
        position: absolute;
    }
`),"#FFFFFF",e=>e.width?"string"==typeof e.width?e.width.replace("%","")+"%":e.width+"px":"100%"),wn=n.a(gn||(gn=bn`
    background-color: ${0};
    padding: 12px 25px;
    border-radius: 30px;
    border: 1px solid ${0};
    width: ${0};
    cursor: pointer;
    display: flex;
    align-items: center;

    :hover {
        background-color: ${0};
    }

    span {
        margin-left: 15px;
        font-size: 15px;
        color: ${0};
    }
`),"#eeeeee","#D1D8DC",e=>e.width?"string"==typeof e.width?e.width.replace("%","")+"%":e.width+"px":"100%","#F1F1F1",e=>e.colorText?e.colorText:"#68349F"),vn=({children:t,width:r,type:n,style:o,icon:i,sizeIcon:a,colorIcon:c,text:p,colorText:l,onClick:s,loading:d,...u})=>{switch(n){case"shadow":return e.createElement(xn,{width:r,style:o},d&&e.createElement("div",{className:"loading-card"},e.createElement(Ot,null)),t);case"button":return e.createElement(wn,{style:o,colorText:l,onClick:s,href:u.href,width:r},i&&e.createElement(e.Fragment,null,e.createElement(Qe,{icon:i,color:c||"#68349F",size:a||"lg"})),e.createElement("span",null,p));default:return e.createElement("div",null)}};let kn;const yn=n.div(kn||(kn=(e=>e)`
    display: flex;
    flex-direction: column;

    input {
        outline: none;
        padding: 7px 15px;
        border-radius: 20px;
        border: 1px solid
            ${0};
        color: ${0};
        cursor: pointer;

        background-color: ${0};

        font-weight: bold;

        &::placeholder {
            color: ${0};
        }
    }

    span {
        font-size: 14px;
        color: ${0};
        margin-left: 15px;
        margin-bottom: 3px;
    }

    .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle,
    .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle,
    .react-datepicker__year-read-view--down-arrow,
    .react-datepicker__month-read-view--down-arrow,
    .react-datepicker__month-year-read-view--down-arrow {
        margin-left: -8px !important;
        position: absolute !important;
    }
    .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle,
    .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle,
    .react-datepicker__year-read-view--down-arrow,
    .react-datepicker__month-read-view--down-arrow,
    .react-datepicker__month-year-read-view--down-arrow,
    .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle::before,
    .react-datepicker-popper[data-placement^="top"]
    .react-datepicker__triangle::before,
    .react-datepicker__year-read-view--down-arrow::before,
    .react-datepicker__month-read-view--down-arrow::before,
    .react-datepicker__month-year-read-view--down-arrow::before {
        box-sizing: content-box !important;
        position: absolute !important;
        border: 8px solid transparent !important;
        height: 0 !important;
        width: 1px !important;
    }

    .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle::before,
    .react-datepicker-popper[data-placement^="top"]
    .react-datepicker__triangle::before,
    .react-datepicker__year-read-view--down-arrow::before,
    .react-datepicker__month-read-view--down-arrow::before,
    .react-datepicker__month-year-read-view--down-arrow::before {
        content: "" !important;
        z-index: -1 !important;
        border-width: 8px !important;
        left: -8px !important;
        border-bottom-color: #291f1f !important;
    }

    .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle {
        top: 0 !important;
        margin-top: -8px !important;
    }

    .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle,
    .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle::before {
        border-top: none !important;
        border-bottom-color: #ffffff !important;
    }

    .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle::before {
        top: -1px !important;
        border-bottom-color: #aeaeae !important;
    }

    .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle,
    .react-datepicker__year-read-view--down-arrow,
    .react-datepicker__month-read-view--down-arrow,
    .react-datepicker__month-year-read-view--down-arrow {
        bottom: 0 !important;
        margin-bottom: -8px !important;
    }

    .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle,
    .react-datepicker__year-read-view--down-arrow,
    .react-datepicker__month-read-view--down-arrow,
    .react-datepicker__month-year-read-view--down-arrow,
    .react-datepicker-popper[data-placement^="top"]
    .react-datepicker__triangle::before,
    .react-datepicker__year-read-view--down-arrow::before,
    .react-datepicker__month-read-view--down-arrow::before,
    .react-datepicker__month-year-read-view--down-arrow::before {
        border-bottom: none !important;
        border-top-color: #fff !important;
    }

    .react-datepicker-popper[data-placement^="top"]
    .react-datepicker__triangle::before,
    .react-datepicker__year-read-view--down-arrow::before,
    .react-datepicker__month-read-view--down-arrow::before,
    .react-datepicker__month-year-read-view--down-arrow::before {
        bottom: -1px !important;
        border-top-color: #aeaeae !important;
    }

    .react-datepicker-wrapper {
        display: inline-block;
        padding: 0;
        border: 0;
    }

    .react-datepicker {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important;
        font-size: 0.8rem !important;
        background-color: #fff !important;
        color: #000 !important;
        border: 1px solid #aeaeae !important;
        border-radius: 20px !important;
        display: inline-block !important;
        position: relative !important;
    }

    .react-datepicker--time-only .react-datepicker__triangle {
        left: 35px !important;
    }

    .react-datepicker--time-only .react-datepicker__time-container {
        border-left: 0 !important;
    }

    .react-datepicker--time-only .react-datepicker__time,
    .react-datepicker--time-only .react-datepicker__time-box {
        border-bottom-left-radius: 20px !important;
        border-bottom-right-radius: 20px !important;
    }

    .react-datepicker__triangle {
        position: absolute !important;
        left: 50px !important;
    }

    .react-datepicker-popper {
        z-index: 1 !important;
    }

    .react-datepicker-popper[data-placement^="bottom"] {
        margin-top: 10px !important;
    }

    .react-datepicker-popper[data-placement="bottom-end"]
    .react-datepicker__triangle,
    .react-datepicker-popper[data-placement="top-end"] .react-datepicker__triangle {
        left: auto !important;
        right: 50px !important;
    }

    .react-datepicker-popper[data-placement^="top"] {
        margin-bottom: 10px !important;
    }

    .react-datepicker-popper[data-placement^="right"] {
        margin-left: 8px !important;
    }

    .react-datepicker-popper[data-placement^="right"] .react-datepicker__triangle {
        left: auto !important;
        right: 42px !important;
    }

    .react-datepicker-popper[data-placement^="left"] {
        margin-right: 8px !important;
    }

    .react-datepicker-popper[data-placement^="left"] .react-datepicker__triangle {
        left: 42px !important;
        right: auto !important;
    }

    .react-datepicker__header {
        text-align: center !important;
        background-color: #ffffff !important;
        border-bottom: 1px solid #aeaeae !important;
        border-top-left-radius: 20px !important;
        padding-top: 18px !important;
        position: relative !important;
        padding-bottom: 10px !important;
    }

    .react-datepicker__header--time {
        padding-bottom: 8px !important;
        padding-left: 5px !important;
        padding-right: 5px !important;
    }

    .react-datepicker__header--time:not(.react-datepicker__header--time--only) {
        border-top-left-radius: 0 !important;
    }

    .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
        border-top-right-radius: 20px !important;
    }

    .react-datepicker__year-dropdown-container--select,
    .react-datepicker__month-dropdown-container--select,
    .react-datepicker__month-year-dropdown-container--select,
    .react-datepicker__year-dropdown-container--scroll,
    .react-datepicker__month-dropdown-container--scroll,
    .react-datepicker__month-year-dropdown-container--scroll {
        display: inline-block !important;
        margin: 0 2px !important;
    }

    .react-datepicker__current-month,
    .react-datepicker-time__header,
    .react-datepicker-year-header {
        margin-top: 0 !important;
        color: #707070 !important;
        font-weight: bold !important;
        font-size: 0.944rem !important;
    }

    .react-datepicker-time__header {
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
        overflow: hidden !important;
    }

    .react-datepicker__navigation {
        background: none !important;
        line-height: 1.7rem !important;
        text-align: center !important;
        cursor: pointer !important;
        position: absolute !important;
        top: 20px !important;
        width: 0 !important;
        padding: 0 !important;
        border: 0.5rem solid transparent !important;
        z-index: 1 !important;
        height: 15px !important;
        width: 20px !important;
        text-indent: -999em !important;
        overflow: hidden !important;
        outline: none !important;
    }

    .react-datepicker__navigation--previous {
        left: 10px !important;
        border-right-color: #9b4dee !important;
    }

    .react-datepicker__navigation--previous:hover {
        border-right-color: rgba(155, 77, 238, 0.2) !important;
    }

    .react-datepicker__navigation--previous--disabled,
    .react-datepicker__navigation--previous--disabled:hover {
        border-right-color: rgba(155, 77, 238, 0.2) !important;
        cursor: default !important;
    }

    .react-datepicker__navigation--next {
        right: 10px !important;
        border-left-color: #9b4dee !important;
    }

    .react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
        right: 95px !important;
    }

    .react-datepicker__navigation--next:hover {
        border-left-color: rgba(155, 77, 238, 0.2) !important;
    }

    .react-datepicker__navigation--next--disabled,
    .react-datepicker__navigation--next--disabled:hover {
        border-left-color: rgba(155, 77, 238, 0.2) !important;
        cursor: default !important;
    }

    .react-datepicker__navigation--years {
        position: relative !important;
        top: 0 !important;
        display: block !important;
        margin-left: auto !important;
        margin-right: auto !important;
    }

    .react-datepicker__navigation--years-previous {
        top: 4px !important;
        border-top-color: #ccc !important;
    }

    .react-datepicker__navigation--years-previous:hover {
        border-top-color: #b3b3b3 !important;
    }

    .react-datepicker__navigation--years-upcoming {
        top: -4px !important;
        border-bottom-color: #ccc !important;
    }

    .react-datepicker__navigation--years-upcoming:hover {
        border-bottom-color: #b3b3b3 !important;
    }

    .react-datepicker__month-container {
        float: left !important;
    }

    .react-datepicker__year {
        margin: 0.4rem !important;
        text-align: center !important;
    }

    .react-datepicker__year-wrapper {
        display: flex !important;
        flex-wrap: wrap !important;
        max-width: 180px !important;
    }

    .react-datepicker__year .react-datepicker__year-text {
        display: inline-block !important;
        width: 4rem !important;
        margin: 2px !important;
    }

    .react-datepicker__month {
        margin: 10px 0.4rem !important;
        text-align: center !important;
    }

    .react-datepicker__month .react-datepicker__month-text,
    .react-datepicker__month .react-datepicker__quarter-text {
        display: inline-block !important;
        width: 4rem !important;
        margin: 2px !important;
    }

    .react-datepicker__input-time-container {
        clear: both !important;
        width: 100% !important;
        float: left !important;
        margin: 5px 0 10px 15px !important;
        text-align: left !important;
    }

    .react-datepicker__input-time-container .react-datepicker-time__caption {
        display: inline-block !important;
        color: #707070 !important;
    }

    .react-datepicker__input-time-container
    .react-datepicker-time__input-container {
        display: inline-block !important;
    }

    .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input {
        display: inline-block !important;
        margin-left: 10px !important;
    }

    .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input {
        width: 85px !important;
        border-radius: 20px !important;
        padding: 5px 10px !important;
        outline: none !important;
        border-style: solid !important;
        border-width: 1px !important;
        border-color: #707070 !important;
    }

    .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input[type="time"]::-webkit-inner-spin-button,
    .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input[type="time"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
        margin: 0 !important;
    }

    .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input[type="time"] {
        -moz-appearance: textfield !important;
    }

    .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__delimiter {
        margin-left: 5px !important;
        display: inline-block !important;
    }

    .react-datepicker__time-container {
        float: right !important;
        border-left: 1px solid #aeaeae !important;
        width: 85px !important;
    }

    .react-datepicker__time-container--with-today-button {
        display: inline !important;
        border: 1px solid #aeaeae !important;
        border-radius: 0.3rem !important;
        position: absolute !important;
        right: -72px !important;
        top: 0 !important;
    }

    .react-datepicker__time-container .react-datepicker__time {
        position: relative !important;
        background: white !important;
        border-bottom-right-radius: 20px !important;
    }

    .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box {
        width: 85px !important;
        overflow-x: hidden !important;
        margin: 0 auto !important;
        text-align: center !important;
        border-bottom-right-radius: 20px !important;
    }

    .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list {
        list-style: none !important;
        margin: 0 !important;
        height: calc(195px + (1.7rem / 2)) !important;
        overflow-y: scroll !important;
        padding-right: 0px !important;
        padding-left: 0px !important;
        width: 100% !important;
        box-sizing: content-box !important;
    }

    .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item {
        height: 30px !important;
        padding: 5px 10px !important;
        white-space: nowrap !important;
        color: #707070 !important;
    }

    .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item:hover {
        cursor: pointer !important;
        background-color: #f0f0f0 !important;
    }

    .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected {
        background-color: #9b4dee !important;
        color: white !important;
        font-weight: bold !important;
    }

    .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected:hover {
        background-color: #9b4dee !important;
    }

    .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--disabled {
        color: #ccc !important;
    }

    .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--disabled:hover {
        cursor: default !important;
        background-color: transparent !important;
    }

    .react-datepicker__week-number {
        color: #ccc !important;
        display: inline-block !important;
        width: 1.7rem !important;
        line-height: 1.7rem !important;
        text-align: center !important;
        margin: 0.166rem !important;
    }

    .react-datepicker__week-number.react-datepicker__week-number--clickable {
        cursor: pointer !important;
    }

    .react-datepicker__week-number.react-datepicker__week-number--clickable:hover {
        border-radius: 0.3rem !important;
        background-color: #f0f0f0 !important;
    }

    .react-datepicker__day-names,
    .react-datepicker__week {
        white-space: nowrap !important;
        margin-top: 10px !important;
    }

    .react-datepicker__day-name,
    .react-datepicker__day,
    .react-datepicker__time-name {
        color: #707070 !important;
        display: inline-block !important;
        width: 1.7rem !important;
        line-height: 1.7rem !important;
        text-align: center !important;
        margin: 0.166rem !important;
        outline: none !important;
    }

    .react-datepicker__month--selected,
    .react-datepicker__month--in-selecting-range,
    .react-datepicker__month--in-range,
    .react-datepicker__quarter--selected,
    .react-datepicker__quarter--in-selecting-range,
    .react-datepicker__quarter--in-range {
        border-radius: 10px !important;
        background-color: #9b4dee !important;
        color: #fff !important;
    }

    .react-datepicker__month--selected:hover,
    .react-datepicker__month--in-selecting-range:hover,
    .react-datepicker__month--in-range:hover,
    .react-datepicker__quarter--selected:hover,
    .react-datepicker__quarter--in-selecting-range:hover,
    .react-datepicker__quarter--in-range:hover {
        background-color: rgba(155, 77, 238, 0.8) !important;
    }

    .react-datepicker__month--disabled,
    .react-datepicker__quarter--disabled {
        color: #ccc !important;
        pointer-events: none !important;
    }

    .react-datepicker__month--disabled:hover,
    .react-datepicker__quarter--disabled:hover {
        cursor: default !important;
        background-color: transparent !important;
    }

    .react-datepicker__day,
    .react-datepicker__month-text,
    .react-datepicker__quarter-text,
    .react-datepicker__year-text {
        cursor: pointer !important;
    }

    .react-datepicker__day:hover {
        border-radius: 50% !important;
        background-color: #f0f0f0 !important;
    }
    .react-datepicker__month-text:hover,
    .react-datepicker__quarter-text:hover,
    .react-datepicker__year-text:hover {
        border-radius: 10px !important;
        background-color: #f0f0f0 !important;
    }

    .react-datepicker__day--today,
    .react-datepicker__month-text--today,
    .react-datepicker__quarter-text--today,
    .react-datepicker__year-text--today {
        font-weight: bold !important;
    }

    .react-datepicker__day--highlighted,
    .react-datepicker__month-text--highlighted,
    .react-datepicker__quarter-text--highlighted,
    .react-datepicker__year-text--highlighted {
        border-radius: 0.3rem !important;
        background-color: #3dcc4a !important;
        color: #fff !important;
    }

    .react-datepicker__day--highlighted:hover,
    .react-datepicker__month-text--highlighted:hover,
    .react-datepicker__quarter-text--highlighted:hover,
    .react-datepicker__year-text--highlighted:hover {
        background-color: #32be3f !important;
    }

    .react-datepicker__day--highlighted-custom-1,
    .react-datepicker__month-text--highlighted-custom-1,
    .react-datepicker__quarter-text--highlighted-custom-1,
    .react-datepicker__year-text--highlighted-custom-1 {
        color: magenta !important;
    }

    .react-datepicker__day--highlighted-custom-2,
    .react-datepicker__month-text--highlighted-custom-2,
    .react-datepicker__quarter-text--highlighted-custom-2,
    .react-datepicker__year-text--highlighted-custom-2 {
        color: green !important;
    }

    .react-datepicker__day--selected,
    .react-datepicker__day--in-selecting-range,
    .react-datepicker__day--in-range {
        border-radius: 50% !important;
        background-color: #9b4dee !important;
        color: #fff !important;
        outline: none !important;
    }
    .react-datepicker__month-text--selected,
    .react-datepicker__month-text--in-selecting-range,
    .react-datepicker__month-text--in-range,
    .react-datepicker__quarter-text--selected,
    .react-datepicker__quarter-text--in-selecting-range,
    .react-datepicker__quarter-text--in-range,
    .react-datepicker__year-text--selected,
    .react-datepicker__year-text--in-selecting-range,
    .react-datepicker__year-text--in-range {
        border-radius: 10px !important;
        background-color: #9b4dee !important;
        color: #fff !important;
        outline: none !important;
    }

    .react-datepicker__day--selected:hover,
    .react-datepicker__day--in-selecting-range:hover,
    .react-datepicker__day--in-range:hover,
    .react-datepicker__month-text--selected:hover,
    .react-datepicker__month-text--in-selecting-range:hover,
    .react-datepicker__month-text--in-range:hover,
    .react-datepicker__quarter-text--selected:hover,
    .react-datepicker__quarter-text--in-selecting-range:hover,
    .react-datepicker__quarter-text--in-range:hover,
    .react-datepicker__year-text--selected:hover,
    .react-datepicker__year-text--in-selecting-range:hover,
    .react-datepicker__year-text--in-range:hover {
        background-color: rgba(155, 77, 238, 0.8) !important;
        outline: none !important;
    }

    .react-datepicker__day--keyboard-selected {
        border-radius: 50% !important;
        background-color: #9b4dee !important;
        color: #fff !important;
        outline: none !important;
    }
    .react-datepicker__month-text--keyboard-selected,
    .react-datepicker__quarter-text--keyboard-selected,
    .react-datepicker__year-text--keyboard-selected {
        border-radius: 10px !important;
        background-color: #9b4dee !important;
        color: #fff !important;
        outline: none !important;
    }

    .react-datepicker__day--keyboard-selected:hover,
    .react-datepicker__month-text--keyboard-selected:hover,
    .react-datepicker__quarter-text--keyboard-selected:hover,
    .react-datepicker__year-text--keyboard-selected:hover {
        background-color: rgba(155, 77, 238, 0.8) !important;
    }

    .react-datepicker__day--in-selecting-range,
    .react-datepicker__month-text--in-selecting-range,
    .react-datepicker__quarter-text--in-selecting-range,
    .react-datepicker__year-text--in-selecting-range {
        background-color: rgba(155, 77, 238, 0.5) !important;
        outline: none !important;
    }

    .react-datepicker__month--selecting-range .react-datepicker__day--in-range,
    .react-datepicker__month--selecting-range
    .react-datepicker__month-text--in-range,
    .react-datepicker__month--selecting-range
    .react-datepicker__quarter-text--in-range,
    .react-datepicker__month--selecting-range
    .react-datepicker__year-text--in-range {
        background-color: #f0f0f0 !important;
        color: #000 !important;
        outline: none !important;
    }

    .react-datepicker__day--disabled,
    .react-datepicker__month-text--disabled,
    .react-datepicker__quarter-text--disabled,
    .react-datepicker__year-text--disabled {
        cursor: default !important;
        color: #ccc !important;
    }

    .react-datepicker__day--disabled:hover,
    .react-datepicker__month-text--disabled:hover,
    .react-datepicker__quarter-text--disabled:hover,
    .react-datepicker__year-text--disabled:hover {
        background-color: transparent !important;
    }

    .react-datepicker__month-text.react-datepicker__month--selected:hover,
    .react-datepicker__month-text.react-datepicker__month--in-range:hover,
    .react-datepicker__month-text.react-datepicker__quarter--selected:hover,
    .react-datepicker__month-text.react-datepicker__quarter--in-range:hover,
    .react-datepicker__quarter-text.react-datepicker__month--selected:hover,
    .react-datepicker__quarter-text.react-datepicker__month--in-range:hover,
    .react-datepicker__quarter-text.react-datepicker__quarter--selected:hover,
    .react-datepicker__quarter-text.react-datepicker__quarter--in-range:hover {
        background-color: #9b4dee !important;
    }

    .react-datepicker__month-text:hover,
    .react-datepicker__quarter-text:hover {
        background-color: #f0f0f0 !important;
    }

    .react-datepicker__input-container {
        position: relative !important;
        display: inline-block !important;
        width: 100% !important;
    }

    .react-datepicker__year-read-view,
    .react-datepicker__month-read-view,
    .react-datepicker__month-year-read-view {
        border: 1px solid transparent !important;
        border-radius: 0.3rem !important;
    }

    .react-datepicker__year-read-view:hover,
    .react-datepicker__month-read-view:hover,
    .react-datepicker__month-year-read-view:hover {
        cursor: pointer !important;
    }

    .react-datepicker__year-read-view:hover,
    .react-datepicker__year-read-view--down-arrow,
    .react-datepicker__year-read-view:hover,
    .react-datepicker__month-read-view--down-arrow,
    .react-datepicker__month-read-view:hover,
    .react-datepicker__year-read-view--down-arrow,
    .react-datepicker__month-read-view:hover,
    .react-datepicker__month-read-view--down-arrow,
    .react-datepicker__month-year-read-view:hover,
    .react-datepicker__year-read-view--down-arrow,
    .react-datepicker__month-year-read-view:hover,
    .react-datepicker__month-read-view--down-arrow {
        border-top-color: #b3b3b3 !important;
    }

    .react-datepicker__year-read-view--down-arrow,
    .react-datepicker__month-read-view--down-arrow,
    .react-datepicker__month-year-read-view--down-arrow {
        border-top-color: #ccc !important;
        float: right !important;
        margin-left: 20px !important;
        top: 5px !important;
        position: relative !important;
        border-width: 0.45rem !important;
    }

    .react-datepicker__year-dropdown,
    .react-datepicker__month-dropdown,
    .react-datepicker__month-year-dropdown {
        background-color: #f0f0f0 !important;
        position: absolute !important;
        width: 50% !important;
        left: 25% !important;
        top: 30px !important;
        z-index: 1 !important;
        text-align: center !important;
        border-radius: 0.3rem !important;
        border: 1px solid #aeaeae !important;
    }

    .react-datepicker__year-dropdown:hover,
    .react-datepicker__month-dropdown:hover,
    .react-datepicker__month-year-dropdown:hover {
        cursor: pointer !important;
    }

    .react-datepicker__year-dropdown--scrollable,
    .react-datepicker__month-dropdown--scrollable,
    .react-datepicker__month-year-dropdown--scrollable {
        height: 150px !important;
        overflow-y: scroll !important;
    }

    .react-datepicker__year-option,
    .react-datepicker__month-option,
    .react-datepicker__month-year-option {
        line-height: 20px !important;
        width: 100% !important;
        display: block !important;
        margin-left: auto !important;
        margin-right: auto !important;
    }

    .react-datepicker__year-option:first-of-type,
    .react-datepicker__month-option:first-of-type,
    .react-datepicker__month-year-option:first-of-type {
        border-top-left-radius: 0.3rem !important;
        border-top-right-radius: 0.3rem !important;
    }

    .react-datepicker__year-option:last-of-type,
    .react-datepicker__month-option:last-of-type,
    .react-datepicker__month-year-option:last-of-type {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
        border-bottom-left-radius: 0.3rem !important;
        border-bottom-right-radius: 0.3rem !important;
    }

    .react-datepicker__year-option:hover,
    .react-datepicker__month-option:hover,
    .react-datepicker__month-year-option:hover {
        background-color: #ccc !important;
    }

    .react-datepicker__year-option:hover
    .react-datepicker__navigation--years-upcoming,
    .react-datepicker__month-option:hover
    .react-datepicker__navigation--years-upcoming,
    .react-datepicker__month-year-option:hover
    .react-datepicker__navigation--years-upcoming {
        border-bottom-color: #b3b3b3 !important;
    }

    .react-datepicker__year-option:hover
    .react-datepicker__navigation--years-previous,
    .react-datepicker__month-option:hover
    .react-datepicker__navigation--years-previous,
    .react-datepicker__month-year-option:hover
    .react-datepicker__navigation--years-previous {
        border-top-color: #b3b3b3 !important;
    }

    .react-datepicker__year-option--selected,
    .react-datepicker__month-option--selected,
    .react-datepicker__month-year-option--selected {
        position: absolute !important;
        left: 15px !important;
    }

    .react-datepicker__close-icon {
        cursor: pointer !important;
        background-color: transparent !important;
        border: 0 !important;
        outline: 0 !important;
        padding: 0px 6px 0px 0px !important;
        position: absolute !important;
        top: 0 !important;
        right: 0 !important;
        height: 100% !important;
        display: table-cell !important;
        vertical-align: middle !important;
    }

    .react-datepicker__close-icon::after {
        cursor: pointer !important;
        background-color: #9b4dee !important;
        color: #fff !important;
        border-radius: 50% !important;
        height: 16px !important;
        width: 16px !important;
        padding: 2px !important;
        font-size: 12px !important;
        line-height: 1 !important;
        text-align: center !important;
        display: table-cell !important;
        vertical-align: middle !important;
    }

    .react-datepicker__today-button {
        background: rgba(155, 77, 238, 0.1) !important;
        border-top: 1px solid #aeaeae !important;
        cursor: pointer !important;
        text-align: center !important;
        font-weight: bold !important;
        padding: 5px 0 !important;
        clear: left !important;
        border-bottom-left-radius: 20px !important;
        border-bottom-right-radius: 20px !important;
    }

    .react-datepicker__portal {
        position: fixed !important;
        width: 100vw !important;
        height: 100vh !important;
        background-color: rgba(0, 0, 0, 0.8) !important;
        left: 0 !important;
        top: 0 !important;
        justify-content: center !important;
        align-items: center !important;
        display: flex !important;
        z-index: 2147483647 !important;
    }

    .react-datepicker__portal .react-datepicker__day-name,
    .react-datepicker__portal .react-datepicker__day,
    .react-datepicker__portal .react-datepicker__time-name {
        width: 3rem !important;
        line-height: 3rem !important;
    }

    @media (max-width: 400px), (max-height: 550px) {
    .react-datepicker__portal .react-datepicker__day-name,
    .react-datepicker__portal .react-datepicker__day,
    .react-datepicker__portal .react-datepicker__time-name {
        width: 2rem !important;
        line-height: 2rem !important;
    }
}

.react-datepicker__portal .react-datepicker__current-month,
.react-datepicker__portal .react-datepicker-time__header {
    font-size: 1.44rem !important;
}

.react-datepicker__portal .react-datepicker__navigation {
    border: 0.81rem solid transparent !important;
}

.react-datepicker__portal .react-datepicker__navigation--previous {
    border-right-color: #ccc !important;
}

.react-datepicker__portal .react-datepicker__navigation--previous:hover {
    border-right-color: #b3b3b3 !important;
}

.react-datepicker__portal .react-datepicker__navigation--previous--disabled,
.react-datepicker__portal
.react-datepicker__navigation--previous--disabled:hover {
    border-right-color: #e6e6e6 !important;
    cursor: default !important;
}

.react-datepicker__portal .react-datepicker__navigation--next {
    border-left-color: #ccc !important;
}

.react-datepicker__portal .react-datepicker__navigation--next:hover {
    border-left-color: #b3b3b3 !important;
}

.react-datepicker__portal .react-datepicker__navigation--next--disabled,
.react-datepicker__portal .react-datepicker__navigation--next--disabled:hover {
    border-left-color: #e6e6e6 !important;
    cursor: default !important;
}

`),e=>e.brand?"#D8B8F9":"#ACACAC",e=>e.brand?"#9B4DEE":"#707070",e=>e.brand?"#D8B8F9":"#FFFFFF",e=>e.brand?"rgba(155, 77, 238, 0.2)":"#F1F1F1",e=>e.labelColor?e.labelColor:"#9B4DEE");var _n=e&&"object"==typeof e&&"default"in e?e.default:e;function En(){return(En=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Cn(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var On=function(e,t,r,n,o,i,a,c){if(!e){var p;if(void 0===t)p=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,n,o,i,a,c],s=0;(p=new Error(t.replace(/%s/g,function(){return l[s++]}))).name="Invariant Violation"}throw p.framesToPop=1,p}};function Sn(e,t,r){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=r;else{var n=e.createTextRange();n.collapse(!0),n.moveStart("character",t),n.moveEnd("character",r-t),n.select()}}var zn={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function $n(e,t,r){var n="",o="",i=null,a=[];if(void 0===t&&(t="_"),null==r&&(r=zn),!e||"string"!=typeof e)return{maskChar:t,formatChars:r,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var c=!1;return e.split("").forEach(function(e){c=!c&&"\\"===e||(c||!r[e]?(a.push(n.length),n.length===a.length-1&&(o+=e)):i=n.length+1,n+=e,!1)}),{maskChar:t,formatChars:r,prefix:o,mask:n,lastEditablePosition:i,permanents:a}}function Fn(e,t){return-1!==e.permanents.indexOf(t)}function Mn(e,t,r){var n=e.mask,o=e.formatChars;return!!r&&(Fn(e,t)?n[t]===r:new RegExp(o[n[t]]).test(r))}function Dn(e,t){return t.split("").every(function(t,r){return Fn(e,r)||!Mn(e,r,t)})}function In(e,t){var r=e.prefix;if(!e.maskChar){for(;t.length>r.length&&Fn(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var n=r.length,o=t.length;o>=r.length;o--){var i=t[o];if(!Fn(e,o)&&Mn(e,o,i)){n=o+1;break}}return n}function Bn(e,t){return In(e,t)===e.mask.length}function An(e,t){var r=e.maskChar,n=e.mask,o=e.prefix;if(!r){for((t=Pn(e,"",t,0)).length<o.length&&(t=o);t.length<n.length&&Fn(e,t.length);)t+=n[t.length];return t}if(t)return Pn(e,An(e,""),t,0);for(var i=0;i<n.length;i++)Fn(e,i)?t+=n[i]:t+=r;return t}function Pn(e,t,r,n){var o=e.mask,i=e.maskChar,a=e.prefix,c=r.split(""),p=Bn(e,t);return!i&&n>t.length&&(t+=o.slice(t.length,n)),c.every(function(r){for(;s=r,Fn(e,l=n)&&s!==o[l];){if(n>=t.length&&(t+=o[n]),c=r,i&&Fn(e,n)&&c===i)return!0;if(++n>=o.length)return!1}var c,l,s;return!Mn(e,n,r)&&r!==i||(n<t.length?t=i||p||n<a.length?t.slice(0,n)+r+t.slice(n+1):(t=t.slice(0,n)+r+t.slice(n),An(e,t)):i||(t+=r),++n<o.length)}),t}function jn(e,t){for(var r=e.mask,n=t;n<r.length;++n)if(!Fn(e,n))return n;return null}function Nn(e){return e||0===e?e+"":""}function Tn(e){return"function"==typeof e}function Ln(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function Vn(e){return(Ln()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(e,1e3/60)})(e)}function qn(e){(Ln()||clearTimeout)(e)}var Rn=function(e){function t(t){var r=e.call(this,t)||this;r.focused=!1,r.mounted=!1,r.previousSelection=null,r.selectionDeferId=null,r.saveSelectionLoopDeferId=null,r.saveSelectionLoop=function(){r.previousSelection=r.getSelection(),r.saveSelectionLoopDeferId=Vn(r.saveSelectionLoop)},r.runSaveSelectionLoop=function(){null===r.saveSelectionLoopDeferId&&r.saveSelectionLoop()},r.stopSaveSelectionLoop=function(){null!==r.saveSelectionLoopDeferId&&(qn(r.saveSelectionLoopDeferId),r.saveSelectionLoopDeferId=null,r.previousSelection=null)},r.getInputDOMNode=function(){if(!r.mounted)return null;var e=c.findDOMNode(Cn(Cn(r))),t="undefined"!=typeof window&&e instanceof window.Element;if(e&&!t)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e},r.getInputValue=function(){var e=r.getInputDOMNode();return e?e.value:null},r.setInputValue=function(e){var t=r.getInputDOMNode();t&&(r.value=e,t.value=e)},r.setCursorToEnd=function(){var e=In(r.maskOptions,r.value),t=jn(r.maskOptions,e);null!==t&&r.setCursorPosition(t)},r.setSelection=function(e,t,n){void 0===n&&(n={});var o=r.getInputDOMNode(),i=r.isFocused();o&&i&&(n.deferred||Sn(o,e,t),null!==r.selectionDeferId&&qn(r.selectionDeferId),r.selectionDeferId=Vn(function(){r.selectionDeferId=null,Sn(o,e,t)}),r.previousSelection={start:e,end:t,length:Math.abs(t-e)})},r.getSelection=function(){return function(e){var t=0,r=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,r=e.selectionEnd;else{var n=document.selection.createRange();n.parentElement()===e&&(t=-n.moveStart("character",-e.value.length),r=-n.moveEnd("character",-e.value.length))}return{start:t,end:r,length:r-t}}(r.getInputDOMNode())},r.getCursorPosition=function(){return r.getSelection().start},r.setCursorPosition=function(e){r.setSelection(e,e)},r.isFocused=function(){return r.focused},r.getBeforeMaskedValueChangeConfig=function(){var e=r.maskOptions;return{mask:e.mask,maskChar:e.maskChar,permanents:e.permanents,alwaysShowMask:!!r.props.alwaysShowMask,formatChars:e.formatChars}},r.isInputAutofilled=function(e,t,n,o){var i=r.getInputDOMNode();try{if(i.matches(":-webkit-autofill"))return!0}catch(e){}return!r.focused||o.end<n.length&&t.end===e.length},r.onChange=function(e){var t=Cn(Cn(r)).beforePasteState,n=Cn(Cn(r)).previousSelection,o=r.props.beforeMaskedValueChange,i=r.getInputValue(),a=r.value,c=r.getSelection();r.isInputAutofilled(i,c,a,n)&&(a=An(r.maskOptions,""),n={start:0,end:0,length:0}),t&&(c={start:(n=t.selection).start+i.length,end:n.start+i.length,length:0},i=(a=t.value).slice(0,n.start)+i+a.slice(n.end),r.beforePasteState=null);var p=function(e,t,r,n,o){var i=e.mask,a=e.prefix,c=e.lastEditablePosition,p=t,l="",s=0,d=0,u=Math.min(o.start,r.start);return r.end>o.start?d=(s=function(e,t,r,n){var o=e.mask,i=e.maskChar,a=r.split(""),c=n;return a.every(function(t){for(;a=t,Fn(e,r=n)&&a!==o[r];)if(++n>=o.length)return!1;var r,a;return(Mn(e,n,t)||t===i)&&n++,n<o.length}),n-c}(e,0,l=p.slice(o.start,r.end),u))?o.length:0:p.length<n.length&&(d=n.length-p.length),p=n,d&&(1!==d||o.length||(u=o.start===r.start?jn(e,r.start):function(e,t){for(var r=t;0<=r;--r)if(!Fn(e,r))return r;return null}(e,r.start)),p=function(e,t,r,n){var o=r+n,i=e.maskChar,a=e.mask,c=e.prefix,p=t.split("");if(i)return p.map(function(t,n){return n<r||o<=n?t:Fn(e,n)?a[n]:i}).join("");for(var l=o;l<p.length;l++)Fn(e,l)&&(p[l]="");return r=Math.max(c.length,r),p.splice(r,o-r),t=p.join(""),An(e,t)}(e,p,u,d)),p=Pn(e,p,l,u),(u+=s)>=i.length?u=i.length:u<a.length&&!s?u=a.length:u>=a.length&&u<c&&s&&(u=jn(e,u)),l||(l=null),{value:p=An(e,p),enteredString:l,selection:{start:u,end:u}}}(r.maskOptions,i,c,a,n),l=p.enteredString,s=p.selection,d=p.value;if(Tn(o)){var u=o({value:d,selection:s},{value:a,selection:n},l,r.getBeforeMaskedValueChangeConfig());d=u.value,s=u.selection}r.setInputValue(d),Tn(r.props.onChange)&&r.props.onChange(e),r.isWindowsPhoneBrowser?r.setSelection(s.start,s.end,{deferred:!0}):r.setSelection(s.start,s.end)},r.onFocus=function(e){var t=r.props.beforeMaskedValueChange,n=r.maskOptions,o=n.mask,i=n.prefix;if(r.focused=!0,r.mounted=!0,o){if(r.value)In(r.maskOptions,r.value)<r.maskOptions.mask.length&&r.setCursorToEnd();else{var a=An(r.maskOptions,i),c=An(r.maskOptions,a),p=In(r.maskOptions,c),l=jn(r.maskOptions,p),s={start:l,end:l};if(Tn(t)){var d=t({value:c,selection:s},{value:r.value,selection:null},null,r.getBeforeMaskedValueChangeConfig());c=d.value,s=d.selection}var u=c!==r.getInputValue();u&&r.setInputValue(c),u&&Tn(r.props.onChange)&&r.props.onChange(e),r.setSelection(s.start,s.end)}r.runSaveSelectionLoop()}Tn(r.props.onFocus)&&r.props.onFocus(e)},r.onBlur=function(e){var t=r.props.beforeMaskedValueChange,n=r.maskOptions.mask;if(r.stopSaveSelectionLoop(),r.focused=!1,n&&!r.props.alwaysShowMask&&Dn(r.maskOptions,r.value)){var o="";Tn(t)&&(o=t({value:o,selection:null},{value:r.value,selection:r.previousSelection},null,r.getBeforeMaskedValueChangeConfig()).value);var i=o!==r.getInputValue();i&&r.setInputValue(o),i&&Tn(r.props.onChange)&&r.props.onChange(e)}Tn(r.props.onBlur)&&r.props.onBlur(e)},r.onMouseDown=function(e){!r.focused&&document.addEventListener&&(r.mouseDownX=e.clientX,r.mouseDownY=e.clientY,r.mouseDownTime=(new Date).getTime(),document.addEventListener("mouseup",function e(t){if(document.removeEventListener("mouseup",e),r.focused){var n=Math.abs(t.clientX-r.mouseDownX),o=Math.abs(t.clientY-r.mouseDownY),i=Math.max(n,o),a=(new Date).getTime()-r.mouseDownTime;(i<=10&&a<=200||i<=5&&a<=300)&&r.setCursorToEnd()}})),Tn(r.props.onMouseDown)&&r.props.onMouseDown(e)},r.onPaste=function(e){Tn(r.props.onPaste)&&r.props.onPaste(e),e.defaultPrevented||(r.beforePasteState={value:r.getInputValue(),selection:r.getSelection()},r.setInputValue(""))},r.handleRef=function(e){null==r.props.children&&Tn(r.props.inputRef)&&r.props.inputRef(e)};var n=t.alwaysShowMask,o=t.beforeMaskedValueChange,i=t.defaultValue,a=t.value;r.maskOptions=$n(t.mask,t.maskChar,t.formatChars),null==i&&(i=""),null==a&&(a=i);var p=Nn(a);if(r.maskOptions.mask&&(n||p)&&(p=An(r.maskOptions,p),Tn(o))){var l=t.value;null==t.value&&(l=i),p=o({value:p,selection:null},{value:l=Nn(l),selection:null},null,r.getBeforeMaskedValueChangeConfig()).value}return r.value=p,r}!function(e,t){e.prototype=Object.create(t.prototype),function(e,t){for(var r=Object.getOwnPropertyNames(t),n=0;n<r.length;n++){var o=r[n],i=Object.getOwnPropertyDescriptor(t,o);i&&i.configurable&&void 0===e[o]&&Object.defineProperty(e,o,i)}}(e.prototype.constructor=e,t)}(t,e);var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=function(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),r=navigator.userAgent;return e.test(r)&&t.test(r)}(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},r.componentDidUpdate=function(){var e=this.previousSelection,t=this.props,r=t.beforeMaskedValueChange,n=t.mask,o=t.maskChar,i=t.formatChars,a=this.maskOptions,c=t.alwaysShowMask||this.isFocused(),p=null!=this.props.value,l=p?Nn(this.props.value):this.value,s=e?e.start:null;if(this.maskOptions=$n(n,o,i),this.maskOptions.mask){!a.mask&&this.isFocused()&&this.runSaveSelectionLoop();var d=this.maskOptions.mask&&this.maskOptions.mask!==a.mask;if(a.mask||p||(l=this.getInputValue()),(d||this.maskOptions.mask&&(l||c))&&(l=An(this.maskOptions,l)),d){var u=In(this.maskOptions,l);(null===s||u<s)&&(s=Bn(this.maskOptions,l)?u:jn(this.maskOptions,u))}!this.maskOptions.mask||!Dn(this.maskOptions,l)||c||p&&this.props.value||(l="");var m={start:s,end:s};if(Tn(r)){var f=r({value:l,selection:m},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());l=f.value,m=f.selection}this.value=l;var h=this.getInputValue()!==this.value;h?(this.setInputValue(this.value),this.forceUpdate()):d&&this.forceUpdate();var g=!1;null!=m.start&&null!=m.end&&(g=!e||e.start!==m.start||e.end!==m.end),(g||h)&&this.setSelection(m.start,m.end)}else a.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},r.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&qn(this.selectionDeferId),this.stopSaveSelectionLoop()},r.render=function(){var e,t=this.props,r=t.children,n=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)0<=t.indexOf(r=i[n])||(o[r]=e[r]);return o}(t,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(r){Tn(r)||On(!1);var o=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],i=En({},n);o.forEach(function(e){return delete i[e]}),e=r(i),o.filter(function(t){return null!=e.props[t]&&e.props[t]!==n[t]}).length&&On(!1)}else e=_n.createElement("input",En({ref:this.handleRef},n));var a={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(n.disabled||n.readOnly||(a.onChange=this.onChange,a.onPaste=this.onPaste,a.onMouseDown=this.onMouseDown),null!=n.value&&(a.value=this.value)),e=_n.cloneElement(e,a)},t}(_n.Component),Un=function(){};if("production"!==process.env.NODE_ENV){var Wn=function(e,t){var r=arguments.length;t=new Array(r>1?r-1:0);for(var n=1;n<r;n++)t[n-1]=arguments[n];var o=0,i="Warning: "+e.replace(/%s/g,function(){return t[o++]});"undefined"!=typeof console&&console.error(i);try{throw new Error(i)}catch(e){}};Un=function(e,t,r){var n=arguments.length;r=new Array(n>2?n-2:0);for(var o=2;o<n;o++)r[o-2]=arguments[o];if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");e||Wn.apply(null,[t].concat(r))}}var Hn=Un;function Xn(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var Yn=Xn(e),Zn=Xn(function(e,t,r,n,o,i,a,c){if("production"!==process.env.NODE_ENV&&void 0===t)throw new Error("invariant requires an error message argument");if(!e){var p;if(void 0===t)p=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,n,o,i,a,c],s=0;(p=new Error(t.replace(/%s/g,function(){return l[s++]}))).name="Invariant Violation"}throw p.framesToPop=1,p}}),Jn=Xn(Hn);function Kn(){return(Kn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Gn(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Qn(e,t,r){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=r;else{var n=e.createTextRange();n.collapse(!0),n.moveStart("character",t),n.moveEnd("character",r-t),n.select()}}var eo={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function to(e,t,r){var n="",o="",i=null,a=[];if(void 0===t&&(t="_"),null==r&&(r=eo),!e||"string"!=typeof e)return{maskChar:t,formatChars:r,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var c=!1;return e.split("").forEach(function(e){c||"\\"!==e?(c||!r[e]?(a.push(n.length),n.length===a.length-1&&(o+=e)):i=n.length+1,n+=e,c=!1):c=!0}),{maskChar:t,formatChars:r,prefix:o,mask:n,lastEditablePosition:i,permanents:a}}function ro(e,t){return-1!==e.permanents.indexOf(t)}function no(e,t,r){var n=e.mask,o=e.formatChars;return!!r&&(ro(e,t)?n[t]===r:new RegExp(o[n[t]]).test(r))}function oo(e,t){return t.split("").every(function(t,r){return ro(e,r)||!no(e,r,t)})}function io(e,t){var r=e.prefix;if(!e.maskChar){for(;t.length>r.length&&ro(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var n=r.length,o=t.length;o>=r.length;o--){var i=t[o];if(!ro(e,o)&&no(e,o,i)){n=o+1;break}}return n}function ao(e,t){return io(e,t)===e.mask.length}function co(e,t){var r=e.maskChar,n=e.mask,o=e.prefix;if(!r){for((t=po(e,"",t,0)).length<o.length&&(t=o);t.length<n.length&&ro(e,t.length);)t+=n[t.length];return t}if(t)return po(e,co(e,""),t,0);for(var i=0;i<n.length;i++)ro(e,i)?t+=n[i]:t+=r;return t}function po(e,t,r,n){var o=e.mask,i=e.maskChar,a=e.prefix,c=r.split(""),p=ao(e,t),l=function(t,r){return!i||!ro(e,r)||t!==i};return!i&&n>t.length&&(t+=o.slice(t.length,n)),c.every(function(r){for(;s=r,ro(e,c=n)&&s!==o[c];){if(n>=t.length&&(t+=o[n]),!l(r,n))return!0;if(++n>=o.length)return!1}var c,s;return!no(e,n,r)&&r!==i||(n<t.length?i||p||n<a.length?t=t.slice(0,n)+r+t.slice(n+1):(t=t.slice(0,n)+r+t.slice(n),t=co(e,t)):i||(t+=r),++n<o.length)}),t}function lo(e,t){for(var r=e.mask,n=t;n<r.length;++n)if(!ro(e,n))return n;return null}function so(e){return e||0===e?e+"":""}function uo(e){return"function"==typeof e}function mo(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function fo(e){return(mo()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(e,1e3/60)})(e)}function ho(e){(mo()||clearTimeout)(e)}var go=function(e){function t(t){var r;(r=e.call(this,t)||this).focused=!1,r.mounted=!1,r.previousSelection=null,r.selectionDeferId=null,r.saveSelectionLoopDeferId=null,r.saveSelectionLoop=function(){r.previousSelection=r.getSelection(),r.saveSelectionLoopDeferId=fo(r.saveSelectionLoop)},r.runSaveSelectionLoop=function(){null===r.saveSelectionLoopDeferId&&r.saveSelectionLoop()},r.stopSaveSelectionLoop=function(){null!==r.saveSelectionLoopDeferId&&(ho(r.saveSelectionLoopDeferId),r.saveSelectionLoopDeferId=null,r.previousSelection=null)},r.getInputDOMNode=function(){if(!r.mounted)return null;var e=c.findDOMNode(Gn(Gn(r))),t="undefined"!=typeof window&&e instanceof window.Element;if(e&&!t)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e},r.getInputValue=function(){var e=r.getInputDOMNode();return e?e.value:null},r.setInputValue=function(e){var t=r.getInputDOMNode();t&&(r.value=e,t.value=e)},r.setCursorToEnd=function(){var e=io(r.maskOptions,r.value),t=lo(r.maskOptions,e);null!==t&&r.setCursorPosition(t)},r.setSelection=function(e,t,n){void 0===n&&(n={});var o=r.getInputDOMNode(),i=r.isFocused();o&&i&&(n.deferred||Qn(o,e,t),null!==r.selectionDeferId&&ho(r.selectionDeferId),r.selectionDeferId=fo(function(){r.selectionDeferId=null,Qn(o,e,t)}),r.previousSelection={start:e,end:t,length:Math.abs(t-e)})},r.getSelection=function(){return function(e){var t=0,r=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,r=e.selectionEnd;else{var n=document.selection.createRange();n.parentElement()===e&&(t=-n.moveStart("character",-e.value.length),r=-n.moveEnd("character",-e.value.length))}return{start:t,end:r,length:r-t}}(r.getInputDOMNode())},r.getCursorPosition=function(){return r.getSelection().start},r.setCursorPosition=function(e){r.setSelection(e,e)},r.isFocused=function(){return r.focused},r.getBeforeMaskedValueChangeConfig=function(){var e=r.maskOptions;return{mask:e.mask,maskChar:e.maskChar,permanents:e.permanents,alwaysShowMask:!!r.props.alwaysShowMask,formatChars:e.formatChars}},r.isInputAutofilled=function(e,t,n,o){var i=r.getInputDOMNode();try{if(i.matches(":-webkit-autofill"))return!0}catch(e){}return!r.focused||o.end<n.length&&t.end===e.length},r.onChange=function(e){var t=Gn(Gn(r)).beforePasteState,n=Gn(Gn(r)).previousSelection,o=r.props.beforeMaskedValueChange,i=r.getInputValue(),a=r.value,c=r.getSelection();r.isInputAutofilled(i,c,a,n)&&(a=co(r.maskOptions,""),n={start:0,end:0,length:0}),t&&(c={start:(n=t.selection).start+i.length,end:n.start+i.length,length:0},i=(a=t.value).slice(0,n.start)+i+a.slice(n.end),r.beforePasteState=null);var p=function(e,t,r,n,o){var i=e.mask,a=e.prefix,c=e.lastEditablePosition,p=t,l="",s=0,d=0,u=Math.min(o.start,r.start);return r.end>o.start?d=(s=function(e,t,r,n){var o=e.mask,i=e.maskChar,a=r.split(""),c=n;return a.every(function(t){for(;a=t,ro(e,r=n)&&a!==o[r];)if(++n>=o.length)return!1;var r,a;return(no(e,n,t)||t===i)&&n++,n<o.length}),n-c}(e,0,l=p.slice(o.start,r.end),u))?o.length:0:p.length<n.length&&(d=n.length-p.length),p=n,d&&(1!==d||o.length||(u=o.start===r.start?lo(e,r.start):function(e,t){for(var r=t;r>=0;--r)if(!ro(e,r))return r;return null}(e,r.start)),p=function(e,t,r,n){var o=r+n,i=e.maskChar,a=e.mask,c=e.prefix,p=t.split("");if(!i){for(var l=o;l<p.length;l++)ro(e,l)&&(p[l]="");return r=Math.max(c.length,r),p.splice(r,o-r),t=p.join(""),co(e,t)}return p.map(function(t,n){return n<r||n>=o?t:ro(e,n)?a[n]:i}).join("")}(e,p,u,d)),p=po(e,p,l,u),(u+=s)>=i.length?u=i.length:u<a.length&&!s?u=a.length:u>=a.length&&u<c&&s&&(u=lo(e,u)),l||(l=null),{value:p=co(e,p),enteredString:l,selection:{start:u,end:u}}}(r.maskOptions,i,c,a,n),l=p.enteredString,s=p.selection,d=p.value;if(uo(o)){var u=o({value:d,selection:s},{value:a,selection:n},l,r.getBeforeMaskedValueChangeConfig());d=u.value,s=u.selection}r.setInputValue(d),uo(r.props.onChange)&&r.props.onChange(e),r.isWindowsPhoneBrowser?r.setSelection(s.start,s.end,{deferred:!0}):r.setSelection(s.start,s.end)},r.onFocus=function(e){var t=r.props.beforeMaskedValueChange,n=r.maskOptions,o=n.mask,i=n.prefix;if(r.focused=!0,r.mounted=!0,o){if(r.value)io(r.maskOptions,r.value)<r.maskOptions.mask.length&&r.setCursorToEnd();else{var a=co(r.maskOptions,i),c=co(r.maskOptions,a),p=io(r.maskOptions,c),l=lo(r.maskOptions,p),s={start:l,end:l};if(uo(t)){var d=t({value:c,selection:s},{value:r.value,selection:null},null,r.getBeforeMaskedValueChangeConfig());c=d.value,s=d.selection}var u=c!==r.getInputValue();u&&r.setInputValue(c),u&&uo(r.props.onChange)&&r.props.onChange(e),r.setSelection(s.start,s.end)}r.runSaveSelectionLoop()}uo(r.props.onFocus)&&r.props.onFocus(e)},r.onBlur=function(e){var t=r.props.beforeMaskedValueChange,n=r.maskOptions.mask;if(r.stopSaveSelectionLoop(),r.focused=!1,n&&!r.props.alwaysShowMask&&oo(r.maskOptions,r.value)){var o="";uo(t)&&(o=t({value:o,selection:null},{value:r.value,selection:r.previousSelection},null,r.getBeforeMaskedValueChangeConfig()).value);var i=o!==r.getInputValue();i&&r.setInputValue(o),i&&uo(r.props.onChange)&&r.props.onChange(e)}uo(r.props.onBlur)&&r.props.onBlur(e)},r.onMouseDown=function(e){!r.focused&&document.addEventListener&&(r.mouseDownX=e.clientX,r.mouseDownY=e.clientY,r.mouseDownTime=(new Date).getTime(),document.addEventListener("mouseup",function e(t){if(document.removeEventListener("mouseup",e),r.focused){var n=Math.abs(t.clientX-r.mouseDownX),o=Math.abs(t.clientY-r.mouseDownY),i=Math.max(n,o),a=(new Date).getTime()-r.mouseDownTime;(i<=10&&a<=200||i<=5&&a<=300)&&r.setCursorToEnd()}})),uo(r.props.onMouseDown)&&r.props.onMouseDown(e)},r.onPaste=function(e){uo(r.props.onPaste)&&r.props.onPaste(e),e.defaultPrevented||(r.beforePasteState={value:r.getInputValue(),selection:r.getSelection()},r.setInputValue(""))},r.handleRef=function(e){null==r.props.children&&uo(r.props.inputRef)&&r.props.inputRef(e)};var n=t.alwaysShowMask,o=t.beforeMaskedValueChange,i=t.defaultValue,a=t.value;r.maskOptions=to(t.mask,t.maskChar,t.formatChars),null==i&&(i=""),null==a&&(a=i);var p=so(a);if(r.maskOptions.mask&&(n||p)&&(p=co(r.maskOptions,p),uo(o))){var l=t.value;null==t.value&&(l=i),p=o({value:p,selection:null},{value:l=so(l),selection:null},null,r.getBeforeMaskedValueChangeConfig()).value}return r.value=p,r}var r,n;n=e,(r=t).prototype=Object.create(n.prototype),r.prototype.constructor=r,function(e,t){for(var r=Object.getOwnPropertyNames(t),n=0;n<r.length;n++){var o=r[n],i=Object.getOwnPropertyDescriptor(t,o);i&&i.configurable&&void 0===e[o]&&Object.defineProperty(e,o,i)}}(r,n);var o=t.prototype;return o.componentDidMount=function(){var e,t,r;this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=(e=new RegExp("windows","i"),t=new RegExp("phone","i"),r=navigator.userAgent,e.test(r)&&t.test(r)),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},o.componentDidUpdate=function(){var e=this.previousSelection,t=this.props,r=t.beforeMaskedValueChange,n=t.mask,o=t.maskChar,i=t.formatChars,a=this.maskOptions,c=t.alwaysShowMask||this.isFocused(),p=null!=this.props.value,l=p?so(this.props.value):this.value,s=e?e.start:null;if(this.maskOptions=to(n,o,i),this.maskOptions.mask){!a.mask&&this.isFocused()&&this.runSaveSelectionLoop();var d=this.maskOptions.mask&&this.maskOptions.mask!==a.mask;if(a.mask||p||(l=this.getInputValue()),(d||this.maskOptions.mask&&(l||c))&&(l=co(this.maskOptions,l)),d){var u=io(this.maskOptions,l);(null===s||u<s)&&(s=ao(this.maskOptions,l)?u:lo(this.maskOptions,u))}!this.maskOptions.mask||!oo(this.maskOptions,l)||c||p&&this.props.value||(l="");var m={start:s,end:s};if(uo(r)){var f=r({value:l,selection:m},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());l=f.value,m=f.selection}this.value=l;var h=this.getInputValue()!==this.value;h?(this.setInputValue(this.value),this.forceUpdate()):d&&this.forceUpdate();var g=!1;null!=m.start&&null!=m.end&&(g=!e||e.start!==m.start||e.end!==m.end),(g||h)&&this.setSelection(m.start,m.end)}else a.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},o.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&ho(this.selectionDeferId),this.stopSaveSelectionLoop()},o.render=function(){var e,t=this.props,r=t.mask,n=t.maskChar,o=t.formatChars,i=t.inputRef,a=t.children,c=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}(t,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if("production"!==process.env.NODE_ENV&&Jn(!c.maxLength||!to(r,n,o).mask,"react-input-mask: maxLength property shouldn't be passed to the masked input. It breaks masking and unnecessary because length is limited by the mask length."),a){uo(a)||("production"!==process.env.NODE_ENV?Zn(!1,"react-input-mask: children must be a function"):Zn(!1));var p=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],l=Kn({},c);p.forEach(function(e){return delete l[e]}),e=a(l);var s=p.filter(function(t){return null!=e.props[t]&&e.props[t]!==c[t]});s.length&&("production"!==process.env.NODE_ENV?Zn(!1,"react-input-mask: the following props should be passed to the react-input-mask's component and should not be altered in children's function: "+s.join(", ")):Zn(!1)),"production"!==process.env.NODE_ENV&&Jn(!i,"react-input-mask: inputRef is ignored when children is passed, attach ref to the children instead")}else e=Yn.createElement("input",Kn({ref:this.handleRef},c));var d={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(c.disabled||c.readOnly||(d.onChange=this.onChange,d.onPaste=this.onPaste,d.onMouseDown=this.onMouseDown),null!=c.value&&(d.value=this.value)),e=Yn.cloneElement(e,d)},t}(Yn.Component),bo=Q(function(e){e.exports="production"===process.env.NODE_ENV?Rn:go});const xo=({labelColor:t,label:r,brand:n,...o})=>{const i=e.forwardRef((t,r)=>e.createElement(bo,{ref:r,mask:"99/99/9999",onClick:t.onClick,value:t.value,readOnly:o.readOnly,onChange:t.onChange,placeholder:o.placeholderText}));return e.createElement(yn,{brand:n,labelColor:t},r&&e.createElement("span",null,r),e.createElement("div",null,e.createElement(a,Object.assign({},o,{locale:"pt-BR",customInput:e.createElement(i,{onClick:o.onCalendarOpen,value:o.value,onChange:o.onChange}),dateFormat:"dd/MM/yyyy",readOnly:!1,onChangeRaw:e=>o.readOnly?e.preventDefault():null}))))};export{Kr as Accordion,St as ButtonMain,xo as Calendar,vn as Card,Br as Checkbox,jt as Dialog,qr as Dropdown,Rr as DropdownForm,Xt as InputLine,Yt as InputLineForm,Ot as Loader,hr as Modal,fn as MoreLess,Tr as Radio,sn as Selection,$r as TextArea,Fr as TextAreaForm};
//# sourceMappingURL=index.modern.js.map

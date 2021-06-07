<<<<<<< HEAD
import"semantic-ui-css/semantic.min.css";import e,{useState as t,useEffect as r}from"react";import n,{css as o}from"styled-components";import{Dropdown as i,Table as a,TableRow as l,TableHeader as c,TableHeaderCell as d,TableBody as s,TableCell as p,TableFooter as u,Pagination as m,Icon as f}from"semantic-ui-react";import b from"react-datepicker";import h from"react-dom";
/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){g(e,t,r[t])})}return e}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(n=(a=l.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v={},k={};try{"undefined"!=typeof window&&(v=window),"undefined"!=typeof document&&(k=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&performance}catch(me){}var y=(v.navigator||{}).userAgent,_=void 0===y?"":y,E=v,C=k,S=!!C.documentElement&&!!C.head&&"function"==typeof C.addEventListener&&"function"==typeof C.createElement,O=(~_.indexOf("MSIE")||_.indexOf("Trident/"),function(){try{process}catch(e){return!1}}(),"group"),$=E.FontAwesomeConfig||{};C&&"function"==typeof C.querySelector&&[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(e){var t=w(e,2),r=t[1],n=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=C.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(t[0]));null!=n&&($[r]=n)});var z=x({},{familyPrefix:"fa",replacementClass:"svg-inline--fa",autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},$);z.autoReplaceSvg||(z.observeMutations=!1);var F=x({},z);E.FontAwesomeConfig=F;var M=E||{};M.___FONT_AWESOME___||(M.___FONT_AWESOME___={}),M.___FONT_AWESOME___.styles||(M.___FONT_AWESOME___.styles={}),M.___FONT_AWESOME___.hooks||(M.___FONT_AWESOME___.hooks={}),M.___FONT_AWESOME___.shims||(M.___FONT_AWESOME___.shims=[]);var D=M.___FONT_AWESOME___,B=[];S&&((C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState)||C.addEventListener("DOMContentLoaded",function e(){C.removeEventListener("DOMContentLoaded",e),B.map(function(e){return e()})})),"undefined"==typeof setImmediate?setTimeout:setImmediate;var I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function P(){for(var e=12,t="";e-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function A(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function T(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,": ").concat(e[r],";")},"")}function N(e){return e.size!==I.size||e.x!==I.x||e.y!==I.y||e.rotate!==I.rotate||e.flipX||e.flipY}function j(e){var t=e.transform,r=e.iconWidth,n={transform:"translate(".concat(e.containerWidth/2," 256)")},o="translate(".concat(32*t.x,", ").concat(32*t.y,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)");return{outer:n,inner:{transform:"".concat(o," ").concat(i," ").concat(a)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}var L={x:0,y:0,width:"100%",height:"100%"};function V(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function R(e){var t=e.icons,r=t.main,n=t.mask,o=e.prefix,i=e.iconName,a=e.transform,l=e.symbol,c=e.title,d=e.maskId,s=e.titleId,p=e.extra,u=e.watchable,m=void 0!==u&&u,f=n.found?n:r,b=f.width,h=f.height,g="fak"===o,w=g?"":"fa-w-".concat(Math.ceil(b/h*16)),v=[F.replacementClass,i?"".concat(F.familyPrefix,"-").concat(i):"",w].filter(function(e){return-1===p.classes.indexOf(e)}).filter(function(e){return""!==e||!!e}).concat(p.classes).join(" "),k={children:[],attributes:x({},p.attributes,{"data-prefix":o,"data-icon":i,class:v,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(h)})},y=g&&!~p.classes.indexOf("fa-fw")?{width:"".concat(b/h*16*.0625,"em")}:{};m&&(k.attributes["data-fa-i2svg"]=""),c&&k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(s||P())},children:[c]});var _=x({},k,{prefix:o,iconName:i,main:r,mask:n,maskId:d,transform:a,symbol:l,styles:x({},y,p.styles)}),E=n.found&&r.found?function(e){var t,r=e.children,n=e.attributes,o=e.main,i=e.mask,a=e.maskId,l=o.icon,c=i.icon,d=j({transform:e.transform,containerWidth:i.width,iconWidth:o.width}),s={tag:"rect",attributes:x({},L,{fill:"white"})},p=l.children?{children:l.children.map(V)}:{},u={tag:"g",attributes:x({},d.inner),children:[V(x({tag:l.tag,attributes:x({},l.attributes,d.path)},p))]},m={tag:"g",attributes:x({},d.outer),children:[u]},f="mask-".concat(a||P()),b="clip-".concat(a||P()),h={tag:"mask",attributes:x({},L,{id:f,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[s,m]},g={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:(t=c,"g"===t.tag?t.children:[t])},h]};return r.push(g,{tag:"rect",attributes:x({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(f,")")},L)}),{children:r,attributes:n}}(_):function(e){var t=e.children,r=e.attributes,n=e.main,o=e.transform,i=T(e.styles);if(i.length>0&&(r.style=i),N(o)){var a=j({transform:o,containerWidth:n.width,iconWidth:n.width});t.push({tag:"g",attributes:x({},a.outer),children:[{tag:"g",attributes:x({},a.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:x({},n.icon.attributes,a.path)}]}]})}else t.push(n.icon);return{children:t,attributes:r}}(_),C=E.attributes;return _.children=E.children,_.attributes=C,l?function(e){var t=e.iconName,r=e.children,n=e.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:x({},e.attributes,{id:!0===n?"".concat(e.prefix,"-").concat(F.familyPrefix,"-").concat(t):n}),children:r}]}]}(_):function(e){var t=e.children,r=e.main,n=e.mask,o=e.attributes,i=e.styles,a=e.transform;if(N(a)&&r.found&&!n.found){var l={x:r.width/r.height/2,y:.5};o.style=T(x({},i,{"transform-origin":"".concat(l.x+a.x/16,"em ").concat(l.y+a.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}(_)}var q=function(e,t,r,n){var o,i,a,l=Object.keys(e),c=l.length,d=void 0!==n?function(e,t){return function(r,n,o,i){return e.call(t,r,n,o,i)}}(t,n):t;for(void 0===r?(o=1,a=e[l[0]]):(o=0,a=r);o<c;o++)a=d(a,e[i=l[o]],i,e);return a};function U(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.skipHooks,o=void 0!==n&&n,i=Object.keys(t).reduce(function(e,r){var n=t[r];return n.icon?e[n.iconName]=n.icon:e[r]=n,e},{});"function"!=typeof D.hooks.addPack||o?D.styles[e]=x({},D.styles[e]||{},i):D.hooks.addPack(e,i),"fas"===e&&U("fa",t)}var W=D.styles,H=D.shims,X=function(){var e=function(e){return q(W,function(t,r,n){return t[n]=q(r,e,{}),t},{})};e(function(e,t,r){return t[3]&&(e[t[3]]=r),e}),e(function(e,t,r){var n=t[2];return e[r]=r,n.forEach(function(t){e[t]=r}),e});var t="far"in W;q(H,function(e,r){var n=r[1];return"far"!==n||t||(n="fas"),e[r[0]]={prefix:n,iconName:r[2]},e},{})};function Y(e,t,r){if(e&&e[t]&&e[t][r])return{prefix:t,iconName:r,icon:e[t][r]}}function Z(e){var t=e.tag,r=e.attributes,n=void 0===r?{}:r,o=e.children,i=void 0===o?[]:o;return"string"==typeof e?A(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,'="').concat(A(e[r]),'" ')},"").trim()}(n),">").concat(i.map(Z).join(""),"</").concat(t,">")}function G(e){this.name="MissingIcon",this.message=e||"Icon unavailable",this.stack=(new Error).stack}X(),(G.prototype=Object.create(Error.prototype)).constructor=G;var J={fill:"currentColor"},K={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},Q=(x({},J,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}),x({},K,{attributeName:"opacity"}));function ee(e){var t=e[0],r=e[1],n=w(e.slice(4),1)[0];return{found:!0,width:t,height:r,icon:Array.isArray(n)?{tag:"g",attributes:{class:"".concat(F.familyPrefix,"-").concat(O)},children:[{tag:"path",attributes:{class:"".concat(F.familyPrefix,"-").concat("secondary"),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(F.familyPrefix,"-").concat("primary"),fill:"currentColor",d:n[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:n}}}}function te(){F.autoAddCss&&!ae&&(function(e){if(e&&S){var t=C.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var r=C.head.childNodes,n=null,o=r.length-1;o>-1;o--){var i=r[o],a=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(n=i)}C.head.insertBefore(t,n)}}(function(){var e="svg-inline--fa",t=F.familyPrefix,r=F.replacementClass,n='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';if("fa"!==t||r!==e){var o=new RegExp("\\.".concat("fa","\\-"),"g"),i=new RegExp("\\--".concat("fa","\\-"),"g"),a=new RegExp("\\.".concat(e),"g");n=n.replace(o,".".concat(t,"-")).replace(i,"--".concat(t,"-")).replace(a,".".concat(r))}return n}()),ae=!0)}function re(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return Z(e)})}}),Object.defineProperty(e,"node",{get:function(){if(S){var t=C.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function ne(e){var t=e.prefix,r=void 0===t?"fa":t,n=e.iconName;if(n)return Y(ie.definitions,r,n)||Y(D.styles,r,n)}x({},J,{cx:"256",cy:"364",r:"28"}),x({},K,{attributeName:"r",values:"28;14;28;28;14;28;"}),x({},Q,{values:"1;0;1;1;0;1;"}),x({},J,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),x({},Q,{values:"1;0;0;0;0;1;"}),x({},J,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),x({},Q,{values:"0;0;1;1;0;0;"});var oe,ie=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}}var t;return(t=[{key:"add",value:function(){for(var e=this,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(t){e.definitions[t]=x({},e.definitions[t]||{},o[t]),U(t,o[t]),X()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var r=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(r).map(function(t){var n=r[t],o=n.prefix,i=n.iconName,a=n.icon;e[o]||(e[o]={}),e[o][i]=a}),e}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,t),e}()),ae=!1,le={transform:function(e){return function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e?e.toLowerCase().split(" ").reduce(function(e,t){var r=t.toLowerCase().split("-"),n=r[0],o=r.slice(1).join("-");if(n&&"h"===o)return e.flipX=!0,e;if(n&&"v"===o)return e.flipY=!0,e;if(o=parseFloat(o),isNaN(o))return e;switch(n){case"grow":e.size=e.size+o;break;case"shrink":e.size=e.size-o;break;case"left":e.x=e.x-o;break;case"right":e.x=e.x+o;break;case"up":e.y=e.y-o;break;case"down":e.y=e.y+o;break;case"rotate":e.rotate=e.rotate+o}return e},t):t}(e)}},ce=(oe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.transform,n=void 0===r?I:r,o=t.symbol,i=void 0!==o&&o,a=t.mask,l=void 0===a?null:a,c=t.maskId,d=void 0===c?null:c,s=t.title,p=void 0===s?null:s,u=t.titleId,m=void 0===u?null:u,f=t.classes,b=void 0===f?[]:f,h=t.attributes,g=void 0===h?{}:h,w=t.styles,v=void 0===w?{}:w;if(e){var k=e.prefix,y=e.iconName,_=e.icon;return re(x({type:"icon"},e),function(){return te(),F.autoA11y&&(p?g["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(m||P()):(g["aria-hidden"]="true",g.focusable="false")),R({icons:{main:ee(_),mask:l?ee(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:y,transform:x({},I,n),symbol:i,title:p,maskId:d,titleId:m,extra:{attributes:g,styles:v,classes:b}})})}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(e||{}).icon?e:ne(e||{}),n=t.mask;return n&&(n=(n||{}).icon?n:ne(n||{})),oe(r,x({},t,{mask:n}))});function de(e,t){return e(t={exports:{}},t.exports),t.exports
=======
import"semantic-ui-css/semantic.min.css";import n,{useState as e,useEffect as t}from"react";import r,{css as o}from"styled-components";import{Dropdown as i,Table as a,TableRow as l,TableHeader as d,TableHeaderCell as c,TableBody as p,TableCell as s,TableFooter as u,Pagination as m,Icon as b}from"semantic-ui-react";import f,{registerLocale as h}from"react-datepicker";import g from"react-dom";import w from"date-fns/locale/pt-BR";function x(){return(x=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function v(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e.indexOf(t=i[r])>=0||(o[t]=n[t]);return o}function k(n,e){return e||(e=n.slice(0)),n.raw=e,n}
/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function y(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function _(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.forEach(function(e){y(n,e,t[e])})}return n}function E(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var a,l=n[Symbol.iterator]();!(r=(a=l.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var S={},C={};try{"undefined"!=typeof window&&(S=window),"undefined"!=typeof document&&(C=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&performance}catch(xn){}var z=(S.navigator||{}).userAgent,O=void 0===z?"":z,M=S,F=C,I=!!F.documentElement&&!!F.head&&"function"==typeof F.addEventListener&&"function"==typeof F.createElement,D=(~O.indexOf("MSIE")||O.indexOf("Trident/"),function(){try{process}catch(n){return!1}}(),"group"),B=M.FontAwesomeConfig||{};F&&"function"==typeof F.querySelector&&[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(n){var e=E(n,2),t=e[1],r=function(n){return""===n||"false"!==n&&("true"===n||n)}(function(n){var e=F.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}(e[0]));null!=r&&(B[t]=r)});var P=_({},{familyPrefix:"fa",replacementClass:"svg-inline--fa",autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},B);P.autoReplaceSvg||(P.observeMutations=!1);var A=_({},P);M.FontAwesomeConfig=A;var T=M||{};T.___FONT_AWESOME___||(T.___FONT_AWESOME___={}),T.___FONT_AWESOME___.styles||(T.___FONT_AWESOME___.styles={}),T.___FONT_AWESOME___.hooks||(T.___FONT_AWESOME___.hooks={}),T.___FONT_AWESOME___.shims||(T.___FONT_AWESOME___.shims=[]);var j=T.___FONT_AWESOME___,N=[];I&&((F.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(F.readyState)||F.addEventListener("DOMContentLoaded",function n(){F.removeEventListener("DOMContentLoaded",n),N.map(function(n){return n()})})),"undefined"==typeof setImmediate?setTimeout:setImmediate;var L={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function V(){for(var n=12,e="";n-- >0;)e+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return e}function R(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function q(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(n[t],";")},"")}function U(n){return n.size!==L.size||n.x!==L.x||n.y!==L.y||n.rotate!==L.rotate||n.flipX||n.flipY}function $(n){var e=n.transform,t=n.iconWidth,r={transform:"translate(".concat(n.containerWidth/2," 256)")},o="translate(".concat(32*e.x,", ").concat(32*e.y,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)");return{outer:r,inner:{transform:"".concat(o," ").concat(i," ").concat(a)},path:{transform:"translate(".concat(t/2*-1," -256)")}}}var H={x:0,y:0,width:"100%",height:"100%"};function W(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function X(n){var e=n.icons,t=e.main,r=e.mask,o=n.prefix,i=n.iconName,a=n.transform,l=n.symbol,d=n.title,c=n.maskId,p=n.titleId,s=n.extra,u=n.watchable,m=void 0!==u&&u,b=r.found?r:t,f=b.width,h=b.height,g="fak"===o,w=g?"":"fa-w-".concat(Math.ceil(f/h*16)),x=[A.replacementClass,i?"".concat(A.familyPrefix,"-").concat(i):"",w].filter(function(n){return-1===s.classes.indexOf(n)}).filter(function(n){return""!==n||!!n}).concat(s.classes).join(" "),v={children:[],attributes:_({},s.attributes,{"data-prefix":o,"data-icon":i,class:x,role:s.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(h)})},k=g&&!~s.classes.indexOf("fa-fw")?{width:"".concat(f/h*16*.0625,"em")}:{};m&&(v.attributes["data-fa-i2svg"]=""),d&&v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(p||V())},children:[d]});var y=_({},v,{prefix:o,iconName:i,main:t,mask:r,maskId:c,transform:a,symbol:l,styles:_({},k,s.styles)}),E=r.found&&t.found?function(n){var e,t=n.children,r=n.attributes,o=n.main,i=n.mask,a=n.maskId,l=o.icon,d=i.icon,c=$({transform:n.transform,containerWidth:i.width,iconWidth:o.width}),p={tag:"rect",attributes:_({},H,{fill:"white"})},s=l.children?{children:l.children.map(W)}:{},u={tag:"g",attributes:_({},c.inner),children:[W(_({tag:l.tag,attributes:_({},l.attributes,c.path)},s))]},m={tag:"g",attributes:_({},c.outer),children:[u]},b="mask-".concat(a||V()),f="clip-".concat(a||V()),h={tag:"mask",attributes:_({},H,{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,m]},g={tag:"defs",children:[{tag:"clipPath",attributes:{id:f},children:(e=d,"g"===e.tag?e.children:[e])},h]};return t.push(g,{tag:"rect",attributes:_({fill:"currentColor","clip-path":"url(#".concat(f,")"),mask:"url(#".concat(b,")")},H)}),{children:t,attributes:r}}(y):function(n){var e=n.children,t=n.attributes,r=n.main,o=n.transform,i=q(n.styles);if(i.length>0&&(t.style=i),U(o)){var a=$({transform:o,containerWidth:r.width,iconWidth:r.width});e.push({tag:"g",attributes:_({},a.outer),children:[{tag:"g",attributes:_({},a.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:_({},r.icon.attributes,a.path)}]}]})}else e.push(r.icon);return{children:e,attributes:t}}(y),S=E.attributes;return y.children=E.children,y.attributes=S,l?function(n){var e=n.iconName,t=n.children,r=n.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:_({},n.attributes,{id:!0===r?"".concat(n.prefix,"-").concat(A.familyPrefix,"-").concat(e):r}),children:t}]}]}(y):function(n){var e=n.children,t=n.main,r=n.mask,o=n.attributes,i=n.styles,a=n.transform;if(U(a)&&t.found&&!r.found){var l={x:t.width/t.height/2,y:.5};o.style=q(_({},i,{"transform-origin":"".concat(l.x+a.x/16,"em ").concat(l.y+a.y/16,"em")}))}return[{tag:"svg",attributes:o,children:e}]}(y)}var Y=function(n,e,t,r){var o,i,a,l=Object.keys(n),d=l.length,c=void 0!==r?function(n,e){return function(t,r,o,i){return n.call(e,t,r,o,i)}}(e,r):e;for(void 0===t?(o=1,a=n[l[0]]):(o=0,a=t);o<d;o++)a=c(a,n[i=l[o]],i,n);return a};function Z(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.skipHooks,o=void 0!==r&&r,i=Object.keys(e).reduce(function(n,t){var r=e[t];return r.icon?n[r.iconName]=r.icon:n[t]=r,n},{});"function"!=typeof j.hooks.addPack||o?j.styles[n]=_({},j.styles[n]||{},i):j.hooks.addPack(n,i),"fas"===n&&Z("fa",e)}var G=j.styles,J=j.shims,K=function(){var n=function(n){return Y(G,function(e,t,r){return e[r]=Y(t,n,{}),e},{})};n(function(n,e,t){return e[3]&&(n[e[3]]=t),n}),n(function(n,e,t){var r=e[2];return n[t]=t,r.forEach(function(e){n[e]=t}),n});var e="far"in G;Y(J,function(n,t){var r=t[1];return"far"!==r||e||(r="fas"),n[t[0]]={prefix:r,iconName:t[2]},n},{})};function Q(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}function nn(n){var e=n.tag,t=n.attributes,r=void 0===t?{}:t,o=n.children,i=void 0===o?[]:o;return"string"==typeof n?R(n):"<".concat(e," ").concat(function(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(R(n[t]),'" ')},"").trim()}(r),">").concat(i.map(nn).join(""),"</").concat(e,">")}function en(n){this.name="MissingIcon",this.message=n||"Icon unavailable",this.stack=(new Error).stack}K(),(en.prototype=Object.create(Error.prototype)).constructor=en;var tn={fill:"currentColor"},rn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},on=(_({},tn,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}),_({},rn,{attributeName:"opacity"}));function an(n){var e=n[0],t=n[1],r=E(n.slice(4),1)[0];return{found:!0,width:e,height:t,icon:Array.isArray(r)?{tag:"g",attributes:{class:"".concat(A.familyPrefix,"-").concat(D)},children:[{tag:"path",attributes:{class:"".concat(A.familyPrefix,"-").concat("secondary"),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(A.familyPrefix,"-").concat("primary"),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}}}}function ln(){A.autoAddCss&&!un&&(function(n){if(n&&I){var e=F.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;for(var t=F.head.childNodes,r=null,o=t.length-1;o>-1;o--){var i=t[o],a=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=i)}F.head.insertBefore(e,r)}}(function(){var n="svg-inline--fa",e=A.familyPrefix,t=A.replacementClass,r='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';if("fa"!==e||t!==n){var o=new RegExp("\\.".concat("fa","\\-"),"g"),i=new RegExp("\\--".concat("fa","\\-"),"g"),a=new RegExp("\\.".concat(n),"g");r=r.replace(o,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(a,".".concat(t))}return r}()),un=!0)}function dn(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(n){return nn(n)})}}),Object.defineProperty(n,"node",{get:function(){if(I){var e=F.createElement("div");return e.innerHTML=n.html,e.children}}}),n}function cn(n){var e=n.prefix,t=void 0===e?"fa":e,r=n.iconName;if(r)return Q(sn.definitions,t,r)||Q(j.styles,t,r)}_({},tn,{cx:"256",cy:"364",r:"28"}),_({},rn,{attributeName:"r",values:"28;14;28;28;14;28;"}),_({},on,{values:"1;0;1;1;0;1;"}),_({},tn,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),_({},on,{values:"1;0;0;0;0;1;"}),_({},tn,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),_({},on,{values:"0;0;1;1;0;0;"});var pn,sn=new(function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.definitions={}}var e;return(e=[{key:"add",value:function(){for(var n=this,e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var o=t.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(e){n.definitions[e]=_({},n.definitions[e]||{},o[e]),Z(e,o[e]),K()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,e){var t=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(t).map(function(e){var r=t[e],o=r.prefix,i=r.iconName,a=r.icon;n[o]||(n[o]={}),n[o][i]=a}),n}}])&&function(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}(n.prototype,e),n}()),un=!1,mn={transform:function(n){return function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n?n.toLowerCase().split(" ").reduce(function(n,e){var t=e.toLowerCase().split("-"),r=t[0],o=t.slice(1).join("-");if(r&&"h"===o)return n.flipX=!0,n;if(r&&"v"===o)return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(r){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o}return n},e):e}(n)}},bn=(pn=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.transform,r=void 0===t?L:t,o=e.symbol,i=void 0!==o&&o,a=e.mask,l=void 0===a?null:a,d=e.maskId,c=void 0===d?null:d,p=e.title,s=void 0===p?null:p,u=e.titleId,m=void 0===u?null:u,b=e.classes,f=void 0===b?[]:b,h=e.attributes,g=void 0===h?{}:h,w=e.styles,x=void 0===w?{}:w;if(n){var v=n.prefix,k=n.iconName,y=n.icon;return dn(_({type:"icon"},n),function(){return ln(),A.autoA11y&&(s?g["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(m||V()):(g["aria-hidden"]="true",g.focusable="false")),X({icons:{main:an(y),mask:l?an(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:v,iconName:k,transform:_({},L,r),symbol:i,title:s,maskId:c,titleId:m,extra:{attributes:g,styles:x,classes:f}})})}},function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=(n||{}).icon?n:cn(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:cn(r||{})),pn(t,_({},e,{mask:r}))});function fn(n,e){return n(e={exports:{}},e.exports),e.exports
>>>>>>> master
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
<<<<<<< HEAD
 */}var se="function"==typeof Symbol&&Symbol.for,pe=se?Symbol.for("react.element"):60103,ue=se?Symbol.for("react.portal"):60106,me=se?Symbol.for("react.fragment"):60107,fe=se?Symbol.for("react.strict_mode"):60108,be=se?Symbol.for("react.profiler"):60114,he=se?Symbol.for("react.provider"):60109,ge=se?Symbol.for("react.context"):60110,xe=se?Symbol.for("react.async_mode"):60111,we=se?Symbol.for("react.concurrent_mode"):60111,ve=se?Symbol.for("react.forward_ref"):60112,ke=se?Symbol.for("react.suspense"):60113,ye=se?Symbol.for("react.suspense_list"):60120,_e=se?Symbol.for("react.memo"):60115,Ee=se?Symbol.for("react.lazy"):60116,Ce=se?Symbol.for("react.block"):60121,Se=se?Symbol.for("react.fundamental"):60117,Oe=se?Symbol.for("react.responder"):60118,$e=se?Symbol.for("react.scope"):60119;function ze(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case pe:switch(e=e.type){case xe:case we:case me:case be:case fe:case ke:return e;default:switch(e=e&&e.$$typeof){case ge:case ve:case Ee:case _e:case he:return e;default:return t}}case ue:return t}}}function Fe(e){return ze(e)===we}var Me={AsyncMode:xe,ConcurrentMode:we,ContextConsumer:ge,ContextProvider:he,Element:pe,ForwardRef:ve,Fragment:me,Lazy:Ee,Memo:_e,Portal:ue,Profiler:be,StrictMode:fe,Suspense:ke,isAsyncMode:function(e){return Fe(e)||ze(e)===xe},isConcurrentMode:Fe,isContextConsumer:function(e){return ze(e)===ge},isContextProvider:function(e){return ze(e)===he},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===pe},isForwardRef:function(e){return ze(e)===ve},isFragment:function(e){return ze(e)===me},isLazy:function(e){return ze(e)===Ee},isMemo:function(e){return ze(e)===_e},isPortal:function(e){return ze(e)===ue},isProfiler:function(e){return ze(e)===be},isStrictMode:function(e){return ze(e)===fe},isSuspense:function(e){return ze(e)===ke},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===me||e===we||e===be||e===fe||e===ke||e===ye||"object"==typeof e&&null!==e&&(e.$$typeof===Ee||e.$$typeof===_e||e.$$typeof===he||e.$$typeof===ge||e.$$typeof===ve||e.$$typeof===Se||e.$$typeof===Oe||e.$$typeof===$e||e.$$typeof===Ce)},typeOf:ze},De=de(function(e,t){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,l=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,s=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,m=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,h=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,x=e?Symbol.for("react.responder"):60118,w=e?Symbol.for("react.scope"):60119;function v(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var m=e.type;switch(m){case d:case s:case o:case a:case i:case u:return m;default:var h=m&&m.$$typeof;switch(h){case c:case p:case b:case f:case l:return h;default:return t}}case n:return t}}}var k=s,y=c,_=l,E=r,C=p,S=o,O=b,$=f,z=n,F=a,M=i,D=u,B=!1;function I(e){return v(e)===s}t.AsyncMode=d,t.ConcurrentMode=k,t.ContextConsumer=y,t.ContextProvider=_,t.Element=E,t.ForwardRef=C,t.Fragment=S,t.Lazy=O,t.Memo=$,t.Portal=z,t.Profiler=F,t.StrictMode=M,t.Suspense=D,t.isAsyncMode=function(e){return B||(B=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),I(e)||v(e)===d},t.isConcurrentMode=I,t.isContextConsumer=function(e){return v(e)===c},t.isContextProvider=function(e){return v(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return v(e)===p},t.isFragment=function(e){return v(e)===o},t.isLazy=function(e){return v(e)===b},t.isMemo=function(e){return v(e)===f},t.isPortal=function(e){return v(e)===n},t.isProfiler=function(e){return v(e)===a},t.isStrictMode=function(e){return v(e)===i},t.isSuspense=function(e){return v(e)===u},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===s||e===a||e===i||e===u||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===f||e.$$typeof===l||e.$$typeof===c||e.$$typeof===p||e.$$typeof===g||e.$$typeof===x||e.$$typeof===w||e.$$typeof===h)},t.typeOf=v}()}),Be=de(function(e){e.exports="production"===process.env.NODE_ENV?Me:De}),Ie=Object.getOwnPropertySymbols,Pe=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable;function Te(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var Ne=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,n,o=Te(e),i=1;i<arguments.length;i++){for(var a in r=Object(arguments[i]))Pe.call(r,a)&&(o[a]=r[a]);if(Ie){n=Ie(r);for(var l=0;l<n.length;l++)Ae.call(r,n[l])&&(o[n[l]]=r[n[l]])}}return o},je="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Le=function(){};if("production"!==process.env.NODE_ENV){var Ve=je,Re={},qe=Function.call.bind(Object.prototype.hasOwnProperty);Le=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function Ue(e,t,r,n,o){if("production"!==process.env.NODE_ENV)for(var i in e)if(qe(e,i)){var a;try{if("function"!=typeof e[i]){var l=Error((n||"React class")+": "+r+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.");throw l.name="Invariant Violation",l}a=e[i](t,i,n,r,null,Ve)}catch(e){a=e}if(!a||a instanceof Error||Le((n||"React class")+": type specification of "+r+" `"+i+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof a+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),a instanceof Error&&!(a.message in Re)){Re[a.message]=!0;var c=o?o():"";Le("Failed "+r+" type: "+a.message+(null!=c?c:""))}}}Ue.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(Re={})};var We=Ue,He=Function.call.bind(Object.prototype.hasOwnProperty),Xe=function(){};function Ye(){return null}function Ze(){}function Ge(){}"production"!==process.env.NODE_ENV&&(Xe=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),Ge.resetWarningCache=Ze;var Je=de(function(e){e.exports="production"!==process.env.NODE_ENV?function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,n={array:l("array"),bool:l("boolean"),func:l("function"),number:l("number"),object:l("object"),string:l("string"),symbol:l("symbol"),any:a(Ye),arrayOf:function(e){return a(function(t,r,n,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var l=t[r];if(!Array.isArray(l))return new i("Invalid "+o+" `"+a+"` of type `"+d(l)+"` supplied to `"+n+"`, expected an array.");for(var c=0;c<l.length;c++){var s=e(l,c,n,o,a+"["+c+"]",je);if(s instanceof Error)return s}return null})},element:a(function(t,r,n,o,a){var l=t[r];return e(l)?null:new i("Invalid "+o+" `"+a+"` of type `"+d(l)+"` supplied to `"+n+"`, expected a single ReactElement.")}),elementType:a(function(e,t,r,n,o){var a=e[t];return Be.isValidElementType(a)?null:new i("Invalid "+n+" `"+o+"` of type `"+d(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")}),instanceOf:function(e){return a(function(t,r,n,o,a){var l;return t[r]instanceof e?null:new i("Invalid "+o+" `"+a+"` of type `"+((l=t[r]).constructor&&l.constructor.name?l.constructor.name:"<<anonymous>>")+"` supplied to `"+n+"`, expected instance of `"+(e.name||"<<anonymous>>")+"`.")})},node:a(function(e,t,r,n,o){return c(e[t])?null:new i("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")}),objectOf:function(e){return a(function(t,r,n,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],c=d(l);if("object"!==c)return new i("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var s in l)if(He(l,s)){var p=e(l,s,n,o,a+"."+s,je);if(p instanceof Error)return p}return null})},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&Xe(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),Ye;function t(t,r,n,a,l){for(var c=t[r],d=0;d<e.length;d++)if(o(c,e[d]))return null;var p=JSON.stringify(e,function(e,t){return"symbol"===s(t)?String(t):t});return new i("Invalid "+a+" `"+l+"` of value `"+String(c)+"` supplied to `"+n+"`, expected one of "+p+".")}return a(t)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&Xe("Invalid argument supplied to oneOfType, expected an instance of array."),Ye;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return Xe("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+p(r)+" at index "+t+"."),Ye}return a(function(t,r,n,o,a){for(var l=0;l<e.length;l++)if(null==(0,e[l])(t,r,n,o,a,je))return null;return new i("Invalid "+o+" `"+a+"` supplied to `"+n+"`.")})},shape:function(e){return a(function(t,r,n,o,a){var l=t[r],c=d(l);if("object"!==c)return new i("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");for(var s in e){var p=e[s];if(p){var u=p(l,s,n,o,a+"."+s,je);if(u)return u}}return null})},exact:function(e){return a(function(t,r,n,o,a){var l=t[r],c=d(l);if("object"!==c)return new i("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var s=Ne({},t[r],e);for(var p in s){var u=e[p];if(!u)return new i("Invalid "+o+" `"+a+"` key `"+p+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=u(l,p,n,o,a+"."+p,je);if(m)return m}return null})}};function o(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function i(e){this.message=e,this.stack=""}function a(e){function t(t,r,n,o,a,l,c){if(o=o||"<<anonymous>>",l=l||n,c!==je){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}return null==r[n]?t?new i(null===r[n]?"The "+a+" `"+l+"` is marked as required in `"+o+"`, but its value is `null`.":"The "+a+" `"+l+"` is marked as required in `"+o+"`, but its value is `undefined`."):null:e(r,n,o,a,l)}process;var r=t.bind(null,!1);return r.isRequired=t.bind(null,!0),r}function l(e){return a(function(t,r,n,o,a,l){var c=t[r];return d(c)!==e?new i("Invalid "+o+" `"+a+"` of type `"+s(c)+"` supplied to `"+n+"`, expected `"+e+"`."):null})}function c(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(c);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!n)return!1;var o,i=n.call(t);if(n!==t.entries){for(;!(o=i.next()).done;)if(!c(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!c(a[1]))return!1}return!0;default:return!1}}function d(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function s(e){if(null==e)return""+e;var t=d(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function p(e){var t=s(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return i.prototype=Error.prototype,n.checkPropTypes=We,n.resetWarningCache=We.resetWarningCache,n.PropTypes=n,n}(Be.isElement):function(){function e(e,t,r,n,o,i){if(i!==je){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ge,resetWarningCache:Ze};return r.PropTypes=r,r}()});function Ke(e){return(Ke="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Qe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function et(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function tt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?et(Object(r),!0).forEach(function(t){Qe(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):et(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function rt(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function nt(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function ot(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1);var t}function it(e){return e.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var r,n=t.indexOf(":"),o=ot(t.slice(0,n)),i=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=i:e[o]=i,e},{})}var at=!1;try{at="production"===process.env.NODE_ENV}catch(me){}function lt(e){return le.icon?le.icon(e):null===e?null:"object"===Ke(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function ct(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Qe({},e,t):{}}function dt(e){var t=e.forwardedRef,r=rt(e,["forwardedRef"]),n=r.mask,o=r.symbol,i=r.className,a=r.title,l=r.titleId,c=lt(r.icon),d=ct("classes",[].concat(nt(function(e){var t,r=e.flip,n=e.size,o=e.rotation,i=e.pull,a=(Qe(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-inverse":e.inverse,"fa-border":e.border,"fa-li":e.listItem,"fa-flip-horizontal":"horizontal"===r||"both"===r,"fa-flip-vertical":"vertical"===r||"both"===r},"fa-".concat(n),null!=n),Qe(t,"fa-rotate-".concat(o),null!=o&&0!==o),Qe(t,"fa-pull-".concat(i),null!=i),Qe(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(a).map(function(e){return a[e]?e:null}).filter(function(e){return e})}(r)),nt(i.split(" ")))),s=ct("transform","string"==typeof r.transform?le.transform(r.transform):r.transform),p=ct("mask",lt(n)),u=ce(c,tt({},d,{},s,{},p,{symbol:o,title:a,titleId:l}));if(!u)return function(){var e;!at&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",c),null;var m=u.abstract,f={ref:t};return Object.keys(r).forEach(function(e){dt.defaultProps.hasOwnProperty(e)||(f[e]=r[e])}),st(m[0],f)}dt.displayName="FontAwesomeIcon",dt.propTypes={border:Je.bool,className:Je.string,mask:Je.oneOfType([Je.object,Je.array,Je.string]),fixedWidth:Je.bool,inverse:Je.bool,flip:Je.oneOf(["horizontal","vertical","both"]),icon:Je.oneOfType([Je.object,Je.array,Je.string]),listItem:Je.bool,pull:Je.oneOf(["right","left"]),pulse:Je.bool,rotation:Je.oneOf([0,90,180,270]),size:Je.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Je.bool,symbol:Je.oneOfType([Je.bool,Je.string]),title:Je.string,transform:Je.oneOfType([Je.string,Je.object]),swapOpacity:Je.bool},dt.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var st=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map(function(r){return e(t,r)}),i=Object.keys(r.attributes||{}).reduce(function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=it(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[ot(t)]=n}return e},{attrs:{}}),a=n.style,l=void 0===a?{}:a,c=rt(n,["style"]);return i.attrs.style=tt({},i.attrs.style,{},l),t.apply(void 0,[r.tag,tt({},i.attrs,{},c)].concat(nt(o)))}.bind(null,e.createElement),pt={prefix:"fas",iconName:"angle-down",icon:[320,512,[],"f107","M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"]},ut={prefix:"fas",iconName:"angle-left",icon:[256,512,[],"f104","M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"]},mt={prefix:"fas",iconName:"angle-up",icon:[320,512,[],"f106","M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"]},ft={prefix:"fas",iconName:"bell",icon:[448,512,[],"f0f3","M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"]},bt={prefix:"fas",iconName:"check",icon:[512,512,[],"f00c","M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"]},ht={prefix:"fas",iconName:"minus",icon:[448,512,[],"f068","M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"]},gt={prefix:"fas",iconName:"plus",icon:[448,512,[],"f067","M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"]},xt={prefix:"fas",iconName:"times",icon:[352,512,[],"f00d","M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]};
/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */let wt,vt,kt,yt,_t,Et,Ct,St=e=>e;const Ot=e=>{switch(e){case"mini":return"10px";case"tiny":return"11px";case"small":return"12px";case"medium":return"14px";case"large":return"16px";case"big":return"18px";case"huge":return"20px";case"massive":return"22px";default:return e}},$t=n.button(wt||(wt=St`
    font-family: MontSerrat !important;
    position: ${0};
    background-color: ${0};
    height: ${0};
    padding: 0 20px;
    width: ${0};
    border-radius: ${0};
    cursor: pointer;
    border: ${0};
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;

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
`),e=>e.loading?"relative":"initial",e=>e.colorBackground?e.colorBackground:e.secondary||e.tertiary?"#FFFFFF":e.noBorder?"transparent":"#F7EA48",e=>e.size?(e=>{switch(e){case"mini":return"25px";case"tiny":return"30px";case"small":return"35px";case"medium":return"40px";case"large":return"45px";case"big":return"50px";case"huge":return"55px";case"massive":return"60px";default:return e}})(e.size):"40px",e=>e.width?"string"==typeof e.width?e.width:e.width+"px":"none",e=>e.rectangular?"10px":"30px",e=>e.secondary?"1px solid #9B4DEE":e.tertiary?"1px solid #ACACAC":"none",e=>e.hoverBackgroundColor?e.hoverBackgroundColor:e.secondary?"rgba(155, 77, 238, 0.2)":e.backPurple?"#E0457B":e.noBorder?"transparent":e.tertiary?"rgba(211, 211, 211, 0.4)":"#9B4DEE",e=>e.hoverTextColor?e.hoverTextColor:e.secondary?"#9B4DEE":e.backPurple?"#FFFFFF":e.noBorder?e.colorText?e.colorText:"#9B4DEE":e.tertiary?"#707070":"#F7EA48"),zt=n.span(vt||(vt=St`
    visibility: ${0};
    color: ${0};
    font-weight: ${0};
    font-size: ${0};
    margin-right: 3.5px;
`),e=>e.loading?"hidden":"visible",e=>e.colorText?e.colorText:e.tertiary?"#707070":"#9B4DEE",e=>e.firstStrong||e.strong?"bold":"normal",e=>e.size?Ot(e.size):"14px"),Ft=n.span(kt||(kt=St`
    visibility: ${0};
    color: ${0};
    font-weight: ${0};
    font-size: ${0};
`),e=>e.loading?"hidden":"visible",e=>e.colorText?e.colorText:e.tertiary?"#707070":"#9B4DEE",e=>e.firstStrong||e.notStrong?"normal":"bold",e=>e.size?Ot(e.size):"14px"),Mt=n.button(yt||(yt=St`
    font-family: MontSerrat !important;
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
`),"#9B4DEE","#F7EA48","rgba(155, 77, 238, 0.9)","#F7EA48"),Dt=n.div(_t||(_t=St`
    visibility: ${0};
    margin-right: ${0};
    margin-left: ${0};
`),e=>e.loading?"hidden":"visible",e=>"left"===e.iconPosition?"10px":"",e=>"right"===e.iconPosition?"10px":""),Bt=n.div(Et||(Et=St`
    font-family: MontSerrat !important;
    background-color: ${0};
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: ${0};
    font-size: 10px;
`),"#F7EA48","#9B4DEE"),It=n.div(Ct||(Ct=St`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`));let Pt,At,Tt=e=>e;const Nt=e=>{switch(e){case"mini":return"1em";case"tiny":return"1.5em";case"small":return"2em";case"medium":return"2.5em";case"large":return"3em";case"big":return"3.5em";case"huge":return"4em";case"massive":return"4.5em";default:return e}},jt=e=>{switch(e){case"mini":return"2px";case"tiny":return"2.5px";case"small":return"3px";case"medium":return"3.5px";case"large":return"4px";case"big":return"4.5px";case"huge":return"5px";case"massive":return"5.5px";default:return e}},Lt=n.div(Pt||(Pt=Tt`
    width: 100%;
    display: flex;
    justify-content: ${0};
`),e=>"left"===e.position?"flex-start":"right"===e.position?"flex-end":"center"),Vt=n.div(At||(At=Tt`
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
`),e=>e.size?jt(e.size):"3.5px","#E1E6EB",e=>e.size?jt(e.size):"3.5px",e=>e.color?e.color:"#9B4DEE",e=>e.size?Nt(e.size):"2.5em",e=>e.size&&e.size?Nt(e.size):"2.5em"),Rt=({color:t,size:r,className:n,style:o,position:i})=>e.createElement(Lt,{position:i},e.createElement(Vt,{color:t,size:r,style:o,className:n})),qt=({textFirst:t,textEnd:r,firstStrong:n,notStrong:o,strong:i,loading:a,secondary:l,backPurple:c,children:d,notification:s,amount:p,width:u,icon:m,customIcon:f,iconPosition:b="right",colorIcon:h,noBorder:g,colorText:x,colorBackground:w,tertiary:v,size:k,rectangular:y,typeContent:_,hoverBackgroundColor:E,hoverTextColor:C,iconStyle:S,...O})=>s?e.createElement(Mt,Object.assign({},O),a?e.createElement(Rt,{size:"tiny"}):d||e.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",height:"50%",padding:10}},e.createElement("div",{style:{display:"flex",alignItems:"center"}},e.createElement(Dt,null,e.createElement(dt,{icon:ft,size:"lg",color:"#F7EA48"})),e.createElement("span",null,"notificações")),e.createElement(Bt,null,p))):e.createElement($t,Object.assign({},O,{secondary:l,backPurple:c,width:u,icon:m,noBorder:g,colorText:x,colorBackground:w,tertiary:v,size:k,rectangular:y,hoverBackgroundColor:E,hoverTextColor:C,loading:a}),d||(_?function(t){switch(t){case"icon":return e.createElement("div",null,(m||f)&&e.createElement(e.Fragment,null,e.createElement(Dt,{loading:a},f||e.createElement(dt,{icon:m,color:h||"#9B4DEE",size:"lg",style:{...S}}))));default:return null}}(_):e.createElement(e.Fragment,null,(m||f)&&"left"===b&&e.createElement(e.Fragment,null,e.createElement(Dt,{loading:a,iconPosition:b},f||e.createElement(dt,{icon:m,color:h||"#9B4DEE",size:"lg",style:{...S}}))),e.createElement(zt,{firstStrong:n,strong:i,notStrong:o,colorText:x,tertiary:v,size:k,loading:a},t),e.createElement(Ft,{firstStrong:n,strong:i,notStrong:o,colorText:x,tertiary:v,size:k,loading:a},r),(m||f)&&"right"===b&&e.createElement(e.Fragment,null,e.createElement(Dt,{loading:a,iconPosition:b},f||e.createElement(dt,{icon:m,color:h||"#9B4DEE",size:"lg",style:{...S}}))))),a&&e.createElement(It,null,e.createElement(Rt,{size:"tiny"})));let Ut,Wt,Ht,Xt,Yt,Zt,Gt=e=>e;const Jt=n.div(Ut||(Ut=Gt`
    ${0}
`),e=>o(e.open?Wt||(Wt=Gt`
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
              `):Ht||(Ht=Gt`
                  opacity: 1;
                  visibility: hidden;
              `))),Kt=n.div(Xt||(Xt=Gt`
    font-family: MontSerrat !important;
    ${0}
`),e=>e.open?o(Yt||(Yt=Gt`
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
                      overflow: auto;
                      margin-bottom: -20px;
                      maxHeight: ${0};
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
              `),"#FFFFFF",()=>e.maxHeight?"string"==typeof e.maxHeight?e.maxHeight:e.maxHeight+"px":"100%"):o(Zt||(Zt=Gt`
                  transition: bottom 0.25s ease;
                  bottom: -100%;
              `))),Qt=({open:t,children:r,onClose:n,loading:o,maxHeight:i})=>e.createElement(Jt,{open:t,onClick:e=>{e.stopPropagation(),n()}},e.createElement(Kt,{open:t,onClick:e=>e.stopPropagation(),maxHeight:i},o&&e.createElement("div",{className:"loading-dialog"},e.createElement(Rt,null)),e.createElement("div",{className:"box-dialog"},r)));let er,tr,rr,nr,or,ir,ar,lr=e=>e;const cr=n.div(er||(er=lr`
    font-family: MontSerrat !important;
    position: relative;
    opacity: ${0};
    width: ${0};

    input {
        font-family: MontSerrat !important;
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

    ${0}

    input:disabled {
        background-color: transparent;
    }

    label {
        font-family: MontSerrat !important;
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
        font-family: MontSerrat !important;
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
`),e=>e.disabled?"50%":"100%",e=>e.width?"string"==typeof e.width?e.width:e.width+"px":"100%",e=>e.textColor?e.textColor:"#707070",e=>e.icon&&!e.action?"right"===e.iconPosition?"15px":"40px":e.action&&!e.icon?"left"===e.actionPosition?"40px":"15px":e.action||e.icon?"40px":"15px",e=>e.icon&&!e.action?"right"===e.iconPosition?"40px":"0px":e.action&&!e.icon?"left"===e.actionPosition?"0px":"40px":e.action&&e.icon?"40px":"0px","#F1F1F1",e=>e.date&&!e.isFieldActive?o(tr||(tr=lr`
                  input::-webkit-calendar-picker-indicator {
                      display: none !important;
                  }

                  input[type="date"]::-webkit-input-placeholder {
                      display: none !important;
                      visibility: hidden !important;
                      -webkit-appearance: none;
                  }

                  input[type="date"]::-webkit-datetime-edit-fields-wrapper,
                  input[type="date"]::-webkit-datetime-edit-fields-wrapper {
                      visibility: hidden;
                  }
              `)):null,e=>(e.requiredText||e.errorMessage)&&e.errorColor?e.errorColor:e.requiredText||e.errorMessage?"#E53935":"#ACACAC",e=>e.isFieldActive?o(rr||(rr=lr`
                      color: ${0};
                  `),"#9B4DEE"):o(nr||(nr=lr`
                      color: ${0};
                  `),"#707070"),e=>e.icon&&!e.action?"right"===e.iconPosition?"15px":"40px":e.action&&!e.icon?"left"===e.actionPosition?"40px":"15px":e.action||e.icon?"40px":"15px",e=>e.isFieldActive?o(or||(or=lr`
                      transform: translateY(-100%);
                      font-size: 14px;
                      color: ${0};
                  `),e=>(e.requiredText||e.errorMessage)&&e.errorColor?e.errorColor:e.requiredText||e.errorMessage?"#E53935":"#9B4DEE"):o(ir||(ir=lr`
                      font-size: 16px;
                      color: ${0};
                  `),e=>(e.requiredText||e.errorMessage)&&e.errorColor?e.errorColor:e.requiredText||e.errorMessage?"#E53935":"#707070"),e=>"right"===e.iconPosition&&"right: 0;",e=>e.actionPosition&&"left"===e.actionPosition?"left: 0;":"right: 0;"),dr=n.span(ar||(ar=lr`
    font-family: MontSerrat !important;
    font-size: 10px;
    margin-left: 0;
    color: ${0};
`),e=>e.errorColor?e.errorColor:"#E53935"),sr=({containerStyle:n,label:o,labelStyle:i,errorMessage:a,width:l,textColor:c,inputRef:d,name:s,icon:p,iconPosition:u,iconColor:m,action:f,...b})=>{const[h,g]=t(!1);return r(()=>{b.value&&(h||g(!0))},[b.value]),e.createElement("div",{style:{paddingBottom:a?0:20}},e.createElement(cr,{isFieldActive:h,errorMessage:a,containerStyle:n,width:l,disabled:b.disabled?b.disabled:void 0,style:n,textColor:c,icon:!!p,iconPosition:u,action:f,actionPosition:null==f?void 0:f.position,date:"date"===b.type},p&&e.createElement("div",{className:"icon"},e.createElement(dt,{icon:p,color:m||"#9B4DEE"})),f&&e.createElement("div",{className:"icon-action",onClick:f.onClick},e.createElement(dt,{icon:f.icon,color:f.iconColor||"#9B4DEE"})),e.createElement("input",Object.assign({},b,{onFocus:()=>{h||g(!0)},onBlur:()=>{h&&!b.value&&g(!1)},name:s,placeholder:h?b.placeholder:"",ref:d})),e.createElement("label",{style:i},o)),a?e.createElement(dr,null,a):null)},pr=({register:n,errors:o,validate:i,name:a,required:l,values:c,limit:d,minimum:s,...p})=>{var u;const[m,f]=t(!1),[b,h]=t(""),g=c?c(a)||p.defaultValue:p.value;return r(()=>{g&&(m||f(!0))},[g]),e.createElement("div",{style:{paddingBottom:b||o?0:20}},e.createElement(cr,{isFieldActive:m,requiredText:!(!o||"required"!==o.type),errorMessage:o,containerStyle:p.containerStyle,width:p.width,disabled:p.disabled,style:p.containerStyle,textColor:p.textColor,icon:!!p.icon,iconPosition:p.iconPosition,action:p.action,actionPosition:null===(u=p.action)||void 0===u?void 0:u.position,date:"date"===p.type},p.icon&&e.createElement("div",{className:"icon"},e.createElement(dt,{icon:p.icon,color:p.iconColor||"#9B4DEE"})),p.action&&e.createElement("div",{className:"icon-action",onClick:p.action.onClick},e.createElement(dt,{icon:p.action.icon,color:p.action.iconColor||"#9B4DEE"})),e.createElement("input",Object.assign({},p,{onFocus:()=>{m||f(!0)},onBlur:()=>{m&&!g&&f(!1)},name:a,placeholder:m?p.placeholder:"",ref:n?n({required:l,validate:i&&l?e=>i(e)?(h(i(e)),!1):(h(""),!0):d&&l?e=>e.length>d?(h(d+" caracteres permitidos."),!1):(h(""),!0):s&&l?e=>e.length<s?(h(`${a} deve ter ${s} ou mais caracteres.`),!1):(h(""),!0):null}):null})),e.createElement("label",{style:p.labelStyle},p.label)),o?e.createElement(dr,null,"required"===o.type?"Obrigatório":""+b):null)};let ur,mr,fr,br,hr,gr,xr,wr,vr,kr=e=>e;const yr=n.div(ur||(ur=kr`
    ${0}
`),e=>o(e.open?mr||(mr=kr`
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
              `):fr||(fr=kr`
                  opacity: 1;
                  visibility: hidden;
              `))),_r=n.div(br||(br=kr`
    font-family: MontSerrat !important;
    transition: top 0.25s ease;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: ${0};
    margin: auto;
    background: ${0};
    border-radius: 30px;
`),e=>e.width?"string"==typeof e.width?e.width.replace("%","")+"%":e.width+"px":e.size?(e=>{switch(e){case"mini":return"35%";case"tiny":return"45%";case"small":return"55%";case"large":return"65%";case"fullscreen":return"95%";default:return e}})(e.size):"80%","#FFFFFF"),Er=(n.div(hr||(hr=kr`
    transition: bottom 1s ease;
    width: 90%;
    background: ${0};
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`),"#FFFFFF"),n.div(gr||(gr=kr`
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
`),e=>e.noBorder?"none":"1px solid #E1E6EB",e=>e.iconBack?"20px 0":"20px 30px","#9B4DEE")),Cr=n.div(xr||(xr=kr`
    padding: 20px 30px;
    cursor: pointer;
`)),Sr=n.div(wr||(wr=kr`
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
`)),Or=n.div(vr||(vr=kr`
    border-top: 1px solid ${0};
    margin: 0 30px;
    padding: 20px 0;
    display: flex;
    flex-direction: row-reverse;
`),"#E1E6EB"),$r=({open:t,title:n,children:o,actions:i,width:a,onClose:l,closeOnDimerClick:c,loading:d,onBack:s,size:p,noBorder:u,closeIcon:m=!0})=>{function f(e){t&&"Escape"==e.key&&c&&(e.stopPropagation(),l())}return r(()=>(t?window.addEventListener("keydown",e=>f(e)):window.removeEventListener("keydown",e=>f(e)),window.removeEventListener("keydown",e=>f(e))),[t]),e.createElement(yr,{open:t,onClick:e=>{c&&(e.stopPropagation(),l())}},e.createElement(_r,{size:p,width:a,onClick:e=>e.stopPropagation()},e.createElement(Er,{iconBack:!!s,noBorder:u},e.createElement("div",{className:"name-icon-modal"},s?e.createElement(Cr,{onClick:()=>s()},e.createElement(dt,{icon:ut,size:"lg",color:"#9B4DEE"})):null,e.createElement("strong",null,n)),m&&e.createElement(Cr,{onClick:e=>{e.stopPropagation(),l()}},e.createElement(dt,{icon:xt,style:{fontSize:20},color:"#9B4DEE"}))),e.createElement(Sr,null,d&&e.createElement("div",{className:"loading-modal"},e.createElement(Rt,null)),o),i&&e.createElement(Or,null,i)))};let zr,Fr,Mr,Dr,Br,Ir,Pr,Ar=e=>e;const Tr=n.span(zr||(zr=Ar`
    font-family: MontSerrat !important;
    font-size: 14px;
    color: ${0};
    margin-left: 15px;
`),e=>e.errorMessage?"#E0457B":e.labelColor?e.labelColor:"#9B4DEE"),Nr=n.div(Fr||(Fr=Ar`
    font-family: MontSerrat !important;
    width: ${0};
    position: relative;

    opacity: ${0};

    textarea {
        font-family: MontSerrat !important;
        color: ${0};
        resize: none;
        width: ${0};

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
`),e=>e.width?e.width:"100%",e=>e.disabled?"50%":"100%",e=>e.textColor?e.textColor:"#707070",e=>e.width?"string"==typeof e.width?e.width:e.width+"px":"100%",e=>e.height?"string"==typeof e.height?e.height:e.height+"px":"100%",e=>e.errorMessage&&e.errorColor?e.errorColor:e.errorMessage?"#E53935":"#ACACAC","#F1F1F1",e=>e.errorMessage&&e.errorColor?e.errorColor:e.errorMessage?"#E53935":"#ACACAC",e=>e.isFieldActive?o(Mr||(Mr=Ar`
                      color: ${0};
                  `),"#9B4DEE"):o(Dr||(Dr=Ar`
                      color: ${0};
                  `),"#707070"),"#9B4DEE","rgba(155, 77, 238, 0.9)"),jr=n.span(Br||(Br=Ar`
    font-family: MontSerrat !important;
    font-size: 10px;
    margin-left: 0;
    margin-top: -2px;
    color: ${0};
`),e=>e.errorColor?e.errorColor:"#E0457B"),Lr=n.div(Ir||(Ir=Ar`
    font-family: MontSerrat !important;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 10px;
`)),Vr=n.div(Pr||(Pr=Ar`
    font-size: 10px;
    color: ${0};
`),"#ACACAC"),Rr=({containerStyle:t,label:r,labelColor:n,labelStyle:o,errorMessage:i,errorColor:a,width:l,height:c,textColor:d,textAreaRef:s,lengthInfo:p,...u})=>e.createElement("div",{style:{paddingBottom:i?0:20}},r&&e.createElement(Tr,{errorMessage:i,labelColor:n},r),e.createElement(Nr,{errorMessage:i,errorColor:a,labelStyle:o,containerStyle:t,width:l,style:t,disabled:u.disabled,textColor:d,height:c},e.createElement("textarea",Object.assign({},u,{placeholder:u.placeholder,ref:s}))),e.createElement(Lr,null,e.createElement(jr,{errorColor:a},i),(p||"number"==typeof p)&&u.maxLength?e.createElement(Vr,null,`${"number"==typeof p?p:"string"==typeof u.value?u.value.length:0}/${u.maxLength} caracteres`):"")),qr=({register:r,errors:n,validate:o,name:i,required:a,limit:l,minimum:c,...d})=>{const[s,p]=t("");return e.createElement(Rr,Object.assign({},d,{name:i,errorMessage:n?"required"===n.type?"Obrigatório":""+s:"",textAreaRef:r?r({required:a,validate:o&&a?e=>o(e)?(p(o(e)),!1):(p(""),!0):l&&a?e=>e.length>l?(p(l+" caracteres permitidos."),!1):(p(""),!0):c&&a?e=>e.length<c?(p(`${i} deve ter ${c} ou mais caracteres.`),!1):(p(""),!0):null}):null}))};let Ur;const Wr=e=>{switch(e){case"mini":return"10px";case"tiny":return"12px";case"small":return"14px";case"medium":return"17px";case"large":return"20px";case"big":return"23px";case"huge":return"26px";case"massive":return"30px";default:return e}},Hr=n.div(Ur||(Ur=(e=>e)`
    font-family: MontSerrat !important;
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
`),e=>e.sizeBox?(e=>{switch(e){case"mini":return"10px";case"tiny":return"13px";case"small":return"14px";case"medium":return"16px";case"large":return"18px";case"big":return"20px";case"huge":return"22px";case"massive":return"24px";default:return e}})(e.sizeBox):"17px","#707070",e=>e.disabled?"default":"pointer",e=>e.disabled?.5:1,e=>e.disabled?"default":"pointer",e=>e.disabled?.5:1,e=>e.sizeBox?Wr(e.sizeBox):"17px",e=>e.sizeBox?Wr(e.sizeBox):"17px","#E1E6EB","#E1E6EB",e=>e.sizeBox?Wr(e.sizeBox):"17px",e=>e.sizeBox?Wr(e.sizeBox):"17px","#68349F","#68349F","#FFFFFF",e=>e.sizeBox?(e=>{switch(e){case"mini":return"1px";case"tiny":return"1.2px";case"small":return"1.4px";case"medium":case"large":case"big":return"2px";case"huge":return"3px";case"massive":return"4px";default:return e}})(e.sizeBox):"2.5px",e=>e.sizeBox?(e=>{switch(e){case"mini":return"5px";case"tiny":return"6px";case"small":return"7px";case"medium":return"8px";case"large":return"9px";case"big":return"10px";case"huge":return"11px";case"massive":return"12px";default:return e}})(e.sizeBox):"8px",e=>e.sizeBox?(e=>{switch(e){case"mini":return"8px";case"tiny":return"10px";case"small":return"11px";case"medium":return"13px";case"large":return"16px";case"big":return"19px";case"huge":return"21px";case"massive":return"23px";default:return e}})(e.sizeBox):"13px",e=>e.checked?"#FFFFFF":"#E1E6EB"),Xr=({label:t,labelStyle:r,sizeBox:n,...o})=>e.createElement(Hr,{onClick:()=>o.disabled?null:o.onChange?o.onChange():null,disabled:o.disabled,sizeBox:n,checked:o.checked},e.createElement("input",Object.assign({type:"checkbox"},o)),e.createElement("div",null,e.createElement("span",null,e.createElement(dt,{icon:bt})),e.createElement("label",{style:r},t)));let Yr;const Zr=e=>{switch(e){case"mini":return"10px";case"tiny":return"12px";case"small":return"14px";case"medium":return"17px";case"large":return"20px";case"big":return"23px";case"huge":return"26px";case"massive":return"30px";default:return e}},Gr=e=>{switch(e){case"mini":return"2px";case"tiny":return"4px";case"small":return"6px";case"medium":return"9px";case"large":return"12px";case"big":return"15px";case"huge":return"18px";case"massive":return"22px";default:return e}},Jr=n.div(Yr||(Yr=(e=>e)`
    font-family: MontSerrat !important;

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
`),e=>e.sizeBox?(e=>{switch(e){case"mini":return"10px";case"tiny":return"13px";case"small":return"14px";case"medium":return"16px";case"large":return"18px";case"big":return"20px";case"huge":return"22px";case"massive":return"24px";default:return e}})(e.sizeBox):"17px","#707070",e=>e.disabled?"default":"pointer",e=>e.disabled?.5:1,e=>e.sizeBox?(e=>{switch(e){case"mini":case"tiny":case"small":case"medium":return"0px";case"large":case"big":return"2px";case"huge":return"3px";case"massive":return"4px";default:return e}})(e.sizeBox):"0px",e=>e.sizeBox?(e=>{switch(e){case"mini":return"15px";case"tiny":return"18px";case"small":return"20px";case"medium":return"25px";case"large":return"28px";case"big":return"32px";case"huge":return"35px";case"massive":return"40px";default:return e}})(e.sizeBox):"25px",e=>e.disabled?"default":"pointer",e=>e.disabled?.5:1,e=>e.sizeBox?(e=>{switch(e){case"mini":return"5px";case"tiny":return"4px";case"small":return"3px";case"medium":return"1px";case"large":case"big":case"huge":case"massive":return"0px";default:return e}})(e.sizeBox):"1px",e=>e.sizeBox?Zr(e.sizeBox):"17px",e=>e.sizeBox?Zr(e.sizeBox):"17px","#D1D8DC","#E1E6EB",e=>e.sizeBox?(e=>{switch(e){case"mini":return"9px";case"tiny":return"8px";case"small":return"7px";case"medium":return"5px";case"large":case"big":case"huge":case"massive":return"4px";default:return e}})(e.sizeBox):"5px",e=>e.sizeBox?Gr(e.sizeBox):"9px",e=>e.sizeBox?Gr(e.sizeBox):"9px","#707070","#707070","#FFFFFF"),Kr=({label:t,labelStyle:r,sizeBox:n,...o})=>e.createElement(Jr,{onClick:()=>o.disabled?null:o.onChange?o.onChange():null,disabled:o.disabled,sizeBox:n},e.createElement("input",Object.assign({type:"radio"},o)),e.createElement("div",null,e.createElement("label",{style:r},t)));let Qr;const en=n.div(Qr||(Qr=(e=>e)`
    font-family: MontSerrat !important;
    width: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    padding-bottom: ${0};

    label {
        font-size: 14px;
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
        border-radius: ${0};
        -webkit-transition: opacity 0.1s ease;
        transition: opacity 0.1s ease;
        z-index: 11;
        will-change: transform, opacity;
        /* border-top: ${0};
        border-left: ${0};
        border-right: ${0}; */
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
        border-radius: ${0};
        -webkit-transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;
        transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;
        transition: box-shadow 0.1s ease, width 0.1s ease;
        transition: box-shadow 0.1s ease, width 0.1s ease,
            -webkit-box-shadow 0.1s ease;
        border-radius: ${0};
        border-top: ${0};
        border-left: ${0};
        border-right: ${0};
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
`),e=>e.error?"":"20px",e=>e.error?"#E0457B":e.colorLabel?e.colorLabel:"#9B4DEE",e=>e.textAlign&&"center"===e.textAlign?"center":"left","#707070",e=>e.line?"0":"0.28571429rem",e=>e.line?"none":"",e=>e.line?"none":"",e=>e.line?"none":"",e=>e.brand?"#9B4DEE":"#707070",e=>e.brand?"#D8B8F9":"#FFFFFF",e=>e.brand?"#9B4DEE":"#707070",e=>e.brand?"#D8B8F9":e.line?"#ACACAC":"rgba(34, 36, 38, 0.15)",e=>e.line?0:"0.28571429rem",e=>e.line?"none":"20px",e=>e.line?"none":"",e=>e.line?"none":"",e=>e.line?"none":"",e=>e.brand?"#D8B8F9":"#ACACAC",e=>e.brand?"rgba(155, 77, 238, 0.2)":"#ACACAC",e=>e.error?"#E0457B":e.brand?"#D8B8F9":"#ACACAC",e=>e.error?"#E0457B":e.brand?"#D8B8F9":"#ACACAC",e=>e.error?"#E0457B":e.brand?"#D8B8F9":"#ACACAC",e=>e.brand?"#68349F":"#000000",e=>e.error?"#E0457B":e.brand?"#D8B8F9":"#ACACAC",e=>e.error?"#E0457B":e.brand?"#D8B8F9":"#ACACAC",e=>e.brand?"#9B4DEE":"#707070",e=>e.textAlign&&"center"===e.textAlign?"center":"left",e=>e.brand?"#68349F":"#000000",e=>e.brand?"rgba(155, 77, 238, 0.2)":"#ACACAC",e=>e.brand?"#D8B8F9":"#707070",e=>e.brand?"#9B4DEE":"#eeeeee",e=>e.brand?"#68349F":"#000000",e=>e.brand?"#68349F":"#000000","#9B4DEE",e=>e.brand?"#9B4DEE":"#E1E6EB",e=>e.brand?"#9B4DEE":"#E1E6EB",e=>e.brand?"#68349F":"#000000",e=>e.line?"#FFFFFF":"#e0457b25","#E0457B","#E0457B","#E0457B","#E0457B","#E0457B","#e0457b25","#e0457b25","#9B4DEE","rgba(155, 77, 238, 0.9)","#E0457B"),tn=({options:t,brand:r,textAlign:n,errorMessage:o,label:a,colorLabel:l,line:c,...d})=>e.createElement(en,{brand:r,textAlign:n,error:o,colorLabel:l,line:c},a&&e.createElement("label",null,a),e.createElement(i,Object.assign({},d,{selection:!0,noResultsMessage:"Nenhum resultado encontrado",error:!!o,options:t})),o&&e.createElement("small",null,o)),rn=({value:n,clearError:o,errors:i,name:a,register:l,required:c,setValue:d,validate:s,...p})=>{const[u,m]=t(),[f,b]=t("");return r(()=>{d(a,u||n)},[u]),r(()=>{m(n)},[n]),r(()=>{l&&l({name:a},{required:c,validate:s&&c?e=>s(e)?(b(s(e)),!1):(b(""),!0):null})},[l]),e.createElement(tn,Object.assign({},p,{value:u,onChange:(e,t)=>{m(t.value),d(a,n),i&&o&&o(a)},line:p.line,errorMessage:i?"required"===i.type?"Obrigatório":""+f:""}))};let nn,on,an,ln,cn=e=>e;const dn=n.div(nn||(nn=cn`
    font-family: MontSerrat !important;
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
`),e=>e.width?"string"==typeof e.width?e.width:e.width+"px":"100%",e=>e.secondary?"#eeeeee":"#FFFFFF","#eeeeee",e=>e.icon?"15px":"0",e=>e.fontSizeTitle?"string"==typeof e.fontSizeTitle?e.fontSizeTitle:e.fontSizeTitle+"px":e.subtitle?"14px":"16px",e=>e.colorTitle?e.colorTitle:"#707070",e=>e.colorSubtitle?e.colorSubtitle:"#ACACAC",e=>e.colorValue?e.colorValue:"#707070",e=>o(e.open?on||(on=cn`
                  border-top-left-radius: 20px;
                  border-top-right-radius: 20px;
              `):an||(an=cn`
                  border-radius: 30px;
              `))),sn=n.div(ln||(ln=cn`
    font-family: MontSerrat !important;
    width: ${0};
    padding: 20px;
    border: 1px solid ${0};
    border-top: 0;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    display: ${0};
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.16);
`),e=>e.width?e.width+"%":"100%","#eeeeee",e=>e.open?"block":"none"),pn=({title:t,colorTitle:r,subtitle:n,colorSubtitle:o,value:i,colorValue:a,children:l,secondary:c,open:d,onChange:s,width:p,icon:u,customIcon:m,colorIcon:f,fontSizeTitle:b})=>e.createElement(e.Fragment,null,e.createElement(dn,{colorTitle:r,colorSubtitle:o,colorValue:a,secondary:c,subtitle:n,open:d,onClick:()=>s(),width:p,icon:!(!u&&!m),fontSizeTitle:b},e.createElement("div",{className:"icon-title"},m||(u?e.createElement(dt,{icon:u,size:"lg",color:f||"#9B4DEE"}):null),e.createElement("div",{className:"title-subtitle"},e.createElement("span",{className:"title"},t),n&&e.createElement("span",{className:"subtitle"},n))),e.createElement("div",{className:"value-icon"},e.createElement("span",{className:"value"},i),e.createElement(dt,c?{icon:d?mt:pt,style:{fontSize:20}}:{icon:d?mt:pt,style:{fontSize:20},color:"#9B4DEE"}))),e.createElement(sn,{open:d,width:p},l));let un,mn,fn,bn=e=>e;const hn=e=>{switch(e){case"mini":return 30;case"tiny":return 35;case"small":return 40;case"medium":return 50;case"large":return 60;case"big":return 70;case"huge":return 80;case"massive":return 90;default:return 50}},gn=e=>{switch(e){case"mini":return 20;case"tiny":return 22.5;case"small":return 25;case"medium":return 30;case"large":return 35;case"big":return 40;case"huge":return 45;case"massive":return 50;default:return 30}},xn=e=>{switch(e){case"mini":case"tiny":case"small":case"medium":case"large":case"big":case"huge":case"massive":default:return 5}},wn=e=>{switch(e){case"mini":return"40px !important";case"tiny":return"50px !important";case"small":return"60px !important";case"medium":return"65px !important";case"large":return"70px !important";case"big":return"80px !important";case"huge":return"90px !important";case"massive":return"100px !important";default:return"65px !important"}},vn=n.label(un||(un=bn`
    font-family: MontSerrat !important;
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
`),e=>e.size?hn(e.size)+"px":"50px",e=>e.disabled?"normal !important":"pointer !important",e=>e.disabled?"rgba(155, 77, 238, 0.2) !important":"#68349F !important",e=>e.size?hn(e.size)-(gn(e.size)-2*xn(e.size))-xn(e.size)+"px !important":"25px !important",e=>e.size?gn(e.size)+"px !important":"30px !important",e=>e.size?hn(e.size)+"px !important":"50px !important",e=>e.size?gn(e.size)/2+"px !important":"15px !important","#eeeeee",e=>e.size?gn(e.size)-2*xn(e.size)+"px !important":"20px !important",e=>e.size?gn(e.size)-2*xn(e.size)+"px !important":"20px !important","#F1F1F1"),kn=n.div(mn||(mn=bn`
    font-family: MontSerrat !important;
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
`),e=>e.disabled?"0.5 !important":"1 !important",e=>e.size?wn(e.size):"65px !important","#eeeeee",e=>e.size?(e=>{switch(e){case"mini":return"8px !important";case"tiny":return"9px !important";case"small":return"10px !important";case"medium":return"11px !important";case"large":return"12px !important";case"big":return"13px !important";case"huge":return"14px !important";case"massive":return"15px !important";default:return"11px !important"}})(e.size):"11px !important",e=>e.disabled?"default !important":e.checked?"pointer !important":"default !important",e=>e.checked?"#FFFFFF !important":"#9B4DEE !important",e=>e.checked?"#707070 !important":"#FFFFFF !important",e=>e.disabled||e.checked?"default !important":"pointer !important",e=>e.checked?"#9B4DEE !important":"#FFFFFF !important",e=>e.checked?"#FFFFFF !important":"#707070 !important"),yn=n.div(fn||(fn=bn`
    font-family: MontSerrat !important;
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
`),e=>e.disabled?"0.5 !important":"1 !important",e=>e.size?wn(e.size):"70px !important","#eeeeee",e=>e.size?(e=>{switch(e){case"mini":return"7px !important";case"tiny":return"8px !important";case"small":return"9px !important";case"medium":return"10px !important";case"large":return"11px !important";case"big":return"12px !important";case"huge":return"13px !important";case"massive":return"14px !important";default:return"10px !important"}})(e.size):"10px !important",e=>e.disabled?"default !important":e.checked?"pointer !important":"default !important",e=>e.checked?"#FFFFFF !important":"#E0457B !important",e=>e.checked?"#707070 !important":"#FFFFFF !important",e=>e.disabled||e.checked?"default !important":"pointer !important",e=>e.checked?"#4BA047 !important":"#FFFFFF !important",e=>e.checked?"#FFFFFF !important":"#707070 !important"),_n=({type:t,checked:r,onChange:n,size:o,disabled:i,selectionRef:a})=>{switch(t){case"switch":return e.createElement(vn,{size:o,ref:a,disabled:i},e.createElement("input",{type:"checkbox",checked:r}),e.createElement("span",{className:"control",onClick:()=>i?null:n?n():null}));case"toggle":return e.createElement(kn,{checked:r,ref:a,size:o,disabled:i},e.createElement("div",{className:"btn left",onClick:()=>i?null:r&&n?n():null},e.createElement("span",null,"não")),e.createElement("div",{className:"btn right",onClick:()=>i||r?null:n?n():null},e.createElement("span",null,"sim")));case"activeInactive":return e.createElement(yn,{checked:r,ref:a,size:o,disabled:i},e.createElement("div",{className:"btn left",onClick:()=>i?null:r&&n?n():null},e.createElement("span",null,r?"desativar":"inativo")),e.createElement("div",{className:"btn right",onClick:()=>i||r?null:n?n():null},e.createElement("span",null,r?"ativo":"ativar")))}return e.createElement("div",null)};let En;const Cn=e=>{switch(e){case"small":return"10px";case"medium":return"15px";case"big":return"22px";default:return"15px"}},Sn=n.div(En||(En=(e=>e)`
    font-family: MontSerrat !important;
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
`),e=>e.disabled?"0.5":"1",e=>e.size?(e=>{switch(e){case"small":return"20px";case"medium":return"30px";case"big":return"40px";default:return"30px"}})(e.size):"30px",e=>e.size?Cn(e.size):"15px",e=>e.size?(e=>{switch(e){case"small":return"20px";case"medium":return"30px";case"big":return"40px";default:return"30px"}})(e.size):"30px","#707070",e=>e.noLess?"0.2":"1",e=>e.disabled||e.noLess?"default":"pointer",e=>e.noMore?"0.2":"1",e=>e.disabled||e.noMore?"default":"pointer",e=>{return e.size?(r=e.value,"small"===(t=e.size)?r<100?"15px":r<1e3?"20px":r<1e4?"25px":"30px":"medium"===t?r<100?"20px":r<1e3?"30px":r<1e4?"40px":"50px":"big"===t?r<100?"30px":r<1e3?"40px":r<1e4?"55px":"70px":"50px"):"15px";var t,r},e=>e.size?Cn(e.size):"15px","#707070"),On=({size:n,disabled:o,value:i,limit:a,minimum:l,more:c,less:d,onChange:s})=>{const[p,u]=t(!1),[m,f]=t(!1),[b,h]=t("medium");return r(()=>{n&&h(n)},[n]),r(()=>{u(!!(l&&i<=l||i<=0))},[l,i]),r(()=>{f(!!(a&&i>=a))},[a,i]),e.createElement(Sn,{limit:a,minimum:l,value:i,size:b,disabled:o,noLess:p,noMore:m},e.createElement("div",{className:"btn left",onClick:()=>o?null:d?p?null:d():null},e.createElement(dt,{icon:ht})),e.createElement("input",{value:i||0===i?i.toString():"",type:"number",onChange:e=>s?s(Number(e.target.value)):null,disabled:o||!s}),e.createElement("div",{className:"btn right",onClick:()=>o||m?null:c?c():null},e.createElement(dt,{icon:gt})))};let $n,zn,Fn,Mn=e=>e;const Dn=n.div($n||($n=Mn`
    font-family: MontSerrat !important;
    box-shadow: ${0};

    border: ${0};
    padding: 1.25rem;
    background-color: ${0};
    border-radius: 1.875rem;
    position: relative;

    width: ${0};

    .loading-card {
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
`),e=>"none"==e.type||"border"==e.type?"none":"min-shadow"==e.type?"0px 0.125rem 0.25rem #00000029":"0 1.25rem 3.125rem 0 rgba(0, 0, 0, 0.16)",e=>{var t;return"border"==e.type||null!==(t=e.style)&&void 0!==t&&t.borderRadius?"1px solid  #E1E6EB":""},"#FFFFFF",e=>e.width?"string"==typeof e.width?e.width:e.width+"px":"100%"),Bn=n.a(zn||(zn=Mn`
    font-family: MontSerrat !important;
    background-color: ${0};
    padding: 0.75rem 1.5625rem;
    border-radius: 1.875rem;
    border: 1px solid ${0};
    width: ${0};
    cursor: pointer;
    display: flex;
    align-items: center;

    :hover {
        background-color: ${0};
    }

    span {
        margin-left: 0.9375rem;
        font-size: 0.9375rem;
        color: ${0};
    }
`),"#eeeeee","#D1D8DC",e=>e.width?"string"==typeof e.width?e.width:e.width+"px":"100%","#F1F1F1",e=>e.colorText?e.colorText:"#68349F"),In=n.div(Fn||(Fn=Mn`
    font-family: MontSerrat !important;

    color: ${0};
    background-color: ${0};

    border: 1px solid ${0};
    text-align: center;
    margin-top: -1.5625rem;
    padding-top: 1.5625rem;
    width: 100%;

    border-bottom-left-radius: 1.875rem;
    border-bottom-right-radius: 1.875rem;
`),"#707070","#F1F1F1","#E1E6EB"),Pn=({children:t,width:r,type:n="shadow",style:o,icon:i,sizeIcon:a,colorIcon:l,text:c,colorText:d,onClick:s,loading:p,className:u,id:m,complement:f,complementStyle:b,complementClassName:h,...g})=>{function x(){return f?e.createElement("div",null,e.createElement(Dn,{className:u,width:r,style:o,type:n,id:m},p&&e.createElement("div",{className:"loading-card"},e.createElement(Rt,null)),t),e.createElement(In,{className:h,style:b},f)):e.createElement(Dn,{className:u,width:r,style:o,type:n,id:m},p&&e.createElement("div",{className:"loading-card"},e.createElement(Rt,null)),t)}switch(n){case"shadow":return x();case"button":return e.createElement(Bn,{style:o,colorText:d,onClick:s,href:g.href,width:r,className:u,id:m},i&&e.createElement(e.Fragment,null,e.createElement(dt,{icon:i,color:l||"#68349F",size:a||"lg"})),e.createElement("span",null,c));default:return x()}};let An;const Tn=n.div(An||(An=(e=>e)`
    font-family: MontSerrat !important;
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

`),e=>e.brand?"#D8B8F9":"#ACACAC",e=>e.brand?"#9B4DEE":"#707070",e=>e.brand?"#D8B8F9":"#FFFFFF",e=>e.brand?"rgba(155, 77, 238, 0.2)":"#F1F1F1",e=>e.labelColor?e.labelColor:"#9B4DEE");var Nn=e&&"object"==typeof e&&"default"in e?e.default:e;function jn(){return(jn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Ln(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Vn=function(e,t,r,n,o,i,a,l){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[r,n,o,i,a,l],s=0;(c=new Error(t.replace(/%s/g,function(){return d[s++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}};function Rn(e,t,r){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=r;else{var n=e.createTextRange();n.collapse(!0),n.moveStart("character",t),n.moveEnd("character",r-t),n.select()}}var qn={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function Un(e,t,r){var n="",o="",i=null,a=[];if(void 0===t&&(t="_"),null==r&&(r=qn),!e||"string"!=typeof e)return{maskChar:t,formatChars:r,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(e){l=!l&&"\\"===e||(l||!r[e]?(a.push(n.length),n.length===a.length-1&&(o+=e)):i=n.length+1,n+=e,!1)}),{maskChar:t,formatChars:r,prefix:o,mask:n,lastEditablePosition:i,permanents:a}}function Wn(e,t){return-1!==e.permanents.indexOf(t)}function Hn(e,t,r){var n=e.mask,o=e.formatChars;return!!r&&(Wn(e,t)?n[t]===r:new RegExp(o[n[t]]).test(r))}function Xn(e,t){return t.split("").every(function(t,r){return Wn(e,r)||!Hn(e,r,t)})}function Yn(e,t){var r=e.prefix;if(!e.maskChar){for(;t.length>r.length&&Wn(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var n=r.length,o=t.length;o>=r.length;o--){var i=t[o];if(!Wn(e,o)&&Hn(e,o,i)){n=o+1;break}}return n}function Zn(e,t){return Yn(e,t)===e.mask.length}function Gn(e,t){var r=e.maskChar,n=e.mask,o=e.prefix;if(!r){for((t=Jn(e,"",t,0)).length<o.length&&(t=o);t.length<n.length&&Wn(e,t.length);)t+=n[t.length];return t}if(t)return Jn(e,Gn(e,""),t,0);for(var i=0;i<n.length;i++)Wn(e,i)?t+=n[i]:t+=r;return t}function Jn(e,t,r,n){var o=e.mask,i=e.maskChar,a=e.prefix,l=r.split(""),c=Zn(e,t);return!i&&n>t.length&&(t+=o.slice(t.length,n)),l.every(function(r){for(;s=r,Wn(e,d=n)&&s!==o[d];){if(n>=t.length&&(t+=o[n]),l=r,i&&Wn(e,n)&&l===i)return!0;if(++n>=o.length)return!1}var l,d,s;return!Hn(e,n,r)&&r!==i||(n<t.length?t=i||c||n<a.length?t.slice(0,n)+r+t.slice(n+1):(t=t.slice(0,n)+r+t.slice(n),Gn(e,t)):i||(t+=r),++n<o.length)}),t}function Kn(e,t){for(var r=e.mask,n=t;n<r.length;++n)if(!Wn(e,n))return n;return null}function Qn(e){return e||0===e?e+"":""}function eo(e){return"function"==typeof e}function to(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function ro(e){return(to()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(e,1e3/60)})(e)}function no(e){(to()||clearTimeout)(e)}var oo=function(e){function t(t){var r=e.call(this,t)||this;r.focused=!1,r.mounted=!1,r.previousSelection=null,r.selectionDeferId=null,r.saveSelectionLoopDeferId=null,r.saveSelectionLoop=function(){r.previousSelection=r.getSelection(),r.saveSelectionLoopDeferId=ro(r.saveSelectionLoop)},r.runSaveSelectionLoop=function(){null===r.saveSelectionLoopDeferId&&r.saveSelectionLoop()},r.stopSaveSelectionLoop=function(){null!==r.saveSelectionLoopDeferId&&(no(r.saveSelectionLoopDeferId),r.saveSelectionLoopDeferId=null,r.previousSelection=null)},r.getInputDOMNode=function(){if(!r.mounted)return null;var e=h.findDOMNode(Ln(Ln(r))),t="undefined"!=typeof window&&e instanceof window.Element;if(e&&!t)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e},r.getInputValue=function(){var e=r.getInputDOMNode();return e?e.value:null},r.setInputValue=function(e){var t=r.getInputDOMNode();t&&(r.value=e,t.value=e)},r.setCursorToEnd=function(){var e=Yn(r.maskOptions,r.value),t=Kn(r.maskOptions,e);null!==t&&r.setCursorPosition(t)},r.setSelection=function(e,t,n){void 0===n&&(n={});var o=r.getInputDOMNode(),i=r.isFocused();o&&i&&(n.deferred||Rn(o,e,t),null!==r.selectionDeferId&&no(r.selectionDeferId),r.selectionDeferId=ro(function(){r.selectionDeferId=null,Rn(o,e,t)}),r.previousSelection={start:e,end:t,length:Math.abs(t-e)})},r.getSelection=function(){return function(e){var t=0,r=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,r=e.selectionEnd;else{var n=document.selection.createRange();n.parentElement()===e&&(t=-n.moveStart("character",-e.value.length),r=-n.moveEnd("character",-e.value.length))}return{start:t,end:r,length:r-t}}(r.getInputDOMNode())},r.getCursorPosition=function(){return r.getSelection().start},r.setCursorPosition=function(e){r.setSelection(e,e)},r.isFocused=function(){return r.focused},r.getBeforeMaskedValueChangeConfig=function(){var e=r.maskOptions;return{mask:e.mask,maskChar:e.maskChar,permanents:e.permanents,alwaysShowMask:!!r.props.alwaysShowMask,formatChars:e.formatChars}},r.isInputAutofilled=function(e,t,n,o){var i=r.getInputDOMNode();try{if(i.matches(":-webkit-autofill"))return!0}catch(e){}return!r.focused||o.end<n.length&&t.end===e.length},r.onChange=function(e){var t=Ln(Ln(r)).beforePasteState,n=Ln(Ln(r)).previousSelection,o=r.props.beforeMaskedValueChange,i=r.getInputValue(),a=r.value,l=r.getSelection();r.isInputAutofilled(i,l,a,n)&&(a=Gn(r.maskOptions,""),n={start:0,end:0,length:0}),t&&(l={start:(n=t.selection).start+i.length,end:n.start+i.length,length:0},i=(a=t.value).slice(0,n.start)+i+a.slice(n.end),r.beforePasteState=null);var c=function(e,t,r,n,o){var i=e.mask,a=e.prefix,l=e.lastEditablePosition,c=t,d="",s=0,p=0,u=Math.min(o.start,r.start);return r.end>o.start?p=(s=function(e,t,r,n){var o=e.mask,i=e.maskChar,a=r.split(""),l=n;return a.every(function(t){for(;a=t,Wn(e,r=n)&&a!==o[r];)if(++n>=o.length)return!1;var r,a;return(Hn(e,n,t)||t===i)&&n++,n<o.length}),n-l}(e,0,d=c.slice(o.start,r.end),u))?o.length:0:c.length<n.length&&(p=n.length-c.length),c=n,p&&(1!==p||o.length||(u=o.start===r.start?Kn(e,r.start):function(e,t){for(var r=t;0<=r;--r)if(!Wn(e,r))return r;return null}(e,r.start)),c=function(e,t,r,n){var o=r+n,i=e.maskChar,a=e.mask,l=e.prefix,c=t.split("");if(i)return c.map(function(t,n){return n<r||o<=n?t:Wn(e,n)?a[n]:i}).join("");for(var d=o;d<c.length;d++)Wn(e,d)&&(c[d]="");return r=Math.max(l.length,r),c.splice(r,o-r),t=c.join(""),Gn(e,t)}(e,c,u,p)),c=Jn(e,c,d,u),(u+=s)>=i.length?u=i.length:u<a.length&&!s?u=a.length:u>=a.length&&u<l&&s&&(u=Kn(e,u)),d||(d=null),{value:c=Gn(e,c),enteredString:d,selection:{start:u,end:u}}}(r.maskOptions,i,l,a,n),d=c.enteredString,s=c.selection,p=c.value;if(eo(o)){var u=o({value:p,selection:s},{value:a,selection:n},d,r.getBeforeMaskedValueChangeConfig());p=u.value,s=u.selection}r.setInputValue(p),eo(r.props.onChange)&&r.props.onChange(e),r.isWindowsPhoneBrowser?r.setSelection(s.start,s.end,{deferred:!0}):r.setSelection(s.start,s.end)},r.onFocus=function(e){var t=r.props.beforeMaskedValueChange,n=r.maskOptions,o=n.mask,i=n.prefix;if(r.focused=!0,r.mounted=!0,o){if(r.value)Yn(r.maskOptions,r.value)<r.maskOptions.mask.length&&r.setCursorToEnd();else{var a=Gn(r.maskOptions,i),l=Gn(r.maskOptions,a),c=Yn(r.maskOptions,l),d=Kn(r.maskOptions,c),s={start:d,end:d};if(eo(t)){var p=t({value:l,selection:s},{value:r.value,selection:null},null,r.getBeforeMaskedValueChangeConfig());l=p.value,s=p.selection}var u=l!==r.getInputValue();u&&r.setInputValue(l),u&&eo(r.props.onChange)&&r.props.onChange(e),r.setSelection(s.start,s.end)}r.runSaveSelectionLoop()}eo(r.props.onFocus)&&r.props.onFocus(e)},r.onBlur=function(e){var t=r.props.beforeMaskedValueChange,n=r.maskOptions.mask;if(r.stopSaveSelectionLoop(),r.focused=!1,n&&!r.props.alwaysShowMask&&Xn(r.maskOptions,r.value)){var o="";eo(t)&&(o=t({value:o,selection:null},{value:r.value,selection:r.previousSelection},null,r.getBeforeMaskedValueChangeConfig()).value);var i=o!==r.getInputValue();i&&r.setInputValue(o),i&&eo(r.props.onChange)&&r.props.onChange(e)}eo(r.props.onBlur)&&r.props.onBlur(e)},r.onMouseDown=function(e){!r.focused&&document.addEventListener&&(r.mouseDownX=e.clientX,r.mouseDownY=e.clientY,r.mouseDownTime=(new Date).getTime(),document.addEventListener("mouseup",function e(t){if(document.removeEventListener("mouseup",e),r.focused){var n=Math.abs(t.clientX-r.mouseDownX),o=Math.abs(t.clientY-r.mouseDownY),i=Math.max(n,o),a=(new Date).getTime()-r.mouseDownTime;(i<=10&&a<=200||i<=5&&a<=300)&&r.setCursorToEnd()}})),eo(r.props.onMouseDown)&&r.props.onMouseDown(e)},r.onPaste=function(e){eo(r.props.onPaste)&&r.props.onPaste(e),e.defaultPrevented||(r.beforePasteState={value:r.getInputValue(),selection:r.getSelection()},r.setInputValue(""))},r.handleRef=function(e){null==r.props.children&&eo(r.props.inputRef)&&r.props.inputRef(e)};var n=t.alwaysShowMask,o=t.beforeMaskedValueChange,i=t.defaultValue,a=t.value;r.maskOptions=Un(t.mask,t.maskChar,t.formatChars),null==i&&(i=""),null==a&&(a=i);var l=Qn(a);if(r.maskOptions.mask&&(n||l)&&(l=Gn(r.maskOptions,l),eo(o))){var c=t.value;null==t.value&&(c=i),l=o({value:l,selection:null},{value:c=Qn(c),selection:null},null,r.getBeforeMaskedValueChangeConfig()).value}return r.value=l,r}!function(e,t){e.prototype=Object.create(t.prototype),function(e,t){for(var r=Object.getOwnPropertyNames(t),n=0;n<r.length;n++){var o=r[n],i=Object.getOwnPropertyDescriptor(t,o);i&&i.configurable&&void 0===e[o]&&Object.defineProperty(e,o,i)}}(e.prototype.constructor=e,t)}(t,e);var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=function(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),r=navigator.userAgent;return e.test(r)&&t.test(r)}(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},r.componentDidUpdate=function(){var e=this.previousSelection,t=this.props,r=t.beforeMaskedValueChange,n=t.mask,o=t.maskChar,i=t.formatChars,a=this.maskOptions,l=t.alwaysShowMask||this.isFocused(),c=null!=this.props.value,d=c?Qn(this.props.value):this.value,s=e?e.start:null;if(this.maskOptions=Un(n,o,i),this.maskOptions.mask){!a.mask&&this.isFocused()&&this.runSaveSelectionLoop();var p=this.maskOptions.mask&&this.maskOptions.mask!==a.mask;if(a.mask||c||(d=this.getInputValue()),(p||this.maskOptions.mask&&(d||l))&&(d=Gn(this.maskOptions,d)),p){var u=Yn(this.maskOptions,d);(null===s||u<s)&&(s=Zn(this.maskOptions,d)?u:Kn(this.maskOptions,u))}!this.maskOptions.mask||!Xn(this.maskOptions,d)||l||c&&this.props.value||(d="");var m={start:s,end:s};if(eo(r)){var f=r({value:d,selection:m},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());d=f.value,m=f.selection}this.value=d;var b=this.getInputValue()!==this.value;b?(this.setInputValue(this.value),this.forceUpdate()):p&&this.forceUpdate();var h=!1;null!=m.start&&null!=m.end&&(h=!e||e.start!==m.start||e.end!==m.end),(h||b)&&this.setSelection(m.start,m.end)}else a.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},r.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&no(this.selectionDeferId),this.stopSaveSelectionLoop()},r.render=function(){var e,t=this.props,r=t.children,n=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)0<=t.indexOf(r=i[n])||(o[r]=e[r]);return o}(t,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(r){eo(r)||Vn(!1);var o=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],i=jn({},n);o.forEach(function(e){return delete i[e]}),e=r(i),o.filter(function(t){return null!=e.props[t]&&e.props[t]!==n[t]}).length&&Vn(!1)}else e=Nn.createElement("input",jn({ref:this.handleRef},n));var a={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(n.disabled||n.readOnly||(a.onChange=this.onChange,a.onPaste=this.onPaste,a.onMouseDown=this.onMouseDown),null!=n.value&&(a.value=this.value)),e=Nn.cloneElement(e,a)},t}(Nn.Component),io=function(){};if("production"!==process.env.NODE_ENV){var ao=function(e,t){var r=arguments.length;t=new Array(r>1?r-1:0);for(var n=1;n<r;n++)t[n-1]=arguments[n];var o=0,i="Warning: "+e.replace(/%s/g,function(){return t[o++]});"undefined"!=typeof console&&console.error(i);try{throw new Error(i)}catch(e){}};io=function(e,t,r){var n=arguments.length;r=new Array(n>2?n-2:0);for(var o=2;o<n;o++)r[o-2]=arguments[o];if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");e||ao.apply(null,[t].concat(r))}}var lo=io;function co(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var so=co(e),po=co(function(e,t,r,n,o,i,a,l){if("production"!==process.env.NODE_ENV&&void 0===t)throw new Error("invariant requires an error message argument");if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[r,n,o,i,a,l],s=0;(c=new Error(t.replace(/%s/g,function(){return d[s++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}),uo=co(lo);function mo(){return(mo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function fo(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function bo(e,t,r){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=r;else{var n=e.createTextRange();n.collapse(!0),n.moveStart("character",t),n.moveEnd("character",r-t),n.select()}}var ho={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function go(e,t,r){var n="",o="",i=null,a=[];if(void 0===t&&(t="_"),null==r&&(r=ho),!e||"string"!=typeof e)return{maskChar:t,formatChars:r,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(e){l||"\\"!==e?(l||!r[e]?(a.push(n.length),n.length===a.length-1&&(o+=e)):i=n.length+1,n+=e,l=!1):l=!0}),{maskChar:t,formatChars:r,prefix:o,mask:n,lastEditablePosition:i,permanents:a}}function xo(e,t){return-1!==e.permanents.indexOf(t)}function wo(e,t,r){var n=e.mask,o=e.formatChars;return!!r&&(xo(e,t)?n[t]===r:new RegExp(o[n[t]]).test(r))}function vo(e,t){return t.split("").every(function(t,r){return xo(e,r)||!wo(e,r,t)})}function ko(e,t){var r=e.prefix;if(!e.maskChar){for(;t.length>r.length&&xo(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var n=r.length,o=t.length;o>=r.length;o--){var i=t[o];if(!xo(e,o)&&wo(e,o,i)){n=o+1;break}}return n}function yo(e,t){return ko(e,t)===e.mask.length}function _o(e,t){var r=e.maskChar,n=e.mask,o=e.prefix;if(!r){for((t=Eo(e,"",t,0)).length<o.length&&(t=o);t.length<n.length&&xo(e,t.length);)t+=n[t.length];return t}if(t)return Eo(e,_o(e,""),t,0);for(var i=0;i<n.length;i++)xo(e,i)?t+=n[i]:t+=r;return t}function Eo(e,t,r,n){var o=e.mask,i=e.maskChar,a=e.prefix,l=r.split(""),c=yo(e,t),d=function(t,r){return!i||!xo(e,r)||t!==i};return!i&&n>t.length&&(t+=o.slice(t.length,n)),l.every(function(r){for(;s=r,xo(e,l=n)&&s!==o[l];){if(n>=t.length&&(t+=o[n]),!d(r,n))return!0;if(++n>=o.length)return!1}var l,s;return!wo(e,n,r)&&r!==i||(n<t.length?i||c||n<a.length?t=t.slice(0,n)+r+t.slice(n+1):(t=t.slice(0,n)+r+t.slice(n),t=_o(e,t)):i||(t+=r),++n<o.length)}),t}function Co(e,t){for(var r=e.mask,n=t;n<r.length;++n)if(!xo(e,n))return n;return null}function So(e){return e||0===e?e+"":""}function Oo(e){return"function"==typeof e}function $o(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function zo(e){return($o()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(e,1e3/60)})(e)}function Fo(e){($o()||clearTimeout)(e)}var Mo=function(e){function t(t){var r;(r=e.call(this,t)||this).focused=!1,r.mounted=!1,r.previousSelection=null,r.selectionDeferId=null,r.saveSelectionLoopDeferId=null,r.saveSelectionLoop=function(){r.previousSelection=r.getSelection(),r.saveSelectionLoopDeferId=zo(r.saveSelectionLoop)},r.runSaveSelectionLoop=function(){null===r.saveSelectionLoopDeferId&&r.saveSelectionLoop()},r.stopSaveSelectionLoop=function(){null!==r.saveSelectionLoopDeferId&&(Fo(r.saveSelectionLoopDeferId),r.saveSelectionLoopDeferId=null,r.previousSelection=null)},r.getInputDOMNode=function(){if(!r.mounted)return null;var e=h.findDOMNode(fo(fo(r))),t="undefined"!=typeof window&&e instanceof window.Element;if(e&&!t)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e},r.getInputValue=function(){var e=r.getInputDOMNode();return e?e.value:null},r.setInputValue=function(e){var t=r.getInputDOMNode();t&&(r.value=e,t.value=e)},r.setCursorToEnd=function(){var e=ko(r.maskOptions,r.value),t=Co(r.maskOptions,e);null!==t&&r.setCursorPosition(t)},r.setSelection=function(e,t,n){void 0===n&&(n={});var o=r.getInputDOMNode(),i=r.isFocused();o&&i&&(n.deferred||bo(o,e,t),null!==r.selectionDeferId&&Fo(r.selectionDeferId),r.selectionDeferId=zo(function(){r.selectionDeferId=null,bo(o,e,t)}),r.previousSelection={start:e,end:t,length:Math.abs(t-e)})},r.getSelection=function(){return function(e){var t=0,r=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,r=e.selectionEnd;else{var n=document.selection.createRange();n.parentElement()===e&&(t=-n.moveStart("character",-e.value.length),r=-n.moveEnd("character",-e.value.length))}return{start:t,end:r,length:r-t}}(r.getInputDOMNode())},r.getCursorPosition=function(){return r.getSelection().start},r.setCursorPosition=function(e){r.setSelection(e,e)},r.isFocused=function(){return r.focused},r.getBeforeMaskedValueChangeConfig=function(){var e=r.maskOptions;return{mask:e.mask,maskChar:e.maskChar,permanents:e.permanents,alwaysShowMask:!!r.props.alwaysShowMask,formatChars:e.formatChars}},r.isInputAutofilled=function(e,t,n,o){var i=r.getInputDOMNode();try{if(i.matches(":-webkit-autofill"))return!0}catch(e){}return!r.focused||o.end<n.length&&t.end===e.length},r.onChange=function(e){var t=fo(fo(r)).beforePasteState,n=fo(fo(r)).previousSelection,o=r.props.beforeMaskedValueChange,i=r.getInputValue(),a=r.value,l=r.getSelection();r.isInputAutofilled(i,l,a,n)&&(a=_o(r.maskOptions,""),n={start:0,end:0,length:0}),t&&(l={start:(n=t.selection).start+i.length,end:n.start+i.length,length:0},i=(a=t.value).slice(0,n.start)+i+a.slice(n.end),r.beforePasteState=null);var c=function(e,t,r,n,o){var i=e.mask,a=e.prefix,l=e.lastEditablePosition,c=t,d="",s=0,p=0,u=Math.min(o.start,r.start);return r.end>o.start?p=(s=function(e,t,r,n){var o=e.mask,i=e.maskChar,a=r.split(""),l=n;return a.every(function(t){for(;a=t,xo(e,r=n)&&a!==o[r];)if(++n>=o.length)return!1;var r,a;return(wo(e,n,t)||t===i)&&n++,n<o.length}),n-l}(e,0,d=c.slice(o.start,r.end),u))?o.length:0:c.length<n.length&&(p=n.length-c.length),c=n,p&&(1!==p||o.length||(u=o.start===r.start?Co(e,r.start):function(e,t){for(var r=t;r>=0;--r)if(!xo(e,r))return r;return null}(e,r.start)),c=function(e,t,r,n){var o=r+n,i=e.maskChar,a=e.mask,l=e.prefix,c=t.split("");if(!i){for(var d=o;d<c.length;d++)xo(e,d)&&(c[d]="");return r=Math.max(l.length,r),c.splice(r,o-r),t=c.join(""),_o(e,t)}return c.map(function(t,n){return n<r||n>=o?t:xo(e,n)?a[n]:i}).join("")}(e,c,u,p)),c=Eo(e,c,d,u),(u+=s)>=i.length?u=i.length:u<a.length&&!s?u=a.length:u>=a.length&&u<l&&s&&(u=Co(e,u)),d||(d=null),{value:c=_o(e,c),enteredString:d,selection:{start:u,end:u}}}(r.maskOptions,i,l,a,n),d=c.enteredString,s=c.selection,p=c.value;if(Oo(o)){var u=o({value:p,selection:s},{value:a,selection:n},d,r.getBeforeMaskedValueChangeConfig());p=u.value,s=u.selection}r.setInputValue(p),Oo(r.props.onChange)&&r.props.onChange(e),r.isWindowsPhoneBrowser?r.setSelection(s.start,s.end,{deferred:!0}):r.setSelection(s.start,s.end)},r.onFocus=function(e){var t=r.props.beforeMaskedValueChange,n=r.maskOptions,o=n.mask,i=n.prefix;if(r.focused=!0,r.mounted=!0,o){if(r.value)ko(r.maskOptions,r.value)<r.maskOptions.mask.length&&r.setCursorToEnd();else{var a=_o(r.maskOptions,i),l=_o(r.maskOptions,a),c=ko(r.maskOptions,l),d=Co(r.maskOptions,c),s={start:d,end:d};if(Oo(t)){var p=t({value:l,selection:s},{value:r.value,selection:null},null,r.getBeforeMaskedValueChangeConfig());l=p.value,s=p.selection}var u=l!==r.getInputValue();u&&r.setInputValue(l),u&&Oo(r.props.onChange)&&r.props.onChange(e),r.setSelection(s.start,s.end)}r.runSaveSelectionLoop()}Oo(r.props.onFocus)&&r.props.onFocus(e)},r.onBlur=function(e){var t=r.props.beforeMaskedValueChange,n=r.maskOptions.mask;if(r.stopSaveSelectionLoop(),r.focused=!1,n&&!r.props.alwaysShowMask&&vo(r.maskOptions,r.value)){var o="";Oo(t)&&(o=t({value:o,selection:null},{value:r.value,selection:r.previousSelection},null,r.getBeforeMaskedValueChangeConfig()).value);var i=o!==r.getInputValue();i&&r.setInputValue(o),i&&Oo(r.props.onChange)&&r.props.onChange(e)}Oo(r.props.onBlur)&&r.props.onBlur(e)},r.onMouseDown=function(e){!r.focused&&document.addEventListener&&(r.mouseDownX=e.clientX,r.mouseDownY=e.clientY,r.mouseDownTime=(new Date).getTime(),document.addEventListener("mouseup",function e(t){if(document.removeEventListener("mouseup",e),r.focused){var n=Math.abs(t.clientX-r.mouseDownX),o=Math.abs(t.clientY-r.mouseDownY),i=Math.max(n,o),a=(new Date).getTime()-r.mouseDownTime;(i<=10&&a<=200||i<=5&&a<=300)&&r.setCursorToEnd()}})),Oo(r.props.onMouseDown)&&r.props.onMouseDown(e)},r.onPaste=function(e){Oo(r.props.onPaste)&&r.props.onPaste(e),e.defaultPrevented||(r.beforePasteState={value:r.getInputValue(),selection:r.getSelection()},r.setInputValue(""))},r.handleRef=function(e){null==r.props.children&&Oo(r.props.inputRef)&&r.props.inputRef(e)};var n=t.alwaysShowMask,o=t.beforeMaskedValueChange,i=t.defaultValue,a=t.value;r.maskOptions=go(t.mask,t.maskChar,t.formatChars),null==i&&(i=""),null==a&&(a=i);var l=So(a);if(r.maskOptions.mask&&(n||l)&&(l=_o(r.maskOptions,l),Oo(o))){var c=t.value;null==t.value&&(c=i),l=o({value:l,selection:null},{value:c=So(c),selection:null},null,r.getBeforeMaskedValueChangeConfig()).value}return r.value=l,r}var r,n;n=e,(r=t).prototype=Object.create(n.prototype),r.prototype.constructor=r,function(e,t){for(var r=Object.getOwnPropertyNames(t),n=0;n<r.length;n++){var o=r[n],i=Object.getOwnPropertyDescriptor(t,o);i&&i.configurable&&void 0===e[o]&&Object.defineProperty(e,o,i)}}(r,n);var o=t.prototype;return o.componentDidMount=function(){var e,t,r;this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=(e=new RegExp("windows","i"),t=new RegExp("phone","i"),r=navigator.userAgent,e.test(r)&&t.test(r)),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},o.componentDidUpdate=function(){var e=this.previousSelection,t=this.props,r=t.beforeMaskedValueChange,n=t.mask,o=t.maskChar,i=t.formatChars,a=this.maskOptions,l=t.alwaysShowMask||this.isFocused(),c=null!=this.props.value,d=c?So(this.props.value):this.value,s=e?e.start:null;if(this.maskOptions=go(n,o,i),this.maskOptions.mask){!a.mask&&this.isFocused()&&this.runSaveSelectionLoop();var p=this.maskOptions.mask&&this.maskOptions.mask!==a.mask;if(a.mask||c||(d=this.getInputValue()),(p||this.maskOptions.mask&&(d||l))&&(d=_o(this.maskOptions,d)),p){var u=ko(this.maskOptions,d);(null===s||u<s)&&(s=yo(this.maskOptions,d)?u:Co(this.maskOptions,u))}!this.maskOptions.mask||!vo(this.maskOptions,d)||l||c&&this.props.value||(d="");var m={start:s,end:s};if(Oo(r)){var f=r({value:d,selection:m},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());d=f.value,m=f.selection}this.value=d;var b=this.getInputValue()!==this.value;b?(this.setInputValue(this.value),this.forceUpdate()):p&&this.forceUpdate();var h=!1;null!=m.start&&null!=m.end&&(h=!e||e.start!==m.start||e.end!==m.end),(h||b)&&this.setSelection(m.start,m.end)}else a.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},o.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&Fo(this.selectionDeferId),this.stopSaveSelectionLoop()},o.render=function(){var e,t=this.props,r=t.mask,n=t.maskChar,o=t.formatChars,i=t.inputRef,a=t.children,l=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}(t,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if("production"!==process.env.NODE_ENV&&uo(!l.maxLength||!go(r,n,o).mask,"react-input-mask: maxLength property shouldn't be passed to the masked input. It breaks masking and unnecessary because length is limited by the mask length."),a){Oo(a)||("production"!==process.env.NODE_ENV?po(!1,"react-input-mask: children must be a function"):po(!1));var c=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],d=mo({},l);c.forEach(function(e){return delete d[e]}),e=a(d);var s=c.filter(function(t){return null!=e.props[t]&&e.props[t]!==l[t]});s.length&&("production"!==process.env.NODE_ENV?po(!1,"react-input-mask: the following props should be passed to the react-input-mask's component and should not be altered in children's function: "+s.join(", ")):po(!1)),"production"!==process.env.NODE_ENV&&uo(!i,"react-input-mask: inputRef is ignored when children is passed, attach ref to the children instead")}else e=so.createElement("input",mo({ref:this.handleRef},l));var p={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(l.disabled||l.readOnly||(p.onChange=this.onChange,p.onPaste=this.onPaste,p.onMouseDown=this.onMouseDown),null!=l.value&&(p.value=this.value)),e=so.cloneElement(e,p)},t}(so.Component),Do=de(function(e){e.exports="production"===process.env.NODE_ENV?oo:Mo});const Bo=({labelColor:t,label:r,brand:n,otherFormatDate:o,...i})=>{const a=e.forwardRef((t,r)=>e.createElement(Do,{ref:r,mask:"99/99/9999",onClick:t.onClick,value:t.value,readOnly:i.readOnly,onChange:t.onChange,placeholder:i.placeholderText}));return e.createElement(Tn,{brand:n,labelColor:t},r&&e.createElement("span",null,r),e.createElement("div",null,e.createElement(b,Object.assign({},i,{locale:"pt-BR",customInput:o?void 0:e.createElement(a,{onClick:i.onCalendarOpen,value:i.value,onChange:i.onChange}),dateFormat:o||"dd/MM/yyyy",readOnly:!1,onChangeRaw:e=>i.readOnly?e.preventDefault():null}))))};let Io,Po,Ao,To,No=e=>e;const jo=n.div(Io||(Io=No`
    font-family: MontSerrat !important;
    display: flex;
    margin-bottom: 10px;
`)),Lo=n.span(Po||(Po=No`
    font-family: MontSerrat !important;
    flex: 1;
    text-align: left;
    color: ${0};
    font-weight: bold;
`),"#707070"),Vo=n.span(Ao||(Ao=No`
    flex: 1;
    text-align: right;
    color: ${0};
`),"#ACACAC"),Ro=n.div(To||(To=No`
    margin-bottom: ${0};

    /*!
 * # Semantic UI 2.4.1 - Table
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

    /*******************************
             Table
*******************************/

    /* Prototype */
    .ui.table {
        width: 100%;
        background: #ffffff;
        margin: 1em 0em;
        border: none !important;
        -webkit-box-shadow: none;
        box-shadow: none;
        border-radius: 0.28571429rem;
        text-align: left;
        color: #707070;
        border-collapse: separate;
        border-spacing: 0px;
    }
    .ui.table:first-child {
        margin-top: 0em;
    }
    .ui.table:last-child {
        margin-bottom: 0em;
    }

    /*******************************
               Parts
  *******************************/

    /* Table Content */
    .ui.table th,
    .ui.table td {
        -webkit-transition: background 0.1s ease, color 0.1s ease;
        transition: background 0.1s ease, color 0.1s ease;
    }

    /* Headers */
    .ui.table thead {
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    .ui.table thead th {
        cursor: auto;
        background: none !important;
        text-align: inherit;
        color: #9b4dee !important;
        padding: 0.92857143em 0.78571429em;
        vertical-align: inherit;
        font-style: none;
        font-weight: bold;
        text-transform: none;
        border-bottom: 1px solid rgba(34, 36, 38, 0.1);
        border-left: none;
    }
    .ui.table thead tr > th:first-child {
        border-left: none;
    }
    .ui.table thead tr:first-child > th:first-child {
        border-radius: 0.28571429rem 0em 0em 0em;
    }
    .ui.table thead tr:first-child > th:last-child {
        border-radius: 0em 0.28571429rem 0em 0em;
    }
    .ui.table thead tr:first-child > th:only-child {
        border-radius: 0.28571429rem 0.28571429rem 0em 0em;
    }

    /* Footer */
    .ui.table tfoot {
        -webkit-box-shadow: none;
        box-shadow: none;
        margin-top: 20px;
    }
    .ui.table tfoot th {
        cursor: auto;
        border-top: 1px solid rgba(34, 36, 38, 0.15);
        background: #f9fafb;
        text-align: inherit;
        color: rgba(0, 0, 0, 0.87);
        padding: 0.78571429em 0.78571429em;
        vertical-align: middle;
        font-style: normal;
        font-weight: normal;
        text-transform: none;
    }
    .ui.table tfoot tr > th:first-child {
        border-left: none;
    }
    .ui.table tfoot tr:first-child > th:first-child {
        border-radius: 0em 0em 0em 0.28571429rem;
    }
    .ui.table tfoot tr:first-child > th:last-child {
        border-radius: 0em 0em 0.28571429rem 0em;
    }
    .ui.table tfoot tr:first-child > th:only-child {
        border-radius: 0em 0em 0.28571429rem 0.28571429rem;
    }

    /* Table Row */
    .ui.table tr td {
        border-top: 1px solid rgba(34, 36, 38, 0.1);
    }
    .ui.table tr:first-child td {
        border-top: none;
    }

    /* Repeated tbody */
    .ui.table tbody + tbody tr:first-child td {
        border-top: 1px solid rgba(34, 36, 38, 0.1);
    }

    /* Table Cells */
    .ui.table td {
        padding: 0.78571429em 0.78571429em;
        text-align: inherit;
    }

    /* Icons */
    .ui.table > .icon {
        vertical-align: baseline;
    }
    .ui.table > .icon:only-child {
        margin: 0em;
    }

    /* Table Segment */
    .ui.table.segment {
        padding: 0em;
    }
    .ui.table.segment:after {
        display: none;
    }
    .ui.table.segment.stacked:after {
        display: block;
    }

    /* Responsive */
    @media only screen and (max-width: 767px) {
        .ui.table:not(.unstackable) {
            width: 100%;
        }
        .ui.table:not(.unstackable) tbody,
        .ui.table:not(.unstackable) tr,
        .ui.table:not(.unstackable) tr > th,
        .ui.table:not(.unstackable) tr > td {
            width: auto !important;
            display: block !important;
        }
        .ui.table:not(.unstackable) {
            padding: 0em;
        }
        .ui.table:not(.unstackable) thead {
            display: block;
        }
        .ui.table:not(.unstackable) tfoot {
            display: block;
        }
        .ui.table:not(.unstackable) tr {
            padding-top: 1em;
            padding-bottom: 1em;
            -webkit-box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important;
            box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important;
        }
        .ui.table:not(.unstackable) tr > th,
        .ui.table:not(.unstackable) tr > td {
            background: none;
            border: none !important;
            padding: 0.25em 0.75em !important;
            -webkit-box-shadow: none !important;
            box-shadow: none !important;
        }
        .ui.table:not(.unstackable) th:first-child,
        .ui.table:not(.unstackable) td:first-child {
            font-weight: bold;
        }

        /* Definition Table */
        .ui.definition.table:not(.unstackable) thead th:first-child {
            -webkit-box-shadow: none !important;
            box-shadow: none !important;
        }
    }

    /*******************************
              Coupling
  *******************************/

    /* UI Image */
    .ui.table th .image,
    .ui.table th .image img,
    .ui.table td .image,
    .ui.table td .image img {
        max-width: none;
    }

    /*******************************
               Types
  *******************************/

    /*--------------
      Complex
  ---------------*/

    .ui.structured.table {
        border-collapse: collapse;
    }
    .ui.structured.table thead th {
        border-left: none;
        border-right: none;
    }
    .ui.structured.sortable.table thead th {
        border-left: 1px solid rgba(34, 36, 38, 0.15);
        border-right: 1px solid rgba(34, 36, 38, 0.15);
    }
    .ui.structured.basic.table th {
        border-left: none;
        border-right: none;
    }
    .ui.structured.celled.table tr th,
    .ui.structured.celled.table tr td {
        border-left: 1px solid rgba(34, 36, 38, 0.1);
        border-right: 1px solid rgba(34, 36, 38, 0.1);
    }

    /*--------------
     Definition
  ---------------*/

    .ui.definition.table thead:not(.full-width) th:first-child {
        pointer-events: none;
        background: transparent;
        font-weight: normal;
        color: rgba(0, 0, 0, 0.4);
        -webkit-box-shadow: -1px -1px 0px 1px #ffffff;
        box-shadow: -1px -1px 0px 1px #ffffff;
    }
    .ui.definition.table tfoot:not(.full-width) th:first-child {
        pointer-events: none;
        background: transparent;
        font-weight: rgba(0, 0, 0, 0.4);
        color: normal;
        -webkit-box-shadow: 1px 1px 0px 1px #ffffff;
        box-shadow: 1px 1px 0px 1px #ffffff;
    }

    /* Remove Border */
    .ui.celled.definition.table thead:not(.full-width) th:first-child {
        -webkit-box-shadow: 0px -1px 0px 1px #ffffff;
        box-shadow: 0px -1px 0px 1px #ffffff;
    }
    .ui.celled.definition.table tfoot:not(.full-width) th:first-child {
        -webkit-box-shadow: 0px 1px 0px 1px #ffffff;
        box-shadow: 0px 1px 0px 1px #ffffff;
    }

    /* Highlight Defining Column */
    .ui.definition.table tr td:first-child:not(.ignored),
    .ui.definition.table tr td.definition {
        background: none;
        font-weight: bold;
        color: ${0};
        text-transform: "";
        -webkit-box-shadow: "";
        box-shadow: "";
        text-align: "";
        font-size: 1em;
        padding-left: "";
        padding-right: "";
    }

    /* Fix 2nd Column */
    .ui.definition.table thead:not(.full-width) th:nth-child(2) {
        border-left: 1px solid rgba(34, 36, 38, 0.15);
    }
    .ui.definition.table tfoot:not(.full-width) th:nth-child(2) {
        border-left: 1px solid rgba(34, 36, 38, 0.15);
    }
    .ui.definition.table td:nth-child(2) {
        border-left: 1px solid rgba(34, 36, 38, 0.15);
    }

    /*******************************
               States
  *******************************/

    /*--------------
      Positive
  ---------------*/

    .ui.table tr.positive,
    .ui.table td.positive {
        -webkit-box-shadow: 0px 0px 0px #a3c293 inset;
        box-shadow: 0px 0px 0px #a3c293 inset;
    }
    .ui.table tr.positive,
    .ui.table td.positive {
        background: #fcfff5 !important;
        color: #2c662d !important;
    }

    /*--------------
       Negative
  ---------------*/

    .ui.table tr.negative,
    .ui.table td.negative {
        -webkit-box-shadow: 0px 0px 0px #e0b4b4 inset;
        box-shadow: 0px 0px 0px #e0b4b4 inset;
    }
    .ui.table tr.negative,
    .ui.table td.negative {
        background: #fff6f6 !important;
        color: #9f3a38 !important;
    }

    /*--------------
        Error
  ---------------*/

    .ui.table tr.error,
    .ui.table td.error {
        -webkit-box-shadow: 0px 0px 0px #e0b4b4 inset;
        box-shadow: 0px 0px 0px #e0b4b4 inset;
    }
    .ui.table tr.error,
    .ui.table td.error {
        background: #fff6f6 !important;
        color: #9f3a38 !important;
    }

    /*--------------
       Warning
  ---------------*/

    .ui.table tr.warning,
    .ui.table td.warning {
        -webkit-box-shadow: 0px 0px 0px #c9ba9b inset;
        box-shadow: 0px 0px 0px #c9ba9b inset;
    }
    .ui.table tr.warning,
    .ui.table td.warning {
        background: #fffaf3 !important;
        color: #573a08 !important;
    }

    /*--------------
       Active
  ---------------*/

    .ui.table tr.active,
    .ui.table td.active {
        -webkit-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.87) inset;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.87) inset;
    }
    .ui.table tr.active,
    .ui.table td.active {
        background: #e0e0e0 !important;
        color: rgba(0, 0, 0, 0.87) !important;
    }

    /*--------------
       Disabled
  ---------------*/

    .ui.table tr.disabled td,
    .ui.table tr td.disabled,
    .ui.table tr.disabled:hover,
    .ui.table tr:hover td.disabled {
        pointer-events: none;
        color: rgba(40, 40, 40, 0.3);
    }

    /*******************************
            Variations
  *******************************/

    /*--------------
      Stackable
  ---------------*/

    @media only screen and (max-width: 991px) {
        .ui[class*="tablet stackable"].table,
        .ui[class*="tablet stackable"].table tbody,
        .ui[class*="tablet stackable"].table tr,
        .ui[class*="tablet stackable"].table tr > th,
        .ui[class*="tablet stackable"].table tr > td {
            width: 100% !important;
            display: block !important;
        }
        .ui[class*="tablet stackable"].table {
            padding: 0em;
        }
        .ui[class*="tablet stackable"].table thead {
            display: block;
        }
        .ui[class*="tablet stackable"].table tfoot {
            display: block;
        }
        .ui[class*="tablet stackable"].table tr {
            padding-top: 1em;
            padding-bottom: 1em;
            -webkit-box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important;
            box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important;
        }
        .ui[class*="tablet stackable"].table tr > th,
        .ui[class*="tablet stackable"].table tr > td {
            background: none;
            border: none !important;
            padding: 0.25em 0.75em;
            -webkit-box-shadow: none !important;
            box-shadow: none !important;
        }

        /* Definition Table */
        .ui.definition[class*="tablet stackable"].table thead th:first-child {
            -webkit-box-shadow: none !important;
            box-shadow: none !important;
        }
    }

    /*--------------
   Text Alignment
  ---------------*/

    .ui.table[class*="left aligned"],
    .ui.table [class*="left aligned"] {
        text-align: left;
    }
    .ui.table[class*="center aligned"],
    .ui.table [class*="center aligned"] {
        text-align: center;
    }
    .ui.table[class*="right aligned"],
    .ui.table [class*="right aligned"] {
        text-align: right;
    }

    /*------------------
   Vertical Alignment
  ------------------*/

    .ui.table[class*="top aligned"],
    .ui.table [class*="top aligned"] {
        vertical-align: top;
    }
    .ui.table[class*="middle aligned"],
    .ui.table [class*="middle aligned"] {
        vertical-align: middle;
    }
    .ui.table[class*="bottom aligned"],
    .ui.table [class*="bottom aligned"] {
        vertical-align: bottom;
    }

    /*--------------
      Collapsing
  ---------------*/

    .ui.table th.collapsing,
    .ui.table td.collapsing {
        width: 1px;
        white-space: nowrap;
    }

    /*--------------
       Fixed
  ---------------*/

    .ui.fixed.table {
        table-layout: fixed;
    }
    .ui.fixed.table th,
    .ui.fixed.table td {
        overflow: hidden;
        text-overflow: ellipsis;
    }

    /*--------------
     Selectable
  ---------------*/

    .ui.selectable.table tbody tr:hover,
    .ui.table tbody tr td.selectable:hover {
        background: rgba(0, 0, 0, 0.05) !important;
        color: rgba(0, 0, 0, 0.95) !important;
    }
    .ui.selectable.inverted.table tbody tr:hover,
    .ui.inverted.table tbody tr td.selectable:hover {
        background: rgba(255, 255, 255, 0.08) !important;
        color: #ffffff !important;
    }

    /* Selectable Cell Link */
    .ui.table tbody tr td.selectable {
        padding: 0em;
    }
    .ui.table tbody tr td.selectable > a:not(.ui) {
        display: block;
        color: inherit;
        padding: 0.78571429em 0.78571429em;
    }

    /* Other States */
    .ui.selectable.table tr.error:hover,
    .ui.table tr td.selectable.error:hover,
    .ui.selectable.table tr:hover td.error {
        background: #ffe7e7 !important;
        color: #943634 !important;
    }
    .ui.selectable.table tr.warning:hover,
    .ui.table tr td.selectable.warning:hover,
    .ui.selectable.table tr:hover td.warning {
        background: #fff4e4 !important;
        color: #493107 !important;
    }
    .ui.selectable.table tr.active:hover,
    .ui.table tr td.selectable.active:hover,
    .ui.selectable.table tr:hover td.active {
        background: #e0e0e0 !important;
        color: rgba(0, 0, 0, 0.87) !important;
    }
    .ui.selectable.table tr.positive:hover,
    .ui.table tr td.selectable.positive:hover,
    .ui.selectable.table tr:hover td.positive {
        background: #f7ffe6 !important;
        color: #275b28 !important;
    }
    .ui.selectable.table tr.negative:hover,
    .ui.table tr td.selectable.negative:hover,
    .ui.selectable.table tr:hover td.negative {
        background: #ffe7e7 !important;
        color: #943634 !important;
    }

    /*-------------------
        Attached
  --------------------*/

    /* Middle */
    .ui.attached.table {
        top: 0px;
        bottom: 0px;
        border-radius: 0px;
        margin: 0em -1px;
        width: calc(100% - (-1px * 2));
        max-width: calc(100% - (-1px * 2));
        -webkit-box-shadow: none;
        box-shadow: none;
        border: 1px solid #d4d4d5;
    }
    .ui.attached + .ui.attached.table:not(.top) {
        border-top: none;
    }

    /* Top */
    .ui[class*="top attached"].table {
        bottom: 0px;
        margin-bottom: 0em;
        top: 0px;
        margin-top: 1em;
        border-radius: 0.28571429rem 0.28571429rem 0em 0em;
    }
    .ui.table[class*="top attached"]:first-child {
        margin-top: 0em;
    }

    /* Bottom */
    .ui[class*="bottom attached"].table {
        bottom: 0px;
        margin-top: 0em;
        top: 0px;
        margin-bottom: 1em;
        -webkit-box-shadow: none, none;
        box-shadow: none, none;
        border-radius: 0em 0em 0.28571429rem 0.28571429rem;
    }
    .ui[class*="bottom attached"].table:last-child {
        margin-bottom: 0em;
    }

    /*--------------
       Striped
  ---------------*/

    /* Table Striping */
    .ui.striped.table > tr:nth-child(2n),
    .ui.striped.table tbody tr:nth-child(2n) {
        background-color: rgba(0, 0, 50, 0.02);
    }

    /* Stripes */
    .ui.inverted.striped.table > tr:nth-child(2n),
    .ui.inverted.striped.table tbody tr:nth-child(2n) {
        background-color: rgba(255, 255, 255, 0.05);
    }

    /* Allow striped active hover */
    .ui.striped.selectable.selectable.selectable.table tbody tr.active:hover {
        background: #efefef !important;
        color: rgba(0, 0, 0, 0.95) !important;
    }

    /*--------------
     Single Line
  ---------------*/

    .ui.table[class*="single line"],
    .ui.table [class*="single line"] {
        white-space: nowrap;
    }
    .ui.table[class*="single line"],
    .ui.table [class*="single line"] {
        white-space: nowrap;
    }

    /*-------------------
         Colors
  --------------------*/

    /* Red */
    .ui.red.table {
        border-top: 0.2em solid #db2828;
    }
    .ui.inverted.red.table {
        background-color: #db2828 !important;
        color: #ffffff !important;
    }

    /* Orange */
    .ui.orange.table {
        border-top: 0.2em solid #f2711c;
    }
    .ui.inverted.orange.table {
        background-color: #f2711c !important;
        color: #ffffff !important;
    }

    /* Yellow */
    .ui.yellow.table {
        border-top: 0.2em solid #fbbd08;
    }
    .ui.inverted.yellow.table {
        background-color: #fbbd08 !important;
        color: #ffffff !important;
    }

    /* Olive */
    .ui.olive.table {
        border-top: 0.2em solid #b5cc18;
    }
    .ui.inverted.olive.table {
        background-color: #b5cc18 !important;
        color: #ffffff !important;
    }

    /* Green */
    .ui.green.table {
        border-top: 0.2em solid #21ba45;
    }
    .ui.inverted.green.table {
        background-color: #21ba45 !important;
        color: #ffffff !important;
    }

    /* Teal */
    .ui.teal.table {
        border-top: 0.2em solid #00b5ad;
    }
    .ui.inverted.teal.table {
        background-color: #00b5ad !important;
        color: #ffffff !important;
    }

    /* Blue */
    .ui.blue.table {
        border-top: 0.2em solid #2185d0;
    }
    .ui.inverted.blue.table {
        background-color: #2185d0 !important;
        color: #ffffff !important;
    }

    /* Violet */
    .ui.violet.table {
        border-top: 0.2em solid #6435c9;
    }
    .ui.inverted.violet.table {
        background-color: #6435c9 !important;
        color: #ffffff !important;
    }

    /* Purple */
    .ui.purple.table {
        border-top: 0.2em solid #a333c8;
    }
    .ui.inverted.purple.table {
        background-color: #a333c8 !important;
        color: #ffffff !important;
    }

    /* Pink */
    .ui.pink.table {
        border-top: 0.2em solid #e03997;
    }
    .ui.inverted.pink.table {
        background-color: #e03997 !important;
        color: #ffffff !important;
    }

    /* Brown */
    .ui.brown.table {
        border-top: 0.2em solid #a5673f;
    }
    .ui.inverted.brown.table {
        background-color: #a5673f !important;
        color: #ffffff !important;
    }

    /* Grey */
    .ui.grey.table {
        border-top: 0.2em solid #767676;
    }
    .ui.inverted.grey.table {
        background-color: #767676 !important;
        color: #ffffff !important;
    }

    /* Black */
    .ui.black.table {
        border-top: 0.2em solid #1b1c1d;
    }
    .ui.inverted.black.table {
        background-color: #1b1c1d !important;
        color: #ffffff !important;
    }

    /*--------------
    Column Count
  ---------------*/

    /* Grid Based */
    .ui.one.column.table td {
        width: 100%;
    }
    .ui.two.column.table td {
        width: 50%;
    }
    .ui.three.column.table td {
        width: 33.33333333%;
    }
    .ui.four.column.table td {
        width: 25%;
    }
    .ui.five.column.table td {
        width: 20%;
    }
    .ui.six.column.table td {
        width: 16.66666667%;
    }
    .ui.seven.column.table td {
        width: 14.28571429%;
    }
    .ui.eight.column.table td {
        width: 12.5%;
    }
    .ui.nine.column.table td {
        width: 11.11111111%;
    }
    .ui.ten.column.table td {
        width: 10%;
    }
    .ui.eleven.column.table td {
        width: 9.09090909%;
    }
    .ui.twelve.column.table td {
        width: 8.33333333%;
    }
    .ui.thirteen.column.table td {
        width: 7.69230769%;
    }
    .ui.fourteen.column.table td {
        width: 7.14285714%;
    }
    .ui.fifteen.column.table td {
        width: 6.66666667%;
    }
    .ui.sixteen.column.table td {
        width: 6.25%;
    }

    /* Column Width */
    .ui.table th.one.wide,
    .ui.table td.one.wide {
        width: 6.25%;
    }
    .ui.table th.two.wide,
    .ui.table td.two.wide {
        width: 12.5%;
    }
    .ui.table th.three.wide,
    .ui.table td.three.wide {
        width: 18.75%;
    }
    .ui.table th.four.wide,
    .ui.table td.four.wide {
        width: 25%;
    }
    .ui.table th.five.wide,
    .ui.table td.five.wide {
        width: 31.25%;
    }
    .ui.table th.six.wide,
    .ui.table td.six.wide {
        width: 37.5%;
    }
    .ui.table th.seven.wide,
    .ui.table td.seven.wide {
        width: 43.75%;
    }
    .ui.table th.eight.wide,
    .ui.table td.eight.wide {
        width: 50%;
    }
    .ui.table th.nine.wide,
    .ui.table td.nine.wide {
        width: 56.25%;
    }
    .ui.table th.ten.wide,
    .ui.table td.ten.wide {
        width: 62.5%;
    }
    .ui.table th.eleven.wide,
    .ui.table td.eleven.wide {
        width: 68.75%;
    }
    .ui.table th.twelve.wide,
    .ui.table td.twelve.wide {
        width: 75%;
    }
    .ui.table th.thirteen.wide,
    .ui.table td.thirteen.wide {
        width: 81.25%;
    }
    .ui.table th.fourteen.wide,
    .ui.table td.fourteen.wide {
        width: 87.5%;
    }
    .ui.table th.fifteen.wide,
    .ui.table td.fifteen.wide {
        width: 93.75%;
    }
    .ui.table th.sixteen.wide,
    .ui.table td.sixteen.wide {
        width: 100%;
    }

    /*--------------
      Sortable
  ---------------*/

    .ui.sortable.table thead th {
        cursor: pointer;
        white-space: nowrap;
        border-left: 1px solid rgba(34, 36, 38, 0.15);
        color: rgba(0, 0, 0, 0.87);
    }
    .ui.sortable.table thead th:first-child {
        border-left: none;
    }
    .ui.sortable.table thead th.sorted,
    .ui.sortable.table thead th.sorted:hover {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .ui.sortable.table thead th:after {
        display: none;
        font-style: normal;
        font-weight: normal;
        text-decoration: inherit;
        content: "";
        height: 1em;
        width: auto;
        opacity: 0.8;
        margin: 0em 0em 0em 0.5em;
        font-family: "Icons";
    }
    .ui.sortable.table thead th.ascending:after {
        content: "\f0d8";
    }
    .ui.sortable.table thead th.descending:after {
        content: "\f0d7";
    }

    /* Hover */
    .ui.sortable.table th.disabled:hover {
        cursor: auto;
        color: rgba(40, 40, 40, 0.3);
    }
    .ui.sortable.table thead th:hover {
        background: rgba(0, 0, 0, 0.05);
        color: rgba(0, 0, 0, 0.8);
    }

    /* Sorted */
    .ui.sortable.table thead th.sorted {
        background: rgba(0, 0, 0, 0.05);
        color: rgba(0, 0, 0, 0.95);
    }
    .ui.sortable.table thead th.sorted:after {
        display: inline-block;
    }

    /* Sorted Hover */
    .ui.sortable.table thead th.sorted:hover {
        background: rgba(0, 0, 0, 0.05);
        color: rgba(0, 0, 0, 0.95);
    }

    /* Inverted */
    .ui.inverted.sortable.table thead th.sorted {
        background: rgba(255, 255, 255, 0.15) -webkit-gradient(linear, left top, left
                    bottom, from(transparent), to(rgba(0, 0, 0, 0.05)));
        background: rgba(255, 255, 255, 0.15) -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.05));
        background: rgba(255, 255, 255, 0.15)
            linear-gradient(transparent, rgba(0, 0, 0, 0.05));
        color: #ffffff;
    }
    .ui.inverted.sortable.table thead th:hover {
        background: rgba(255, 255, 255, 0.08) -webkit-gradient(linear, left top, left
                    bottom, from(transparent), to(rgba(0, 0, 0, 0.05)));
        background: rgba(255, 255, 255, 0.08) -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.05));
        background: rgba(255, 255, 255, 0.08)
            linear-gradient(transparent, rgba(0, 0, 0, 0.05));
        color: #ffffff;
    }
    .ui.inverted.sortable.table thead th {
        border-left-color: transparent;
        border-right-color: transparent;
    }

    /*--------------
      Inverted
  ---------------*/

    /* Text Color */
    .ui.inverted.table {
        background: #333333;
        color: rgba(255, 255, 255, 0.9);
        border: none;
    }
    .ui.inverted.table th {
        background-color: rgba(0, 0, 0, 0.15);
        border-color: rgba(255, 255, 255, 0.1) !important;
        color: rgba(255, 255, 255, 0.9) !important;
    }
    .ui.inverted.table tr td {
        border-color: rgba(255, 255, 255, 0.1) !important;
    }
    .ui.inverted.table tr.disabled td,
    .ui.inverted.table tr td.disabled,
    .ui.inverted.table tr.disabled:hover td,
    .ui.inverted.table tr:hover td.disabled {
        pointer-events: none;
        color: rgba(225, 225, 225, 0.3);
    }

    /* Definition */
    .ui.inverted.definition.table tfoot:not(.full-width) th:first-child,
    .ui.inverted.definition.table thead:not(.full-width) th:first-child {
        background: #ffffff;
    }
    .ui.inverted.definition.table tr td:first-child {
        background: rgba(255, 255, 255, 0.02);
        color: #ffffff;
    }

    /*--------------
     Collapsing
  ---------------*/

    .ui.collapsing.table {
        width: auto;
    }

    /*--------------
        Basic
  ---------------*/

    .ui.basic.table {
        background: transparent;
        border: 1px solid rgba(34, 36, 38, 0.15);
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    .ui.basic.table thead,
    .ui.basic.table tfoot {
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    .ui.basic.table th {
        background: transparent;
        border-left: none;
    }
    .ui.basic.table tbody tr {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    .ui.basic.table td {
        background: transparent;
    }
    .ui.basic.striped.table tbody tr:nth-child(2n) {
        background-color: rgba(0, 0, 0, 0.05) !important;
    }

    /* Very Basic */
    .ui[class*="very basic"].table {
        border: none;
    }
    .ui[class*="very basic"].table:not(.sortable):not(.striped) th,
    .ui[class*="very basic"].table:not(.sortable):not(.striped) td {
        padding: "";
    }
    .ui[class*="very basic"].table:not(.sortable):not(.striped) th:first-child,
    .ui[class*="very basic"].table:not(.sortable):not(.striped) td:first-child {
        padding-left: 0em;
    }
    .ui[class*="very basic"].table:not(.sortable):not(.striped) th:last-child,
    .ui[class*="very basic"].table:not(.sortable):not(.striped) td:last-child {
        padding-right: 0em;
    }
    .ui[class*="very basic"].table:not(.sortable):not(.striped)
        thead
        tr:first-child
        th {
        padding-top: 0em;
    }

    /*--------------
       Celled
  ---------------*/

    .ui.celled.table tr th,
    .ui.celled.table tr td {
        border-left: 1px solid rgba(34, 36, 38, 0.1);
    }
    .ui.celled.table tr th:first-child,
    .ui.celled.table tr td:first-child {
        border-left: none;
    }

    /*--------------
       Padded
  ---------------*/

    .ui.padded.table th {
        padding-left: 1em;
        padding-right: 1em;
    }
    .ui.padded.table th,
    .ui.padded.table td {
        padding: 1em 1em;
    }

    /* Very */
    .ui[class*="very padded"].table th {
        padding-left: 1.5em;
        padding-right: 1.5em;
    }
    .ui[class*="very padded"].table td {
        padding: 1.5em 1.5em;
    }

    /*--------------
       Compact
  ---------------*/

    .ui.compact.table th {
        padding-left: 0.7em;
        padding-right: 0.7em;
    }
    .ui.compact.table td {
        padding: 0.5em 0.7em;
    }

    /* Very */
    .ui[class*="very compact"].table th {
        padding-left: 0.6em;
        padding-right: 0.6em;
    }
    .ui[class*="very compact"].table td {
        padding: 0.4em 0.6em;
    }

    /*--------------
        Sizes
  ---------------*/

    /* Small */
    .ui.small.table {
        font-size: 0.9em;
    }

    /* Standard */
    .ui.table {
        font-size: 1em;
    }

    /* Large */
    .ui.large.table {
        font-size: 1.1em;
    }

    /*******************************
           Site Overrides
  *******************************/
`),e=>e.hasMore||e.hasPagination?"20px":"0","#9B4DEE"),qo=({children:t,title:r,titleStyle:n,message:o,messageStyle:i,hasMore:l,pagination:c,...d})=>e.createElement("div",null,r||o?e.createElement(jo,null,e.createElement(Lo,{style:n},r),e.createElement(Vo,{style:i},o)):null,e.createElement(Ro,{hasMore:!!l,hasPagination:!!c},e.createElement(a,Object.assign({},d),t)),l?e.createElement(qt,{secondary:!0,textFirst:"ver a",textEnd:"lista completa",onClick:()=>l()}):null,c?e.createElement("div",null,e.createElement("br",null),c):null);let Uo;qo.Row=l,qo.Header=c,qo.HeaderCell=d,qo.Body=s,qo.Cell=p,qo.Footer=u;const Wo=n.div(Uo||(Uo=(e=>e)`
    font-family: MontSerrat !important;

    /*--------------
   Pagination
---------------*/

    .ui.pagination.menu {
        margin: 0em;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        vertical-align: middle;
    }
    .ui.pagination.menu .item:last-child {
        border-radius: 0em 0.28571429rem 0.28571429rem 0em;
    }
    .ui.compact.menu .item:last-child {
        border-radius: 0em 0.28571429rem 0.28571429rem 0em;
    }
    .ui.pagination.menu .item:last-child:before {
        display: none;
    }
    .ui.pagination.menu .item {
        font-family: MontSerrat !important;
        min-width: 3em;
        text-align: center;
    }
    .ui.pagination.menu .icon.item i.icon {
        vertical-align: top;
    }

    /* Active */
    .ui.pagination.menu .active.item {
        border-top: none;
        padding-top: 0.92857143em;
        background-color: rgba(0, 0, 0, 0.05);
        color: rgba(0, 0, 0, 0.95);
        -webkit-box-shadow: none;
        box-shadow: none;
    }
`)),Ho=({page:t,totalCount:r,limit:n,onPageChange:o,mini:i})=>e.createElement(Wo,null,e.createElement(m,{totalPages:Math.ceil(r/n),size:i?"mini":"small",ellipsisItem:{content:e.createElement(f,{name:"ellipsis horizontal"}),icon:!0},firstItem:{content:e.createElement(f,{name:"angle double left"}),icon:!0},lastItem:{content:e.createElement(f,{name:"angle double right"}),icon:!0},prevItem:{content:e.createElement(f,{name:"angle left"}),icon:!0},nextItem:{content:e.createElement(f,{name:"angle right"}),icon:!0},onPageChange:(e,t)=>o(t.activePage),activePage:t}));export{pn as Accordion,qt as ButtonMain,Bo as Calendar,Pn as Card,Xr as Checkbox,Qt as Dialog,tn as Dropdown,rn as DropdownForm,sr as InputLine,pr as InputLineForm,Rt as Loader,$r as Modal,On as MoreLess,Ho as Pagination,Kr as Radio,_n as Selection,qo as Table,Rr as TextArea,qr as TextAreaForm};
=======
 */}var hn="function"==typeof Symbol&&Symbol.for,gn=hn?Symbol.for("react.element"):60103,wn=hn?Symbol.for("react.portal"):60106,xn=hn?Symbol.for("react.fragment"):60107,vn=hn?Symbol.for("react.strict_mode"):60108,kn=hn?Symbol.for("react.profiler"):60114,yn=hn?Symbol.for("react.provider"):60109,_n=hn?Symbol.for("react.context"):60110,En=hn?Symbol.for("react.async_mode"):60111,Sn=hn?Symbol.for("react.concurrent_mode"):60111,Cn=hn?Symbol.for("react.forward_ref"):60112,zn=hn?Symbol.for("react.suspense"):60113,On=hn?Symbol.for("react.suspense_list"):60120,Mn=hn?Symbol.for("react.memo"):60115,Fn=hn?Symbol.for("react.lazy"):60116,In=hn?Symbol.for("react.block"):60121,Dn=hn?Symbol.for("react.fundamental"):60117,Bn=hn?Symbol.for("react.responder"):60118,Pn=hn?Symbol.for("react.scope"):60119;function An(n){if("object"==typeof n&&null!==n){var e=n.$$typeof;switch(e){case gn:switch(n=n.type){case En:case Sn:case xn:case kn:case vn:case zn:return n;default:switch(n=n&&n.$$typeof){case _n:case Cn:case Fn:case Mn:case yn:return n;default:return e}}case wn:return e}}}function Tn(n){return An(n)===Sn}var jn={AsyncMode:En,ConcurrentMode:Sn,ContextConsumer:_n,ContextProvider:yn,Element:gn,ForwardRef:Cn,Fragment:xn,Lazy:Fn,Memo:Mn,Portal:wn,Profiler:kn,StrictMode:vn,Suspense:zn,isAsyncMode:function(n){return Tn(n)||An(n)===En},isConcurrentMode:Tn,isContextConsumer:function(n){return An(n)===_n},isContextProvider:function(n){return An(n)===yn},isElement:function(n){return"object"==typeof n&&null!==n&&n.$$typeof===gn},isForwardRef:function(n){return An(n)===Cn},isFragment:function(n){return An(n)===xn},isLazy:function(n){return An(n)===Fn},isMemo:function(n){return An(n)===Mn},isPortal:function(n){return An(n)===wn},isProfiler:function(n){return An(n)===kn},isStrictMode:function(n){return An(n)===vn},isSuspense:function(n){return An(n)===zn},isValidElementType:function(n){return"string"==typeof n||"function"==typeof n||n===xn||n===Sn||n===kn||n===vn||n===zn||n===On||"object"==typeof n&&null!==n&&(n.$$typeof===Fn||n.$$typeof===Mn||n.$$typeof===yn||n.$$typeof===_n||n.$$typeof===Cn||n.$$typeof===Dn||n.$$typeof===Bn||n.$$typeof===Pn||n.$$typeof===In)},typeOf:An},Nn=fn(function(n,e){"production"!==process.env.NODE_ENV&&function(){var n="function"==typeof Symbol&&Symbol.for,t=n?Symbol.for("react.element"):60103,r=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,d=n?Symbol.for("react.context"):60110,c=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,s=n?Symbol.for("react.forward_ref"):60112,u=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,b=n?Symbol.for("react.memo"):60115,f=n?Symbol.for("react.lazy"):60116,h=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,w=n?Symbol.for("react.responder"):60118,x=n?Symbol.for("react.scope"):60119;function v(n){if("object"==typeof n&&null!==n){var e=n.$$typeof;switch(e){case t:var m=n.type;switch(m){case c:case p:case o:case a:case i:case u:return m;default:var h=m&&m.$$typeof;switch(h){case d:case s:case f:case b:case l:return h;default:return e}}case r:return e}}}var k=p,y=d,_=l,E=t,S=s,C=o,z=f,O=b,M=r,F=a,I=i,D=u,B=!1;function P(n){return v(n)===p}e.AsyncMode=c,e.ConcurrentMode=k,e.ContextConsumer=y,e.ContextProvider=_,e.Element=E,e.ForwardRef=S,e.Fragment=C,e.Lazy=z,e.Memo=O,e.Portal=M,e.Profiler=F,e.StrictMode=I,e.Suspense=D,e.isAsyncMode=function(n){return B||(B=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),P(n)||v(n)===c},e.isConcurrentMode=P,e.isContextConsumer=function(n){return v(n)===d},e.isContextProvider=function(n){return v(n)===l},e.isElement=function(n){return"object"==typeof n&&null!==n&&n.$$typeof===t},e.isForwardRef=function(n){return v(n)===s},e.isFragment=function(n){return v(n)===o},e.isLazy=function(n){return v(n)===f},e.isMemo=function(n){return v(n)===b},e.isPortal=function(n){return v(n)===r},e.isProfiler=function(n){return v(n)===a},e.isStrictMode=function(n){return v(n)===i},e.isSuspense=function(n){return v(n)===u},e.isValidElementType=function(n){return"string"==typeof n||"function"==typeof n||n===o||n===p||n===a||n===i||n===u||n===m||"object"==typeof n&&null!==n&&(n.$$typeof===f||n.$$typeof===b||n.$$typeof===l||n.$$typeof===d||n.$$typeof===s||n.$$typeof===g||n.$$typeof===w||n.$$typeof===x||n.$$typeof===h)},e.typeOf=v}()}),Ln=fn(function(n){n.exports="production"===process.env.NODE_ENV?jn:Nn}),Vn=Object.getOwnPropertySymbols,Rn=Object.prototype.hasOwnProperty,qn=Object.prototype.propertyIsEnumerable;function Un(n){if(null==n)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}var $n=function(){try{if(!Object.assign)return!1;var n=new String("abc");if(n[5]="de","5"===Object.getOwnPropertyNames(n)[0])return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(n){return e[n]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(n){r[n]=n}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(n){return!1}}()?Object.assign:function(n,e){for(var t,r,o=Un(n),i=1;i<arguments.length;i++){for(var a in t=Object(arguments[i]))Rn.call(t,a)&&(o[a]=t[a]);if(Vn){r=Vn(t);for(var l=0;l<r.length;l++)qn.call(t,r[l])&&(o[r[l]]=t[r[l]])}}return o},Hn="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Wn=function(){};if("production"!==process.env.NODE_ENV){var Xn=Hn,Yn={},Zn=Function.call.bind(Object.prototype.hasOwnProperty);Wn=function(n){var e="Warning: "+n;"undefined"!=typeof console&&console.error(e);try{throw new Error(e)}catch(n){}}}function Gn(n,e,t,r,o){if("production"!==process.env.NODE_ENV)for(var i in n)if(Zn(n,i)){var a;try{if("function"!=typeof n[i]){var l=Error((r||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof n[i]+"`.");throw l.name="Invariant Violation",l}a=n[i](e,i,r,t,null,Xn)}catch(n){a=n}if(!a||a instanceof Error||Wn((r||"React class")+": type specification of "+t+" `"+i+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof a+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),a instanceof Error&&!(a.message in Yn)){Yn[a.message]=!0;var d=o?o():"";Wn("Failed "+t+" type: "+a.message+(null!=d?d:""))}}}Gn.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(Yn={})};var Jn=Gn,Kn=Function.call.bind(Object.prototype.hasOwnProperty),Qn=function(){};function ne(){return null}function ee(){}function te(){}"production"!==process.env.NODE_ENV&&(Qn=function(n){var e="Warning: "+n;"undefined"!=typeof console&&console.error(e);try{throw new Error(e)}catch(n){}}),te.resetWarningCache=ee;var re=fn(function(n){n.exports="production"!==process.env.NODE_ENV?function(n,e){var t="function"==typeof Symbol&&Symbol.iterator,r={array:l("array"),bool:l("boolean"),func:l("function"),number:l("number"),object:l("object"),string:l("string"),symbol:l("symbol"),any:a(ne),arrayOf:function(n){return a(function(e,t,r,o,a){if("function"!=typeof n)return new i("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var l=e[t];if(!Array.isArray(l))return new i("Invalid "+o+" `"+a+"` of type `"+c(l)+"` supplied to `"+r+"`, expected an array.");for(var d=0;d<l.length;d++){var p=n(l,d,r,o,a+"["+d+"]",Hn);if(p instanceof Error)return p}return null})},element:a(function(e,t,r,o,a){var l=e[t];return n(l)?null:new i("Invalid "+o+" `"+a+"` of type `"+c(l)+"` supplied to `"+r+"`, expected a single ReactElement.")}),elementType:a(function(n,e,t,r,o){var a=n[e];return Ln.isValidElementType(a)?null:new i("Invalid "+r+" `"+o+"` of type `"+c(a)+"` supplied to `"+t+"`, expected a single ReactElement type.")}),instanceOf:function(n){return a(function(e,t,r,o,a){var l;return e[t]instanceof n?null:new i("Invalid "+o+" `"+a+"` of type `"+((l=e[t]).constructor&&l.constructor.name?l.constructor.name:"<<anonymous>>")+"` supplied to `"+r+"`, expected instance of `"+(n.name||"<<anonymous>>")+"`.")})},node:a(function(n,e,t,r,o){return d(n[e])?null:new i("Invalid "+r+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")}),objectOf:function(n){return a(function(e,t,r,o,a){if("function"!=typeof n)return new i("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=e[t],d=c(l);if("object"!==d)return new i("Invalid "+o+" `"+a+"` of type `"+d+"` supplied to `"+r+"`, expected an object.");for(var p in l)if(Kn(l,p)){var s=n(l,p,r,o,a+"."+p,Hn);if(s instanceof Error)return s}return null})},oneOf:function(n){if(!Array.isArray(n))return"production"!==process.env.NODE_ENV&&Qn(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),ne;function e(e,t,r,a,l){for(var d=e[t],c=0;c<n.length;c++)if(o(d,n[c]))return null;var s=JSON.stringify(n,function(n,e){return"symbol"===p(e)?String(e):e});return new i("Invalid "+a+" `"+l+"` of value `"+String(d)+"` supplied to `"+r+"`, expected one of "+s+".")}return a(e)},oneOfType:function(n){if(!Array.isArray(n))return"production"!==process.env.NODE_ENV&&Qn("Invalid argument supplied to oneOfType, expected an instance of array."),ne;for(var e=0;e<n.length;e++){var t=n[e];if("function"!=typeof t)return Qn("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+s(t)+" at index "+e+"."),ne}return a(function(e,t,r,o,a){for(var l=0;l<n.length;l++)if(null==(0,n[l])(e,t,r,o,a,Hn))return null;return new i("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")})},shape:function(n){return a(function(e,t,r,o,a){var l=e[t],d=c(l);if("object"!==d)return new i("Invalid "+o+" `"+a+"` of type `"+d+"` supplied to `"+r+"`, expected `object`.");for(var p in n){var s=n[p];if(s){var u=s(l,p,r,o,a+"."+p,Hn);if(u)return u}}return null})},exact:function(n){return a(function(e,t,r,o,a){var l=e[t],d=c(l);if("object"!==d)return new i("Invalid "+o+" `"+a+"` of type `"+d+"` supplied to `"+r+"`, expected `object`.");var p=$n({},e[t],n);for(var s in p){var u=n[s];if(!u)return new i("Invalid "+o+" `"+a+"` key `"+s+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(e[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(n),null,"  "));var m=u(l,s,r,o,a+"."+s,Hn);if(m)return m}return null})}};function o(n,e){return n===e?0!==n||1/n==1/e:n!=n&&e!=e}function i(n){this.message=n,this.stack=""}function a(n){function e(e,t,r,o,a,l,d){if(o=o||"<<anonymous>>",l=l||r,d!==Hn){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}return null==t[r]?e?new i(null===t[r]?"The "+a+" `"+l+"` is marked as required in `"+o+"`, but its value is `null`.":"The "+a+" `"+l+"` is marked as required in `"+o+"`, but its value is `undefined`."):null:n(t,r,o,a,l)}process;var t=e.bind(null,!1);return t.isRequired=e.bind(null,!0),t}function l(n){return a(function(e,t,r,o,a,l){var d=e[t];return c(d)!==n?new i("Invalid "+o+" `"+a+"` of type `"+p(d)+"` supplied to `"+r+"`, expected `"+n+"`."):null})}function d(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(d);if(null===e||n(e))return!0;var r=function(n){var e=n&&(t&&n[t]||n["@@iterator"]);if("function"==typeof e)return e}(e);if(!r)return!1;var o,i=r.call(e);if(r!==e.entries){for(;!(o=i.next()).done;)if(!d(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!d(a[1]))return!1}return!0;default:return!1}}function c(n){var e=typeof n;return Array.isArray(n)?"array":n instanceof RegExp?"object":function(n,e){return"symbol"===n||!!e&&("Symbol"===e["@@toStringTag"]||"function"==typeof Symbol&&e instanceof Symbol)}(e,n)?"symbol":e}function p(n){if(null==n)return""+n;var e=c(n);if("object"===e){if(n instanceof Date)return"date";if(n instanceof RegExp)return"regexp"}return e}function s(n){var e=p(n);switch(e){case"array":case"object":return"an "+e;case"boolean":case"date":case"regexp":return"a "+e;default:return e}}return i.prototype=Error.prototype,r.checkPropTypes=Jn,r.resetWarningCache=Jn.resetWarningCache,r.PropTypes=r,r}(Ln.isElement):function(){function n(n,e,t,r,o,i){if(i!==Hn){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:te,resetWarningCache:ee};return t.PropTypes=t,t}()});function oe(n){return(oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function ie(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function ae(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,r)}return t}function le(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?ae(Object(t),!0).forEach(function(e){ie(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ae(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}function de(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e.indexOf(t=i[r])>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e.indexOf(t=i[r])>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function ce(n){return function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function pe(n){return e=n,(e-=0)==e?n:(n=n.replace(/[\-_\s]+(.)?/g,function(n,e){return e?e.toUpperCase():""})).substr(0,1).toLowerCase()+n.substr(1);var e}function se(n){return n.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,e){var t,r=e.indexOf(":"),o=pe(e.slice(0,r)),i=e.slice(r+1).trim();return o.startsWith("webkit")?n[(t=o,t.charAt(0).toUpperCase()+t.slice(1))]=i:n[o]=i,n},{})}var ue=!1;try{ue="production"===process.env.NODE_ENV}catch(xn){}function me(n){return mn.icon?mn.icon(n):null===n?null:"object"===oe(n)&&n.prefix&&n.iconName?n:Array.isArray(n)&&2===n.length?{prefix:n[0],iconName:n[1]}:"string"==typeof n?{prefix:"fas",iconName:n}:void 0}function be(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ie({},n,e):{}}function fe(n){var e=n.forwardedRef,t=de(n,["forwardedRef"]),r=t.mask,o=t.symbol,i=t.className,a=t.title,l=t.titleId,d=me(t.icon),c=be("classes",[].concat(ce(function(n){var e,t=n.flip,r=n.size,o=n.rotation,i=n.pull,a=(ie(e={"fa-spin":n.spin,"fa-pulse":n.pulse,"fa-fw":n.fixedWidth,"fa-inverse":n.inverse,"fa-border":n.border,"fa-li":n.listItem,"fa-flip-horizontal":"horizontal"===t||"both"===t,"fa-flip-vertical":"vertical"===t||"both"===t},"fa-".concat(r),null!=r),ie(e,"fa-rotate-".concat(o),null!=o&&0!==o),ie(e,"fa-pull-".concat(i),null!=i),ie(e,"fa-swap-opacity",n.swapOpacity),e);return Object.keys(a).map(function(n){return a[n]?n:null}).filter(function(n){return n})}(t)),ce(i.split(" ")))),p=be("transform","string"==typeof t.transform?mn.transform(t.transform):t.transform),s=be("mask",me(r)),u=bn(d,le({},c,{},p,{},s,{symbol:o,title:a,titleId:l}));if(!u)return function(){var n;!ue&&console&&"function"==typeof console.error&&(n=console).error.apply(n,arguments)}("Could not find icon",d),null;var m=u.abstract,b={ref:e};return Object.keys(t).forEach(function(n){fe.defaultProps.hasOwnProperty(n)||(b[n]=t[n])}),bt(m[0],b)}fe.displayName="FontAwesomeIcon",fe.propTypes={border:re.bool,className:re.string,mask:re.oneOfType([re.object,re.array,re.string]),fixedWidth:re.bool,inverse:re.bool,flip:re.oneOf(["horizontal","vertical","both"]),icon:re.oneOfType([re.object,re.array,re.string]),listItem:re.bool,pull:re.oneOf(["right","left"]),pulse:re.bool,rotation:re.oneOf([0,90,180,270]),size:re.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:re.bool,symbol:re.oneOfType([re.bool,re.string]),title:re.string,transform:re.oneOfType([re.string,re.object]),swapOpacity:re.bool},fe.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var he,ge,we,xe,ve,ke,ye,_e,Ee,Se,Ce,ze,Oe,Me,Fe,Ie,De,Be,Pe,Ae,Te,je,Ne,Le,Ve,Re,qe,Ue,$e,He,We,Xe,Ye,Ze,Ge,Je,Ke,Qe,nt,et,tt,rt,ot,it,at,lt,dt,ct,pt,st,ut,mt,bt=function n(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof t)return t;var o=(t.children||[]).map(function(t){return n(e,t)}),i=Object.keys(t.attributes||{}).reduce(function(n,e){var r=t.attributes[e];switch(e){case"class":n.attrs.className=r,delete t.attributes.class;break;case"style":n.attrs.style=se(r);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?n.attrs[e.toLowerCase()]=r:n.attrs[pe(e)]=r}return n},{attrs:{}}),a=r.style,l=void 0===a?{}:a,d=de(r,["style"]);return i.attrs.style=le({},i.attrs.style,{},l),e.apply(void 0,[t.tag,le({},i.attrs,{},d)].concat(ce(o)))}.bind(null,n.createElement),ft={prefix:"fas",iconName:"angle-down",icon:[320,512,[],"f107","M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"]},ht={prefix:"fas",iconName:"angle-left",icon:[256,512,[],"f104","M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"]},gt={prefix:"fas",iconName:"angle-up",icon:[320,512,[],"f106","M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"]},wt={prefix:"fas",iconName:"bell",icon:[448,512,[],"f0f3","M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"]},xt={prefix:"fas",iconName:"check",icon:[512,512,[],"f00c","M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"]},vt={prefix:"fas",iconName:"minus",icon:[448,512,[],"f068","M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"]},kt={prefix:"fas",iconName:"plus",icon:[448,512,[],"f067","M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"]},yt={prefix:"fas",iconName:"times",icon:[352,512,[],"f00d","M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]},_t=function(n){switch(n){case"mini":return"10px";case"tiny":return"11px";case"small":return"12px";case"medium":return"14px";case"large":return"16px";case"big":return"18px";case"huge":return"20px";case"massive":return"22px";default:return n}},Et=r.button(he||(he=k(["\n    font-family: MontSerrat !important;\n    position: ",";\n    background-color: ",";\n    height: ",";\n    padding: 0 20px;\n    width: ",";\n    border-radius: ",";\n    cursor: pointer;\n    border: ",";\n    outline: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    &:disabled {\n        opacity: 0.5;\n        cursor: not-allowed;\n        pointer-events: none;\n    }\n\n    &:hover {\n        background-color: ",";\n\n        span {\n            color: ",";\n        }\n    }\n"])),function(n){return n.loading?"relative":"initial"},function(n){return n.colorBackground?n.colorBackground:n.secondary||n.tertiary?"#FFFFFF":n.noBorder?"transparent":"#F7EA48"},function(n){return n.size?function(n){switch(n){case"mini":return"25px";case"tiny":return"30px";case"small":return"35px";case"medium":return"40px";case"large":return"45px";case"big":return"50px";case"huge":return"55px";case"massive":return"60px";default:return n}}(n.size):"40px"},function(n){return n.width?"string"==typeof n.width?n.width:n.width+"px":"none"},function(n){return n.rectangular?"10px":"30px"},function(n){return n.secondary?"1px solid #9B4DEE":n.tertiary?"1px solid #ACACAC":"none"},function(n){return n.hoverBackgroundColor?n.hoverBackgroundColor:n.secondary?"rgba(155, 77, 238, 0.2)":n.backPurple?"#E0457B":n.noBorder?"transparent":n.tertiary?"rgba(211, 211, 211, 0.4)":"#9B4DEE"},function(n){return n.hoverTextColor?n.hoverTextColor:n.secondary?"#9B4DEE":n.backPurple?"#FFFFFF":n.noBorder?n.colorText?n.colorText:"#9B4DEE":n.tertiary?"#707070":"#F7EA48"}),St=r.span(ge||(ge=k(["\n    visibility: ",";\n    color: ",";\n    font-weight: ",";\n    font-size: ",";\n    margin-right: 3.5px;\n"])),function(n){return n.loading?"hidden":"visible"},function(n){return n.colorText?n.colorText:n.tertiary?"#707070":"#9B4DEE"},function(n){return n.firstStrong||n.strong?"bold":"normal"},function(n){return n.size?_t(n.size):"14px"}),Ct=r.span(we||(we=k(["\n    visibility: ",";\n    color: ",";\n    font-weight: ",";\n    font-size: ",";\n"])),function(n){return n.loading?"hidden":"visible"},function(n){return n.colorText?n.colorText:n.tertiary?"#707070":"#9B4DEE"},function(n){return n.firstStrong||n.notStrong?"normal":"bold"},function(n){return n.size?_t(n.size):"14px"}),zt=r.button(xe||(xe=k(["\n    font-family: MontSerrat !important;\n    background-color: ",";\n    height: 40px;\n    width: 100%;\n    border-radius: 30px;\n    cursor: pointer;\n    border: 1px solid ",";\n    outline: none;\n\n    &:disabled {\n        opacity: 0.5;\n        cursor: not-allowed;\n        pointer-events: none;\n    }\n\n    &:hover {\n        background-color: ",";\n    }\n\n    span {\n        color: ",";\n        margin-left: 20px;\n        font-weight: bold;\n    }\n"])),"#9B4DEE","#F7EA48","rgba(155, 77, 238, 0.9)","#F7EA48"),Ot=r.div(ve||(ve=k(["\n    visibility: ",";\n    margin-right: ",";\n    margin-left: ",";\n"])),function(n){return n.loading?"hidden":"visible"},function(n){return"left"===n.iconPosition?"10px":""},function(n){return"right"===n.iconPosition?"10px":""}),Mt=r.div(ke||(ke=k(["\n    font-family: MontSerrat !important;\n    background-color: ",";\n    width: 20px;\n    height: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    color: ",";\n    font-size: 10px;\n"])),"#F7EA48","#9B4DEE"),Ft=r.div(ye||(ye=k(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),It=function(n){switch(n){case"mini":return"1em";case"tiny":return"1.5em";case"small":return"2em";case"medium":return"2.5em";case"large":return"3em";case"big":return"3.5em";case"huge":return"4em";case"massive":return"4.5em";default:return n}},Dt=function(n){switch(n){case"mini":return"2px";case"tiny":return"2.5px";case"small":return"3px";case"medium":return"3.5px";case"large":return"4px";case"big":return"4.5px";case"huge":return"5px";case"massive":return"5.5px";default:return n}},Bt=r.div(_e||(_e=k(["\n    width: 100%;\n    display: flex;\n    justify-content: ",";\n"])),function(n){return"left"===n.position?"flex-start":"right"===n.position?"flex-end":"center"}),Pt=r.div(Ee||(Ee=k(["\n    border-width: ",";\n    border-style: solid;\n    border-color: ",";\n    border-top-width: ",";\n    border-top-style: solid;\n    border-top-color: ",";\n\n    border-radius: 50%;\n    width: ",";\n    height: ",";\n    animation: spin 0.6s linear infinite;\n\n    @keyframes spin {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n"])),function(n){return n.size?Dt(n.size):"3.5px"},"#E1E6EB",function(n){return n.size?Dt(n.size):"3.5px"},function(n){return n.color?n.color:"#9B4DEE"},function(n){return n.size?It(n.size):"2.5em"},function(n){return n.size&&n.size?It(n.size):"2.5em"}),At=function(e){return n.createElement(Bt,{position:e.position},n.createElement(Pt,{color:e.color,size:e.size,style:e.style,className:e.className}))},Tt=["textFirst","textEnd","firstStrong","notStrong","strong","loading","secondary","backPurple","children","notification","amount","width","icon","customIcon","iconPosition","colorIcon","noBorder","colorText","colorBackground","tertiary","size","rectangular","typeContent","hoverBackgroundColor","hoverTextColor","iconStyle"],jt=function(e){var t=e.textFirst,r=e.textEnd,o=e.firstStrong,i=e.notStrong,a=e.strong,l=e.loading,d=e.secondary,c=e.backPurple,p=e.children,s=e.notification,u=e.amount,m=e.width,b=e.icon,f=e.customIcon,h=e.iconPosition,g=void 0===h?"right":h,w=e.colorIcon,k=e.noBorder,y=e.colorText,_=e.colorBackground,E=e.tertiary,S=e.size,C=e.rectangular,z=e.typeContent,O=e.hoverBackgroundColor,M=e.hoverTextColor,F=e.iconStyle,I=v(e,Tt);return s?n.createElement(zt,Object.assign({},I),l?n.createElement(At,{size:"tiny"}):p||n.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",height:"50%",padding:10}},n.createElement("div",{style:{display:"flex",alignItems:"center"}},n.createElement(Ot,null,n.createElement(fe,{icon:wt,size:"lg",color:"#F7EA48"})),n.createElement("span",null,"notificações")),n.createElement(Mt,null,u))):n.createElement(Et,Object.assign({},I,{secondary:d,backPurple:c,width:m,icon:b,noBorder:k,colorText:y,colorBackground:_,tertiary:E,size:S,rectangular:C,hoverBackgroundColor:O,hoverTextColor:M,loading:l}),p||(z?function(e){switch(e){case"icon":return n.createElement("div",null,(b||f)&&n.createElement(n.Fragment,null,n.createElement(Ot,{loading:l},f||n.createElement(fe,{icon:b,color:w||"#9B4DEE",size:"lg",style:x({},F)}))));default:return null}}(z):n.createElement(n.Fragment,null,(b||f)&&"left"===g&&n.createElement(n.Fragment,null,n.createElement(Ot,{loading:l,iconPosition:g},f||n.createElement(fe,{icon:b,color:w||"#9B4DEE",size:"lg",style:x({},F)}))),n.createElement(St,{firstStrong:o,strong:a,notStrong:i,colorText:y,tertiary:E,size:S,loading:l},t),n.createElement(Ct,{firstStrong:o,strong:a,notStrong:i,colorText:y,tertiary:E,size:S,loading:l},r),(b||f)&&"right"===g&&n.createElement(n.Fragment,null,n.createElement(Ot,{loading:l,iconPosition:g},f||n.createElement(fe,{icon:b,color:w||"#9B4DEE",size:"lg",style:x({},F)}))))),l&&n.createElement(Ft,null,n.createElement(At,{size:"tiny"})))},Nt=r.div(Se||(Se=k(["\n    ","\n"])),function(n){return o(n.open?Ce||(Ce=k(["\n                  opacity: 1;\n                  visibility: visible;\n                  position: fixed;\n                  top: 0;\n                  right: 0;\n                  bottom: 0;\n                  left: 0;\n                  background: rgba(0, 0, 0, 0.5);\n                  transition: opacity 0.25s ease;\n                  overflow: auto;\n                  display: flex;\n                  z-index: 999;\n              "])):ze||(ze=k(["\n                  opacity: 1;\n                  visibility: hidden;\n              "])))}),Lt=r.div(Oe||(Oe=k(["\n    font-family: MontSerrat !important;\n    ","\n"])),function(n){return n.open?o(Me||(Me=k(["\n                  transition: bottom 0.25s ease;\n                  width: 97%;\n                  background: ",";\n                  border-top-left-radius: 30px;\n                  border-top-right-radius: 30px;\n                  margin-top: auto;\n                  margin-left: auto;\n                  margin-right: auto;\n                  padding: 20px;\n                  position: relative;\n\n                  .box-dialog {\n                      overflow: auto;\n                      margin-bottom: -20px;\n                      maxHeight: ",";\n                  }\n\n                  .loading-dialog {\n                      display: flex;\n                      justify-content: center;\n                      align-items: center;\n                      background-color: rgba(255, 255, 255, 0.8);\n                      width: 100%;\n                      height: 100%;\n                      top: 0;\n                      left: 0;\n                      right: 0;\n                      bottom: 0;\n                      border-radius: 30px;\n                      z-index: 2;\n                      position: absolute;\n                  }\n              "])),"#FFFFFF",function(){return n.maxHeight?"string"==typeof n.maxHeight?n.maxHeight:n.maxHeight+"px":"100%"}):o(Fe||(Fe=k(["\n                  transition: bottom 0.25s ease;\n                  bottom: -100%;\n              "])))}),Vt=function(e){var t=e.open,r=e.children,o=e.onClose;return n.createElement(Nt,{open:t,onClick:function(n){n.stopPropagation(),o()}},n.createElement(Lt,{open:t,onClick:function(n){return n.stopPropagation()},maxHeight:e.maxHeight},e.loading&&n.createElement("div",{className:"loading-dialog"},n.createElement(At,null)),n.createElement("div",{className:"box-dialog"},r)))},Rt=r.div(Ie||(Ie=k(["\n    font-family: MontSerrat !important;\n    position: relative;\n    opacity: ",";\n    width: ",";\n\n    input {\n        font-family: MontSerrat !important;\n        color: ",";\n        width: 100%;\n        height: 100%;\n        padding-top: 20px;\n        padding-left: ",";\n        padding-bottom: 5px;\n        padding-right: ",";\n        border: none;\n        outline: none;\n        background-color: transparent;\n\n        &::placeholder {\n            color: ",";\n        }\n    }\n\n    ","\n\n    input:disabled {\n        background-color: transparent;\n    }\n\n    label {\n        font-family: MontSerrat !important;\n        position: absolute;\n        bottom: 0px;\n        top: 0px;\n        left: 0px;\n        width: 100%;\n        right: 100%;\n        pointer-events: none;\n        border-bottom-width: 1px;\n        border-bottom-style: solid;\n        border-bottom-color: ",";\n\n        ","\n    }\n\n    span {\n        font-family: MontSerrat !important;\n        position: absolute;\n        bottom: 5px;\n        left: ",";\n        transition: all 0.3s ease;\n\n        ","\n    }\n\n    .icon {\n        position: absolute;\n        bottom: 0;\n        padding: 5px 10px;\n        ","\n    }\n\n    .icon-action {\n        position: absolute;\n        bottom: 0;\n        padding: 5px 10px;\n        ","\n        cursor: pointer;\n    }\n"])),function(n){return n.disabled?"50%":"100%"},function(n){return n.width?"string"==typeof n.width?n.width:n.width+"px":"100%"},function(n){return n.textColor?n.textColor:"#707070"},function(n){return n.icon&&!n.action?"right"===n.iconPosition?"15px":"40px":n.action&&!n.icon?"left"===n.actionPosition?"40px":"15px":n.action||n.icon?"40px":"15px"},function(n){return n.icon&&!n.action?"right"===n.iconPosition?"40px":"0px":n.action&&!n.icon?"left"===n.actionPosition?"0px":"40px":n.action&&n.icon?"40px":"0px"},"#F1F1F1",function(n){return n.date&&!n.isFieldActive?o(De||(De=k(['\n                  input::-webkit-calendar-picker-indicator {\n                      display: none !important;\n                  }\n\n                  input[type="date"]::-webkit-input-placeholder {\n                      display: none !important;\n                      visibility: hidden !important;\n                      -webkit-appearance: none;\n                  }\n\n                  input[type="date"]::-webkit-datetime-edit-fields-wrapper,\n                  input[type="date"]::-webkit-datetime-edit-fields-wrapper {\n                      visibility: hidden;\n                  }\n              ']))):null},function(n){return(n.requiredText||n.errorMessage)&&n.errorColor?n.errorColor:n.requiredText||n.errorMessage?"#E53935":"#ACACAC"},function(n){return n.isFieldActive?o(Be||(Be=k(["\n                      color: ",";\n                  "])),"#9B4DEE"):o(Pe||(Pe=k(["\n                      color: ",";\n                  "])),"#707070")},function(n){return n.icon&&!n.action?"right"===n.iconPosition?"15px":"40px":n.action&&!n.icon?"left"===n.actionPosition?"40px":"15px":n.action||n.icon?"40px":"15px"},function(n){return n.isFieldActive?o(Ae||(Ae=k(["\n                      transform: translateY(-100%);\n                      font-size: 14px;\n                      color: ",";\n                  "])),function(n){return(n.requiredText||n.errorMessage)&&n.errorColor?n.errorColor:n.requiredText||n.errorMessage?"#E53935":"#9B4DEE"}):o(Te||(Te=k(["\n                      font-size: 16px;\n                      color: ",";\n                  "])),function(n){return(n.requiredText||n.errorMessage)&&n.errorColor?n.errorColor:n.requiredText||n.errorMessage?"#E53935":"#707070"})},function(n){return"right"===n.iconPosition&&"right: 0;"},function(n){return n.actionPosition&&"left"===n.actionPosition?"left: 0;":"right: 0;"}),qt=r.span(je||(je=k(["\n    font-family: MontSerrat !important;\n    font-size: 10px;\n    margin-left: 0;\n    color: ",";\n"])),function(n){return n.errorColor?n.errorColor:"#E53935"}),Ut=["containerStyle","label","labelStyle","errorMessage","width","textColor","inputRef","name","icon","iconPosition","iconColor","action"],$t=function(r){var o=r.containerStyle,i=r.label,a=r.labelStyle,l=r.errorMessage,d=r.width,c=r.textColor,p=r.inputRef,s=r.name,u=r.icon,m=r.iconPosition,b=r.iconColor,f=r.action,h=v(r,Ut),g=e(!1),w=g[0],x=g[1];return t(function(){h.value&&(w||x(!0))},[h.value]),n.createElement("div",{style:{paddingBottom:l?0:20}},n.createElement(Rt,{isFieldActive:w,errorMessage:l,containerStyle:o,width:d,disabled:h.disabled?h.disabled:void 0,style:o,textColor:c,icon:!!u,iconPosition:m,action:f,actionPosition:null==f?void 0:f.position,date:"date"===h.type},u&&n.createElement("div",{className:"icon"},n.createElement(fe,{icon:u,color:b||"#9B4DEE"})),f&&n.createElement("div",{className:"icon-action",onClick:f.onClick},n.createElement(fe,{icon:f.icon,color:f.iconColor||"#9B4DEE"})),n.createElement("input",Object.assign({},h,{onFocus:function(){w||x(!0)},onBlur:function(){w&&!h.value&&x(!1)},name:s,placeholder:w?h.placeholder:"",ref:p})),n.createElement("label",{style:a},n.createElement("span",null,i))),l?n.createElement(qt,null,l):null)},Ht=["register","errors","validate","name","required","values","limit","minimum"],Wt=function(r){var o,i=r.register,a=r.errors,l=r.validate,d=r.name,c=r.required,p=r.values,s=r.limit,u=r.minimum,m=v(r,Ht),b=e(!1),f=b[0],h=b[1],g=e(""),w=g[0],x=g[1],k=p?p(d)||m.defaultValue:m.value;return t(function(){k&&(f||h(!0))},[k]),n.createElement("div",{style:{paddingBottom:w||a?0:20}},n.createElement(Rt,{isFieldActive:f,requiredText:!(!a||"required"!==a.type),errorMessage:a,containerStyle:m.containerStyle,width:m.width,disabled:m.disabled,style:m.containerStyle,textColor:m.textColor,icon:!!m.icon,iconPosition:m.iconPosition,action:m.action,actionPosition:null===(o=m.action)||void 0===o?void 0:o.position,date:"date"===m.type},m.icon&&n.createElement("div",{className:"icon"},n.createElement(fe,{icon:m.icon,color:m.iconColor||"#9B4DEE"})),m.action&&n.createElement("div",{className:"icon-action",onClick:m.action.onClick},n.createElement(fe,{icon:m.action.icon,color:m.action.iconColor||"#9B4DEE"})),n.createElement("input",Object.assign({},m,{onFocus:function(){f||h(!0)},onBlur:function(){f&&!k&&h(!1)},name:d,placeholder:f?m.placeholder:"",ref:i?i({required:c,validate:l&&c?function(n){return l(n)?(x(l(n)),!1):(x(""),!0)}:s&&c?function(n){return n.length>s?(x(s+" caracteres permitidos."),!1):(x(""),!0)}:u&&c?function(n){return n.length<u?(x(d+" deve ter "+u+" ou mais caracteres."),!1):(x(""),!0)}:null}):null})),n.createElement("label",{style:m.labelStyle},n.createElement("span",null,m.label))),a?n.createElement(qt,null,"required"===a.type?"Obrigatório":""+w):null)},Xt=r.div(Ne||(Ne=k(["\n    ","\n"])),function(n){return o(n.open?Le||(Le=k(["\n                  opacity: 1;\n                  visibility: visible;\n                  position: fixed;\n                  top: 0;\n                  right: 0;\n                  bottom: 0;\n                  left: 0;\n                  background: rgba(0, 0, 0, 0.5);\n                  transition: opacity 0.25s ease;\n                  overflow: auto;\n                  padding: 40px 0;\n                  display: flex;\n                  z-index: 999;\n              "])):Ve||(Ve=k(["\n                  opacity: 1;\n                  visibility: hidden;\n              "])))}),Yt=r.div(Re||(Re=k(["\n    font-family: MontSerrat !important;\n    transition: top 0.25s ease;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: ",";\n    margin: auto;\n    background: ",";\n    border-radius: 30px;\n"])),function(n){return n.width?"string"==typeof n.width?n.width.replace("%","")+"%":n.width+"px":n.size?function(n){switch(n){case"mini":return"35%";case"tiny":return"45%";case"small":return"55%";case"large":return"65%";case"fullscreen":return"95%";default:return n}}(n.size):"80%"},"#FFFFFF"),Zt=(r.div(qe||(qe=k(["\n    transition: bottom 1s ease;\n    width: 90%;\n    background: ",";\n    border-top-left-radius: 30px;\n    border-top-right-radius: 30px;\n"])),"#FFFFFF"),r.div(Ue||(Ue=k(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: ",";\n    font-size: 20px;\n\n    .name-icon-modal {\n        display: flex;\n        align-items: center;\n    }\n\n    & strong {\n        padding: ",";\n        color: ",";\n    }\n"])),function(n){return n.noBorder?"none":"1px solid #E1E6EB"},function(n){return n.iconBack?"20px 0":"20px 30px"},"#9B4DEE")),Gt=r.div($e||($e=k(["\n    padding: 20px 30px;\n    cursor: pointer;\n"]))),Jt=r.div(He||(He=k(["\n    padding: 20px 30px;\n    height: 100%;\n    position: relative;\n\n    .loading-modal {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background-color: rgba(255, 255, 255, 0.8);\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        border-radius: 30px;\n        z-index: 2;\n        position: absolute;\n    }\n"]))),Kt=r.div(We||(We=k(["\n    border-top: 1px solid ",";\n    margin: 0 30px;\n    padding: 20px 0;\n    display: flex;\n    flex-direction: row-reverse;\n"])),"#E1E6EB"),Qt=function(e){var r=e.open,o=e.title,i=e.children,a=e.actions,l=e.width,d=e.onClose,c=e.closeOnDimerClick,p=e.loading,s=e.onBack,u=e.size,m=e.noBorder,b=e.closeIcon,f=void 0===b||b;function h(n){r&&"Escape"==n.key&&c&&(n.stopPropagation(),d())}return t(function(){return r?window.addEventListener("keydown",function(n){return h(n)}):window.removeEventListener("keydown",function(n){return h(n)}),window.removeEventListener("keydown",function(n){return h(n)})},[r]),n.createElement(Xt,{open:r,onClick:function(n){c&&(n.stopPropagation(),d())}},n.createElement(Yt,{size:u,width:l,onClick:function(n){return n.stopPropagation()}},n.createElement(Zt,{iconBack:!!s,noBorder:m},n.createElement("div",{className:"name-icon-modal"},s?n.createElement(Gt,{onClick:function(){return s()}},n.createElement(fe,{icon:ht,size:"lg",color:"#9B4DEE"})):null,n.createElement("strong",null,o)),f&&n.createElement(Gt,{onClick:function(n){n.stopPropagation(),d()}},n.createElement(fe,{icon:yt,style:{fontSize:20},color:"#9B4DEE"}))),n.createElement(Jt,null,p&&n.createElement("div",{className:"loading-modal"},n.createElement(At,null)),i),a&&n.createElement(Kt,null,a)))},nr=r.span(Xe||(Xe=k(["\n    font-family: MontSerrat !important;\n    font-size: 14px;\n    color: ",";\n    margin-left: 15px;\n"])),function(n){return n.errorMessage?"#E0457B":n.labelColor?n.labelColor:"#9B4DEE"}),er=r.div(Ye||(Ye=k(["\n    font-family: MontSerrat !important;\n    width: ",";\n    position: relative;\n\n    opacity: ",";\n\n    textarea {\n        font-family: MontSerrat !important;\n        color: ",";\n        resize: none;\n        width: ",";\n\n        border-radius: 20px;\n        height: ",";\n\n        margin: 0px;\n        outline: none;\n        padding: 20px;\n        border-color: ",";\n\n        &::placeholder {\n            color: ",";\n        }\n\n        -moz-appearance: none;\n        -webkit-appearance: none;\n    }\n\n    label {\n        position: absolute;\n        bottom: 0px;\n        top: 0px;\n        left: 0px;\n        width: 100%;\n        right: 100%;\n        pointer-events: none;\n        border-bottom-width: 1px;\n        border-bottom-style: solid;\n        border-bottom-color: ",";\n\n        ","\n    }\n\n    textarea::-webkit-scrollbar {\n        width: 7px;\n        border-radius: 50px;\n    }\n\n    textarea::-webkit-scrollbar-thumb {\n        background-color: ",";\n        border-radius: 50px;\n    }\n\n    textarea::-webkit-scrollbar-thumb:hover {\n        background-color: ",";\n    }\n"])),function(n){return n.width?n.width:"100%"},function(n){return n.disabled?"50%":"100%"},function(n){return n.textColor?n.textColor:"#707070"},function(n){return n.width?"string"==typeof n.width?n.width:n.width+"px":"100%"},function(n){return n.height?"string"==typeof n.height?n.height:n.height+"px":"100%"},function(n){return n.errorMessage&&n.errorColor?n.errorColor:n.errorMessage?"#E53935":"#ACACAC"},"#F1F1F1",function(n){return n.errorMessage&&n.errorColor?n.errorColor:n.errorMessage?"#E53935":"#ACACAC"},function(n){return n.isFieldActive?o(Ze||(Ze=k(["\n                      color: ",";\n                  "])),"#9B4DEE"):o(Ge||(Ge=k(["\n                      color: ",";\n                  "])),"#707070")},"#9B4DEE","rgba(155, 77, 238, 0.9)"),tr=r.span(Je||(Je=k(["\n    font-family: MontSerrat !important;\n    font-size: 10px;\n    margin-left: 0;\n    margin-top: -2px;\n    color: ",";\n"])),function(n){return n.errorColor?n.errorColor:"#E0457B"}),rr=r.div(Ke||(Ke=k(["\n    font-family: MontSerrat !important;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    font-size: 10px;\n"]))),or=r.div(Qe||(Qe=k(["\n    font-size: 10px;\n    color: ",";\n"])),"#ACACAC"),ir=["containerStyle","label","labelColor","labelStyle","errorMessage","errorColor","width","height","textColor","textAreaRef","lengthInfo"],ar=function(e){var t=e.containerStyle,r=e.label,o=e.labelColor,i=e.labelStyle,a=e.errorMessage,l=e.errorColor,d=e.width,c=e.height,p=e.textColor,s=e.textAreaRef,u=e.lengthInfo,m=v(e,ir);return n.createElement("div",{style:{paddingBottom:a?0:20}},r&&n.createElement(nr,{errorMessage:a,labelColor:o},r),n.createElement(er,{errorMessage:a,errorColor:l,labelStyle:i,containerStyle:t,width:d,style:t,disabled:m.disabled,textColor:p,height:c},n.createElement("textarea",Object.assign({},m,{placeholder:m.placeholder,ref:s}))),n.createElement(rr,null,n.createElement(tr,{errorColor:l},a),(u||"number"==typeof u)&&m.maxLength?n.createElement(or,null,("number"==typeof u?u:"string"==typeof m.value?m.value.length:0)+"/"+m.maxLength+" caracteres"):""))},lr=["register","errors","validate","name","required","limit","minimum"],dr=function(t){var r=t.register,o=t.errors,i=t.validate,a=t.name,l=t.required,d=t.limit,c=t.minimum,p=v(t,lr),s=e(""),u=s[1];return n.createElement(ar,Object.assign({},p,{name:a,errorMessage:o?"required"===o.type?"Obrigatório":""+s[0]:"",textAreaRef:r?r({required:l,validate:i&&l?function(n){return i(n)?(u(i(n)),!1):(u(""),!0)}:d&&l?function(n){return n.length>d?(u(d+" caracteres permitidos."),!1):(u(""),!0)}:c&&l?function(n){return n.length<c?(u(a+" deve ter "+c+" ou mais caracteres."),!1):(u(""),!0)}:null}):null}))},cr=function(n){switch(n){case"mini":return"10px";case"tiny":return"12px";case"small":return"14px";case"medium":return"17px";case"large":return"20px";case"big":return"23px";case"huge":return"26px";case"massive":return"30px";default:return n}},pr=r.div(nt||(nt=k(["\n    font-family: MontSerrat !important;\n    display: flex;\n    align-items: center;\n\n    > input {\n        display: none;\n    }\n\n    label {\n        font-size: ",";\n        color: ",";\n        cursor: ",";\n        opacity: ",";\n    }\n\n    > input + div {\n        position: relative;\n        cursor: ",";\n        opacity: ",";\n        display: flex;\n        align-items: center;\n\n        &:before {\n            content: '';\n            position: absolute;\n            width: ",";\n            height: ",";\n            border: 1px solid ",";\n            background: ",";\n            border-radius: 5px;\n        }\n        &:after {\n            content: ' ';\n            position: absolute;\n            width: ",";\n            height: ",";\n            border: 1px solid ",";\n            background: ",";\n            border-radius: 5px;\n            color: ",";\n            text-align: center;\n            font-size: 12px;\n        }\n    }\n    > input:not(:checked) + div {\n        &:after {\n            opacity: 0;\n            transform: scale(0);\n        }\n    }\n    > input:checked + div {\n        &:after {\n            opacity: 1;\n            transform: scale(1);\n        }\n    }\n\n    span {\n        margin-left: ",";\n        margin-right: ",";\n        font-size: ",";\n        color: ",";\n        z-index: 1;\n    }\n"])),function(n){return n.sizeBox?function(n){switch(n){case"mini":return"10px";case"tiny":return"13px";case"small":return"14px";case"medium":return"16px";case"large":return"18px";case"big":return"20px";case"huge":return"22px";case"massive":return"24px";default:return n}}(n.sizeBox):"17px"},"#707070",function(n){return n.disabled?"default":"pointer"},function(n){return n.disabled?.5:1},function(n){return n.disabled?"default":"pointer"},function(n){return n.disabled?.5:1},function(n){return n.sizeBox?cr(n.sizeBox):"17px"},function(n){return n.sizeBox?cr(n.sizeBox):"17px"},"#E1E6EB","#E1E6EB",function(n){return n.sizeBox?cr(n.sizeBox):"17px"},function(n){return n.sizeBox?cr(n.sizeBox):"17px"},"#68349F","#68349F","#FFFFFF",function(n){return n.sizeBox?function(n){switch(n){case"mini":return"1px";case"tiny":return"1.2px";case"small":return"1.4px";case"medium":case"large":case"big":return"2px";case"huge":return"3px";case"massive":return"4px";default:return n}}(n.sizeBox):"2.5px"},function(n){return n.sizeBox?function(n){switch(n){case"mini":return"5px";case"tiny":return"6px";case"small":return"7px";case"medium":return"8px";case"large":return"9px";case"big":return"10px";case"huge":return"11px";case"massive":return"12px";default:return n}}(n.sizeBox):"8px"},function(n){return n.sizeBox?function(n){switch(n){case"mini":return"8px";case"tiny":return"10px";case"small":return"11px";case"medium":return"13px";case"large":return"16px";case"big":return"19px";case"huge":return"21px";case"massive":return"23px";default:return n}}(n.sizeBox):"13px"},function(n){return n.checked?"#FFFFFF":"#E1E6EB"}),sr=["label","labelStyle","sizeBox"],ur=function(e){var t=e.label,r=e.labelStyle,o=e.sizeBox,i=v(e,sr);return n.createElement(pr,{onClick:function(){return i.disabled?null:i.onChange?i.onChange():null},disabled:i.disabled,sizeBox:o,checked:i.checked},n.createElement("input",Object.assign({type:"checkbox"},i)),n.createElement("div",null,n.createElement("span",null,n.createElement(fe,{icon:xt})),n.createElement("label",{style:r},t)))},mr=function(n){switch(n){case"mini":return"10px";case"tiny":return"12px";case"small":return"14px";case"medium":return"17px";case"large":return"20px";case"big":return"23px";case"huge":return"26px";case"massive":return"30px";default:return n}},br=function(n){switch(n){case"mini":return"2px";case"tiny":return"4px";case"small":return"6px";case"medium":return"9px";case"large":return"12px";case"big":return"15px";case"huge":return"18px";case"massive":return"22px";default:return n}},fr=r.div(et||(et=k(["\n    font-family: MontSerrat !important;\n\n    > input {\n        display: none;\n    }\n\n    label {\n        font-size: ",";\n        color: ",";\n        cursor: ",";\n        opacity: ",";\n        padding-top: ",";\n    }\n\n    > input + div {\n        position: relative;\n        padding-left: ",";\n        cursor: ",";\n        opacity: ",';\n        display: flex;\n        align-items: center;\n\n        &:before {\n            content: "";\n            position: absolute;\n            left: 0;\n            top: ',";\n            width: ",";\n            height: ",";\n            border: 1px solid ",";\n            background: ",';\n            border-radius: 50%;\n        }\n        &:after {\n            content: " ";\n            position: absolute;\n            left: 4px;\n            top: ',";\n            width: ",";\n            height: ",";\n            border: 1px solid ",";\n            background: ",";\n            border-radius: 50%;\n            color: ",";\n            text-align: center;\n            font-size: 12px;\n        }\n    }\n    > input:not(:checked) + div {\n        &:after {\n            opacity: 0;\n            transform: scale(0);\n        }\n    }\n    > input:checked + div {\n        &:after {\n            opacity: 1;\n            transform: scale(1);\n        }\n    }\n"])),function(n){return n.sizeBox?function(n){switch(n){case"mini":return"10px";case"tiny":return"13px";case"small":return"14px";case"medium":return"16px";case"large":return"18px";case"big":return"20px";case"huge":return"22px";case"massive":return"24px";default:return n}}(n.sizeBox):"17px"},"#707070",function(n){return n.disabled?"default":"pointer"},function(n){return n.disabled?.5:1},function(n){return n.sizeBox?function(n){switch(n){case"mini":case"tiny":case"small":case"medium":return"0px";case"large":case"big":return"2px";case"huge":return"3px";case"massive":return"4px";default:return n}}(n.sizeBox):"0px"},function(n){return n.sizeBox?function(n){switch(n){case"mini":return"15px";case"tiny":return"18px";case"small":return"20px";case"medium":return"25px";case"large":return"28px";case"big":return"32px";case"huge":return"35px";case"massive":return"40px";default:return n}}(n.sizeBox):"25px"},function(n){return n.disabled?"default":"pointer"},function(n){return n.disabled?.5:1},function(n){return n.sizeBox?function(n){switch(n){case"mini":return"5px";case"tiny":return"4px";case"small":return"3px";case"medium":return"1px";case"large":case"big":case"huge":case"massive":return"0px";default:return n}}(n.sizeBox):"1px"},function(n){return n.sizeBox?mr(n.sizeBox):"17px"},function(n){return n.sizeBox?mr(n.sizeBox):"17px"},"#D1D8DC","#E1E6EB",function(n){return n.sizeBox?function(n){switch(n){case"mini":return"9px";case"tiny":return"8px";case"small":return"7px";case"medium":return"5px";case"large":case"big":case"huge":case"massive":return"4px";default:return n}}(n.sizeBox):"5px"},function(n){return n.sizeBox?br(n.sizeBox):"9px"},function(n){return n.sizeBox?br(n.sizeBox):"9px"},"#707070","#707070","#FFFFFF"),hr=["label","labelStyle","sizeBox"],gr=function(e){var t=e.label,r=e.labelStyle,o=e.sizeBox,i=v(e,hr);return n.createElement(fr,{onClick:function(){return i.disabled?null:i.onChange?i.onChange():null},disabled:i.disabled,sizeBox:o},n.createElement("input",Object.assign({type:"radio"},i)),n.createElement("div",null,n.createElement("label",{style:r},t)))},wr=r.div(tt||(tt=k(["\n    font-family: MontSerrat !important;\n    width: 100% !important;\n    display: flex !important;\n    flex-direction: column !important;\n    padding-bottom: ",";\n\n    label {\n        font-size: 14px;\n        margin-left: 15px;\n        color: ",";\n    }\n\n    /*!\n * # Semantic UI 2.4.0 - Dropdown\n * http://github.com/semantic-org/semantic-ui/\n *\n *\n * Released under the MIT license\n * http://opensource.org/licenses/MIT\n *\n */\n\n    /*******************************\n            Dropdown\n*******************************/\n\n    .ui.dropdown {\n        cursor: pointer;\n        position: relative;\n        display: inline-block;\n        outline: none;\n        text-align: ",";\n        color: ",";\n        -webkit-transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;\n        transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;\n        transition: box-shadow 0.1s ease, width 0.1s ease;\n        transition: box-shadow 0.1s ease, width 0.1s ease,\n            -webkit-box-shadow 0.1s ease;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    }\n\n    /*******************************\n            Content\n*******************************/\n\n    /*--------------\n      Menu\n---------------*/\n\n    .ui.dropdown .menu {\n        cursor: auto;\n        position: absolute;\n        display: none;\n        outline: none;\n        top: 100%;\n        min-width: -webkit-max-content;\n        min-width: -moz-max-content;\n        min-width: max-content;\n        margin: 0em;\n        padding: 0em 0em;\n        background: #ffffff;\n        font-size: 1em;\n        text-shadow: none;\n        text-align: left;\n        -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n        box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n        border: 1px solid rgba(34, 36, 38, 0.15);\n        border-radius: ",";\n        -webkit-transition: opacity 0.1s ease;\n        transition: opacity 0.1s ease;\n        z-index: 11;\n        will-change: transform, opacity;\n        /* border-top: ",";\n        border-left: ",";\n        border-right: ","; */\n    }\n    .ui.dropdown .menu > * {\n        white-space: nowrap;\n    }\n\n    /*--------------\n  Hidden Input\n---------------*/\n\n    .ui.dropdown > input:not(.search):first-child,\n    .ui.dropdown > select {\n        display: none !important;\n    }\n\n    /*--------------\n Dropdown Icon\n---------------*/\n\n    .ui.dropdown > .dropdown.icon {\n        position: relative;\n        width: auto;\n        font-size: 0.85714286em;\n        margin: 0em 0em 0em 1em;\n    }\n    .ui.dropdown .menu > .item .dropdown.icon {\n        width: auto;\n        float: right;\n        margin: 0em 0em 0em 1em;\n    }\n    .ui.dropdown .menu > .item .dropdown.icon + .text {\n        margin-right: 1em;\n    }\n\n    /*--------------\n      Text\n---------------*/\n\n    .ui.dropdown > .text {\n        display: inline-block;\n        -webkit-transition: none;\n        transition: none;\n    }\n\n    /*--------------\n    Menu Item\n---------------*/\n\n    .ui.dropdown .menu > .item {\n        position: relative;\n        cursor: pointer;\n        display: block;\n        border: none;\n        height: auto;\n        text-align: left;\n        border-top: none;\n        line-height: 1em;\n        color: ",';\n        padding: 0.78571429rem 1.14285714rem !important;\n        font-size: 1rem;\n        text-transform: none;\n        font-weight: normal;\n        -webkit-box-shadow: none;\n        box-shadow: none;\n        -webkit-touch-callout: none;\n    }\n    .ui.dropdown .menu > .item:first-child {\n        border-top-width: 0px;\n    }\n\n    /*--------------\n  Floated Content\n---------------*/\n\n    .ui.dropdown > .text > [class*="right floated"],\n    .ui.dropdown .menu .item > [class*="right floated"] {\n        float: right !important;\n        margin-right: 0em !important;\n        margin-left: 1em !important;\n    }\n    .ui.dropdown > .text > [class*="left floated"],\n    .ui.dropdown .menu .item > [class*="left floated"] {\n        float: left !important;\n        margin-left: 0em !important;\n        margin-right: 1em !important;\n    }\n    .ui.dropdown .menu .item > .icon.floated,\n    .ui.dropdown .menu .item > .flag.floated,\n    .ui.dropdown .menu .item > .image.floated,\n    .ui.dropdown .menu .item > img.floated {\n        margin-top: 0em;\n    }\n\n    /*--------------\n  Menu Divider\n---------------*/\n\n    .ui.dropdown .menu > .header {\n        margin: 1rem 0rem 0.75rem;\n        padding: 0em 1.14285714rem;\n        color: rgba(0, 0, 0, 0.85);\n        font-size: 0.78571429em;\n        font-weight: bold;\n        text-transform: uppercase;\n    }\n    .ui.dropdown .menu > .divider {\n        border-top: 1px solid rgba(34, 36, 38, 0.1);\n        height: 0em;\n        margin: 0.5em 0em;\n    }\n    .ui.dropdown.dropdown .menu > .input {\n        width: auto;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        margin: 1.14285714rem 0.78571429rem;\n        min-width: 10rem;\n    }\n    .ui.dropdown .menu > .header + .input {\n        margin-top: 0em;\n    }\n    .ui.dropdown .menu > .input:not(.transparent) input {\n        padding: 0.5em 1em;\n    }\n    .ui.dropdown .menu > .input:not(.transparent) .button,\n    .ui.dropdown .menu > .input:not(.transparent) .icon,\n    .ui.dropdown .menu > .input:not(.transparent) .label {\n        padding-top: 0.5em;\n        padding-bottom: 0.5em;\n    }\n\n    /*-----------------\n  Item Description\n-------------------*/\n\n    .ui.dropdown > .text > .description,\n    .ui.dropdown .menu > .item > .description {\n        float: right;\n        margin: 0em 0em 0em 1em;\n        color: rgba(0, 0, 0, 0.4);\n    }\n\n    /*-----------------\n       Message\n-------------------*/\n\n    .ui.dropdown .menu > .message {\n        padding: 0.78571429rem 1.14285714rem;\n        font-weight: normal;\n    }\n    .ui.dropdown .menu > .message:not(.ui) {\n        color: rgba(0, 0, 0, 0.4);\n    }\n\n    /*--------------\n    Sub Menu\n---------------*/\n\n    .ui.dropdown .menu .menu {\n        top: 0% !important;\n        left: 100%;\n        right: auto;\n        margin: 0em 0em 0em -0.5em !important;\n        border-radius: 0.28571429rem !important;\n        z-index: 21 !important;\n    }\n\n    /* Hide Arrow */\n    .ui.dropdown .menu .menu:after {\n        display: none;\n    }\n\n    /*--------------\n   Sub Elements\n---------------*/\n\n    /* Icons / Flags / Labels / Image */\n    .ui.dropdown > .text > .icon,\n    .ui.dropdown > .text > .label,\n    .ui.dropdown > .text > .flag,\n    .ui.dropdown > .text > img,\n    .ui.dropdown > .text > .image {\n        margin-top: 0em;\n    }\n    .ui.dropdown .menu > .item > .icon,\n    .ui.dropdown .menu > .item > .label,\n    .ui.dropdown .menu > .item > .flag,\n    .ui.dropdown .menu > .item > .image,\n    .ui.dropdown .menu > .item > img {\n        margin-top: 0em;\n    }\n    .ui.dropdown > .text > .icon,\n    .ui.dropdown > .text > .label,\n    .ui.dropdown > .text > .flag,\n    .ui.dropdown > .text > img,\n    .ui.dropdown > .text > .image,\n    .ui.dropdown .menu > .item > .icon,\n    .ui.dropdown .menu > .item > .label,\n    .ui.dropdown .menu > .item > .flag,\n    .ui.dropdown .menu > .item > .image,\n    .ui.dropdown .menu > .item > img {\n        margin-left: 0em;\n        float: none;\n        margin-right: 0.78571429rem;\n    }\n\n    /*--------------\n     Image\n---------------*/\n\n    .ui.dropdown > .text > img,\n    .ui.dropdown > .text > .image,\n    .ui.dropdown .menu > .item > .image,\n    .ui.dropdown .menu > .item > img {\n        display: inline-block;\n        vertical-align: top;\n        width: auto;\n        margin-top: -0.5em;\n        margin-bottom: -0.5em;\n        max-height: 2em;\n    }\n\n    /*******************************\n            Coupling\n*******************************/\n\n    /*--------------\n      Menu\n---------------*/\n\n    /* Remove Menu Item Divider */\n    .ui.dropdown .ui.menu > .item:before,\n    .ui.menu .ui.dropdown .menu > .item:before {\n        display: none;\n    }\n\n    /* Prevent Menu Item Border */\n    .ui.menu .ui.dropdown .menu .active.item {\n        border-left: none;\n    }\n\n    /* Automatically float dropdown menu right on last menu item */\n    .ui.menu .right.menu .dropdown:last-child .menu,\n    .ui.menu .right.dropdown.item .menu,\n    .ui.buttons > .ui.dropdown:last-child .menu {\n        left: auto;\n        right: 0em;\n    }\n\n    /*--------------\n      Label\n---------------*/\n\n    /* Dropdown Menu */\n    .ui.label.dropdown .menu {\n        min-width: 100%;\n    }\n\n    /*--------------\n     Button\n---------------*/\n\n    /* No Margin On Icon Button */\n    .ui.dropdown.icon.button > .dropdown.icon {\n        margin: 0em;\n    }\n    .ui.button.dropdown .menu {\n        min-width: 100%;\n    }\n\n    /*******************************\n              Types\n*******************************/\n\n    /*--------------\n    Selection\n---------------*/\n\n    /* Displays like a select box */\n    .ui.selection.dropdown {\n        cursor: pointer;\n        word-wrap: break-word;\n        line-height: 1em;\n        white-space: normal;\n        outline: 0;\n        -webkit-transform: rotateZ(0deg);\n        transform: rotateZ(0deg);\n        min-width: 14em;\n        min-height: 2.71428571em;\n        background: ',";\n        display: inline-block;\n        padding: 0.78571429em 2.6em 0.78571429em 1.1em;\n        color: ",";\n        -webkit-box-shadow: none;\n        box-shadow: none;\n        border: 1px solid\n            ",";\n        border-radius: ",";\n        -webkit-transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;\n        transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;\n        transition: box-shadow 0.1s ease, width 0.1s ease;\n        transition: box-shadow 0.1s ease, width 0.1s ease,\n            -webkit-box-shadow 0.1s ease;\n        border-radius: ",";\n        border-top: ",";\n        border-left: ",";\n        border-right: ",";\n    }\n    .ui.selection.dropdown.visible,\n    .ui.selection.dropdown.active {\n        z-index: 10;\n    }\n    select.ui.dropdown {\n        height: 38px;\n        padding: 0.5em;\n        border: 1px solid rgba(34, 36, 38, 0.15);\n        visibility: visible;\n    }\n    .ui.selection.dropdown > .search.icon,\n    .ui.selection.dropdown > .delete.icon,\n    .ui.selection.dropdown > .dropdown.icon {\n        cursor: pointer;\n        position: absolute;\n        width: auto;\n        height: auto;\n        line-height: 1.21428571em;\n        top: 0.78571429em;\n        right: 1em;\n        z-index: 3;\n        margin: -0.78571429em;\n        padding: 0.91666667em;\n        opacity: 0.8;\n        -webkit-transition: opacity 0.1s ease;\n        transition: opacity 0.1s ease;\n    }\n\n    /* Compact */\n    .ui.compact.selection.dropdown {\n        min-width: 0px;\n    }\n\n    /*  Selection Menu */\n    .ui.selection.dropdown .menu {\n        overflow-x: hidden;\n        overflow-y: auto;\n        -webkit-backface-visibility: hidden;\n        backface-visibility: hidden;\n        -webkit-overflow-scrolling: touch;\n        border-top-width: 0px !important;\n        width: auto;\n        outline: none;\n        margin: 0px -1px;\n        min-width: calc(100% + 2px);\n        width: calc(100% + 2px);\n        border-radius: 0em 0em 0.28571429rem 0.28571429rem;\n        -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n        box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n        -webkit-transition: opacity 0.1s ease;\n        transition: opacity 0.1s ease;\n        border-bottom-left-radius: 20px;\n        border-bottom-right-radius: 20px;\n    }\n    .ui.selection.dropdown .menu:after,\n    .ui.selection.dropdown .menu:before {\n        display: none;\n    }\n\n    /*--------------\n    Message\n---------------*/\n\n    .ui.selection.dropdown .menu > .message {\n        padding: 0.78571429rem 1.14285714rem;\n    }\n    @media only screen and (max-width: 767px) {\n        .ui.selection.dropdown .menu {\n            max-height: 8.01428571rem;\n        }\n    }\n    @media only screen and (min-width: 768px) {\n        .ui.selection.dropdown .menu {\n            max-height: 10.68571429rem;\n        }\n    }\n    @media only screen and (min-width: 992px) {\n        .ui.selection.dropdown .menu {\n            max-height: 16.02857143rem;\n        }\n    }\n    @media only screen and (min-width: 1920px) {\n        .ui.selection.dropdown .menu {\n            max-height: 21.37142857rem;\n        }\n    }\n\n    /* Menu Item */\n    .ui.selection.dropdown .menu > .item {\n        border-top: 1px solid #fafafa;\n        padding: 0.78571429rem 1.04285714rem !important;\n        white-space: normal;\n        word-wrap: normal;\n    }\n\n    /* User Item */\n    .ui.selection.dropdown .menu > .hidden.addition.item {\n        display: none;\n    }\n\n    /* Hover */\n    .ui.selection.dropdown:hover {\n        border-color: ",";\n        -webkit-box-shadow: none;\n        box-shadow: none;\n    }\n\n    /* Active */\n    .ui.selection.active.dropdown {\n        border-color: ",";\n        -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n        box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n    }\n    .ui.selection.active.dropdown .menu {\n        border-color: ",";\n        -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n        box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n    }\n\n    /* Focus */\n    .ui.selection.dropdown:focus {\n        border-color: ",";\n        -webkit-box-shadow: none;\n        box-shadow: none;\n    }\n    .ui.selection.dropdown:focus .menu {\n        border-color: ",";\n        -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n        box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n    }\n\n    /* Visible */\n    .ui.selection.visible.dropdown > .text:not(.default) {\n        font-weight: normal;\n        color: ",";\n    }\n\n    /* Visible Hover */\n    .ui.selection.active.dropdown:hover {\n        border-color: ",";\n        -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n        box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n    }\n    .ui.selection.active.dropdown:hover .menu {\n        border-color: ",';\n        -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n        box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n    }\n\n    /* Dropdown Icon */\n    .ui.active.selection.dropdown > .dropdown.icon,\n    .ui.visible.selection.dropdown > .dropdown.icon {\n        opacity: "";\n        z-index: 3;\n    }\n\n    /* Connecting Border */\n    .ui.active.selection.dropdown {\n        border-bottom-left-radius: 0em !important;\n        border-bottom-right-radius: 0em !important;\n    }\n\n    /* Empty Connecting Border */\n    .ui.active.empty.selection.dropdown {\n        border-radius: 0.28571429rem !important;\n        -webkit-box-shadow: none !important;\n        box-shadow: none !important;\n    }\n    .ui.active.empty.selection.dropdown .menu {\n        border: none !important;\n        -webkit-box-shadow: none !important;\n        box-shadow: none !important;\n    }\n\n    /*--------------\n   Searchable\n---------------*/\n\n    /* Search Selection */\n    .ui.search.dropdown {\n        min-width: "";\n    }\n\n    /* Search Dropdown */\n    .ui.search.dropdown > input.search {\n        background: none transparent !important;\n        border: none !important;\n        -webkit-box-shadow: none !important;\n        box-shadow: none !important;\n        cursor: text;\n        top: 0em;\n        left: 1px;\n        width: 100%;\n        outline: none;\n        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n        padding: inherit;\n        color: ',";\n        text-align: ",";\n    }\n\n    /* Text Layering */\n    .ui.search.dropdown > input.search {\n        position: absolute;\n        z-index: 2;\n    }\n    .ui.search.dropdown > .text {\n        cursor: text;\n        position: relative;\n        left: 1px;\n        z-index: 3;\n    }\n\n    /* Search Selection */\n    .ui.search.selection.dropdown > input.search {\n        line-height: 1.21428571em;\n        padding: 0.67857143em 2.1em 0.67857143em 1em;\n    }\n\n    /* Used to size multi select input to character width */\n    .ui.search.selection.dropdown > span.sizer {\n        line-height: 1.21428571em;\n        padding: 0.67857143em 2.1em 0.67857143em 1em;\n        display: none;\n        white-space: pre;\n    }\n\n    /* Active/Visible Search */\n    .ui.search.dropdown.active > input.search,\n    .ui.search.dropdown.visible > input.search {\n        cursor: auto;\n        color: ",";\n    }\n    .ui.search.dropdown.active > .text,\n    .ui.search.dropdown.visible > .text {\n        pointer-events: none;\n    }\n\n    /* Filtered Text */\n    .ui.active.search.dropdown input.search:focus + .text .icon,\n    .ui.active.search.dropdown input.search:focus + .text .flag {\n        opacity: 0.45;\n    }\n    .ui.active.search.dropdown input.search:focus + .text {\n        color: rgba(115, 115, 115, 0.87) !important;\n    }\n\n    .input.search::placeholder {\n        color: ",";\n    }\n    /* Search Menu */\n    .ui.search.dropdown .menu {\n        overflow-x: hidden;\n        overflow-y: auto;\n        -webkit-backface-visibility: hidden;\n        backface-visibility: hidden;\n        -webkit-overflow-scrolling: touch;\n    }\n    @media only screen and (max-width: 767px) {\n        .ui.search.dropdown .menu {\n            max-height: 8.01428571rem;\n        }\n    }\n    @media only screen and (min-width: 768px) {\n        .ui.search.dropdown .menu {\n            max-height: 10.68571429rem;\n        }\n    }\n    @media only screen and (min-width: 992px) {\n        .ui.search.dropdown .menu {\n            max-height: 16.02857143rem;\n        }\n    }\n    @media only screen and (min-width: 1920px) {\n        .ui.search.dropdown .menu {\n            max-height: 21.37142857rem;\n        }\n    }\n\n    /*--------------\n    Multiple\n---------------*/\n\n    /* Multiple Selection */\n    .ui.multiple.dropdown {\n        padding: 0.22619048em 2.1em 0.22619048em 0.35714286em;\n    }\n    .ui.multiple.dropdown .menu {\n        cursor: auto;\n    }\n\n    /* Multiple Search Selection */\n    .ui.multiple.search.dropdown,\n    .ui.multiple.search.dropdown > input.search {\n        cursor: text;\n    }\n\n    /* Selection Label */\n    .ui.multiple.dropdown > .label {\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: inline-block;\n        vertical-align: top;\n        white-space: normal;\n        font-size: 1em;\n        padding: 0.35714286em 0.78571429em;\n        margin: 0.14285714rem 0.28571429rem 0.14285714rem 0.5em;\n        -webkit-box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.15) inset;\n        box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.15) inset;\n        border-radius: 20px;\n        color: ",";\n        background-color: ",';\n    }\n\n    /* Dropdown Icon */\n    .ui.multiple.dropdown .dropdown.icon {\n        margin: "";\n        padding: "";\n    }\n\n    /* Text */\n    .ui.multiple.dropdown > .text {\n        position: static;\n        padding: 0;\n        max-width: 100%;\n        margin: 0.45238095em 0em 0.45238095em 0.64285714em;\n        line-height: 1.21428571em;\n    }\n    .ui.multiple.dropdown > .label ~ input.search {\n        margin-left: 0.14285714em !important;\n    }\n    .ui.multiple.dropdown > .label ~ .text {\n        display: none;\n    }\n\n    /*-----------------\n  Multiple Search\n-----------------*/\n\n    /* Prompt Text */\n    .ui.multiple.search.dropdown > .text {\n        display: inline-block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        padding: inherit;\n        margin: 0.45238095em 0em 0.45238095em 0.64285714em;\n        line-height: 1.21428571em;\n    }\n    .ui.multiple.search.dropdown > .label ~ .text {\n        display: none;\n    }\n\n    /* Search */\n    .ui.multiple.search.dropdown > input.search {\n        position: static;\n        padding: 0;\n        max-width: 100%;\n        margin: 0.45238095em 0em 0.45238095em 0.64285714em;\n        width: 2.2em;\n        line-height: 1.21428571em;\n    }\n\n    /*--------------\n     Inline\n---------------*/\n\n    .ui.inline.dropdown {\n        cursor: pointer;\n        display: inline-block;\n        color: inherit;\n    }\n    .ui.inline.dropdown .dropdown.icon {\n        margin: 0em 0.21428571em 0em 0.21428571em;\n        vertical-align: baseline;\n    }\n    .ui.inline.dropdown > .text {\n        font-weight: bold;\n    }\n    .ui.inline.dropdown .menu {\n        cursor: auto;\n        margin-top: 0.21428571em;\n        border-radius: 0.28571429rem;\n    }\n\n    /*******************************\n            States\n*******************************/\n\n    /*--------------------\n        Active\n----------------------*/\n\n    /* Menu Item Active */\n    .ui.dropdown .menu .active.item {\n        background: transparent;\n        font-weight: bold;\n        color: ',";\n        -webkit-box-shadow: none;\n        box-shadow: none;\n        z-index: 12;\n    }\n\n    /*--------------------\n        Hover\n----------------------*/\n\n    /* Menu Item Hover */\n    .ui.dropdown .menu > .item:hover {\n        background: rgba(0, 0, 0, 0.05);\n        color: ",';\n        z-index: 13;\n    }\n\n    /*--------------------\n       Loading\n---------------------*/\n\n    .ui.loading.dropdown > i.icon {\n        height: 1em !important;\n    }\n    .ui.loading.selection.dropdown > i.icon {\n        padding: 1.5em 1.28571429em !important;\n    }\n    .ui.loading.dropdown > i.icon:before {\n        position: absolute;\n        content: "";\n        top: 50%;\n        left: 50%;\n        margin: -0.64285714em 0em 0em -0.64285714em;\n        width: 1.28571429em;\n        height: 1.28571429em;\n        border-radius: 500rem;\n        border: 0.2em solid rgba(0, 0, 0, 0.1);\n    }\n    .ui.loading.dropdown > i.icon:after {\n        position: absolute;\n        content: "";\n        top: 50%;\n        left: 50%;\n        -webkit-box-shadow: 0px 0px 0px 1px transparent;\n        box-shadow: 0px 0px 0px 1px transparent;\n        margin: -0.64285714em 0em 0em -0.64285714em;\n        width: 1.28571429em;\n        height: 1.28571429em;\n        -webkit-animation: dropdown-spin 0.6s linear;\n        animation: dropdown-spin 0.6s linear;\n        -webkit-animation-iteration-count: infinite;\n        animation-iteration-count: infinite;\n        border-radius: 500rem;\n        border-color: '," transparent transparent;\n        border-style: solid;\n        border-width: 0.2em;\n    }\n\n    /* Coupling */\n    .ui.loading.dropdown.button > i.icon:before,\n    .ui.loading.dropdown.button > i.icon:after {\n        display: none;\n    }\n    @-webkit-keyframes dropdown-spin {\n        from {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        to {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n    @keyframes dropdown-spin {\n        from {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        to {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n\n    /*--------------------\n     Default Text\n----------------------*/\n\n    .ui.dropdown:not(.button) > .default.text,\n    .ui.default.dropdown:not(.button) > .text {\n        color: ",";\n    }\n    .ui.dropdown:not(.button) > input:focus ~ .default.text,\n    .ui.default.dropdown:not(.button) > input:focus ~ .text {\n        color: ",";\n    }\n\n    /*--------------------\n        Loading\n----------------------*/\n\n    .ui.loading.dropdown > .text {\n        -webkit-transition: none;\n        transition: none;\n    }\n\n    /* Used To Check Position */\n    .ui.dropdown .loading.menu {\n        display: block;\n        visibility: hidden;\n        z-index: -1;\n    }\n    .ui.dropdown > .loading.menu {\n        left: 0px !important;\n        right: auto !important;\n    }\n    .ui.dropdown > .menu .loading.menu {\n        left: 100% !important;\n        right: auto !important;\n    }\n\n    /*--------------------\n    Keyboard Select\n----------------------*/\n\n    /* Selected Item */\n    .ui.dropdown.selected,\n    .ui.dropdown .menu .selected.item {\n        background: rgba(0, 0, 0, 0.03);\n        color: ",";\n    }\n\n    /*--------------------\n    Search Filtered\n----------------------*/\n\n    /* Filtered Item */\n    .ui.dropdown > .filtered.text {\n        visibility: hidden;\n    }\n    .ui.dropdown .filtered.item {\n        display: none !important;\n    }\n\n    /*--------------------\n        Error\n----------------------*/\n\n    .ui.dropdown.error,\n    .ui.dropdown.error > .text,\n    .ui.dropdown.error > .default.text {\n        color: #9f3a38;\n    }\n    .ui.selection.dropdown.error {\n        background: ",";\n        border-color: ",";\n    }\n    .ui.selection.dropdown.error:hover {\n        border-color: ",";\n    }\n    .ui.dropdown.error > .menu,\n    .ui.dropdown.error > .menu .menu {\n        border-color: ",";\n    }\n    .ui.dropdown.error > .menu > .item {\n        color: ",";\n    }\n    .ui.multiple.selection.error.dropdown > .label {\n        border-color: ",";\n    }\n\n    /* Item Hover */\n    .ui.dropdown.error > .menu > .item:hover {\n        background-color: ",";\n    }\n\n    /* Item Active */\n    .ui.dropdown.error > .menu .active.item {\n        background-color: ",';\n    }\n\n    /*--------------------\n        Clear\n----------------------*/\n\n    .ui.dropdown > .clear.dropdown.icon {\n        opacity: 0.8;\n        -webkit-transition: opacity 0.1s ease;\n        transition: opacity 0.1s ease;\n    }\n    .ui.dropdown > .clear.dropdown.icon:hover {\n        opacity: 1;\n    }\n\n    /*--------------------\n        Disabled\n----------------------*/\n\n    /* Disabled */\n    .ui.disabled.dropdown,\n    .ui.dropdown .menu > .disabled.item {\n        cursor: default;\n        pointer-events: none;\n        opacity: 0.45;\n    }\n\n    /*******************************\n           Variations\n*******************************/\n\n    /*--------------\n    Direction\n---------------*/\n\n    /* Flyout Direction */\n    .ui.dropdown .menu {\n        left: 0px;\n    }\n\n    /* Default Side (Right) */\n    .ui.dropdown .right.menu > .menu,\n    .ui.dropdown .menu .right.menu {\n        left: 100% !important;\n        right: auto !important;\n        border-radius: 0.28571429rem !important;\n    }\n\n    /* Leftward Opening Menu */\n    .ui.dropdown > .left.menu {\n        left: auto !important;\n        right: 0px !important;\n    }\n    .ui.dropdown > .left.menu .menu,\n    .ui.dropdown .menu .left.menu {\n        left: auto;\n        right: 100%;\n        margin: 0em -0.5em 0em 0em !important;\n        border-radius: 0.28571429rem !important;\n    }\n    .ui.dropdown .item .left.dropdown.icon,\n    .ui.dropdown .left.menu .item .dropdown.icon {\n        width: auto;\n        float: left;\n        margin: 0em 0em 0em 0em;\n    }\n    .ui.dropdown .item .left.dropdown.icon,\n    .ui.dropdown .left.menu .item .dropdown.icon {\n        width: auto;\n        float: left;\n        margin: 0em 0em 0em 0em;\n    }\n    .ui.dropdown .item .left.dropdown.icon + .text,\n    .ui.dropdown .left.menu .item .dropdown.icon + .text {\n        margin-left: 1em;\n        margin-right: 0em;\n    }\n\n    /*--------------\n     Upward\n---------------*/\n\n    /* Upward Main Menu */\n    .ui.upward.dropdown > .menu {\n        top: auto;\n        bottom: 100%;\n        -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08);\n        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08);\n        border-radius: 0.28571429rem 0.28571429rem 0em 0em;\n    }\n\n    /* Upward Sub Menu */\n    .ui.dropdown .upward.menu {\n        top: auto !important;\n        bottom: 0 !important;\n    }\n\n    /* Active Upward */\n    .ui.simple.upward.active.dropdown,\n    .ui.simple.upward.dropdown:hover {\n        border-radius: 0.28571429rem 0.28571429rem 0em 0em !important;\n    }\n    .ui.upward.dropdown.button:not(.pointing):not(.floating).active {\n        border-radius: 0.28571429rem 0.28571429rem 0em 0em;\n    }\n\n    /* Selection */\n    .ui.upward.selection.dropdown .menu {\n        border-top-width: 1px !important;\n        border-bottom-width: 0px !important;\n        -webkit-box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.08);\n        box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.08);\n        border-top-left-radius: 20px;\n        border-top-right-radius: 20px;\n    }\n    .ui.upward.selection.dropdown:hover {\n        -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.05);\n        box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.05);\n    }\n\n    /* Active Upward */\n    .ui.active.upward.selection.dropdown {\n        border-radius: 0em 0em 20px 20px !important;\n    }\n\n    /* Visible Upward */\n    .ui.upward.selection.dropdown.visible {\n        -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08);\n        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08);\n        border-radius: 0em 0em 20px 20px !important;\n    }\n\n    /* Visible Hover Upward */\n    .ui.upward.active.selection.dropdown:hover {\n        -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);\n        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);\n    }\n    .ui.upward.active.selection.dropdown:hover .menu {\n        -webkit-box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.08);\n        box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.08);\n    }\n\n    /*--------------\n     Simple\n---------------*/\n\n    /*  Selection Menu */\n    .ui.scrolling.dropdown .menu,\n    .ui.dropdown .scrolling.menu {\n        overflow-x: hidden;\n        overflow-y: auto;\n    }\n    .ui.scrolling.dropdown .menu {\n        overflow-x: hidden;\n        overflow-y: auto;\n        -webkit-backface-visibility: hidden;\n        backface-visibility: hidden;\n        -webkit-overflow-scrolling: touch;\n        min-width: 100% !important;\n        width: auto !important;\n    }\n    .ui.dropdown .scrolling.menu {\n        position: static;\n        overflow-y: auto;\n        border: none;\n        -webkit-box-shadow: none !important;\n        box-shadow: none !important;\n        border-radius: 0 !important;\n        margin: 0 !important;\n        min-width: 100% !important;\n        width: auto !important;\n        border-top: 1px solid rgba(34, 36, 38, 0.15);\n    }\n    .ui.scrolling.dropdown .menu .item.item.item,\n    .ui.dropdown .scrolling.menu > .item.item.item {\n        border-top: none;\n    }\n    .ui.scrolling.dropdown .menu .item:first-child,\n    .ui.dropdown .scrolling.menu .item:first-child {\n        border-top: none;\n    }\n    .ui.dropdown > .animating.menu .scrolling.menu,\n    .ui.dropdown > .visible.menu .scrolling.menu {\n        display: block;\n    }\n\n    /* Scrollbar in IE */\n    @media all and (-ms-high-contrast: none) {\n        .ui.scrolling.dropdown .menu,\n        .ui.dropdown .scrolling.menu {\n            min-width: calc(100% - 17px);\n        }\n    }\n    @media only screen and (max-width: 767px) {\n        .ui.scrolling.dropdown .menu,\n        .ui.dropdown .scrolling.menu {\n            max-height: 10.28571429rem;\n        }\n    }\n    @media only screen and (min-width: 768px) {\n        .ui.scrolling.dropdown .menu,\n        .ui.dropdown .scrolling.menu {\n            max-height: 15.42857143rem;\n        }\n    }\n    @media only screen and (min-width: 992px) {\n        .ui.scrolling.dropdown .menu,\n        .ui.dropdown .scrolling.menu {\n            max-height: 20.57142857rem;\n        }\n    }\n    @media only screen and (min-width: 1920px) {\n        .ui.scrolling.dropdown .menu,\n        .ui.dropdown .scrolling.menu {\n            max-height: 20.57142857rem;\n        }\n    }\n\n    /*--------------\n     Simple\n---------------*/\n\n    /* Displays without javascript */\n    .ui.simple.dropdown .menu:before,\n    .ui.simple.dropdown .menu:after {\n        display: none;\n    }\n    .ui.simple.dropdown .menu {\n        position: absolute;\n        display: block;\n        overflow: hidden;\n        top: -9999px !important;\n        opacity: 0;\n        width: 0;\n        height: 0;\n        -webkit-transition: opacity 0.1s ease;\n        transition: opacity 0.1s ease;\n    }\n    .ui.simple.active.dropdown,\n    .ui.simple.dropdown:hover {\n        border-bottom-left-radius: 0em !important;\n        border-bottom-right-radius: 0em !important;\n    }\n    .ui.simple.active.dropdown > .menu,\n    .ui.simple.dropdown:hover > .menu {\n        overflow: visible;\n        width: auto;\n        height: auto;\n        top: 100% !important;\n        opacity: 1;\n    }\n    .ui.simple.dropdown > .menu > .item:active > .menu,\n    .ui.simple.dropdown:hover > .menu > .item:hover > .menu {\n        overflow: visible;\n        width: auto;\n        height: auto;\n        top: 0% !important;\n        left: 100% !important;\n        opacity: 1;\n    }\n    .ui.simple.disabled.dropdown:hover .menu {\n        display: none;\n        height: 0px;\n        width: 0px;\n        overflow: hidden;\n    }\n\n    /* Visible */\n    .ui.simple.visible.dropdown > .menu {\n        display: block;\n    }\n\n    /*--------------\n      Fluid\n---------------*/\n\n    .ui.fluid.dropdown {\n        display: block;\n        width: 100%;\n        min-width: 0em;\n    }\n    .ui.fluid.dropdown > .dropdown.icon {\n        float: right;\n    }\n\n    /*--------------\n    Floating\n---------------*/\n\n    .ui.floating.dropdown .menu {\n        left: 0;\n        right: auto;\n        -webkit-box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12),\n            0px 2px 10px 0px rgba(34, 36, 38, 0.15) !important;\n        box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12),\n            0px 2px 10px 0px rgba(34, 36, 38, 0.15) !important;\n        border-radius: 0.28571429rem !important;\n    }\n    .ui.floating.dropdown > .menu {\n        margin-top: 0.5em !important;\n        border-radius: 0.28571429rem !important;\n    }\n\n    /*--------------\n     Pointing\n---------------*/\n\n    .ui.pointing.dropdown > .menu {\n        top: 100%;\n        margin-top: 0.78571429rem;\n        border-radius: 0.28571429rem;\n    }\n    .ui.pointing.dropdown > .menu:after {\n        display: block;\n        position: absolute;\n        pointer-events: none;\n        content: "";\n        visibility: visible;\n        -webkit-transform: rotate(45deg);\n        transform: rotate(45deg);\n        width: 0.5em;\n        height: 0.5em;\n        -webkit-box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);\n        box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);\n        background: #ffffff;\n        z-index: 2;\n    }\n    .ui.pointing.dropdown > .menu:after {\n        top: -0.25em;\n        left: 50%;\n        margin: 0em 0em 0em -0.25em;\n    }\n\n    /* Top Left Pointing */\n    .ui.top.left.pointing.dropdown > .menu {\n        top: 100%;\n        bottom: auto;\n        left: 0%;\n        right: auto;\n        margin: 1em 0em 0em;\n    }\n    .ui.top.left.pointing.dropdown > .menu {\n        top: 100%;\n        bottom: auto;\n        left: 0%;\n        right: auto;\n        margin: 1em 0em 0em;\n    }\n    .ui.top.left.pointing.dropdown > .menu:after {\n        top: -0.25em;\n        left: 1em;\n        right: auto;\n        margin: 0em;\n        -webkit-transform: rotate(45deg);\n        transform: rotate(45deg);\n    }\n\n    /* Top Right Pointing */\n    .ui.top.right.pointing.dropdown > .menu {\n        top: 100%;\n        bottom: auto;\n        right: 0%;\n        left: auto;\n        margin: 1em 0em 0em;\n    }\n    .ui.top.pointing.dropdown > .left.menu:after,\n    .ui.top.right.pointing.dropdown > .menu:after {\n        top: -0.25em;\n        left: auto !important;\n        right: 1em !important;\n        margin: 0em;\n        -webkit-transform: rotate(45deg);\n        transform: rotate(45deg);\n    }\n\n    /* Left Pointing */\n    .ui.left.pointing.dropdown > .menu {\n        top: 0%;\n        left: 100%;\n        right: auto;\n        margin: 0em 0em 0em 1em;\n    }\n    .ui.left.pointing.dropdown > .menu:after {\n        top: 1em;\n        left: -0.25em;\n        margin: 0em 0em 0em 0em;\n        -webkit-transform: rotate(-45deg);\n        transform: rotate(-45deg);\n    }\n    .ui.left:not(.top):not(.bottom).pointing.dropdown > .left.menu {\n        left: auto !important;\n        right: 100% !important;\n        margin: 0em 1em 0em 0em;\n    }\n    .ui.left:not(.top):not(.bottom).pointing.dropdown > .left.menu:after {\n        top: 1em;\n        left: auto;\n        right: -0.25em;\n        margin: 0em 0em 0em 0em;\n        -webkit-transform: rotate(135deg);\n        transform: rotate(135deg);\n    }\n\n    /* Right Pointing */\n    .ui.right.pointing.dropdown > .menu {\n        top: 0%;\n        left: auto;\n        right: 100%;\n        margin: 0em 1em 0em 0em;\n    }\n    .ui.right.pointing.dropdown > .menu:after {\n        top: 1em;\n        left: auto;\n        right: -0.25em;\n        margin: 0em 0em 0em 0em;\n        -webkit-transform: rotate(135deg);\n        transform: rotate(135deg);\n    }\n\n    /* Bottom Pointing */\n    .ui.bottom.pointing.dropdown > .menu {\n        top: auto;\n        bottom: 100%;\n        left: 0%;\n        right: auto;\n        margin: 0em 0em 1em;\n    }\n    .ui.bottom.pointing.dropdown > .menu:after {\n        top: auto;\n        bottom: -0.25em;\n        right: auto;\n        margin: 0em;\n        -webkit-transform: rotate(-135deg);\n        transform: rotate(-135deg);\n    }\n\n    /* Reverse Sub-Menu Direction */\n    .ui.bottom.pointing.dropdown > .menu .menu {\n        top: auto !important;\n        bottom: 0px !important;\n    }\n\n    /* Bottom Left */\n    .ui.bottom.left.pointing.dropdown > .menu {\n        left: 0%;\n        right: auto;\n    }\n    .ui.bottom.left.pointing.dropdown > .menu:after {\n        left: 1em;\n        right: auto;\n    }\n\n    /* Bottom Right */\n    .ui.bottom.right.pointing.dropdown > .menu {\n        right: 0%;\n        left: auto;\n    }\n    .ui.bottom.right.pointing.dropdown > .menu:after {\n        left: auto;\n        right: 1em;\n    }\n\n    /* Upward pointing */\n    .ui.pointing.upward.dropdown .menu,\n    .ui.top.pointing.upward.dropdown .menu {\n        top: auto !important;\n        bottom: 100% !important;\n        margin: 0em 0em 0.78571429rem;\n        border-radius: 0.28571429rem;\n    }\n    .ui.pointing.upward.dropdown .menu:after,\n    .ui.top.pointing.upward.dropdown .menu:after {\n        top: 100% !important;\n        bottom: auto !important;\n        -webkit-box-shadow: 1px 1px 0px 0px rgba(34, 36, 38, 0.15);\n        box-shadow: 1px 1px 0px 0px rgba(34, 36, 38, 0.15);\n        margin: -0.25em 0em 0em;\n    }\n\n    /* Right Pointing Upward */\n    .ui.right.pointing.upward.dropdown:not(.top):not(.bottom) .menu {\n        top: auto !important;\n        bottom: 0 !important;\n        margin: 0em 1em 0em 0em;\n    }\n    .ui.right.pointing.upward.dropdown:not(.top):not(.bottom) .menu:after {\n        top: auto !important;\n        bottom: 0 !important;\n        margin: 0em 0em 1em 0em;\n        -webkit-box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);\n        box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);\n    }\n\n    /* Left Pointing Upward */\n    .ui.left.pointing.upward.dropdown:not(.top):not(.bottom) .menu {\n        top: auto !important;\n        bottom: 0 !important;\n        margin: 0em 0em 0em 1em;\n    }\n    .ui.left.pointing.upward.dropdown:not(.top):not(.bottom) .menu:after {\n        top: auto !important;\n        bottom: 0 !important;\n        margin: 0em 0em 1em 0em;\n        -webkit-box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);\n        box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);\n    }\n\n    /*******************************\n         Theme Overrides\n*******************************/\n\n    /* Dropdown Carets */\n    .ui.dropdown > .dropdown.icon {\n        font-family: "Dropdown";\n        line-height: 1;\n        height: 1em;\n        width: 1.23em;\n        -webkit-backface-visibility: hidden;\n        backface-visibility: hidden;\n        font-weight: normal;\n        font-style: normal;\n        text-align: center;\n    }\n    .ui.dropdown > .dropdown.icon {\n        width: auto;\n    }\n    .ui.dropdown > .dropdown.icon:before {\n        content: "\f0d7";\n    }\n\n    /* Sub Menu */\n    .ui.dropdown .menu .item .dropdown.icon:before {\n        content: "\f0da" /*rtl:\'\f0d9\'*/;\n    }\n    .ui.dropdown .item .left.dropdown.icon:before,\n    .ui.dropdown .left.menu .item .dropdown.icon:before {\n        content: "\f0d9" /*rtl:"\f0da"*/;\n    }\n\n    /* Vertical Menu Dropdown */\n    .ui.vertical.menu .dropdown.item > .dropdown.icon:before {\n        content: "\f0da" /*rtl:"\f0d9"*/;\n    }\n    .ui.dropdown > .clear.icon:before {\n        content: "\f00d";\n    }\n\n    .ui.selection.active.dropdown .menu::-webkit-scrollbar {\n        width: 7px;\n        border-radius: 50px;\n        z-index: -1px;\n    }\n\n    .ui.selection.active.dropdown .menu::-webkit-scrollbar-thumb {\n        background-color: ',";\n        border-radius: 50px;\n    }\n\n    .ui.selection.active.dropdown .menu::-webkit-scrollbar-thumb:hover {\n        background-color: ",';\n    }\n    /* Icons for Reference (Subsetted in 2.4.0)\n  .dropdown.down:before { content: "\f0d7"; }\n  .dropdown.up:before { content: "\f0d8"; }\n  .dropdown.left:before { content: "\f0d9"; }\n  .dropdown.right:before { content: "\f0da"; }\n  .dropdown.close:before { content: "\f00d"; }\n*/\n\n    /*******************************\n        User Overrides\n*******************************/\n\n    small {\n        margin-left: 15px;\n        font-size: 10px;\n        color: ',";\n    }\n"],["\n    font-family: MontSerrat !important;\n    width: 100% !important;\n    display: flex !important;\n    flex-direction: column !important;\n    padding-bottom: ",";\n\n    label {\n        font-size: 14px;\n        margin-left: 15px;\n        color: ",";\n    }\n\n    /*!\n * # Semantic UI 2.4.0 - Dropdown\n * http://github.com/semantic-org/semantic-ui/\n *\n *\n * Released under the MIT license\n * http://opensource.org/licenses/MIT\n *\n */\n\n    /*******************************\n            Dropdown\n*******************************/\n\n    .ui.dropdown {\n        cursor: pointer;\n        position: relative;\n        display: inline-block;\n        outline: none;\n        text-align: ",";\n        color: ",";\n        -webkit-transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;\n        transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;\n        transition: box-shadow 0.1s ease, width 0.1s ease;\n        transition: box-shadow 0.1s ease, width 0.1s ease,\n            -webkit-box-shadow 0.1s ease;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    }\n\n    /*******************************\n            Content\n*******************************/\n\n    /*--------------\n      Menu\n---------------*/\n\n    .ui.dropdown .menu {\n        cursor: auto;\n        position: absolute;\n        display: none;\n        outline: none;\n        top: 100%;\n        min-width: -webkit-max-content;\n        min-width: -moz-max-content;\n        min-width: max-content;\n        margin: 0em;\n        padding: 0em 0em;\n        background: #ffffff;\n        font-size: 1em;\n        text-shadow: none;\n        text-align: left;\n        -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n        box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n        border: 1px solid rgba(34, 36, 38, 0.15);\n        border-radius: ",";\n        -webkit-transition: opacity 0.1s ease;\n        transition: opacity 0.1s ease;\n        z-index: 11;\n        will-change: transform, opacity;\n        /* border-top: ",";\n        border-left: ",";\n        border-right: ","; */\n    }\n    .ui.dropdown .menu > * {\n        white-space: nowrap;\n    }\n\n    /*--------------\n  Hidden Input\n---------------*/\n\n    .ui.dropdown > input:not(.search):first-child,\n    .ui.dropdown > select {\n        display: none !important;\n    }\n\n    /*--------------\n Dropdown Icon\n---------------*/\n\n    .ui.dropdown > .dropdown.icon {\n        position: relative;\n        width: auto;\n        font-size: 0.85714286em;\n        margin: 0em 0em 0em 1em;\n    }\n    .ui.dropdown .menu > .item .dropdown.icon {\n        width: auto;\n        float: right;\n        margin: 0em 0em 0em 1em;\n    }\n    .ui.dropdown .menu > .item .dropdown.icon + .text {\n        margin-right: 1em;\n    }\n\n    /*--------------\n      Text\n---------------*/\n\n    .ui.dropdown > .text {\n        display: inline-block;\n        -webkit-transition: none;\n        transition: none;\n    }\n\n    /*--------------\n    Menu Item\n---------------*/\n\n    .ui.dropdown .menu > .item {\n        position: relative;\n        cursor: pointer;\n        display: block;\n        border: none;\n        height: auto;\n        text-align: left;\n        border-top: none;\n        line-height: 1em;\n        color: ",';\n        padding: 0.78571429rem 1.14285714rem !important;\n        font-size: 1rem;\n        text-transform: none;\n        font-weight: normal;\n        -webkit-box-shadow: none;\n        box-shadow: none;\n        -webkit-touch-callout: none;\n    }\n    .ui.dropdown .menu > .item:first-child {\n        border-top-width: 0px;\n    }\n\n    /*--------------\n  Floated Content\n---------------*/\n\n    .ui.dropdown > .text > [class*="right floated"],\n    .ui.dropdown .menu .item > [class*="right floated"] {\n        float: right !important;\n        margin-right: 0em !important;\n        margin-left: 1em !important;\n    }\n    .ui.dropdown > .text > [class*="left floated"],\n    .ui.dropdown .menu .item > [class*="left floated"] {\n        float: left !important;\n        margin-left: 0em !important;\n        margin-right: 1em !important;\n    }\n    .ui.dropdown .menu .item > .icon.floated,\n    .ui.dropdown .menu .item > .flag.floated,\n    .ui.dropdown .menu .item > .image.floated,\n    .ui.dropdown .menu .item > img.floated {\n        margin-top: 0em;\n    }\n\n    /*--------------\n  Menu Divider\n---------------*/\n\n    .ui.dropdown .menu > .header {\n        margin: 1rem 0rem 0.75rem;\n        padding: 0em 1.14285714rem;\n        color: rgba(0, 0, 0, 0.85);\n        font-size: 0.78571429em;\n        font-weight: bold;\n        text-transform: uppercase;\n    }\n    .ui.dropdown .menu > .divider {\n        border-top: 1px solid rgba(34, 36, 38, 0.1);\n        height: 0em;\n        margin: 0.5em 0em;\n    }\n    .ui.dropdown.dropdown .menu > .input {\n        width: auto;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        margin: 1.14285714rem 0.78571429rem;\n        min-width: 10rem;\n    }\n    .ui.dropdown .menu > .header + .input {\n        margin-top: 0em;\n    }\n    .ui.dropdown .menu > .input:not(.transparent) input {\n        padding: 0.5em 1em;\n    }\n    .ui.dropdown .menu > .input:not(.transparent) .button,\n    .ui.dropdown .menu > .input:not(.transparent) .icon,\n    .ui.dropdown .menu > .input:not(.transparent) .label {\n        padding-top: 0.5em;\n        padding-bottom: 0.5em;\n    }\n\n    /*-----------------\n  Item Description\n-------------------*/\n\n    .ui.dropdown > .text > .description,\n    .ui.dropdown .menu > .item > .description {\n        float: right;\n        margin: 0em 0em 0em 1em;\n        color: rgba(0, 0, 0, 0.4);\n    }\n\n    /*-----------------\n       Message\n-------------------*/\n\n    .ui.dropdown .menu > .message {\n        padding: 0.78571429rem 1.14285714rem;\n        font-weight: normal;\n    }\n    .ui.dropdown .menu > .message:not(.ui) {\n        color: rgba(0, 0, 0, 0.4);\n    }\n\n    /*--------------\n    Sub Menu\n---------------*/\n\n    .ui.dropdown .menu .menu {\n        top: 0% !important;\n        left: 100%;\n        right: auto;\n        margin: 0em 0em 0em -0.5em !important;\n        border-radius: 0.28571429rem !important;\n        z-index: 21 !important;\n    }\n\n    /* Hide Arrow */\n    .ui.dropdown .menu .menu:after {\n        display: none;\n    }\n\n    /*--------------\n   Sub Elements\n---------------*/\n\n    /* Icons / Flags / Labels / Image */\n    .ui.dropdown > .text > .icon,\n    .ui.dropdown > .text > .label,\n    .ui.dropdown > .text > .flag,\n    .ui.dropdown > .text > img,\n    .ui.dropdown > .text > .image {\n        margin-top: 0em;\n    }\n    .ui.dropdown .menu > .item > .icon,\n    .ui.dropdown .menu > .item > .label,\n    .ui.dropdown .menu > .item > .flag,\n    .ui.dropdown .menu > .item > .image,\n    .ui.dropdown .menu > .item > img {\n        margin-top: 0em;\n    }\n    .ui.dropdown > .text > .icon,\n    .ui.dropdown > .text > .label,\n    .ui.dropdown > .text > .flag,\n    .ui.dropdown > .text > img,\n    .ui.dropdown > .text > .image,\n    .ui.dropdown .menu > .item > .icon,\n    .ui.dropdown .menu > .item > .label,\n    .ui.dropdown .menu > .item > .flag,\n    .ui.dropdown .menu > .item > .image,\n    .ui.dropdown .menu > .item > img {\n        margin-left: 0em;\n        float: none;\n        margin-right: 0.78571429rem;\n    }\n\n    /*--------------\n     Image\n---------------*/\n\n    .ui.dropdown > .text > img,\n    .ui.dropdown > .text > .image,\n    .ui.dropdown .menu > .item > .image,\n    .ui.dropdown .menu > .item > img {\n        display: inline-block;\n        vertical-align: top;\n        width: auto;\n        margin-top: -0.5em;\n        margin-bottom: -0.5em;\n        max-height: 2em;\n    }\n\n    /*******************************\n            Coupling\n*******************************/\n\n    /*--------------\n      Menu\n---------------*/\n\n    /* Remove Menu Item Divider */\n    .ui.dropdown .ui.menu > .item:before,\n    .ui.menu .ui.dropdown .menu > .item:before {\n        display: none;\n    }\n\n    /* Prevent Menu Item Border */\n    .ui.menu .ui.dropdown .menu .active.item {\n        border-left: none;\n    }\n\n    /* Automatically float dropdown menu right on last menu item */\n    .ui.menu .right.menu .dropdown:last-child .menu,\n    .ui.menu .right.dropdown.item .menu,\n    .ui.buttons > .ui.dropdown:last-child .menu {\n        left: auto;\n        right: 0em;\n    }\n\n    /*--------------\n      Label\n---------------*/\n\n    /* Dropdown Menu */\n    .ui.label.dropdown .menu {\n        min-width: 100%;\n    }\n\n    /*--------------\n     Button\n---------------*/\n\n    /* No Margin On Icon Button */\n    .ui.dropdown.icon.button > .dropdown.icon {\n        margin: 0em;\n    }\n    .ui.button.dropdown .menu {\n        min-width: 100%;\n    }\n\n    /*******************************\n              Types\n*******************************/\n\n    /*--------------\n    Selection\n---------------*/\n\n    /* Displays like a select box */\n    .ui.selection.dropdown {\n        cursor: pointer;\n        word-wrap: break-word;\n        line-height: 1em;\n        white-space: normal;\n        outline: 0;\n        -webkit-transform: rotateZ(0deg);\n        transform: rotateZ(0deg);\n        min-width: 14em;\n        min-height: 2.71428571em;\n        background: ',";\n        display: inline-block;\n        padding: 0.78571429em 2.6em 0.78571429em 1.1em;\n        color: ",";\n        -webkit-box-shadow: none;\n        box-shadow: none;\n        border: 1px solid\n            ",";\n        border-radius: ",";\n        -webkit-transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;\n        transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;\n        transition: box-shadow 0.1s ease, width 0.1s ease;\n        transition: box-shadow 0.1s ease, width 0.1s ease,\n            -webkit-box-shadow 0.1s ease;\n        border-radius: ",";\n        border-top: ",";\n        border-left: ",";\n        border-right: ",";\n    }\n    .ui.selection.dropdown.visible,\n    .ui.selection.dropdown.active {\n        z-index: 10;\n    }\n    select.ui.dropdown {\n        height: 38px;\n        padding: 0.5em;\n        border: 1px solid rgba(34, 36, 38, 0.15);\n        visibility: visible;\n    }\n    .ui.selection.dropdown > .search.icon,\n    .ui.selection.dropdown > .delete.icon,\n    .ui.selection.dropdown > .dropdown.icon {\n        cursor: pointer;\n        position: absolute;\n        width: auto;\n        height: auto;\n        line-height: 1.21428571em;\n        top: 0.78571429em;\n        right: 1em;\n        z-index: 3;\n        margin: -0.78571429em;\n        padding: 0.91666667em;\n        opacity: 0.8;\n        -webkit-transition: opacity 0.1s ease;\n        transition: opacity 0.1s ease;\n    }\n\n    /* Compact */\n    .ui.compact.selection.dropdown {\n        min-width: 0px;\n    }\n\n    /*  Selection Menu */\n    .ui.selection.dropdown .menu {\n        overflow-x: hidden;\n        overflow-y: auto;\n        -webkit-backface-visibility: hidden;\n        backface-visibility: hidden;\n        -webkit-overflow-scrolling: touch;\n        border-top-width: 0px !important;\n        width: auto;\n        outline: none;\n        margin: 0px -1px;\n        min-width: calc(100% + 2px);\n        width: calc(100% + 2px);\n        border-radius: 0em 0em 0.28571429rem 0.28571429rem;\n        -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n        box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n        -webkit-transition: opacity 0.1s ease;\n        transition: opacity 0.1s ease;\n        border-bottom-left-radius: 20px;\n        border-bottom-right-radius: 20px;\n    }\n    .ui.selection.dropdown .menu:after,\n    .ui.selection.dropdown .menu:before {\n        display: none;\n    }\n\n    /*--------------\n    Message\n---------------*/\n\n    .ui.selection.dropdown .menu > .message {\n        padding: 0.78571429rem 1.14285714rem;\n    }\n    @media only screen and (max-width: 767px) {\n        .ui.selection.dropdown .menu {\n            max-height: 8.01428571rem;\n        }\n    }\n    @media only screen and (min-width: 768px) {\n        .ui.selection.dropdown .menu {\n            max-height: 10.68571429rem;\n        }\n    }\n    @media only screen and (min-width: 992px) {\n        .ui.selection.dropdown .menu {\n            max-height: 16.02857143rem;\n        }\n    }\n    @media only screen and (min-width: 1920px) {\n        .ui.selection.dropdown .menu {\n            max-height: 21.37142857rem;\n        }\n    }\n\n    /* Menu Item */\n    .ui.selection.dropdown .menu > .item {\n        border-top: 1px solid #fafafa;\n        padding: 0.78571429rem 1.04285714rem !important;\n        white-space: normal;\n        word-wrap: normal;\n    }\n\n    /* User Item */\n    .ui.selection.dropdown .menu > .hidden.addition.item {\n        display: none;\n    }\n\n    /* Hover */\n    .ui.selection.dropdown:hover {\n        border-color: ",";\n        -webkit-box-shadow: none;\n        box-shadow: none;\n    }\n\n    /* Active */\n    .ui.selection.active.dropdown {\n        border-color: ",";\n        -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n        box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n    }\n    .ui.selection.active.dropdown .menu {\n        border-color: ",";\n        -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n        box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n    }\n\n    /* Focus */\n    .ui.selection.dropdown:focus {\n        border-color: ",";\n        -webkit-box-shadow: none;\n        box-shadow: none;\n    }\n    .ui.selection.dropdown:focus .menu {\n        border-color: ",";\n        -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n        box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n    }\n\n    /* Visible */\n    .ui.selection.visible.dropdown > .text:not(.default) {\n        font-weight: normal;\n        color: ",";\n    }\n\n    /* Visible Hover */\n    .ui.selection.active.dropdown:hover {\n        border-color: ",";\n        -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n        box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n    }\n    .ui.selection.active.dropdown:hover .menu {\n        border-color: ",';\n        -webkit-box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n        box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\n    }\n\n    /* Dropdown Icon */\n    .ui.active.selection.dropdown > .dropdown.icon,\n    .ui.visible.selection.dropdown > .dropdown.icon {\n        opacity: "";\n        z-index: 3;\n    }\n\n    /* Connecting Border */\n    .ui.active.selection.dropdown {\n        border-bottom-left-radius: 0em !important;\n        border-bottom-right-radius: 0em !important;\n    }\n\n    /* Empty Connecting Border */\n    .ui.active.empty.selection.dropdown {\n        border-radius: 0.28571429rem !important;\n        -webkit-box-shadow: none !important;\n        box-shadow: none !important;\n    }\n    .ui.active.empty.selection.dropdown .menu {\n        border: none !important;\n        -webkit-box-shadow: none !important;\n        box-shadow: none !important;\n    }\n\n    /*--------------\n   Searchable\n---------------*/\n\n    /* Search Selection */\n    .ui.search.dropdown {\n        min-width: "";\n    }\n\n    /* Search Dropdown */\n    .ui.search.dropdown > input.search {\n        background: none transparent !important;\n        border: none !important;\n        -webkit-box-shadow: none !important;\n        box-shadow: none !important;\n        cursor: text;\n        top: 0em;\n        left: 1px;\n        width: 100%;\n        outline: none;\n        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n        padding: inherit;\n        color: ',";\n        text-align: ",";\n    }\n\n    /* Text Layering */\n    .ui.search.dropdown > input.search {\n        position: absolute;\n        z-index: 2;\n    }\n    .ui.search.dropdown > .text {\n        cursor: text;\n        position: relative;\n        left: 1px;\n        z-index: 3;\n    }\n\n    /* Search Selection */\n    .ui.search.selection.dropdown > input.search {\n        line-height: 1.21428571em;\n        padding: 0.67857143em 2.1em 0.67857143em 1em;\n    }\n\n    /* Used to size multi select input to character width */\n    .ui.search.selection.dropdown > span.sizer {\n        line-height: 1.21428571em;\n        padding: 0.67857143em 2.1em 0.67857143em 1em;\n        display: none;\n        white-space: pre;\n    }\n\n    /* Active/Visible Search */\n    .ui.search.dropdown.active > input.search,\n    .ui.search.dropdown.visible > input.search {\n        cursor: auto;\n        color: ",";\n    }\n    .ui.search.dropdown.active > .text,\n    .ui.search.dropdown.visible > .text {\n        pointer-events: none;\n    }\n\n    /* Filtered Text */\n    .ui.active.search.dropdown input.search:focus + .text .icon,\n    .ui.active.search.dropdown input.search:focus + .text .flag {\n        opacity: 0.45;\n    }\n    .ui.active.search.dropdown input.search:focus + .text {\n        color: rgba(115, 115, 115, 0.87) !important;\n    }\n\n    .input.search::placeholder {\n        color: ",";\n    }\n    /* Search Menu */\n    .ui.search.dropdown .menu {\n        overflow-x: hidden;\n        overflow-y: auto;\n        -webkit-backface-visibility: hidden;\n        backface-visibility: hidden;\n        -webkit-overflow-scrolling: touch;\n    }\n    @media only screen and (max-width: 767px) {\n        .ui.search.dropdown .menu {\n            max-height: 8.01428571rem;\n        }\n    }\n    @media only screen and (min-width: 768px) {\n        .ui.search.dropdown .menu {\n            max-height: 10.68571429rem;\n        }\n    }\n    @media only screen and (min-width: 992px) {\n        .ui.search.dropdown .menu {\n            max-height: 16.02857143rem;\n        }\n    }\n    @media only screen and (min-width: 1920px) {\n        .ui.search.dropdown .menu {\n            max-height: 21.37142857rem;\n        }\n    }\n\n    /*--------------\n    Multiple\n---------------*/\n\n    /* Multiple Selection */\n    .ui.multiple.dropdown {\n        padding: 0.22619048em 2.1em 0.22619048em 0.35714286em;\n    }\n    .ui.multiple.dropdown .menu {\n        cursor: auto;\n    }\n\n    /* Multiple Search Selection */\n    .ui.multiple.search.dropdown,\n    .ui.multiple.search.dropdown > input.search {\n        cursor: text;\n    }\n\n    /* Selection Label */\n    .ui.multiple.dropdown > .label {\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: inline-block;\n        vertical-align: top;\n        white-space: normal;\n        font-size: 1em;\n        padding: 0.35714286em 0.78571429em;\n        margin: 0.14285714rem 0.28571429rem 0.14285714rem 0.5em;\n        -webkit-box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.15) inset;\n        box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.15) inset;\n        border-radius: 20px;\n        color: ",";\n        background-color: ",';\n    }\n\n    /* Dropdown Icon */\n    .ui.multiple.dropdown .dropdown.icon {\n        margin: "";\n        padding: "";\n    }\n\n    /* Text */\n    .ui.multiple.dropdown > .text {\n        position: static;\n        padding: 0;\n        max-width: 100%;\n        margin: 0.45238095em 0em 0.45238095em 0.64285714em;\n        line-height: 1.21428571em;\n    }\n    .ui.multiple.dropdown > .label ~ input.search {\n        margin-left: 0.14285714em !important;\n    }\n    .ui.multiple.dropdown > .label ~ .text {\n        display: none;\n    }\n\n    /*-----------------\n  Multiple Search\n-----------------*/\n\n    /* Prompt Text */\n    .ui.multiple.search.dropdown > .text {\n        display: inline-block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        padding: inherit;\n        margin: 0.45238095em 0em 0.45238095em 0.64285714em;\n        line-height: 1.21428571em;\n    }\n    .ui.multiple.search.dropdown > .label ~ .text {\n        display: none;\n    }\n\n    /* Search */\n    .ui.multiple.search.dropdown > input.search {\n        position: static;\n        padding: 0;\n        max-width: 100%;\n        margin: 0.45238095em 0em 0.45238095em 0.64285714em;\n        width: 2.2em;\n        line-height: 1.21428571em;\n    }\n\n    /*--------------\n     Inline\n---------------*/\n\n    .ui.inline.dropdown {\n        cursor: pointer;\n        display: inline-block;\n        color: inherit;\n    }\n    .ui.inline.dropdown .dropdown.icon {\n        margin: 0em 0.21428571em 0em 0.21428571em;\n        vertical-align: baseline;\n    }\n    .ui.inline.dropdown > .text {\n        font-weight: bold;\n    }\n    .ui.inline.dropdown .menu {\n        cursor: auto;\n        margin-top: 0.21428571em;\n        border-radius: 0.28571429rem;\n    }\n\n    /*******************************\n            States\n*******************************/\n\n    /*--------------------\n        Active\n----------------------*/\n\n    /* Menu Item Active */\n    .ui.dropdown .menu .active.item {\n        background: transparent;\n        font-weight: bold;\n        color: ',";\n        -webkit-box-shadow: none;\n        box-shadow: none;\n        z-index: 12;\n    }\n\n    /*--------------------\n        Hover\n----------------------*/\n\n    /* Menu Item Hover */\n    .ui.dropdown .menu > .item:hover {\n        background: rgba(0, 0, 0, 0.05);\n        color: ",';\n        z-index: 13;\n    }\n\n    /*--------------------\n       Loading\n---------------------*/\n\n    .ui.loading.dropdown > i.icon {\n        height: 1em !important;\n    }\n    .ui.loading.selection.dropdown > i.icon {\n        padding: 1.5em 1.28571429em !important;\n    }\n    .ui.loading.dropdown > i.icon:before {\n        position: absolute;\n        content: "";\n        top: 50%;\n        left: 50%;\n        margin: -0.64285714em 0em 0em -0.64285714em;\n        width: 1.28571429em;\n        height: 1.28571429em;\n        border-radius: 500rem;\n        border: 0.2em solid rgba(0, 0, 0, 0.1);\n    }\n    .ui.loading.dropdown > i.icon:after {\n        position: absolute;\n        content: "";\n        top: 50%;\n        left: 50%;\n        -webkit-box-shadow: 0px 0px 0px 1px transparent;\n        box-shadow: 0px 0px 0px 1px transparent;\n        margin: -0.64285714em 0em 0em -0.64285714em;\n        width: 1.28571429em;\n        height: 1.28571429em;\n        -webkit-animation: dropdown-spin 0.6s linear;\n        animation: dropdown-spin 0.6s linear;\n        -webkit-animation-iteration-count: infinite;\n        animation-iteration-count: infinite;\n        border-radius: 500rem;\n        border-color: '," transparent transparent;\n        border-style: solid;\n        border-width: 0.2em;\n    }\n\n    /* Coupling */\n    .ui.loading.dropdown.button > i.icon:before,\n    .ui.loading.dropdown.button > i.icon:after {\n        display: none;\n    }\n    @-webkit-keyframes dropdown-spin {\n        from {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        to {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n    @keyframes dropdown-spin {\n        from {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        to {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n\n    /*--------------------\n     Default Text\n----------------------*/\n\n    .ui.dropdown:not(.button) > .default.text,\n    .ui.default.dropdown:not(.button) > .text {\n        color: ",";\n    }\n    .ui.dropdown:not(.button) > input:focus ~ .default.text,\n    .ui.default.dropdown:not(.button) > input:focus ~ .text {\n        color: ",";\n    }\n\n    /*--------------------\n        Loading\n----------------------*/\n\n    .ui.loading.dropdown > .text {\n        -webkit-transition: none;\n        transition: none;\n    }\n\n    /* Used To Check Position */\n    .ui.dropdown .loading.menu {\n        display: block;\n        visibility: hidden;\n        z-index: -1;\n    }\n    .ui.dropdown > .loading.menu {\n        left: 0px !important;\n        right: auto !important;\n    }\n    .ui.dropdown > .menu .loading.menu {\n        left: 100% !important;\n        right: auto !important;\n    }\n\n    /*--------------------\n    Keyboard Select\n----------------------*/\n\n    /* Selected Item */\n    .ui.dropdown.selected,\n    .ui.dropdown .menu .selected.item {\n        background: rgba(0, 0, 0, 0.03);\n        color: ",";\n    }\n\n    /*--------------------\n    Search Filtered\n----------------------*/\n\n    /* Filtered Item */\n    .ui.dropdown > .filtered.text {\n        visibility: hidden;\n    }\n    .ui.dropdown .filtered.item {\n        display: none !important;\n    }\n\n    /*--------------------\n        Error\n----------------------*/\n\n    .ui.dropdown.error,\n    .ui.dropdown.error > .text,\n    .ui.dropdown.error > .default.text {\n        color: #9f3a38;\n    }\n    .ui.selection.dropdown.error {\n        background: ",";\n        border-color: ",";\n    }\n    .ui.selection.dropdown.error:hover {\n        border-color: ",";\n    }\n    .ui.dropdown.error > .menu,\n    .ui.dropdown.error > .menu .menu {\n        border-color: ",";\n    }\n    .ui.dropdown.error > .menu > .item {\n        color: ",";\n    }\n    .ui.multiple.selection.error.dropdown > .label {\n        border-color: ",";\n    }\n\n    /* Item Hover */\n    .ui.dropdown.error > .menu > .item:hover {\n        background-color: ",";\n    }\n\n    /* Item Active */\n    .ui.dropdown.error > .menu .active.item {\n        background-color: ",';\n    }\n\n    /*--------------------\n        Clear\n----------------------*/\n\n    .ui.dropdown > .clear.dropdown.icon {\n        opacity: 0.8;\n        -webkit-transition: opacity 0.1s ease;\n        transition: opacity 0.1s ease;\n    }\n    .ui.dropdown > .clear.dropdown.icon:hover {\n        opacity: 1;\n    }\n\n    /*--------------------\n        Disabled\n----------------------*/\n\n    /* Disabled */\n    .ui.disabled.dropdown,\n    .ui.dropdown .menu > .disabled.item {\n        cursor: default;\n        pointer-events: none;\n        opacity: 0.45;\n    }\n\n    /*******************************\n           Variations\n*******************************/\n\n    /*--------------\n    Direction\n---------------*/\n\n    /* Flyout Direction */\n    .ui.dropdown .menu {\n        left: 0px;\n    }\n\n    /* Default Side (Right) */\n    .ui.dropdown .right.menu > .menu,\n    .ui.dropdown .menu .right.menu {\n        left: 100% !important;\n        right: auto !important;\n        border-radius: 0.28571429rem !important;\n    }\n\n    /* Leftward Opening Menu */\n    .ui.dropdown > .left.menu {\n        left: auto !important;\n        right: 0px !important;\n    }\n    .ui.dropdown > .left.menu .menu,\n    .ui.dropdown .menu .left.menu {\n        left: auto;\n        right: 100%;\n        margin: 0em -0.5em 0em 0em !important;\n        border-radius: 0.28571429rem !important;\n    }\n    .ui.dropdown .item .left.dropdown.icon,\n    .ui.dropdown .left.menu .item .dropdown.icon {\n        width: auto;\n        float: left;\n        margin: 0em 0em 0em 0em;\n    }\n    .ui.dropdown .item .left.dropdown.icon,\n    .ui.dropdown .left.menu .item .dropdown.icon {\n        width: auto;\n        float: left;\n        margin: 0em 0em 0em 0em;\n    }\n    .ui.dropdown .item .left.dropdown.icon + .text,\n    .ui.dropdown .left.menu .item .dropdown.icon + .text {\n        margin-left: 1em;\n        margin-right: 0em;\n    }\n\n    /*--------------\n     Upward\n---------------*/\n\n    /* Upward Main Menu */\n    .ui.upward.dropdown > .menu {\n        top: auto;\n        bottom: 100%;\n        -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08);\n        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08);\n        border-radius: 0.28571429rem 0.28571429rem 0em 0em;\n    }\n\n    /* Upward Sub Menu */\n    .ui.dropdown .upward.menu {\n        top: auto !important;\n        bottom: 0 !important;\n    }\n\n    /* Active Upward */\n    .ui.simple.upward.active.dropdown,\n    .ui.simple.upward.dropdown:hover {\n        border-radius: 0.28571429rem 0.28571429rem 0em 0em !important;\n    }\n    .ui.upward.dropdown.button:not(.pointing):not(.floating).active {\n        border-radius: 0.28571429rem 0.28571429rem 0em 0em;\n    }\n\n    /* Selection */\n    .ui.upward.selection.dropdown .menu {\n        border-top-width: 1px !important;\n        border-bottom-width: 0px !important;\n        -webkit-box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.08);\n        box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.08);\n        border-top-left-radius: 20px;\n        border-top-right-radius: 20px;\n    }\n    .ui.upward.selection.dropdown:hover {\n        -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.05);\n        box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.05);\n    }\n\n    /* Active Upward */\n    .ui.active.upward.selection.dropdown {\n        border-radius: 0em 0em 20px 20px !important;\n    }\n\n    /* Visible Upward */\n    .ui.upward.selection.dropdown.visible {\n        -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08);\n        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08);\n        border-radius: 0em 0em 20px 20px !important;\n    }\n\n    /* Visible Hover Upward */\n    .ui.upward.active.selection.dropdown:hover {\n        -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);\n        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);\n    }\n    .ui.upward.active.selection.dropdown:hover .menu {\n        -webkit-box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.08);\n        box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.08);\n    }\n\n    /*--------------\n     Simple\n---------------*/\n\n    /*  Selection Menu */\n    .ui.scrolling.dropdown .menu,\n    .ui.dropdown .scrolling.menu {\n        overflow-x: hidden;\n        overflow-y: auto;\n    }\n    .ui.scrolling.dropdown .menu {\n        overflow-x: hidden;\n        overflow-y: auto;\n        -webkit-backface-visibility: hidden;\n        backface-visibility: hidden;\n        -webkit-overflow-scrolling: touch;\n        min-width: 100% !important;\n        width: auto !important;\n    }\n    .ui.dropdown .scrolling.menu {\n        position: static;\n        overflow-y: auto;\n        border: none;\n        -webkit-box-shadow: none !important;\n        box-shadow: none !important;\n        border-radius: 0 !important;\n        margin: 0 !important;\n        min-width: 100% !important;\n        width: auto !important;\n        border-top: 1px solid rgba(34, 36, 38, 0.15);\n    }\n    .ui.scrolling.dropdown .menu .item.item.item,\n    .ui.dropdown .scrolling.menu > .item.item.item {\n        border-top: none;\n    }\n    .ui.scrolling.dropdown .menu .item:first-child,\n    .ui.dropdown .scrolling.menu .item:first-child {\n        border-top: none;\n    }\n    .ui.dropdown > .animating.menu .scrolling.menu,\n    .ui.dropdown > .visible.menu .scrolling.menu {\n        display: block;\n    }\n\n    /* Scrollbar in IE */\n    @media all and (-ms-high-contrast: none) {\n        .ui.scrolling.dropdown .menu,\n        .ui.dropdown .scrolling.menu {\n            min-width: calc(100% - 17px);\n        }\n    }\n    @media only screen and (max-width: 767px) {\n        .ui.scrolling.dropdown .menu,\n        .ui.dropdown .scrolling.menu {\n            max-height: 10.28571429rem;\n        }\n    }\n    @media only screen and (min-width: 768px) {\n        .ui.scrolling.dropdown .menu,\n        .ui.dropdown .scrolling.menu {\n            max-height: 15.42857143rem;\n        }\n    }\n    @media only screen and (min-width: 992px) {\n        .ui.scrolling.dropdown .menu,\n        .ui.dropdown .scrolling.menu {\n            max-height: 20.57142857rem;\n        }\n    }\n    @media only screen and (min-width: 1920px) {\n        .ui.scrolling.dropdown .menu,\n        .ui.dropdown .scrolling.menu {\n            max-height: 20.57142857rem;\n        }\n    }\n\n    /*--------------\n     Simple\n---------------*/\n\n    /* Displays without javascript */\n    .ui.simple.dropdown .menu:before,\n    .ui.simple.dropdown .menu:after {\n        display: none;\n    }\n    .ui.simple.dropdown .menu {\n        position: absolute;\n        display: block;\n        overflow: hidden;\n        top: -9999px !important;\n        opacity: 0;\n        width: 0;\n        height: 0;\n        -webkit-transition: opacity 0.1s ease;\n        transition: opacity 0.1s ease;\n    }\n    .ui.simple.active.dropdown,\n    .ui.simple.dropdown:hover {\n        border-bottom-left-radius: 0em !important;\n        border-bottom-right-radius: 0em !important;\n    }\n    .ui.simple.active.dropdown > .menu,\n    .ui.simple.dropdown:hover > .menu {\n        overflow: visible;\n        width: auto;\n        height: auto;\n        top: 100% !important;\n        opacity: 1;\n    }\n    .ui.simple.dropdown > .menu > .item:active > .menu,\n    .ui.simple.dropdown:hover > .menu > .item:hover > .menu {\n        overflow: visible;\n        width: auto;\n        height: auto;\n        top: 0% !important;\n        left: 100% !important;\n        opacity: 1;\n    }\n    .ui.simple.disabled.dropdown:hover .menu {\n        display: none;\n        height: 0px;\n        width: 0px;\n        overflow: hidden;\n    }\n\n    /* Visible */\n    .ui.simple.visible.dropdown > .menu {\n        display: block;\n    }\n\n    /*--------------\n      Fluid\n---------------*/\n\n    .ui.fluid.dropdown {\n        display: block;\n        width: 100%;\n        min-width: 0em;\n    }\n    .ui.fluid.dropdown > .dropdown.icon {\n        float: right;\n    }\n\n    /*--------------\n    Floating\n---------------*/\n\n    .ui.floating.dropdown .menu {\n        left: 0;\n        right: auto;\n        -webkit-box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12),\n            0px 2px 10px 0px rgba(34, 36, 38, 0.15) !important;\n        box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12),\n            0px 2px 10px 0px rgba(34, 36, 38, 0.15) !important;\n        border-radius: 0.28571429rem !important;\n    }\n    .ui.floating.dropdown > .menu {\n        margin-top: 0.5em !important;\n        border-radius: 0.28571429rem !important;\n    }\n\n    /*--------------\n     Pointing\n---------------*/\n\n    .ui.pointing.dropdown > .menu {\n        top: 100%;\n        margin-top: 0.78571429rem;\n        border-radius: 0.28571429rem;\n    }\n    .ui.pointing.dropdown > .menu:after {\n        display: block;\n        position: absolute;\n        pointer-events: none;\n        content: "";\n        visibility: visible;\n        -webkit-transform: rotate(45deg);\n        transform: rotate(45deg);\n        width: 0.5em;\n        height: 0.5em;\n        -webkit-box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);\n        box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);\n        background: #ffffff;\n        z-index: 2;\n    }\n    .ui.pointing.dropdown > .menu:after {\n        top: -0.25em;\n        left: 50%;\n        margin: 0em 0em 0em -0.25em;\n    }\n\n    /* Top Left Pointing */\n    .ui.top.left.pointing.dropdown > .menu {\n        top: 100%;\n        bottom: auto;\n        left: 0%;\n        right: auto;\n        margin: 1em 0em 0em;\n    }\n    .ui.top.left.pointing.dropdown > .menu {\n        top: 100%;\n        bottom: auto;\n        left: 0%;\n        right: auto;\n        margin: 1em 0em 0em;\n    }\n    .ui.top.left.pointing.dropdown > .menu:after {\n        top: -0.25em;\n        left: 1em;\n        right: auto;\n        margin: 0em;\n        -webkit-transform: rotate(45deg);\n        transform: rotate(45deg);\n    }\n\n    /* Top Right Pointing */\n    .ui.top.right.pointing.dropdown > .menu {\n        top: 100%;\n        bottom: auto;\n        right: 0%;\n        left: auto;\n        margin: 1em 0em 0em;\n    }\n    .ui.top.pointing.dropdown > .left.menu:after,\n    .ui.top.right.pointing.dropdown > .menu:after {\n        top: -0.25em;\n        left: auto !important;\n        right: 1em !important;\n        margin: 0em;\n        -webkit-transform: rotate(45deg);\n        transform: rotate(45deg);\n    }\n\n    /* Left Pointing */\n    .ui.left.pointing.dropdown > .menu {\n        top: 0%;\n        left: 100%;\n        right: auto;\n        margin: 0em 0em 0em 1em;\n    }\n    .ui.left.pointing.dropdown > .menu:after {\n        top: 1em;\n        left: -0.25em;\n        margin: 0em 0em 0em 0em;\n        -webkit-transform: rotate(-45deg);\n        transform: rotate(-45deg);\n    }\n    .ui.left:not(.top):not(.bottom).pointing.dropdown > .left.menu {\n        left: auto !important;\n        right: 100% !important;\n        margin: 0em 1em 0em 0em;\n    }\n    .ui.left:not(.top):not(.bottom).pointing.dropdown > .left.menu:after {\n        top: 1em;\n        left: auto;\n        right: -0.25em;\n        margin: 0em 0em 0em 0em;\n        -webkit-transform: rotate(135deg);\n        transform: rotate(135deg);\n    }\n\n    /* Right Pointing */\n    .ui.right.pointing.dropdown > .menu {\n        top: 0%;\n        left: auto;\n        right: 100%;\n        margin: 0em 1em 0em 0em;\n    }\n    .ui.right.pointing.dropdown > .menu:after {\n        top: 1em;\n        left: auto;\n        right: -0.25em;\n        margin: 0em 0em 0em 0em;\n        -webkit-transform: rotate(135deg);\n        transform: rotate(135deg);\n    }\n\n    /* Bottom Pointing */\n    .ui.bottom.pointing.dropdown > .menu {\n        top: auto;\n        bottom: 100%;\n        left: 0%;\n        right: auto;\n        margin: 0em 0em 1em;\n    }\n    .ui.bottom.pointing.dropdown > .menu:after {\n        top: auto;\n        bottom: -0.25em;\n        right: auto;\n        margin: 0em;\n        -webkit-transform: rotate(-135deg);\n        transform: rotate(-135deg);\n    }\n\n    /* Reverse Sub-Menu Direction */\n    .ui.bottom.pointing.dropdown > .menu .menu {\n        top: auto !important;\n        bottom: 0px !important;\n    }\n\n    /* Bottom Left */\n    .ui.bottom.left.pointing.dropdown > .menu {\n        left: 0%;\n        right: auto;\n    }\n    .ui.bottom.left.pointing.dropdown > .menu:after {\n        left: 1em;\n        right: auto;\n    }\n\n    /* Bottom Right */\n    .ui.bottom.right.pointing.dropdown > .menu {\n        right: 0%;\n        left: auto;\n    }\n    .ui.bottom.right.pointing.dropdown > .menu:after {\n        left: auto;\n        right: 1em;\n    }\n\n    /* Upward pointing */\n    .ui.pointing.upward.dropdown .menu,\n    .ui.top.pointing.upward.dropdown .menu {\n        top: auto !important;\n        bottom: 100% !important;\n        margin: 0em 0em 0.78571429rem;\n        border-radius: 0.28571429rem;\n    }\n    .ui.pointing.upward.dropdown .menu:after,\n    .ui.top.pointing.upward.dropdown .menu:after {\n        top: 100% !important;\n        bottom: auto !important;\n        -webkit-box-shadow: 1px 1px 0px 0px rgba(34, 36, 38, 0.15);\n        box-shadow: 1px 1px 0px 0px rgba(34, 36, 38, 0.15);\n        margin: -0.25em 0em 0em;\n    }\n\n    /* Right Pointing Upward */\n    .ui.right.pointing.upward.dropdown:not(.top):not(.bottom) .menu {\n        top: auto !important;\n        bottom: 0 !important;\n        margin: 0em 1em 0em 0em;\n    }\n    .ui.right.pointing.upward.dropdown:not(.top):not(.bottom) .menu:after {\n        top: auto !important;\n        bottom: 0 !important;\n        margin: 0em 0em 1em 0em;\n        -webkit-box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);\n        box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);\n    }\n\n    /* Left Pointing Upward */\n    .ui.left.pointing.upward.dropdown:not(.top):not(.bottom) .menu {\n        top: auto !important;\n        bottom: 0 !important;\n        margin: 0em 0em 0em 1em;\n    }\n    .ui.left.pointing.upward.dropdown:not(.top):not(.bottom) .menu:after {\n        top: auto !important;\n        bottom: 0 !important;\n        margin: 0em 0em 1em 0em;\n        -webkit-box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);\n        box-shadow: -1px -1px 0px 0px rgba(34, 36, 38, 0.15);\n    }\n\n    /*******************************\n         Theme Overrides\n*******************************/\n\n    /* Dropdown Carets */\n    .ui.dropdown > .dropdown.icon {\n        font-family: "Dropdown";\n        line-height: 1;\n        height: 1em;\n        width: 1.23em;\n        -webkit-backface-visibility: hidden;\n        backface-visibility: hidden;\n        font-weight: normal;\n        font-style: normal;\n        text-align: center;\n    }\n    .ui.dropdown > .dropdown.icon {\n        width: auto;\n    }\n    .ui.dropdown > .dropdown.icon:before {\n        content: "\\f0d7";\n    }\n\n    /* Sub Menu */\n    .ui.dropdown .menu .item .dropdown.icon:before {\n        content: "\\f0da" /*rtl:\'\\f0d9\'*/;\n    }\n    .ui.dropdown .item .left.dropdown.icon:before,\n    .ui.dropdown .left.menu .item .dropdown.icon:before {\n        content: "\\f0d9" /*rtl:"\\f0da"*/;\n    }\n\n    /* Vertical Menu Dropdown */\n    .ui.vertical.menu .dropdown.item > .dropdown.icon:before {\n        content: "\\f0da" /*rtl:"\\f0d9"*/;\n    }\n    .ui.dropdown > .clear.icon:before {\n        content: "\\f00d";\n    }\n\n    .ui.selection.active.dropdown .menu::-webkit-scrollbar {\n        width: 7px;\n        border-radius: 50px;\n        z-index: -1px;\n    }\n\n    .ui.selection.active.dropdown .menu::-webkit-scrollbar-thumb {\n        background-color: ',";\n        border-radius: 50px;\n    }\n\n    .ui.selection.active.dropdown .menu::-webkit-scrollbar-thumb:hover {\n        background-color: ",';\n    }\n    /* Icons for Reference (Subsetted in 2.4.0)\n  .dropdown.down:before { content: "\\f0d7"; }\n  .dropdown.up:before { content: "\\f0d8"; }\n  .dropdown.left:before { content: "\\f0d9"; }\n  .dropdown.right:before { content: "\\f0da"; }\n  .dropdown.close:before { content: "\\f00d"; }\n*/\n\n    /*******************************\n        User Overrides\n*******************************/\n\n    small {\n        margin-left: 15px;\n        font-size: 10px;\n        color: ',";\n    }\n"])),function(n){return n.error?"":"20px"},function(n){return n.error?"#E0457B":n.colorLabel?n.colorLabel:"#9B4DEE"},function(n){return n.textAlign&&"center"===n.textAlign?"center":"left"},"#707070",function(n){return n.line?"0":"0.28571429rem"},function(n){return n.line?"none":""},function(n){return n.line?"none":""},function(n){return n.line?"none":""},function(n){return n.brand?"#9B4DEE":"#707070"},function(n){return n.brand?"#D8B8F9":"#FFFFFF"},function(n){return n.brand?"#9B4DEE":"#707070"},function(n){return n.brand?"#D8B8F9":n.line?"#ACACAC":"rgba(34, 36, 38, 0.15)"},function(n){return n.line?0:"0.28571429rem"},function(n){return n.line?"none":"20px"},function(n){return n.line?"none":""},function(n){return n.line?"none":""},function(n){return n.line?"none":""},function(n){return n.brand?"#D8B8F9":"#ACACAC"},function(n){return n.brand?"rgba(155, 77, 238, 0.2)":"#ACACAC"},function(n){return n.error?"#E0457B":n.brand?"#D8B8F9":"#ACACAC"},function(n){return n.error?"#E0457B":n.brand?"#D8B8F9":"#ACACAC"},function(n){return n.error?"#E0457B":n.brand?"#D8B8F9":"#ACACAC"},function(n){return n.brand?"#68349F":"#000000"},function(n){return n.error?"#E0457B":n.brand?"#D8B8F9":"#ACACAC"},function(n){return n.error?"#E0457B":n.brand?"#D8B8F9":"#ACACAC"},function(n){return n.brand?"#9B4DEE":"#707070"},function(n){return n.textAlign&&"center"===n.textAlign?"center":"left"},function(n){return n.brand?"#68349F":"#000000"},function(n){return n.brand?"rgba(155, 77, 238, 0.2)":"#ACACAC"},function(n){return n.brand?"#D8B8F9":"#707070"},function(n){return n.brand?"#9B4DEE":"#eeeeee"},function(n){return n.brand?"#68349F":"#000000"},function(n){return n.brand?"#68349F":"#000000"},"#9B4DEE",function(n){return n.brand?"#9B4DEE":"#E1E6EB"},function(n){return n.brand?"#9B4DEE":"#E1E6EB"},function(n){return n.brand?"#68349F":"#000000"},function(n){return n.line?"#FFFFFF":"#e0457b25"},"#E0457B","#E0457B","#E0457B","#E0457B","#E0457B","#e0457b25","#e0457b25","#9B4DEE","rgba(155, 77, 238, 0.9)","#E0457B"),xr=["options","brand","textAlign","errorMessage","label","colorLabel","line"],vr=function(e){var t=e.options,r=e.brand,o=e.textAlign,a=e.errorMessage,l=e.label,d=e.colorLabel,c=e.line,p=v(e,xr);return n.createElement(wr,{brand:r,textAlign:o,error:a,colorLabel:d,line:c},l&&n.createElement("label",null,l),n.createElement(i,Object.assign({},p,{selection:!0,noResultsMessage:"Nenhum resultado encontrado",error:!!a,options:t})),a&&n.createElement("small",null,a))},kr=["value","clearError","errors","name","register","required","setValue","validate"],yr=function(r){var o=r.value,i=r.clearError,a=r.errors,l=r.name,d=r.register,c=r.required,p=r.setValue,s=r.validate,u=v(r,kr),m=e(),b=m[0],f=m[1],h=e(""),g=h[0],w=h[1];return t(function(){p(l,b||o)},[b]),t(function(){f(o)},[o]),t(function(){d&&d({name:l},{required:c,validate:s&&c?function(n){return s(n)?(w(s(n)),!1):(w(""),!0)}:null})},[d]),n.createElement(vr,Object.assign({},u,{value:b,onChange:function(n,e){f(e.value),p(l,o),a&&i&&i(l)},line:u.line,errorMessage:a?"required"===a.type?"Obrigatório":""+g:""}))},_r=r.div(rt||(rt=k(["\n    font-family: MontSerrat !important;\n    display: flex;\n    width: ",";\n    justify-content: space-between;\n    background-color: ",";\n    border: 1px solid ",";\n    padding: 15px 20px;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.16);\n\n    .icon-title {\n        display: flex;\n        align-items: center;\n    }\n\n    .title-subtitle {\n        display: flex;\n        flex-direction: column;\n        flex: 1;\n        margin-left: ",";\n\n        .title {\n          font-size: ",";\n\n          color: ",";\n        }\n\n        .subtitle {\n            color: ",";\n            font-size: 12px;\n        }\n    }\n\n    .value-icon {\n        display: flex;\n        align-items: center;\n        flex: 1;\n        justify-content: flex-end;\n\n        .value {\n            margin-right: 20px;\n            color: ",";\n        }\n    }\n\n    ","\n"])),function(n){return n.width?"string"==typeof n.width?n.width:n.width+"px":"100%"},function(n){return n.secondary?"#eeeeee":"#FFFFFF"},"#eeeeee",function(n){return n.icon?"15px":"0"},function(n){return n.fontSizeTitle?"string"==typeof n.fontSizeTitle?n.fontSizeTitle:n.fontSizeTitle+"px":n.subtitle?"14px":"16px"},function(n){return n.colorTitle?n.colorTitle:"#707070"},function(n){return n.colorSubtitle?n.colorSubtitle:"#ACACAC"},function(n){return n.colorValue?n.colorValue:"#707070"},function(n){return o(n.open?ot||(ot=k(["\n                  border-top-left-radius: 20px;\n                  border-top-right-radius: 20px;\n              "])):it||(it=k(["\n                  border-radius: 30px;\n              "])))}),Er=r.div(at||(at=k(["\n    font-family: MontSerrat !important;\n    width: ",";\n    padding: 20px;\n    border: 1px solid ",";\n    border-top: 0;\n    border-bottom-left-radius: 20px;\n    border-bottom-right-radius: 20px;\n    display: ",";\n    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.16);\n"])),function(n){return n.width?n.width+"%":"100%"},"#eeeeee",function(n){return n.open?"block":"none"}),Sr=function(e){var t=e.title,r=e.subtitle,o=e.value,i=e.children,a=e.secondary,l=e.open,d=e.onChange,c=e.width,p=e.icon,s=e.customIcon;return n.createElement(n.Fragment,null,n.createElement(_r,{colorTitle:e.colorTitle,colorSubtitle:e.colorSubtitle,colorValue:e.colorValue,secondary:a,subtitle:r,open:l,onClick:function(){return d()},width:c,icon:!(!p&&!s),fontSizeTitle:e.fontSizeTitle},n.createElement("div",{className:"icon-title"},s||(p?n.createElement(fe,{icon:p,size:"lg",color:e.colorIcon||"#9B4DEE"}):null),n.createElement("div",{className:"title-subtitle"},n.createElement("span",{className:"title"},t),r&&n.createElement("span",{className:"subtitle"},r))),n.createElement("div",{className:"value-icon"},n.createElement("span",{className:"value"},o),n.createElement(fe,a?{icon:l?gt:ft,style:{fontSize:20}}:{icon:l?gt:ft,style:{fontSize:20},color:"#9B4DEE"}))),n.createElement(Er,{open:l,width:c},i))},Cr=function(n){switch(n){case"mini":return 30;case"tiny":return 35;case"small":return 40;case"medium":return 50;case"large":return 60;case"big":return 70;case"huge":return 80;case"massive":return 90;default:return 50}},zr=function(n){switch(n){case"mini":return 20;case"tiny":return 22.5;case"small":return 25;case"medium":return 30;case"large":return 35;case"big":return 40;case"huge":return 45;case"massive":return 50;default:return 30}},Or=function(n){switch(n){case"mini":case"tiny":case"small":case"medium":case"large":case"big":case"huge":case"massive":default:return 5}},Mr=function(n){switch(n){case"mini":return"40px !important";case"tiny":return"50px !important";case"small":return"60px !important";case"medium":return"65px !important";case"large":return"70px !important";case"big":return"80px !important";case"huge":return"90px !important";case"massive":return"100px !important";default:return"65px !important"}},Fr=r.label(lt||(lt=k(["\n    font-family: MontSerrat !important;\n    display: flex !important;\n    flex-direction: row !important;\n    position: relative !important;\n    /* padding-left: ","; */\n    /* margin-bottom: 12px; */\n    cursor: ",";\n    font-size: 22px !important;\n    user-select: none !important;\n\n    input {\n        position: absolute !important;\n        opacity: 0 !important;\n        cursor: pointer !important;\n        height: 0 !important;\n        width: 0 !important;\n        display: none !important;\n    }\n\n    input:checked ~ .control {\n        background-color: ",";\n\n        &:after {\n            left: ",";\n        }\n    }\n\n    .control {\n        height: ",";\n        width: ",";\n        border-radius: ",";\n        background-color: "," !important;\n        transition: background-color 0.15s ease-in !important;\n\n        &:after {\n            content: '' !important;\n            position: absolute !important;\n            left: 5px !important;\n            top: 5px !important;\n            height: ",";\n            width: ",";\n            border-radius: 50px !important;\n            background-color: white !important;\n            transition: left 0.15s ease-in !important;\n            border: 1px solid "," !important;\n        }\n    }\n"])),function(n){return n.size?Cr(n.size)+"px":"50px"},function(n){return n.disabled?"normal !important":"pointer !important"},function(n){return n.disabled?"rgba(155, 77, 238, 0.2) !important":"#68349F !important"},function(n){return n.size?Cr(n.size)-(zr(n.size)-2*Or(n.size))-Or(n.size)+"px !important":"25px !important"},function(n){return n.size?zr(n.size)+"px !important":"30px !important"},function(n){return n.size?Cr(n.size)+"px !important":"50px !important"},function(n){return n.size?zr(n.size)/2+"px !important":"15px !important"},"#eeeeee",function(n){return n.size?zr(n.size)-2*Or(n.size)+"px !important":"20px !important"},function(n){return n.size?zr(n.size)-2*Or(n.size)+"px !important":"20px !important"},"#F1F1F1"),Ir=r.div(dt||(dt=k(["\n    font-family: MontSerrat !important;\n    display: flex !important;\n    flex-direction: row !important;\n\n    .btn {\n        display: flex !important;\n        align-items: center !important;\n        justify-content: center !important;\n        opacity: ",";\n        width: ",";\n        border: 1px solid "," !important;\n        padding: 4px 0 !important;\n\n        span {\n            font-size: ",";\n        }\n    }\n\n    .left {\n        cursor: ",";\n        background-color: ",";\n        border-top-left-radius: 20px !important;\n        border-bottom-left-radius: 20px !important;\n        border-right: 0 !important;\n        transition: 400ms !important;\n\n        span {\n            color: ",";\n        }\n    }\n\n    .right {\n        cursor: ",";\n        background-color: ",";\n        border-top-right-radius: 20px !important;\n        border-bottom-right-radius: 20px !important;\n        border-left: 0 !important;\n        transition: 400ms !important;\n\n        span {\n            color: ",";\n        }\n    }\n"])),function(n){return n.disabled?"0.5 !important":"1 !important"},function(n){return n.size?Mr(n.size):"65px !important"},"#eeeeee",function(n){return n.size?function(n){switch(n){case"mini":return"8px !important";case"tiny":return"9px !important";case"small":return"10px !important";case"medium":return"11px !important";case"large":return"12px !important";case"big":return"13px !important";case"huge":return"14px !important";case"massive":return"15px !important";default:return"11px !important"}}(n.size):"11px !important"},function(n){return n.disabled?"default !important":n.checked?"pointer !important":"default !important"},function(n){return n.checked?"#FFFFFF !important":"#9B4DEE !important"},function(n){return n.checked?"#707070 !important":"#FFFFFF !important"},function(n){return n.disabled||n.checked?"default !important":"pointer !important"},function(n){return n.checked?"#9B4DEE !important":"#FFFFFF !important"},function(n){return n.checked?"#FFFFFF !important":"#707070 !important"}),Dr=r.div(ct||(ct=k(["\n    font-family: MontSerrat !important;\n    display: flex !important;\n    flex-direction: row !important;\n\n    .btn {\n        display: flex !important;\n        align-items: center !important;\n        justify-content: center !important;\n        opacity: ",";\n        width: ",";\n        border: 1px solid "," !important;\n        padding: 4px 0 !important;\n\n        span {\n            font-size: ",";\n        }\n    }\n\n    .left {\n        cursor: ",";\n        background-color: ",";\n        border-top-left-radius: 20px !important;\n        border-bottom-left-radius: 20px !important;\n        border-right: 0 !important;\n        transition: 400ms !important;\n\n        span {\n            color: ",";\n        }\n    }\n\n    .right {\n        cursor: ",";\n        background-color: ",";\n        border-top-right-radius: 20px !important;\n        border-bottom-right-radius: 20px !important;\n        border-left: 0 !important;\n        transition: 400ms !important;\n\n        span {\n            color: ",";\n        }\n    }\n"])),function(n){return n.disabled?"0.5 !important":"1 !important"},function(n){return n.size?Mr(n.size):"70px !important"},"#eeeeee",function(n){return n.size?function(n){switch(n){case"mini":return"7px !important";case"tiny":return"8px !important";case"small":return"9px !important";case"medium":return"10px !important";case"large":return"11px !important";case"big":return"12px !important";case"huge":return"13px !important";case"massive":return"14px !important";default:return"10px !important"}}(n.size):"10px !important"},function(n){return n.disabled?"default !important":n.checked?"pointer !important":"default !important"},function(n){return n.checked?"#FFFFFF !important":"#E0457B !important"},function(n){return n.checked?"#707070 !important":"#FFFFFF !important"},function(n){return n.disabled||n.checked?"default !important":"pointer !important"},function(n){return n.checked?"#4BA047 !important":"#FFFFFF !important"},function(n){return n.checked?"#FFFFFF !important":"#707070 !important"}),Br=function(e){var t=e.checked,r=e.onChange,o=e.size,i=e.disabled,a=e.selectionRef;switch(e.type){case"switch":return n.createElement(Fr,{size:o,ref:a,disabled:i},n.createElement("input",{type:"checkbox",checked:t}),n.createElement("span",{className:"control",onClick:function(){return i?null:r?r():null}}));case"toggle":return n.createElement(Ir,{checked:t,ref:a,size:o,disabled:i},n.createElement("div",{className:"btn left",onClick:function(){return i?null:t&&r?r():null}},n.createElement("span",null,"não")),n.createElement("div",{className:"btn right",onClick:function(){return i||t?null:r?r():null}},n.createElement("span",null,"sim")));case"activeInactive":return n.createElement(Dr,{checked:t,ref:a,size:o,disabled:i},n.createElement("div",{className:"btn left",onClick:function(){return i?null:t&&r?r():null}},n.createElement("span",null,t?"desativar":"inativo")),n.createElement("div",{className:"btn right",onClick:function(){return i||t?null:r?r():null}},n.createElement("span",null,t?"ativo":"ativar")))}return n.createElement("div",null)},Pr=function(n){switch(n){case"small":return"10px";case"medium":return"15px";case"big":return"22px";default:return"15px"}},Ar=r.div(pt||(pt=k(["\n    font-family: MontSerrat !important;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    opacity: ",";\n\n    .btn {\n        width: ",";\n        font-size: ",";\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: ",";\n        color: ",";\n    }\n\n    .left {\n        opacity: ",";\n\n        cursor: ",";\n    }\n\n    .right {\n        opacity: ",";\n\n        cursor: ",";\n    }\n\n    input {\n        text-align: center;\n        width: ",";\n        font-size: ",";\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: ",";\n        border: none;\n        outline: none;\n    }\n\n    input[type='number']::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n    }\n    input[type='number'] {\n        -moz-appearance: textfield;\n        appearance: textfield;\n    }\n\n    input:disabled {\n        background-color: transparent;\n    }\n"])),function(n){return n.disabled?"0.5":"1"},function(n){return n.size?function(n){switch(n){case"small":return"20px";case"medium":return"30px";case"big":return"40px";default:return"30px"}}(n.size):"30px"},function(n){return n.size?Pr(n.size):"15px"},function(n){return n.size?function(n){switch(n){case"small":return"20px";case"medium":return"30px";case"big":return"40px";default:return"30px"}}(n.size):"30px"},"#707070",function(n){return n.noLess?"0.2":"1"},function(n){return n.disabled||n.noLess?"default":"pointer"},function(n){return n.noMore?"0.2":"1"},function(n){return n.disabled||n.noMore?"default":"pointer"},function(n){return n.size?(t=n.value,"small"===(e=n.size)?t<100?"15px":t<1e3?"20px":t<1e4?"25px":"30px":"medium"===e?t<100?"20px":t<1e3?"30px":t<1e4?"40px":"50px":"big"===e?t<100?"30px":t<1e3?"40px":t<1e4?"55px":"70px":"50px"):"15px";var e,t},function(n){return n.size?Pr(n.size):"15px"},"#707070"),Tr=function(r){var o=r.size,i=r.disabled,a=r.value,l=r.limit,d=r.minimum,c=r.more,p=r.less,s=r.onChange,u=e(!1),m=u[0],b=u[1],f=e(!1),h=f[0],g=f[1],w=e("medium"),x=w[0],v=w[1];return t(function(){o&&v(o)},[o]),t(function(){b(!!(d&&a<=d||a<=0))},[d,a]),t(function(){g(!!(l&&a>=l))},[l,a]),n.createElement(Ar,{limit:l,minimum:d,value:a,size:x,disabled:i,noLess:m,noMore:h},n.createElement("div",{className:"btn left",onClick:function(){return i?null:p?m?null:p():null}},n.createElement(fe,{icon:vt})),n.createElement("input",{value:a||0===a?a.toString():"",type:"number",onChange:function(n){return s?s(Number(n.target.value)):null},disabled:i||!s}),n.createElement("div",{className:"btn right",onClick:function(){return i||h?null:c?c():null}},n.createElement(fe,{icon:kt})))},jr=r.div(st||(st=k(["\n    font-family: MontSerrat !important;\n    padding: 20px;\n    box-shadow: ",";\n    background-color: ",";\n    border-radius: 30px;\n    position: relative;\n\n    width: ",";\n\n    .loading-card {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background-color: rgba(255, 255, 255, 0.8);\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        border-radius: 30px;\n        z-index: 2;\n        position: absolute;\n    }\n"])),function(n){return"min-shadow"==n.type?"0px 2px 4px #00000029":"0 20px 50px 0 rgba(0, 0, 0, 0.16)"},"#FFFFFF",function(n){return n.width?"string"==typeof n.width?n.width:n.width+"px":"100%"}),Nr=r.a(ut||(ut=k(["\n    font-family: MontSerrat !important;\n    background-color: ",";\n    padding: 12px 25px;\n    border-radius: 30px;\n    border: 1px solid ",";\n    width: ",";\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n\n    :hover {\n        background-color: ",";\n    }\n\n    span {\n        margin-left: 15px;\n        font-size: 15px;\n        color: ",";\n    }\n"])),"#eeeeee","#D1D8DC",function(n){return n.width?"string"==typeof n.width?n.width:n.width+"px":"100%"},"#F1F1F1",function(n){return n.colorText?n.colorText:"#68349F"}),Lr=["children","width","type","style","icon","sizeIcon","colorIcon","text","colorText","onClick","loading","className"],Vr=function(e){var t=e.children,r=e.width,o=e.type,i=e.style,a=e.icon,l=e.sizeIcon,d=e.colorIcon,c=e.text,p=e.colorText,s=e.onClick,u=e.loading,m=e.className,b=v(e,Lr);function f(e){return n.createElement(jr,{className:m,width:r,style:i,type:e},u&&n.createElement("div",{className:"loading-card"},n.createElement(At,null)),t)}switch(o){case"shadow":return f("shadow");case"button":return n.createElement(Nr,{style:i,colorText:p,onClick:s,href:b.href,width:r,className:m},a&&n.createElement(n.Fragment,null,n.createElement(fe,{icon:a,color:d||"#68349F",size:l||"lg"})),n.createElement("span",null,c));case"min-shadow":return f("min-shadow");default:return n.createElement("div",null)}},Rr=r.div(mt||(mt=k(["\n    font-family: MontSerrat !important;\n    display: flex;\n    flex-direction: column;\n\n    input {\n        outline: none;\n        padding: 7px 15px;\n        border-radius: 20px;\n        border: 1px solid\n            ",";\n        color: ",";\n        cursor: pointer;\n\n        background-color: ",";\n\n        font-weight: bold;\n\n        &::placeholder {\n            color: ",";\n        }\n    }\n\n    span {\n        font-size: 14px;\n        color: ",';\n        margin-left: 15px;\n        margin-bottom: 3px;\n    }\n\n    .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle,\n    .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle,\n    .react-datepicker__year-read-view--down-arrow,\n    .react-datepicker__month-read-view--down-arrow,\n    .react-datepicker__month-year-read-view--down-arrow {\n        margin-left: -8px !important;\n        position: absolute !important;\n    }\n    .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle,\n    .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle,\n    .react-datepicker__year-read-view--down-arrow,\n    .react-datepicker__month-read-view--down-arrow,\n    .react-datepicker__month-year-read-view--down-arrow,\n    .react-datepicker-popper[data-placement^="bottom"]\n    .react-datepicker__triangle::before,\n    .react-datepicker-popper[data-placement^="top"]\n    .react-datepicker__triangle::before,\n    .react-datepicker__year-read-view--down-arrow::before,\n    .react-datepicker__month-read-view--down-arrow::before,\n    .react-datepicker__month-year-read-view--down-arrow::before {\n        box-sizing: content-box !important;\n        position: absolute !important;\n        border: 8px solid transparent !important;\n        height: 0 !important;\n        width: 1px !important;\n    }\n\n    .react-datepicker-popper[data-placement^="bottom"]\n    .react-datepicker__triangle::before,\n    .react-datepicker-popper[data-placement^="top"]\n    .react-datepicker__triangle::before,\n    .react-datepicker__year-read-view--down-arrow::before,\n    .react-datepicker__month-read-view--down-arrow::before,\n    .react-datepicker__month-year-read-view--down-arrow::before {\n        content: "" !important;\n        z-index: -1 !important;\n        border-width: 8px !important;\n        left: -8px !important;\n        border-bottom-color: #291f1f !important;\n    }\n\n    .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle {\n        top: 0 !important;\n        margin-top: -8px !important;\n    }\n\n    .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle,\n    .react-datepicker-popper[data-placement^="bottom"]\n    .react-datepicker__triangle::before {\n        border-top: none !important;\n        border-bottom-color: #ffffff !important;\n    }\n\n    .react-datepicker-popper[data-placement^="bottom"]\n    .react-datepicker__triangle::before {\n        top: -1px !important;\n        border-bottom-color: #aeaeae !important;\n    }\n\n    .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle,\n    .react-datepicker__year-read-view--down-arrow,\n    .react-datepicker__month-read-view--down-arrow,\n    .react-datepicker__month-year-read-view--down-arrow {\n        bottom: 0 !important;\n        margin-bottom: -8px !important;\n    }\n\n    .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle,\n    .react-datepicker__year-read-view--down-arrow,\n    .react-datepicker__month-read-view--down-arrow,\n    .react-datepicker__month-year-read-view--down-arrow,\n    .react-datepicker-popper[data-placement^="top"]\n    .react-datepicker__triangle::before,\n    .react-datepicker__year-read-view--down-arrow::before,\n    .react-datepicker__month-read-view--down-arrow::before,\n    .react-datepicker__month-year-read-view--down-arrow::before {\n        border-bottom: none !important;\n        border-top-color: #fff !important;\n    }\n\n    .react-datepicker-popper[data-placement^="top"]\n    .react-datepicker__triangle::before,\n    .react-datepicker__year-read-view--down-arrow::before,\n    .react-datepicker__month-read-view--down-arrow::before,\n    .react-datepicker__month-year-read-view--down-arrow::before {\n        bottom: -1px !important;\n        border-top-color: #aeaeae !important;\n    }\n\n    .react-datepicker-wrapper {\n        display: inline-block;\n        padding: 0;\n        border: 0;\n    }\n\n    .react-datepicker {\n        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important;\n        font-size: 0.8rem !important;\n        background-color: #fff !important;\n        color: #000 !important;\n        border: 1px solid #aeaeae !important;\n        border-radius: 20px !important;\n        display: inline-block !important;\n        position: relative !important;\n    }\n\n    .react-datepicker--time-only .react-datepicker__triangle {\n        left: 35px !important;\n    }\n\n    .react-datepicker--time-only .react-datepicker__time-container {\n        border-left: 0 !important;\n    }\n\n    .react-datepicker--time-only .react-datepicker__time,\n    .react-datepicker--time-only .react-datepicker__time-box {\n        border-bottom-left-radius: 20px !important;\n        border-bottom-right-radius: 20px !important;\n    }\n\n    .react-datepicker__triangle {\n        position: absolute !important;\n        left: 50px !important;\n    }\n\n    .react-datepicker-popper {\n        z-index: 1 !important;\n    }\n\n    .react-datepicker-popper[data-placement^="bottom"] {\n        margin-top: 10px !important;\n    }\n\n    .react-datepicker-popper[data-placement="bottom-end"]\n    .react-datepicker__triangle,\n    .react-datepicker-popper[data-placement="top-end"] .react-datepicker__triangle {\n        left: auto !important;\n        right: 50px !important;\n    }\n\n    .react-datepicker-popper[data-placement^="top"] {\n        margin-bottom: 10px !important;\n    }\n\n    .react-datepicker-popper[data-placement^="right"] {\n        margin-left: 8px !important;\n    }\n\n    .react-datepicker-popper[data-placement^="right"] .react-datepicker__triangle {\n        left: auto !important;\n        right: 42px !important;\n    }\n\n    .react-datepicker-popper[data-placement^="left"] {\n        margin-right: 8px !important;\n    }\n\n    .react-datepicker-popper[data-placement^="left"] .react-datepicker__triangle {\n        left: 42px !important;\n        right: auto !important;\n    }\n\n    .react-datepicker__header {\n        text-align: center !important;\n        background-color: #ffffff !important;\n        border-bottom: 1px solid #aeaeae !important;\n        border-top-left-radius: 20px !important;\n        padding-top: 18px !important;\n        position: relative !important;\n        padding-bottom: 10px !important;\n    }\n\n    .react-datepicker__header--time {\n        padding-bottom: 8px !important;\n        padding-left: 5px !important;\n        padding-right: 5px !important;\n    }\n\n    .react-datepicker__header--time:not(.react-datepicker__header--time--only) {\n        border-top-left-radius: 0 !important;\n    }\n\n    .react-datepicker__header:not(.react-datepicker__header--has-time-select) {\n        border-top-right-radius: 20px !important;\n    }\n\n    .react-datepicker__year-dropdown-container--select,\n    .react-datepicker__month-dropdown-container--select,\n    .react-datepicker__month-year-dropdown-container--select,\n    .react-datepicker__year-dropdown-container--scroll,\n    .react-datepicker__month-dropdown-container--scroll,\n    .react-datepicker__month-year-dropdown-container--scroll {\n        display: inline-block !important;\n        margin: 0 2px !important;\n    }\n\n    .react-datepicker__current-month,\n    .react-datepicker-time__header,\n    .react-datepicker-year-header {\n        margin-top: 0 !important;\n        color: #707070 !important;\n        font-weight: bold !important;\n        font-size: 0.944rem !important;\n    }\n\n    .react-datepicker-time__header {\n        text-overflow: ellipsis !important;\n        white-space: nowrap !important;\n        overflow: hidden !important;\n    }\n\n    .react-datepicker__navigation {\n        background: none !important;\n        line-height: 1.7rem !important;\n        text-align: center !important;\n        cursor: pointer !important;\n        position: absolute !important;\n        top: 20px !important;\n        width: 0 !important;\n        padding: 0 !important;\n        border: 0.5rem solid transparent !important;\n        z-index: 1 !important;\n        height: 15px !important;\n        width: 20px !important;\n        text-indent: -999em !important;\n        overflow: hidden !important;\n        outline: none !important;\n    }\n\n    .react-datepicker__navigation--previous {\n        left: 10px !important;\n        border-right-color: #9b4dee !important;\n    }\n\n    .react-datepicker__navigation--previous:hover {\n        border-right-color: rgba(155, 77, 238, 0.2) !important;\n    }\n\n    .react-datepicker__navigation--previous--disabled,\n    .react-datepicker__navigation--previous--disabled:hover {\n        border-right-color: rgba(155, 77, 238, 0.2) !important;\n        cursor: default !important;\n    }\n\n    .react-datepicker__navigation--next {\n        right: 10px !important;\n        border-left-color: #9b4dee !important;\n    }\n\n    .react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {\n        right: 95px !important;\n    }\n\n    .react-datepicker__navigation--next:hover {\n        border-left-color: rgba(155, 77, 238, 0.2) !important;\n    }\n\n    .react-datepicker__navigation--next--disabled,\n    .react-datepicker__navigation--next--disabled:hover {\n        border-left-color: rgba(155, 77, 238, 0.2) !important;\n        cursor: default !important;\n    }\n\n    .react-datepicker__navigation--years {\n        position: relative !important;\n        top: 0 !important;\n        display: block !important;\n        margin-left: auto !important;\n        margin-right: auto !important;\n    }\n\n    .react-datepicker__navigation--years-previous {\n        top: 4px !important;\n        border-top-color: #ccc !important;\n    }\n\n    .react-datepicker__navigation--years-previous:hover {\n        border-top-color: #b3b3b3 !important;\n    }\n\n    .react-datepicker__navigation--years-upcoming {\n        top: -4px !important;\n        border-bottom-color: #ccc !important;\n    }\n\n    .react-datepicker__navigation--years-upcoming:hover {\n        border-bottom-color: #b3b3b3 !important;\n    }\n\n    .react-datepicker__month-container {\n        float: left !important;\n    }\n\n    .react-datepicker__year {\n        margin: 0.4rem !important;\n        text-align: center !important;\n    }\n\n    .react-datepicker__year-wrapper {\n        display: flex !important;\n        flex-wrap: wrap !important;\n        max-width: 180px !important;\n    }\n\n    .react-datepicker__year .react-datepicker__year-text {\n        display: inline-block !important;\n        width: 4rem !important;\n        margin: 2px !important;\n    }\n\n    .react-datepicker__month {\n        margin: 10px 0.4rem !important;\n        text-align: center !important;\n    }\n\n    .react-datepicker__month .react-datepicker__month-text,\n    .react-datepicker__month .react-datepicker__quarter-text {\n        display: inline-block !important;\n        width: 4rem !important;\n        margin: 2px !important;\n    }\n\n    .react-datepicker__input-time-container {\n        clear: both !important;\n        width: 100% !important;\n        float: left !important;\n        margin: 5px 0 10px 15px !important;\n        text-align: left !important;\n    }\n\n    .react-datepicker__input-time-container .react-datepicker-time__caption {\n        display: inline-block !important;\n        color: #707070 !important;\n    }\n\n    .react-datepicker__input-time-container\n    .react-datepicker-time__input-container {\n        display: inline-block !important;\n    }\n\n    .react-datepicker__input-time-container\n    .react-datepicker-time__input-container\n    .react-datepicker-time__input {\n        display: inline-block !important;\n        margin-left: 10px !important;\n    }\n\n    .react-datepicker__input-time-container\n    .react-datepicker-time__input-container\n    .react-datepicker-time__input\n    input {\n        width: 85px !important;\n        border-radius: 20px !important;\n        padding: 5px 10px !important;\n        outline: none !important;\n        border-style: solid !important;\n        border-width: 1px !important;\n        border-color: #707070 !important;\n    }\n\n    .react-datepicker__input-time-container\n    .react-datepicker-time__input-container\n    .react-datepicker-time__input\n    input[type="time"]::-webkit-inner-spin-button,\n    .react-datepicker__input-time-container\n    .react-datepicker-time__input-container\n    .react-datepicker-time__input\n    input[type="time"]::-webkit-outer-spin-button {\n        -webkit-appearance: none !important;\n        margin: 0 !important;\n    }\n\n    .react-datepicker__input-time-container\n    .react-datepicker-time__input-container\n    .react-datepicker-time__input\n    input[type="time"] {\n        -moz-appearance: textfield !important;\n    }\n\n    .react-datepicker__input-time-container\n    .react-datepicker-time__input-container\n    .react-datepicker-time__delimiter {\n        margin-left: 5px !important;\n        display: inline-block !important;\n    }\n\n    .react-datepicker__time-container {\n        float: right !important;\n        border-left: 1px solid #aeaeae !important;\n        width: 85px !important;\n    }\n\n    .react-datepicker__time-container--with-today-button {\n        display: inline !important;\n        border: 1px solid #aeaeae !important;\n        border-radius: 0.3rem !important;\n        position: absolute !important;\n        right: -72px !important;\n        top: 0 !important;\n    }\n\n    .react-datepicker__time-container .react-datepicker__time {\n        position: relative !important;\n        background: white !important;\n        border-bottom-right-radius: 20px !important;\n    }\n\n    .react-datepicker__time-container\n    .react-datepicker__time\n    .react-datepicker__time-box {\n        width: 85px !important;\n        overflow-x: hidden !important;\n        margin: 0 auto !important;\n        text-align: center !important;\n        border-bottom-right-radius: 20px !important;\n    }\n\n    .react-datepicker__time-container\n    .react-datepicker__time\n    .react-datepicker__time-box\n    ul.react-datepicker__time-list {\n        list-style: none !important;\n        margin: 0 !important;\n        height: calc(195px + (1.7rem / 2)) !important;\n        overflow-y: scroll !important;\n        padding-right: 0px !important;\n        padding-left: 0px !important;\n        width: 100% !important;\n        box-sizing: content-box !important;\n    }\n\n    .react-datepicker__time-container\n    .react-datepicker__time\n    .react-datepicker__time-box\n    ul.react-datepicker__time-list\n    li.react-datepicker__time-list-item {\n        height: 30px !important;\n        padding: 5px 10px !important;\n        white-space: nowrap !important;\n        color: #707070 !important;\n    }\n\n    .react-datepicker__time-container\n    .react-datepicker__time\n    .react-datepicker__time-box\n    ul.react-datepicker__time-list\n    li.react-datepicker__time-list-item:hover {\n        cursor: pointer !important;\n        background-color: #f0f0f0 !important;\n    }\n\n    .react-datepicker__time-container\n    .react-datepicker__time\n    .react-datepicker__time-box\n    ul.react-datepicker__time-list\n    li.react-datepicker__time-list-item--selected {\n        background-color: #9b4dee !important;\n        color: white !important;\n        font-weight: bold !important;\n    }\n\n    .react-datepicker__time-container\n    .react-datepicker__time\n    .react-datepicker__time-box\n    ul.react-datepicker__time-list\n    li.react-datepicker__time-list-item--selected:hover {\n        background-color: #9b4dee !important;\n    }\n\n    .react-datepicker__time-container\n    .react-datepicker__time\n    .react-datepicker__time-box\n    ul.react-datepicker__time-list\n    li.react-datepicker__time-list-item--disabled {\n        color: #ccc !important;\n    }\n\n    .react-datepicker__time-container\n    .react-datepicker__time\n    .react-datepicker__time-box\n    ul.react-datepicker__time-list\n    li.react-datepicker__time-list-item--disabled:hover {\n        cursor: default !important;\n        background-color: transparent !important;\n    }\n\n    .react-datepicker__week-number {\n        color: #ccc !important;\n        display: inline-block !important;\n        width: 1.7rem !important;\n        line-height: 1.7rem !important;\n        text-align: center !important;\n        margin: 0.166rem !important;\n    }\n\n    .react-datepicker__week-number.react-datepicker__week-number--clickable {\n        cursor: pointer !important;\n    }\n\n    .react-datepicker__week-number.react-datepicker__week-number--clickable:hover {\n        border-radius: 0.3rem !important;\n        background-color: #f0f0f0 !important;\n    }\n\n    .react-datepicker__day-names,\n    .react-datepicker__week {\n        white-space: nowrap !important;\n        margin-top: 10px !important;\n    }\n\n    .react-datepicker__day-name,\n    .react-datepicker__day,\n    .react-datepicker__time-name {\n        color: #707070 !important;\n        display: inline-block !important;\n        width: 1.7rem !important;\n        line-height: 1.7rem !important;\n        text-align: center !important;\n        margin: 0.166rem !important;\n        outline: none !important;\n    }\n\n    .react-datepicker__month--selected,\n    .react-datepicker__month--in-selecting-range,\n    .react-datepicker__month--in-range,\n    .react-datepicker__quarter--selected,\n    .react-datepicker__quarter--in-selecting-range,\n    .react-datepicker__quarter--in-range {\n        border-radius: 10px !important;\n        background-color: #9b4dee !important;\n        color: #fff !important;\n    }\n\n    .react-datepicker__month--selected:hover,\n    .react-datepicker__month--in-selecting-range:hover,\n    .react-datepicker__month--in-range:hover,\n    .react-datepicker__quarter--selected:hover,\n    .react-datepicker__quarter--in-selecting-range:hover,\n    .react-datepicker__quarter--in-range:hover {\n        background-color: rgba(155, 77, 238, 0.8) !important;\n    }\n\n    .react-datepicker__month--disabled,\n    .react-datepicker__quarter--disabled {\n        color: #ccc !important;\n        pointer-events: none !important;\n    }\n\n    .react-datepicker__month--disabled:hover,\n    .react-datepicker__quarter--disabled:hover {\n        cursor: default !important;\n        background-color: transparent !important;\n    }\n\n    .react-datepicker__day,\n    .react-datepicker__month-text,\n    .react-datepicker__quarter-text,\n    .react-datepicker__year-text {\n        cursor: pointer !important;\n    }\n\n    .react-datepicker__day:hover {\n        border-radius: 50% !important;\n        background-color: #f0f0f0 !important;\n    }\n    .react-datepicker__month-text:hover,\n    .react-datepicker__quarter-text:hover,\n    .react-datepicker__year-text:hover {\n        border-radius: 10px !important;\n        background-color: #f0f0f0 !important;\n    }\n\n    .react-datepicker__day--today,\n    .react-datepicker__month-text--today,\n    .react-datepicker__quarter-text--today,\n    .react-datepicker__year-text--today {\n        font-weight: bold !important;\n    }\n\n    .react-datepicker__day--highlighted,\n    .react-datepicker__month-text--highlighted,\n    .react-datepicker__quarter-text--highlighted,\n    .react-datepicker__year-text--highlighted {\n        border-radius: 0.3rem !important;\n        background-color: #3dcc4a !important;\n        color: #fff !important;\n    }\n\n    .react-datepicker__day--highlighted:hover,\n    .react-datepicker__month-text--highlighted:hover,\n    .react-datepicker__quarter-text--highlighted:hover,\n    .react-datepicker__year-text--highlighted:hover {\n        background-color: #32be3f !important;\n    }\n\n    .react-datepicker__day--highlighted-custom-1,\n    .react-datepicker__month-text--highlighted-custom-1,\n    .react-datepicker__quarter-text--highlighted-custom-1,\n    .react-datepicker__year-text--highlighted-custom-1 {\n        color: magenta !important;\n    }\n\n    .react-datepicker__day--highlighted-custom-2,\n    .react-datepicker__month-text--highlighted-custom-2,\n    .react-datepicker__quarter-text--highlighted-custom-2,\n    .react-datepicker__year-text--highlighted-custom-2 {\n        color: green !important;\n    }\n\n    .react-datepicker__day--selected,\n    .react-datepicker__day--in-selecting-range,\n    .react-datepicker__day--in-range {\n        border-radius: 50% !important;\n        background-color: #9b4dee !important;\n        color: #fff !important;\n        outline: none !important;\n    }\n    .react-datepicker__month-text--selected,\n    .react-datepicker__month-text--in-selecting-range,\n    .react-datepicker__month-text--in-range,\n    .react-datepicker__quarter-text--selected,\n    .react-datepicker__quarter-text--in-selecting-range,\n    .react-datepicker__quarter-text--in-range,\n    .react-datepicker__year-text--selected,\n    .react-datepicker__year-text--in-selecting-range,\n    .react-datepicker__year-text--in-range {\n        border-radius: 10px !important;\n        background-color: #9b4dee !important;\n        color: #fff !important;\n        outline: none !important;\n    }\n\n    .react-datepicker__day--selected:hover,\n    .react-datepicker__day--in-selecting-range:hover,\n    .react-datepicker__day--in-range:hover,\n    .react-datepicker__month-text--selected:hover,\n    .react-datepicker__month-text--in-selecting-range:hover,\n    .react-datepicker__month-text--in-range:hover,\n    .react-datepicker__quarter-text--selected:hover,\n    .react-datepicker__quarter-text--in-selecting-range:hover,\n    .react-datepicker__quarter-text--in-range:hover,\n    .react-datepicker__year-text--selected:hover,\n    .react-datepicker__year-text--in-selecting-range:hover,\n    .react-datepicker__year-text--in-range:hover {\n        background-color: rgba(155, 77, 238, 0.8) !important;\n        outline: none !important;\n    }\n\n    .react-datepicker__day--keyboard-selected {\n        border-radius: 50% !important;\n        background-color: #9b4dee !important;\n        color: #fff !important;\n        outline: none !important;\n    }\n    .react-datepicker__month-text--keyboard-selected,\n    .react-datepicker__quarter-text--keyboard-selected,\n    .react-datepicker__year-text--keyboard-selected {\n        border-radius: 10px !important;\n        background-color: #9b4dee !important;\n        color: #fff !important;\n        outline: none !important;\n    }\n\n    .react-datepicker__day--keyboard-selected:hover,\n    .react-datepicker__month-text--keyboard-selected:hover,\n    .react-datepicker__quarter-text--keyboard-selected:hover,\n    .react-datepicker__year-text--keyboard-selected:hover {\n        background-color: rgba(155, 77, 238, 0.8) !important;\n    }\n\n    .react-datepicker__day--in-selecting-range,\n    .react-datepicker__month-text--in-selecting-range,\n    .react-datepicker__quarter-text--in-selecting-range,\n    .react-datepicker__year-text--in-selecting-range {\n        background-color: rgba(155, 77, 238, 0.5) !important;\n        outline: none !important;\n    }\n\n    .react-datepicker__month--selecting-range .react-datepicker__day--in-range,\n    .react-datepicker__month--selecting-range\n    .react-datepicker__month-text--in-range,\n    .react-datepicker__month--selecting-range\n    .react-datepicker__quarter-text--in-range,\n    .react-datepicker__month--selecting-range\n    .react-datepicker__year-text--in-range {\n        background-color: #f0f0f0 !important;\n        color: #000 !important;\n        outline: none !important;\n    }\n\n    .react-datepicker__day--disabled,\n    .react-datepicker__month-text--disabled,\n    .react-datepicker__quarter-text--disabled,\n    .react-datepicker__year-text--disabled {\n        cursor: default !important;\n        color: #ccc !important;\n    }\n\n    .react-datepicker__day--disabled:hover,\n    .react-datepicker__month-text--disabled:hover,\n    .react-datepicker__quarter-text--disabled:hover,\n    .react-datepicker__year-text--disabled:hover {\n        background-color: transparent !important;\n    }\n\n    .react-datepicker__month-text.react-datepicker__month--selected:hover,\n    .react-datepicker__month-text.react-datepicker__month--in-range:hover,\n    .react-datepicker__month-text.react-datepicker__quarter--selected:hover,\n    .react-datepicker__month-text.react-datepicker__quarter--in-range:hover,\n    .react-datepicker__quarter-text.react-datepicker__month--selected:hover,\n    .react-datepicker__quarter-text.react-datepicker__month--in-range:hover,\n    .react-datepicker__quarter-text.react-datepicker__quarter--selected:hover,\n    .react-datepicker__quarter-text.react-datepicker__quarter--in-range:hover {\n        background-color: #9b4dee !important;\n    }\n\n    .react-datepicker__month-text:hover,\n    .react-datepicker__quarter-text:hover {\n        background-color: #f0f0f0 !important;\n    }\n\n    .react-datepicker__input-container {\n        position: relative !important;\n        display: inline-block !important;\n        width: 100% !important;\n    }\n\n    .react-datepicker__year-read-view,\n    .react-datepicker__month-read-view,\n    .react-datepicker__month-year-read-view {\n        border: 1px solid transparent !important;\n        border-radius: 0.3rem !important;\n    }\n\n    .react-datepicker__year-read-view:hover,\n    .react-datepicker__month-read-view:hover,\n    .react-datepicker__month-year-read-view:hover {\n        cursor: pointer !important;\n    }\n\n    .react-datepicker__year-read-view:hover,\n    .react-datepicker__year-read-view--down-arrow,\n    .react-datepicker__year-read-view:hover,\n    .react-datepicker__month-read-view--down-arrow,\n    .react-datepicker__month-read-view:hover,\n    .react-datepicker__year-read-view--down-arrow,\n    .react-datepicker__month-read-view:hover,\n    .react-datepicker__month-read-view--down-arrow,\n    .react-datepicker__month-year-read-view:hover,\n    .react-datepicker__year-read-view--down-arrow,\n    .react-datepicker__month-year-read-view:hover,\n    .react-datepicker__month-read-view--down-arrow {\n        border-top-color: #b3b3b3 !important;\n    }\n\n    .react-datepicker__year-read-view--down-arrow,\n    .react-datepicker__month-read-view--down-arrow,\n    .react-datepicker__month-year-read-view--down-arrow {\n        border-top-color: #ccc !important;\n        float: right !important;\n        margin-left: 20px !important;\n        top: 5px !important;\n        position: relative !important;\n        border-width: 0.45rem !important;\n    }\n\n    .react-datepicker__year-dropdown,\n    .react-datepicker__month-dropdown,\n    .react-datepicker__month-year-dropdown {\n        background-color: #f0f0f0 !important;\n        position: absolute !important;\n        width: 50% !important;\n        left: 25% !important;\n        top: 30px !important;\n        z-index: 1 !important;\n        text-align: center !important;\n        border-radius: 0.3rem !important;\n        border: 1px solid #aeaeae !important;\n    }\n\n    .react-datepicker__year-dropdown:hover,\n    .react-datepicker__month-dropdown:hover,\n    .react-datepicker__month-year-dropdown:hover {\n        cursor: pointer !important;\n    }\n\n    .react-datepicker__year-dropdown--scrollable,\n    .react-datepicker__month-dropdown--scrollable,\n    .react-datepicker__month-year-dropdown--scrollable {\n        height: 150px !important;\n        overflow-y: scroll !important;\n    }\n\n    .react-datepicker__year-option,\n    .react-datepicker__month-option,\n    .react-datepicker__month-year-option {\n        line-height: 20px !important;\n        width: 100% !important;\n        display: block !important;\n        margin-left: auto !important;\n        margin-right: auto !important;\n    }\n\n    .react-datepicker__year-option:first-of-type,\n    .react-datepicker__month-option:first-of-type,\n    .react-datepicker__month-year-option:first-of-type {\n        border-top-left-radius: 0.3rem !important;\n        border-top-right-radius: 0.3rem !important;\n    }\n\n    .react-datepicker__year-option:last-of-type,\n    .react-datepicker__month-option:last-of-type,\n    .react-datepicker__month-year-option:last-of-type {\n        -webkit-user-select: none !important;\n        -moz-user-select: none !important;\n        -ms-user-select: none !important;\n        user-select: none !important;\n        border-bottom-left-radius: 0.3rem !important;\n        border-bottom-right-radius: 0.3rem !important;\n    }\n\n    .react-datepicker__year-option:hover,\n    .react-datepicker__month-option:hover,\n    .react-datepicker__month-year-option:hover {\n        background-color: #ccc !important;\n    }\n\n    .react-datepicker__year-option:hover\n    .react-datepicker__navigation--years-upcoming,\n    .react-datepicker__month-option:hover\n    .react-datepicker__navigation--years-upcoming,\n    .react-datepicker__month-year-option:hover\n    .react-datepicker__navigation--years-upcoming {\n        border-bottom-color: #b3b3b3 !important;\n    }\n\n    .react-datepicker__year-option:hover\n    .react-datepicker__navigation--years-previous,\n    .react-datepicker__month-option:hover\n    .react-datepicker__navigation--years-previous,\n    .react-datepicker__month-year-option:hover\n    .react-datepicker__navigation--years-previous {\n        border-top-color: #b3b3b3 !important;\n    }\n\n    .react-datepicker__year-option--selected,\n    .react-datepicker__month-option--selected,\n    .react-datepicker__month-year-option--selected {\n        position: absolute !important;\n        left: 15px !important;\n    }\n\n    .react-datepicker__close-icon {\n        cursor: pointer !important;\n        background-color: transparent !important;\n        border: 0 !important;\n        outline: 0 !important;\n        padding: 0px 6px 0px 0px !important;\n        position: absolute !important;\n        top: 0 !important;\n        right: 0 !important;\n        height: 100% !important;\n        display: table-cell !important;\n        vertical-align: middle !important;\n    }\n\n    .react-datepicker__close-icon::after {\n        cursor: pointer !important;\n        background-color: #9b4dee !important;\n        color: #fff !important;\n        border-radius: 50% !important;\n        height: 16px !important;\n        width: 16px !important;\n        padding: 2px !important;\n        font-size: 12px !important;\n        line-height: 1 !important;\n        text-align: center !important;\n        display: table-cell !important;\n        vertical-align: middle !important;\n    }\n\n    .react-datepicker__today-button {\n        background: rgba(155, 77, 238, 0.1) !important;\n        border-top: 1px solid #aeaeae !important;\n        cursor: pointer !important;\n        text-align: center !important;\n        font-weight: bold !important;\n        padding: 5px 0 !important;\n        clear: left !important;\n        border-bottom-left-radius: 20px !important;\n        border-bottom-right-radius: 20px !important;\n    }\n\n    .react-datepicker__portal {\n        position: fixed !important;\n        width: 100vw !important;\n        height: 100vh !important;\n        background-color: rgba(0, 0, 0, 0.8) !important;\n        left: 0 !important;\n        top: 0 !important;\n        justify-content: center !important;\n        align-items: center !important;\n        display: flex !important;\n        z-index: 2147483647 !important;\n    }\n\n    .react-datepicker__portal .react-datepicker__day-name,\n    .react-datepicker__portal .react-datepicker__day,\n    .react-datepicker__portal .react-datepicker__time-name {\n        width: 3rem !important;\n        line-height: 3rem !important;\n    }\n\n    @media (max-width: 400px), (max-height: 550px) {\n    .react-datepicker__portal .react-datepicker__day-name,\n    .react-datepicker__portal .react-datepicker__day,\n    .react-datepicker__portal .react-datepicker__time-name {\n        width: 2rem !important;\n        line-height: 2rem !important;\n    }\n}\n\n.react-datepicker__portal .react-datepicker__current-month,\n.react-datepicker__portal .react-datepicker-time__header {\n    font-size: 1.44rem !important;\n}\n\n.react-datepicker__portal .react-datepicker__navigation {\n    border: 0.81rem solid transparent !important;\n}\n\n.react-datepicker__portal .react-datepicker__navigation--previous {\n    border-right-color: #ccc !important;\n}\n\n.react-datepicker__portal .react-datepicker__navigation--previous:hover {\n    border-right-color: #b3b3b3 !important;\n}\n\n.react-datepicker__portal .react-datepicker__navigation--previous--disabled,\n.react-datepicker__portal\n.react-datepicker__navigation--previous--disabled:hover {\n    border-right-color: #e6e6e6 !important;\n    cursor: default !important;\n}\n\n.react-datepicker__portal .react-datepicker__navigation--next {\n    border-left-color: #ccc !important;\n}\n\n.react-datepicker__portal .react-datepicker__navigation--next:hover {\n    border-left-color: #b3b3b3 !important;\n}\n\n.react-datepicker__portal .react-datepicker__navigation--next--disabled,\n.react-datepicker__portal .react-datepicker__navigation--next--disabled:hover {\n    border-left-color: #e6e6e6 !important;\n    cursor: default !important;\n}\n\n'])),function(n){return n.brand?"#D8B8F9":"#ACACAC"},function(n){return n.brand?"#9B4DEE":"#707070"},function(n){return n.brand?"#D8B8F9":"#FFFFFF"},function(n){return n.brand?"rgba(155, 77, 238, 0.2)":"#F1F1F1"},function(n){return n.labelColor?n.labelColor:"#9B4DEE"}),qr=n&&"object"==typeof n&&"default"in n?n.default:n;
/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function Ur(){return(Ur=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function $r(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}var Hr=function(n,e,t,r,o,i,a,l){if(!n){var d;if(void 0===e)d=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[t,r,o,i,a,l],p=0;(d=new Error(e.replace(/%s/g,function(){return c[p++]}))).name="Invariant Violation"}throw d.framesToPop=1,d}};function Wr(n,e,t){if("selectionStart"in n&&"selectionEnd"in n)n.selectionStart=e,n.selectionEnd=t;else{var r=n.createTextRange();r.collapse(!0),r.moveStart("character",e),r.moveEnd("character",t-e),r.select()}}var Xr={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function Yr(n,e,t){var r="",o="",i=null,a=[];if(void 0===e&&(e="_"),null==t&&(t=Xr),!n||"string"!=typeof n)return{maskChar:e,formatChars:t,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return n.split("").forEach(function(n){l=!l&&"\\"===n||(l||!t[n]?(a.push(r.length),r.length===a.length-1&&(o+=n)):i=r.length+1,r+=n,!1)}),{maskChar:e,formatChars:t,prefix:o,mask:r,lastEditablePosition:i,permanents:a}}function Zr(n,e){return-1!==n.permanents.indexOf(e)}function Gr(n,e,t){var r=n.mask,o=n.formatChars;return!!t&&(Zr(n,e)?r[e]===t:new RegExp(o[r[e]]).test(t))}function Jr(n,e){return e.split("").every(function(e,t){return Zr(n,t)||!Gr(n,t,e)})}function Kr(n,e){var t=n.prefix;if(!n.maskChar){for(;e.length>t.length&&Zr(n,e.length-1);)e=e.slice(0,e.length-1);return e.length}for(var r=t.length,o=e.length;o>=t.length;o--){var i=e[o];if(!Zr(n,o)&&Gr(n,o,i)){r=o+1;break}}return r}function Qr(n,e){return Kr(n,e)===n.mask.length}function no(n,e){var t=n.maskChar,r=n.mask,o=n.prefix;if(!t){for((e=eo(n,"",e,0)).length<o.length&&(e=o);e.length<r.length&&Zr(n,e.length);)e+=r[e.length];return e}if(e)return eo(n,no(n,""),e,0);for(var i=0;i<r.length;i++)Zr(n,i)?e+=r[i]:e+=t;return e}function eo(n,e,t,r){var o=n.mask,i=n.maskChar,a=n.prefix,l=t.split(""),d=Qr(n,e);return!i&&r>e.length&&(e+=o.slice(e.length,r)),l.every(function(t){for(;p=t,Zr(n,c=r)&&p!==o[c];){if(r>=e.length&&(e+=o[r]),l=t,i&&Zr(n,r)&&l===i)return!0;if(++r>=o.length)return!1}var l,c,p;return!Gr(n,r,t)&&t!==i||(r<e.length?e=i||d||r<a.length?e.slice(0,r)+t+e.slice(r+1):(e=e.slice(0,r)+t+e.slice(r),no(n,e)):i||(e+=t),++r<o.length)}),e}function to(n,e){for(var t=n.mask,r=e;r<t.length;++r)if(!Zr(n,r))return r;return null}function ro(n){return n||0===n?n+"":""}function oo(n){return"function"==typeof n}function io(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function ao(n){return(io()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(n,1e3/60)})(n)}function lo(n){(io()||clearTimeout)(n)}var co=function(n){function e(e){var t=n.call(this,e)||this;t.focused=!1,t.mounted=!1,t.previousSelection=null,t.selectionDeferId=null,t.saveSelectionLoopDeferId=null,t.saveSelectionLoop=function(){t.previousSelection=t.getSelection(),t.saveSelectionLoopDeferId=ao(t.saveSelectionLoop)},t.runSaveSelectionLoop=function(){null===t.saveSelectionLoopDeferId&&t.saveSelectionLoop()},t.stopSaveSelectionLoop=function(){null!==t.saveSelectionLoopDeferId&&(lo(t.saveSelectionLoopDeferId),t.saveSelectionLoopDeferId=null,t.previousSelection=null)},t.getInputDOMNode=function(){if(!t.mounted)return null;var n=g.findDOMNode($r($r(t))),e="undefined"!=typeof window&&n instanceof window.Element;if(n&&!e)return null;if("INPUT"!==n.nodeName&&(n=n.querySelector("input")),!n)throw new Error("react-input-mask: inputComponent doesn't contain input node");return n},t.getInputValue=function(){var n=t.getInputDOMNode();return n?n.value:null},t.setInputValue=function(n){var e=t.getInputDOMNode();e&&(t.value=n,e.value=n)},t.setCursorToEnd=function(){var n=Kr(t.maskOptions,t.value),e=to(t.maskOptions,n);null!==e&&t.setCursorPosition(e)},t.setSelection=function(n,e,r){void 0===r&&(r={});var o=t.getInputDOMNode(),i=t.isFocused();o&&i&&(r.deferred||Wr(o,n,e),null!==t.selectionDeferId&&lo(t.selectionDeferId),t.selectionDeferId=ao(function(){t.selectionDeferId=null,Wr(o,n,e)}),t.previousSelection={start:n,end:e,length:Math.abs(e-n)})},t.getSelection=function(){return function(n){var e=0,t=0;if("selectionStart"in n&&"selectionEnd"in n)e=n.selectionStart,t=n.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===n&&(e=-r.moveStart("character",-n.value.length),t=-r.moveEnd("character",-n.value.length))}return{start:e,end:t,length:t-e}}(t.getInputDOMNode())},t.getCursorPosition=function(){return t.getSelection().start},t.setCursorPosition=function(n){t.setSelection(n,n)},t.isFocused=function(){return t.focused},t.getBeforeMaskedValueChangeConfig=function(){var n=t.maskOptions;return{mask:n.mask,maskChar:n.maskChar,permanents:n.permanents,alwaysShowMask:!!t.props.alwaysShowMask,formatChars:n.formatChars}},t.isInputAutofilled=function(n,e,r,o){var i=t.getInputDOMNode();try{if(i.matches(":-webkit-autofill"))return!0}catch(n){}return!t.focused||o.end<r.length&&e.end===n.length},t.onChange=function(n){var e=$r($r(t)).beforePasteState,r=$r($r(t)).previousSelection,o=t.props.beforeMaskedValueChange,i=t.getInputValue(),a=t.value,l=t.getSelection();t.isInputAutofilled(i,l,a,r)&&(a=no(t.maskOptions,""),r={start:0,end:0,length:0}),e&&(l={start:(r=e.selection).start+i.length,end:r.start+i.length,length:0},i=(a=e.value).slice(0,r.start)+i+a.slice(r.end),t.beforePasteState=null);var d=function(n,e,t,r,o){var i=n.mask,a=n.prefix,l=n.lastEditablePosition,d=e,c="",p=0,s=0,u=Math.min(o.start,t.start);return t.end>o.start?s=(p=function(n,e,t,r){var o=n.mask,i=n.maskChar,a=t.split(""),l=r;return a.every(function(e){for(;a=e,Zr(n,t=r)&&a!==o[t];)if(++r>=o.length)return!1;var t,a;return(Gr(n,r,e)||e===i)&&r++,r<o.length}),r-l}(n,0,c=d.slice(o.start,t.end),u))?o.length:0:d.length<r.length&&(s=r.length-d.length),d=r,s&&(1!==s||o.length||(u=o.start===t.start?to(n,t.start):function(n,e){for(var t=e;0<=t;--t)if(!Zr(n,t))return t;return null}(n,t.start)),d=function(n,e,t,r){var o=t+r,i=n.maskChar,a=n.mask,l=n.prefix,d=e.split("");if(i)return d.map(function(e,r){return r<t||o<=r?e:Zr(n,r)?a[r]:i}).join("");for(var c=o;c<d.length;c++)Zr(n,c)&&(d[c]="");return t=Math.max(l.length,t),d.splice(t,o-t),e=d.join(""),no(n,e)}(n,d,u,s)),d=eo(n,d,c,u),(u+=p)>=i.length?u=i.length:u<a.length&&!p?u=a.length:u>=a.length&&u<l&&p&&(u=to(n,u)),c||(c=null),{value:d=no(n,d),enteredString:c,selection:{start:u,end:u}}}(t.maskOptions,i,l,a,r),c=d.enteredString,p=d.selection,s=d.value;if(oo(o)){var u=o({value:s,selection:p},{value:a,selection:r},c,t.getBeforeMaskedValueChangeConfig());s=u.value,p=u.selection}t.setInputValue(s),oo(t.props.onChange)&&t.props.onChange(n),t.isWindowsPhoneBrowser?t.setSelection(p.start,p.end,{deferred:!0}):t.setSelection(p.start,p.end)},t.onFocus=function(n){var e=t.props.beforeMaskedValueChange,r=t.maskOptions,o=r.mask,i=r.prefix;if(t.focused=!0,t.mounted=!0,o){if(t.value)Kr(t.maskOptions,t.value)<t.maskOptions.mask.length&&t.setCursorToEnd();else{var a=no(t.maskOptions,i),l=no(t.maskOptions,a),d=Kr(t.maskOptions,l),c=to(t.maskOptions,d),p={start:c,end:c};if(oo(e)){var s=e({value:l,selection:p},{value:t.value,selection:null},null,t.getBeforeMaskedValueChangeConfig());l=s.value,p=s.selection}var u=l!==t.getInputValue();u&&t.setInputValue(l),u&&oo(t.props.onChange)&&t.props.onChange(n),t.setSelection(p.start,p.end)}t.runSaveSelectionLoop()}oo(t.props.onFocus)&&t.props.onFocus(n)},t.onBlur=function(n){var e=t.props.beforeMaskedValueChange,r=t.maskOptions.mask;if(t.stopSaveSelectionLoop(),t.focused=!1,r&&!t.props.alwaysShowMask&&Jr(t.maskOptions,t.value)){var o="";oo(e)&&(o=e({value:o,selection:null},{value:t.value,selection:t.previousSelection},null,t.getBeforeMaskedValueChangeConfig()).value);var i=o!==t.getInputValue();i&&t.setInputValue(o),i&&oo(t.props.onChange)&&t.props.onChange(n)}oo(t.props.onBlur)&&t.props.onBlur(n)},t.onMouseDown=function(n){!t.focused&&document.addEventListener&&(t.mouseDownX=n.clientX,t.mouseDownY=n.clientY,t.mouseDownTime=(new Date).getTime(),document.addEventListener("mouseup",function n(e){if(document.removeEventListener("mouseup",n),t.focused){var r=Math.abs(e.clientX-t.mouseDownX),o=Math.abs(e.clientY-t.mouseDownY),i=Math.max(r,o),a=(new Date).getTime()-t.mouseDownTime;(i<=10&&a<=200||i<=5&&a<=300)&&t.setCursorToEnd()}})),oo(t.props.onMouseDown)&&t.props.onMouseDown(n)},t.onPaste=function(n){oo(t.props.onPaste)&&t.props.onPaste(n),n.defaultPrevented||(t.beforePasteState={value:t.getInputValue(),selection:t.getSelection()},t.setInputValue(""))},t.handleRef=function(n){null==t.props.children&&oo(t.props.inputRef)&&t.props.inputRef(n)};var r=e.alwaysShowMask,o=e.beforeMaskedValueChange,i=e.defaultValue,a=e.value;t.maskOptions=Yr(e.mask,e.maskChar,e.formatChars),null==i&&(i=""),null==a&&(a=i);var l=ro(a);if(t.maskOptions.mask&&(r||l)&&(l=no(t.maskOptions,l),oo(o))){var d=e.value;null==e.value&&(d=i),l=o({value:l,selection:null},{value:d=ro(d),selection:null},null,t.getBeforeMaskedValueChangeConfig()).value}return t.value=l,t}!function(n,e){n.prototype=Object.create(e.prototype),function(n,e){for(var t=Object.getOwnPropertyNames(e),r=0;r<t.length;r++){var o=t[r],i=Object.getOwnPropertyDescriptor(e,o);i&&i.configurable&&void 0===n[o]&&Object.defineProperty(n,o,i)}}(n.prototype.constructor=n,e)}(e,n);var t=e.prototype;return t.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=function(){var n=new RegExp("windows","i"),e=new RegExp("phone","i"),t=navigator.userAgent;return n.test(t)&&e.test(t)}(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},t.componentDidUpdate=function(){var n=this.previousSelection,e=this.props,t=e.beforeMaskedValueChange,r=e.mask,o=e.maskChar,i=e.formatChars,a=this.maskOptions,l=e.alwaysShowMask||this.isFocused(),d=null!=this.props.value,c=d?ro(this.props.value):this.value,p=n?n.start:null;if(this.maskOptions=Yr(r,o,i),this.maskOptions.mask){!a.mask&&this.isFocused()&&this.runSaveSelectionLoop();var s=this.maskOptions.mask&&this.maskOptions.mask!==a.mask;if(a.mask||d||(c=this.getInputValue()),(s||this.maskOptions.mask&&(c||l))&&(c=no(this.maskOptions,c)),s){var u=Kr(this.maskOptions,c);(null===p||u<p)&&(p=Qr(this.maskOptions,c)?u:to(this.maskOptions,u))}!this.maskOptions.mask||!Jr(this.maskOptions,c)||l||d&&this.props.value||(c="");var m={start:p,end:p};if(oo(t)){var b=t({value:c,selection:m},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());c=b.value,m=b.selection}this.value=c;var f=this.getInputValue()!==this.value;f?(this.setInputValue(this.value),this.forceUpdate()):s&&this.forceUpdate();var h=!1;null!=m.start&&null!=m.end&&(h=!n||n.start!==m.start||n.end!==m.end),(h||f)&&this.setSelection(m.start,m.end)}else a.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},t.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&lo(this.selectionDeferId),this.stopSaveSelectionLoop()},t.render=function(){var n,e=this.props,t=e.children,r=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)0<=e.indexOf(t=i[r])||(o[t]=n[t]);return o}(e,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(t){oo(t)||Hr(!1);var o=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],i=Ur({},r);o.forEach(function(n){return delete i[n]}),n=t(i),o.filter(function(e){return null!=n.props[e]&&n.props[e]!==r[e]}).length&&Hr(!1)}else n=qr.createElement("input",Ur({ref:this.handleRef},r));var a={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(r.disabled||r.readOnly||(a.onChange=this.onChange,a.onPaste=this.onPaste,a.onMouseDown=this.onMouseDown),null!=r.value&&(a.value=this.value)),n=qr.cloneElement(n,a)},e}(qr.Component),po=function(){};if("production"!==process.env.NODE_ENV){var so=function(n,e){var t=arguments.length;e=new Array(t>1?t-1:0);for(var r=1;r<t;r++)e[r-1]=arguments[r];var o=0,i="Warning: "+n.replace(/%s/g,function(){return e[o++]});"undefined"!=typeof console&&console.error(i);try{throw new Error(i)}catch(n){}};po=function(n,e,t){var r=arguments.length;t=new Array(r>2?r-2:0);for(var o=2;o<r;o++)t[o-2]=arguments[o];if(void 0===e)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");n||so.apply(null,[e].concat(t))}}var uo=po;function mo(n){return n&&"object"==typeof n&&"default"in n?n.default:n}var bo=mo(n),fo=mo(function(n,e,t,r,o,i,a,l){if("production"!==process.env.NODE_ENV&&void 0===e)throw new Error("invariant requires an error message argument");if(!n){var d;if(void 0===e)d=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[t,r,o,i,a,l],p=0;(d=new Error(e.replace(/%s/g,function(){return c[p++]}))).name="Invariant Violation"}throw d.framesToPop=1,d}}),ho=mo(uo);function go(){return(go=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function wo(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function xo(n,e,t){if("selectionStart"in n&&"selectionEnd"in n)n.selectionStart=e,n.selectionEnd=t;else{var r=n.createTextRange();r.collapse(!0),r.moveStart("character",e),r.moveEnd("character",t-e),r.select()}}var vo={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function ko(n,e,t){var r="",o="",i=null,a=[];if(void 0===e&&(e="_"),null==t&&(t=vo),!n||"string"!=typeof n)return{maskChar:e,formatChars:t,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return n.split("").forEach(function(n){l||"\\"!==n?(l||!t[n]?(a.push(r.length),r.length===a.length-1&&(o+=n)):i=r.length+1,r+=n,l=!1):l=!0}),{maskChar:e,formatChars:t,prefix:o,mask:r,lastEditablePosition:i,permanents:a}}function yo(n,e){return-1!==n.permanents.indexOf(e)}function _o(n,e,t){var r=n.mask,o=n.formatChars;return!!t&&(yo(n,e)?r[e]===t:new RegExp(o[r[e]]).test(t))}function Eo(n,e){return e.split("").every(function(e,t){return yo(n,t)||!_o(n,t,e)})}function So(n,e){var t=n.prefix;if(!n.maskChar){for(;e.length>t.length&&yo(n,e.length-1);)e=e.slice(0,e.length-1);return e.length}for(var r=t.length,o=e.length;o>=t.length;o--){var i=e[o];if(!yo(n,o)&&_o(n,o,i)){r=o+1;break}}return r}function Co(n,e){return So(n,e)===n.mask.length}function zo(n,e){var t=n.maskChar,r=n.mask,o=n.prefix;if(!t){for((e=Oo(n,"",e,0)).length<o.length&&(e=o);e.length<r.length&&yo(n,e.length);)e+=r[e.length];return e}if(e)return Oo(n,zo(n,""),e,0);for(var i=0;i<r.length;i++)yo(n,i)?e+=r[i]:e+=t;return e}function Oo(n,e,t,r){var o=n.mask,i=n.maskChar,a=n.prefix,l=t.split(""),d=Co(n,e),c=function(e,t){return!i||!yo(n,t)||e!==i};return!i&&r>e.length&&(e+=o.slice(e.length,r)),l.every(function(t){for(;p=t,yo(n,l=r)&&p!==o[l];){if(r>=e.length&&(e+=o[r]),!c(t,r))return!0;if(++r>=o.length)return!1}var l,p;return!_o(n,r,t)&&t!==i||(r<e.length?i||d||r<a.length?e=e.slice(0,r)+t+e.slice(r+1):(e=e.slice(0,r)+t+e.slice(r),e=zo(n,e)):i||(e+=t),++r<o.length)}),e}function Mo(n,e){for(var t=n.mask,r=e;r<t.length;++r)if(!yo(n,r))return r;return null}function Fo(n){return n||0===n?n+"":""}function Io(n){return"function"==typeof n}function Do(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function Bo(n){return(Do()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(n,1e3/60)})(n)}function Po(n){(Do()||clearTimeout)(n)}var Ao=function(n){function e(e){var t;(t=n.call(this,e)||this).focused=!1,t.mounted=!1,t.previousSelection=null,t.selectionDeferId=null,t.saveSelectionLoopDeferId=null,t.saveSelectionLoop=function(){t.previousSelection=t.getSelection(),t.saveSelectionLoopDeferId=Bo(t.saveSelectionLoop)},t.runSaveSelectionLoop=function(){null===t.saveSelectionLoopDeferId&&t.saveSelectionLoop()},t.stopSaveSelectionLoop=function(){null!==t.saveSelectionLoopDeferId&&(Po(t.saveSelectionLoopDeferId),t.saveSelectionLoopDeferId=null,t.previousSelection=null)},t.getInputDOMNode=function(){if(!t.mounted)return null;var n=g.findDOMNode(wo(wo(t))),e="undefined"!=typeof window&&n instanceof window.Element;if(n&&!e)return null;if("INPUT"!==n.nodeName&&(n=n.querySelector("input")),!n)throw new Error("react-input-mask: inputComponent doesn't contain input node");return n},t.getInputValue=function(){var n=t.getInputDOMNode();return n?n.value:null},t.setInputValue=function(n){var e=t.getInputDOMNode();e&&(t.value=n,e.value=n)},t.setCursorToEnd=function(){var n=So(t.maskOptions,t.value),e=Mo(t.maskOptions,n);null!==e&&t.setCursorPosition(e)},t.setSelection=function(n,e,r){void 0===r&&(r={});var o=t.getInputDOMNode(),i=t.isFocused();o&&i&&(r.deferred||xo(o,n,e),null!==t.selectionDeferId&&Po(t.selectionDeferId),t.selectionDeferId=Bo(function(){t.selectionDeferId=null,xo(o,n,e)}),t.previousSelection={start:n,end:e,length:Math.abs(e-n)})},t.getSelection=function(){return function(n){var e=0,t=0;if("selectionStart"in n&&"selectionEnd"in n)e=n.selectionStart,t=n.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===n&&(e=-r.moveStart("character",-n.value.length),t=-r.moveEnd("character",-n.value.length))}return{start:e,end:t,length:t-e}}(t.getInputDOMNode())},t.getCursorPosition=function(){return t.getSelection().start},t.setCursorPosition=function(n){t.setSelection(n,n)},t.isFocused=function(){return t.focused},t.getBeforeMaskedValueChangeConfig=function(){var n=t.maskOptions;return{mask:n.mask,maskChar:n.maskChar,permanents:n.permanents,alwaysShowMask:!!t.props.alwaysShowMask,formatChars:n.formatChars}},t.isInputAutofilled=function(n,e,r,o){var i=t.getInputDOMNode();try{if(i.matches(":-webkit-autofill"))return!0}catch(n){}return!t.focused||o.end<r.length&&e.end===n.length},t.onChange=function(n){var e=wo(wo(t)).beforePasteState,r=wo(wo(t)).previousSelection,o=t.props.beforeMaskedValueChange,i=t.getInputValue(),a=t.value,l=t.getSelection();t.isInputAutofilled(i,l,a,r)&&(a=zo(t.maskOptions,""),r={start:0,end:0,length:0}),e&&(l={start:(r=e.selection).start+i.length,end:r.start+i.length,length:0},i=(a=e.value).slice(0,r.start)+i+a.slice(r.end),t.beforePasteState=null);var d=function(n,e,t,r,o){var i=n.mask,a=n.prefix,l=n.lastEditablePosition,d=e,c="",p=0,s=0,u=Math.min(o.start,t.start);return t.end>o.start?s=(p=function(n,e,t,r){var o=n.mask,i=n.maskChar,a=t.split(""),l=r;return a.every(function(e){for(;a=e,yo(n,t=r)&&a!==o[t];)if(++r>=o.length)return!1;var t,a;return(_o(n,r,e)||e===i)&&r++,r<o.length}),r-l}(n,0,c=d.slice(o.start,t.end),u))?o.length:0:d.length<r.length&&(s=r.length-d.length),d=r,s&&(1!==s||o.length||(u=o.start===t.start?Mo(n,t.start):function(n,e){for(var t=e;t>=0;--t)if(!yo(n,t))return t;return null}(n,t.start)),d=function(n,e,t,r){var o=t+r,i=n.maskChar,a=n.mask,l=n.prefix,d=e.split("");if(!i){for(var c=o;c<d.length;c++)yo(n,c)&&(d[c]="");return t=Math.max(l.length,t),d.splice(t,o-t),e=d.join(""),zo(n,e)}return d.map(function(e,r){return r<t||r>=o?e:yo(n,r)?a[r]:i}).join("")}(n,d,u,s)),d=Oo(n,d,c,u),(u+=p)>=i.length?u=i.length:u<a.length&&!p?u=a.length:u>=a.length&&u<l&&p&&(u=Mo(n,u)),c||(c=null),{value:d=zo(n,d),enteredString:c,selection:{start:u,end:u}}}(t.maskOptions,i,l,a,r),c=d.enteredString,p=d.selection,s=d.value;if(Io(o)){var u=o({value:s,selection:p},{value:a,selection:r},c,t.getBeforeMaskedValueChangeConfig());s=u.value,p=u.selection}t.setInputValue(s),Io(t.props.onChange)&&t.props.onChange(n),t.isWindowsPhoneBrowser?t.setSelection(p.start,p.end,{deferred:!0}):t.setSelection(p.start,p.end)},t.onFocus=function(n){var e=t.props.beforeMaskedValueChange,r=t.maskOptions,o=r.mask,i=r.prefix;if(t.focused=!0,t.mounted=!0,o){if(t.value)So(t.maskOptions,t.value)<t.maskOptions.mask.length&&t.setCursorToEnd();else{var a=zo(t.maskOptions,i),l=zo(t.maskOptions,a),d=So(t.maskOptions,l),c=Mo(t.maskOptions,d),p={start:c,end:c};if(Io(e)){var s=e({value:l,selection:p},{value:t.value,selection:null},null,t.getBeforeMaskedValueChangeConfig());l=s.value,p=s.selection}var u=l!==t.getInputValue();u&&t.setInputValue(l),u&&Io(t.props.onChange)&&t.props.onChange(n),t.setSelection(p.start,p.end)}t.runSaveSelectionLoop()}Io(t.props.onFocus)&&t.props.onFocus(n)},t.onBlur=function(n){var e=t.props.beforeMaskedValueChange,r=t.maskOptions.mask;if(t.stopSaveSelectionLoop(),t.focused=!1,r&&!t.props.alwaysShowMask&&Eo(t.maskOptions,t.value)){var o="";Io(e)&&(o=e({value:o,selection:null},{value:t.value,selection:t.previousSelection},null,t.getBeforeMaskedValueChangeConfig()).value);var i=o!==t.getInputValue();i&&t.setInputValue(o),i&&Io(t.props.onChange)&&t.props.onChange(n)}Io(t.props.onBlur)&&t.props.onBlur(n)},t.onMouseDown=function(n){!t.focused&&document.addEventListener&&(t.mouseDownX=n.clientX,t.mouseDownY=n.clientY,t.mouseDownTime=(new Date).getTime(),document.addEventListener("mouseup",function n(e){if(document.removeEventListener("mouseup",n),t.focused){var r=Math.abs(e.clientX-t.mouseDownX),o=Math.abs(e.clientY-t.mouseDownY),i=Math.max(r,o),a=(new Date).getTime()-t.mouseDownTime;(i<=10&&a<=200||i<=5&&a<=300)&&t.setCursorToEnd()}})),Io(t.props.onMouseDown)&&t.props.onMouseDown(n)},t.onPaste=function(n){Io(t.props.onPaste)&&t.props.onPaste(n),n.defaultPrevented||(t.beforePasteState={value:t.getInputValue(),selection:t.getSelection()},t.setInputValue(""))},t.handleRef=function(n){null==t.props.children&&Io(t.props.inputRef)&&t.props.inputRef(n)};var r=e.alwaysShowMask,o=e.beforeMaskedValueChange,i=e.defaultValue,a=e.value;t.maskOptions=ko(e.mask,e.maskChar,e.formatChars),null==i&&(i=""),null==a&&(a=i);var l=Fo(a);if(t.maskOptions.mask&&(r||l)&&(l=zo(t.maskOptions,l),Io(o))){var d=e.value;null==e.value&&(d=i),l=o({value:l,selection:null},{value:d=Fo(d),selection:null},null,t.getBeforeMaskedValueChangeConfig()).value}return t.value=l,t}var t,r;r=n,(t=e).prototype=Object.create(r.prototype),t.prototype.constructor=t,function(n,e){for(var t=Object.getOwnPropertyNames(e),r=0;r<t.length;r++){var o=t[r],i=Object.getOwnPropertyDescriptor(e,o);i&&i.configurable&&void 0===n[o]&&Object.defineProperty(n,o,i)}}(t,r);var o=e.prototype;return o.componentDidMount=function(){var n,e,t;this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=(n=new RegExp("windows","i"),e=new RegExp("phone","i"),t=navigator.userAgent,n.test(t)&&e.test(t)),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},o.componentDidUpdate=function(){var n=this.previousSelection,e=this.props,t=e.beforeMaskedValueChange,r=e.mask,o=e.maskChar,i=e.formatChars,a=this.maskOptions,l=e.alwaysShowMask||this.isFocused(),d=null!=this.props.value,c=d?Fo(this.props.value):this.value,p=n?n.start:null;if(this.maskOptions=ko(r,o,i),this.maskOptions.mask){!a.mask&&this.isFocused()&&this.runSaveSelectionLoop();var s=this.maskOptions.mask&&this.maskOptions.mask!==a.mask;if(a.mask||d||(c=this.getInputValue()),(s||this.maskOptions.mask&&(c||l))&&(c=zo(this.maskOptions,c)),s){var u=So(this.maskOptions,c);(null===p||u<p)&&(p=Co(this.maskOptions,c)?u:Mo(this.maskOptions,u))}!this.maskOptions.mask||!Eo(this.maskOptions,c)||l||d&&this.props.value||(c="");var m={start:p,end:p};if(Io(t)){var b=t({value:c,selection:m},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());c=b.value,m=b.selection}this.value=c;var f=this.getInputValue()!==this.value;f?(this.setInputValue(this.value),this.forceUpdate()):s&&this.forceUpdate();var h=!1;null!=m.start&&null!=m.end&&(h=!n||n.start!==m.start||n.end!==m.end),(h||f)&&this.setSelection(m.start,m.end)}else a.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},o.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&Po(this.selectionDeferId),this.stopSaveSelectionLoop()},o.render=function(){var n,e=this.props,t=e.mask,r=e.maskChar,o=e.formatChars,i=e.inputRef,a=e.children,l=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e.indexOf(t=i[r])>=0||(o[t]=n[t]);return o}(e,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if("production"!==process.env.NODE_ENV&&ho(!l.maxLength||!ko(t,r,o).mask,"react-input-mask: maxLength property shouldn't be passed to the masked input. It breaks masking and unnecessary because length is limited by the mask length."),a){Io(a)||("production"!==process.env.NODE_ENV?fo(!1,"react-input-mask: children must be a function"):fo(!1));var d=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],c=go({},l);d.forEach(function(n){return delete c[n]}),n=a(c);var p=d.filter(function(e){return null!=n.props[e]&&n.props[e]!==l[e]});p.length&&("production"!==process.env.NODE_ENV?fo(!1,"react-input-mask: the following props should be passed to the react-input-mask's component and should not be altered in children's function: "+p.join(", ")):fo(!1)),"production"!==process.env.NODE_ENV&&ho(!i,"react-input-mask: inputRef is ignored when children is passed, attach ref to the children instead")}else n=bo.createElement("input",go({ref:this.handleRef},l));var s={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(l.disabled||l.readOnly||(s.onChange=this.onChange,s.onPaste=this.onPaste,s.onMouseDown=this.onMouseDown),null!=l.value&&(s.value=this.value)),n=bo.cloneElement(n,s)},e}(bo.Component),To=fn(function(n){n.exports="production"===process.env.NODE_ENV?co:Ao}),jo=["labelColor","label","brand","otherFormatDate"];h("pt-BR",w);var No,Lo,Vo,Ro,qo,Uo=function(e){var t=e.labelColor,r=e.label,o=e.brand,i=e.otherFormatDate,a=v(e,jo),l=n.forwardRef(function(e,t){return n.createElement(To,{ref:t,mask:"99/99/9999",onClick:e.onClick,value:e.value,readOnly:a.readOnly,onChange:e.onChange,placeholder:a.placeholderText})});return n.createElement(Rr,{brand:o,labelColor:t},r&&n.createElement("span",null,r),n.createElement("div",null,n.createElement(f,Object.assign({},a,{locale:"pt-BR",customInput:i?void 0:n.createElement(l,{onClick:a.onCalendarOpen,value:a.value,onChange:a.onChange}),dateFormat:i||"dd/MM/yyyy",readOnly:!1,onChangeRaw:function(n){return a.readOnly?n.preventDefault():null}}))))},$o=r.div(No||(No=k(["\n    font-family: MontSerrat !important;\n    display: flex;\n    margin-bottom: 10px;\n"]))),Ho=r.span(Lo||(Lo=k(["\n    font-family: MontSerrat !important;\n    flex: 1;\n    text-align: left;\n    color: ",";\n    font-weight: bold;\n"])),"#707070"),Wo=r.span(Vo||(Vo=k(["\n    flex: 1;\n    text-align: right;\n    color: ",";\n"])),"#ACACAC"),Xo=r.div(Ro||(Ro=k(["\n    margin-bottom: ",";\n\n    /*!\n * # Semantic UI 2.4.1 - Table\n * http://github.com/semantic-org/semantic-ui/\n *\n *\n * Released under the MIT license\n * http://opensource.org/licenses/MIT\n *\n */\n\n    /*******************************\n             Table\n*******************************/\n\n    /* Prototype */\n    .ui.table {\n        width: 100%;\n        background: #ffffff;\n        margin: 1em 0em;\n        border: none !important;\n        -webkit-box-shadow: none;\n        box-shadow: none;\n        border-radius: 0.28571429rem;\n        text-align: left;\n        color: #707070;\n        border-collapse: separate;\n        border-spacing: 0px;\n    }\n    .ui.table:first-child {\n        margin-top: 0em;\n    }\n    .ui.table:last-child {\n        margin-bottom: 0em;\n    }\n\n    /*******************************\n               Parts\n  *******************************/\n\n    /* Table Content */\n    .ui.table th,\n    .ui.table td {\n        -webkit-transition: background 0.1s ease, color 0.1s ease;\n        transition: background 0.1s ease, color 0.1s ease;\n    }\n\n    /* Headers */\n    .ui.table thead {\n        -webkit-box-shadow: none;\n        box-shadow: none;\n    }\n    .ui.table thead th {\n        cursor: auto;\n        background: none !important;\n        text-align: inherit;\n        color: #9b4dee !important;\n        padding: 0.92857143em 0.78571429em;\n        vertical-align: inherit;\n        font-style: none;\n        font-weight: bold;\n        text-transform: none;\n        border-bottom: 1px solid rgba(34, 36, 38, 0.1);\n        border-left: none;\n    }\n    .ui.table thead tr > th:first-child {\n        border-left: none;\n    }\n    .ui.table thead tr:first-child > th:first-child {\n        border-radius: 0.28571429rem 0em 0em 0em;\n    }\n    .ui.table thead tr:first-child > th:last-child {\n        border-radius: 0em 0.28571429rem 0em 0em;\n    }\n    .ui.table thead tr:first-child > th:only-child {\n        border-radius: 0.28571429rem 0.28571429rem 0em 0em;\n    }\n\n    /* Footer */\n    .ui.table tfoot {\n        -webkit-box-shadow: none;\n        box-shadow: none;\n        margin-top: 20px;\n    }\n    .ui.table tfoot th {\n        cursor: auto;\n        border-top: 1px solid rgba(34, 36, 38, 0.15);\n        background: #f9fafb;\n        text-align: inherit;\n        color: rgba(0, 0, 0, 0.87);\n        padding: 0.78571429em 0.78571429em;\n        vertical-align: middle;\n        font-style: normal;\n        font-weight: normal;\n        text-transform: none;\n    }\n    .ui.table tfoot tr > th:first-child {\n        border-left: none;\n    }\n    .ui.table tfoot tr:first-child > th:first-child {\n        border-radius: 0em 0em 0em 0.28571429rem;\n    }\n    .ui.table tfoot tr:first-child > th:last-child {\n        border-radius: 0em 0em 0.28571429rem 0em;\n    }\n    .ui.table tfoot tr:first-child > th:only-child {\n        border-radius: 0em 0em 0.28571429rem 0.28571429rem;\n    }\n\n    /* Table Row */\n    .ui.table tr td {\n        border-top: 1px solid rgba(34, 36, 38, 0.1);\n    }\n    .ui.table tr:first-child td {\n        border-top: none;\n    }\n\n    /* Repeated tbody */\n    .ui.table tbody + tbody tr:first-child td {\n        border-top: 1px solid rgba(34, 36, 38, 0.1);\n    }\n\n    /* Table Cells */\n    .ui.table td {\n        padding: 0.78571429em 0.78571429em;\n        text-align: inherit;\n    }\n\n    /* Icons */\n    .ui.table > .icon {\n        vertical-align: baseline;\n    }\n    .ui.table > .icon:only-child {\n        margin: 0em;\n    }\n\n    /* Table Segment */\n    .ui.table.segment {\n        padding: 0em;\n    }\n    .ui.table.segment:after {\n        display: none;\n    }\n    .ui.table.segment.stacked:after {\n        display: block;\n    }\n\n    /* Responsive */\n    @media only screen and (max-width: 767px) {\n        .ui.table:not(.unstackable) {\n            width: 100%;\n        }\n        .ui.table:not(.unstackable) tbody,\n        .ui.table:not(.unstackable) tr,\n        .ui.table:not(.unstackable) tr > th,\n        .ui.table:not(.unstackable) tr > td {\n            width: auto !important;\n            display: block !important;\n        }\n        .ui.table:not(.unstackable) {\n            padding: 0em;\n        }\n        .ui.table:not(.unstackable) thead {\n            display: block;\n        }\n        .ui.table:not(.unstackable) tfoot {\n            display: block;\n        }\n        .ui.table:not(.unstackable) tr {\n            padding-top: 1em;\n            padding-bottom: 1em;\n            -webkit-box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important;\n            box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important;\n        }\n        .ui.table:not(.unstackable) tr > th,\n        .ui.table:not(.unstackable) tr > td {\n            background: none;\n            border: none !important;\n            padding: 0.25em 0.75em !important;\n            -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n        }\n        .ui.table:not(.unstackable) th:first-child,\n        .ui.table:not(.unstackable) td:first-child {\n            font-weight: bold;\n        }\n\n        /* Definition Table */\n        .ui.definition.table:not(.unstackable) thead th:first-child {\n            -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n        }\n    }\n\n    /*******************************\n              Coupling\n  *******************************/\n\n    /* UI Image */\n    .ui.table th .image,\n    .ui.table th .image img,\n    .ui.table td .image,\n    .ui.table td .image img {\n        max-width: none;\n    }\n\n    /*******************************\n               Types\n  *******************************/\n\n    /*--------------\n      Complex\n  ---------------*/\n\n    .ui.structured.table {\n        border-collapse: collapse;\n    }\n    .ui.structured.table thead th {\n        border-left: none;\n        border-right: none;\n    }\n    .ui.structured.sortable.table thead th {\n        border-left: 1px solid rgba(34, 36, 38, 0.15);\n        border-right: 1px solid rgba(34, 36, 38, 0.15);\n    }\n    .ui.structured.basic.table th {\n        border-left: none;\n        border-right: none;\n    }\n    .ui.structured.celled.table tr th,\n    .ui.structured.celled.table tr td {\n        border-left: 1px solid rgba(34, 36, 38, 0.1);\n        border-right: 1px solid rgba(34, 36, 38, 0.1);\n    }\n\n    /*--------------\n     Definition\n  ---------------*/\n\n    .ui.definition.table thead:not(.full-width) th:first-child {\n        pointer-events: none;\n        background: transparent;\n        font-weight: normal;\n        color: rgba(0, 0, 0, 0.4);\n        -webkit-box-shadow: -1px -1px 0px 1px #ffffff;\n        box-shadow: -1px -1px 0px 1px #ffffff;\n    }\n    .ui.definition.table tfoot:not(.full-width) th:first-child {\n        pointer-events: none;\n        background: transparent;\n        font-weight: rgba(0, 0, 0, 0.4);\n        color: normal;\n        -webkit-box-shadow: 1px 1px 0px 1px #ffffff;\n        box-shadow: 1px 1px 0px 1px #ffffff;\n    }\n\n    /* Remove Border */\n    .ui.celled.definition.table thead:not(.full-width) th:first-child {\n        -webkit-box-shadow: 0px -1px 0px 1px #ffffff;\n        box-shadow: 0px -1px 0px 1px #ffffff;\n    }\n    .ui.celled.definition.table tfoot:not(.full-width) th:first-child {\n        -webkit-box-shadow: 0px 1px 0px 1px #ffffff;\n        box-shadow: 0px 1px 0px 1px #ffffff;\n    }\n\n    /* Highlight Defining Column */\n    .ui.definition.table tr td:first-child:not(.ignored),\n    .ui.definition.table tr td.definition {\n        background: none;\n        font-weight: bold;\n        color: ",';\n        text-transform: "";\n        -webkit-box-shadow: "";\n        box-shadow: "";\n        text-align: "";\n        font-size: 1em;\n        padding-left: "";\n        padding-right: "";\n    }\n\n    /* Fix 2nd Column */\n    .ui.definition.table thead:not(.full-width) th:nth-child(2) {\n        border-left: 1px solid rgba(34, 36, 38, 0.15);\n    }\n    .ui.definition.table tfoot:not(.full-width) th:nth-child(2) {\n        border-left: 1px solid rgba(34, 36, 38, 0.15);\n    }\n    .ui.definition.table td:nth-child(2) {\n        border-left: 1px solid rgba(34, 36, 38, 0.15);\n    }\n\n    /*******************************\n               States\n  *******************************/\n\n    /*--------------\n      Positive\n  ---------------*/\n\n    .ui.table tr.positive,\n    .ui.table td.positive {\n        -webkit-box-shadow: 0px 0px 0px #a3c293 inset;\n        box-shadow: 0px 0px 0px #a3c293 inset;\n    }\n    .ui.table tr.positive,\n    .ui.table td.positive {\n        background: #fcfff5 !important;\n        color: #2c662d !important;\n    }\n\n    /*--------------\n       Negative\n  ---------------*/\n\n    .ui.table tr.negative,\n    .ui.table td.negative {\n        -webkit-box-shadow: 0px 0px 0px #e0b4b4 inset;\n        box-shadow: 0px 0px 0px #e0b4b4 inset;\n    }\n    .ui.table tr.negative,\n    .ui.table td.negative {\n        background: #fff6f6 !important;\n        color: #9f3a38 !important;\n    }\n\n    /*--------------\n        Error\n  ---------------*/\n\n    .ui.table tr.error,\n    .ui.table td.error {\n        -webkit-box-shadow: 0px 0px 0px #e0b4b4 inset;\n        box-shadow: 0px 0px 0px #e0b4b4 inset;\n    }\n    .ui.table tr.error,\n    .ui.table td.error {\n        background: #fff6f6 !important;\n        color: #9f3a38 !important;\n    }\n\n    /*--------------\n       Warning\n  ---------------*/\n\n    .ui.table tr.warning,\n    .ui.table td.warning {\n        -webkit-box-shadow: 0px 0px 0px #c9ba9b inset;\n        box-shadow: 0px 0px 0px #c9ba9b inset;\n    }\n    .ui.table tr.warning,\n    .ui.table td.warning {\n        background: #fffaf3 !important;\n        color: #573a08 !important;\n    }\n\n    /*--------------\n       Active\n  ---------------*/\n\n    .ui.table tr.active,\n    .ui.table td.active {\n        -webkit-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.87) inset;\n        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.87) inset;\n    }\n    .ui.table tr.active,\n    .ui.table td.active {\n        background: #e0e0e0 !important;\n        color: rgba(0, 0, 0, 0.87) !important;\n    }\n\n    /*--------------\n       Disabled\n  ---------------*/\n\n    .ui.table tr.disabled td,\n    .ui.table tr td.disabled,\n    .ui.table tr.disabled:hover,\n    .ui.table tr:hover td.disabled {\n        pointer-events: none;\n        color: rgba(40, 40, 40, 0.3);\n    }\n\n    /*******************************\n            Variations\n  *******************************/\n\n    /*--------------\n      Stackable\n  ---------------*/\n\n    @media only screen and (max-width: 991px) {\n        .ui[class*="tablet stackable"].table,\n        .ui[class*="tablet stackable"].table tbody,\n        .ui[class*="tablet stackable"].table tr,\n        .ui[class*="tablet stackable"].table tr > th,\n        .ui[class*="tablet stackable"].table tr > td {\n            width: 100% !important;\n            display: block !important;\n        }\n        .ui[class*="tablet stackable"].table {\n            padding: 0em;\n        }\n        .ui[class*="tablet stackable"].table thead {\n            display: block;\n        }\n        .ui[class*="tablet stackable"].table tfoot {\n            display: block;\n        }\n        .ui[class*="tablet stackable"].table tr {\n            padding-top: 1em;\n            padding-bottom: 1em;\n            -webkit-box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important;\n            box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important;\n        }\n        .ui[class*="tablet stackable"].table tr > th,\n        .ui[class*="tablet stackable"].table tr > td {\n            background: none;\n            border: none !important;\n            padding: 0.25em 0.75em;\n            -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n        }\n\n        /* Definition Table */\n        .ui.definition[class*="tablet stackable"].table thead th:first-child {\n            -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n        }\n    }\n\n    /*--------------\n   Text Alignment\n  ---------------*/\n\n    .ui.table[class*="left aligned"],\n    .ui.table [class*="left aligned"] {\n        text-align: left;\n    }\n    .ui.table[class*="center aligned"],\n    .ui.table [class*="center aligned"] {\n        text-align: center;\n    }\n    .ui.table[class*="right aligned"],\n    .ui.table [class*="right aligned"] {\n        text-align: right;\n    }\n\n    /*------------------\n   Vertical Alignment\n  ------------------*/\n\n    .ui.table[class*="top aligned"],\n    .ui.table [class*="top aligned"] {\n        vertical-align: top;\n    }\n    .ui.table[class*="middle aligned"],\n    .ui.table [class*="middle aligned"] {\n        vertical-align: middle;\n    }\n    .ui.table[class*="bottom aligned"],\n    .ui.table [class*="bottom aligned"] {\n        vertical-align: bottom;\n    }\n\n    /*--------------\n      Collapsing\n  ---------------*/\n\n    .ui.table th.collapsing,\n    .ui.table td.collapsing {\n        width: 1px;\n        white-space: nowrap;\n    }\n\n    /*--------------\n       Fixed\n  ---------------*/\n\n    .ui.fixed.table {\n        table-layout: fixed;\n    }\n    .ui.fixed.table th,\n    .ui.fixed.table td {\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n\n    /*--------------\n     Selectable\n  ---------------*/\n\n    .ui.selectable.table tbody tr:hover,\n    .ui.table tbody tr td.selectable:hover {\n        background: rgba(0, 0, 0, 0.05) !important;\n        color: rgba(0, 0, 0, 0.95) !important;\n    }\n    .ui.selectable.inverted.table tbody tr:hover,\n    .ui.inverted.table tbody tr td.selectable:hover {\n        background: rgba(255, 255, 255, 0.08) !important;\n        color: #ffffff !important;\n    }\n\n    /* Selectable Cell Link */\n    .ui.table tbody tr td.selectable {\n        padding: 0em;\n    }\n    .ui.table tbody tr td.selectable > a:not(.ui) {\n        display: block;\n        color: inherit;\n        padding: 0.78571429em 0.78571429em;\n    }\n\n    /* Other States */\n    .ui.selectable.table tr.error:hover,\n    .ui.table tr td.selectable.error:hover,\n    .ui.selectable.table tr:hover td.error {\n        background: #ffe7e7 !important;\n        color: #943634 !important;\n    }\n    .ui.selectable.table tr.warning:hover,\n    .ui.table tr td.selectable.warning:hover,\n    .ui.selectable.table tr:hover td.warning {\n        background: #fff4e4 !important;\n        color: #493107 !important;\n    }\n    .ui.selectable.table tr.active:hover,\n    .ui.table tr td.selectable.active:hover,\n    .ui.selectable.table tr:hover td.active {\n        background: #e0e0e0 !important;\n        color: rgba(0, 0, 0, 0.87) !important;\n    }\n    .ui.selectable.table tr.positive:hover,\n    .ui.table tr td.selectable.positive:hover,\n    .ui.selectable.table tr:hover td.positive {\n        background: #f7ffe6 !important;\n        color: #275b28 !important;\n    }\n    .ui.selectable.table tr.negative:hover,\n    .ui.table tr td.selectable.negative:hover,\n    .ui.selectable.table tr:hover td.negative {\n        background: #ffe7e7 !important;\n        color: #943634 !important;\n    }\n\n    /*-------------------\n        Attached\n  --------------------*/\n\n    /* Middle */\n    .ui.attached.table {\n        top: 0px;\n        bottom: 0px;\n        border-radius: 0px;\n        margin: 0em -1px;\n        width: calc(100% - (-1px * 2));\n        max-width: calc(100% - (-1px * 2));\n        -webkit-box-shadow: none;\n        box-shadow: none;\n        border: 1px solid #d4d4d5;\n    }\n    .ui.attached + .ui.attached.table:not(.top) {\n        border-top: none;\n    }\n\n    /* Top */\n    .ui[class*="top attached"].table {\n        bottom: 0px;\n        margin-bottom: 0em;\n        top: 0px;\n        margin-top: 1em;\n        border-radius: 0.28571429rem 0.28571429rem 0em 0em;\n    }\n    .ui.table[class*="top attached"]:first-child {\n        margin-top: 0em;\n    }\n\n    /* Bottom */\n    .ui[class*="bottom attached"].table {\n        bottom: 0px;\n        margin-top: 0em;\n        top: 0px;\n        margin-bottom: 1em;\n        -webkit-box-shadow: none, none;\n        box-shadow: none, none;\n        border-radius: 0em 0em 0.28571429rem 0.28571429rem;\n    }\n    .ui[class*="bottom attached"].table:last-child {\n        margin-bottom: 0em;\n    }\n\n    /*--------------\n       Striped\n  ---------------*/\n\n    /* Table Striping */\n    .ui.striped.table > tr:nth-child(2n),\n    .ui.striped.table tbody tr:nth-child(2n) {\n        background-color: rgba(0, 0, 50, 0.02);\n    }\n\n    /* Stripes */\n    .ui.inverted.striped.table > tr:nth-child(2n),\n    .ui.inverted.striped.table tbody tr:nth-child(2n) {\n        background-color: rgba(255, 255, 255, 0.05);\n    }\n\n    /* Allow striped active hover */\n    .ui.striped.selectable.selectable.selectable.table tbody tr.active:hover {\n        background: #efefef !important;\n        color: rgba(0, 0, 0, 0.95) !important;\n    }\n\n    /*--------------\n     Single Line\n  ---------------*/\n\n    .ui.table[class*="single line"],\n    .ui.table [class*="single line"] {\n        white-space: nowrap;\n    }\n    .ui.table[class*="single line"],\n    .ui.table [class*="single line"] {\n        white-space: nowrap;\n    }\n\n    /*-------------------\n         Colors\n  --------------------*/\n\n    /* Red */\n    .ui.red.table {\n        border-top: 0.2em solid #db2828;\n    }\n    .ui.inverted.red.table {\n        background-color: #db2828 !important;\n        color: #ffffff !important;\n    }\n\n    /* Orange */\n    .ui.orange.table {\n        border-top: 0.2em solid #f2711c;\n    }\n    .ui.inverted.orange.table {\n        background-color: #f2711c !important;\n        color: #ffffff !important;\n    }\n\n    /* Yellow */\n    .ui.yellow.table {\n        border-top: 0.2em solid #fbbd08;\n    }\n    .ui.inverted.yellow.table {\n        background-color: #fbbd08 !important;\n        color: #ffffff !important;\n    }\n\n    /* Olive */\n    .ui.olive.table {\n        border-top: 0.2em solid #b5cc18;\n    }\n    .ui.inverted.olive.table {\n        background-color: #b5cc18 !important;\n        color: #ffffff !important;\n    }\n\n    /* Green */\n    .ui.green.table {\n        border-top: 0.2em solid #21ba45;\n    }\n    .ui.inverted.green.table {\n        background-color: #21ba45 !important;\n        color: #ffffff !important;\n    }\n\n    /* Teal */\n    .ui.teal.table {\n        border-top: 0.2em solid #00b5ad;\n    }\n    .ui.inverted.teal.table {\n        background-color: #00b5ad !important;\n        color: #ffffff !important;\n    }\n\n    /* Blue */\n    .ui.blue.table {\n        border-top: 0.2em solid #2185d0;\n    }\n    .ui.inverted.blue.table {\n        background-color: #2185d0 !important;\n        color: #ffffff !important;\n    }\n\n    /* Violet */\n    .ui.violet.table {\n        border-top: 0.2em solid #6435c9;\n    }\n    .ui.inverted.violet.table {\n        background-color: #6435c9 !important;\n        color: #ffffff !important;\n    }\n\n    /* Purple */\n    .ui.purple.table {\n        border-top: 0.2em solid #a333c8;\n    }\n    .ui.inverted.purple.table {\n        background-color: #a333c8 !important;\n        color: #ffffff !important;\n    }\n\n    /* Pink */\n    .ui.pink.table {\n        border-top: 0.2em solid #e03997;\n    }\n    .ui.inverted.pink.table {\n        background-color: #e03997 !important;\n        color: #ffffff !important;\n    }\n\n    /* Brown */\n    .ui.brown.table {\n        border-top: 0.2em solid #a5673f;\n    }\n    .ui.inverted.brown.table {\n        background-color: #a5673f !important;\n        color: #ffffff !important;\n    }\n\n    /* Grey */\n    .ui.grey.table {\n        border-top: 0.2em solid #767676;\n    }\n    .ui.inverted.grey.table {\n        background-color: #767676 !important;\n        color: #ffffff !important;\n    }\n\n    /* Black */\n    .ui.black.table {\n        border-top: 0.2em solid #1b1c1d;\n    }\n    .ui.inverted.black.table {\n        background-color: #1b1c1d !important;\n        color: #ffffff !important;\n    }\n\n    /*--------------\n    Column Count\n  ---------------*/\n\n    /* Grid Based */\n    .ui.one.column.table td {\n        width: 100%;\n    }\n    .ui.two.column.table td {\n        width: 50%;\n    }\n    .ui.three.column.table td {\n        width: 33.33333333%;\n    }\n    .ui.four.column.table td {\n        width: 25%;\n    }\n    .ui.five.column.table td {\n        width: 20%;\n    }\n    .ui.six.column.table td {\n        width: 16.66666667%;\n    }\n    .ui.seven.column.table td {\n        width: 14.28571429%;\n    }\n    .ui.eight.column.table td {\n        width: 12.5%;\n    }\n    .ui.nine.column.table td {\n        width: 11.11111111%;\n    }\n    .ui.ten.column.table td {\n        width: 10%;\n    }\n    .ui.eleven.column.table td {\n        width: 9.09090909%;\n    }\n    .ui.twelve.column.table td {\n        width: 8.33333333%;\n    }\n    .ui.thirteen.column.table td {\n        width: 7.69230769%;\n    }\n    .ui.fourteen.column.table td {\n        width: 7.14285714%;\n    }\n    .ui.fifteen.column.table td {\n        width: 6.66666667%;\n    }\n    .ui.sixteen.column.table td {\n        width: 6.25%;\n    }\n\n    /* Column Width */\n    .ui.table th.one.wide,\n    .ui.table td.one.wide {\n        width: 6.25%;\n    }\n    .ui.table th.two.wide,\n    .ui.table td.two.wide {\n        width: 12.5%;\n    }\n    .ui.table th.three.wide,\n    .ui.table td.three.wide {\n        width: 18.75%;\n    }\n    .ui.table th.four.wide,\n    .ui.table td.four.wide {\n        width: 25%;\n    }\n    .ui.table th.five.wide,\n    .ui.table td.five.wide {\n        width: 31.25%;\n    }\n    .ui.table th.six.wide,\n    .ui.table td.six.wide {\n        width: 37.5%;\n    }\n    .ui.table th.seven.wide,\n    .ui.table td.seven.wide {\n        width: 43.75%;\n    }\n    .ui.table th.eight.wide,\n    .ui.table td.eight.wide {\n        width: 50%;\n    }\n    .ui.table th.nine.wide,\n    .ui.table td.nine.wide {\n        width: 56.25%;\n    }\n    .ui.table th.ten.wide,\n    .ui.table td.ten.wide {\n        width: 62.5%;\n    }\n    .ui.table th.eleven.wide,\n    .ui.table td.eleven.wide {\n        width: 68.75%;\n    }\n    .ui.table th.twelve.wide,\n    .ui.table td.twelve.wide {\n        width: 75%;\n    }\n    .ui.table th.thirteen.wide,\n    .ui.table td.thirteen.wide {\n        width: 81.25%;\n    }\n    .ui.table th.fourteen.wide,\n    .ui.table td.fourteen.wide {\n        width: 87.5%;\n    }\n    .ui.table th.fifteen.wide,\n    .ui.table td.fifteen.wide {\n        width: 93.75%;\n    }\n    .ui.table th.sixteen.wide,\n    .ui.table td.sixteen.wide {\n        width: 100%;\n    }\n\n    /*--------------\n      Sortable\n  ---------------*/\n\n    .ui.sortable.table thead th {\n        cursor: pointer;\n        white-space: nowrap;\n        border-left: 1px solid rgba(34, 36, 38, 0.15);\n        color: rgba(0, 0, 0, 0.87);\n    }\n    .ui.sortable.table thead th:first-child {\n        border-left: none;\n    }\n    .ui.sortable.table thead th.sorted,\n    .ui.sortable.table thead th.sorted:hover {\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n    }\n    .ui.sortable.table thead th:after {\n        display: none;\n        font-style: normal;\n        font-weight: normal;\n        text-decoration: inherit;\n        content: "";\n        height: 1em;\n        width: auto;\n        opacity: 0.8;\n        margin: 0em 0em 0em 0.5em;\n        font-family: "Icons";\n    }\n    .ui.sortable.table thead th.ascending:after {\n        content: "\f0d8";\n    }\n    .ui.sortable.table thead th.descending:after {\n        content: "\f0d7";\n    }\n\n    /* Hover */\n    .ui.sortable.table th.disabled:hover {\n        cursor: auto;\n        color: rgba(40, 40, 40, 0.3);\n    }\n    .ui.sortable.table thead th:hover {\n        background: rgba(0, 0, 0, 0.05);\n        color: rgba(0, 0, 0, 0.8);\n    }\n\n    /* Sorted */\n    .ui.sortable.table thead th.sorted {\n        background: rgba(0, 0, 0, 0.05);\n        color: rgba(0, 0, 0, 0.95);\n    }\n    .ui.sortable.table thead th.sorted:after {\n        display: inline-block;\n    }\n\n    /* Sorted Hover */\n    .ui.sortable.table thead th.sorted:hover {\n        background: rgba(0, 0, 0, 0.05);\n        color: rgba(0, 0, 0, 0.95);\n    }\n\n    /* Inverted */\n    .ui.inverted.sortable.table thead th.sorted {\n        background: rgba(255, 255, 255, 0.15) -webkit-gradient(linear, left top, left\n                    bottom, from(transparent), to(rgba(0, 0, 0, 0.05)));\n        background: rgba(255, 255, 255, 0.15) -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.05));\n        background: rgba(255, 255, 255, 0.15)\n            linear-gradient(transparent, rgba(0, 0, 0, 0.05));\n        color: #ffffff;\n    }\n    .ui.inverted.sortable.table thead th:hover {\n        background: rgba(255, 255, 255, 0.08) -webkit-gradient(linear, left top, left\n                    bottom, from(transparent), to(rgba(0, 0, 0, 0.05)));\n        background: rgba(255, 255, 255, 0.08) -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.05));\n        background: rgba(255, 255, 255, 0.08)\n            linear-gradient(transparent, rgba(0, 0, 0, 0.05));\n        color: #ffffff;\n    }\n    .ui.inverted.sortable.table thead th {\n        border-left-color: transparent;\n        border-right-color: transparent;\n    }\n\n    /*--------------\n      Inverted\n  ---------------*/\n\n    /* Text Color */\n    .ui.inverted.table {\n        background: #333333;\n        color: rgba(255, 255, 255, 0.9);\n        border: none;\n    }\n    .ui.inverted.table th {\n        background-color: rgba(0, 0, 0, 0.15);\n        border-color: rgba(255, 255, 255, 0.1) !important;\n        color: rgba(255, 255, 255, 0.9) !important;\n    }\n    .ui.inverted.table tr td {\n        border-color: rgba(255, 255, 255, 0.1) !important;\n    }\n    .ui.inverted.table tr.disabled td,\n    .ui.inverted.table tr td.disabled,\n    .ui.inverted.table tr.disabled:hover td,\n    .ui.inverted.table tr:hover td.disabled {\n        pointer-events: none;\n        color: rgba(225, 225, 225, 0.3);\n    }\n\n    /* Definition */\n    .ui.inverted.definition.table tfoot:not(.full-width) th:first-child,\n    .ui.inverted.definition.table thead:not(.full-width) th:first-child {\n        background: #ffffff;\n    }\n    .ui.inverted.definition.table tr td:first-child {\n        background: rgba(255, 255, 255, 0.02);\n        color: #ffffff;\n    }\n\n    /*--------------\n     Collapsing\n  ---------------*/\n\n    .ui.collapsing.table {\n        width: auto;\n    }\n\n    /*--------------\n        Basic\n  ---------------*/\n\n    .ui.basic.table {\n        background: transparent;\n        border: 1px solid rgba(34, 36, 38, 0.15);\n        -webkit-box-shadow: none;\n        box-shadow: none;\n    }\n    .ui.basic.table thead,\n    .ui.basic.table tfoot {\n        -webkit-box-shadow: none;\n        box-shadow: none;\n    }\n    .ui.basic.table th {\n        background: transparent;\n        border-left: none;\n    }\n    .ui.basic.table tbody tr {\n        border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    }\n    .ui.basic.table td {\n        background: transparent;\n    }\n    .ui.basic.striped.table tbody tr:nth-child(2n) {\n        background-color: rgba(0, 0, 0, 0.05) !important;\n    }\n\n    /* Very Basic */\n    .ui[class*="very basic"].table {\n        border: none;\n    }\n    .ui[class*="very basic"].table:not(.sortable):not(.striped) th,\n    .ui[class*="very basic"].table:not(.sortable):not(.striped) td {\n        padding: "";\n    }\n    .ui[class*="very basic"].table:not(.sortable):not(.striped) th:first-child,\n    .ui[class*="very basic"].table:not(.sortable):not(.striped) td:first-child {\n        padding-left: 0em;\n    }\n    .ui[class*="very basic"].table:not(.sortable):not(.striped) th:last-child,\n    .ui[class*="very basic"].table:not(.sortable):not(.striped) td:last-child {\n        padding-right: 0em;\n    }\n    .ui[class*="very basic"].table:not(.sortable):not(.striped)\n        thead\n        tr:first-child\n        th {\n        padding-top: 0em;\n    }\n\n    /*--------------\n       Celled\n  ---------------*/\n\n    .ui.celled.table tr th,\n    .ui.celled.table tr td {\n        border-left: 1px solid rgba(34, 36, 38, 0.1);\n    }\n    .ui.celled.table tr th:first-child,\n    .ui.celled.table tr td:first-child {\n        border-left: none;\n    }\n\n    /*--------------\n       Padded\n  ---------------*/\n\n    .ui.padded.table th {\n        padding-left: 1em;\n        padding-right: 1em;\n    }\n    .ui.padded.table th,\n    .ui.padded.table td {\n        padding: 1em 1em;\n    }\n\n    /* Very */\n    .ui[class*="very padded"].table th {\n        padding-left: 1.5em;\n        padding-right: 1.5em;\n    }\n    .ui[class*="very padded"].table td {\n        padding: 1.5em 1.5em;\n    }\n\n    /*--------------\n       Compact\n  ---------------*/\n\n    .ui.compact.table th {\n        padding-left: 0.7em;\n        padding-right: 0.7em;\n    }\n    .ui.compact.table td {\n        padding: 0.5em 0.7em;\n    }\n\n    /* Very */\n    .ui[class*="very compact"].table th {\n        padding-left: 0.6em;\n        padding-right: 0.6em;\n    }\n    .ui[class*="very compact"].table td {\n        padding: 0.4em 0.6em;\n    }\n\n    /*--------------\n        Sizes\n  ---------------*/\n\n    /* Small */\n    .ui.small.table {\n        font-size: 0.9em;\n    }\n\n    /* Standard */\n    .ui.table {\n        font-size: 1em;\n    }\n\n    /* Large */\n    .ui.large.table {\n        font-size: 1.1em;\n    }\n\n    /*******************************\n           Site Overrides\n  *******************************/\n'],["\n    margin-bottom: ",";\n\n    /*!\n * # Semantic UI 2.4.1 - Table\n * http://github.com/semantic-org/semantic-ui/\n *\n *\n * Released under the MIT license\n * http://opensource.org/licenses/MIT\n *\n */\n\n    /*******************************\n             Table\n*******************************/\n\n    /* Prototype */\n    .ui.table {\n        width: 100%;\n        background: #ffffff;\n        margin: 1em 0em;\n        border: none !important;\n        -webkit-box-shadow: none;\n        box-shadow: none;\n        border-radius: 0.28571429rem;\n        text-align: left;\n        color: #707070;\n        border-collapse: separate;\n        border-spacing: 0px;\n    }\n    .ui.table:first-child {\n        margin-top: 0em;\n    }\n    .ui.table:last-child {\n        margin-bottom: 0em;\n    }\n\n    /*******************************\n               Parts\n  *******************************/\n\n    /* Table Content */\n    .ui.table th,\n    .ui.table td {\n        -webkit-transition: background 0.1s ease, color 0.1s ease;\n        transition: background 0.1s ease, color 0.1s ease;\n    }\n\n    /* Headers */\n    .ui.table thead {\n        -webkit-box-shadow: none;\n        box-shadow: none;\n    }\n    .ui.table thead th {\n        cursor: auto;\n        background: none !important;\n        text-align: inherit;\n        color: #9b4dee !important;\n        padding: 0.92857143em 0.78571429em;\n        vertical-align: inherit;\n        font-style: none;\n        font-weight: bold;\n        text-transform: none;\n        border-bottom: 1px solid rgba(34, 36, 38, 0.1);\n        border-left: none;\n    }\n    .ui.table thead tr > th:first-child {\n        border-left: none;\n    }\n    .ui.table thead tr:first-child > th:first-child {\n        border-radius: 0.28571429rem 0em 0em 0em;\n    }\n    .ui.table thead tr:first-child > th:last-child {\n        border-radius: 0em 0.28571429rem 0em 0em;\n    }\n    .ui.table thead tr:first-child > th:only-child {\n        border-radius: 0.28571429rem 0.28571429rem 0em 0em;\n    }\n\n    /* Footer */\n    .ui.table tfoot {\n        -webkit-box-shadow: none;\n        box-shadow: none;\n        margin-top: 20px;\n    }\n    .ui.table tfoot th {\n        cursor: auto;\n        border-top: 1px solid rgba(34, 36, 38, 0.15);\n        background: #f9fafb;\n        text-align: inherit;\n        color: rgba(0, 0, 0, 0.87);\n        padding: 0.78571429em 0.78571429em;\n        vertical-align: middle;\n        font-style: normal;\n        font-weight: normal;\n        text-transform: none;\n    }\n    .ui.table tfoot tr > th:first-child {\n        border-left: none;\n    }\n    .ui.table tfoot tr:first-child > th:first-child {\n        border-radius: 0em 0em 0em 0.28571429rem;\n    }\n    .ui.table tfoot tr:first-child > th:last-child {\n        border-radius: 0em 0em 0.28571429rem 0em;\n    }\n    .ui.table tfoot tr:first-child > th:only-child {\n        border-radius: 0em 0em 0.28571429rem 0.28571429rem;\n    }\n\n    /* Table Row */\n    .ui.table tr td {\n        border-top: 1px solid rgba(34, 36, 38, 0.1);\n    }\n    .ui.table tr:first-child td {\n        border-top: none;\n    }\n\n    /* Repeated tbody */\n    .ui.table tbody + tbody tr:first-child td {\n        border-top: 1px solid rgba(34, 36, 38, 0.1);\n    }\n\n    /* Table Cells */\n    .ui.table td {\n        padding: 0.78571429em 0.78571429em;\n        text-align: inherit;\n    }\n\n    /* Icons */\n    .ui.table > .icon {\n        vertical-align: baseline;\n    }\n    .ui.table > .icon:only-child {\n        margin: 0em;\n    }\n\n    /* Table Segment */\n    .ui.table.segment {\n        padding: 0em;\n    }\n    .ui.table.segment:after {\n        display: none;\n    }\n    .ui.table.segment.stacked:after {\n        display: block;\n    }\n\n    /* Responsive */\n    @media only screen and (max-width: 767px) {\n        .ui.table:not(.unstackable) {\n            width: 100%;\n        }\n        .ui.table:not(.unstackable) tbody,\n        .ui.table:not(.unstackable) tr,\n        .ui.table:not(.unstackable) tr > th,\n        .ui.table:not(.unstackable) tr > td {\n            width: auto !important;\n            display: block !important;\n        }\n        .ui.table:not(.unstackable) {\n            padding: 0em;\n        }\n        .ui.table:not(.unstackable) thead {\n            display: block;\n        }\n        .ui.table:not(.unstackable) tfoot {\n            display: block;\n        }\n        .ui.table:not(.unstackable) tr {\n            padding-top: 1em;\n            padding-bottom: 1em;\n            -webkit-box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important;\n            box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important;\n        }\n        .ui.table:not(.unstackable) tr > th,\n        .ui.table:not(.unstackable) tr > td {\n            background: none;\n            border: none !important;\n            padding: 0.25em 0.75em !important;\n            -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n        }\n        .ui.table:not(.unstackable) th:first-child,\n        .ui.table:not(.unstackable) td:first-child {\n            font-weight: bold;\n        }\n\n        /* Definition Table */\n        .ui.definition.table:not(.unstackable) thead th:first-child {\n            -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n        }\n    }\n\n    /*******************************\n              Coupling\n  *******************************/\n\n    /* UI Image */\n    .ui.table th .image,\n    .ui.table th .image img,\n    .ui.table td .image,\n    .ui.table td .image img {\n        max-width: none;\n    }\n\n    /*******************************\n               Types\n  *******************************/\n\n    /*--------------\n      Complex\n  ---------------*/\n\n    .ui.structured.table {\n        border-collapse: collapse;\n    }\n    .ui.structured.table thead th {\n        border-left: none;\n        border-right: none;\n    }\n    .ui.structured.sortable.table thead th {\n        border-left: 1px solid rgba(34, 36, 38, 0.15);\n        border-right: 1px solid rgba(34, 36, 38, 0.15);\n    }\n    .ui.structured.basic.table th {\n        border-left: none;\n        border-right: none;\n    }\n    .ui.structured.celled.table tr th,\n    .ui.structured.celled.table tr td {\n        border-left: 1px solid rgba(34, 36, 38, 0.1);\n        border-right: 1px solid rgba(34, 36, 38, 0.1);\n    }\n\n    /*--------------\n     Definition\n  ---------------*/\n\n    .ui.definition.table thead:not(.full-width) th:first-child {\n        pointer-events: none;\n        background: transparent;\n        font-weight: normal;\n        color: rgba(0, 0, 0, 0.4);\n        -webkit-box-shadow: -1px -1px 0px 1px #ffffff;\n        box-shadow: -1px -1px 0px 1px #ffffff;\n    }\n    .ui.definition.table tfoot:not(.full-width) th:first-child {\n        pointer-events: none;\n        background: transparent;\n        font-weight: rgba(0, 0, 0, 0.4);\n        color: normal;\n        -webkit-box-shadow: 1px 1px 0px 1px #ffffff;\n        box-shadow: 1px 1px 0px 1px #ffffff;\n    }\n\n    /* Remove Border */\n    .ui.celled.definition.table thead:not(.full-width) th:first-child {\n        -webkit-box-shadow: 0px -1px 0px 1px #ffffff;\n        box-shadow: 0px -1px 0px 1px #ffffff;\n    }\n    .ui.celled.definition.table tfoot:not(.full-width) th:first-child {\n        -webkit-box-shadow: 0px 1px 0px 1px #ffffff;\n        box-shadow: 0px 1px 0px 1px #ffffff;\n    }\n\n    /* Highlight Defining Column */\n    .ui.definition.table tr td:first-child:not(.ignored),\n    .ui.definition.table tr td.definition {\n        background: none;\n        font-weight: bold;\n        color: ",';\n        text-transform: "";\n        -webkit-box-shadow: "";\n        box-shadow: "";\n        text-align: "";\n        font-size: 1em;\n        padding-left: "";\n        padding-right: "";\n    }\n\n    /* Fix 2nd Column */\n    .ui.definition.table thead:not(.full-width) th:nth-child(2) {\n        border-left: 1px solid rgba(34, 36, 38, 0.15);\n    }\n    .ui.definition.table tfoot:not(.full-width) th:nth-child(2) {\n        border-left: 1px solid rgba(34, 36, 38, 0.15);\n    }\n    .ui.definition.table td:nth-child(2) {\n        border-left: 1px solid rgba(34, 36, 38, 0.15);\n    }\n\n    /*******************************\n               States\n  *******************************/\n\n    /*--------------\n      Positive\n  ---------------*/\n\n    .ui.table tr.positive,\n    .ui.table td.positive {\n        -webkit-box-shadow: 0px 0px 0px #a3c293 inset;\n        box-shadow: 0px 0px 0px #a3c293 inset;\n    }\n    .ui.table tr.positive,\n    .ui.table td.positive {\n        background: #fcfff5 !important;\n        color: #2c662d !important;\n    }\n\n    /*--------------\n       Negative\n  ---------------*/\n\n    .ui.table tr.negative,\n    .ui.table td.negative {\n        -webkit-box-shadow: 0px 0px 0px #e0b4b4 inset;\n        box-shadow: 0px 0px 0px #e0b4b4 inset;\n    }\n    .ui.table tr.negative,\n    .ui.table td.negative {\n        background: #fff6f6 !important;\n        color: #9f3a38 !important;\n    }\n\n    /*--------------\n        Error\n  ---------------*/\n\n    .ui.table tr.error,\n    .ui.table td.error {\n        -webkit-box-shadow: 0px 0px 0px #e0b4b4 inset;\n        box-shadow: 0px 0px 0px #e0b4b4 inset;\n    }\n    .ui.table tr.error,\n    .ui.table td.error {\n        background: #fff6f6 !important;\n        color: #9f3a38 !important;\n    }\n\n    /*--------------\n       Warning\n  ---------------*/\n\n    .ui.table tr.warning,\n    .ui.table td.warning {\n        -webkit-box-shadow: 0px 0px 0px #c9ba9b inset;\n        box-shadow: 0px 0px 0px #c9ba9b inset;\n    }\n    .ui.table tr.warning,\n    .ui.table td.warning {\n        background: #fffaf3 !important;\n        color: #573a08 !important;\n    }\n\n    /*--------------\n       Active\n  ---------------*/\n\n    .ui.table tr.active,\n    .ui.table td.active {\n        -webkit-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.87) inset;\n        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.87) inset;\n    }\n    .ui.table tr.active,\n    .ui.table td.active {\n        background: #e0e0e0 !important;\n        color: rgba(0, 0, 0, 0.87) !important;\n    }\n\n    /*--------------\n       Disabled\n  ---------------*/\n\n    .ui.table tr.disabled td,\n    .ui.table tr td.disabled,\n    .ui.table tr.disabled:hover,\n    .ui.table tr:hover td.disabled {\n        pointer-events: none;\n        color: rgba(40, 40, 40, 0.3);\n    }\n\n    /*******************************\n            Variations\n  *******************************/\n\n    /*--------------\n      Stackable\n  ---------------*/\n\n    @media only screen and (max-width: 991px) {\n        .ui[class*="tablet stackable"].table,\n        .ui[class*="tablet stackable"].table tbody,\n        .ui[class*="tablet stackable"].table tr,\n        .ui[class*="tablet stackable"].table tr > th,\n        .ui[class*="tablet stackable"].table tr > td {\n            width: 100% !important;\n            display: block !important;\n        }\n        .ui[class*="tablet stackable"].table {\n            padding: 0em;\n        }\n        .ui[class*="tablet stackable"].table thead {\n            display: block;\n        }\n        .ui[class*="tablet stackable"].table tfoot {\n            display: block;\n        }\n        .ui[class*="tablet stackable"].table tr {\n            padding-top: 1em;\n            padding-bottom: 1em;\n            -webkit-box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important;\n            box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important;\n        }\n        .ui[class*="tablet stackable"].table tr > th,\n        .ui[class*="tablet stackable"].table tr > td {\n            background: none;\n            border: none !important;\n            padding: 0.25em 0.75em;\n            -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n        }\n\n        /* Definition Table */\n        .ui.definition[class*="tablet stackable"].table thead th:first-child {\n            -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n        }\n    }\n\n    /*--------------\n   Text Alignment\n  ---------------*/\n\n    .ui.table[class*="left aligned"],\n    .ui.table [class*="left aligned"] {\n        text-align: left;\n    }\n    .ui.table[class*="center aligned"],\n    .ui.table [class*="center aligned"] {\n        text-align: center;\n    }\n    .ui.table[class*="right aligned"],\n    .ui.table [class*="right aligned"] {\n        text-align: right;\n    }\n\n    /*------------------\n   Vertical Alignment\n  ------------------*/\n\n    .ui.table[class*="top aligned"],\n    .ui.table [class*="top aligned"] {\n        vertical-align: top;\n    }\n    .ui.table[class*="middle aligned"],\n    .ui.table [class*="middle aligned"] {\n        vertical-align: middle;\n    }\n    .ui.table[class*="bottom aligned"],\n    .ui.table [class*="bottom aligned"] {\n        vertical-align: bottom;\n    }\n\n    /*--------------\n      Collapsing\n  ---------------*/\n\n    .ui.table th.collapsing,\n    .ui.table td.collapsing {\n        width: 1px;\n        white-space: nowrap;\n    }\n\n    /*--------------\n       Fixed\n  ---------------*/\n\n    .ui.fixed.table {\n        table-layout: fixed;\n    }\n    .ui.fixed.table th,\n    .ui.fixed.table td {\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n\n    /*--------------\n     Selectable\n  ---------------*/\n\n    .ui.selectable.table tbody tr:hover,\n    .ui.table tbody tr td.selectable:hover {\n        background: rgba(0, 0, 0, 0.05) !important;\n        color: rgba(0, 0, 0, 0.95) !important;\n    }\n    .ui.selectable.inverted.table tbody tr:hover,\n    .ui.inverted.table tbody tr td.selectable:hover {\n        background: rgba(255, 255, 255, 0.08) !important;\n        color: #ffffff !important;\n    }\n\n    /* Selectable Cell Link */\n    .ui.table tbody tr td.selectable {\n        padding: 0em;\n    }\n    .ui.table tbody tr td.selectable > a:not(.ui) {\n        display: block;\n        color: inherit;\n        padding: 0.78571429em 0.78571429em;\n    }\n\n    /* Other States */\n    .ui.selectable.table tr.error:hover,\n    .ui.table tr td.selectable.error:hover,\n    .ui.selectable.table tr:hover td.error {\n        background: #ffe7e7 !important;\n        color: #943634 !important;\n    }\n    .ui.selectable.table tr.warning:hover,\n    .ui.table tr td.selectable.warning:hover,\n    .ui.selectable.table tr:hover td.warning {\n        background: #fff4e4 !important;\n        color: #493107 !important;\n    }\n    .ui.selectable.table tr.active:hover,\n    .ui.table tr td.selectable.active:hover,\n    .ui.selectable.table tr:hover td.active {\n        background: #e0e0e0 !important;\n        color: rgba(0, 0, 0, 0.87) !important;\n    }\n    .ui.selectable.table tr.positive:hover,\n    .ui.table tr td.selectable.positive:hover,\n    .ui.selectable.table tr:hover td.positive {\n        background: #f7ffe6 !important;\n        color: #275b28 !important;\n    }\n    .ui.selectable.table tr.negative:hover,\n    .ui.table tr td.selectable.negative:hover,\n    .ui.selectable.table tr:hover td.negative {\n        background: #ffe7e7 !important;\n        color: #943634 !important;\n    }\n\n    /*-------------------\n        Attached\n  --------------------*/\n\n    /* Middle */\n    .ui.attached.table {\n        top: 0px;\n        bottom: 0px;\n        border-radius: 0px;\n        margin: 0em -1px;\n        width: calc(100% - (-1px * 2));\n        max-width: calc(100% - (-1px * 2));\n        -webkit-box-shadow: none;\n        box-shadow: none;\n        border: 1px solid #d4d4d5;\n    }\n    .ui.attached + .ui.attached.table:not(.top) {\n        border-top: none;\n    }\n\n    /* Top */\n    .ui[class*="top attached"].table {\n        bottom: 0px;\n        margin-bottom: 0em;\n        top: 0px;\n        margin-top: 1em;\n        border-radius: 0.28571429rem 0.28571429rem 0em 0em;\n    }\n    .ui.table[class*="top attached"]:first-child {\n        margin-top: 0em;\n    }\n\n    /* Bottom */\n    .ui[class*="bottom attached"].table {\n        bottom: 0px;\n        margin-top: 0em;\n        top: 0px;\n        margin-bottom: 1em;\n        -webkit-box-shadow: none, none;\n        box-shadow: none, none;\n        border-radius: 0em 0em 0.28571429rem 0.28571429rem;\n    }\n    .ui[class*="bottom attached"].table:last-child {\n        margin-bottom: 0em;\n    }\n\n    /*--------------\n       Striped\n  ---------------*/\n\n    /* Table Striping */\n    .ui.striped.table > tr:nth-child(2n),\n    .ui.striped.table tbody tr:nth-child(2n) {\n        background-color: rgba(0, 0, 50, 0.02);\n    }\n\n    /* Stripes */\n    .ui.inverted.striped.table > tr:nth-child(2n),\n    .ui.inverted.striped.table tbody tr:nth-child(2n) {\n        background-color: rgba(255, 255, 255, 0.05);\n    }\n\n    /* Allow striped active hover */\n    .ui.striped.selectable.selectable.selectable.table tbody tr.active:hover {\n        background: #efefef !important;\n        color: rgba(0, 0, 0, 0.95) !important;\n    }\n\n    /*--------------\n     Single Line\n  ---------------*/\n\n    .ui.table[class*="single line"],\n    .ui.table [class*="single line"] {\n        white-space: nowrap;\n    }\n    .ui.table[class*="single line"],\n    .ui.table [class*="single line"] {\n        white-space: nowrap;\n    }\n\n    /*-------------------\n         Colors\n  --------------------*/\n\n    /* Red */\n    .ui.red.table {\n        border-top: 0.2em solid #db2828;\n    }\n    .ui.inverted.red.table {\n        background-color: #db2828 !important;\n        color: #ffffff !important;\n    }\n\n    /* Orange */\n    .ui.orange.table {\n        border-top: 0.2em solid #f2711c;\n    }\n    .ui.inverted.orange.table {\n        background-color: #f2711c !important;\n        color: #ffffff !important;\n    }\n\n    /* Yellow */\n    .ui.yellow.table {\n        border-top: 0.2em solid #fbbd08;\n    }\n    .ui.inverted.yellow.table {\n        background-color: #fbbd08 !important;\n        color: #ffffff !important;\n    }\n\n    /* Olive */\n    .ui.olive.table {\n        border-top: 0.2em solid #b5cc18;\n    }\n    .ui.inverted.olive.table {\n        background-color: #b5cc18 !important;\n        color: #ffffff !important;\n    }\n\n    /* Green */\n    .ui.green.table {\n        border-top: 0.2em solid #21ba45;\n    }\n    .ui.inverted.green.table {\n        background-color: #21ba45 !important;\n        color: #ffffff !important;\n    }\n\n    /* Teal */\n    .ui.teal.table {\n        border-top: 0.2em solid #00b5ad;\n    }\n    .ui.inverted.teal.table {\n        background-color: #00b5ad !important;\n        color: #ffffff !important;\n    }\n\n    /* Blue */\n    .ui.blue.table {\n        border-top: 0.2em solid #2185d0;\n    }\n    .ui.inverted.blue.table {\n        background-color: #2185d0 !important;\n        color: #ffffff !important;\n    }\n\n    /* Violet */\n    .ui.violet.table {\n        border-top: 0.2em solid #6435c9;\n    }\n    .ui.inverted.violet.table {\n        background-color: #6435c9 !important;\n        color: #ffffff !important;\n    }\n\n    /* Purple */\n    .ui.purple.table {\n        border-top: 0.2em solid #a333c8;\n    }\n    .ui.inverted.purple.table {\n        background-color: #a333c8 !important;\n        color: #ffffff !important;\n    }\n\n    /* Pink */\n    .ui.pink.table {\n        border-top: 0.2em solid #e03997;\n    }\n    .ui.inverted.pink.table {\n        background-color: #e03997 !important;\n        color: #ffffff !important;\n    }\n\n    /* Brown */\n    .ui.brown.table {\n        border-top: 0.2em solid #a5673f;\n    }\n    .ui.inverted.brown.table {\n        background-color: #a5673f !important;\n        color: #ffffff !important;\n    }\n\n    /* Grey */\n    .ui.grey.table {\n        border-top: 0.2em solid #767676;\n    }\n    .ui.inverted.grey.table {\n        background-color: #767676 !important;\n        color: #ffffff !important;\n    }\n\n    /* Black */\n    .ui.black.table {\n        border-top: 0.2em solid #1b1c1d;\n    }\n    .ui.inverted.black.table {\n        background-color: #1b1c1d !important;\n        color: #ffffff !important;\n    }\n\n    /*--------------\n    Column Count\n  ---------------*/\n\n    /* Grid Based */\n    .ui.one.column.table td {\n        width: 100%;\n    }\n    .ui.two.column.table td {\n        width: 50%;\n    }\n    .ui.three.column.table td {\n        width: 33.33333333%;\n    }\n    .ui.four.column.table td {\n        width: 25%;\n    }\n    .ui.five.column.table td {\n        width: 20%;\n    }\n    .ui.six.column.table td {\n        width: 16.66666667%;\n    }\n    .ui.seven.column.table td {\n        width: 14.28571429%;\n    }\n    .ui.eight.column.table td {\n        width: 12.5%;\n    }\n    .ui.nine.column.table td {\n        width: 11.11111111%;\n    }\n    .ui.ten.column.table td {\n        width: 10%;\n    }\n    .ui.eleven.column.table td {\n        width: 9.09090909%;\n    }\n    .ui.twelve.column.table td {\n        width: 8.33333333%;\n    }\n    .ui.thirteen.column.table td {\n        width: 7.69230769%;\n    }\n    .ui.fourteen.column.table td {\n        width: 7.14285714%;\n    }\n    .ui.fifteen.column.table td {\n        width: 6.66666667%;\n    }\n    .ui.sixteen.column.table td {\n        width: 6.25%;\n    }\n\n    /* Column Width */\n    .ui.table th.one.wide,\n    .ui.table td.one.wide {\n        width: 6.25%;\n    }\n    .ui.table th.two.wide,\n    .ui.table td.two.wide {\n        width: 12.5%;\n    }\n    .ui.table th.three.wide,\n    .ui.table td.three.wide {\n        width: 18.75%;\n    }\n    .ui.table th.four.wide,\n    .ui.table td.four.wide {\n        width: 25%;\n    }\n    .ui.table th.five.wide,\n    .ui.table td.five.wide {\n        width: 31.25%;\n    }\n    .ui.table th.six.wide,\n    .ui.table td.six.wide {\n        width: 37.5%;\n    }\n    .ui.table th.seven.wide,\n    .ui.table td.seven.wide {\n        width: 43.75%;\n    }\n    .ui.table th.eight.wide,\n    .ui.table td.eight.wide {\n        width: 50%;\n    }\n    .ui.table th.nine.wide,\n    .ui.table td.nine.wide {\n        width: 56.25%;\n    }\n    .ui.table th.ten.wide,\n    .ui.table td.ten.wide {\n        width: 62.5%;\n    }\n    .ui.table th.eleven.wide,\n    .ui.table td.eleven.wide {\n        width: 68.75%;\n    }\n    .ui.table th.twelve.wide,\n    .ui.table td.twelve.wide {\n        width: 75%;\n    }\n    .ui.table th.thirteen.wide,\n    .ui.table td.thirteen.wide {\n        width: 81.25%;\n    }\n    .ui.table th.fourteen.wide,\n    .ui.table td.fourteen.wide {\n        width: 87.5%;\n    }\n    .ui.table th.fifteen.wide,\n    .ui.table td.fifteen.wide {\n        width: 93.75%;\n    }\n    .ui.table th.sixteen.wide,\n    .ui.table td.sixteen.wide {\n        width: 100%;\n    }\n\n    /*--------------\n      Sortable\n  ---------------*/\n\n    .ui.sortable.table thead th {\n        cursor: pointer;\n        white-space: nowrap;\n        border-left: 1px solid rgba(34, 36, 38, 0.15);\n        color: rgba(0, 0, 0, 0.87);\n    }\n    .ui.sortable.table thead th:first-child {\n        border-left: none;\n    }\n    .ui.sortable.table thead th.sorted,\n    .ui.sortable.table thead th.sorted:hover {\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n    }\n    .ui.sortable.table thead th:after {\n        display: none;\n        font-style: normal;\n        font-weight: normal;\n        text-decoration: inherit;\n        content: "";\n        height: 1em;\n        width: auto;\n        opacity: 0.8;\n        margin: 0em 0em 0em 0.5em;\n        font-family: "Icons";\n    }\n    .ui.sortable.table thead th.ascending:after {\n        content: "\\f0d8";\n    }\n    .ui.sortable.table thead th.descending:after {\n        content: "\\f0d7";\n    }\n\n    /* Hover */\n    .ui.sortable.table th.disabled:hover {\n        cursor: auto;\n        color: rgba(40, 40, 40, 0.3);\n    }\n    .ui.sortable.table thead th:hover {\n        background: rgba(0, 0, 0, 0.05);\n        color: rgba(0, 0, 0, 0.8);\n    }\n\n    /* Sorted */\n    .ui.sortable.table thead th.sorted {\n        background: rgba(0, 0, 0, 0.05);\n        color: rgba(0, 0, 0, 0.95);\n    }\n    .ui.sortable.table thead th.sorted:after {\n        display: inline-block;\n    }\n\n    /* Sorted Hover */\n    .ui.sortable.table thead th.sorted:hover {\n        background: rgba(0, 0, 0, 0.05);\n        color: rgba(0, 0, 0, 0.95);\n    }\n\n    /* Inverted */\n    .ui.inverted.sortable.table thead th.sorted {\n        background: rgba(255, 255, 255, 0.15) -webkit-gradient(linear, left top, left\n                    bottom, from(transparent), to(rgba(0, 0, 0, 0.05)));\n        background: rgba(255, 255, 255, 0.15) -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.05));\n        background: rgba(255, 255, 255, 0.15)\n            linear-gradient(transparent, rgba(0, 0, 0, 0.05));\n        color: #ffffff;\n    }\n    .ui.inverted.sortable.table thead th:hover {\n        background: rgba(255, 255, 255, 0.08) -webkit-gradient(linear, left top, left\n                    bottom, from(transparent), to(rgba(0, 0, 0, 0.05)));\n        background: rgba(255, 255, 255, 0.08) -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.05));\n        background: rgba(255, 255, 255, 0.08)\n            linear-gradient(transparent, rgba(0, 0, 0, 0.05));\n        color: #ffffff;\n    }\n    .ui.inverted.sortable.table thead th {\n        border-left-color: transparent;\n        border-right-color: transparent;\n    }\n\n    /*--------------\n      Inverted\n  ---------------*/\n\n    /* Text Color */\n    .ui.inverted.table {\n        background: #333333;\n        color: rgba(255, 255, 255, 0.9);\n        border: none;\n    }\n    .ui.inverted.table th {\n        background-color: rgba(0, 0, 0, 0.15);\n        border-color: rgba(255, 255, 255, 0.1) !important;\n        color: rgba(255, 255, 255, 0.9) !important;\n    }\n    .ui.inverted.table tr td {\n        border-color: rgba(255, 255, 255, 0.1) !important;\n    }\n    .ui.inverted.table tr.disabled td,\n    .ui.inverted.table tr td.disabled,\n    .ui.inverted.table tr.disabled:hover td,\n    .ui.inverted.table tr:hover td.disabled {\n        pointer-events: none;\n        color: rgba(225, 225, 225, 0.3);\n    }\n\n    /* Definition */\n    .ui.inverted.definition.table tfoot:not(.full-width) th:first-child,\n    .ui.inverted.definition.table thead:not(.full-width) th:first-child {\n        background: #ffffff;\n    }\n    .ui.inverted.definition.table tr td:first-child {\n        background: rgba(255, 255, 255, 0.02);\n        color: #ffffff;\n    }\n\n    /*--------------\n     Collapsing\n  ---------------*/\n\n    .ui.collapsing.table {\n        width: auto;\n    }\n\n    /*--------------\n        Basic\n  ---------------*/\n\n    .ui.basic.table {\n        background: transparent;\n        border: 1px solid rgba(34, 36, 38, 0.15);\n        -webkit-box-shadow: none;\n        box-shadow: none;\n    }\n    .ui.basic.table thead,\n    .ui.basic.table tfoot {\n        -webkit-box-shadow: none;\n        box-shadow: none;\n    }\n    .ui.basic.table th {\n        background: transparent;\n        border-left: none;\n    }\n    .ui.basic.table tbody tr {\n        border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    }\n    .ui.basic.table td {\n        background: transparent;\n    }\n    .ui.basic.striped.table tbody tr:nth-child(2n) {\n        background-color: rgba(0, 0, 0, 0.05) !important;\n    }\n\n    /* Very Basic */\n    .ui[class*="very basic"].table {\n        border: none;\n    }\n    .ui[class*="very basic"].table:not(.sortable):not(.striped) th,\n    .ui[class*="very basic"].table:not(.sortable):not(.striped) td {\n        padding: "";\n    }\n    .ui[class*="very basic"].table:not(.sortable):not(.striped) th:first-child,\n    .ui[class*="very basic"].table:not(.sortable):not(.striped) td:first-child {\n        padding-left: 0em;\n    }\n    .ui[class*="very basic"].table:not(.sortable):not(.striped) th:last-child,\n    .ui[class*="very basic"].table:not(.sortable):not(.striped) td:last-child {\n        padding-right: 0em;\n    }\n    .ui[class*="very basic"].table:not(.sortable):not(.striped)\n        thead\n        tr:first-child\n        th {\n        padding-top: 0em;\n    }\n\n    /*--------------\n       Celled\n  ---------------*/\n\n    .ui.celled.table tr th,\n    .ui.celled.table tr td {\n        border-left: 1px solid rgba(34, 36, 38, 0.1);\n    }\n    .ui.celled.table tr th:first-child,\n    .ui.celled.table tr td:first-child {\n        border-left: none;\n    }\n\n    /*--------------\n       Padded\n  ---------------*/\n\n    .ui.padded.table th {\n        padding-left: 1em;\n        padding-right: 1em;\n    }\n    .ui.padded.table th,\n    .ui.padded.table td {\n        padding: 1em 1em;\n    }\n\n    /* Very */\n    .ui[class*="very padded"].table th {\n        padding-left: 1.5em;\n        padding-right: 1.5em;\n    }\n    .ui[class*="very padded"].table td {\n        padding: 1.5em 1.5em;\n    }\n\n    /*--------------\n       Compact\n  ---------------*/\n\n    .ui.compact.table th {\n        padding-left: 0.7em;\n        padding-right: 0.7em;\n    }\n    .ui.compact.table td {\n        padding: 0.5em 0.7em;\n    }\n\n    /* Very */\n    .ui[class*="very compact"].table th {\n        padding-left: 0.6em;\n        padding-right: 0.6em;\n    }\n    .ui[class*="very compact"].table td {\n        padding: 0.4em 0.6em;\n    }\n\n    /*--------------\n        Sizes\n  ---------------*/\n\n    /* Small */\n    .ui.small.table {\n        font-size: 0.9em;\n    }\n\n    /* Standard */\n    .ui.table {\n        font-size: 1em;\n    }\n\n    /* Large */\n    .ui.large.table {\n        font-size: 1.1em;\n    }\n\n    /*******************************\n           Site Overrides\n  *******************************/\n'])),function(n){return n.hasMore||n.hasPagination?"20px":"0"},"#9B4DEE"),Yo=["children","title","titleStyle","message","messageStyle","hasMore","pagination","loading"],Zo=function(e){var t=e.children,r=e.title,o=e.titleStyle,i=e.message,l=e.messageStyle,d=e.hasMore,c=e.pagination,p=v(e,Yo);return n.createElement("div",null,r||i?n.createElement($o,null,n.createElement(Ho,{style:o},r),n.createElement(Wo,{style:l},i)):null,n.createElement(Xo,{hasMore:!!d,hasPagination:!!c},n.createElement(a,Object.assign({},p),t)),d?n.createElement(jt,{secondary:!0,textFirst:"ver a",textEnd:"lista completa",onClick:function(){return d()}}):null,c?n.createElement("div",null,n.createElement("br",null),c):null)};Zo.Row=l,Zo.Header=d,Zo.HeaderCell=c,Zo.Body=p,Zo.Cell=s,Zo.Footer=u;var Go=r.div(qo||(qo=k(["\n    font-family: MontSerrat !important;\n\n    /*--------------\n   Pagination\n---------------*/\n\n    .ui.pagination.menu {\n        margin: 0em;\n        display: -webkit-inline-box;\n        display: -ms-inline-flexbox;\n        display: inline-flex;\n        vertical-align: middle;\n    }\n    .ui.pagination.menu .item:last-child {\n        border-radius: 0em 0.28571429rem 0.28571429rem 0em;\n    }\n    .ui.compact.menu .item:last-child {\n        border-radius: 0em 0.28571429rem 0.28571429rem 0em;\n    }\n    .ui.pagination.menu .item:last-child:before {\n        display: none;\n    }\n    .ui.pagination.menu .item {\n        font-family: MontSerrat !important;\n        min-width: 3em;\n        text-align: center;\n    }\n    .ui.pagination.menu .icon.item i.icon {\n        vertical-align: top;\n    }\n\n    /* Active */\n    .ui.pagination.menu .active.item {\n        border-top: none;\n        padding-top: 0.92857143em;\n        background-color: rgba(0, 0, 0, 0.05);\n        color: rgba(0, 0, 0, 0.95);\n        -webkit-box-shadow: none;\n        box-shadow: none;\n    }\n"]))),Jo=function(e){var t=e.page,r=e.onPageChange,o=e.mini;return n.createElement(Go,null,n.createElement(m,{totalPages:Math.ceil(e.totalCount/e.limit),size:o?"mini":"small",ellipsisItem:{content:n.createElement(b,{name:"ellipsis horizontal"}),icon:!0},firstItem:{content:n.createElement(b,{name:"angle double left"}),icon:!0},lastItem:{content:n.createElement(b,{name:"angle double right"}),icon:!0},prevItem:{content:n.createElement(b,{name:"angle left"}),icon:!0},nextItem:{content:n.createElement(b,{name:"angle right"}),icon:!0},onPageChange:function(n,e){return r(e.activePage)},activePage:t}))};export{Sr as Accordion,jt as ButtonMain,Uo as Calendar,Vr as Card,ur as Checkbox,Vt as Dialog,vr as Dropdown,yr as DropdownForm,$t as InputLine,Wt as InputLineForm,At as Loader,Qt as Modal,Tr as MoreLess,Jo as Pagination,gr as Radio,Br as Selection,Zo as Table,ar as TextArea,dr as TextAreaForm};
>>>>>>> master
//# sourceMappingURL=index.modern.js.map

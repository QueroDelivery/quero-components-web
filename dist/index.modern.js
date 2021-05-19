import"semantic-ui-css/semantic.min.css";import e,{useState as t,useEffect as r}from"react";import n,{css as o}from"styled-components";import{Dropdown as i,Table as a,TableRow as l,TableHeader as c,TableHeaderCell as d,TableBody as s,TableCell as p,TableFooter as u,Pagination as m,Icon as f}from"semantic-ui-react";import b from"react-datepicker";import h from"react-dom";
/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){g(e,t,r[t])})}return e}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(n=(a=l.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v={},k={};try{"undefined"!=typeof window&&(v=window),"undefined"!=typeof document&&(k=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&performance}catch(me){}var y=(v.navigator||{}).userAgent,_=void 0===y?"":y,E=v,C=k,S=!!C.documentElement&&!!C.head&&"function"==typeof C.addEventListener&&"function"==typeof C.createElement,O=(~_.indexOf("MSIE")||_.indexOf("Trident/"),function(){try{process}catch(e){return!1}}(),"group"),$=E.FontAwesomeConfig||{};C&&"function"==typeof C.querySelector&&[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(e){var t=w(e,2),r=t[1],n=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=C.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(t[0]));null!=n&&($[r]=n)});var z=x({},{familyPrefix:"fa",replacementClass:"svg-inline--fa",autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},$);z.autoReplaceSvg||(z.observeMutations=!1);var F=x({},z);E.FontAwesomeConfig=F;var M=E||{};M.___FONT_AWESOME___||(M.___FONT_AWESOME___={}),M.___FONT_AWESOME___.styles||(M.___FONT_AWESOME___.styles={}),M.___FONT_AWESOME___.hooks||(M.___FONT_AWESOME___.hooks={}),M.___FONT_AWESOME___.shims||(M.___FONT_AWESOME___.shims=[]);var D=M.___FONT_AWESOME___,I=[];S&&((C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState)||C.addEventListener("DOMContentLoaded",function e(){C.removeEventListener("DOMContentLoaded",e),I.map(function(e){return e()})})),"undefined"==typeof setImmediate?setTimeout:setImmediate;var B={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function A(){for(var e=12,t="";e-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function P(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function T(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,": ").concat(e[r],";")},"")}function j(e){return e.size!==B.size||e.x!==B.x||e.y!==B.y||e.rotate!==B.rotate||e.flipX||e.flipY}function N(e){var t=e.transform,r=e.iconWidth,n={transform:"translate(".concat(e.containerWidth/2," 256)")},o="translate(".concat(32*t.x,", ").concat(32*t.y,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)");return{outer:n,inner:{transform:"".concat(o," ").concat(i," ").concat(a)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}var L={x:0,y:0,width:"100%",height:"100%"};function V(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function R(e){var t=e.icons,r=t.main,n=t.mask,o=e.prefix,i=e.iconName,a=e.transform,l=e.symbol,c=e.title,d=e.maskId,s=e.titleId,p=e.extra,u=e.watchable,m=void 0!==u&&u,f=n.found?n:r,b=f.width,h=f.height,g="fak"===o,w=g?"":"fa-w-".concat(Math.ceil(b/h*16)),v=[F.replacementClass,i?"".concat(F.familyPrefix,"-").concat(i):"",w].filter(function(e){return-1===p.classes.indexOf(e)}).filter(function(e){return""!==e||!!e}).concat(p.classes).join(" "),k={children:[],attributes:x({},p.attributes,{"data-prefix":o,"data-icon":i,class:v,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(h)})},y=g&&!~p.classes.indexOf("fa-fw")?{width:"".concat(b/h*16*.0625,"em")}:{};m&&(k.attributes["data-fa-i2svg"]=""),c&&k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(s||A())},children:[c]});var _=x({},k,{prefix:o,iconName:i,main:r,mask:n,maskId:d,transform:a,symbol:l,styles:x({},y,p.styles)}),E=n.found&&r.found?function(e){var t,r=e.children,n=e.attributes,o=e.main,i=e.mask,a=e.maskId,l=o.icon,c=i.icon,d=N({transform:e.transform,containerWidth:i.width,iconWidth:o.width}),s={tag:"rect",attributes:x({},L,{fill:"white"})},p=l.children?{children:l.children.map(V)}:{},u={tag:"g",attributes:x({},d.inner),children:[V(x({tag:l.tag,attributes:x({},l.attributes,d.path)},p))]},m={tag:"g",attributes:x({},d.outer),children:[u]},f="mask-".concat(a||A()),b="clip-".concat(a||A()),h={tag:"mask",attributes:x({},L,{id:f,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[s,m]},g={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:(t=c,"g"===t.tag?t.children:[t])},h]};return r.push(g,{tag:"rect",attributes:x({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(f,")")},L)}),{children:r,attributes:n}}(_):function(e){var t=e.children,r=e.attributes,n=e.main,o=e.transform,i=T(e.styles);if(i.length>0&&(r.style=i),j(o)){var a=N({transform:o,containerWidth:n.width,iconWidth:n.width});t.push({tag:"g",attributes:x({},a.outer),children:[{tag:"g",attributes:x({},a.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:x({},n.icon.attributes,a.path)}]}]})}else t.push(n.icon);return{children:t,attributes:r}}(_),C=E.attributes;return _.children=E.children,_.attributes=C,l?function(e){var t=e.iconName,r=e.children,n=e.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:x({},e.attributes,{id:!0===n?"".concat(e.prefix,"-").concat(F.familyPrefix,"-").concat(t):n}),children:r}]}]}(_):function(e){var t=e.children,r=e.main,n=e.mask,o=e.attributes,i=e.styles,a=e.transform;if(j(a)&&r.found&&!n.found){var l={x:r.width/r.height/2,y:.5};o.style=T(x({},i,{"transform-origin":"".concat(l.x+a.x/16,"em ").concat(l.y+a.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}(_)}var q=function(e,t,r,n){var o,i,a,l=Object.keys(e),c=l.length,d=void 0!==n?function(e,t){return function(r,n,o,i){return e.call(t,r,n,o,i)}}(t,n):t;for(void 0===r?(o=1,a=e[l[0]]):(o=0,a=r);o<c;o++)a=d(a,e[i=l[o]],i,e);return a};function U(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.skipHooks,o=void 0!==n&&n,i=Object.keys(t).reduce(function(e,r){var n=t[r];return n.icon?e[n.iconName]=n.icon:e[r]=n,e},{});"function"!=typeof D.hooks.addPack||o?D.styles[e]=x({},D.styles[e]||{},i):D.hooks.addPack(e,i),"fas"===e&&U("fa",t)}var W=D.styles,H=D.shims,X=function(){var e=function(e){return q(W,function(t,r,n){return t[n]=q(r,e,{}),t},{})};e(function(e,t,r){return t[3]&&(e[t[3]]=r),e}),e(function(e,t,r){var n=t[2];return e[r]=r,n.forEach(function(t){e[t]=r}),e});var t="far"in W;q(H,function(e,r){var n=r[1];return"far"!==n||t||(n="fas"),e[r[0]]={prefix:n,iconName:r[2]},e},{})};function Y(e,t,r){if(e&&e[t]&&e[t][r])return{prefix:t,iconName:r,icon:e[t][r]}}function Z(e){var t=e.tag,r=e.attributes,n=void 0===r?{}:r,o=e.children,i=void 0===o?[]:o;return"string"==typeof e?P(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,'="').concat(P(e[r]),'" ')},"").trim()}(n),">").concat(i.map(Z).join(""),"</").concat(t,">")}function G(e){this.name="MissingIcon",this.message=e||"Icon unavailable",this.stack=(new Error).stack}X(),(G.prototype=Object.create(Error.prototype)).constructor=G;var J={fill:"currentColor"},K={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},Q=(x({},J,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}),x({},K,{attributeName:"opacity"}));function ee(e){var t=e[0],r=e[1],n=w(e.slice(4),1)[0];return{found:!0,width:t,height:r,icon:Array.isArray(n)?{tag:"g",attributes:{class:"".concat(F.familyPrefix,"-").concat(O)},children:[{tag:"path",attributes:{class:"".concat(F.familyPrefix,"-").concat("secondary"),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(F.familyPrefix,"-").concat("primary"),fill:"currentColor",d:n[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:n}}}}function te(){F.autoAddCss&&!ae&&(function(e){if(e&&S){var t=C.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var r=C.head.childNodes,n=null,o=r.length-1;o>-1;o--){var i=r[o],a=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(n=i)}C.head.insertBefore(t,n)}}(function(){var e="svg-inline--fa",t=F.familyPrefix,r=F.replacementClass,n='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';if("fa"!==t||r!==e){var o=new RegExp("\\.".concat("fa","\\-"),"g"),i=new RegExp("\\--".concat("fa","\\-"),"g"),a=new RegExp("\\.".concat(e),"g");n=n.replace(o,".".concat(t,"-")).replace(i,"--".concat(t,"-")).replace(a,".".concat(r))}return n}()),ae=!0)}function re(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return Z(e)})}}),Object.defineProperty(e,"node",{get:function(){if(S){var t=C.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function ne(e){var t=e.prefix,r=void 0===t?"fa":t,n=e.iconName;if(n)return Y(ie.definitions,r,n)||Y(D.styles,r,n)}x({},J,{cx:"256",cy:"364",r:"28"}),x({},K,{attributeName:"r",values:"28;14;28;28;14;28;"}),x({},Q,{values:"1;0;1;1;0;1;"}),x({},J,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),x({},Q,{values:"1;0;0;0;0;1;"}),x({},J,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),x({},Q,{values:"0;0;1;1;0;0;"});var oe,ie=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}}var t;return(t=[{key:"add",value:function(){for(var e=this,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(t){e.definitions[t]=x({},e.definitions[t]||{},o[t]),U(t,o[t]),X()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var r=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(r).map(function(t){var n=r[t],o=n.prefix,i=n.iconName,a=n.icon;e[o]||(e[o]={}),e[o][i]=a}),e}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,t),e}()),ae=!1,le={transform:function(e){return function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e?e.toLowerCase().split(" ").reduce(function(e,t){var r=t.toLowerCase().split("-"),n=r[0],o=r.slice(1).join("-");if(n&&"h"===o)return e.flipX=!0,e;if(n&&"v"===o)return e.flipY=!0,e;if(o=parseFloat(o),isNaN(o))return e;switch(n){case"grow":e.size=e.size+o;break;case"shrink":e.size=e.size-o;break;case"left":e.x=e.x-o;break;case"right":e.x=e.x+o;break;case"up":e.y=e.y-o;break;case"down":e.y=e.y+o;break;case"rotate":e.rotate=e.rotate+o}return e},t):t}(e)}},ce=(oe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.transform,n=void 0===r?B:r,o=t.symbol,i=void 0!==o&&o,a=t.mask,l=void 0===a?null:a,c=t.maskId,d=void 0===c?null:c,s=t.title,p=void 0===s?null:s,u=t.titleId,m=void 0===u?null:u,f=t.classes,b=void 0===f?[]:f,h=t.attributes,g=void 0===h?{}:h,w=t.styles,v=void 0===w?{}:w;if(e){var k=e.prefix,y=e.iconName,_=e.icon;return re(x({type:"icon"},e),function(){return te(),F.autoA11y&&(p?g["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(m||A()):(g["aria-hidden"]="true",g.focusable="false")),R({icons:{main:ee(_),mask:l?ee(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:y,transform:x({},B,n),symbol:i,title:p,maskId:d,titleId:m,extra:{attributes:g,styles:v,classes:b}})})}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(e||{}).icon?e:ne(e||{}),n=t.mask;return n&&(n=(n||{}).icon?n:ne(n||{})),oe(r,x({},t,{mask:n}))});function de(e,t){return e(t={exports:{}},t.exports),t.exports
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */}var se="function"==typeof Symbol&&Symbol.for,pe=se?Symbol.for("react.element"):60103,ue=se?Symbol.for("react.portal"):60106,me=se?Symbol.for("react.fragment"):60107,fe=se?Symbol.for("react.strict_mode"):60108,be=se?Symbol.for("react.profiler"):60114,he=se?Symbol.for("react.provider"):60109,ge=se?Symbol.for("react.context"):60110,xe=se?Symbol.for("react.async_mode"):60111,we=se?Symbol.for("react.concurrent_mode"):60111,ve=se?Symbol.for("react.forward_ref"):60112,ke=se?Symbol.for("react.suspense"):60113,ye=se?Symbol.for("react.suspense_list"):60120,_e=se?Symbol.for("react.memo"):60115,Ee=se?Symbol.for("react.lazy"):60116,Ce=se?Symbol.for("react.block"):60121,Se=se?Symbol.for("react.fundamental"):60117,Oe=se?Symbol.for("react.responder"):60118,$e=se?Symbol.for("react.scope"):60119;function ze(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case pe:switch(e=e.type){case xe:case we:case me:case be:case fe:case ke:return e;default:switch(e=e&&e.$$typeof){case ge:case ve:case Ee:case _e:case he:return e;default:return t}}case ue:return t}}}function Fe(e){return ze(e)===we}var Me={AsyncMode:xe,ConcurrentMode:we,ContextConsumer:ge,ContextProvider:he,Element:pe,ForwardRef:ve,Fragment:me,Lazy:Ee,Memo:_e,Portal:ue,Profiler:be,StrictMode:fe,Suspense:ke,isAsyncMode:function(e){return Fe(e)||ze(e)===xe},isConcurrentMode:Fe,isContextConsumer:function(e){return ze(e)===ge},isContextProvider:function(e){return ze(e)===he},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===pe},isForwardRef:function(e){return ze(e)===ve},isFragment:function(e){return ze(e)===me},isLazy:function(e){return ze(e)===Ee},isMemo:function(e){return ze(e)===_e},isPortal:function(e){return ze(e)===ue},isProfiler:function(e){return ze(e)===be},isStrictMode:function(e){return ze(e)===fe},isSuspense:function(e){return ze(e)===ke},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===me||e===we||e===be||e===fe||e===ke||e===ye||"object"==typeof e&&null!==e&&(e.$$typeof===Ee||e.$$typeof===_e||e.$$typeof===he||e.$$typeof===ge||e.$$typeof===ve||e.$$typeof===Se||e.$$typeof===Oe||e.$$typeof===$e||e.$$typeof===Ce)},typeOf:ze},De=de(function(e,t){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,l=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,s=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,m=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,h=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,x=e?Symbol.for("react.responder"):60118,w=e?Symbol.for("react.scope"):60119;function v(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var m=e.type;switch(m){case d:case s:case o:case a:case i:case u:return m;default:var h=m&&m.$$typeof;switch(h){case c:case p:case b:case f:case l:return h;default:return t}}case n:return t}}}var k=s,y=c,_=l,E=r,C=p,S=o,O=b,$=f,z=n,F=a,M=i,D=u,I=!1;function B(e){return v(e)===s}t.AsyncMode=d,t.ConcurrentMode=k,t.ContextConsumer=y,t.ContextProvider=_,t.Element=E,t.ForwardRef=C,t.Fragment=S,t.Lazy=O,t.Memo=$,t.Portal=z,t.Profiler=F,t.StrictMode=M,t.Suspense=D,t.isAsyncMode=function(e){return I||(I=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),B(e)||v(e)===d},t.isConcurrentMode=B,t.isContextConsumer=function(e){return v(e)===c},t.isContextProvider=function(e){return v(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return v(e)===p},t.isFragment=function(e){return v(e)===o},t.isLazy=function(e){return v(e)===b},t.isMemo=function(e){return v(e)===f},t.isPortal=function(e){return v(e)===n},t.isProfiler=function(e){return v(e)===a},t.isStrictMode=function(e){return v(e)===i},t.isSuspense=function(e){return v(e)===u},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===s||e===a||e===i||e===u||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===f||e.$$typeof===l||e.$$typeof===c||e.$$typeof===p||e.$$typeof===g||e.$$typeof===x||e.$$typeof===w||e.$$typeof===h)},t.typeOf=v}()}),Ie=de(function(e){e.exports="production"===process.env.NODE_ENV?Me:De}),Be=Object.getOwnPropertySymbols,Ae=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable;function Te(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var je=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,n,o=Te(e),i=1;i<arguments.length;i++){for(var a in r=Object(arguments[i]))Ae.call(r,a)&&(o[a]=r[a]);if(Be){n=Be(r);for(var l=0;l<n.length;l++)Pe.call(r,n[l])&&(o[n[l]]=r[n[l]])}}return o},Ne="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Le=function(){};if("production"!==process.env.NODE_ENV){var Ve=Ne,Re={},qe=Function.call.bind(Object.prototype.hasOwnProperty);Le=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function Ue(e,t,r,n,o){if("production"!==process.env.NODE_ENV)for(var i in e)if(qe(e,i)){var a;try{if("function"!=typeof e[i]){var l=Error((n||"React class")+": "+r+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.");throw l.name="Invariant Violation",l}a=e[i](t,i,n,r,null,Ve)}catch(e){a=e}if(!a||a instanceof Error||Le((n||"React class")+": type specification of "+r+" `"+i+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof a+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),a instanceof Error&&!(a.message in Re)){Re[a.message]=!0;var c=o?o():"";Le("Failed "+r+" type: "+a.message+(null!=c?c:""))}}}Ue.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(Re={})};var We=Ue,He=Function.call.bind(Object.prototype.hasOwnProperty),Xe=function(){};function Ye(){return null}function Ze(){}function Ge(){}"production"!==process.env.NODE_ENV&&(Xe=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),Ge.resetWarningCache=Ze;var Je=de(function(e){e.exports="production"!==process.env.NODE_ENV?function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,n={array:l("array"),bool:l("boolean"),func:l("function"),number:l("number"),object:l("object"),string:l("string"),symbol:l("symbol"),any:a(Ye),arrayOf:function(e){return a(function(t,r,n,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var l=t[r];if(!Array.isArray(l))return new i("Invalid "+o+" `"+a+"` of type `"+d(l)+"` supplied to `"+n+"`, expected an array.");for(var c=0;c<l.length;c++){var s=e(l,c,n,o,a+"["+c+"]",Ne);if(s instanceof Error)return s}return null})},element:a(function(t,r,n,o,a){var l=t[r];return e(l)?null:new i("Invalid "+o+" `"+a+"` of type `"+d(l)+"` supplied to `"+n+"`, expected a single ReactElement.")}),elementType:a(function(e,t,r,n,o){var a=e[t];return Ie.isValidElementType(a)?null:new i("Invalid "+n+" `"+o+"` of type `"+d(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")}),instanceOf:function(e){return a(function(t,r,n,o,a){var l;return t[r]instanceof e?null:new i("Invalid "+o+" `"+a+"` of type `"+((l=t[r]).constructor&&l.constructor.name?l.constructor.name:"<<anonymous>>")+"` supplied to `"+n+"`, expected instance of `"+(e.name||"<<anonymous>>")+"`.")})},node:a(function(e,t,r,n,o){return c(e[t])?null:new i("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")}),objectOf:function(e){return a(function(t,r,n,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],c=d(l);if("object"!==c)return new i("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var s in l)if(He(l,s)){var p=e(l,s,n,o,a+"."+s,Ne);if(p instanceof Error)return p}return null})},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&Xe(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),Ye;function t(t,r,n,a,l){for(var c=t[r],d=0;d<e.length;d++)if(o(c,e[d]))return null;var p=JSON.stringify(e,function(e,t){return"symbol"===s(t)?String(t):t});return new i("Invalid "+a+" `"+l+"` of value `"+String(c)+"` supplied to `"+n+"`, expected one of "+p+".")}return a(t)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&Xe("Invalid argument supplied to oneOfType, expected an instance of array."),Ye;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return Xe("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+p(r)+" at index "+t+"."),Ye}return a(function(t,r,n,o,a){for(var l=0;l<e.length;l++)if(null==(0,e[l])(t,r,n,o,a,Ne))return null;return new i("Invalid "+o+" `"+a+"` supplied to `"+n+"`.")})},shape:function(e){return a(function(t,r,n,o,a){var l=t[r],c=d(l);if("object"!==c)return new i("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");for(var s in e){var p=e[s];if(p){var u=p(l,s,n,o,a+"."+s,Ne);if(u)return u}}return null})},exact:function(e){return a(function(t,r,n,o,a){var l=t[r],c=d(l);if("object"!==c)return new i("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var s=je({},t[r],e);for(var p in s){var u=e[p];if(!u)return new i("Invalid "+o+" `"+a+"` key `"+p+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=u(l,p,n,o,a+"."+p,Ne);if(m)return m}return null})}};function o(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function i(e){this.message=e,this.stack=""}function a(e){function t(t,r,n,o,a,l,c){if(o=o||"<<anonymous>>",l=l||n,c!==Ne){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}return null==r[n]?t?new i(null===r[n]?"The "+a+" `"+l+"` is marked as required in `"+o+"`, but its value is `null`.":"The "+a+" `"+l+"` is marked as required in `"+o+"`, but its value is `undefined`."):null:e(r,n,o,a,l)}process;var r=t.bind(null,!1);return r.isRequired=t.bind(null,!0),r}function l(e){return a(function(t,r,n,o,a,l){var c=t[r];return d(c)!==e?new i("Invalid "+o+" `"+a+"` of type `"+s(c)+"` supplied to `"+n+"`, expected `"+e+"`."):null})}function c(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(c);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!n)return!1;var o,i=n.call(t);if(n!==t.entries){for(;!(o=i.next()).done;)if(!c(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!c(a[1]))return!1}return!0;default:return!1}}function d(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function s(e){if(null==e)return""+e;var t=d(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function p(e){var t=s(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return i.prototype=Error.prototype,n.checkPropTypes=We,n.resetWarningCache=We.resetWarningCache,n.PropTypes=n,n}(Ie.isElement):function(){function e(e,t,r,n,o,i){if(i!==Ne){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ge,resetWarningCache:Ze};return r.PropTypes=r,r}()});function Ke(e){return(Ke="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Qe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function et(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function tt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?et(Object(r),!0).forEach(function(t){Qe(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):et(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function rt(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function nt(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function ot(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1);var t}function it(e){return e.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var r,n=t.indexOf(":"),o=ot(t.slice(0,n)),i=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=i:e[o]=i,e},{})}var at=!1;try{at="production"===process.env.NODE_ENV}catch(me){}function lt(e){return le.icon?le.icon(e):null===e?null:"object"===Ke(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function ct(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Qe({},e,t):{}}function dt(e){var t=e.forwardedRef,r=rt(e,["forwardedRef"]),n=r.mask,o=r.symbol,i=r.className,a=r.title,l=r.titleId,c=lt(r.icon),d=ct("classes",[].concat(nt(function(e){var t,r=e.flip,n=e.size,o=e.rotation,i=e.pull,a=(Qe(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-inverse":e.inverse,"fa-border":e.border,"fa-li":e.listItem,"fa-flip-horizontal":"horizontal"===r||"both"===r,"fa-flip-vertical":"vertical"===r||"both"===r},"fa-".concat(n),null!=n),Qe(t,"fa-rotate-".concat(o),null!=o&&0!==o),Qe(t,"fa-pull-".concat(i),null!=i),Qe(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(a).map(function(e){return a[e]?e:null}).filter(function(e){return e})}(r)),nt(i.split(" ")))),s=ct("transform","string"==typeof r.transform?le.transform(r.transform):r.transform),p=ct("mask",lt(n)),u=ce(c,tt({},d,{},s,{},p,{symbol:o,title:a,titleId:l}));if(!u)return function(){var e;!at&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",c),null;var m=u.abstract,f={ref:t};return Object.keys(r).forEach(function(e){dt.defaultProps.hasOwnProperty(e)||(f[e]=r[e])}),st(m[0],f)}dt.displayName="FontAwesomeIcon",dt.propTypes={border:Je.bool,className:Je.string,mask:Je.oneOfType([Je.object,Je.array,Je.string]),fixedWidth:Je.bool,inverse:Je.bool,flip:Je.oneOf(["horizontal","vertical","both"]),icon:Je.oneOfType([Je.object,Je.array,Je.string]),listItem:Je.bool,pull:Je.oneOf(["right","left"]),pulse:Je.bool,rotation:Je.oneOf([0,90,180,270]),size:Je.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Je.bool,symbol:Je.oneOfType([Je.bool,Je.string]),title:Je.string,transform:Je.oneOfType([Je.string,Je.object]),swapOpacity:Je.bool},dt.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var st=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map(function(r){return e(t,r)}),i=Object.keys(r.attributes||{}).reduce(function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=it(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[ot(t)]=n}return e},{attrs:{}}),a=n.style,l=void 0===a?{}:a,c=rt(n,["style"]);return i.attrs.style=tt({},i.attrs.style,{},l),t.apply(void 0,[r.tag,tt({},i.attrs,{},c)].concat(nt(o)))}.bind(null,e.createElement),pt={prefix:"fas",iconName:"angle-down",icon:[320,512,[],"f107","M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"]},ut={prefix:"fas",iconName:"angle-left",icon:[256,512,[],"f104","M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"]},mt={prefix:"fas",iconName:"angle-up",icon:[320,512,[],"f106","M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"]},ft={prefix:"fas",iconName:"bell",icon:[448,512,[],"f0f3","M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"]},bt={prefix:"fas",iconName:"check",icon:[512,512,[],"f00c","M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"]},ht={prefix:"fas",iconName:"minus",icon:[448,512,[],"f068","M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"]},gt={prefix:"fas",iconName:"plus",icon:[448,512,[],"f067","M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"]},xt={prefix:"fas",iconName:"times",icon:[352,512,[],"f00d","M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]};
/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */let wt,vt,kt,yt,_t,Et,Ct=e=>e;const St=e=>{switch(e){case"mini":return"10px";case"tiny":return"11px";case"small":return"12px";case"medium":return"14px";case"large":return"16px";case"big":return"18px";case"huge":return"20px";case"massive":return"22px";default:return e}},Ot=n.button(wt||(wt=Ct`
    font-family: MontSerrat !important;
    background-color: ${0};
    height: ${0};
    width: ${0};
    border-radius: ${0};
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
`),e=>e.colorBackground?e.colorBackground:e.secondary||e.tertiary?"#FFFFFF":e.noBorder?"transparent":"#F7EA48",e=>e.size?(e=>{switch(e){case"mini":return"25px";case"tiny":return"30px";case"small":return"35px";case"medium":return"40px";case"large":return"45px";case"big":return"50px";case"huge":return"55px";case"massive":return"60px";default:return e}})(e.size):"40px",e=>e.width?"string"==typeof e.width?e.width:e.width+"px":"100%",e=>e.rectangular?"10px":"30px",e=>e.secondary?"1px solid #9B4DEE":e.tertiary?"1px solid #ACACAC":"none",e=>e.icon?"0 15px":"",e=>e.hoverBackgroundColor?e.hoverBackgroundColor:e.secondary?"rgba(155, 77, 238, 0.2)":e.backPurple?"#E0457B":e.noBorder?"transparent":e.tertiary?"rgba(211, 211, 211, 0.4)":"#9B4DEE",e=>e.hoverTextColor?e.hoverTextColor:e.secondary?"#9B4DEE":e.backPurple?"#FFFFFF":e.noBorder?e.colorText?e.colorText:"#9B4DEE":e.tertiary?"#707070":"#F7EA48"),$t=n.span(vt||(vt=Ct`
    color: ${0};
    font-weight: ${0};
    font-size: ${0};
`),e=>e.colorText?e.colorText:e.tertiary?"#707070":"#9B4DEE",e=>e.firstStrong||e.strong?"bold":"normal",e=>e.size?St(e.size):"14px"),zt=n.span(kt||(kt=Ct`
    color: ${0};
    font-weight: ${0};
    font-size: ${0};
`),e=>e.colorText?e.colorText:e.tertiary?"#707070":"#9B4DEE",e=>e.firstStrong||e.notStrong?"normal":"bold",e=>e.size?St(e.size):"14px"),Ft=n.button(yt||(yt=Ct`
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
`),"#9B4DEE","#F7EA48","rgba(155, 77, 238, 0.9)","#F7EA48"),Mt=n.div(_t||(_t=Ct``)),Dt=n.div(Et||(Et=Ct`
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
`),"#F7EA48","#9B4DEE");let It,Bt,At=e=>e;const Pt=e=>{switch(e){case"mini":return"1em";case"tiny":return"1.5em";case"small":return"2em";case"medium":return"2.5em";case"large":return"3em";case"big":return"3.5em";case"huge":return"4em";case"massive":return"4.5em";default:return e}},Tt=e=>{switch(e){case"mini":return"2px";case"tiny":return"2.5px";case"small":return"3px";case"medium":return"3.5px";case"large":return"4px";case"big":return"4.5px";case"huge":return"5px";case"massive":return"5.5px";default:return e}},jt=n.div(It||(It=At`
    width: 100%;
    display: flex;
    justify-content: ${0};
`),e=>"left"===e.position?"flex-start":"right"===e.position?"flex-end":"center"),Nt=n.div(Bt||(Bt=At`
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
`),e=>e.size?Tt(e.size):"3.5px","#E1E6EB",e=>e.size?Tt(e.size):"3.5px",e=>e.color?e.color:"#9B4DEE",e=>e.size?Pt(e.size):"2.5em",e=>e.size&&e.size?Pt(e.size):"2.5em"),Lt=({color:t,size:r,className:n,style:o,position:i})=>e.createElement(jt,{position:i},e.createElement(Nt,{color:t,size:r,style:o,className:n})),Vt=({textFirst:t,textEnd:r,firstStrong:n,notStrong:o,strong:i,loading:a,secondary:l,backPurple:c,children:d,notification:s,amount:p,width:u,icon:m,customIcon:f,iconPosition:b="right",colorIcon:h,noBorder:g,colorText:x,colorBackground:w,tertiary:v,size:k,rectangular:y,typeContent:_,hoverBackgroundColor:E,hoverTextColor:C,iconStyle:S,...O})=>s?e.createElement(Ft,Object.assign({},O),a?e.createElement(Lt,{size:"tiny"}):d||e.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",height:"50%",padding:10}},e.createElement("div",{style:{display:"flex",alignItems:"center"}},e.createElement(Mt,null,e.createElement(dt,{icon:ft,size:"lg",color:"#F7EA48"})),e.createElement("span",null,"notificações")),e.createElement(Dt,null,p))):e.createElement(Ot,Object.assign({},O,{secondary:l,backPurple:c,width:u,icon:m,noBorder:g,colorText:x,colorBackground:w,tertiary:v,size:k,rectangular:y,hoverBackgroundColor:E,hoverTextColor:C}),a?e.createElement(Lt,{size:"tiny"}):d||(_?function(t){switch(t){case"icon":return e.createElement("div",null,(m||f)&&e.createElement(e.Fragment,null,f||e.createElement(dt,{icon:m,color:h||"#9B4DEE",size:"lg",style:{marginLeft:"icon"==_?0:10,...S}})));default:return null}}(_):e.createElement("div",null,(m||f)&&"left"===b&&e.createElement(e.Fragment,null,f||e.createElement(dt,{icon:m,color:h||"#9B4DEE",size:"lg",style:{marginRight:10,...S}})),e.createElement($t,{firstStrong:n,strong:i,notStrong:o,colorText:x,tertiary:v,size:k},t+" "),e.createElement(zt,{firstStrong:n,strong:i,notStrong:o,colorText:x,tertiary:v,size:k},r),(m||f)&&"right"===b&&e.createElement(e.Fragment,null,f||e.createElement(dt,{icon:m,color:h||"#9B4DEE",size:"lg",style:{marginLeft:10,...S}})))));let Rt,qt,Ut,Wt,Ht,Xt,Yt=e=>e;const Zt=n.div(Rt||(Rt=Yt`
    ${0}
`),e=>o(e.open?qt||(qt=Yt`
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
              `):Ut||(Ut=Yt`
                  opacity: 1;
                  visibility: hidden;
              `))),Gt=n.div(Wt||(Wt=Yt`
    font-family: MontSerrat !important;
    ${0}
`),e=>e.open?o(Ht||(Ht=Yt`
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
              `),"#FFFFFF",()=>e.maxHeight?"string"==typeof e.maxHeight?e.maxHeight:e.maxHeight+"px":"100%"):o(Xt||(Xt=Yt`
                  transition: bottom 0.25s ease;
                  bottom: -100%;
              `))),Jt=({open:t,children:r,onClose:n,loading:o,maxHeight:i})=>e.createElement(Zt,{open:t,onClick:e=>{e.stopPropagation(),n()}},e.createElement(Gt,{open:t,onClick:e=>e.stopPropagation(),maxHeight:i},o&&e.createElement("div",{className:"loading-dialog"},e.createElement(Lt,null)),e.createElement("div",{className:"box-dialog"},r)));let Kt,Qt,er,tr,rr,nr,or,ir=e=>e;const ar=n.div(Kt||(Kt=ir`
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
`),e=>e.disabled?"50%":"100%",e=>e.width?"string"==typeof e.width?e.width:e.width+"px":"100%",e=>e.textColor?e.textColor:"#707070",e=>e.icon&&!e.action?"right"===e.iconPosition?"15px":"40px":e.action&&!e.icon?"left"===e.actionPosition?"40px":"15px":e.action||e.icon?"40px":"15px",e=>e.icon&&!e.action?"right"===e.iconPosition?"40px":"0px":e.action&&!e.icon?"left"===e.actionPosition?"0px":"40px":e.action&&e.icon?"40px":"0px","#F1F1F1",e=>e.date&&!e.isFieldActive?o(Qt||(Qt=ir`
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
              `)):null,e=>(e.requiredText||e.errorMessage)&&e.errorColor?e.errorColor:e.requiredText||e.errorMessage?"#E53935":"#ACACAC",e=>e.isFieldActive?o(er||(er=ir`
                      color: ${0};
                  `),"#9B4DEE"):o(tr||(tr=ir`
                      color: ${0};
                  `),"#707070"),e=>e.icon&&!e.action?"right"===e.iconPosition?"15px":"40px":e.action&&!e.icon?"left"===e.actionPosition?"40px":"15px":e.action||e.icon?"40px":"15px",e=>e.isFieldActive?o(rr||(rr=ir`
                      transform: translateY(-100%);
                      font-size: 14px;
                      color: ${0};
                  `),e=>(e.requiredText||e.errorMessage)&&e.errorColor?e.errorColor:e.requiredText||e.errorMessage?"#E53935":"#9B4DEE"):o(nr||(nr=ir`
                      font-size: 16px;
                      color: ${0};
                  `),e=>(e.requiredText||e.errorMessage)&&e.errorColor?e.errorColor:e.requiredText||e.errorMessage?"#E53935":"#707070"),e=>"right"===e.iconPosition&&"right: 0;",e=>e.actionPosition&&"left"===e.actionPosition?"left: 0;":"right: 0;"),lr=n.span(or||(or=ir`
    font-family: MontSerrat !important;
    font-size: 10px;
    margin-left: 0;
    color: ${0};
`),e=>e.errorColor?e.errorColor:"#E53935"),cr=({containerStyle:n,label:o,labelStyle:i,errorMessage:a,width:l,textColor:c,inputRef:d,name:s,icon:p,iconPosition:u,iconColor:m,action:f,...b})=>{const[h,g]=t(!1);return r(()=>{b.value&&(h||g(!0))},[b.value]),e.createElement("div",{style:{paddingBottom:a?0:20}},e.createElement(ar,{isFieldActive:h,errorMessage:a,containerStyle:n,width:l,disabled:b.disabled?b.disabled:void 0,style:n,textColor:c,icon:!!p,iconPosition:u,action:f,actionPosition:null==f?void 0:f.position,date:"date"===b.type},p&&e.createElement("div",{className:"icon"},e.createElement(dt,{icon:p,color:m||"#9B4DEE"})),f&&e.createElement("div",{className:"icon-action",onClick:f.onClick},e.createElement(dt,{icon:f.icon,color:f.iconColor||"#9B4DEE"})),e.createElement("input",Object.assign({},b,{onFocus:()=>{h||g(!0)},onBlur:()=>{h&&!b.value&&g(!1)},name:s,placeholder:h?b.placeholder:"",ref:d})),e.createElement("label",{style:i},e.createElement("span",null,o))),a?e.createElement(lr,null,a):null)},dr=({register:n,errors:o,validate:i,name:a,required:l,values:c,limit:d,minimum:s,...p})=>{var u;const[m,f]=t(!1),[b,h]=t(""),g=c?c(a)||p.defaultValue:p.value;return r(()=>{g&&(m||f(!0))},[g]),e.createElement("div",{style:{paddingBottom:b||o?0:20}},e.createElement(ar,{isFieldActive:m,requiredText:!(!o||"required"!==o.type),errorMessage:o,containerStyle:p.containerStyle,width:p.width,disabled:p.disabled,style:p.containerStyle,textColor:p.textColor,icon:!!p.icon,iconPosition:p.iconPosition,action:p.action,actionPosition:null===(u=p.action)||void 0===u?void 0:u.position,date:"date"===p.type},p.icon&&e.createElement("div",{className:"icon"},e.createElement(dt,{icon:p.icon,color:p.iconColor||"#9B4DEE"})),p.action&&e.createElement("div",{className:"icon-action",onClick:p.action.onClick},e.createElement(dt,{icon:p.action.icon,color:p.action.iconColor||"#9B4DEE"})),e.createElement("input",Object.assign({},p,{onFocus:()=>{m||f(!0)},onBlur:()=>{m&&!g&&f(!1)},name:a,placeholder:m?p.placeholder:"",ref:n?n({required:l,validate:i&&l?e=>i(e)?(h(i(e)),!1):(h(""),!0):d&&l?e=>e.length>d?(h(d+" caracteres permitidos."),!1):(h(""),!0):s&&l?e=>e.length<s?(h(`${a} deve ter ${s} ou mais caracteres.`),!1):(h(""),!0):null}):null})),e.createElement("label",{style:p.labelStyle},e.createElement("span",null,p.label))),o?e.createElement(lr,null,"required"===o.type?"Obrigatório":""+b):null)};let sr,pr,ur,mr,fr,br,hr,gr,xr,wr=e=>e;const vr=n.div(sr||(sr=wr`
    ${0}
`),e=>o(e.open?pr||(pr=wr`
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
              `):ur||(ur=wr`
                  opacity: 1;
                  visibility: hidden;
              `))),kr=n.div(mr||(mr=wr`
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
`),e=>e.width?"string"==typeof e.width?e.width.replace("%","")+"%":e.width+"px":e.size?(e=>{switch(e){case"mini":return"35%";case"tiny":return"45%";case"small":return"55%";case"large":return"65%";case"fullscreen":return"95%";default:return e}})(e.size):"80%","#FFFFFF"),yr=(n.div(fr||(fr=wr`
    transition: bottom 1s ease;
    width: 90%;
    background: ${0};
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`),"#FFFFFF"),n.div(br||(br=wr`
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
`),e=>e.noBorder?"none":"1px solid #E1E6EB",e=>e.iconBack?"20px 0":"20px 30px","#9B4DEE")),_r=n.div(hr||(hr=wr`
    padding: 20px 30px;
    cursor: pointer;
`)),Er=n.div(gr||(gr=wr`
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
`)),Cr=n.div(xr||(xr=wr`
    border-top: 1px solid ${0};
    margin: 0 30px;
    padding: 20px 0;
    display: flex;
    flex-direction: row-reverse;
`),"#E1E6EB"),Sr=({open:t,title:n,children:o,actions:i,width:a,onClose:l,closeOnDimerClick:c,loading:d,onBack:s,size:p,noBorder:u,closeIcon:m=!0})=>{function f(e){t&&"Escape"==e.key&&c&&(e.stopPropagation(),l())}return r(()=>(t?window.addEventListener("keydown",e=>f(e)):window.removeEventListener("keydown",e=>f(e)),window.removeEventListener("keydown",e=>f(e))),[t]),e.createElement(vr,{open:t,onClick:e=>{c&&(e.stopPropagation(),l())}},e.createElement(kr,{size:p,width:a,onClick:e=>e.stopPropagation()},e.createElement(yr,{iconBack:!!s,noBorder:u},e.createElement("div",{className:"name-icon-modal"},s?e.createElement(_r,{onClick:()=>s()},e.createElement(dt,{icon:ut,size:"lg",color:"#9B4DEE"})):null,e.createElement("strong",null,n)),m&&e.createElement(_r,{onClick:e=>{e.stopPropagation(),l()}},e.createElement(dt,{icon:xt,style:{fontSize:20},color:"#9B4DEE"}))),e.createElement(Er,null,d&&e.createElement("div",{className:"loading-modal"},e.createElement(Lt,null)),o),i&&e.createElement(Cr,null,i)))};let Or,$r,zr,Fr,Mr,Dr,Ir,Br=e=>e;const Ar=n.span(Or||(Or=Br`
    font-family: MontSerrat !important;
    font-size: 14px;
    color: ${0};
    margin-left: 15px;
`),e=>e.errorMessage?"#E0457B":e.labelColor?e.labelColor:"#9B4DEE"),Pr=n.div($r||($r=Br`
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
`),e=>e.width?e.width:"100%",e=>e.disabled?"50%":"100%",e=>e.textColor?e.textColor:"#707070",e=>e.width?"string"==typeof e.width?e.width:e.width+"px":"100%",e=>e.height?"string"==typeof e.height?e.height:e.height+"px":"100%",e=>e.errorMessage&&e.errorColor?e.errorColor:e.errorMessage?"#E53935":"#ACACAC","#F1F1F1",e=>e.errorMessage&&e.errorColor?e.errorColor:e.errorMessage?"#E53935":"#ACACAC",e=>e.isFieldActive?o(zr||(zr=Br`
                      color: ${0};
                  `),"#9B4DEE"):o(Fr||(Fr=Br`
                      color: ${0};
                  `),"#707070"),"#9B4DEE","rgba(155, 77, 238, 0.9)"),Tr=n.span(Mr||(Mr=Br`
    font-family: MontSerrat !important;
    font-size: 10px;
    margin-left: 0;
    margin-top: -2px;
    color: ${0};
`),e=>e.errorColor?e.errorColor:"#E0457B"),jr=n.div(Dr||(Dr=Br`
    font-family: MontSerrat !important;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 10px;
`)),Nr=n.div(Ir||(Ir=Br`
    font-size: 10px;
    color: ${0};
`),"#ACACAC"),Lr=({containerStyle:t,label:r,labelColor:n,labelStyle:o,errorMessage:i,errorColor:a,width:l,height:c,textColor:d,textAreaRef:s,lengthInfo:p,...u})=>e.createElement("div",{style:{paddingBottom:i?0:20}},r&&e.createElement(Ar,{errorMessage:i,labelColor:n},r),e.createElement(Pr,{errorMessage:i,errorColor:a,labelStyle:o,containerStyle:t,width:l,style:t,disabled:u.disabled,textColor:d,height:c},e.createElement("textarea",Object.assign({},u,{placeholder:u.placeholder,ref:s}))),e.createElement(jr,null,e.createElement(Tr,{errorColor:a},i),(p||"number"==typeof p)&&u.maxLength?e.createElement(Nr,null,`${"number"==typeof p?p:"string"==typeof u.value?u.value.length:0}/${u.maxLength} caracteres`):"")),Vr=({register:r,errors:n,validate:o,name:i,required:a,limit:l,minimum:c,...d})=>{const[s,p]=t("");return e.createElement(Lr,Object.assign({},d,{name:i,errorMessage:n?"required"===n.type?"Obrigatório":""+s:"",textAreaRef:r?r({required:a,validate:o&&a?e=>o(e)?(p(o(e)),!1):(p(""),!0):l&&a?e=>e.length>l?(p(l+" caracteres permitidos."),!1):(p(""),!0):c&&a?e=>e.length<c?(p(`${i} deve ter ${c} ou mais caracteres.`),!1):(p(""),!0):null}):null}))};let Rr;const qr=e=>{switch(e){case"mini":return"10px";case"tiny":return"12px";case"small":return"14px";case"medium":return"17px";case"large":return"20px";case"big":return"23px";case"huge":return"26px";case"massive":return"30px";default:return e}},Ur=n.div(Rr||(Rr=(e=>e)`
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
`),e=>e.sizeBox?(e=>{switch(e){case"mini":return"10px";case"tiny":return"13px";case"small":return"14px";case"medium":return"16px";case"large":return"18px";case"big":return"20px";case"huge":return"22px";case"massive":return"24px";default:return e}})(e.sizeBox):"17px","#707070",e=>e.disabled?"default":"pointer",e=>e.disabled?.5:1,e=>e.disabled?"default":"pointer",e=>e.disabled?.5:1,e=>e.sizeBox?qr(e.sizeBox):"17px",e=>e.sizeBox?qr(e.sizeBox):"17px","#E1E6EB","#E1E6EB",e=>e.sizeBox?qr(e.sizeBox):"17px",e=>e.sizeBox?qr(e.sizeBox):"17px","#68349F","#68349F","#FFFFFF",e=>e.sizeBox?(e=>{switch(e){case"mini":return"1px";case"tiny":return"1.2px";case"small":return"1.4px";case"medium":case"large":case"big":return"2px";case"huge":return"3px";case"massive":return"4px";default:return e}})(e.sizeBox):"2.5px",e=>e.sizeBox?(e=>{switch(e){case"mini":return"5px";case"tiny":return"6px";case"small":return"7px";case"medium":return"8px";case"large":return"9px";case"big":return"10px";case"huge":return"11px";case"massive":return"12px";default:return e}})(e.sizeBox):"8px",e=>e.sizeBox?(e=>{switch(e){case"mini":return"8px";case"tiny":return"10px";case"small":return"11px";case"medium":return"13px";case"large":return"16px";case"big":return"19px";case"huge":return"21px";case"massive":return"23px";default:return e}})(e.sizeBox):"13px",e=>e.checked?"#FFFFFF":"#E1E6EB"),Wr=({label:t,labelStyle:r,sizeBox:n,...o})=>e.createElement(Ur,{onClick:()=>o.disabled?null:o.onChange?o.onChange():null,disabled:o.disabled,sizeBox:n,checked:o.checked},e.createElement("input",Object.assign({type:"checkbox"},o)),e.createElement("div",null,e.createElement("span",null,e.createElement(dt,{icon:bt})),e.createElement("label",{style:r},t)));let Hr;const Xr=e=>{switch(e){case"mini":return"10px";case"tiny":return"12px";case"small":return"14px";case"medium":return"17px";case"large":return"20px";case"big":return"23px";case"huge":return"26px";case"massive":return"30px";default:return e}},Yr=e=>{switch(e){case"mini":return"2px";case"tiny":return"4px";case"small":return"6px";case"medium":return"9px";case"large":return"12px";case"big":return"15px";case"huge":return"18px";case"massive":return"22px";default:return e}},Zr=n.div(Hr||(Hr=(e=>e)`
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
`),e=>e.sizeBox?(e=>{switch(e){case"mini":return"10px";case"tiny":return"13px";case"small":return"14px";case"medium":return"16px";case"large":return"18px";case"big":return"20px";case"huge":return"22px";case"massive":return"24px";default:return e}})(e.sizeBox):"17px","#707070",e=>e.disabled?"default":"pointer",e=>e.disabled?.5:1,e=>e.sizeBox?(e=>{switch(e){case"mini":case"tiny":case"small":case"medium":return"0px";case"large":case"big":return"2px";case"huge":return"3px";case"massive":return"4px";default:return e}})(e.sizeBox):"0px",e=>e.sizeBox?(e=>{switch(e){case"mini":return"15px";case"tiny":return"18px";case"small":return"20px";case"medium":return"25px";case"large":return"28px";case"big":return"32px";case"huge":return"35px";case"massive":return"40px";default:return e}})(e.sizeBox):"25px",e=>e.disabled?"default":"pointer",e=>e.disabled?.5:1,e=>e.sizeBox?(e=>{switch(e){case"mini":return"5px";case"tiny":return"4px";case"small":return"3px";case"medium":return"1px";case"large":case"big":case"huge":case"massive":return"0px";default:return e}})(e.sizeBox):"1px",e=>e.sizeBox?Xr(e.sizeBox):"17px",e=>e.sizeBox?Xr(e.sizeBox):"17px","#D1D8DC","#E1E6EB",e=>e.sizeBox?(e=>{switch(e){case"mini":return"9px";case"tiny":return"8px";case"small":return"7px";case"medium":return"5px";case"large":case"big":case"huge":case"massive":return"4px";default:return e}})(e.sizeBox):"5px",e=>e.sizeBox?Yr(e.sizeBox):"9px",e=>e.sizeBox?Yr(e.sizeBox):"9px","#707070","#707070","#FFFFFF"),Gr=({label:t,labelStyle:r,sizeBox:n,...o})=>e.createElement(Zr,{onClick:()=>o.disabled?null:o.onChange?o.onChange():null,disabled:o.disabled,sizeBox:n},e.createElement("input",Object.assign({type:"radio"},o)),e.createElement("div",null,e.createElement("label",{style:r},t)));let Jr;const Kr=n.div(Jr||(Jr=(e=>e)`
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
`),e=>e.error?"":"20px",e=>e.error?"#E0457B":e.colorLabel?e.colorLabel:"#9B4DEE",e=>e.textAlign&&"center"===e.textAlign?"center":"left","#707070",e=>e.line?"0":"0.28571429rem",e=>e.line?"none":"",e=>e.line?"none":"",e=>e.line?"none":"",e=>e.brand?"#9B4DEE":"#707070",e=>e.brand?"#D8B8F9":"#FFFFFF",e=>e.brand?"#9B4DEE":"#707070",e=>e.brand?"#D8B8F9":e.line?"#ACACAC":"rgba(34, 36, 38, 0.15)",e=>e.line?0:"0.28571429rem",e=>e.line?"none":"20px",e=>e.line?"none":"",e=>e.line?"none":"",e=>e.line?"none":"",e=>e.brand?"#D8B8F9":"#ACACAC",e=>e.brand?"rgba(155, 77, 238, 0.2)":"#ACACAC",e=>e.error?"#E0457B":e.brand?"#D8B8F9":"#ACACAC",e=>e.error?"#E0457B":e.brand?"#D8B8F9":"#ACACAC",e=>e.error?"#E0457B":e.brand?"#D8B8F9":"#ACACAC",e=>e.brand?"#68349F":"#000000",e=>e.error?"#E0457B":e.brand?"#D8B8F9":"#ACACAC",e=>e.error?"#E0457B":e.brand?"#D8B8F9":"#ACACAC",e=>e.brand?"#9B4DEE":"#707070",e=>e.textAlign&&"center"===e.textAlign?"center":"left",e=>e.brand?"#68349F":"#000000",e=>e.brand?"rgba(155, 77, 238, 0.2)":"#ACACAC",e=>e.brand?"#D8B8F9":"#707070",e=>e.brand?"#9B4DEE":"#eeeeee",e=>e.brand?"#68349F":"#000000",e=>e.brand?"#68349F":"#000000","#9B4DEE",e=>e.brand?"#9B4DEE":"#E1E6EB",e=>e.brand?"#9B4DEE":"#E1E6EB",e=>e.brand?"#68349F":"#000000",e=>e.line?"#FFFFFF":"#e0457b25","#E0457B","#E0457B","#E0457B","#E0457B","#E0457B","#e0457b25","#e0457b25","#9B4DEE","rgba(155, 77, 238, 0.9)","#E0457B"),Qr=({options:t,brand:r,textAlign:n,errorMessage:o,label:a,colorLabel:l,line:c,...d})=>e.createElement(Kr,{brand:r,textAlign:n,error:o,colorLabel:l,line:c},a&&e.createElement("label",null,a),e.createElement(i,Object.assign({},d,{selection:!0,noResultsMessage:"Nenhum resultado encontrado",error:!!o,options:t})),o&&e.createElement("small",null,o)),en=({value:n,clearError:o,errors:i,name:a,register:l,required:c,setValue:d,validate:s,...p})=>{const[u,m]=t(),[f,b]=t("");return r(()=>{d(a,u||n)},[u]),r(()=>{m(n)},[n]),r(()=>{l&&l({name:a},{required:c,validate:s&&c?e=>s(e)?(b(s(e)),!1):(b(""),!0):null})},[l]),e.createElement(Qr,Object.assign({},p,{value:u,onChange:(e,t)=>{m(t.value),d(a,n),i&&o&&o(a)},line:p.line,errorMessage:i?"required"===i.type?"Obrigatório":""+f:""}))};let tn,rn,nn,on,an=e=>e;const ln=n.div(tn||(tn=an`
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
`),e=>e.width?"string"==typeof e.width?e.width:e.width+"px":"100%",e=>e.secondary?"#eeeeee":"#FFFFFF","#eeeeee",e=>e.icon?"15px":"0",e=>e.fontSizeTitle?"string"==typeof e.fontSizeTitle?e.fontSizeTitle:e.fontSizeTitle+"px":e.subtitle?"14px":"16px",e=>e.colorTitle?e.colorTitle:"#707070",e=>e.colorSubtitle?e.colorSubtitle:"#ACACAC",e=>e.colorValue?e.colorValue:"#707070",e=>o(e.open?rn||(rn=an`
                  border-top-left-radius: 20px;
                  border-top-right-radius: 20px;
              `):nn||(nn=an`
                  border-radius: 30px;
              `))),cn=n.div(on||(on=an`
    font-family: MontSerrat !important;
    width: ${0};
    padding: 20px;
    border: 1px solid ${0};
    border-top: 0;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    display: ${0};
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.16);
`),e=>e.width?e.width+"%":"100%","#eeeeee",e=>e.open?"block":"none"),dn=({title:t,colorTitle:r,subtitle:n,colorSubtitle:o,value:i,colorValue:a,children:l,secondary:c,open:d,onChange:s,width:p,icon:u,customIcon:m,colorIcon:f,fontSizeTitle:b})=>e.createElement(e.Fragment,null,e.createElement(ln,{colorTitle:r,colorSubtitle:o,colorValue:a,secondary:c,subtitle:n,open:d,onClick:()=>s(),width:p,icon:!(!u&&!m),fontSizeTitle:b},e.createElement("div",{className:"icon-title"},m||(u?e.createElement(dt,{icon:u,size:"lg",color:f||"#9B4DEE"}):null),e.createElement("div",{className:"title-subtitle"},e.createElement("span",{className:"title"},t),n&&e.createElement("span",{className:"subtitle"},n))),e.createElement("div",{className:"value-icon"},e.createElement("span",{className:"value"},i),e.createElement(dt,c?{icon:d?mt:pt,style:{fontSize:20}}:{icon:d?mt:pt,style:{fontSize:20},color:"#9B4DEE"}))),e.createElement(cn,{open:d,width:p},l));let sn,pn,un,mn=e=>e;const fn=e=>{switch(e){case"mini":return 30;case"tiny":return 35;case"small":return 40;case"medium":return 50;case"large":return 60;case"big":return 70;case"huge":return 80;case"massive":return 90;default:return 50}},bn=e=>{switch(e){case"mini":return 20;case"tiny":return 22.5;case"small":return 25;case"medium":return 30;case"large":return 35;case"big":return 40;case"huge":return 45;case"massive":return 50;default:return 30}},hn=e=>{switch(e){case"mini":case"tiny":case"small":case"medium":case"large":case"big":case"huge":case"massive":default:return 5}},gn=e=>{switch(e){case"mini":return"40px !important";case"tiny":return"50px !important";case"small":return"60px !important";case"medium":return"65px !important";case"large":return"70px !important";case"big":return"80px !important";case"huge":return"90px !important";case"massive":return"100px !important";default:return"65px !important"}},xn=n.label(sn||(sn=mn`
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
`),e=>e.size?fn(e.size)+"px":"50px",e=>e.disabled?"normal !important":"pointer !important",e=>e.disabled?"rgba(155, 77, 238, 0.2) !important":"#68349F !important",e=>e.size?fn(e.size)-(bn(e.size)-2*hn(e.size))-hn(e.size)+"px !important":"25px !important",e=>e.size?bn(e.size)+"px !important":"30px !important",e=>e.size?fn(e.size)+"px !important":"50px !important",e=>e.size?bn(e.size)/2+"px !important":"15px !important","#eeeeee",e=>e.size?bn(e.size)-2*hn(e.size)+"px !important":"20px !important",e=>e.size?bn(e.size)-2*hn(e.size)+"px !important":"20px !important","#F1F1F1"),wn=n.div(pn||(pn=mn`
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
`),e=>e.disabled?"0.5 !important":"1 !important",e=>e.size?gn(e.size):"65px !important","#eeeeee",e=>e.size?(e=>{switch(e){case"mini":return"8px !important";case"tiny":return"9px !important";case"small":return"10px !important";case"medium":return"11px !important";case"large":return"12px !important";case"big":return"13px !important";case"huge":return"14px !important";case"massive":return"15px !important";default:return"11px !important"}})(e.size):"11px !important",e=>e.disabled?"default !important":e.checked?"pointer !important":"default !important",e=>e.checked?"#FFFFFF !important":"#9B4DEE !important",e=>e.checked?"#707070 !important":"#FFFFFF !important",e=>e.disabled||e.checked?"default !important":"pointer !important",e=>e.checked?"#9B4DEE !important":"#FFFFFF !important",e=>e.checked?"#FFFFFF !important":"#707070 !important"),vn=n.div(un||(un=mn`
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
`),e=>e.disabled?"0.5 !important":"1 !important",e=>e.size?gn(e.size):"70px !important","#eeeeee",e=>e.size?(e=>{switch(e){case"mini":return"7px !important";case"tiny":return"8px !important";case"small":return"9px !important";case"medium":return"10px !important";case"large":return"11px !important";case"big":return"12px !important";case"huge":return"13px !important";case"massive":return"14px !important";default:return"10px !important"}})(e.size):"10px !important",e=>e.disabled?"default !important":e.checked?"pointer !important":"default !important",e=>e.checked?"#FFFFFF !important":"#E0457B !important",e=>e.checked?"#707070 !important":"#FFFFFF !important",e=>e.disabled||e.checked?"default !important":"pointer !important",e=>e.checked?"#4BA047 !important":"#FFFFFF !important",e=>e.checked?"#FFFFFF !important":"#707070 !important"),kn=({type:t,checked:r,onChange:n,size:o,disabled:i,selectionRef:a})=>{switch(t){case"switch":return e.createElement(xn,{size:o,ref:a,disabled:i},e.createElement("input",{type:"checkbox",defaultChecked:r}),e.createElement("span",{className:"control",onClick:()=>i?null:n?n():null}));case"toggle":return e.createElement(wn,{checked:r,ref:a,size:o,disabled:i},e.createElement("div",{className:"btn left",onClick:()=>i?null:r&&n?n():null},e.createElement("span",null,"não")),e.createElement("div",{className:"btn right",onClick:()=>i||r?null:n?n():null},e.createElement("span",null,"sim")));case"activeInactive":return e.createElement(vn,{checked:r,ref:a,size:o,disabled:i},e.createElement("div",{className:"btn left",onClick:()=>i?null:r&&n?n():null},e.createElement("span",null,r?"desativar":"inativo")),e.createElement("div",{className:"btn right",onClick:()=>i||r?null:n?n():null},e.createElement("span",null,r?"ativo":"ativar")))}return e.createElement("div",null)};let yn;const _n=e=>{switch(e){case"small":return"10px";case"medium":return"15px";case"big":return"22px";default:return"15px"}},En=n.div(yn||(yn=(e=>e)`
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
`),e=>e.disabled?"0.5":"1",e=>e.size?(e=>{switch(e){case"small":return"20px";case"medium":return"30px";case"big":return"40px";default:return"30px"}})(e.size):"30px",e=>e.size?_n(e.size):"15px",e=>e.size?(e=>{switch(e){case"small":return"20px";case"medium":return"30px";case"big":return"40px";default:return"30px"}})(e.size):"30px","#707070",e=>e.noLess?"0.2":"1",e=>e.disabled||e.noLess?"default":"pointer",e=>e.noMore?"0.2":"1",e=>e.disabled||e.noMore?"default":"pointer",e=>{return e.size?(r=e.value,"small"===(t=e.size)?r<100?"15px":r<1e3?"20px":r<1e4?"25px":"30px":"medium"===t?r<100?"20px":r<1e3?"30px":r<1e4?"40px":"50px":"big"===t?r<100?"30px":r<1e3?"40px":r<1e4?"55px":"70px":"50px"):"15px";var t,r},e=>e.size?_n(e.size):"15px","#707070"),Cn=({size:n,disabled:o,value:i,limit:a,minimum:l,more:c,less:d,onChange:s})=>{const[p,u]=t(!1),[m,f]=t(!1),[b,h]=t("medium");return r(()=>{n&&h(n)},[n]),r(()=>{u(!!(l&&i<=l||i<=0))},[l,i]),r(()=>{f(!!(a&&i>=a))},[a,i]),e.createElement(En,{limit:a,minimum:l,value:i,size:b,disabled:o,noLess:p,noMore:m},e.createElement("div",{className:"btn left",onClick:()=>o?null:d?p?null:d():null},e.createElement(dt,{icon:ht})),e.createElement("input",{value:i||0===i?i.toString():"",type:"number",onChange:e=>s?s(Number(e.target.value)):null,disabled:o||!s}),e.createElement("div",{className:"btn right",onClick:()=>o||m?null:c?c():null},e.createElement(dt,{icon:gt})))};let Sn,On,$n=e=>e;const zn=n.div(Sn||(Sn=$n`
    font-family: MontSerrat !important;
    padding: 20px;
    box-shadow: ${0};
    background-color: ${0};
    border-radius: 30px;
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
`),e=>"min-shadow"==e.type?"0px 2px 4px #00000029":"0 20px 50px 0 rgba(0, 0, 0, 0.16)","#FFFFFF",e=>e.width?"string"==typeof e.width?e.width:e.width+"px":"100%"),Fn=n.a(On||(On=$n`
    font-family: MontSerrat !important;
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
`),"#eeeeee","#D1D8DC",e=>e.width?"string"==typeof e.width?e.width:e.width+"px":"100%","#F1F1F1",e=>e.colorText?e.colorText:"#68349F"),Mn=({children:t,width:r,type:n,style:o,icon:i,sizeIcon:a,colorIcon:l,text:c,colorText:d,onClick:s,loading:p,className:u,...m})=>{function f(n){return e.createElement(zn,{className:u,width:r,style:o,type:n},p&&e.createElement("div",{className:"loading-card"},e.createElement(Lt,null)),t)}switch(n){case"shadow":return f("shadow");case"button":return e.createElement(Fn,{style:o,colorText:d,onClick:s,href:m.href,width:r,className:u},i&&e.createElement(e.Fragment,null,e.createElement(dt,{icon:i,color:l||"#68349F",size:a||"lg"})),e.createElement("span",null,c));case"min-shadow":return f("min-shadow");default:return e.createElement("div",null)}};let Dn;const In=n.div(Dn||(Dn=(e=>e)`
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

`),e=>e.brand?"#D8B8F9":"#ACACAC",e=>e.brand?"#9B4DEE":"#707070",e=>e.brand?"#D8B8F9":"#FFFFFF",e=>e.brand?"rgba(155, 77, 238, 0.2)":"#F1F1F1",e=>e.labelColor?e.labelColor:"#9B4DEE");var Bn=e&&"object"==typeof e&&"default"in e?e.default:e;function An(){return(An=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Pn(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Tn=function(e,t,r,n,o,i,a,l){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[r,n,o,i,a,l],s=0;(c=new Error(t.replace(/%s/g,function(){return d[s++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}};function jn(e,t,r){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=r;else{var n=e.createTextRange();n.collapse(!0),n.moveStart("character",t),n.moveEnd("character",r-t),n.select()}}var Nn={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function Ln(e,t,r){var n="",o="",i=null,a=[];if(void 0===t&&(t="_"),null==r&&(r=Nn),!e||"string"!=typeof e)return{maskChar:t,formatChars:r,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(e){l=!l&&"\\"===e||(l||!r[e]?(a.push(n.length),n.length===a.length-1&&(o+=e)):i=n.length+1,n+=e,!1)}),{maskChar:t,formatChars:r,prefix:o,mask:n,lastEditablePosition:i,permanents:a}}function Vn(e,t){return-1!==e.permanents.indexOf(t)}function Rn(e,t,r){var n=e.mask,o=e.formatChars;return!!r&&(Vn(e,t)?n[t]===r:new RegExp(o[n[t]]).test(r))}function qn(e,t){return t.split("").every(function(t,r){return Vn(e,r)||!Rn(e,r,t)})}function Un(e,t){var r=e.prefix;if(!e.maskChar){for(;t.length>r.length&&Vn(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var n=r.length,o=t.length;o>=r.length;o--){var i=t[o];if(!Vn(e,o)&&Rn(e,o,i)){n=o+1;break}}return n}function Wn(e,t){return Un(e,t)===e.mask.length}function Hn(e,t){var r=e.maskChar,n=e.mask,o=e.prefix;if(!r){for((t=Xn(e,"",t,0)).length<o.length&&(t=o);t.length<n.length&&Vn(e,t.length);)t+=n[t.length];return t}if(t)return Xn(e,Hn(e,""),t,0);for(var i=0;i<n.length;i++)Vn(e,i)?t+=n[i]:t+=r;return t}function Xn(e,t,r,n){var o=e.mask,i=e.maskChar,a=e.prefix,l=r.split(""),c=Wn(e,t);return!i&&n>t.length&&(t+=o.slice(t.length,n)),l.every(function(r){for(;s=r,Vn(e,d=n)&&s!==o[d];){if(n>=t.length&&(t+=o[n]),l=r,i&&Vn(e,n)&&l===i)return!0;if(++n>=o.length)return!1}var l,d,s;return!Rn(e,n,r)&&r!==i||(n<t.length?t=i||c||n<a.length?t.slice(0,n)+r+t.slice(n+1):(t=t.slice(0,n)+r+t.slice(n),Hn(e,t)):i||(t+=r),++n<o.length)}),t}function Yn(e,t){for(var r=e.mask,n=t;n<r.length;++n)if(!Vn(e,n))return n;return null}function Zn(e){return e||0===e?e+"":""}function Gn(e){return"function"==typeof e}function Jn(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function Kn(e){return(Jn()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(e,1e3/60)})(e)}function Qn(e){(Jn()||clearTimeout)(e)}var eo=function(e){function t(t){var r=e.call(this,t)||this;r.focused=!1,r.mounted=!1,r.previousSelection=null,r.selectionDeferId=null,r.saveSelectionLoopDeferId=null,r.saveSelectionLoop=function(){r.previousSelection=r.getSelection(),r.saveSelectionLoopDeferId=Kn(r.saveSelectionLoop)},r.runSaveSelectionLoop=function(){null===r.saveSelectionLoopDeferId&&r.saveSelectionLoop()},r.stopSaveSelectionLoop=function(){null!==r.saveSelectionLoopDeferId&&(Qn(r.saveSelectionLoopDeferId),r.saveSelectionLoopDeferId=null,r.previousSelection=null)},r.getInputDOMNode=function(){if(!r.mounted)return null;var e=h.findDOMNode(Pn(Pn(r))),t="undefined"!=typeof window&&e instanceof window.Element;if(e&&!t)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e},r.getInputValue=function(){var e=r.getInputDOMNode();return e?e.value:null},r.setInputValue=function(e){var t=r.getInputDOMNode();t&&(r.value=e,t.value=e)},r.setCursorToEnd=function(){var e=Un(r.maskOptions,r.value),t=Yn(r.maskOptions,e);null!==t&&r.setCursorPosition(t)},r.setSelection=function(e,t,n){void 0===n&&(n={});var o=r.getInputDOMNode(),i=r.isFocused();o&&i&&(n.deferred||jn(o,e,t),null!==r.selectionDeferId&&Qn(r.selectionDeferId),r.selectionDeferId=Kn(function(){r.selectionDeferId=null,jn(o,e,t)}),r.previousSelection={start:e,end:t,length:Math.abs(t-e)})},r.getSelection=function(){return function(e){var t=0,r=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,r=e.selectionEnd;else{var n=document.selection.createRange();n.parentElement()===e&&(t=-n.moveStart("character",-e.value.length),r=-n.moveEnd("character",-e.value.length))}return{start:t,end:r,length:r-t}}(r.getInputDOMNode())},r.getCursorPosition=function(){return r.getSelection().start},r.setCursorPosition=function(e){r.setSelection(e,e)},r.isFocused=function(){return r.focused},r.getBeforeMaskedValueChangeConfig=function(){var e=r.maskOptions;return{mask:e.mask,maskChar:e.maskChar,permanents:e.permanents,alwaysShowMask:!!r.props.alwaysShowMask,formatChars:e.formatChars}},r.isInputAutofilled=function(e,t,n,o){var i=r.getInputDOMNode();try{if(i.matches(":-webkit-autofill"))return!0}catch(e){}return!r.focused||o.end<n.length&&t.end===e.length},r.onChange=function(e){var t=Pn(Pn(r)).beforePasteState,n=Pn(Pn(r)).previousSelection,o=r.props.beforeMaskedValueChange,i=r.getInputValue(),a=r.value,l=r.getSelection();r.isInputAutofilled(i,l,a,n)&&(a=Hn(r.maskOptions,""),n={start:0,end:0,length:0}),t&&(l={start:(n=t.selection).start+i.length,end:n.start+i.length,length:0},i=(a=t.value).slice(0,n.start)+i+a.slice(n.end),r.beforePasteState=null);var c=function(e,t,r,n,o){var i=e.mask,a=e.prefix,l=e.lastEditablePosition,c=t,d="",s=0,p=0,u=Math.min(o.start,r.start);return r.end>o.start?p=(s=function(e,t,r,n){var o=e.mask,i=e.maskChar,a=r.split(""),l=n;return a.every(function(t){for(;a=t,Vn(e,r=n)&&a!==o[r];)if(++n>=o.length)return!1;var r,a;return(Rn(e,n,t)||t===i)&&n++,n<o.length}),n-l}(e,0,d=c.slice(o.start,r.end),u))?o.length:0:c.length<n.length&&(p=n.length-c.length),c=n,p&&(1!==p||o.length||(u=o.start===r.start?Yn(e,r.start):function(e,t){for(var r=t;0<=r;--r)if(!Vn(e,r))return r;return null}(e,r.start)),c=function(e,t,r,n){var o=r+n,i=e.maskChar,a=e.mask,l=e.prefix,c=t.split("");if(i)return c.map(function(t,n){return n<r||o<=n?t:Vn(e,n)?a[n]:i}).join("");for(var d=o;d<c.length;d++)Vn(e,d)&&(c[d]="");return r=Math.max(l.length,r),c.splice(r,o-r),t=c.join(""),Hn(e,t)}(e,c,u,p)),c=Xn(e,c,d,u),(u+=s)>=i.length?u=i.length:u<a.length&&!s?u=a.length:u>=a.length&&u<l&&s&&(u=Yn(e,u)),d||(d=null),{value:c=Hn(e,c),enteredString:d,selection:{start:u,end:u}}}(r.maskOptions,i,l,a,n),d=c.enteredString,s=c.selection,p=c.value;if(Gn(o)){var u=o({value:p,selection:s},{value:a,selection:n},d,r.getBeforeMaskedValueChangeConfig());p=u.value,s=u.selection}r.setInputValue(p),Gn(r.props.onChange)&&r.props.onChange(e),r.isWindowsPhoneBrowser?r.setSelection(s.start,s.end,{deferred:!0}):r.setSelection(s.start,s.end)},r.onFocus=function(e){var t=r.props.beforeMaskedValueChange,n=r.maskOptions,o=n.mask,i=n.prefix;if(r.focused=!0,r.mounted=!0,o){if(r.value)Un(r.maskOptions,r.value)<r.maskOptions.mask.length&&r.setCursorToEnd();else{var a=Hn(r.maskOptions,i),l=Hn(r.maskOptions,a),c=Un(r.maskOptions,l),d=Yn(r.maskOptions,c),s={start:d,end:d};if(Gn(t)){var p=t({value:l,selection:s},{value:r.value,selection:null},null,r.getBeforeMaskedValueChangeConfig());l=p.value,s=p.selection}var u=l!==r.getInputValue();u&&r.setInputValue(l),u&&Gn(r.props.onChange)&&r.props.onChange(e),r.setSelection(s.start,s.end)}r.runSaveSelectionLoop()}Gn(r.props.onFocus)&&r.props.onFocus(e)},r.onBlur=function(e){var t=r.props.beforeMaskedValueChange,n=r.maskOptions.mask;if(r.stopSaveSelectionLoop(),r.focused=!1,n&&!r.props.alwaysShowMask&&qn(r.maskOptions,r.value)){var o="";Gn(t)&&(o=t({value:o,selection:null},{value:r.value,selection:r.previousSelection},null,r.getBeforeMaskedValueChangeConfig()).value);var i=o!==r.getInputValue();i&&r.setInputValue(o),i&&Gn(r.props.onChange)&&r.props.onChange(e)}Gn(r.props.onBlur)&&r.props.onBlur(e)},r.onMouseDown=function(e){!r.focused&&document.addEventListener&&(r.mouseDownX=e.clientX,r.mouseDownY=e.clientY,r.mouseDownTime=(new Date).getTime(),document.addEventListener("mouseup",function e(t){if(document.removeEventListener("mouseup",e),r.focused){var n=Math.abs(t.clientX-r.mouseDownX),o=Math.abs(t.clientY-r.mouseDownY),i=Math.max(n,o),a=(new Date).getTime()-r.mouseDownTime;(i<=10&&a<=200||i<=5&&a<=300)&&r.setCursorToEnd()}})),Gn(r.props.onMouseDown)&&r.props.onMouseDown(e)},r.onPaste=function(e){Gn(r.props.onPaste)&&r.props.onPaste(e),e.defaultPrevented||(r.beforePasteState={value:r.getInputValue(),selection:r.getSelection()},r.setInputValue(""))},r.handleRef=function(e){null==r.props.children&&Gn(r.props.inputRef)&&r.props.inputRef(e)};var n=t.alwaysShowMask,o=t.beforeMaskedValueChange,i=t.defaultValue,a=t.value;r.maskOptions=Ln(t.mask,t.maskChar,t.formatChars),null==i&&(i=""),null==a&&(a=i);var l=Zn(a);if(r.maskOptions.mask&&(n||l)&&(l=Hn(r.maskOptions,l),Gn(o))){var c=t.value;null==t.value&&(c=i),l=o({value:l,selection:null},{value:c=Zn(c),selection:null},null,r.getBeforeMaskedValueChangeConfig()).value}return r.value=l,r}!function(e,t){e.prototype=Object.create(t.prototype),function(e,t){for(var r=Object.getOwnPropertyNames(t),n=0;n<r.length;n++){var o=r[n],i=Object.getOwnPropertyDescriptor(t,o);i&&i.configurable&&void 0===e[o]&&Object.defineProperty(e,o,i)}}(e.prototype.constructor=e,t)}(t,e);var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=function(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),r=navigator.userAgent;return e.test(r)&&t.test(r)}(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},r.componentDidUpdate=function(){var e=this.previousSelection,t=this.props,r=t.beforeMaskedValueChange,n=t.mask,o=t.maskChar,i=t.formatChars,a=this.maskOptions,l=t.alwaysShowMask||this.isFocused(),c=null!=this.props.value,d=c?Zn(this.props.value):this.value,s=e?e.start:null;if(this.maskOptions=Ln(n,o,i),this.maskOptions.mask){!a.mask&&this.isFocused()&&this.runSaveSelectionLoop();var p=this.maskOptions.mask&&this.maskOptions.mask!==a.mask;if(a.mask||c||(d=this.getInputValue()),(p||this.maskOptions.mask&&(d||l))&&(d=Hn(this.maskOptions,d)),p){var u=Un(this.maskOptions,d);(null===s||u<s)&&(s=Wn(this.maskOptions,d)?u:Yn(this.maskOptions,u))}!this.maskOptions.mask||!qn(this.maskOptions,d)||l||c&&this.props.value||(d="");var m={start:s,end:s};if(Gn(r)){var f=r({value:d,selection:m},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());d=f.value,m=f.selection}this.value=d;var b=this.getInputValue()!==this.value;b?(this.setInputValue(this.value),this.forceUpdate()):p&&this.forceUpdate();var h=!1;null!=m.start&&null!=m.end&&(h=!e||e.start!==m.start||e.end!==m.end),(h||b)&&this.setSelection(m.start,m.end)}else a.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},r.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&Qn(this.selectionDeferId),this.stopSaveSelectionLoop()},r.render=function(){var e,t=this.props,r=t.children,n=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)0<=t.indexOf(r=i[n])||(o[r]=e[r]);return o}(t,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(r){Gn(r)||Tn(!1);var o=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],i=An({},n);o.forEach(function(e){return delete i[e]}),e=r(i),o.filter(function(t){return null!=e.props[t]&&e.props[t]!==n[t]}).length&&Tn(!1)}else e=Bn.createElement("input",An({ref:this.handleRef},n));var a={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(n.disabled||n.readOnly||(a.onChange=this.onChange,a.onPaste=this.onPaste,a.onMouseDown=this.onMouseDown),null!=n.value&&(a.value=this.value)),e=Bn.cloneElement(e,a)},t}(Bn.Component),to=function(){};if("production"!==process.env.NODE_ENV){var ro=function(e,t){var r=arguments.length;t=new Array(r>1?r-1:0);for(var n=1;n<r;n++)t[n-1]=arguments[n];var o=0,i="Warning: "+e.replace(/%s/g,function(){return t[o++]});"undefined"!=typeof console&&console.error(i);try{throw new Error(i)}catch(e){}};to=function(e,t,r){var n=arguments.length;r=new Array(n>2?n-2:0);for(var o=2;o<n;o++)r[o-2]=arguments[o];if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");e||ro.apply(null,[t].concat(r))}}var no=to;function oo(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var io=oo(e),ao=oo(function(e,t,r,n,o,i,a,l){if("production"!==process.env.NODE_ENV&&void 0===t)throw new Error("invariant requires an error message argument");if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[r,n,o,i,a,l],s=0;(c=new Error(t.replace(/%s/g,function(){return d[s++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}),lo=oo(no);function co(){return(co=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function so(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function po(e,t,r){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=r;else{var n=e.createTextRange();n.collapse(!0),n.moveStart("character",t),n.moveEnd("character",r-t),n.select()}}var uo={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function mo(e,t,r){var n="",o="",i=null,a=[];if(void 0===t&&(t="_"),null==r&&(r=uo),!e||"string"!=typeof e)return{maskChar:t,formatChars:r,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(e){l||"\\"!==e?(l||!r[e]?(a.push(n.length),n.length===a.length-1&&(o+=e)):i=n.length+1,n+=e,l=!1):l=!0}),{maskChar:t,formatChars:r,prefix:o,mask:n,lastEditablePosition:i,permanents:a}}function fo(e,t){return-1!==e.permanents.indexOf(t)}function bo(e,t,r){var n=e.mask,o=e.formatChars;return!!r&&(fo(e,t)?n[t]===r:new RegExp(o[n[t]]).test(r))}function ho(e,t){return t.split("").every(function(t,r){return fo(e,r)||!bo(e,r,t)})}function go(e,t){var r=e.prefix;if(!e.maskChar){for(;t.length>r.length&&fo(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var n=r.length,o=t.length;o>=r.length;o--){var i=t[o];if(!fo(e,o)&&bo(e,o,i)){n=o+1;break}}return n}function xo(e,t){return go(e,t)===e.mask.length}function wo(e,t){var r=e.maskChar,n=e.mask,o=e.prefix;if(!r){for((t=vo(e,"",t,0)).length<o.length&&(t=o);t.length<n.length&&fo(e,t.length);)t+=n[t.length];return t}if(t)return vo(e,wo(e,""),t,0);for(var i=0;i<n.length;i++)fo(e,i)?t+=n[i]:t+=r;return t}function vo(e,t,r,n){var o=e.mask,i=e.maskChar,a=e.prefix,l=r.split(""),c=xo(e,t),d=function(t,r){return!i||!fo(e,r)||t!==i};return!i&&n>t.length&&(t+=o.slice(t.length,n)),l.every(function(r){for(;s=r,fo(e,l=n)&&s!==o[l];){if(n>=t.length&&(t+=o[n]),!d(r,n))return!0;if(++n>=o.length)return!1}var l,s;return!bo(e,n,r)&&r!==i||(n<t.length?i||c||n<a.length?t=t.slice(0,n)+r+t.slice(n+1):(t=t.slice(0,n)+r+t.slice(n),t=wo(e,t)):i||(t+=r),++n<o.length)}),t}function ko(e,t){for(var r=e.mask,n=t;n<r.length;++n)if(!fo(e,n))return n;return null}function yo(e){return e||0===e?e+"":""}function _o(e){return"function"==typeof e}function Eo(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function Co(e){return(Eo()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(e,1e3/60)})(e)}function So(e){(Eo()||clearTimeout)(e)}var Oo=function(e){function t(t){var r;(r=e.call(this,t)||this).focused=!1,r.mounted=!1,r.previousSelection=null,r.selectionDeferId=null,r.saveSelectionLoopDeferId=null,r.saveSelectionLoop=function(){r.previousSelection=r.getSelection(),r.saveSelectionLoopDeferId=Co(r.saveSelectionLoop)},r.runSaveSelectionLoop=function(){null===r.saveSelectionLoopDeferId&&r.saveSelectionLoop()},r.stopSaveSelectionLoop=function(){null!==r.saveSelectionLoopDeferId&&(So(r.saveSelectionLoopDeferId),r.saveSelectionLoopDeferId=null,r.previousSelection=null)},r.getInputDOMNode=function(){if(!r.mounted)return null;var e=h.findDOMNode(so(so(r))),t="undefined"!=typeof window&&e instanceof window.Element;if(e&&!t)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e},r.getInputValue=function(){var e=r.getInputDOMNode();return e?e.value:null},r.setInputValue=function(e){var t=r.getInputDOMNode();t&&(r.value=e,t.value=e)},r.setCursorToEnd=function(){var e=go(r.maskOptions,r.value),t=ko(r.maskOptions,e);null!==t&&r.setCursorPosition(t)},r.setSelection=function(e,t,n){void 0===n&&(n={});var o=r.getInputDOMNode(),i=r.isFocused();o&&i&&(n.deferred||po(o,e,t),null!==r.selectionDeferId&&So(r.selectionDeferId),r.selectionDeferId=Co(function(){r.selectionDeferId=null,po(o,e,t)}),r.previousSelection={start:e,end:t,length:Math.abs(t-e)})},r.getSelection=function(){return function(e){var t=0,r=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,r=e.selectionEnd;else{var n=document.selection.createRange();n.parentElement()===e&&(t=-n.moveStart("character",-e.value.length),r=-n.moveEnd("character",-e.value.length))}return{start:t,end:r,length:r-t}}(r.getInputDOMNode())},r.getCursorPosition=function(){return r.getSelection().start},r.setCursorPosition=function(e){r.setSelection(e,e)},r.isFocused=function(){return r.focused},r.getBeforeMaskedValueChangeConfig=function(){var e=r.maskOptions;return{mask:e.mask,maskChar:e.maskChar,permanents:e.permanents,alwaysShowMask:!!r.props.alwaysShowMask,formatChars:e.formatChars}},r.isInputAutofilled=function(e,t,n,o){var i=r.getInputDOMNode();try{if(i.matches(":-webkit-autofill"))return!0}catch(e){}return!r.focused||o.end<n.length&&t.end===e.length},r.onChange=function(e){var t=so(so(r)).beforePasteState,n=so(so(r)).previousSelection,o=r.props.beforeMaskedValueChange,i=r.getInputValue(),a=r.value,l=r.getSelection();r.isInputAutofilled(i,l,a,n)&&(a=wo(r.maskOptions,""),n={start:0,end:0,length:0}),t&&(l={start:(n=t.selection).start+i.length,end:n.start+i.length,length:0},i=(a=t.value).slice(0,n.start)+i+a.slice(n.end),r.beforePasteState=null);var c=function(e,t,r,n,o){var i=e.mask,a=e.prefix,l=e.lastEditablePosition,c=t,d="",s=0,p=0,u=Math.min(o.start,r.start);return r.end>o.start?p=(s=function(e,t,r,n){var o=e.mask,i=e.maskChar,a=r.split(""),l=n;return a.every(function(t){for(;a=t,fo(e,r=n)&&a!==o[r];)if(++n>=o.length)return!1;var r,a;return(bo(e,n,t)||t===i)&&n++,n<o.length}),n-l}(e,0,d=c.slice(o.start,r.end),u))?o.length:0:c.length<n.length&&(p=n.length-c.length),c=n,p&&(1!==p||o.length||(u=o.start===r.start?ko(e,r.start):function(e,t){for(var r=t;r>=0;--r)if(!fo(e,r))return r;return null}(e,r.start)),c=function(e,t,r,n){var o=r+n,i=e.maskChar,a=e.mask,l=e.prefix,c=t.split("");if(!i){for(var d=o;d<c.length;d++)fo(e,d)&&(c[d]="");return r=Math.max(l.length,r),c.splice(r,o-r),t=c.join(""),wo(e,t)}return c.map(function(t,n){return n<r||n>=o?t:fo(e,n)?a[n]:i}).join("")}(e,c,u,p)),c=vo(e,c,d,u),(u+=s)>=i.length?u=i.length:u<a.length&&!s?u=a.length:u>=a.length&&u<l&&s&&(u=ko(e,u)),d||(d=null),{value:c=wo(e,c),enteredString:d,selection:{start:u,end:u}}}(r.maskOptions,i,l,a,n),d=c.enteredString,s=c.selection,p=c.value;if(_o(o)){var u=o({value:p,selection:s},{value:a,selection:n},d,r.getBeforeMaskedValueChangeConfig());p=u.value,s=u.selection}r.setInputValue(p),_o(r.props.onChange)&&r.props.onChange(e),r.isWindowsPhoneBrowser?r.setSelection(s.start,s.end,{deferred:!0}):r.setSelection(s.start,s.end)},r.onFocus=function(e){var t=r.props.beforeMaskedValueChange,n=r.maskOptions,o=n.mask,i=n.prefix;if(r.focused=!0,r.mounted=!0,o){if(r.value)go(r.maskOptions,r.value)<r.maskOptions.mask.length&&r.setCursorToEnd();else{var a=wo(r.maskOptions,i),l=wo(r.maskOptions,a),c=go(r.maskOptions,l),d=ko(r.maskOptions,c),s={start:d,end:d};if(_o(t)){var p=t({value:l,selection:s},{value:r.value,selection:null},null,r.getBeforeMaskedValueChangeConfig());l=p.value,s=p.selection}var u=l!==r.getInputValue();u&&r.setInputValue(l),u&&_o(r.props.onChange)&&r.props.onChange(e),r.setSelection(s.start,s.end)}r.runSaveSelectionLoop()}_o(r.props.onFocus)&&r.props.onFocus(e)},r.onBlur=function(e){var t=r.props.beforeMaskedValueChange,n=r.maskOptions.mask;if(r.stopSaveSelectionLoop(),r.focused=!1,n&&!r.props.alwaysShowMask&&ho(r.maskOptions,r.value)){var o="";_o(t)&&(o=t({value:o,selection:null},{value:r.value,selection:r.previousSelection},null,r.getBeforeMaskedValueChangeConfig()).value);var i=o!==r.getInputValue();i&&r.setInputValue(o),i&&_o(r.props.onChange)&&r.props.onChange(e)}_o(r.props.onBlur)&&r.props.onBlur(e)},r.onMouseDown=function(e){!r.focused&&document.addEventListener&&(r.mouseDownX=e.clientX,r.mouseDownY=e.clientY,r.mouseDownTime=(new Date).getTime(),document.addEventListener("mouseup",function e(t){if(document.removeEventListener("mouseup",e),r.focused){var n=Math.abs(t.clientX-r.mouseDownX),o=Math.abs(t.clientY-r.mouseDownY),i=Math.max(n,o),a=(new Date).getTime()-r.mouseDownTime;(i<=10&&a<=200||i<=5&&a<=300)&&r.setCursorToEnd()}})),_o(r.props.onMouseDown)&&r.props.onMouseDown(e)},r.onPaste=function(e){_o(r.props.onPaste)&&r.props.onPaste(e),e.defaultPrevented||(r.beforePasteState={value:r.getInputValue(),selection:r.getSelection()},r.setInputValue(""))},r.handleRef=function(e){null==r.props.children&&_o(r.props.inputRef)&&r.props.inputRef(e)};var n=t.alwaysShowMask,o=t.beforeMaskedValueChange,i=t.defaultValue,a=t.value;r.maskOptions=mo(t.mask,t.maskChar,t.formatChars),null==i&&(i=""),null==a&&(a=i);var l=yo(a);if(r.maskOptions.mask&&(n||l)&&(l=wo(r.maskOptions,l),_o(o))){var c=t.value;null==t.value&&(c=i),l=o({value:l,selection:null},{value:c=yo(c),selection:null},null,r.getBeforeMaskedValueChangeConfig()).value}return r.value=l,r}var r,n;n=e,(r=t).prototype=Object.create(n.prototype),r.prototype.constructor=r,function(e,t){for(var r=Object.getOwnPropertyNames(t),n=0;n<r.length;n++){var o=r[n],i=Object.getOwnPropertyDescriptor(t,o);i&&i.configurable&&void 0===e[o]&&Object.defineProperty(e,o,i)}}(r,n);var o=t.prototype;return o.componentDidMount=function(){var e,t,r;this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=(e=new RegExp("windows","i"),t=new RegExp("phone","i"),r=navigator.userAgent,e.test(r)&&t.test(r)),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},o.componentDidUpdate=function(){var e=this.previousSelection,t=this.props,r=t.beforeMaskedValueChange,n=t.mask,o=t.maskChar,i=t.formatChars,a=this.maskOptions,l=t.alwaysShowMask||this.isFocused(),c=null!=this.props.value,d=c?yo(this.props.value):this.value,s=e?e.start:null;if(this.maskOptions=mo(n,o,i),this.maskOptions.mask){!a.mask&&this.isFocused()&&this.runSaveSelectionLoop();var p=this.maskOptions.mask&&this.maskOptions.mask!==a.mask;if(a.mask||c||(d=this.getInputValue()),(p||this.maskOptions.mask&&(d||l))&&(d=wo(this.maskOptions,d)),p){var u=go(this.maskOptions,d);(null===s||u<s)&&(s=xo(this.maskOptions,d)?u:ko(this.maskOptions,u))}!this.maskOptions.mask||!ho(this.maskOptions,d)||l||c&&this.props.value||(d="");var m={start:s,end:s};if(_o(r)){var f=r({value:d,selection:m},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());d=f.value,m=f.selection}this.value=d;var b=this.getInputValue()!==this.value;b?(this.setInputValue(this.value),this.forceUpdate()):p&&this.forceUpdate();var h=!1;null!=m.start&&null!=m.end&&(h=!e||e.start!==m.start||e.end!==m.end),(h||b)&&this.setSelection(m.start,m.end)}else a.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},o.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&So(this.selectionDeferId),this.stopSaveSelectionLoop()},o.render=function(){var e,t=this.props,r=t.mask,n=t.maskChar,o=t.formatChars,i=t.inputRef,a=t.children,l=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}(t,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if("production"!==process.env.NODE_ENV&&lo(!l.maxLength||!mo(r,n,o).mask,"react-input-mask: maxLength property shouldn't be passed to the masked input. It breaks masking and unnecessary because length is limited by the mask length."),a){_o(a)||("production"!==process.env.NODE_ENV?ao(!1,"react-input-mask: children must be a function"):ao(!1));var c=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],d=co({},l);c.forEach(function(e){return delete d[e]}),e=a(d);var s=c.filter(function(t){return null!=e.props[t]&&e.props[t]!==l[t]});s.length&&("production"!==process.env.NODE_ENV?ao(!1,"react-input-mask: the following props should be passed to the react-input-mask's component and should not be altered in children's function: "+s.join(", ")):ao(!1)),"production"!==process.env.NODE_ENV&&lo(!i,"react-input-mask: inputRef is ignored when children is passed, attach ref to the children instead")}else e=io.createElement("input",co({ref:this.handleRef},l));var p={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(l.disabled||l.readOnly||(p.onChange=this.onChange,p.onPaste=this.onPaste,p.onMouseDown=this.onMouseDown),null!=l.value&&(p.value=this.value)),e=io.cloneElement(e,p)},t}(io.Component),$o=de(function(e){e.exports="production"===process.env.NODE_ENV?eo:Oo});const zo=({labelColor:t,label:r,brand:n,otherFormatDate:o,...i})=>{const a=e.forwardRef((t,r)=>e.createElement($o,{ref:r,mask:"99/99/9999",onClick:t.onClick,value:t.value,readOnly:i.readOnly,onChange:t.onChange,placeholder:i.placeholderText}));return e.createElement(In,{brand:n,labelColor:t},r&&e.createElement("span",null,r),e.createElement("div",null,e.createElement(b,Object.assign({},i,{locale:"pt-BR",customInput:o?void 0:e.createElement(a,{onClick:i.onCalendarOpen,value:i.value,onChange:i.onChange}),dateFormat:o||"dd/MM/yyyy",readOnly:!1,onChangeRaw:e=>i.readOnly?e.preventDefault():null}))))};let Fo,Mo,Do,Io,Bo=e=>e;const Ao=n.div(Fo||(Fo=Bo`
    font-family: MontSerrat !important;
    display: flex;
    margin-bottom: 10px;
`)),Po=n.span(Mo||(Mo=Bo`
    font-family: MontSerrat !important;
    flex: 1;
    text-align: left;
    color: ${0};
    font-weight: bold;
`),"#707070"),To=n.span(Do||(Do=Bo`
    flex: 1;
    text-align: right;
    color: ${0};
`),"#ACACAC"),jo=n.div(Io||(Io=Bo`
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
`),e=>e.hasMore||e.hasPagination?"20px":"0","#9B4DEE"),No=({children:t,title:r,titleStyle:n,message:o,messageStyle:i,hasMore:l,pagination:c,...d})=>e.createElement("div",null,r||o?e.createElement(Ao,null,e.createElement(Po,{style:n},r),e.createElement(To,{style:i},o)):null,e.createElement(jo,{hasMore:!!l,hasPagination:!!c},e.createElement(a,Object.assign({},d),t)),l?e.createElement(Vt,{secondary:!0,textFirst:"ver a",textEnd:"lista completa",onClick:()=>l()}):null,c?e.createElement("div",null,e.createElement("br",null),c):null);let Lo;No.Row=l,No.Header=c,No.HeaderCell=d,No.Body=s,No.Cell=p,No.Footer=u;const Vo=n.div(Lo||(Lo=(e=>e)`
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
`)),Ro=({page:t,totalCount:r,limit:n,onPageChange:o,mini:i})=>e.createElement(Vo,null,e.createElement(m,{totalPages:Math.ceil(r/n),size:i?"mini":"small",ellipsisItem:{content:e.createElement(f,{name:"ellipsis horizontal"}),icon:!0},firstItem:{content:e.createElement(f,{name:"angle double left"}),icon:!0},lastItem:{content:e.createElement(f,{name:"angle double right"}),icon:!0},prevItem:{content:e.createElement(f,{name:"angle left"}),icon:!0},nextItem:{content:e.createElement(f,{name:"angle right"}),icon:!0},onPageChange:(e,t)=>o(t.activePage),activePage:t}));export{dn as Accordion,Vt as ButtonMain,zo as Calendar,Mn as Card,Wr as Checkbox,Jt as Dialog,Qr as Dropdown,en as DropdownForm,cr as InputLine,dr as InputLineForm,Lt as Loader,Sr as Modal,Cn as MoreLess,Ro as Pagination,Gr as Radio,kn as Selection,No as Table,Lr as TextArea,Vr as TextAreaForm};
//# sourceMappingURL=index.modern.js.map

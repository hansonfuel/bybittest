!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.core=t():e.core=t()}(self,(()=>(()=>{var e={1954:(e,t,r)=>{"use strict";var o=new Error;e.exports=new Promise(((e,t)=>{if("undefined"!==typeof common)return e();r.l((UNIFRAME_V2_PUBLIC_PATH||UNIFRAME_V2_REPAIRED_HOST)+"uniframe-micro/common/entry.js?_="+Math.floor(Date.now()/6e4),(r=>{if("undefined"!==typeof common)return e();var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;o.message="Loading script failed.\n("+n+": "+a+")",o.name="ScriptExternalLoadError",o.type=n,o.request=a,t(o)}),"common")})).then((()=>common))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"===typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"===typeof o.then)return o}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var c=2&n&&o;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>i[e]=()=>o[e]));return i.default=()=>o,r.d(a,i),a}})(),r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[])),r.u=e=>"core."+({175:"mainChunk",672:"bootstrap"}[e]||e)+"."+{175:"6c0eab",550:"838801",627:"e8dc15",672:"bab8d7",778:"780ca7"}[e]+".js",r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="core:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var c,s;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){c=d;break}}c||(s=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.setAttribute("data-webpack",t+a),c.src=o),e[o]=[n];var f=(t,r)=>{c.onerror=c.onload=null,clearTimeout(p);var n=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),n&&n.forEach((e=>e(r))),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),s&&document.head.appendChild(c)}}})(),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={550:[1550],627:[3627],672:[1997,3268,5983,6683,5916,7142,5304,5726,9635],778:[4778]},t={1550:["default","./utils/specialDialog",1954],1997:["default","./utils/logger",1954],3268:["default","./utils/rtl",1954],3627:["default","./utils/complianceWall",1954],4778:["default","./components/ByMessage",1954],5304:["default","./by-shared-settings",1954],5726:["default","./react",1954],5916:["default","./by-env",1954],5983:["default","./utils/request",1954],6683:["default","./by-dynamic-domain",1954],7142:["default","./by-storage",1954],9635:["default","./react-dom",1954]};r.f.remotes=(o,n)=>{r.o(e,o)&&e[o].forEach((e=>{var o=r.R;o||(o=[]);var a=t[e];if(!(o.indexOf(a)>=0)){if(o.push(a),a.p)return n.push(a.p);var i=t=>{t||(t=new Error("Container missing")),"string"===typeof t.message&&(t.message+='\nwhile loading "'+a[1]+'" from '+a[2]),r.m[e]=()=>{throw t},a.p=0},c=(e,t,r,o,c,s)=>{try{var l=e(t,r);if(!l||!l.then)return c(l,o,s);var u=l.then((e=>c(e,o)),i);if(!s)return u;n.push(a.p=u)}catch(e){i(e)}},s=(e,t,r)=>c(t.get,a[1],o,0,l,r),l=t=>{a.p=1,r.m[e]=e=>{e.exports=t()}};c(r,a[2],0,0,((e,t,o)=>e?c(r.I,a[0],0,e,s,o):i()),1)}}))}})(),(()=>{r.S={};var e={},t={};r.I=(o,n)=>{n||(n=[]);var a=t[o];if(a||(a=t[o]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[o])return e[o];r.o(r.S,o)||(r.S[o]={});r.S[o];var i=[];if("default"===o)(e=>{var t=e=>{return t="Initialization of sharing external failed: "+e,"undefined"!==typeof console&&console.warn&&console.warn(t);var t};try{var a=r(e);if(!a)return;var c=e=>e&&e.init&&e.init(r.S[o],n);if(a.then)return i.push(a.then(c,t));var s=c(a);if(s&&s.then)i.push(s.catch(t))}catch(e){t(e)}})(1954);return i.length?e[o]=Promise.all(i).then((()=>e[o]=1)):e[o]=1}}})(),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e={179:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else if(/^(17[59]|672)$/.test(t)){var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),c=new Error;r.l(i,(o=>{if(r.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,n[1](c)}}),"chunk-"+t,t)}else e[t]=0};var t=(t,o)=>{var n,a,[i,c,s]=o,l=0;if(i.some((t=>0!==e[t]))){for(n in c)r.o(c,n)&&(r.m[n]=c[n]);if(s)s(r)}for(t&&t(o);l<i.length;l++)a=i[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0},o=self.webpackChunkcore=self.webpackChunkcore||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();return(()=>{const{hostname:e}=window.location,t=/^[^.]+\.[^.]+\.[^.]+$/.test(e)||/^[^.]+\.[^.]+\.[^.]+\.(hk|uae|us|uk|jp|fr|de|au|ca|br|in|ru)$/.test(e);window.UNIFRAME_V2_PUBLIC_PATH=window.localStorage.getItem("UNIFRAME_v2_core_resource_path");let o=(window.UNIFRAME_V2_PUBLIC_PATH||"").slice(0,-1);window.UNIFRAME_V2_REPAIRED_HOST="/";const n=()=>{var e,t;null!==(e=window)&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.search.includes("disableLoadUniframe")||Promise.all([r.e(175),r.e(672)]).then(r.bind(r,3929))},a=(e,t,r)=>{const o=document.createElement("script");o.src=e,document.getElementsByTagName("head")[0].appendChild(o),o.onload=t,o.onerror=r};if(window.React&&window.ReactDOM)window.UNIFRAME_USE_PAGE_REACT=!0,n();else{const e=`${o}/uniframe-micro/react.18.2.0.min.js`;a(t?"/common-static/fhs/react.18.2.0.min-860f1d37ec17b010c94069b99a49ae7b.js":"https://s1.bycsi.com/bybit/deadpool/7580d4e9045211eebdc72a133fcf998d.js",n,(()=>{a(e,n)}))}})(),{}})()));
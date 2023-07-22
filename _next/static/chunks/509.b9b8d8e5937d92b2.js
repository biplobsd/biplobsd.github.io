"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[509],{48157:function(e,t,n){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{$k:function(){return h},S:function(){return m},bE:function(){return d},_y:function(){return l},LU:function(){return f},WR:function(){return p},LF:function(){return u}});var a=["","K","M","B"],i={digits:1,uppercase:!0},s=function(e,t){if(void 0===t&&(t={}),isNaN(e))return 0;var n=Math.abs(e);if(n<1e3)return Number(e);for(var s=r({},i,t),c=s.digits,o=s.uppercase,l=[0,1].includes(Math.sign(e))?1:-1,u=0,f="",p=0;p<=a.length;p++){var h=Math.pow(1e3,p);n>=h&&(u=n/h,f=o?a[p]:a[p].toLowerCase())}return""+(u-Math.floor(u)<=0||0===c?Math.floor(u*l):parseFloat(u*l).toFixed(c))+f},c=n(45645),o=n(26509);function l(e){return"whatText"in e}function u(e){return e.replace(/\b\w+/g,e=>e.charAt(0).toUpperCase()+e.substr(1).toLowerCase())}function f(e){return s(e,{digits:2,uppercase:!1})}function p(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:160;if(e.length>t){let n=e.slice(0,t),r=n.charAt(n.length-1);return" "!==r&&(n=n.substring(0,n.lastIndexOf(" ")),/[^\w\s]/.test(r)&&(n=n.substring(0,n.length-1))),n}return e}function h(e){return(0,o.Z)("https://github.com",e,"/blob/".concat(c.O.NEXT_PUBLIC_REPO_DATA_BRANCH))}function d(e){var t,n;let r=e.split("/");return{userName:null!==(t=r[1])&&void 0!==t?t:"",repo:null!==(n=r[2])&&void 0!==n?n:""}}function m(){return c.O.NEXT_PUBLIC_LOCALHOST_TEST?"":c.O.NEXT_PUBLIC_PREFIX_REPO}},70509:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(85893),a=n(97751),i=n(5152),s=n.n(i),c=n(20352);let o=s()(()=>n.e(7908).then(n.bind(n,37908)),{loadableGenerated:{webpack:()=>[37908]}});function l(e){return(0,r.jsxs)("div",{className:"mx-auto h-fit max-w-6xl px-4 sm:pl-4 sm:pr-0 lg:pt-3",children:[(0,r.jsxs)("p",{className:"flex items-center gap-2 text-2xl normal-case text-slate-400",children:[(0,r.jsx)(a.Z,{className:"h-5 w-5"}),"Recent Apps"]}),(0,r.jsx)("div",{className:"py-3",children:(0,r.jsx)(o,{...e})}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(c.Z,{url:"/apps",counts:e.total,name:"apps"})})]})}},20352:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(85893),a=n(5152),i=n.n(a),s=n(48157);let c=i()(()=>n.e(1664).then(n.t.bind(n,41664,23)),{loadableGenerated:{webpack:()=>[41664]}});function o(e){var t;let n=e.counts&&e.counts>0?(0,s.LU)(e.counts):void 0;return(0,r.jsxs)("div",{className:"indicator mt-3",children:[n&&e.name&&(0,r.jsx)("span",{className:"indicator-new",children:(0,r.jsx)("span",{className:"tooltip","data-tip":"".concat(n," ").concat(e.name),children:n})}),(0,r.jsx)(c,{href:e.url,className:"p-card cursor-pointer font-semibold uppercase",children:null!==(t=e.text)&&void 0!==t?t:"view more"})]})}},97751:function(e,t,n){var r=n(67294);let a=r.forwardRef(function({title:e,titleId:t,...n},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"}))});t.Z=a},26509:function(e,t,n){n.d(t,{Z:function(){return r}});function r(){var e;return e="object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments),function(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var n=e.shift();e[0]=n+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var r=0;r<e.length;r++){var a=e[r];if("string"!=typeof a)throw TypeError("Url must be a string. Received "+a);""!==a&&(r>0&&(a=a.replace(/^[\/]+/,"")),a=r<e.length-1?a.replace(/[\/]+$/,""):a.replace(/[\/]+$/,"/"),t.push(a))}var i=t.join("/"),s=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return s.shift()+(s.length>0?"?":"")+s.join("&")}(e)}}}]);
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5857],{8157:function(e,t,n){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{$k:function(){return d},_y:function(){return c},LU:function(){return l},WR:function(){return u},LF:function(){return o}});var a=["","K","M","B"],s={digits:1,uppercase:!0},i=function(e,t){if(void 0===t&&(t={}),isNaN(e))return 0;var n=Math.abs(e);if(n<1e3)return Number(e);for(var i=r({},s,t),c=i.digits,o=i.uppercase,l=[0,1].includes(Math.sign(e))?1:-1,u=0,d="",p=0;p<=a.length;p++){var h=Math.pow(1e3,p);n>=h&&(u=n/h,d=o?a[p]:a[p].toLowerCase())}return""+(u-Math.floor(u)<=0||0===c?Math.floor(u*l):parseFloat(u*l).toFixed(c))+d};function c(e){return"whatText"in e}function o(e){return e.replace(/\b\w+/g,e=>e.charAt(0).toUpperCase()+e.substr(1).toLowerCase())}function l(e){return i(e,{digits:2,uppercase:!1})}function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:160;if(e.length>t){let n=e.slice(0,t),r=n.charAt(n.length-1);return" "!==r&&(n=n.substring(0,n.lastIndexOf(" ")),/[^\w\s]/.test(r)&&(n=n.substring(0,n.length-1))),n}return e}function d(e){return"https://github.com"+e+"/blob/data"}},5857:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),a=n(7294);let s=a.forwardRef(function({title:e,titleId:t,...n},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"}))});var i=n(5152),c=n.n(i),o=n(352);let l=c()(()=>n.e(7908).then(n.bind(n,7908)),{loadableGenerated:{webpack:()=>[7908]}});function u(e){return(0,r.jsxs)("div",{className:"mx-auto h-fit max-w-6xl px-4 sm:pl-4 sm:pr-0 lg:pt-3",children:[(0,r.jsxs)("p",{className:"flex items-center gap-2 text-2xl normal-case text-slate-400",children:[(0,r.jsx)(s,{className:"h-5 w-5"}),"Recent Apps"]}),(0,r.jsx)("div",{className:"py-3",children:(0,r.jsx)(l,{...e})}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(o.Z,{url:"/apps",counts:e.total,name:"apps"})})]})}},352:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(5893),a=n(5152),s=n.n(a),i=n(8157);let c=s()(()=>n.e(1664).then(n.t.bind(n,1664,23)),{loadableGenerated:{webpack:()=>[1664]}});function o(e){var t;let n=e.counts&&e.counts>0?(0,i.LU)(e.counts):void 0;return(0,r.jsxs)("div",{className:"indicator mt-3",children:[n&&e.name&&(0,r.jsx)("span",{className:"indicator-new",children:(0,r.jsx)("span",{className:"tooltip","data-tip":"".concat(n," ").concat(e.name),children:n})}),(0,r.jsx)(c,{href:e.url,className:"p-card cursor-pointer font-semibold uppercase",children:null!==(t=e.text)&&void 0!==t?t:"view more"})]})}}}]);
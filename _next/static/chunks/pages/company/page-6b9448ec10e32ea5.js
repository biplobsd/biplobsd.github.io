(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2979],{1455:function(e,t,n){let a=n(7294),r=a.forwardRef(function({title:e,titleId:t,...n},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?a.createElement("title",{id:t},e):null,a.createElement("path",{fillRule:"evenodd",d:"M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z",clipRule:"evenodd"}))});e.exports=r},7410:function(e,t,n){let a=n(7294),r=a.forwardRef(function({title:e,titleId:t,...n},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?a.createElement("title",{id:t},e):null,a.createElement("path",{fillRule:"evenodd",d:"M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z",clipRule:"evenodd"}))});e.exports=r},2874:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/company/page",function(){return n(1349)}])},8157:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,{$k:function(){return f},bE:function(){return d},_y:function(){return c},LU:function(){return s},WR:function(){return u},LF:function(){return l}});var r=["","K","M","B"],o={digits:1,uppercase:!0},i=function(e,t){if(void 0===t&&(t={}),isNaN(e))return 0;var n=Math.abs(e);if(n<1e3)return Number(e);for(var i=a({},o,t),c=i.digits,l=i.uppercase,s=[0,1].includes(Math.sign(e))?1:-1,u=0,f="",d=0;d<=r.length;d++){var p=Math.pow(1e3,d);n>=p&&(u=n/p,f=l?r[d]:r[d].toLowerCase())}return""+(u-Math.floor(u)<=0||0===c?Math.floor(u*s):parseFloat(u*s).toFixed(c))+f};function c(e){return"whatText"in e}function l(e){return e.replace(/\b\w+/g,e=>e.charAt(0).toUpperCase()+e.substr(1).toLowerCase())}function s(e){return i(e,{digits:2,uppercase:!1})}function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:160;if(e.length>t){let n=e.slice(0,t),a=n.charAt(n.length-1);return" "!==a&&(n=n.substring(0,n.lastIndexOf(" ")),/[^\w\s]/.test(a)&&(n=n.substring(0,n.length-1))),n}return e}function f(e){return"https://github.com"+e+"/blob/data"}function d(e){var t,n;let a=e.split("/");return{userName:null!==(t=a[1])&&void 0!==t?t:"",repo:null!==(n=a[2])&&void 0!==n?n:""}}},3896:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return r}});var a=n(160),r=!0;t.default=a.default},1349:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return r}});var a=n(3896),r=!0;t.default=a.default},160:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return p},default:function(){return h}});var a=n(5893),r=n(1455),o=n(7410),i=n(5152),c=n.n(i),l=n(7294),s=n(8157);let u=c()(()=>Promise.all([n.e(2295),n.e(8263)]).then(n.bind(n,8425)),{loadableGenerated:{webpack:()=>[8425]}}),f=c()(()=>n.e(8187).then(n.bind(n,8187)),{loadableGenerated:{webpack:()=>[8187]}}),d=c()(()=>n.e(2034).then(n.bind(n,2034)),{loadableGenerated:{webpack:()=>[2034]}});var p=!0;function h(e){let t=(0,s.LF)(e.type),n="".concat(t," | ").concat(e.configs.appName),[i,c]=(0,l.useState)(!1),[p,h]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{c(e.pageInfo.no<=1),h(e.pageInfo.size*e.pageInfo.no>=e.pageInfo.total)},[e]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u,{configs:e.configs,description:"See all ".concat(n),title:n}),(0,a.jsxs)("div",{className:"container mx-auto",children:[(0,a.jsx)("p",{className:"text-center text-3xl uppercase",children:t}),(0,a.jsx)("div",{className:"mx-auto w-full max-w-6xl",children:(0,a.jsx)("div",{className:"m-2",children:(0,a.jsx)(f,{data:e.data,type:e.type},"".concat(e.type,"-").concat(e.pageInfo.no))})}),(0,a.jsxs)("div",{className:"flex w-full items-center justify-center gap-2 pt-2",children:[(0,a.jsx)(d,{disabled:i,href:i?"#":"/".concat(t.toLowerCase(),"/page/").concat(e.pageInfo.no-1),className:"p-card h-fit w-fit cursor-pointer",children:(0,a.jsx)(r,{className:"h-5 w-5"})}),(0,a.jsx)(d,{href:p?"#":"/".concat(t.toLowerCase(),"/page/").concat(e.pageInfo.no+1),disabled:p,className:"p-card h-fit w-fit cursor-pointer",children:(0,a.jsx)(o,{className:"h-5 w-5"})})]}),(0,a.jsxs)("div",{className:"my-2 text-center text-xs font-thin tracking-wider text-slate-500",children:["Total ",e.pageInfo.total," ",(0,a.jsx)("span",{className:"text-base-content/40",children:" | "}),"Page no ",e.pageInfo.no]})]})]})}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=2874)}),_N_E=e.O()}]);
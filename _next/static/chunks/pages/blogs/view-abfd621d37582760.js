(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1483],{1455:function(e,t,n){let r=n(7294),a=r.forwardRef(function({title:e,titleId:t,...n},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z",clipRule:"evenodd"}))});e.exports=a},7410:function(e,t,n){let r=n(7294),a=r.forwardRef(function({title:e,titleId:t,...n},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z",clipRule:"evenodd"}))});e.exports=a},9448:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/view",function(){return n(3349)}])},8157:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{$k:function(){return f},bE:function(){return d},_y:function(){return l},LU:function(){return s},WR:function(){return u},LF:function(){return c}});var a=["","K","M","B"],i={digits:1,uppercase:!0},o=function(e,t){if(void 0===t&&(t={}),isNaN(e))return 0;var n=Math.abs(e);if(n<1e3)return Number(e);for(var o=r({},i,t),l=o.digits,c=o.uppercase,s=[0,1].includes(Math.sign(e))?1:-1,u=0,f="",d=0;d<=a.length;d++){var p=Math.pow(1e3,d);n>=p&&(u=n/p,f=c?a[d]:a[d].toLowerCase())}return""+(u-Math.floor(u)<=0||0===l?Math.floor(u*s):parseFloat(u*s).toFixed(l))+f};function l(e){return"whatText"in e}function c(e){return e.replace(/\b\w+/g,e=>e.charAt(0).toUpperCase()+e.substr(1).toLowerCase())}function s(e){return o(e,{digits:2,uppercase:!1})}function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:160;if(e.length>t){let n=e.slice(0,t),r=n.charAt(n.length-1);return" "!==r&&(n=n.substring(0,n.lastIndexOf(" ")),/[^\w\s]/.test(r)&&(n=n.substring(0,n.length-1))),n}return e}function f(e){return"https://github.com"+e+"/blob/data"}function d(e){var t,n;let r=e.split("/");return{userName:null!==(t=r[1])&&void 0!==t?t:"",repo:null!==(n=r[2])&&void 0!==n?n:""}}},7259:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return a}});var r=n(160),a=!0;t.default=r.default},3349:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return a}});var r=n(7259),a=!0;t.default=r.default},160:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return p},default:function(){return h}});var r=n(5893),a=n(1455),i=n(7410),o=n(5152),l=n.n(o),c=n(7294),s=n(8157);let u=l()(()=>Promise.all([n.e(2295),n.e(8263)]).then(n.bind(n,8425)),{loadableGenerated:{webpack:()=>[8425]}}),f=l()(()=>n.e(8187).then(n.bind(n,8187)),{loadableGenerated:{webpack:()=>[8187]}}),d=l()(()=>n.e(2034).then(n.bind(n,2034)),{loadableGenerated:{webpack:()=>[2034]}});var p=!0;function h(e){let t=(0,s.LF)(e.type),n="".concat(t," | ").concat(e.configs.appName),[o,l]=(0,c.useState)(!1),[p,h]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{l(e.pageInfo.no<=1),h(e.pageInfo.size*e.pageInfo.no>=e.pageInfo.total)},[e]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{configs:e.configs,description:"See all ".concat(n),title:n}),(0,r.jsxs)("div",{className:"container mx-auto",children:[(0,r.jsx)("p",{className:"text-center text-3xl uppercase",children:t}),(0,r.jsx)("div",{className:"mx-auto w-full max-w-6xl",children:(0,r.jsx)("div",{className:"m-2",children:(0,r.jsx)(f,{data:e.data,type:e.type},"".concat(e.type,"-").concat(e.pageInfo.no))})}),(0,r.jsxs)("div",{className:"flex w-full items-center justify-center gap-2 pt-2",children:[(0,r.jsx)(d,{disabled:o,href:o?"#":"/".concat(t.toLowerCase(),"/page/").concat(e.pageInfo.no-1),className:"p-card h-fit w-fit cursor-pointer",children:(0,r.jsx)(a,{className:"h-5 w-5"})}),(0,r.jsx)(d,{href:p?"#":"/".concat(t.toLowerCase(),"/page/").concat(e.pageInfo.no+1),disabled:p,className:"p-card h-fit w-fit cursor-pointer",children:(0,r.jsx)(i,{className:"h-5 w-5"})})]}),(0,r.jsxs)("div",{className:"my-2 text-center text-xs font-thin tracking-wider text-slate-500",children:["Total ",e.pageInfo.total," ",(0,r.jsx)("span",{className:"text-base-content/40",children:" | "}),"Page no ",e.pageInfo.no]})]})]})}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=9448)}),_N_E=e.O()}]);
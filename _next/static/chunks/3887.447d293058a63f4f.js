(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3887],{86010:function(e,t,n){"use strict";t.Z=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(i&&(i+=" "),i+=r);else for(n in t)t[n]&&(i&&(i+=" "),i+=n)}return i}(e))&&(r&&(r+=" "),r+=t);return r}},48157:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{$k:function(){return h},S:function(){return m},bE:function(){return p},_y:function(){return c},LU:function(){return d},WR:function(){return f},LF:function(){return u}});var i=["","K","M","B"],a={digits:1,uppercase:!0},s=function(e,t){if(void 0===t&&(t={}),isNaN(e))return 0;var n=Math.abs(e);if(n<1e3)return Number(e);for(var s=r({},a,t),o=s.digits,l=s.uppercase,c=[0,1].includes(Math.sign(e))?1:-1,u=0,d="",f=0;f<=i.length;f++){var h=Math.pow(1e3,f);n>=h&&(u=n/h,d=l?i[f]:i[f].toLowerCase())}return""+(u-Math.floor(u)<=0||0===o?Math.floor(u*c):parseFloat(u*c).toFixed(o))+d},o=n(45645),l=n(26509);function c(e){return"whatText"in e}function u(e){return e.replace(/\b\w+/g,e=>e.charAt(0).toUpperCase()+e.substr(1).toLowerCase())}function d(e){return s(e,{digits:2,uppercase:!1})}function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:160;if(e.length>t){let n=e.slice(0,t),r=n.charAt(n.length-1);return" "!==r&&(n=n.substring(0,n.lastIndexOf(" ")),/[^\w\s]/.test(r)&&(n=n.substring(0,n.length-1))),n}return e}function h(e){return(0,l.Z)("https://github.com",e,"/blob/".concat(o.O.NEXT_PUBLIC_REPO_DATA_BRANCH))}function p(e){var t,n;let r=e.split("/");return{userName:null!==(t=r[1])&&void 0!==t?t:"",repo:null!==(n=r[2])&&void 0!==n?n:""}}function m(){return o.O.NEXT_PUBLIC_LOCALHOST_TEST?"":o.O.NEXT_PUBLIC_PREFIX_REPO}},45988:function(e,t,n){"use strict";n.d(t,{L:function(){return i}});var r=n(64529);let i=(0,r.Ue)(e=>({isOpen:!1,setIsOpen:t=>e({isOpen:t})}))},43887:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(85893),i=n(67294);let a=i.forwardRef(function({title:e,titleId:t,...n},r){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,i.createElement("path",{fillRule:"evenodd",d:"M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z",clipRule:"evenodd"}))});var s=n(5152),o=n.n(s),l=n(25675),c=n.n(l),u=n(2025),d=n(77496),f=n(49822),h=n(45645),p=n(11163),m=n(48157),g=n(86010),b=n(45011);let w=o()(()=>Promise.all([n.e(1664),n.e(9755),n.e(2932)]).then(n.bind(n,32932)),{loadableGenerated:{webpack:()=>[32932]}}),v=o()(()=>n.e(7372).then(n.bind(n,47372)),{loadableGenerated:{webpack:()=>[47372]}}),x=o()(()=>n.e(1664).then(n.t.bind(n,41664,23)),{loadableGenerated:{webpack:()=>[41664]}});function j(){let e=(0,u.f)(),[t,n]=(0,i.useState)(u.u);(0,i.useEffect)(()=>{n("winter"===e.themeName)},[e]);let[s,o]=(0,i.useState)(!1),[l,j]=(0,i.useState)(!1),E=function(){let[e,t]=(0,i.useState)(0),n=(0,p.useRouter)();return(0,i.useEffect)(()=>{function e(){let e=window.scrollY,n=document.body.scrollHeight-window.innerHeight;n&&t(100*Number((e/n).toFixed(2)))}function r(){t(0)}return window.addEventListener("scroll",e),n.events.on("routeChangeStart",r),()=>{window.removeEventListener("scroll",e),n.events.off("routeChangeStart",r)}},[n]),e}(),N=(0,b.C)();return(0,i.useEffect)(()=>{j(!0);let e=()=>{let e=window.scrollY>=16;e?o(!0):o(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,r.jsx)("header",{style:{backgroundSize:"".concat(E,"%")},className:(0,g.Z)(l?"transition-all duration-500 ease-in-out":"",s&&"down"===N?"-translate-y-12":"bg-base-100/95 lg:bg-transparent lg:backdrop-blur-sm"+(s?" shadow-2xl lg:mx-1 lg:rounded-xl lg:ring-1 lg:ring-base-300/40":""),s?"bg-gradient-to-r from-base-300/30 from-30% to-base-content/50 to-100%":"","min-h-6 sticky top-0 z-50 bg-no-repeat lg:top-1 lg:mb-2"),children:(0,r.jsx)("div",{className:(0,g.Z)(s&&"down"===N?"-translate-y-14":"",l?"transition-all delay-100 duration-500 ease-in-out":"","container mx-auto flex h-14 items-center justify-between px-4 py-2"),children:(0,r.jsxs)("div",{className:"container mx-auto flex h-14 items-center justify-between overflow-visible px-4 py-2",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)("span",{className:"tooltip tooltip-bottom","data-tip":"Go home",children:(0,r.jsxs)(x,{href:"/",className:"btn-ghost btn !gap-0 px-2 text-xl font-bold normal-case tracking-wider",children:[(0,r.jsx)(c(),{src:"".concat((0,m.S)(),"/images/logos/github-profile-dark").concat(t?"-light":"",".png"),width:"32",height:"32",alt:h.O.NEXT_PUBLIC_PERSON_NAME}),(0,r.jsx)("div",{className:"ml-2 hidden lg:flex",children:h.O.NEXT_PUBLIC_PERSON_NAME})]})}),(0,r.jsx)(v,{className:"hidden items-center gap-4 md:flex"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"hidden 2xl:inline ",children:(0,r.jsx)(w,{})}),(0,r.jsxs)("div",{className:"flex items-center justify-end 2xl:hidden",children:[(0,r.jsx)(d.Q,{}),(0,r.jsx)(f.Z,{}),(0,r.jsxs)("div",{className:"dropdown-end dropdown",children:[(0,r.jsx)("label",{tabIndex:0,className:"btn-ghost btn-circle btn",children:(0,r.jsx)(a,{className:"h-8 w-8"})}),(0,r.jsxs)("ul",{tabIndex:0,className:"dropdown-content menu rounded-box mt-2 w-fit bg-base-100/95 px-2 py-5 shadow-2xl ring ring-base-300",children:[(0,r.jsx)(v,{className:" flex justify-center space-x-4 rounded-lg bg-base-100/80 px-2 pb-2 md:hidden"}),(0,r.jsx)(w,{})]})]})]})]})]})})})}},49822:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(85893),i=n(67294);let a=i.forwardRef(function({title:e,titleId:t,...n},r){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"}))}),s=i.forwardRef(function({title:e,titleId:t,...n},r){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"}))});var o=n(2025);function l(){let e=(0,o.f)(),[t,n]=(0,i.useState)(o.u);return(0,i.useEffect)(()=>{n("winter"===e.themeName)},[e]),(0,r.jsx)("div",{"data-tip":"Toggle ".concat(t?"dark":"light"," "),className:"tooltip tooltip-bottom",children:(0,r.jsxs)("button",{onClick:e.toggleTheme,className:"".concat(t?"swap-active":""," swap-rotate swap btn-ghost btn-circle btn"),children:[(0,r.jsx)(a,{className:"swap-on h-6 w-6"}),(0,r.jsx)(s,{className:"swap-off h-6 w-6"})]})})}},77496:function(e,t,n){"use strict";n.d(t,{Q:function(){return c}});var r=n(85893),i=n(49633),a=n(67294);let s=["Ctrl ","Control"],o=["⌘","Command"];var l=n(45988);function c(){let e=(0,a.useRef)(null),t=function(){let[e,t]=(0,a.useState)();return(0,a.useEffect)(()=>{"undefined"!=typeof navigator&&(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?t(o):t(s))},[]),e}(),n=(0,l.L)(),c=(0,a.useCallback)(e=>{e.preventDefault(),n.setIsOpen(!n.isOpen)},[n]);return(0,a.useEffect)(()=>{function t(t){e&&e.current&&(27===t.keyCode&&n.isOpen||"k"===t.key&&(t.metaKey||t.ctrlKey))&&c(t)}return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[n,e,c]),(0,r.jsx)("div",{"data-tip":"Search",className:"tooltip tooltip-bottom",children:(0,r.jsx)("button",{className:"w-fit",type:"button",ref:e,onClick:e=>{c(e)},children:(0,r.jsxs)("div",{className:"p-card flex w-full cursor-pointer items-center gap-3 overflow-visible rounded-full bg-transparent px-3 lg:rounded-xl lg:bg-base-300",children:[(0,r.jsx)(i.Z,{className:"h-5 w-5"}),t&&(0,r.jsxs)("div",{className:"ml-1 hidden items-center gap-1 lg:flex",children:[(0,r.jsx)("kbd",{className:"kbd kbd-sm text-base-content no-underline",children:t[0]})," ",(0,r.jsx)("kbd",{className:"kbd kbd-sm",children:"k"})]})]})})})}},11163:function(e,t,n){e.exports=n(96885)},45011:function(e,t,n){"use strict";n.d(t,{C:function(){return i}});var r=n(67294),i=function(e){var t=(void 0===e?{}:e).initialDirection,n=(0,r.useState)(void 0===t?"up":t),i=n[0],a=n[1];return(0,r.useEffect)(function(){var e=window.pageYOffset,t=function(){var t=window.pageYOffset,n=t>e?"down":"up";n!==i&&(t-e>10||t-e<-10)&&a(n),e=t>0?t:0};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}},[i]),i}},49633:function(e,t,n){"use strict";var r=n(67294);let i=r.forwardRef(function({title:e,titleId:t,...n},i){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"}))});t.Z=i},26509:function(e,t,n){"use strict";function r(){var e;return e="object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments),function(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var n=e.shift();e[0]=n+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var r=0;r<e.length;r++){var i=e[r];if("string"!=typeof i)throw TypeError("Url must be a string. Received "+i);""!==i&&(r>0&&(i=i.replace(/^[\/]+/,"")),i=r<e.length-1?i.replace(/[\/]+$/,""):i.replace(/[\/]+$/,"/"),t.push(i))}var a=t.join("/"),s=(a=a.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return s.shift()+(s.length>0?"?":"")+s.join("&")}(e)}n.d(t,{Z:function(){return r}})}}]);
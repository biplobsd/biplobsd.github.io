(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2260,4855],{20640:function(t,e,n){"use strict";var r=n(11742),o={"text/plain":"Text","text/html":"Url",default:"Text"};t.exports=function(t,e){var n,a,i,c,l,s,u,f,p=!1;e||(e={}),i=e.debug||!1;try{if(l=r(),s=document.createRange(),u=document.getSelection(),(f=document.createElement("span")).textContent=t,f.ariaHidden="true",f.style.all="unset",f.style.position="fixed",f.style.top=0,f.style.clip="rect(0, 0, 0, 0)",f.style.whiteSpace="pre",f.style.webkitUserSelect="text",f.style.MozUserSelect="text",f.style.msUserSelect="text",f.style.userSelect="text",f.addEventListener("copy",function(n){if(n.stopPropagation(),e.format){if(n.preventDefault(),void 0===n.clipboardData){i&&console.warn("unable to use e.clipboardData"),i&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=o[e.format]||o.default;window.clipboardData.setData(r,t)}else n.clipboardData.clearData(),n.clipboardData.setData(e.format,t)}e.onCopy&&(n.preventDefault(),e.onCopy(n.clipboardData))}),document.body.appendChild(f),s.selectNodeContents(f),u.addRange(s),!document.execCommand("copy"))throw Error("copy command was unsuccessful");p=!0}catch(r){i&&console.error("unable to copy using execCommand: ",r),i&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),p=!0}catch(r){i&&console.error("unable to copy using clipboardData: ",r),i&&console.error("falling back to prompt"),n="message"in e?e.message:"Copy to clipboard: #{key}, Enter",a=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",c=n.replace(/#{\s*key\s*}/g,a),window.prompt(c,t)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(s):u.removeAllRanges()),f&&document.body.removeChild(f),l()}return p}},65411:function(t,e,n){"use strict";n.d(e,{$k:function(){return u},LF:function(){return c},LU:function(){return l},S:function(){return p},WR:function(){return s},_y:function(){return i},bE:function(){return f}});var r=n(98165),o=n(39122),a=n(26509);function i(t){return"whatText"in t}function c(t){return t.replace(/\b\w+/g,t=>t.charAt(0).toUpperCase()+t.substr(1).toLowerCase())}function l(t){return(0,r.Z)(t,{digits:2,uppercase:!1})}function s(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:160;if(t.length>e){let n=t.slice(0,e),r=n.charAt(n.length-1);return" "!==r&&(n=n.substring(0,n.lastIndexOf(" ")),/[^\w\s]/.test(r)&&(n=n.substring(0,n.length-1))),n}return t}function u(t){return(0,a.Z)("https://github.com",t,"/blob/".concat(o.O.NEXT_PUBLIC_REPO_DATA_BRANCH))}function f(t){var e,n;let r=t.split("/");return{userName:null!==(e=r[1])&&void 0!==e?e:"",repo:null!==(n=r[2])&&void 0!==n?n:""}}function p(){return o.O.NEXT_PUBLIC_LOCALHOST_TEST?"":o.O.NEXT_PUBLIC_PREFIX_REPO}},23291:function(t,e,n){"use strict";n.d(e,{F:function(){return d}});var r=n(85893),o=n(341),a=n(67294),i=n(5152),c=n.n(i),l=n(65411);let s=c()(()=>n.e(9755).then(n.t.bind(n,89755,23)),{loadableGenerated:{webpack:()=>[89755]}});function u(t){let{props:e,isLight:n}=t,[o,i]=(0,a.useState)(!0);return(0,r.jsxs)("div",{className:"relative h-8 w-8",children:[o&&(0,r.jsx)("div",{className:"h-full w-full animate-pulse rounded-xl bg-base-content/80"}),(0,r.jsx)(s,{className:n?"opacity-80":"invert-colors",layout:"fill",objectFit:"fill",src:"".concat((0,l.S)(),"/images/logos/").concat(e.text.toLowerCase(),".png"),alt:e.text,onLoadingComplete:()=>{i(!1)}})]})}function f(t){let e=(0,o.f)(),[n,i]=(0,a.useState)(o.u);return(0,a.useEffect)(()=>{i("winter"===e.themeName)},[e]),(0,r.jsx)("span",{className:"tooltip tooltip-bottom","data-tip":t.text,children:(0,r.jsx)("div",{className:"btn-ghost btn-circle btn",children:(0,r.jsx)(u,{isLight:n,props:t})})})}var p=n(39122);let d=[{icon:(0,r.jsx)(f,{text:"Gmail"}),name:"Gmail",text:p.O.NEXT_PUBLIC_GMAIL,url:"mailto:".concat(p.O.NEXT_PUBLIC_GMAIL)},{icon:(0,r.jsx)(f,{text:"GitHub"}),name:"GitHub",text:p.O.NEXT_PUBLIC_GITHUB,copyUrl:!0,url:"https://github.com/".concat(p.O.NEXT_PUBLIC_GITHUB)},{icon:(0,r.jsx)(f,{text:"Twitter"}),name:"Twitter",text:p.O.NEXT_PUBLIC_TWITTER_HANDLE,copyUrl:!0,url:"https://twitter.com/".concat(p.O.NEXT_PUBLIC_TWITTER_HANDLE)},{icon:(0,r.jsx)(f,{text:"LinkedIn"}),name:"LinkedIn",text:p.O.NEXT_PUBLIC_LINKEDIN,copyUrl:!0,url:"https://www.linkedin.com/in/".concat(p.O.NEXT_PUBLIC_LINKEDIN)}]},12260:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var r=n(85893),o=n(10798),a=n(67294),i=n(74855),c=n.n(i),l=n(62054),s=n(41664),u=n.n(s);function f(t){let[e,n]=(0,a.useState)("Copy ".concat(t.name));return(0,r.jsxs)("div",{className:"group flex w-fit items-center gap-2 ",children:[(0,r.jsxs)(u(),{href:t.url,target:"_blank",className:"flex items-center gap-2",children:[t.icon,(0,r.jsx)("span",{className:"tooltip cursor-pointer","data-tip":"Click to open ".concat(t.name),children:t.text})]}),(0,r.jsx)("span",{className:"tooltip invisible group-hover:visible","data-tip":e,children:(0,r.jsx)(c(),{text:t.copyUrl?t.url:t.text,onCopy:async()=>{n("Copied"),await (0,l.g)(500),n("Copy ".concat(t.name))},children:(0,r.jsx)(o.Z,{className:"h-5 w-5 cursor-pointer hover:text-blue-600"})})})]})}var p=n(23291);function d(){return(0,r.jsxs)("div",{className:"mx-auto h-fit max-w-6xl px-4 pt-5 sm:pl-4 sm:pr-0",children:[(0,r.jsx)("p",{className:"text-center text-2xl normal-case text-slate-400",children:"Contact"}),(0,r.jsx)("div",{className:"flex w-full justify-center",children:(0,r.jsx)("div",{className:"p-card my-3 h-fit w-fit !animate-none overflow-visible hover:bg-base-200 active:!scale-100",children:(0,r.jsx)("div",{className:"mx-2 my-2 flex w-fit justify-center",children:(0,r.jsx)("div",{className:"grid w-fit grid-cols-1 gap-x-2 lg:flex",children:p.F.map(t=>(0,r.jsx)(f,{...t},t.url))})})})})]})}},62054:function(t,e,n){"use strict";async function r(t){return await new Promise(e=>setTimeout(e,t))}n.d(e,{g:function(){return r}})},74300:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.CopyToClipboard=void 0;var o=c(n(67294)),a=c(n(20640)),i=["text","onCopy","options","children"];function c(t){return t&&t.__esModule?t:{default:t}}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach(function(e){y(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e)}(b,t);var e,n,c,l=(e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t,n=d(b);if(e){var o=d(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return function(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw TypeError("Derived constructors may only return object or undefined");return p(t)}(this,t)});function b(){var t;!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,b);for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return y(p(t=l.call.apply(l,[this].concat(n))),"onClick",function(e){var n=t.props,r=n.text,i=n.onCopy,c=n.children,l=n.options,s=o.default.Children.only(c),u=(0,a.default)(r,l);i&&i(r,u),s&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(e)}),t}return n=[{key:"render",value:function(){var t=this.props,e=(t.text,t.onCopy,t.options,t.children),n=function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(t,i),r=o.default.Children.only(e);return o.default.cloneElement(r,s(s({},n),{},{onClick:this.onClick}))}}],u(b.prototype,n),c&&u(b,c),Object.defineProperty(b,"prototype",{writable:!1}),b}(o.default.PureComponent);e.CopyToClipboard=b,y(b,"defaultProps",{onCopy:void 0,options:void 0})},74855:function(t,e,n){"use strict";var r=n(74300).CopyToClipboard;r.CopyToClipboard=r,t.exports=r},11742:function(t){t.exports=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,n=[],r=0;r<t.rangeCount;r++)n.push(t.getRangeAt(r));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null}return t.removeAllRanges(),function(){"Caret"===t.type&&t.removeAllRanges(),t.rangeCount||n.forEach(function(e){t.addRange(e)}),e&&e.focus()}}},10798:function(t,e,n){"use strict";var r=n(67294);let o=r.forwardRef(function({title:t,titleId:e,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":e},n),t?r.createElement("title",{id:e},t):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"}))});e.Z=o},98165:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return i}});var o=["","K","M","B"],a={digits:1,uppercase:!0},i=function(t,e){if(void 0===e&&(e={}),isNaN(t))return 0;var n=Math.abs(t);if(n<1e3)return Number(t);for(var i=r({},a,e),c=i.digits,l=i.uppercase,s=[0,1].includes(Math.sign(t))?1:-1,u=0,f="",p=0;p<=o.length;p++){var d=Math.pow(1e3,p);n>=d&&(u=n/d,f=l?o[p]:o[p].toLowerCase())}return""+(u-Math.floor(u)<=0||0===c?Math.floor(u*s):parseFloat(u*s).toFixed(c))+f}},26509:function(t,e,n){"use strict";function r(){var t;return t="object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments),function(t){var e=[];if(0===t.length)return"";if("string"!=typeof t[0])throw TypeError("Url must be a string. Received "+t[0]);if(t[0].match(/^[^/:]+:\/*$/)&&t.length>1){var n=t.shift();t[0]=n+t[0]}t[0].match(/^file:\/\/\//)?t[0]=t[0].replace(/^([^/:]+):\/*/,"$1:///"):t[0]=t[0].replace(/^([^/:]+):\/*/,"$1://");for(var r=0;r<t.length;r++){var o=t[r];if("string"!=typeof o)throw TypeError("Url must be a string. Received "+o);""!==o&&(r>0&&(o=o.replace(/^[\/]+/,"")),o=r<t.length-1?o.replace(/[\/]+$/,""):o.replace(/[\/]+$/,"/"),e.push(o))}var a=e.join("/"),i=(a=a.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i.shift()+(i.length>0?"?":"")+i.join("&")}(t)}n.d(e,{Z:function(){return r}})}}]);
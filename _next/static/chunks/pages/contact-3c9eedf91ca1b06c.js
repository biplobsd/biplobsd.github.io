(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9335,1546,4855],{640:function(e,t,n){"use strict";var o=n(1742),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,i,c,l,s,u,p,f=!1;t||(t={}),i=t.debug||!1;try{if(l=o(),s=document.createRange(),u=document.getSelection(),(p=document.createElement("span")).textContent=e,p.ariaHidden="true",p.style.all="unset",p.style.position="fixed",p.style.top=0,p.style.clip="rect(0, 0, 0, 0)",p.style.whiteSpace="pre",p.style.webkitUserSelect="text",p.style.MozUserSelect="text",p.style.msUserSelect="text",p.style.userSelect="text",p.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){i&&console.warn("unable to use e.clipboardData"),i&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=r[t.format]||r.default;window.clipboardData.setData(o,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(p),s.selectNodeContents(p),u.addRange(s),!document.execCommand("copy"))throw Error("copy command was unsuccessful");f=!0}catch(o){i&&console.error("unable to copy using execCommand: ",o),i&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),f=!0}catch(o){i&&console.error("unable to copy using clipboardData: ",o),i&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",a=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",c=n.replace(/#{\s*key\s*}/g,a),window.prompt(c,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(s):u.removeAllRanges()),p&&document.body.removeChild(p),l()}return f}},1382:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(1721)}])},7671:function(e,t,n){"use strict";n.d(t,{F:function(){return p}});var o=n(5893),r=n(2025),a=n(7294),i=n(5152),c=n.n(i);let l=c()(()=>n.e(9755).then(n.t.bind(n,9755,23)),{loadableGenerated:{webpack:()=>[9755]}});function s(e){let{props:t,isLight:n}=e;return(0,o.jsx)("div",{className:" relative h-8 w-8 ",children:(0,o.jsx)(l,{className:n?"opacity-80":"invert-colors",layout:"fill",objectFit:"fill",src:"/images/logos/".concat(t.text.toLowerCase(),".png"),alt:t.text})})}function u(e){let t=(0,r.f)(),[n,i]=(0,a.useState)(r.u);return(0,a.useEffect)(()=>{i("winter"===t.themeName)},[t]),(0,o.jsx)("span",{className:"tooltip tooltip-bottom","data-tip":e.text,children:(0,o.jsx)("div",{className:"btn-ghost btn-circle btn",children:(0,o.jsx)(s,{isLight:n,props:e})})})}let p=[{icon:(0,o.jsx)(u,{text:"Gmail"}),name:"Gmail",text:"biplobsd11@gmail.com",url:"mailto:biplobsd11@gmail.com"},{icon:(0,o.jsx)(u,{text:"GitHub"}),name:"GitHub",text:"/biplobsd",copyUrl:!0,url:"https://github.com/biplobsd"},{icon:(0,o.jsx)(u,{text:"Twitter"}),name:"Twitter",text:"/biplobsd11",copyUrl:!0,url:"https://twitter.com/biplobsd11"},{icon:(0,o.jsx)(u,{text:"LinkedIn"}),name:"LinkedIn",text:"/biplob-sutradhar",copyUrl:!0,url:"https://www.linkedin.com/in/biplob-sutradhar/"}]},1546:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var o=n(5893),r=n(798),a=n(7294),i=n(4855),c=n.n(i),l=n(5314),s=n(1664),u=n.n(s);function p(e){let[t,n]=(0,a.useState)("Copy ".concat(e.name));return(0,o.jsxs)("div",{className:"group flex w-fit items-center gap-2 ",children:[(0,o.jsxs)(u(),{href:e.url,target:"_blank",className:"flex items-center gap-2",children:[e.icon,(0,o.jsx)("span",{className:"tooltip cursor-pointer","data-tip":"Click to open ".concat(e.name),children:e.text})]}),(0,o.jsx)("span",{className:"tooltip invisible group-hover:visible","data-tip":t,children:(0,o.jsx)(c(),{text:e.copyUrl?e.url:e.text,onCopy:async()=>{n("Copied"),await (0,l.g)(500),n("Copy ".concat(e.name))},children:(0,o.jsx)(r.Z,{className:"h-5 w-5 cursor-pointer hover:text-blue-600"})})})]})}var f=n(7671);function d(){return(0,o.jsxs)("div",{className:"mx-auto h-fit max-w-6xl px-4 pt-5 sm:pl-4 sm:pr-0",children:[(0,o.jsx)("p",{className:"text-center text-2xl normal-case text-slate-400",children:"Contact"}),(0,o.jsx)("div",{className:"flex w-full justify-center",children:(0,o.jsx)("div",{className:"p-card my-3 h-fit w-fit overflow-visible hover:bg-base-200",children:(0,o.jsx)("div",{className:"mx-2 my-2 flex w-fit justify-center",children:(0,o.jsx)("div",{className:"grid w-fit grid-cols-1 gap-x-2 lg:flex",children:f.F.map(e=>(0,o.jsx)(p,{...e},e.url))})})})})]})}},5314:function(e,t,n){"use strict";async function o(e){return await new Promise(t=>setTimeout(t,e))}n.d(t,{g:function(){return o}})},1721:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return s},default:function(){return u}});var o=n(5893),r=n(5152),a=n.n(r),i=n(1546);let c=a()(()=>Promise.all([n.e(2295),n.e(8425)]).then(n.bind(n,8425)),{loadableGenerated:{webpack:()=>[8425]}}),l=a()(()=>Promise.all([n.e(1255),n.e(2459)]).then(n.bind(n,2459)),{loadableGenerated:{webpack:()=>[2459]}});var s=!0;function u(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{configs:e.configs,description:"Contact | ".concat(e.configs.appName),title:"Contact | ".concat(e.configs.appName)}),(0,o.jsx)(i.default,{}),(0,o.jsx)(l,{})]})}},4300:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=c(n(7294)),a=c(n(640)),i=["text","onCopy","options","children"];function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){b(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(y,e);var t,n,c,l=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=d(y);if(t){var r=d(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return f(e)}(this,e)});function y(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,y);for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return b(f(e=l.call.apply(l,[this].concat(n))),"onClick",function(t){var n=e.props,o=n.text,i=n.onCopy,c=n.children,l=n.options,s=r.default.Children.only(c),u=(0,a.default)(o,l);i&&i(o,u),s&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(t)}),e}return n=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,i),o=r.default.Children.only(t);return r.default.cloneElement(o,s(s({},n),{},{onClick:this.onClick}))}}],u(y.prototype,n),c&&u(y,c),Object.defineProperty(y,"prototype",{writable:!1}),y}(r.default.PureComponent);t.CopyToClipboard=y,b(y,"defaultProps",{onCopy:void 0,options:void 0})},4855:function(e,t,n){"use strict";var o=n(4300).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},798:function(e,t,n){"use strict";var o=n(7294);let r=o.forwardRef(function({title:e,titleId:t,...n},r){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"}))});t.Z=r}},function(e){e.O(0,[1664,9774,2888,179],function(){return e(e.s=1382)}),_N_E=e.O()}]);
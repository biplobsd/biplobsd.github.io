(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[666],{4363:function(e,t,n){let r=n(7294),o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"}))});e.exports=o},640:function(e,t,n){"use strict";var r=n(1742),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,i,c,l,s,u,p,f=!1;t||(t={}),i=t.debug||!1;try{if(l=r(),s=document.createRange(),u=document.getSelection(),(p=document.createElement("span")).textContent=e,p.ariaHidden="true",p.style.all="unset",p.style.position="fixed",p.style.top=0,p.style.clip="rect(0, 0, 0, 0)",p.style.whiteSpace="pre",p.style.webkitUserSelect="text",p.style.MozUserSelect="text",p.style.msUserSelect="text",p.style.userSelect="text",p.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){i&&console.warn("unable to use e.clipboardData"),i&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=o[t.format]||o.default;window.clipboardData.setData(r,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(p),s.selectNodeContents(p),u.addRange(s),!document.execCommand("copy"))throw Error("copy command was unsuccessful");f=!0}catch(r){i&&console.error("unable to copy using execCommand: ",r),i&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),f=!0}catch(r){i&&console.error("unable to copy using clipboardData: ",r),i&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",a=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",c=n.replace(/#{\s*key\s*}/g,a),window.prompt(c,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(s):u.removeAllRanges()),p&&document.body.removeChild(p),l()}return f}},920:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/view/[file_name]",function(){return n(8862)}])},1124:function(e,t,n){"use strict";n.d(t,{w:function(){return r}});let r="https://biplobsd.github.io/"},4417:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893);function o(){return(0,r.jsx)("div",{className:"p-card loading mx-auto flex w-fit justify-center",children:"Loading..."})}},5314:function(e,t,n){"use strict";async function r(e){return await new Promise(t=>setTimeout(t,e))}n.d(t,{g:function(){return r}})},8425:function(e,t,n){"use strict";var r=n(5893),o=n(2962),a=n(1163);n(1124),t.Z=function(e){let{imgUrl:t,title:n,description:i,configs:c}=e,l=(0,a.useRouter)();return(0,r.jsx)(o.PB,{title:n,description:i,canonical:"https://biplobsd.me",openGraph:{url:"".concat("".concat("https://biplobsd.me",";")).concat(l.asPath),title:n,description:i,images:t?[{url:t,alt:"".concat(i," | ").concat(n)}]:void 0,site_name:n},twitter:{handle:c.twitterHandle,site:c.twitterHandle,cardType:"summary_large_image"}})}},5432:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(5893),o=n(4363),a=n(4855),i=n(1664),c=n.n(i),l=n(7294),s=n(5314),u=n(1163);function p(e){let[t,n]=(0,l.useState)("Copy link"),i=(0,u.useRouter)(),p="".concat("https://biplobsd.me").concat(i.asPath);return(0,r.jsxs)("div",{className:"p-card flex h-fit w-full flex-col space-y-2 overflow-visible py-2 text-xs sm:w-fit",children:[(0,r.jsxs)("div",{className:"flex w-full gap-1 text-left",children:[(0,r.jsx)("span",{children:"Share with"}),(0,r.jsx)("span",{className:"tooltip","data-tip":t,children:(0,r.jsx)(a.CopyToClipboard,{text:p,onCopy:async()=>{n("Copied"),await (0,s.g)(500),n("Copy link")},children:(0,r.jsx)(o,{className:"h-4 w-4 cursor-pointer hover:text-blue-600"})})})]}),(0,r.jsxs)("div",{className:"space-x-2",children:[(0,r.jsx)(c(),{target:"_blank",className:"link-hover link-primary link",href:"https://www.facebook.com/sharer/sharer.php?u=".concat(p),children:"Facebook"}),(0,r.jsx)(c(),{target:"_blank",className:"link-hover link-primary link",href:"https://twitter.com/intent/tweet?text=".concat(e.text," ").concat(encodeURIComponent(p)),children:"Twitter"}),(0,r.jsx)(c(),{target:"_blank",className:"link-hover link-primary link",href:"https://t.me/share/url?url=".concat(encodeURIComponent(p),"&text=").concat(e.text),children:"Telegram"})]})]})}n(1124)},8862:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return f},default:function(){return d}});var r=n(5893),o=n(5152),a=n.n(o),i=n(1664),c=n.n(i),l=n(4417),s=n(8425),u=n(5432);let p=a()(()=>Promise.all([n.e(903),n.e(534)]).then(n.bind(n,8048)),{loadableGenerated:{webpack:()=>[8048]},loading:()=>(0,r.jsx)(l.Z,{})});var f=!0;function d(e){let t="".concat(e.blog.fileName," | ").concat(e.configs.appName);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{configs:e.configs,description:e.blog.desc,title:t,imgUrl:e.blog.imgUrl}),(0,r.jsxs)("div",{className:" container mx-auto max-w-3xl px-2",children:[(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)(c(),{className:"link-hover link-primary link",href:"/blogs",children:"Blogs"})," ","/ ",e.blog.fileName]}),(0,r.jsxs)("div",{className:"my-2 flex flex-col items-center justify-between gap-2 sm:flex-row sm:items-end",children:[(0,r.jsxs)("div",{className:"p-card flex h-fit w-full flex-col items-start py-2 text-xs text-slate-500 sm:w-fit",children:[(0,r.jsxs)("div",{className:"flex items-center gap-1",children:["Title: ",(0,r.jsx)("span",{children:e.blog.title})]}),(0,r.jsxs)("div",{className:"flex items-center gap-1",children:["Date:"," ",(0,r.jsx)("span",{children:new Date(e.blog.date).toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"})})]}),(0,r.jsxs)("div",{className:"flex items-center gap-1",children:["Read time ",(0,r.jsxs)("span",{children:[e.blog.readTime," min"]})]})]}),(0,r.jsx)(u.Z,{text:"".concat(e.blog.desc)})]})]}),(0,r.jsx)(p,{data:e.data})]})}},4300:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=c(n(7294)),a=c(n(640)),i=["text","onCopy","options","children"];function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){m(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(y,e);var t,n,c,l=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=d(y);if(t){var o=d(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return f(e)}(this,e)});function y(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,y);for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return m(f(e=l.call.apply(l,[this].concat(n))),"onClick",function(t){var n=e.props,r=n.text,i=n.onCopy,c=n.children,l=n.options,s=o.default.Children.only(c),u=(0,a.default)(r,l);i&&i(r,u),s&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(t)}),e}return n=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,i),r=o.default.Children.only(t);return o.default.cloneElement(r,s(s({},n),{},{onClick:this.onClick}))}}],u(y.prototype,n),c&&u(y,c),Object.defineProperty(y,"prototype",{writable:!1}),y}(o.default.PureComponent);t.CopyToClipboard=y,m(y,"defaultProps",{onCopy:void 0,options:void 0})},4855:function(e,t,n){"use strict";var r=n(4300).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}},function(e){e.O(0,[929,664,774,888,179],function(){return e(e.s=920)}),_N_E=e.O()}]);
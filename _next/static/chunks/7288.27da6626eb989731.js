(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7288,4855],{20640:function(t,n,o){"use strict";var i=o(11742),a={"text/plain":"Text","text/html":"Url",default:"Text"};t.exports=function(t,n){var o,c,l,s,u,p,f,d,y=!1;n||(n={}),l=n.debug||!1;try{if(u=i(),p=document.createRange(),f=document.getSelection(),(d=document.createElement("span")).textContent=t,d.ariaHidden="true",d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",function(o){if(o.stopPropagation(),n.format){if(o.preventDefault(),void 0===o.clipboardData){l&&console.warn("unable to use e.clipboardData"),l&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=a[n.format]||a.default;window.clipboardData.setData(i,t)}else o.clipboardData.clearData(),o.clipboardData.setData(n.format,t)}n.onCopy&&(o.preventDefault(),n.onCopy(o.clipboardData))}),document.body.appendChild(d),p.selectNodeContents(d),f.addRange(p),!document.execCommand("copy"))throw Error("copy command was unsuccessful");y=!0}catch(i){l&&console.error("unable to copy using execCommand: ",i),l&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(n.format||"text",t),n.onCopy&&n.onCopy(window.clipboardData),y=!0}catch(i){l&&console.error("unable to copy using clipboardData: ",i),l&&console.error("falling back to prompt"),o="message"in n?n.message:"Copy to clipboard: #{key}, Enter",c=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",s=o.replace(/#{\s*key\s*}/g,c),window.prompt(s,t)}}finally{f&&("function"==typeof f.removeRange?f.removeRange(p):f.removeAllRanges()),d&&document.body.removeChild(d),u()}return y}},87803:function(t,n,o){"use strict";o.d(n,{$k:function(){return getDataUrl},LF:function(){return toTitleCase},LU:function(){return showCountHuman},S:function(){return getPrefixRepo},WR:function(){return sliceText},_y:function(){return isPro},bE:function(){return getUserNRepo}});var i=o(98165),a=o(20562),c=o(26509);function isPro(t){return"whatText"in t}function toTitleCase(t){return t.replace(/\b\w+/g,t=>t.charAt(0).toUpperCase()+t.substr(1).toLowerCase())}function showCountHuman(t){return(0,i.Z)(t,{digits:2,uppercase:!1})}function sliceText(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:160;if(t.length>n){let o=t.slice(0,n),i=o.charAt(o.length-1);return" "!==i&&(o=o.substring(0,o.lastIndexOf(" ")),/[^\w\s]/.test(i)&&(o=o.substring(0,o.length-1))),o}return t}function getDataUrl(t){return(0,c.Z)("https://github.com",t,"/blob/".concat(a.O.NEXT_PUBLIC_REPO_DATA_BRANCH))}function getUserNRepo(t){var n,o;let i=t.split("/");return{userName:null!==(n=i[1])&&void 0!==n?n:"",repo:null!==(o=i[2])&&void 0!==o?o:""}}function getPrefixRepo(){return a.O.NEXT_PUBLIC_LOCALHOST_TEST?"":a.O.NEXT_PUBLIC_PREFIX_REPO}},73312:function(t,n,o){"use strict";o.d(n,{F:function(){return d}});var i=o(85893),a=o(98774),c=o(67294),l=o(5152),s=o.n(l),u=o(87803);let p=s()(()=>o.e(9755).then(o.t.bind(o,89755,23)),{loadableGenerated:{webpack:()=>[89755]}});function ImageIcon(t){let{props:n,isLight:o}=t,[a,l]=(0,c.useState)(!0);return(0,i.jsxs)("div",{className:"relative h-8 w-8",children:[a&&(0,i.jsx)("div",{className:"h-full w-full animate-pulse rounded-xl bg-base-content/80"}),(0,i.jsx)(p,{className:o?"opacity-80":"invert-colors",layout:"fill",objectFit:"fill",src:"".concat((0,u.S)(),"/images/logos/").concat(n.text.toLowerCase(),".png"),alt:n.text,onLoadingComplete:()=>{l(!1)}})]})}function ConnectButton(t){let n=(0,a.f)(),[o,l]=(0,c.useState)(a.u);return(0,c.useEffect)(()=>{l("winter"===n.themeName)},[n]),(0,i.jsx)("span",{className:"tooltip tooltip-bottom","data-tip":t.text,children:(0,i.jsx)("div",{className:"btn-ghost btn-circle btn",children:(0,i.jsx)(ImageIcon,{isLight:o,props:t})})})}var f=o(20562);let d=[{icon:(0,i.jsx)(ConnectButton,{text:"Gmail"}),name:"Gmail",text:f.O.NEXT_PUBLIC_GMAIL,url:"mailto:".concat(f.O.NEXT_PUBLIC_GMAIL)},{icon:(0,i.jsx)(ConnectButton,{text:"GitHub"}),name:"GitHub",text:f.O.NEXT_PUBLIC_GITHUB,copyUrl:!0,url:"https://github.com/".concat(f.O.NEXT_PUBLIC_GITHUB)},{icon:(0,i.jsx)(ConnectButton,{text:"Twitter"}),name:"Twitter",text:f.O.NEXT_PUBLIC_TWITTER_HANDLE,copyUrl:!0,url:"https://twitter.com/".concat(f.O.NEXT_PUBLIC_TWITTER_HANDLE)},{icon:(0,i.jsx)(ConnectButton,{text:"LinkedIn"}),name:"LinkedIn",text:f.O.NEXT_PUBLIC_LINKEDIN,copyUrl:!0,url:"https://www.linkedin.com/in/".concat(f.O.NEXT_PUBLIC_LINKEDIN)}]},97288:function(t,n,o){"use strict";o.r(n),o.d(n,{default:function(){return ContactSection}});var i=o(85893),a=o(10798),c=o(67294),l=o(74855),s=o.n(l),u=o(6615),p=o(41664),f=o.n(p);function ContactItem(t){let[n,o]=(0,c.useState)("Copy ".concat(t.name));return(0,i.jsxs)("div",{className:"group flex w-fit items-center gap-2 ",children:[(0,i.jsxs)(f(),{href:t.url,target:"_blank",className:"flex items-center gap-2",children:[t.icon,(0,i.jsx)("span",{className:"tooltip cursor-pointer","data-tip":"Click to open ".concat(t.name),children:t.text})]}),(0,i.jsx)("span",{className:"tooltip invisible group-hover:visible","data-tip":n,children:(0,i.jsx)(s(),{text:t.copyUrl?t.url:t.text,onCopy:async()=>{o("Copied"),await (0,u.g)(500),o("Copy ".concat(t.name))},children:(0,i.jsx)(a.Z,{className:"h-5 w-5 cursor-pointer hover:text-blue-600"})})})]})}var d=o(73312);function ContactSection(){return(0,i.jsxs)("div",{className:"mx-auto h-fit max-w-6xl px-4 pt-5 sm:pl-4 sm:pr-0",children:[(0,i.jsx)("p",{className:"text-center text-2xl normal-case text-slate-400",children:"Contact"}),(0,i.jsx)("div",{className:"flex w-full justify-center",children:(0,i.jsx)("div",{className:"p-card my-3 h-fit w-fit !animate-none overflow-visible hover:bg-base-200 active:!scale-100",children:(0,i.jsx)("div",{className:"mx-2 my-2 flex w-fit justify-center",children:(0,i.jsx)("div",{className:"grid w-fit grid-cols-1 gap-x-2 lg:flex",children:d.F.map(t=>(0,i.jsx)(ContactItem,{...t},t.url))})})})})]})}},6615:function(t,n,o){"use strict";async function delay(t){return await new Promise(n=>setTimeout(n,t))}o.d(n,{g:function(){return delay}})},74300:function(t,n,o){"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(n,"__esModule",{value:!0}),n.CopyToClipboard=void 0;var i=_interopRequireDefault(o(67294)),a=_interopRequireDefault(o(20640)),c=["text","onCopy","options","children"];function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function ownKeys(t,n){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),o.push.apply(o,i)}return o}function _objectSpread(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(o),!0).forEach(function(n){_defineProperty(t,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(o,n))})}return t}function _defineProperties(t,n){for(var o=0;o<n.length;o++){var i=n[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _setPrototypeOf(t,n){return(_setPrototypeOf=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function _assertThisInitialized(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _defineProperty(t,n,o){return n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}var l=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&_setPrototypeOf(t,n)}(CopyToClipboard,t);var n,o,l,s=(n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t,o=_getPrototypeOf(CopyToClipboard);if(n){var i=_getPrototypeOf(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return function(t,n){if(n&&("object"===_typeof(n)||"function"==typeof n))return n;if(void 0!==n)throw TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}(this,t)});function CopyToClipboard(){var t;!function(t,n){if(!(t instanceof n))throw TypeError("Cannot call a class as a function")}(this,CopyToClipboard);for(var n=arguments.length,o=Array(n),c=0;c<n;c++)o[c]=arguments[c];return _defineProperty(_assertThisInitialized(t=s.call.apply(s,[this].concat(o))),"onClick",function(n){var o=t.props,c=o.text,l=o.onCopy,s=o.children,u=o.options,p=i.default.Children.only(s),f=(0,a.default)(c,u);l&&l(c,f),p&&p.props&&"function"==typeof p.props.onClick&&p.props.onClick(n)}),t}return o=[{key:"render",value:function(){var t=this.props,n=(t.text,t.onCopy,t.options,t.children),o=function(t,n){if(null==t)return{};var o,i,a=function(t,n){if(null==t)return{};var o,i,a={},c=Object.keys(t);for(i=0;i<c.length;i++)o=c[i],n.indexOf(o)>=0||(a[o]=t[o]);return a}(t,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(i=0;i<c.length;i++)o=c[i],!(n.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}(t,c),a=i.default.Children.only(n);return i.default.cloneElement(a,_objectSpread(_objectSpread({},o),{},{onClick:this.onClick}))}}],_defineProperties(CopyToClipboard.prototype,o),l&&_defineProperties(CopyToClipboard,l),Object.defineProperty(CopyToClipboard,"prototype",{writable:!1}),CopyToClipboard}(i.default.PureComponent);n.CopyToClipboard=l,_defineProperty(l,"defaultProps",{onCopy:void 0,options:void 0})},74855:function(t,n,o){"use strict";var i=o(74300).CopyToClipboard;i.CopyToClipboard=i,t.exports=i},11742:function(t){t.exports=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var n=document.activeElement,o=[],i=0;i<t.rangeCount;i++)o.push(t.getRangeAt(i));switch(n.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":n.blur();break;default:n=null}return t.removeAllRanges(),function(){"Caret"===t.type&&t.removeAllRanges(),t.rangeCount||o.forEach(function(n){t.addRange(n)}),n&&n.focus()}}},10798:function(t,n,o){"use strict";var i=o(67294);let a=i.forwardRef(function({title:t,titleId:n,...o},a){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":n},o),t?i.createElement("title",{id:n},t):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"}))});n.Z=a},98165:function(t,n,o){"use strict";function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t}).apply(this,arguments)}o.d(n,{Z:function(){return e}});var i=["","K","M","B"],a={digits:1,uppercase:!0},e=function(t,n){if(void 0===n&&(n={}),isNaN(t))return 0;var o=Math.abs(t);if(o<1e3)return Number(t);for(var c=r({},a,n),l=c.digits,s=c.uppercase,u=[0,1].includes(Math.sign(t))?1:-1,p=0,f="",d=0;d<=i.length;d++){var y=Math.pow(1e3,d);o>=y&&(p=o/y,f=s?i[d]:i[d].toLowerCase())}return""+(p-Math.floor(p)<=0||0===l?Math.floor(p*u):parseFloat(p*u).toFixed(l))+f}},26509:function(t,n,o){"use strict";function urlJoin(){var t;return t="object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments),function(t){var n=[];if(0===t.length)return"";if("string"!=typeof t[0])throw TypeError("Url must be a string. Received "+t[0]);if(t[0].match(/^[^/:]+:\/*$/)&&t.length>1){var o=t.shift();t[0]=o+t[0]}t[0].match(/^file:\/\/\//)?t[0]=t[0].replace(/^([^/:]+):\/*/,"$1:///"):t[0]=t[0].replace(/^([^/:]+):\/*/,"$1://");for(var i=0;i<t.length;i++){var a=t[i];if("string"!=typeof a)throw TypeError("Url must be a string. Received "+a);""!==a&&(i>0&&(a=a.replace(/^[\/]+/,"")),a=i<t.length-1?a.replace(/[\/]+$/,""):a.replace(/[\/]+$/,"/"),n.push(a))}var c=n.join("/"),l=(c=c.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return l.shift()+(l.length>0?"?":"")+l.join("&")}(t)}o.d(n,{Z:function(){return urlJoin}})}}]);
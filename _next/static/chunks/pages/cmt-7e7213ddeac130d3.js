(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5794,4969,1444],{73e3:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cmt",function(){return n(20647)}])},48157:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{$k:function(){return h},S:function(){return d},bE:function(){return _},_y:function(){return s},LU:function(){return f},WR:function(){return p},LF:function(){return l}});var i=["","K","M","B"],u={digits:1,uppercase:!0},o=function(t,e){if(void 0===e&&(e={}),isNaN(t))return 0;var n=Math.abs(t);if(n<1e3)return Number(t);for(var o=r({},u,e),a=o.digits,c=o.uppercase,s=[0,1].includes(Math.sign(t))?1:-1,l=0,f="",p=0;p<=i.length;p++){var h=Math.pow(1e3,p);n>=h&&(l=n/h,f=c?i[p]:i[p].toLowerCase())}return""+(l-Math.floor(l)<=0||0===a?Math.floor(l*s):parseFloat(l*s).toFixed(a))+f},a=n(45645),c=n(26509);function s(t){return"whatText"in t}function l(t){return t.replace(/\b\w+/g,t=>t.charAt(0).toUpperCase()+t.substr(1).toLowerCase())}function f(t){return o(t,{digits:2,uppercase:!1})}function p(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:160;if(t.length>e){let n=t.slice(0,e),r=n.charAt(n.length-1);return" "!==r&&(n=n.substring(0,n.lastIndexOf(" ")),/[^\w\s]/.test(r)&&(n=n.substring(0,n.length-1))),n}return t}function h(t){return(0,c.Z)("https://github.com",t,"/blob/".concat(a.O.NEXT_PUBLIC_REPO_DATA_BRANCH))}function _(t){var e,n;let r=t.split("/");return{userName:null!==(e=r[1])&&void 0!==e?e:"",repo:null!==(n=r[2])&&void 0!==n?n:""}}function d(){return a.O.NEXT_PUBLIC_LOCALHOST_TEST?"":a.O.NEXT_PUBLIC_PREFIX_REPO}},91444:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return a}});var r=n(85893),i=n(99861),u=n(48157),o=n(45645);function a(t){let e=(0,u.bE)(o.O.NEXT_PUBLIC_REPO_PATH);return(0,r.jsx)(i.Z,{id:"comments",repo:"".concat(e.userName,"/").concat(e.repo),repoId:o.O.NEXT_PUBLIC_REPO_ID,category:o.O.NEXT_PUBLIC_CATEGORY,categoryId:o.O.NEXT_PUBLIC_CATEGORY_ID,mapping:"pathname",term:"Welcome to @giscus/react component!",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",lang:"en",loading:"lazy",...t})}},20647:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var r=n(85893),i=n(5152),u=n.n(i),o=n(45645),a=n(67294),c=n(2025),s=n(91444);let l=u()(()=>Promise.all([n.e(2295),n.e(8425)]).then(n.bind(n,8425)),{loadableGenerated:{webpack:()=>[8425]}});function f(){let t=(0,c.f)(),[e,n]=(0,a.useState)(c.u),i="Comments | ".concat(o.O.NEXT_PUBLIC_PERSON_NAME);return(0,a.useEffect)(()=>{n("winter"===t.themeName)},[t]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{description:"Comments | ".concat(o.O.NEXT_PUBLIC_PERSON_NAME),title:i}),(0,r.jsx)("h1",{className:"mx-auto mb-5 w-full text-center text-2xl capitalize",children:"\uD83D\uDC4D Write any comment \uD83D\uDE04"}),(0,r.jsx)("div",{className:"mx-auto max-w-6xl px-2",children:(0,r.jsx)(s.default,{theme:e?"light":"dark_dimmed"},i)})]})}},26509:function(t,e,n){"use strict";function r(){var t;return t="object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments),function(t){var e=[];if(0===t.length)return"";if("string"!=typeof t[0])throw TypeError("Url must be a string. Received "+t[0]);if(t[0].match(/^[^/:]+:\/*$/)&&t.length>1){var n=t.shift();t[0]=n+t[0]}t[0].match(/^file:\/\/\//)?t[0]=t[0].replace(/^([^/:]+):\/*/,"$1:///"):t[0]=t[0].replace(/^([^/:]+):\/*/,"$1://");for(var r=0;r<t.length;r++){var i=t[r];if("string"!=typeof i)throw TypeError("Url must be a string. Received "+i);""!==i&&(r>0&&(i=i.replace(/^[\/]+/,"")),i=r<t.length-1?i.replace(/[\/]+$/,""):i.replace(/[\/]+$/,"/"),e.push(i))}var u=e.join("/"),o=(u=u.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return o.shift()+(o.length>0?"?":"")+o.join("&")}(t)}n.d(e,{Z:function(){return r}})}},function(t){t.O(0,[9861,9774,2888,179],function(){return t(t.s=73e3)}),_N_E=t.O()}]);
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7280,7504],{87803:function(t,n,o){o.d(n,{$k:function(){return getDataUrl},LF:function(){return toTitleCase},LU:function(){return showCountHuman},S:function(){return getPrefixRepo},WR:function(){return sliceText},_y:function(){return isPro},bE:function(){return getUserNRepo}});var i=o(98165),u=o(20562),a=o(26509);function isPro(t){return"whatText"in t}function toTitleCase(t){return t.replace(/\b\w+/g,t=>t.charAt(0).toUpperCase()+t.substr(1).toLowerCase())}function showCountHuman(t){return(0,i.Z)(t,{digits:2,uppercase:!1})}function sliceText(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:160;if(t.length>n){let o=t.slice(0,n),i=o.charAt(o.length-1);return" "!==i&&(o=o.substring(0,o.lastIndexOf(" ")),/[^\w\s]/.test(i)&&(o=o.substring(0,o.length-1))),o}return t}function getDataUrl(t){return(0,a.Z)("https://github.com",t,"/blob/".concat(u.O.NEXT_PUBLIC_REPO_DATA_BRANCH))}function getUserNRepo(t){var n,o;let i=t.split("/");return{userName:null!==(n=i[1])&&void 0!==n?n:"",repo:null!==(o=i[2])&&void 0!==o?o:""}}function getPrefixRepo(){return u.O.NEXT_PUBLIC_LOCALHOST_TEST?"":u.O.NEXT_PUBLIC_PREFIX_REPO}},47280:function(t,n,o){o.r(n),o.d(n,{default:function(){return Comments}});var i=o(85893),u=o(99861),a=o(87803),c=o(20562);function Comments(t){let n=(0,a.bE)(c.O.NEXT_PUBLIC_REPO_PATH);return(0,i.jsx)(u.Z,{id:"comments",repo:"".concat(n.userName,"/").concat(n.repo),repoId:c.O.NEXT_PUBLIC_REPO_ID,category:c.O.NEXT_PUBLIC_CATEGORY,categoryId:c.O.NEXT_PUBLIC_CATEGORY_ID,mapping:"pathname",term:"Welcome to @giscus/react component!",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",lang:"en",loading:"lazy",...t})}},98165:function(t,n,o){function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t}).apply(this,arguments)}o.d(n,{Z:function(){return e}});var i=["","K","M","B"],u={digits:1,uppercase:!0},e=function(t,n){if(void 0===n&&(n={}),isNaN(t))return 0;var o=Math.abs(t);if(o<1e3)return Number(t);for(var a=r({},u,n),c=a.digits,s=a.uppercase,l=[0,1].includes(Math.sign(t))?1:-1,f=0,p="",g=0;g<=i.length;g++){var h=Math.pow(1e3,g);o>=h&&(f=o/h,p=s?i[g]:i[g].toLowerCase())}return""+(f-Math.floor(f)<=0||0===c?Math.floor(f*l):parseFloat(f*l).toFixed(c))+p}},26509:function(t,n,o){o.d(n,{Z:function(){return urlJoin}});function urlJoin(){var t;return t="object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments),function(t){var n=[];if(0===t.length)return"";if("string"!=typeof t[0])throw TypeError("Url must be a string. Received "+t[0]);if(t[0].match(/^[^/:]+:\/*$/)&&t.length>1){var o=t.shift();t[0]=o+t[0]}t[0].match(/^file:\/\/\//)?t[0]=t[0].replace(/^([^/:]+):\/*/,"$1:///"):t[0]=t[0].replace(/^([^/:]+):\/*/,"$1://");for(var i=0;i<t.length;i++){var u=t[i];if("string"!=typeof u)throw TypeError("Url must be a string. Received "+u);""!==u&&(i>0&&(u=u.replace(/^[\/]+/,"")),u=i<t.length-1?u.replace(/[\/]+$/,""):u.replace(/[\/]+$/,"/"),n.push(u))}var a=n.join("/"),c=(a=a.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return c.shift()+(c.length>0?"?":"")+c.join("&")}(t)}}}]);
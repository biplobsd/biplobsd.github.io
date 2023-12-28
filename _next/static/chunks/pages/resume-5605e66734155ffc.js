(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9647],{82567:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resume",function(){return a(28441)}])},4624:function(e,t,a){"use strict";a.d(t,{Z:function(){return Spotlight}});var r=a(85893),n=a(25675),l=a.n(n),s=a(67294);function Spotlight(){let[e,t]=(0,s.useState)({translateX:0,rotateY:0});return(0,s.useEffect)(()=>{let animate=e=>{t({translateX:40*Math.sin(.001*e),rotateY:40*Math.cos(.001*e)}),requestAnimationFrame(animate)},e=requestAnimationFrame(animate);return()=>{cancelAnimationFrame(e)}},[]),(0,r.jsxs)("div",{className:"absolute -z-10 flex w-full overflow-hidden items-center justify-center",children:[(0,r.jsx)(l(),{width:631,height:550,className:"-z-10",src:"/images/spotlight-left.png",alt:"Green spotlight",style:{transform:"translateX(".concat(e.translateX,"px) rotateY(").concat(e.rotateY,"deg)")}}),(0,r.jsx)(l(),{width:631,height:535,className:"absolute top-0 -z-10",src:"/images/spotlight-right.png",alt:"purple-spotlight",style:{transform:"translateX(".concat(-e.translateX,"px) rotateY(").concat(-e.rotateY,"deg)")}})]})}},28441:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Resume}});var r=a(85893),n=a(67294);let l=n.forwardRef(function({title:e,titleId:t,...a},r){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},a),e?n.createElement("title",{id:t},e):null,n.createElement("path",{fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z",clipRule:"evenodd"}))});var s=a(20562),i=a(44304),o=a(5152),c=a.n(o),u=a(41664),f=a.n(u),d=a(26509),h=a(4624);let m=c()(()=>Promise.all([a.e(8016),a.e(6025)]).then(a.bind(a,33937)),{loadableGenerated:{webpack:()=>[33937]}}),p=c()(()=>Promise.all([a.e(4577),a.e(5790),a.e(1837)]).then(a.bind(a,65410)),{loadableGenerated:{webpack:()=>[65410]}});function Resume(){let e=(0,d.Z)(s.O.NEXT_PUBLIC_USER_CONTENT_BASE_URL,s.O.NEXT_PUBLIC_REPO_PATH,s.O.NEXT_PUBLIC_REPO_DATA_BRANCH,s.O.NEXT_PUBLIC_RESUME_PATH);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m,{description:"Resume | ".concat(s.O.NEXT_PUBLIC_PERSON_NAME),title:"Resume | ".concat(s.O.NEXT_PUBLIC_PERSON_NAME)}),(0,r.jsx)(h.Z,{}),(0,r.jsx)("div",{className:"my-5 flex justify-center",children:(0,r.jsxs)(f(),{onClick:()=>(0,i.B)("resume",{category:"resume",label:"Resume download"}),href:e,download:!0,className:"p-card cursor-pointer gap-2",children:[(0,r.jsx)(l,{className:"m-1 h-5 w-5 "}),(0,r.jsx)("span",{children:"Download resume"})]})}),(0,r.jsx)(p,{resumeUrl:e})]})}},26509:function(e,t,a){"use strict";function urlJoin(){var e;return e="object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments),function(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var a=e.shift();e[0]=a+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var r=0;r<e.length;r++){var n=e[r];if("string"!=typeof n)throw TypeError("Url must be a string. Received "+n);""!==n&&(r>0&&(n=n.replace(/^[\/]+/,"")),n=r<e.length-1?n.replace(/[\/]+$/,""):n.replace(/[\/]+$/,"/"),t.push(n))}var l=t.join("/"),s=(l=l.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return s.shift()+(s.length>0?"?":"")+s.join("&")}(e)}a.d(t,{Z:function(){return urlJoin}})}},function(e){e.O(0,[1664,5675,9774,2888,179],function(){return e(e.s=82567)}),_N_E=e.O()}]);
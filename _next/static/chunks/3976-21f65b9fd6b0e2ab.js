(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3976,2404,440],{7384:function(e,t,a){let i=a(7294),l=i.forwardRef(function({title:e,titleId:t,...a},l){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":t},a),e?i.createElement("title",{id:t},e):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"}))});e.exports=l},1455:function(e,t,a){let i=a(7294),l=i.forwardRef(function({title:e,titleId:t,...a},l){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":t},a),e?i.createElement("title",{id:t},e):null,i.createElement("path",{fillRule:"evenodd",d:"M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z",clipRule:"evenodd"}))});e.exports=l},7410:function(e,t,a){let i=a(7294),l=i.forwardRef(function({title:e,titleId:t,...a},l){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":t},a),e?i.createElement("title",{id:t},e):null,i.createElement("path",{fillRule:"evenodd",d:"M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z",clipRule:"evenodd"}))});e.exports=l},8157:function(e,t,a){"use strict";function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}a.d(t,{$k:function(){return m},bE:function(){return x},_y:function(){return r},LU:function(){return o},WR:function(){return d},LF:function(){return c}});var l=["","K","M","B"],s={digits:1,uppercase:!0},n=function(e,t){if(void 0===t&&(t={}),isNaN(e))return 0;var a=Math.abs(e);if(a<1e3)return Number(e);for(var n=i({},s,t),r=n.digits,c=n.uppercase,o=[0,1].includes(Math.sign(e))?1:-1,d=0,m="",x=0;x<=l.length;x++){var p=Math.pow(1e3,x);a>=p&&(d=a/p,m=c?l[x]:l[x].toLowerCase())}return""+(d-Math.floor(d)<=0||0===r?Math.floor(d*o):parseFloat(d*o).toFixed(r))+m};function r(e){return"whatText"in e}function c(e){return e.replace(/\b\w+/g,e=>e.charAt(0).toUpperCase()+e.substr(1).toLowerCase())}function o(e){return n(e,{digits:2,uppercase:!1})}function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:160;if(e.length>t){let a=e.slice(0,t),i=a.charAt(a.length-1);return" "!==i&&(a=a.substring(0,a.lastIndexOf(" ")),/[^\w\s]/.test(i)&&(a=a.substring(0,a.length-1))),a}return e}function m(e){return"https://github.com"+e+"/blob/data"}function x(e){var t,a;let i=e.split("/");return{userName:null!==(t=i[1])&&void 0!==t?t:"",repo:null!==(a=i[2])&&void 0!==a?a:""}}},2404:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o}});var i=a(5893),l=a(7814),s=a(5152),n=a.n(s);let r=n()(()=>a.e(1664).then(a.t.bind(a,1664,23)),{loadableGenerated:{webpack:()=>[1664]}}),c=n()(()=>a.e(9755).then(a.t.bind(a,9755,23)),{loadableGenerated:{webpack:()=>[9755]}});function o(e){return(0,i.jsxs)(r,{className:"p-card h-48 cursor-pointer flex-row items-center justify-start py-3 hover:-translate-y-1 hover:shadow-lg",href:"/apps/view/".concat(e.fileName),children:[(0,i.jsx)("div",{className:"relative mx-auto h-24 w-24 overflow-hidden rounded-3xl px-0 text-justify",children:e.imgUrl?(0,i.jsx)(c,{blurDataURL:e.imgBlurData,placeholder:e.imgBlurData?"blur":"empty",loading:"lazy",objectFit:"cover",layout:"fill",src:e.imgUrl,alt:e.title}):(0,i.jsxs)("div",{className:"flex h-full flex-col justify-center text-center",children:[(0,i.jsx)(l.Z,{className:"mx-auto h-10 w-10"}),(0,i.jsx)("p",{children:"No logo"})]})}),(0,i.jsxs)("div",{className:"mx-0 mt-1 h-fit w-full px-2 text-center tracking-wider",children:[(0,i.jsx)("p",{className:"mb-1 font-semibold leading-4",children:e.title}),(0,i.jsx)("p",{className:"text-xs text-base-content",children:e.category})]})]})}},440:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var i=a(5893),l=a(5152),s=a.n(l),n=a(7294),r=a(9723);let c=s()(()=>a.e(1664).then(a.t.bind(a,1664,23)),{loadableGenerated:{webpack:()=>[1664]}}),o=s()(()=>a.e(9755).then(a.t.bind(a,9755,23)),{loadableGenerated:{webpack:()=>[9755]}}),d=s()(()=>a.e(9732).then(a.bind(a,9732)),{loadableGenerated:{webpack:()=>[9732]},ssr:!1});function m(e){let t=(0,r.f)(),[a,l]=(0,n.useState)(r.u),[s,m]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{l("winter"===t.themeName)},[t]),(0,i.jsx)("span",{className:"tooltip w-full","data-tip":"More details",children:(0,i.jsxs)(c,{href:"/company/view/".concat(e.fileName),onPointerEnter:()=>m(!0),onPointerLeave:()=>m(!1),className:"p-card flex h-full w-full cursor-pointer flex-col py-4",children:[(0,i.jsx)("div",{className:"relative mx-auto mb-2 h-10 w-10 overflow-hidden",children:(0,i.jsx)(o,{blurDataURL:e.imgBlurData?e.imgBlurData:void 0,placeholder:e.imgBlurData?"blur":void 0,className:a||s?"opacity-80":"invert-colors",alt:e.title,src:e.imgUrl,objectFit:"fill",layout:"fill"})}),(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("span",{className:"text-sm font-semibold tracking-widest",children:e.title}),(0,i.jsx)(d,{start:e.start,end:e.end})]})]})})}},4417:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var i=a(5893);function l(){return(0,i.jsx)("div",{className:"p-card loading mx-auto flex w-fit justify-center",children:"Loading..."})}},3976:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return k},default:function(){return V}});var i=a(5893),l=a(7294),s=a(1455),n=a(7410),r=a(5152),c=a.n(r),o=a(4417),d=a(2404),m=a(9723),x=a(7384),p=a(8157),u=a(440);let h=c()(()=>a.e(9861).then(a.bind(a,9861)),{loadableGenerated:{webpack:()=>[8071]}}),f=c()(()=>Promise.all([a.e(2295),a.e(8263)]).then(a.bind(a,8425)),{loadableGenerated:{webpack:()=>[8425]}}),w=c()(()=>a.e(1664).then(a.t.bind(a,1664,23)),{loadableGenerated:{webpack:()=>[1664]}}),g=c()(()=>a.e(5675).then(a.t.bind(a,5675,23)),{loadableGenerated:{webpack:()=>[5675]}}),j=c()(()=>a.e(9755).then(a.t.bind(a,9755,23)),{loadableGenerated:{webpack:()=>[9755]}}),v=c()(()=>a.e(5432).then(a.bind(a,5432)),{loadableGenerated:{webpack:()=>[5432]}}),b=c()(()=>a.e(7055).then(a.bind(a,7055)),{loadableGenerated:{webpack:()=>[7055]},ssr:!1}),y=c()(()=>Promise.all([a.e(1903),a.e(4534)]).then(a.bind(a,8048)),{loadableGenerated:{webpack:()=>[8048]},loading:()=>(0,i.jsx)(o.Z,{})}),N=c()(()=>a.e(8190).then(a.bind(a,8190)),{loadableGenerated:{webpack:()=>[8190]}});var k=!0;function V(e){let t,a,r,c;let o=(0,m.f)(),[k,V]=(0,l.useState)(m.u);switch((0,l.useEffect)(()=>{V("winter"===o.themeName)},[o]),e.type){case"projects":let E=e.itemView;t="".concat(E.whatText),a="".concat(E.result," | ").concat((0,p.LF)(e.type)," | ").concat(E.company.name," | ").concat(E.app.name),r="".concat(E.whatText," ").concat(E.result),c=E;break;case"blogs":let L=e.itemView;t=L.title,a="".concat(L.desc," | ").concat((0,p.LF)(e.type)," | ").concat(e.configs.appName),r=L.desc;break;case"apps":let G=e.itemView;t=G.title,a="".concat(G.category," | ").concat((0,p.LF)(e.type)," | ").concat(G.platforms.map(e=>e.name).join(" | ")," | ").concat(e.configs.appName),r=G.title;break;case"company":let F=e.itemView;t=F.title,a="".concat(t," | ").concat((0,p.LF)(e.type)),r=t}let M=(0,p.bE)(e.configs.repoPath),U=(0,p.$k)(e.configs.repoPath)+"/"+e.type+"/"+e.itemView.fileName+"?plain=1";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f,{configs:e.configs,description:a,title:t,imgUrl:e.itemView.imgUrl,ogType:"article",itemView:e.itemView}),(0,i.jsxs)("div",{className:"container mx-auto max-w-3xl px-2",children:[(0,i.jsxs)("div",{className:"flex flex-wrap items-center gap-1",children:[(0,i.jsx)(w,{className:"title link-hover link-primary link capitalize",href:"/"+e.type,children:e.type})," ","/ ",e.itemView.fileName,(0,i.jsx)("div",{className:"tooltip tooltip-bottom","data-tip":"Edit this on Github",children:(0,i.jsx)(w,{href:U,target:"_blank",rel:"",children:(0,i.jsx)(x,{className:"link-hover link h-4 w-4"})})})]}),(0,i.jsxs)("div",{className:"my-2 flex flex-col items-center justify-between gap-2 sm:flex-row sm:items-end",children:[(0,i.jsxs)("div",{className:"p-card flex h-fit w-full flex-col items-start py-2 text-xs text-slate-500 sm:w-fit",children:[("projects"===e.type||"company"===e.type)&&(0,i.jsxs)("div",{className:"flex items-center gap-1",children:["Company Name:"," ",(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"flex items-center gap-1",children:[(0,i.jsx)(g,{width:20,height:20,src:c?c.company.logoUrl:e.itemView.imgUrl,alt:c?c.company.name:e.itemView.title}),(0,i.jsx)("span",{children:c?c.company.name:e.itemView.title})]})})]}),(0,i.jsx)("div",{className:"flex items-center gap-1",children:function(){switch(e.type){case"projects":if(!c)return(0,i.jsx)(i.Fragment,{});return(0,i.jsxs)(i.Fragment,{children:["App Name:"," ",(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"flex items-center gap-1",children:[(0,i.jsx)(g,{width:20,height:20,src:c.app.logoUrl,alt:c.app.name}),(0,i.jsx)("span",{children:c.app.name})]})})]});case"blogs":return(0,i.jsxs)(i.Fragment,{children:["Title: ",(0,i.jsx)("span",{children:e.itemView.title})]});case"apps":return(0,i.jsxs)(i.Fragment,{children:["App name: ",(0,i.jsx)("span",{children:e.itemView.title})]});case"company":let t=e.itemView;return(0,i.jsxs)("div",{className:"text-left",children:[(0,i.jsxs)("p",{children:["Start: ",(0,i.jsx)(b,{date:t.start})]}),(0,i.jsxs)("p",{children:["End:"," ",(0,i.jsx)("span",{children:t.end>0?(0,i.jsx)(b,{date:t.end}):"Present"})]})]})}}()}),(0,i.jsxs)("div",{className:"flex items-center gap-1",children:["Post date: ",(0,i.jsx)(b,{date:e.itemView.date})]}),"apps"!==e.type&&(0,i.jsxs)("div",{className:"flex items-center gap-1",children:["Read time:"," ",(0,i.jsxs)("span",{children:[e.itemView.readTime," min"]})]})]}),(0,i.jsx)(v,{text:r})]})]}),"apps"===e.type&&(0,i.jsxs)("div",{className:"container mx-auto mb-4 max-w-3xl space-y-4 px-2",children:[(0,i.jsxs)("div",{className:"flex w-full flex-col items-center justify-center",children:[(0,i.jsx)(g,{src:e.itemView.imgUrl,alt:e.itemView.title,width:100,height:100}),(0,i.jsx)("p",{className:"text-center text-4xl font-semibold tracking-wider",children:e.itemView.title})]}),(0,i.jsx)("div",{className:"flex flex-wrap justify-center gap-3",children:e.itemView.platforms.map(t=>(0,i.jsx)(w,{href:t.link,target:"_blank",className:"p-card flex h-fit w-fit cursor-pointer flex-col py-2",children:(0,i.jsxs)("div",{className:"h-24 space-y-2 py-2",children:[(0,i.jsx)("p",{className:"text-center",children:t.name}),(0,i.jsx)("div",{className:"flex h-fit w-40 justify-center overflow-hidden",children:function(e,t){switch(e.toLowerCase()){case"windows":case"microsoft":case"microsoft edge":return(0,i.jsx)(g,{src:"/images/listing/microsoftstore.svg",alt:e,height:10,width:135});case"android":return(0,i.jsx)(g,{src:"/images/listing/playstore.svg",alt:e,height:10,width:200});case"github release":return(0,i.jsx)(g,{className:"",src:"/images/listing/github-mark".concat(k?"":"-white",".svg"),alt:e,height:10,width:50});default:return(0,i.jsx)(g,{src:null!=t?t:"/images/logos/github-profile-dark".concat(k?"-light":"",".png"),alt:e,height:10,width:50})}}(t.name,e.itemView.imgUrl)})]})},t.link))}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"carousel-center carousel rounded-box my-0 space-x-4 bg-base-300/40 p-4",children:e.itemView.imgs.map((e,t)=>(0,i.jsx)("div",{id:"image".concat(t+1),className:"carousel-item relative h-72 w-[98%] xs:h-72 sm:h-80 md:h-[30rem]",children:(0,i.jsx)(j,{alt:t.toString(),layout:"fill",objectFit:"scale-down",src:e,className:"rounded-box"})},e))}),e.itemView.imgs.length>1&&(0,i.jsx)("div",{className:"my-2 flex w-full justify-center gap-2",children:e.itemView.imgs.map((e,t)=>(0,i.jsx)(w,{autoFocus:!1,scroll:!1,href:"#image".concat(t+1),className:"btn-xs btn my-0 py-0",children:t+1},t))})]})]}),"company"===e.type&&(0,i.jsx)("div",{className:"container mx-auto mb-4 max-w-3xl space-y-4 px-2",children:(0,i.jsxs)("div",{className:"flex w-full flex-col items-center justify-center",children:[(0,i.jsx)(g,{src:e.itemView.imgUrl,alt:e.itemView.title,width:100,height:100}),(0,i.jsx)("p",{className:"text-center text-4xl font-semibold tracking-wider",children:e.itemView.title}),(0,i.jsx)(w,{href:e.itemView.homePage,target:"_blank",className:"p-card mt-3 cursor-pointer",children:"Goto website"})]})}),(0,i.jsx)(y,{data:e.data},e.itemView.date),(0,i.jsx)("div",{className:"container divider mx-auto max-w-3xl px-2"}),(e.previous||e.next)&&(0,i.jsx)("div",{className:"container mx-auto max-w-3xl px-2",children:(0,i.jsxs)("div",{className:"flex w-full items-center justify-center gap-4",children:[e.previous&&(0,i.jsxs)("div",{className:"h-fit w-full",children:[(0,i.jsx)("div",{className:" mb-2 flex items-center text-2xl normal-case text-slate-400",children:(0,i.jsxs)(w,{href:"/".concat(e.type,"/view/").concat(e.previous.fileName),className:"link-hover link flex items-center ",children:[(0,i.jsx)(s,{className:"h-6 w-6"}),"Previous"," "]})}),"apps"!==e.type&&"company"!==e.type&&(0,i.jsx)(N,{data:e.previous})]}),e.next&&(0,i.jsxs)("div",{className:"h-fit w-full",children:[(0,i.jsx)("div",{className:"mb-2 flex items-center justify-end text-2xl normal-case text-slate-400",children:(0,i.jsxs)(w,{href:"/".concat(e.type,"/view/").concat(e.next.fileName),className:"link-hover link flex items-center",children:["Next ",(0,i.jsx)(n,{className:"h-6 w-6"})]})}),"apps"!==e.type&&"company"!==e.type&&(0,i.jsx)(N,{data:e.next})]})]})}),("apps"===e.type||"company"===e.type)&&e.more4&&(0,i.jsx)("div",{className:"mx-auto grid max-w-3xl gap-2 px-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",children:e.more4.map(t=>"apps"===e.type?(0,l.createElement)(d.default,{...t,key:t.date}):(0,l.createElement)(u.default,{...t,key:t.date}))},"".concat(e.itemView.fileName)),(0,i.jsx)("div",{className:"container divider mx-auto max-w-3xl px-2"}),(0,i.jsx)("div",{className:"container mx-auto max-w-3xl px-2",children:(0,i.jsx)(h,{id:"comments",repo:"".concat(M.userName,"/").concat(M.repo),repoId:"MDEwOlJlcG9zaXRvcnkyMTk3OTcwOTY=",category:"Announcements",categoryId:"DIC_kwDODRnWaM4CV1eQ",mapping:"pathname",term:"Welcome to @giscus/react component!",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:k?"light":"dark_dimmed",lang:"en",loading:"lazy"},U)})]})}},7814:function(e,t,a){"use strict";var i=a(7294);let l=i.forwardRef(function({title:e,titleId:t,...a},l){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":t},a),e?i.createElement("title",{id:t},e):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"}))});t.Z=l}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[617],{992:function(e,l,s){let r=s(7294),a=r.forwardRef(function({title:e,titleId:l,...s},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":l},s),e?r.createElement("title",{id:l},e):null,r.createElement("path",{fillRule:"evenodd",d:"M8.478 1.6a.75.75 0 01.273 1.025 3.72 3.72 0 00-.425 1.122c.058.057.118.114.18.168A4.491 4.491 0 0112 2.25c1.413 0 2.673.651 3.497 1.668.06-.054.12-.11.178-.167a3.717 3.717 0 00-.426-1.126.75.75 0 111.298-.75 5.22 5.22 0 01.671 2.045.75.75 0 01-.187.582c-.241.27-.505.52-.787.749a4.495 4.495 0 01.216 2.1c-.106.792-.753 1.295-1.417 1.403-.182.03-.364.057-.547.081.152.227.273.476.359.741a23.122 23.122 0 003.832-.802 23.241 23.241 0 00-.345-2.634.75.75 0 011.474-.28c.21 1.115.348 2.256.404 3.418a.75.75 0 01-.516.749c-1.527.5-3.119.855-4.76 1.05-.074.38-.22.735-.423 1.05a24.61 24.61 0 015.943 1.358.75.75 0 01.492.75 24.665 24.665 0 01-1.189 6.25.75.75 0 01-1.425-.47 23.141 23.141 0 001.077-5.307c-.5-.168-1.009-.32-1.524-.454.068.234.104.484.104.746 0 3.956-2.521 7.5-6 7.5-3.478 0-6-3.544-6-7.5 0-.262.037-.511.104-.746-.514.134-1.022.286-1.522.454a23.14 23.14 0 001.077 5.308.75.75 0 01-1.425.468 24.663 24.663 0 01-1.19-6.25.75.75 0 01.493-.749 24.593 24.593 0 014.964-1.24h.01c.321-.046.644-.085.969-.118a2.982 2.982 0 01-.424-1.05 24.614 24.614 0 01-4.76-1.05.75.75 0 01-.516-.75c.057-1.161.194-2.302.405-3.417a.75.75 0 011.474.28c-.164.862-.28 1.74-.345 2.634 1.237.37 2.517.641 3.832.802.085-.265.207-.514.359-.74a18.732 18.732 0 01-.547-.082c-.664-.108-1.311-.611-1.417-1.403a4.535 4.535 0 01.217-2.103 6.788 6.788 0 01-.788-.751.75.75 0 01-.187-.583 5.22 5.22 0 01.67-2.04.75.75 0 011.026-.273z",clipRule:"evenodd"}))});e.exports=a},8617:function(e,l,s){"use strict";s.r(l),s.d(l,{default:function(){return h}});var r=s(5893),a=s(7294);async function t(e){return await new Promise(l=>setTimeout(l,e))}var i=s(992),n=s(5675),c=s.n(n),o=s(1664),d=s.n(o);function m(e){return(0,r.jsx)(d(),{className:"p-card h-fit w-full cursor-pointer p-2",href:e.url,target:"_blank",rel:"noopener noreferrer",children:(0,r.jsxs)("div",{className:"flex h-fit w-full items-center justify-start text-start",children:[(0,r.jsx)("div",{className:"relative h-16 w-16 overflow-hidden rounded-full border",children:(0,r.jsx)(c(),{src:e.imgUrl,alt:"".concat(e.name," profile picture"),objectFit:"cover",layout:"fill"})}),(0,r.jsxs)("div",{className:"ml-3 ",children:[(0,r.jsx)("div",{className:"text-lg font-semibold",children:e.name}),(0,r.jsx)("div",{className:"text-sm",children:e.role})]})]})})}let x=e=>{let[l,s]=(0,a.useState)(!1),[n,o]=(0,a.useState)(!1),x=0;async function h(){x>=5&&!l&&(s(!0),await t(5e3),x=0,s(!1)),x++}return(0,r.jsxs)("div",{className:"mx-2 mt-2 flex flex-col items-center tracking-wider sm:mx-5 lg:mx-10 xl:mx-10",children:[(0,r.jsx)("div",{className:"btn-ghost btn relative h-32 w-32 overflow-hidden rounded-full ring-4 ring-slate-400/40",children:(0,r.jsx)(c(),{onClick:h,objectFit:"cover",layout:"fill",src:e.app.logo.logoUrl,alt:e.app.logo.alt})}),(0,r.jsx)("div",{className:"text-3xl font-semibold",children:e.app.title}),(0,r.jsxs)("p",{onClick:()=>o(!n),className:"".concat(n?"font-bold tracking-[0.5em]":""," mb-4 mt-1 flex cursor-pointer space-x-2 text-center text-xs tracking-wider transition-all duration-700 hover:tracking-widest hover:text-black"),children:[(0,r.jsx)("span",{className:"font-semibold",children:e.app.codeName}),(0,r.jsxs)("span",{children:["v",e.app.version]})]}),(0,r.jsx)("div",{className:"collapse -mt-1 ".concat(n?"collapse-open":""," w-full max-w-xl "),children:(0,r.jsx)("div",{className:"collapse-content w-full max-w-xl",children:(0,r.jsx)("div",{className:"max-h-96 overflow-y-auto",children:(0,r.jsx)("div",{className:"mx-2 mb-3 mt-2 flex flex-col justify-center rounded-xl ring-2 ring-blue-500/10",children:Object.keys(e.changeLogs).slice(0,20).map(l=>(0,r.jsxs)("div",{className:"mx-3 my-2 h-fit rounded-xl bg-slate-400/10 p-3 ring-1 ring-blue-300/40 hover:bg-blue-200/10",children:[(0,r.jsxs)("div",{className:"text-sm font-semibold tracking-wider",children:["v",l]}),(0,r.jsx)("div",{className:"text-xs opacity-70",children:new Date(e.changeLogs[l].date).toUTCString()}),(0,r.jsx)("div",{className:"divider my-1 py-1"}),(0,r.jsx)("ul",{className:"ml-4 list-disc text-sm opacity-80",children:e.changeLogs[l].changes.map(e=>(0,r.jsx)("li",{className:"hover:list-decimal",children:e},e))})]},l))})})})}),(0,r.jsx)(d(),{href:e.poweredBy.url,target:"_blank",rel:"noopener noreferrer",children:(0,r.jsxs)("div",{className:"text-sm transition-all duration-700 hover:tracking-widest hover:text-black",children:["Powered by ",e.poweredBy.companyName]})}),(0,r.jsx)(d(),{href:e.devCompany.url,target:"_blank",rel:"noopener noreferrer",children:(0,r.jsxs)("div",{className:"mt-3 text-xs transition-all duration-700 hover:tracking-widest hover:text-black ",children:["Developed by ",e.devCompany.name,", ",e.devCompany.year]})}),(0,r.jsx)("div",{className:"my-5 w-full px-5",children:(0,r.jsx)("hr",{className:"border-1 flex border-black/10"})}),(0,r.jsx)("div",{className:"".concat(l?"collapse-open":"collapse-close"," collapse w-full"),children:(0,r.jsxs)("div",{className:"collapse-content w-full",children:[(0,r.jsx)("div",{className:"flex w-full justify-start px-5 text-2xl",children:"Developer info"}),e.devs.map(e=>(0,r.jsx)(m,{name:e.name,role:e.role,url:e.url,imgUrl:e.imgUrl},e.imgUrl))]})}),(0,r.jsx)("div",{className:"mb-2 mt-5 flex w-full justify-start px-5 text-2xl",children:"Issue or Bug report"}),(0,r.jsx)(d(),{className:"w-full ",href:e.reportUrl,target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("div",{className:"p-card h-fit w-full cursor-pointer",children:(0,r.jsxs)("div",{className:"flex w-full items-center py-2 text-left",children:[(0,r.jsx)("div",{className:"h-16 w-16 ",children:(0,r.jsx)(i,{})}),(0,r.jsxs)("div",{className:"ml-3",children:[(0,r.jsx)("div",{className:"text-lg font-semibold",children:"Report on Github issue tab"}),(0,r.jsx)("div",{className:"text-sm",children:"Before reporting any issue or bug report please add proper description and screenshots to help fix the problem."})]})]})})})]})};var h=x}}]);
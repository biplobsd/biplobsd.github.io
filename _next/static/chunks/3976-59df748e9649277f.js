(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3976,2404],{1455:function(e,t,a){let i=a(7294),s=i.forwardRef(function({title:e,titleId:t,...a},s){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},a),e?i.createElement("title",{id:t},e):null,i.createElement("path",{fillRule:"evenodd",d:"M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z",clipRule:"evenodd"}))});e.exports=s},7410:function(e,t,a){let i=a(7294),s=i.forwardRef(function({title:e,titleId:t,...a},s){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},a),e?i.createElement("title",{id:t},e):null,i.createElement("path",{fillRule:"evenodd",d:"M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z",clipRule:"evenodd"}))});e.exports=s},1124:function(e,t,a){"use strict";a.d(t,{w0:function(){return i}});let i="https://biplobsd.github.io/"},2404:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var i=a(5893),s=a(7814),l=a(5152),n=a.n(l);let r=n()(()=>a.e(1664).then(a.t.bind(a,1664,23)),{loadableGenerated:{webpack:()=>[1664]}}),c=n()(()=>a.e(5675).then(a.t.bind(a,5675,23)),{loadableGenerated:{webpack:()=>[5675]}});function d(e){return(0,i.jsxs)(r,{className:"p-card h-48 cursor-pointer flex-row items-center justify-start px-0 py-3 hover:-translate-y-1 hover:shadow-lg",href:"/apps/view/".concat(e.fileName),children:[(0,i.jsx)("div",{className:"relative mx-auto h-24 w-24 overflow-hidden rounded-3xl px-0 text-justify",children:e.imgUrl?(0,i.jsx)(c,{blurDataURL:e.imgBlurData,placeholder:e.imgBlurData?"blur":"empty",loading:"lazy",objectFit:"cover",layout:"fill",src:e.imgUrl,alt:e.title}):(0,i.jsxs)("div",{className:"flex h-full flex-col justify-center text-center",children:[(0,i.jsx)(s.Z,{className:"mx-auto h-10 w-10"}),(0,i.jsx)("p",{children:"No logo"})]})}),(0,i.jsxs)("div",{className:"mx-0 mt-1 h-fit w-full px-2 text-center tracking-wider",children:[(0,i.jsx)("p",{className:"mb-1 font-semibold leading-4",children:e.title}),(0,i.jsx)("p",{className:"text-xs text-base-content",children:e.category})]})]})}},4417:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var i=a(5893);function s(){return(0,i.jsx)("div",{className:"p-card loading mx-auto flex w-fit justify-center",children:"Loading..."})}},8425:function(e,t,a){"use strict";var i=a(5893),s=a(2962),l=a(1163);a(1124),t.Z=function(e){let{imgUrl:t,title:a,description:n,configs:r}=e,c=(0,l.useRouter)();return(0,i.jsx)(s.PB,{title:a,description:n,canonical:"https://biplobsd.me",openGraph:{url:"".concat("".concat("https://biplobsd.me",";")).concat(c.asPath),title:a,description:n,images:t?[{url:t,alt:"".concat(n," | ").concat(a)}]:void 0,site_name:a},twitter:{handle:r.twitterHandle,site:r.twitterHandle,cardType:"summary_large_image"}})}},3976:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return g},default:function(){return j}});var i=a(5893),s=a(7294),l=a(1455),n=a(7410),r=a(5152),c=a.n(r),d=a(4417),o=a(8425),m=a(2404),x=a(9723);let h=c()(()=>a.e(1664).then(a.t.bind(a,1664,23)),{loadableGenerated:{webpack:()=>[1664]}}),p=c()(()=>a.e(5675).then(a.t.bind(a,5675,23)),{loadableGenerated:{webpack:()=>[5675]}}),u=c()(()=>a.e(5432).then(a.bind(a,5432)),{loadableGenerated:{webpack:()=>[5432]}}),f=c()(()=>Promise.all([a.e(1903),a.e(4534)]).then(a.bind(a,8048)),{loadableGenerated:{webpack:()=>[8048]},loading:()=>(0,i.jsx)(d.Z,{})}),w=c()(()=>a.e(8190).then(a.bind(a,8190)),{loadableGenerated:{webpack:()=>[8190]}});var g=!0;function j(e){let t,a,r,c;let d=(0,x.f)(),[g,j]=(0,s.useState)(x.u);switch((0,s.useEffect)(()=>{j("winter"===d.themeName)},[d]),e.type){case"projects":let v=e.itemView;t="".concat(v.whatText," | ").concat(e.configs.appName),a="".concat(v.result," | ").concat(v.app.name," | ").concat(v.company.name),r="".concat(v.whatText," ").concat(v.result),c=v;break;case"blogs":let b=e.itemView;t="".concat(e.itemView.fileName," | ").concat(e.configs.appName),a=b.desc,r=b.desc;default:a=t="".concat(e.itemView.title," | ").concat(e.configs.appName),r=t}return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{configs:e.configs,description:a,title:t,imgUrl:e.itemView.imgUrl}),(0,i.jsxs)("div",{className:"container mx-auto max-w-3xl px-2",children:[(0,i.jsxs)("div",{className:"",children:[(0,i.jsx)(h,{className:"title link-hover link-primary link capitalize",href:"/"+e.type,children:e.type})," ","/ ",e.itemView.fileName]}),(0,i.jsxs)("div",{className:"my-2 flex flex-col items-center justify-between gap-2 sm:flex-row sm:items-end",children:[(0,i.jsxs)("div",{className:"p-card flex h-fit w-full flex-col items-start py-2 text-xs text-slate-500 sm:w-fit",children:[(0,i.jsx)("div",{className:"flex items-center gap-1",children:function(){switch(e.type){case"projects":if(!c)return(0,i.jsx)(i.Fragment,{});return(0,i.jsxs)(i.Fragment,{children:["App Name:"," ",(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"flex items-center gap-1",children:[(0,i.jsx)(p,{width:20,height:20,src:c.app.logoUrl,alt:c.app.name}),(0,i.jsx)("span",{children:c.app.name})]})})]});case"blogs":return(0,i.jsxs)(i.Fragment,{children:["Title: ",(0,i.jsx)("span",{children:e.itemView.title})]});case"apps":return(0,i.jsxs)(i.Fragment,{children:["App name: ",(0,i.jsx)("span",{children:e.itemView.title})]})}}()}),"projects"===e.type&&c&&(0,i.jsxs)("div",{className:"flex items-center gap-1",children:["Company Name:"," ",(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"flex items-center gap-1",children:[(0,i.jsx)(p,{width:20,height:20,src:c.company.logoUrl,alt:c.company.name}),(0,i.jsx)("span",{children:c.company.name})]})})]}),(0,i.jsxs)("div",{className:"flex items-center gap-1",children:["Date:"," ",(0,i.jsx)("span",{children:new Date(e.itemView.date).toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"})})]}),"apps"!==e.type&&(0,i.jsxs)("div",{className:"flex items-center gap-1",children:["Read time:"," ",(0,i.jsxs)("span",{children:[e.itemView.readTime," min"]})]})]}),(0,i.jsx)(u,{text:r})]})]}),"apps"===e.type&&(0,i.jsxs)("div",{className:"container mx-auto mb-4 max-w-3xl space-y-4 px-2",children:[(0,i.jsxs)("div",{className:"flex w-full flex-col items-center justify-center",children:[(0,i.jsx)(p,{src:e.itemView.imgUrl,alt:e.itemView.title,width:100,height:100}),(0,i.jsx)("p",{className:"text-center text-4xl font-semibold tracking-wider",children:e.itemView.title})]}),(0,i.jsx)("div",{className:"flex flex-wrap justify-center gap-3",children:e.itemView.platforms.map(t=>(0,i.jsx)(h,{href:t.link,target:"_blank",className:"p-card flex h-fit w-fit cursor-pointer flex-col py-2",children:(0,i.jsxs)("div",{className:"h-24 space-y-2 py-2",children:[(0,i.jsx)("p",{className:"text-center",children:t.name}),(0,i.jsx)("div",{className:"flex h-fit w-40 justify-center overflow-hidden",children:function(e,t){switch(e.toLowerCase()){case"windows":case"microsoft":case"microsoft edge":return(0,i.jsx)(p,{src:"/images/listing/microsoftstore.svg",alt:e,height:10,width:135});case"android":return(0,i.jsx)(p,{src:"/images/listing/playstore.svg",alt:e,height:10,width:200});case"github release":return(0,i.jsx)(p,{className:"",src:"/images/listing/github-mark".concat(g?"":"-white",".svg"),alt:e,height:10,width:50});default:return(0,i.jsx)(p,{src:null!=t?t:"/images/logos/github-profile-dark".concat(g?"-light":"",".png"),alt:e,height:10,width:50})}}(t.name,e.itemView.imgUrl)})]})},t.link))}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"carousel-center carousel rounded-box my-0 space-x-4 bg-base-300/40 p-4",children:e.itemView.imgs.map((e,t)=>(0,i.jsx)("div",{id:"image".concat(t+1),className:"carousel-item relative h-72 w-[98%] xs:h-72 sm:h-80 md:h-[30rem]",children:(0,i.jsx)(p,{alt:t.toString(),layout:"fill",objectFit:"scale-down",src:e,className:"rounded-box"})},e))}),e.itemView.imgs.length>1&&(0,i.jsx)("div",{className:"my-2 flex w-full justify-center gap-2",children:e.itemView.imgs.map((e,t)=>(0,i.jsx)(h,{autoFocus:!1,scroll:!1,href:"#image".concat(t+1),className:"btn-xs btn my-0 py-0",children:t+1},t))})]})]}),(0,i.jsx)(f,{data:e.data},e.itemView.date),(0,i.jsx)("div",{className:"container divider mx-auto max-w-3xl px-2"}),(e.previous||e.next)&&(0,i.jsx)("div",{className:"container mx-auto max-w-3xl px-2",children:(0,i.jsxs)("div",{className:"flex w-full items-center justify-center gap-4",children:[e.previous&&(0,i.jsxs)("div",{className:"h-fit w-full",children:[(0,i.jsx)("div",{className:" mb-2 flex items-center text-2xl normal-case text-slate-400",children:(0,i.jsxs)(h,{href:"/".concat(e.type,"/view/").concat(e.previous.fileName),className:"link-hover link flex items-center ",children:[(0,i.jsx)(l,{className:"h-6 w-6"}),"Previous"," "]})}),"apps"!==e.type&&(0,i.jsx)(w,{data:e.previous})]}),e.next&&(0,i.jsxs)("div",{className:"h-fit w-full",children:[(0,i.jsx)("div",{className:"mb-2 flex items-center justify-end text-2xl normal-case text-slate-400",children:(0,i.jsxs)(h,{href:"/".concat(e.type,"/view/").concat(e.next.fileName),className:"link-hover link flex items-center",children:["Next ",(0,i.jsx)(n,{className:"h-6 w-6"})]})}),"apps"!==e.type&&(0,i.jsx)(w,{data:e.next})]})]})}),"apps"===e.type&&e.more4&&(0,i.jsx)("div",{className:"mx-auto grid max-w-3xl gap-2 px-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",children:e.more4.map(e=>(0,s.createElement)(m.default,{...e,key:e.date}))},"".concat(e.itemView.fileName))]})}},7814:function(e,t,a){"use strict";var i=a(7294);let s=i.forwardRef(function({title:e,titleId:t,...a},s){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},a),e?i.createElement("title",{id:t},e):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"}))});t.Z=s}}]);
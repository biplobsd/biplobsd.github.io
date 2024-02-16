"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1639],{87803:function(e,t,a){a.d(t,{$k:function(){return getDataUrl},LF:function(){return toTitleCase},LU:function(){return showCountHuman},S:function(){return getPrefixRepo},WR:function(){return sliceText},_y:function(){return isPro},bE:function(){return getUserNRepo}});var s=a(98165),l=a(20562),r=a(26509);function isPro(e){return"whatText"in e}function toTitleCase(e){return e.replace(/\b\w+/g,e=>e.charAt(0).toUpperCase()+e.substr(1).toLowerCase())}function showCountHuman(e){return(0,s.Z)(e,{digits:2,uppercase:!1})}function sliceText(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:160;if(e.length>t){let a=e.slice(0,t),s=a.charAt(a.length-1);return" "!==s&&(a=a.substring(0,a.lastIndexOf(" ")),/[^\w\s]/.test(s)&&(a=a.substring(0,a.length-1))),a}return e}function getDataUrl(e){return(0,r.Z)("https://github.com",e,"/blob/".concat(l.O.NEXT_PUBLIC_REPO_DATA_BRANCH))}function getUserNRepo(e){var t,a;let s=e.split("/");return{userName:null!==(t=s[1])&&void 0!==t?t:"",repo:null!==(a=s[2])&&void 0!==a?a:""}}function getPrefixRepo(){return l.O.NEXT_PUBLIC_LOCALHOST_TEST?"":l.O.NEXT_PUBLIC_PREFIX_REPO}},72948:function(e,t,a){a.r(t),a.d(t,{default:function(){return LayoutCardApp}});var s=a(85893),l=a(7814),r=a(5152),i=a.n(r),n=a(7323);let c=i()(()=>a.e(1664).then(a.t.bind(a,41664,23)),{loadableGenerated:{webpack:()=>[41664]}}),o=i()(()=>Promise.all([a.e(9755),a.e(920)]).then(a.t.bind(a,89755,23)),{loadableGenerated:{webpack:()=>[89755]}});function LayoutCardApp(e){return(0,s.jsxs)(c,{className:"p-card h-48 cursor-pointer flex-row items-center justify-start py-3 transform-gpu hover:-translate-y-1 hover:shadow-lg",href:"/apps/view/".concat(e.fileName),children:[(0,s.jsx)("div",{className:"relative mx-auto h-24 w-24 overflow-hidden rounded-3xl px-0 text-justify",children:e.imgUrl?(0,s.jsx)(o,{blurDataURL:e.imgBlurData,placeholder:e.imgBlurData?"blur":"empty",loading:"lazy",objectFit:"cover",layout:"fill",src:e.imgUrl,alt:e.title}):(0,s.jsxs)("div",{className:"flex h-full flex-col justify-center text-center",children:[(0,s.jsx)(l.Z,{className:"mx-auto h-10 w-10"}),(0,s.jsx)("p",{children:"No logo"})]})}),(0,s.jsxs)("div",{className:"mx-0 mt-1 h-fit w-full px-2 text-center tracking-wider",children:[(0,s.jsx)("p",{className:"mb-1 font-semibold leading-4",children:(0,s.jsx)(n.y,{hit:e,attribute:"title"})}),(0,s.jsx)("p",{className:"text-xs text-base-content",children:(0,s.jsx)(n.y,{hit:e,attribute:"category"})})]})]})}},48900:function(e,t,a){a.r(t),a.d(t,{default:function(){return LayoutCardCompany}});var s=a(85893),l=a(5152),r=a.n(l),i=a(67294),n=a(98774),c=a(7323);let o=r()(()=>a.e(1664).then(a.t.bind(a,41664,23)),{loadableGenerated:{webpack:()=>[41664]}}),d=r()(()=>Promise.all([a.e(9755),a.e(920)]).then(a.t.bind(a,89755,23)),{loadableGenerated:{webpack:()=>[89755]}}),m=r()(()=>a.e(7851).then(a.bind(a,37851)),{loadableGenerated:{webpack:()=>[37851]},ssr:!1});function LayoutCardCompany(e){let t=(0,n.f)(),[a,l]=(0,i.useState)(n.u),[r,u]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{l("winter"===t.themeName)},[t]),(0,s.jsx)("span",{className:"tooltip w-full","data-tip":"More details",children:(0,s.jsxs)(o,{href:"/company/view/".concat(e.fileName),onPointerEnter:()=>u(!0),onPointerLeave:()=>u(!1),className:"p-card flex h-full w-full cursor-pointer flex-col py-4",children:[(0,s.jsx)("div",{className:"relative mx-auto mb-2 h-10 w-10 overflow-hidden",children:(0,s.jsx)(d,{blurDataURL:e.imgBlurData?e.imgBlurData:void 0,placeholder:e.imgBlurData?"blur":void 0,className:a||r?"opacity-80":"invert-colors",alt:e.title,src:e.imgUrl,objectFit:"fill",layout:"fill"})}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("span",{className:"text-sm font-semibold tracking-widest",children:(0,s.jsx)(c.y,{hit:e,attribute:"title"})}),(0,s.jsx)(m,{start:e.start,end:e.end})]})]})})}},91244:function(e,t,a){a.d(t,{Z:function(){return Loading}});var s=a(85893);function Loading(){return(0,s.jsxs)("div",{className:"flex justify-center gap-2",children:[(0,s.jsx)("span",{className:"loading loading-infinity"}),(0,s.jsx)("span",{className:"animate-pulse",children:"Loading..."})]})}},7323:function(e,t,a){a.d(t,{y:function(){return Highlight}});var s=a(47334),l=a(67294);function Highlight(e){let{hit:t,attribute:a,tagName:r="mark"}=e;return(0,l.createElement)(l.Fragment,{},(0,s.T)({hit:t,attribute:a}).map((e,t)=>{let{value:a,isHighlighted:s}=e;return s?(0,l.createElement)(r,{key:t},a):a}))}},4624:function(e,t,a){a.d(t,{Z:function(){return Spotlight}});var s=a(85893),l=a(25675),r=a.n(l),i=a(67294);function Spotlight(){let[e,t]=(0,i.useState)({translateX:0,rotateY:0});return(0,i.useEffect)(()=>{let animate=e=>{t({translateX:40*Math.sin(.001*e),rotateY:40*Math.cos(.001*e)}),requestAnimationFrame(animate)},e=requestAnimationFrame(animate);return()=>{cancelAnimationFrame(e)}},[]),(0,s.jsxs)("div",{className:"absolute -z-10 flex w-full overflow-hidden items-center justify-center",children:[(0,s.jsx)(r(),{width:631,height:550,className:"-z-10",src:"/images/spotlight-left.png",alt:"Green spotlight",style:{transform:"translateX(".concat(e.translateX,"px) rotateY(").concat(e.rotateY,"deg)")}}),(0,s.jsx)(r(),{width:631,height:535,className:"absolute top-0 -z-10",src:"/images/spotlight-right.png",alt:"purple-spotlight",style:{transform:"translateX(".concat(-e.translateX,"px) rotateY(").concat(-e.rotateY,"deg)")}})]})}},13204:function(e,t,a){a.d(t,{cn:function(){return cn}});var s=a(86010),l=a(57851);function cn(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,l.m)((0,s.W)(t))}},11639:function(e,t,a){a.r(t),a.d(t,{__N_SSG:function(){return Y},default:function(){return ProjectBlogView}});var s=a(85893),l=a(67294),r=a(45485),i=a(44414),n=a(5152),c=a.n(n),o=a(91244),d=a(72948),m=a(98774),u=a(311),x=a(87803),h=a(48900),p=a(20562),f=a(26509),g=a(41664),b=a.n(g);function RenderNodes(e){let{nodes:t}=e;return(0,s.jsx)("ul",{children:t.map(e=>{var t;return(0,s.jsxs)("li",{children:[(0,s.jsx)(TOCLink,{...e}),(null===(t=e.children)||void 0===t?void 0:t.length)>0&&(0,s.jsx)(RenderNodes,{nodes:e.children})]},e.data.hProperties.id)})})}let TOCLink=e=>{var t;let a=new Map([[2,"text-base"],[3,"text-sm"],[4,"text-xs"]]),r=e.data.hProperties.id,{value:i}=function(e){let t=(0,l.useRef)(),[a,s]=(0,l.useState)("");return(0,l.useEffect)(()=>{t.current=new IntersectionObserver(e=>{e.forEach(e=>{(null==e?void 0:e.isIntersecting)&&s(e.target.id)})},{rootMargin:"0% 0% -85% 0px"});let e=document.querySelectorAll("h2, h3, h4");return e.forEach(e=>{var a;return null===(a=t.current)||void 0===a?void 0:a.observe(e)}),()=>{var e;return null===(e=t.current)||void 0===e?void 0:e.disconnect()}},[]),{value:a===e,setActiveId:s}}(r);return(0,s.jsx)(b(),{href:"#".concat(r),className:"block whitespace-normal ".concat(null!==(t=a.get(e.depth))&&void 0!==t?t:"text-base"," py-1  ").concat(i?"focus":""),scroll:!1,children:e.value})};function TableOfContents(e){let{nodes:t}=e;return t.length?(0,s.jsxs)("div",{className:"max-w-xs rounded-2xl bg-base-100/40 p-2 ring-1 ring-base-content/5",children:[(0,s.jsx)("h3",{className:"text-md ml-2 mt-1 font-semibold",children:"Table of contents"}),(0,s.jsx)("div",{className:"menu menu-xs",children:(0,s.jsx)(RenderNodes,{nodes:t})})]}):null}var j=a(86010),v=a(45011),lr_wrap=function(e){let{children:t}=e,a=(0,v.C)();return(0,s.jsx)("div",{className:(0,j.Z)("sticky hidden flex-1 xl:inline","transition-all duration-500 ease-in-out","up"===a?"top-20":"top-5"),children:t})},w=a(4624),N=a(89382),y=a(53219),k=a(82701),C=a(13204),P=a(88426),S=a(45139);let E=(0,S.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",{variants:{variant:{default:"bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",destructive:"bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",outline:"border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",secondary:"bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",ghost:"hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",link:"text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),_=l.forwardRef((e,t)=>{let{className:a,variant:l,size:r,asChild:i=!1,...n}=e,c=i?P.g7:"button";return(0,s.jsx)(c,{className:(0,C.cn)(E({variant:l,size:r,className:a})),ref:t,...n})});_.displayName="Button";let L=l.createContext(null);function useCarousel(){let e=l.useContext(L);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let V=l.forwardRef((e,t)=>{let{orientation:a="horizontal",opts:r,setApi:i,plugins:n,className:c,children:o,...d}=e,[m,u]=(0,N.Z)({...r,axis:"horizontal"===a?"x":"y"},n),[x,h]=l.useState(!1),[p,f]=l.useState(!1),g=l.useCallback(e=>{e&&(h(e.canScrollPrev()),f(e.canScrollNext()))},[]),b=l.useCallback(()=>{null==u||u.scrollPrev()},[u]),j=l.useCallback(()=>{null==u||u.scrollNext()},[u]),v=l.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),b()):"ArrowRight"===e.key&&(e.preventDefault(),j())},[b,j]);return l.useEffect(()=>{u&&i&&i(u)},[u,i]),l.useEffect(()=>{if(u)return g(u),u.on("reInit",g),u.on("select",g),()=>{null==u||u.off("select",g)}},[u,g]),(0,s.jsx)(L.Provider,{value:{carouselRef:m,api:u,opts:r,orientation:a||((null==r?void 0:r.axis)==="y"?"vertical":"horizontal"),scrollPrev:b,scrollNext:j,canScrollPrev:x,canScrollNext:p},children:(0,s.jsx)("div",{ref:t,onKeyDownCapture:v,className:(0,C.cn)("relative",c),role:"region","aria-roledescription":"carousel",...d,children:o})})});V.displayName="Carousel";let R=l.forwardRef((e,t)=>{let{className:a,...l}=e,{carouselRef:r,orientation:i}=useCarousel();return(0,s.jsx)("div",{ref:r,className:"overflow-hidden",children:(0,s.jsx)("div",{ref:t,className:(0,C.cn)("flex","horizontal"===i?"-ml-4":"-mt-4 flex-col",a),...l})})});R.displayName="CarouselContent";let U=l.forwardRef((e,t)=>{let{className:a,...l}=e,{orientation:r}=useCarousel();return(0,s.jsx)("div",{ref:t,role:"group","aria-roledescription":"slide",className:(0,C.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===r?"pl-4":"pt-4",a),...l})});U.displayName="CarouselItem";let T=l.forwardRef((e,t)=>{let{className:a,variant:l="outline",size:r="icon",...i}=e,{orientation:n,scrollPrev:c,canScrollPrev:o}=useCarousel();return(0,s.jsxs)(_,{ref:t,variant:l,size:r,className:(0,C.cn)("absolute  h-8 w-8 rounded-full","horizontal"===n?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",a),disabled:!o,onClick:c,...i,children:[(0,s.jsx)(y.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Previous slide"})]})});T.displayName="CarouselPrevious";let D=l.forwardRef((e,t)=>{let{className:a,variant:l="outline",size:r="icon",...i}=e,{orientation:n,scrollNext:c,canScrollNext:o}=useCarousel();return(0,s.jsxs)(_,{ref:t,variant:l,size:r,className:(0,C.cn)("absolute h-8 w-8 rounded-full","horizontal"===n?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",a),disabled:!o,onClick:c,...i,children:[(0,s.jsx)(k.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Next slide"})]})});D.displayName="CarouselNext";var A=a(77451),B=a(25675),O=a.n(B);function CarouselSlider(e){let{images:t,imgsBlurData:a}=e,[r,i]=(0,l.useState)(),[n,c]=(0,l.useState)(0),[o,d]=(0,l.useState)(0),m="bg-base-300/60 disabled:invisible hover:bg-base-300 hover:text-base-content active:scale-95 transition duration-150 ease-in-out";return(0,l.useEffect)(()=>{r&&(d(r.scrollSnapList().length),c(r.selectedScrollSnap()+1),r.on("select",()=>{c(r.selectedScrollSnap()+1)}))},[r]),(0,s.jsxs)("div",{children:[(0,s.jsxs)(V,{setApi:i,plugins:[(0,A.Z)({delay:2e3})],className:"relative rounded-box bg-base-300/40 p-4",children:[(0,s.jsx)(R,{children:t.map((e,t)=>{let l=a[e];return(0,s.jsx)(U,{className:"xs:h-72 relative m-1 h-72 w-[98%] sm:h-80 md:h-[30rem]",children:(0,s.jsx)(O(),{alt:t.toString(),layout:"fill",objectFit:"scale-down",src:e,className:"rounded-box",placeholder:l?"blur":"empty",blurDataURL:l?l.base64:""})},e)})}),(0,s.jsx)(T,{variant:"ghost",className:(0,j.Z)("translate-x-16",m)}),(0,s.jsx)(D,{variant:"ghost",className:(0,j.Z)("-translate-x-16",m)})]}),o>1&&(0,s.jsxs)("div",{className:"text-muted-foreground py-2 text-center text-sm",children:[n," of ",o]})]})}let Z=c()(()=>Promise.all([a.e(8016),a.e(9826)]).then(a.bind(a,33937)),{loadableGenerated:{webpack:()=>[33937]}}),F=c()(()=>Promise.resolve().then(a.t.bind(a,41664,23)),{loadableGenerated:{webpack:()=>[41664]}}),G=c()(()=>Promise.resolve().then(a.t.bind(a,25675,23)),{loadableGenerated:{webpack:()=>[25675]}}),z=c()(()=>a.e(2202).then(a.bind(a,82202)),{loadableGenerated:{webpack:()=>[82202]}}),X=c()(()=>a.e(2985).then(a.bind(a,72985)),{loadableGenerated:{webpack:()=>[72985]},ssr:!1}),I=c()(()=>Promise.all([a.e(9182),a.e(6652)]).then(a.bind(a,26652)),{loadableGenerated:{webpack:()=>[26652]},loading:()=>(0,s.jsx)(o.Z,{})}),H=c()(()=>a.e(8752).then(a.bind(a,95981)),{loadableGenerated:{webpack:()=>[95981]}}),M=c()(()=>Promise.all([a.e(9861),a.e(7504)]).then(a.bind(a,47280)),{loadableGenerated:{webpack:()=>[47280]}});var Y=!0;function ProjectBlogView(e){let t,a,n,c;let o=(0,m.f)(),[g,b]=(0,l.useState)(m.u);switch((0,l.useEffect)(()=>{b("winter"===o.themeName)},[o]),e.type){case"projects":let j=e.itemView;t="".concat(j.whatText),a="".concat(j.result," | ").concat((0,x.LF)(e.type)," | ").concat(j.company.name," | ").concat(j.app.name),n="".concat(j.whatText," ").concat(j.result),c=j;break;case"blogs":let v=e.itemView;t=v.title,a="".concat(v.desc," | ").concat((0,x.LF)(e.type)," | ").concat(p.O.NEXT_PUBLIC_PERSON_NAME),n=v.desc;break;case"apps":let N=e.itemView;t=N.title,a="".concat(N.category," | ").concat((0,x.LF)(e.type)," | ").concat(N.platforms.map(e=>e.name).join(" | ")," | ").concat(p.O.NEXT_PUBLIC_PERSON_NAME),n=N.title;break;case"company":let y=e.itemView;t=y.title,a="".concat(t," | ").concat((0,x.LF)(e.type)),n=t}let k=(0,f.Z)((0,x.$k)(p.O.NEXT_PUBLIC_REPO_PATH),e.type,e.itemView.fileName,"?plain=1");function metaData(){return(0,s.jsxs)("div",{className:"mx-auto flex w-full max-w-3xl flex-col items-center justify-between gap-2 px-2 sm:flex-row sm:items-end xl:flex-col xl:items-end xl:px-0",children:[(0,s.jsxs)("div",{className:"p-card flex h-fit w-full flex-col items-start overflow-visible py-2 text-xs text-slate-500 sm:w-fit",children:[("projects"===e.type||"company"===e.type)&&(0,s.jsxs)("div",{className:"flex items-center gap-1",children:[(0,s.jsx)("span",{children:"Company :"}),(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"flex items-center gap-1",children:[(0,s.jsx)(G,{width:20,height:20,src:c?c.company.logoUrl:e.itemView.imgUrl,alt:c?c.company.name:e.itemView.title}),(0,s.jsx)("span",{children:c?c.company.name:e.itemView.title})]})})]}),(0,s.jsx)("div",{className:"flex items-center gap-1",children:function(){switch(e.type){case"projects":if(!c)return(0,s.jsx)(s.Fragment,{});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{children:"App:"}),(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"flex items-center gap-1",children:[(0,s.jsx)(G,{width:20,height:20,src:c.app.logoUrl,alt:c.app.name}),(0,s.jsx)("span",{children:c.app.name})]})})]});case"apps":return(0,s.jsxs)(s.Fragment,{children:["App name: ",(0,s.jsx)("span",{children:e.itemView.title})]});case"company":let t=e.itemView;return(0,s.jsxs)("div",{className:"text-left",children:[(0,s.jsxs)("p",{children:["Start: ",(0,s.jsx)(X,{date:t.start})]}),(0,s.jsxs)("p",{children:["End:"," ",(0,s.jsx)("span",{children:t.end>0?(0,s.jsx)(X,{date:t.end}):"Present"})]})]})}}()}),(0,s.jsxs)("div",{className:"flex items-center gap-1",children:["Post date: ",(0,s.jsx)(X,{date:e.itemView.date})]}),"apps"!==e.type&&(0,s.jsxs)("div",{className:"flex items-center gap-1",children:["Read time: ",(0,s.jsxs)("span",{children:[e.itemView.readTime," min"]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-1",children:["Type:",(0,s.jsxs)("div",{className:"flex items-center gap-1",children:[(0,s.jsx)(F,{className:"title link-hover link link-primary capitalize",href:"/"+e.type,children:e.type})," ",(0,s.jsx)("div",{className:"tooltip tooltip-right","data-tip":"Edit this on Github",children:(0,s.jsx)(F,{href:k,target:"_blank",rel:"",children:(0,s.jsx)(u.Z,{className:"link-hover link h-4 w-4"})})})]})]})]}),(0,s.jsx)(z,{text:n})]})}return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Z,{description:a,title:t,imgUrl:e.itemView.imgUrl,ogType:"article",itemView:e.itemView}),("apps"===e.type||"company"===e.type)&&(0,s.jsx)(w.Z,{}),(0,s.jsxs)("div",{className:"px-2",children:[(0,s.jsx)("div",{className:"mx-auto",children:(0,s.jsxs)("div",{className:"flex items-start justify-around gap-4",children:[(0,s.jsx)(lr_wrap,{children:metaData()}),(0,s.jsxs)("div",{className:"my-2 w-full max-w-3xl",children:["apps"===e.type&&(0,s.jsxs)("div",{className:"container mx-auto mb-4 max-w-3xl space-y-4 px-2",children:[(0,s.jsxs)("div",{className:"flex w-full flex-col items-center justify-center",children:[(0,s.jsx)(G,{src:e.itemView.imgUrl,alt:e.itemView.title,width:100,height:100,blurDataURL:e.itemView.imgBlurData,placeholder:"blur"}),(0,s.jsx)("p",{className:"text-center text-4xl font-semibold tracking-wider",children:e.itemView.title})]}),(0,s.jsx)("div",{className:"flex flex-wrap justify-center gap-3",children:e.itemView.platforms.map(t=>(0,s.jsx)(F,{href:t.link,target:"_blank",className:"p-card flex h-fit w-fit cursor-pointer flex-col py-2",children:(0,s.jsxs)("div",{className:"h-24 space-y-2 py-2",children:[(0,s.jsx)("p",{className:"text-center",children:t.name}),(0,s.jsx)("div",{className:"flex h-fit w-40 justify-center overflow-hidden",children:function(e,t){switch(e.toLowerCase()){case"windows":case"microsoft":case"microsoft edge":case"edge add-ons":return(0,s.jsx)(G,{src:"".concat((0,x.S)(),"/images/listing/microsoftstore.svg"),alt:e,height:10,width:135});case"chrome web store":return(0,s.jsx)(G,{className:"rounded-md",src:"".concat((0,x.S)(),"/images/listing/chrome-web-store.png"),alt:e,height:10,width:160});case"android":return(0,s.jsx)(G,{src:"".concat((0,x.S)(),"/images/listing/playstore.svg"),alt:e,height:10,width:200});case"google colab":return(0,s.jsx)(G,{src:"".concat((0,x.S)(),"/images/listing/open-in-colab.svg"),alt:e,height:10,width:200});case"github release":return(0,s.jsx)(G,{className:"",src:"".concat((0,x.S)(),"/images/listing/github-mark").concat(g?"":"-white",".svg"),alt:e,height:10,width:50});default:return(0,s.jsx)(G,{src:null!=t?t:"".concat((0,x.S)(),"/images/logos/github-profile-dark").concat(g?"-light":"",".png"),alt:e,height:10,width:50})}}(t.name,e.itemView.imgUrl)})]})},t.link))}),(0,s.jsx)(CarouselSlider,{images:e.itemView.imgs,imgsBlurData:e.itemView.imgsBlurData},k)]}),"company"===e.type&&(0,s.jsx)("div",{className:"mx-auto mb-4 max-w-3xl space-y-4 px-2",children:(0,s.jsxs)("div",{className:"flex w-full flex-col items-center justify-center",children:[(0,s.jsx)(G,{src:e.itemView.imgUrl,alt:e.itemView.title,width:100,height:100,blurDataURL:e.itemView.imgBlurData,placeholder:"blur"}),(0,s.jsx)("p",{className:"text-center text-4xl font-semibold tracking-wider",children:e.itemView.title}),(0,s.jsx)(F,{href:e.itemView.homePage,target:"_blank",className:"p-card mt-3 cursor-pointer",children:"Goto website"})]})}),(0,s.jsx)(I,{data:e.data,imgBlurdata:e.imgBlurdata},e.itemView.date)]}),(0,s.jsx)(lr_wrap,{children:(0,s.jsx)(TableOfContents,{nodes:e.toc})})]})}),(0,s.jsx)("div",{className:"flex w-full xl:hidden",children:metaData()}),(0,s.jsxs)("div",{className:"mx-auto mt-2 max-w-3xl rounded-2xl border-2 border-base-content/5 bg-base-100/80",children:[(e.previous||e.next)&&(0,s.jsx)("div",{className:"container m-2 mx-auto max-w-3xl px-2",children:(0,s.jsxs)("div",{className:"flex w-full items-center justify-center gap-4",children:[e.previous&&(0,s.jsxs)("div",{className:"h-fit w-full",children:[(0,s.jsx)("div",{className:" mb-2 flex items-center text-2xl normal-case text-slate-400",children:(0,s.jsxs)(F,{href:"/".concat(e.type,"/view/").concat(e.previous.fileName),className:"link-hover link flex items-center ",children:[(0,s.jsx)(r.Z,{className:"h-6 w-6"}),"Previous"," "]})}),"apps"!==e.type&&"company"!==e.type&&(0,s.jsx)(H,{data:e.previous})]}),e.next&&(0,s.jsxs)("div",{className:"h-fit w-full",children:[(0,s.jsx)("div",{className:"mb-2 flex items-center justify-end text-2xl normal-case text-slate-400",children:(0,s.jsxs)(F,{href:"/".concat(e.type,"/view/").concat(e.next.fileName),className:"link-hover link flex items-center",children:["Next ",(0,s.jsx)(i.Z,{className:"h-6 w-6"})]})}),"apps"!==e.type&&"company"!==e.type&&(0,s.jsx)(H,{data:e.next})]})]})}),("apps"===e.type||"company"===e.type)&&e.more4&&(0,s.jsx)("div",{className:"xs:grid-cols-2 container m-2 mx-auto grid max-w-3xl gap-2 px-2 sm:grid-cols-3 lg:grid-cols-4",children:e.more4.map(t=>"apps"===e.type?(0,l.createElement)(d.default,{...t,key:t.date}):(0,l.createElement)(h.default,{...t,key:t.date}))},"".concat(e.itemView.fileName))]}),(0,s.jsx)("div",{className:"mx-auto mt-2 max-w-3xl",children:(0,s.jsx)(M,{theme:g?"light":"dark_dimmed"},k)})]})]})}}}]);
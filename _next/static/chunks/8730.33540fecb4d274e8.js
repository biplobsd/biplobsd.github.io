(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8730,5675],{5704:function(e,t,n){let r=n(7294),i=r.forwardRef(function({title:e,titleId:t,...n},i){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"}))});e.exports=i},3740:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(6495).Z,i=n(2648).Z,a=n(1598).Z,l=n(7273).Z,o=a(n(7294)),s=i(n(2636)),c=n(7757),d=n(3735),u=n(3341);n(4210);var f=i(n(7746));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,n,i,a,l,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===n&&l(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,a=!1;i.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let b=o.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:i,widthInt:a,qualityInt:s,className:c,imgStyle:d,blurStyle:u,isLazy:f,fill:g,placeholder:m,loading:h,srcString:b,config:w,unoptimized:v,loader:x,onLoadRef:j,onLoadingCompleteRef:y,setBlurComplete:E,setShowAltText:k,onLoad:C,onError:N}=e,S=l(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=f?"lazy":h,o.default.createElement(o.default.Fragment,null,o.default.createElement("img",Object.assign({},S,{loading:h,width:a,height:i,decoding:"async","data-nimg":g?"fill":"1",className:c,style:r({},d,u)},n,{ref:o.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(N&&(e.src=e.src),e.complete&&p(e,b,m,j,y,E,v))},[b,m,j,y,E,N,v,t]),onLoad:e=>{let t=e.currentTarget;p(t,b,m,j,y,E,v)},onError:e=>{k(!0),"blur"===m&&E(!0),N&&N(e)}})))}),w=o.forwardRef((e,t)=>{let n,i;var a,{src:p,sizes:w,unoptimized:v=!1,priority:x=!1,loading:j,className:y,quality:E,width:k,height:C,fill:N,style:S,onLoad:z,onLoadingComplete:O,placeholder:_="empty",blurDataURL:R,layout:M,objectFit:L,objectPosition:A,lazyBoundary:I,lazyRoot:P}=e,B=l(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let W=o.useContext(u.ImageConfigContext),Z=o.useMemo(()=>{let e=g||W||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:n})},[W]),D=B,G=D.loader||f.default;delete D.loader;let F="__next_img_default"in G;if(F){if("custom"===Z.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=G;G=t=>{let{config:n}=t,r=l(t,["config"]);return e(r)}}if(M){"fill"===M&&(N=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(S=r({},S,e));let t={responsive:"100vw",fill:"100vw"}[M];t&&!w&&(w=t)}let T="",H=h(k),q=h(C);if("object"==typeof(a=p)&&(m(a)||void 0!==a.src)){let e=m(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(n=e.blurWidth,i=e.blurHeight,R=R||e.blurDataURL,T=e.src,!N){if(H||q){if(H&&!q){let t=H/e.width;q=Math.round(e.height*t)}else if(!H&&q){let t=q/e.height;H=Math.round(e.width*t)}}else H=e.width,q=e.height}}let U=!x&&("lazy"===j||void 0===j);((p="string"==typeof p?p:T).startsWith("data:")||p.startsWith("blob:"))&&(v=!0,U=!1),Z.unoptimized&&(v=!0),F&&p.endsWith(".svg")&&!Z.dangerouslyAllowSVG&&(v=!0);let[V,J]=o.useState(!1),[Y,K]=o.useState(!1),Q=h(E),$=Object.assign(N?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:L,objectPosition:A}:{},Y?{}:{color:"transparent"},S),X="blur"===_&&R&&!V?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:H,heightInt:q,blurWidth:n,blurHeight:i,blurDataURL:R,objectFit:$.objectFit}),'")')}:{},ee=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:a,sizes:l,loader:o}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let a=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:a,kind:"x"}}(t,i,l),d=s.length-1;return{sizes:l||"w"!==c?l:"100vw",srcSet:s.map((e,r)=>"".concat(o({config:t,src:n,quality:a,width:e})," ").concat("w"===c?e:r+1).concat(c)).join(", "),src:o({config:t,src:n,quality:a,width:s[d]})}}({config:Z,src:p,unoptimized:v,width:H,quality:Q,sizes:w,loader:G}),et=p,en={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:D.crossOrigin},er=o.useRef(z);o.useEffect(()=>{er.current=z},[z]);let ei=o.useRef(O);o.useEffect(()=>{ei.current=O},[O]);let ea=r({isLazy:U,imgAttributes:ee,heightInt:q,widthInt:H,qualityInt:Q,className:y,imgStyle:$,blurStyle:X,loading:j,config:Z,fill:N,unoptimized:v,placeholder:_,loader:G,srcString:et,onLoadRef:er,onLoadingCompleteRef:ei,setBlurComplete:J,setShowAltText:K},D);return o.default.createElement(o.default.Fragment,null,o.default.createElement(b,Object.assign({},ea,{ref:t})),x?o.default.createElement(s.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},en))):null)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:a,objectFit:l}=e,o=r||t,s=i||n,c=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(o," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&i?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},5988:function(e,t,n){"use strict";n.d(t,{L:function(){return i}});var r=n(4529);let i=(0,r.Ue)(e=>({isOpen:!1,setIsOpen:t=>e({isOpen:t})}))},8730:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(5893),i=n(7294);let a=i.forwardRef(function({title:e,titleId:t,...n},r){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,i.createElement("path",{fillRule:"evenodd",d:"M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z",clipRule:"evenodd"}))});var l=n(4147),o=n(5152),s=n.n(o),c=n(5675),d=n.n(c),u=n(2025),f=n(7496),g=n(9822);let m=s()(()=>Promise.all([n.e(1664),n.e(9755),n.e(7136)]).then(n.bind(n,7136)),{loadableGenerated:{webpack:()=>[7136]}}),h=s()(()=>n.e(7372).then(n.bind(n,7372)),{loadableGenerated:{webpack:()=>[7372]}}),p=s()(()=>n.e(1664).then(n.t.bind(n,1664,23)),{loadableGenerated:{webpack:()=>[1664]}});function b(){let e=(0,u.f)(),[t,n]=(0,i.useState)(u.u);(0,i.useEffect)(()=>{n("winter"===e.themeName)},[e]);let[o,s]=(0,i.useState)(!1),[c,b]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{b(!0);let e=()=>{let e=window.scrollY>=16;e?s(!0):s(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,r.jsx)("header",{className:"".concat(c?"transition-all delay-300 ease-in-out":""," ").concat(o?"bg-base-200/70 shadow-2xl lg:xl:translate-y-1 lg:xl:rounded-xl lg:xl:ring-base-300/40 lg:xl:ring-1 lg:xl:mx-1":"shadow-none"," supports-backdrop-blur:bg-white/60 sticky top-0 z-50 h-14 backdrop-blur-sm"),children:(0,r.jsxs)("div",{className:"container mx-auto flex h-14 items-center justify-between px-4 py-2",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)("span",{className:"tooltip tooltip-bottom","data-tip":"Go home",children:(0,r.jsxs)(p,{href:"/",className:"btn-ghost btn px-2 text-xl font-bold normal-case tracking-wider",children:[(0,r.jsx)(d(),{src:"/images/logos/github-profile-dark".concat(t?"-light":"",".png"),width:"32",height:"32",alt:l.Z6}),(0,r.jsx)("div",{className:"ml-2 hidden lg:flex",children:l.Z6})]})}),(0,r.jsx)(h,{className:"hidden items-center gap-4 md:flex lg:flex xl:flex"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"hidden lg:inline ",children:(0,r.jsx)(m,{})}),(0,r.jsxs)("div",{className:"flex items-center justify-end lg:hidden",children:[(0,r.jsx)(f.Q,{}),(0,r.jsx)(g.Z,{}),(0,r.jsxs)("div",{className:"dropdown-end dropdown",children:[(0,r.jsx)("label",{tabIndex:0,className:"btn-ghost btn-circle btn",children:(0,r.jsx)(a,{className:"h-8 w-8"})}),(0,r.jsxs)("ul",{tabIndex:0,className:"dropdown-content menu rounded-box mt-2 w-fit bg-base-100/95 px-2 py-5 shadow-2xl ring ring-base-300",children:[(0,r.jsx)(h,{className:" flex justify-center space-x-4 rounded-lg bg-base-100/80 px-2 pb-2"}),(0,r.jsx)(m,{})]})]})]})]})]})})}},9822:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),i=n(7294);let a=i.forwardRef(function({title:e,titleId:t,...n},r){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"}))}),l=i.forwardRef(function({title:e,titleId:t,...n},r){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"}))});var o=n(2025);function s(){let e=(0,o.f)(),[t,n]=(0,i.useState)(o.u);return(0,i.useEffect)(()=>{n("winter"===e.themeName)},[e]),(0,r.jsxs)("button",{onClick:e.toggleTheme,className:"".concat(t?"swap-active":""," swap-rotate btn btn-ghost btn-circle swap"),children:[(0,r.jsx)(a,{className:"swap-on h-6 w-6"}),(0,r.jsx)(l,{className:"swap-off h-6 w-6"})]})}},7496:function(e,t,n){"use strict";n.d(t,{Q:function(){return c}});var r=n(5893),i=n(5704),a=n(7294);let l=["Ctrl ","Control"],o=["⌘","Command"];var s=n(5988);function c(){let e=(0,a.useRef)(null),t=function(){let[e,t]=(0,a.useState)();return(0,a.useEffect)(()=>{"undefined"!=typeof navigator&&(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?t(o):t(l))},[]),e}(),n=(0,s.L)(),c=(0,a.useCallback)(e=>{e.preventDefault(),n.setIsOpen(!n.isOpen)},[n]);return(0,a.useEffect)(()=>{function t(t){e&&e.current&&(27===t.keyCode&&n.isOpen||"k"===t.key&&(t.metaKey||t.ctrlKey))&&c(t)}return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[n,e,c]),(0,r.jsx)("button",{className:"w-fit",type:"button",ref:e,onClick:e=>{c(e)},children:(0,r.jsxs)("div",{className:"p-card flex w-fit cursor-pointer items-center gap-3 overflow-visible rounded-full bg-transparent px-3 lg:rounded-xl lg:bg-base-300",children:[(0,r.jsx)(i,{className:"h-5 w-5"}),t&&(0,r.jsxs)("div",{className:"hidden items-center gap-1 lg:flex",children:[(0,r.jsx)("kbd",{"data-tip":t[1],className:"kbd tooltip tooltip-bottom kbd-sm text-base-content no-underline",children:t[0]})," ",(0,r.jsx)("kbd",{className:"kbd kbd-sm",children:"k"})]})]})})}},5675:function(e,t,n){e.exports=n(3740)},4147:function(e){"use strict";e.exports=JSON.parse('{"Z6":"Biplob Sutradhar","u2":"pnp","i8":"1.0.7-alpha"}')}}]);
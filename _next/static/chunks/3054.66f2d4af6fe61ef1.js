(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3054],{4076:function(e,t,r){let n=r(7294),i=n.forwardRef(function({title:e,titleId:t,...r},i){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"}))});e.exports=i},8034:function(e,t,r){let n=r(7294),i=n.forwardRef(function({title:e,titleId:t,...r},i){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"}))});e.exports=i},3054:function(e,t,r){"use strict";let n;r.r(t),r.d(t,{default:function(){return v}});var i=r(5893),s=r(5152),l=r.n(s),a=r(4076),o=r(8034),c=r(7294);let d=c.useLayoutEffect,u=new Map,f=new WeakMap,h=0;var m=r(1664),g=r.n(m);let p=l()(()=>r.e(3736).then(r.bind(r,3736)),{loadableGenerated:{webpack:()=>[3736]}});function v(e){let[t,r]=(0,c.useState)(!1),[s,l]=(0,c.useState)(!1),[m,v]=(0,c.useState)(!1),{ref:w,inView:x}=function({threshold:e,delay:t,trackVisibility:r,rootMargin:i,root:s,triggerOnce:l,skip:a,initialInView:o,fallbackInView:d,onChange:m}={}){var g;let[p,v]=c.useState(null),w=c.useRef(),[x,b]=c.useState({inView:!!o,entry:void 0});w.current=m,c.useEffect(()=>{let o;if(!a&&p)return o=function(e,t,r={},i=n){if(void 0===window.IntersectionObserver&&void 0!==i){let n=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}let{id:s,observer:l,elements:a}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var r;return`${t}_${"root"===t?(r=e.root)?(f.has(r)||(h+=1,f.set(r,h.toString())),f.get(r)):"0":e[t]}`}).toString(),r=u.get(t);if(!r){let n;let i=new Map,s=new IntersectionObserver(t=>{t.forEach(t=>{var r;let s=t.isIntersecting&&n.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=s),null==(r=i.get(t.target))||r.forEach(e=>{e(s,t)})})},e);n=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:s,elements:i},u.set(t,r)}return r}(r),o=a.get(e)||[];return a.has(e)||a.set(e,o),o.push(t),l.observe(e),function(){o.splice(o.indexOf(t),1),0===o.length&&(a.delete(e),l.unobserve(e)),0===a.size&&(l.disconnect(),u.delete(s))}}(p,(e,t)=>{b({inView:e,entry:t}),w.current&&w.current(e,t),t.isIntersecting&&l&&o&&(o(),o=void 0)},{root:s,rootMargin:i,threshold:e,trackVisibility:r,delay:t},d),()=>{o&&o()}},[Array.isArray(e)?e.toString():e,p,s,i,l,a,r,d,t]);let y=null==(g=x.entry)?void 0:g.target,j=c.useRef();p||!y||l||a||j.current===y||(j.current=y,b({inView:!!o,entry:void 0}));let k=[v,x.inView,x.entry];return k.ref=k[0],k.inView=k[1],k.entry=k[2],k}({threshold:0}),b=[],y=[],j=[];for(let t=0;t<e.testis.length;t++)switch(t%3){case 0:b.push(e.testis[t]);break;case 1:y.push(e.testis[t]);break;case 2:j.push(e.testis[t])}let k=(0,c.useRef)(null),[E,N]=(0,c.useState)([!0,!0]);return d(()=>{if(E[0]){N([!1,!0]);return}if(E[1]){N([!1,!1]);return}k.current&&(t?(k.current.focus({preventScroll:t}),l(!1)):(k.current.focus(),k.current.scrollIntoView()))},[t]),(0,c.useEffect)(()=>{setTimeout(()=>v(t),0)},[t]),(0,c.useEffect)(()=>{if(t&&x)return window.addEventListener("scroll",e,{passive:!0}),()=>{window.removeEventListener("scroll",e)};function e(){if(!k.current)return;let e=document.body.getBoundingClientRect(),t=k.current.getBoundingClientRect(),r=t.top+t.height/4-e.top-window.innerHeight/2,n=window.scrollY>r;s&&!n?l(!1):!s&&n&&l(!0)}},[t,s,x]),(0,i.jsxs)("div",{ref:k,className:"relative mx-auto h-fit w-full px-3 sm:mx-0 lg:max-w-2xl lg:px-0",children:[(0,i.jsxs)("p",{className:"flex items-center gap-2 text-2xl normal-case text-slate-400",children:[(0,i.jsx)(a,{className:"h-5 w-5"})," Testimonials"," ",(0,i.jsx)(g(),{href:e.addUrl,className:"tooltip","data-tip":"Give Testimonial",target:"_blank",children:(0,i.jsx)(o,{className:"h-5 w-5"})})]}),(0,i.jsxs)("div",{className:"relative md:mx-2",children:[(0,i.jsxs)("div",{ref:w,className:"".concat(t?s?"mb-16":"":"max-h-[33rem] overflow-hidden md:max-h-80"," mx-auto grid w-full items-start justify-center gap-2 rounded-b-3xl py-4 transition-all duration-500 ease-in-out sm:grid-cols-2 md:grid-cols-3"),children:[(0,i.jsx)("ul",{className:"space-y-2 ",children:b.map(t=>{if(t)return(0,i.jsx)("li",{children:(0,i.jsx)(p,{...t,addUrl:e.addUrl})},t.imgUrl)})}),(0,i.jsx)("ul",{className:"space-y-2",children:y.map(t=>{if(t)return(0,i.jsx)("li",{children:(0,i.jsx)(p,{...t,addUrl:e.addUrl})},t.imgUrl)})}),(0,i.jsx)("ul",{className:"space-y-2",children:j.map(t=>{if(t)return(0,i.jsx)("li",{className:"hover:z-50",children:(0,i.jsx)(p,{...t,addUrl:e.addUrl})},t.imgUrl)})})]}),(0,i.jsx)("div",{className:"".concat(t?"sticky -mt-52 transition-opacity duration-300":"absolute"," ").concat(m?"transition-opacity duration-300":""," ").concat(t?s?"visible":"invisible":""," inset-x-0 bottom-0 z-40 flex justify-center overflow-hidden rounded-3xl bg-gradient-to-t from-base-300 pb-8 pt-32 "),children:(0,i.jsx)("button",{onClick:()=>r(e=>!e),className:"".concat(m?"transition-transform":""," ").concat(t?s?"":"translate-y-4":""," ").concat(!t||s?"pointer-events-auto":""," p-card ring ring-base-content/10"),children:t?"Okay, I get the point":"Show more..."})})]})]})}}}]);
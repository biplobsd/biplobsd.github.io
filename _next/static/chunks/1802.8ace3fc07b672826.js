"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1802,6275],{14927:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(85893),n=r(5152),s=r.n(n),l=r(67294),i=r(62054),o=r(10798),c=r(57851);let d=s()(()=>r.e(4855).then(r.t.bind(r,74855,23)),{loadableGenerated:{webpack:()=>[74855]}});function u(e){let[t,r]=(0,l.useState)(e.tooltipText);return(0,a.jsx)("span",{className:(0,c.m)("tooltip",e.className),"data-tip":t,style:e.style,children:(0,a.jsx)(d,{text:e.copyText,onCopy:async()=>{r("Copied"),await (0,i.g)(500),r(e.tooltipText)},children:(0,a.jsx)(o.Z,{className:"h-4 w-4 cursor-pointer hover:text-blue-600"})})})}},26275:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var a=r(85893),n=r(5152),s=r.n(n),l=r(959),i=r(76199),o=r(27962),c=r(90961);function d(){return(e,t)=>{t.data.headings=function(e){let t={},r=[],a={};return(0,c.Vn)(e,"heading",e=>{(function(e,t){var r,a;let n=e.children.map(e=>e.value).join("");t[n]=(t[n]||0)+1,e.data=e.data||{hProperties:{id:"".concat(n).concat(null!==(r=t[n])&&void 0!==r&&r?" ".concat(null!==(a=t[n])&&void 0!==a?a:-1):"").replace(/[^a-zA-Z\d\s-]/g,"").split(" ").join("-").toLowerCase()}}})(e,t),function(e,t,r){let a={value:(0,o.B)(e),depth:e.depth,data:e.data,children:[]};if(2===e.depth)t.push(a),r[e.depth]=a;else if(1!==e.depth){let t=r[e.depth-1];t&&(t.children.push(a),r[e.depth]=a)}}(e,r,a)}),r}(e)}}var u=r(36569);r(67294);var p=r(84283),h=r(47893),g=r(52521),m=r(6257),x=r(31318),b=r(86814),f=r(17852),v=r(70135),y=r(14927),w=r(25675),j=r.n(w);function Z(e){let{count:t=1}=e,r=Array.from({length:t},(e,t)=>(0,a.jsx)("div",{className:"flex w-full animate-pulse flex-col gap-2 rounded-lg bg-base-content/10 p-4",children:Array.from({length:3},(e,t)=>(0,a.jsx)("div",{className:"h-4 rounded bg-base-content/30",style:{width:"".concat(30+40*Math.random(),"%")}},t))},t));return(0,a.jsx)("div",{className:"space-y-4 p-4",children:r})}u.Z.registerLanguage("tsx",h.Z),u.Z.registerLanguage("typescript",g.Z),u.Z.registerLanguage("scss",m.Z),u.Z.registerLanguage("bash",x.Z),u.Z.registerLanguage("markdown",b.Z),u.Z.registerLanguage("json",f.Z),u.Z.registerLanguage("lua",v.Z);let N=s()(()=>r.e(3900).then(r.bind(r,33900)).then(e=>e.default),{loadableGenerated:{webpack:()=>[33900]},loading:()=>(0,a.jsx)(Z,{count:3})});function k(e){let{data:t,imgBlurdata:r}=e;return(0,a.jsx)("article",{className:"container prose prose-stone relative mx-auto max-w-3xl rounded-2xl bg-base-100/80 px-4 py-2 ring-1 ring-base-content/5 prose-headings:my-1 prose-a:my-1 prose-a:text-blue-600 prose-a:no-underline prose-pre:m-0 prose-pre:bg-transparent prose-pre:p-0 prose-li:my-0 prose-img:my-2 prose-img:inline-block prose-img:rounded-xl",children:(0,a.jsx)(N,{components:{img:e=>{let{...t}=e;if(!t.src)return(0,a.jsx)(a.Fragment,{});if(!r)return(0,a.jsx)("img",{...t});let n=r.hasOwnProperty(t.src)?r[t.src]:void 0;return(0,a.jsx)(j(),{...t,blurDataURL:n?n.base64:void 0,placeholder:n?"blur":"empty",width:t.width?parseFloat(t.width):n?n.width:0,height:t.height?parseFloat(t.height):n?n.height:0,sizes:"100vw",className:t.width?void 0:"w-auto"})},a:e=>{var t;let{children:r,...n}=e;return(null===(t=n.href)||void 0===t?void 0:t.includes("http"))&&(n.target="_blank",n.rel="noopener noreferrer",n.className="hover:underline break-all"),(0,a.jsx)("a",{...n,children:r})},code(e){let{inline:t,className:r,...n}=e,s=/language-(\w+)/.exec(r||"");return!t&&s?(0,a.jsx)(u.Z,{style:p.vk,language:s[1],PreTag:"div",className:"scrollbar-style mockup-code",showLineNumbers:!0,useInlineStyles:!0,children:String(n.children).replace(/\n$/,"")}):(0,a.jsx)("code",{className:r,...n})},pre:e=>{var t;let r=e.node.children[0].children[0].value,n=null===(t=e.children[0])||void 0===t?void 0:t.props.className.replace(/language-/g,"");return(0,a.jsxs)("div",{className:"relative overflow-x-hidden",children:[(0,a.jsx)(y.Z,{style:{right:0},copyText:r,tooltipText:"Copy code",className:"tooltip-left absolute z-40 mr-2 mt-5"}),(0,a.jsx)("span",{style:{bottom:0,right:0},className:"absolute z-40 mb-5 mr-1 rounded-lg bg-base-content/40 p-1 text-xs uppercase text-base-300 backdrop-blur-sm",children:n}),(0,a.jsx)("pre",{...e})]})}},rehypePlugins:[l.Z],remarkPlugins:[i.Z,d],children:t})})}},62054:function(e,t,r){r.d(t,{g:function(){return a}});async function a(e){return await new Promise(t=>setTimeout(t,e))}}}]);
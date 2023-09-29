"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1027,1548],{14927:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(85893),a=n(5152),s=n.n(a),l=n(67294),i=n(62054),o=n(10798),c=n(57851);let u=s()(()=>n.e(4855).then(n.t.bind(n,74855,23)),{loadableGenerated:{webpack:()=>[74855]}});function d(e){let[t,n]=(0,l.useState)(e.tooltipText);return(0,r.jsx)("span",{className:(0,c.m)("tooltip",e.className),"data-tip":t,style:e.style,children:(0,r.jsx)(u,{text:e.copyText,onCopy:async()=>{n("Copied"),await (0,i.g)(500),n(e.tooltipText)},children:(0,r.jsx)(o.Z,{className:"h-4 w-4 cursor-pointer hover:text-blue-600"})})})}},71134:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(85893),a=n(32502);function s(){return(0,r.jsx)("span",{className:"absolute mx-auto w-full ",children:(0,r.jsx)(a.Z,{})})}},32502:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(85893);function a(){return(0,r.jsxs)("div",{className:"flex justify-center gap-2",children:[(0,r.jsx)("span",{className:"loading loading-infinity"}),(0,r.jsx)("span",{className:"animate-pulse",children:"Loading..."})]})}},91027:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(85893),a=n(5152),s=n.n(a),l=n(71134),i=n(959),o=n(76199),c=n(27962),u=n(90961);function d(){return(e,t)=>{t.data.headings=function(e){let t={},n=[],r={};return(0,u.Vn)(e,"heading",e=>{(function(e,t){var n,r;let a=e.children.map(e=>e.value).join("");t[a]=(t[a]||0)+1,e.data=e.data||{hProperties:{id:"".concat(a).concat(null!==(n=t[a])&&void 0!==n&&n?" ".concat(null!==(r=t[a])&&void 0!==r?r:-1):"").replace(/[^a-zA-Z\d\s-]/g,"").split(" ").join("-").toLowerCase()}}})(e,t),function(e,t,n){let r={value:(0,c.B)(e),depth:e.depth,data:e.data,children:[]};if(2===e.depth)t.push(r),n[e.depth]=r;else if(1!==e.depth){let t=n[e.depth-1];t&&(t.children.push(r),n[e.depth]=r)}}(e,n,r)}),n}(e)}}var p=n(36569);n(67294);var h=n(84283),g=n(47893),m=n(52521),x=n(6257),f=n(31318),b=n(86814),v=n(17852),j=n(70135),Z=n(14927),y=n(25675),w=n.n(y);p.Z.registerLanguage("tsx",g.Z),p.Z.registerLanguage("typescript",m.Z),p.Z.registerLanguage("scss",x.Z),p.Z.registerLanguage("bash",f.Z),p.Z.registerLanguage("markdown",b.Z),p.Z.registerLanguage("json",v.Z),p.Z.registerLanguage("lua",j.Z);let N=s()(()=>n.e(3900).then(n.bind(n,33900)).then(e=>e.default),{loadableGenerated:{webpack:()=>[33900]},loading:()=>(0,r.jsx)(l.Z,{})});function k(e){let{data:t,imgBlurdata:n}=e;return(0,r.jsx)("article",{className:"container prose prose-stone relative mx-auto max-w-3xl rounded-2xl bg-base-100/80 px-4 py-2 ring-1 ring-base-content/5 prose-headings:my-1 prose-a:my-1 prose-a:text-blue-600 prose-a:no-underline prose-pre:m-0 prose-pre:bg-transparent prose-pre:p-0 prose-li:my-0 prose-img:my-2 prose-img:inline-block prose-img:rounded-xl",children:(0,r.jsx)(N,{components:{img:e=>{let{...t}=e;if(!t.src)return(0,r.jsx)(r.Fragment,{});if(!n)return(0,r.jsx)("img",{...t});let a=n.hasOwnProperty(t.src)?n[t.src]:void 0;return(0,r.jsx)(w(),{...t,blurDataURL:a?a.base64:void 0,placeholder:a?"blur":"empty",width:t.width?parseFloat(t.width):a?a.width:0,height:t.height?parseFloat(t.height):a?a.height:0,sizes:"100vw",className:t.width?void 0:"w-auto"})},a:e=>{var t;let{children:n,...a}=e;return(null===(t=a.href)||void 0===t?void 0:t.includes("http"))&&(a.target="_blank",a.rel="noopener noreferrer",a.className="hover:underline break-all"),(0,r.jsx)("a",{...a,children:n})},code(e){let{inline:t,className:n,...a}=e,s=/language-(\w+)/.exec(n||"");return!t&&s?(0,r.jsx)(p.Z,{style:h.vk,language:s[1],PreTag:"div",className:"scrollbar-style mockup-code",showLineNumbers:!0,useInlineStyles:!0,children:String(a.children).replace(/\n$/,"")}):(0,r.jsx)("code",{className:n,...a})},pre:e=>{var t;let n=e.node.children[0].children[0].value,a=null===(t=e.children[0])||void 0===t?void 0:t.props.className.replace(/language-/g,"");return(0,r.jsxs)("div",{className:"relative overflow-x-hidden",children:[(0,r.jsx)(Z.Z,{style:{right:0},copyText:n,tooltipText:"Copy code",className:"tooltip-left absolute z-40 mr-2 mt-5"}),(0,r.jsx)("span",{style:{bottom:0,right:0},className:"absolute z-40 mb-5 mr-1 rounded-lg bg-base-content/40 p-1 text-xs uppercase text-base-300 backdrop-blur-sm",children:a}),(0,r.jsx)("pre",{...e})]})}},rehypePlugins:[i.Z],remarkPlugins:[o.Z,d],children:t})})}},62054:function(e,t,n){n.d(t,{g:function(){return r}});async function r(e){return await new Promise(t=>setTimeout(t,e))}}}]);
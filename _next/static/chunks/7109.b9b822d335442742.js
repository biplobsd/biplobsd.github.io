"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7109],{97109:(e,t,r)=>{r.d(t,{V:()=>N});var s=r(35695),i=r(33670);function n(e,t,r){return Math.max(t,Math.min(e,r))}function o(e,t){return"rtl"===t?(1-e)*100:(-1+e)*100}function a(e,t,r){if("string"==typeof t)void 0!==r&&(e.style[t]=r);else for(let r in t)if(t.hasOwnProperty(r)){let s=t[r];void 0!==s&&(e.style[r]=s)}}function l(e,t){e.classList.add(t)}function c(e,t){e.classList.remove(t)}function u(e){e&&e.parentNode&&e.parentNode.removeChild(e)}var p={minimum:.08,maximum:1,template:`<div class="bar"><div class="peg"></div></div>
             <div class="spinner"><div class="spinner-icon"></div></div>
             <div class="indeterminate"><div class="inc"></div><div class="dec"></div></div>`,easing:"linear",positionUsing:"",speed:200,trickle:!0,trickleSpeed:200,showSpinner:!0,indeterminate:!1,indeterminateSelector:".indeterminate",barSelector:".bar",spinnerSelector:".spinner",parent:"body",direction:"ltr"},d=class{static settings=p;static status=null;static pending=[];static isPaused=!1;static reset(){return this.status=null,this.isPaused=!1,this.pending=[],this.settings=p,this}static configure(e){return Object.assign(this.settings,e),this}static isStarted(){return"number"==typeof this.status}static set(e){if(this.isPaused)return this;let t=this.isStarted();e=n(e,this.settings.minimum,this.settings.maximum),this.status=e===this.settings.maximum?null:e;let r=this.render(!t),s=this.settings.speed,i=this.settings.easing;return r.forEach(e=>e.offsetWidth),this.queue(t=>{r.forEach(t=>{this.settings.indeterminate||a(t.querySelector(this.settings.barSelector),this.barPositionCSS({n:e,speed:s,ease:i}))}),e===this.settings.maximum?(r.forEach(e=>{a(e,{transition:"none",opacity:"1"}),e.offsetWidth}),setTimeout(()=>{r.forEach(e=>{a(e,{transition:`all ${s}ms ${i}`,opacity:"0"})}),setTimeout(()=>{r.forEach(e=>{this.remove(e),null===this.settings.template&&a(e,{transition:"none",opacity:"1"})}),t()},s)},s)):setTimeout(t,s)}),this}static start(){this.status||this.set(0);let e=()=>{this.isPaused||setTimeout(()=>{this.status&&(this.trickle(),e())},this.settings.trickleSpeed)};return this.settings.trickle&&e(),this}static done(e){return e||this.status?this.inc(.3+.5*Math.random()).set(1):this}static inc(e){if(this.isPaused||this.settings.indeterminate)return this;let t=this.status;return t?t>1?this:("number"!=typeof e&&(e=t>=0&&t<.2?.1:t>=.2&&t<.5?.04:t>=.5&&t<.8?.02:.005*(t>=.8&&t<.99)),t=n(t+e,0,.994),this.set(t)):this.start()}static dec(e){if(this.isPaused||this.settings.indeterminate)return this;let t=this.status;return"number"!=typeof t?this:("number"!=typeof e&&(e=t>.8?.1:t>.5?.05:t>.2?.02:.01),t=n(t-e,0,.994),this.set(t))}static trickle(){return this.isPaused||this.settings.indeterminate?this:this.inc()}static promise(e){if(!e||"resolved"===e.state())return this;let t=0,r=0;return this.start(),t++,r++,e.always(()=>{0==--r?(t=0,this.done()):this.set((t-r)/t)}),this}static render(e=!1){let t="string"==typeof this.settings.parent?document.querySelector(this.settings.parent):this.settings.parent,r=t?Array.from(t.querySelectorAll(".bprogress")):[];if(null!==this.settings.template&&0===r.length){l(document.documentElement,"bprogress-busy");let e=document.createElement("div");l(e,"bprogress"),e.innerHTML=this.settings.template,t!==document.body&&l(t,"bprogress-custom-parent"),t.appendChild(e),r.push(e)}return r.forEach(r=>{if(null===this.settings.template&&(r.style.display=""),l(document.documentElement,"bprogress-busy"),t!==document.body&&l(t,"bprogress-custom-parent"),this.settings.indeterminate){let e=r.querySelector(this.settings.barSelector);e&&(e.style.display="none");let t=r.querySelector(this.settings.indeterminateSelector);t&&(t.style.display="")}else{let t=r.querySelector(this.settings.barSelector),s=e?o(0,this.settings.direction):o(this.status||0,this.settings.direction);a(t,this.barPositionCSS({n:this.status||0,speed:this.settings.speed,ease:this.settings.easing,perc:s}));let i=r.querySelector(this.settings.indeterminateSelector);i&&(i.style.display="none")}if(null===this.settings.template){let e=r.querySelector(this.settings.spinnerSelector);e&&(e.style.display=this.settings.showSpinner?"block":"none")}else if(!this.settings.showSpinner){let e=r.querySelector(this.settings.spinnerSelector);e&&u(e)}}),r}static remove(e){e?null===this.settings.template?e.style.display="none":u(e):(c(document.documentElement,"bprogress-busy"),("string"==typeof this.settings.parent?document.querySelectorAll(this.settings.parent):[this.settings.parent]).forEach(e=>{c(e,"bprogress-custom-parent")}),document.querySelectorAll(".bprogress").forEach(e=>{null===this.settings.template?e.style.display="none":u(e)}))}static pause(){return!this.isStarted()||this.settings.indeterminate||(this.isPaused=!0),this}static resume(){if(!this.isStarted()||this.settings.indeterminate)return this;if(this.isPaused=!1,this.settings.trickle){let e=()=>{this.isPaused||setTimeout(()=>{this.status&&(this.trickle(),e())},this.settings.trickleSpeed)};e()}return this}static isRendered(){return document.querySelectorAll(".bprogress").length>0}static getPositioningCSS(){let e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return`${t}Perspective`in e?"translate3d":`${t}Transform`in e?"translate":"margin"}static queue(e){this.pending.push(e),1===this.pending.length&&this.next()}static next(){let e=this.pending.shift();e&&e(this.next.bind(this))}static initPositionUsing(){""===this.settings.positionUsing&&(this.settings.positionUsing=this.getPositioningCSS())}static barPositionCSS({n:e,speed:t,ease:r,perc:s}){this.initPositionUsing();let i={},n=s??o(e,this.settings.direction);return"translate3d"===this.settings.positionUsing?i={transform:`translate3d(${n}%,0,0)`}:"translate"===this.settings.positionUsing?i={transform:`translate(${n}%,0)`}:"width"===this.settings.positionUsing?i={width:`${"rtl"===this.settings.direction?100-n:n+100}%`,..."rtl"===this.settings.direction?{right:"0",left:"auto"}:{}}:"margin"===this.settings.positionUsing&&(i="rtl"===this.settings.direction?{"margin-left":`${-n}%`}:{"margin-right":`${-n}%`}),i.transition=`all ${t}ms ${r}`,i}},h=({color:e="#29d",height:t="2px",spinnerPosition:r="top-right"})=>`
:root {
  --bprogress-color: ${e};
  --bprogress-height: ${t};
  --bprogress-spinner-size: 18px;
  --bprogress-spinner-animation-duration: 400ms;
  --bprogress-spinner-border-size: 2px;
  --bprogress-box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
  --bprogress-z-index: 99999;
  --bprogress-spinner-top: ${"top-right"===r||"top-left"===r?"15px":"auto"};
  --bprogress-spinner-bottom: ${"bottom-right"===r||"bottom-left"===r?"15px":"auto"};
  --bprogress-spinner-right: ${"top-right"===r||"bottom-right"===r?"15px":"auto"};
  --bprogress-spinner-left: ${"top-left"===r||"bottom-left"===r?"15px":"auto"};
}

.bprogress {
  width: 0;
  height: 0;
  pointer-events: none;
  z-index: var(--bprogress-z-index);
}

.bprogress .bar {
  background: var(--bprogress-color);
  position: fixed;
  z-index: var(--bprogress-z-index);
  top: 0;
  left: 0;
  width: 100%;
  height: var(--bprogress-height);
}

/* Fancy blur effect */
.bprogress .peg {
  display: block;
  position: absolute;
  right: 0;
  width: 100px;
  height: 100%;
  box-shadow: var(--bprogress-box-shadow);
  opacity: 1.0;
  transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
.bprogress .spinner {
  display: block;
  position: fixed;
  z-index: var(--bprogress-z-index);
  top: var(--bprogress-spinner-top);
  bottom: var(--bprogress-spinner-bottom);
  right: var(--bprogress-spinner-right);
  left: var(--bprogress-spinner-left);
}

.bprogress .spinner-icon {
  width: var(--bprogress-spinner-size);
  height: var(--bprogress-spinner-size);
  box-sizing: border-box;
  border: solid var(--bprogress-spinner-border-size) transparent;
  border-top-color: var(--bprogress-color);
  border-left-color: var(--bprogress-color);
  border-radius: 50%;
  -webkit-animation: bprogress-spinner var(--bprogress-spinner-animation-duration) linear infinite;
  animation: bprogress-spinner var(--bprogress-spinner-animation-duration) linear infinite;
}

.bprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.bprogress-custom-parent .bprogress .spinner,
.bprogress-custom-parent .bprogress .bar {
  position: absolute;
}

.bprogress .indeterminate {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--bprogress-height);
  overflow: hidden;
}

.bprogress .indeterminate .inc,
.bprogress .indeterminate .dec {
  position: absolute;
  top: 0;
  height: 100%;
  background-color: var(--bprogress-color);
}

.bprogress .indeterminate .inc {
  animation: bprogress-indeterminate-increase 2s infinite;
}

.bprogress .indeterminate .dec {
  animation: bprogress-indeterminate-decrease 2s 0.5s infinite;
}

@-webkit-keyframes bprogress-spinner {
  0%   { -webkit-transform: rotate(0deg); transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }
}

@keyframes bprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes bprogress-indeterminate-increase {
  from { left: -5%; width: 5%; }
  to { left: 130%; width: 100%; }
}

@keyframes bprogress-indeterminate-decrease {
  from { left: -80%; width: 80%; }
  to { left: 110%; width: 10%; }
}
`;function g(e,t){if("string"==typeof t&&"data-disable-progress"===t){let r=t.substring(5).replace(/-([a-z])/g,(e,t)=>t.toUpperCase());return e.dataset[r]}let r=e[t];if(r instanceof SVGAnimatedString){let e=r.baseVal;if("href"===t){var s=location.origin;if(!e.startsWith("/")||!s)return e;let{pathname:t,query:r,hash:i}=function(e){let t=e.indexOf("#"),r=e.indexOf("?"),s=r>-1&&(t<0||r<t);return s||t>-1?{pathname:e.substring(0,s?r:t),query:s?e.substring(r,t>-1?t:void 0):"",hash:t>-1?e.slice(t):""}:{pathname:e,query:"",hash:""}}(e);return`${s}${t}${r}${i}`}return e}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},s=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),s.forEach(function(t){var s;s=r[t],t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s})}return e}function m(e,t){if(null==e)return{};var r,s,i=function(e,t){if(null==e)return{};var r,s,i={},n=Object.keys(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)r=n[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var b=(0,i.createContext)(void 0),v=function(){var e=(0,i.useContext)(b);if(!e)throw Error("useProgress must be used within a ProgressProvider");return e},y=function(e){var t=e.children,r=e.color,s=void 0===r?"#0A2FFF":r,n=e.height,o=void 0===n?"2px":n,a=e.options,l=e.spinnerPosition,c=void 0===l?"top-right":l,u=e.style,p=e.disableStyle,g=e.nonce,m=e.shallowRouting,v=e.disableSameURL,y=e.startPosition,S=e.delay,w=e.stopDelay,P=(0,i.useRef)(null),O=(0,i.useRef)(!1),k=(0,i.useCallback)(function(){return O.current=!0},[]),E=(0,i.useCallback)(function(){return O.current=!1},[]),x=(0,i.useCallback)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];r&&k(),P.current=setTimeout(function(){e>0&&d.set(e),d.start()},t)},[k]),j=(0,i.useCallback)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;setTimeout(function(){P.current&&clearTimeout(P.current),P.current=setTimeout(function(){d.isStarted()&&(d.done(),O.current&&E())},e)},t)},[E]),C=(0,i.useCallback)(function(e){return d.inc(e)},[]),R=(0,i.useCallback)(function(e){return d.dec(e)},[]),N=(0,i.useCallback)(function(e){return d.set(e)},[]),$=(0,i.useCallback)(function(){return d.pause()},[]),A=(0,i.useCallback)(function(){return d.resume()},[]),U=(0,i.useCallback)(function(){return d.settings},[]),T=(0,i.useCallback)(function(e){var t=U(),r="function"==typeof e?e(t):e,s=f({},t,r);d.configure(s)},[U]),L=(0,i.useMemo)(function(){return i.createElement("style",{nonce:g},u||h({color:s,height:o,spinnerPosition:c}))},[s,o,g,c,u]);return d.configure(a||{}),i.createElement(b.Provider,{value:{start:x,stop:j,inc:C,dec:R,set:N,pause:$,resume:A,setOptions:T,getOptions:U,isAutoStopDisabled:O,disableAutoStop:k,enableAutoStop:E,shallowRouting:void 0!==m&&m,disableSameURL:void 0===v||v,startPosition:void 0===y?0:y,delay:void 0===S?0:S,stopDelay:void 0===w?0:w}},void 0!==p&&p?null:L,t)};function S(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(Boolean).join(" ")}var w=i.forwardRef(function(e,t){var r=e.as,s=e.children,n=e.className,o=e.classSelector,a=m(e,["as","children","className","classSelector"]);return i.createElement(null!=r?r:"div",f({ref:t,className:S(void 0===o?"bar":o,n)},a),s)}),P=i.forwardRef(function(e,t){var r=e.as,s=e.children,n=e.className,o=e.classSelector,a=m(e,["as","children","className","classSelector"]);return i.createElement(null!=r?r:"div",f({ref:t,className:S(void 0===o?"peg":o,n)},a),s)}),O=i.forwardRef(function(e,t){var r=e.as,s=e.children,n=e.className,o=e.classSelector,a=m(e,["as","children","className","classSelector"]);return i.createElement(null!=r?r:"div",f({ref:t,className:S(void 0===o?"spinner":o,n)},a),s)}),k=i.forwardRef(function(e,t){var r=e.as,s=e.children,n=e.className,o=e.classSelector,a=m(e,["as","children","className","classSelector"]);return i.createElement(null!=r?r:"div",f({ref:t,className:S(void 0===o?"spinner-icon":o,n)},a),s)});function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},s=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),s.forEach(function(t){var s;s=r[t],t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s})}return e}i.forwardRef(function(e,t){var r,s,n=e.as,o=e.children,a=e.className,l=e.style,c=m(e,["as","children","className","style"]);return i.createElement(null!=n?n:"div",f({ref:t,className:S("bprogress",a),style:(r=f({},l),s=s={display:"none"},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r.push.apply(r,s)}return r})(Object(s)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(s,e))}),r)},c),o||i.createElement(i.Fragment,null,i.createElement(w,null,i.createElement(P,null)),i.createElement(O,null,i.createElement(k,null))))}),i.forwardRef(function(e,t){var r=e.as,s=e.className,n=e.classSelector,o=m(e,["as","className","classSelector"]);return i.createElement(null!=r?r:"div",f({ref:t,className:S(void 0===n?"indeterminate":n,s)},o),i.createElement("div",{className:"inc"}),i.createElement("div",{className:"dec"}))});function x(e,t){if(null==e)return{};var r,s,i=function(e,t){if(null==e)return{};var r,s,i={},n=Object.keys(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)r=n[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["memo","shouldCompareComplexProps"];return(0,i.memo)(e,function(e,r){return!1!==r.memo&&(!r.shouldCompareComplexProps||function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s=Object.keys(e).filter(function(e){return!r.includes(e)}),i=Object.keys(t).filter(function(e){return!r.includes(e)});if(s.length!==i.length)return!1;var n=!0,o=!1,a=void 0;try{for(var l,c=s[Symbol.iterator]();!(n=(l=c.next()).done);n=!0){var u=l.value;if(e[u]!==t[u])return!1}}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return!0}(e,r,t))})}(function(e){return!function(e){var t=e.shallowRouting,r=void 0!==t&&t,s=e.disableSameURL,n=void 0===s||s,o=e.startPosition,a=void 0===o?0:o,l=e.delay,c=void 0===l?0:l,u=e.stopDelay,p=void 0===u?0:u,d=e.targetPreprocessor,h=e.disableAnchorClick,f=void 0!==h&&h,m=e.startOnLoad,b=void 0!==m&&m,y=e.forcedStopDelay,S=void 0===y?0:y,w=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],P=(0,i.useRef)([]),O=(0,i.useRef)(null),k=v(),E=k.start,x=k.stop,j=k.isAutoStopDisabled;(0,i.useEffect)(function(){b&&E(a,c)},[]),(0,i.useEffect)(function(){return O.current&&clearTimeout(O.current),O.current=setTimeout(function(){j.current||x()},p),function(){O.current&&clearTimeout(O.current)}},w),(0,i.useEffect)(function(){if(!f){var e=function(e){if(e.defaultPrevented)return;var t,s,i,o,l=e.currentTarget;if(l.hasAttribute("download"))return;var u=e.target,p=(null==u?void 0:u.getAttribute("data-prevent-progress"))==="true"||(null==l?void 0:l.getAttribute("data-prevent-progress"))==="true";if(!p)for(var h,f=u;f&&"a"!==f.tagName.toLowerCase();){if((null==(h=f.parentElement)?void 0:h.getAttribute("data-prevent-progress"))==="true"){p=!0;break}f=f.parentElement}if(!p&&"_blank"!==g(l,"target")&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey){var m=g(l,"href"),b=d?d(new URL(m)):new URL(m),v=new URL(location.href);if(!(r&&(t=b,s=v,t.protocol+"//"+t.host+t.pathname==s.protocol+"//"+s.host+s.pathname))||!n){i=b,o=v,i.protocol+"//"+i.host+i.pathname+i.search==o.protocol+"//"+o.host+o.pathname+o.search&&n||E(a,c)}}},t=new MutationObserver(function(){var t=Array.from(document.querySelectorAll("a")).filter(function(e){var t=g(e,"href"),r="true"===e.getAttribute("data-disable-progress"),s=t&&!t.startsWith("tel:")&&!t.startsWith("mailto:")&&!t.startsWith("blob:")&&!t.startsWith("javascript:");return!r&&s&&"_blank"!==g(e,"target")});t.forEach(function(t){t.addEventListener("click",e,!0)}),P.current=t});t.observe(document,{childList:!0,subtree:!0});var s=window.history.pushState;return window.history.pushState=new Proxy(window.history.pushState,{apply:function(e,t,r){return j.current||x(p,S),e.apply(t,r)}}),function(){t.disconnect(),P.current.forEach(function(t){t.removeEventListener("click",e,!0)}),P.current=[],window.history.pushState=s}}},[f,d,r,n,c,p,a,E,x,S,j])}(e,[(0,s.usePathname)(),(0,s.useSearchParams)()]),null});j.displayName="AppProgress";var C=function(e){var t=e.children,r=e.ProgressComponent,s=e.color,n=e.height,o=e.options,a=e.spinnerPosition,l=e.style,c=e.disableStyle,u=e.nonce,p=e.stopDelay,d=e.delay,h=e.startPosition,g=e.disableSameURL,f=e.shallowRouting,m=x(e,["children","ProgressComponent","color","height","options","spinnerPosition","style","disableStyle","nonce","stopDelay","delay","startPosition","disableSameURL","shallowRouting"]);return i.createElement(y,{color:s,height:n,options:o,spinnerPosition:a,style:l,disableStyle:c,nonce:u,stopDelay:p,delay:d,startPosition:h,disableSameURL:g,shallowRouting:f},i.createElement(r,E({stopDelay:p,delay:d,startPosition:h,disableSameURL:g,shallowRouting:f},m)),t)},R=function(e){return i.createElement(i.Suspense,null,i.createElement(j,f({},e)))},N=function(e){var t=e.children,r=x(e,["children"]);return i.createElement(C,E({ProgressComponent:R},r),t)}}}]);
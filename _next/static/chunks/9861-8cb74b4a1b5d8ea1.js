"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9861],{69614:function(t,e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});let i=globalThis,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new WeakMap,o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(s&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}},ut=t=>new o("string"==typeof t?t:t+"",void 0,r),$t=(t,e)=>{if(s)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let s of e){let e=document.createElement("style"),r=i.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=s.cssText,t.appendChild(e)}},l=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return ut(e)})(t):t,{is:a,defineProperty:h,getOwnPropertyDescriptor:d,getOwnPropertyNames:c,getOwnPropertySymbols:u,getPrototypeOf:g}=Object,_=globalThis,f=_.trustedTypes,m=f?f.emptyScript:"",A=_.reactiveElementPolyfillSupport,w=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},K=(t,e)=>!a(t,e),S={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:K};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);let v=class v extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=S){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&h(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:r}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return null==s?void 0:s.call(this)},set(e){let n=null==s?void 0:s.call(this);r.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??S}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;let t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){let t=this.properties,e=[...c(t),...u(t)];for(let i of e)this.createProperty(i,t[i])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,i]of e)this.elementProperties.set(t,i)}for(let[t,e]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach(t=>t(this))}addController(t){var e;(this._$E_??(this._$E_=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$E_)||e.delete(t)}_$ES(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $t(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$E_)||t.forEach(t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$E_)||t.forEach(t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){var i;let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(void 0!==r&&!0===s.reflect){let n=((null==(i=s.converter)?void 0:i.toAttribute)!==void 0?s.converter:y).toAttribute(e,s.type);this._$Em=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){var i;let s=this.constructor,r=s._$Eh.get(t);if(void 0!==r&&this._$Em!==r){let t=s.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:(null==(i=t.converter)?void 0:i.fromAttribute)!==void 0?t.converter:y;this._$Em=r,this[r]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??K)(s?r:this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let e=!1,i=this._$AL;try{(e=this.shouldUpdate(i))?(this.willUpdate(i),null==(t=this._$E_)||t.forEach(t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)}),this.update(i)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null==(e=this._$E_)||e.forEach(t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[w("elementProperties")]=new Map,v[w("finalized")]=new Map,null==A||A({ReactiveElement:v}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.0.2");let E=globalThis,C=E.trustedTypes,P=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,U="$lit$",I=`lit$${(Math.random()+"").slice(9)}$`,x="?"+I,H=`<${x}>`,G=document,O=()=>G.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,W=Array.isArray,Et=t=>W(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),D=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,B=/>/g,V=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),q=/'/g,Y=/"/g,J=/^(?:script|style|textarea|title)$/i,Ct=(t,...e)=>({_$litType$:1,strings:t,values:e}),F=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),Q=new WeakMap,X=G.createTreeWalker(G,129);function lt(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==P?P.createHTML(e):e}let wt=(t,e)=>{let i=t.length-1,s=[],r,n=2===e?"<svg>":"",o=z;for(let e=0;e<i;e++){let i=t[e],l,a,h=-1,d=0;for(;d<i.length&&(o.lastIndex=d,null!==(a=o.exec(i)));)d=o.lastIndex,o===z?"!--"===a[1]?o=j:void 0!==a[1]?o=B:void 0!==a[2]?(J.test(a[2])&&(r=RegExp("</"+a[2],"g")),o=V):void 0!==a[3]&&(o=V):o===V?">"===a[0]?(o=r??z,h=-1):void 0===a[1]?h=-2:(h=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?V:'"'===a[3]?Y:q):o===Y||o===q?o=V:o===j||o===B?o=z:(o=V,r=void 0);let c=o===V&&t[e+1].startsWith("/>")?" ":"";n+=o===z?i+H:h>=0?(s.push(l),i.slice(0,h)+U+i.slice(h)+I+c):i+I+(-2===h?e:c)}return[lt(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};let R=class R{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0,o=t.length-1,l=this.parts,[a,h]=wt(t,e);if(this.el=R.createElement(a,i),X.currentNode=this.el.content,2===e){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=X.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(let t of s.getAttributeNames())if(t.endsWith(U)){let e=h[n++],i=s.getAttribute(t).split(I),o=/([.?@])?(.*)/.exec(e);l.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?Pt:"?"===o[1]?Tt:"@"===o[1]?Ot:k}),s.removeAttribute(t)}else t.startsWith(I)&&(l.push({type:6,index:r}),s.removeAttribute(t));if(J.test(s.tagName)){let t=s.textContent.split(I),e=t.length-1;if(e>0){s.textContent=C?C.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],O()),X.nextNode(),l.push({type:2,index:++r});s.append(t[e],O())}}}else if(8===s.nodeType){if(s.data===x)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(I,t+1));)l.push({type:7,index:r}),t+=I.length-1}}r++}}static createElement(t,e){let i=G.createElement("template");return i.innerHTML=t,i}};function b(t,e,i=t,s){var r,n;if(e===F)return e;let o=void 0!==s?null==(r=i._$Co)?void 0:r[s]:i._$Cl,l=N(e)?void 0:e._$litDirective$;return(null==o?void 0:o.constructor)!==l&&(null==(n=null==o?void 0:o._$AO)||n.call(o,!1),void 0===l?o=void 0:(o=new l(t))._$AT(t,i,s),void 0!==s?(i._$Co??(i._$Co=[]))[s]=o:i._$Cl=o),void 0!==o&&(e=b(t,o._$AS(t,e.values),o,s)),e}let tt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=((null==t?void 0:t.creationScope)??G).importNode(e,!0);X.currentNode=s;let r=X.nextNode(),n=0,o=0,l=i[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new M(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new Nt(r,this,t)),this._$AV.push(e),l=i[++o]}n!==(null==l?void 0:l.index)&&(r=X.nextNode(),n++)}return X.currentNode=G,s}p(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}};let M=class M{get _$AU(){var t;return(null==(t=this._$AM)?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(null==s?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&(null==t?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){N(t=b(this,t,e))?t===Z||null==t||""===t?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):Et(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==Z&&N(this._$AH)?this._$AA.nextSibling.data=t:this.$(G.createTextNode(t)),this._$AH=t}g(t){var e;let{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=R.createElement(lt(s.h,s.h[0]),this.options)),s);if((null==(e=this._$AH)?void 0:e._$AD)===r)this._$AH.p(i);else{let t=new tt(r,this),e=t.u(this.options);t.p(i),this.$(e),this._$AH=t}}_$AC(t){let e=Q.get(t.strings);return void 0===e&&Q.set(t.strings,e=new R(t)),e}T(t){W(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new M(this.k(O()),this.k(O()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null==(i=this._$AP)||i.call(this,!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}};let k=class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Z}_$AI(t,e=this,i,s){let r=this.strings,n=!1;if(void 0===r)(n=!N(t=b(this,t,e,0))||t!==this._$AH&&t!==F)&&(this._$AH=t);else{let s,o;let l=t;for(t=r[0],s=0;s<r.length-1;s++)(o=b(this,l[i+s],e,s))===F&&(o=this._$AH[s]),n||(n=!N(o)||o!==this._$AH[s]),o===Z?t=Z:t!==Z&&(t+=(o??"")+r[s+1]),this._$AH[s]=o}n&&!s&&this.O(t)}O(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};let Pt=class Pt extends k{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===Z?void 0:t}};let Tt=class Tt extends k{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==Z)}};let Ot=class Ot extends k{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=b(this,t,e,0)??Z)===F)return;let i=this._$AH,s=t===Z&&i!==Z||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==Z&&(i===Z||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;"function"==typeof this._$AH?this._$AH.call((null==(e=this.options)?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}};let Nt=class Nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}};let te=E.litHtmlPolyfillSupport;null==te||te(R,M),(E.litHtmlVersions??(E.litHtmlVersions=[])).push("3.1.0");let Rt=(t,e,i)=>{let s=(null==i?void 0:i.renderBefore)??e,r=s._$litPart$;if(void 0===r){let t=(null==i?void 0:i.renderBefore)??null;s._$litPart$=r=new M(e.insertBefore(O(),t),t,void 0,i??{})}return r._$AI(t),r},ti=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;let e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Rt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return F}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ti._$litElement$=!0,ti.finalized=!0,null==(td=globalThis.litElementHydrateSupport)||td.call(globalThis,{LitElement:ti});let ts=globalThis.litElementPolyfillSupport;null==ts||ts({LitElement:ti}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");let tr={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:K},xt=(t=tr,e,i)=>{let{kind:s,metadata:r}=i,n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(i.name,t),"accessor"===s){let{name:s}=i;return{set(i){let r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t)},init(e){return void 0!==e&&this.C(s,void 0,t),e}}}if("setter"===s){let{name:s}=i;return function(i){let r=this[s];e.call(this,i),this.requestUpdate(s,r,t)}}throw Error("Unsupported decorator location: "+s)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $(t){return(e,i)=>"object"==typeof i?xt(t,e,i):((t,e,i)=>{let s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ht=t=>void 0===t.strings,tn=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}},T=(t,e)=>{var i;let s=t._$AN;if(void 0===s)return!1;for(let t of s)null==(i=t._$AO)||i.call(t,e,!1),T(t,e);return!0},L=t=>{let e,i;do{if(void 0===(e=t._$AM))break;(i=e._$AN).delete(t),t=e}while((null==i?void 0:i.size)===0)},dt=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),zt(e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Wt(t){void 0!==this._$AN?(L(this),this._$AM=t,dt(this)):this._$AM=t}function Dt(t,e=!1,i=0){let s=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size){if(e){if(Array.isArray(s))for(let t=i;t<s.length;t++)T(s[t],!1),L(s[t]);else null!=s&&(T(s,!1),L(s))}else T(this,t)}}let zt=t=>{2==t.type&&(t._$AP??(t._$AP=Dt),t._$AQ??(t._$AQ=Wt))};let Bt=class Bt extends tn{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),dt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,s;t!==this.isConnected&&(this.isConnected=t,t?null==(i=this.reconnected)||i.call(this):null==(s=this.disconnected)||s.call(this)),e&&(T(this,t),L(this))}setValue(t){if(Ht(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;let jt=()=>new Vt;let Vt=class Vt{};let to=new WeakMap,tl=(th=class extends Bt{render(t){return Z}update(t,[e]){var i;let s=e!==this.G;return s&&void 0!==this.G&&this.ot(void 0),(s||this.rt!==this.lt)&&(this.G=e,this.ct=null==(i=t.options)?void 0:i.host,this.ot(this.lt=t.element)),Z}ot(t){if("function"==typeof this.G){let e=this.ct??globalThis,i=to.get(e);void 0===i&&(i=new WeakMap,to.set(e,i)),void 0!==i.get(this.G)&&this.G.call(this.ct,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){var t,e;return"function"==typeof this.G?null==(t=to.get(this.ct??globalThis))?void 0:t.get(this.G):null==(e=this.G)?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}},(...t)=>({_$litDirective$:th,values:t}));var ta,th,td,tc=Object.defineProperty,tu=Object.getOwnPropertyDescriptor,p=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?tu(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&tc(e,i,n),n};e.GiscusWidget=class extends ti{constructor(){super(),this.GISCUS_SESSION_KEY="giscus-session",this.GISCUS_DEFAULT_HOST="https://giscus.app",this.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",this.__session="",this._iframeRef=jt(),this.messageEventHandler=this.handleMessageEvent.bind(this),this.hasLoaded=!1,this.host=this.GISCUS_DEFAULT_HOST,this.strict="0",this.reactionsEnabled="1",this.emitMetadata="0",this.inputPosition="bottom",this.theme="light",this.lang="en",this.loading="eager",this.setupSession(),window.addEventListener("message",this.messageEventHandler)}get iframeRef(){var t;return null==(t=this._iframeRef)?void 0:t.value}get _host(){try{return new URL(this.host),this.host}catch{return this.GISCUS_DEFAULT_HOST}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("message",this.messageEventHandler)}_formatError(t){return`[giscus] An error occurred. Error message: "${t}".`}setupSession(){let t=location.href,e=new URL(t),i=localStorage.getItem(this.GISCUS_SESSION_KEY),s=e.searchParams.get("giscus")??"";if(this.__session="",s){localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(s)),this.__session=s,e.searchParams.delete("giscus"),e.hash="",history.replaceState(void 0,document.title,e.toString());return}if(i)try{this.__session=JSON.parse(i)}catch(t){localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn(`${this._formatError(null==t?void 0:t.message)} Session has been cleared.`)}}signOut(){localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",this.update(new Map)}handleMessageEvent(t){if(t.origin!==this._host)return;let{data:e}=t;if(!("object"==typeof e&&e.giscus))return;if(this.iframeRef&&e.giscus.resizeHeight&&(this.iframeRef.style.height=`${e.giscus.resizeHeight}px`),e.giscus.signOut){console.info("[giscus] User has logged out. Session has been cleared."),this.signOut();return}if(!e.giscus.error)return;let i=e.giscus.error;if(i.includes("Bad credentials")||i.includes("Invalid state value")||i.includes("State has expired")){if(null!==localStorage.getItem(this.GISCUS_SESSION_KEY)){console.warn(`${this._formatError(i)} Session has been cleared.`),this.signOut();return}console.error(`${this._formatError(i)} No session is stored initially. ${this.ERROR_SUGGESTION}`)}if(i.includes("Discussion not found")){console.warn(`[giscus] ${i}. A new discussion will be created if a comment/reaction is submitted.`);return}console.error(`${this._formatError(i)} ${this.ERROR_SUGGESTION}`)}sendMessage(t){var e;null!=(e=this.iframeRef)&&e.contentWindow&&this.hasLoaded&&this.iframeRef.contentWindow.postMessage({giscus:t},this._host)}updateConfig(){let t={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:"1"===this.strict,reactionsEnabled:"1"===this.reactionsEnabled,emitMetadata:"1"===this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(t)}firstUpdated(){var t;null==(t=this.iframeRef)||t.addEventListener("load",()=>{var t;null==(t=this.iframeRef)||t.classList.remove("loading"),this.hasLoaded=!0,this.updateConfig()})}requestUpdate(t,e,i){if(!this.hasUpdated||"host"===t){super.requestUpdate(t,e,i);return}this.updateConfig()}getMetaContent(t,e=!1){let i=e?`meta[property='og:${t}'],`:"",s=document.querySelector(i+`meta[name='${t}']`);return s?s.content:""}_getCleanedUrl(){let t=new URL(location.href);return t.searchParams.delete("giscus"),t.hash="",t}getTerm(){switch(this.mapping){case"url":return this._getCleanedUrl().toString();case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term??"";case"number":return"";default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}getNumber(){return"number"===this.mapping?this.term??"":""}getIframeSrc(){let t=this._getCleanedUrl().toString(),e=`${t}${this.id?"#"+this.id:""}`,i=this.getMetaContent("description",!0),s=this.getMetaContent("giscus:backlink")||t,r={origin:e,session:this.__session,repo:this.repo,repoId:this.repoId??"",category:this.category??"",categoryId:this.categoryId??"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:i,backLink:s},n=this._host,o=this.lang?`/${this.lang}`:"",l=new URLSearchParams(r);return`${n}${o}/widget?${l.toString()}`}render(){return Ct`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${tl(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `}},e.GiscusWidget.styles=((t,...e)=>{let i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new o(i,t,r)})`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light dark;
    }

    iframe.loading {
      opacity: 0;
    }
  `,p([$({reflect:!0})],e.GiscusWidget.prototype,"host",2),p([$({reflect:!0})],e.GiscusWidget.prototype,"repo",2),p([$({reflect:!0})],e.GiscusWidget.prototype,"repoId",2),p([$({reflect:!0})],e.GiscusWidget.prototype,"category",2),p([$({reflect:!0})],e.GiscusWidget.prototype,"categoryId",2),p([$({reflect:!0})],e.GiscusWidget.prototype,"mapping",2),p([$({reflect:!0})],e.GiscusWidget.prototype,"term",2),p([$({reflect:!0})],e.GiscusWidget.prototype,"strict",2),p([$({reflect:!0})],e.GiscusWidget.prototype,"reactionsEnabled",2),p([$({reflect:!0})],e.GiscusWidget.prototype,"emitMetadata",2),p([$({reflect:!0})],e.GiscusWidget.prototype,"inputPosition",2),p([$({reflect:!0})],e.GiscusWidget.prototype,"theme",2),p([$({reflect:!0})],e.GiscusWidget.prototype,"lang",2),p([$({reflect:!0})],e.GiscusWidget.prototype,"loading",2),e.GiscusWidget=p([(ta="giscus-widget",customElements.get(ta)?t=>t:(t,e)=>{void 0!==e?e.addInitializer(()=>{customElements.define(ta,t)}):customElements.define(ta,t)})],e.GiscusWidget)},58071:function(t,e,i){let s=i(85893),r=i(67294);t.exports=function({id:t,host:e,repo:n,repoId:o,category:l,categoryId:a,mapping:h,term:d,strict:c,reactionsEnabled:u,emitMetadata:g,inputPosition:_,theme:f,lang:m,loading:A}){let[y,S]=r.useState(!1);return r.useEffect(()=>{y||(Promise.resolve().then(()=>i(69614)),S(!0))},[]),y?s.jsx("giscus-widget",{id:t,host:e,repo:n,repoid:o,category:l,categoryid:a,mapping:h,term:d,strict:c,reactionsenabled:u,emitmetadata:g,inputposition:_,theme:f,lang:m,loading:A}):null}},99861:function(t,e,i){var s=i(58071);e.Z=s}}]);
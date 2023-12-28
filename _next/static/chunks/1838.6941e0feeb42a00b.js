"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1838],{18786:function(t,e,r){r.d(e,{S:function(){return i},Z:function(){return a}});var i="__aa-highlight__",a="__/aa-highlight__"},47334:function(t,e,r){function getAttributeValueByPath(t,e){return e.reduce(function(t,e){return t&&t[e]},t)}r.d(e,{T:function(){return parseAlgoliaHitHighlight}});var i=r(18786);function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=Array(e);r<e;r++)i[r]=t[r];return i}function parseAlgoliaHitHighlight(t){var e,r,a,l=t.hit,n=t.attribute,u=Array.isArray(n)?n:[n],s=getAttributeValueByPath(l,["_highlightResult"].concat(function(t){if(Array.isArray(t))return _arrayLikeToArray(t)}(u)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(u)||function(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(t,e)}}(u)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),["value"]));return"string"!=typeof s&&(s=getAttributeValueByPath(l,u)||""),a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{get:function(){return t},add:function(e){var r=t[t.length-1];(null==r?void 0:r.isHighlighted)===e.isHighlighted?t[t.length-1]={value:r.value+e.value,isHighlighted:r.isHighlighted}:t.push(e)}}}((r=(e=s.split(i.S)).shift())?[{value:r,isHighlighted:!1}]:[]),e.forEach(function(t){var e=t.split(i.Z);a.add({value:e[0],isHighlighted:!0}),""!==e[1]&&a.add({value:e[1],isHighlighted:!1})}),a.get()}},7323:function(t,e,r){r.d(e,{y:function(){return Highlight}});var i=r(47334),a=r(67294);function Highlight(t){let{hit:e,attribute:r,tagName:l="mark"}=t;return(0,a.createElement)(a.Fragment,{},(0,i.T)({hit:e,attribute:r}).map((t,e)=>{let{value:r,isHighlighted:i}=t;return i?(0,a.createElement)(l,{key:e},r):r}))}},81838:function(t,e,r){r.r(e),r.d(e,{default:function(){return TestiCard}});var i=r(85893),a=r(5152),l=r.n(a),n=r(7323);let u=l()(()=>r.e(1664).then(r.t.bind(r,41664,23)),{loadableGenerated:{webpack:()=>[41664]}}),s=l()(()=>Promise.all([r.e(9755),r.e(920)]).then(r.t.bind(r,89755,23)),{loadableGenerated:{webpack:()=>[89755]}});function TestiCard(t){var e,r;return(0,i.jsxs)("div",{className:"p-card group relative mx-0 h-fit w-full space-y-3 overflow-visible px-0 py-4 text-justify hover:bg-base-200",children:[(0,i.jsx)("div",{className:"w-full px-3",children:(0,i.jsxs)(u,{"data-tip":"Visit website",target:"_blank",href:null!==(r=null!==(e=t.link)&&void 0!==e?e:t.addUrl)&&void 0!==r?r:"#",className:"tooltip flex w-full items-center gap-2 lg:items-start",children:[(0,i.jsx)("div",{children:(0,i.jsx)("div",{className:"relative h-12 w-12 overflow-hidden rounded-full ring ring-base-300",children:(0,i.jsx)(s,{placeholder:"blur",blurDataURL:t.imgBlurData,src:t.imgUrl,alt:t.fullName,objectFit:"cover",layout:"fill"})})}),(0,i.jsxs)("div",{className:"text-left tracking-wider",children:[(0,i.jsx)("p",{style:{whiteSpace:"pre-line"},className:"text-sm font-bold",children:(0,i.jsx)(n.y,{hit:t,attribute:"fullName"})}),(0,i.jsx)("p",{style:{whiteSpace:"pre-line"},className:"text-xs",children:(0,i.jsx)(n.y,{hit:t,attribute:"position"})})]})]})}),(0,i.jsx)("p",{style:{whiteSpace:"pre-line"},className:"mx-4 text-xs leading-relaxed md:mx-3",children:(0,i.jsx)(n.y,{hit:t,attribute:"text"})})]})}}}]);
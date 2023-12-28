"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7161],{97161:function(e,n,t){t.r(n),t.d(n,{default:function(){return MapOn}});var a=t(85893),s=t(67294),r=t(37054);let i=s.forwardRef(function({title:e,titleId:n,...t},a){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":n},t),e?s.createElement("title",{id:n},e):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}),s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"}))});var l=t(98774),o=t(6100),u=t(20562);function MapOn(){let{isLoaded:e}=(0,r.Db)({googleMapsApiKey:u.O.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY});return e?(0,a.jsx)(Map,{}):(0,a.jsx)(o.Z,{})}function Map(){let e=(0,l.f)(),[n,t]=(0,s.useState)(l.u);(0,s.useEffect)(()=>{t("winter"===e.themeName)},[e]);let o=(0,s.useMemo)(()=>({lat:u.O.NEXT_PUBLIC_GOOGLE_MAP_LAT,lng:u.O.NEXT_PUBLIC_GOOGLE_MAP_LNG}),[]),c=(0,s.useMemo)(()=>({styles:[{featureType:"all",elementType:"all",stylers:[{invert_lightness:!0},{saturation:10},{lightness:30},{gamma:.5},{hue:"#5e6b7b"}]}]}),[]),d=(0,s.useMemo)(()=>({styles:[]}),[]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"p-card mx-auto mb-2 flex h-fit w-fit items-center gap-2",children:[(0,a.jsx)(i,{className:"m-1 h-5 w-5"}),(0,a.jsx)("span",{children:u.O.NEXT_PUBLIC_GOOGLE_MAP_LOCATION_NAME})]}),(0,a.jsx)("div",{className:"mx-4 overflow-hidden rounded-xl",children:(0,a.jsx)(r.b6,{zoom:3,center:o,mapContainerClassName:"h-96 w-full",options:n?d:c,children:(0,a.jsx)(r.jC,{position:o})})})]})}},6100:function(e,n,t){t.d(n,{Z:function(){return AbsoluteLoading}});var a=t(85893),s=t(91244);function AbsoluteLoading(){return(0,a.jsx)("span",{className:"absolute mx-auto w-full ",children:(0,a.jsx)(s.Z,{})})}},91244:function(e,n,t){t.d(n,{Z:function(){return Loading}});var a=t(85893);function Loading(){return(0,a.jsxs)("div",{className:"flex justify-center gap-2",children:[(0,a.jsx)("span",{className:"loading loading-infinity"}),(0,a.jsx)("span",{className:"animate-pulse",children:"Loading..."})]})}}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{10255:(e,t,r)=>{"use strict";function n(e){let{moduleIds:t}=e;return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return n}}),r(95155),r(47650),r(85744),r(20589)},17828:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"workAsyncStorageInstance",{enumerable:!0,get:function(){return n}});let n=(0,r(64054).createAsyncLocalStorage)()},32961:(e,t,r)=>{Promise.resolve().then(r.bind(r,52959))},35695:(e,t,r)=>{"use strict";var n=r(18999);r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}})},36645:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let n=r(88229)._(r(67357));function o(e,t){var r;let o={};"function"==typeof e&&(o.loader=e);let a={...o,...t};return(0,n.default)({...a,modules:null==(r=a.loadableGenerated)?void 0:r.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},52959:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>S});var n=r(95155),o=r(3131),a=r(16691),l=r(70058),i=r(93751),s=r(81001),u=r(90557),c=r(8141),d=r(83347),f=(0,r(86467).A)("outline","info-circle","IconInfoCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 9h.01",key:"svg-1"}],["path",{d:"M11 12h1v4h1",key:"svg-2"}]]),h=r(36645),p=r.n(h),m=r(12115);let g=async(e,t)=>{let r="\n    [out:json][timeout:90];\n    node(around:".concat(t,",").concat(e.toString(),')["amenity"~"restaurant|cafe|bar|pub|fast_food|ice_cream"];\n    out;\n  '),n=await fetch("https://overpass-api.de/api/interpreter",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"data="+encodeURIComponent(r)});return await n.json()};var b=r(97287),y=r(69604),v=r(26761),j=r(26903);let w=e=>{let{height:t,min:r,max:o,value:a,onValueChange:i,reload:s}=e;return(0,n.jsx)(b.Paper,{shadow:"sm",radius:"md",p:"md",withBorder:!0,h:t,children:(0,n.jsxs)(l.Flex,{gap:"md",justify:"center",align:"flex-end",direction:"row",wrap:"nowrap",children:[(0,n.jsx)(y.Box,{maw:400,style:{width:"100%"},children:(0,n.jsx)(v.Slider,{w:"100%",size:"md",radius:"md",marks:[{value:r,label:"".concat(r," m")},{value:100,label:"100 m"},{value:250,label:"250 m"},{value:500,label:"500 m"},{value:750,label:"750 m"},{value:o,label:"".concat(o," m")}],min:r,max:o,step:10,value:a,onChangeEnd:i,label:e=>"".concat(e," m"),restrictToMarks:!0})}),(0,n.jsx)(j.Button,{color:"green",variant:"filled",onClick:s,radius:"md",children:"Search"})]})})};var x=r(35695);let _=p()(()=>Promise.all([r.e(484),r.e(761),r.e(350)]).then(r.bind(r,87350)),{loadableGenerated:{webpack:()=>[87350]},ssr:!1}),S=()=>{let e=(0,x.useRouter)(),t=(0,o.useSafeMantineTheme)(),[r,h]=(0,m.useState)(100),[p,b]=(0,m.useState)(!1),[y,v]=(0,m.useState)(!1),j=(0,m.useMemo)(()=>[46.0649489,11.1233195],[]),[S,k]=(0,m.useState)(null),[P,O]=(0,m.useState)(null);return(0,m.useEffect)(()=>{navigator.geolocation&&navigator.geolocation.watchPosition(e=>{k([e.coords.latitude,e.coords.longitude])},e=>{console.error("Error getting user position:",e)},{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},[]),(0,m.useEffect)(()=>{let e=async()=>{v(!0);try{let e=await g(S||j,r);O(e.elements),b(!1)}catch(e){console.error("Error fetching data:",e)}finally{v(!1)}};(S||p)&&e()},[S,p]),(0,n.jsxs)(a.AppShell,{header:{height:60},padding:"md",children:[(0,n.jsx)(a.AppShell.Header,{children:(0,n.jsxs)(l.Flex,{h:60,bg:"green",gap:"md",justify:"center",align:"center",direction:"row",wrap:"nowrap",style:{position:"relative"},children:[(0,n.jsx)(i.Title,{order:1,style:{flex:1,textAlign:"center"},children:"NearBites"}),(0,n.jsx)(s.ActionIcon,{variant:"outline",color:"black",radius:"md",size:"md",onClick:()=>{e.push("/about")},style:{position:"absolute",right:t.spacing.md},children:(0,n.jsx)(f,{})})]})}),(0,n.jsxs)(a.AppShell.Main,{children:[(0,n.jsx)(w,{height:"8vh",min:50,max:1e3,value:r,onValueChange:h,reload:()=>{b(!0)}}),(0,n.jsx)(u.Space,{h:"md"}),!y&&P?(0,n.jsx)(_,{data:P,height:"78vh",userPosition:S||j}):(0,n.jsx)(c.Center,{children:(0,n.jsx)(d.Loader,{color:"green"})})]})]})}},62146:(e,t,r)=>{"use strict";function n(e){let{reason:t,children:r}=e;return r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return n}}),r(45262)},64054:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{bindSnapshot:function(){return l},createAsyncLocalStorage:function(){return a},createSnapshot:function(){return i}});let r=Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"),"__NEXT_ERROR_CODE",{value:"E504",enumerable:!1,configurable:!0});class n{disable(){throw r}getStore(){}run(){throw r}exit(){throw r}enterWith(){throw r}static bind(e){return e}}let o="undefined"!=typeof globalThis&&globalThis.AsyncLocalStorage;function a(){return o?new o:new n}function l(e){return o?o.bind(e):n.bind(e)}function i(){return o?o.snapshot():function(e,...t){return e(...t)}}},67357:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let n=r(95155),o=r(12115),a=r(62146);function l(e){return{default:e&&"default"in e?e.default:e}}r(10255);let i={loader:()=>Promise.resolve(l(()=>null)),loading:null,ssr:!0},s=function(e){let t={...i,...e},r=(0,o.lazy)(()=>t.loader().then(l)),s=t.loading;function u(e){let l=s?(0,n.jsx)(s,{isLoading:!0,pastDelay:!0,error:null}):null,i=!t.ssr||!!t.loading,u=i?o.Suspense:o.Fragment,c=t.ssr?(0,n.jsxs)(n.Fragment,{children:[null,(0,n.jsx)(r,{...e})]}):(0,n.jsx)(a.BailoutToCSR,{reason:"next/dynamic",children:(0,n.jsx)(r,{...e})});return(0,n.jsx)(u,{...i?{fallback:l}:{},children:c})}return u.displayName="LoadableComponent",u}},85744:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"workAsyncStorage",{enumerable:!0,get:function(){return n.workAsyncStorageInstance}});let n=r(17828)},86467:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var n=r(12115),o={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};let a=(e,t,r,a)=>{let l=(0,n.forwardRef)((r,l)=>{let{color:i="currentColor",size:s=24,stroke:u=2,title:c,className:d,children:f,...h}=r;return(0,n.createElement)("svg",{ref:l,...o[e],width:s,height:s,className:["tabler-icon","tabler-icon-".concat(t),d].join(" "),..."filled"===e?{fill:i}:{strokeWidth:u,stroke:i},...h},[c&&(0,n.createElement)("title",{key:"svg-title"},c),...a.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(f)?f:[f]])});return l.displayName="".concat(r),l}}},e=>{var t=t=>e(e.s=t);e.O(0,[428,167,441,684,358],()=>t(32961)),_N_E=e.O()}]);
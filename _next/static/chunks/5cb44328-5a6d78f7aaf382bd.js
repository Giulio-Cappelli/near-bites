"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[532],{93877:(e,t,n)=>{n.d(t,{It:()=>el,Mk:()=>I,SV:()=>c,T3:()=>D,bv:()=>er,ck:()=>S,iQ:()=>J,s9:()=>Q,we:()=>Z});var r,o=n(12115),u=n(16696),l=n(86301);n(47650);var i=n(11668);function c(e){return o.useMemo(()=>e.every(e=>null==e)?null:t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})},e)}let s={...r||(r=n.t(o,2))},a=s.useInsertionEffect||(e=>e());function f(e){let t=o.useRef(()=>{});return a(()=>{t.current=e}),o.useCallback(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)},[])}let d="ArrowUp",v="ArrowDown",m="ArrowLeft",p="ArrowRight";function E(e,t){let{startingIndex:n=-1,decrement:r=!1,disabledIndices:o,amount:u=1}=void 0===t?{}:t,l=e.current,i=n;do i+=r?-u:u;while(i>=0&&i<=l.length-1&&function(e,t,n){if(n)return n.includes(t);let r=e[t];return null==r||r.hasAttribute("disabled")||"true"===r.getAttribute("aria-disabled")}(l,i,o));return i}var g="undefined"!=typeof document?o.useLayoutEffect:o.useEffect;()=>{},()=>{};let b=!1,R=0,h=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+R++,y=s.useId||function(){let[e,t]=o.useState(()=>b?h():void 0);return g(()=>{null==e&&t(h())},[]),o.useEffect(()=>{b=!0},[]),e},w=o.createContext(null),x=o.createContext(null),C=()=>{var e;return(null==(e=o.useContext(w))?void 0:e.id)||null},k=()=>o.useContext(x);function L(e){return"data-floating-ui-"+e}function M(e){let t=(0,o.useRef)(e);return g(()=>{t.current=e}),t}let T=L("safe-polygon");function P(e,t,n){return n&&!(0,u.Go)(n)?0:"number"==typeof e?e:null==e?void 0:e[t]}function I(e,t){void 0===t&&(t={});let{open:n,onOpenChange:r,dataRef:i,events:c,elements:s}=e,{enabled:a=!0,delay:d=0,handleClose:v=null,mouseOnly:m=!1,restMs:p=0,move:E=!0}=t,b=k(),R=C(),h=M(v),y=M(d),w=M(n),x=o.useRef(),L=o.useRef(-1),I=o.useRef(),q=o.useRef(-1),_=o.useRef(!0),A=o.useRef(!1),D=o.useRef(()=>{}),S=o.useRef(!1),W=o.useCallback(()=>{var e;let t=null==(e=i.current.openEvent)?void 0:e.type;return(null==t?void 0:t.includes("mouse"))&&"mousedown"!==t},[i]);o.useEffect(()=>{if(a)return c.on("openchange",e),()=>{c.off("openchange",e)};function e(e){let{open:t}=e;t||(clearTimeout(L.current),clearTimeout(q.current),_.current=!0,S.current=!1)}},[a,c]),o.useEffect(()=>{if(!a||!h.current||!n)return;function e(e){W()&&r(!1,e,"hover")}let t=(0,u.YE)(s.floating).documentElement;return t.addEventListener("mouseleave",e),()=>{t.removeEventListener("mouseleave",e)}},[s.floating,n,r,a,h,W]);let Y=o.useCallback(function(e,t,n){void 0===t&&(t=!0),void 0===n&&(n="hover");let o=P(y.current,"close",x.current);o&&!I.current?(clearTimeout(L.current),L.current=window.setTimeout(()=>r(!1,e,n),o)):t&&(clearTimeout(L.current),r(!1,e,n))},[y,r]),K=f(()=>{D.current(),I.current=void 0}),B=f(()=>{if(A.current){let e=(0,u.YE)(s.floating).body;e.style.pointerEvents="",e.removeAttribute(T),A.current=!1}}),O=f(()=>!!i.current.openEvent&&["click","mousedown"].includes(i.current.openEvent.type));o.useEffect(()=>{if(a&&(0,l.vq)(s.domReference)){var e;let r=s.domReference;return n&&r.addEventListener("mouseleave",c),null==(e=s.floating)||e.addEventListener("mouseleave",c),E&&r.addEventListener("mousemove",t,{once:!0}),r.addEventListener("mouseenter",t),r.addEventListener("mouseleave",o),()=>{var e;n&&r.removeEventListener("mouseleave",c),null==(e=s.floating)||e.removeEventListener("mouseleave",c),E&&r.removeEventListener("mousemove",t),r.removeEventListener("mouseenter",t),r.removeEventListener("mouseleave",o)}}function t(e){if(clearTimeout(L.current),_.current=!1,m&&!(0,u.Go)(x.current)||p>0&&!P(y.current,"open"))return;let t=P(y.current,"open",x.current);t?L.current=window.setTimeout(()=>{w.current||r(!0,e,"hover")},t):n||r(!0,e,"hover")}function o(e){if(O())return;D.current();let t=(0,u.YE)(s.floating);if(clearTimeout(q.current),S.current=!1,h.current&&i.current.floatingContext){n||clearTimeout(L.current),I.current=h.current({...i.current.floatingContext,tree:b,x:e.clientX,y:e.clientY,onClose(){B(),K(),O()||Y(e,!0,"safe-polygon")}});let r=I.current;t.addEventListener("mousemove",r),D.current=()=>{t.removeEventListener("mousemove",r)};return}"touch"===x.current&&(0,u.gR)(s.floating,e.relatedTarget)||Y(e)}function c(e){!O()&&i.current.floatingContext&&(null==h.current||h.current({...i.current.floatingContext,tree:b,x:e.clientX,y:e.clientY,onClose(){B(),K(),O()||Y(e)}})(e))}},[s,a,e,m,p,E,Y,K,B,r,n,w,b,y,h,i,O]),g(()=>{var e,t;if(a&&n&&null!=(e=h.current)&&e.__options.blockPointerEvents&&W()){A.current=!0;let e=s.floating;if((0,l.vq)(s.domReference)&&e){let n=(0,u.YE)(s.floating).body;n.setAttribute(T,"");let r=s.domReference,o=null==b||null==(t=b.nodesRef.current.find(e=>e.id===R))||null==(t=t.context)?void 0:t.elements.floating;return o&&(o.style.pointerEvents=""),n.style.pointerEvents="none",r.style.pointerEvents="auto",e.style.pointerEvents="auto",()=>{n.style.pointerEvents="",r.style.pointerEvents="",e.style.pointerEvents=""}}}},[a,n,R,s,b,h,W]),g(()=>{n||(x.current=void 0,S.current=!1,K(),B())},[n,K,B]),o.useEffect(()=>()=>{K(),clearTimeout(L.current),clearTimeout(q.current),B()},[a,s.domReference,K,B]);let X=o.useMemo(()=>{function e(e){x.current=e.pointerType}return{onPointerDown:e,onPointerEnter:e,onMouseMove(e){let{nativeEvent:t}=e;function o(){_.current||w.current||r(!0,t,"hover")}(!m||(0,u.Go)(x.current))&&!n&&0!==p&&(!S.current||!(e.movementX**2+e.movementY**2<2))&&(clearTimeout(q.current),"touch"===x.current?o():(S.current=!0,q.current=window.setTimeout(o,p)))}}},[m,r,n,w,p]),z=o.useMemo(()=>({onMouseEnter(){clearTimeout(L.current)},onMouseLeave(e){O()||Y(e.nativeEvent,!1)}}),[Y,O]);return o.useMemo(()=>a?{reference:X,floating:z}:{},[a,X,z])}let q=()=>{},_=o.createContext({delay:0,initialDelay:0,timeoutMs:0,currentId:null,setCurrentId:q,setState:q,isInstantPhase:!1}),A=()=>o.useContext(_);function D(e){let{children:t,delay:n,timeoutMs:r=0}=e,[u,l]=o.useReducer((e,t)=>({...e,...t}),{delay:n,timeoutMs:r,initialDelay:n,currentId:null,isInstantPhase:!1}),i=o.useRef(null),c=o.useCallback(e=>{l({currentId:e})},[]);return g(()=>{u.currentId?null===i.current?i.current=u.currentId:u.isInstantPhase||l({isInstantPhase:!0}):(u.isInstantPhase&&l({isInstantPhase:!1}),i.current=null)},[u.currentId,u.isInstantPhase]),o.createElement(_.Provider,{value:o.useMemo(()=>({...u,setState:l,setCurrentId:c}),[u,c])},t)}function S(e,t){void 0===t&&(t={});let{open:n,onOpenChange:r,floatingId:o}=e,{id:u,enabled:l=!0}=t,i=null!=u?u:o,c=A(),{currentId:s,setCurrentId:a,initialDelay:f,setState:d,timeoutMs:v}=c;return g(()=>{l&&s&&(d({delay:{open:1,close:P(f,"close")}}),s!==i&&r(!1))},[l,i,r,d,s,f]),g(()=>{function e(){r(!1),d({delay:f,currentId:null})}if(l&&s&&!n&&s===i){if(v){let t=window.setTimeout(e,v);return()=>{clearTimeout(t)}}e()}},[l,n,d,s,i,r,f,v]),g(()=>{l&&a!==q&&n&&a(i)},[l,n,a,i]),c}let W=0;function Y(e,t){let n=e.filter(e=>{var n;return e.parentId===t&&(null==(n=e.context)?void 0:n.open)}),r=n;for(;r.length;)r=e.filter(e=>{var t;return null==(t=r)?void 0:t.some(t=>{var n;return e.parentId===t.id&&(null==(n=e.context)?void 0:n.open)})}),n=n.concat(r);return n}let K=new WeakMap,B=new WeakSet,O={},X=0,z=e=>e&&(e.host||z(e.parentNode)),F=(e,t)=>t.map(t=>{if(e.contains(t))return t;let n=z(t);return e.contains(n)?n:null}).filter(e=>null!=e),H=()=>({getShadowRoot:!0,displayCheck:"function"==typeof ResizeObserver&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function G(e,t){let n=tabbable(e,H());"prev"===t&&n.reverse();let r=n.indexOf(activeElement(getDocument(e)));return n.slice(r+1)[0]}let N="data-floating-ui-focusable",V=null,U={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},$={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},j=e=>{var t,n;return{escapeKey:"boolean"==typeof e?e:null!=(t=null==e?void 0:e.escapeKey)&&t,outsidePress:"boolean"==typeof e?e:null==(n=null==e?void 0:e.outsidePress)||n}};function Q(e,t){void 0===t&&(t={});let{open:n,onOpenChange:r,elements:i,dataRef:c}=e,{enabled:s=!0,escapeKey:a=!0,outsidePress:d=!0,outsidePressEvent:v="pointerdown",referencePress:m=!1,referencePressEvent:p="pointerdown",ancestorScroll:E=!1,bubbles:g,capture:b}=t,R=k(),h=f("function"==typeof d?d:()=>!1),y="function"==typeof d?h:d,w=o.useRef(!1),x=o.useRef(!1),{escapeKey:C,outsidePress:M}=j(g),{escapeKey:T,outsidePress:P}=j(b),I=o.useRef(!1),q=f(e=>{var t;if(!n||!s||!a||"Escape"!==e.key||I.current)return;let o=null==(t=c.current.floatingContext)?void 0:t.nodeId,l=R?Y(R.nodesRef.current,o):[];if(!C&&(e.stopPropagation(),l.length>0)){let e=!0;if(l.forEach(t=>{var n;if(null!=(n=t.context)&&n.open&&!t.context.dataRef.current.__escapeKeyBubbles){e=!1;return}}),!e)return}r(!1,(0,u.O_)(e)?e.nativeEvent:e,"escape-key")}),_=f(e=>{var t;let n=()=>{var t;q(e),null==(t=(0,u.EW)(e))||t.removeEventListener("keydown",n)};null==(t=(0,u.EW)(e))||t.addEventListener("keydown",n)}),A=f(e=>{var t;let n=w.current;w.current=!1;let o=x.current;if(x.current=!1,"click"===v&&o||n||"function"==typeof y&&!y(e))return;let s=(0,u.EW)(e),a="["+L("inert")+"]",f=(0,u.YE)(i.floating).querySelectorAll(a),d=(0,l.vq)(s)?s:null;for(;d&&!(0,l.eu)(d);){let e=(0,l.$4)(d);if((0,l.eu)(e)||!(0,l.vq)(e))break;d=e}if(f.length&&(0,l.vq)(s)&&!(0,u.tZ)(s)&&!(0,u.gR)(s,i.floating)&&Array.from(f).every(e=>!(0,u.gR)(d,e)))return;if((0,l.sb)(s)&&W){let t=s.clientWidth>0&&s.scrollWidth>s.clientWidth,n=s.clientHeight>0&&s.scrollHeight>s.clientHeight,r=n&&e.offsetX>s.clientWidth;if(n&&"rtl"===(0,l.L9)(s).direction&&(r=e.offsetX<=s.offsetWidth-s.clientWidth),r||t&&e.offsetY>s.clientHeight)return}let m=null==(t=c.current.floatingContext)?void 0:t.nodeId,p=R&&Y(R.nodesRef.current,m).some(t=>{var n;return(0,u.F2)(e,null==(n=t.context)?void 0:n.elements.floating)});if((0,u.F2)(e,i.floating)||(0,u.F2)(e,i.domReference)||p)return;let E=R?Y(R.nodesRef.current,m):[];if(E.length>0){let e=!0;if(E.forEach(t=>{var n;if(null!=(n=t.context)&&n.open&&!t.context.dataRef.current.__outsidePressBubbles){e=!1;return}}),!e)return}r(!1,e,"outside-press")}),D=f(e=>{var t;let n=()=>{var t;A(e),null==(t=(0,u.EW)(e))||t.removeEventListener(v,n)};null==(t=(0,u.EW)(e))||t.addEventListener(v,n)});o.useEffect(()=>{if(!n||!s)return;c.current.__escapeKeyBubbles=C,c.current.__outsidePressBubbles=M;let e=-1;function t(e){r(!1,e,"ancestor-scroll")}function o(){window.clearTimeout(e),I.current=!0}function f(){e=window.setTimeout(()=>{I.current=!1},5*!!(0,l.Tc)())}let d=(0,u.YE)(i.floating);a&&(d.addEventListener("keydown",T?_:q,T),d.addEventListener("compositionstart",o),d.addEventListener("compositionend",f)),y&&d.addEventListener(v,P?D:A,P);let m=[];return E&&((0,l.vq)(i.domReference)&&(m=(0,l.v9)(i.domReference)),(0,l.vq)(i.floating)&&(m=m.concat((0,l.v9)(i.floating))),!(0,l.vq)(i.reference)&&i.reference&&i.reference.contextElement&&(m=m.concat((0,l.v9)(i.reference.contextElement)))),(m=m.filter(e=>{var t;return e!==(null==(t=d.defaultView)?void 0:t.visualViewport)})).forEach(e=>{e.addEventListener("scroll",t,{passive:!0})}),()=>{a&&(d.removeEventListener("keydown",T?_:q,T),d.removeEventListener("compositionstart",o),d.removeEventListener("compositionend",f)),y&&d.removeEventListener(v,P?D:A,P),m.forEach(e=>{e.removeEventListener("scroll",t)}),window.clearTimeout(e)}},[c,i,a,y,v,n,r,E,s,C,M,q,T,_,A,P,D]),o.useEffect(()=>{w.current=!1},[y,v]);let S=o.useMemo(()=>({onKeyDown:q,[U[p]]:e=>{m&&r(!1,e.nativeEvent,"reference-press")}}),[q,r,m,p]),W=o.useMemo(()=>({onKeyDown:q,onMouseDown(){x.current=!0},onMouseUp(){x.current=!0},[$[v]]:()=>{w.current=!0}}),[q,v]);return o.useMemo(()=>s?{reference:S,floating:W}:{},[s,S,W])}function Z(e){void 0===e&&(e={});let{nodeId:t}=e,n=function(e){let{open:t=!1,onOpenChange:n,elements:r}=e,u=y(),l=o.useRef({}),[i]=o.useState(()=>(function(){let e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach(e=>e(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter(e=>e!==n))||[])}}})()),c=null!=C(),[s,a]=o.useState(r.reference),d=f((e,t,r)=>{l.current.openEvent=e?t:void 0,i.emit("openchange",{open:e,event:t,reason:r,nested:c}),null==n||n(e,t,r)}),v=o.useMemo(()=>({setPositionReference:a}),[]),m=o.useMemo(()=>({reference:s||r.reference||null,floating:r.floating||null,domReference:r.reference}),[s,r.reference,r.floating]);return o.useMemo(()=>({dataRef:l,open:t,onOpenChange:d,elements:m,events:i,floatingId:u,refs:v}),[t,d,m,i,u,v])}({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||n,u=r.elements,[c,s]=o.useState(null),[a,d]=o.useState(null),v=(null==u?void 0:u.domReference)||c,m=o.useRef(null),p=k();g(()=>{v&&(m.current=v)},[v]);let E=(0,i.we)({...e,elements:{...u,...a&&{reference:a}}}),b=o.useCallback(e=>{let t=(0,l.vq)(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;d(t),E.refs.setReference(t)},[E.refs]),R=o.useCallback(e=>{((0,l.vq)(e)||null===e)&&(m.current=e,s(e)),((0,l.vq)(E.refs.reference.current)||null===E.refs.reference.current||null!==e&&!(0,l.vq)(e))&&E.refs.setReference(e)},[E.refs]),h=o.useMemo(()=>({...E.refs,setReference:R,setPositionReference:b,domReference:m}),[E.refs,R,b]),w=o.useMemo(()=>({...E.elements,domReference:v}),[E.elements,v]),x=o.useMemo(()=>({...E,...r,refs:h,elements:w,nodeId:t}),[E,h,w,t,r]);return g(()=>{r.dataRef.current.floatingContext=x;let e=null==p?void 0:p.nodesRef.current.find(e=>e.id===t);e&&(e.context=x)}),o.useMemo(()=>({...E,context:x,refs:h,elements:w}),[E,h,w,x])}function J(e,t){void 0===t&&(t={});let{open:n,onOpenChange:r,events:i,dataRef:c,elements:s}=e,{enabled:a=!0,visibleOnly:f=!0}=t,d=o.useRef(!1),v=o.useRef(),m=o.useRef(!0);o.useEffect(()=>{if(!a)return;let e=(0,l.zk)(s.domReference);function t(){!n&&(0,l.sb)(s.domReference)&&s.domReference===(0,u.RS)((0,u.YE)(s.domReference))&&(d.current=!0)}function r(){m.current=!0}return e.addEventListener("blur",t),e.addEventListener("keydown",r,!0),()=>{e.removeEventListener("blur",t),e.removeEventListener("keydown",r,!0)}},[s.domReference,n,a]),o.useEffect(()=>{if(a)return i.on("openchange",e),()=>{i.off("openchange",e)};function e(e){let{reason:t}=e;("reference-press"===t||"escape-key"===t)&&(d.current=!0)}},[i,a]),o.useEffect(()=>()=>{clearTimeout(v.current)},[]);let p=o.useMemo(()=>({onPointerDown(e){(0,u.Pg)(e.nativeEvent)||(m.current=!1)},onMouseLeave(){d.current=!1},onFocus(e){if(d.current)return;let t=(0,u.EW)(e.nativeEvent);if(f&&(0,l.vq)(t))try{if((0,u.nr)()&&(0,u.cX)())throw Error();if(!t.matches(":focus-visible"))return}catch(e){if(!m.current&&!(0,u.$u)(t))return}r(!0,e.nativeEvent,"focus")},onBlur(e){d.current=!1;let t=e.relatedTarget,n=e.nativeEvent,o=(0,l.vq)(t)&&t.hasAttribute(L("focus-guard"))&&"outside"===t.getAttribute("data-type");v.current=window.setTimeout(()=>{var e;let l=(0,u.RS)(s.domReference?s.domReference.ownerDocument:document);if(t||l!==s.domReference){if((0,u.gR)(null==(e=c.current.floatingContext)?void 0:e.refs.floating.current,l)||(0,u.gR)(s.domReference,l)||o)return;r(!1,n,"focus")}})}}),[c,s.domReference,r,f]);return o.useMemo(()=>a?{reference:p}:{},[a,p])}let ee="active",et="selected";function en(e,t,n){let r=new Map,o="item"===n,u=e;if(o&&e){let{[ee]:t,[et]:n,...r}=e;u=r}return{..."floating"===n&&{tabIndex:-1,[N]:""},...u,...t.map(t=>{let r=t?t[n]:null;return"function"==typeof r?e?r(e):null:r}).concat(e).reduce((e,t)=>(t&&Object.entries(t).forEach(t=>{let[n,u]=t;if(!(o&&[ee,et].includes(n))){if(0===n.indexOf("on")){if(r.has(n)||r.set(n,[]),"function"==typeof u){var l;null==(l=r.get(n))||l.push(u),e[n]=function(){for(var e,t=arguments.length,o=Array(t),u=0;u<t;u++)o[u]=arguments[u];return null==(e=r.get(n))?void 0:e.map(e=>e(...o)).find(e=>void 0!==e)}}}else e[n]=u}}),e),{})}}function er(e){void 0===e&&(e=[]);let t=e.map(e=>null==e?void 0:e.reference),n=e.map(e=>null==e?void 0:e.floating),r=e.map(e=>null==e?void 0:e.item),u=o.useCallback(t=>en(t,e,"reference"),t),l=o.useCallback(t=>en(t,e,"floating"),n),i=o.useCallback(t=>en(t,e,"item"),r);return o.useMemo(()=>({getReferenceProps:u,getFloatingProps:l,getItemProps:i}),[u,l,i])}function eo(e,t,n){switch(e){case"vertical":return t;case"horizontal":return n;default:return t||n}}let eu=new Map([["select","listbox"],["combobox","listbox"],["label",!1]]);function el(e,t){var n;void 0===t&&(t={});let{open:r,floatingId:u}=e,{enabled:l=!0,role:i="dialog"}=t,c=null!=(n=eu.get(i))?n:i,s=y(),a=null!=C(),f=o.useMemo(()=>"tooltip"===c||"label"===i?{["aria-"+("label"===i?"labelledby":"describedby")]:r?u:void 0}:{"aria-expanded":r?"true":"false","aria-haspopup":"alertdialog"===c?"dialog":c,"aria-controls":r?u:void 0,..."listbox"===c&&{role:"combobox"},..."menu"===c&&{id:s},..."menu"===c&&a&&{role:"menuitem"},..."select"===i&&{"aria-autocomplete":"none"},..."combobox"===i&&{"aria-autocomplete":"list"}},[c,u,a,r,s,i]),d=o.useMemo(()=>{let e={id:u,...c&&{role:c}};return"tooltip"===c||"label"===i?e:{...e,..."menu"===c&&{"aria-labelledby":s}}},[c,u,s,i]),v=o.useCallback(e=>{let{active:t,selected:n}=e,r={role:"option",...t&&{id:u+"-option"}};switch(i){case"select":return{...r,"aria-selected":t&&n};case"combobox":return{...r,...t&&{"aria-selected":!0}}}return{}},[u,i]);return o.useMemo(()=>l?{reference:f,floating:d,item:v}:{},[l,f,d,v])}}}]);
(function(){const w=document.createElement("link").relList;if(w&&w.supports&&w.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))f(p);new MutationObserver(p=>{for(const d of p)if(d.type==="childList")for(const g of d.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&f(g)}).observe(document,{childList:!0,subtree:!0});function o(p){const d={};return p.integrity&&(d.integrity=p.integrity),p.referrerPolicy&&(d.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?d.credentials="include":p.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function f(p){if(p.ep)return;p.ep=!0;const d=o(p);fetch(p.href,d)}})();var hs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Hp(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Nu={exports:{}},Ki={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd;function Gp(){if(Xd)return Ki;Xd=1;var u=Symbol.for("react.transitional.element"),w=Symbol.for("react.fragment");function o(f,p,d){var g=null;if(d!==void 0&&(g=""+d),p.key!==void 0&&(g=""+p.key),"key"in p){d={};for(var m in p)m!=="key"&&(d[m]=p[m])}else d=p;return p=d.ref,{$$typeof:u,type:f,key:g,ref:p!==void 0?p:null,props:d}}return Ki.Fragment=w,Ki.jsx=o,Ki.jsxs=o,Ki}var Yd;function qp(){return Yd||(Yd=1,Nu.exports=Gp()),Nu.exports}var s=qp(),Du={exports:{}},ze={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd;function Lp(){if(Zd)return ze;Zd=1;var u=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),g=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),E=Symbol.iterator;function T(z){return z===null||typeof z!="object"?null:(z=E&&z[E]||z["@@iterator"],typeof z=="function"?z:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,x={};function A(z,R,U){this.props=z,this.context=R,this.refs=x,this.updater=U||b}A.prototype.isReactComponent={},A.prototype.setState=function(z,R){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,R,"setState")},A.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function j(){}j.prototype=A.prototype;function D(z,R,U){this.props=z,this.context=R,this.refs=x,this.updater=U||b}var M=D.prototype=new j;M.constructor=D,k(M,A.prototype),M.isPureReactComponent=!0;var V=Array.isArray,H={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function L(z,R,U,ae,le,ce){return U=ce.ref,{$$typeof:u,type:z,key:R,ref:U!==void 0?U:null,props:ce}}function fe(z,R){return L(z.type,R,void 0,void 0,void 0,z.props)}function $(z){return typeof z=="object"&&z!==null&&z.$$typeof===u}function me(z){var R={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(U){return R[U]})}var be=/\/+/g;function B(z,R){return typeof z=="object"&&z!==null&&z.key!=null?me(""+z.key):R.toString(36)}function Y(){}function h(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(Y,Y):(z.status="pending",z.then(function(R){z.status==="pending"&&(z.status="fulfilled",z.value=R)},function(R){z.status==="pending"&&(z.status="rejected",z.reason=R)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function ee(z,R,U,ae,le){var ce=typeof z;(ce==="undefined"||ce==="boolean")&&(z=null);var ve=!1;if(z===null)ve=!0;else switch(ce){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(z.$$typeof){case u:case w:ve=!0;break;case S:return ve=z._init,ee(ve(z._payload),R,U,ae,le)}}if(ve)return le=le(z),ve=ae===""?"."+B(z,0):ae,V(le)?(U="",ve!=null&&(U=ve.replace(be,"$&/")+"/"),ee(le,R,U,"",function(ne){return ne})):le!=null&&($(le)&&(le=fe(le,U+(le.key==null||z&&z.key===le.key?"":(""+le.key).replace(be,"$&/")+"/")+ve)),R.push(le)),1;ve=0;var Le=ae===""?".":ae+":";if(V(z))for(var Se=0;Se<z.length;Se++)ae=z[Se],ce=Le+B(ae,Se),ve+=ee(ae,R,U,ce,le);else if(Se=T(z),typeof Se=="function")for(z=Se.call(z),Se=0;!(ae=z.next()).done;)ae=ae.value,ce=Le+B(ae,Se++),ve+=ee(ae,R,U,ce,le);else if(ce==="object"){if(typeof z.then=="function")return ee(h(z),R,U,ae,le);throw R=String(z),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.")}return ve}function Z(z,R,U){if(z==null)return z;var ae=[],le=0;return ee(z,ae,"","",function(ce){return R.call(U,ce,le++)}),ae}function Q(z){if(z._status===-1){var R=z._result;R=R(),R.then(function(U){(z._status===0||z._status===-1)&&(z._status=1,z._result=U)},function(U){(z._status===0||z._status===-1)&&(z._status=2,z._result=U)}),z._status===-1&&(z._status=0,z._result=R)}if(z._status===1)return z._result.default;throw z._result}var pe=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var R=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(R))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function se(){}return ze.Children={map:Z,forEach:function(z,R,U){Z(z,function(){R.apply(this,arguments)},U)},count:function(z){var R=0;return Z(z,function(){R++}),R},toArray:function(z){return Z(z,function(R){return R})||[]},only:function(z){if(!$(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},ze.Component=A,ze.Fragment=o,ze.Profiler=p,ze.PureComponent=D,ze.StrictMode=f,ze.Suspense=_,ze.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,ze.__COMPILER_RUNTIME={__proto__:null,c:function(z){return H.H.useMemoCache(z)}},ze.cache=function(z){return function(){return z.apply(null,arguments)}},ze.cloneElement=function(z,R,U){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var ae=k({},z.props),le=z.key,ce=void 0;if(R!=null)for(ve in R.ref!==void 0&&(ce=void 0),R.key!==void 0&&(le=""+R.key),R)!G.call(R,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&R.ref===void 0||(ae[ve]=R[ve]);var ve=arguments.length-2;if(ve===1)ae.children=U;else if(1<ve){for(var Le=Array(ve),Se=0;Se<ve;Se++)Le[Se]=arguments[Se+2];ae.children=Le}return L(z.type,le,void 0,void 0,ce,ae)},ze.createContext=function(z){return z={$$typeof:g,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:d,_context:z},z},ze.createElement=function(z,R,U){var ae,le={},ce=null;if(R!=null)for(ae in R.key!==void 0&&(ce=""+R.key),R)G.call(R,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(le[ae]=R[ae]);var ve=arguments.length-2;if(ve===1)le.children=U;else if(1<ve){for(var Le=Array(ve),Se=0;Se<ve;Se++)Le[Se]=arguments[Se+2];le.children=Le}if(z&&z.defaultProps)for(ae in ve=z.defaultProps,ve)le[ae]===void 0&&(le[ae]=ve[ae]);return L(z,ce,void 0,void 0,null,le)},ze.createRef=function(){return{current:null}},ze.forwardRef=function(z){return{$$typeof:m,render:z}},ze.isValidElement=$,ze.lazy=function(z){return{$$typeof:S,_payload:{_status:-1,_result:z},_init:Q}},ze.memo=function(z,R){return{$$typeof:y,type:z,compare:R===void 0?null:R}},ze.startTransition=function(z){var R=H.T,U={};H.T=U;try{var ae=z(),le=H.S;le!==null&&le(U,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(se,pe)}catch(ce){pe(ce)}finally{H.T=R}},ze.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},ze.use=function(z){return H.H.use(z)},ze.useActionState=function(z,R,U){return H.H.useActionState(z,R,U)},ze.useCallback=function(z,R){return H.H.useCallback(z,R)},ze.useContext=function(z){return H.H.useContext(z)},ze.useDebugValue=function(){},ze.useDeferredValue=function(z,R){return H.H.useDeferredValue(z,R)},ze.useEffect=function(z,R,U){var ae=H.H;if(typeof U=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ae.useEffect(z,R)},ze.useId=function(){return H.H.useId()},ze.useImperativeHandle=function(z,R,U){return H.H.useImperativeHandle(z,R,U)},ze.useInsertionEffect=function(z,R){return H.H.useInsertionEffect(z,R)},ze.useLayoutEffect=function(z,R){return H.H.useLayoutEffect(z,R)},ze.useMemo=function(z,R){return H.H.useMemo(z,R)},ze.useOptimistic=function(z,R){return H.H.useOptimistic(z,R)},ze.useReducer=function(z,R,U){return H.H.useReducer(z,R,U)},ze.useRef=function(z){return H.H.useRef(z)},ze.useState=function(z){return H.H.useState(z)},ze.useSyncExternalStore=function(z,R,U){return H.H.useSyncExternalStore(z,R,U)},ze.useTransition=function(){return H.H.useTransition()},ze.version="19.1.1",ze}var Qd;function Ku(){return Qd||(Qd=1,Du.exports=Lp()),Du.exports}var je=Ku(),zu={exports:{}},Ji={},Ru={exports:{}},Ou={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kd;function Vp(){return Kd||(Kd=1,(function(u){function w(Z,Q){var pe=Z.length;Z.push(Q);e:for(;0<pe;){var se=pe-1>>>1,z=Z[se];if(0<p(z,Q))Z[se]=Q,Z[pe]=z,pe=se;else break e}}function o(Z){return Z.length===0?null:Z[0]}function f(Z){if(Z.length===0)return null;var Q=Z[0],pe=Z.pop();if(pe!==Q){Z[0]=pe;e:for(var se=0,z=Z.length,R=z>>>1;se<R;){var U=2*(se+1)-1,ae=Z[U],le=U+1,ce=Z[le];if(0>p(ae,pe))le<z&&0>p(ce,ae)?(Z[se]=ce,Z[le]=pe,se=le):(Z[se]=ae,Z[U]=pe,se=U);else if(le<z&&0>p(ce,pe))Z[se]=ce,Z[le]=pe,se=le;else break e}}return Q}function p(Z,Q){var pe=Z.sortIndex-Q.sortIndex;return pe!==0?pe:Z.id-Q.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;u.unstable_now=function(){return d.now()}}else{var g=Date,m=g.now();u.unstable_now=function(){return g.now()-m}}var _=[],y=[],S=1,E=null,T=3,b=!1,k=!1,x=!1,A=!1,j=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;function V(Z){for(var Q=o(y);Q!==null;){if(Q.callback===null)f(y);else if(Q.startTime<=Z)f(y),Q.sortIndex=Q.expirationTime,w(_,Q);else break;Q=o(y)}}function H(Z){if(x=!1,V(Z),!k)if(o(_)!==null)k=!0,G||(G=!0,B());else{var Q=o(y);Q!==null&&ee(H,Q.startTime-Z)}}var G=!1,L=-1,fe=5,$=-1;function me(){return A?!0:!(u.unstable_now()-$<fe)}function be(){if(A=!1,G){var Z=u.unstable_now();$=Z;var Q=!0;try{e:{k=!1,x&&(x=!1,D(L),L=-1),b=!0;var pe=T;try{t:{for(V(Z),E=o(_);E!==null&&!(E.expirationTime>Z&&me());){var se=E.callback;if(typeof se=="function"){E.callback=null,T=E.priorityLevel;var z=se(E.expirationTime<=Z);if(Z=u.unstable_now(),typeof z=="function"){E.callback=z,V(Z),Q=!0;break t}E===o(_)&&f(_),V(Z)}else f(_);E=o(_)}if(E!==null)Q=!0;else{var R=o(y);R!==null&&ee(H,R.startTime-Z),Q=!1}}break e}finally{E=null,T=pe,b=!1}Q=void 0}}finally{Q?B():G=!1}}}var B;if(typeof M=="function")B=function(){M(be)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,h=Y.port2;Y.port1.onmessage=be,B=function(){h.postMessage(null)}}else B=function(){j(be,0)};function ee(Z,Q){L=j(function(){Z(u.unstable_now())},Q)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(Z){Z.callback=null},u.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):fe=0<Z?Math.floor(1e3/Z):5},u.unstable_getCurrentPriorityLevel=function(){return T},u.unstable_next=function(Z){switch(T){case 1:case 2:case 3:var Q=3;break;default:Q=T}var pe=T;T=Q;try{return Z()}finally{T=pe}},u.unstable_requestPaint=function(){A=!0},u.unstable_runWithPriority=function(Z,Q){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var pe=T;T=Z;try{return Q()}finally{T=pe}},u.unstable_scheduleCallback=function(Z,Q,pe){var se=u.unstable_now();switch(typeof pe=="object"&&pe!==null?(pe=pe.delay,pe=typeof pe=="number"&&0<pe?se+pe:se):pe=se,Z){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=pe+z,Z={id:S++,callback:Q,priorityLevel:Z,startTime:pe,expirationTime:z,sortIndex:-1},pe>se?(Z.sortIndex=pe,w(y,Z),o(_)===null&&Z===o(y)&&(x?(D(L),L=-1):x=!0,ee(H,pe-se))):(Z.sortIndex=z,w(_,Z),k||b||(k=!0,G||(G=!0,B()))),Z},u.unstable_shouldYield=me,u.unstable_wrapCallback=function(Z){var Q=T;return function(){var pe=T;T=Q;try{return Z.apply(this,arguments)}finally{T=pe}}}})(Ou)),Ou}var Jd;function Fp(){return Jd||(Jd=1,Ru.exports=Vp()),Ru.exports}var Bu={exports:{}},xt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Id;function Xp(){if(Id)return xt;Id=1;var u=Ku();function w(_){var y="https://react.dev/errors/"+_;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)y+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+_+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var f={d:{f:o,r:function(){throw Error(w(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},p=Symbol.for("react.portal");function d(_,y,S){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:E==null?null:""+E,children:_,containerInfo:y,implementation:S}}var g=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(_,y){if(_==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,xt.createPortal=function(_,y){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(w(299));return d(_,y,null,S)},xt.flushSync=function(_){var y=g.T,S=f.p;try{if(g.T=null,f.p=2,_)return _()}finally{g.T=y,f.p=S,f.d.f()}},xt.preconnect=function(_,y){typeof _=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,f.d.C(_,y))},xt.prefetchDNS=function(_){typeof _=="string"&&f.d.D(_)},xt.preinit=function(_,y){if(typeof _=="string"&&y&&typeof y.as=="string"){var S=y.as,E=m(S,y.crossOrigin),T=typeof y.integrity=="string"?y.integrity:void 0,b=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;S==="style"?f.d.S(_,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:E,integrity:T,fetchPriority:b}):S==="script"&&f.d.X(_,{crossOrigin:E,integrity:T,fetchPriority:b,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},xt.preinitModule=function(_,y){if(typeof _=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var S=m(y.as,y.crossOrigin);f.d.M(_,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&f.d.M(_)},xt.preload=function(_,y){if(typeof _=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var S=y.as,E=m(S,y.crossOrigin);f.d.L(_,S,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},xt.preloadModule=function(_,y){if(typeof _=="string")if(y){var S=m(y.as,y.crossOrigin);f.d.m(_,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else f.d.m(_)},xt.requestFormReset=function(_){f.d.r(_)},xt.unstable_batchedUpdates=function(_,y){return _(y)},xt.useFormState=function(_,y,S){return g.H.useFormState(_,y,S)},xt.useFormStatus=function(){return g.H.useHostTransitionStatus()},xt.version="19.1.1",xt}var $d;function oh(){if($d)return Bu.exports;$d=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(w){console.error(w)}}return u(),Bu.exports=Xp(),Bu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd;function Yp(){if(Wd)return Ji;Wd=1;var u=Fp(),w=Ku(),o=oh();function f(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(d(e)!==e)throw Error(f(188))}function _(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(f(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return m(i),e;if(l===a)return m(i),t;l=l.sibling}throw Error(f(188))}if(n.return!==a.return)n=i,a=l;else{for(var r=!1,v=i.child;v;){if(v===n){r=!0,n=i,a=l;break}if(v===a){r=!0,a=i,n=l;break}v=v.sibling}if(!r){for(v=l.child;v;){if(v===n){r=!0,n=l,a=i;break}if(v===a){r=!0,a=l,n=i;break}v=v.sibling}if(!r)throw Error(f(189))}}if(n.alternate!==a)throw Error(f(190))}if(n.tag!==3)throw Error(f(188));return n.stateNode.current===n?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,E=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),D=Symbol.for("react.consumer"),M=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),$=Symbol.for("react.activity"),me=Symbol.for("react.memo_cache_sentinel"),be=Symbol.iterator;function B(e){return e===null||typeof e!="object"?null:(e=be&&e[be]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Symbol.for("react.client.reference");function h(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Y?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case A:return"Profiler";case x:return"StrictMode";case H:return"Suspense";case G:return"SuspenseList";case $:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case M:return(e.displayName||"Context")+".Provider";case D:return(e._context.displayName||"Context")+".Consumer";case V:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case L:return t=e.displayName||null,t!==null?t:h(e.type)||"Memo";case fe:t=e._payload,e=e._init;try{return h(e(t))}catch{}}return null}var ee=Array.isArray,Z=w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pe={pending:!1,data:null,method:null,action:null},se=[],z=-1;function R(e){return{current:e}}function U(e){0>z||(e.current=se[z],se[z]=null,z--)}function ae(e,t){z++,se[z]=e.current,e.current=t}var le=R(null),ce=R(null),ve=R(null),Le=R(null);function Se(e,t){switch(ae(ve,t),ae(ce,e),ae(le,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?yd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=yd(t),e=vd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(le),ae(le,e)}function ne(){U(le),U(ce),U(ve)}function ge(e){e.memoizedState!==null&&ae(Le,e);var t=le.current,n=vd(t,e.type);t!==n&&(ae(ce,e),ae(le,n))}function Ne(e){ce.current===e&&(U(le),U(ce)),Le.current===e&&(U(Le),Fi._currentValue=pe)}var He=Object.prototype.hasOwnProperty,et=u.unstable_scheduleCallback,c=u.unstable_cancelCallback,ue=u.unstable_shouldYield,te=u.unstable_requestPaint,N=u.unstable_now,C=u.unstable_getCurrentPriorityLevel,F=u.unstable_ImmediatePriority,de=u.unstable_UserBlockingPriority,he=u.unstable_NormalPriority,I=u.unstable_LowPriority,_e=u.unstable_IdlePriority,xe=u.log,ye=u.unstable_setDisableYieldValue,Ee=null,Re=null;function De(e){if(typeof xe=="function"&&ye(e),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(Ee,e)}catch{}}var $e=Math.clz32?Math.clz32:Zn,Yn=Math.log,Mt=Math.LN2;function Zn(e){return e>>>=0,e===0?32:31-(Yn(e)/Mt|0)|0}var We=256,an=4194304;function Zt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function St(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var i=0,l=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var v=a&134217727;return v!==0?(a=v&~l,a!==0?i=Zt(a):(r&=v,r!==0?i=Zt(r):n||(n=v&~e,n!==0&&(i=Zt(n))))):(v=a&~l,v!==0?i=Zt(v):r!==0?i=Zt(r):n||(n=a&~e,n!==0&&(i=Zt(n)))),i===0?0:t!==0&&t!==i&&(t&l)===0&&(l=i&-i,n=t&-t,l>=n||l===32&&(n&4194048)!==0)?t:i}function bn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function vs(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tl(){var e=We;return We<<=1,(We&4194048)===0&&(We=256),e}function nl(){var e=an;return an<<=1,(an&62914560)===0&&(an=4194304),e}function da(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ha(e,t,n,a,i,l){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var v=e.entanglements,O=e.expirationTimes,J=e.hiddenUpdates;for(n=r&~n;0<n;){var ie=31-$e(n),oe=1<<ie;v[ie]=0,O[ie]=-1;var W=J[ie];if(W!==null)for(J[ie]=null,ie=0;ie<W.length;ie++){var P=W[ie];P!==null&&(P.lane&=-536870913)}n&=~oe}a!==0&&tc(e,a,0),l!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=l&~(r&~t))}function tc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-$e(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function nc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-$e(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}function bs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ac(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:Hd(e.type))}function kh(e,t){var n=Q.p;try{return Q.p=e,t()}finally{Q.p=n}}var xn=Math.random().toString(36).slice(2),vt="__reactFiber$"+xn,jt="__reactProps$"+xn,ma="__reactContainer$"+xn,ws="__reactEvents$"+xn,Th="__reactListeners$"+xn,Ch="__reactHandles$"+xn,ic="__reactResources$"+xn,ei="__reactMarker$"+xn;function Ss(e){delete e[vt],delete e[jt],delete e[ws],delete e[Th],delete e[Ch]}function pa(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ma]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Sd(e);e!==null;){if(n=e[vt])return n;e=Sd(e)}return t}e=n,n=e.parentNode}return null}function ga(e){if(e=e[vt]||e[ma]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function ti(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(f(33))}function _a(e){var t=e[ic];return t||(t=e[ic]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ft(e){e[ei]=!0}var lc=new Set,sc={};function Qn(e,t){ya(e,t),ya(e+"Capture",t)}function ya(e,t){for(sc[e]=t,e=0;e<t.length;e++)lc.add(t[e])}var Nh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rc={},uc={};function Dh(e){return He.call(uc,e)?!0:He.call(rc,e)?!1:Nh.test(e)?uc[e]=!0:(rc[e]=!0,!1)}function al(e,t,n){if(Dh(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function il(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function ln(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var js,cc;function va(e){if(js===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);js=t&&t[1]||"",cc=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+js+e+cc}var Es=!1;function As(e,t){if(!e||Es)return"";Es=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var oe=function(){throw Error()};if(Object.defineProperty(oe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(oe,[])}catch(P){var W=P}Reflect.construct(e,[],oe)}else{try{oe.call()}catch(P){W=P}e.call(oe.prototype)}}else{try{throw Error()}catch(P){W=P}(oe=e())&&typeof oe.catch=="function"&&oe.catch(function(){})}}catch(P){if(P&&W&&typeof P.stack=="string")return[P.stack,W.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),r=l[0],v=l[1];if(r&&v){var O=r.split(`
`),J=v.split(`
`);for(i=a=0;a<O.length&&!O[a].includes("DetermineComponentFrameRoot");)a++;for(;i<J.length&&!J[i].includes("DetermineComponentFrameRoot");)i++;if(a===O.length||i===J.length)for(a=O.length-1,i=J.length-1;1<=a&&0<=i&&O[a]!==J[i];)i--;for(;1<=a&&0<=i;a--,i--)if(O[a]!==J[i]){if(a!==1||i!==1)do if(a--,i--,0>i||O[a]!==J[i]){var ie=`
`+O[a].replace(" at new "," at ");return e.displayName&&ie.includes("<anonymous>")&&(ie=ie.replace("<anonymous>",e.displayName)),ie}while(1<=a&&0<=i);break}}}finally{Es=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?va(n):""}function zh(e){switch(e.tag){case 26:case 27:case 5:return va(e.type);case 16:return va("Lazy");case 13:return va("Suspense");case 19:return va("SuspenseList");case 0:case 15:return As(e.type,!1);case 11:return As(e.type.render,!1);case 1:return As(e.type,!0);case 31:return va("Activity");default:return""}}function oc(e){try{var t="";do t+=zh(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Rh(e){var t=fc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(r){a=""+r,l.call(this,r)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ll(e){e._valueTracker||(e._valueTracker=Rh(e))}function dc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=fc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function sl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Oh=/[\n"\\]/g;function Ht(e){return e.replace(Oh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ks(e,t,n,a,i,l,r,v){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ut(t)):e.value!==""+Ut(t)&&(e.value=""+Ut(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Ts(e,r,Ut(t)):n!=null?Ts(e,r,Ut(n)):a!=null&&e.removeAttribute("value"),i==null&&l!=null&&(e.defaultChecked=!!l),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+Ut(v):e.removeAttribute("name")}function hc(e,t,n,a,i,l,r,v){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||n!=null){if(!(l!=="submit"&&l!=="reset"||t!=null))return;n=n!=null?""+Ut(n):"",t=t!=null?""+Ut(t):n,v||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=v?e.checked:!!a,e.defaultChecked=!!a,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r)}function Ts(e,t,n){t==="number"&&sl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ba(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function mc(e,t,n){if(t!=null&&(t=""+Ut(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ut(n):""}function pc(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(f(92));if(ee(a)){if(1<a.length)throw Error(f(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Ut(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function xa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gc(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Bh.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function _c(e,t,n){if(t!=null&&typeof t!="object")throw Error(f(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&n[i]!==a&&gc(e,i,a)}else for(var l in t)t.hasOwnProperty(l)&&gc(e,l,t[l])}function Cs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Uh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rl(e){return Uh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ns=null;function Ds(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wa=null,Sa=null;function yc(e){var t=ga(e);if(t&&(e=t.stateNode)){var n=e[jt]||null;e:switch(e=t.stateNode,t.type){case"input":if(ks(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ht(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=a[jt]||null;if(!i)throw Error(f(90));ks(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&dc(a)}break e;case"textarea":mc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ba(e,!!n.multiple,t,!1)}}}var zs=!1;function vc(e,t,n){if(zs)return e(t,n);zs=!0;try{var a=e(t);return a}finally{if(zs=!1,(wa!==null||Sa!==null)&&(Zl(),wa&&(t=wa,e=Sa,Sa=wa=null,yc(t),e)))for(t=0;t<e.length;t++)yc(e[t])}}function ni(e,t){var n=e.stateNode;if(n===null)return null;var a=n[jt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(f(231,t,typeof n));return n}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rs=!1;if(sn)try{var ai={};Object.defineProperty(ai,"passive",{get:function(){Rs=!0}}),window.addEventListener("test",ai,ai),window.removeEventListener("test",ai,ai)}catch{Rs=!1}var wn=null,Os=null,ul=null;function bc(){if(ul)return ul;var e,t=Os,n=t.length,a,i="value"in wn?wn.value:wn.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var r=n-e;for(a=1;a<=r&&t[n-a]===i[l-a];a++);return ul=i.slice(e,1<a?1-a:void 0)}function cl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ol(){return!0}function xc(){return!1}function Et(e){function t(n,a,i,l,r){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=l,this.target=r,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(n=e[v],this[v]=n?n(l):l[v]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ol:xc,this.isPropagationStopped=xc,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=Et(Kn),ii=S({},Kn,{view:0,detail:0}),Hh=Et(ii),Bs,Ms,li,dl=S({},ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==li&&(li&&e.type==="mousemove"?(Bs=e.screenX-li.screenX,Ms=e.screenY-li.screenY):Ms=Bs=0,li=e),Bs)},movementY:function(e){return"movementY"in e?e.movementY:Ms}}),wc=Et(dl),Gh=S({},dl,{dataTransfer:0}),qh=Et(Gh),Lh=S({},ii,{relatedTarget:0}),Us=Et(Lh),Vh=S({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),Fh=Et(Vh),Xh=S({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yh=Et(Xh),Zh=S({},Kn,{data:0}),Sc=Et(Zh),Qh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ih(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jh[e])?!!t[e]:!1}function Hs(){return Ih}var $h=S({},ii,{key:function(e){if(e.key){var t=Qh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=cl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hs,charCode:function(e){return e.type==="keypress"?cl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?cl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wh=Et($h),Ph=S({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jc=Et(Ph),em=S({},ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hs}),tm=Et(em),nm=S({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),am=Et(nm),im=S({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lm=Et(im),sm=S({},Kn,{newState:0,oldState:0}),rm=Et(sm),um=[9,13,27,32],Gs=sn&&"CompositionEvent"in window,si=null;sn&&"documentMode"in document&&(si=document.documentMode);var cm=sn&&"TextEvent"in window&&!si,Ec=sn&&(!Gs||si&&8<si&&11>=si),Ac=" ",kc=!1;function Tc(e,t){switch(e){case"keyup":return um.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ja=!1;function om(e,t){switch(e){case"compositionend":return Cc(t);case"keypress":return t.which!==32?null:(kc=!0,Ac);case"textInput":return e=t.data,e===Ac&&kc?null:e;default:return null}}function fm(e,t){if(ja)return e==="compositionend"||!Gs&&Tc(e,t)?(e=bc(),ul=Os=wn=null,ja=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ec&&t.locale!=="ko"?null:t.data;default:return null}}var dm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dm[e.type]:t==="textarea"}function Dc(e,t,n,a){wa?Sa?Sa.push(a):Sa=[a]:wa=a,t=Wl(t,"onChange"),0<t.length&&(n=new fl("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var ri=null,ui=null;function hm(e){hd(e,0)}function hl(e){var t=ti(e);if(dc(t))return e}function zc(e,t){if(e==="change")return t}var Rc=!1;if(sn){var qs;if(sn){var Ls="oninput"in document;if(!Ls){var Oc=document.createElement("div");Oc.setAttribute("oninput","return;"),Ls=typeof Oc.oninput=="function"}qs=Ls}else qs=!1;Rc=qs&&(!document.documentMode||9<document.documentMode)}function Bc(){ri&&(ri.detachEvent("onpropertychange",Mc),ui=ri=null)}function Mc(e){if(e.propertyName==="value"&&hl(ui)){var t=[];Dc(t,ui,e,Ds(e)),vc(hm,t)}}function mm(e,t,n){e==="focusin"?(Bc(),ri=t,ui=n,ri.attachEvent("onpropertychange",Mc)):e==="focusout"&&Bc()}function pm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hl(ui)}function gm(e,t){if(e==="click")return hl(t)}function _m(e,t){if(e==="input"||e==="change")return hl(t)}function ym(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:ym;function ci(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!He.call(t,i)||!Ct(e[i],t[i]))return!1}return!0}function Uc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hc(e,t){var n=Uc(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uc(n)}}function Gc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=sl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=sl(e.document)}return t}function Vs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var vm=sn&&"documentMode"in document&&11>=document.documentMode,Ea=null,Fs=null,oi=null,Xs=!1;function Lc(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xs||Ea==null||Ea!==sl(a)||(a=Ea,"selectionStart"in a&&Vs(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),oi&&ci(oi,a)||(oi=a,a=Wl(Fs,"onSelect"),0<a.length&&(t=new fl("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ea)))}function Jn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Aa={animationend:Jn("Animation","AnimationEnd"),animationiteration:Jn("Animation","AnimationIteration"),animationstart:Jn("Animation","AnimationStart"),transitionrun:Jn("Transition","TransitionRun"),transitionstart:Jn("Transition","TransitionStart"),transitioncancel:Jn("Transition","TransitionCancel"),transitionend:Jn("Transition","TransitionEnd")},Ys={},Vc={};sn&&(Vc=document.createElement("div").style,"AnimationEvent"in window||(delete Aa.animationend.animation,delete Aa.animationiteration.animation,delete Aa.animationstart.animation),"TransitionEvent"in window||delete Aa.transitionend.transition);function In(e){if(Ys[e])return Ys[e];if(!Aa[e])return e;var t=Aa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vc)return Ys[e]=t[n];return e}var Fc=In("animationend"),Xc=In("animationiteration"),Yc=In("animationstart"),bm=In("transitionrun"),xm=In("transitionstart"),wm=In("transitioncancel"),Zc=In("transitionend"),Qc=new Map,Zs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zs.push("scrollEnd");function Kt(e,t){Qc.set(e,t),Qn(t,[e])}var Kc=new WeakMap;function Gt(e,t){if(typeof e=="object"&&e!==null){var n=Kc.get(e);return n!==void 0?n:(t={value:e,source:t,stack:oc(t)},Kc.set(e,t),t)}return{value:e,source:t,stack:oc(t)}}var qt=[],ka=0,Qs=0;function ml(){for(var e=ka,t=Qs=ka=0;t<e;){var n=qt[t];qt[t++]=null;var a=qt[t];qt[t++]=null;var i=qt[t];qt[t++]=null;var l=qt[t];if(qt[t++]=null,a!==null&&i!==null){var r=a.pending;r===null?i.next=i:(i.next=r.next,r.next=i),a.pending=i}l!==0&&Jc(n,i,l)}}function pl(e,t,n,a){qt[ka++]=e,qt[ka++]=t,qt[ka++]=n,qt[ka++]=a,Qs|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Ks(e,t,n,a){return pl(e,t,n,a),gl(e)}function Ta(e,t){return pl(e,null,null,t),gl(e)}function Jc(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var i=!1,l=e.return;l!==null;)l.childLanes|=n,a=l.alternate,a!==null&&(a.childLanes|=n),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(i=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,i&&t!==null&&(i=31-$e(n),e=l.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=n|536870912),l):null}function gl(e){if(50<Bi)throw Bi=0,eu=null,Error(f(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ca={};function Sm(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,t,n,a){return new Sm(e,t,n,a)}function Js(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rn(e,t){var n=e.alternate;return n===null?(n=Nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ic(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function _l(e,t,n,a,i,l){var r=0;if(a=e,typeof e=="function")Js(e)&&(r=1);else if(typeof e=="string")r=Ep(e,n,le.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case $:return e=Nt(31,n,t,i),e.elementType=$,e.lanes=l,e;case k:return $n(n.children,i,l,t);case x:r=8,i|=24;break;case A:return e=Nt(12,n,t,i|2),e.elementType=A,e.lanes=l,e;case H:return e=Nt(13,n,t,i),e.elementType=H,e.lanes=l,e;case G:return e=Nt(19,n,t,i),e.elementType=G,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case j:case M:r=10;break e;case D:r=9;break e;case V:r=11;break e;case L:r=14;break e;case fe:r=16,a=null;break e}r=29,n=Error(f(130,e===null?"null":typeof e,"")),a=null}return t=Nt(r,n,t,i),t.elementType=e,t.type=a,t.lanes=l,t}function $n(e,t,n,a){return e=Nt(7,e,a,t),e.lanes=n,e}function Is(e,t,n){return e=Nt(6,e,null,t),e.lanes=n,e}function $s(e,t,n){return t=Nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Na=[],Da=0,yl=null,vl=0,Lt=[],Vt=0,Wn=null,un=1,cn="";function Pn(e,t){Na[Da++]=vl,Na[Da++]=yl,yl=e,vl=t}function $c(e,t,n){Lt[Vt++]=un,Lt[Vt++]=cn,Lt[Vt++]=Wn,Wn=e;var a=un;e=cn;var i=32-$e(a)-1;a&=~(1<<i),n+=1;var l=32-$e(t)+i;if(30<l){var r=i-i%5;l=(a&(1<<r)-1).toString(32),a>>=r,i-=r,un=1<<32-$e(t)+i|n<<i|a,cn=l+e}else un=1<<l|n<<i|a,cn=e}function Ws(e){e.return!==null&&(Pn(e,1),$c(e,1,0))}function Ps(e){for(;e===yl;)yl=Na[--Da],Na[Da]=null,vl=Na[--Da],Na[Da]=null;for(;e===Wn;)Wn=Lt[--Vt],Lt[Vt]=null,cn=Lt[--Vt],Lt[Vt]=null,un=Lt[--Vt],Lt[Vt]=null}var wt=null,at=null,Fe=!1,ea=null,$t=!1,er=Error(f(519));function ta(e){var t=Error(f(418,""));throw hi(Gt(t,e)),er}function Wc(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[vt]=e,t[jt]=a,n){case"dialog":Ue("cancel",t),Ue("close",t);break;case"iframe":case"object":case"embed":Ue("load",t);break;case"video":case"audio":for(n=0;n<Ui.length;n++)Ue(Ui[n],t);break;case"source":Ue("error",t);break;case"img":case"image":case"link":Ue("error",t),Ue("load",t);break;case"details":Ue("toggle",t);break;case"input":Ue("invalid",t),hc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),ll(t);break;case"select":Ue("invalid",t);break;case"textarea":Ue("invalid",t),pc(t,a.value,a.defaultValue,a.children),ll(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||_d(t.textContent,n)?(a.popover!=null&&(Ue("beforetoggle",t),Ue("toggle",t)),a.onScroll!=null&&Ue("scroll",t),a.onScrollEnd!=null&&Ue("scrollend",t),a.onClick!=null&&(t.onclick=Pl),t=!0):t=!1,t||ta(e)}function Pc(e){for(wt=e.return;wt;)switch(wt.tag){case 5:case 13:$t=!1;return;case 27:case 3:$t=!0;return;default:wt=wt.return}}function fi(e){if(e!==wt)return!1;if(!Fe)return Pc(e),Fe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||gu(e.type,e.memoizedProps)),n=!n),n&&at&&ta(e),Pc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){at=It(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}at=null}}else t===27?(t=at,Hn(e.type)?(e=bu,bu=null,at=e):at=t):at=wt?It(e.stateNode.nextSibling):null;return!0}function di(){at=wt=null,Fe=!1}function eo(){var e=ea;return e!==null&&(Tt===null?Tt=e:Tt.push.apply(Tt,e),ea=null),e}function hi(e){ea===null?ea=[e]:ea.push(e)}var tr=R(null),na=null,on=null;function Sn(e,t,n){ae(tr,t._currentValue),t._currentValue=n}function fn(e){e._currentValue=tr.current,U(tr)}function nr(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function ar(e,t,n,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){var r=i.child;l=l.firstContext;e:for(;l!==null;){var v=l;l=i;for(var O=0;O<t.length;O++)if(v.context===t[O]){l.lanes|=n,v=l.alternate,v!==null&&(v.lanes|=n),nr(l.return,n,e),a||(r=null);break e}l=v.next}}else if(i.tag===18){if(r=i.return,r===null)throw Error(f(341));r.lanes|=n,l=r.alternate,l!==null&&(l.lanes|=n),nr(r,n,e),r=null}else r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===e){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}}function mi(e,t,n,a){e=null;for(var i=t,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var r=i.alternate;if(r===null)throw Error(f(387));if(r=r.memoizedProps,r!==null){var v=i.type;Ct(i.pendingProps.value,r.value)||(e!==null?e.push(v):e=[v])}}else if(i===Le.current){if(r=i.alternate,r===null)throw Error(f(387));r.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Fi):e=[Fi])}i=i.return}e!==null&&ar(t,e,n,a),t.flags|=262144}function bl(e){for(e=e.firstContext;e!==null;){if(!Ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function aa(e){na=e,on=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bt(e){return to(na,e)}function xl(e,t){return na===null&&aa(e),to(e,t)}function to(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},on===null){if(e===null)throw Error(f(308));on=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else on=on.next=t;return n}var jm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Em=u.unstable_scheduleCallback,Am=u.unstable_NormalPriority,ct={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ir(){return{controller:new jm,data:new Map,refCount:0}}function pi(e){e.refCount--,e.refCount===0&&Em(Am,function(){e.controller.abort()})}var gi=null,lr=0,za=0,Ra=null;function km(e,t){if(gi===null){var n=gi=[];lr=0,za=ru(),Ra={status:"pending",value:void 0,then:function(a){n.push(a)}}}return lr++,t.then(no,no),t}function no(){if(--lr===0&&gi!==null){Ra!==null&&(Ra.status="fulfilled");var e=gi;gi=null,za=0,Ra=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Tm(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var ao=Z.S;Z.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&km(e,t),ao!==null&&ao(e,t)};var ia=R(null);function sr(){var e=ia.current;return e!==null?e:Pe.pooledCache}function wl(e,t){t===null?ae(ia,ia.current):ae(ia,t.pool)}function io(){var e=sr();return e===null?null:{parent:ct._currentValue,pool:e}}var _i=Error(f(460)),lo=Error(f(474)),Sl=Error(f(542)),rr={then:function(){}};function so(e){return e=e.status,e==="fulfilled"||e==="rejected"}function jl(){}function ro(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(jl,jl),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,co(e),e;default:if(typeof t.status=="string")t.then(jl,jl);else{if(e=Pe,e!==null&&100<e.shellSuspendCounter)throw Error(f(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,co(e),e}throw yi=t,_i}}var yi=null;function uo(){if(yi===null)throw Error(f(459));var e=yi;return yi=null,e}function co(e){if(e===_i||e===Sl)throw Error(f(483))}var jn=!1;function ur(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function En(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function An(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ye&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=gl(e),Jc(e,null,n),t}return pl(e,a,t,n),gl(e)}function vi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,nc(e,n)}}function or(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};l===null?i=l=r:l=l.next=r,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var fr=!1;function bi(){if(fr){var e=Ra;if(e!==null)throw e}}function xi(e,t,n,a){fr=!1;var i=e.updateQueue;jn=!1;var l=i.firstBaseUpdate,r=i.lastBaseUpdate,v=i.shared.pending;if(v!==null){i.shared.pending=null;var O=v,J=O.next;O.next=null,r===null?l=J:r.next=J,r=O;var ie=e.alternate;ie!==null&&(ie=ie.updateQueue,v=ie.lastBaseUpdate,v!==r&&(v===null?ie.firstBaseUpdate=J:v.next=J,ie.lastBaseUpdate=O))}if(l!==null){var oe=i.baseState;r=0,ie=J=O=null,v=l;do{var W=v.lane&-536870913,P=W!==v.lane;if(P?(Ge&W)===W:(a&W)===W){W!==0&&W===za&&(fr=!0),ie!==null&&(ie=ie.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var Ce=e,ke=v;W=t;var Je=n;switch(ke.tag){case 1:if(Ce=ke.payload,typeof Ce=="function"){oe=Ce.call(Je,oe,W);break e}oe=Ce;break e;case 3:Ce.flags=Ce.flags&-65537|128;case 0:if(Ce=ke.payload,W=typeof Ce=="function"?Ce.call(Je,oe,W):Ce,W==null)break e;oe=S({},oe,W);break e;case 2:jn=!0}}W=v.callback,W!==null&&(e.flags|=64,P&&(e.flags|=8192),P=i.callbacks,P===null?i.callbacks=[W]:P.push(W))}else P={lane:W,tag:v.tag,payload:v.payload,callback:v.callback,next:null},ie===null?(J=ie=P,O=oe):ie=ie.next=P,r|=W;if(v=v.next,v===null){if(v=i.shared.pending,v===null)break;P=v,v=P.next,P.next=null,i.lastBaseUpdate=P,i.shared.pending=null}}while(!0);ie===null&&(O=oe),i.baseState=O,i.firstBaseUpdate=J,i.lastBaseUpdate=ie,l===null&&(i.shared.lanes=0),On|=r,e.lanes=r,e.memoizedState=oe}}function oo(e,t){if(typeof e!="function")throw Error(f(191,e));e.call(t)}function fo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)oo(n[e],t)}var Oa=R(null),El=R(0);function ho(e,t){e=yn,ae(El,e),ae(Oa,t),yn=e|t.baseLanes}function dr(){ae(El,yn),ae(Oa,Oa.current)}function hr(){yn=El.current,U(Oa),U(El)}var kn=0,Oe=null,Qe=null,rt=null,Al=!1,Ba=!1,la=!1,kl=0,wi=0,Ma=null,Cm=0;function lt(){throw Error(f(321))}function mr(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function pr(e,t,n,a,i,l){return kn=l,Oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Z.H=e===null||e.memoizedState===null?Io:$o,la=!1,l=n(a,i),la=!1,Ba&&(l=po(t,n,a,i)),mo(e),l}function mo(e){Z.H=Rl;var t=Qe!==null&&Qe.next!==null;if(kn=0,rt=Qe=Oe=null,Al=!1,wi=0,Ma=null,t)throw Error(f(300));e===null||dt||(e=e.dependencies,e!==null&&bl(e)&&(dt=!0))}function po(e,t,n,a){Oe=e;var i=0;do{if(Ba&&(Ma=null),wi=0,Ba=!1,25<=i)throw Error(f(301));if(i+=1,rt=Qe=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}Z.H=Mm,l=t(n,a)}while(Ba);return l}function Nm(){var e=Z.H,t=e.useState()[0];return t=typeof t.then=="function"?Si(t):t,e=e.useState()[0],(Qe!==null?Qe.memoizedState:null)!==e&&(Oe.flags|=1024),t}function gr(){var e=kl!==0;return kl=0,e}function _r(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function yr(e){if(Al){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Al=!1}kn=0,rt=Qe=Oe=null,Ba=!1,wi=kl=0,Ma=null}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Oe.memoizedState=rt=e:rt=rt.next=e,rt}function ut(){if(Qe===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var t=rt===null?Oe.memoizedState:rt.next;if(t!==null)rt=t,Qe=e;else{if(e===null)throw Oe.alternate===null?Error(f(467)):Error(f(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},rt===null?Oe.memoizedState=rt=e:rt=rt.next=e}return rt}function vr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Si(e){var t=wi;return wi+=1,Ma===null&&(Ma=[]),e=ro(Ma,e,t),t=Oe,(rt===null?t.memoizedState:rt.next)===null&&(t=t.alternate,Z.H=t===null||t.memoizedState===null?Io:$o),e}function Tl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Si(e);if(e.$$typeof===M)return bt(e)}throw Error(f(438,String(e)))}function br(e){var t=null,n=Oe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=Oe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=vr(),Oe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=me;return t.index++,n}function dn(e,t){return typeof t=="function"?t(e):t}function Cl(e){var t=ut();return xr(t,Qe,e)}function xr(e,t,n){var a=e.queue;if(a===null)throw Error(f(311));a.lastRenderedReducer=n;var i=e.baseQueue,l=a.pending;if(l!==null){if(i!==null){var r=i.next;i.next=l.next,l.next=r}t.baseQueue=i=l,a.pending=null}if(l=e.baseState,i===null)e.memoizedState=l;else{t=i.next;var v=r=null,O=null,J=t,ie=!1;do{var oe=J.lane&-536870913;if(oe!==J.lane?(Ge&oe)===oe:(kn&oe)===oe){var W=J.revertLane;if(W===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),oe===za&&(ie=!0);else if((kn&W)===W){J=J.next,W===za&&(ie=!0);continue}else oe={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},O===null?(v=O=oe,r=l):O=O.next=oe,Oe.lanes|=W,On|=W;oe=J.action,la&&n(l,oe),l=J.hasEagerState?J.eagerState:n(l,oe)}else W={lane:oe,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},O===null?(v=O=W,r=l):O=O.next=W,Oe.lanes|=oe,On|=oe;J=J.next}while(J!==null&&J!==t);if(O===null?r=l:O.next=v,!Ct(l,e.memoizedState)&&(dt=!0,ie&&(n=Ra,n!==null)))throw n;e.memoizedState=l,e.baseState=r,e.baseQueue=O,a.lastRenderedState=l}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function wr(e){var t=ut(),n=t.queue;if(n===null)throw Error(f(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var r=i=i.next;do l=e(l,r.action),r=r.next;while(r!==i);Ct(l,t.memoizedState)||(dt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,a]}function go(e,t,n){var a=Oe,i=ut(),l=Fe;if(l){if(n===void 0)throw Error(f(407));n=n()}else n=t();var r=!Ct((Qe||i).memoizedState,n);r&&(i.memoizedState=n,dt=!0),i=i.queue;var v=vo.bind(null,a,i,e);if(ji(2048,8,v,[e]),i.getSnapshot!==t||r||rt!==null&&rt.memoizedState.tag&1){if(a.flags|=2048,Ua(9,Nl(),yo.bind(null,a,i,n,t),null),Pe===null)throw Error(f(349));l||(kn&124)!==0||_o(a,t,n)}return n}function _o(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Oe.updateQueue,t===null?(t=vr(),Oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yo(e,t,n,a){t.value=n,t.getSnapshot=a,bo(t)&&xo(e)}function vo(e,t,n){return n(function(){bo(t)&&xo(e)})}function bo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function xo(e){var t=Ta(e,2);t!==null&&Bt(t,e,2)}function Sr(e){var t=At();if(typeof e=="function"){var n=e;if(e=n(),la){De(!0);try{n()}finally{De(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:e},t}function wo(e,t,n,a){return e.baseState=n,xr(e,Qe,typeof a=="function"?a:dn)}function Dm(e,t,n,a,i){if(zl(e))throw Error(f(485));if(e=t.action,e!==null){var l={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){l.listeners.push(r)}};Z.T!==null?n(!0):l.isTransition=!1,a(l),n=t.pending,n===null?(l.next=t.pending=l,So(t,l)):(l.next=n.next,t.pending=n.next=l)}}function So(e,t){var n=t.action,a=t.payload,i=e.state;if(t.isTransition){var l=Z.T,r={};Z.T=r;try{var v=n(i,a),O=Z.S;O!==null&&O(r,v),jo(e,t,v)}catch(J){jr(e,t,J)}finally{Z.T=l}}else try{l=n(i,a),jo(e,t,l)}catch(J){jr(e,t,J)}}function jo(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Eo(e,t,a)},function(a){return jr(e,t,a)}):Eo(e,t,n)}function Eo(e,t,n){t.status="fulfilled",t.value=n,Ao(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,So(e,n)))}function jr(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Ao(t),t=t.next;while(t!==a)}e.action=null}function Ao(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ko(e,t){return t}function To(e,t){if(Fe){var n=Pe.formState;if(n!==null){e:{var a=Oe;if(Fe){if(at){t:{for(var i=at,l=$t;i.nodeType!==8;){if(!l){i=null;break t}if(i=It(i.nextSibling),i===null){i=null;break t}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){at=It(i.nextSibling),a=i.data==="F!";break e}}ta(a)}a=!1}a&&(t=n[0])}}return n=At(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:t},n.queue=a,n=Qo.bind(null,Oe,a),a.dispatch=n,a=Sr(!1),l=Cr.bind(null,Oe,!1,a.queue),a=At(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,n=Dm.bind(null,Oe,i,l,n),i.dispatch=n,a.memoizedState=e,[t,n,!1]}function Co(e){var t=ut();return No(t,Qe,e)}function No(e,t,n){if(t=xr(e,t,ko)[0],e=Cl(dn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Si(t)}catch(r){throw r===_i?Sl:r}else a=t;t=ut();var i=t.queue,l=i.dispatch;return n!==t.memoizedState&&(Oe.flags|=2048,Ua(9,Nl(),zm.bind(null,i,n),null)),[a,l,e]}function zm(e,t){e.action=t}function Do(e){var t=ut(),n=Qe;if(n!==null)return No(t,n,e);ut(),t=t.memoizedState,n=ut();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Ua(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=Oe.updateQueue,t===null&&(t=vr(),Oe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Nl(){return{destroy:void 0,resource:void 0}}function zo(){return ut().memoizedState}function Dl(e,t,n,a){var i=At();a=a===void 0?null:a,Oe.flags|=e,i.memoizedState=Ua(1|t,Nl(),n,a)}function ji(e,t,n,a){var i=ut();a=a===void 0?null:a;var l=i.memoizedState.inst;Qe!==null&&a!==null&&mr(a,Qe.memoizedState.deps)?i.memoizedState=Ua(t,l,n,a):(Oe.flags|=e,i.memoizedState=Ua(1|t,l,n,a))}function Ro(e,t){Dl(8390656,8,e,t)}function Oo(e,t){ji(2048,8,e,t)}function Bo(e,t){return ji(4,2,e,t)}function Mo(e,t){return ji(4,4,e,t)}function Uo(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ho(e,t,n){n=n!=null?n.concat([e]):null,ji(4,4,Uo.bind(null,t,e),n)}function Er(){}function Go(e,t){var n=ut();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&mr(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function qo(e,t){var n=ut();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&mr(t,a[1]))return a[0];if(a=e(),la){De(!0);try{e()}finally{De(!1)}}return n.memoizedState=[a,t],a}function Ar(e,t,n){return n===void 0||(kn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Xf(),Oe.lanes|=e,On|=e,n)}function Lo(e,t,n,a){return Ct(n,t)?n:Oa.current!==null?(e=Ar(e,n,a),Ct(e,t)||(dt=!0),e):(kn&42)===0?(dt=!0,e.memoizedState=n):(e=Xf(),Oe.lanes|=e,On|=e,t)}function Vo(e,t,n,a,i){var l=Q.p;Q.p=l!==0&&8>l?l:8;var r=Z.T,v={};Z.T=v,Cr(e,!1,t,n);try{var O=i(),J=Z.S;if(J!==null&&J(v,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ie=Tm(O,a);Ei(e,t,ie,Ot(e))}else Ei(e,t,a,Ot(e))}catch(oe){Ei(e,t,{then:function(){},status:"rejected",reason:oe},Ot())}finally{Q.p=l,Z.T=r}}function Rm(){}function kr(e,t,n,a){if(e.tag!==5)throw Error(f(476));var i=Fo(e).queue;Vo(e,i,t,pe,n===null?Rm:function(){return Xo(e),n(a)})}function Fo(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:pe,baseState:pe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:pe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Xo(e){var t=Fo(e).next.queue;Ei(e,t,{},Ot())}function Tr(){return bt(Fi)}function Yo(){return ut().memoizedState}function Zo(){return ut().memoizedState}function Om(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ot();e=En(n);var a=An(t,e,n);a!==null&&(Bt(a,t,n),vi(a,t,n)),t={cache:ir()},e.payload=t;return}t=t.return}}function Bm(e,t,n){var a=Ot();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},zl(e)?Ko(t,n):(n=Ks(e,t,n,a),n!==null&&(Bt(n,e,a),Jo(n,t,a)))}function Qo(e,t,n){var a=Ot();Ei(e,t,n,a)}function Ei(e,t,n,a){var i={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(zl(e))Ko(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var r=t.lastRenderedState,v=l(r,n);if(i.hasEagerState=!0,i.eagerState=v,Ct(v,r))return pl(e,t,i,0),Pe===null&&ml(),!1}catch{}finally{}if(n=Ks(e,t,i,a),n!==null)return Bt(n,e,a),Jo(n,t,a),!0}return!1}function Cr(e,t,n,a){if(a={lane:2,revertLane:ru(),action:a,hasEagerState:!1,eagerState:null,next:null},zl(e)){if(t)throw Error(f(479))}else t=Ks(e,n,a,2),t!==null&&Bt(t,e,2)}function zl(e){var t=e.alternate;return e===Oe||t!==null&&t===Oe}function Ko(e,t){Ba=Al=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Jo(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,nc(e,n)}}var Rl={readContext:bt,use:Tl,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useLayoutEffect:lt,useInsertionEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useSyncExternalStore:lt,useId:lt,useHostTransitionStatus:lt,useFormState:lt,useActionState:lt,useOptimistic:lt,useMemoCache:lt,useCacheRefresh:lt},Io={readContext:bt,use:Tl,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:bt,useEffect:Ro,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Dl(4194308,4,Uo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Dl(4194308,4,e,t)},useInsertionEffect:function(e,t){Dl(4,2,e,t)},useMemo:function(e,t){var n=At();t=t===void 0?null:t;var a=e();if(la){De(!0);try{e()}finally{De(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=At();if(n!==void 0){var i=n(t);if(la){De(!0);try{n(t)}finally{De(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=Bm.bind(null,Oe,e),[a.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:function(e){e=Sr(e);var t=e.queue,n=Qo.bind(null,Oe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Er,useDeferredValue:function(e,t){var n=At();return Ar(n,e,t)},useTransition:function(){var e=Sr(!1);return e=Vo.bind(null,Oe,e.queue,!0,!1),At().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=Oe,i=At();if(Fe){if(n===void 0)throw Error(f(407));n=n()}else{if(n=t(),Pe===null)throw Error(f(349));(Ge&124)!==0||_o(a,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Ro(vo.bind(null,a,l,e),[e]),a.flags|=2048,Ua(9,Nl(),yo.bind(null,a,l,n,t),null),n},useId:function(){var e=At(),t=Pe.identifierPrefix;if(Fe){var n=cn,a=un;n=(a&~(1<<32-$e(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=kl++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Cm++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Tr,useFormState:To,useActionState:To,useOptimistic:function(e){var t=At();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Cr.bind(null,Oe,!0,n),n.dispatch=t,[e,t]},useMemoCache:br,useCacheRefresh:function(){return At().memoizedState=Om.bind(null,Oe)}},$o={readContext:bt,use:Tl,useCallback:Go,useContext:bt,useEffect:Oo,useImperativeHandle:Ho,useInsertionEffect:Bo,useLayoutEffect:Mo,useMemo:qo,useReducer:Cl,useRef:zo,useState:function(){return Cl(dn)},useDebugValue:Er,useDeferredValue:function(e,t){var n=ut();return Lo(n,Qe.memoizedState,e,t)},useTransition:function(){var e=Cl(dn)[0],t=ut().memoizedState;return[typeof e=="boolean"?e:Si(e),t]},useSyncExternalStore:go,useId:Yo,useHostTransitionStatus:Tr,useFormState:Co,useActionState:Co,useOptimistic:function(e,t){var n=ut();return wo(n,Qe,e,t)},useMemoCache:br,useCacheRefresh:Zo},Mm={readContext:bt,use:Tl,useCallback:Go,useContext:bt,useEffect:Oo,useImperativeHandle:Ho,useInsertionEffect:Bo,useLayoutEffect:Mo,useMemo:qo,useReducer:wr,useRef:zo,useState:function(){return wr(dn)},useDebugValue:Er,useDeferredValue:function(e,t){var n=ut();return Qe===null?Ar(n,e,t):Lo(n,Qe.memoizedState,e,t)},useTransition:function(){var e=wr(dn)[0],t=ut().memoizedState;return[typeof e=="boolean"?e:Si(e),t]},useSyncExternalStore:go,useId:Yo,useHostTransitionStatus:Tr,useFormState:Do,useActionState:Do,useOptimistic:function(e,t){var n=ut();return Qe!==null?wo(n,Qe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:br,useCacheRefresh:Zo},Ha=null,Ai=0;function Ol(e){var t=Ai;return Ai+=1,Ha===null&&(Ha=[]),ro(Ha,e,t)}function ki(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Bl(e,t){throw t.$$typeof===E?Error(f(525)):(e=Object.prototype.toString.call(t),Error(f(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Wo(e){var t=e._init;return t(e._payload)}function Po(e){function t(X,q){if(e){var K=X.deletions;K===null?(X.deletions=[q],X.flags|=16):K.push(q)}}function n(X,q){if(!e)return null;for(;q!==null;)t(X,q),q=q.sibling;return null}function a(X){for(var q=new Map;X!==null;)X.key!==null?q.set(X.key,X):q.set(X.index,X),X=X.sibling;return q}function i(X,q){return X=rn(X,q),X.index=0,X.sibling=null,X}function l(X,q,K){return X.index=K,e?(K=X.alternate,K!==null?(K=K.index,K<q?(X.flags|=67108866,q):K):(X.flags|=67108866,q)):(X.flags|=1048576,q)}function r(X){return e&&X.alternate===null&&(X.flags|=67108866),X}function v(X,q,K,re){return q===null||q.tag!==6?(q=Is(K,X.mode,re),q.return=X,q):(q=i(q,K),q.return=X,q)}function O(X,q,K,re){var we=K.type;return we===k?ie(X,q,K.props.children,re,K.key):q!==null&&(q.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===fe&&Wo(we)===q.type)?(q=i(q,K.props),ki(q,K),q.return=X,q):(q=_l(K.type,K.key,K.props,null,X.mode,re),ki(q,K),q.return=X,q)}function J(X,q,K,re){return q===null||q.tag!==4||q.stateNode.containerInfo!==K.containerInfo||q.stateNode.implementation!==K.implementation?(q=$s(K,X.mode,re),q.return=X,q):(q=i(q,K.children||[]),q.return=X,q)}function ie(X,q,K,re,we){return q===null||q.tag!==7?(q=$n(K,X.mode,re,we),q.return=X,q):(q=i(q,K),q.return=X,q)}function oe(X,q,K){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=Is(""+q,X.mode,K),q.return=X,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case T:return K=_l(q.type,q.key,q.props,null,X.mode,K),ki(K,q),K.return=X,K;case b:return q=$s(q,X.mode,K),q.return=X,q;case fe:var re=q._init;return q=re(q._payload),oe(X,q,K)}if(ee(q)||B(q))return q=$n(q,X.mode,K,null),q.return=X,q;if(typeof q.then=="function")return oe(X,Ol(q),K);if(q.$$typeof===M)return oe(X,xl(X,q),K);Bl(X,q)}return null}function W(X,q,K,re){var we=q!==null?q.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return we!==null?null:v(X,q,""+K,re);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case T:return K.key===we?O(X,q,K,re):null;case b:return K.key===we?J(X,q,K,re):null;case fe:return we=K._init,K=we(K._payload),W(X,q,K,re)}if(ee(K)||B(K))return we!==null?null:ie(X,q,K,re,null);if(typeof K.then=="function")return W(X,q,Ol(K),re);if(K.$$typeof===M)return W(X,q,xl(X,K),re);Bl(X,K)}return null}function P(X,q,K,re,we){if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return X=X.get(K)||null,v(q,X,""+re,we);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case T:return X=X.get(re.key===null?K:re.key)||null,O(q,X,re,we);case b:return X=X.get(re.key===null?K:re.key)||null,J(q,X,re,we);case fe:var Be=re._init;return re=Be(re._payload),P(X,q,K,re,we)}if(ee(re)||B(re))return X=X.get(K)||null,ie(q,X,re,we,null);if(typeof re.then=="function")return P(X,q,K,Ol(re),we);if(re.$$typeof===M)return P(X,q,K,xl(q,re),we);Bl(q,re)}return null}function Ce(X,q,K,re){for(var we=null,Be=null,Ae=q,Te=q=0,mt=null;Ae!==null&&Te<K.length;Te++){Ae.index>Te?(mt=Ae,Ae=null):mt=Ae.sibling;var Ve=W(X,Ae,K[Te],re);if(Ve===null){Ae===null&&(Ae=mt);break}e&&Ae&&Ve.alternate===null&&t(X,Ae),q=l(Ve,q,Te),Be===null?we=Ve:Be.sibling=Ve,Be=Ve,Ae=mt}if(Te===K.length)return n(X,Ae),Fe&&Pn(X,Te),we;if(Ae===null){for(;Te<K.length;Te++)Ae=oe(X,K[Te],re),Ae!==null&&(q=l(Ae,q,Te),Be===null?we=Ae:Be.sibling=Ae,Be=Ae);return Fe&&Pn(X,Te),we}for(Ae=a(Ae);Te<K.length;Te++)mt=P(Ae,X,Te,K[Te],re),mt!==null&&(e&&mt.alternate!==null&&Ae.delete(mt.key===null?Te:mt.key),q=l(mt,q,Te),Be===null?we=mt:Be.sibling=mt,Be=mt);return e&&Ae.forEach(function(Fn){return t(X,Fn)}),Fe&&Pn(X,Te),we}function ke(X,q,K,re){if(K==null)throw Error(f(151));for(var we=null,Be=null,Ae=q,Te=q=0,mt=null,Ve=K.next();Ae!==null&&!Ve.done;Te++,Ve=K.next()){Ae.index>Te?(mt=Ae,Ae=null):mt=Ae.sibling;var Fn=W(X,Ae,Ve.value,re);if(Fn===null){Ae===null&&(Ae=mt);break}e&&Ae&&Fn.alternate===null&&t(X,Ae),q=l(Fn,q,Te),Be===null?we=Fn:Be.sibling=Fn,Be=Fn,Ae=mt}if(Ve.done)return n(X,Ae),Fe&&Pn(X,Te),we;if(Ae===null){for(;!Ve.done;Te++,Ve=K.next())Ve=oe(X,Ve.value,re),Ve!==null&&(q=l(Ve,q,Te),Be===null?we=Ve:Be.sibling=Ve,Be=Ve);return Fe&&Pn(X,Te),we}for(Ae=a(Ae);!Ve.done;Te++,Ve=K.next())Ve=P(Ae,X,Te,Ve.value,re),Ve!==null&&(e&&Ve.alternate!==null&&Ae.delete(Ve.key===null?Te:Ve.key),q=l(Ve,q,Te),Be===null?we=Ve:Be.sibling=Ve,Be=Ve);return e&&Ae.forEach(function(Up){return t(X,Up)}),Fe&&Pn(X,Te),we}function Je(X,q,K,re){if(typeof K=="object"&&K!==null&&K.type===k&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case T:e:{for(var we=K.key;q!==null;){if(q.key===we){if(we=K.type,we===k){if(q.tag===7){n(X,q.sibling),re=i(q,K.props.children),re.return=X,X=re;break e}}else if(q.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===fe&&Wo(we)===q.type){n(X,q.sibling),re=i(q,K.props),ki(re,K),re.return=X,X=re;break e}n(X,q);break}else t(X,q);q=q.sibling}K.type===k?(re=$n(K.props.children,X.mode,re,K.key),re.return=X,X=re):(re=_l(K.type,K.key,K.props,null,X.mode,re),ki(re,K),re.return=X,X=re)}return r(X);case b:e:{for(we=K.key;q!==null;){if(q.key===we)if(q.tag===4&&q.stateNode.containerInfo===K.containerInfo&&q.stateNode.implementation===K.implementation){n(X,q.sibling),re=i(q,K.children||[]),re.return=X,X=re;break e}else{n(X,q);break}else t(X,q);q=q.sibling}re=$s(K,X.mode,re),re.return=X,X=re}return r(X);case fe:return we=K._init,K=we(K._payload),Je(X,q,K,re)}if(ee(K))return Ce(X,q,K,re);if(B(K)){if(we=B(K),typeof we!="function")throw Error(f(150));return K=we.call(K),ke(X,q,K,re)}if(typeof K.then=="function")return Je(X,q,Ol(K),re);if(K.$$typeof===M)return Je(X,q,xl(X,K),re);Bl(X,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,q!==null&&q.tag===6?(n(X,q.sibling),re=i(q,K),re.return=X,X=re):(n(X,q),re=Is(K,X.mode,re),re.return=X,X=re),r(X)):n(X,q)}return function(X,q,K,re){try{Ai=0;var we=Je(X,q,K,re);return Ha=null,we}catch(Ae){if(Ae===_i||Ae===Sl)throw Ae;var Be=Nt(29,Ae,null,X.mode);return Be.lanes=re,Be.return=X,Be}finally{}}}var Ga=Po(!0),ef=Po(!1),Ft=R(null),Wt=null;function Tn(e){var t=e.alternate;ae(ot,ot.current&1),ae(Ft,e),Wt===null&&(t===null||Oa.current!==null||t.memoizedState!==null)&&(Wt=e)}function tf(e){if(e.tag===22){if(ae(ot,ot.current),ae(Ft,e),Wt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Wt=e)}}else Cn()}function Cn(){ae(ot,ot.current),ae(Ft,Ft.current)}function hn(e){U(Ft),Wt===e&&(Wt=null),U(ot)}var ot=R(0);function Ml(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||vu(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Nr(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:S({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Dr={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Ot(),i=En(a);i.payload=t,n!=null&&(i.callback=n),t=An(e,i,a),t!==null&&(Bt(t,e,a),vi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Ot(),i=En(a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=An(e,i,a),t!==null&&(Bt(t,e,a),vi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ot(),a=En(n);a.tag=2,t!=null&&(a.callback=t),t=An(e,a,n),t!==null&&(Bt(t,e,n),vi(t,e,n))}};function nf(e,t,n,a,i,l,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,r):t.prototype&&t.prototype.isPureReactComponent?!ci(n,a)||!ci(i,l):!0}function af(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Dr.enqueueReplaceState(t,t.state,null)}function sa(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=S({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}var Ul=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function lf(e){Ul(e)}function sf(e){console.error(e)}function rf(e){Ul(e)}function Hl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function uf(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function zr(e,t,n){return n=En(n),n.tag=3,n.payload={element:null},n.callback=function(){Hl(e,t)},n}function cf(e){return e=En(e),e.tag=3,e}function of(e,t,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var l=a.value;e.payload=function(){return i(l)},e.callback=function(){uf(t,n,a)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){uf(t,n,a),typeof i!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var v=a.stack;this.componentDidCatch(a.value,{componentStack:v!==null?v:""})})}function Um(e,t,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&mi(t,n,i,!0),n=Ft.current,n!==null){switch(n.tag){case 13:return Wt===null?nu():n.alternate===null&&it===0&&(it=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===rr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),iu(e,a,i)),!1;case 22:return n.flags|=65536,a===rr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),iu(e,a,i)),!1}throw Error(f(435,n.tag))}return iu(e,a,i),nu(),!1}if(Fe)return t=Ft.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==er&&(e=Error(f(422),{cause:a}),hi(Gt(e,n)))):(a!==er&&(t=Error(f(423),{cause:a}),hi(Gt(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=Gt(a,n),i=zr(e.stateNode,a,i),or(e,i),it!==4&&(it=2)),!1;var l=Error(f(520),{cause:a});if(l=Gt(l,n),Oi===null?Oi=[l]:Oi.push(l),it!==4&&(it=2),t===null)return!0;a=Gt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=zr(n.stateNode,a,e),or(n,e),!1;case 1:if(t=n.type,l=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Bn===null||!Bn.has(l))))return n.flags|=65536,i&=-i,n.lanes|=i,i=cf(i),of(i,e,n,a),or(n,i),!1}n=n.return}while(n!==null);return!1}var ff=Error(f(461)),dt=!1;function gt(e,t,n,a){t.child=e===null?ef(t,null,n,a):Ga(t,e.child,n,a)}function df(e,t,n,a,i){n=n.render;var l=t.ref;if("ref"in a){var r={};for(var v in a)v!=="ref"&&(r[v]=a[v])}else r=a;return aa(t),a=pr(e,t,n,r,l,i),v=gr(),e!==null&&!dt?(_r(e,t,i),mn(e,t,i)):(Fe&&v&&Ws(t),t.flags|=1,gt(e,t,a,i),t.child)}function hf(e,t,n,a,i){if(e===null){var l=n.type;return typeof l=="function"&&!Js(l)&&l.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=l,mf(e,t,l,a,i)):(e=_l(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!qr(e,i)){var r=l.memoizedProps;if(n=n.compare,n=n!==null?n:ci,n(r,a)&&e.ref===t.ref)return mn(e,t,i)}return t.flags|=1,e=rn(l,a),e.ref=t.ref,e.return=t,t.child=e}function mf(e,t,n,a,i){if(e!==null){var l=e.memoizedProps;if(ci(l,a)&&e.ref===t.ref)if(dt=!1,t.pendingProps=a=l,qr(e,i))(e.flags&131072)!==0&&(dt=!0);else return t.lanes=e.lanes,mn(e,t,i)}return Rr(e,t,n,a,i)}function pf(e,t,n){var a=t.pendingProps,i=a.children,l=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=l!==null?l.baseLanes|n:n,e!==null){for(i=t.child=e.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;t.childLanes=l&~a}else t.childLanes=0,t.child=null;return gf(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&wl(t,l!==null?l.cachePool:null),l!==null?ho(t,l):dr(),tf(t);else return t.lanes=t.childLanes=536870912,gf(e,t,l!==null?l.baseLanes|n:n,n)}else l!==null?(wl(t,l.cachePool),ho(t,l),Cn(),t.memoizedState=null):(e!==null&&wl(t,null),dr(),Cn());return gt(e,t,i,n),t.child}function gf(e,t,n,a){var i=sr();return i=i===null?null:{parent:ct._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&wl(t,null),dr(),tf(t),e!==null&&mi(e,t,a,!0),null}function Gl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(f(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Rr(e,t,n,a,i){return aa(t),n=pr(e,t,n,a,void 0,i),a=gr(),e!==null&&!dt?(_r(e,t,i),mn(e,t,i)):(Fe&&a&&Ws(t),t.flags|=1,gt(e,t,n,i),t.child)}function _f(e,t,n,a,i,l){return aa(t),t.updateQueue=null,n=po(t,a,n,i),mo(e),a=gr(),e!==null&&!dt?(_r(e,t,l),mn(e,t,l)):(Fe&&a&&Ws(t),t.flags|=1,gt(e,t,n,l),t.child)}function yf(e,t,n,a,i){if(aa(t),t.stateNode===null){var l=Ca,r=n.contextType;typeof r=="object"&&r!==null&&(l=bt(r)),l=new n(a,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Dr,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=a,l.state=t.memoizedState,l.refs={},ur(t),r=n.contextType,l.context=typeof r=="object"&&r!==null?bt(r):Ca,l.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Nr(t,n,r,a),l.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(r=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),r!==l.state&&Dr.enqueueReplaceState(l,l.state,null),xi(t,a,l,i),bi(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){l=t.stateNode;var v=t.memoizedProps,O=sa(n,v);l.props=O;var J=l.context,ie=n.contextType;r=Ca,typeof ie=="object"&&ie!==null&&(r=bt(ie));var oe=n.getDerivedStateFromProps;ie=typeof oe=="function"||typeof l.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,ie||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(v||J!==r)&&af(t,l,a,r),jn=!1;var W=t.memoizedState;l.state=W,xi(t,a,l,i),bi(),J=t.memoizedState,v||W!==J||jn?(typeof oe=="function"&&(Nr(t,n,oe,a),J=t.memoizedState),(O=jn||nf(t,n,O,a,W,J,r))?(ie||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=J),l.props=a,l.state=J,l.context=r,a=O):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{l=t.stateNode,cr(e,t),r=t.memoizedProps,ie=sa(n,r),l.props=ie,oe=t.pendingProps,W=l.context,J=n.contextType,O=Ca,typeof J=="object"&&J!==null&&(O=bt(J)),v=n.getDerivedStateFromProps,(J=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(r!==oe||W!==O)&&af(t,l,a,O),jn=!1,W=t.memoizedState,l.state=W,xi(t,a,l,i),bi();var P=t.memoizedState;r!==oe||W!==P||jn||e!==null&&e.dependencies!==null&&bl(e.dependencies)?(typeof v=="function"&&(Nr(t,n,v,a),P=t.memoizedState),(ie=jn||nf(t,n,ie,a,W,P,O)||e!==null&&e.dependencies!==null&&bl(e.dependencies))?(J||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,P,O),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,P,O)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||r===e.memoizedProps&&W===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&W===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=P),l.props=a,l.state=P,l.context=O,a=ie):(typeof l.componentDidUpdate!="function"||r===e.memoizedProps&&W===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&W===e.memoizedState||(t.flags|=1024),a=!1)}return l=a,Gl(e,t),a=(t.flags&128)!==0,l||a?(l=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&a?(t.child=Ga(t,e.child,null,i),t.child=Ga(t,null,n,i)):gt(e,t,n,i),t.memoizedState=l.state,e=t.child):e=mn(e,t,i),e}function vf(e,t,n,a){return di(),t.flags|=256,gt(e,t,n,a),t.child}var Or={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Br(e){return{baseLanes:e,cachePool:io()}}function Mr(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Xt),e}function bf(e,t,n){var a=t.pendingProps,i=!1,l=(t.flags&128)!==0,r;if((r=l)||(r=e!==null&&e.memoizedState===null?!1:(ot.current&2)!==0),r&&(i=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Fe){if(i?Tn(t):Cn(),Fe){var v=at,O;if(O=v){e:{for(O=v,v=$t;O.nodeType!==8;){if(!v){v=null;break e}if(O=It(O.nextSibling),O===null){v=null;break e}}v=O}v!==null?(t.memoizedState={dehydrated:v,treeContext:Wn!==null?{id:un,overflow:cn}:null,retryLane:536870912,hydrationErrors:null},O=Nt(18,null,null,0),O.stateNode=v,O.return=t,t.child=O,wt=t,at=null,O=!0):O=!1}O||ta(t)}if(v=t.memoizedState,v!==null&&(v=v.dehydrated,v!==null))return vu(v)?t.lanes=32:t.lanes=536870912,null;hn(t)}return v=a.children,a=a.fallback,i?(Cn(),i=t.mode,v=ql({mode:"hidden",children:v},i),a=$n(a,i,n,null),v.return=t,a.return=t,v.sibling=a,t.child=v,i=t.child,i.memoizedState=Br(n),i.childLanes=Mr(e,r,n),t.memoizedState=Or,a):(Tn(t),Ur(t,v))}if(O=e.memoizedState,O!==null&&(v=O.dehydrated,v!==null)){if(l)t.flags&256?(Tn(t),t.flags&=-257,t=Hr(e,t,n)):t.memoizedState!==null?(Cn(),t.child=e.child,t.flags|=128,t=null):(Cn(),i=a.fallback,v=t.mode,a=ql({mode:"visible",children:a.children},v),i=$n(i,v,n,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,Ga(t,e.child,null,n),a=t.child,a.memoizedState=Br(n),a.childLanes=Mr(e,r,n),t.memoizedState=Or,t=i);else if(Tn(t),vu(v)){if(r=v.nextSibling&&v.nextSibling.dataset,r)var J=r.dgst;r=J,a=Error(f(419)),a.stack="",a.digest=r,hi({value:a,source:null,stack:null}),t=Hr(e,t,n)}else if(dt||mi(e,t,n,!1),r=(n&e.childLanes)!==0,dt||r){if(r=Pe,r!==null&&(a=n&-n,a=(a&42)!==0?1:bs(a),a=(a&(r.suspendedLanes|n))!==0?0:a,a!==0&&a!==O.retryLane))throw O.retryLane=a,Ta(e,a),Bt(r,e,a),ff;v.data==="$?"||nu(),t=Hr(e,t,n)}else v.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=O.treeContext,at=It(v.nextSibling),wt=t,Fe=!0,ea=null,$t=!1,e!==null&&(Lt[Vt++]=un,Lt[Vt++]=cn,Lt[Vt++]=Wn,un=e.id,cn=e.overflow,Wn=t),t=Ur(t,a.children),t.flags|=4096);return t}return i?(Cn(),i=a.fallback,v=t.mode,O=e.child,J=O.sibling,a=rn(O,{mode:"hidden",children:a.children}),a.subtreeFlags=O.subtreeFlags&65011712,J!==null?i=rn(J,i):(i=$n(i,v,n,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,v=e.child.memoizedState,v===null?v=Br(n):(O=v.cachePool,O!==null?(J=ct._currentValue,O=O.parent!==J?{parent:J,pool:J}:O):O=io(),v={baseLanes:v.baseLanes|n,cachePool:O}),i.memoizedState=v,i.childLanes=Mr(e,r,n),t.memoizedState=Or,a):(Tn(t),n=e.child,e=n.sibling,n=rn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Ur(e,t){return t=ql({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ql(e,t){return e=Nt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Hr(e,t,n){return Ga(t,e.child,null,n),e=Ur(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xf(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),nr(e.return,t,n)}function Gr(e,t,n,a,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=a,l.tail=n,l.tailMode=i)}function wf(e,t,n){var a=t.pendingProps,i=a.revealOrder,l=a.tail;if(gt(e,t,a.children,n),a=ot.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xf(e,n,t);else if(e.tag===19)xf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(ae(ot,a),i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ml(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Gr(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ml(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Gr(t,!0,n,null,l);break;case"together":Gr(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function mn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),On|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(mi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(f(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&bl(e)))}function Hm(e,t,n){switch(t.tag){case 3:Se(t,t.stateNode.containerInfo),Sn(t,ct,e.memoizedState.cache),di();break;case 27:case 5:ge(t);break;case 4:Se(t,t.stateNode.containerInfo);break;case 10:Sn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Tn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?bf(e,t,n):(Tn(t),e=mn(e,t,n),e!==null?e.sibling:null);Tn(t);break;case 19:var i=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(mi(e,t,n,!1),a=(n&t.childLanes)!==0),i){if(a)return wf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(ot,ot.current),a)break;return null;case 22:case 23:return t.lanes=0,pf(e,t,n);case 24:Sn(t,ct,e.memoizedState.cache)}return mn(e,t,n)}function Sf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)dt=!0;else{if(!qr(e,n)&&(t.flags&128)===0)return dt=!1,Hm(e,t,n);dt=(e.flags&131072)!==0}else dt=!1,Fe&&(t.flags&1048576)!==0&&$c(t,vl,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,i=a._init;if(a=i(a._payload),t.type=a,typeof a=="function")Js(a)?(e=sa(a,e),t.tag=1,t=yf(null,t,a,e,n)):(t.tag=0,t=Rr(null,t,a,e,n));else{if(a!=null){if(i=a.$$typeof,i===V){t.tag=11,t=df(null,t,a,e,n);break e}else if(i===L){t.tag=14,t=hf(null,t,a,e,n);break e}}throw t=h(a)||a,Error(f(306,t,""))}}return t;case 0:return Rr(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,i=sa(a,t.pendingProps),yf(e,t,a,i,n);case 3:e:{if(Se(t,t.stateNode.containerInfo),e===null)throw Error(f(387));a=t.pendingProps;var l=t.memoizedState;i=l.element,cr(e,t),xi(t,a,null,n);var r=t.memoizedState;if(a=r.cache,Sn(t,ct,a),a!==l.cache&&ar(t,[ct],n,!0),bi(),a=r.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=vf(e,t,a,n);break e}else if(a!==i){i=Gt(Error(f(424)),t),hi(i),t=vf(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(at=It(e.firstChild),wt=t,Fe=!0,ea=null,$t=!0,n=ef(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(di(),a===i){t=mn(e,t,n);break e}gt(e,t,a,n)}t=t.child}return t;case 26:return Gl(e,t),e===null?(n=kd(t.type,null,t.pendingProps,null))?t.memoizedState=n:Fe||(n=t.type,e=t.pendingProps,a=es(ve.current).createElement(n),a[vt]=t,a[jt]=e,yt(a,n,e),ft(a),t.stateNode=a):t.memoizedState=kd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ge(t),e===null&&Fe&&(a=t.stateNode=jd(t.type,t.pendingProps,ve.current),wt=t,$t=!0,i=at,Hn(t.type)?(bu=i,at=It(a.firstChild)):at=i),gt(e,t,t.pendingProps.children,n),Gl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Fe&&((i=a=at)&&(a=dp(a,t.type,t.pendingProps,$t),a!==null?(t.stateNode=a,wt=t,at=It(a.firstChild),$t=!1,i=!0):i=!1),i||ta(t)),ge(t),i=t.type,l=t.pendingProps,r=e!==null?e.memoizedProps:null,a=l.children,gu(i,l)?a=null:r!==null&&gu(i,r)&&(t.flags|=32),t.memoizedState!==null&&(i=pr(e,t,Nm,null,null,n),Fi._currentValue=i),Gl(e,t),gt(e,t,a,n),t.child;case 6:return e===null&&Fe&&((e=n=at)&&(n=hp(n,t.pendingProps,$t),n!==null?(t.stateNode=n,wt=t,at=null,e=!0):e=!1),e||ta(t)),null;case 13:return bf(e,t,n);case 4:return Se(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ga(t,null,a,n):gt(e,t,a,n),t.child;case 11:return df(e,t,t.type,t.pendingProps,n);case 7:return gt(e,t,t.pendingProps,n),t.child;case 8:return gt(e,t,t.pendingProps.children,n),t.child;case 12:return gt(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Sn(t,t.type,a.value),gt(e,t,a.children,n),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,aa(t),i=bt(i),a=a(i),t.flags|=1,gt(e,t,a,n),t.child;case 14:return hf(e,t,t.type,t.pendingProps,n);case 15:return mf(e,t,t.type,t.pendingProps,n);case 19:return wf(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=ql(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=rn(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return pf(e,t,n);case 24:return aa(t),a=bt(ct),e===null?(i=sr(),i===null&&(i=Pe,l=ir(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=n),i=l),t.memoizedState={parent:a,cache:i},ur(t),Sn(t,ct,i)):((e.lanes&n)!==0&&(cr(e,t),xi(t,null,null,n),bi()),i=e.memoizedState,l=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Sn(t,ct,a)):(a=l.cache,Sn(t,ct,a),a!==i.cache&&ar(t,[ct],n,!0))),gt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(f(156,t.tag))}function pn(e){e.flags|=4}function jf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!zd(t)){if(t=Ft.current,t!==null&&((Ge&4194048)===Ge?Wt!==null:(Ge&62914560)!==Ge&&(Ge&536870912)===0||t!==Wt))throw yi=rr,lo;e.flags|=8192}}function Ll(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?nl():536870912,e.lanes|=t,Fa|=t)}function Ti(e,t){if(!Fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Gm(e,t,n){var a=t.pendingProps;switch(Ps(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return nt(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),fn(ct),ne(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(fi(t)?pn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,eo())),nt(t),null;case 26:return n=t.memoizedState,e===null?(pn(t),n!==null?(nt(t),jf(t,n)):(nt(t),t.flags&=-16777217)):n?n!==e.memoizedState?(pn(t),nt(t),jf(t,n)):(nt(t),t.flags&=-16777217):(e.memoizedProps!==a&&pn(t),nt(t),t.flags&=-16777217),null;case 27:Ne(t),n=ve.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&pn(t);else{if(!a){if(t.stateNode===null)throw Error(f(166));return nt(t),null}e=le.current,fi(t)?Wc(t):(e=jd(i,a,n),t.stateNode=e,pn(t))}return nt(t),null;case 5:if(Ne(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&pn(t);else{if(!a){if(t.stateNode===null)throw Error(f(166));return nt(t),null}if(e=le.current,fi(t))Wc(t);else{switch(i=es(ve.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}e[vt]=t,e[jt]=a;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(yt(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&pn(t)}}return nt(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&pn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(f(166));if(e=ve.current,fi(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,i=wt,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[vt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||_d(e.nodeValue,n)),e||ta(t)}else e=es(e).createTextNode(a),e[vt]=t,t.stateNode=e}return nt(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=fi(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(f(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(f(317));i[vt]=t}else di(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;nt(t),i=!1}else i=eo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(hn(t),t):(hn(t),null)}if(hn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var l=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==i&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Ll(t,t.updateQueue),nt(t),null;case 4:return ne(),e===null&&fu(t.stateNode.containerInfo),nt(t),null;case 10:return fn(t.type),nt(t),null;case 19:if(U(ot),i=t.memoizedState,i===null)return nt(t),null;if(a=(t.flags&128)!==0,l=i.rendering,l===null)if(a)Ti(i,!1);else{if(it!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Ml(e),l!==null){for(t.flags|=128,Ti(i,!1),e=l.updateQueue,t.updateQueue=e,Ll(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ic(n,e),n=n.sibling;return ae(ot,ot.current&1|2),t.child}e=e.sibling}i.tail!==null&&N()>Xl&&(t.flags|=128,a=!0,Ti(i,!1),t.lanes=4194304)}else{if(!a)if(e=Ml(l),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ll(t,e),Ti(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Fe)return nt(t),null}else 2*N()-i.renderingStartTime>Xl&&n!==536870912&&(t.flags|=128,a=!0,Ti(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(e=i.last,e!==null?e.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=N(),t.sibling=null,e=ot.current,ae(ot,a?e&1|2:e&1),t):(nt(t),null);case 22:case 23:return hn(t),hr(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),n=t.updateQueue,n!==null&&Ll(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&U(ia),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),fn(ct),nt(t),null;case 25:return null;case 30:return null}throw Error(f(156,t.tag))}function qm(e,t){switch(Ps(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fn(ct),ne(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ne(t),null;case 13:if(hn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(f(340));di()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(ot),null;case 4:return ne(),null;case 10:return fn(t.type),null;case 22:case 23:return hn(t),hr(),e!==null&&U(ia),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return fn(ct),null;case 25:return null;default:return null}}function Ef(e,t){switch(Ps(t),t.tag){case 3:fn(ct),ne();break;case 26:case 27:case 5:Ne(t);break;case 4:ne();break;case 13:hn(t);break;case 19:U(ot);break;case 10:fn(t.type);break;case 22:case 23:hn(t),hr(),e!==null&&U(ia);break;case 24:fn(ct)}}function Ci(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&e)===e){a=void 0;var l=n.create,r=n.inst;a=l(),r.destroy=a}n=n.next}while(n!==i)}}catch(v){Ie(t,t.return,v)}}function Nn(e,t,n){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&e)===e){var r=a.inst,v=r.destroy;if(v!==void 0){r.destroy=void 0,i=t;var O=n,J=v;try{J()}catch(ie){Ie(i,O,ie)}}}a=a.next}while(a!==l)}}catch(ie){Ie(t,t.return,ie)}}function Af(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{fo(t,n)}catch(a){Ie(e,e.return,a)}}}function kf(e,t,n){n.props=sa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Ie(e,t,a)}}function Ni(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(i){Ie(e,t,i)}}function Pt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){Ie(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){Ie(e,t,i)}else n.current=null}function Tf(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){Ie(e,e.return,i)}}function Lr(e,t,n){try{var a=e.stateNode;rp(a,e.type,n,t),a[jt]=t}catch(i){Ie(e,e.return,i)}}function Cf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Hn(e.type)||e.tag===4}function Vr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Hn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Pl));else if(a!==4&&(a===27&&Hn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Fr(e,t,n),e=e.sibling;e!==null;)Fr(e,t,n),e=e.sibling}function Vl(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Hn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Vl(e,t,n),e=e.sibling;e!==null;)Vl(e,t,n),e=e.sibling}function Nf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);yt(t,a,n),t[vt]=e,t[jt]=n}catch(l){Ie(e,e.return,l)}}var gn=!1,st=!1,Xr=!1,Df=typeof WeakSet=="function"?WeakSet:Set,ht=null;function Lm(e,t){if(e=e.containerInfo,mu=ss,e=qc(e),Vs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var r=0,v=-1,O=-1,J=0,ie=0,oe=e,W=null;t:for(;;){for(var P;oe!==n||i!==0&&oe.nodeType!==3||(v=r+i),oe!==l||a!==0&&oe.nodeType!==3||(O=r+a),oe.nodeType===3&&(r+=oe.nodeValue.length),(P=oe.firstChild)!==null;)W=oe,oe=P;for(;;){if(oe===e)break t;if(W===n&&++J===i&&(v=r),W===l&&++ie===a&&(O=r),(P=oe.nextSibling)!==null)break;oe=W,W=oe.parentNode}oe=P}n=v===-1||O===-1?null:{start:v,end:O}}else n=null}n=n||{start:0,end:0}}else n=null;for(pu={focusedElem:e,selectionRange:n},ss=!1,ht=t;ht!==null;)if(t=ht,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,ht=e;else for(;ht!==null;){switch(t=ht,l=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,n=t,i=l.memoizedProps,l=l.memoizedState,a=n.stateNode;try{var Ce=sa(n.type,i,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(Ce,l),a.__reactInternalSnapshotBeforeUpdate=e}catch(ke){Ie(n,n.return,ke)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)yu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(f(163))}if(e=t.sibling,e!==null){e.return=t.return,ht=e;break}ht=t.return}}function zf(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Dn(e,n),a&4&&Ci(5,n);break;case 1:if(Dn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){Ie(n,n.return,r)}else{var i=sa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Ie(n,n.return,r)}}a&64&&Af(n),a&512&&Ni(n,n.return);break;case 3:if(Dn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{fo(e,t)}catch(r){Ie(n,n.return,r)}}break;case 27:t===null&&a&4&&Nf(n);case 26:case 5:Dn(e,n),t===null&&a&4&&Tf(n),a&512&&Ni(n,n.return);break;case 12:Dn(e,n);break;case 13:Dn(e,n),a&4&&Bf(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Im.bind(null,n),mp(e,n))));break;case 22:if(a=n.memoizedState!==null||gn,!a){t=t!==null&&t.memoizedState!==null||st,i=gn;var l=st;gn=a,(st=t)&&!l?zn(e,n,(n.subtreeFlags&8772)!==0):Dn(e,n),gn=i,st=l}break;case 30:break;default:Dn(e,n)}}function Rf(e){var t=e.alternate;t!==null&&(e.alternate=null,Rf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ss(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tt=null,kt=!1;function _n(e,t,n){for(n=n.child;n!==null;)Of(e,t,n),n=n.sibling}function Of(e,t,n){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(Ee,n)}catch{}switch(n.tag){case 26:st||Pt(n,t),_n(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:st||Pt(n,t);var a=tt,i=kt;Hn(n.type)&&(tt=n.stateNode,kt=!1),_n(e,t,n),Gi(n.stateNode),tt=a,kt=i;break;case 5:st||Pt(n,t);case 6:if(a=tt,i=kt,tt=null,_n(e,t,n),tt=a,kt=i,tt!==null)if(kt)try{(tt.nodeType===9?tt.body:tt.nodeName==="HTML"?tt.ownerDocument.body:tt).removeChild(n.stateNode)}catch(l){Ie(n,t,l)}else try{tt.removeChild(n.stateNode)}catch(l){Ie(n,t,l)}break;case 18:tt!==null&&(kt?(e=tt,wd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Qi(e)):wd(tt,n.stateNode));break;case 4:a=tt,i=kt,tt=n.stateNode.containerInfo,kt=!0,_n(e,t,n),tt=a,kt=i;break;case 0:case 11:case 14:case 15:st||Nn(2,n,t),st||Nn(4,n,t),_n(e,t,n);break;case 1:st||(Pt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&kf(n,t,a)),_n(e,t,n);break;case 21:_n(e,t,n);break;case 22:st=(a=st)||n.memoizedState!==null,_n(e,t,n),st=a;break;default:_n(e,t,n)}}function Bf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qi(e)}catch(n){Ie(t,t.return,n)}}function Vm(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Df),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Df),t;default:throw Error(f(435,e.tag))}}function Yr(e,t){var n=Vm(e);t.forEach(function(a){var i=$m.bind(null,e,a);n.has(a)||(n.add(a),a.then(i,i))})}function Dt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],l=e,r=t,v=r;e:for(;v!==null;){switch(v.tag){case 27:if(Hn(v.type)){tt=v.stateNode,kt=!1;break e}break;case 5:tt=v.stateNode,kt=!1;break e;case 3:case 4:tt=v.stateNode.containerInfo,kt=!0;break e}v=v.return}if(tt===null)throw Error(f(160));Of(l,r,i),tt=null,kt=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Mf(t,e),t=t.sibling}var Jt=null;function Mf(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Dt(t,e),zt(e),a&4&&(Nn(3,e,e.return),Ci(3,e),Nn(5,e,e.return));break;case 1:Dt(t,e),zt(e),a&512&&(st||n===null||Pt(n,n.return)),a&64&&gn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=Jt;if(Dt(t,e),zt(e),a&512&&(st||n===null||Pt(n,n.return)),a&4){var l=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":l=i.getElementsByTagName("title")[0],(!l||l[ei]||l[vt]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(a),i.head.insertBefore(l,i.querySelector("head > title"))),yt(l,a,n),l[vt]=e,ft(l),a=l;break e;case"link":var r=Nd("link","href",i).get(a+(n.href||""));if(r){for(var v=0;v<r.length;v++)if(l=r[v],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(v,1);break t}}l=i.createElement(a),yt(l,a,n),i.head.appendChild(l);break;case"meta":if(r=Nd("meta","content",i).get(a+(n.content||""))){for(v=0;v<r.length;v++)if(l=r[v],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(v,1);break t}}l=i.createElement(a),yt(l,a,n),i.head.appendChild(l);break;default:throw Error(f(468,a))}l[vt]=e,ft(l),a=l}e.stateNode=a}else Dd(i,e.type,e.stateNode);else e.stateNode=Cd(i,a,e.memoizedProps);else l!==a?(l===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):l.count--,a===null?Dd(i,e.type,e.stateNode):Cd(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Lr(e,e.memoizedProps,n.memoizedProps)}break;case 27:Dt(t,e),zt(e),a&512&&(st||n===null||Pt(n,n.return)),n!==null&&a&4&&Lr(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Dt(t,e),zt(e),a&512&&(st||n===null||Pt(n,n.return)),e.flags&32){i=e.stateNode;try{xa(i,"")}catch(P){Ie(e,e.return,P)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,Lr(e,i,n!==null?n.memoizedProps:i)),a&1024&&(Xr=!0);break;case 6:if(Dt(t,e),zt(e),a&4){if(e.stateNode===null)throw Error(f(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(P){Ie(e,e.return,P)}}break;case 3:if(as=null,i=Jt,Jt=ts(t.containerInfo),Dt(t,e),Jt=i,zt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Qi(t.containerInfo)}catch(P){Ie(e,e.return,P)}Xr&&(Xr=!1,Uf(e));break;case 4:a=Jt,Jt=ts(e.stateNode.containerInfo),Dt(t,e),zt(e),Jt=a;break;case 12:Dt(t,e),zt(e);break;case 13:Dt(t,e),zt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($r=N()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Yr(e,a)));break;case 22:i=e.memoizedState!==null;var O=n!==null&&n.memoizedState!==null,J=gn,ie=st;if(gn=J||i,st=ie||O,Dt(t,e),st=ie,gn=J,zt(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||O||gn||st||ra(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){O=n=t;try{if(l=O.stateNode,i)r=l.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{v=O.stateNode;var oe=O.memoizedProps.style,W=oe!=null&&oe.hasOwnProperty("display")?oe.display:null;v.style.display=W==null||typeof W=="boolean"?"":(""+W).trim()}}catch(P){Ie(O,O.return,P)}}}else if(t.tag===6){if(n===null){O=t;try{O.stateNode.nodeValue=i?"":O.memoizedProps}catch(P){Ie(O,O.return,P)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Yr(e,n))));break;case 19:Dt(t,e),zt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Yr(e,a)));break;case 30:break;case 21:break;default:Dt(t,e),zt(e)}}function zt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Cf(a)){n=a;break}a=a.return}if(n==null)throw Error(f(160));switch(n.tag){case 27:var i=n.stateNode,l=Vr(e);Vl(e,l,i);break;case 5:var r=n.stateNode;n.flags&32&&(xa(r,""),n.flags&=-33);var v=Vr(e);Vl(e,v,r);break;case 3:case 4:var O=n.stateNode.containerInfo,J=Vr(e);Fr(e,J,O);break;default:throw Error(f(161))}}catch(ie){Ie(e,e.return,ie)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Uf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Uf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Dn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)zf(e,t.alternate,t),t=t.sibling}function ra(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Nn(4,t,t.return),ra(t);break;case 1:Pt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&kf(t,t.return,n),ra(t);break;case 27:Gi(t.stateNode);case 26:case 5:Pt(t,t.return),ra(t);break;case 22:t.memoizedState===null&&ra(t);break;case 30:ra(t);break;default:ra(t)}e=e.sibling}}function zn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,l=t,r=l.flags;switch(l.tag){case 0:case 11:case 15:zn(i,l,n),Ci(4,l);break;case 1:if(zn(i,l,n),a=l,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(J){Ie(a,a.return,J)}if(a=l,i=a.updateQueue,i!==null){var v=a.stateNode;try{var O=i.shared.hiddenCallbacks;if(O!==null)for(i.shared.hiddenCallbacks=null,i=0;i<O.length;i++)oo(O[i],v)}catch(J){Ie(a,a.return,J)}}n&&r&64&&Af(l),Ni(l,l.return);break;case 27:Nf(l);case 26:case 5:zn(i,l,n),n&&a===null&&r&4&&Tf(l),Ni(l,l.return);break;case 12:zn(i,l,n);break;case 13:zn(i,l,n),n&&r&4&&Bf(i,l);break;case 22:l.memoizedState===null&&zn(i,l,n),Ni(l,l.return);break;case 30:break;default:zn(i,l,n)}t=t.sibling}}function Zr(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&pi(n))}function Qr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pi(e))}function en(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Hf(e,t,n,a),t=t.sibling}function Hf(e,t,n,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:en(e,t,n,a),i&2048&&Ci(9,t);break;case 1:en(e,t,n,a);break;case 3:en(e,t,n,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pi(e)));break;case 12:if(i&2048){en(e,t,n,a),e=t.stateNode;try{var l=t.memoizedProps,r=l.id,v=l.onPostCommit;typeof v=="function"&&v(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(O){Ie(t,t.return,O)}}else en(e,t,n,a);break;case 13:en(e,t,n,a);break;case 23:break;case 22:l=t.stateNode,r=t.alternate,t.memoizedState!==null?l._visibility&2?en(e,t,n,a):Di(e,t):l._visibility&2?en(e,t,n,a):(l._visibility|=2,qa(e,t,n,a,(t.subtreeFlags&10256)!==0)),i&2048&&Zr(r,t);break;case 24:en(e,t,n,a),i&2048&&Qr(t.alternate,t);break;default:en(e,t,n,a)}}function qa(e,t,n,a,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var l=e,r=t,v=n,O=a,J=r.flags;switch(r.tag){case 0:case 11:case 15:qa(l,r,v,O,i),Ci(8,r);break;case 23:break;case 22:var ie=r.stateNode;r.memoizedState!==null?ie._visibility&2?qa(l,r,v,O,i):Di(l,r):(ie._visibility|=2,qa(l,r,v,O,i)),i&&J&2048&&Zr(r.alternate,r);break;case 24:qa(l,r,v,O,i),i&&J&2048&&Qr(r.alternate,r);break;default:qa(l,r,v,O,i)}t=t.sibling}}function Di(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,i=a.flags;switch(a.tag){case 22:Di(n,a),i&2048&&Zr(a.alternate,a);break;case 24:Di(n,a),i&2048&&Qr(a.alternate,a);break;default:Di(n,a)}t=t.sibling}}var zi=8192;function La(e){if(e.subtreeFlags&zi)for(e=e.child;e!==null;)Gf(e),e=e.sibling}function Gf(e){switch(e.tag){case 26:La(e),e.flags&zi&&e.memoizedState!==null&&kp(Jt,e.memoizedState,e.memoizedProps);break;case 5:La(e);break;case 3:case 4:var t=Jt;Jt=ts(e.stateNode.containerInfo),La(e),Jt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=zi,zi=16777216,La(e),zi=t):La(e));break;default:La(e)}}function qf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ri(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];ht=a,Vf(a,e)}qf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Lf(e),e=e.sibling}function Lf(e){switch(e.tag){case 0:case 11:case 15:Ri(e),e.flags&2048&&Nn(9,e,e.return);break;case 3:Ri(e);break;case 12:Ri(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Ri(e);break;default:Ri(e)}}function Fl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];ht=a,Vf(a,e)}qf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Nn(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Vf(e,t){for(;ht!==null;){var n=ht;switch(n.tag){case 0:case 11:case 15:Nn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:pi(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,ht=a;else e:for(n=e;ht!==null;){a=ht;var i=a.sibling,l=a.return;if(Rf(a),a===n){ht=null;break e}if(i!==null){i.return=l,ht=i;break e}ht=l}}}var Fm={getCacheForType:function(e){var t=bt(ct),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Xm=typeof WeakMap=="function"?WeakMap:Map,Ye=0,Pe=null,Me=null,Ge=0,Ze=0,Rt=null,Rn=!1,Va=!1,Kr=!1,yn=0,it=0,On=0,ua=0,Jr=0,Xt=0,Fa=0,Oi=null,Tt=null,Ir=!1,$r=0,Xl=1/0,Yl=null,Bn=null,_t=0,Mn=null,Xa=null,Ya=0,Wr=0,Pr=null,Ff=null,Bi=0,eu=null;function Ot(){if((Ye&2)!==0&&Ge!==0)return Ge&-Ge;if(Z.T!==null){var e=za;return e!==0?e:ru()}return ac()}function Xf(){Xt===0&&(Xt=(Ge&536870912)===0||Fe?tl():536870912);var e=Ft.current;return e!==null&&(e.flags|=32),Xt}function Bt(e,t,n){(e===Pe&&(Ze===2||Ze===9)||e.cancelPendingCommit!==null)&&(Za(e,0),Un(e,Ge,Xt,!1)),Qt(e,n),((Ye&2)===0||e!==Pe)&&(e===Pe&&((Ye&2)===0&&(ua|=n),it===4&&Un(e,Ge,Xt,!1)),tn(e))}function Yf(e,t,n){if((Ye&6)!==0)throw Error(f(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||bn(e,t),i=a?Qm(e,t):au(e,t,!0),l=a;do{if(i===0){Va&&!a&&Un(e,t,0,!1);break}else{if(n=e.current.alternate,l&&!Ym(n)){i=au(e,t,!1),l=!1;continue}if(i===2){if(l=t,e.errorRecoveryDisabledLanes&l)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var v=e;i=Oi;var O=v.current.memoizedState.isDehydrated;if(O&&(Za(v,r).flags|=256),r=au(v,r,!1),r!==2){if(Kr&&!O){v.errorRecoveryDisabledLanes|=l,ua|=l,i=4;break e}l=Tt,Tt=i,l!==null&&(Tt===null?Tt=l:Tt.push.apply(Tt,l))}i=r}if(l=!1,i!==2)continue}}if(i===1){Za(e,0),Un(e,t,0,!0);break}e:{switch(a=e,l=i,l){case 0:case 1:throw Error(f(345));case 4:if((t&4194048)!==t)break;case 6:Un(a,t,Xt,!Rn);break e;case 2:Tt=null;break;case 3:case 5:break;default:throw Error(f(329))}if((t&62914560)===t&&(i=$r+300-N(),10<i)){if(Un(a,t,Xt,!Rn),St(a,0,!0)!==0)break e;a.timeoutHandle=bd(Zf.bind(null,a,n,Tt,Yl,Ir,t,Xt,ua,Fa,Rn,l,2,-0,0),i);break e}Zf(a,n,Tt,Yl,Ir,t,Xt,ua,Fa,Rn,l,0,-0,0)}}break}while(!0);tn(e)}function Zf(e,t,n,a,i,l,r,v,O,J,ie,oe,W,P){if(e.timeoutHandle=-1,oe=t.subtreeFlags,(oe&8192||(oe&16785408)===16785408)&&(Vi={stylesheets:null,count:0,unsuspend:Ap},Gf(t),oe=Tp(),oe!==null)){e.cancelPendingCommit=oe(Pf.bind(null,e,t,l,n,a,i,r,v,O,ie,1,W,P)),Un(e,l,r,!J);return}Pf(e,t,l,n,a,i,r,v,O)}function Ym(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],l=i.getSnapshot;i=i.value;try{if(!Ct(l(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Un(e,t,n,a){t&=~Jr,t&=~ua,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var l=31-$e(i),r=1<<l;a[l]=-1,i&=~r}n!==0&&tc(e,n,t)}function Zl(){return(Ye&6)===0?(Mi(0),!1):!0}function tu(){if(Me!==null){if(Ze===0)var e=Me.return;else e=Me,on=na=null,yr(e),Ha=null,Ai=0,e=Me;for(;e!==null;)Ef(e.alternate,e),e=e.return;Me=null}}function Za(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,cp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),tu(),Pe=e,Me=n=rn(e.current,null),Ge=t,Ze=0,Rt=null,Rn=!1,Va=bn(e,t),Kr=!1,Fa=Xt=Jr=ua=On=it=0,Tt=Oi=null,Ir=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-$e(a),l=1<<i;t|=e[i],a&=~l}return yn=t,ml(),n}function Qf(e,t){Oe=null,Z.H=Rl,t===_i||t===Sl?(t=uo(),Ze=3):t===lo?(t=uo(),Ze=4):Ze=t===ff?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Rt=t,Me===null&&(it=1,Hl(e,Gt(t,e.current)))}function Kf(){var e=Z.H;return Z.H=Rl,e===null?Rl:e}function Jf(){var e=Z.A;return Z.A=Fm,e}function nu(){it=4,Rn||(Ge&4194048)!==Ge&&Ft.current!==null||(Va=!0),(On&134217727)===0&&(ua&134217727)===0||Pe===null||Un(Pe,Ge,Xt,!1)}function au(e,t,n){var a=Ye;Ye|=2;var i=Kf(),l=Jf();(Pe!==e||Ge!==t)&&(Yl=null,Za(e,t)),t=!1;var r=it;e:do try{if(Ze!==0&&Me!==null){var v=Me,O=Rt;switch(Ze){case 8:tu(),r=6;break e;case 3:case 2:case 9:case 6:Ft.current===null&&(t=!0);var J=Ze;if(Ze=0,Rt=null,Qa(e,v,O,J),n&&Va){r=0;break e}break;default:J=Ze,Ze=0,Rt=null,Qa(e,v,O,J)}}Zm(),r=it;break}catch(ie){Qf(e,ie)}while(!0);return t&&e.shellSuspendCounter++,on=na=null,Ye=a,Z.H=i,Z.A=l,Me===null&&(Pe=null,Ge=0,ml()),r}function Zm(){for(;Me!==null;)If(Me)}function Qm(e,t){var n=Ye;Ye|=2;var a=Kf(),i=Jf();Pe!==e||Ge!==t?(Yl=null,Xl=N()+500,Za(e,t)):Va=bn(e,t);e:do try{if(Ze!==0&&Me!==null){t=Me;var l=Rt;t:switch(Ze){case 1:Ze=0,Rt=null,Qa(e,t,l,1);break;case 2:case 9:if(so(l)){Ze=0,Rt=null,$f(t);break}t=function(){Ze!==2&&Ze!==9||Pe!==e||(Ze=7),tn(e)},l.then(t,t);break e;case 3:Ze=7;break e;case 4:Ze=5;break e;case 7:so(l)?(Ze=0,Rt=null,$f(t)):(Ze=0,Rt=null,Qa(e,t,l,7));break;case 5:var r=null;switch(Me.tag){case 26:r=Me.memoizedState;case 5:case 27:var v=Me;if(!r||zd(r)){Ze=0,Rt=null;var O=v.sibling;if(O!==null)Me=O;else{var J=v.return;J!==null?(Me=J,Ql(J)):Me=null}break t}}Ze=0,Rt=null,Qa(e,t,l,5);break;case 6:Ze=0,Rt=null,Qa(e,t,l,6);break;case 8:tu(),it=6;break e;default:throw Error(f(462))}}Km();break}catch(ie){Qf(e,ie)}while(!0);return on=na=null,Z.H=a,Z.A=i,Ye=n,Me!==null?0:(Pe=null,Ge=0,ml(),it)}function Km(){for(;Me!==null&&!ue();)If(Me)}function If(e){var t=Sf(e.alternate,e,yn);e.memoizedProps=e.pendingProps,t===null?Ql(e):Me=t}function $f(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_f(n,t,t.pendingProps,t.type,void 0,Ge);break;case 11:t=_f(n,t,t.pendingProps,t.type.render,t.ref,Ge);break;case 5:yr(t);default:Ef(n,t),t=Me=Ic(t,yn),t=Sf(n,t,yn)}e.memoizedProps=e.pendingProps,t===null?Ql(e):Me=t}function Qa(e,t,n,a){on=na=null,yr(t),Ha=null,Ai=0;var i=t.return;try{if(Um(e,i,t,n,Ge)){it=1,Hl(e,Gt(n,e.current)),Me=null;return}}catch(l){if(i!==null)throw Me=i,l;it=1,Hl(e,Gt(n,e.current)),Me=null;return}t.flags&32768?(Fe||a===1?e=!0:Va||(Ge&536870912)!==0?e=!1:(Rn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Ft.current,a!==null&&a.tag===13&&(a.flags|=16384))),Wf(t,e)):Ql(t)}function Ql(e){var t=e;do{if((t.flags&32768)!==0){Wf(t,Rn);return}e=t.return;var n=Gm(t.alternate,t,yn);if(n!==null){Me=n;return}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);it===0&&(it=5)}function Wf(e,t){do{var n=qm(e.alternate,e);if(n!==null){n.flags&=32767,Me=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Me=e;return}Me=e=n}while(e!==null);it=6,Me=null}function Pf(e,t,n,a,i,l,r,v,O){e.cancelPendingCommit=null;do Kl();while(_t!==0);if((Ye&6)!==0)throw Error(f(327));if(t!==null){if(t===e.current)throw Error(f(177));if(l=t.lanes|t.childLanes,l|=Qs,ha(e,n,l,r,v,O),e===Pe&&(Me=Pe=null,Ge=0),Xa=t,Mn=e,Ya=n,Wr=l,Pr=i,Ff=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Wm(he,function(){return id(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=Z.T,Z.T=null,i=Q.p,Q.p=2,r=Ye,Ye|=4;try{Lm(e,t,n)}finally{Ye=r,Q.p=i,Z.T=a}}_t=1,ed(),td(),nd()}}function ed(){if(_t===1){_t=0;var e=Mn,t=Xa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Z.T,Z.T=null;var a=Q.p;Q.p=2;var i=Ye;Ye|=4;try{Mf(t,e);var l=pu,r=qc(e.containerInfo),v=l.focusedElem,O=l.selectionRange;if(r!==v&&v&&v.ownerDocument&&Gc(v.ownerDocument.documentElement,v)){if(O!==null&&Vs(v)){var J=O.start,ie=O.end;if(ie===void 0&&(ie=J),"selectionStart"in v)v.selectionStart=J,v.selectionEnd=Math.min(ie,v.value.length);else{var oe=v.ownerDocument||document,W=oe&&oe.defaultView||window;if(W.getSelection){var P=W.getSelection(),Ce=v.textContent.length,ke=Math.min(O.start,Ce),Je=O.end===void 0?ke:Math.min(O.end,Ce);!P.extend&&ke>Je&&(r=Je,Je=ke,ke=r);var X=Hc(v,ke),q=Hc(v,Je);if(X&&q&&(P.rangeCount!==1||P.anchorNode!==X.node||P.anchorOffset!==X.offset||P.focusNode!==q.node||P.focusOffset!==q.offset)){var K=oe.createRange();K.setStart(X.node,X.offset),P.removeAllRanges(),ke>Je?(P.addRange(K),P.extend(q.node,q.offset)):(K.setEnd(q.node,q.offset),P.addRange(K))}}}}for(oe=[],P=v;P=P.parentNode;)P.nodeType===1&&oe.push({element:P,left:P.scrollLeft,top:P.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<oe.length;v++){var re=oe[v];re.element.scrollLeft=re.left,re.element.scrollTop=re.top}}ss=!!mu,pu=mu=null}finally{Ye=i,Q.p=a,Z.T=n}}e.current=t,_t=2}}function td(){if(_t===2){_t=0;var e=Mn,t=Xa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Z.T,Z.T=null;var a=Q.p;Q.p=2;var i=Ye;Ye|=4;try{zf(e,t.alternate,t)}finally{Ye=i,Q.p=a,Z.T=n}}_t=3}}function nd(){if(_t===4||_t===3){_t=0,te();var e=Mn,t=Xa,n=Ya,a=Ff;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?_t=5:(_t=0,Xa=Mn=null,ad(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Bn=null),xs(n),t=t.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(Ee,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=Z.T,i=Q.p,Q.p=2,Z.T=null;try{for(var l=e.onRecoverableError,r=0;r<a.length;r++){var v=a[r];l(v.value,{componentStack:v.stack})}}finally{Z.T=t,Q.p=i}}(Ya&3)!==0&&Kl(),tn(e),i=e.pendingLanes,(n&4194090)!==0&&(i&42)!==0?e===eu?Bi++:(Bi=0,eu=e):Bi=0,Mi(0)}}function ad(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,pi(t)))}function Kl(e){return ed(),td(),nd(),id()}function id(){if(_t!==5)return!1;var e=Mn,t=Wr;Wr=0;var n=xs(Ya),a=Z.T,i=Q.p;try{Q.p=32>n?32:n,Z.T=null,n=Pr,Pr=null;var l=Mn,r=Ya;if(_t=0,Xa=Mn=null,Ya=0,(Ye&6)!==0)throw Error(f(331));var v=Ye;if(Ye|=4,Lf(l.current),Hf(l,l.current,r,n),Ye=v,Mi(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(Ee,l)}catch{}return!0}finally{Q.p=i,Z.T=a,ad(e,t)}}function ld(e,t,n){t=Gt(n,t),t=zr(e.stateNode,t,2),e=An(e,t,2),e!==null&&(Qt(e,2),tn(e))}function Ie(e,t,n){if(e.tag===3)ld(e,e,n);else for(;t!==null;){if(t.tag===3){ld(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Bn===null||!Bn.has(a))){e=Gt(n,e),n=cf(2),a=An(t,n,2),a!==null&&(of(n,a,t,e),Qt(a,2),tn(a));break}}t=t.return}}function iu(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Xm;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(Kr=!0,i.add(n),e=Jm.bind(null,e,t,n),t.then(e,e))}function Jm(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Pe===e&&(Ge&n)===n&&(it===4||it===3&&(Ge&62914560)===Ge&&300>N()-$r?(Ye&2)===0&&Za(e,0):Jr|=n,Fa===Ge&&(Fa=0)),tn(e)}function sd(e,t){t===0&&(t=nl()),e=Ta(e,t),e!==null&&(Qt(e,t),tn(e))}function Im(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sd(e,n)}function $m(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(f(314))}a!==null&&a.delete(t),sd(e,n)}function Wm(e,t){return et(e,t)}var Jl=null,Ka=null,lu=!1,Il=!1,su=!1,ca=0;function tn(e){e!==Ka&&e.next===null&&(Ka===null?Jl=Ka=e:Ka=Ka.next=e),Il=!0,lu||(lu=!0,ep())}function Mi(e,t){if(!su&&Il){su=!0;do for(var n=!1,a=Jl;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var l=0;else{var r=a.suspendedLanes,v=a.pingedLanes;l=(1<<31-$e(42|e)+1)-1,l&=i&~(r&~v),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(n=!0,od(a,l))}else l=Ge,l=St(a,a===Pe?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(l&3)===0||bn(a,l)||(n=!0,od(a,l));a=a.next}while(n);su=!1}}function Pm(){rd()}function rd(){Il=lu=!1;var e=0;ca!==0&&(up()&&(e=ca),ca=0);for(var t=N(),n=null,a=Jl;a!==null;){var i=a.next,l=ud(a,t);l===0?(a.next=null,n===null?Jl=i:n.next=i,i===null&&(Ka=n)):(n=a,(e!==0||(l&3)!==0)&&(Il=!0)),a=i}Mi(e)}function ud(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var r=31-$e(l),v=1<<r,O=i[r];O===-1?((v&n)===0||(v&a)!==0)&&(i[r]=vs(v,t)):O<=t&&(e.expiredLanes|=v),l&=~v}if(t=Pe,n=Ge,n=St(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Ze===2||Ze===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&c(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||bn(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&c(a),xs(n)){case 2:case 8:n=de;break;case 32:n=he;break;case 268435456:n=_e;break;default:n=he}return a=cd.bind(null,e),n=et(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&c(a),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(_t!==0&&_t!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Kl()&&e.callbackNode!==n)return null;var a=Ge;return a=St(e,e===Pe?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Yf(e,a,t),ud(e,N()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function od(e,t){if(Kl())return null;Yf(e,t,!0)}function ep(){op(function(){(Ye&6)!==0?et(F,Pm):rd()})}function ru(){return ca===0&&(ca=tl()),ca}function fd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:rl(""+e)}function dd(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function tp(e,t,n,a,i){if(t==="submit"&&n&&n.stateNode===i){var l=fd((i[jt]||null).action),r=a.submitter;r&&(t=(t=r[jt]||null)?fd(t.formAction):r.getAttribute("formAction"),t!==null&&(l=t,r=null));var v=new fl("action","action",null,a,i);e.push({event:v,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ca!==0){var O=r?dd(i,r):new FormData(i);kr(n,{pending:!0,data:O,method:i.method,action:l},null,O)}}else typeof l=="function"&&(v.preventDefault(),O=r?dd(i,r):new FormData(i),kr(n,{pending:!0,data:O,method:i.method,action:l},l,O))},currentTarget:i}]})}}for(var uu=0;uu<Zs.length;uu++){var cu=Zs[uu],np=cu.toLowerCase(),ap=cu[0].toUpperCase()+cu.slice(1);Kt(np,"on"+ap)}Kt(Fc,"onAnimationEnd"),Kt(Xc,"onAnimationIteration"),Kt(Yc,"onAnimationStart"),Kt("dblclick","onDoubleClick"),Kt("focusin","onFocus"),Kt("focusout","onBlur"),Kt(bm,"onTransitionRun"),Kt(xm,"onTransitionStart"),Kt(wm,"onTransitionCancel"),Kt(Zc,"onTransitionEnd"),ya("onMouseEnter",["mouseout","mouseover"]),ya("onMouseLeave",["mouseout","mouseover"]),ya("onPointerEnter",["pointerout","pointerover"]),ya("onPointerLeave",["pointerout","pointerover"]),Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ip=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ui));function hd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var l=void 0;if(t)for(var r=a.length-1;0<=r;r--){var v=a[r],O=v.instance,J=v.currentTarget;if(v=v.listener,O!==l&&i.isPropagationStopped())break e;l=v,i.currentTarget=J;try{l(i)}catch(ie){Ul(ie)}i.currentTarget=null,l=O}else for(r=0;r<a.length;r++){if(v=a[r],O=v.instance,J=v.currentTarget,v=v.listener,O!==l&&i.isPropagationStopped())break e;l=v,i.currentTarget=J;try{l(i)}catch(ie){Ul(ie)}i.currentTarget=null,l=O}}}}function Ue(e,t){var n=t[ws];n===void 0&&(n=t[ws]=new Set);var a=e+"__bubble";n.has(a)||(md(t,e,2,!1),n.add(a))}function ou(e,t,n){var a=0;t&&(a|=4),md(n,e,a,t)}var $l="_reactListening"+Math.random().toString(36).slice(2);function fu(e){if(!e[$l]){e[$l]=!0,lc.forEach(function(n){n!=="selectionchange"&&(ip.has(n)||ou(n,!1,e),ou(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$l]||(t[$l]=!0,ou("selectionchange",!1,t))}}function md(e,t,n,a){switch(Hd(t)){case 2:var i=Dp;break;case 8:i=zp;break;default:i=Eu}n=i.bind(null,t,n,e),i=void 0,!Rs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function du(e,t,n,a,i){var l=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var v=a.stateNode.containerInfo;if(v===i)break;if(r===4)for(r=a.return;r!==null;){var O=r.tag;if((O===3||O===4)&&r.stateNode.containerInfo===i)return;r=r.return}for(;v!==null;){if(r=pa(v),r===null)return;if(O=r.tag,O===5||O===6||O===26||O===27){a=l=r;continue e}v=v.parentNode}}a=a.return}vc(function(){var J=l,ie=Ds(n),oe=[];e:{var W=Qc.get(e);if(W!==void 0){var P=fl,Ce=e;switch(e){case"keypress":if(cl(n)===0)break e;case"keydown":case"keyup":P=Wh;break;case"focusin":Ce="focus",P=Us;break;case"focusout":Ce="blur",P=Us;break;case"beforeblur":case"afterblur":P=Us;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=wc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=qh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=tm;break;case Fc:case Xc:case Yc:P=Fh;break;case Zc:P=am;break;case"scroll":case"scrollend":P=Hh;break;case"wheel":P=lm;break;case"copy":case"cut":case"paste":P=Yh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=jc;break;case"toggle":case"beforetoggle":P=rm}var ke=(t&4)!==0,Je=!ke&&(e==="scroll"||e==="scrollend"),X=ke?W!==null?W+"Capture":null:W;ke=[];for(var q=J,K;q!==null;){var re=q;if(K=re.stateNode,re=re.tag,re!==5&&re!==26&&re!==27||K===null||X===null||(re=ni(q,X),re!=null&&ke.push(Hi(q,re,K))),Je)break;q=q.return}0<ke.length&&(W=new P(W,Ce,null,n,ie),oe.push({event:W,listeners:ke}))}}if((t&7)===0){e:{if(W=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",W&&n!==Ns&&(Ce=n.relatedTarget||n.fromElement)&&(pa(Ce)||Ce[ma]))break e;if((P||W)&&(W=ie.window===ie?ie:(W=ie.ownerDocument)?W.defaultView||W.parentWindow:window,P?(Ce=n.relatedTarget||n.toElement,P=J,Ce=Ce?pa(Ce):null,Ce!==null&&(Je=d(Ce),ke=Ce.tag,Ce!==Je||ke!==5&&ke!==27&&ke!==6)&&(Ce=null)):(P=null,Ce=J),P!==Ce)){if(ke=wc,re="onMouseLeave",X="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(ke=jc,re="onPointerLeave",X="onPointerEnter",q="pointer"),Je=P==null?W:ti(P),K=Ce==null?W:ti(Ce),W=new ke(re,q+"leave",P,n,ie),W.target=Je,W.relatedTarget=K,re=null,pa(ie)===J&&(ke=new ke(X,q+"enter",Ce,n,ie),ke.target=K,ke.relatedTarget=Je,re=ke),Je=re,P&&Ce)t:{for(ke=P,X=Ce,q=0,K=ke;K;K=Ja(K))q++;for(K=0,re=X;re;re=Ja(re))K++;for(;0<q-K;)ke=Ja(ke),q--;for(;0<K-q;)X=Ja(X),K--;for(;q--;){if(ke===X||X!==null&&ke===X.alternate)break t;ke=Ja(ke),X=Ja(X)}ke=null}else ke=null;P!==null&&pd(oe,W,P,ke,!1),Ce!==null&&Je!==null&&pd(oe,Je,Ce,ke,!0)}}e:{if(W=J?ti(J):window,P=W.nodeName&&W.nodeName.toLowerCase(),P==="select"||P==="input"&&W.type==="file")var we=zc;else if(Nc(W))if(Rc)we=_m;else{we=pm;var Be=mm}else P=W.nodeName,!P||P.toLowerCase()!=="input"||W.type!=="checkbox"&&W.type!=="radio"?J&&Cs(J.elementType)&&(we=zc):we=gm;if(we&&(we=we(e,J))){Dc(oe,we,n,ie);break e}Be&&Be(e,W,J),e==="focusout"&&J&&W.type==="number"&&J.memoizedProps.value!=null&&Ts(W,"number",W.value)}switch(Be=J?ti(J):window,e){case"focusin":(Nc(Be)||Be.contentEditable==="true")&&(Ea=Be,Fs=J,oi=null);break;case"focusout":oi=Fs=Ea=null;break;case"mousedown":Xs=!0;break;case"contextmenu":case"mouseup":case"dragend":Xs=!1,Lc(oe,n,ie);break;case"selectionchange":if(vm)break;case"keydown":case"keyup":Lc(oe,n,ie)}var Ae;if(Gs)e:{switch(e){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else ja?Tc(e,n)&&(Te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Te="onCompositionStart");Te&&(Ec&&n.locale!=="ko"&&(ja||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&ja&&(Ae=bc()):(wn=ie,Os="value"in wn?wn.value:wn.textContent,ja=!0)),Be=Wl(J,Te),0<Be.length&&(Te=new Sc(Te,e,null,n,ie),oe.push({event:Te,listeners:Be}),Ae?Te.data=Ae:(Ae=Cc(n),Ae!==null&&(Te.data=Ae)))),(Ae=cm?om(e,n):fm(e,n))&&(Te=Wl(J,"onBeforeInput"),0<Te.length&&(Be=new Sc("onBeforeInput","beforeinput",null,n,ie),oe.push({event:Be,listeners:Te}),Be.data=Ae)),tp(oe,e,J,n,ie)}hd(oe,t)})}function Hi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wl(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=ni(e,n),i!=null&&a.unshift(Hi(e,i,l)),i=ni(e,t),i!=null&&a.push(Hi(e,i,l))),e.tag===3)return a;e=e.return}return[]}function Ja(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function pd(e,t,n,a,i){for(var l=t._reactName,r=[];n!==null&&n!==a;){var v=n,O=v.alternate,J=v.stateNode;if(v=v.tag,O!==null&&O===a)break;v!==5&&v!==26&&v!==27||J===null||(O=J,i?(J=ni(n,l),J!=null&&r.unshift(Hi(n,J,O))):i||(J=ni(n,l),J!=null&&r.push(Hi(n,J,O)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var lp=/\r\n?/g,sp=/\u0000|\uFFFD/g;function gd(e){return(typeof e=="string"?e:""+e).replace(lp,`
`).replace(sp,"")}function _d(e,t){return t=gd(t),gd(e)===t}function Pl(){}function Ke(e,t,n,a,i,l){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||xa(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&xa(e,""+a);break;case"className":il(e,"class",a);break;case"tabIndex":il(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":il(e,n,a);break;case"style":_c(e,a,l);break;case"data":if(t!=="object"){il(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=rl(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(n==="formAction"?(t!=="input"&&Ke(e,t,"name",i.name,i,null),Ke(e,t,"formEncType",i.formEncType,i,null),Ke(e,t,"formMethod",i.formMethod,i,null),Ke(e,t,"formTarget",i.formTarget,i,null)):(Ke(e,t,"encType",i.encType,i,null),Ke(e,t,"method",i.method,i,null),Ke(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=rl(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Pl);break;case"onScroll":a!=null&&Ue("scroll",e);break;case"onScrollEnd":a!=null&&Ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(f(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(f(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=rl(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Ue("beforetoggle",e),Ue("toggle",e),al(e,"popover",a);break;case"xlinkActuate":ln(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ln(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ln(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ln(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ln(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ln(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ln(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ln(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ln(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":al(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Mh.get(n)||n,al(e,n,a))}}function hu(e,t,n,a,i,l){switch(n){case"style":_c(e,a,l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(f(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(f(60));e.innerHTML=n}}break;case"children":typeof a=="string"?xa(e,a):(typeof a=="number"||typeof a=="bigint")&&xa(e,""+a);break;case"onScroll":a!=null&&Ue("scroll",e);break;case"onScrollEnd":a!=null&&Ue("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Pl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!sc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),l=e[jt]||null,l=l!=null?l[n]:null,typeof l=="function"&&e.removeEventListener(t,l,i),typeof a=="function")){typeof l!="function"&&l!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,i);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):al(e,n,a)}}}function yt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ue("error",e),Ue("load",e);var a=!1,i=!1,l;for(l in n)if(n.hasOwnProperty(l)){var r=n[l];if(r!=null)switch(l){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:Ke(e,t,l,r,n,null)}}i&&Ke(e,t,"srcSet",n.srcSet,n,null),a&&Ke(e,t,"src",n.src,n,null);return;case"input":Ue("invalid",e);var v=l=r=i=null,O=null,J=null;for(a in n)if(n.hasOwnProperty(a)){var ie=n[a];if(ie!=null)switch(a){case"name":i=ie;break;case"type":r=ie;break;case"checked":O=ie;break;case"defaultChecked":J=ie;break;case"value":l=ie;break;case"defaultValue":v=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(f(137,t));break;default:Ke(e,t,a,ie,n,null)}}hc(e,l,v,O,J,r,i,!1),ll(e);return;case"select":Ue("invalid",e),a=r=l=null;for(i in n)if(n.hasOwnProperty(i)&&(v=n[i],v!=null))switch(i){case"value":l=v;break;case"defaultValue":r=v;break;case"multiple":a=v;default:Ke(e,t,i,v,n,null)}t=l,n=r,e.multiple=!!a,t!=null?ba(e,!!a,t,!1):n!=null&&ba(e,!!a,n,!0);return;case"textarea":Ue("invalid",e),l=i=a=null;for(r in n)if(n.hasOwnProperty(r)&&(v=n[r],v!=null))switch(r){case"value":a=v;break;case"defaultValue":i=v;break;case"children":l=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(f(91));break;default:Ke(e,t,r,v,n,null)}pc(e,a,i,l),ll(e);return;case"option":for(O in n)if(n.hasOwnProperty(O)&&(a=n[O],a!=null))switch(O){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ke(e,t,O,a,n,null)}return;case"dialog":Ue("beforetoggle",e),Ue("toggle",e),Ue("cancel",e),Ue("close",e);break;case"iframe":case"object":Ue("load",e);break;case"video":case"audio":for(a=0;a<Ui.length;a++)Ue(Ui[a],e);break;case"image":Ue("error",e),Ue("load",e);break;case"details":Ue("toggle",e);break;case"embed":case"source":case"link":Ue("error",e),Ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in n)if(n.hasOwnProperty(J)&&(a=n[J],a!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:Ke(e,t,J,a,n,null)}return;default:if(Cs(t)){for(ie in n)n.hasOwnProperty(ie)&&(a=n[ie],a!==void 0&&hu(e,t,ie,a,n,void 0));return}}for(v in n)n.hasOwnProperty(v)&&(a=n[v],a!=null&&Ke(e,t,v,a,n,null))}function rp(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,r=null,v=null,O=null,J=null,ie=null;for(P in n){var oe=n[P];if(n.hasOwnProperty(P)&&oe!=null)switch(P){case"checked":break;case"value":break;case"defaultValue":O=oe;default:a.hasOwnProperty(P)||Ke(e,t,P,null,a,oe)}}for(var W in a){var P=a[W];if(oe=n[W],a.hasOwnProperty(W)&&(P!=null||oe!=null))switch(W){case"type":l=P;break;case"name":i=P;break;case"checked":J=P;break;case"defaultChecked":ie=P;break;case"value":r=P;break;case"defaultValue":v=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(f(137,t));break;default:P!==oe&&Ke(e,t,W,P,a,oe)}}ks(e,r,v,O,J,ie,l,i);return;case"select":P=r=v=W=null;for(l in n)if(O=n[l],n.hasOwnProperty(l)&&O!=null)switch(l){case"value":break;case"multiple":P=O;default:a.hasOwnProperty(l)||Ke(e,t,l,null,a,O)}for(i in a)if(l=a[i],O=n[i],a.hasOwnProperty(i)&&(l!=null||O!=null))switch(i){case"value":W=l;break;case"defaultValue":v=l;break;case"multiple":r=l;default:l!==O&&Ke(e,t,i,l,a,O)}t=v,n=r,a=P,W!=null?ba(e,!!n,W,!1):!!a!=!!n&&(t!=null?ba(e,!!n,t,!0):ba(e,!!n,n?[]:"",!1));return;case"textarea":P=W=null;for(v in n)if(i=n[v],n.hasOwnProperty(v)&&i!=null&&!a.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Ke(e,t,v,null,a,i)}for(r in a)if(i=a[r],l=n[r],a.hasOwnProperty(r)&&(i!=null||l!=null))switch(r){case"value":W=i;break;case"defaultValue":P=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(f(91));break;default:i!==l&&Ke(e,t,r,i,a,l)}mc(e,W,P);return;case"option":for(var Ce in n)if(W=n[Ce],n.hasOwnProperty(Ce)&&W!=null&&!a.hasOwnProperty(Ce))switch(Ce){case"selected":e.selected=!1;break;default:Ke(e,t,Ce,null,a,W)}for(O in a)if(W=a[O],P=n[O],a.hasOwnProperty(O)&&W!==P&&(W!=null||P!=null))switch(O){case"selected":e.selected=W&&typeof W!="function"&&typeof W!="symbol";break;default:Ke(e,t,O,W,a,P)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ke in n)W=n[ke],n.hasOwnProperty(ke)&&W!=null&&!a.hasOwnProperty(ke)&&Ke(e,t,ke,null,a,W);for(J in a)if(W=a[J],P=n[J],a.hasOwnProperty(J)&&W!==P&&(W!=null||P!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(f(137,t));break;default:Ke(e,t,J,W,a,P)}return;default:if(Cs(t)){for(var Je in n)W=n[Je],n.hasOwnProperty(Je)&&W!==void 0&&!a.hasOwnProperty(Je)&&hu(e,t,Je,void 0,a,W);for(ie in a)W=a[ie],P=n[ie],!a.hasOwnProperty(ie)||W===P||W===void 0&&P===void 0||hu(e,t,ie,W,a,P);return}}for(var X in n)W=n[X],n.hasOwnProperty(X)&&W!=null&&!a.hasOwnProperty(X)&&Ke(e,t,X,null,a,W);for(oe in a)W=a[oe],P=n[oe],!a.hasOwnProperty(oe)||W===P||W==null&&P==null||Ke(e,t,oe,W,a,P)}var mu=null,pu=null;function es(e){return e.nodeType===9?e:e.ownerDocument}function yd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function gu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _u=null;function up(){var e=window.event;return e&&e.type==="popstate"?e===_u?!1:(_u=e,!0):(_u=null,!1)}var bd=typeof setTimeout=="function"?setTimeout:void 0,cp=typeof clearTimeout=="function"?clearTimeout:void 0,xd=typeof Promise=="function"?Promise:void 0,op=typeof queueMicrotask=="function"?queueMicrotask:typeof xd<"u"?function(e){return xd.resolve(null).then(e).catch(fp)}:bd;function fp(e){setTimeout(function(){throw e})}function Hn(e){return e==="head"}function wd(e,t){var n=t,a=0,i=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(0<a&&8>a){n=a;var r=e.ownerDocument;if(n&1&&Gi(r.documentElement),n&2&&Gi(r.body),n&4)for(n=r.head,Gi(n),r=n.firstChild;r;){var v=r.nextSibling,O=r.nodeName;r[ei]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=v}}if(i===0){e.removeChild(l),Qi(t);return}i--}else n==="$"||n==="$?"||n==="$!"?i++:a=n.charCodeAt(0)-48;else a=0;n=l}while(n);Qi(t)}function yu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":yu(n),Ss(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function dp(e,t,n,a){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[ei])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=It(e.nextSibling),e===null)break}return null}function hp(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=It(e.nextSibling),e===null))return null;return e}function vu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function mp(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function It(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var bu=null;function Sd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function jd(e,t,n){switch(t=es(n),e){case"html":if(e=t.documentElement,!e)throw Error(f(452));return e;case"head":if(e=t.head,!e)throw Error(f(453));return e;case"body":if(e=t.body,!e)throw Error(f(454));return e;default:throw Error(f(451))}}function Gi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ss(e)}var Yt=new Map,Ed=new Set;function ts(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var vn=Q.d;Q.d={f:pp,r:gp,D:_p,C:yp,L:vp,m:bp,X:wp,S:xp,M:Sp};function pp(){var e=vn.f(),t=Zl();return e||t}function gp(e){var t=ga(e);t!==null&&t.tag===5&&t.type==="form"?Xo(t):vn.r(e)}var Ia=typeof document>"u"?null:document;function Ad(e,t,n){var a=Ia;if(a&&typeof t=="string"&&t){var i=Ht(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),Ed.has(i)||(Ed.add(i),e={rel:e,crossOrigin:n,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),yt(t,"link",e),ft(t),a.head.appendChild(t)))}}function _p(e){vn.D(e),Ad("dns-prefetch",e,null)}function yp(e,t){vn.C(e,t),Ad("preconnect",e,t)}function vp(e,t,n){vn.L(e,t,n);var a=Ia;if(a&&e&&t){var i='link[rel="preload"][as="'+Ht(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+Ht(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+Ht(n.imageSizes)+'"]')):i+='[href="'+Ht(e)+'"]';var l=i;switch(t){case"style":l=$a(e);break;case"script":l=Wa(e)}Yt.has(l)||(e=S({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Yt.set(l,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(qi(l))||t==="script"&&a.querySelector(Li(l))||(t=a.createElement("link"),yt(t,"link",e),ft(t),a.head.appendChild(t)))}}function bp(e,t){vn.m(e,t);var n=Ia;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Ht(a)+'"][href="'+Ht(e)+'"]',l=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Wa(e)}if(!Yt.has(l)&&(e=S({rel:"modulepreload",href:e},t),Yt.set(l,e),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Li(l)))return}a=n.createElement("link"),yt(a,"link",e),ft(a),n.head.appendChild(a)}}}function xp(e,t,n){vn.S(e,t,n);var a=Ia;if(a&&e){var i=_a(a).hoistableStyles,l=$a(e);t=t||"default";var r=i.get(l);if(!r){var v={loading:0,preload:null};if(r=a.querySelector(qi(l)))v.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Yt.get(l))&&xu(e,n);var O=r=a.createElement("link");ft(O),yt(O,"link",e),O._p=new Promise(function(J,ie){O.onload=J,O.onerror=ie}),O.addEventListener("load",function(){v.loading|=1}),O.addEventListener("error",function(){v.loading|=2}),v.loading|=4,ns(r,t,a)}r={type:"stylesheet",instance:r,count:1,state:v},i.set(l,r)}}}function wp(e,t){vn.X(e,t);var n=Ia;if(n&&e){var a=_a(n).hoistableScripts,i=Wa(e),l=a.get(i);l||(l=n.querySelector(Li(i)),l||(e=S({src:e,async:!0},t),(t=Yt.get(i))&&wu(e,t),l=n.createElement("script"),ft(l),yt(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function Sp(e,t){vn.M(e,t);var n=Ia;if(n&&e){var a=_a(n).hoistableScripts,i=Wa(e),l=a.get(i);l||(l=n.querySelector(Li(i)),l||(e=S({src:e,async:!0,type:"module"},t),(t=Yt.get(i))&&wu(e,t),l=n.createElement("script"),ft(l),yt(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function kd(e,t,n,a){var i=(i=ve.current)?ts(i):null;if(!i)throw Error(f(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=$a(n.href),n=_a(i).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=$a(n.href);var l=_a(i).hoistableStyles,r=l.get(e);if(r||(i=i.ownerDocument||i,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,r),(l=i.querySelector(qi(e)))&&!l._p&&(r.instance=l,r.state.loading=5),Yt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Yt.set(e,n),l||jp(i,e,n,r.state))),t&&a===null)throw Error(f(528,""));return r}if(t&&a!==null)throw Error(f(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Wa(n),n=_a(i).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,e))}}function $a(e){return'href="'+Ht(e)+'"'}function qi(e){return'link[rel="stylesheet"]['+e+"]"}function Td(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function jp(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),yt(t,"link",n),ft(t),e.head.appendChild(t))}function Wa(e){return'[src="'+Ht(e)+'"]'}function Li(e){return"script[async]"+e}function Cd(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Ht(n.href)+'"]');if(a)return t.instance=a,ft(a),a;var i=S({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),ft(a),yt(a,"style",i),ns(a,n.precedence,e),t.instance=a;case"stylesheet":i=$a(n.href);var l=e.querySelector(qi(i));if(l)return t.state.loading|=4,t.instance=l,ft(l),l;a=Td(n),(i=Yt.get(i))&&xu(a,i),l=(e.ownerDocument||e).createElement("link"),ft(l);var r=l;return r._p=new Promise(function(v,O){r.onload=v,r.onerror=O}),yt(l,"link",a),t.state.loading|=4,ns(l,n.precedence,e),t.instance=l;case"script":return l=Wa(n.src),(i=e.querySelector(Li(l)))?(t.instance=i,ft(i),i):(a=n,(i=Yt.get(l))&&(a=S({},n),wu(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),ft(i),yt(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(f(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,ns(a,n.precedence,e));return t.instance}function ns(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,l=i,r=0;r<a.length;r++){var v=a[r];if(v.dataset.precedence===t)l=v;else if(l!==i)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function xu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function wu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var as=null;function Nd(e,t,n){if(as===null){var a=new Map,i=as=new Map;i.set(n,a)}else i=as,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var l=n[i];if(!(l[ei]||l[vt]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var r=l.getAttribute(t)||"";r=e+r;var v=a.get(r);v?v.push(l):a.set(r,[l])}}return a}function Dd(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Ep(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function zd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Vi=null;function Ap(){}function kp(e,t,n){if(Vi===null)throw Error(f(475));var a=Vi;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=$a(n.href),l=e.querySelector(qi(i));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=is.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=l,ft(l);return}l=e.ownerDocument||e,n=Td(n),(i=Yt.get(i))&&xu(n,i),l=l.createElement("link"),ft(l);var r=l;r._p=new Promise(function(v,O){r.onload=v,r.onerror=O}),yt(l,"link",n),t.instance=l}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=is.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function Tp(){if(Vi===null)throw Error(f(475));var e=Vi;return e.stylesheets&&e.count===0&&Su(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Su(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function is(){if(this.count--,this.count===0){if(this.stylesheets)Su(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ls=null;function Su(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ls=new Map,t.forEach(Cp,e),ls=null,is.call(e))}function Cp(e,t){if(!(t.state.loading&4)){var n=ls.get(e);if(n)var a=n.get(null);else{n=new Map,ls.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var r=i[l];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),a=r)}a&&n.set(null,a)}i=t.instance,r=i.getAttribute("data-precedence"),l=n.get(r)||a,l===a&&n.set(null,i),n.set(r,i),this.count++,a=is.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),l?l.parentNode.insertBefore(i,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Fi={$$typeof:M,Provider:null,Consumer:null,_currentValue:pe,_currentValue2:pe,_threadCount:0};function Np(e,t,n,a,i,l,r,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=da(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=da(0),this.hiddenUpdates=da(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function Rd(e,t,n,a,i,l,r,v,O,J,ie,oe){return e=new Np(e,t,n,r,v,O,J,oe),t=1,l===!0&&(t|=24),l=Nt(3,null,null,t),e.current=l,l.stateNode=e,t=ir(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:a,isDehydrated:n,cache:t},ur(l),e}function Od(e){return e?(e=Ca,e):Ca}function Bd(e,t,n,a,i,l){i=Od(i),a.context===null?a.context=i:a.pendingContext=i,a=En(t),a.payload={element:n},l=l===void 0?null:l,l!==null&&(a.callback=l),n=An(e,a,t),n!==null&&(Bt(n,e,t),vi(n,e,t))}function Md(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ju(e,t){Md(e,t),(e=e.alternate)&&Md(e,t)}function Ud(e){if(e.tag===13){var t=Ta(e,67108864);t!==null&&Bt(t,e,67108864),ju(e,67108864)}}var ss=!0;function Dp(e,t,n,a){var i=Z.T;Z.T=null;var l=Q.p;try{Q.p=2,Eu(e,t,n,a)}finally{Q.p=l,Z.T=i}}function zp(e,t,n,a){var i=Z.T;Z.T=null;var l=Q.p;try{Q.p=8,Eu(e,t,n,a)}finally{Q.p=l,Z.T=i}}function Eu(e,t,n,a){if(ss){var i=Au(a);if(i===null)du(e,t,a,rs,n),Gd(e,a);else if(Op(i,e,t,n,a))a.stopPropagation();else if(Gd(e,a),t&4&&-1<Rp.indexOf(e)){for(;i!==null;){var l=ga(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var r=Zt(l.pendingLanes);if(r!==0){var v=l;for(v.pendingLanes|=2,v.entangledLanes|=2;r;){var O=1<<31-$e(r);v.entanglements[1]|=O,r&=~O}tn(l),(Ye&6)===0&&(Xl=N()+500,Mi(0))}}break;case 13:v=Ta(l,2),v!==null&&Bt(v,l,2),Zl(),ju(l,2)}if(l=Au(a),l===null&&du(e,t,a,rs,n),l===i)break;i=l}i!==null&&a.stopPropagation()}else du(e,t,a,null,n)}}function Au(e){return e=Ds(e),ku(e)}var rs=null;function ku(e){if(rs=null,e=pa(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return rs=e,null}function Hd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(C()){case F:return 2;case de:return 8;case he:case I:return 32;case _e:return 268435456;default:return 32}default:return 32}}var Tu=!1,Gn=null,qn=null,Ln=null,Xi=new Map,Yi=new Map,Vn=[],Rp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gd(e,t){switch(e){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":Xi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yi.delete(t.pointerId)}}function Zi(e,t,n,a,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:l,targetContainers:[i]},t!==null&&(t=ga(t),t!==null&&Ud(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Op(e,t,n,a,i){switch(t){case"focusin":return Gn=Zi(Gn,e,t,n,a,i),!0;case"dragenter":return qn=Zi(qn,e,t,n,a,i),!0;case"mouseover":return Ln=Zi(Ln,e,t,n,a,i),!0;case"pointerover":var l=i.pointerId;return Xi.set(l,Zi(Xi.get(l)||null,e,t,n,a,i)),!0;case"gotpointercapture":return l=i.pointerId,Yi.set(l,Zi(Yi.get(l)||null,e,t,n,a,i)),!0}return!1}function qd(e){var t=pa(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=g(n),t!==null){e.blockedOn=t,kh(e.priority,function(){if(n.tag===13){var a=Ot();a=bs(a);var i=Ta(n,a);i!==null&&Bt(i,n,a),ju(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function us(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Au(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Ns=a,n.target.dispatchEvent(a),Ns=null}else return t=ga(n),t!==null&&Ud(t),e.blockedOn=n,!1;t.shift()}return!0}function Ld(e,t,n){us(e)&&n.delete(t)}function Bp(){Tu=!1,Gn!==null&&us(Gn)&&(Gn=null),qn!==null&&us(qn)&&(qn=null),Ln!==null&&us(Ln)&&(Ln=null),Xi.forEach(Ld),Yi.forEach(Ld)}function cs(e,t){e.blockedOn===t&&(e.blockedOn=null,Tu||(Tu=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Bp)))}var os=null;function Vd(e){os!==e&&(os=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){os===e&&(os=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(ku(a||n)===null)continue;break}var l=ga(n);l!==null&&(e.splice(t,3),t-=3,kr(l,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function Qi(e){function t(O){return cs(O,e)}Gn!==null&&cs(Gn,e),qn!==null&&cs(qn,e),Ln!==null&&cs(Ln,e),Xi.forEach(t),Yi.forEach(t);for(var n=0;n<Vn.length;n++){var a=Vn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Vn.length&&(n=Vn[0],n.blockedOn===null);)qd(n),n.blockedOn===null&&Vn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],l=n[a+1],r=i[jt]||null;if(typeof l=="function")r||Vd(n);else if(r){var v=null;if(l&&l.hasAttribute("formAction")){if(i=l,r=l[jt]||null)v=r.formAction;else if(ku(i)!==null)continue}else v=r.action;typeof v=="function"?n[a+1]=v:(n.splice(a,3),a-=3),Vd(n)}}}function Cu(e){this._internalRoot=e}fs.prototype.render=Cu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(f(409));var n=t.current,a=Ot();Bd(n,a,e,t,null,null)},fs.prototype.unmount=Cu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bd(e.current,2,null,e,null,null),Zl(),t[ma]=null}};function fs(e){this._internalRoot=e}fs.prototype.unstable_scheduleHydration=function(e){if(e){var t=ac();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Vn.length&&t!==0&&t<Vn[n].priority;n++);Vn.splice(n,0,e),n===0&&qd(e)}};var Fd=w.version;if(Fd!=="19.1.1")throw Error(f(527,Fd,"19.1.1"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(f(188)):(e=Object.keys(e).join(","),Error(f(268,e)));return e=_(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Mp={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:Z,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ds=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ds.isDisabled&&ds.supportsFiber)try{Ee=ds.inject(Mp),Re=ds}catch{}}return Ji.createRoot=function(e,t){if(!p(e))throw Error(f(299));var n=!1,a="",i=lf,l=sf,r=rf,v=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(v=t.unstable_transitionCallbacks)),t=Rd(e,1,!1,null,null,n,a,i,l,r,v,null),e[ma]=t.current,fu(e),new Cu(t)},Ji.hydrateRoot=function(e,t,n){if(!p(e))throw Error(f(299));var a=!1,i="",l=lf,r=sf,v=rf,O=null,J=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(O=n.unstable_transitionCallbacks),n.formState!==void 0&&(J=n.formState)),t=Rd(e,1,!0,t,n??null,a,i,l,r,v,O,J),t.context=Od(null),n=t.current,a=Ot(),a=bs(a),i=En(a),i.callback=null,An(n,i,a),n=a,t.current.lanes=n,Qt(t,n),tn(t),e[ma]=t.current,fu(e),new fs(t)},Ji.version="19.1.1",Ji}var Pd;function Zp(){if(Pd)return zu.exports;Pd=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(w){console.error(w)}}return u(),zu.exports=Yp(),zu.exports}var Qp=Zp();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),fh=(...u)=>u.filter((w,o,f)=>!!w&&w.trim()!==""&&f.indexOf(w)===o).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Jp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=je.forwardRef(({color:u="currentColor",size:w=24,strokeWidth:o=2,absoluteStrokeWidth:f,className:p="",children:d,iconNode:g,...m},_)=>je.createElement("svg",{ref:_,...Jp,width:w,height:w,stroke:u,strokeWidth:f?Number(o)*24/Number(w):o,className:fh("lucide",p),...m},[...g.map(([y,S])=>je.createElement(y,S)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=(u,w)=>{const o=je.forwardRef(({className:f,...p},d)=>je.createElement(Ip,{ref:d,iconNode:w,className:fh(`lucide-${Kp(u)}`,f),...p}));return o.displayName=`${u}`,o};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=Xe("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=Xe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=Xe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=Xe("BookOpenCheck",[["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3",key:"8arnkb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=Xe("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=Xe("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=Xe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=Xe("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=Xe("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=Xe("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=Xe("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=Xe("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=Xe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=Xe("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=Xe("FileArchive",[["path",{d:"M10 12v-1",key:"v7bkov"}],["path",{d:"M10 18v-2",key:"1cjy8d"}],["path",{d:"M10 7V6",key:"dljcrl"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01",key:"gkbcor"}],["circle",{cx:"10",cy:"20",r:"2",key:"1xzdoj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=Xe("FileJson2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"fq0c9t"}],["path",{d:"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"4gibmv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=Xe("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=Xe("FlaskConical",[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=Xe("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=Xe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=Xe("NotebookText",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M9.5 8h5",key:"11mslq"}],["path",{d:"M9.5 12H16",key:"ktog6x"}],["path",{d:"M9.5 16H14",key:"p1seyn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=Xe("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=Xe("Presentation",[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=Xe("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=Xe("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=Xe("ScanSearch",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m16 16-1.9-1.9",key:"1dq9hf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=Xe("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=Xe("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=Xe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=Xe("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=Xe("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);function qe({children:u,tone:w="neutral"}){return s.jsx("span",{className:`status-badge ${w}`,children:u})}function mg({page:u,onPage:w,children:o}){const[f,p]=je.useState(!1),d=[["checker","VDF 작업",Xu],["guide","사용 방법",$p],["settings","VDF 엔진 관리",fg],["about","배포 안내",dh]];return s.jsxs("div",{className:"app-shell",children:[s.jsx("a",{className:"skip-link",href:"#main",children:"본문으로 건너뛰기"}),s.jsxs("header",{className:"topbar",children:[s.jsx("button",{className:"menu-button",onClick:()=>p(g=>!g),"aria-label":"메뉴","aria-expanded":f,"aria-controls":"primary-navigation",children:s.jsx(sg,{})}),s.jsxs("div",{className:"brand",children:[s.jsx("b",{children:"VDF Next"}),s.jsx("small",{children:"App v0.3.1.1 · Engine 6.0.0"})]}),s.jsxs("div",{className:"top-meta",children:[s.jsx(qe,{tone:"success",children:"RELEASE"}),s.jsx(qe,{tone:"info",children:"VDF 6.0 FREEZE"})]})]}),s.jsxs("aside",{id:"primary-navigation",className:`sidebar ${f?"open":""}`,"aria-label":"주 메뉴",children:[s.jsx("div",{className:"sidebar-title",children:"VDF"}),d.map(([g,m,_])=>s.jsxs("button",{className:u===g?"active":"","aria-current":u===g?"page":void 0,onClick:()=>{w(g),p(!1)},children:[s.jsx(_,{size:18}),m]},g)),s.jsx("div",{className:"sidebar-spacer"}),s.jsx("span",{className:"sidebar-note",children:"Engine Package Registry"})]}),s.jsx("main",{id:"main",className:"content",tabIndex:-1,children:o})]})}const ah=`{
 "blocks": [
  {
   "id": "B1",
   "title": "스캠퍼의 의미",
   "track": "shape",
   "info_type": "정의",
   "item_count": 1,
   "slots": [
    "SCAMPER | 사물·서비스·프로세스를 새로운 것으로 변형하기 위한 9가지 아이디어 변형 기법"
   ],
   "gate": null,
   "card": null,
   "subject": null,
   "subject_traits": {
    "branded_category": false,
    "same_form_variants": false,
    "replacement_type": false,
    "scale_is_the_point": false,
    "spreads_across_frame": false
   }
  },
  {
   "id": "B2",
   "title": "스캠퍼의 탄생 배경",
   "track": "shape",
   "info_type": "인과·수렴",
   "item_count": 3,
   "slots": [
    "알렉스 오스본의 체크리스트",
    "밥 에벌이 기억하기 쉽게 재구성",
    "아이디어를 자극하는 질문으로 구성된 스캠퍼"
   ],
   "gate": null,
   "card": null,
   "subject": null,
   "subject_traits": {
    "branded_category": false,
    "same_form_variants": false,
    "replacement_type": false,
    "scale_is_the_point": false,
    "spreads_across_frame": false
   }
  },
  {
   "id": "B3",
   "title": "스캠퍼의 7가지 구성 요소",
   "track": "shape",
   "info_type": "목록",
   "item_count": 7,
   "slots": [
    "S | Substitute · 대체하기",
    "C | Combine · 결합하기",
    "A | Adapt · 적용/응용하기",
    "M | Modify/Magnify · 변경/확대하기",
    "P | Put to other uses · 용도 변경하기",
    "E | Eliminate · 제거하기",
    "R | Reverse/Rearrange · 뒤집기/재배열하기"
   ],
   "gate": null,
   "card": null,
   "subject": null,
   "subject_traits": {
    "branded_category": false,
    "same_form_variants": false,
    "replacement_type": false,
    "scale_is_the_point": false,
    "spreads_across_frame": false
   }
  },
  {
   "id": "B4",
   "title": "대체하기의 질문 프레임",
   "track": "shape",
   "info_type": "정의",
   "item_count": 2,
   "slots": [
    "핵심 질문 | 이것을 대체할 다른 것은 없나?",
    "세부 질문 | 무엇으로, 누구로, 어떤 재질로 대체할 수 있는지"
   ],
   "gate": null,
   "card": null,
   "subject": null,
   "subject_traits": {
    "branded_category": false,
    "same_form_variants": false,
    "replacement_type": false,
    "scale_is_the_point": false,
    "spreads_across_frame": false
   }
  },
  {
   "id": "B5",
   "title": "스마트 주차 요금 징수기의 대체",
   "track": "image",
   "info_type": "인과·수렴",
   "item_count": 3,
   "slots": [
    "동전 사용의 불편",
    "결제 수단인 동전을 무엇으로 대체할지 질문",
    "신용카드로 대체한 스마트 주차 요금 징수기"
   ],
   "gate": {
    "passed": true,
    "reason": "주차 요금 징수기의 결제 수단이 동전에서 신용카드로 바뀌는 같은 사물의 변형으로 좁혀짐"
   },
   "card": "A",
   "subject": "two versions of the same smart parking payment meter, a baseline coin-operated meter accepting a coin and the same meter accepting a generic credit card",
   "subject_traits": {
    "branded_category": false,
    "same_form_variants": true,
    "replacement_type": true,
    "scale_is_the_point": false,
    "spreads_across_frame": false
   }
  },
  {
   "id": "B6",
   "title": "결합하기의 질문 프레임",
   "track": "shape",
   "info_type": "정의",
   "item_count": 3,
   "slots": [
    "핵심 질문 | 서로 관련이 없는 것들을 결합하면 어떨까?",
    "적용 원리 | 관련되지 않았던 제품·목적·서비스를 결합해 혁신 아이디어를 도출",
    "세부 질문 | 어떤 재질·장치·목적을 결합할 수 있는지"
   ],
   "gate": null,
   "card": null,
   "subject": null,
   "subject_traits": {
    "branded_category": false,
    "same_form_variants": false,
    "replacement_type": false,
    "scale_is_the_point": false,
    "spreads_across_frame": false
   }
  },
  {
   "id": "B7",
   "title": "구텐베르크 인쇄기의 이종 결합",
   "track": "shape",
   "info_type": "인과·수렴",
   "item_count": 3,
   "slots": [
    "중세 시대의 대량 인쇄 고민",
    "동전 펀치기와 포도주 압착기 방식을 결합",
    "최초의 금속 활자 인쇄기 발명"
   ],
   "gate": {
    "passed": false,
    "reason": "동전 펀치기·포도주 압착기·인쇄기라는 서로 다른 사물 여러 개가 필요해 하나 또는 같은 사물의 변형으로 좁혀지지 않음"
   },
   "card": null,
   "subject": null,
   "subject_traits": {
    "branded_category": false,
    "same_form_variants": false,
    "replacement_type": false,
    "scale_is_the_point": false,
    "spreads_across_frame": false
   }
  },
  {
   "id": "B8",
   "title": "아이폰의 결합 사례",
   "track": "shape",
   "info_type": "인과·수렴",
   "item_count": 4,
   "slots": [
    "전화기",
    "아이팟",
    "인터넷 통신 기기",
    "세 기능을 결합한 아이폰"
   ],
   "gate": {
    "passed": false,
    "reason": "서로 다른 사물 여러 개가 필요해 하나로 좁혀지지 않음"
   },
   "card": null,
   "subject": null,
   "subject_traits": {
    "branded_category": true,
    "same_form_variants": false,
    "replacement_type": false,
    "scale_is_the_point": false,
    "spreads_across_frame": false
   }
  },
  {
   "id": "B9",
   "title": "실무에서 대체와 결합 질문하기",
   "track": "shape",
   "info_type": "목록",
   "item_count": 2,
   "slots": [
    "대체(S) | 불만이 많은 부품이나 프로세스를 다른 재질로 대체",
    "결합(C) | 옆 부서의 기획안을 자신의 기획안과 결합"
   ],
   "gate": null,
   "card": null,
   "subject": null,
   "subject_traits": {
    "branded_category": false,
    "same_form_variants": false,
    "replacement_type": false,
    "scale_is_the_point": false,
    "spreads_across_frame": false
   }
  },
  {
   "id": "B10",
   "title": "일반 질문과 스캠퍼 질문의 차이",
   "track": "shape",
   "info_type": "비교·대조",
   "item_count": 2,
   "slots": [
    "질문 방식 | 일반인: 기발한 의자 아이디어 요구 | 숙련자: S와 C 조건을 강제",
    "결과 경향 | 일반인: 메시 소재 등 일반적 결과 | 숙련자: 조건에 맞춘 파생 아이디어"
   ],
   "gate": null,
   "card": null,
   "subject": null,
   "subject_traits": {
    "branded_category": false,
    "same_form_variants": false,
    "replacement_type": false,
    "scale_is_the_point": false,
    "spreads_across_frame": false
   }
  },
  {
   "id": "B11",
   "title": "AI 결과: S와 C 의자 아이디어",
   "track": "image",
   "info_type": "비교·대조",
   "item_count": 2,
   "slots": [
    "변형 방식 | S: 다리를 자성 부상 모듈로 대체 | C: 좌판 하단에 페달 발전기 결합",
    "도출 결과 | S: 층간 소음 제로 | C: 운동하며 충전하는 의자"
   ],
   "gate": {
    "passed": true,
    "reason": "두 결과가 같은 사무용 의자의 변형으로 좁혀지고 대체 전 기준 의자도 함께 제시할 수 있음"
   },
   "card": "A",
   "subject": "three versions of the same office chair, a baseline office chair, the same chair with its legs replaced by magnetic levitation modules, and the same chair with a compact pedal generator mounted beneath the seat",
   "subject_traits": {
    "branded_category": true,
    "same_form_variants": true,
    "replacement_type": true,
    "scale_is_the_point": false,
    "spreads_across_frame": false
   }
  }
 ]
}`,pg="6.0.0",gg="VDF6_사양서_v2.md",_g="2026-08-20",yg={scope:"본강의 본문 시각화만. 표지·학습목표·마음열기·평가·학습정리 제외.",status_legend:{verified:"실제 생성으로 확인됨. evidence 필드에 근거.",unverified:"논리적으로 파생했으나 관측되지 않음. 확정 전.",risky:"실패가 관측됨. 전제 조건 하에서만 사용.",retired:"5.0에서 폐기. 되살리지 않도록 근거와 함께 보존."},enforcement_legend:{code:"결정론적. 코드가 판정하거나 문자열을 주입한다.",llm:"의미 판단. LLM 호출 안에서 수행하고 사람이 사후 확인.",human:"정답이 교수자에게 있음. UI에서 선택.",display_only:"화면에 표시만 하고 강제하지 않는다."},consumers:{prompt_injection:["info_types","cards","rules","track"],code_lint:["lint","cards[].margin_policy","cards[].model"],ui_display:["rules[].why","open_questions","axes"]},note:"전체 논증과 44장 근거는 사양서에 있다. 이 파일은 판정과 조립에 필요한 것만 담는다.",regenerate_markdown:"rules.json이 수정됐다. VDF6_규칙.md를 다시 뽑아야 Custom GPT에 반영된다."},vg={unit:"블록",emits:{info_layer:["info_type","item_count","item_structure","slot_text"],background_layer:["card_id","prompt_en"],rationale:"왜 이 조합인지 한 줄"},background_layer_nullable:!0,layout_selection:{by:"instructor",ai_must_not_emit:!0,why:"교과목·교수자마다 다르고 고르는 데 몇 초면 되므로 자동화 이득이 없다. 5.0의 SVG 좌표 생성이 여기서 폐기됐다."}},bg={test:"label_test",statement:"노드의 라벨을 지웠을 때 남는 게 있으면 이미지, 없으면 도형.",enforcement:"llm",status:"verified",outcomes:{shape:{background_layer:null,identity_of_items:"텍스트 자체",examples:["브레인스토밍 8단계","39가지 6대 분류","아이디어 평가 4단계"]},image:{background_layer:"카드 선택으로 진행",identity_of_items:"사물·현상·장치",examples:["항타 단면","엔진 비교","클립 4종"]}},hard_overrides:{always_shape:["표","수식","정의 목록"],enforcement:"code",why:"생성형으로 만들지 않는다."},retired_criterion:{rule:"노드 5개 이상이면 SVG",status:"retired",why:"8단계 절차는 노드 8개인데 도형이고, 항타 단면은 노드 2개인데 이미지다. 개수는 기준이 아니었다."}},xg={_note:"레이아웃 이름이 아니라 정보의 성질. 교과목이 바뀌어도 변하지 않는다.",sequence:{ko:"순서·절차",signals:["단계","순서","~후에","프로세스"],output_format:"번호 | 명칭 | 설명",observed:!0,example:{slots:["1 | 문제 인식 | 스스로 일상의 비효율을 발견함","2 | 문제 정의 | 근본 원인을 찾아 진짜 문제를 정의함","3 | 아이디어 도출 | 대안을 만들고 제약 안에서 판별함"],source:"1주차 · 공학적 창의성의 4단계",tell:"순서를 바꾸면 뜻이 달라진다"}},hierarchy:{ko:"분류·계층",signals:["상위-하위","~로 나뉨","유형"],output_format:"대분류 | 하위항목 목록",observed:!1,note:"1주차 1강에서 미사용. Q2 참조.",example:{slots:["S 대체 | 유리 → 플렉시블 / 손에 드는 방식 → 손목형","C 결합 | 자동차 키 기능 / 온디바이스 AI"],source:"13주차 · 스마트폰의 대체와 결합",tell:"항목이 두 무리 이상으로 묶인다. 카드 A를 쓰면 그 경계가 사라진다"}},comparison:{ko:"비교·대조",signals:["반면","~와 달리","장단점"],output_format:"항목 | A값 | B값",observed:!0,example:{slots:["질문 방식 | 일반인: 기발한 아이디어 요구 | 숙련자: S와 C 조건을 강제","결과 경향 | 일반인: 일반적 결과 | 숙련자: 조건에 맞춘 파생 아이디어"],source:"SCAMPER 차시 · 일반 질문과 스캠퍼 질문",tell:"두 대상을 같은 잣대로 잰다. 잣대가 왼쪽 열이 된다"}},causal:{ko:"인과·수렴",signals:["따라서","그 결과","~로 이어짐"],output_format:"원인 → 중간 → 결과",observed:!1,note:"1주차 1강에서 미사용. Q2 참조.",example:{slots:["동전 사용의 불편","결제 수단을 무엇으로 대체할지 질문","신용카드로 대체한 스마트 주차 요금 징수기"],source:"SCAMPER 차시 · 스마트 주차 요금 징수기",tell:"앞이 뒤를 낳는다. 화살표로 이어붙이지 말고 원소로 쪼갠다"}},definition:{ko:"정의",signals:["~란","~을 의미함"],output_format:"용어 | 정의문",observed:!0,example:{slots:["SCAMPER | 사물·서비스·프로세스를 새로운 것으로 변형하기 위한 9가지 아이디어 변형 기법"],source:"SCAMPER 차시 · 스캠퍼의 의미",tell:"용어 하나에 뜻 하나. 여러 개면 목록이다"}},list:{ko:"목록",signals:["특징","요소","규칙"],output_format:"항목 배열",note:"순서 없음",observed:!0,example:{slots:["S | Substitute · 대체하기","C | Combine · 결합하기","A | Adapt · 적용/응용하기"],source:"SCAMPER 차시 · 7가지 구성 요소",tell:"순서를 바꿔도 뜻이 그대로다. 바뀌면 순서·절차다"}}},wg={rule:"대학 템플릿의 어미 규칙(명사형 ~음/~함, 마침표 없음 또는 종결형 통일)이 원문 verbatim보다 우선한다.",constraint:"어미만 바꾸고 내용어는 그대로 둔다.",enforcement:"llm",status:"unverified",open_question:"Q4"},Sg={usage_split:{content_image:{role:"슬라이드 안의 한 요소",text_on_top:"얹지 않거나 최소",brightness:"자유",cards:["A","B","C","D","E"]},background_image:{role:"슬라이드를 덮음",text_on_top:"반드시 얹힘",brightness:"밝고 저채도 필수",cards:["F"],why:"템플릿 색에 맞출 필요가 없다. 어차피 덮기 때문이다. 대신 그 위에 얹힐 텍스트가 읽혀야 한다."}},deck_style_defaults:{background_a_scene:"soft light gradient, low saturation, high key, subtle floor reflection",background_b_asset:"uniform solid light-gray seamless background",accent:"교과목 템플릿의 대표색 1종",lighting:"soft diffused key from upper-left",ratio:"16:9",reserved_space:{right_pct:[35,40],right_why:"교수자 영상",bottom_pct:[8,10],bottom_why:"출처 캡션"}}},jg={_note:"정식 블록. 미검증 카드(D·E·F)와 신규 카드에 쓴다. 검증된 카드는 verbatim_locked 문자열을 유지한다.",text_free_canonical:"text-free, no readable text, no letters, no numbers, no labels, no captions, no formulas, no UI text, no logos, no brand names, no recognizable real-world products, no license plates",kill_background:"plain seamless background, background elements barely visible, no environmental detail, no crowd, no cityscape, no floating UI panels",no_decorative_glow:"no decorative HUD rings, no floating data readouts, no sci-fi interface overlays",unbranded_triplet:["unbranded","no app icons","no screen content"]},Eg=JSON.parse(`{"A":{"ko":"에셋세트 · 무배경","safest":true,"use_when":["같은 것의 여러 변형","같은 사물의 단계별 부품","기준점 + 변형"],"element_cap":4,"representative":["클립 4종","칫솔모 4분할","비행기+밥솥 스케치","건물·폰·게이트"],"model":{"primary":"gemini","alternatives_allowed":true,"why":"나란한 배열이라 3사 모두 대상 구현 성공"},"margin_policy":{"right_presenter":{"in_prompt":false,"handled_by":"ppt_left_align","why":"배경이 단색이라 PPT에서 좌측으로 밀면 끝난다. 3사 중 1사만 지켰고, 지켜도 안 지켜도 결과가 같았다."},"bottom_caption":{"in_prompt":true,"in_line":"composition","fragment":"lower 10% clear","why":"출처 캡션 자리. 우측 여백과 달리 삭제하지 않았다."},"text_overlay":{"in_prompt":false}},"verbatim_locked":true,"status":"verified","evidence":"2026-08, 13주차 3강 클립 4종, 3사 비교. 의미 전달은 ChatGPT가 가장 정확(하트조차 클립 형태 유지).","prompt":{"subject":"{{SUBJECT}}","subject_example":"four variations of a paper clip, all clearly made from the same bent wire form, each repurposed as a different object, evenly spaced in a single row, three-quarter angle","background":"uniform solid light-gray seamless background","composition":"a single row, lower 10% clear","style":"premium 3D educational render, matte materials, soft directional key light from upper-left, no baked shadows","ratio":"16:9","negative":"text-free, no readable text, no letters, no numbers, no labels, no logos, no brand names, no overlapping objects, no environmental props"},"conditional_fragments":[{"id":"identical_scale","fragment":"identical scale","include_when":"형태 변화가 학습 포인트","exclude_when":"크기 변화가 학습 포인트","enforcement":"llm","status":"verified","examples":{"include":["S","C","A","M"],"exclude":["E 축소","M 확대"]}},{"id":"baseline_plus_one","rule":"'A를 B로 대체' 유형은 A를 함께 그린다. 변형 N개면 기준점 1개를 더해 N+1개.","why":"대체 후만 그리면 무엇이 바뀌었는지 보이지 않는다.","enforcement":"llm","status":"verified","evidence":"13주차 클립(금속→플라스틱), 스마트폰(유리→플렉시블) 둘 다 이 문제가 있었다."},{"id":"unbranded","fragment_ref":"negative_blocks.unbranded_triplet","include_when":"브랜드 연상이 강한 대상군은 항상. 휴대기기·웨어러블·차량·가전·컴퓨터.","enforcement":"code_inject","status":"verified","evidence":"2026-08, 13주차 3강 스마트폰 S. 3사 모두 무기명 기기 생성, 화면 콘텐츠 없음.","note":"조건 판단을 LLM에 맡겼더니 누락됐다(FT-1). 대상군 목록으로 강제한다.","fragment_full":"unbranded, no app icons, no screen content, no brand logos, generic design"},{"id":"same_form_anchor","fragment":"all clearly made from the same bent wire form","template":"all clearly made from the same [기본형]","include_when":"같은 사물의 변형을 나열할 때. 카드 A의 기본 용법이므로 사실상 항상.","why":"빠지면 마지막 항목이 별개 제품이 된다(FT-1 B1).","status":"verified","n":1,"enforcement":"llm"}],"do_not_use_when":["정보 유형이 분류·계층이고 분류가 둘 이상일 때 — 한 줄에 놓으면 분류 경계가 사라진다(FT-3)","서로 다른 사물을 병렬로 늘어놓을 때 — '여러 항목 병렬'을 그렇게 읽지 않는다. 같은 사물의 변형이어야 한다(R4)."],"element_cap_policy":"항목 수가 4를 넘으면 블록을 쪼갠다(R9). 일부만 그리지 않고, 상한도 넘기지 않는다.","element_cap_unit":"의미 단위 (element_cap_semantics 참조)","representative_image":{"file":"클립 4종","note":"기준점(금속) + 변형 3. N+1 규칙이 적용된 상태.","status":"good"}},"B":{"ko":"개념 · 단일 오브젝트 · 무배경","use_when":["추상 원리를 한 컷으로","대비되는 두 상태를 한 오브젝트에"],"element_cap":3,"element_min":1,"constraint":"하나하나가 의미를 가져야 함","representative":["저울+카드","파란 링 스택","반반 구체","큐브+튜브+쿠션"],"model":{"primary":"gemini","alternatives_allowed":false,"why":"6요소 모두 준수. ChatGPT는 무게중심 쏠림, 미드저니는 대상 자체를 틀림"},"margin_policy":{"right_presenter":{"in_prompt":false,"handled_by":"ppt_left_align","why":"카드 A와 동일"},"bottom_caption":{"in_prompt":true,"in_line":"composition","fragment":"lower 10% clear"},"text_overlay":{"in_prompt":false}},"verbatim_locked":true,"status":"verified","evidence":"2026-08, 1주차 1강 캡슐 커피머신, 3사 비교.","prompt":{"subject":"{{SUBJECT}}","subject_example":"a balance scale, tilted, a plain gray card on the raised pan and a vivid accent-colored card with a check badge on the lowered pan","background":"uniform solid light-gray seamless background, subtle floor reflection","composition":"the object centered, lower 10% clear","style":"premium 3D educational render, matte materials, soft key light","ratio":"16:9","negative":"text-free, no readable text, no labels, no environmental detail, no decorative HUD rings, no floating data readouts","negative_gap":"카드 B의 네거티브에는 no brand names가 없다(카드 A에만 있음). branded_category가 true인 대상을 카드 B로 그릴 때는 조각으로 보강해야 한다."},"conditional_fragments":[{"id":"superseded_gray","fragment":"the superseded items rendered in flat desaturated gray, clearly unused","include_when":"과거/현재 대비를 그릴 때","enforcement":"llm","status":"unverified","note":"테스트에서 우연히 잘 나온 것이라 명시 효과는 아직 확인되지 않았다."},{"id":"unbranded","fragment_full":"unbranded, no app icons, no screen content, no brand logos, generic design","include_when":"branded_category == true","enforcement":"code_inject","why":"카드 A에만 있던 조각을 전 카드로 확장. B11에서 스마트폰이 카드 B로 들어오며 드러났다.","status":"derived"}],"element_cap_policy":"상한 초과 시 R9에 따라 블록을 쪼갠다.","element_cap_unit":"의미 단위 (element_cap_semantics 참조)","representative_image":{"file":"캡슐 커피머신","note":"의미 단위 2 — 드립 도구 무더기 / 기계. 우측 40% 비어 있음.","status":"good"}},"C":{"ko":"조건 대조 · 좌우 분할","use_when":["조건 A와 B의 결과 차이가 학습 포인트"],"element_cap":3,"constraint":"좌우가 같은 앵글·같은 스케일이어야 비교 성립","representative":["항타 단면","엔진 2분할","밸 스위치","하마 온천"],"difficulty":"카드 중 가장 어렵다. 3사 모두 완벽하지 않았다.","model":{"primary":"gemini","alternatives_allowed":false,"why":"요소 간 관계가 학습 내용. 3회 모두 유일하게 여백까지 준수"},"margin_policy":{"right_presenter":{"in_prompt":true,"in_line":"composition","fragment":"the right 40% is empty background","why":"배경이 이어져 후편집 불가"},"bottom_caption":{"in_prompt":false,"status":"gap","note":"덱 기본값은 하단 8~10% 비움인데 C 프롬프트에 없다. 검증된 문자열이라 임의로 넣지 않는다."},"text_overlay":{"in_prompt":false}},"verbatim_locked":true,"status":"verified_after_fix","evidence":"2026-08, 1주차 1강 교통 대조. 반복 실패 2건을 수정해 현재 문자열이 됨.","prompt":{"subject":"{{SUBJECT}}","subject_example":"two identical soil cross-sections side by side, exactly the same number of elements on each side, left with a smooth pile driven down showing cool stress lines, right with a rough pile showing dense friction lines","background":"plain seamless background, environment barely visible","composition":"both halves sit on one single continuous unbroken floor plane with no seam or line between them, identical camera angle and scale, the pair grouped within the left 60% of the frame, the right 40% is empty background","style":"premium 3D educational render, accent glow carrying the data only","ratio":"16:9","negative":"text-free, no readable text, no labels, no decorative HUD rings"},"mandatory_fragments":["identical camera angle and scale"],"fix_log":[{"was":"no vertical divider bar","failure":"3사 중 2사가 분리선을 그림","now":"one single continuous unbroken floor plane","principle":"부정형 → 긍정형"},{"was":"same number of cars","failure":"3사 모두 개수 불일치","now":"exactly N items on each side","principle":"숫자 명시"}],"element_cap_policy":"상한 초과 시 R9에 따라 블록을 쪼갠다.","element_cap_unit":"의미 단위 (element_cap_semantics 참조)","representative_image":{"file":"교통 대조 (최초본)","note":"가운데 세로 분리선이 보인다. 이것이 fix_log의 실패 사례이며 \`one single continuous unbroken floor plane\`으로 고친 계기다.","status":"known_defect","use_as":"카드 C가 왜 어려운지 보여주는 반례로 함께 쓴다"},"conditional_fragments":[{"id":"unbranded","fragment_full":"unbranded, no app icons, no screen content, no brand logos, generic design","include_when":"branded_category == true","enforcement":"code_inject","why":"카드 A에만 있던 조각을 전 카드로 확장. B11에서 스마트폰이 카드 B로 들어오며 드러났다.","status":"derived"}]},"D":{"ko":"장치 작동 · 단일 · 맥락 배경","use_when":["장치의 작동 맥락이 학습 포인트일 때"],"note":"배경이 정당한 유일한 경우","element_cap":2,"constraint":"장치 + 작동 표시 하나","representative":["청소기 흡입"],"model":{"primary":"gemini","alternatives_allowed":false,"status":"unverified","why":"규칙 ⑥에서 파생. A·B·C만 테스트함. Q6 참조."},"margin_policy":{"right_presenter":{"in_prompt":true,"in_line":"composition","fragment":"right 40% empty"},"bottom_caption":{"in_prompt":false,"status":"gap"},"text_overlay":{"in_prompt":false}},"verbatim_locked":false,"status":"unverified","prompt":{"subject":"{{SUBJECT}}","subject_example":"a vacuum cleaner head on carpet, airflow arrows drawn into the nozzle showing suction direction","background":"plain seamless background, minimal environment barely visible","composition":"low angle close-up on the left, right 40% empty","style":"premium 3D educational render, accent glow used only for airflow","ratio":"16:9","negative":"text-free, no readable text, no decorative HUD rings, no floating data readouts, no sci-fi interface overlays"},"element_cap_policy":"상한 초과 시 R9에 따라 블록을 쪼갠다.","element_cap_unit":"의미 단위 (element_cap_semantics 참조)","conditional_fragments":[{"id":"unbranded","fragment_full":"unbranded, no app icons, no screen content, no brand logos, generic design","include_when":"branded_category == true","enforcement":"code_inject","why":"카드 A에만 있던 조각을 전 카드로 확장. B11에서 스마트폰이 카드 B로 들어오며 드러났다.","status":"derived"}]},"E":{"ko":"순차 패널","use_when":["단계가 3~4개이고 순서 자체가 내용일 때"],"representative":["필터 4단계","팽화 공정 3패널"],"model":{"primary":"gemini","alternatives_allowed":false,"status":"unverified","why":"규칙 ⑥에서 파생. Q6 참조."},"margin_policy":{"right_presenter":{"in_prompt":false,"handled_by":"ppt_left_align","status":"unverified","why":"무배경이므로 A·B에서 파생. 사양서 §6 여백 표에 E가 빠져 있다."},"bottom_caption":{"in_prompt":false,"status":"gap","note":"A·B는 lower 10% clear가 있는데 E만 없다. 같은 무배경 카드인데 불일치."},"text_overlay":{"in_prompt":false}},"verbatim_locked":false,"status":"risky","risk":"AI 단독으로 어렵다. 잘 나온 사례는 후편집으로 라벨을 얹은 것이다.","precondition":"라벨 없는 패널만 요청하고, 번호와 설명은 PPT에서 얹는다.","open_question":"Q1","prompt":{"subject":"{{SUBJECT}}","subject_example":"the same cylindrical filter housing shown four times in a row, identical angle and scale, differing only in internal state","background":"uniform solid light-gray seamless background","composition":"four evenly spaced panels in one row, no dividers","style":"technical illustration, consistent cutaway style across all four","ratio":"16:9","negative":"text-free, no readable text, no numbers, no step labels, no arrows between panels"},"conditional_fragments":[{"id":"unbranded","fragment_full":"unbranded, no app icons, no screen content, no brand logos, generic design","include_when":"branded_category == true","enforcement":"code_inject","why":"카드 A에만 있던 조각을 전 카드로 확장. B11에서 스마트폰이 카드 B로 들어오며 드러났다.","status":"derived"}]},"F":{"ko":"배경 이미지 (슬라이드를 덮음)","use_when":["텍스트가 주인공이고 이미지는 무대"],"element_cap":2,"element_min":1,"constraint":"정보를 실으려 하면 안 됨. 밝고 저채도가 필수 — 위에 얹힐 텍스트가 읽혀야 한다.","representative":["복도 조명선","브레인스토밍 준비 4요소의 사무실 사진"],"model":{"primary":"gemini_app","alternatives_allowed":false,"status":"verified","why":"같은 프롬프트·같은 대상에서 Flow보다 일관됐다. 우측 여백 3/4, 중앙 초점 회피, 흐림 준수.","evidence":"2026-08, 12장(Flow 8, 제미나이 4), 대상 3종.","retired_assumption":"'미드저니 가능'은 44장 관찰에서 나온 추정이었고 실제 대조가 없었다. 근거 없이 두지 않는다."},"margin_policy":{"right_presenter":{"in_prompt":false,"note":"슬라이드를 덮으므로 교수자 영상 여백 개념이 다르게 적용된다."},"bottom_caption":{"in_prompt":false},"text_overlay":{"in_prompt":true,"in_line":"background","fragment":"large empty area for text overlay","why":"F의 여백은 텍스트가 얹힐 자리다. C·D의 여백과 목적이 다르다."}},"verbatim_locked":false,"status":"verified","predicted_failure":{"where":"composition","status":"rejected_confirmed","prediction":"부정형 구도(no vertical seam / no split-screen / no panel division)가 카드 C처럼 무시되어 화면이 갈라질 것","result":"2026-08, 2개 표면 6장. Flow/나노바나나 프로 4장(A2·B2) + 제미나이 2장(A1·B1). 분할 0/6.","interpretation":"분할 압력은 프롬프트가 아니라 대상에서 나온다. 카드 C의 대상은 좌우 두 장면이라 분할 압력이 있었고, 카드 F의 대상은 단일 장면이라 애초에 없다. 규칙 R8이 틀린 게 아니라 F에는 적용될 상황이 없었다.","action":"현재 부정형 문자열 유지. 교체 이득이 관측되지 않았고, 바꾸면 검증 기준선만 흔들린다.","open":"분할 네거티브 3종이 일하는지 사문인지는 여전히 미확인. 분할 압력이 없는 대상만 시험했다."},"prompt":{"subject":"{{SUBJECT}}","subject_example":"an empty office desk scene, softly out of focus","background":"high key, low saturation, large empty area for text overlay","composition":"one continuous seamless background, no vertical seam, no split-screen, no panel division","style":"soft natural light, muted palette","ratio":"16:9","negative":"text-free, no readable text, no informational elements, no charts, no diagrams, no HUD, no strong focal point in the center"},"evidence":"2026-08, 14장(Flow 8, 제미나이 6), 대상 3종. 분할 0/14. 제미나이 고정 + 조건부 조각 2종으로 사용 가능한 결과.","findings":[{"id":"F-1","claim":"F의 품질 변수는 요소 수가 아니라 선명도다.","status":"unverified","n":12,"evidence":"공구 6개 이상이어도 흐리면 사용 가능. 요소가 적어도 앞쪽 물체가 선명하면 사용 불가.","conflict":"사양서 카드 F의 '요소 1~2' 상한과 어긋난다."},{"id":"F-2","claim":"\`softly out of focus\`는 배경에만 적용되고 앞쪽 물체에서 깨진다.","status":"verified_and_fixed","n":13,"evidence":"Flow 사무실 1장 선명 실패, Flow 작업대 1장 경계선, 제미나이 작업대 2장 모두 앞쪽 공구가 선명. 표면 2곳·대상 2종에서 반복.","unresolved":"FIX-2(everything softly out of focus, shallow depth of field throughout, no sharp object anywhere) 미시험.","resolved_by":"conditional_fragments.blur_everything"},{"id":"F-3","claim":"빈 영역 위치를 지정하지 않으면 결과가 표면에 좌우된다.","status":"unverified","n":12,"evidence":"제미나이 3/4가 우측을 비움. Flow 8/8이 흩어짐.","note":"FIX-1로 해소 가능함이 관측됨(n=1). 기본 문자열은 그대로 두고 조건부 조각으로 붙인다."},{"id":"F-4","claim":"표면 차이가 실재한다. 같은 프롬프트·같은 대상에서 결과가 갈린다.","status":"verified","n":12,"evidence":"복도 — Flow 정중앙 소실점 2/2, 제미나이 좌측 비낀 앵글로 우측 50% 빔. 대상과 프롬프트가 동일했다.","implication":"카드 F의 모델을 고정해야 한다. 규칙 R6이 F에도 적용된다."}],"candidate_fixes":[{"id":"FIX-1","target":"background","current":"large empty area for text overlay","candidate":"the left 55% is plain empty wall with no objects","addresses":"F-3","tested":true,"priority":"high","rationale":"F-3이 verified로 올라감. 위치를 적지 않으면 빈 영역이 대상마다 다른 곳에 생긴다.","status":"provisional_pass","n":1,"result":"2026-08 제미나이, 작업대. 좌측 55%가 빈 벽으로 나오고 공구·선반·드릴프레스가 전부 우측으로 밀렸다.","control":"직전 동일 대상·동일 표면·이전 문자열에서는 배경 선반이 화면을 채워 텍스트 자리가 없었다. 첫 줄이 같으므로 차이는 2번째 줄에서 나왔다.","caveat":"n=1. 대조군이 있어 근거는 있으나 확정은 아니다."},{"id":"FIX-2","target":"style","candidate":"everything softly out of focus, shallow depth of field throughout, no sharp object anywhere","addresses":"F-1, F-2","tested":true,"note":"요소 상한을 거는 대신 선명도를 강제하는 쪽. F-1이 맞다면 이게 옳은 방향이다.","status":"pass","n":1,"result":"2026-08 제미나이, 작업대. 앞쪽 대패·망치의 질감이 사라지고 형태만 남았다. 직전 장(동일 대상·표면·FIX-1 적용, FIX-2 없음)에서는 같은 공구가 또렷했다.","side_effect":"공구가 우측 하단으로 더 밀려 빈 영역이 좌측 55%에서 3분의 2 가까이 넓어졌다. n=1, 기록만.","interaction":"FIX-1과 충돌하지 않는다. 좌측 빈 벽이 유지됐다."}],"element_cap_note":"사양서의 '요소 1~2'는 F-1과 충돌한다. 다음 테스트에서 FIX-2가 통하면 상한을 선명도 조건으로 교체한다.","surface_comparison":{"flow_nano_banana_pro":{"n":4,"split":0,"blur_ok":3,"empty_area_consistent":false,"frame_variance":"큼"},"gemini_app":{"n":2,"split":0,"blur_ok":2,"empty_area_consistent":true,"frame_variance":"작음"},"caveat":"모델 계열이 같을 가능성이 크다. 표면·설정(2장 동시생성, 16:9 강제) 차이일 수 있고 표본도 불균형이다.","unresolved":"제미나이 쪽 프롬프트에 네거티브 줄이 포함됐는지 미확인. 미포함이었다면 '네거티브 없이도 된다'는 별개 결과가 된다."},"subject_constraints":{"exclude":[],"note":"'복도 제외' 판정을 철회했다. §reversals 참조.","hard_cases":[{"pattern":"작업면에 공구·부품이 흩어지는 장면","examples":["작업대"],"problem":"빈 영역이 뚜렷하게 생기지 않고 앞쪽 물체가 선명해지기 쉽다.","evidence":"Flow 2장은 우측/상단으로 갈렸고, 제미나이 1장은 빈 자리가 불명확하며 대패가 선명했다.","status":"unverified","n":3,"action":"FIX-1을 이 대상에 먼저 시험한다."}]},"reversals":[{"id":"REV-1","was":"복도·터널 등 중앙 소실점 대상은 카드 F에서 제외 (verified, n=2)","now":"철회. 제미나이 복도는 소실점이 좌측으로 비껴 우측 50%가 비었고 카드 F로 사용 가능했다.","cause":"Flow 2장만 보고 대상 속성으로 귀속했다. 표면 속성이었다.","date":"2026-08"},{"id":"REV-2","was":"빈 영역 위치는 프롬프트가 아니라 대상이 결정한다 (F-3, verified)","now":"약화. 제미나이는 대상 3종 중 3장에서 우측을 비웠고 Flow는 8장 내내 흩어졌다. 대상보다 표면이 크다.","cause":"REV-1과 같다. Flow 8 대 제미나이 2의 불균형 표본.","date":"2026-08"},{"meta":"두 번 다 같은 실수다. 표본이 많은 표면의 특성을 대상의 특성으로 읽었다. 이후 대상 규칙은 표면을 고정한 뒤에만 세운다."}],"conditional_fragments":[{"id":"empty_side_explicit","replaces":"large empty area for text overlay","fragment":"the left 55% is plain empty wall with no objects","in_line":"background","include_when":"사물이 화면 전체에 퍼지는 대상(작업대·선반·공방 등) 또는 이전 시도에서 빈 자리가 안 나온 경우","exclude_when":"사물이 자연히 한쪽에 모이는 대상(책상·복도). 지시를 덜 넣는 쪽이 낫다.","side_note":"left/right는 교수자 템플릿의 텍스트 위치에 맞춘다. 검증된 것은 '위치를 지정하면 지켜진다'이지 좌측이 아니다.","status":"provisional","n":1,"enforcement":"llm"},{"id":"blur_everything","appends_to":"style","fragment":"everything softly out of focus, shallow depth of field throughout, no sharp object anywhere","include_when":"앞쪽에 물체가 놓이는 대상. 사실상 대부분의 F 대상.","why":"subject 줄의 \`softly out of focus\`는 배경에만 걸리고 앞쪽 물체에서 깨진다(F-2). style 줄에서 다시 강제해야 한다.","status":"verified","n":14,"enforcement":"llm"},{"id":"unbranded","fragment_full":"unbranded, no app icons, no screen content, no brand logos, generic design","include_when":"branded_category == true","enforcement":"code_inject","why":"카드 A에만 있던 조각을 전 카드로 확장. B11에서 스마트폰이 카드 B로 들어오며 드러났다.","status":"derived"}],"open_items":["요소 상한 '1~2'가 F-1과 충돌한 채로 남아 있다. 흐림이 해결되면서 실무상 문제는 줄었으나 사양서 문구는 아직 그대로다."],"element_cap_policy":"상한 초과 시 R9에 따라 블록을 쪼갠다.","element_cap_unit":"의미 단위 (element_cap_semantics 참조)","representative_image":{"file":"작업대 · 좌측 55% 빈 벽","note":"조건부 조각 2종(위치 명시 + 전체 흐림)이 적용된 상태.","status":"good"}}}`),Ag={R1_kill_background:{ko:"해석·비유 개념이면 배경을 죽인다",why:"44장 최대 발견. 밀도보다 무대가 품질을 더 크게 좌우한다.",trigger:"function == 해석·비유",action:{element_cap:2,inject:"negative_blocks.kill_background"},enforcement:"llm + code",status:"verified",evidence:"배경 죽임(저울+카드, 파란 링 스택, 반반 구체, 뇌→신경망) = 요소 1~3, 학습포인트 복원 가능. 배경 살림(저울 광장, 창문 벽, 주방+요리사모자) = 전부 요소 4+, 복원 어려움."},R2_text_is_ppt_layer:{ko:"모든 텍스트는 PPT 레이어. 예외 없음",action:{inject:"negative_blocks.text_free_canonical",always:!0},enforcement:"code",status:"verified",evidence:"1~3주차에서 'SPAIL', 'BROOTH' 같은 깨진 글자. 한글은 애초에 불가능. 잘 나온 것들(필터 4단계, 카트 포개기)은 전부 후편집으로 라벨을 얹은 것.",sub_rule_branded_products:{ko:"그리지 않는 것은 브랜드지 사물이 아니다",test:"형태가 왜곡됐을 때 오개념이 되는가",generate_ok:{examples:["휘어지는 판형 기기","손목에 찬 기기","캡슐 커피머신"],inject:"negative_blocks.unbranded_triplet"},stock_photo:{examples:["특정 모델의 내부 구조·부품 배치"],when:"특정 모델의 구조를 배우는 경우에만"},enforcement:"llm_detect + code_inject",status:"verified",evidence:"2026-08, 13주차 3강 스마트폰 S. 3사 모두 무기명 기기 생성."}},R3_glow_carries_information:{ko:"글로우·이펙트는 정보를 전달할 때만",informational:["청소기 흡입 화살표","항타 응력장","엔진 지면 간격 치수선"],decorative:["못에 얹힌 홀로그램 링","창문 벽의 HUD"],action:{inject_when_decorative_risk:"negative_blocks.no_decorative_glow"},enforcement:"llm + code",status:"verified",why:"장식 이펙트는 요소 수만 올리고 학습 포인트를 가린다."},R4_analogy_gate:{ko:"비유는 그릴 사물이 좁혀질 때만 그린다",test:"그릴 대상이 (a) 구체적 사물 하나 또는 (b) 같은 사물의 변형 N개로 좁혀지는가. 둘 중 하나가 아니면 기각.",if_yes:"이미지",if_no:"정보층 텍스트로 둔다",hard_constraint:"없는 사물을 만들어내지 않는다.",enforcement:"llm",status:"verified_and_stable",priority:"highest",why:"이것이 §7 '해석·비유 + 살아있는 배경 + 요소 4+'의 원인이다. 대상이 안 좁혀지니 배경으로 도망가고, 그래서 요소가 늘어난다. 증상이 아니라 원인에서 막는다.",failure_pattern:"노트에 그릴 사물이 없는데 AI가 '투명 구체 두 개' 같은 것을 발명해내는 것. 노트 외 창작이며, 44장에서 무너진 것들이 정확히 이 패턴이다.",examples:{narrows:{cases:["클립 4종","저울+카드","칫솔모 4분할"],draws:"클립 하나 / 저울 하나"},does_not_narrow:{cases:["주방+요리사모자","창문 벽","저울 광장","동전 펀치기+포도주 압착기+인쇄기","전화기+음악재생기+통신기기+스마트폰"],draws:"재료·도구·책·전구·모자 …",pattern_2:{name:"서로 다른 사물 여러 개",why:"각각은 구체적이지만 하나로 모이지 않는다. 한 컷에 넣으면 요소 수만 늘고 학습 포인트가 흩어진다.",evidence:"2026-08 동일 노트 2회 실행에서 판정이 뒤집혔다. 1회차는 기각('서로 다른 사물이 함께 필요해 좁혀지지 않음'), 2회차는 통과('세 구체 장치로 명확히 좁혀짐'). 같은 사실을 반대로 읽었다.",ruling:"기각이 옳다. 규칙 R4는 '구체적인가'가 아니라 '하나로 좁혀지는가'를 묻는다."}}},evidence:"1주차 1강 B2('아는 것 vs 하는 것')를 처음에 이미지로 잡았다가 뺐다. 노트에 그릴 사물이 없어 AI가 대상을 발명해야 했다.",not_sufficient:"각 사물이 구체적이라는 것만으로는 통과가 아니다. 서로 다른 사물이 여러 개 필요하면 기각한다."},R5_images_per_lecture:{ko:"차시당 이미지 3~4장",type:"눈금",not:"상한",guidance:"본강의 블록이 7개면 3개 안팎이 적정. 넘어가면 규칙 R4를 통과하지 못한 블록이 섞여 있을 가능성이 높다.",enforcement:"display_only",status:"leaning_delete",caveat:"44÷39로 추정한 것이지 관측된 값이 아니다. 블록 수가 차시마다 다른데 절대 개수로 눈금을 주는 것이 맞는지 아직 모른다.",resolution:"차시를 몇 개 더 돌려 유용성이 확인되면 확정, 아니면 삭제.",open_question:"Q7",diversity_quota:{enabled:!1,behavior:"같은 카드가 3회 연속이면 화면에 표시만 하고, 바꾸라고 하지 않는다. 판단은 교수자가 한다.",why:"5.0의 '형태 분포 자기검증'이 시계추를 만든 지점이다. 쿼터 로직을 코드에 넣지 않음으로써 준수한다."},field_data:"13주차 SCAMPER 5블록 4장, 수정 반영 시 6장. 1주차 7블록 3장. 블록 대비 비율도 차시마다 다르다."},R6_model_pinning:{ko:"카드마다 모델을 고정한다",evidence:"동일 프롬프트를 3사에 3회 돌린 결과(카드 A·B·C), 구도 지시 준수에 일관된 차이가 있었다.",enforcement:"code",status:"verified_for_ABC",hard_constraint:"프롬프트에 모델을 두 개 적지 않는다. '또는 X' 금지.",midjourney_note:"약점은 배열이 아니라 관계다. 카드 B(위/아래 대응)와 C(좌/우 대응)에서는 대상 자체를 틀렸지만, 카드 A처럼 요소가 나란히 놓이는 경우는 제대로 그렸다. 44장 중 미드저니 산출물이 전부 카드 F 계열이었던 것과 일치한다.",midjourney_variance:"4프레임 중 일부만 맞는 경우가 반복됐다(클립 4종의 색·형태 편차, 손목형이 반지로 나온 프레임 2개). 고를 수 있다는 장점이자 매번 검수가 필요하다는 단점이다.",open_question:"Q6"},R7_margin_by_card:{ko:"여백은 종류별로 다르게 처리한다",why:"사양서 §6은 여백을 한 덩어리로 다뤘으나 실제로는 세 종류다. 카드 A·B에서 삭제된 것은 우측(교수자 영상)뿐이고 하단 10%(출처 캡션)는 남아 있다. 목적이 다르므로 따로 판정한다.",enforcement:"code",status:"verified",margin_kinds:{right_presenter:{purpose:"교수자 영상 자리",spec_default:"우측 35~40%",in_prompt_cards:["C","D"],ppt_handled_cards:["A","B","E"],status:"verified"},bottom_caption:{purpose:"출처 캡션 자리",spec_default:"하단 8~10%",in_prompt_cards:["A","B"],missing_cards:["C","D","E","F"],status:"gap",note:"덱 기본값과 카드 프롬프트가 어긋난다. 미해결."},text_overlay:{purpose:"텍스트가 얹힐 자리",in_prompt_cards:["F"],status:"unverified"}}},R8_prompt_grammar:{ko:"핵심 구도는 긍정형으로",why:"'하지 마라'는 무시되는 빈도가 높다.",enforcement:"lint",status:"verified",pairs:[{weak:"no vertical divider bar",strong:"one single continuous unbroken floor plane"},{weak:"same number of cars",strong:"exactly eight cars on each side"}],scope_limit:"네거티브 목록은 부정형 그대로 둔다. 지금까지 실패가 관측되지 않았고, 한 번에 다 바꾸면 무엇이 효과를 냈는지 알 수 없어진다.",scope_note:"카드 F에서는 재현되지 않았다. 부정형이 약한 게 아니라 F의 대상에 분할 압력이 없어 시험될 상황이 아니었다. 규칙은 '분할 압력이 있는 대상에서 핵심 구도는 긍정형으로'가 더 정확하다."},R9_cap_overflow:{ko:"항목 수가 카드 요소 상한을 넘으면 블록을 쪼갠다",why:"일부만 그리면 PPT 텍스트와 이미지 요소가 어긋나 학습자가 대응시킬 수 없다(FT-2).",resolution:"split",rejected_alternative:"상한을 넘겨 한 줄에 다 그리는 안. 이미지 품질이 떨어지고 카드 A의 검증 조건을 벗어난다.",procedure:"항목을 의미 단위로 나눠 서브블록 N개를 만든다. 각 서브블록은 자체 슬롯 텍스트와 자체 이미지를 갖는다. 슬라이드도 나뉜다.",side_effect:"차시당 이미지 수가 늘어난다. 규칙 R5의 눈금과 부딪히는 또 하나의 근거.",enforcement:"code_detect + human_confirm",status:"decided",date:"2026-08",example:{block:"13주차 B5 A·M·P·E·R",items:5,cap:4,split:["B5-1 A·M·P (3항목)","B5-2 E·R (2항목)"]}}},kg={forbidden_prompt_words:{words:["transparent","alpha"],severity:"error",why:"모델이 가짜 체크무늬 배경을 그린다.",status:"verified"},forbidden_model_disjunction:{patterns:[" or midjourney"," or gemini"," or chatgpt","또는"],scope:"model 필드",severity:"error",why:"규칙 R6. 모델을 두 개 적지 않는다."},require_explicit_count:{applies_to:["C"],pattern:"exactly {N} .* on each side",severity:"error",why:"'same number of X'는 3사 모두 개수 불일치. 숫자를 명시한다."},require_mandatory_fragments:{applies_to:["C"],fragments:["identical camera angle and scale"],severity:"error",why:"좌우 대칭이 깨지면 비교가 무의미해진다."},text_free_present:{applies_to:["A","B","C","D","E","F"],must_contain:"text-free",severity:"error",why:"규칙 R2. 예외 없음."},margin_consistency:{check:"margin_policy의 각 종류별로 in_prompt == true 이면 in_line 이 가리키는 줄에 fragment 문자열이 실제로 있을 것. false 이면 없을 것.",severity:"warning",kinds:["right_presenter","bottom_caption","text_overlay"],note:"세 종류를 한 boolean으로 묶지 않는다. 목적이 달라 처리도 다르다."},positive_form_composition:{check:"composition 줄이 전부 'no ~'로만 구성돼 있으면 경고",severity:"warning",why:"규칙 R8. 카드 C의 'no vertical divider bar'가 이 패턴으로 실패했다. 현재 카드 F가 여기 걸린다.",scope_limit:"네거티브 목록(negative 줄)은 검사 대상이 아니다."},verbatim_lock:{check:"verbatim_locked == true 인 카드의 prompt 문자열 변경 시 status를 unverified로 되돌릴 것",severity:"error",why:"검증된 문자열을 고치면 검증이 무효가 된다."},unverified_badge:{check:"status != verified 인 카드·규칙은 UI에 미검증 표시",severity:"info"}},Tg=[{what:"해석·비유 + 살아있는 배경 + 요소 4+",why:"저울 광장, 창문 벽, 주방. 학습 포인트 복원 불가"},{what:"이미지 내 텍스트",why:"깨진 글자. 한글 불가"},{what:"만화 + 대사",why:"영문만 가능, 교정 부담 큼"},{what:"AI 생성 도표",why:"표·목록·수식은 도형/텍스트"},{what:"장식 글로우",why:"요소 수만 올림"},{what:"SVG 좌표 생성",why:"교수자가 템플릿에서 고르는 게 빠름"},{what:"노트에 없는 사물 발명",why:"규칙 R4. 무너진 이미지들의 공통 원인"},{what:"인물 비유 (독불장군 vs 지휘자 등)",why:"44장에 성공 사례 없음. 텍스트로"}],Cg=[{what:"레지스터 R1/R2/R3 (정밀/개념/사람)",why:"44장 어디에도 세 갈래 톤이 없었다. 사실상 단일 스타일의 변주"},{what:"형태 F1~F5 배타 선택",why:"실제 슬라이드 절반이 이미지 위 텍스트. 배타가 아니었다"},{what:"노드 5개 이상이면 SVG",why:"개수는 기준이 아니었다. 라벨 테스트로 대체"},{what:"Deck Style Contract를 AI가 발행",why:"색·타이틀바·위계·어미 규칙이 대학 템플릿에 이미 있음"},{what:"Exemplar 트랙 (이미지 내 텍스트)",why:"1~3주차에서 깨진 글자 다수. 한글 불가"},{what:"게이트 G1~G11 자기채점",why:"관측 불가능한 지시였음. 코드 판정 + 사람 확인으로 대체"},{what:"SVG 좌표 생성 / 레이아웃 지목",why:"교수자가 템플릿에서 고르는 게 빠르고 정확"}],Ng={_note:"내부 표현. 교수자에게 노출하지 않는다. 카드 선택과 규칙 파생의 근거로만 쓴다.",function:{values:["재현","조직화","해석·비유","장식·무대"],distribution_44:[11,10,17,6]},stage:{values:["무배경","배경있음"],note:"배경이 품질의 최대 예측 변수"},composition:{values:["단일","순차패널","대조패널","에셋세트","조감·단면"],distribution_44:[15,4,15,7,3]},density:{values:[1,2,3,"4+"],note:"무대에서 상한 파생"},glow:{values:["없음","정보전달","장식"],note:"장식은 금지"}},Dg={id:"1주차 1강 (공학과 창의성)",blocks_total:7,images:3,blocks:[{id:"B1",title:"공학의 본질",info_type:"definition",card:"B",subject:"캡슐 커피머신"},{id:"B2",title:"과학자 vs 공학자",info_type:"comparison",card:null,subject:null,note:"처음에 이미지로 잡았다가 뺐다. 규칙 R4가 여기서 나왔다."},{id:"B3",title:"시대별 역량",info_type:"comparison",card:null,subject:null},{id:"B4",title:"실무 소양",info_type:"list",card:null,subject:null},{id:"B5",title:"창의성의 오해",info_type:"definition",card:"B",subject:"하늘 나는 차"},{id:"B6",title:"창의 실용",info_type:"definition",card:"C",subject:"우회 경로 대조"},{id:"B7",title:"창의성 4단계",info_type:"sequence",card:null,subject:null}]},zg=[{id:"Q1",q:"카드 E(순차패널)를 AI로 만들 것인가",how:"다음 차시에 한 번 시도",state:"open"},{id:"Q2",q:"정보 유형 6종이 실제 노트를 다 덮는가",how:"차시 누적",state:"partial",note:"13주차에서 목록·인과수렴·분류계층 사용. 6종 중 5종 관측됨.",resolution:"1주차에서 정의·비교대조·목록·순서절차, 13주차에서 목록·인과수렴·분류계층. 6종 중 6종 관측. 부족한 유형은 아직 없음."},{id:"Q3",q:"대표 이미지의 원본 프롬프트 확보",how:"있으면 카드 템플릿을 실제 문구로 교체",state:"open"},{id:"Q4",q:"어미 규칙과 verbatim 충돌 시 처리",how:"실제 사례 나오면 판단",state:"open"},{id:"Q5",q:"좌측 60% 그룹핑이 더 잘 먹히는가",state:"closed",resolution:"무배경 카드는 여백 지시 자체가 불필요"},{id:"Q6",q:"카드 D·E·F도 제미나이가 최선인가",how:"A·B·C만 테스트함",state:"open",note:"F는 제미나이로 고정 완료. D·E는 여전히 미검증."},{id:"Q7",q:"차시당 이미지 3~4장 눈금이 유용한가",how:"규칙 R5 참조",state:"leaning_delete",note:"13주차 SCAMPER는 5블록 중 4장. 눈금이 차시 성격에 좌우된다는 증거. R9 채택으로 이미지 수가 더 늘어난다. 눈금 삭제 근거가 하나 더.",resolution:"SCAMPER 차시는 5블록 중 4장이고, FT-2·FT-3을 반영해 블록을 쪼개면 6장이 된다. 절대 개수 눈금이 차시 성격을 못 담는다. 다음 차시에서도 어긋나면 삭제."},{id:"Q8",q:"카드 E의 여백 처리를 A·B와 같이 둘 것인가",how:"사양서 §6 여백 표에 E가 누락돼 있어 파생값으로 넣었다. Q1과 같이 확인.",state:"open",new_in_rules_json:!0},{id:"Q9",q:"하단 출처 캡션 여백(lower 10% clear)을 C·D·E·F에도 넣을 것인가",how:"덱 기본값은 하단 8~10% 비움인데 A·B에만 문구가 있다. C는 검증된 문자열이라 넣으면 재검증 필요.",state:"open",new_in_rules_json:!0},{id:"Q10",q:"카드 F의 상한을 요소 수에서 선명도로 바꿀 것인가",how:"FIX-2를 다음 F 대상에 적용해 A/B",state:"closed",new_in_rules_json:!0,note:"F-2가 verified로 올라감. FIX-2 시험이 남은 마지막 F 항목.",resolution:"FIX-2 통과. 요소 상한을 흐림 조건으로 대체하는 방향이 맞았다. 사양서 §6의 '요소 1~2' 문구 수정 필요."},{id:"Q11",q:"카드 F의 분할 네거티브 3종이 일하고 있는가 사문인가",how:"분할 압력이 있는 F 대상이 나올 때 빼고 돌려본다",state:"open",priority:"low",new_in_rules_json:!0,note:"F가 닫히므로 우선순위 유지. 분할 압력이 있는 F 대상이 나올 때만."},{id:"Q12",q:"카드 F에서 Flow와 제미나이 앱의 차이가 모델인가 설정인가",how:"같은 표면에서 표본을 맞춰 재시행. 제미나이 프롬프트의 네거티브 포함 여부부터 확인.",state:"closed",new_in_rules_json:!0,note:"추가 4장도 Flow였다. 제미나이 앱 대조는 여전히 n=2.",resolution:"표면 차이 실재. 카드 F를 제미나이 앱으로 고정."},{id:"Q13",q:"사양서 §6의 카드 F 대표 사례에서 '복도 조명선'을 내릴 것인가",how:"복도 2/2가 중앙 소실점. 44장의 원본 복도 슬라이드가 어떻게 만들어졌는지 확인 필요(후편집일 수 있음).",state:"closed",new_in_rules_json:!0,resolution:"복도는 F 대표 사례로 유지. 제외 판정 철회(REV-1)."},{id:"Q14",q:"작업대류 대상에서 FIX-1이 빈 영역을 만들어내는가",how:"제미나이 앱, 작업대, 2번째 줄만 교체해 2장",state:"closed",new_in_rules_json:!0,resolution:"FIX-1 통과. 조건부 조각으로 등록."},{id:"Q15",q:"reference_case가 없는 차시에서도 챗GPT가 §7-1 수준으로 나오는가",how:"다음 차시 노트를 같은 Gem/GPT 구성으로 1회",state:"closed",priority:"high",new_in_rules_json:!0,resolution:"reference_case 제거 후에도 챗GPT는 6종 정확·커버리지 6/6·규칙 R4 작동. 오히려 더 엄격해졌다."},{id:"Q16",q:"제미나이에서 rules.json을 못 읽는 것인가 안 지키는 것인가",how:"cards.A.prompt.style을 그대로 인용시켜 확인. 못 읽는 것이면 카드 프롬프트를 마크다운으로 분리.",state:"closed",note:"오팔이 제미나이 기반이라 이 답이 오팔 채택 여부를 좌우한다.",new_in_rules_json:!0,resolution:"못 읽는 쪽. JSON은 미도달, 마크다운은 부분 도달(§3까지). 챗GPT는 마크다운 전체 도달."},{id:"Q17",q:"B1 캡슐 커피머신과 B5 우회 경로를 이미지로 둘 것인가",how:"§7-1은 이미지, 정답표 없는 챗GPT는 둘 다 텍스트로 판정. 교수자 판단 필요.",state:"open",note:"규칙이 실제 제작보다 엄격해진 것인지, §7-1이 느슨했던 것인지.",new_in_rules_json:!0},{id:"Q18",q:"카드 C 대표 이미지를 수정된 문자열로 다시 뽑을 것인가",how:"현재 대표는 수정 전 최초본이라 분리선이 있다. 고친 문자열로 뽑으면 정상본과 반례를 나란히 둘 수 있다.",state:"open",new_in_rules_json:!0},{id:"Q19",q:"동일 노트 재실행 시 판정이 얼마나 흔들리는가",how:"규칙 보강 후 같은 노트로 3회차. 이미지 수와 게이트 판정이 재현되는지.",state:"closed",priority:"high",new_in_rules_json:!0,resolution:"3회차에서 재현됨. R4 보강 후 판정이 안정. 다만 검증 절차로 '동일 노트 2회'를 상시 채택한다."}],Rg={decision:"chatgpt",status:"confirmed",date:"2026-08",test:"1주차 1강 노트, 동일 지시문·동일 지식파일(rules.json), 제미나이 Gem(프로 extended) 대 Custom GPT(extended) 1:1.",results:{gemini_gem:{블록수:"8 (오분할)",정보유형:"6종 밖의 명칭을 지어냄(단일 서술·비교·절차/흐름)",프롬프트:"rules.json 미사용. 미드저니 템플릿을 사전지식으로 생성(--ar, --no)",모델:"rules.json에 없는 'Midjourney v6.0'",카드선택:"단일 사물에 카드 A 배정(카드 B가 맞음)",규칙R4:"작동 안 함. 인물 비유(오케스트라 지휘봉)를 이미지로 배정 — 사양서 §7 금지 항목",기타:"실존 작품(뒤샹 「샘」) 재현 지시",판정:"실패"},custom_gpt:{블록수:"7 (정확)",정보유형:"6종 내에서만 선택",프롬프트:"카드 B·C 여섯 줄 문자열 일치",모델:"gemini 정확",카드선택:"§7-1과 7/7 일치",규칙R4:"작동. B2를 '대표할 구체 사물 없음'으로 기각, B4의 인물 비유를 명시적으로 배제",기타:"카드 C의 숫자 명시 규칙을 스스로 적용(exactly eight cars on each side)",판정:"통과"},gemini_gem_markdown:{블록수:"8 (오분할)",정보유형:"6종 밖의 이름 계속 사용(나열·비교·순서)",프롬프트:"§5 미도달. 미드저니 템플릿 재생성(--ar, --no)",규칙R4:"부분 작동. 인물 비유(오케스트라 지휘자)는 걸러냄 — §3은 읽힘",해석:"마크다운 앞부분은 도달하고 뒷부분(§5 카드)은 도달하지 않는 것으로 보임",판정:"실패"},custom_gpt_no_reference_case:{블록수:"6 (정확)",커버리지:"6/6",정보유형:"6종 이름 정확",문자열인용:"§5 카드 B의 style 줄 정확히 인용 확인",규칙R4:"강하게 작동. B5를 '학습 포인트가 자동차나 내비게이션 자체가 아니라 두 사고방식의 대조'로 판정해 배경층 없음으로 내림",note:"정답표를 뺀 뒤 §7-1보다 엄격한 판정이 나왔다. 이전 카드 C 배정은 컨닝이었을 가능성.",판정:"통과"}},conclusion:"텍스트 판단은 챗GPT Custom GPT + 마크다운 지식 파일로 확정. 이미지 생성은 제미나이 앱 고정. 두 표면은 별개다.",caveat:"1주차 1강은 rules.json의 reference_case에 정답이 들어 있어 컨닝 가능성이 있다. 다른 차시로 재확인 필요.",knowledge_file:{format:"markdown",file:"VDF6_규칙.md",derived_from:"rules.json",why:"제미나이 Gem이 rules.json을 '파일을 찾지 못했습니다'로 응답. JSON은 지식 파일로 도달하지 않았다. 마크다운으로 바꾸자 §3 금지 목록까지는 읽혔다.",rule:"규칙이 바뀌면 rules.json을 고치고 마크다운을 다시 뽑는다. 반대로 하지 않는다.",excluded:"reference_case는 지식 파일에서 뺀다. 정답표가 들어가면 컨닝이 된다."}},Og={decision:"custom_gpt",status:"현행 MVP",stack:["Custom GPT (지시문 + VDF6_규칙.md)","제미나이 앱 (이미지)","교수자 PPT"],cost:"없음 (기존 구독 내)",opal:{status:"보류",why:"오팔은 제미나이 기반. 제미나이가 두 차례 §5 카드 문자열에 도달하지 못했다.",revisit_when:"판단만 제미나이에 맡기고 프롬프트 조립을 오팔 단계에서 문자열로 꽂는 구조라면 유효. 여러 교수자에게 배포할 때 재검토."},firebase:{status:"보류",why:"API 과금이 발생하고 지금 얻는 것이 없다. 배포 규모가 커질 때."}},Bg={lecture:"13주차 SCAMPER (클립·스마트폰)",date:"2026-08",surface:{text:"chatgpt custom gpt",image:"gemini app"},blocks:5,images_planned:4,images_generated:4,results:[{block:"B1 클립 S·C·A",verdict:"성공",note:"N+1 기준점(금속 클립)이 계획 단계에서 자동 적용됨. rules.json에 기록된 과거 실패를 규칙이 실제로 막은 첫 사례.",defect:"네 번째 머니클립이 클립 형태를 잃고 별개 제품이 됨. subject에 `all clearly made from the same bent wire form`가 누락."},{block:"B2 클립 M·P·E·R",verdict:"성공",note:"초소형 항목이 작게 나옴. `identical scale`을 뺀 판단이 옳았음 — 크기 변화가 학습 포인트인 경우의 실제 사례."},{block:"B4 스마트폰 S·C",verdict:"실패",defect:"unbranded 3종 미부착. 특정 제조사 카메라 배열과 겹침. 화면이 전부 비어 결합(C) 항목이 표현되지 않음. S 둘·C 둘을 한 줄에 놓아 분류 경계 소실."},{block:"B5 A·M·P·E·R",verdict:"실패",defect:"PPT 텍스트 5항목 대 이미지 4요소로 대응 불가. POS 화면에 UI가 그려짐(no screen content 미부착). eSIM 항목이 회색 판으로만 나와 표현 실패."}],findings:[{id:"FT-1",claim:"unbranded 3종을 조건 판단에 맡기면 누락된다.",evidence:"스마트폰·스마트워치 블록에서 미부착. 2026-08 3사 검증을 마친 규칙인데 계획 단계에서 빠졌다.",fix:"브랜드 연상이 강한 대상군(휴대기기·웨어러블·차량·가전)은 조건 판단 없이 항상 부착한다.",status:"verified",n:2},{id:"FT-2",claim:"항목 수가 카드 요소 상한을 넘으면 이미지를 줄이는 것이 아니라 블록을 쪼개야 한다.",evidence:"B5에서 5항목 중 4개만 그려 텍스트와 이미지가 어긋났다. 학습자가 어느 항목이 빠졌는지 알 수 없다.",fix:"상한 초과 시 (1) 블록 분할 또는 (2) 상한 초과 허용 중 택일. 부분 표현은 금지.",status:"verified",n:1},{id:"FT-3",claim:"분류가 둘 이상인 블록에 카드 A를 쓰면 분류 경계가 사라진다.",evidence:"B4의 S 둘·C 둘이 한 줄에 나란히 놓여 어느 것이 어느 분류인지 구분 불가.",fix:"정보 유형이 분류·계층이면 카드 A를 쓰지 않는다. 카드 C로 가거나 분류별로 블록을 나눈다.",status:"verified",n:1}],images_per_lecture:"5블록 중 4장. 규칙 R5의 3~4 눈금을 넘김. SCAMPER 차시는 사물 변형이 연속되는 구조라 눈금이 차시 성격에 좌우된다.",completed:"B1·B2·B4·B5 생성. B4 재시도와 블록 분할은 미실시 — 규칙 수정 근거는 확보됨."},Mg={version:"1.0",purpose:"GPT가 사람이 읽는 계획과 함께 내는 기계 판독용 블록 배열. 검사기 화면이 이 형식을 읽는다.",why:"조건부 조각의 발동 조건을 LLM 판단에 맡겼더니 누락됐다(FT-1). 대상 속성을 값으로 내게 하면 코드가 검사할 수 있다.",fields:{id:"블록 번호. 예: B4",title:"블록 제목",track:"shape | image — 라벨 테스트 결과",info_type:"6종 중 하나. 다른 이름 금지",item_count:"정수",item_structure:"슬롯 형식 문자열",slots:"항목 하나가 원소 하나. item_count와 길이가 같아야 한다. 인과·수렴도 화살표로 이어붙이지 않는다.",gate:"{passed, reason}. image면 passed=true. 게이트에서 기각돼 shape이 된 블록은 passed=false로 남긴다. 라벨 테스트에서 이미 도형이면 null.",card:"A~F 또는 null",subject:"영문 대상 한 줄. 카드 프롬프트의 subject 슬롯에 들어간다",subject_traits:{branded_category:"true|false — 휴대기기·웨어러블·차량·가전·컴퓨터면 true",same_form_variants:"true|false — 같은 사물의 변형을 나열하는가",replacement_type:"true|false — 'A를 B로 대체' 유형인가. true면 기준점을 더해 N+1개",scale_is_the_point:"true|false — 크기 변화가 학습 포인트인가. true면 identical scale을 뺀다",spreads_across_frame:"true|false — 사물이 화면 전체에 퍼지는가. 카드 F의 여백 위치 지정에 쓴다"}},rules_for_gpt:["subject_traits는 판단해서 붙이는 게 아니라 항상 다섯 개를 모두 낸다. 해당 없으면 false.","조건부 조각 문자열을 직접 쓰지 않는다. 속성만 내면 코드가 붙인다.","item_count가 카드 상한을 넘으면 split 배열을 함께 낸다(R9).","slots 길이 == item_count. 인과·수렴을 한 문자열로 뭉치지 않는다.","gate는 passed와 reason 둘 다. 기각 기록을 지우지 않는다."],split_field:{split:[{id:"B5-1",title:"...",item_count:3,slots:["..."],subject:"..."}]},observed_failures:[{id:"S-1",what:"gate.passed 누락, reason만 냄",n:"5/5 블록",fix:"표로 세 경우를 명시"},{id:"S-2",what:"인과·수렴의 slots를 화살표로 이어 한 문자열로 냄",n:"4/4 블록",fix:"예시 JSON 추가"},{id:"S-3",what:"도형 블록에 gate가 붙음",verdict:"정상. 기각 기록으로 유용하다고 판단해 규칙에 반영"}]},Ug={unit:"의미 단위",not:"물체 개수",why:"캡슐 커피머신 대표 이미지는 물체가 7~8개지만 의미 단위는 둘이다 — 드립 도구 무더기 하나, 기계 하나. 학습 포인트가 그 둘의 대비다.",cross_check:"카드 B 대표인 '저울+카드'도 물체로 세면 3개(저울·회색카드·강조카드)지만 의미로는 2개(저울, 두 선택지)다. 44장의 밀도 축이 원래 의미 단위였으나 문서화되지 않았다.",rule:"하나하나가 학습 내용을 실어야 요소로 센다. 맥락을 만드는 소품 무더기는 통틀어 하나로 센다.",status:"decided",date:"2026-08"},Hg={lecture:"SCAMPER S·C 차시",date:"2026-08",blocks:11,images:2,good:["정보 유형 6종 이름 정확 11/11","커버리지 11/11","B7 구텐베르크·B8 아이폰을 규칙 R4로 기각 — 여러 사물이 필요해 좁혀지지 않음","B8은 도형인데도 branded_category=true를 정확히 냄. 속성을 값으로 내게 한 설계가 작동","B5·B11의 subject_traits가 same_form_variants·replacement_type 둘 다 true로 정확"],defects:["gate.passed 누락","인과·수렴 slots 뭉침"]},Gg={lecture:"SCAMPER S·C 차시 (2회차, 지시문 개정 후)",date:"2026-08",knowledge_file:"rules.json (마크다운 미제공). 챗GPT는 JSON을 읽는다 — 제미나이와 다른 지점.",fixed:["gate.passed 5/5 부착","인과·수렴 slots 원소 분리 완료"],regression:{what:"이미지 2장 → 5장. 구텐베르크·아이폰이 기각에서 통과로 뒤집힘",cause:"R4의 기각 사례에 '서로 다른 사물 여러 개'가 없었다. 1회차는 우연히 옳게 읽었다.",fix:"R4에 not_sufficient와 pattern_2 추가, 카드 A의 use_when에서 '여러 항목 병렬' 삭제",lesson:"같은 노트를 두 번 돌리지 않았으면 못 잡았다. 판정 안정성은 1회 실행으로 확인되지 않는다."},other:["B11에서 GPT가 subject에 unbranded를 직접 써넣음 — 조각을 쓰지 말라는 규칙 위반이나, 카드 B에 조각이 없어서 생긴 빈틈을 메운 것"]},qg={lecture:"SCAMPER S·C 차시 (3회차, R4 보강 후)",date:"2026-08",lint:"11/11 통과",images:{B5:"성공. 같은 기계에 투입구만 다름. 기준점-변형 관계가 읽힘",B11:"성공. 같은 의자 3종, 다리와 좌판만 변경. 스마트폰 화면 비어 있음(unbranded 부착 효과)",note:"N+1 기준점 규칙이 두 장 모두에서 눈에 보이게 작동. 13주차 머니클립 같은 형태 이탈 없음"},confirmed:["구텐베르크·아이폰 재기각. 근거 문장이 R4의 not_sufficient 문구를 그대로 인용 — 규칙을 읽은 것이지 우연이 아니다","gate.passed 부착 유지","인과·수렴 slots 원소 분리 유지","기각 기록(passed=false) 2건 보존"],improvement:"B11이 S·C 두 결과를 한 블록 카드 A로 통합하고 기준 의자를 더해 3개로 그림. 2회차의 분리 배치보다 낫다. replacement_type의 N+1을 스스로 적용.",remaining:"B11 subject에 unbranded 미부착. branded_category=true는 정확히 냈으므로 코드가 붙이면 된다 — 설계대로다.",stability:{run1:{images:2,gutenberg:"기각",format_defects:2},run2:{images:5,gutenberg:"통과",format_defects:0},run3:{images:2,gutenberg:"기각",format_defects:0},reading:"1회차와 3회차는 결과가 같지만 이유가 다르다. 1회차는 규칙에 없는 것을 모델이 알아서 읽었고, 3회차는 규칙에 적힌 것을 읽었다. 2회차가 없었으면 이 차이를 몰랐을 것이다.",lesson:"규칙이 실제로 작동하는지는 동일 노트 재실행으로만 확인된다. 1회 성공은 규칙의 증거가 아니다."}},Lg={rule:"규칙을 고친 뒤에는 같은 노트를 두 번 돌린다.",why:"1회 성공은 모델이 우연히 옳게 읽은 것일 수 있다. SCAMPER 차시 1·2회차가 같은 입력에서 정반대로 갈렸다.",status:"adopted",date:"2026-08"},Vg={date:"2026-08-21",state:"안정 · 실사용 가능",cards:{verified:["A","B","C","F"],unverified:["D","E"]},surfaces:{text:"ChatGPT Custom GPT + rules.json",image:"제미나이 앱",inspect:"검사기(미배포)"},cost:"없음",closing_note:"오늘 규칙 수정이 후반으로 갈수록 발견보다 손질이 많아졌다. 여기서 닫는다. 다음 수정은 실제 제작에서 새 실패가 관측될 때만."},Fg=["검사기를 ChatGPT Sites에 올린다. 규칙이 굳었으므로 두 번 일하지 않는다.","카드 D는 장치 작동 블록이 실제로 나올 때, 카드 E는 순차 패널이 필요할 때 검증한다.","규칙을 고치면 같은 노트를 두 번 돌린다(verification_protocol).","새 규칙은 실패가 관측될 때만 추가한다. 손질하지 않는다."],mh={version:pg,spec_ref:gg,generated:_g,_meta:yg,output_contract:vg,track:bg,info_types:xg,ending_style:wg,background_layer:Sg,negative_blocks:jg,cards:Eg,rules:Ag,lint:kg,do_not_use:Tg,retired_from_5:Cg,axes:Ng,reference_case:Dg,open_questions:zg,text_model:Rg,mvp:Og,field_test:Bg,block_schema:Mg,element_cap_semantics:Ug,field_test_2:Hg,field_test_3:Gg,field_test_4:qg,verification_protocol:Lg,status:Vg,next_when_resumed:Fg},ph=mh,Xg=Object.values(ph.info_types).map(u=>u==null?void 0:u.ko).filter(Boolean),fa={cards:Object.fromEntries(Object.entries(ph.cards).map(([u,w])=>{var o;return[u,{ko:w.ko,cap:w.element_cap,model:typeof w.model=="string"?w.model:w.model.primary,status:w.status,bg:w.prompt.background,cp:w.prompt.composition,st:w.prompt.style,ng:w.prompt.negative,ex:w.prompt.subject_example||"",rep:((o=w.representative)==null?void 0:o[0])||""}]}))},gh=Object.keys(fa.cards);function Yg(u){return u.replace(/[&<>]/g,w=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[w])}function ms(u){return String(u).split("|").map(w=>w.trim())}function Uu(u,w=170){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 ${w}" role="img"><rect width="900" height="${w}" fill="#fff"/>${u}</svg>`}function Pa(u,w,o,f=20,p="middle"){return`<text x="${u}" y="${w}" text-anchor="${p}" font-family="Malgun Gothic, sans-serif" font-size="${f}" fill="#212528">${Yg(o)}</text>`}function ps(u,w,o,f,p,d="#f6f7f6"){return`<rect x="${u}" y="${w}" width="${o}" height="${f}" rx="12" fill="${d}" stroke="${p}"/>`}function Zg(u,w,o){const f=u.slots||[];if(!f.length||w==="정의")return null;if(w==="목록"||w==="분류·계층"){const p=Math.min(f.length,4),d=Math.ceil(f.length/p),g=18,m=24,_=(900-m*2-g*(p-1))/p,y=90;let S="";return f.forEach((E,T)=>{const b=m+T%p*(_+g),k=m+Math.floor(T/p)*(y+g);S+=ps(b,k,_,y,o)+Pa(b+_/2,k+52,ms(E)[0]||E,17)}),Uu(S,m*2+d*y+(d-1)*g)}if(w==="순서·절차"||w==="인과·수렴"){const p=f.length,d=44,g=24,m=(900-g*2-d*(p-1))/p,_=96;let y="";return f.forEach((S,E)=>{const T=g+E*(m+d);if(y+=ps(T,30,m,_,o)+Pa(T+m/2,85,ms(S)[0]||S,16),E<p-1){const b=T+m+8;y+=`<path d="M${b} 78 H${b+d-16}" stroke="${o}" stroke-width="3"/><path d="M${b+d-24} 70 l10 8 -10 8" fill="none" stroke="${o}" stroke-width="3"/>`}}),Uu(y,156)}if(w==="비교·대조"){const p=ms(f[0]||""),d=ms(f[1]||"");return Uu(ps(30,28,390,110,o)+ps(480,28,390,110,o)+Pa(225,58,p[0]||"A",18)+Pa(675,58,d[0]||"B",18)+Pa(225,100,p.slice(1).join(" · ")||f[0],15)+Pa(675,100,d.slice(1).join(" · ")||f[1],15),166)}return null}function Hu(u){return u.map(w=>`${w.key}: ${w.value}`).join(`
`)}const Qg=["순서·절차","분류·계층","비교·대조","인과·수렴","정의","목록"],Kg=["image","shape"],Jg=["A","B","C","D","E","F"],Ig=new Set(["id","title","track","info_type","item_count","item_structure","slots","gate","card","subject","subject_traits","split"]),ih=["branded_category","same_form_variants","replacement_type","scale_is_the_point","spreads_across_frame"];function el(u){return!!u&&typeof u=="object"&&!Array.isArray(u)}function pt(u){throw new Error(u)}function nn(u,w){return typeof u!="string"&&pt(`${w}은 문자열이어야 합니다`),u}function _h(u,w){return(!Number.isInteger(u)||Number(u)<0)&&pt(`${w}은 0 이상의 정수여야 합니다`),Number(u)}function yh(u,w){return(!Array.isArray(u)||u.some(o=>typeof o!="string"))&&pt(`${w}은 문자열 배열이어야 합니다`),u}function $g(u,w){return u===null?null:((!el(u)||typeof u.passed!="boolean"||typeof u.reason!="string")&&pt(`${w}은 null 또는 {passed:boolean, reason:string}이어야 합니다`),{passed:u.passed,reason:u.reason})}function Wg(u,w){el(u)||pt(`${w}이 없습니다`);const o=Object.keys(u).filter(p=>!ih.includes(p));o.length&&pt(`${w}에 VDF 규칙에 없는 속성이 있습니다: ${o.join(", ")}`);const f={};for(const p of ih)typeof u[p]!="boolean"&&pt(`${w}.${p}는 true/false여야 합니다`),f[p]=u[p];return f}function Pg(u,w){if(u!==void 0)return Array.isArray(u)||pt(`${w}은 배열이어야 합니다`),u.map((o,f)=>(el(o)||pt(`${w}[${f}] 형식이 잘못되었습니다`),{id:nn(o.id,`${w}[${f}].id`),title:nn(o.title,`${w}[${f}].title`),item_count:_h(o.item_count,`${w}[${f}].item_count`),slots:yh(o.slots,`${w}[${f}].slots`),subject:o.subject==null?null:nn(o.subject,`${w}[${f}].subject`)}))}function e_(u,w){const o=`blocks[${w}]`;el(u)||pt(`${o} 형식이 잘못되었습니다`);const f=Object.keys(u).filter(_=>!Ig.has(_));f.length&&pt(`${o}에 공식 VDF 2부 JSON에 없는 키가 있습니다: ${f.join(", ")}. VDF6_지시문의 JSON 형식을 그대로 사용해 주세요.`),"information_type"in u&&pt(`${o}.information_type 대신 공식 키 info_type을 사용해야 합니다`),"background_layer"in u&&pt(`${o}.background_layer는 공식 2부 JSON 키가 아닙니다. card/subject/gate 구조를 사용해야 합니다`),"rationale"in u&&pt(`${o}.rationale 대신 공식 구조의 gate.reason과 1부 근거를 사용해야 합니다`);const p=nn(u.track,`${o}.track`);Kg.includes(p)||pt(`${o}.track은 image 또는 shape여야 합니다`);const d=nn(u.info_type,`${o}.info_type`);Qg.includes(d)||pt(`${o}.info_type은 VDF 6종 중 하나여야 합니다`);const g=u.card===null?null:nn(u.card,`${o}.card`);g!==null&&!Jg.includes(g)&&pt(`${o}.card는 A~F 또는 null이어야 합니다`);const m=u.subject===null?null:nn(u.subject,`${o}.subject`);return{id:nn(u.id,`${o}.id`),title:nn(u.title,`${o}.title`),track:p,info_type:d,item_count:_h(u.item_count,`${o}.item_count`),item_structure:u.item_structure===void 0?void 0:nn(u.item_structure,`${o}.item_structure`),slots:yh(u.slots,`${o}.slots`),gate:$g(u.gate,`${o}.gate`),card:g,subject:m,subject_traits:Wg(u.subject_traits,`${o}.subject_traits`),split:Pg(u.split,`${o}.split`)}}function t_(u){const w=[];for(const f of u.matchAll(/```json\s*([\s\S]*?)```/gi))w.push(f[1].trim());for(const f of u.matchAll(/```\s*([\s\S]*?)```/g))f[1].includes('"blocks"')&&w.push(f[1].trim());const o=u.indexOf("{");return o>=0&&w.push(u.slice(o).trim()),[...new Set(w)]}function n_(u){let w=null;for(const o of t_(u))try{const f=JSON.parse(o);if(!el(f)||!Array.isArray(f.blocks))continue;const p=Object.keys(f).filter(d=>d!=="blocks");return p.length&&pt(`공식 VDF 2부 JSON의 최상위 키는 blocks만 사용합니다. 추가 키: ${p.join(", ")}`),{blocks:f.blocks.map(e_)}}catch(f){w=f}throw w instanceof Error?w:new Error("공식 VDF 2부 JSON을 찾지 못했습니다")}function vh(u){var p,d,g,m,_,y,S;const w=u.rulesJson||{},o={};for(const E of["A","B","C","D","E","F"]){const T=(p=w.cards)==null?void 0:p[E];T&&(o[E]={ko:T.ko||E,cap:T.element_cap??null,model:typeof T.model=="string"?T.model:((d=T.model)==null?void 0:d.primary)||"",status:T.status||"unknown",bg:((g=T.prompt)==null?void 0:g.background)||"",cp:((m=T.prompt)==null?void 0:m.composition)||"",st:((_=T.prompt)==null?void 0:_.style)||"",ng:((y=T.prompt)==null?void 0:y.negative)||"",ex:((S=T.prompt)==null?void 0:S.subject_example)||""})}const f=Object.values(w.info_types||{}).map(E=>E==null?void 0:E.ko).filter(E=>!!E);return{cards:o,infoTypes:f}}function a_(u,w,o,f,p){const d=[],g=u.subject_traits||{};if(p.infoTypes.length&&!p.infoTypes.includes(o)&&d.push({key:"it",message:`항목 관계 이름은 여섯 개뿐입니다 — ${o}`}),w){const m=p.cards[w];if(!m)return d.push({key:"unver",message:`현재 ACTIVE 엔진에 배치 ${w} 정의가 없습니다.`}),d;w==="A"&&o==="분류·계층"&&d.push({key:"cat_a",message:"항목이 두 무리로 묶여 있어서 배치 A는 맞지 않습니다. 한 줄에 늘어놓으면 어느 게 어느 무리인지 사라집니다."}),m.cap&&u.item_count>m.cap&&d.push({key:"cap",message:`항목이 ${u.item_count}개인데 이 배치는 최대 ${m.cap}개입니다. 일부만 그리지 말고 덩어리를 나눠 주세요.`}),m.status!=="verified"&&m.status!=="verified_after_fix"&&d.push({key:"unver",message:`배치 ${w}는 아직 충분히 확인되지 않았습니다. 결과를 꼭 눈으로 확인해 주세요.`}),g.replacement_type&&!g.same_form_variants&&d.push({key:"base",message:"무언가를 바꾼 것을 그리는데 같은 사물의 여러 모습이 아닙니다. 바뀌기 전 모습이 빠졌을 수 있습니다."}),g.branded_category&&f.brand==="off"&&d.push({key:"brand",message:"브랜드가 연상되는 물건인데 설정이 꺼져 있습니다. 특정 제품처럼 그려질 수 있습니다."})}return u.slots&&u.item_count&&u.slots.length!==u.item_count&&d.push({key:"slots",message:`글이 ${u.slots.length}줄인데 항목은 ${u.item_count}개입니다. 수가 맞아야 합니다.`}),u.track==="image"&&(!u.gate||u.gate.passed!==!0)&&d.push({key:"gate",message:"그림을 그리는데 왜 그리는지 이유가 없습니다."}),d}function i_(u,w,o){if(!w)return[];const f=u.subject_traits||{},p=[];return w==="A"&&f.same_form_variants&&p.push("all clearly made from the same base form"),f.branded_category&&o.brand==="on"&&p.push("unbranded, no app icons, no screen content, no brand logos, generic design"),w==="F"&&(p.push("everything softly out of focus, shallow depth of field throughout, no sharp object anywhere"),f.spreads_across_frame&&p.push(`the ${o.emptySide} 55 percent is plain empty wall with no objects`)),p}function l_(u,w,o,f){if(!w)return null;const p=f.cards[w];if(!p)return null;const d=i_(u,w,o);return[{key:"subject",value:(u.subject||"")+(d.length?`, ${d.join(", ")}`:"")},{key:"background",value:p.bg},{key:"composition",value:p.cp},{key:"style",value:p.st},{key:"ratio",value:"16:9"},{key:"negative",value:p.ng}]}function bh(u,w,o){const f=vh(o),p=u.card||null,d=u.info_type;return{block:u,card:p,infoType:d,warnings:a_(u,p,d,w,f),prompt:l_(u,p,w,f),diagramSvg:Zg(u,d,w.accent)}}function s_(u,w,o){return n_(u).blocks.map(p=>bh(p,w,o))}function r_(u,w,o,f){const p=!!w&&Object.prototype.hasOwnProperty.call(w,"card"),d={...u.block,info_type:(w==null?void 0:w.infoType)??u.block.info_type,card:p?w.card:u.block.card??null};return bh(d,o,f)}function u_(u,w){const o=[];for(let f=0;f<u.length;f+=w)o.push(u.slice(f,f+w));return o}function c_(u,w){const o=u.split(/\s+/).filter(Boolean);if(!o.length)return[u];const f=[];let p="";for(const d of o){const g=d.length>w?u_(d,w):[d];for(const m of g){const _=p?`${p} ${m}`:m;if(_.length<=w){p=_;continue}p&&f.push(p),p=m}}return p&&f.push(p),f}function o_(u){return u?u.replace(/font-family="[^"]*"/g,'font-family="Noto Sans KR, Malgun Gothic, Apple SD Gothic Neo, Arial, sans-serif"').replace(/<text\s+([^>]*)>([^<]*)<\/text>/g,(f,p,d)=>{var A,j,D;const g=Number(((A=p.match(/font-size="([0-9.]+)"/))==null?void 0:A[1])||0);if(g<15||d.length<18)return f;const m=(j=p.match(/x="([^"]+)"/))==null?void 0:j[1];if(!m)return f;const _=Number(((D=p.match(/y="([^"]+)"/))==null?void 0:D[1])||0),S=g===15?22:g===16?16:14,E=d.split(" · ").flatMap(M=>c_(M.trim(),S)).filter(Boolean).slice(0,4);if(E.length<2)return f;const T=g===15?17:18,b=(E.length-1)*T,k=Math.max(34,_-b/2+2);let x=p.replace(/y="[^"]+"/g,`y="${k}"`);return g>=16&&(x=x.replace(/font-size="[^"]+"/g,`font-size="${Math.max(13,g-2)}"`)),`<text ${x}>${E.map((M,V)=>`<tspan x="${m}" dy="${V===0?0:T}">${M}</tspan>`).join("")}</text>`}):null}async function f_(u){return await u.text()}function gs(u){throw new Error('Could not dynamically require "'+u+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Gu={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var lh;function d_(){return lh||(lh=1,(function(u,w){(function(o){u.exports=o()})(function(){return(function o(f,p,d){function g(y,S){if(!p[y]){if(!f[y]){var E=typeof gs=="function"&&gs;if(!S&&E)return E(y,!0);if(m)return m(y,!0);var T=new Error("Cannot find module '"+y+"'");throw T.code="MODULE_NOT_FOUND",T}var b=p[y]={exports:{}};f[y][0].call(b.exports,function(k){var x=f[y][1][k];return g(x||k)},b,b.exports,o,f,p,d)}return p[y].exports}for(var m=typeof gs=="function"&&gs,_=0;_<d.length;_++)g(d[_]);return g})({1:[function(o,f,p){var d=o("./utils"),g=o("./support"),m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";p.encode=function(_){for(var y,S,E,T,b,k,x,A=[],j=0,D=_.length,M=D,V=d.getTypeOf(_)!=="string";j<_.length;)M=D-j,E=V?(y=_[j++],S=j<D?_[j++]:0,j<D?_[j++]:0):(y=_.charCodeAt(j++),S=j<D?_.charCodeAt(j++):0,j<D?_.charCodeAt(j++):0),T=y>>2,b=(3&y)<<4|S>>4,k=1<M?(15&S)<<2|E>>6:64,x=2<M?63&E:64,A.push(m.charAt(T)+m.charAt(b)+m.charAt(k)+m.charAt(x));return A.join("")},p.decode=function(_){var y,S,E,T,b,k,x=0,A=0,j="data:";if(_.substr(0,j.length)===j)throw new Error("Invalid base64 input, it looks like a data url.");var D,M=3*(_=_.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(_.charAt(_.length-1)===m.charAt(64)&&M--,_.charAt(_.length-2)===m.charAt(64)&&M--,M%1!=0)throw new Error("Invalid base64 input, bad content length.");for(D=g.uint8array?new Uint8Array(0|M):new Array(0|M);x<_.length;)y=m.indexOf(_.charAt(x++))<<2|(T=m.indexOf(_.charAt(x++)))>>4,S=(15&T)<<4|(b=m.indexOf(_.charAt(x++)))>>2,E=(3&b)<<6|(k=m.indexOf(_.charAt(x++))),D[A++]=y,b!==64&&(D[A++]=S),k!==64&&(D[A++]=E);return D}},{"./support":30,"./utils":32}],2:[function(o,f,p){var d=o("./external"),g=o("./stream/DataWorker"),m=o("./stream/Crc32Probe"),_=o("./stream/DataLengthProbe");function y(S,E,T,b,k){this.compressedSize=S,this.uncompressedSize=E,this.crc32=T,this.compression=b,this.compressedContent=k}y.prototype={getContentWorker:function(){var S=new g(d.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new _("data_length")),E=this;return S.on("end",function(){if(this.streamInfo.data_length!==E.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),S},getCompressedWorker:function(){return new g(d.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},y.createWorkerFrom=function(S,E,T){return S.pipe(new m).pipe(new _("uncompressedSize")).pipe(E.compressWorker(T)).pipe(new _("compressedSize")).withStreamInfo("compression",E)},f.exports=y},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(o,f,p){var d=o("./stream/GenericWorker");p.STORE={magic:"\0\0",compressWorker:function(){return new d("STORE compression")},uncompressWorker:function(){return new d("STORE decompression")}},p.DEFLATE=o("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(o,f,p){var d=o("./utils"),g=(function(){for(var m,_=[],y=0;y<256;y++){m=y;for(var S=0;S<8;S++)m=1&m?3988292384^m>>>1:m>>>1;_[y]=m}return _})();f.exports=function(m,_){return m!==void 0&&m.length?d.getTypeOf(m)!=="string"?(function(y,S,E,T){var b=g,k=T+E;y^=-1;for(var x=T;x<k;x++)y=y>>>8^b[255&(y^S[x])];return-1^y})(0|_,m,m.length,0):(function(y,S,E,T){var b=g,k=T+E;y^=-1;for(var x=T;x<k;x++)y=y>>>8^b[255&(y^S.charCodeAt(x))];return-1^y})(0|_,m,m.length,0):0}},{"./utils":32}],5:[function(o,f,p){p.base64=!1,p.binary=!1,p.dir=!1,p.createFolders=!0,p.date=null,p.compression=null,p.compressionOptions=null,p.comment=null,p.unixPermissions=null,p.dosPermissions=null},{}],6:[function(o,f,p){var d=null;d=typeof Promise<"u"?Promise:o("lie"),f.exports={Promise:d}},{lie:37}],7:[function(o,f,p){var d=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",g=o("pako"),m=o("./utils"),_=o("./stream/GenericWorker"),y=d?"uint8array":"array";function S(E,T){_.call(this,"FlateWorker/"+E),this._pako=null,this._pakoAction=E,this._pakoOptions=T,this.meta={}}p.magic="\b\0",m.inherits(S,_),S.prototype.processChunk=function(E){this.meta=E.meta,this._pako===null&&this._createPako(),this._pako.push(m.transformTo(y,E.data),!1)},S.prototype.flush=function(){_.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},S.prototype.cleanUp=function(){_.prototype.cleanUp.call(this),this._pako=null},S.prototype._createPako=function(){this._pako=new g[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var E=this;this._pako.onData=function(T){E.push({data:T,meta:E.meta})}},p.compressWorker=function(E){return new S("Deflate",E)},p.uncompressWorker=function(){return new S("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(o,f,p){function d(b,k){var x,A="";for(x=0;x<k;x++)A+=String.fromCharCode(255&b),b>>>=8;return A}function g(b,k,x,A,j,D){var M,V,H=b.file,G=b.compression,L=D!==y.utf8encode,fe=m.transformTo("string",D(H.name)),$=m.transformTo("string",y.utf8encode(H.name)),me=H.comment,be=m.transformTo("string",D(me)),B=m.transformTo("string",y.utf8encode(me)),Y=$.length!==H.name.length,h=B.length!==me.length,ee="",Z="",Q="",pe=H.dir,se=H.date,z={crc32:0,compressedSize:0,uncompressedSize:0};k&&!x||(z.crc32=b.crc32,z.compressedSize=b.compressedSize,z.uncompressedSize=b.uncompressedSize);var R=0;k&&(R|=8),L||!Y&&!h||(R|=2048);var U=0,ae=0;pe&&(U|=16),j==="UNIX"?(ae=798,U|=(function(ce,ve){var Le=ce;return ce||(Le=ve?16893:33204),(65535&Le)<<16})(H.unixPermissions,pe)):(ae=20,U|=(function(ce){return 63&(ce||0)})(H.dosPermissions)),M=se.getUTCHours(),M<<=6,M|=se.getUTCMinutes(),M<<=5,M|=se.getUTCSeconds()/2,V=se.getUTCFullYear()-1980,V<<=4,V|=se.getUTCMonth()+1,V<<=5,V|=se.getUTCDate(),Y&&(Z=d(1,1)+d(S(fe),4)+$,ee+="up"+d(Z.length,2)+Z),h&&(Q=d(1,1)+d(S(be),4)+B,ee+="uc"+d(Q.length,2)+Q);var le="";return le+=`
\0`,le+=d(R,2),le+=G.magic,le+=d(M,2),le+=d(V,2),le+=d(z.crc32,4),le+=d(z.compressedSize,4),le+=d(z.uncompressedSize,4),le+=d(fe.length,2),le+=d(ee.length,2),{fileRecord:E.LOCAL_FILE_HEADER+le+fe+ee,dirRecord:E.CENTRAL_FILE_HEADER+d(ae,2)+le+d(be.length,2)+"\0\0\0\0"+d(U,4)+d(A,4)+fe+ee+be}}var m=o("../utils"),_=o("../stream/GenericWorker"),y=o("../utf8"),S=o("../crc32"),E=o("../signature");function T(b,k,x,A){_.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=k,this.zipPlatform=x,this.encodeFileName=A,this.streamFiles=b,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}m.inherits(T,_),T.prototype.push=function(b){var k=b.meta.percent||0,x=this.entriesCount,A=this._sources.length;this.accumulate?this.contentBuffer.push(b):(this.bytesWritten+=b.data.length,_.prototype.push.call(this,{data:b.data,meta:{currentFile:this.currentFile,percent:x?(k+100*(x-A-1))/x:100}}))},T.prototype.openedSource=function(b){this.currentSourceOffset=this.bytesWritten,this.currentFile=b.file.name;var k=this.streamFiles&&!b.file.dir;if(k){var x=g(b,k,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:x.fileRecord,meta:{percent:0}})}else this.accumulate=!0},T.prototype.closedSource=function(b){this.accumulate=!1;var k=this.streamFiles&&!b.file.dir,x=g(b,k,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(x.dirRecord),k)this.push({data:(function(A){return E.DATA_DESCRIPTOR+d(A.crc32,4)+d(A.compressedSize,4)+d(A.uncompressedSize,4)})(b),meta:{percent:100}});else for(this.push({data:x.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},T.prototype.flush=function(){for(var b=this.bytesWritten,k=0;k<this.dirRecords.length;k++)this.push({data:this.dirRecords[k],meta:{percent:100}});var x=this.bytesWritten-b,A=(function(j,D,M,V,H){var G=m.transformTo("string",H(V));return E.CENTRAL_DIRECTORY_END+"\0\0\0\0"+d(j,2)+d(j,2)+d(D,4)+d(M,4)+d(G.length,2)+G})(this.dirRecords.length,x,b,this.zipComment,this.encodeFileName);this.push({data:A,meta:{percent:100}})},T.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},T.prototype.registerPrevious=function(b){this._sources.push(b);var k=this;return b.on("data",function(x){k.processChunk(x)}),b.on("end",function(){k.closedSource(k.previous.streamInfo),k._sources.length?k.prepareNextSource():k.end()}),b.on("error",function(x){k.error(x)}),this},T.prototype.resume=function(){return!!_.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},T.prototype.error=function(b){var k=this._sources;if(!_.prototype.error.call(this,b))return!1;for(var x=0;x<k.length;x++)try{k[x].error(b)}catch{}return!0},T.prototype.lock=function(){_.prototype.lock.call(this);for(var b=this._sources,k=0;k<b.length;k++)b[k].lock()},f.exports=T},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(o,f,p){var d=o("../compressions"),g=o("./ZipFileWorker");p.generateWorker=function(m,_,y){var S=new g(_.streamFiles,y,_.platform,_.encodeFileName),E=0;try{m.forEach(function(T,b){E++;var k=(function(D,M){var V=D||M,H=d[V];if(!H)throw new Error(V+" is not a valid compression method !");return H})(b.options.compression,_.compression),x=b.options.compressionOptions||_.compressionOptions||{},A=b.dir,j=b.date;b._compressWorker(k,x).withStreamInfo("file",{name:T,dir:A,date:j,comment:b.comment||"",unixPermissions:b.unixPermissions,dosPermissions:b.dosPermissions}).pipe(S)}),S.entriesCount=E}catch(T){S.error(T)}return S}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(o,f,p){function d(){if(!(this instanceof d))return new d;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var g=new d;for(var m in this)typeof this[m]!="function"&&(g[m]=this[m]);return g}}(d.prototype=o("./object")).loadAsync=o("./load"),d.support=o("./support"),d.defaults=o("./defaults"),d.version="3.10.1",d.loadAsync=function(g,m){return new d().loadAsync(g,m)},d.external=o("./external"),f.exports=d},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(o,f,p){var d=o("./utils"),g=o("./external"),m=o("./utf8"),_=o("./zipEntries"),y=o("./stream/Crc32Probe"),S=o("./nodejsUtils");function E(T){return new g.Promise(function(b,k){var x=T.decompressed.getContentWorker().pipe(new y);x.on("error",function(A){k(A)}).on("end",function(){x.streamInfo.crc32!==T.decompressed.crc32?k(new Error("Corrupted zip : CRC32 mismatch")):b()}).resume()})}f.exports=function(T,b){var k=this;return b=d.extend(b||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:m.utf8decode}),S.isNode&&S.isStream(T)?g.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):d.prepareContent("the loaded zip file",T,!0,b.optimizedBinaryString,b.base64).then(function(x){var A=new _(b);return A.load(x),A}).then(function(x){var A=[g.Promise.resolve(x)],j=x.files;if(b.checkCRC32)for(var D=0;D<j.length;D++)A.push(E(j[D]));return g.Promise.all(A)}).then(function(x){for(var A=x.shift(),j=A.files,D=0;D<j.length;D++){var M=j[D],V=M.fileNameStr,H=d.resolve(M.fileNameStr);k.file(H,M.decompressed,{binary:!0,optimizedBinaryString:!0,date:M.date,dir:M.dir,comment:M.fileCommentStr.length?M.fileCommentStr:null,unixPermissions:M.unixPermissions,dosPermissions:M.dosPermissions,createFolders:b.createFolders}),M.dir||(k.file(H).unsafeOriginalName=V)}return A.zipComment.length&&(k.comment=A.zipComment),k})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(o,f,p){var d=o("../utils"),g=o("../stream/GenericWorker");function m(_,y){g.call(this,"Nodejs stream input adapter for "+_),this._upstreamEnded=!1,this._bindStream(y)}d.inherits(m,g),m.prototype._bindStream=function(_){var y=this;(this._stream=_).pause(),_.on("data",function(S){y.push({data:S,meta:{percent:0}})}).on("error",function(S){y.isPaused?this.generatedError=S:y.error(S)}).on("end",function(){y.isPaused?y._upstreamEnded=!0:y.end()})},m.prototype.pause=function(){return!!g.prototype.pause.call(this)&&(this._stream.pause(),!0)},m.prototype.resume=function(){return!!g.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},f.exports=m},{"../stream/GenericWorker":28,"../utils":32}],13:[function(o,f,p){var d=o("readable-stream").Readable;function g(m,_,y){d.call(this,_),this._helper=m;var S=this;m.on("data",function(E,T){S.push(E)||S._helper.pause(),y&&y(T)}).on("error",function(E){S.emit("error",E)}).on("end",function(){S.push(null)})}o("../utils").inherits(g,d),g.prototype._read=function(){this._helper.resume()},f.exports=g},{"../utils":32,"readable-stream":16}],14:[function(o,f,p){f.exports={isNode:typeof Buffer<"u",newBufferFrom:function(d,g){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(d,g);if(typeof d=="number")throw new Error('The "data" argument must not be a number');return new Buffer(d,g)},allocBuffer:function(d){if(Buffer.alloc)return Buffer.alloc(d);var g=new Buffer(d);return g.fill(0),g},isBuffer:function(d){return Buffer.isBuffer(d)},isStream:function(d){return d&&typeof d.on=="function"&&typeof d.pause=="function"&&typeof d.resume=="function"}}},{}],15:[function(o,f,p){function d(H,G,L){var fe,$=m.getTypeOf(G),me=m.extend(L||{},S);me.date=me.date||new Date,me.compression!==null&&(me.compression=me.compression.toUpperCase()),typeof me.unixPermissions=="string"&&(me.unixPermissions=parseInt(me.unixPermissions,8)),me.unixPermissions&&16384&me.unixPermissions&&(me.dir=!0),me.dosPermissions&&16&me.dosPermissions&&(me.dir=!0),me.dir&&(H=j(H)),me.createFolders&&(fe=A(H))&&D.call(this,fe,!0);var be=$==="string"&&me.binary===!1&&me.base64===!1;L&&L.binary!==void 0||(me.binary=!be),(G instanceof E&&G.uncompressedSize===0||me.dir||!G||G.length===0)&&(me.base64=!1,me.binary=!0,G="",me.compression="STORE",$="string");var B=null;B=G instanceof E||G instanceof _?G:k.isNode&&k.isStream(G)?new x(H,G):m.prepareContent(H,G,me.binary,me.optimizedBinaryString,me.base64);var Y=new T(H,B,me);this.files[H]=Y}var g=o("./utf8"),m=o("./utils"),_=o("./stream/GenericWorker"),y=o("./stream/StreamHelper"),S=o("./defaults"),E=o("./compressedObject"),T=o("./zipObject"),b=o("./generate"),k=o("./nodejsUtils"),x=o("./nodejs/NodejsStreamInputAdapter"),A=function(H){H.slice(-1)==="/"&&(H=H.substring(0,H.length-1));var G=H.lastIndexOf("/");return 0<G?H.substring(0,G):""},j=function(H){return H.slice(-1)!=="/"&&(H+="/"),H},D=function(H,G){return G=G!==void 0?G:S.createFolders,H=j(H),this.files[H]||d.call(this,H,null,{dir:!0,createFolders:G}),this.files[H]};function M(H){return Object.prototype.toString.call(H)==="[object RegExp]"}var V={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(H){var G,L,fe;for(G in this.files)fe=this.files[G],(L=G.slice(this.root.length,G.length))&&G.slice(0,this.root.length)===this.root&&H(L,fe)},filter:function(H){var G=[];return this.forEach(function(L,fe){H(L,fe)&&G.push(fe)}),G},file:function(H,G,L){if(arguments.length!==1)return H=this.root+H,d.call(this,H,G,L),this;if(M(H)){var fe=H;return this.filter(function(me,be){return!be.dir&&fe.test(me)})}var $=this.files[this.root+H];return $&&!$.dir?$:null},folder:function(H){if(!H)return this;if(M(H))return this.filter(function($,me){return me.dir&&H.test($)});var G=this.root+H,L=D.call(this,G),fe=this.clone();return fe.root=L.name,fe},remove:function(H){H=this.root+H;var G=this.files[H];if(G||(H.slice(-1)!=="/"&&(H+="/"),G=this.files[H]),G&&!G.dir)delete this.files[H];else for(var L=this.filter(function($,me){return me.name.slice(0,H.length)===H}),fe=0;fe<L.length;fe++)delete this.files[L[fe].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(H){var G,L={};try{if((L=m.extend(H||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:g.utf8encode})).type=L.type.toLowerCase(),L.compression=L.compression.toUpperCase(),L.type==="binarystring"&&(L.type="string"),!L.type)throw new Error("No output type specified.");m.checkSupport(L.type),L.platform!=="darwin"&&L.platform!=="freebsd"&&L.platform!=="linux"&&L.platform!=="sunos"||(L.platform="UNIX"),L.platform==="win32"&&(L.platform="DOS");var fe=L.comment||this.comment||"";G=b.generateWorker(this,L,fe)}catch($){(G=new _("error")).error($)}return new y(G,L.type||"string",L.mimeType)},generateAsync:function(H,G){return this.generateInternalStream(H).accumulate(G)},generateNodeStream:function(H,G){return(H=H||{}).type||(H.type="nodebuffer"),this.generateInternalStream(H).toNodejsStream(G)}};f.exports=V},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(o,f,p){f.exports=o("stream")},{stream:void 0}],17:[function(o,f,p){var d=o("./DataReader");function g(m){d.call(this,m);for(var _=0;_<this.data.length;_++)m[_]=255&m[_]}o("../utils").inherits(g,d),g.prototype.byteAt=function(m){return this.data[this.zero+m]},g.prototype.lastIndexOfSignature=function(m){for(var _=m.charCodeAt(0),y=m.charCodeAt(1),S=m.charCodeAt(2),E=m.charCodeAt(3),T=this.length-4;0<=T;--T)if(this.data[T]===_&&this.data[T+1]===y&&this.data[T+2]===S&&this.data[T+3]===E)return T-this.zero;return-1},g.prototype.readAndCheckSignature=function(m){var _=m.charCodeAt(0),y=m.charCodeAt(1),S=m.charCodeAt(2),E=m.charCodeAt(3),T=this.readData(4);return _===T[0]&&y===T[1]&&S===T[2]&&E===T[3]},g.prototype.readData=function(m){if(this.checkOffset(m),m===0)return[];var _=this.data.slice(this.zero+this.index,this.zero+this.index+m);return this.index+=m,_},f.exports=g},{"../utils":32,"./DataReader":18}],18:[function(o,f,p){var d=o("../utils");function g(m){this.data=m,this.length=m.length,this.index=0,this.zero=0}g.prototype={checkOffset:function(m){this.checkIndex(this.index+m)},checkIndex:function(m){if(this.length<this.zero+m||m<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+m+"). Corrupted zip ?")},setIndex:function(m){this.checkIndex(m),this.index=m},skip:function(m){this.setIndex(this.index+m)},byteAt:function(){},readInt:function(m){var _,y=0;for(this.checkOffset(m),_=this.index+m-1;_>=this.index;_--)y=(y<<8)+this.byteAt(_);return this.index+=m,y},readString:function(m){return d.transformTo("string",this.readData(m))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var m=this.readInt(4);return new Date(Date.UTC(1980+(m>>25&127),(m>>21&15)-1,m>>16&31,m>>11&31,m>>5&63,(31&m)<<1))}},f.exports=g},{"../utils":32}],19:[function(o,f,p){var d=o("./Uint8ArrayReader");function g(m){d.call(this,m)}o("../utils").inherits(g,d),g.prototype.readData=function(m){this.checkOffset(m);var _=this.data.slice(this.zero+this.index,this.zero+this.index+m);return this.index+=m,_},f.exports=g},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(o,f,p){var d=o("./DataReader");function g(m){d.call(this,m)}o("../utils").inherits(g,d),g.prototype.byteAt=function(m){return this.data.charCodeAt(this.zero+m)},g.prototype.lastIndexOfSignature=function(m){return this.data.lastIndexOf(m)-this.zero},g.prototype.readAndCheckSignature=function(m){return m===this.readData(4)},g.prototype.readData=function(m){this.checkOffset(m);var _=this.data.slice(this.zero+this.index,this.zero+this.index+m);return this.index+=m,_},f.exports=g},{"../utils":32,"./DataReader":18}],21:[function(o,f,p){var d=o("./ArrayReader");function g(m){d.call(this,m)}o("../utils").inherits(g,d),g.prototype.readData=function(m){if(this.checkOffset(m),m===0)return new Uint8Array(0);var _=this.data.subarray(this.zero+this.index,this.zero+this.index+m);return this.index+=m,_},f.exports=g},{"../utils":32,"./ArrayReader":17}],22:[function(o,f,p){var d=o("../utils"),g=o("../support"),m=o("./ArrayReader"),_=o("./StringReader"),y=o("./NodeBufferReader"),S=o("./Uint8ArrayReader");f.exports=function(E){var T=d.getTypeOf(E);return d.checkSupport(T),T!=="string"||g.uint8array?T==="nodebuffer"?new y(E):g.uint8array?new S(d.transformTo("uint8array",E)):new m(d.transformTo("array",E)):new _(E)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(o,f,p){p.LOCAL_FILE_HEADER="PK",p.CENTRAL_FILE_HEADER="PK",p.CENTRAL_DIRECTORY_END="PK",p.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",p.ZIP64_CENTRAL_DIRECTORY_END="PK",p.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(o,f,p){var d=o("./GenericWorker"),g=o("../utils");function m(_){d.call(this,"ConvertWorker to "+_),this.destType=_}g.inherits(m,d),m.prototype.processChunk=function(_){this.push({data:g.transformTo(this.destType,_.data),meta:_.meta})},f.exports=m},{"../utils":32,"./GenericWorker":28}],25:[function(o,f,p){var d=o("./GenericWorker"),g=o("../crc32");function m(){d.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}o("../utils").inherits(m,d),m.prototype.processChunk=function(_){this.streamInfo.crc32=g(_.data,this.streamInfo.crc32||0),this.push(_)},f.exports=m},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(o,f,p){var d=o("../utils"),g=o("./GenericWorker");function m(_){g.call(this,"DataLengthProbe for "+_),this.propName=_,this.withStreamInfo(_,0)}d.inherits(m,g),m.prototype.processChunk=function(_){if(_){var y=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=y+_.data.length}g.prototype.processChunk.call(this,_)},f.exports=m},{"../utils":32,"./GenericWorker":28}],27:[function(o,f,p){var d=o("../utils"),g=o("./GenericWorker");function m(_){g.call(this,"DataWorker");var y=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,_.then(function(S){y.dataIsReady=!0,y.data=S,y.max=S&&S.length||0,y.type=d.getTypeOf(S),y.isPaused||y._tickAndRepeat()},function(S){y.error(S)})}d.inherits(m,g),m.prototype.cleanUp=function(){g.prototype.cleanUp.call(this),this.data=null},m.prototype.resume=function(){return!!g.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,d.delay(this._tickAndRepeat,[],this)),!0)},m.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(d.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},m.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var _=null,y=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":_=this.data.substring(this.index,y);break;case"uint8array":_=this.data.subarray(this.index,y);break;case"array":case"nodebuffer":_=this.data.slice(this.index,y)}return this.index=y,this.push({data:_,meta:{percent:this.max?this.index/this.max*100:0}})},f.exports=m},{"../utils":32,"./GenericWorker":28}],28:[function(o,f,p){function d(g){this.name=g||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}d.prototype={push:function(g){this.emit("data",g)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(g){this.emit("error",g)}return!0},error:function(g){return!this.isFinished&&(this.isPaused?this.generatedError=g:(this.isFinished=!0,this.emit("error",g),this.previous&&this.previous.error(g),this.cleanUp()),!0)},on:function(g,m){return this._listeners[g].push(m),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(g,m){if(this._listeners[g])for(var _=0;_<this._listeners[g].length;_++)this._listeners[g][_].call(this,m)},pipe:function(g){return g.registerPrevious(this)},registerPrevious:function(g){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=g.streamInfo,this.mergeStreamInfo(),this.previous=g;var m=this;return g.on("data",function(_){m.processChunk(_)}),g.on("end",function(){m.end()}),g.on("error",function(_){m.error(_)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var g=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),g=!0),this.previous&&this.previous.resume(),!g},flush:function(){},processChunk:function(g){this.push(g)},withStreamInfo:function(g,m){return this.extraStreamInfo[g]=m,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var g in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,g)&&(this.streamInfo[g]=this.extraStreamInfo[g])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var g="Worker "+this.name;return this.previous?this.previous+" -> "+g:g}},f.exports=d},{}],29:[function(o,f,p){var d=o("../utils"),g=o("./ConvertWorker"),m=o("./GenericWorker"),_=o("../base64"),y=o("../support"),S=o("../external"),E=null;if(y.nodestream)try{E=o("../nodejs/NodejsStreamOutputAdapter")}catch{}function T(k,x){return new S.Promise(function(A,j){var D=[],M=k._internalType,V=k._outputType,H=k._mimeType;k.on("data",function(G,L){D.push(G),x&&x(L)}).on("error",function(G){D=[],j(G)}).on("end",function(){try{var G=(function(L,fe,$){switch(L){case"blob":return d.newBlob(d.transformTo("arraybuffer",fe),$);case"base64":return _.encode(fe);default:return d.transformTo(L,fe)}})(V,(function(L,fe){var $,me=0,be=null,B=0;for($=0;$<fe.length;$++)B+=fe[$].length;switch(L){case"string":return fe.join("");case"array":return Array.prototype.concat.apply([],fe);case"uint8array":for(be=new Uint8Array(B),$=0;$<fe.length;$++)be.set(fe[$],me),me+=fe[$].length;return be;case"nodebuffer":return Buffer.concat(fe);default:throw new Error("concat : unsupported type '"+L+"'")}})(M,D),H);A(G)}catch(L){j(L)}D=[]}).resume()})}function b(k,x,A){var j=x;switch(x){case"blob":case"arraybuffer":j="uint8array";break;case"base64":j="string"}try{this._internalType=j,this._outputType=x,this._mimeType=A,d.checkSupport(j),this._worker=k.pipe(new g(j)),k.lock()}catch(D){this._worker=new m("error"),this._worker.error(D)}}b.prototype={accumulate:function(k){return T(this,k)},on:function(k,x){var A=this;return k==="data"?this._worker.on(k,function(j){x.call(A,j.data,j.meta)}):this._worker.on(k,function(){d.delay(x,arguments,A)}),this},resume:function(){return d.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(k){if(d.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new E(this,{objectMode:this._outputType!=="nodebuffer"},k)}},f.exports=b},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(o,f,p){if(p.base64=!0,p.array=!0,p.string=!0,p.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",p.nodebuffer=typeof Buffer<"u",p.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")p.blob=!1;else{var d=new ArrayBuffer(0);try{p.blob=new Blob([d],{type:"application/zip"}).size===0}catch{try{var g=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);g.append(d),p.blob=g.getBlob("application/zip").size===0}catch{p.blob=!1}}}try{p.nodestream=!!o("readable-stream").Readable}catch{p.nodestream=!1}},{"readable-stream":16}],31:[function(o,f,p){for(var d=o("./utils"),g=o("./support"),m=o("./nodejsUtils"),_=o("./stream/GenericWorker"),y=new Array(256),S=0;S<256;S++)y[S]=252<=S?6:248<=S?5:240<=S?4:224<=S?3:192<=S?2:1;y[254]=y[254]=1;function E(){_.call(this,"utf-8 decode"),this.leftOver=null}function T(){_.call(this,"utf-8 encode")}p.utf8encode=function(b){return g.nodebuffer?m.newBufferFrom(b,"utf-8"):(function(k){var x,A,j,D,M,V=k.length,H=0;for(D=0;D<V;D++)(64512&(A=k.charCodeAt(D)))==55296&&D+1<V&&(64512&(j=k.charCodeAt(D+1)))==56320&&(A=65536+(A-55296<<10)+(j-56320),D++),H+=A<128?1:A<2048?2:A<65536?3:4;for(x=g.uint8array?new Uint8Array(H):new Array(H),D=M=0;M<H;D++)(64512&(A=k.charCodeAt(D)))==55296&&D+1<V&&(64512&(j=k.charCodeAt(D+1)))==56320&&(A=65536+(A-55296<<10)+(j-56320),D++),A<128?x[M++]=A:(A<2048?x[M++]=192|A>>>6:(A<65536?x[M++]=224|A>>>12:(x[M++]=240|A>>>18,x[M++]=128|A>>>12&63),x[M++]=128|A>>>6&63),x[M++]=128|63&A);return x})(b)},p.utf8decode=function(b){return g.nodebuffer?d.transformTo("nodebuffer",b).toString("utf-8"):(function(k){var x,A,j,D,M=k.length,V=new Array(2*M);for(x=A=0;x<M;)if((j=k[x++])<128)V[A++]=j;else if(4<(D=y[j]))V[A++]=65533,x+=D-1;else{for(j&=D===2?31:D===3?15:7;1<D&&x<M;)j=j<<6|63&k[x++],D--;1<D?V[A++]=65533:j<65536?V[A++]=j:(j-=65536,V[A++]=55296|j>>10&1023,V[A++]=56320|1023&j)}return V.length!==A&&(V.subarray?V=V.subarray(0,A):V.length=A),d.applyFromCharCode(V)})(b=d.transformTo(g.uint8array?"uint8array":"array",b))},d.inherits(E,_),E.prototype.processChunk=function(b){var k=d.transformTo(g.uint8array?"uint8array":"array",b.data);if(this.leftOver&&this.leftOver.length){if(g.uint8array){var x=k;(k=new Uint8Array(x.length+this.leftOver.length)).set(this.leftOver,0),k.set(x,this.leftOver.length)}else k=this.leftOver.concat(k);this.leftOver=null}var A=(function(D,M){var V;for((M=M||D.length)>D.length&&(M=D.length),V=M-1;0<=V&&(192&D[V])==128;)V--;return V<0||V===0?M:V+y[D[V]]>M?V:M})(k),j=k;A!==k.length&&(g.uint8array?(j=k.subarray(0,A),this.leftOver=k.subarray(A,k.length)):(j=k.slice(0,A),this.leftOver=k.slice(A,k.length))),this.push({data:p.utf8decode(j),meta:b.meta})},E.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:p.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},p.Utf8DecodeWorker=E,d.inherits(T,_),T.prototype.processChunk=function(b){this.push({data:p.utf8encode(b.data),meta:b.meta})},p.Utf8EncodeWorker=T},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(o,f,p){var d=o("./support"),g=o("./base64"),m=o("./nodejsUtils"),_=o("./external");function y(x){return x}function S(x,A){for(var j=0;j<x.length;++j)A[j]=255&x.charCodeAt(j);return A}o("setimmediate"),p.newBlob=function(x,A){p.checkSupport("blob");try{return new Blob([x],{type:A})}catch{try{var j=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return j.append(x),j.getBlob(A)}catch{throw new Error("Bug : can't construct the Blob.")}}};var E={stringifyByChunk:function(x,A,j){var D=[],M=0,V=x.length;if(V<=j)return String.fromCharCode.apply(null,x);for(;M<V;)A==="array"||A==="nodebuffer"?D.push(String.fromCharCode.apply(null,x.slice(M,Math.min(M+j,V)))):D.push(String.fromCharCode.apply(null,x.subarray(M,Math.min(M+j,V)))),M+=j;return D.join("")},stringifyByChar:function(x){for(var A="",j=0;j<x.length;j++)A+=String.fromCharCode(x[j]);return A},applyCanBeUsed:{uint8array:(function(){try{return d.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return d.nodebuffer&&String.fromCharCode.apply(null,m.allocBuffer(1)).length===1}catch{return!1}})()}};function T(x){var A=65536,j=p.getTypeOf(x),D=!0;if(j==="uint8array"?D=E.applyCanBeUsed.uint8array:j==="nodebuffer"&&(D=E.applyCanBeUsed.nodebuffer),D)for(;1<A;)try{return E.stringifyByChunk(x,j,A)}catch{A=Math.floor(A/2)}return E.stringifyByChar(x)}function b(x,A){for(var j=0;j<x.length;j++)A[j]=x[j];return A}p.applyFromCharCode=T;var k={};k.string={string:y,array:function(x){return S(x,new Array(x.length))},arraybuffer:function(x){return k.string.uint8array(x).buffer},uint8array:function(x){return S(x,new Uint8Array(x.length))},nodebuffer:function(x){return S(x,m.allocBuffer(x.length))}},k.array={string:T,array:y,arraybuffer:function(x){return new Uint8Array(x).buffer},uint8array:function(x){return new Uint8Array(x)},nodebuffer:function(x){return m.newBufferFrom(x)}},k.arraybuffer={string:function(x){return T(new Uint8Array(x))},array:function(x){return b(new Uint8Array(x),new Array(x.byteLength))},arraybuffer:y,uint8array:function(x){return new Uint8Array(x)},nodebuffer:function(x){return m.newBufferFrom(new Uint8Array(x))}},k.uint8array={string:T,array:function(x){return b(x,new Array(x.length))},arraybuffer:function(x){return x.buffer},uint8array:y,nodebuffer:function(x){return m.newBufferFrom(x)}},k.nodebuffer={string:T,array:function(x){return b(x,new Array(x.length))},arraybuffer:function(x){return k.nodebuffer.uint8array(x).buffer},uint8array:function(x){return b(x,new Uint8Array(x.length))},nodebuffer:y},p.transformTo=function(x,A){if(A=A||"",!x)return A;p.checkSupport(x);var j=p.getTypeOf(A);return k[j][x](A)},p.resolve=function(x){for(var A=x.split("/"),j=[],D=0;D<A.length;D++){var M=A[D];M==="."||M===""&&D!==0&&D!==A.length-1||(M===".."?j.pop():j.push(M))}return j.join("/")},p.getTypeOf=function(x){return typeof x=="string"?"string":Object.prototype.toString.call(x)==="[object Array]"?"array":d.nodebuffer&&m.isBuffer(x)?"nodebuffer":d.uint8array&&x instanceof Uint8Array?"uint8array":d.arraybuffer&&x instanceof ArrayBuffer?"arraybuffer":void 0},p.checkSupport=function(x){if(!d[x.toLowerCase()])throw new Error(x+" is not supported by this platform")},p.MAX_VALUE_16BITS=65535,p.MAX_VALUE_32BITS=-1,p.pretty=function(x){var A,j,D="";for(j=0;j<(x||"").length;j++)D+="\\x"+((A=x.charCodeAt(j))<16?"0":"")+A.toString(16).toUpperCase();return D},p.delay=function(x,A,j){setImmediate(function(){x.apply(j||null,A||[])})},p.inherits=function(x,A){function j(){}j.prototype=A.prototype,x.prototype=new j},p.extend=function(){var x,A,j={};for(x=0;x<arguments.length;x++)for(A in arguments[x])Object.prototype.hasOwnProperty.call(arguments[x],A)&&j[A]===void 0&&(j[A]=arguments[x][A]);return j},p.prepareContent=function(x,A,j,D,M){return _.Promise.resolve(A).then(function(V){return d.blob&&(V instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(V))!==-1)&&typeof FileReader<"u"?new _.Promise(function(H,G){var L=new FileReader;L.onload=function(fe){H(fe.target.result)},L.onerror=function(fe){G(fe.target.error)},L.readAsArrayBuffer(V)}):V}).then(function(V){var H=p.getTypeOf(V);return H?(H==="arraybuffer"?V=p.transformTo("uint8array",V):H==="string"&&(M?V=g.decode(V):j&&D!==!0&&(V=(function(G){return S(G,d.uint8array?new Uint8Array(G.length):new Array(G.length))})(V))),V):_.Promise.reject(new Error("Can't read the data of '"+x+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(o,f,p){var d=o("./reader/readerFor"),g=o("./utils"),m=o("./signature"),_=o("./zipEntry"),y=o("./support");function S(E){this.files=[],this.loadOptions=E}S.prototype={checkSignature:function(E){if(!this.reader.readAndCheckSignature(E)){this.reader.index-=4;var T=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+g.pretty(T)+", expected "+g.pretty(E)+")")}},isSignature:function(E,T){var b=this.reader.index;this.reader.setIndex(E);var k=this.reader.readString(4)===T;return this.reader.setIndex(b),k},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var E=this.reader.readData(this.zipCommentLength),T=y.uint8array?"uint8array":"array",b=g.transformTo(T,E);this.zipComment=this.loadOptions.decodeFileName(b)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var E,T,b,k=this.zip64EndOfCentralSize-44;0<k;)E=this.reader.readInt(2),T=this.reader.readInt(4),b=this.reader.readData(T),this.zip64ExtensibleData[E]={id:E,length:T,value:b}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var E,T;for(E=0;E<this.files.length;E++)T=this.files[E],this.reader.setIndex(T.localHeaderOffset),this.checkSignature(m.LOCAL_FILE_HEADER),T.readLocalPart(this.reader),T.handleUTF8(),T.processAttributes()},readCentralDir:function(){var E;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(m.CENTRAL_FILE_HEADER);)(E=new _({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(E);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var E=this.reader.lastIndexOfSignature(m.CENTRAL_DIRECTORY_END);if(E<0)throw this.isSignature(0,m.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(E);var T=E;if(this.checkSignature(m.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===g.MAX_VALUE_16BITS||this.diskWithCentralDirStart===g.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===g.MAX_VALUE_16BITS||this.centralDirRecords===g.MAX_VALUE_16BITS||this.centralDirSize===g.MAX_VALUE_32BITS||this.centralDirOffset===g.MAX_VALUE_32BITS){if(this.zip64=!0,(E=this.reader.lastIndexOfSignature(m.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(E),this.checkSignature(m.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,m.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(m.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(m.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var b=this.centralDirOffset+this.centralDirSize;this.zip64&&(b+=20,b+=12+this.zip64EndOfCentralSize);var k=T-b;if(0<k)this.isSignature(T,m.CENTRAL_FILE_HEADER)||(this.reader.zero=k);else if(k<0)throw new Error("Corrupted zip: missing "+Math.abs(k)+" bytes.")},prepareReader:function(E){this.reader=d(E)},load:function(E){this.prepareReader(E),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},f.exports=S},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(o,f,p){var d=o("./reader/readerFor"),g=o("./utils"),m=o("./compressedObject"),_=o("./crc32"),y=o("./utf8"),S=o("./compressions"),E=o("./support");function T(b,k){this.options=b,this.loadOptions=k}T.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(b){var k,x;if(b.skip(22),this.fileNameLength=b.readInt(2),x=b.readInt(2),this.fileName=b.readData(this.fileNameLength),b.skip(x),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((k=(function(A){for(var j in S)if(Object.prototype.hasOwnProperty.call(S,j)&&S[j].magic===A)return S[j];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+g.pretty(this.compressionMethod)+" unknown (inner file : "+g.transformTo("string",this.fileName)+")");this.decompressed=new m(this.compressedSize,this.uncompressedSize,this.crc32,k,b.readData(this.compressedSize))},readCentralPart:function(b){this.versionMadeBy=b.readInt(2),b.skip(2),this.bitFlag=b.readInt(2),this.compressionMethod=b.readString(2),this.date=b.readDate(),this.crc32=b.readInt(4),this.compressedSize=b.readInt(4),this.uncompressedSize=b.readInt(4);var k=b.readInt(2);if(this.extraFieldsLength=b.readInt(2),this.fileCommentLength=b.readInt(2),this.diskNumberStart=b.readInt(2),this.internalFileAttributes=b.readInt(2),this.externalFileAttributes=b.readInt(4),this.localHeaderOffset=b.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");b.skip(k),this.readExtraFields(b),this.parseZIP64ExtraField(b),this.fileComment=b.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var b=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),b==0&&(this.dosPermissions=63&this.externalFileAttributes),b==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var b=d(this.extraFields[1].value);this.uncompressedSize===g.MAX_VALUE_32BITS&&(this.uncompressedSize=b.readInt(8)),this.compressedSize===g.MAX_VALUE_32BITS&&(this.compressedSize=b.readInt(8)),this.localHeaderOffset===g.MAX_VALUE_32BITS&&(this.localHeaderOffset=b.readInt(8)),this.diskNumberStart===g.MAX_VALUE_32BITS&&(this.diskNumberStart=b.readInt(4))}},readExtraFields:function(b){var k,x,A,j=b.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});b.index+4<j;)k=b.readInt(2),x=b.readInt(2),A=b.readData(x),this.extraFields[k]={id:k,length:x,value:A};b.setIndex(j)},handleUTF8:function(){var b=E.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=y.utf8decode(this.fileName),this.fileCommentStr=y.utf8decode(this.fileComment);else{var k=this.findExtraFieldUnicodePath();if(k!==null)this.fileNameStr=k;else{var x=g.transformTo(b,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(x)}var A=this.findExtraFieldUnicodeComment();if(A!==null)this.fileCommentStr=A;else{var j=g.transformTo(b,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(j)}}},findExtraFieldUnicodePath:function(){var b=this.extraFields[28789];if(b){var k=d(b.value);return k.readInt(1)!==1||_(this.fileName)!==k.readInt(4)?null:y.utf8decode(k.readData(b.length-5))}return null},findExtraFieldUnicodeComment:function(){var b=this.extraFields[25461];if(b){var k=d(b.value);return k.readInt(1)!==1||_(this.fileComment)!==k.readInt(4)?null:y.utf8decode(k.readData(b.length-5))}return null}},f.exports=T},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(o,f,p){function d(k,x,A){this.name=k,this.dir=A.dir,this.date=A.date,this.comment=A.comment,this.unixPermissions=A.unixPermissions,this.dosPermissions=A.dosPermissions,this._data=x,this._dataBinary=A.binary,this.options={compression:A.compression,compressionOptions:A.compressionOptions}}var g=o("./stream/StreamHelper"),m=o("./stream/DataWorker"),_=o("./utf8"),y=o("./compressedObject"),S=o("./stream/GenericWorker");d.prototype={internalStream:function(k){var x=null,A="string";try{if(!k)throw new Error("No output type specified.");var j=(A=k.toLowerCase())==="string"||A==="text";A!=="binarystring"&&A!=="text"||(A="string"),x=this._decompressWorker();var D=!this._dataBinary;D&&!j&&(x=x.pipe(new _.Utf8EncodeWorker)),!D&&j&&(x=x.pipe(new _.Utf8DecodeWorker))}catch(M){(x=new S("error")).error(M)}return new g(x,A,"")},async:function(k,x){return this.internalStream(k).accumulate(x)},nodeStream:function(k,x){return this.internalStream(k||"nodebuffer").toNodejsStream(x)},_compressWorker:function(k,x){if(this._data instanceof y&&this._data.compression.magic===k.magic)return this._data.getCompressedWorker();var A=this._decompressWorker();return this._dataBinary||(A=A.pipe(new _.Utf8EncodeWorker)),y.createWorkerFrom(A,k,x)},_decompressWorker:function(){return this._data instanceof y?this._data.getContentWorker():this._data instanceof S?this._data:new m(this._data)}};for(var E=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],T=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},b=0;b<E.length;b++)d.prototype[E[b]]=T;f.exports=d},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(o,f,p){(function(d){var g,m,_=d.MutationObserver||d.WebKitMutationObserver;if(_){var y=0,S=new _(k),E=d.document.createTextNode("");S.observe(E,{characterData:!0}),g=function(){E.data=y=++y%2}}else if(d.setImmediate||d.MessageChannel===void 0)g="document"in d&&"onreadystatechange"in d.document.createElement("script")?function(){var x=d.document.createElement("script");x.onreadystatechange=function(){k(),x.onreadystatechange=null,x.parentNode.removeChild(x),x=null},d.document.documentElement.appendChild(x)}:function(){setTimeout(k,0)};else{var T=new d.MessageChannel;T.port1.onmessage=k,g=function(){T.port2.postMessage(0)}}var b=[];function k(){var x,A;m=!0;for(var j=b.length;j;){for(A=b,b=[],x=-1;++x<j;)A[x]();j=b.length}m=!1}f.exports=function(x){b.push(x)!==1||m||g()}}).call(this,typeof hs<"u"?hs:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(o,f,p){var d=o("immediate");function g(){}var m={},_=["REJECTED"],y=["FULFILLED"],S=["PENDING"];function E(j){if(typeof j!="function")throw new TypeError("resolver must be a function");this.state=S,this.queue=[],this.outcome=void 0,j!==g&&x(this,j)}function T(j,D,M){this.promise=j,typeof D=="function"&&(this.onFulfilled=D,this.callFulfilled=this.otherCallFulfilled),typeof M=="function"&&(this.onRejected=M,this.callRejected=this.otherCallRejected)}function b(j,D,M){d(function(){var V;try{V=D(M)}catch(H){return m.reject(j,H)}V===j?m.reject(j,new TypeError("Cannot resolve promise with itself")):m.resolve(j,V)})}function k(j){var D=j&&j.then;if(j&&(typeof j=="object"||typeof j=="function")&&typeof D=="function")return function(){D.apply(j,arguments)}}function x(j,D){var M=!1;function V(L){M||(M=!0,m.reject(j,L))}function H(L){M||(M=!0,m.resolve(j,L))}var G=A(function(){D(H,V)});G.status==="error"&&V(G.value)}function A(j,D){var M={};try{M.value=j(D),M.status="success"}catch(V){M.status="error",M.value=V}return M}(f.exports=E).prototype.finally=function(j){if(typeof j!="function")return this;var D=this.constructor;return this.then(function(M){return D.resolve(j()).then(function(){return M})},function(M){return D.resolve(j()).then(function(){throw M})})},E.prototype.catch=function(j){return this.then(null,j)},E.prototype.then=function(j,D){if(typeof j!="function"&&this.state===y||typeof D!="function"&&this.state===_)return this;var M=new this.constructor(g);return this.state!==S?b(M,this.state===y?j:D,this.outcome):this.queue.push(new T(M,j,D)),M},T.prototype.callFulfilled=function(j){m.resolve(this.promise,j)},T.prototype.otherCallFulfilled=function(j){b(this.promise,this.onFulfilled,j)},T.prototype.callRejected=function(j){m.reject(this.promise,j)},T.prototype.otherCallRejected=function(j){b(this.promise,this.onRejected,j)},m.resolve=function(j,D){var M=A(k,D);if(M.status==="error")return m.reject(j,M.value);var V=M.value;if(V)x(j,V);else{j.state=y,j.outcome=D;for(var H=-1,G=j.queue.length;++H<G;)j.queue[H].callFulfilled(D)}return j},m.reject=function(j,D){j.state=_,j.outcome=D;for(var M=-1,V=j.queue.length;++M<V;)j.queue[M].callRejected(D);return j},E.resolve=function(j){return j instanceof this?j:m.resolve(new this(g),j)},E.reject=function(j){var D=new this(g);return m.reject(D,j)},E.all=function(j){var D=this;if(Object.prototype.toString.call(j)!=="[object Array]")return this.reject(new TypeError("must be an array"));var M=j.length,V=!1;if(!M)return this.resolve([]);for(var H=new Array(M),G=0,L=-1,fe=new this(g);++L<M;)$(j[L],L);return fe;function $(me,be){D.resolve(me).then(function(B){H[be]=B,++G!==M||V||(V=!0,m.resolve(fe,H))},function(B){V||(V=!0,m.reject(fe,B))})}},E.race=function(j){var D=this;if(Object.prototype.toString.call(j)!=="[object Array]")return this.reject(new TypeError("must be an array"));var M=j.length,V=!1;if(!M)return this.resolve([]);for(var H=-1,G=new this(g);++H<M;)L=j[H],D.resolve(L).then(function(fe){V||(V=!0,m.resolve(G,fe))},function(fe){V||(V=!0,m.reject(G,fe))});var L;return G}},{immediate:36}],38:[function(o,f,p){var d={};(0,o("./lib/utils/common").assign)(d,o("./lib/deflate"),o("./lib/inflate"),o("./lib/zlib/constants")),f.exports=d},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(o,f,p){var d=o("./zlib/deflate"),g=o("./utils/common"),m=o("./utils/strings"),_=o("./zlib/messages"),y=o("./zlib/zstream"),S=Object.prototype.toString,E=0,T=-1,b=0,k=8;function x(j){if(!(this instanceof x))return new x(j);this.options=g.assign({level:T,method:k,chunkSize:16384,windowBits:15,memLevel:8,strategy:b,to:""},j||{});var D=this.options;D.raw&&0<D.windowBits?D.windowBits=-D.windowBits:D.gzip&&0<D.windowBits&&D.windowBits<16&&(D.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new y,this.strm.avail_out=0;var M=d.deflateInit2(this.strm,D.level,D.method,D.windowBits,D.memLevel,D.strategy);if(M!==E)throw new Error(_[M]);if(D.header&&d.deflateSetHeader(this.strm,D.header),D.dictionary){var V;if(V=typeof D.dictionary=="string"?m.string2buf(D.dictionary):S.call(D.dictionary)==="[object ArrayBuffer]"?new Uint8Array(D.dictionary):D.dictionary,(M=d.deflateSetDictionary(this.strm,V))!==E)throw new Error(_[M]);this._dict_set=!0}}function A(j,D){var M=new x(D);if(M.push(j,!0),M.err)throw M.msg||_[M.err];return M.result}x.prototype.push=function(j,D){var M,V,H=this.strm,G=this.options.chunkSize;if(this.ended)return!1;V=D===~~D?D:D===!0?4:0,typeof j=="string"?H.input=m.string2buf(j):S.call(j)==="[object ArrayBuffer]"?H.input=new Uint8Array(j):H.input=j,H.next_in=0,H.avail_in=H.input.length;do{if(H.avail_out===0&&(H.output=new g.Buf8(G),H.next_out=0,H.avail_out=G),(M=d.deflate(H,V))!==1&&M!==E)return this.onEnd(M),!(this.ended=!0);H.avail_out!==0&&(H.avail_in!==0||V!==4&&V!==2)||(this.options.to==="string"?this.onData(m.buf2binstring(g.shrinkBuf(H.output,H.next_out))):this.onData(g.shrinkBuf(H.output,H.next_out)))}while((0<H.avail_in||H.avail_out===0)&&M!==1);return V===4?(M=d.deflateEnd(this.strm),this.onEnd(M),this.ended=!0,M===E):V!==2||(this.onEnd(E),!(H.avail_out=0))},x.prototype.onData=function(j){this.chunks.push(j)},x.prototype.onEnd=function(j){j===E&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=g.flattenChunks(this.chunks)),this.chunks=[],this.err=j,this.msg=this.strm.msg},p.Deflate=x,p.deflate=A,p.deflateRaw=function(j,D){return(D=D||{}).raw=!0,A(j,D)},p.gzip=function(j,D){return(D=D||{}).gzip=!0,A(j,D)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(o,f,p){var d=o("./zlib/inflate"),g=o("./utils/common"),m=o("./utils/strings"),_=o("./zlib/constants"),y=o("./zlib/messages"),S=o("./zlib/zstream"),E=o("./zlib/gzheader"),T=Object.prototype.toString;function b(x){if(!(this instanceof b))return new b(x);this.options=g.assign({chunkSize:16384,windowBits:0,to:""},x||{});var A=this.options;A.raw&&0<=A.windowBits&&A.windowBits<16&&(A.windowBits=-A.windowBits,A.windowBits===0&&(A.windowBits=-15)),!(0<=A.windowBits&&A.windowBits<16)||x&&x.windowBits||(A.windowBits+=32),15<A.windowBits&&A.windowBits<48&&(15&A.windowBits)==0&&(A.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new S,this.strm.avail_out=0;var j=d.inflateInit2(this.strm,A.windowBits);if(j!==_.Z_OK)throw new Error(y[j]);this.header=new E,d.inflateGetHeader(this.strm,this.header)}function k(x,A){var j=new b(A);if(j.push(x,!0),j.err)throw j.msg||y[j.err];return j.result}b.prototype.push=function(x,A){var j,D,M,V,H,G,L=this.strm,fe=this.options.chunkSize,$=this.options.dictionary,me=!1;if(this.ended)return!1;D=A===~~A?A:A===!0?_.Z_FINISH:_.Z_NO_FLUSH,typeof x=="string"?L.input=m.binstring2buf(x):T.call(x)==="[object ArrayBuffer]"?L.input=new Uint8Array(x):L.input=x,L.next_in=0,L.avail_in=L.input.length;do{if(L.avail_out===0&&(L.output=new g.Buf8(fe),L.next_out=0,L.avail_out=fe),(j=d.inflate(L,_.Z_NO_FLUSH))===_.Z_NEED_DICT&&$&&(G=typeof $=="string"?m.string2buf($):T.call($)==="[object ArrayBuffer]"?new Uint8Array($):$,j=d.inflateSetDictionary(this.strm,G)),j===_.Z_BUF_ERROR&&me===!0&&(j=_.Z_OK,me=!1),j!==_.Z_STREAM_END&&j!==_.Z_OK)return this.onEnd(j),!(this.ended=!0);L.next_out&&(L.avail_out!==0&&j!==_.Z_STREAM_END&&(L.avail_in!==0||D!==_.Z_FINISH&&D!==_.Z_SYNC_FLUSH)||(this.options.to==="string"?(M=m.utf8border(L.output,L.next_out),V=L.next_out-M,H=m.buf2string(L.output,M),L.next_out=V,L.avail_out=fe-V,V&&g.arraySet(L.output,L.output,M,V,0),this.onData(H)):this.onData(g.shrinkBuf(L.output,L.next_out)))),L.avail_in===0&&L.avail_out===0&&(me=!0)}while((0<L.avail_in||L.avail_out===0)&&j!==_.Z_STREAM_END);return j===_.Z_STREAM_END&&(D=_.Z_FINISH),D===_.Z_FINISH?(j=d.inflateEnd(this.strm),this.onEnd(j),this.ended=!0,j===_.Z_OK):D!==_.Z_SYNC_FLUSH||(this.onEnd(_.Z_OK),!(L.avail_out=0))},b.prototype.onData=function(x){this.chunks.push(x)},b.prototype.onEnd=function(x){x===_.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=g.flattenChunks(this.chunks)),this.chunks=[],this.err=x,this.msg=this.strm.msg},p.Inflate=b,p.inflate=k,p.inflateRaw=function(x,A){return(A=A||{}).raw=!0,k(x,A)},p.ungzip=k},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(o,f,p){var d=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";p.assign=function(_){for(var y=Array.prototype.slice.call(arguments,1);y.length;){var S=y.shift();if(S){if(typeof S!="object")throw new TypeError(S+"must be non-object");for(var E in S)S.hasOwnProperty(E)&&(_[E]=S[E])}}return _},p.shrinkBuf=function(_,y){return _.length===y?_:_.subarray?_.subarray(0,y):(_.length=y,_)};var g={arraySet:function(_,y,S,E,T){if(y.subarray&&_.subarray)_.set(y.subarray(S,S+E),T);else for(var b=0;b<E;b++)_[T+b]=y[S+b]},flattenChunks:function(_){var y,S,E,T,b,k;for(y=E=0,S=_.length;y<S;y++)E+=_[y].length;for(k=new Uint8Array(E),y=T=0,S=_.length;y<S;y++)b=_[y],k.set(b,T),T+=b.length;return k}},m={arraySet:function(_,y,S,E,T){for(var b=0;b<E;b++)_[T+b]=y[S+b]},flattenChunks:function(_){return[].concat.apply([],_)}};p.setTyped=function(_){_?(p.Buf8=Uint8Array,p.Buf16=Uint16Array,p.Buf32=Int32Array,p.assign(p,g)):(p.Buf8=Array,p.Buf16=Array,p.Buf32=Array,p.assign(p,m))},p.setTyped(d)},{}],42:[function(o,f,p){var d=o("./common"),g=!0,m=!0;try{String.fromCharCode.apply(null,[0])}catch{g=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{m=!1}for(var _=new d.Buf8(256),y=0;y<256;y++)_[y]=252<=y?6:248<=y?5:240<=y?4:224<=y?3:192<=y?2:1;function S(E,T){if(T<65537&&(E.subarray&&m||!E.subarray&&g))return String.fromCharCode.apply(null,d.shrinkBuf(E,T));for(var b="",k=0;k<T;k++)b+=String.fromCharCode(E[k]);return b}_[254]=_[254]=1,p.string2buf=function(E){var T,b,k,x,A,j=E.length,D=0;for(x=0;x<j;x++)(64512&(b=E.charCodeAt(x)))==55296&&x+1<j&&(64512&(k=E.charCodeAt(x+1)))==56320&&(b=65536+(b-55296<<10)+(k-56320),x++),D+=b<128?1:b<2048?2:b<65536?3:4;for(T=new d.Buf8(D),x=A=0;A<D;x++)(64512&(b=E.charCodeAt(x)))==55296&&x+1<j&&(64512&(k=E.charCodeAt(x+1)))==56320&&(b=65536+(b-55296<<10)+(k-56320),x++),b<128?T[A++]=b:(b<2048?T[A++]=192|b>>>6:(b<65536?T[A++]=224|b>>>12:(T[A++]=240|b>>>18,T[A++]=128|b>>>12&63),T[A++]=128|b>>>6&63),T[A++]=128|63&b);return T},p.buf2binstring=function(E){return S(E,E.length)},p.binstring2buf=function(E){for(var T=new d.Buf8(E.length),b=0,k=T.length;b<k;b++)T[b]=E.charCodeAt(b);return T},p.buf2string=function(E,T){var b,k,x,A,j=T||E.length,D=new Array(2*j);for(b=k=0;b<j;)if((x=E[b++])<128)D[k++]=x;else if(4<(A=_[x]))D[k++]=65533,b+=A-1;else{for(x&=A===2?31:A===3?15:7;1<A&&b<j;)x=x<<6|63&E[b++],A--;1<A?D[k++]=65533:x<65536?D[k++]=x:(x-=65536,D[k++]=55296|x>>10&1023,D[k++]=56320|1023&x)}return S(D,k)},p.utf8border=function(E,T){var b;for((T=T||E.length)>E.length&&(T=E.length),b=T-1;0<=b&&(192&E[b])==128;)b--;return b<0||b===0?T:b+_[E[b]]>T?b:T}},{"./common":41}],43:[function(o,f,p){f.exports=function(d,g,m,_){for(var y=65535&d|0,S=d>>>16&65535|0,E=0;m!==0;){for(m-=E=2e3<m?2e3:m;S=S+(y=y+g[_++]|0)|0,--E;);y%=65521,S%=65521}return y|S<<16|0}},{}],44:[function(o,f,p){f.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(o,f,p){var d=(function(){for(var g,m=[],_=0;_<256;_++){g=_;for(var y=0;y<8;y++)g=1&g?3988292384^g>>>1:g>>>1;m[_]=g}return m})();f.exports=function(g,m,_,y){var S=d,E=y+_;g^=-1;for(var T=y;T<E;T++)g=g>>>8^S[255&(g^m[T])];return-1^g}},{}],46:[function(o,f,p){var d,g=o("../utils/common"),m=o("./trees"),_=o("./adler32"),y=o("./crc32"),S=o("./messages"),E=0,T=4,b=0,k=-2,x=-1,A=4,j=2,D=8,M=9,V=286,H=30,G=19,L=2*V+1,fe=15,$=3,me=258,be=me+$+1,B=42,Y=113,h=1,ee=2,Z=3,Q=4;function pe(c,ue){return c.msg=S[ue],ue}function se(c){return(c<<1)-(4<c?9:0)}function z(c){for(var ue=c.length;0<=--ue;)c[ue]=0}function R(c){var ue=c.state,te=ue.pending;te>c.avail_out&&(te=c.avail_out),te!==0&&(g.arraySet(c.output,ue.pending_buf,ue.pending_out,te,c.next_out),c.next_out+=te,ue.pending_out+=te,c.total_out+=te,c.avail_out-=te,ue.pending-=te,ue.pending===0&&(ue.pending_out=0))}function U(c,ue){m._tr_flush_block(c,0<=c.block_start?c.block_start:-1,c.strstart-c.block_start,ue),c.block_start=c.strstart,R(c.strm)}function ae(c,ue){c.pending_buf[c.pending++]=ue}function le(c,ue){c.pending_buf[c.pending++]=ue>>>8&255,c.pending_buf[c.pending++]=255&ue}function ce(c,ue){var te,N,C=c.max_chain_length,F=c.strstart,de=c.prev_length,he=c.nice_match,I=c.strstart>c.w_size-be?c.strstart-(c.w_size-be):0,_e=c.window,xe=c.w_mask,ye=c.prev,Ee=c.strstart+me,Re=_e[F+de-1],De=_e[F+de];c.prev_length>=c.good_match&&(C>>=2),he>c.lookahead&&(he=c.lookahead);do if(_e[(te=ue)+de]===De&&_e[te+de-1]===Re&&_e[te]===_e[F]&&_e[++te]===_e[F+1]){F+=2,te++;do;while(_e[++F]===_e[++te]&&_e[++F]===_e[++te]&&_e[++F]===_e[++te]&&_e[++F]===_e[++te]&&_e[++F]===_e[++te]&&_e[++F]===_e[++te]&&_e[++F]===_e[++te]&&_e[++F]===_e[++te]&&F<Ee);if(N=me-(Ee-F),F=Ee-me,de<N){if(c.match_start=ue,he<=(de=N))break;Re=_e[F+de-1],De=_e[F+de]}}while((ue=ye[ue&xe])>I&&--C!=0);return de<=c.lookahead?de:c.lookahead}function ve(c){var ue,te,N,C,F,de,he,I,_e,xe,ye=c.w_size;do{if(C=c.window_size-c.lookahead-c.strstart,c.strstart>=ye+(ye-be)){for(g.arraySet(c.window,c.window,ye,ye,0),c.match_start-=ye,c.strstart-=ye,c.block_start-=ye,ue=te=c.hash_size;N=c.head[--ue],c.head[ue]=ye<=N?N-ye:0,--te;);for(ue=te=ye;N=c.prev[--ue],c.prev[ue]=ye<=N?N-ye:0,--te;);C+=ye}if(c.strm.avail_in===0)break;if(de=c.strm,he=c.window,I=c.strstart+c.lookahead,_e=C,xe=void 0,xe=de.avail_in,_e<xe&&(xe=_e),te=xe===0?0:(de.avail_in-=xe,g.arraySet(he,de.input,de.next_in,xe,I),de.state.wrap===1?de.adler=_(de.adler,he,xe,I):de.state.wrap===2&&(de.adler=y(de.adler,he,xe,I)),de.next_in+=xe,de.total_in+=xe,xe),c.lookahead+=te,c.lookahead+c.insert>=$)for(F=c.strstart-c.insert,c.ins_h=c.window[F],c.ins_h=(c.ins_h<<c.hash_shift^c.window[F+1])&c.hash_mask;c.insert&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[F+$-1])&c.hash_mask,c.prev[F&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=F,F++,c.insert--,!(c.lookahead+c.insert<$)););}while(c.lookahead<be&&c.strm.avail_in!==0)}function Le(c,ue){for(var te,N;;){if(c.lookahead<be){if(ve(c),c.lookahead<be&&ue===E)return h;if(c.lookahead===0)break}if(te=0,c.lookahead>=$&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+$-1])&c.hash_mask,te=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),te!==0&&c.strstart-te<=c.w_size-be&&(c.match_length=ce(c,te)),c.match_length>=$)if(N=m._tr_tally(c,c.strstart-c.match_start,c.match_length-$),c.lookahead-=c.match_length,c.match_length<=c.max_lazy_match&&c.lookahead>=$){for(c.match_length--;c.strstart++,c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+$-1])&c.hash_mask,te=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart,--c.match_length!=0;);c.strstart++}else c.strstart+=c.match_length,c.match_length=0,c.ins_h=c.window[c.strstart],c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+1])&c.hash_mask;else N=m._tr_tally(c,0,c.window[c.strstart]),c.lookahead--,c.strstart++;if(N&&(U(c,!1),c.strm.avail_out===0))return h}return c.insert=c.strstart<$-1?c.strstart:$-1,ue===T?(U(c,!0),c.strm.avail_out===0?Z:Q):c.last_lit&&(U(c,!1),c.strm.avail_out===0)?h:ee}function Se(c,ue){for(var te,N,C;;){if(c.lookahead<be){if(ve(c),c.lookahead<be&&ue===E)return h;if(c.lookahead===0)break}if(te=0,c.lookahead>=$&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+$-1])&c.hash_mask,te=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),c.prev_length=c.match_length,c.prev_match=c.match_start,c.match_length=$-1,te!==0&&c.prev_length<c.max_lazy_match&&c.strstart-te<=c.w_size-be&&(c.match_length=ce(c,te),c.match_length<=5&&(c.strategy===1||c.match_length===$&&4096<c.strstart-c.match_start)&&(c.match_length=$-1)),c.prev_length>=$&&c.match_length<=c.prev_length){for(C=c.strstart+c.lookahead-$,N=m._tr_tally(c,c.strstart-1-c.prev_match,c.prev_length-$),c.lookahead-=c.prev_length-1,c.prev_length-=2;++c.strstart<=C&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+$-1])&c.hash_mask,te=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),--c.prev_length!=0;);if(c.match_available=0,c.match_length=$-1,c.strstart++,N&&(U(c,!1),c.strm.avail_out===0))return h}else if(c.match_available){if((N=m._tr_tally(c,0,c.window[c.strstart-1]))&&U(c,!1),c.strstart++,c.lookahead--,c.strm.avail_out===0)return h}else c.match_available=1,c.strstart++,c.lookahead--}return c.match_available&&(N=m._tr_tally(c,0,c.window[c.strstart-1]),c.match_available=0),c.insert=c.strstart<$-1?c.strstart:$-1,ue===T?(U(c,!0),c.strm.avail_out===0?Z:Q):c.last_lit&&(U(c,!1),c.strm.avail_out===0)?h:ee}function ne(c,ue,te,N,C){this.good_length=c,this.max_lazy=ue,this.nice_length=te,this.max_chain=N,this.func=C}function ge(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=D,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new g.Buf16(2*L),this.dyn_dtree=new g.Buf16(2*(2*H+1)),this.bl_tree=new g.Buf16(2*(2*G+1)),z(this.dyn_ltree),z(this.dyn_dtree),z(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new g.Buf16(fe+1),this.heap=new g.Buf16(2*V+1),z(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new g.Buf16(2*V+1),z(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Ne(c){var ue;return c&&c.state?(c.total_in=c.total_out=0,c.data_type=j,(ue=c.state).pending=0,ue.pending_out=0,ue.wrap<0&&(ue.wrap=-ue.wrap),ue.status=ue.wrap?B:Y,c.adler=ue.wrap===2?0:1,ue.last_flush=E,m._tr_init(ue),b):pe(c,k)}function He(c){var ue=Ne(c);return ue===b&&(function(te){te.window_size=2*te.w_size,z(te.head),te.max_lazy_match=d[te.level].max_lazy,te.good_match=d[te.level].good_length,te.nice_match=d[te.level].nice_length,te.max_chain_length=d[te.level].max_chain,te.strstart=0,te.block_start=0,te.lookahead=0,te.insert=0,te.match_length=te.prev_length=$-1,te.match_available=0,te.ins_h=0})(c.state),ue}function et(c,ue,te,N,C,F){if(!c)return k;var de=1;if(ue===x&&(ue=6),N<0?(de=0,N=-N):15<N&&(de=2,N-=16),C<1||M<C||te!==D||N<8||15<N||ue<0||9<ue||F<0||A<F)return pe(c,k);N===8&&(N=9);var he=new ge;return(c.state=he).strm=c,he.wrap=de,he.gzhead=null,he.w_bits=N,he.w_size=1<<he.w_bits,he.w_mask=he.w_size-1,he.hash_bits=C+7,he.hash_size=1<<he.hash_bits,he.hash_mask=he.hash_size-1,he.hash_shift=~~((he.hash_bits+$-1)/$),he.window=new g.Buf8(2*he.w_size),he.head=new g.Buf16(he.hash_size),he.prev=new g.Buf16(he.w_size),he.lit_bufsize=1<<C+6,he.pending_buf_size=4*he.lit_bufsize,he.pending_buf=new g.Buf8(he.pending_buf_size),he.d_buf=1*he.lit_bufsize,he.l_buf=3*he.lit_bufsize,he.level=ue,he.strategy=F,he.method=te,He(c)}d=[new ne(0,0,0,0,function(c,ue){var te=65535;for(te>c.pending_buf_size-5&&(te=c.pending_buf_size-5);;){if(c.lookahead<=1){if(ve(c),c.lookahead===0&&ue===E)return h;if(c.lookahead===0)break}c.strstart+=c.lookahead,c.lookahead=0;var N=c.block_start+te;if((c.strstart===0||c.strstart>=N)&&(c.lookahead=c.strstart-N,c.strstart=N,U(c,!1),c.strm.avail_out===0)||c.strstart-c.block_start>=c.w_size-be&&(U(c,!1),c.strm.avail_out===0))return h}return c.insert=0,ue===T?(U(c,!0),c.strm.avail_out===0?Z:Q):(c.strstart>c.block_start&&(U(c,!1),c.strm.avail_out),h)}),new ne(4,4,8,4,Le),new ne(4,5,16,8,Le),new ne(4,6,32,32,Le),new ne(4,4,16,16,Se),new ne(8,16,32,32,Se),new ne(8,16,128,128,Se),new ne(8,32,128,256,Se),new ne(32,128,258,1024,Se),new ne(32,258,258,4096,Se)],p.deflateInit=function(c,ue){return et(c,ue,D,15,8,0)},p.deflateInit2=et,p.deflateReset=He,p.deflateResetKeep=Ne,p.deflateSetHeader=function(c,ue){return c&&c.state?c.state.wrap!==2?k:(c.state.gzhead=ue,b):k},p.deflate=function(c,ue){var te,N,C,F;if(!c||!c.state||5<ue||ue<0)return c?pe(c,k):k;if(N=c.state,!c.output||!c.input&&c.avail_in!==0||N.status===666&&ue!==T)return pe(c,c.avail_out===0?-5:k);if(N.strm=c,te=N.last_flush,N.last_flush=ue,N.status===B)if(N.wrap===2)c.adler=0,ae(N,31),ae(N,139),ae(N,8),N.gzhead?(ae(N,(N.gzhead.text?1:0)+(N.gzhead.hcrc?2:0)+(N.gzhead.extra?4:0)+(N.gzhead.name?8:0)+(N.gzhead.comment?16:0)),ae(N,255&N.gzhead.time),ae(N,N.gzhead.time>>8&255),ae(N,N.gzhead.time>>16&255),ae(N,N.gzhead.time>>24&255),ae(N,N.level===9?2:2<=N.strategy||N.level<2?4:0),ae(N,255&N.gzhead.os),N.gzhead.extra&&N.gzhead.extra.length&&(ae(N,255&N.gzhead.extra.length),ae(N,N.gzhead.extra.length>>8&255)),N.gzhead.hcrc&&(c.adler=y(c.adler,N.pending_buf,N.pending,0)),N.gzindex=0,N.status=69):(ae(N,0),ae(N,0),ae(N,0),ae(N,0),ae(N,0),ae(N,N.level===9?2:2<=N.strategy||N.level<2?4:0),ae(N,3),N.status=Y);else{var de=D+(N.w_bits-8<<4)<<8;de|=(2<=N.strategy||N.level<2?0:N.level<6?1:N.level===6?2:3)<<6,N.strstart!==0&&(de|=32),de+=31-de%31,N.status=Y,le(N,de),N.strstart!==0&&(le(N,c.adler>>>16),le(N,65535&c.adler)),c.adler=1}if(N.status===69)if(N.gzhead.extra){for(C=N.pending;N.gzindex<(65535&N.gzhead.extra.length)&&(N.pending!==N.pending_buf_size||(N.gzhead.hcrc&&N.pending>C&&(c.adler=y(c.adler,N.pending_buf,N.pending-C,C)),R(c),C=N.pending,N.pending!==N.pending_buf_size));)ae(N,255&N.gzhead.extra[N.gzindex]),N.gzindex++;N.gzhead.hcrc&&N.pending>C&&(c.adler=y(c.adler,N.pending_buf,N.pending-C,C)),N.gzindex===N.gzhead.extra.length&&(N.gzindex=0,N.status=73)}else N.status=73;if(N.status===73)if(N.gzhead.name){C=N.pending;do{if(N.pending===N.pending_buf_size&&(N.gzhead.hcrc&&N.pending>C&&(c.adler=y(c.adler,N.pending_buf,N.pending-C,C)),R(c),C=N.pending,N.pending===N.pending_buf_size)){F=1;break}F=N.gzindex<N.gzhead.name.length?255&N.gzhead.name.charCodeAt(N.gzindex++):0,ae(N,F)}while(F!==0);N.gzhead.hcrc&&N.pending>C&&(c.adler=y(c.adler,N.pending_buf,N.pending-C,C)),F===0&&(N.gzindex=0,N.status=91)}else N.status=91;if(N.status===91)if(N.gzhead.comment){C=N.pending;do{if(N.pending===N.pending_buf_size&&(N.gzhead.hcrc&&N.pending>C&&(c.adler=y(c.adler,N.pending_buf,N.pending-C,C)),R(c),C=N.pending,N.pending===N.pending_buf_size)){F=1;break}F=N.gzindex<N.gzhead.comment.length?255&N.gzhead.comment.charCodeAt(N.gzindex++):0,ae(N,F)}while(F!==0);N.gzhead.hcrc&&N.pending>C&&(c.adler=y(c.adler,N.pending_buf,N.pending-C,C)),F===0&&(N.status=103)}else N.status=103;if(N.status===103&&(N.gzhead.hcrc?(N.pending+2>N.pending_buf_size&&R(c),N.pending+2<=N.pending_buf_size&&(ae(N,255&c.adler),ae(N,c.adler>>8&255),c.adler=0,N.status=Y)):N.status=Y),N.pending!==0){if(R(c),c.avail_out===0)return N.last_flush=-1,b}else if(c.avail_in===0&&se(ue)<=se(te)&&ue!==T)return pe(c,-5);if(N.status===666&&c.avail_in!==0)return pe(c,-5);if(c.avail_in!==0||N.lookahead!==0||ue!==E&&N.status!==666){var he=N.strategy===2?(function(I,_e){for(var xe;;){if(I.lookahead===0&&(ve(I),I.lookahead===0)){if(_e===E)return h;break}if(I.match_length=0,xe=m._tr_tally(I,0,I.window[I.strstart]),I.lookahead--,I.strstart++,xe&&(U(I,!1),I.strm.avail_out===0))return h}return I.insert=0,_e===T?(U(I,!0),I.strm.avail_out===0?Z:Q):I.last_lit&&(U(I,!1),I.strm.avail_out===0)?h:ee})(N,ue):N.strategy===3?(function(I,_e){for(var xe,ye,Ee,Re,De=I.window;;){if(I.lookahead<=me){if(ve(I),I.lookahead<=me&&_e===E)return h;if(I.lookahead===0)break}if(I.match_length=0,I.lookahead>=$&&0<I.strstart&&(ye=De[Ee=I.strstart-1])===De[++Ee]&&ye===De[++Ee]&&ye===De[++Ee]){Re=I.strstart+me;do;while(ye===De[++Ee]&&ye===De[++Ee]&&ye===De[++Ee]&&ye===De[++Ee]&&ye===De[++Ee]&&ye===De[++Ee]&&ye===De[++Ee]&&ye===De[++Ee]&&Ee<Re);I.match_length=me-(Re-Ee),I.match_length>I.lookahead&&(I.match_length=I.lookahead)}if(I.match_length>=$?(xe=m._tr_tally(I,1,I.match_length-$),I.lookahead-=I.match_length,I.strstart+=I.match_length,I.match_length=0):(xe=m._tr_tally(I,0,I.window[I.strstart]),I.lookahead--,I.strstart++),xe&&(U(I,!1),I.strm.avail_out===0))return h}return I.insert=0,_e===T?(U(I,!0),I.strm.avail_out===0?Z:Q):I.last_lit&&(U(I,!1),I.strm.avail_out===0)?h:ee})(N,ue):d[N.level].func(N,ue);if(he!==Z&&he!==Q||(N.status=666),he===h||he===Z)return c.avail_out===0&&(N.last_flush=-1),b;if(he===ee&&(ue===1?m._tr_align(N):ue!==5&&(m._tr_stored_block(N,0,0,!1),ue===3&&(z(N.head),N.lookahead===0&&(N.strstart=0,N.block_start=0,N.insert=0))),R(c),c.avail_out===0))return N.last_flush=-1,b}return ue!==T?b:N.wrap<=0?1:(N.wrap===2?(ae(N,255&c.adler),ae(N,c.adler>>8&255),ae(N,c.adler>>16&255),ae(N,c.adler>>24&255),ae(N,255&c.total_in),ae(N,c.total_in>>8&255),ae(N,c.total_in>>16&255),ae(N,c.total_in>>24&255)):(le(N,c.adler>>>16),le(N,65535&c.adler)),R(c),0<N.wrap&&(N.wrap=-N.wrap),N.pending!==0?b:1)},p.deflateEnd=function(c){var ue;return c&&c.state?(ue=c.state.status)!==B&&ue!==69&&ue!==73&&ue!==91&&ue!==103&&ue!==Y&&ue!==666?pe(c,k):(c.state=null,ue===Y?pe(c,-3):b):k},p.deflateSetDictionary=function(c,ue){var te,N,C,F,de,he,I,_e,xe=ue.length;if(!c||!c.state||(F=(te=c.state).wrap)===2||F===1&&te.status!==B||te.lookahead)return k;for(F===1&&(c.adler=_(c.adler,ue,xe,0)),te.wrap=0,xe>=te.w_size&&(F===0&&(z(te.head),te.strstart=0,te.block_start=0,te.insert=0),_e=new g.Buf8(te.w_size),g.arraySet(_e,ue,xe-te.w_size,te.w_size,0),ue=_e,xe=te.w_size),de=c.avail_in,he=c.next_in,I=c.input,c.avail_in=xe,c.next_in=0,c.input=ue,ve(te);te.lookahead>=$;){for(N=te.strstart,C=te.lookahead-($-1);te.ins_h=(te.ins_h<<te.hash_shift^te.window[N+$-1])&te.hash_mask,te.prev[N&te.w_mask]=te.head[te.ins_h],te.head[te.ins_h]=N,N++,--C;);te.strstart=N,te.lookahead=$-1,ve(te)}return te.strstart+=te.lookahead,te.block_start=te.strstart,te.insert=te.lookahead,te.lookahead=0,te.match_length=te.prev_length=$-1,te.match_available=0,c.next_in=he,c.input=I,c.avail_in=de,te.wrap=F,b},p.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(o,f,p){f.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(o,f,p){f.exports=function(d,g){var m,_,y,S,E,T,b,k,x,A,j,D,M,V,H,G,L,fe,$,me,be,B,Y,h,ee;m=d.state,_=d.next_in,h=d.input,y=_+(d.avail_in-5),S=d.next_out,ee=d.output,E=S-(g-d.avail_out),T=S+(d.avail_out-257),b=m.dmax,k=m.wsize,x=m.whave,A=m.wnext,j=m.window,D=m.hold,M=m.bits,V=m.lencode,H=m.distcode,G=(1<<m.lenbits)-1,L=(1<<m.distbits)-1;e:do{M<15&&(D+=h[_++]<<M,M+=8,D+=h[_++]<<M,M+=8),fe=V[D&G];t:for(;;){if(D>>>=$=fe>>>24,M-=$,($=fe>>>16&255)===0)ee[S++]=65535&fe;else{if(!(16&$)){if((64&$)==0){fe=V[(65535&fe)+(D&(1<<$)-1)];continue t}if(32&$){m.mode=12;break e}d.msg="invalid literal/length code",m.mode=30;break e}me=65535&fe,($&=15)&&(M<$&&(D+=h[_++]<<M,M+=8),me+=D&(1<<$)-1,D>>>=$,M-=$),M<15&&(D+=h[_++]<<M,M+=8,D+=h[_++]<<M,M+=8),fe=H[D&L];n:for(;;){if(D>>>=$=fe>>>24,M-=$,!(16&($=fe>>>16&255))){if((64&$)==0){fe=H[(65535&fe)+(D&(1<<$)-1)];continue n}d.msg="invalid distance code",m.mode=30;break e}if(be=65535&fe,M<($&=15)&&(D+=h[_++]<<M,(M+=8)<$&&(D+=h[_++]<<M,M+=8)),b<(be+=D&(1<<$)-1)){d.msg="invalid distance too far back",m.mode=30;break e}if(D>>>=$,M-=$,($=S-E)<be){if(x<($=be-$)&&m.sane){d.msg="invalid distance too far back",m.mode=30;break e}if(Y=j,(B=0)===A){if(B+=k-$,$<me){for(me-=$;ee[S++]=j[B++],--$;);B=S-be,Y=ee}}else if(A<$){if(B+=k+A-$,($-=A)<me){for(me-=$;ee[S++]=j[B++],--$;);if(B=0,A<me){for(me-=$=A;ee[S++]=j[B++],--$;);B=S-be,Y=ee}}}else if(B+=A-$,$<me){for(me-=$;ee[S++]=j[B++],--$;);B=S-be,Y=ee}for(;2<me;)ee[S++]=Y[B++],ee[S++]=Y[B++],ee[S++]=Y[B++],me-=3;me&&(ee[S++]=Y[B++],1<me&&(ee[S++]=Y[B++]))}else{for(B=S-be;ee[S++]=ee[B++],ee[S++]=ee[B++],ee[S++]=ee[B++],2<(me-=3););me&&(ee[S++]=ee[B++],1<me&&(ee[S++]=ee[B++]))}break}}break}}while(_<y&&S<T);_-=me=M>>3,D&=(1<<(M-=me<<3))-1,d.next_in=_,d.next_out=S,d.avail_in=_<y?y-_+5:5-(_-y),d.avail_out=S<T?T-S+257:257-(S-T),m.hold=D,m.bits=M}},{}],49:[function(o,f,p){var d=o("../utils/common"),g=o("./adler32"),m=o("./crc32"),_=o("./inffast"),y=o("./inftrees"),S=1,E=2,T=0,b=-2,k=1,x=852,A=592;function j(B){return(B>>>24&255)+(B>>>8&65280)+((65280&B)<<8)+((255&B)<<24)}function D(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new d.Buf16(320),this.work=new d.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function M(B){var Y;return B&&B.state?(Y=B.state,B.total_in=B.total_out=Y.total=0,B.msg="",Y.wrap&&(B.adler=1&Y.wrap),Y.mode=k,Y.last=0,Y.havedict=0,Y.dmax=32768,Y.head=null,Y.hold=0,Y.bits=0,Y.lencode=Y.lendyn=new d.Buf32(x),Y.distcode=Y.distdyn=new d.Buf32(A),Y.sane=1,Y.back=-1,T):b}function V(B){var Y;return B&&B.state?((Y=B.state).wsize=0,Y.whave=0,Y.wnext=0,M(B)):b}function H(B,Y){var h,ee;return B&&B.state?(ee=B.state,Y<0?(h=0,Y=-Y):(h=1+(Y>>4),Y<48&&(Y&=15)),Y&&(Y<8||15<Y)?b:(ee.window!==null&&ee.wbits!==Y&&(ee.window=null),ee.wrap=h,ee.wbits=Y,V(B))):b}function G(B,Y){var h,ee;return B?(ee=new D,(B.state=ee).window=null,(h=H(B,Y))!==T&&(B.state=null),h):b}var L,fe,$=!0;function me(B){if($){var Y;for(L=new d.Buf32(512),fe=new d.Buf32(32),Y=0;Y<144;)B.lens[Y++]=8;for(;Y<256;)B.lens[Y++]=9;for(;Y<280;)B.lens[Y++]=7;for(;Y<288;)B.lens[Y++]=8;for(y(S,B.lens,0,288,L,0,B.work,{bits:9}),Y=0;Y<32;)B.lens[Y++]=5;y(E,B.lens,0,32,fe,0,B.work,{bits:5}),$=!1}B.lencode=L,B.lenbits=9,B.distcode=fe,B.distbits=5}function be(B,Y,h,ee){var Z,Q=B.state;return Q.window===null&&(Q.wsize=1<<Q.wbits,Q.wnext=0,Q.whave=0,Q.window=new d.Buf8(Q.wsize)),ee>=Q.wsize?(d.arraySet(Q.window,Y,h-Q.wsize,Q.wsize,0),Q.wnext=0,Q.whave=Q.wsize):(ee<(Z=Q.wsize-Q.wnext)&&(Z=ee),d.arraySet(Q.window,Y,h-ee,Z,Q.wnext),(ee-=Z)?(d.arraySet(Q.window,Y,h-ee,ee,0),Q.wnext=ee,Q.whave=Q.wsize):(Q.wnext+=Z,Q.wnext===Q.wsize&&(Q.wnext=0),Q.whave<Q.wsize&&(Q.whave+=Z))),0}p.inflateReset=V,p.inflateReset2=H,p.inflateResetKeep=M,p.inflateInit=function(B){return G(B,15)},p.inflateInit2=G,p.inflate=function(B,Y){var h,ee,Z,Q,pe,se,z,R,U,ae,le,ce,ve,Le,Se,ne,ge,Ne,He,et,c,ue,te,N,C=0,F=new d.Buf8(4),de=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!B||!B.state||!B.output||!B.input&&B.avail_in!==0)return b;(h=B.state).mode===12&&(h.mode=13),pe=B.next_out,Z=B.output,z=B.avail_out,Q=B.next_in,ee=B.input,se=B.avail_in,R=h.hold,U=h.bits,ae=se,le=z,ue=T;e:for(;;)switch(h.mode){case k:if(h.wrap===0){h.mode=13;break}for(;U<16;){if(se===0)break e;se--,R+=ee[Q++]<<U,U+=8}if(2&h.wrap&&R===35615){F[h.check=0]=255&R,F[1]=R>>>8&255,h.check=m(h.check,F,2,0),U=R=0,h.mode=2;break}if(h.flags=0,h.head&&(h.head.done=!1),!(1&h.wrap)||(((255&R)<<8)+(R>>8))%31){B.msg="incorrect header check",h.mode=30;break}if((15&R)!=8){B.msg="unknown compression method",h.mode=30;break}if(U-=4,c=8+(15&(R>>>=4)),h.wbits===0)h.wbits=c;else if(c>h.wbits){B.msg="invalid window size",h.mode=30;break}h.dmax=1<<c,B.adler=h.check=1,h.mode=512&R?10:12,U=R=0;break;case 2:for(;U<16;){if(se===0)break e;se--,R+=ee[Q++]<<U,U+=8}if(h.flags=R,(255&h.flags)!=8){B.msg="unknown compression method",h.mode=30;break}if(57344&h.flags){B.msg="unknown header flags set",h.mode=30;break}h.head&&(h.head.text=R>>8&1),512&h.flags&&(F[0]=255&R,F[1]=R>>>8&255,h.check=m(h.check,F,2,0)),U=R=0,h.mode=3;case 3:for(;U<32;){if(se===0)break e;se--,R+=ee[Q++]<<U,U+=8}h.head&&(h.head.time=R),512&h.flags&&(F[0]=255&R,F[1]=R>>>8&255,F[2]=R>>>16&255,F[3]=R>>>24&255,h.check=m(h.check,F,4,0)),U=R=0,h.mode=4;case 4:for(;U<16;){if(se===0)break e;se--,R+=ee[Q++]<<U,U+=8}h.head&&(h.head.xflags=255&R,h.head.os=R>>8),512&h.flags&&(F[0]=255&R,F[1]=R>>>8&255,h.check=m(h.check,F,2,0)),U=R=0,h.mode=5;case 5:if(1024&h.flags){for(;U<16;){if(se===0)break e;se--,R+=ee[Q++]<<U,U+=8}h.length=R,h.head&&(h.head.extra_len=R),512&h.flags&&(F[0]=255&R,F[1]=R>>>8&255,h.check=m(h.check,F,2,0)),U=R=0}else h.head&&(h.head.extra=null);h.mode=6;case 6:if(1024&h.flags&&(se<(ce=h.length)&&(ce=se),ce&&(h.head&&(c=h.head.extra_len-h.length,h.head.extra||(h.head.extra=new Array(h.head.extra_len)),d.arraySet(h.head.extra,ee,Q,ce,c)),512&h.flags&&(h.check=m(h.check,ee,ce,Q)),se-=ce,Q+=ce,h.length-=ce),h.length))break e;h.length=0,h.mode=7;case 7:if(2048&h.flags){if(se===0)break e;for(ce=0;c=ee[Q+ce++],h.head&&c&&h.length<65536&&(h.head.name+=String.fromCharCode(c)),c&&ce<se;);if(512&h.flags&&(h.check=m(h.check,ee,ce,Q)),se-=ce,Q+=ce,c)break e}else h.head&&(h.head.name=null);h.length=0,h.mode=8;case 8:if(4096&h.flags){if(se===0)break e;for(ce=0;c=ee[Q+ce++],h.head&&c&&h.length<65536&&(h.head.comment+=String.fromCharCode(c)),c&&ce<se;);if(512&h.flags&&(h.check=m(h.check,ee,ce,Q)),se-=ce,Q+=ce,c)break e}else h.head&&(h.head.comment=null);h.mode=9;case 9:if(512&h.flags){for(;U<16;){if(se===0)break e;se--,R+=ee[Q++]<<U,U+=8}if(R!==(65535&h.check)){B.msg="header crc mismatch",h.mode=30;break}U=R=0}h.head&&(h.head.hcrc=h.flags>>9&1,h.head.done=!0),B.adler=h.check=0,h.mode=12;break;case 10:for(;U<32;){if(se===0)break e;se--,R+=ee[Q++]<<U,U+=8}B.adler=h.check=j(R),U=R=0,h.mode=11;case 11:if(h.havedict===0)return B.next_out=pe,B.avail_out=z,B.next_in=Q,B.avail_in=se,h.hold=R,h.bits=U,2;B.adler=h.check=1,h.mode=12;case 12:if(Y===5||Y===6)break e;case 13:if(h.last){R>>>=7&U,U-=7&U,h.mode=27;break}for(;U<3;){if(se===0)break e;se--,R+=ee[Q++]<<U,U+=8}switch(h.last=1&R,U-=1,3&(R>>>=1)){case 0:h.mode=14;break;case 1:if(me(h),h.mode=20,Y!==6)break;R>>>=2,U-=2;break e;case 2:h.mode=17;break;case 3:B.msg="invalid block type",h.mode=30}R>>>=2,U-=2;break;case 14:for(R>>>=7&U,U-=7&U;U<32;){if(se===0)break e;se--,R+=ee[Q++]<<U,U+=8}if((65535&R)!=(R>>>16^65535)){B.msg="invalid stored block lengths",h.mode=30;break}if(h.length=65535&R,U=R=0,h.mode=15,Y===6)break e;case 15:h.mode=16;case 16:if(ce=h.length){if(se<ce&&(ce=se),z<ce&&(ce=z),ce===0)break e;d.arraySet(Z,ee,Q,ce,pe),se-=ce,Q+=ce,z-=ce,pe+=ce,h.length-=ce;break}h.mode=12;break;case 17:for(;U<14;){if(se===0)break e;se--,R+=ee[Q++]<<U,U+=8}if(h.nlen=257+(31&R),R>>>=5,U-=5,h.ndist=1+(31&R),R>>>=5,U-=5,h.ncode=4+(15&R),R>>>=4,U-=4,286<h.nlen||30<h.ndist){B.msg="too many length or distance symbols",h.mode=30;break}h.have=0,h.mode=18;case 18:for(;h.have<h.ncode;){for(;U<3;){if(se===0)break e;se--,R+=ee[Q++]<<U,U+=8}h.lens[de[h.have++]]=7&R,R>>>=3,U-=3}for(;h.have<19;)h.lens[de[h.have++]]=0;if(h.lencode=h.lendyn,h.lenbits=7,te={bits:h.lenbits},ue=y(0,h.lens,0,19,h.lencode,0,h.work,te),h.lenbits=te.bits,ue){B.msg="invalid code lengths set",h.mode=30;break}h.have=0,h.mode=19;case 19:for(;h.have<h.nlen+h.ndist;){for(;ne=(C=h.lencode[R&(1<<h.lenbits)-1])>>>16&255,ge=65535&C,!((Se=C>>>24)<=U);){if(se===0)break e;se--,R+=ee[Q++]<<U,U+=8}if(ge<16)R>>>=Se,U-=Se,h.lens[h.have++]=ge;else{if(ge===16){for(N=Se+2;U<N;){if(se===0)break e;se--,R+=ee[Q++]<<U,U+=8}if(R>>>=Se,U-=Se,h.have===0){B.msg="invalid bit length repeat",h.mode=30;break}c=h.lens[h.have-1],ce=3+(3&R),R>>>=2,U-=2}else if(ge===17){for(N=Se+3;U<N;){if(se===0)break e;se--,R+=ee[Q++]<<U,U+=8}U-=Se,c=0,ce=3+(7&(R>>>=Se)),R>>>=3,U-=3}else{for(N=Se+7;U<N;){if(se===0)break e;se--,R+=ee[Q++]<<U,U+=8}U-=Se,c=0,ce=11+(127&(R>>>=Se)),R>>>=7,U-=7}if(h.have+ce>h.nlen+h.ndist){B.msg="invalid bit length repeat",h.mode=30;break}for(;ce--;)h.lens[h.have++]=c}}if(h.mode===30)break;if(h.lens[256]===0){B.msg="invalid code -- missing end-of-block",h.mode=30;break}if(h.lenbits=9,te={bits:h.lenbits},ue=y(S,h.lens,0,h.nlen,h.lencode,0,h.work,te),h.lenbits=te.bits,ue){B.msg="invalid literal/lengths set",h.mode=30;break}if(h.distbits=6,h.distcode=h.distdyn,te={bits:h.distbits},ue=y(E,h.lens,h.nlen,h.ndist,h.distcode,0,h.work,te),h.distbits=te.bits,ue){B.msg="invalid distances set",h.mode=30;break}if(h.mode=20,Y===6)break e;case 20:h.mode=21;case 21:if(6<=se&&258<=z){B.next_out=pe,B.avail_out=z,B.next_in=Q,B.avail_in=se,h.hold=R,h.bits=U,_(B,le),pe=B.next_out,Z=B.output,z=B.avail_out,Q=B.next_in,ee=B.input,se=B.avail_in,R=h.hold,U=h.bits,h.mode===12&&(h.back=-1);break}for(h.back=0;ne=(C=h.lencode[R&(1<<h.lenbits)-1])>>>16&255,ge=65535&C,!((Se=C>>>24)<=U);){if(se===0)break e;se--,R+=ee[Q++]<<U,U+=8}if(ne&&(240&ne)==0){for(Ne=Se,He=ne,et=ge;ne=(C=h.lencode[et+((R&(1<<Ne+He)-1)>>Ne)])>>>16&255,ge=65535&C,!(Ne+(Se=C>>>24)<=U);){if(se===0)break e;se--,R+=ee[Q++]<<U,U+=8}R>>>=Ne,U-=Ne,h.back+=Ne}if(R>>>=Se,U-=Se,h.back+=Se,h.length=ge,ne===0){h.mode=26;break}if(32&ne){h.back=-1,h.mode=12;break}if(64&ne){B.msg="invalid literal/length code",h.mode=30;break}h.extra=15&ne,h.mode=22;case 22:if(h.extra){for(N=h.extra;U<N;){if(se===0)break e;se--,R+=ee[Q++]<<U,U+=8}h.length+=R&(1<<h.extra)-1,R>>>=h.extra,U-=h.extra,h.back+=h.extra}h.was=h.length,h.mode=23;case 23:for(;ne=(C=h.distcode[R&(1<<h.distbits)-1])>>>16&255,ge=65535&C,!((Se=C>>>24)<=U);){if(se===0)break e;se--,R+=ee[Q++]<<U,U+=8}if((240&ne)==0){for(Ne=Se,He=ne,et=ge;ne=(C=h.distcode[et+((R&(1<<Ne+He)-1)>>Ne)])>>>16&255,ge=65535&C,!(Ne+(Se=C>>>24)<=U);){if(se===0)break e;se--,R+=ee[Q++]<<U,U+=8}R>>>=Ne,U-=Ne,h.back+=Ne}if(R>>>=Se,U-=Se,h.back+=Se,64&ne){B.msg="invalid distance code",h.mode=30;break}h.offset=ge,h.extra=15&ne,h.mode=24;case 24:if(h.extra){for(N=h.extra;U<N;){if(se===0)break e;se--,R+=ee[Q++]<<U,U+=8}h.offset+=R&(1<<h.extra)-1,R>>>=h.extra,U-=h.extra,h.back+=h.extra}if(h.offset>h.dmax){B.msg="invalid distance too far back",h.mode=30;break}h.mode=25;case 25:if(z===0)break e;if(ce=le-z,h.offset>ce){if((ce=h.offset-ce)>h.whave&&h.sane){B.msg="invalid distance too far back",h.mode=30;break}ve=ce>h.wnext?(ce-=h.wnext,h.wsize-ce):h.wnext-ce,ce>h.length&&(ce=h.length),Le=h.window}else Le=Z,ve=pe-h.offset,ce=h.length;for(z<ce&&(ce=z),z-=ce,h.length-=ce;Z[pe++]=Le[ve++],--ce;);h.length===0&&(h.mode=21);break;case 26:if(z===0)break e;Z[pe++]=h.length,z--,h.mode=21;break;case 27:if(h.wrap){for(;U<32;){if(se===0)break e;se--,R|=ee[Q++]<<U,U+=8}if(le-=z,B.total_out+=le,h.total+=le,le&&(B.adler=h.check=h.flags?m(h.check,Z,le,pe-le):g(h.check,Z,le,pe-le)),le=z,(h.flags?R:j(R))!==h.check){B.msg="incorrect data check",h.mode=30;break}U=R=0}h.mode=28;case 28:if(h.wrap&&h.flags){for(;U<32;){if(se===0)break e;se--,R+=ee[Q++]<<U,U+=8}if(R!==(4294967295&h.total)){B.msg="incorrect length check",h.mode=30;break}U=R=0}h.mode=29;case 29:ue=1;break e;case 30:ue=-3;break e;case 31:return-4;case 32:default:return b}return B.next_out=pe,B.avail_out=z,B.next_in=Q,B.avail_in=se,h.hold=R,h.bits=U,(h.wsize||le!==B.avail_out&&h.mode<30&&(h.mode<27||Y!==4))&&be(B,B.output,B.next_out,le-B.avail_out)?(h.mode=31,-4):(ae-=B.avail_in,le-=B.avail_out,B.total_in+=ae,B.total_out+=le,h.total+=le,h.wrap&&le&&(B.adler=h.check=h.flags?m(h.check,Z,le,B.next_out-le):g(h.check,Z,le,B.next_out-le)),B.data_type=h.bits+(h.last?64:0)+(h.mode===12?128:0)+(h.mode===20||h.mode===15?256:0),(ae==0&&le===0||Y===4)&&ue===T&&(ue=-5),ue)},p.inflateEnd=function(B){if(!B||!B.state)return b;var Y=B.state;return Y.window&&(Y.window=null),B.state=null,T},p.inflateGetHeader=function(B,Y){var h;return B&&B.state?(2&(h=B.state).wrap)==0?b:((h.head=Y).done=!1,T):b},p.inflateSetDictionary=function(B,Y){var h,ee=Y.length;return B&&B.state?(h=B.state).wrap!==0&&h.mode!==11?b:h.mode===11&&g(1,Y,ee,0)!==h.check?-3:be(B,Y,ee,ee)?(h.mode=31,-4):(h.havedict=1,T):b},p.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(o,f,p){var d=o("../utils/common"),g=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],m=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],_=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],y=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];f.exports=function(S,E,T,b,k,x,A,j){var D,M,V,H,G,L,fe,$,me,be=j.bits,B=0,Y=0,h=0,ee=0,Z=0,Q=0,pe=0,se=0,z=0,R=0,U=null,ae=0,le=new d.Buf16(16),ce=new d.Buf16(16),ve=null,Le=0;for(B=0;B<=15;B++)le[B]=0;for(Y=0;Y<b;Y++)le[E[T+Y]]++;for(Z=be,ee=15;1<=ee&&le[ee]===0;ee--);if(ee<Z&&(Z=ee),ee===0)return k[x++]=20971520,k[x++]=20971520,j.bits=1,0;for(h=1;h<ee&&le[h]===0;h++);for(Z<h&&(Z=h),B=se=1;B<=15;B++)if(se<<=1,(se-=le[B])<0)return-1;if(0<se&&(S===0||ee!==1))return-1;for(ce[1]=0,B=1;B<15;B++)ce[B+1]=ce[B]+le[B];for(Y=0;Y<b;Y++)E[T+Y]!==0&&(A[ce[E[T+Y]]++]=Y);if(L=S===0?(U=ve=A,19):S===1?(U=g,ae-=257,ve=m,Le-=257,256):(U=_,ve=y,-1),B=h,G=x,pe=Y=R=0,V=-1,H=(z=1<<(Q=Z))-1,S===1&&852<z||S===2&&592<z)return 1;for(;;){for(fe=B-pe,me=A[Y]<L?($=0,A[Y]):A[Y]>L?($=ve[Le+A[Y]],U[ae+A[Y]]):($=96,0),D=1<<B-pe,h=M=1<<Q;k[G+(R>>pe)+(M-=D)]=fe<<24|$<<16|me|0,M!==0;);for(D=1<<B-1;R&D;)D>>=1;if(D!==0?(R&=D-1,R+=D):R=0,Y++,--le[B]==0){if(B===ee)break;B=E[T+A[Y]]}if(Z<B&&(R&H)!==V){for(pe===0&&(pe=Z),G+=h,se=1<<(Q=B-pe);Q+pe<ee&&!((se-=le[Q+pe])<=0);)Q++,se<<=1;if(z+=1<<Q,S===1&&852<z||S===2&&592<z)return 1;k[V=R&H]=Z<<24|Q<<16|G-x|0}}return R!==0&&(k[G+R]=B-pe<<24|64<<16|0),j.bits=Z,0}},{"../utils/common":41}],51:[function(o,f,p){f.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(o,f,p){var d=o("../utils/common"),g=0,m=1;function _(C){for(var F=C.length;0<=--F;)C[F]=0}var y=0,S=29,E=256,T=E+1+S,b=30,k=19,x=2*T+1,A=15,j=16,D=7,M=256,V=16,H=17,G=18,L=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],fe=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],$=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],me=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],be=new Array(2*(T+2));_(be);var B=new Array(2*b);_(B);var Y=new Array(512);_(Y);var h=new Array(256);_(h);var ee=new Array(S);_(ee);var Z,Q,pe,se=new Array(b);function z(C,F,de,he,I){this.static_tree=C,this.extra_bits=F,this.extra_base=de,this.elems=he,this.max_length=I,this.has_stree=C&&C.length}function R(C,F){this.dyn_tree=C,this.max_code=0,this.stat_desc=F}function U(C){return C<256?Y[C]:Y[256+(C>>>7)]}function ae(C,F){C.pending_buf[C.pending++]=255&F,C.pending_buf[C.pending++]=F>>>8&255}function le(C,F,de){C.bi_valid>j-de?(C.bi_buf|=F<<C.bi_valid&65535,ae(C,C.bi_buf),C.bi_buf=F>>j-C.bi_valid,C.bi_valid+=de-j):(C.bi_buf|=F<<C.bi_valid&65535,C.bi_valid+=de)}function ce(C,F,de){le(C,de[2*F],de[2*F+1])}function ve(C,F){for(var de=0;de|=1&C,C>>>=1,de<<=1,0<--F;);return de>>>1}function Le(C,F,de){var he,I,_e=new Array(A+1),xe=0;for(he=1;he<=A;he++)_e[he]=xe=xe+de[he-1]<<1;for(I=0;I<=F;I++){var ye=C[2*I+1];ye!==0&&(C[2*I]=ve(_e[ye]++,ye))}}function Se(C){var F;for(F=0;F<T;F++)C.dyn_ltree[2*F]=0;for(F=0;F<b;F++)C.dyn_dtree[2*F]=0;for(F=0;F<k;F++)C.bl_tree[2*F]=0;C.dyn_ltree[2*M]=1,C.opt_len=C.static_len=0,C.last_lit=C.matches=0}function ne(C){8<C.bi_valid?ae(C,C.bi_buf):0<C.bi_valid&&(C.pending_buf[C.pending++]=C.bi_buf),C.bi_buf=0,C.bi_valid=0}function ge(C,F,de,he){var I=2*F,_e=2*de;return C[I]<C[_e]||C[I]===C[_e]&&he[F]<=he[de]}function Ne(C,F,de){for(var he=C.heap[de],I=de<<1;I<=C.heap_len&&(I<C.heap_len&&ge(F,C.heap[I+1],C.heap[I],C.depth)&&I++,!ge(F,he,C.heap[I],C.depth));)C.heap[de]=C.heap[I],de=I,I<<=1;C.heap[de]=he}function He(C,F,de){var he,I,_e,xe,ye=0;if(C.last_lit!==0)for(;he=C.pending_buf[C.d_buf+2*ye]<<8|C.pending_buf[C.d_buf+2*ye+1],I=C.pending_buf[C.l_buf+ye],ye++,he===0?ce(C,I,F):(ce(C,(_e=h[I])+E+1,F),(xe=L[_e])!==0&&le(C,I-=ee[_e],xe),ce(C,_e=U(--he),de),(xe=fe[_e])!==0&&le(C,he-=se[_e],xe)),ye<C.last_lit;);ce(C,M,F)}function et(C,F){var de,he,I,_e=F.dyn_tree,xe=F.stat_desc.static_tree,ye=F.stat_desc.has_stree,Ee=F.stat_desc.elems,Re=-1;for(C.heap_len=0,C.heap_max=x,de=0;de<Ee;de++)_e[2*de]!==0?(C.heap[++C.heap_len]=Re=de,C.depth[de]=0):_e[2*de+1]=0;for(;C.heap_len<2;)_e[2*(I=C.heap[++C.heap_len]=Re<2?++Re:0)]=1,C.depth[I]=0,C.opt_len--,ye&&(C.static_len-=xe[2*I+1]);for(F.max_code=Re,de=C.heap_len>>1;1<=de;de--)Ne(C,_e,de);for(I=Ee;de=C.heap[1],C.heap[1]=C.heap[C.heap_len--],Ne(C,_e,1),he=C.heap[1],C.heap[--C.heap_max]=de,C.heap[--C.heap_max]=he,_e[2*I]=_e[2*de]+_e[2*he],C.depth[I]=(C.depth[de]>=C.depth[he]?C.depth[de]:C.depth[he])+1,_e[2*de+1]=_e[2*he+1]=I,C.heap[1]=I++,Ne(C,_e,1),2<=C.heap_len;);C.heap[--C.heap_max]=C.heap[1],(function(De,$e){var Yn,Mt,Zn,We,an,Zt,St=$e.dyn_tree,bn=$e.max_code,vs=$e.stat_desc.static_tree,tl=$e.stat_desc.has_stree,nl=$e.stat_desc.extra_bits,da=$e.stat_desc.extra_base,Qt=$e.stat_desc.max_length,ha=0;for(We=0;We<=A;We++)De.bl_count[We]=0;for(St[2*De.heap[De.heap_max]+1]=0,Yn=De.heap_max+1;Yn<x;Yn++)Qt<(We=St[2*St[2*(Mt=De.heap[Yn])+1]+1]+1)&&(We=Qt,ha++),St[2*Mt+1]=We,bn<Mt||(De.bl_count[We]++,an=0,da<=Mt&&(an=nl[Mt-da]),Zt=St[2*Mt],De.opt_len+=Zt*(We+an),tl&&(De.static_len+=Zt*(vs[2*Mt+1]+an)));if(ha!==0){do{for(We=Qt-1;De.bl_count[We]===0;)We--;De.bl_count[We]--,De.bl_count[We+1]+=2,De.bl_count[Qt]--,ha-=2}while(0<ha);for(We=Qt;We!==0;We--)for(Mt=De.bl_count[We];Mt!==0;)bn<(Zn=De.heap[--Yn])||(St[2*Zn+1]!==We&&(De.opt_len+=(We-St[2*Zn+1])*St[2*Zn],St[2*Zn+1]=We),Mt--)}})(C,F),Le(_e,Re,C.bl_count)}function c(C,F,de){var he,I,_e=-1,xe=F[1],ye=0,Ee=7,Re=4;for(xe===0&&(Ee=138,Re=3),F[2*(de+1)+1]=65535,he=0;he<=de;he++)I=xe,xe=F[2*(he+1)+1],++ye<Ee&&I===xe||(ye<Re?C.bl_tree[2*I]+=ye:I!==0?(I!==_e&&C.bl_tree[2*I]++,C.bl_tree[2*V]++):ye<=10?C.bl_tree[2*H]++:C.bl_tree[2*G]++,_e=I,Re=(ye=0)===xe?(Ee=138,3):I===xe?(Ee=6,3):(Ee=7,4))}function ue(C,F,de){var he,I,_e=-1,xe=F[1],ye=0,Ee=7,Re=4;for(xe===0&&(Ee=138,Re=3),he=0;he<=de;he++)if(I=xe,xe=F[2*(he+1)+1],!(++ye<Ee&&I===xe)){if(ye<Re)for(;ce(C,I,C.bl_tree),--ye!=0;);else I!==0?(I!==_e&&(ce(C,I,C.bl_tree),ye--),ce(C,V,C.bl_tree),le(C,ye-3,2)):ye<=10?(ce(C,H,C.bl_tree),le(C,ye-3,3)):(ce(C,G,C.bl_tree),le(C,ye-11,7));_e=I,Re=(ye=0)===xe?(Ee=138,3):I===xe?(Ee=6,3):(Ee=7,4)}}_(se);var te=!1;function N(C,F,de,he){le(C,(y<<1)+(he?1:0),3),(function(I,_e,xe,ye){ne(I),ae(I,xe),ae(I,~xe),d.arraySet(I.pending_buf,I.window,_e,xe,I.pending),I.pending+=xe})(C,F,de)}p._tr_init=function(C){te||((function(){var F,de,he,I,_e,xe=new Array(A+1);for(I=he=0;I<S-1;I++)for(ee[I]=he,F=0;F<1<<L[I];F++)h[he++]=I;for(h[he-1]=I,I=_e=0;I<16;I++)for(se[I]=_e,F=0;F<1<<fe[I];F++)Y[_e++]=I;for(_e>>=7;I<b;I++)for(se[I]=_e<<7,F=0;F<1<<fe[I]-7;F++)Y[256+_e++]=I;for(de=0;de<=A;de++)xe[de]=0;for(F=0;F<=143;)be[2*F+1]=8,F++,xe[8]++;for(;F<=255;)be[2*F+1]=9,F++,xe[9]++;for(;F<=279;)be[2*F+1]=7,F++,xe[7]++;for(;F<=287;)be[2*F+1]=8,F++,xe[8]++;for(Le(be,T+1,xe),F=0;F<b;F++)B[2*F+1]=5,B[2*F]=ve(F,5);Z=new z(be,L,E+1,T,A),Q=new z(B,fe,0,b,A),pe=new z(new Array(0),$,0,k,D)})(),te=!0),C.l_desc=new R(C.dyn_ltree,Z),C.d_desc=new R(C.dyn_dtree,Q),C.bl_desc=new R(C.bl_tree,pe),C.bi_buf=0,C.bi_valid=0,Se(C)},p._tr_stored_block=N,p._tr_flush_block=function(C,F,de,he){var I,_e,xe=0;0<C.level?(C.strm.data_type===2&&(C.strm.data_type=(function(ye){var Ee,Re=4093624447;for(Ee=0;Ee<=31;Ee++,Re>>>=1)if(1&Re&&ye.dyn_ltree[2*Ee]!==0)return g;if(ye.dyn_ltree[18]!==0||ye.dyn_ltree[20]!==0||ye.dyn_ltree[26]!==0)return m;for(Ee=32;Ee<E;Ee++)if(ye.dyn_ltree[2*Ee]!==0)return m;return g})(C)),et(C,C.l_desc),et(C,C.d_desc),xe=(function(ye){var Ee;for(c(ye,ye.dyn_ltree,ye.l_desc.max_code),c(ye,ye.dyn_dtree,ye.d_desc.max_code),et(ye,ye.bl_desc),Ee=k-1;3<=Ee&&ye.bl_tree[2*me[Ee]+1]===0;Ee--);return ye.opt_len+=3*(Ee+1)+5+5+4,Ee})(C),I=C.opt_len+3+7>>>3,(_e=C.static_len+3+7>>>3)<=I&&(I=_e)):I=_e=de+5,de+4<=I&&F!==-1?N(C,F,de,he):C.strategy===4||_e===I?(le(C,2+(he?1:0),3),He(C,be,B)):(le(C,4+(he?1:0),3),(function(ye,Ee,Re,De){var $e;for(le(ye,Ee-257,5),le(ye,Re-1,5),le(ye,De-4,4),$e=0;$e<De;$e++)le(ye,ye.bl_tree[2*me[$e]+1],3);ue(ye,ye.dyn_ltree,Ee-1),ue(ye,ye.dyn_dtree,Re-1)})(C,C.l_desc.max_code+1,C.d_desc.max_code+1,xe+1),He(C,C.dyn_ltree,C.dyn_dtree)),Se(C),he&&ne(C)},p._tr_tally=function(C,F,de){return C.pending_buf[C.d_buf+2*C.last_lit]=F>>>8&255,C.pending_buf[C.d_buf+2*C.last_lit+1]=255&F,C.pending_buf[C.l_buf+C.last_lit]=255&de,C.last_lit++,F===0?C.dyn_ltree[2*de]++:(C.matches++,F--,C.dyn_ltree[2*(h[de]+E+1)]++,C.dyn_dtree[2*U(F)]++),C.last_lit===C.lit_bufsize-1},p._tr_align=function(C){le(C,2,3),ce(C,M,be),(function(F){F.bi_valid===16?(ae(F,F.bi_buf),F.bi_buf=0,F.bi_valid=0):8<=F.bi_valid&&(F.pending_buf[F.pending++]=255&F.bi_buf,F.bi_buf>>=8,F.bi_valid-=8)})(C)}},{"../utils/common":41}],53:[function(o,f,p){f.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(o,f,p){(function(d){(function(g,m){if(!g.setImmediate){var _,y,S,E,T=1,b={},k=!1,x=g.document,A=Object.getPrototypeOf&&Object.getPrototypeOf(g);A=A&&A.setTimeout?A:g,_={}.toString.call(g.process)==="[object process]"?function(V){process.nextTick(function(){D(V)})}:(function(){if(g.postMessage&&!g.importScripts){var V=!0,H=g.onmessage;return g.onmessage=function(){V=!1},g.postMessage("","*"),g.onmessage=H,V}})()?(E="setImmediate$"+Math.random()+"$",g.addEventListener?g.addEventListener("message",M,!1):g.attachEvent("onmessage",M),function(V){g.postMessage(E+V,"*")}):g.MessageChannel?((S=new MessageChannel).port1.onmessage=function(V){D(V.data)},function(V){S.port2.postMessage(V)}):x&&"onreadystatechange"in x.createElement("script")?(y=x.documentElement,function(V){var H=x.createElement("script");H.onreadystatechange=function(){D(V),H.onreadystatechange=null,y.removeChild(H),H=null},y.appendChild(H)}):function(V){setTimeout(D,0,V)},A.setImmediate=function(V){typeof V!="function"&&(V=new Function(""+V));for(var H=new Array(arguments.length-1),G=0;G<H.length;G++)H[G]=arguments[G+1];var L={callback:V,args:H};return b[T]=L,_(T),T++},A.clearImmediate=j}function j(V){delete b[V]}function D(V){if(k)setTimeout(D,0,V);else{var H=b[V];if(H){k=!0;try{(function(G){var L=G.callback,fe=G.args;switch(fe.length){case 0:L();break;case 1:L(fe[0]);break;case 2:L(fe[0],fe[1]);break;case 3:L(fe[0],fe[1],fe[2]);break;default:L.apply(m,fe)}})(H)}finally{j(V),k=!1}}}}function M(V){V.source===g&&typeof V.data=="string"&&V.data.indexOf(E)===0&&D(+V.data.slice(E.length))}})(typeof self>"u"?d===void 0?this:d:self)}).call(this,typeof hs<"u"?hs:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Gu)),Gu.exports}var h_=d_();const _s=Hp(h_),sh=`# VDF 6.0 Gem — 설정과 1차 테스트

## 설정

| 항목 | 값 |
| --- | --- |
| 이름 | VDF 6.0 블록 계획 |
| 지식 파일 | \`VDF6_규칙.md\` |
| 기본 도구 | 없음 (이미지 생성 아님) |

지시문은 아래를 그대로 붙여넣는다.

---

## 지시문

\`\`\`
너는 대학 온라인 강의 슬라이드의 본문 시각화를 계획한다.
입력은 강의노트 한 편이고, 출력은 블록별 계획이다.
판정 근거는 지식 파일 VDF6_규칙.md에 있다. 규칙을 새로 만들지 않는다.

## 범위
본강의 본문만 다룬다. 표지·학습목표·마음열기·평가·학습정리는 제외한다.
레이아웃을 지목하지 않는다. 교수자가 템플릿에서 고른다.

## 블록마다 순서대로 판정한다

1. 라벨 테스트 — 노드의 라벨을 지웠을 때 남는 게 있으면 이미지, 없으면 도형.
   표·수식·정의 목록은 언제나 도형이다.
2. 정보 유형 — VDF6_규칙.md §2의 6종 중 하나. 이 여섯 개 밖의 이름을 쓰지 않는다. 항목 수와 항목 구조를 낸다.
3. 이미지로 판정된 경우에만, 비유 게이트(§3 '비유는 그릴 사물이 좁혀질 때만 그린다')를 적용한다.
   그릴 대상이 구체적 사물 하나 또는 같은 사물의 변형으로 좁혀지는가.
   좁혀지지 않으면 배경층 없음으로 되돌린다.
   노트에 없는 사물을 만들어내지 않는다. 이것이 가장 중요한 규칙이다.
4. 카드 선택 — VDF6_규칙.md §5에서 '언제' 항목으로 고른다.
   애매하면 A(에셋세트)가 가장 안전하다.

## 프롬프트를 쓰는 법

카드 프롬프트를 새로 작성하지 않는다.
VDF6_규칙.md §5의 해당 카드에서 background·composition·style·ratio·negative를
문자 그대로 가져오고, subject 한 줄만 채운다. 한 단어도 바꾸지 않는다.
조건부 조각은 해당 조건일 때만 붙인다.
모델은 카드에 적힌 것을 그대로 쓴다. 두 개 적지 않는다.

## 출력 형식

두 부분을 낸다. 먼저 사람이 읽는 계획, 그다음 기계가 읽는 JSON.

**1부 — 블록마다**

  B1  블록 제목
  정보 유형: (6종 중 하나) · 항목 수: N
  항목 구조: (형식)
  (슬롯 텍스트)

  배경층: 카드 X / 없음
  모델: (배경층이 있을 때만)
  프롬프트: (여섯 줄, 영문)
  근거: 한 줄

마지막에 커버리지 표. 노트의 소단원과 블록이 빠짐없이 대응하는지.

**2부 — JSON 한 덩어리**

\`\`\`json
{"blocks":[{
  "id":"B4",
  "title":"스마트폰의 대체와 결합",
  "track":"image",
  "info_type":"분류·계층",
  "item_count":2,
  "item_structure":"대분류 | 하위항목 목록",
  "slots":["S 대체 | 유리 → 플렉시블","C 결합 | 자동차 키"],
  "gate":{"passed":true,"reason":"기기가 구체적으로 명시됨"},
  "card":"A",
  "subject":"a rigid-glass smartphone, a foldable phone, a smartwatch",
  "subject_traits":{
    "branded_category":true,
    "same_form_variants":false,
    "replacement_type":true,
    "scale_is_the_point":false,
    "spreads_across_frame":false
  }
}]}
\`\`\`

**slots는 항목 하나가 원소 하나다.** item_count가 3이면 slots도 3개여야 한다.
인과·수렴도 마찬가지다. 화살표로 이어붙여 한 문자열에 넣지 않는다.

\`\`\`json
"item_count":3,
"slots":["동전 사용의 불편","결제 수단을 무엇으로 대체할지 질문","신용카드로 대체한 징수기"]
\`\`\`

**gate는 passed와 reason 둘 다 낸다.** reason만 내지 않는다.

| track | gate |
| --- | --- |
| image | \`{"passed":true,"reason":"..."}\` |
| shape — 이미지 후보였다가 게이트에서 기각 | \`{"passed":false,"reason":"..."}\` |
| shape — 라벨 테스트에서 이미 도형 | \`null\` |

기각된 블록의 gate를 지우지 않는다. 왜 이미지가 아닌지가 남아야 한다.

**subject_traits는 다섯 개를 항상 낸다.** 해당 없으면 false를 쓴다.
배경층이 없는 블록도 낸다 — 실명 제품이 언급되면 branded_category는 true다.

| 속성 | true인 경우 |
| --- | --- |
| branded_category | 휴대기기·웨어러블·차량·가전·컴퓨터 |
| same_form_variants | 같은 사물의 변형을 나열 |
| replacement_type | 'A를 B로 대체' 유형 |
| scale_is_the_point | 크기 변화가 학습 포인트 |
| spreads_across_frame | 사물이 화면 전체에 퍼짐 |

**조건부 조각 문자열을 직접 쓰지 않는다.** 속성만 내면 된다.

**항목 수가 카드 상한을 넘으면** \`split\` 배열을 함께 낸다. 일부만 그리지 않는다.

\`\`\`json
"split":[{"id":"B5-1","title":"A·M·P","item_count":3,"slots":["..."],"subject":"..."}]
\`\`\`

## 하지 않는 것

자기채점하지 않는다. 점수·게이트 통과 여부를 쓰지 않는다.
판정 과정을 서술하지 않는다. 결과와 한 줄 근거만 낸다.
이미지를 생성하지 않는다. 프롬프트까지가 출력이다.
JSON을 설명하지 않는다. 코드블록만 낸다.
불확실하면 배경층을 없음으로 두고 근거에 이유를 적는다.
\`\`\`

---

## 1차 테스트

**노트:** 1주차 1강 (공학과 창의성)
**정답:** 아래 표 (지식 파일에는 넣지 않는다 — 넣으면 컨닝이 된다)

| 블록 | 정보 유형 | 배경층 |
| --- | --- | --- |
| B1 공학의 본질 | 정의 | 카드 B — 캡슐 커피머신 |
| B2 과학자 vs 공학자 | 비교·대조 | 없음 |
| B3 시대별 역량 | 비교·대조 | 없음 |
| B4 실무 소양 | 목록 | 없음 |
| B5 창의성의 오해 | 정의 | 카드 B — 하늘 나는 차 |
| B6 창의 실용 | 정의 | 카드 C — 우회 경로 대조 |
| B7 창의성 4단계 | 순서·절차 | 없음 |

**볼 것 네 가지**

| # | 확인 | 실패하면 |
| --- | --- | --- |
| 1 | B2가 배경층 없음으로 나오는가 | 규칙 ④를 모델이 못 지킨다. 지시문 상단으로 올린다 |
| 2 | 블록이 7개로 잡히는가 | 파싱 문제. 단계를 나눠야 한다 |
| 3 | 프롬프트가 VDF6_규칙.md 문자열 그대로인가 | 검증된 문자열이 표류한다. 가장 위험한 실패 |
| 4 | 커버리지에 누락이 없는가 | 노트 분량이 한 호출에 안 들어간다 |

1번이 이 테스트의 핵심이다. B2("아는 것 vs 하는 것")는 그릴 사물이 없어 이미지로 잡으면 안 되는 블록이고, 규칙 ④가 여기서 나왔다.

3번이 실패하면 오팔로 넘어갈 이유가 하나 더 생긴다. 프롬프트 조립을 LLM이 아니라 단계에서 하면 표류가 원천 차단된다.

---

## 같은 것을 Custom GPT로도

지시문과 지식 파일이 같다. 두 결과를 위 네 항목으로 비교한다.
텍스트 판단 모델을 어디로 할지가 여기서 정해진다.
이미지 생성은 별개다 — 카드 F가 제미나이 앱으로 고정돼 있고 바뀌지 않는다.
`,m_=`# VDF 6.0 규칙

> 본강의 본문 시각화 판정 기준. 이 문서 밖의 규칙을 만들지 않는다.

## 1. 트랙 판정

**노드의 라벨을 지웠을 때 남는 게 있으면 이미지, 없으면 도형.**

- 도형: 항목의 정체가 텍스트 자체. 라벨을 지우면 빈 상자만 남음
- 이미지: 항목의 정체가 사물·현상·장치. 라벨을 지우면 그림이 남음
- 표·수식·정의 목록은 언제나 도형. 생성형으로 만들지 않는다

## 2. 정보 유형 6종

이 여섯 개 밖의 이름을 쓰지 않는다.

| 유형 | 신호 | 출력 형식 |
| --- | --- | --- |
| **순서·절차** | 단계, 순서, ~후에, 프로세스 | 번호 \\| 명칭 \\| 설명 |
| **분류·계층** | 상위-하위, ~로 나뉨, 유형 | 대분류 \\| 하위항목 목록 |
| **비교·대조** | 반면, ~와 달리, 장단점 | 항목 \\| A값 \\| B값 |
| **인과·수렴** | 따라서, 그 결과, ~로 이어짐 | 원인 → 중간 → 결과 |
| **정의** | ~란, ~을 의미함 | 용어 \\| 정의문 |
| **목록** | 특징, 요소, 규칙 | 항목 배열 |

## 3. 절대 규칙

### 해석·비유 개념이면 배경을 죽인다
44장 최대 발견. 밀도보다 무대가 품질을 더 크게 좌우한다.

### 모든 텍스트는 PPT 레이어. 예외 없음

### 글로우·이펙트는 정보를 전달할 때만
장식 이펙트는 요소 수만 올리고 학습 포인트를 가린다.

### 비유는 그릴 사물이 좁혀질 때만 그린다
이것이 §7 '해석·비유 + 살아있는 배경 + 요소 4+'의 원인이다. 대상이 안 좁혀지니 배경으로 도망가고, 그래서 요소가 늘어난다. 증상이 아니라 원인에서 막는다.
- 판정: 그릴 대상이 구체적 사물 하나 또는 같은 사물의 변형으로 좁혀지는가
- 좁혀지면 이미지, 안 좁혀지면 정보층 텍스트로 둔다
- **없는 사물을 만들어내지 않는다.**
- 실패 패턴: 노트에 그릴 사물이 없는데 AI가 '투명 구체 두 개' 같은 것을 발명해내는 것. 노트 외 창작이며, 44장에서 무너진 것들이 정확히 이 패턴이다.

### 카드마다 모델을 고정한다

### 여백은 종류별로 다르게 처리한다
사양서 §6은 여백을 한 덩어리로 다뤘으나 실제로는 세 종류다. 카드 A·B에서 삭제된 것은 우측(교수자 영상)뿐이고 하단 10%(출처 캡션)는 남아 있다. 목적이 다르므로 따로 판정한다.

### 핵심 구도는 긍정형으로
'하지 마라'는 무시되는 빈도가 높다.

### 항목 수가 카드 요소 상한을 넘으면
블록을 쪼개거나 상한을 넘긴다. **일부만 그리지 않는다.**
그림 4개와 텍스트 5개는 학습자가 대응시킬 수 없다.

### 분류가 둘 이상이면 카드 A를 쓰지 않는다
한 줄에 나란히 놓으면 어느 것이 어느 분류인지 사라진다.
분류별로 블록을 나누거나 카드 C로 간다.

## 4. 쓰지 않는 것

| 무엇 | 왜 |
| --- | --- |
| 해석·비유 + 살아있는 배경 + 요소 4+ | 저울 광장, 창문 벽, 주방. 학습 포인트 복원 불가 |
| 이미지 내 텍스트 | 깨진 글자. 한글 불가 |
| 만화 + 대사 | 영문만 가능, 교정 부담 큼 |
| AI 생성 도표 | 표·목록·수식은 도형/텍스트 |
| 장식 글로우 | 요소 수만 올림 |
| SVG 좌표 생성 | 교수자가 템플릿에서 고르는 게 빠름 |
| 노트에 없는 사물 발명 | 규칙 R4. 무너진 이미지들의 공통 원인 |
| 인물 비유 (독불장군 vs 지휘자 등) | 44장에 성공 사례 없음. 텍스트로 |

## 5. 프리셋 카드

**프롬프트를 새로 쓰지 않는다. 아래 여섯 줄을 그대로 가져오고 subject 한 줄만 채운다.**

### 카드 A — 에셋세트 · 무배경
- **언제:** 같은 것의 여러 변형 / 여러 항목 병렬 / 단계별 부품
- **쓰지 않을 때:** 정보 유형이 분류·계층이고 분류가 둘 이상일 때 — 한 줄에 놓으면 분류 경계가 사라진다(FT-3)
- **요소 상한:** 4
- 항목 수가 4를 넘으면 블록을 쪼개거나 상한을 넘긴다. 일부만 그리지 않는다(FT-2).
- **모델:** \`gemini\` — 두 개 적지 않는다

\`\`\`
subject: [대상]   ← 예: four variations of a paper clip, all clearly made from the same bent wire form, each repurposed as a different object, evenly spaced in a single row, three-quarter angle
background: uniform solid light-gray seamless background
composition: a single row, lower 10% clear
style: premium 3D educational render, matte materials, soft directional key light from upper-left, no baked shadows
ratio: 16:9
negative: text-free, no readable text, no letters, no numbers, no labels, no logos, no brand names, no overlapping objects, no environmental props
\`\`\`

- **조건부** \`identical scale\`
  - 언제: 형태 변화가 학습 포인트
  - 뺄 때: 크기 변화가 학습 포인트
- **조건부** \`'A를 B로 대체' 유형은 A를 함께 그린다. 변형 N개면 기준점 1개를 더해 N+1개.\`
  - 언제: 
- **조건부** \`unbranded, no app icons, no screen content, no brand logos, generic design\`
  - 언제: 브랜드 연상이 강한 대상군은 항상. 휴대기기·웨어러블·차량·가전·컴퓨터.
- **조건부** \`all clearly made from the same bent wire form\`
  - 언제: 같은 사물의 변형을 나열할 때. 카드 A의 기본 용법이므로 사실상 항상.

### 카드 B — 개념 · 단일 오브젝트 · 무배경
- **언제:** 추상 원리를 한 컷으로 / 대비되는 두 상태를 한 오브젝트에
- **요소 상한:** 3
- **제약:** 하나하나가 의미를 가져야 함
- **모델:** \`gemini\` — 두 개 적지 않는다

\`\`\`
subject: [대상]   ← 예: a balance scale, tilted, a plain gray card on the raised pan and a vivid accent-colored card with a check badge on the lowered pan
background: uniform solid light-gray seamless background, subtle floor reflection
composition: the object centered, lower 10% clear
style: premium 3D educational render, matte materials, soft key light
ratio: 16:9
negative: text-free, no readable text, no labels, no environmental detail, no decorative HUD rings, no floating data readouts
\`\`\`

- **조건부** \`the superseded items rendered in flat desaturated gray, clearly unused\`
  - 언제: 과거/현재 대비를 그릴 때

### 카드 C — 조건 대조 · 좌우 분할
- **언제:** 조건 A와 B의 결과 차이가 학습 포인트
- **요소 상한:** 3
- **제약:** 좌우가 같은 앵글·같은 스케일이어야 비교 성립
- **모델:** \`gemini\` — 두 개 적지 않는다

\`\`\`
subject: [대상]   ← 예: two identical soil cross-sections side by side, exactly the same number of elements on each side, left with a smooth pile driven down showing cool stress lines, right with a rough pile showing dense friction lines
background: plain seamless background, environment barely visible
composition: both halves sit on one single continuous unbroken floor plane with no seam or line between them, identical camera angle and scale, the pair grouped within the left 60% of the frame, the right 40% is empty background
style: premium 3D educational render, accent glow carrying the data only
ratio: 16:9
negative: text-free, no readable text, no labels, no decorative HUD rings
\`\`\`

- **필수** \`identical camera angle and scale\`

### 카드 D — 장치 작동 · 단일 · 맥락 배경
- **언제:** 장치의 작동 맥락이 학습 포인트일 때
- **요소 상한:** 2
- **제약:** 장치 + 작동 표시 하나
- **모델:** \`gemini\` — 두 개 적지 않는다

\`\`\`
subject: [대상]   ← 예: a vacuum cleaner head on carpet, airflow arrows drawn into the nozzle showing suction direction
background: plain seamless background, minimal environment barely visible
composition: low angle close-up on the left, right 40% empty
style: premium 3D educational render, accent glow used only for airflow
ratio: 16:9
negative: text-free, no readable text, no decorative HUD rings, no floating data readouts, no sci-fi interface overlays
\`\`\`


### 카드 E — 순차 패널
- **언제:** 단계가 3~4개이고 순서 자체가 내용일 때
- **모델:** \`gemini\` — 두 개 적지 않는다
- ⚠️ AI 단독으로 어렵다. 잘 나온 사례는 후편집으로 라벨을 얹은 것이다. 라벨 없는 패널만 요청하고, 번호와 설명은 PPT에서 얹는다.

\`\`\`
subject: [대상]   ← 예: the same cylindrical filter housing shown four times in a row, identical angle and scale, differing only in internal state
background: uniform solid light-gray seamless background
composition: four evenly spaced panels in one row, no dividers
style: technical illustration, consistent cutaway style across all four
ratio: 16:9
negative: text-free, no readable text, no numbers, no step labels, no arrows between panels
\`\`\`


### 카드 F — 배경 이미지 (슬라이드를 덮음)
- **언제:** 텍스트가 주인공이고 이미지는 무대
- **요소 상한:** 2
- **제약:** 정보를 실으려 하면 안 됨. 밝고 저채도가 필수 — 위에 얹힐 텍스트가 읽혀야 한다.
- **모델:** \`gemini_app\` — 두 개 적지 않는다

\`\`\`
subject: [대상]   ← 예: an empty office desk scene, softly out of focus
background: high key, low saturation, large empty area for text overlay
composition: one continuous seamless background, no vertical seam, no split-screen, no panel division
style: soft natural light, muted palette
ratio: 16:9
negative: text-free, no readable text, no informational elements, no charts, no diagrams, no HUD, no strong focal point in the center
\`\`\`

- **조건부** \`the left 55% is plain empty wall with no objects\`
  - 언제: 사물이 화면 전체에 퍼지는 대상(작업대·선반·공방 등) 또는 이전 시도에서 빈 자리가 안 나온 경우
  - 뺄 때: 사물이 자연히 한쪽에 모이는 대상(책상·복도). 지시를 덜 넣는 쪽이 낫다.
- **조건부** \`everything softly out of focus, shallow depth of field throughout, no sharp object anywhere\`
  - 언제: 앞쪽에 물체가 놓이는 대상. 사실상 대부분의 F 대상.
- 어려운 대상: 작업대 — 빈 영역이 뚜렷하게 생기지 않고 앞쪽 물체가 선명해지기 쉽다.

## 6. 절대 쓰지 않는 단어

프롬프트에 \`transparent\`, \`alpha\` 금지. 모델이 가짜 체크무늬 배경을 그린다.

## 7. 대상 속성 5종

배경층이 있는 블록은 대상의 속성 다섯 개를 **항상** 낸다. 해당 없으면 false.
조건부 조각 문자열은 직접 쓰지 않는다 — 속성만 내면 붙는다.

| 속성 | true인 경우 | 붙는 조각 |
| --- | --- | --- |
| branded_category | 휴대기기·웨어러블·차량·가전·컴퓨터 | \`unbranded, no app icons, no screen content\` |
| same_form_variants | 같은 사물의 변형을 나열 | \`all clearly made from the same [기본형]\` |
| replacement_type | 'A를 B로 대체' 유형 | 기준점을 더해 N+1개로 그린다 |
| scale_is_the_point | 크기 변화가 학습 포인트 | \`identical scale\`을 **뺀다** |
| spreads_across_frame | 사물이 화면 전체에 퍼짐 | 카드 F에 여백 위치를 명시한다 |


## 8. 요소 상한은 물체가 아니라 의미 단위로 센다

하나하나가 학습 내용을 실어야 요소로 센다.
맥락을 만드는 소품 무더기는 통틀어 하나로 센다.

| 예 | 물체 수 | 의미 단위 |
| --- | --- | --- |
| 캡슐 커피머신 + 드립 도구들 | 7~8 | **2** — 도구 무더기 / 기계 |
| 저울 + 회색 카드 + 강조 카드 | 3 | **2** — 저울 / 두 선택지 |
| 클립 4종 | 4 | **4** — 각각이 변형 하나 |


## 9. 그림이 아니면 도형이다

그림으로 가지 않은 덩어리를 글 목록으로 두지 않는다. **항목 관계가 도형을 정한다.**
따로 판정하지 않는다.

| 항목 관계 | 도형 |
| --- | --- |
| 목록 | 카드 나열 — 항목만 |
| 분류·계층 | 카드 나열 — 카드마다 제목 + 사례 줄. 목록과 같은 패턴의 변형 |
| 순서·절차 | 단계 흐름 — 번호 + 화살표 |
| 비교·대조 | 좌우 대비 — 잣대 없이 두 덩어리가 마주 본다 |
| 인과·수렴 | 화살표 연쇄 |
| 정의 | **도형 없음 — 글로 둔다** — 도형을 만들지 않는다. 글로 둔다. |

항목이 5개를 넘으면 2행으로 접는다.

**목록과 인과·수렴은 규칙으로 가르지 않는다.** 해석의 문제다. 하나를 고르되 교수자가 바꿀 수 있다.

## 10. 표·도형·그림은 같이 쓰지 않는다

한 슬라이드에 둘 이상 오면 밀도가 너무 높다. 표+글, 도형+글은 흔하다.

- **표** — 노트 원문에 이미 표로 있을 때만. 판정하지 않고 그대로 옮긴다.
- **무대 이미지(배치 F)** — 글을 그대로 놓을 때만 깐다. 표나 도형 위에는 깔지 않는다.
`,p_=[{id:"CASE-01",folder:"CASE-01_engineering_creativity",name:"1주차 1강 — 공학과 창의성",status:"GOLDEN",purpose:"",input:`1주차. 창의성과 공학 설계

1강. 공학과 창의성

| 학습내용 | 1. 공학의 정의와 공학자의 임무 2. 21세기 AI 시대 공학자의 필수 소양 3. 공학적 창의성의 올바른 이해 |

| --- | --- |

| 학습목표 | 공학의 정의를 이해하고, 공학자와 과학자의 임무 차이를 비교하여 설명할 수 있다. 21세기 지식기반사회 및 AI 시대에 요구되는 현대 공학자의 필수 소양을 나열할 수 있다. 공학적 창의성의 개념과 오해를 구별하고, 문제 해결을 위한 실용적 가치를 실무에 적용할 수 있다. |

| 마음열기 |

| --- |

| 안녕하세요, 예비 수석 엔지니어 여러분! 혹시 '공학자'나 '개발자' 하면 어두운 방에서 하루 종일 키보드만 두드리는 모습을 상상하셨나요? 2026년 지금, AI가 코드를 알아서 짜주고 아키텍처 초안까지 제안해 주는 시대에 우리에게 진짜 필요한 것은 단순한 기술 암기가 아닙니다. 현실의 불편함을 발견하고, AI라는 강력한 도구를 지휘하여 창의적으로 해결책을 설계하는 '문제 해결 능력'이지요. 오늘 첫 시간은 그 '창의적인 공학'이 무엇인지 일상의 언어로 편안하게 풀어보겠습니다. 자, 시작해 볼까요? |

1. 공학의 정의와 공학자의 임무

1) 공학의 본질

- 인간의 삶의 질을 향상시키기 위한 실용적인 학문이며, 본질적으로 '문제 해결'의 학문임. 편의성, 안전성, 효율성 등을 개선시키는 것과 관련된 모든 문제를 다룸.

- 더 쉽게 말하면: 일상이나 업무에서 느끼는 "이거 너무 불편한데?"라는 불만을 "이렇게 바꾸면 편하겠네!"로 현실화하는 모든 과정임.

- 실무 예시: 아침마다 드립 커피를 내리는 시간이 부족하다는 '공학 문제'를 발견하고, 버튼 하나로 정량이 추출되는 '캡슐 커피머신'을 개발하는 것(공학적 해결).

2) 공학자와 과학자의 차이

- 과학자 (Scientist): 최종 목표는 '현상의 이해'임. 자연의 원리를 밝히는 데 주력하며 "왜 그런가? (Why?)"라는 질문을 통해 원리를 '아는 것'이 소임임.

- 공학자 (Engineer): 최종 목표는 '실용적 구현 및 문제 해결'임. 원리를 이용해 무언가를 만들며 "어떻게 만들 것인가? (How?)"라는 질문을 바탕으로 무언가를 '하는 것'이 궁극적인 임무임.

한 줄 정리: 과학자는 자연의 원리를 "아는 것"에 집중하고, 공학자는 그 지식으로 문제를 해결하고 무언가를 "하는 것"이다.

3) 시대별 핵심 역량의 변화

- 20세기 산업사회: 수학, 물리 등 기초 학문에 대한 이해 및 활용 능력, 개인의 분석적 사고 능력을 바탕으로 주어진 문제를 정확하고 빠르게 해결하는 것이 중요했음.

- 21세기 AI 시대: 기초 과학을 넘어 판단력, 창의력, 예측 능력이 요구됨. 다학제적 팀워크와 AI 도구와의 협업, 스스로 문제를 인식하고 정의하는 능력이 핵심임.

4) 현대 공학자의 실무 소양 (ABEEK 기준)

- 기초 지식 응용 외에도 문제 인식 및 정의, 데이터 분석, 의사소통 등을 반드시 갖추어야 함.

- 더 쉽게 말하면: 혼자 코딩만 하는 '독불장군'이 아니라, 기획자나 AI 에이전트와 원활하게 소통하며 최적의 결과를 이끌어내는 '오케스트라 지휘자'의 역량이 필요함.

2. 공학적 창의성의 올바른 이해

1) 창의성에 대한 오해와 진실

- 창의성에 대한 치명적 오해: 현실의 제약 조건을 무시하고 무조건 기발하고 엉뚱한 아이디어만 도출하는 것이라는 착각.

- 실무 예시: 출근길 꽉 막힌 도로에서 "자동차가 하늘을 날면 좋겠다"라고 생각하는 것은 당장의 교통 문제를 해결해주지 못하는 허황된 공상임.

- 올바른 진실 (창의 실용): 창의적 발상을 통해 '현실적인 제약 속에서 실용적인 결과를 얻는 것'이 공학적 창의성의 본질임.

- 실무 예시: 하늘을 나는 차 대신, "AI를 활용해 실시간 교통량 데이터를 분석하고 가장 덜 막히는 우회 경로를 내비게이션에 즉각 반영하자"고 접근하는 것이 진짜 공학적 창의성임.

2) 공학적 창의성의 4단계 플로우차트

- 목적 지향적으로 최적해를 찾는 논리적 흐름임.

① 문제 인식: 주어진 문제가 아니라, 스스로 일상의 비효율을 발견함.

② 문제 정의: 정보 수집/분석으로 근본 원인을 찾아 진짜 문제(Real Problem)를 정의함.

③ 아이디어 도출 및 점검: 참신한 대안을 만들고, '현실적 제약 조건' 내에서 해결 가능한지 판별함.

④ 실용적 해결: 도출된 최적해로 실제 문제를 혁신적으로 해결함.

한 줄 정리: 공학적 창의성은 허황된 공상이 아니라, 현실의 제약을 뚫고 실용적인 최적해를 찾아내는 '목적 지향적 설계'이다.

| [학습코너] 실무 성찰 : 일상을 뒤집는 시선 |

| --- |

| 마르셀 뒤샹의 "샘(Fountain)"은 평범한 남성용 소변기에 서명만 해서 출품한 작품으로, 창의성이 새로운 것을 무에서 유로 만들어내는 것만이 아니라 '일상을 새로운 눈으로 보는 것'임을 시사합니다. [잠깐! 나의 실무에 적용해보기] 여러분의 현재 업무나 일상에서 '불편함'을 당연하게 여기고 참고 넘어갔던 경험이 있나요? 불평 대신 그 이면의 원인을 찾아보는 것, 그것이 바로 우리가 인식해야 할 '공학 문제'의 출발점입니다. 오늘 하루, 주변의 비효율을 낯선 시선으로 관찰해 봅시다. |

| [AI 실전] 트리즈로 질문하라 : 현실적 제약을 설정하라 |

| --- |

| 일반인의 질문 (Bad): "출근길에 차가 너무 막혀. 문제 좀 해결해 줘." (결과: "대중교통을 이용하세요", "일찍 출발하세요" 같은 뻔한 답변 도출) 숙련자의 질문 (Good): "나는 현대 공학자야. 출근길 교통 체증 문제를 해결해야 해. 공학적 창의성의 핵심인 [현실적인 인프라 제약]과 [실용성]을 엄격히 적용해 줘. 하늘을 나는 차 같은 허황된 아이디어는 제외하고, 현재의 스마트폰 데이터와 AI를 결합하여 당장 도입할 수 있는 실용적인 소프트웨어 관점의 해결책을 3가지 제안해." 프롬프트 지휘 결과 : 공학적 창의성의 핵심인 현실적 제약을 명확히 설정하자, AI가 비현실적인 아이디어 대신 즉시 적용 가능한 실용적 해결책(예: 실시간 마이크로 경로 분산 시스템)을 제시했다. 이는 전공 이론이 AI를 효과적으로 통제하고, 현실성 있는 결과를 이끌어내는 지휘 역할을 한다는 점을 보여준다. |

| 평가하기 |

| --- |

| 1. 공학자와 과학자의 소임에 대한 설명으로 가장 적절한 것은? ① 과학자의 소임이 자연의 원리를 '하는 것'이라면, 공학자의 소임은 '아는 것'이다. ② 두 직업 모두 자연의 원리를 규명하는 것을 최우선 임무로 삼는다. ③ 과학자의 소임이 '아는 것'이라면, 공학자의 소임은 이를 바탕으로 실용적인 무언가를 '하는 것'이다. ④ 공학자는 오직 수학적 계산만을 수행하며 현실의 문제는 과학자가 해결한다. 정답 : ③ 해설 : 과학자의 소임이 자연의 원리를 '아는 것(Why)'이라면, 공학자의 소임은 그 지식을 바탕으로 현실의 공학 문제를 해결하고 무언가를 '하는 것(How)'입니다. 2. 21세기 지식기반사회 공학자의 기본 소양으로 거리가 먼 것은? ① 수학, 물리 등 기초 학문에 대한 이해 및 활용 능력 배제 ② 판단력, 창의력, 예측 능력 ③ 팀워크 능력 및 다학제적 의사소통 능력 ④ 기술 환경 변화에 따른 자기주도적 평생학습 능력 정답 : ① 해설 : 21세기 공학자는 기초 학문에 대한 분석적 사고력(20세기 소양)을 완전히 배제하는 것이 아니라, 이를 기본으로 갖춘 상태에서 판단력, 창의력, 의사소통 능력 등을 추가로 갖추어야 합니다. 3. 공학적 창의성에 대한 올바른 이해로 가장 적절하지 않은 것은? ① 주어진 제약 조건과 현실을 무시하고 허황되더라도 기발한 아이디어를 도출하는 것이 핵심이다. ② 정보 수집과 분석을 통해 근본 원인을 파악하여 진짜 문제(Real Problem)를 정의하는 능력이다. ③ 창의적 발상 도구를 활용하여 현실에 적용할 수 있는 실용적인 결과를 얻어내는 목적 지향적 활동이다. ④ 새롭게 도출된 아이디어로 실제 공학 문제를 해결할 때 비로소 진정한 의미를 가진다. 정답 : ① 해설 : 창의성은 주어진 현실과 제약 조건을 무시해도 된다는 것은 대표적인 오해입니다. 허황된 아이디어는 실용성이 없어 올바른 공학적 문제 해결을 방해합니다. |

| 학습정리 |

| --- |

| 1) 공학의 정의와 공학자의 임무: 공학은 인간의 삶을 개선하기 위한 실용적 학문이며, 공학자는 문제를 찾아 최적의 솔루션을 '실행(하는 것)'하는 임무를 가짐. 2) 21세기 AI 시대 공학자의 필수 소양: 기초 지식 응용을 넘어 스스로 문제를 정의하는 능력, AI 도구 협업 및 다학제적 팀워크 능력이 필수적임. 3) 공학적 창의성의 올바른 이해: 단순한 공상이나 기발함이 아니라, 현실의 제약 조건 내에서 실용적인 최적해를 창출하는 목적 지향적인 문제 해결 능력임. |
`,expected:{case_id:"CASE-01",name:"1주차 1강 — 공학과 창의성",status:"golden",source_of_truth:["rules.json.reference_case","VDF6_instruction_source.md > 1차 테스트"],strict:{block_count:7,image_count:3,blocks:[{id:"B1",info_type:"정의",track:"image",card:"B",semantic_subject:"캡슐 커피머신"},{id:"B2",info_type:"비교·대조",track:"shape",card:null,semantic_subject:null},{id:"B3",info_type:"비교·대조",track:"shape",card:null,semantic_subject:null},{id:"B4",info_type:"목록",track:"shape",card:null,semantic_subject:null},{id:"B5",info_type:"정의",track:"image",card:"B",semantic_subject:"하늘 나는 차"},{id:"B6",info_type:"정의",track:"image",card:"C",semantic_subject:"우회 경로 대조"},{id:"B7",info_type:"순서·절차",track:"shape",card:null,semantic_subject:null}]},manual_checks:["B2가 배경층 없음인가","이미지 카드의 6줄 프롬프트가 VDF6_rules.md의 고정 문자열을 그대로 사용하는가","본문 소단원 커버리지에 누락이 없는가","실무 성찰·AI 실전·평가·학습정리는 본문 블록으로 추가되지 않는가"],do_not_overfit:["title 문구의 토씨","slots 문장 표현","subject 영문 문장의 토씨"]},readme:`# CASE-01 — 공학과 창의성

상태: **GOLDEN**

VDF 6.0 \`rules.json.reference_case\`와 원본 지시문의 1차 테스트에 동시에 기록된 공식 회귀 케이스다. \`input.md\` 전체를 모델에 제공하되 expected.json은 절대 제공하지 않는다. 핵심은 7블록/3이미지, B2 비이미지 판정, 본문 범위 유지다.
`},{id:"CASE-02",folder:"CASE-02_scamper",name:"13주차 3강 — SCAMPER 실전",status:"PARTIAL_GOLDEN",purpose:"3개 Provider × 최소 2회 재실행 후 공통적으로 안정된 block boundaries를 사람이 승인하면 full golden으로 승격한다.",input:`13주차. 스캠퍼를 활용한 아이디어 도출하기 I

3강. 스캠퍼를 활용한 아이디어 도출 사례

| 학습내용 | 1. 일상 사물의 변신: 클립의 스캠퍼 완벽 해부 2. 첨단 기기의 진화: 스마트폰의 대체(S)와 결합(C) 3. 스마트폰 생태계의 무한 확장: A, M, P, E, R 실전 사례 |

| --- | --- |

| 학습목표 | 스캠퍼 기법을 활용하여 클립과 같은 일상 사물의 디자인과 용도를 혁신하는 과정을 설명할 수 있다. 스마트폰과 타 산업의 기술을 융합하는 결합(C) 및 최신 트렌드를 반영한 대체(S) 사례를 분석할 수 있다. 실무 문제에 스캠퍼의 7가지 질문을 순차적으로 대입하여 구체적인 신제품 기획안을 도출할 수 있다. |

| 마음열기 |

| --- |

| 수석 엔지니어 여러분! 책상 위를 굴러다니는 10원짜리 철사 클립 하나를 어떻게 1,000원짜리 상품으로 만들 수 있을까요? 천재적인 영감이 필요할까요? 아닙니다! 스캠퍼(SCAMPER)라는 7개의 마법 거푸집에 클립을 집어넣기만 하면 됩니다. 찌그러뜨리고, 다른 것과 합치고, 엉뚱한 곳에 써먹다 보면 10원짜리 철사는 아름다운 책갈피가 되기도 하고 지폐를 품은 머니클립이 되기도 합니다. 오늘은 1, 2강에서 배운 스캠퍼 이론이 실제 사물과 스마트폰을 어떻게 진화시키는지, 그 압도적인 실전 사례를 파헤쳐 봅니다! |

1. 일상 사물의 변신 - 클립 개선 사례

1) 클립 개선하기 (S, C, A, M, P, E, R)

- 일상적인 '클립'에 스캠퍼 질문을 대입하여 도출한 새로운 아이디어들은 다음과 같음.

- S (대체하기): 금속이라는 기존 재질을 플라스틱 재질로 대체함.

- C (결합하기): 클립에 끈이나 리본 같은 장식을 결합하여 예쁜 '책갈피'로 활용함.

- A (적용/응용하기): 종이를 끼우는 원리를 지폐(돈)를 보관하는 데 적용하여 '지폐용 클립(머니클립)'을 만듦.

- M (변경/확대하기): 둥근 형태를 변경하여 '하트 모양 클립'을 만들거나, 크기를 거대하게 확대하여 '클립 모양 옷걸이'를 만듦.

- P (용도 변경하기): 서류를 철하는 본래 용도 대신, 여러 개의 클립을 길게 연결하여 크리스마스 '트리 장식'으로 활용함.

- E (제거/축소하기): 일반적인 크기를 극단적으로 축소하여 '초소형 클립'을 만듦.

- R (뒤집기/재배열하기): 클립의 굽은 방향이나 배열 구조를 뒤집어 완전히 새로운 파지력을 가진 집게를 구상함.

2. 첨단 기기의 진화 - 스마트폰 개선 사례

1) 스마트폰 개선하기: S(대체)와 C(결합)

- S (대체하기): 스마트폰에서 재질이나 휴대 방법을 대체하여 신제품을 기획함.

- 재질 대체: 딱딱한 유리를 휘어지는 재질로 대체한 '플렉시블(Flexible) 스마트폰'.

- 휴대 방법 대체: 손에 드는 방식을 손목에 차는 것으로 대체한 '손목시계형 스마트워치'.

- C (결합하기): 이종 산업의 기술을 스마트폰에 강제로 융합하여 혁신을 이룸.

- 자동차 키 결합: 자동차 스마트 키를 따로 휴대할 필요가 없도록 스마트폰 앱이나 칩과 결합함.

- AI 칩셋 결합: 클라우드 서버에 의존하던 방식에 초소형 AI 반도체를 결합하여, 인터넷 없이도 실시간 통역 등을 수행하는 온디바이스 AI(On-Device AI) 폰으로 진화함.

- 호신용/측정기 결합: 위급 상황 시 스프레이가 발사되는 기능이나, 음주 후 자가 측정이 가능한 음주 측정기 센서를 스마트폰 하드웨어에 결합함.

2) 기타 스캠퍼 적용 (A, M, P, E, R)

- A (적용하기): 스마트폰의 모바일 OS 인터페이스를 자동차 디스플레이에 적용하여 스마트카(SDV) 환경을 구축함.

- M (변경/축소하기): 스마트폰의 헬스케어 기능을 극단적으로 축소(Minify)하여 손가락에 착용하는 '스마트 링(Smart Ring)' 폼팩터로 변경함.

- P (용도 변경하기): 중고 스마트폰에 결제 앱을 설치해 소상공인의 POS 결제기로 사용하거나, 카메라 기능을 활용해 AI 홈 CCTV로 용도를 변경함.

- E (제거하기): 물리적 유심을 eSIM으로 전환하거나 충전 단자를 제거하여 100% 무선 환경으로 전환함.

- R (재배열하기): 접는 폰의 힌지 축을 세로에서 가로로 재배열하거나 후면에 작은 디스플레이를 배치해 폰을 열지 않고도 제어할 수 있게 함.

한 줄 정리: 세상에 더 이상 새로운 디자인이 없다고 좌절하지 마라. 철사 클립부터 최첨단 스마트폰까지, 스캠퍼의 7가지 질문만 통과하면 무한한 혁신이 복제된다.

| [학습코너] 실무 성찰 : 포화 상태라는 포기와 핑계 |

| --- |

| 기획자들이 "이 제품은 이미 시장이 포화 상태야"라며 포기할 때, 누군가는 그 포화 상태의 클립 모양을 하트로 바꾸고(M), 돈을 끼우는 용도로 적용(A)하여 새로운 틈새시장을 창조했습니다. [잠깐! 나의 실무에 적용해보기] 여러분이 현재 판매하고 있거나 기획 중인 '가장 지루한 제품(또는 서비스)' 하나를 떠올려 보세요. 그것을 무조건 스마트폰처럼 IT 기기로 만들려 하지 말고, 단순히 색상/크기를 확대(M)하거나 전혀 다른 소비자층에게 용도를 변경(P)해 본다면 어떤 새로운 비즈니스가 탄생할까요? |

| [AI 실전] 트리즈로 질문하라 : 스캠퍼 결합(C)과 용도 변경(P) |

| --- |

| 일반인의 질문 (Bad): "요즘 스마트폰 케이스 디자인이 다 똑같아. 기발하고 독특한 케이스 아이디어 좀 내봐." (결과: '캐릭터 케이스', '가죽 케이스' 등 1차원적이고 뻔한 답변 도출) 숙련자의 질문 (Good): "나는 모바일 액세서리 기획자야. 뻔한 스마트폰 케이스에 [스캠퍼(SCAMPER) 기법]을 대입해 줘. 1. [C(결합하기)]: 여성들의 호신용품 기술과 폰 케이스를 물리적으로 결합한 디자인. 2. [P(용도 변경하기)]: 낡아서 버리는 폰 케이스 여러 개를 연결하여 일상생활의 다른 용도로 재활용하는 디자인. 이 두 가지를 구체적인 제품 스펙으로 기획해." 프롬프트 지휘 결과 & 교수자 리뷰: 단순히 독특한 걸 요구하면 색깔만 바꿉니다. 하지만 스캠퍼의 [결합(C)]과 [용도 변경(P)]을 강제하자, AI는 "볼륨 버튼을 3초 이상 누르면 상단에서 호신용 페퍼 스프레이가 분사되는 디펜스 케이스(C)"와 "버려지는 젤리 케이스들을 가열 압착하여 친환경 충격 흡수 바닥 매트로 재활용하는 모델(P)"이라는 완벽한 혁신 기획안을 제시했습니다. |

| 평가하기 |

| --- |

| 1. 클립의 종이를 끼우는 원리를 지폐(돈)를 보관하는 데 활용하여 '지폐용 클립(머니클립)'을 만든 것은 스캠퍼의 어떤 원리를 적용한 것인가? ① C (Combine - 결합하기) ② A (Adapt - 적용/응용하기) ③ E (Eliminate - 제거하기) ④ P (Put to other uses - 용도 변경하기) 정답 : ② 해설 : 종이를 집는 클립의 원리와 기능을 돈이라는 다른 대상과 조건에 '적용/응용(Adapt)'하여 새로운 가치를 창출한 훌륭한 사례입니다. 2. 평범한 타원형 클립의 모양을 변경하여 '하트 모양 클립'을 만들거나, 크기를 크게 키워서 '클립 모양 옷걸이'를 만든 스캠퍼의 원리는 무엇인가? ① M (Modify/Magnify - 변경/확대하기) ② S (Substitute - 대체하기) ③ R (Reverse - 뒤집기) ④ C (Combine - 결합하기) 정답 : ① 해설 : 형태(모양)를 바꾸거나(Modify), 크기를 거대하게 키우는(Magnify) 것은 모두 M 원리에 해당하는 발상법입니다. 3. 스마트폰 사용자가 자동차 키를 따로 휴대할 필요가 없도록 스마트폰 시스템에 자동차 키 기능을 합친 것은 스캠퍼의 어떤 원리를 적용한 것인가? ① E (Eliminate - 제거하기) ② A (Adapt - 적용하기) ③ P (Put to other uses - 용도 변경하기) ④ C (Combine - 결합하기) 정답 : ④ 해설 : 스마트폰이라는 IT 기기와 자동차 키라는 별개의 시스템/목적을 하나로 합쳐서(Combine) 시너지를 낸 완벽한 결합 혁신 사례입니다. |

| 학습정리 |

| --- |

| 1) 일상 사물의 변신 - 클립: 금속을 플라스틱으로 대체(S)하고, 머니클립으로 응용(A)하며, 트리 장식으로 용도 변경(P)하는 등 단순한 제품도 7가지 질문을 통해 새로운 가치를 만들 수 있음. 2) 첨단 기기의 진화 - 스마트폰 S/C: 딱딱한 유리를 휘어지는 재질로 대체(S)하고, 자동차 키 및 온디바이스 AI 칩과 결합(C)하며 스마트폰의 하드웨어와 폼팩터를 진화시킴. 3) 스마트폰 생태계의 확장 - A/M/P/E/R: 자동차 환경 적용(A), 스마트 링 축소(M), POS·CCTV 용도 변경(P), 물리적 유심·단자 제거(E), 힌지·디스플레이 재배열(R)로 활용 영역을 확장함. |
`,expected:{case_id:"CASE-02",name:"13주차 3강 — SCAMPER 실전",status:"partial_golden",source_of_truth:["rules.json.field_test","rules.json rules R4/R9 and card A conditional fragments"],historical_observation:{blocks:5,images_planned:4,note:"초기 field test 관측값. 이후 규칙 보강이 있었으므로 strict block/image 정답으로 사용하지 않는다."},strict:{schema_valid:!0,scope_excludes:["학습목표","마음열기","실무 성찰","AI 실전","평가하기","학습정리"]},rule_invariants:["클립의 같은 기본형 변형은 same_form_variants=true가 되어야 한다.","대체 유형은 replacement_type=true이며 기준점+변형(N+1)을 보존해야 한다.","크기 변화가 학습 포인트인 항목은 scale_is_the_point=true를 검토해야 한다.","스마트폰·스마트워치 등은 branded_category=true가 되어야 한다.","분류·계층이 둘 이상이면 카드 A로 분류 경계를 지우지 않는다.","카드 element_cap 초과 시 일부만 표현하지 않고 split을 사용한다.","노트에 없는 사물을 발명하지 않는다."],golden_promotion_rule:"3개 Provider × 최소 2회 재실행 후 공통적으로 안정된 block boundaries를 사람이 승인하면 full golden으로 승격한다."},readme:`# CASE-02 — SCAMPER 실전

상태: **PARTIAL GOLDEN**

기존 VDF 6.0 field test의 근거 강의다. 초기 5블록/4이미지 관측은 규칙 개선 이전 결과도 섞여 있으므로 strict 정답으로 사용하지 않는다. 대신 N+1 기준점, same-form, scale, branded, 분류 경계, element cap/split 같은 이미 검증된 규칙을 회귀 검증한다.
`},{id:"CASE-03",folder:"CASE-03_engineering_design",name:"1주차 3강 — 창의적 공학 설계",status:"CANDIDATE",purpose:"block segmentation + 분류·계층 + 순서·절차 + 실무 예시 분리 여부를 검증하는 신규 Golden 후보",input:`1주차. 창의성과 공학 설계

3강. 창의적 공학 설계

| 학습내용 | 1. 공학설계 2. 다양한 문제 해결 프로세스 3. 창의적 공학설계 프로세스 |

| --- | --- |

| 학습목표 | 공학설계의 개념을 정의하고 주요 특징을 설명할 수 있다. 다양한 문제 해결 프로세스의 종류를 나열하고 비교할 수 있다. 창의적 공학설계 5단계 프로세스와 단계별 활용 도구를 실무에 적용할 수 있다. |

| 마음열기 |

| --- |

| 수석 엔지니어 여러분, 환영합니다! 요즘 챗GPT나 미드저니 같은 AI를 쓰면 프롬프트 한 줄에 멋진 결과물이 뚝딱 나오죠? 그래서인지 '이제 복잡한 설계 과정은 필요 없는 거 아냐?'라고 생각하기 쉽습니다. 하지만 실무는 다릅니다. 과정이 생략된 결과물은 현실의 벽(비용, 안전, 기술적 모순)에 부딪히면 와르르 무너지게 되죠. 탄탄한 건축물에 설계도가 필수이듯, AI가 던져주는 무수한 아이디어를 현실로 구현하려면 '구조화된 프로세스'가 반드시 필요합니다. 오늘은 공학 문제 해결의 뼈대가 되는 '창의적 공학설계 프로세스'를 완벽히 마스터해 보겠습니다! |

1. 공학설계 및 다양한 문제 해결 프로세스

1) 공학설계

- 공학설계의 정의: 주어진 제한 조건 안에서, 목적에 부합하는(바람직한 기능을 수행하는) 공학적 결과물을 만드는 창조적 의사 결정 과정임.

- 더 쉽게 말하면: 예산, 시간, 기술이라는 '현실적 족쇄'를 차고도 고객이 원하는 기능을 기어코 만들어내는 치밀한 계획 수립 과정임.

- 공학설계의 주요 특징:

- 여러 분야가 연계된 매우 복잡한 과정임.

- 창의성뿐만 아니라 치밀한 분석력이 동시에 필요함.

- 한 번에 끝나는 것이 아니라 상호작용적인 반복 과정을 요구함.

- 정답이 정해져 있지 않은 비구조화되고 개방적인 과정임.

- 공학설계의 구분:

- 설계 심도에 따라: 아이디어 도출 중심의 '개념 설계'와 이를 구체화하는 '상세 설계(제품 설계)'로 나뉨.

- 설계 수준에 따라: 기존 틀을 유지하는 '적응 설계', 발전적인 '개발 설계', 완전히 새로운 '신규 설계'로 나뉨.

- 설계 대상에 따라: 전체 구조를 짜는 '시스템 설계'와 특정 부품만 다루는 '요소 설계'로 구분됨.

- 결과물 변화에 따라: 점진적 개량인 '진화적 설계'와 새로운 시장을 창출하는 '혁신적 설계'로 구분됨.

2) 다양한 문제 해결 프로세스

- 문제 해결을 위해 학계와 기관에서 제시한 다양한 표준 프로세스들이 존재함.

- ABEEK의 6단계 공학설계: 목표 설정 합성 분석 제작 시험 평가.

- 윌리스의 4단계: 인지과학에 기초한 준비 부화 조망 검증 단계.

- 아이작센과 트레핑거의 CPS: 문제 발견부터 아이디어 도출, 실행 계획 수립 및 실행까지의 과정.

- 가나자와 공대 5단계 / 미시간 대학 5단계: 문제 발견/정의 아이디어 도출 최적해 선정 구현 평가로 이어지는 전통적 공학설계의 근간.

2. 창의적 공학설계 프로세스

- 일반 설계와 달리, 첫 단계인 '문제 인식'과 '창의적 발상 도구의 활용'을 강력하게 강조하는 5단계 프로세스임.

- 실무 예시: 자율주행차 개발 시 단순히 코딩(실행)부터 하는 것이 아니라, '탑승자의 멀미'라는 새로운 문제를 인식하고, 트리즈나 스캠퍼를 활용해 아이디어를 도출한 뒤 설계에 들어가는 식임.

1) 창의적 공학설계 5단계 및 활용 도구

- 1단계. 문제 인식:

- 목적(Why)과 목표(What)를 포함한 최초의 문제 정의문을 작성함.

- *주요 도구:* 브레인스토밍, 시스템 사고.

- 2단계. 문제 정의:

- 근본 원인 분석을 통해 '진짜 문제(Real Problem)'를 정의하고 점검함.

- *주요 도구:* 5 Whys, 파레토 도표, 모순 분석.

- 3단계. 개념 설계:

- 해결을 위한 아이디어를 도출하고 평가하여 '최적해'를 선정함.

- *주요 도구:* 스캠퍼(SCAMPER), 발명원리, 분리원리, 마인드맵, ASIT.

- 4단계. 아이디어 실행:

- 상세 설계 및 심사를 거쳐 실제 모형(시제품)을 제작하고 시험함.

- 5단계. 평가:

- 도덕성, 안전성, 기능/성능 등을 검증하는 최종 단계임.

한 줄 정리: 창의적 공학설계는 [문제인식문제정의개념설계실행평가]의 5단계 흐름 속에서 적재적소에 창의적 도구를 무기처럼 꺼내 쓰는 과정이다.

| [학습코너] 실무 성찰 : AI 시대의 'Garbage In, Garbage Out |

| --- |

| 컴퓨터 공학의 유명한 격언 중 "쓰레기를 넣으면 쓰레기가 나온다(GIGO)"라는 말이 있습니다. 아무리 강력한 AI와 뛰어난 코딩 스킬을 가졌어도, 창의적 공학설계의 1~2단계(문제 인식, 문제 정의)가 부실하다면 결과물은 처참할 수밖에 없습니다. [잠깐! 나의 실무에 적용해보기] 최근 진행했던 프로젝트에서, 고객이나 상사가 던져준 '표면적인 요구사항'만 보고 덥석 개발(실행)부터 시작했던 적은 없었나요? 앞으로는 기획 전에 '진짜 문제가 무엇인지(문제 정의)' 한 번 더 의심하는 습관을 가져봅시다. |

| [AI 실전] 트리즈로 질문하라 : 아이디어를 공학적 설계로 바꾸라 |

| --- |

| 일반인의 질문 (Bad): "요즘 잘 팔릴 만한 친환경 텀블러 아이디어 좀 내줘." (결과: "대나무 소재를 쓰세요", "재활용 플라스틱을 쓰세요" 같은 구체적 설계가 빠진 표면적 답변) 숙련자의 질문 (Good): "나는 제품 엔지니어고, 현재 창의적 공학설계 5단계 중 [3단계. 개념 설계]를 진행 중이야. 이전 [문제 정의] 단계에서 '온도를 오래 유지하려면 무거워진다'는 기술적 모순을 발견했어. 이 모순을 해결하기 위해 트리즈의 [발명원리]를 적용한 최적해(개념 설계안)를 3가지 제시해 줘." 프롬프트 지휘 결과 & 교수자 리뷰: AI에게 단순히 아이디어를 구걸하지 않고, 현재 우리가 프로세스 상 어느 위치(개념 설계)에 있는지, 그리고 해결해야 할 진짜 문제(기술적 모순)가 무엇인지 '구조적'으로 지시했습니다. 그 결과 AI는 진공 층을 분할하는 구조 등 실제 도면 설계(상세 설계)로 넘어갈 수 있는 수준 높은 엔지니어링 솔루션을 도출했습니다. |

| 평가하기 |

| --- |

| 1. 공학설계의 특징으로 맞지 않는 것을 고르시오. ① 공학설계는 창의성과 분석력이 필요하다. ② 공학설계는 상호작용적 반복 과정을 요구한다. ③ 공학설계는 비구조화된 과정이다. ④ 공학설계는 폐쇄적인 과정이다. 정답 : ④ 해설 : 공학설계는 외부의 다양한 제약과 요구사항을 수용하며 진행되는 '개방적인 과정(Open-ended process)'입니다. 정답이 딱 하나로 정해진 폐쇄적인 과정이 아닙니다. 2. 창의적 공학설계 프로세스의 절차를 올바른 순서대로 나열한 것은? (가) 개념 설계 (나) 아이디어 실행 (다) 문제 인식 (라) 문제 정의 (마) 평가 ① (다) - (라) - (가) - (나) - (마) ② (다) - (가) - (라) - (마) - (나) ③ (라) - (다) - (가) - (나) - (마) ④ (가) - (다) - (라) - (나) - (마) 정답 : ① 해설 : 창의적 공학설계는 [문제 인식 문제 정의 개념 설계 아이디어 실행 평가]의 5단계 순서로 이루어집니다. 3. 공학설계의 구분에 대한 설명으로 가장 적절한 것은? ① 개념 설계는 이미 만들어진 모형을 바탕으로 시험을 수행하는 단계이다. ② 적응 설계는 지금까지 존재하지 않았던 완전히 새로운 결과물을 만드는 것이다. ③ 상세 설계는 개념 설계 단계에서 도출된 개념적 아이디어를 도면 등으로 구체화하는 단계이다. ④ 요소 설계는 시스템의 전체적인 트리를 구성하는 설계이다. 정답 : ③ 해설 : 상세 설계(제품 설계)는 개념 설계의 아이디어를 도면, 제품 사양 등으로 구체화하는 단계입니다. 완전히 새로운 것은 신규 설계, 전체 트리를 짜는 것은 시스템 설계입니다. |

| 학습정리 |

| --- |

| 1) 공학설계: 주어진 제한 조건 안에서 목적에 부합하는 결과물을 창조하는 복잡하고 개방적인 반복 과정임. 2) 다양한 문제 해결 프로세스: ABEEK 6단계, 미시간 대학 5단계 등 다양한 프로세스가 존재하며, 문제 발견부터 평가에 이르는 공통적인 체계를 가짐. 3) 창의적 공학설계 프로세스: [문제 인식 문제 정의 개념 설계 아이디어 실행 평가]의 5단계로 진행되며, 각 단계별로 트리즈, 스캠퍼 등 적합한 창의적 발상 도구를 접목함. |
`,expected:{case_id:"CASE-03",name:"1주차 3강 — 창의적 공학 설계",status:"candidate",purpose:"block segmentation + 분류·계층 + 순서·절차 + 실무 예시 분리 여부를 검증하는 신규 Golden 후보",strict:{schema_valid:!0,scope_excludes:["학습목표","마음열기","실무 성찰","AI 실전","평가하기","학습정리"]},must_cover_topics:["공학설계의 정의","공학설계의 주요 특징","공학설계의 구분","다양한 문제 해결 프로세스","창의적 공학설계 5단계"],open_judgments:["자율주행차 멀미 실무 예시를 독립 블록으로 분리할지","공학설계의 여러 구분을 하나의 분류·계층 블록으로 둘지 분할할지","여러 표준 문제해결 프로세스를 비교·대조/목록 중 무엇으로 고정할지"],golden_promotion_rule:"3개 Provider × 최소 2회 결과를 비교한 뒤 VDF 6.0 규칙과 교수자 판단으로 expected block map을 Freeze한다."},readme:`# CASE-03 — 창의적 공학 설계

상태: **CANDIDATE**

새 Golden 후보. 정의/목록/분류·계층/순서·절차와 실무 예시가 함께 있어 블록 분할 안정성을 검증하기 좋다. 이 케이스의 block map은 아직 정답으로 Freeze하지 않는다. 3개 Provider를 최소 2회씩 실행한 뒤 사람이 승인한다.
`}],g_=`{
  "version": "6.0.0",
  "spec_ref": "VDF6_사양서_v2.md",
  "generated": "2026-08-20",
  "_meta": {
    "scope": "본강의 본문 시각화만. 표지·학습목표·마음열기·평가·학습정리 제외.",
    "status_legend": {
      "verified": "실제 생성으로 확인됨. evidence 필드에 근거.",
      "unverified": "논리적으로 파생했으나 관측되지 않음. 확정 전.",
      "risky": "실패가 관측됨. 전제 조건 하에서만 사용.",
      "retired": "5.0에서 폐기. 되살리지 않도록 근거와 함께 보존."
    },
    "enforcement_legend": {
      "code": "결정론적. 코드가 판정하거나 문자열을 주입한다.",
      "llm": "의미 판단. LLM 호출 안에서 수행하고 사람이 사후 확인.",
      "human": "정답이 교수자에게 있음. UI에서 선택.",
      "display_only": "화면에 표시만 하고 강제하지 않는다."
    },
    "consumers": {
      "prompt_injection": [
        "info_types",
        "cards",
        "rules",
        "track"
      ],
      "code_lint": [
        "lint",
        "cards[].margin_policy",
        "cards[].model"
      ],
      "ui_display": [
        "rules[].why",
        "open_questions",
        "axes"
      ]
    },
    "note": "전체 논증과 44장 근거는 사양서에 있다. 이 파일은 판정과 조립에 필요한 것만 담는다.",
    "regenerate_markdown": "rules.json이 수정됐다. VDF6_규칙.md를 다시 뽑아야 Custom GPT에 반영된다."
  },
  "output_contract": {
    "unit": "블록",
    "emits": {
      "info_layer": [
        "info_type",
        "item_count",
        "item_structure",
        "slot_text"
      ],
      "background_layer": [
        "card_id",
        "prompt_en"
      ],
      "rationale": "왜 이 조합인지 한 줄"
    },
    "background_layer_nullable": true,
    "layout_selection": {
      "by": "instructor",
      "ai_must_not_emit": true,
      "why": "교과목·교수자마다 다르고 고르는 데 몇 초면 되므로 자동화 이득이 없다. 5.0의 SVG 좌표 생성이 여기서 폐기됐다."
    }
  },
  "track": {
    "test": "label_test",
    "statement": "노드의 라벨을 지웠을 때 남는 게 있으면 이미지, 없으면 도형.",
    "enforcement": "llm",
    "status": "verified",
    "outcomes": {
      "shape": {
        "background_layer": null,
        "identity_of_items": "텍스트 자체",
        "examples": [
          "브레인스토밍 8단계",
          "39가지 6대 분류",
          "아이디어 평가 4단계"
        ]
      },
      "image": {
        "background_layer": "카드 선택으로 진행",
        "identity_of_items": "사물·현상·장치",
        "examples": [
          "항타 단면",
          "엔진 비교",
          "클립 4종"
        ]
      }
    },
    "hard_overrides": {
      "always_shape": [
        "표",
        "수식",
        "정의 목록"
      ],
      "enforcement": "code",
      "why": "생성형으로 만들지 않는다."
    },
    "retired_criterion": {
      "rule": "노드 5개 이상이면 SVG",
      "status": "retired",
      "why": "8단계 절차는 노드 8개인데 도형이고, 항타 단면은 노드 2개인데 이미지다. 개수는 기준이 아니었다."
    }
  },
  "info_types": {
    "_note": "레이아웃 이름이 아니라 정보의 성질. 교과목이 바뀌어도 변하지 않는다.",
    "sequence": {
      "ko": "순서·절차",
      "signals": [
        "단계",
        "순서",
        "~후에",
        "프로세스"
      ],
      "output_format": "번호 | 명칭 | 설명",
      "observed": true,
      "example": {
        "slots": [
          "1 | 문제 인식 | 스스로 일상의 비효율을 발견함",
          "2 | 문제 정의 | 근본 원인을 찾아 진짜 문제를 정의함",
          "3 | 아이디어 도출 | 대안을 만들고 제약 안에서 판별함"
        ],
        "source": "1주차 · 공학적 창의성의 4단계",
        "tell": "순서를 바꾸면 뜻이 달라진다"
      }
    },
    "hierarchy": {
      "ko": "분류·계층",
      "signals": [
        "상위-하위",
        "~로 나뉨",
        "유형"
      ],
      "output_format": "대분류 | 하위항목 목록",
      "observed": false,
      "note": "1주차 1강에서 미사용. Q2 참조.",
      "example": {
        "slots": [
          "S 대체 | 유리 → 플렉시블 / 손에 드는 방식 → 손목형",
          "C 결합 | 자동차 키 기능 / 온디바이스 AI"
        ],
        "source": "13주차 · 스마트폰의 대체와 결합",
        "tell": "항목이 두 무리 이상으로 묶인다. 카드 A를 쓰면 그 경계가 사라진다"
      }
    },
    "comparison": {
      "ko": "비교·대조",
      "signals": [
        "반면",
        "~와 달리",
        "장단점"
      ],
      "output_format": "항목 | A값 | B값",
      "observed": true,
      "example": {
        "slots": [
          "질문 방식 | 일반인: 기발한 아이디어 요구 | 숙련자: S와 C 조건을 강제",
          "결과 경향 | 일반인: 일반적 결과 | 숙련자: 조건에 맞춘 파생 아이디어"
        ],
        "source": "SCAMPER 차시 · 일반 질문과 스캠퍼 질문",
        "tell": "두 대상을 같은 잣대로 잰다. 잣대가 왼쪽 열이 된다"
      }
    },
    "causal": {
      "ko": "인과·수렴",
      "signals": [
        "따라서",
        "그 결과",
        "~로 이어짐"
      ],
      "output_format": "원인 → 중간 → 결과",
      "observed": false,
      "note": "1주차 1강에서 미사용. Q2 참조.",
      "example": {
        "slots": [
          "동전 사용의 불편",
          "결제 수단을 무엇으로 대체할지 질문",
          "신용카드로 대체한 스마트 주차 요금 징수기"
        ],
        "source": "SCAMPER 차시 · 스마트 주차 요금 징수기",
        "tell": "앞이 뒤를 낳는다. 화살표로 이어붙이지 말고 원소로 쪼갠다"
      }
    },
    "definition": {
      "ko": "정의",
      "signals": [
        "~란",
        "~을 의미함"
      ],
      "output_format": "용어 | 정의문",
      "observed": true,
      "example": {
        "slots": [
          "SCAMPER | 사물·서비스·프로세스를 새로운 것으로 변형하기 위한 9가지 아이디어 변형 기법"
        ],
        "source": "SCAMPER 차시 · 스캠퍼의 의미",
        "tell": "용어 하나에 뜻 하나. 여러 개면 목록이다"
      }
    },
    "list": {
      "ko": "목록",
      "signals": [
        "특징",
        "요소",
        "규칙"
      ],
      "output_format": "항목 배열",
      "note": "순서 없음",
      "observed": true,
      "example": {
        "slots": [
          "S | Substitute · 대체하기",
          "C | Combine · 결합하기",
          "A | Adapt · 적용/응용하기"
        ],
        "source": "SCAMPER 차시 · 7가지 구성 요소",
        "tell": "순서를 바꿔도 뜻이 그대로다. 바뀌면 순서·절차다"
      }
    }
  },
  "ending_style": {
    "rule": "대학 템플릿의 어미 규칙(명사형 ~음/~함, 마침표 없음 또는 종결형 통일)이 원문 verbatim보다 우선한다.",
    "constraint": "어미만 바꾸고 내용어는 그대로 둔다.",
    "enforcement": "llm",
    "status": "unverified",
    "open_question": "Q4"
  },
  "background_layer": {
    "usage_split": {
      "content_image": {
        "role": "슬라이드 안의 한 요소",
        "text_on_top": "얹지 않거나 최소",
        "brightness": "자유",
        "cards": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ]
      },
      "background_image": {
        "role": "슬라이드를 덮음",
        "text_on_top": "반드시 얹힘",
        "brightness": "밝고 저채도 필수",
        "cards": [
          "F"
        ],
        "why": "템플릿 색에 맞출 필요가 없다. 어차피 덮기 때문이다. 대신 그 위에 얹힐 텍스트가 읽혀야 한다."
      }
    },
    "deck_style_defaults": {
      "background_a_scene": "soft light gradient, low saturation, high key, subtle floor reflection",
      "background_b_asset": "uniform solid light-gray seamless background",
      "accent": "교과목 템플릿의 대표색 1종",
      "lighting": "soft diffused key from upper-left",
      "ratio": "16:9",
      "reserved_space": {
        "right_pct": [
          35,
          40
        ],
        "right_why": "교수자 영상",
        "bottom_pct": [
          8,
          10
        ],
        "bottom_why": "출처 캡션"
      }
    }
  },
  "negative_blocks": {
    "_note": "정식 블록. 미검증 카드(D·E·F)와 신규 카드에 쓴다. 검증된 카드는 verbatim_locked 문자열을 유지한다.",
    "text_free_canonical": "text-free, no readable text, no letters, no numbers, no labels, no captions, no formulas, no UI text, no logos, no brand names, no recognizable real-world products, no license plates",
    "kill_background": "plain seamless background, background elements barely visible, no environmental detail, no crowd, no cityscape, no floating UI panels",
    "no_decorative_glow": "no decorative HUD rings, no floating data readouts, no sci-fi interface overlays",
    "unbranded_triplet": [
      "unbranded",
      "no app icons",
      "no screen content"
    ]
  },
  "cards": {
    "A": {
      "ko": "에셋세트 · 무배경",
      "safest": true,
      "use_when": [
        "같은 것의 여러 변형",
        "같은 사물의 단계별 부품",
        "기준점 + 변형"
      ],
      "element_cap": 4,
      "representative": [
        "클립 4종",
        "칫솔모 4분할",
        "비행기+밥솥 스케치",
        "건물·폰·게이트"
      ],
      "model": {
        "primary": "gemini",
        "alternatives_allowed": true,
        "why": "나란한 배열이라 3사 모두 대상 구현 성공"
      },
      "margin_policy": {
        "right_presenter": {
          "in_prompt": false,
          "handled_by": "ppt_left_align",
          "why": "배경이 단색이라 PPT에서 좌측으로 밀면 끝난다. 3사 중 1사만 지켰고, 지켜도 안 지켜도 결과가 같았다."
        },
        "bottom_caption": {
          "in_prompt": true,
          "in_line": "composition",
          "fragment": "lower 10% clear",
          "why": "출처 캡션 자리. 우측 여백과 달리 삭제하지 않았다."
        },
        "text_overlay": {
          "in_prompt": false
        }
      },
      "verbatim_locked": true,
      "status": "verified",
      "evidence": "2026-08, 13주차 3강 클립 4종, 3사 비교. 의미 전달은 ChatGPT가 가장 정확(하트조차 클립 형태 유지).",
      "prompt": {
        "subject": "{{SUBJECT}}",
        "subject_example": "four variations of a paper clip, all clearly made from the same bent wire form, each repurposed as a different object, evenly spaced in a single row, three-quarter angle",
        "background": "uniform solid light-gray seamless background",
        "composition": "a single row, lower 10% clear",
        "style": "premium 3D educational render, matte materials, soft directional key light from upper-left, no baked shadows",
        "ratio": "16:9",
        "negative": "text-free, no readable text, no letters, no numbers, no labels, no logos, no brand names, no overlapping objects, no environmental props"
      },
      "conditional_fragments": [
        {
          "id": "identical_scale",
          "fragment": "identical scale",
          "include_when": "형태 변화가 학습 포인트",
          "exclude_when": "크기 변화가 학습 포인트",
          "enforcement": "llm",
          "status": "verified",
          "examples": {
            "include": [
              "S",
              "C",
              "A",
              "M"
            ],
            "exclude": [
              "E 축소",
              "M 확대"
            ]
          }
        },
        {
          "id": "baseline_plus_one",
          "rule": "'A를 B로 대체' 유형은 A를 함께 그린다. 변형 N개면 기준점 1개를 더해 N+1개.",
          "why": "대체 후만 그리면 무엇이 바뀌었는지 보이지 않는다.",
          "enforcement": "llm",
          "status": "verified",
          "evidence": "13주차 클립(금속→플라스틱), 스마트폰(유리→플렉시블) 둘 다 이 문제가 있었다."
        },
        {
          "id": "unbranded",
          "fragment_ref": "negative_blocks.unbranded_triplet",
          "include_when": "브랜드 연상이 강한 대상군은 항상. 휴대기기·웨어러블·차량·가전·컴퓨터.",
          "enforcement": "code_inject",
          "status": "verified",
          "evidence": "2026-08, 13주차 3강 스마트폰 S. 3사 모두 무기명 기기 생성, 화면 콘텐츠 없음.",
          "note": "조건 판단을 LLM에 맡겼더니 누락됐다(FT-1). 대상군 목록으로 강제한다.",
          "fragment_full": "unbranded, no app icons, no screen content, no brand logos, generic design"
        },
        {
          "id": "same_form_anchor",
          "fragment": "all clearly made from the same bent wire form",
          "template": "all clearly made from the same [기본형]",
          "include_when": "같은 사물의 변형을 나열할 때. 카드 A의 기본 용법이므로 사실상 항상.",
          "why": "빠지면 마지막 항목이 별개 제품이 된다(FT-1 B1).",
          "status": "verified",
          "n": 1,
          "enforcement": "llm"
        }
      ],
      "do_not_use_when": [
        "정보 유형이 분류·계층이고 분류가 둘 이상일 때 — 한 줄에 놓으면 분류 경계가 사라진다(FT-3)",
        "서로 다른 사물을 병렬로 늘어놓을 때 — '여러 항목 병렬'을 그렇게 읽지 않는다. 같은 사물의 변형이어야 한다(R4)."
      ],
      "element_cap_policy": "항목 수가 4를 넘으면 블록을 쪼갠다(R9). 일부만 그리지 않고, 상한도 넘기지 않는다.",
      "element_cap_unit": "의미 단위 (element_cap_semantics 참조)",
      "representative_image": {
        "file": "클립 4종",
        "note": "기준점(금속) + 변형 3. N+1 규칙이 적용된 상태.",
        "status": "good"
      }
    },
    "B": {
      "ko": "개념 · 단일 오브젝트 · 무배경",
      "use_when": [
        "추상 원리를 한 컷으로",
        "대비되는 두 상태를 한 오브젝트에"
      ],
      "element_cap": 3,
      "element_min": 1,
      "constraint": "하나하나가 의미를 가져야 함",
      "representative": [
        "저울+카드",
        "파란 링 스택",
        "반반 구체",
        "큐브+튜브+쿠션"
      ],
      "model": {
        "primary": "gemini",
        "alternatives_allowed": false,
        "why": "6요소 모두 준수. ChatGPT는 무게중심 쏠림, 미드저니는 대상 자체를 틀림"
      },
      "margin_policy": {
        "right_presenter": {
          "in_prompt": false,
          "handled_by": "ppt_left_align",
          "why": "카드 A와 동일"
        },
        "bottom_caption": {
          "in_prompt": true,
          "in_line": "composition",
          "fragment": "lower 10% clear"
        },
        "text_overlay": {
          "in_prompt": false
        }
      },
      "verbatim_locked": true,
      "status": "verified",
      "evidence": "2026-08, 1주차 1강 캡슐 커피머신, 3사 비교.",
      "prompt": {
        "subject": "{{SUBJECT}}",
        "subject_example": "a balance scale, tilted, a plain gray card on the raised pan and a vivid accent-colored card with a check badge on the lowered pan",
        "background": "uniform solid light-gray seamless background, subtle floor reflection",
        "composition": "the object centered, lower 10% clear",
        "style": "premium 3D educational render, matte materials, soft key light",
        "ratio": "16:9",
        "negative": "text-free, no readable text, no labels, no environmental detail, no decorative HUD rings, no floating data readouts",
        "negative_gap": "카드 B의 네거티브에는 no brand names가 없다(카드 A에만 있음). branded_category가 true인 대상을 카드 B로 그릴 때는 조각으로 보강해야 한다."
      },
      "conditional_fragments": [
        {
          "id": "superseded_gray",
          "fragment": "the superseded items rendered in flat desaturated gray, clearly unused",
          "include_when": "과거/현재 대비를 그릴 때",
          "enforcement": "llm",
          "status": "unverified",
          "note": "테스트에서 우연히 잘 나온 것이라 명시 효과는 아직 확인되지 않았다."
        },
        {
          "id": "unbranded",
          "fragment_full": "unbranded, no app icons, no screen content, no brand logos, generic design",
          "include_when": "branded_category == true",
          "enforcement": "code_inject",
          "why": "카드 A에만 있던 조각을 전 카드로 확장. B11에서 스마트폰이 카드 B로 들어오며 드러났다.",
          "status": "derived"
        }
      ],
      "element_cap_policy": "상한 초과 시 R9에 따라 블록을 쪼갠다.",
      "element_cap_unit": "의미 단위 (element_cap_semantics 참조)",
      "representative_image": {
        "file": "캡슐 커피머신",
        "note": "의미 단위 2 — 드립 도구 무더기 / 기계. 우측 40% 비어 있음.",
        "status": "good"
      }
    },
    "C": {
      "ko": "조건 대조 · 좌우 분할",
      "use_when": [
        "조건 A와 B의 결과 차이가 학습 포인트"
      ],
      "element_cap": 3,
      "constraint": "좌우가 같은 앵글·같은 스케일이어야 비교 성립",
      "representative": [
        "항타 단면",
        "엔진 2분할",
        "밸 스위치",
        "하마 온천"
      ],
      "difficulty": "카드 중 가장 어렵다. 3사 모두 완벽하지 않았다.",
      "model": {
        "primary": "gemini",
        "alternatives_allowed": false,
        "why": "요소 간 관계가 학습 내용. 3회 모두 유일하게 여백까지 준수"
      },
      "margin_policy": {
        "right_presenter": {
          "in_prompt": true,
          "in_line": "composition",
          "fragment": "the right 40% is empty background",
          "why": "배경이 이어져 후편집 불가"
        },
        "bottom_caption": {
          "in_prompt": false,
          "status": "gap",
          "note": "덱 기본값은 하단 8~10% 비움인데 C 프롬프트에 없다. 검증된 문자열이라 임의로 넣지 않는다."
        },
        "text_overlay": {
          "in_prompt": false
        }
      },
      "verbatim_locked": true,
      "status": "verified_after_fix",
      "evidence": "2026-08, 1주차 1강 교통 대조. 반복 실패 2건을 수정해 현재 문자열이 됨.",
      "prompt": {
        "subject": "{{SUBJECT}}",
        "subject_example": "two identical soil cross-sections side by side, exactly the same number of elements on each side, left with a smooth pile driven down showing cool stress lines, right with a rough pile showing dense friction lines",
        "background": "plain seamless background, environment barely visible",
        "composition": "both halves sit on one single continuous unbroken floor plane with no seam or line between them, identical camera angle and scale, the pair grouped within the left 60% of the frame, the right 40% is empty background",
        "style": "premium 3D educational render, accent glow carrying the data only",
        "ratio": "16:9",
        "negative": "text-free, no readable text, no labels, no decorative HUD rings"
      },
      "mandatory_fragments": [
        "identical camera angle and scale"
      ],
      "fix_log": [
        {
          "was": "no vertical divider bar",
          "failure": "3사 중 2사가 분리선을 그림",
          "now": "one single continuous unbroken floor plane",
          "principle": "부정형 → 긍정형"
        },
        {
          "was": "same number of cars",
          "failure": "3사 모두 개수 불일치",
          "now": "exactly N items on each side",
          "principle": "숫자 명시"
        }
      ],
      "element_cap_policy": "상한 초과 시 R9에 따라 블록을 쪼갠다.",
      "element_cap_unit": "의미 단위 (element_cap_semantics 참조)",
      "representative_image": {
        "file": "교통 대조 (최초본)",
        "note": "가운데 세로 분리선이 보인다. 이것이 fix_log의 실패 사례이며 \`one single continuous unbroken floor plane\`으로 고친 계기다.",
        "status": "known_defect",
        "use_as": "카드 C가 왜 어려운지 보여주는 반례로 함께 쓴다"
      },
      "conditional_fragments": [
        {
          "id": "unbranded",
          "fragment_full": "unbranded, no app icons, no screen content, no brand logos, generic design",
          "include_when": "branded_category == true",
          "enforcement": "code_inject",
          "why": "카드 A에만 있던 조각을 전 카드로 확장. B11에서 스마트폰이 카드 B로 들어오며 드러났다.",
          "status": "derived"
        }
      ]
    },
    "D": {
      "ko": "장치 작동 · 단일 · 맥락 배경",
      "use_when": [
        "장치의 작동 맥락이 학습 포인트일 때"
      ],
      "note": "배경이 정당한 유일한 경우",
      "element_cap": 2,
      "constraint": "장치 + 작동 표시 하나",
      "representative": [
        "청소기 흡입"
      ],
      "model": {
        "primary": "gemini",
        "alternatives_allowed": false,
        "status": "unverified",
        "why": "규칙 ⑥에서 파생. A·B·C만 테스트함. Q6 참조."
      },
      "margin_policy": {
        "right_presenter": {
          "in_prompt": true,
          "in_line": "composition",
          "fragment": "right 40% empty"
        },
        "bottom_caption": {
          "in_prompt": false,
          "status": "gap"
        },
        "text_overlay": {
          "in_prompt": false
        }
      },
      "verbatim_locked": false,
      "status": "unverified",
      "prompt": {
        "subject": "{{SUBJECT}}",
        "subject_example": "a vacuum cleaner head on carpet, airflow arrows drawn into the nozzle showing suction direction",
        "background": "plain seamless background, minimal environment barely visible",
        "composition": "low angle close-up on the left, right 40% empty",
        "style": "premium 3D educational render, accent glow used only for airflow",
        "ratio": "16:9",
        "negative": "text-free, no readable text, no decorative HUD rings, no floating data readouts, no sci-fi interface overlays"
      },
      "element_cap_policy": "상한 초과 시 R9에 따라 블록을 쪼갠다.",
      "element_cap_unit": "의미 단위 (element_cap_semantics 참조)",
      "conditional_fragments": [
        {
          "id": "unbranded",
          "fragment_full": "unbranded, no app icons, no screen content, no brand logos, generic design",
          "include_when": "branded_category == true",
          "enforcement": "code_inject",
          "why": "카드 A에만 있던 조각을 전 카드로 확장. B11에서 스마트폰이 카드 B로 들어오며 드러났다.",
          "status": "derived"
        }
      ]
    },
    "E": {
      "ko": "순차 패널",
      "use_when": [
        "단계가 3~4개이고 순서 자체가 내용일 때"
      ],
      "representative": [
        "필터 4단계",
        "팽화 공정 3패널"
      ],
      "model": {
        "primary": "gemini",
        "alternatives_allowed": false,
        "status": "unverified",
        "why": "규칙 ⑥에서 파생. Q6 참조."
      },
      "margin_policy": {
        "right_presenter": {
          "in_prompt": false,
          "handled_by": "ppt_left_align",
          "status": "unverified",
          "why": "무배경이므로 A·B에서 파생. 사양서 §6 여백 표에 E가 빠져 있다."
        },
        "bottom_caption": {
          "in_prompt": false,
          "status": "gap",
          "note": "A·B는 lower 10% clear가 있는데 E만 없다. 같은 무배경 카드인데 불일치."
        },
        "text_overlay": {
          "in_prompt": false
        }
      },
      "verbatim_locked": false,
      "status": "risky",
      "risk": "AI 단독으로 어렵다. 잘 나온 사례는 후편집으로 라벨을 얹은 것이다.",
      "precondition": "라벨 없는 패널만 요청하고, 번호와 설명은 PPT에서 얹는다.",
      "open_question": "Q1",
      "prompt": {
        "subject": "{{SUBJECT}}",
        "subject_example": "the same cylindrical filter housing shown four times in a row, identical angle and scale, differing only in internal state",
        "background": "uniform solid light-gray seamless background",
        "composition": "four evenly spaced panels in one row, no dividers",
        "style": "technical illustration, consistent cutaway style across all four",
        "ratio": "16:9",
        "negative": "text-free, no readable text, no numbers, no step labels, no arrows between panels"
      },
      "conditional_fragments": [
        {
          "id": "unbranded",
          "fragment_full": "unbranded, no app icons, no screen content, no brand logos, generic design",
          "include_when": "branded_category == true",
          "enforcement": "code_inject",
          "why": "카드 A에만 있던 조각을 전 카드로 확장. B11에서 스마트폰이 카드 B로 들어오며 드러났다.",
          "status": "derived"
        }
      ]
    },
    "F": {
      "ko": "배경 이미지 (슬라이드를 덮음)",
      "use_when": [
        "텍스트가 주인공이고 이미지는 무대"
      ],
      "element_cap": 2,
      "element_min": 1,
      "constraint": "정보를 실으려 하면 안 됨. 밝고 저채도가 필수 — 위에 얹힐 텍스트가 읽혀야 한다.",
      "representative": [
        "복도 조명선",
        "브레인스토밍 준비 4요소의 사무실 사진"
      ],
      "model": {
        "primary": "gemini_app",
        "alternatives_allowed": false,
        "status": "verified",
        "why": "같은 프롬프트·같은 대상에서 Flow보다 일관됐다. 우측 여백 3/4, 중앙 초점 회피, 흐림 준수.",
        "evidence": "2026-08, 12장(Flow 8, 제미나이 4), 대상 3종.",
        "retired_assumption": "'미드저니 가능'은 44장 관찰에서 나온 추정이었고 실제 대조가 없었다. 근거 없이 두지 않는다."
      },
      "margin_policy": {
        "right_presenter": {
          "in_prompt": false,
          "note": "슬라이드를 덮으므로 교수자 영상 여백 개념이 다르게 적용된다."
        },
        "bottom_caption": {
          "in_prompt": false
        },
        "text_overlay": {
          "in_prompt": true,
          "in_line": "background",
          "fragment": "large empty area for text overlay",
          "why": "F의 여백은 텍스트가 얹힐 자리다. C·D의 여백과 목적이 다르다."
        }
      },
      "verbatim_locked": false,
      "status": "verified",
      "predicted_failure": {
        "where": "composition",
        "status": "rejected_confirmed",
        "prediction": "부정형 구도(no vertical seam / no split-screen / no panel division)가 카드 C처럼 무시되어 화면이 갈라질 것",
        "result": "2026-08, 2개 표면 6장. Flow/나노바나나 프로 4장(A2·B2) + 제미나이 2장(A1·B1). 분할 0/6.",
        "interpretation": "분할 압력은 프롬프트가 아니라 대상에서 나온다. 카드 C의 대상은 좌우 두 장면이라 분할 압력이 있었고, 카드 F의 대상은 단일 장면이라 애초에 없다. 규칙 R8이 틀린 게 아니라 F에는 적용될 상황이 없었다.",
        "action": "현재 부정형 문자열 유지. 교체 이득이 관측되지 않았고, 바꾸면 검증 기준선만 흔들린다.",
        "open": "분할 네거티브 3종이 일하는지 사문인지는 여전히 미확인. 분할 압력이 없는 대상만 시험했다."
      },
      "prompt": {
        "subject": "{{SUBJECT}}",
        "subject_example": "an empty office desk scene, softly out of focus",
        "background": "high key, low saturation, large empty area for text overlay",
        "composition": "one continuous seamless background, no vertical seam, no split-screen, no panel division",
        "style": "soft natural light, muted palette",
        "ratio": "16:9",
        "negative": "text-free, no readable text, no informational elements, no charts, no diagrams, no HUD, no strong focal point in the center"
      },
      "evidence": "2026-08, 14장(Flow 8, 제미나이 6), 대상 3종. 분할 0/14. 제미나이 고정 + 조건부 조각 2종으로 사용 가능한 결과.",
      "findings": [
        {
          "id": "F-1",
          "claim": "F의 품질 변수는 요소 수가 아니라 선명도다.",
          "status": "unverified",
          "n": 12,
          "evidence": "공구 6개 이상이어도 흐리면 사용 가능. 요소가 적어도 앞쪽 물체가 선명하면 사용 불가.",
          "conflict": "사양서 카드 F의 '요소 1~2' 상한과 어긋난다."
        },
        {
          "id": "F-2",
          "claim": "\`softly out of focus\`는 배경에만 적용되고 앞쪽 물체에서 깨진다.",
          "status": "verified_and_fixed",
          "n": 13,
          "evidence": "Flow 사무실 1장 선명 실패, Flow 작업대 1장 경계선, 제미나이 작업대 2장 모두 앞쪽 공구가 선명. 표면 2곳·대상 2종에서 반복.",
          "unresolved": "FIX-2(everything softly out of focus, shallow depth of field throughout, no sharp object anywhere) 미시험.",
          "resolved_by": "conditional_fragments.blur_everything"
        },
        {
          "id": "F-3",
          "claim": "빈 영역 위치를 지정하지 않으면 결과가 표면에 좌우된다.",
          "status": "unverified",
          "n": 12,
          "evidence": "제미나이 3/4가 우측을 비움. Flow 8/8이 흩어짐.",
          "note": "FIX-1로 해소 가능함이 관측됨(n=1). 기본 문자열은 그대로 두고 조건부 조각으로 붙인다."
        },
        {
          "id": "F-4",
          "claim": "표면 차이가 실재한다. 같은 프롬프트·같은 대상에서 결과가 갈린다.",
          "status": "verified",
          "n": 12,
          "evidence": "복도 — Flow 정중앙 소실점 2/2, 제미나이 좌측 비낀 앵글로 우측 50% 빔. 대상과 프롬프트가 동일했다.",
          "implication": "카드 F의 모델을 고정해야 한다. 규칙 R6이 F에도 적용된다."
        }
      ],
      "candidate_fixes": [
        {
          "id": "FIX-1",
          "target": "background",
          "current": "large empty area for text overlay",
          "candidate": "the left 55% is plain empty wall with no objects",
          "addresses": "F-3",
          "tested": true,
          "priority": "high",
          "rationale": "F-3이 verified로 올라감. 위치를 적지 않으면 빈 영역이 대상마다 다른 곳에 생긴다.",
          "status": "provisional_pass",
          "n": 1,
          "result": "2026-08 제미나이, 작업대. 좌측 55%가 빈 벽으로 나오고 공구·선반·드릴프레스가 전부 우측으로 밀렸다.",
          "control": "직전 동일 대상·동일 표면·이전 문자열에서는 배경 선반이 화면을 채워 텍스트 자리가 없었다. 첫 줄이 같으므로 차이는 2번째 줄에서 나왔다.",
          "caveat": "n=1. 대조군이 있어 근거는 있으나 확정은 아니다."
        },
        {
          "id": "FIX-2",
          "target": "style",
          "candidate": "everything softly out of focus, shallow depth of field throughout, no sharp object anywhere",
          "addresses": "F-1, F-2",
          "tested": true,
          "note": "요소 상한을 거는 대신 선명도를 강제하는 쪽. F-1이 맞다면 이게 옳은 방향이다.",
          "status": "pass",
          "n": 1,
          "result": "2026-08 제미나이, 작업대. 앞쪽 대패·망치의 질감이 사라지고 형태만 남았다. 직전 장(동일 대상·표면·FIX-1 적용, FIX-2 없음)에서는 같은 공구가 또렷했다.",
          "side_effect": "공구가 우측 하단으로 더 밀려 빈 영역이 좌측 55%에서 3분의 2 가까이 넓어졌다. n=1, 기록만.",
          "interaction": "FIX-1과 충돌하지 않는다. 좌측 빈 벽이 유지됐다."
        }
      ],
      "element_cap_note": "사양서의 '요소 1~2'는 F-1과 충돌한다. 다음 테스트에서 FIX-2가 통하면 상한을 선명도 조건으로 교체한다.",
      "surface_comparison": {
        "flow_nano_banana_pro": {
          "n": 4,
          "split": 0,
          "blur_ok": 3,
          "empty_area_consistent": false,
          "frame_variance": "큼"
        },
        "gemini_app": {
          "n": 2,
          "split": 0,
          "blur_ok": 2,
          "empty_area_consistent": true,
          "frame_variance": "작음"
        },
        "caveat": "모델 계열이 같을 가능성이 크다. 표면·설정(2장 동시생성, 16:9 강제) 차이일 수 있고 표본도 불균형이다.",
        "unresolved": "제미나이 쪽 프롬프트에 네거티브 줄이 포함됐는지 미확인. 미포함이었다면 '네거티브 없이도 된다'는 별개 결과가 된다."
      },
      "subject_constraints": {
        "exclude": [],
        "note": "'복도 제외' 판정을 철회했다. §reversals 참조.",
        "hard_cases": [
          {
            "pattern": "작업면에 공구·부품이 흩어지는 장면",
            "examples": [
              "작업대"
            ],
            "problem": "빈 영역이 뚜렷하게 생기지 않고 앞쪽 물체가 선명해지기 쉽다.",
            "evidence": "Flow 2장은 우측/상단으로 갈렸고, 제미나이 1장은 빈 자리가 불명확하며 대패가 선명했다.",
            "status": "unverified",
            "n": 3,
            "action": "FIX-1을 이 대상에 먼저 시험한다."
          }
        ]
      },
      "reversals": [
        {
          "id": "REV-1",
          "was": "복도·터널 등 중앙 소실점 대상은 카드 F에서 제외 (verified, n=2)",
          "now": "철회. 제미나이 복도는 소실점이 좌측으로 비껴 우측 50%가 비었고 카드 F로 사용 가능했다.",
          "cause": "Flow 2장만 보고 대상 속성으로 귀속했다. 표면 속성이었다.",
          "date": "2026-08"
        },
        {
          "id": "REV-2",
          "was": "빈 영역 위치는 프롬프트가 아니라 대상이 결정한다 (F-3, verified)",
          "now": "약화. 제미나이는 대상 3종 중 3장에서 우측을 비웠고 Flow는 8장 내내 흩어졌다. 대상보다 표면이 크다.",
          "cause": "REV-1과 같다. Flow 8 대 제미나이 2의 불균형 표본.",
          "date": "2026-08"
        },
        {
          "meta": "두 번 다 같은 실수다. 표본이 많은 표면의 특성을 대상의 특성으로 읽었다. 이후 대상 규칙은 표면을 고정한 뒤에만 세운다."
        }
      ],
      "conditional_fragments": [
        {
          "id": "empty_side_explicit",
          "replaces": "large empty area for text overlay",
          "fragment": "the left 55% is plain empty wall with no objects",
          "in_line": "background",
          "include_when": "사물이 화면 전체에 퍼지는 대상(작업대·선반·공방 등) 또는 이전 시도에서 빈 자리가 안 나온 경우",
          "exclude_when": "사물이 자연히 한쪽에 모이는 대상(책상·복도). 지시를 덜 넣는 쪽이 낫다.",
          "side_note": "left/right는 교수자 템플릿의 텍스트 위치에 맞춘다. 검증된 것은 '위치를 지정하면 지켜진다'이지 좌측이 아니다.",
          "status": "provisional",
          "n": 1,
          "enforcement": "llm"
        },
        {
          "id": "blur_everything",
          "appends_to": "style",
          "fragment": "everything softly out of focus, shallow depth of field throughout, no sharp object anywhere",
          "include_when": "앞쪽에 물체가 놓이는 대상. 사실상 대부분의 F 대상.",
          "why": "subject 줄의 \`softly out of focus\`는 배경에만 걸리고 앞쪽 물체에서 깨진다(F-2). style 줄에서 다시 강제해야 한다.",
          "status": "verified",
          "n": 14,
          "enforcement": "llm"
        },
        {
          "id": "unbranded",
          "fragment_full": "unbranded, no app icons, no screen content, no brand logos, generic design",
          "include_when": "branded_category == true",
          "enforcement": "code_inject",
          "why": "카드 A에만 있던 조각을 전 카드로 확장. B11에서 스마트폰이 카드 B로 들어오며 드러났다.",
          "status": "derived"
        }
      ],
      "open_items": [
        "요소 상한 '1~2'가 F-1과 충돌한 채로 남아 있다. 흐림이 해결되면서 실무상 문제는 줄었으나 사양서 문구는 아직 그대로다."
      ],
      "element_cap_policy": "상한 초과 시 R9에 따라 블록을 쪼갠다.",
      "element_cap_unit": "의미 단위 (element_cap_semantics 참조)",
      "representative_image": {
        "file": "작업대 · 좌측 55% 빈 벽",
        "note": "조건부 조각 2종(위치 명시 + 전체 흐림)이 적용된 상태.",
        "status": "good"
      }
    }
  },
  "rules": {
    "R1_kill_background": {
      "ko": "해석·비유 개념이면 배경을 죽인다",
      "why": "44장 최대 발견. 밀도보다 무대가 품질을 더 크게 좌우한다.",
      "trigger": "function == 해석·비유",
      "action": {
        "element_cap": 2,
        "inject": "negative_blocks.kill_background"
      },
      "enforcement": "llm + code",
      "status": "verified",
      "evidence": "배경 죽임(저울+카드, 파란 링 스택, 반반 구체, 뇌→신경망) = 요소 1~3, 학습포인트 복원 가능. 배경 살림(저울 광장, 창문 벽, 주방+요리사모자) = 전부 요소 4+, 복원 어려움."
    },
    "R2_text_is_ppt_layer": {
      "ko": "모든 텍스트는 PPT 레이어. 예외 없음",
      "action": {
        "inject": "negative_blocks.text_free_canonical",
        "always": true
      },
      "enforcement": "code",
      "status": "verified",
      "evidence": "1~3주차에서 'SPAIL', 'BROOTH' 같은 깨진 글자. 한글은 애초에 불가능. 잘 나온 것들(필터 4단계, 카트 포개기)은 전부 후편집으로 라벨을 얹은 것.",
      "sub_rule_branded_products": {
        "ko": "그리지 않는 것은 브랜드지 사물이 아니다",
        "test": "형태가 왜곡됐을 때 오개념이 되는가",
        "generate_ok": {
          "examples": [
            "휘어지는 판형 기기",
            "손목에 찬 기기",
            "캡슐 커피머신"
          ],
          "inject": "negative_blocks.unbranded_triplet"
        },
        "stock_photo": {
          "examples": [
            "특정 모델의 내부 구조·부품 배치"
          ],
          "when": "특정 모델의 구조를 배우는 경우에만"
        },
        "enforcement": "llm_detect + code_inject",
        "status": "verified",
        "evidence": "2026-08, 13주차 3강 스마트폰 S. 3사 모두 무기명 기기 생성."
      }
    },
    "R3_glow_carries_information": {
      "ko": "글로우·이펙트는 정보를 전달할 때만",
      "informational": [
        "청소기 흡입 화살표",
        "항타 응력장",
        "엔진 지면 간격 치수선"
      ],
      "decorative": [
        "못에 얹힌 홀로그램 링",
        "창문 벽의 HUD"
      ],
      "action": {
        "inject_when_decorative_risk": "negative_blocks.no_decorative_glow"
      },
      "enforcement": "llm + code",
      "status": "verified",
      "why": "장식 이펙트는 요소 수만 올리고 학습 포인트를 가린다."
    },
    "R4_analogy_gate": {
      "ko": "비유는 그릴 사물이 좁혀질 때만 그린다",
      "test": "그릴 대상이 (a) 구체적 사물 하나 또는 (b) 같은 사물의 변형 N개로 좁혀지는가. 둘 중 하나가 아니면 기각.",
      "if_yes": "이미지",
      "if_no": "정보층 텍스트로 둔다",
      "hard_constraint": "없는 사물을 만들어내지 않는다.",
      "enforcement": "llm",
      "status": "verified_and_stable",
      "priority": "highest",
      "why": "이것이 §7 '해석·비유 + 살아있는 배경 + 요소 4+'의 원인이다. 대상이 안 좁혀지니 배경으로 도망가고, 그래서 요소가 늘어난다. 증상이 아니라 원인에서 막는다.",
      "failure_pattern": "노트에 그릴 사물이 없는데 AI가 '투명 구체 두 개' 같은 것을 발명해내는 것. 노트 외 창작이며, 44장에서 무너진 것들이 정확히 이 패턴이다.",
      "examples": {
        "narrows": {
          "cases": [
            "클립 4종",
            "저울+카드",
            "칫솔모 4분할"
          ],
          "draws": "클립 하나 / 저울 하나"
        },
        "does_not_narrow": {
          "cases": [
            "주방+요리사모자",
            "창문 벽",
            "저울 광장",
            "동전 펀치기+포도주 압착기+인쇄기",
            "전화기+음악재생기+통신기기+스마트폰"
          ],
          "draws": "재료·도구·책·전구·모자 …",
          "pattern_2": {
            "name": "서로 다른 사물 여러 개",
            "why": "각각은 구체적이지만 하나로 모이지 않는다. 한 컷에 넣으면 요소 수만 늘고 학습 포인트가 흩어진다.",
            "evidence": "2026-08 동일 노트 2회 실행에서 판정이 뒤집혔다. 1회차는 기각('서로 다른 사물이 함께 필요해 좁혀지지 않음'), 2회차는 통과('세 구체 장치로 명확히 좁혀짐'). 같은 사실을 반대로 읽었다.",
            "ruling": "기각이 옳다. 규칙 R4는 '구체적인가'가 아니라 '하나로 좁혀지는가'를 묻는다."
          }
        }
      },
      "evidence": "1주차 1강 B2('아는 것 vs 하는 것')를 처음에 이미지로 잡았다가 뺐다. 노트에 그릴 사물이 없어 AI가 대상을 발명해야 했다.",
      "not_sufficient": "각 사물이 구체적이라는 것만으로는 통과가 아니다. 서로 다른 사물이 여러 개 필요하면 기각한다."
    },
    "R5_images_per_lecture": {
      "ko": "차시당 이미지 3~4장",
      "type": "눈금",
      "not": "상한",
      "guidance": "본강의 블록이 7개면 3개 안팎이 적정. 넘어가면 규칙 R4를 통과하지 못한 블록이 섞여 있을 가능성이 높다.",
      "enforcement": "display_only",
      "status": "leaning_delete",
      "caveat": "44÷39로 추정한 것이지 관측된 값이 아니다. 블록 수가 차시마다 다른데 절대 개수로 눈금을 주는 것이 맞는지 아직 모른다.",
      "resolution": "차시를 몇 개 더 돌려 유용성이 확인되면 확정, 아니면 삭제.",
      "open_question": "Q7",
      "diversity_quota": {
        "enabled": false,
        "behavior": "같은 카드가 3회 연속이면 화면에 표시만 하고, 바꾸라고 하지 않는다. 판단은 교수자가 한다.",
        "why": "5.0의 '형태 분포 자기검증'이 시계추를 만든 지점이다. 쿼터 로직을 코드에 넣지 않음으로써 준수한다."
      },
      "field_data": "13주차 SCAMPER 5블록 4장, 수정 반영 시 6장. 1주차 7블록 3장. 블록 대비 비율도 차시마다 다르다."
    },
    "R6_model_pinning": {
      "ko": "카드마다 모델을 고정한다",
      "evidence": "동일 프롬프트를 3사에 3회 돌린 결과(카드 A·B·C), 구도 지시 준수에 일관된 차이가 있었다.",
      "enforcement": "code",
      "status": "verified_for_ABC",
      "hard_constraint": "프롬프트에 모델을 두 개 적지 않는다. '또는 X' 금지.",
      "midjourney_note": "약점은 배열이 아니라 관계다. 카드 B(위/아래 대응)와 C(좌/우 대응)에서는 대상 자체를 틀렸지만, 카드 A처럼 요소가 나란히 놓이는 경우는 제대로 그렸다. 44장 중 미드저니 산출물이 전부 카드 F 계열이었던 것과 일치한다.",
      "midjourney_variance": "4프레임 중 일부만 맞는 경우가 반복됐다(클립 4종의 색·형태 편차, 손목형이 반지로 나온 프레임 2개). 고를 수 있다는 장점이자 매번 검수가 필요하다는 단점이다.",
      "open_question": "Q6"
    },
    "R7_margin_by_card": {
      "ko": "여백은 종류별로 다르게 처리한다",
      "why": "사양서 §6은 여백을 한 덩어리로 다뤘으나 실제로는 세 종류다. 카드 A·B에서 삭제된 것은 우측(교수자 영상)뿐이고 하단 10%(출처 캡션)는 남아 있다. 목적이 다르므로 따로 판정한다.",
      "enforcement": "code",
      "status": "verified",
      "margin_kinds": {
        "right_presenter": {
          "purpose": "교수자 영상 자리",
          "spec_default": "우측 35~40%",
          "in_prompt_cards": [
            "C",
            "D"
          ],
          "ppt_handled_cards": [
            "A",
            "B",
            "E"
          ],
          "status": "verified"
        },
        "bottom_caption": {
          "purpose": "출처 캡션 자리",
          "spec_default": "하단 8~10%",
          "in_prompt_cards": [
            "A",
            "B"
          ],
          "missing_cards": [
            "C",
            "D",
            "E",
            "F"
          ],
          "status": "gap",
          "note": "덱 기본값과 카드 프롬프트가 어긋난다. 미해결."
        },
        "text_overlay": {
          "purpose": "텍스트가 얹힐 자리",
          "in_prompt_cards": [
            "F"
          ],
          "status": "unverified"
        }
      }
    },
    "R8_prompt_grammar": {
      "ko": "핵심 구도는 긍정형으로",
      "why": "'하지 마라'는 무시되는 빈도가 높다.",
      "enforcement": "lint",
      "status": "verified",
      "pairs": [
        {
          "weak": "no vertical divider bar",
          "strong": "one single continuous unbroken floor plane"
        },
        {
          "weak": "same number of cars",
          "strong": "exactly eight cars on each side"
        }
      ],
      "scope_limit": "네거티브 목록은 부정형 그대로 둔다. 지금까지 실패가 관측되지 않았고, 한 번에 다 바꾸면 무엇이 효과를 냈는지 알 수 없어진다.",
      "scope_note": "카드 F에서는 재현되지 않았다. 부정형이 약한 게 아니라 F의 대상에 분할 압력이 없어 시험될 상황이 아니었다. 규칙은 '분할 압력이 있는 대상에서 핵심 구도는 긍정형으로'가 더 정확하다."
    },
    "R9_cap_overflow": {
      "ko": "항목 수가 카드 요소 상한을 넘으면 블록을 쪼갠다",
      "why": "일부만 그리면 PPT 텍스트와 이미지 요소가 어긋나 학습자가 대응시킬 수 없다(FT-2).",
      "resolution": "split",
      "rejected_alternative": "상한을 넘겨 한 줄에 다 그리는 안. 이미지 품질이 떨어지고 카드 A의 검증 조건을 벗어난다.",
      "procedure": "항목을 의미 단위로 나눠 서브블록 N개를 만든다. 각 서브블록은 자체 슬롯 텍스트와 자체 이미지를 갖는다. 슬라이드도 나뉜다.",
      "side_effect": "차시당 이미지 수가 늘어난다. 규칙 R5의 눈금과 부딪히는 또 하나의 근거.",
      "enforcement": "code_detect + human_confirm",
      "status": "decided",
      "date": "2026-08",
      "example": {
        "block": "13주차 B5 A·M·P·E·R",
        "items": 5,
        "cap": 4,
        "split": [
          "B5-1 A·M·P (3항목)",
          "B5-2 E·R (2항목)"
        ]
      }
    }
  },
  "lint": {
    "forbidden_prompt_words": {
      "words": [
        "transparent",
        "alpha"
      ],
      "severity": "error",
      "why": "모델이 가짜 체크무늬 배경을 그린다.",
      "status": "verified"
    },
    "forbidden_model_disjunction": {
      "patterns": [
        " or midjourney",
        " or gemini",
        " or chatgpt",
        "또는"
      ],
      "scope": "model 필드",
      "severity": "error",
      "why": "규칙 R6. 모델을 두 개 적지 않는다."
    },
    "require_explicit_count": {
      "applies_to": [
        "C"
      ],
      "pattern": "exactly {N} .* on each side",
      "severity": "error",
      "why": "'same number of X'는 3사 모두 개수 불일치. 숫자를 명시한다."
    },
    "require_mandatory_fragments": {
      "applies_to": [
        "C"
      ],
      "fragments": [
        "identical camera angle and scale"
      ],
      "severity": "error",
      "why": "좌우 대칭이 깨지면 비교가 무의미해진다."
    },
    "text_free_present": {
      "applies_to": [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
      ],
      "must_contain": "text-free",
      "severity": "error",
      "why": "규칙 R2. 예외 없음."
    },
    "margin_consistency": {
      "check": "margin_policy의 각 종류별로 in_prompt == true 이면 in_line 이 가리키는 줄에 fragment 문자열이 실제로 있을 것. false 이면 없을 것.",
      "severity": "warning",
      "kinds": [
        "right_presenter",
        "bottom_caption",
        "text_overlay"
      ],
      "note": "세 종류를 한 boolean으로 묶지 않는다. 목적이 달라 처리도 다르다."
    },
    "positive_form_composition": {
      "check": "composition 줄이 전부 'no ~'로만 구성돼 있으면 경고",
      "severity": "warning",
      "why": "규칙 R8. 카드 C의 'no vertical divider bar'가 이 패턴으로 실패했다. 현재 카드 F가 여기 걸린다.",
      "scope_limit": "네거티브 목록(negative 줄)은 검사 대상이 아니다."
    },
    "verbatim_lock": {
      "check": "verbatim_locked == true 인 카드의 prompt 문자열 변경 시 status를 unverified로 되돌릴 것",
      "severity": "error",
      "why": "검증된 문자열을 고치면 검증이 무효가 된다."
    },
    "unverified_badge": {
      "check": "status != verified 인 카드·규칙은 UI에 미검증 표시",
      "severity": "info"
    }
  },
  "do_not_use": [
    {
      "what": "해석·비유 + 살아있는 배경 + 요소 4+",
      "why": "저울 광장, 창문 벽, 주방. 학습 포인트 복원 불가"
    },
    {
      "what": "이미지 내 텍스트",
      "why": "깨진 글자. 한글 불가"
    },
    {
      "what": "만화 + 대사",
      "why": "영문만 가능, 교정 부담 큼"
    },
    {
      "what": "AI 생성 도표",
      "why": "표·목록·수식은 도형/텍스트"
    },
    {
      "what": "장식 글로우",
      "why": "요소 수만 올림"
    },
    {
      "what": "SVG 좌표 생성",
      "why": "교수자가 템플릿에서 고르는 게 빠름"
    },
    {
      "what": "노트에 없는 사물 발명",
      "why": "규칙 R4. 무너진 이미지들의 공통 원인"
    },
    {
      "what": "인물 비유 (독불장군 vs 지휘자 등)",
      "why": "44장에 성공 사례 없음. 텍스트로"
    }
  ],
  "retired_from_5": [
    {
      "what": "레지스터 R1/R2/R3 (정밀/개념/사람)",
      "why": "44장 어디에도 세 갈래 톤이 없었다. 사실상 단일 스타일의 변주"
    },
    {
      "what": "형태 F1~F5 배타 선택",
      "why": "실제 슬라이드 절반이 이미지 위 텍스트. 배타가 아니었다"
    },
    {
      "what": "노드 5개 이상이면 SVG",
      "why": "개수는 기준이 아니었다. 라벨 테스트로 대체"
    },
    {
      "what": "Deck Style Contract를 AI가 발행",
      "why": "색·타이틀바·위계·어미 규칙이 대학 템플릿에 이미 있음"
    },
    {
      "what": "Exemplar 트랙 (이미지 내 텍스트)",
      "why": "1~3주차에서 깨진 글자 다수. 한글 불가"
    },
    {
      "what": "게이트 G1~G11 자기채점",
      "why": "관측 불가능한 지시였음. 코드 판정 + 사람 확인으로 대체"
    },
    {
      "what": "SVG 좌표 생성 / 레이아웃 지목",
      "why": "교수자가 템플릿에서 고르는 게 빠르고 정확"
    }
  ],
  "axes": {
    "_note": "내부 표현. 교수자에게 노출하지 않는다. 카드 선택과 규칙 파생의 근거로만 쓴다.",
    "function": {
      "values": [
        "재현",
        "조직화",
        "해석·비유",
        "장식·무대"
      ],
      "distribution_44": [
        11,
        10,
        17,
        6
      ]
    },
    "stage": {
      "values": [
        "무배경",
        "배경있음"
      ],
      "note": "배경이 품질의 최대 예측 변수"
    },
    "composition": {
      "values": [
        "단일",
        "순차패널",
        "대조패널",
        "에셋세트",
        "조감·단면"
      ],
      "distribution_44": [
        15,
        4,
        15,
        7,
        3
      ]
    },
    "density": {
      "values": [
        1,
        2,
        3,
        "4+"
      ],
      "note": "무대에서 상한 파생"
    },
    "glow": {
      "values": [
        "없음",
        "정보전달",
        "장식"
      ],
      "note": "장식은 금지"
    }
  },
  "reference_case": {
    "id": "1주차 1강 (공학과 창의성)",
    "blocks_total": 7,
    "images": 3,
    "blocks": [
      {
        "id": "B1",
        "title": "공학의 본질",
        "info_type": "definition",
        "card": "B",
        "subject": "캡슐 커피머신"
      },
      {
        "id": "B2",
        "title": "과학자 vs 공학자",
        "info_type": "comparison",
        "card": null,
        "subject": null,
        "note": "처음에 이미지로 잡았다가 뺐다. 규칙 R4가 여기서 나왔다."
      },
      {
        "id": "B3",
        "title": "시대별 역량",
        "info_type": "comparison",
        "card": null,
        "subject": null
      },
      {
        "id": "B4",
        "title": "실무 소양",
        "info_type": "list",
        "card": null,
        "subject": null
      },
      {
        "id": "B5",
        "title": "창의성의 오해",
        "info_type": "definition",
        "card": "B",
        "subject": "하늘 나는 차"
      },
      {
        "id": "B6",
        "title": "창의 실용",
        "info_type": "definition",
        "card": "C",
        "subject": "우회 경로 대조"
      },
      {
        "id": "B7",
        "title": "창의성 4단계",
        "info_type": "sequence",
        "card": null,
        "subject": null
      }
    ]
  },
  "open_questions": [
    {
      "id": "Q1",
      "q": "카드 E(순차패널)를 AI로 만들 것인가",
      "how": "다음 차시에 한 번 시도",
      "state": "open"
    },
    {
      "id": "Q2",
      "q": "정보 유형 6종이 실제 노트를 다 덮는가",
      "how": "차시 누적",
      "state": "partial",
      "note": "13주차에서 목록·인과수렴·분류계층 사용. 6종 중 5종 관측됨.",
      "resolution": "1주차에서 정의·비교대조·목록·순서절차, 13주차에서 목록·인과수렴·분류계층. 6종 중 6종 관측. 부족한 유형은 아직 없음."
    },
    {
      "id": "Q3",
      "q": "대표 이미지의 원본 프롬프트 확보",
      "how": "있으면 카드 템플릿을 실제 문구로 교체",
      "state": "open"
    },
    {
      "id": "Q4",
      "q": "어미 규칙과 verbatim 충돌 시 처리",
      "how": "실제 사례 나오면 판단",
      "state": "open"
    },
    {
      "id": "Q5",
      "q": "좌측 60% 그룹핑이 더 잘 먹히는가",
      "state": "closed",
      "resolution": "무배경 카드는 여백 지시 자체가 불필요"
    },
    {
      "id": "Q6",
      "q": "카드 D·E·F도 제미나이가 최선인가",
      "how": "A·B·C만 테스트함",
      "state": "open",
      "note": "F는 제미나이로 고정 완료. D·E는 여전히 미검증."
    },
    {
      "id": "Q7",
      "q": "차시당 이미지 3~4장 눈금이 유용한가",
      "how": "규칙 R5 참조",
      "state": "leaning_delete",
      "note": "13주차 SCAMPER는 5블록 중 4장. 눈금이 차시 성격에 좌우된다는 증거. R9 채택으로 이미지 수가 더 늘어난다. 눈금 삭제 근거가 하나 더.",
      "resolution": "SCAMPER 차시는 5블록 중 4장이고, FT-2·FT-3을 반영해 블록을 쪼개면 6장이 된다. 절대 개수 눈금이 차시 성격을 못 담는다. 다음 차시에서도 어긋나면 삭제."
    },
    {
      "id": "Q8",
      "q": "카드 E의 여백 처리를 A·B와 같이 둘 것인가",
      "how": "사양서 §6 여백 표에 E가 누락돼 있어 파생값으로 넣었다. Q1과 같이 확인.",
      "state": "open",
      "new_in_rules_json": true
    },
    {
      "id": "Q9",
      "q": "하단 출처 캡션 여백(lower 10% clear)을 C·D·E·F에도 넣을 것인가",
      "how": "덱 기본값은 하단 8~10% 비움인데 A·B에만 문구가 있다. C는 검증된 문자열이라 넣으면 재검증 필요.",
      "state": "open",
      "new_in_rules_json": true
    },
    {
      "id": "Q10",
      "q": "카드 F의 상한을 요소 수에서 선명도로 바꿀 것인가",
      "how": "FIX-2를 다음 F 대상에 적용해 A/B",
      "state": "closed",
      "new_in_rules_json": true,
      "note": "F-2가 verified로 올라감. FIX-2 시험이 남은 마지막 F 항목.",
      "resolution": "FIX-2 통과. 요소 상한을 흐림 조건으로 대체하는 방향이 맞았다. 사양서 §6의 '요소 1~2' 문구 수정 필요."
    },
    {
      "id": "Q11",
      "q": "카드 F의 분할 네거티브 3종이 일하고 있는가 사문인가",
      "how": "분할 압력이 있는 F 대상이 나올 때 빼고 돌려본다",
      "state": "open",
      "priority": "low",
      "new_in_rules_json": true,
      "note": "F가 닫히므로 우선순위 유지. 분할 압력이 있는 F 대상이 나올 때만."
    },
    {
      "id": "Q12",
      "q": "카드 F에서 Flow와 제미나이 앱의 차이가 모델인가 설정인가",
      "how": "같은 표면에서 표본을 맞춰 재시행. 제미나이 프롬프트의 네거티브 포함 여부부터 확인.",
      "state": "closed",
      "new_in_rules_json": true,
      "note": "추가 4장도 Flow였다. 제미나이 앱 대조는 여전히 n=2.",
      "resolution": "표면 차이 실재. 카드 F를 제미나이 앱으로 고정."
    },
    {
      "id": "Q13",
      "q": "사양서 §6의 카드 F 대표 사례에서 '복도 조명선'을 내릴 것인가",
      "how": "복도 2/2가 중앙 소실점. 44장의 원본 복도 슬라이드가 어떻게 만들어졌는지 확인 필요(후편집일 수 있음).",
      "state": "closed",
      "new_in_rules_json": true,
      "resolution": "복도는 F 대표 사례로 유지. 제외 판정 철회(REV-1)."
    },
    {
      "id": "Q14",
      "q": "작업대류 대상에서 FIX-1이 빈 영역을 만들어내는가",
      "how": "제미나이 앱, 작업대, 2번째 줄만 교체해 2장",
      "state": "closed",
      "new_in_rules_json": true,
      "resolution": "FIX-1 통과. 조건부 조각으로 등록."
    },
    {
      "id": "Q15",
      "q": "reference_case가 없는 차시에서도 챗GPT가 §7-1 수준으로 나오는가",
      "how": "다음 차시 노트를 같은 Gem/GPT 구성으로 1회",
      "state": "closed",
      "priority": "high",
      "new_in_rules_json": true,
      "resolution": "reference_case 제거 후에도 챗GPT는 6종 정확·커버리지 6/6·규칙 R4 작동. 오히려 더 엄격해졌다."
    },
    {
      "id": "Q16",
      "q": "제미나이에서 rules.json을 못 읽는 것인가 안 지키는 것인가",
      "how": "cards.A.prompt.style을 그대로 인용시켜 확인. 못 읽는 것이면 카드 프롬프트를 마크다운으로 분리.",
      "state": "closed",
      "note": "오팔이 제미나이 기반이라 이 답이 오팔 채택 여부를 좌우한다.",
      "new_in_rules_json": true,
      "resolution": "못 읽는 쪽. JSON은 미도달, 마크다운은 부분 도달(§3까지). 챗GPT는 마크다운 전체 도달."
    },
    {
      "id": "Q17",
      "q": "B1 캡슐 커피머신과 B5 우회 경로를 이미지로 둘 것인가",
      "how": "§7-1은 이미지, 정답표 없는 챗GPT는 둘 다 텍스트로 판정. 교수자 판단 필요.",
      "state": "open",
      "note": "규칙이 실제 제작보다 엄격해진 것인지, §7-1이 느슨했던 것인지.",
      "new_in_rules_json": true
    },
    {
      "id": "Q18",
      "q": "카드 C 대표 이미지를 수정된 문자열로 다시 뽑을 것인가",
      "how": "현재 대표는 수정 전 최초본이라 분리선이 있다. 고친 문자열로 뽑으면 정상본과 반례를 나란히 둘 수 있다.",
      "state": "open",
      "new_in_rules_json": true
    },
    {
      "id": "Q19",
      "q": "동일 노트 재실행 시 판정이 얼마나 흔들리는가",
      "how": "규칙 보강 후 같은 노트로 3회차. 이미지 수와 게이트 판정이 재현되는지.",
      "state": "closed",
      "priority": "high",
      "new_in_rules_json": true,
      "resolution": "3회차에서 재현됨. R4 보강 후 판정이 안정. 다만 검증 절차로 '동일 노트 2회'를 상시 채택한다."
    }
  ],
  "text_model": {
    "decision": "chatgpt",
    "status": "confirmed",
    "date": "2026-08",
    "test": "1주차 1강 노트, 동일 지시문·동일 지식파일(rules.json), 제미나이 Gem(프로 extended) 대 Custom GPT(extended) 1:1.",
    "results": {
      "gemini_gem": {
        "블록수": "8 (오분할)",
        "정보유형": "6종 밖의 명칭을 지어냄(단일 서술·비교·절차/흐름)",
        "프롬프트": "rules.json 미사용. 미드저니 템플릿을 사전지식으로 생성(--ar, --no)",
        "모델": "rules.json에 없는 'Midjourney v6.0'",
        "카드선택": "단일 사물에 카드 A 배정(카드 B가 맞음)",
        "규칙R4": "작동 안 함. 인물 비유(오케스트라 지휘봉)를 이미지로 배정 — 사양서 §7 금지 항목",
        "기타": "실존 작품(뒤샹 「샘」) 재현 지시",
        "판정": "실패"
      },
      "custom_gpt": {
        "블록수": "7 (정확)",
        "정보유형": "6종 내에서만 선택",
        "프롬프트": "카드 B·C 여섯 줄 문자열 일치",
        "모델": "gemini 정확",
        "카드선택": "§7-1과 7/7 일치",
        "규칙R4": "작동. B2를 '대표할 구체 사물 없음'으로 기각, B4의 인물 비유를 명시적으로 배제",
        "기타": "카드 C의 숫자 명시 규칙을 스스로 적용(exactly eight cars on each side)",
        "판정": "통과"
      },
      "gemini_gem_markdown": {
        "블록수": "8 (오분할)",
        "정보유형": "6종 밖의 이름 계속 사용(나열·비교·순서)",
        "프롬프트": "§5 미도달. 미드저니 템플릿 재생성(--ar, --no)",
        "규칙R4": "부분 작동. 인물 비유(오케스트라 지휘자)는 걸러냄 — §3은 읽힘",
        "해석": "마크다운 앞부분은 도달하고 뒷부분(§5 카드)은 도달하지 않는 것으로 보임",
        "판정": "실패"
      },
      "custom_gpt_no_reference_case": {
        "블록수": "6 (정확)",
        "커버리지": "6/6",
        "정보유형": "6종 이름 정확",
        "문자열인용": "§5 카드 B의 style 줄 정확히 인용 확인",
        "규칙R4": "강하게 작동. B5를 '학습 포인트가 자동차나 내비게이션 자체가 아니라 두 사고방식의 대조'로 판정해 배경층 없음으로 내림",
        "note": "정답표를 뺀 뒤 §7-1보다 엄격한 판정이 나왔다. 이전 카드 C 배정은 컨닝이었을 가능성.",
        "판정": "통과"
      }
    },
    "conclusion": "텍스트 판단은 챗GPT Custom GPT + 마크다운 지식 파일로 확정. 이미지 생성은 제미나이 앱 고정. 두 표면은 별개다.",
    "caveat": "1주차 1강은 rules.json의 reference_case에 정답이 들어 있어 컨닝 가능성이 있다. 다른 차시로 재확인 필요.",
    "knowledge_file": {
      "format": "markdown",
      "file": "VDF6_규칙.md",
      "derived_from": "rules.json",
      "why": "제미나이 Gem이 rules.json을 '파일을 찾지 못했습니다'로 응답. JSON은 지식 파일로 도달하지 않았다. 마크다운으로 바꾸자 §3 금지 목록까지는 읽혔다.",
      "rule": "규칙이 바뀌면 rules.json을 고치고 마크다운을 다시 뽑는다. 반대로 하지 않는다.",
      "excluded": "reference_case는 지식 파일에서 뺀다. 정답표가 들어가면 컨닝이 된다."
    }
  },
  "mvp": {
    "decision": "custom_gpt",
    "status": "현행 MVP",
    "stack": [
      "Custom GPT (지시문 + VDF6_규칙.md)",
      "제미나이 앱 (이미지)",
      "교수자 PPT"
    ],
    "cost": "없음 (기존 구독 내)",
    "opal": {
      "status": "보류",
      "why": "오팔은 제미나이 기반. 제미나이가 두 차례 §5 카드 문자열에 도달하지 못했다.",
      "revisit_when": "판단만 제미나이에 맡기고 프롬프트 조립을 오팔 단계에서 문자열로 꽂는 구조라면 유효. 여러 교수자에게 배포할 때 재검토."
    },
    "firebase": {
      "status": "보류",
      "why": "API 과금이 발생하고 지금 얻는 것이 없다. 배포 규모가 커질 때."
    }
  },
  "field_test": {
    "lecture": "13주차 SCAMPER (클립·스마트폰)",
    "date": "2026-08",
    "surface": {
      "text": "chatgpt custom gpt",
      "image": "gemini app"
    },
    "blocks": 5,
    "images_planned": 4,
    "images_generated": 4,
    "results": [
      {
        "block": "B1 클립 S·C·A",
        "verdict": "성공",
        "note": "N+1 기준점(금속 클립)이 계획 단계에서 자동 적용됨. rules.json에 기록된 과거 실패를 규칙이 실제로 막은 첫 사례.",
        "defect": "네 번째 머니클립이 클립 형태를 잃고 별개 제품이 됨. subject에 \`all clearly made from the same bent wire form\`가 누락."
      },
      {
        "block": "B2 클립 M·P·E·R",
        "verdict": "성공",
        "note": "초소형 항목이 작게 나옴. \`identical scale\`을 뺀 판단이 옳았음 — 크기 변화가 학습 포인트인 경우의 실제 사례."
      },
      {
        "block": "B4 스마트폰 S·C",
        "verdict": "실패",
        "defect": "unbranded 3종 미부착. 특정 제조사 카메라 배열과 겹침. 화면이 전부 비어 결합(C) 항목이 표현되지 않음. S 둘·C 둘을 한 줄에 놓아 분류 경계 소실."
      },
      {
        "block": "B5 A·M·P·E·R",
        "verdict": "실패",
        "defect": "PPT 텍스트 5항목 대 이미지 4요소로 대응 불가. POS 화면에 UI가 그려짐(no screen content 미부착). eSIM 항목이 회색 판으로만 나와 표현 실패."
      }
    ],
    "findings": [
      {
        "id": "FT-1",
        "claim": "unbranded 3종을 조건 판단에 맡기면 누락된다.",
        "evidence": "스마트폰·스마트워치 블록에서 미부착. 2026-08 3사 검증을 마친 규칙인데 계획 단계에서 빠졌다.",
        "fix": "브랜드 연상이 강한 대상군(휴대기기·웨어러블·차량·가전)은 조건 판단 없이 항상 부착한다.",
        "status": "verified",
        "n": 2
      },
      {
        "id": "FT-2",
        "claim": "항목 수가 카드 요소 상한을 넘으면 이미지를 줄이는 것이 아니라 블록을 쪼개야 한다.",
        "evidence": "B5에서 5항목 중 4개만 그려 텍스트와 이미지가 어긋났다. 학습자가 어느 항목이 빠졌는지 알 수 없다.",
        "fix": "상한 초과 시 (1) 블록 분할 또는 (2) 상한 초과 허용 중 택일. 부분 표현은 금지.",
        "status": "verified",
        "n": 1
      },
      {
        "id": "FT-3",
        "claim": "분류가 둘 이상인 블록에 카드 A를 쓰면 분류 경계가 사라진다.",
        "evidence": "B4의 S 둘·C 둘이 한 줄에 나란히 놓여 어느 것이 어느 분류인지 구분 불가.",
        "fix": "정보 유형이 분류·계층이면 카드 A를 쓰지 않는다. 카드 C로 가거나 분류별로 블록을 나눈다.",
        "status": "verified",
        "n": 1
      }
    ],
    "images_per_lecture": "5블록 중 4장. 규칙 R5의 3~4 눈금을 넘김. SCAMPER 차시는 사물 변형이 연속되는 구조라 눈금이 차시 성격에 좌우된다.",
    "completed": "B1·B2·B4·B5 생성. B4 재시도와 블록 분할은 미실시 — 규칙 수정 근거는 확보됨."
  },
  "block_schema": {
    "version": "1.0",
    "purpose": "GPT가 사람이 읽는 계획과 함께 내는 기계 판독용 블록 배열. 검사기 화면이 이 형식을 읽는다.",
    "why": "조건부 조각의 발동 조건을 LLM 판단에 맡겼더니 누락됐다(FT-1). 대상 속성을 값으로 내게 하면 코드가 검사할 수 있다.",
    "fields": {
      "id": "블록 번호. 예: B4",
      "title": "블록 제목",
      "track": "shape | image — 라벨 테스트 결과",
      "info_type": "6종 중 하나. 다른 이름 금지",
      "item_count": "정수",
      "item_structure": "슬롯 형식 문자열",
      "slots": "항목 하나가 원소 하나. item_count와 길이가 같아야 한다. 인과·수렴도 화살표로 이어붙이지 않는다.",
      "gate": "{passed, reason}. image면 passed=true. 게이트에서 기각돼 shape이 된 블록은 passed=false로 남긴다. 라벨 테스트에서 이미 도형이면 null.",
      "card": "A~F 또는 null",
      "subject": "영문 대상 한 줄. 카드 프롬프트의 subject 슬롯에 들어간다",
      "subject_traits": {
        "branded_category": "true|false — 휴대기기·웨어러블·차량·가전·컴퓨터면 true",
        "same_form_variants": "true|false — 같은 사물의 변형을 나열하는가",
        "replacement_type": "true|false — 'A를 B로 대체' 유형인가. true면 기준점을 더해 N+1개",
        "scale_is_the_point": "true|false — 크기 변화가 학습 포인트인가. true면 identical scale을 뺀다",
        "spreads_across_frame": "true|false — 사물이 화면 전체에 퍼지는가. 카드 F의 여백 위치 지정에 쓴다"
      }
    },
    "rules_for_gpt": [
      "subject_traits는 판단해서 붙이는 게 아니라 항상 다섯 개를 모두 낸다. 해당 없으면 false.",
      "조건부 조각 문자열을 직접 쓰지 않는다. 속성만 내면 코드가 붙인다.",
      "item_count가 카드 상한을 넘으면 split 배열을 함께 낸다(R9).",
      "slots 길이 == item_count. 인과·수렴을 한 문자열로 뭉치지 않는다.",
      "gate는 passed와 reason 둘 다. 기각 기록을 지우지 않는다."
    ],
    "split_field": {
      "split": [
        {
          "id": "B5-1",
          "title": "...",
          "item_count": 3,
          "slots": [
            "..."
          ],
          "subject": "..."
        }
      ]
    },
    "observed_failures": [
      {
        "id": "S-1",
        "what": "gate.passed 누락, reason만 냄",
        "n": "5/5 블록",
        "fix": "표로 세 경우를 명시"
      },
      {
        "id": "S-2",
        "what": "인과·수렴의 slots를 화살표로 이어 한 문자열로 냄",
        "n": "4/4 블록",
        "fix": "예시 JSON 추가"
      },
      {
        "id": "S-3",
        "what": "도형 블록에 gate가 붙음",
        "verdict": "정상. 기각 기록으로 유용하다고 판단해 규칙에 반영"
      }
    ]
  },
  "element_cap_semantics": {
    "unit": "의미 단위",
    "not": "물체 개수",
    "why": "캡슐 커피머신 대표 이미지는 물체가 7~8개지만 의미 단위는 둘이다 — 드립 도구 무더기 하나, 기계 하나. 학습 포인트가 그 둘의 대비다.",
    "cross_check": "카드 B 대표인 '저울+카드'도 물체로 세면 3개(저울·회색카드·강조카드)지만 의미로는 2개(저울, 두 선택지)다. 44장의 밀도 축이 원래 의미 단위였으나 문서화되지 않았다.",
    "rule": "하나하나가 학습 내용을 실어야 요소로 센다. 맥락을 만드는 소품 무더기는 통틀어 하나로 센다.",
    "status": "decided",
    "date": "2026-08"
  },
  "field_test_2": {
    "lecture": "SCAMPER S·C 차시",
    "date": "2026-08",
    "blocks": 11,
    "images": 2,
    "good": [
      "정보 유형 6종 이름 정확 11/11",
      "커버리지 11/11",
      "B7 구텐베르크·B8 아이폰을 규칙 R4로 기각 — 여러 사물이 필요해 좁혀지지 않음",
      "B8은 도형인데도 branded_category=true를 정확히 냄. 속성을 값으로 내게 한 설계가 작동",
      "B5·B11의 subject_traits가 same_form_variants·replacement_type 둘 다 true로 정확"
    ],
    "defects": [
      "gate.passed 누락",
      "인과·수렴 slots 뭉침"
    ]
  },
  "field_test_3": {
    "lecture": "SCAMPER S·C 차시 (2회차, 지시문 개정 후)",
    "date": "2026-08",
    "knowledge_file": "rules.json (마크다운 미제공). 챗GPT는 JSON을 읽는다 — 제미나이와 다른 지점.",
    "fixed": [
      "gate.passed 5/5 부착",
      "인과·수렴 slots 원소 분리 완료"
    ],
    "regression": {
      "what": "이미지 2장 → 5장. 구텐베르크·아이폰이 기각에서 통과로 뒤집힘",
      "cause": "R4의 기각 사례에 '서로 다른 사물 여러 개'가 없었다. 1회차는 우연히 옳게 읽었다.",
      "fix": "R4에 not_sufficient와 pattern_2 추가, 카드 A의 use_when에서 '여러 항목 병렬' 삭제",
      "lesson": "같은 노트를 두 번 돌리지 않았으면 못 잡았다. 판정 안정성은 1회 실행으로 확인되지 않는다."
    },
    "other": [
      "B11에서 GPT가 subject에 unbranded를 직접 써넣음 — 조각을 쓰지 말라는 규칙 위반이나, 카드 B에 조각이 없어서 생긴 빈틈을 메운 것"
    ]
  },
  "field_test_4": {
    "lecture": "SCAMPER S·C 차시 (3회차, R4 보강 후)",
    "date": "2026-08",
    "lint": "11/11 통과",
    "images": {
      "B5": "성공. 같은 기계에 투입구만 다름. 기준점-변형 관계가 읽힘",
      "B11": "성공. 같은 의자 3종, 다리와 좌판만 변경. 스마트폰 화면 비어 있음(unbranded 부착 효과)",
      "note": "N+1 기준점 규칙이 두 장 모두에서 눈에 보이게 작동. 13주차 머니클립 같은 형태 이탈 없음"
    },
    "confirmed": [
      "구텐베르크·아이폰 재기각. 근거 문장이 R4의 not_sufficient 문구를 그대로 인용 — 규칙을 읽은 것이지 우연이 아니다",
      "gate.passed 부착 유지",
      "인과·수렴 slots 원소 분리 유지",
      "기각 기록(passed=false) 2건 보존"
    ],
    "improvement": "B11이 S·C 두 결과를 한 블록 카드 A로 통합하고 기준 의자를 더해 3개로 그림. 2회차의 분리 배치보다 낫다. replacement_type의 N+1을 스스로 적용.",
    "remaining": "B11 subject에 unbranded 미부착. branded_category=true는 정확히 냈으므로 코드가 붙이면 된다 — 설계대로다.",
    "stability": {
      "run1": {
        "images": 2,
        "gutenberg": "기각",
        "format_defects": 2
      },
      "run2": {
        "images": 5,
        "gutenberg": "통과",
        "format_defects": 0
      },
      "run3": {
        "images": 2,
        "gutenberg": "기각",
        "format_defects": 0
      },
      "reading": "1회차와 3회차는 결과가 같지만 이유가 다르다. 1회차는 규칙에 없는 것을 모델이 알아서 읽었고, 3회차는 규칙에 적힌 것을 읽었다. 2회차가 없었으면 이 차이를 몰랐을 것이다.",
      "lesson": "규칙이 실제로 작동하는지는 동일 노트 재실행으로만 확인된다. 1회 성공은 규칙의 증거가 아니다."
    }
  },
  "verification_protocol": {
    "rule": "규칙을 고친 뒤에는 같은 노트를 두 번 돌린다.",
    "why": "1회 성공은 모델이 우연히 옳게 읽은 것일 수 있다. SCAMPER 차시 1·2회차가 같은 입력에서 정반대로 갈렸다.",
    "status": "adopted",
    "date": "2026-08"
  },
  "status": {
    "date": "2026-08-21",
    "state": "안정 · 실사용 가능",
    "cards": {
      "verified": [
        "A",
        "B",
        "C",
        "F"
      ],
      "unverified": [
        "D",
        "E"
      ]
    },
    "surfaces": {
      "text": "ChatGPT Custom GPT + rules.json",
      "image": "제미나이 앱",
      "inspect": "검사기(미배포)"
    },
    "cost": "없음",
    "closing_note": "오늘 규칙 수정이 후반으로 갈수록 발견보다 손질이 많아졌다. 여기서 닫는다. 다음 수정은 실제 제작에서 새 실패가 관측될 때만."
  },
  "next_when_resumed": [
    "검사기를 ChatGPT Sites에 올린다. 규칙이 굳었으므로 두 번 일하지 않는다.",
    "카드 D는 장치 작동 블록이 실제로 나올 때, 카드 E는 순차 패널이 필요할 때 검증한다.",
    "규칙을 고치면 같은 노트를 두 번 돌린다(verification_protocol).",
    "새 규칙은 실패가 관측될 때만 추가한다. 손질하지 않는다."
  ]
}`,$u="vdf.activeEngine",__="vdf-engine-registry",y_=1,Xn="engines",ys="vdf-6.0.0",v_={name:"VDF JSON Contract",version:"6.0",schema:{top_level:["blocks"],block_required:["id","title","track","info_type","item_count","slots","gate","card","subject","subject_traits"],block_optional:["item_structure","split"],info_types:["순서·절차","분류·계층","비교·대조","인과·수렴","정의","목록"],tracks:["image","shape"],cards:["A","B","C","D","E","F",null]}};function b_(u){const w=String(u||"REGISTERED").toUpperCase();return w==="STABLE"?"STABLE":w==="CANDIDATE"?"CANDIDATE":w==="HOLD"||w==="EXPERIMENTAL"?"HOLD":"REGISTERED"}function xh(u){return String(u||"UNKNOWN").toUpperCase().replace(/\s+/g,"_")||"UNKNOWN"}function wh(u){try{return localStorage.getItem(u)||""}catch{return""}}function x_(u,w){try{localStorage.setItem(u,w)}catch{}}function w_(u){return new TextEncoder().encode(u)}async function Wi(u){var o;if((o=globalThis.crypto)!=null&&o.subtle){const f=await crypto.subtle.digest("SHA-256",w_(u));return Array.from(new Uint8Array(f)).map(p=>p.toString(16).padStart(2,"0")).join("")}let w=2166136261;for(let f=0;f<u.length;f++)w^=u.charCodeAt(f),w=Math.imul(w,16777619);return`fnv-${(w>>>0).toString(16).padStart(8,"0")}`}function S_(){const u=[];for(const w of p_){if(w.id==="CASE-01"){u.push({id:"CASE-01H",folder:"CASE-01H_historical_reference",name:"1주차 1강 — Historical Golden Reference",status:"REFERENCE_ONLY",purpose:"과거 VDF 6.0의 7블록/3이미지 공식 기준. 당시 정확한 입력 원문이 현재 패키지에 없으므로 자동 실행·채점하지 않는다.",input:"",expected:w.expected,readme:"Historical Golden은 기준 보존용이다. 현재 강의노트와 동일 입력이라고 가정하지 않는다."}),u.push({id:"CASE-01C",folder:w.folder,name:"1주차 1강 — Current Lecture",status:"CURRENT_INPUT",purpose:"현재 강의노트 입력으로 6.0의 일반화 성능을 관찰한다. Historical Golden의 7블록 정답을 강제하지 않는다.",input:w.input,expected:{case_id:"CASE-01C",status:"current_input",schema_valid:!0,evaluation_mode:"OBSERVATION_ONLY",historical_reference:"CASE-01H",watch:["scope overflow","concept-example split","visual candidate loss","info_type drift","card drift","schema issues"],rule:"단일 케이스 실패만으로 엔진 규칙을 추가하지 않는다."},readme:"현재 강의노트에는 Historical Golden 작성 당시와 다른 학습코너가 포함되어 있을 수 있다. 결과는 관찰용으로 기록한다."});continue}u.push({id:w.id,folder:w.folder,name:w.name,status:xh(w.status),purpose:w.purpose,input:w.input,expected:w.expected,readme:w.readme})}return u}async function j_(){const u=v_,w=S_();return{id:ys,version:"6.0.0",status:"STABLE",label:"VDF 6.0 Reference / Stable",instruction:sh,rules:m_,rulesJson:mh,rulesJsonText:g_,contract:u,rulesHash:"c20dae4c893d4455069b90fe2257239af69ca4cd247505b4ed5c69d3b2d5e1d5",instructionHash:await Wi(sh),contractHash:await Wi(JSON.stringify(u)),registeredAt:"2026-08-25",source:"BUILT_IN",regression:w.length?"AVAILABLE":"NOT_INCLUDED",regressionCases:w,manifest:{engine:"VDF",version:"6.0.0",status:"STABLE",date:"2026-08-25",source_of_truth:"rules.json",contract_version:"6.0",description:"Reference VDF 6.0 engine · minimal-rule stable baseline"}}}function Wu(){return typeof indexedDB<"u"}function Pu(){return new Promise((u,w)=>{const o=indexedDB.open(__,y_);o.onupgradeneeded=()=>{const f=o.result;f.objectStoreNames.contains(Xn)||f.createObjectStore(Xn,{keyPath:"id"})},o.onsuccess=()=>u(o.result),o.onerror=()=>w(o.error)})}async function E_(){if(!Wu())return[];const u=await Pu();return await new Promise((w,o)=>{const p=u.transaction(Xn,"readonly").objectStore(Xn).getAll();p.onsuccess=()=>w(p.result||[]),p.onerror=()=>o(p.error)})}async function A_(u){if(!Wu())return;const w=await Pu();await new Promise((o,f)=>{const p=w.transaction(Xn,"readwrite");p.objectStore(Xn).put(u),p.oncomplete=()=>o(),p.onerror=()=>f(p.error)})}async function k_(u){if(!Wu())return;const w=await Pu();await new Promise((o,f)=>{const p=w.transaction(Xn,"readwrite");p.objectStore(Xn).delete(u),p.oncomplete=()=>o(),p.onerror=()=>f(p.error)})}function T_(u){const w=Array.isArray(u.regressionCases)?u.regressionCases:[];return{...u,rulesJsonText:u.rulesJsonText||JSON.stringify(u.rulesJson,null,2),regressionCases:w,regression:w.length?"AVAILABLE":u.regression||"NOT_INCLUDED"}}async function Sh(){const u=await j_();let w=[];try{w=(await E_()).map(T_)}catch{}return[u,...w.filter(o=>o.id!==ys)].sort((o,f)=>o.version.localeCompare(f.version,void 0,{numeric:!0}))}async function Pi(){const u=await Sh(),w=wh($u);return u.find(o=>o.id===w)||u[0]}function C_(){return wh($u)||ys}function rh(u){x_($u,u),window.dispatchEvent(new CustomEvent("vdf-engine-change",{detail:u}))}async function N_(u){if(u===ys)throw new Error("Built-in VDF 6.0 Reference / Stable은 삭제할 수 없습니다.");if(C_()===u)throw new Error("현재 ACTIVE 엔진은 삭제할 수 없습니다. 먼저 다른 엔진을 ACTIVE로 적용해 주세요.");await k_(u),window.dispatchEvent(new CustomEvent("vdf-engine-registry-change"))}function D_(u,w){const o=Object.values(u.files).filter(f=>!f.dir);for(const f of w){const p=u.file(f);if(p)return p;const d=o.find(g=>g.name.endsWith("/"+f)||g.name===f);if(d)return d}return null}async function Ii(u,w,o){const f=D_(u,o);if(!f)throw new Error(`${w} 파일이 없습니다: ${o[0]}`);return await f.async("text")}function uh(u){return u.split("/").filter(Boolean).pop()||u}async function z_(u){const o=Object.values(u.files).filter(p=>!p.dir).filter(p=>/(^|\/)regression\/(?:cases\/)?[^/]+\/input\.md$/i.test(p.name)||/(^|\/)cases\/[^/]+\/input\.md$/i.test(p.name)),f=[];for(const p of o){const d=p.name.slice(0,p.name.lastIndexOf("/")),g=u.file(`${d}/expected.json`);if(!g)continue;let m;try{m=JSON.parse(await g.async("text"))}catch{continue}const _=u.file(`${d}/README.md`),y=await p.async("text"),S=_?await _.async("text"):"",E=String(m.case_id||uh(d)),T=String(m.name||E),b=xh(m.status),k=String(m.purpose||m.golden_promotion_rule||"");f.push({id:E,folder:uh(d),name:T,status:b,purpose:k,input:y,expected:m,readme:S})}return f.sort((p,d)=>p.id.localeCompare(d.id,void 0,{numeric:!0}))}async function R_(u){const w=await u.arrayBuffer(),o=await _s.loadAsync(w),f=await Ii(o,"manifest.json",["manifest.json"]),p=await Ii(o,"rules.json",["rules.json","engine/rules.json"]),d=await Ii(o,"VDF 지시문",["VDF6_지시문.md","vdf_instructions.md","engine/VDF6_지시문.md"]),g=await Ii(o,"VDF 규칙 Markdown",["VDF6_규칙.md","vdf_rules.md","engine/VDF6_규칙.md"]),m=await Ii(o,"contract.json",["contract.json","engine/contract.json"]);let _,y,S;try{_=JSON.parse(f)}catch{throw new Error("manifest.json을 읽을 수 없습니다.")}try{y=JSON.parse(p)}catch{throw new Error("rules.json을 읽을 수 없습니다.")}try{S=JSON.parse(m)}catch{throw new Error("contract.json을 읽을 수 없습니다.")}if(String(_.engine||"").toUpperCase()!=="VDF")throw new Error("manifest.engine은 VDF여야 합니다.");if(!_.version)throw new Error("manifest.version이 없습니다.");if(!d.includes("블록마다 순서대로 판정"))throw new Error("지시문이 VDF 실행 지시문 형식과 맞지 않습니다.");if(!g.includes("정보 유형 6종"))throw new Error("규칙 Markdown에서 VDF 정보 유형 기준을 찾지 못했습니다.");const E=y;if(!E.cards||!E.info_types)throw new Error("rules.json에 cards 또는 info_types가 없습니다.");for(const D of["A","B","C","D","E","F"])if(!(D in E.cards))throw new Error(`rules.json에 카드 ${D}가 없습니다.`);if(!S.version)throw new Error("contract.json에 version이 없습니다.");if(_.contract_version&&String(_.contract_version)!==String(S.version))throw new Error(`manifest.contract_version(${_.contract_version})과 contract.version(${S.version})이 다릅니다.`);const T=S.schema||{};if(!Array.isArray(T.top_level)||!T.top_level.includes("blocks"))throw new Error("contract.json이 VDF blocks 계약을 선언하지 않습니다.");const b=await z_(o),k=String(_.version),x=`vdf-${k}`.toLowerCase().replace(/[^a-z0-9._-]+/g,"-"),A=b_(_.status),j={id:x,version:k,status:A,label:`VDF ${k}${A==="HOLD"?" HOLD / Experimental":A==="CANDIDATE"?" Candidate":A==="STABLE"?" Stable":""}`,instruction:d,rules:g,rulesJson:y,rulesJsonText:p,contract:S,rulesHash:await Wi(p),instructionHash:await Wi(d),contractHash:await Wi(m),registeredAt:new Date().toISOString(),source:"PACKAGE",regression:b.length?"AVAILABLE":"NOT_INCLUDED",regressionCases:b,manifest:_,packageBytes:w};return await A_(j),window.dispatchEvent(new CustomEvent("vdf-engine-registry-change",{detail:j.id})),j}async function O_(u){const w=new _s;w.file("manifest.json",JSON.stringify(u.manifest,null,2)),w.file("rules.json",u.rulesJsonText||JSON.stringify(u.rulesJson,null,2)),w.file("VDF6_규칙.md",u.rules),w.file("VDF6_지시문.md",u.instruction),w.file("contract.json",JSON.stringify(u.contract,null,2));for(const o of u.regressionCases){const f=`regression/${o.folder}`;w.file(`${f}/input.md`,o.input),w.file(`${f}/expected.json`,JSON.stringify(o.expected,null,2)),o.readme&&w.file(`${f}/README.md`,o.readme)}return await w.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:6}})}async function B_(u){return u.source==="PACKAGE"&&u.packageBytes?new Blob([u.packageBytes],{type:"application/zip"}):await O_(u)}function M_(u){return`VDF_Engine_${u.version.replace(/[^a-zA-Z0-9._-]+/g,"_")}_${u.status}.zip`}async function U_(u){const w=await B_(u),o=URL.createObjectURL(w),f=document.createElement("a");f.href=o,f.download=M_(u),document.body.appendChild(f),f.click(),f.remove(),setTimeout(()=>URL.revokeObjectURL(o),500)}var H_=oh();function Yu({text:u}){const w=je.useId(),o=je.useRef(null),f=je.useRef(null),[p,d]=je.useState(!1),[g,m]=je.useState({top:0,left:0,placement:"top",ready:!1}),_=()=>{const S=o.current,E=f.current;if(!S||!E)return;const T=S.getBoundingClientRect(),b=E.getBoundingClientRect(),k=8,x=10,A=T.top,j=window.innerHeight-T.bottom,D=A>=b.height+k||A>=j?"top":"bottom";let M=T.left+T.width/2-b.width/2;M=Math.max(x,Math.min(M,window.innerWidth-b.width-x));let V=D==="top"?T.top-b.height-k:T.bottom+k;V=Math.max(x,Math.min(V,window.innerHeight-b.height-x)),m({top:V,left:M,placement:D,ready:!0})};je.useLayoutEffect(()=>{p&&(m(S=>({...S,ready:!1})),requestAnimationFrame(_))},[p,u]),je.useEffect(()=>{if(!p)return;const S=()=>_(),E=b=>{var k;b.key==="Escape"&&(d(!1),(k=o.current)==null||k.focus())},T=b=>{var x,A;const k=b.target;!((x=o.current)!=null&&x.contains(k))&&!((A=f.current)!=null&&A.contains(k))&&d(!1)};return window.addEventListener("resize",S),window.addEventListener("scroll",S,!0),window.addEventListener("keydown",E),document.addEventListener("pointerdown",T),()=>{window.removeEventListener("resize",S),window.removeEventListener("scroll",S,!0),window.removeEventListener("keydown",E),document.removeEventListener("pointerdown",T)}},[p]);const y=p&&typeof document<"u"?H_.createPortal(s.jsx("div",{ref:f,id:w,role:"tooltip",className:`tooltip-portal ${g.placement}`,style:{top:g.top,left:g.left,visibility:g.ready?"visible":"hidden"},children:u}),document.body):null;return s.jsxs(s.Fragment,{children:[s.jsx("button",{ref:o,type:"button",className:"tooltip-trigger","aria-label":"도움말","aria-describedby":p?w:void 0,"aria-expanded":p,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),onFocus:()=>d(!0),onBlur:S=>{var E;(E=f.current)!=null&&E.contains(S.relatedTarget)||d(!1)},onClick:S=>{S.stopPropagation(),d(E=>!E)},children:s.jsx(dh,{size:16})}),y]})}function G_({current:u,maxAvailable:w,onStep:o}){const f=["계획 만들기","계획 검사","결과 확인","제작 활용"];return s.jsx("ol",{className:"journey","aria-label":"VDF 사용 단계",children:f.map((p,d)=>{const g=d+1,m=g<u,_=g===u,y=g<=w;return s.jsx("li",{className:`${m?"done":_?"active":""} ${y?"enabled":"locked"}`,children:s.jsxs("button",{type:"button",disabled:!y,"aria-current":_?"step":void 0,onClick:()=>y&&(o==null?void 0:o(g)),children:[m?s.jsx(Lu,{}):s.jsx(eg,{}),s.jsxs("span",{children:[s.jsx("small",{children:g}),p]})]})},p)})})}const jh=je.createContext({push:()=>{}});function q_({children:u}){const[w,o]=je.useState([]),f=je.useCallback((d,g="info")=>{const m=Date.now()+Math.random();o(_=>[..._,{id:m,kind:g,message:d}]),setTimeout(()=>o(_=>_.filter(y=>y.id!==m)),2800)},[]),p=je.useMemo(()=>({push:f}),[f]);return s.jsxs(jh.Provider,{value:p,children:[u,s.jsx("div",{className:"toast-region","aria-live":"polite",children:w.map(d=>s.jsx("div",{className:`toast ${d.kind}`,children:d.message},d.id))})]})}const ec=()=>je.useContext(jh);function L_(u){return u.card?"이미지 Prompt":u.diagramSvg?"SVG 도형":"글 중심"}function V_(u){return u.card||u.diagramSvg?"YES":"NO"}function F_(u){if(!u.card)return{tone:"neutral",label:"카드 검증 대상 아님"};const w=fa.cards[u.card].status,o=w==="verified"||w==="verified_after_fix";return{tone:o?"success":"warning",label:o?"검증됨":"미검증/주의"}}function X_(u){return u.block.gate?u.block.gate.reason:u.diagramSvg?`${u.infoType} 관계에 따라 편집 가능한 SVG 도형으로 표현됩니다.`:`${u.infoType} 관계의 글 중심 덩어리로 유지됩니다.`}function Y_({result:u}){const w=F_(u),o=u.card?gh.filter(f=>f!==u.card):[];return s.jsxs("details",{className:"decision-details",children:[s.jsx("summary",{children:"판단 근거 펼쳐보기"}),s.jsxs("div",{className:"decision-body",children:[s.jsxs("dl",{className:"decision-grid",children:[s.jsxs("div",{children:[s.jsx("dt",{children:"관계"}),s.jsx("dd",{children:u.infoType})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"시각화 필요"}),s.jsx("dd",{children:V_(u)})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"표현 방식"}),s.jsx("dd",{children:L_(u)})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"선택 카드"}),s.jsx("dd",{children:u.card?`${u.card} · ${fa.cards[u.card].ko}`:"없음"})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"검증 상태"}),s.jsx("dd",{children:s.jsx(qe,{tone:w.tone,children:w.label})})]}),s.jsxs("div",{className:"decision-wide",children:[s.jsx("dt",{children:"판정 이유"}),s.jsx("dd",{children:X_(u)})]}),s.jsxs("div",{className:"decision-wide",children:[s.jsx("dt",{children:"확인할 것"}),s.jsx("dd",{children:u.warnings.length?`${u.warnings.length}건 — 아래 Warning을 확인하세요.`:"없음"})]}),s.jsxs("div",{className:"decision-wide",children:[s.jsx("dt",{children:"대안 카드"}),s.jsx("dd",{children:u.card?s.jsxs(s.Fragment,{children:[s.jsx("span",{children:o.map(f=>`${f} · ${fa.cards[f].ko}`).join(" / ")}),s.jsx("small",{children:"자동 후보 판정이 아니라, 교수자가 검토할 수 있는 다른 A~F 배치 선택지를 보여줍니다."})]}):s.jsxs(s.Fragment,{children:[s.jsx("span",{children:"이미지 카드 선택 없음"}),s.jsx("small",{children:"현재 결과는 기존 Domain 판정에 따라 SVG 또는 글 중심 경로를 사용합니다."})]})})]})]}),u.warnings.length>0&&s.jsxs("div",{className:"decision-warning","aria-label":"Warning 이유",children:[s.jsx("b",{children:"Warning 이유"}),u.warnings.map(f=>s.jsxs("p",{children:["• ",f.message]},f.key))]})]})]})}function Z_(u){var w,o;return((w=u.block.gate)==null?void 0:w.passed)===!0?"그릴 것 남음":((o=u.block.gate)==null?void 0:o.passed)===!1?"그림 없이":u.block.track==="image"?"판단 확인":"글 중심"}function Q_(u){return u.card?"이미지":u.diagramSvg?"SVG 도형":"글 중심"}function K_(u){return u.card?`${u.card} 배치`:u.diagramSvg?"관계형 도형":"배치 없음"}function J_(u){return u.prompt?"Prompt 6줄":u.diagramSvg?"SVG":"텍스트"}function I_({result:u,adjusted:w}){const o=[["글자 지우기",Z_(u)],["관계",u.infoType],["표현",Q_(u)],["배치",K_(u)],["결과",J_(u)]];return s.jsxs("section",{className:"decision-rail","aria-label":"VDF 판단 경로",children:[s.jsxs("div",{className:"decision-rail-head",children:[s.jsx("b",{children:"판단 경로"}),s.jsx("span",{className:w?"review-state adjusted":"review-state",children:w?"교수자 조정 반영":"자동 판정"})]}),s.jsx("div",{className:"decision-rail-track",children:o.map(([f,p],d)=>s.jsxs("div",{className:"decision-step-wrap",children:[s.jsxs("div",{className:"decision-step",children:[s.jsx("small",{children:f}),s.jsx("strong",{children:p})]}),d<o.length-1&&s.jsx(Pp,{className:"decision-arrow",size:17,"aria-hidden":"true"})]},f))})]})}function Zu({card:u}){const w={width:78,height:34,viewBox:"0 0 84 32",fill:"none",stroke:"currentColor",strokeWidth:1.4,"aria-hidden":!0};return u==="A"?s.jsxs("svg",{...w,children:[s.jsx("rect",{x:"4",y:"9",width:"15",height:"15",rx:"2"}),s.jsx("rect",{x:"23",y:"9",width:"15",height:"15",rx:"2"}),s.jsx("rect",{x:"42",y:"9",width:"15",height:"15",rx:"2"}),s.jsx("rect",{x:"61",y:"9",width:"15",height:"15",rx:"2"})]}):u==="B"?s.jsxs("svg",{...w,children:[s.jsx("rect",{x:"31",y:"6",width:"22",height:"19",rx:"2"}),s.jsx("path",{d:"M26 27h32",opacity:".45"})]}):u==="C"?s.jsxs("svg",{...w,children:[s.jsx("rect",{x:"3",y:"7",width:"36",height:"18",rx:"2"}),s.jsx("rect",{x:"45",y:"7",width:"36",height:"18",rx:"2"}),s.jsx("path",{d:"M3 27h78",opacity:".45"})]}):u==="D"?s.jsxs("svg",{...w,children:[s.jsx("rect",{x:"6",y:"8",width:"40",height:"18",rx:"2"}),s.jsx("path",{d:"M50 17h24M50 17l6-4M50 17l6 4"})]}):u==="E"?s.jsxs("svg",{...w,children:[s.jsx("rect",{x:"2",y:"9",width:"18",height:"15",rx:"2"}),s.jsx("rect",{x:"23",y:"9",width:"18",height:"15",rx:"2"}),s.jsx("rect",{x:"44",y:"9",width:"18",height:"15",rx:"2"}),s.jsx("rect",{x:"65",y:"9",width:"18",height:"15",rx:"2"})]}):u==="F"?s.jsxs("svg",{...w,children:[s.jsx("rect",{x:"2",y:"3",width:"80",height:"26",rx:"2",fill:"currentColor",opacity:".12",stroke:"none"}),s.jsx("rect",{x:"8",y:"11",width:"40",height:"10",rx:"2"})]}):s.jsxs("svg",{...w,children:[s.jsx("rect",{x:"2",y:"3",width:"80",height:"26",rx:"2",strokeDasharray:"4 3",opacity:".55"}),s.jsx("path",{d:"M31 16h22",opacity:".55"})]})}function $_(u,w){return(u??null)===(w??null)}function W_({base:u,current:w,override:o,onChange:f,onReset:p}){const d=w.infoType!==u.block.info_type,g=!$_(w.card,u.block.card),m=d||g;function _(S){f({...o,infoType:S})}function y(S){f({...o,card:S})}return s.jsxs("section",{className:"decision-review","aria-label":"교수자 검토 및 조정",children:[s.jsxs("div",{className:"decision-review-head",children:[s.jsxs("div",{children:[s.jsx("b",{children:"교수자 검토·조정"}),s.jsx("p",{children:"자동 판정을 출발점으로 두고, 강의 의도에 맞으면 관계와 배치를 직접 바꿀 수 있습니다."})]}),m&&s.jsxs("button",{className:"button ghost reset-review",onClick:p,children:[s.jsx(og,{size:15}),"자동 판정으로 되돌리기"]})]}),s.jsxs("div",{className:"review-grid",children:[s.jsxs("label",{className:"review-field",children:[s.jsx("span",{children:"관계"}),s.jsx("select",{value:w.infoType,onChange:S=>_(S.target.value),children:Xg.map(S=>s.jsx("option",{children:S},S))}),s.jsxs("small",{children:["자동: ",u.block.info_type,d?" → 조정됨":""]})]}),s.jsxs("div",{className:"review-field card-review",children:[s.jsx("span",{children:"배치 카드"}),s.jsxs("div",{className:"layout-tiles",role:"group","aria-label":"배치 카드 선택",children:[s.jsxs("button",{type:"button",className:`layout-tile ${w.card===null?"selected":""}`,"aria-pressed":w.card===null,onClick:()=>y(null),children:[s.jsx(Zu,{card:null}),s.jsx("b",{children:"없음"}),s.jsx("small",{children:"SVG / 글 중심"})]}),gh.map(S=>{const E=fa.cards[S],T=E.status==="verified"||E.status==="verified_after_fix";return s.jsxs("button",{type:"button",className:`layout-tile ${w.card===S?"selected":""} ${T?"":"unverified"}`,"aria-pressed":w.card===S,onClick:()=>y(S),children:[s.jsx(Zu,{card:S}),s.jsxs("b",{children:[S," · ",E.ko.split(" · ")[0]]}),s.jsx("small",{children:T?"검증됨":"미검증 · 결과 확인"})]},S)})]}),s.jsxs("small",{children:["자동: ",u.block.card?`${u.block.card} · ${fa.cards[u.block.card].ko}`:"배치 없음",g?" → 조정됨":""]})]})]})]})}function P_({result:u,onCopy:w,onDownload:o}){const f=o_(u.diagramSvg);return f?s.jsxs("div",{className:"diagram-wrap",children:[s.jsx("div",{className:"diagram-canvas",dangerouslySetInnerHTML:{__html:f}}),s.jsxs("div",{className:"action-row diagram-actions",children:[s.jsx("button",{className:"button secondary nowrap",onClick:()=>w(f),children:"SVG 복사"}),s.jsxs("button",{className:"button ghost nowrap",onClick:()=>o(f),children:[s.jsx(Ju,{size:16}),"SVG 파일 저장"]}),s.jsx("span",{className:"diagram-hint",children:"긴 문장은 화면·파일에서 읽기 쉽도록 줄바꿈만 정리합니다. 판정 내용은 바뀌지 않습니다."})]})]}):null}function e1(u){const w="## 지시문",o=u.indexOf(w);if(o<0)return u.trim();const f=u.indexOf("```",o);if(f<0)return u.slice(o+w.length).trim();const p=u.indexOf(`
`,f)+1,d=u.indexOf("## 1차 테스트",p),g=d>=0?d:u.length,m=u.slice(p,g),_=m.lastIndexOf("\n```");return(_>=0?m.slice(0,_):m).trim()}function ch(u,w,o){const f=w.trim();if(!f)throw new Error(`${u}이 비어 있습니다. 앱 패키지를 다시 확인해 주세요.`);if(/<!doctype html|<html[\s>]|<div\s+id=["']root["']/i.test(f))throw new Error(`${u} 대신 HTML이 감지되었습니다. VDF 원본 파일이 올바르게 번들되지 않았습니다.`);const p=o.filter(d=>!f.includes(d));if(p.length)throw new Error(`${u} 검증에 실패했습니다. 누락 기준: ${p.join(", ")}`)}function t1(u,w,o,f){const p=u.trim();if(!p)throw new Error("강의노트를 입력해 주세요.");ch("VDF 실행 지시문",w,["블록마다 순서대로 판정",'"track"','"info_type"','"item_structure"','"gate"','"subject_traits"']),ch("VDF 규칙 원본",o,["정보 유형 6종","프리셋 카드"]);const d=f;return`# ${d.label} 블록 계획 실행

현재 ACTIVE VDF Engine은 ${d.version} (${d.status})입니다. 아래 지시문과 규칙 원본만 사용하고 JSON 키를 바꾸지 마세요.

## VDF 실행 지시문

${w.trim()}

## VDF 규칙 원본

${o.trim()}

## 이번 강의노트

${p}`}async function n1(u){const w=await Pi(),o=e1(w.instruction);return t1(u,o,w.rules,w)}const qu=u=>u.localName,a1=u=>Array.from(u.children),Qu=u=>Array.from(u.getElementsByTagNameNS("*","t")).map(w=>w.textContent||"").join("").replace(/\s+/g," ").trim(),i1=u=>u.replace(/\|/g,"\\|").replace(/\r?\n/g," ").trim();function l1(u){const w=Array.from(u.getElementsByTagNameNS("*","tr")).map(g=>Array.from(g.getElementsByTagNameNS("*","tc")).map(m=>{const _=Array.from(m.getElementsByTagNameNS("*","p")).map(Qu).filter(Boolean);return i1(_.join(" / ")||Qu(m))}));if(!w.length)return"";const o=Math.max(...w.map(g=>g.length)),f=w.map(g=>[...g,...Array(Math.max(0,o-g.length)).fill("")]),p=f[0],d=Array(o).fill("---");return["[표]",`| ${p.join(" | ")} |`,`| ${d.join(" | ")} |`,...f.slice(1).map(g=>`| ${g.join(" | ")} |`),"[/표]"].join(`
`)}function Eh(u){const w=[];let o=0,f=0;function p(d){for(const g of a1(d)){if(qu(g)==="tbl"){const m=l1(g);m&&(w.push(m),o++);continue}if(qu(g)==="p"){let m=g.parentElement,_=!1;for(;m&&m!==u;){if(qu(m)==="tbl"){_=!0;break}m=m.parentElement}if(!_){const y=Qu(g);y&&(w.push(y),f++)}continue}p(g)}}return p(u),{text:w.join(`

`).trim(),tables:o,paragraphs:f}}function Ah(u){const w=new DOMParser().parseFromString(u,"application/xml");if(w.querySelector("parsererror"))throw new Error("문서 XML을 읽지 못했습니다.");return w}async function s1(u){const o=(await _s.loadAsync(await u.arrayBuffer())).file("word/document.xml");if(!o)throw new Error("DOCX 본문을 찾지 못했습니다.");const f=Ah(await o.async("string")),p=Array.from(f.getElementsByTagNameNS("*","body"))[0]||f.documentElement,d=Eh(p);if(!d.text)throw new Error("DOCX에서 읽을 강의노트 텍스트를 찾지 못했습니다.");return{...d,format:"DOCX",fileName:u.name}}async function r1(u){const w=await _s.loadAsync(await u.arrayBuffer()),o=Object.keys(w.files).filter(m=>/^Contents\/section\d+\.xml$/i.test(m)).sort((m,_)=>m.localeCompare(_,void 0,{numeric:!0}));if(!o.length)throw new Error("HWPX 본문 섹션을 찾지 못했습니다.");const f=[];let p=0,d=0;for(const m of o){const _=w.file(m);if(!_)continue;const y=Eh(Ah(await _.async("string")).documentElement);y.text&&f.push(y.text),p+=y.tables,d+=y.paragraphs}const g=f.join(`

`).trim();if(!g)throw new Error("HWPX에서 읽을 강의노트 텍스트를 찾지 못했습니다.");return{text:g,tables:p,paragraphs:d,format:"HWPX",fileName:u.name}}async function u1(u){const w=u.name.toLowerCase().split(".").pop()||"";if(w==="docx")return s1(u);if(w==="hwpx")return r1(u);if(w==="txt"||w==="md")return{text:await u.text(),format:"TEXT",tables:0,paragraphs:0,fileName:u.name};throw w==="hwp"?new Error("구형 .hwp는 브라우저에서 안정적으로 읽기 어려워 이번 버전에서는 지원하지 않습니다. HWPX 또는 DOCX로 저장해 주세요."):new Error("지원 형식은 DOCX, HWPX, TXT, MD입니다.")}const c1=[["ChatGPT","https://chatgpt.com/"],["Gemini","https://gemini.google.com/"],["Claude","https://claude.ai/"]];function o1(){try{return localStorage.getItem("vdf_gpt")||""}catch{return""}}function f1({onReady:u,onAiOpen:w,initialNotes:o="",initialLabel:f}){const p=ec(),d=je.useRef(null),g=je.useRef(null),[m,_]=je.useState(""),[y,S]=je.useState(""),[E,T]=je.useState(!1),[b,k]=je.useState(!1),[x,A]=je.useState(""),[j,D]=je.useState(null),[M,V]=je.useState(!1),[H,G]=je.useState(null);je.useEffect(()=>{let Y=!0;const h=()=>Pi().then(ee=>Y&&G(ee));return h(),window.addEventListener("vdf-engine-change",h),window.addEventListener("vdf-engine-registry-change",h),()=>{Y=!1,window.removeEventListener("vdf-engine-change",h),window.removeEventListener("vdf-engine-registry-change",h)}},[]),je.useEffect(()=>{o&&(_(o),S(""),A(""),D(null))},[o]);function L(Y){_(Y),S(""),A(""),j&&D(null)}async function fe(Y){var h;if(Y)try{k(!0),A("");const ee=await u1(Y);_(ee.text),S(""),D(ee),p.push(`${ee.fileName}에서 강의노트를 불러왔습니다.`,"success"),(h=d.current)==null||h.focus()}catch(ee){const Z=ee instanceof Error?ee.message:"강의노트 파일을 읽지 못했습니다.";A(Z),p.push(Z,"error")}finally{k(!1),g.current&&(g.current.value="")}}async function $(){var Y;try{T(!0),A("");const h=await n1(m);return S(h),u==null||u(),p.push("VDF Prompt를 만들었습니다.","success"),h}catch(h){const ee=h instanceof Error?h.message:"Prompt를 만들지 못했습니다.";return A(ee),p.push(ee,"error"),(Y=d.current)==null||Y.focus(),""}finally{T(!1)}}async function me(){const Y=y||await $();Y&&(await navigator.clipboard.writeText(Y),p.push("VDF Prompt를 복사했습니다.","success"))}function be(Y){window.open(Y,"_blank","noopener"),w==null||w()}function B(){var h;let Y=o1();if(!Y&&(Y=((h=window.prompt("기존 VDF GPT 주소를 붙여넣어 주세요","https://chatgpt.com/g/"))==null?void 0:h.trim())||"",Y))try{localStorage.setItem("vdf_gpt",Y)}catch{}Y&&window.open(Y,"_blank","noopener")}return s.jsxs("section",{className:"panel bridge-panel",id:"prompt-bridge","aria-labelledby":"prompt-bridge-title",children:[s.jsxs("div",{className:"panel-head",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"STEP 1"}),s.jsx("h2",{id:"prompt-bridge-title",children:"강의노트로 계획 만들기"})]}),s.jsxs("div",{className:"tag-row",children:[s.jsx(qe,{tone:"success",children:(H==null?void 0:H.label)||"엔진 확인 중"}),s.jsxs(qe,{tone:"info",children:["Prompt Bridge ",s.jsx(Yu,{text:"현재 ACTIVE VDF 엔진의 지시문과 규칙을 강의노트와 묶어 실행 Prompt를 만듭니다."})]})]})]}),s.jsx("p",{className:"bridge-lead",children:"강의노트를 직접 붙여넣거나 DOCX·HWPX에서 불러온 뒤, 현재 ACTIVE 엔진으로 Prompt를 만듭니다."}),f&&s.jsxs("div",{className:"regression-loaded",children:[s.jsx(qe,{tone:"info",children:"REGRESSION"}),s.jsx("b",{children:f}),s.jsx("span",{children:"테스트 강의노트가 자동으로 불러와졌습니다."})]}),s.jsxs("div",{className:"lecture-source-head",children:[s.jsx("label",{className:"field-label",htmlFor:"lecture-notes",children:"강의노트"}),s.jsxs("div",{className:"lecture-source-actions",children:[s.jsx("input",{ref:g,className:"sr-only",type:"file",accept:".docx,.hwpx,.txt,.md",onChange:Y=>{var h;return fe((h=Y.target.files)==null?void 0:h[0])}}),s.jsxs("button",{className:"button secondary nowrap",type:"button",disabled:b,onClick:()=>{var Y;return(Y=g.current)==null?void 0:Y.click()},children:[s.jsx(Iu,{size:16}),b?"문서 읽는 중…":"DOCX · HWPX 불러오기"]}),s.jsx(Yu,{text:"DOCX와 HWPX의 본문·표를 브라우저에서 읽어 텍스트로 변환합니다. 구형 HWP는 HWPX 또는 DOCX로 저장해 주세요."})]})]}),s.jsxs("div",{className:`lecture-drop ${M?"dragging":""}`,onDragEnter:Y=>{Y.preventDefault(),V(!0)},onDragOver:Y=>Y.preventDefault(),onDragLeave:Y=>{Y.preventDefault(),Y.currentTarget===Y.target&&V(!1)},onDrop:Y=>{var h;Y.preventDefault(),V(!1),fe((h=Y.dataTransfer.files)==null?void 0:h[0])},children:[s.jsx("textarea",{ref:d,id:"lecture-notes",className:"lecture-notes",value:m,onChange:Y=>L(Y.target.value),placeholder:"강의노트를 붙여넣거나 DOCX·HWPX 파일을 이 영역에 놓으세요."}),!m&&s.jsxs("div",{className:"lecture-drop-hint","aria-hidden":"true",children:[s.jsx(ig,{size:18}),s.jsx("span",{children:"파일을 여기로 끌어다 놓아도 됩니다"})]})]}),j&&s.jsxs("div",{className:"lecture-import-meta","aria-live":"polite",children:[s.jsx(qe,{tone:"success",children:j.format}),s.jsx("b",{children:j.fileName}),s.jsxs("span",{children:["본문 ",j.paragraphs,"개",j.tables?` · 표 ${j.tables}개 구조 보존`:""]})]}),s.jsx("p",{className:"field-help",children:"지원: DOCX, HWPX, TXT, MD · 구형 HWP는 HWPX 또는 DOCX로 저장해 주세요."}),s.jsxs("div",{className:"action-row bridge-actions",children:[s.jsxs("button",{className:"button primary",onClick:$,disabled:E||b,children:[s.jsx(hh,{size:17}),E?"Prompt 만드는 중…":"VDF Prompt 만들기"]}),s.jsxs("button",{className:"button secondary",onClick:me,disabled:E||b,children:[s.jsx(Vu,{size:17}),"Prompt 복사"]})]}),x&&s.jsx("div",{className:"error-box",role:"alert",children:x}),y&&s.jsxs("div",{className:"generated-prompt",children:[s.jsxs("div",{className:"panel-head",children:[s.jsx("b",{children:"생성된 Prompt"}),s.jsx(qe,{tone:"success",children:(H==null?void 0:H.version)||""})]}),s.jsx("pre",{children:y})]}),s.jsxs("div",{className:"ai-links",children:[s.jsxs("span",{children:[s.jsx(Wp,{size:17})," 사용할 AI 열기"]}),c1.map(([Y,h])=>s.jsxs("button",{className:"button secondary",onClick:()=>be(h),children:[Y,s.jsx(ng,{size:14})]},Y)),s.jsx("button",{className:"button ghost",onClick:B,children:"기존 VDF GPT"})]})]})}const d1={brand:"on",emptySide:"left",accent:"#1F6F68"};function h1(u,w){const o=w.expected.strict||{},f=[];let p=0,d=0;const g=typeof o.block_count=="number"?o.block_count:null;if(g!==null){d++;const y=u.length===g;f.push(`${y?"✓":"✕"} block_count ${u.length} / expected ${g}`),y||p++}const m=typeof o.image_count=="number"?o.image_count:null;if(m!==null){d++;const y=u.filter(E=>E.card).length,S=y===m;f.push(`${S?"✓":"✕"} image_count ${y} / expected ${m}`),S||p++}const _=Array.isArray(o.blocks)?o.blocks:[];for(const y of _){const S=String(y.id||""),E=u.find(k=>k.block.id===S);if(d++,!E){f.push(`✕ ${S} missing`),p++;continue}const b=[["info_type",E.block.info_type,y.info_type],["track",E.block.track,y.track],["card",E.block.card??null,y.card??null]].filter(([,k,x])=>x!==void 0&&k!==x);b.length?(p++,f.push(`✕ ${S} ${b.map(([k,x,A])=>`${k}:${String(x)}≠${String(A)}`).join(" · ")}`)):f.push(`✓ ${S} structure`)}return d?p?{status:"FAIL",checks:f,summary:`${p}개 Golden 기준이 다릅니다.`}:{status:"PASS",checks:f,summary:"현재 결과가 저장된 Golden 구조 기준을 통과했습니다."}:{status:"REVIEW",checks:["구조 비교용 strict Golden이 아직 확정되지 않았습니다."],summary:`${w.status} 케이스 — 사람이 결과를 검토해야 합니다.`}}function m1({regressionLaunch:u}){const w=ec(),o=je.useRef(null),[f,p]=je.useState(""),[d,g]=je.useState([]),[m,_]=je.useState({}),[y,S]=je.useState(""),[E,T]=je.useState(1),[b,k]=je.useState(1),[x,A]=je.useState(!1),[j,D]=je.useState("all"),[M,V]=je.useState(d1),[H,G]=je.useState(null),[L,fe]=je.useState(null),[$,me]=je.useState(null),[be,B]=je.useState(null);je.useEffect(()=>{let ne=!0;const ge=()=>Pi().then(Ne=>ne&&G(Ne));return ge(),window.addEventListener("vdf-engine-change",ge),window.addEventListener("vdf-engine-registry-change",ge),()=>{ne=!1,window.removeEventListener("vdf-engine-change",ge),window.removeEventListener("vdf-engine-registry-change",ge)}},[]),je.useEffect(()=>{u&&(me(u.test),B(null),p(""),g([]),_({}),S(""),A(!1),T(1),k(1),w.push(`${u.test.id} 테스트 강의노트를 불러왔습니다.`,"success"))},[u==null?void 0:u.nonce]),je.useEffect(()=>{requestAnimationFrame(()=>{window.scrollTo({top:0,left:0,behavior:"auto"});const ne=document.querySelector(`[data-step-heading="${E}"]`);ne==null||ne.focus({preventScroll:!0})})},[E]);const Y=L||H,h=je.useMemo(()=>d.map(ne=>({base:ne,current:Y?r_(ne,m[ne.block.id],M,Y):ne})),[d,m,M,Y]),ee=je.useMemo(()=>h.filter(({current:ne})=>j==="all"||j==="image"&&!!ne.card||j==="warning"&&ne.warnings.length>0),[h,j]),Z=h.reduce((ne,{current:ge})=>ne+ge.warnings.length,0),Q=h.filter(({current:ne})=>ne.card).length,pe=h.filter(({current:ne})=>ne.diagramSvg&&!ne.card).length;async function se(ne=f,ge=!1){try{const Ne=await Pi(),He=s_(ne,M,Ne);g(He),fe(Ne),_({}),S(""),T(2),k(3),A(ge),B($?h1(He,$):null),w.push(`${He.length}개 덩어리의 계획 검사가 완료되었습니다.`,"success")}catch(Ne){const He=Ne instanceof Error?Ne.message:"알 수 없는 오류";S(`계획을 읽지 못했습니다 — ${He}. AI 답변의 2부 JSON 전체를 다시 넣어 주세요.`),T(1),w.push("계획을 읽지 못했습니다.","error")}}async function z(ne){if(!ne)return;const ge=await f_(ne);p(ge),k(Math.max(b,2)),T(1)}async function R(ne,ge){await navigator.clipboard.writeText(ne),w.push(`${ge}를 클립보드에 복사했습니다.`,"success")}function U(ne,ge){const Ne=URL.createObjectURL(new Blob([ne],{type:"image/svg+xml"})),He=document.createElement("a");He.href=Ne,He.download=`${ge}.svg`,He.click(),URL.revokeObjectURL(Ne),w.push("SVG 파일을 저장했습니다.","success")}function ae(ne,ge){_(Ne=>({...Ne,[ne]:ge}))}function le(ne){_(ge=>{const Ne={...ge};return delete Ne[ne],Ne})}function ce(ne,ge){return ge.infoType!==ne.block.info_type||(ge.card??null)!==(ne.block.card??null)}function ve(ne){ne<=b&&T(ne)}function Le(){T(3),k(4)}const Se=Y?vh(Y):null;return s.jsxs("div",{className:"page checker-workflow",children:[s.jsxs("header",{className:"page-head",children:[s.jsx("p",{className:"eyebrow",children:"VDF WORKFLOW"}),s.jsx("h1",{tabIndex:-1,"data-step-heading":E===1?"1":void 0,children:"강의노트를 VDF 계획으로 만들고, 검사하고, 제작에 활용합니다"}),s.jsxs("p",{children:["현재 ACTIVE 엔진: ",s.jsx("b",{children:(H==null?void 0:H.label)||"확인 중"})]}),$&&s.jsxs("p",{className:"active-regression",children:["Regression: ",s.jsxs("b",{children:[$.id," · ",$.name]})," · ",$.status]})]}),s.jsx(G_,{current:E,maxAvailable:b,onStep:ve}),E===1&&s.jsxs(s.Fragment,{children:[s.jsxs("section",{className:"entry-grid",children:[s.jsxs("button",{className:"choice-card",onClick:()=>{me(null),p(ah),k(2),se(ah,!0)},children:[s.jsx(rg,{}),s.jsx("b",{children:"예시로 먼저 체험하기"}),s.jsx("span",{children:"검증된 샘플로 계획 검사까지 실행합니다."})]}),s.jsxs("button",{className:"choice-card",onClick:()=>{var ne;return(ne=document.getElementById("prompt-bridge"))==null?void 0:ne.scrollIntoView({behavior:"smooth",block:"start"})},children:[s.jsx(Fu,{}),s.jsx("b",{children:"내 강의로 시작하기"}),s.jsx("span",{children:"강의노트 → Prompt → AI 결과 순서로 진행합니다."})]})]}),s.jsx(f1,{initialNotes:($==null?void 0:$.input)||"",initialLabel:$?`${$.id} · ${$.name}`:void 0,onReady:()=>k(Math.max(b,1))}),s.jsxs("section",{className:"panel checker-panel",children:[s.jsxs("div",{className:"panel-head",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"AI RESULT"}),s.jsx("h2",{children:"AI가 만든 2부 JSON 붙여넣기"})]}),s.jsx(qe,{tone:"info",children:"계획 입력"})]}),s.jsxs("p",{children:["ChatGPT·Gemini·Claude에서 나온 ",s.jsx("b",{children:"2부 JSON"}),"을 붙여넣으면 다음 단계에서 계약과 VDF 판단을 검사합니다."]}),s.jsx("textarea",{value:f,onChange:ne=>{p(ne.target.value),S(""),ne.target.value.trim()&&k(Math.max(b,2))},placeholder:"AI 답변의 2부 JSON을 붙여넣으세요"}),s.jsxs("div",{className:"action-row",children:[s.jsxs("button",{className:"button primary",disabled:!f.trim(),onClick:()=>se(),children:[s.jsx($i,{size:17}),"2단계 계획 검사"]}),s.jsxs("button",{className:"button secondary",onClick:()=>{var ne;return(ne=o.current)==null?void 0:ne.click()},children:[s.jsx(Iu,{size:17}),"JSON 파일"]}),s.jsx("input",{ref:o,type:"file",accept:".json,.txt",hidden:!0,onChange:ne=>{var ge;return z((ge=ne.target.files)==null?void 0:ge[0])}})]}),s.jsxs("div",{className:"dropzone",onDragOver:ne=>ne.preventDefault(),onDrop:ne=>{var ge;ne.preventDefault(),z((ge=ne.dataTransfer.files)==null?void 0:ge[0])},children:[s.jsx(Fu,{}),"JSON/TXT 파일을 여기에 놓아도 됩니다."]}),y&&s.jsx("div",{className:"error-box",role:"alert",children:y})]})]}),E===2&&s.jsxs(s.Fragment,{children:[s.jsxs("section",{className:"panel step-intro",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"STEP 2"}),s.jsx("h2",{tabIndex:-1,"data-step-heading":"2",children:"계획 검사"}),s.jsx("p",{children:"JSON 계약과 block / info_type / gate / card를 검사합니다. 이 단계에서는 아직 제작 결과를 판단하지 않습니다."})]}),s.jsx(qe,{tone:Z?"warning":"success",children:Z?`${Z} REVIEW`:"PASS"})]}),s.jsxs("section",{className:"summary",children:[s.jsxs("span",{children:[s.jsx("b",{children:d.length})," 덩어리"]}),s.jsxs("span",{children:[s.jsx("b",{children:Q})," 그림"]}),s.jsxs("span",{children:[s.jsx("b",{children:pe})," 도형"]}),s.jsxs("span",{className:Z?"warning-text":"success-text",children:[s.jsx("b",{children:Z})," 확인할 것"]}),s.jsxs("span",{className:"summary-engine",children:["검사 엔진 ",s.jsx("b",{children:L==null?void 0:L.label})]})]}),be&&s.jsxs("section",{className:`panel regression-compare ${be.status.toLowerCase()}`,children:[s.jsxs("div",{className:"panel-head",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"REGRESSION CHECK"}),s.jsxs("h2",{children:[$==null?void 0:$.id," Golden 비교"]})]}),s.jsx(qe,{tone:be.status==="PASS"?"success":be.status==="FAIL"?"error":"warning",children:be.status})]}),s.jsx("p",{children:be.summary}),s.jsx("div",{className:"regression-checks",children:be.checks.map((ne,ge)=>s.jsx("span",{children:ne},ge))})]}),x&&s.jsxs("section",{className:"guided",children:[s.jsx("b",{children:"예시 체험"}),s.jsx("p",{children:"공식 JSON 계약과 엔진 경고가 어떻게 작동하는지 확인한 뒤 결과 확인으로 이동하세요."})]}),s.jsx("div",{className:"validation-list",children:h.map(({current:ne})=>s.jsxs("article",{className:"panel validation-row",children:[s.jsx(qe,{tone:ne.warnings.length?"warning":"success",children:ne.block.id}),s.jsxs("div",{children:[s.jsx("b",{children:ne.block.title}),s.jsxs("p",{children:[ne.infoType," · ",ne.block.track," · ",ne.card?`카드 ${ne.card}`:"배경 없음"]})]}),s.jsx("div",{className:"validation-status",children:ne.warnings.length?ne.warnings.map(ge=>s.jsx("span",{children:ge.message},ge.key)):s.jsx("span",{className:"success-text",children:"계약/기본 검사 통과"})})]},ne.block.id))}),s.jsxs("div",{className:"step-actions",children:[s.jsxs("button",{className:"button secondary",onClick:()=>ve(1),children:[s.jsx(Mu,{size:17}),"계획 만들기로"]}),s.jsxs("button",{className:"button primary",onClick:Le,children:[s.jsx($i,{size:17}),"3단계 결과 확인"]})]})]}),E===3&&d.length>0&&s.jsxs(s.Fragment,{children:[s.jsxs("section",{className:"panel step-intro",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"STEP 3"}),s.jsx("h2",{tabIndex:-1,"data-step-heading":"3",children:"결과 확인"}),s.jsx("p",{children:"블록별 시각화 결과와 관계·카드를 확인하고 필요한 곳만 교수자가 조정합니다."})]}),s.jsx(qe,{tone:"info",children:L==null?void 0:L.label})]}),s.jsxs("section",{className:"panel settings",children:[s.jsx("div",{children:s.jsxs("label",{children:["브랜드 보호",s.jsxs("select",{value:M.brand,onChange:ne=>V({...M,brand:ne.target.value}),children:[s.jsx("option",{value:"on",children:"켜기"}),s.jsx("option",{value:"off",children:"끄기"})]})]})}),s.jsx("div",{children:s.jsxs("label",{children:["배경 빈쪽",s.jsxs("select",{value:M.emptySide,onChange:ne=>V({...M,emptySide:ne.target.value}),children:[s.jsx("option",{value:"left",children:"왼쪽"}),s.jsx("option",{value:"right",children:"오른쪽"})]})]})}),s.jsx("div",{children:s.jsxs("label",{children:["강조색",s.jsx("input",{type:"color",value:M.accent,onChange:ne=>V({...M,accent:ne.target.value})})]})})]}),s.jsxs("section",{className:"summary",children:[s.jsxs("span",{children:[s.jsx("b",{children:d.length})," 덩어리"]}),s.jsxs("span",{children:[s.jsx("b",{children:Q})," 그림"]}),s.jsxs("span",{children:[s.jsx("b",{children:pe})," 도형"]}),s.jsxs("span",{children:[s.jsx("b",{children:Z})," 확인할 것"]}),s.jsxs("div",{className:"filter-row",children:[s.jsx("button",{className:j==="all"?"active":"",onClick:()=>D("all"),children:"전체"}),s.jsx("button",{className:j==="image"?"active":"",onClick:()=>D("image"),children:"그림만"}),s.jsx("button",{className:j==="warning"?"active":"",onClick:()=>D("warning"),children:"확인할 것만"})]})]}),s.jsx("div",{className:"result-list",children:ee.map(({base:ne,current:ge})=>{const Ne=ce(ne,ge),He=ge.card&&(Se==null?void 0:Se.cards[ge.card]);return s.jsxs("article",{className:"result-card",children:[s.jsxs("header",{children:[s.jsx(qe,{tone:ge.card?"info":"neutral",children:ge.block.id}),s.jsxs("div",{children:[s.jsx("h3",{children:ge.block.title}),s.jsx("p",{children:ge.card?"글 + 그림":ge.diagramSvg?"글 + 도형":"글 중심"})]}),ge.card&&s.jsxs(qe,{tone:(He==null?void 0:He.status)==="verified"||(He==null?void 0:He.status)==="verified_after_fix"?"success":"warning",children:[ge.card," · ",(He==null?void 0:He.ko)||ge.card]})]}),s.jsx(I_,{result:ge,adjusted:Ne}),s.jsxs("div",{className:"meta-row",children:[s.jsxs("span",{children:[s.jsx("b",{children:"관계"})," ",ge.infoType]}),s.jsxs("span",{children:[s.jsx("b",{children:"항목"})," ",ge.block.item_count]}),Ne&&s.jsx(qe,{tone:"warning",children:"교수자 조정됨"})]}),ge.block.gate&&s.jsxs("p",{className:"reason",children:[ge.block.gate.passed?"그릴 것이 정해졌다":"그림 없이 간다"," — ",ge.block.gate.reason]}),s.jsx(W_,{base:ne,current:ge,override:m[ge.block.id],onChange:et=>ae(ge.block.id,et),onReset:()=>le(ge.block.id)}),s.jsx(Y_,{result:ge}),ge.warnings.length>0&&s.jsxs("div",{className:"warning-box",children:[s.jsx("b",{children:"확인할 것"}),ge.warnings.map(et=>s.jsxs("p",{children:["• ",et.message]},et.key))]}),!ge.card&&ge.diagramSvg&&s.jsx(P_,{result:ge,onCopy:et=>R(et,"SVG"),onDownload:et=>U(et,ge.block.id)})," ",ge.prompt&&s.jsxs("div",{className:"prompt-box",children:[s.jsxs("div",{className:"prompt-head",children:[s.jsx("b",{children:"Image Prompt"}),s.jsx(Yu,{text:"현재 결과 엔진의 카드 규칙으로 조립한 6줄 이미지 지시문입니다."}),s.jsx("button",{onClick:()=>R(Hu(ge.prompt),"이미지 Prompt"),children:"복사"})]}),s.jsx("pre",{children:Hu(ge.prompt)})]})]},ge.block.id)})}),s.jsxs("div",{className:"step-actions",children:[s.jsxs("button",{className:"button secondary",onClick:()=>ve(2),children:[s.jsx(Mu,{size:17}),"계획 검사로"]}),s.jsxs("button",{className:"button primary",onClick:()=>{T(4),k(4)},children:[s.jsx($i,{size:17}),"4단계 제작 활용"]})]})]}),E===4&&d.length>0&&s.jsxs(s.Fragment,{children:[s.jsxs("section",{className:"panel step-intro",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"STEP 4"}),s.jsx("h2",{tabIndex:-1,"data-step-heading":"4",children:"제작 활용"}),s.jsx("p",{children:"확정한 결과에서 이미지 Prompt와 SVG 구조도를 제작 도구로 가져갑니다."})]}),s.jsx(qe,{tone:"success",children:"READY"})]}),s.jsx("div",{className:"production-grid",children:h.map(({current:ne})=>s.jsxs("article",{className:"panel production-card",children:[s.jsxs("div",{className:"panel-head",children:[s.jsxs("div",{children:[s.jsx(qe,{tone:"neutral",children:ne.block.id}),s.jsx("h3",{children:ne.block.title})]}),s.jsx(qe,{tone:ne.prompt?"info":ne.diagramSvg?"success":"neutral",children:ne.prompt?"IMAGE":ne.diagramSvg?"SVG":"TEXT"})]}),ne.prompt?s.jsxs(s.Fragment,{children:[s.jsx("p",{children:"이미지 생성 AI용 6줄 Prompt"}),s.jsxs("button",{className:"button primary",onClick:()=>R(Hu(ne.prompt),"이미지 Prompt"),children:[s.jsx(Vu,{size:16}),"Prompt 복사"]})]}):ne.diagramSvg?s.jsxs(s.Fragment,{children:[s.jsx("p",{children:"슬라이드에 사용할 구조도 SVG"}),s.jsxs("div",{className:"action-row",children:[s.jsxs("button",{className:"button secondary",onClick:()=>R(ne.diagramSvg,"SVG"),children:[s.jsx(Vu,{size:16}),"SVG 복사"]}),s.jsxs("button",{className:"button primary",onClick:()=>U(ne.diagramSvg,ne.block.id),children:[s.jsx(Ju,{size:16}),"SVG 저장"]})]})]}):s.jsx("p",{children:"이 블록은 글 중심으로 사용합니다."})]},ne.block.id))}),s.jsxs("section",{className:"panel",children:[s.jsxs("div",{className:"panel-head",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"PPT HANDOFF"}),s.jsx("h2",{children:"PowerPoint 제작으로 넘기기"})]}),s.jsx(qe,{tone:"info",children:L==null?void 0:L.label})]}),s.jsx("p",{children:"이미지 Prompt와 SVG를 복사/저장한 뒤 대학 PPT 템플릿에서 최종 레이아웃을 선택합니다. VDF는 레이아웃 자체를 지목하지 않습니다."})]}),s.jsx("div",{className:"step-actions",children:s.jsxs("button",{className:"button secondary",onClick:()=>ve(3),children:[s.jsx(Mu,{size:17}),"결과 확인으로"]})})]})]})}const p1=[["순서·절차","순서를 바꾸면 뜻이 달라집니다.","단계 흐름"],["분류·계층","항목이 둘 이상의 무리로 묶입니다.","카드 + 사례"],["비교·대조","두 대상을 같은 기준으로 나란히 봅니다.","좌우 대비"],["인과·수렴","앞의 항목이 다음 결과로 이어집니다.","화살표 연쇄"],["정의","용어 하나와 뜻 하나를 짝지어 봅니다.","글 중심"],["목록","순서를 바꿔도 뜻이 크게 달라지지 않습니다.","카드 나열"]],g1=[["1","본문 범위를 확인한다","표지·학습목표·마음열기·평가·학습정리를 제외하고 본강의 본문을 대상으로 봅니다."],["2","블록을 나누고 항목 관계를 정한다","내용을 의미 단위로 나눈 뒤 순서·절차, 분류·계층, 비교·대조, 인과·수렴, 정의, 목록 중 하나로 읽습니다."],["3","글자를 지워본다","라벨을 모두 지웠을 때도 사물·현상·장치가 남으면 이미지 후보, 남지 않으면 도형/글 중심입니다."],["4","이미지 후보만 Gate를 확인한다","노트에 없는 사물을 만들지 않고, 그릴 대상이 구체적 사물 하나 또는 같은 사물의 변형으로 좁혀지는지 확인합니다."],["5","이미지면 카드 A~F를 고른다","이미지가 필요한 경우에만 A~F 카드의 검증된 배치 규칙을 사용합니다. Shape는 항목 관계에 따라 SVG/글 구조로 갑니다."]];function _1(){return s.jsxs("div",{className:"page",children:[s.jsxs("header",{className:"page-head",children:[s.jsx("p",{className:"eyebrow",children:"HOW TO USE"}),s.jsx("h1",{children:"VDF는 강의노트에서 “무엇을 어떻게 보여줄지”를 단계적으로 정합니다"}),s.jsx("p",{children:"VDF는 자동 슬라이드 생성기가 아니라 시각화 의사결정 지원 도구입니다. AI가 계획을 제안하고, 교수자가 확인·수정한 뒤 제작에 사용합니다."})]}),s.jsxs("section",{className:"panel guide-section",children:[s.jsxs("div",{className:"section-title",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"QUICK START"}),s.jsx("h2",{children:"1 → 4 작업 흐름"})]}),s.jsx(qe,{tone:"success",children:"Engine 6.0 FREEZE"})]}),s.jsxs("div",{className:"pipeline","aria-label":"VDF 전체 작업 흐름",children:[s.jsxs("div",{className:"pipeline-main",children:[s.jsxs("div",{className:"pipeline-node",children:[s.jsx(nh,{}),s.jsx("b",{children:"1 계획 만들기"}),s.jsx("span",{children:"강의노트 → 실행 Prompt → AI JSON"})]}),s.jsx(oa,{className:"pipeline-arrow","aria-hidden":"true"}),s.jsxs("div",{className:"pipeline-node",children:[s.jsx(Xu,{}),s.jsx("b",{children:"2 계획 검사"}),s.jsx("span",{children:"JSON 계약과 VDF 판단 확인"})]}),s.jsx(oa,{className:"pipeline-arrow","aria-hidden":"true"}),s.jsxs("div",{className:"pipeline-node",children:[s.jsx(hg,{}),s.jsx("b",{children:"3 결과 확인"}),s.jsx("span",{children:"교수자가 관계·Image/Shape·Card를 검토"})]}),s.jsx(oa,{className:"pipeline-arrow","aria-hidden":"true"}),s.jsxs("div",{className:"pipeline-node",children:[s.jsx(ug,{}),s.jsx("b",{children:"4 제작 활용"}),s.jsx("span",{children:"SVG 또는 이미지 Prompt를 PPT 제작에 사용"})]})]}),s.jsxs("aside",{className:"rules-callout",children:[s.jsx("b",{children:"처음 쓰는 순서"}),s.jsx("p",{children:"① 강의노트를 붙여넣거나 파일로 불러옵니다. ② 생성된 실행 Prompt를 ChatGPT/Gemini/Claude 등에 넣습니다. ③ AI가 낸 2부 JSON을 다시 VDF에 붙여넣습니다. ④ 검사 결과를 확인하고 제작용 SVG/Prompt를 사용합니다."})]})]})]}),s.jsxs("section",{className:"panel guide-section",children:[s.jsxs("div",{className:"section-title",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"DECISION FLOW"}),s.jsx("h2",{children:"VDF 의사결정 구조"})]}),s.jsx(qe,{tone:"info",children:"rules.json = Source of Truth"})]}),s.jsx("p",{children:"핵심은 “무조건 그림으로 만들기”가 아닙니다. 범위와 관계를 먼저 읽고, 필요한 경우에만 이미지를 통과시킵니다."}),s.jsx("ol",{className:"decision-flow",children:g1.map(([u,w,o])=>s.jsxs("li",{children:[s.jsx("span",{className:"decision-number",children:u}),s.jsxs("div",{children:[s.jsx("b",{children:w}),s.jsx("p",{children:o})]})]},u))}),s.jsxs("div",{className:"pipeline","aria-label":"VDF 의사결정에서 제작까지",children:[s.jsxs("div",{className:"pipeline-main",children:[s.jsxs("div",{className:"pipeline-node",children:[s.jsx(nh,{}),s.jsx("b",{children:"강의노트 본문"}),s.jsx("span",{children:"분석 범위 확정"})]}),s.jsx(oa,{className:"pipeline-arrow","aria-hidden":"true"}),s.jsxs("div",{className:"pipeline-node",children:[s.jsx(eh,{}),s.jsx("b",{children:"블록 + 정보유형"}),s.jsx("span",{children:"6종 관계 중 하나"})]}),s.jsx(oa,{className:"pipeline-arrow","aria-hidden":"true"}),s.jsxs("div",{className:"pipeline-node",children:[s.jsx(Xu,{}),s.jsx("b",{children:"Image / Shape"}),s.jsx("span",{children:"라벨 테스트"})]}),s.jsx(oa,{className:"pipeline-arrow","aria-hidden":"true"}),s.jsxs("div",{className:"pipeline-node",children:[s.jsx(Fu,{}),s.jsx("b",{children:"Image Gate"}),s.jsx("span",{children:"구체적 대상이 좁혀지는가?"})]}),s.jsxs("div",{className:"pipeline-branch",children:[s.jsxs("div",{className:"pipeline-node",children:[s.jsx(eh,{}),s.jsx("b",{children:"Shape"}),s.jsx("span",{children:"관계에 따른 SVG/글 구조"})]}),s.jsxs("div",{className:"pipeline-node",children:[s.jsx(lg,{}),s.jsx("b",{children:"Image"}),s.jsx("span",{children:"Card A~F 선택"})]})]}),s.jsx(oa,{className:"pipeline-arrow","aria-hidden":"true"}),s.jsxs("div",{className:"pipeline-node",children:[s.jsx(hh,{}),s.jsx("b",{children:"제작 자산"}),s.jsx("span",{children:"SVG 또는 6줄 Image Prompt"})]})]}),s.jsxs("aside",{className:"rules-callout",children:[s.jsx("b",{children:"가장 중요한 규칙"}),s.jsx("p",{children:"노트에 없는 사물을 발명하지 않습니다. 그림이 꼭 필요하지 않으면 Shape/글 구조로 둡니다."}),s.jsxs("div",{children:[s.jsx($i,{"aria-hidden":"true"}),"과도한 이미지 방지"]}),s.jsxs("div",{children:[s.jsx($i,{"aria-hidden":"true"}),"교수자 판단 유지"]})]})]})]}),s.jsxs("section",{className:"panel guide-section",children:[s.jsx("div",{className:"section-title",children:s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"DECISION REVIEW"}),s.jsx("h2",{children:"AI가 제안하고, 교수자가 최종 확인합니다"})]})}),s.jsxs("div",{className:"architecture-grid",children:[s.jsxs("div",{children:[s.jsx("h3",{children:"AI가 제안"}),s.jsx("p",{children:"블록 경계, 정보 유형, Image/Shape, Gate, Card를 VDF 규칙에 따라 제안합니다."})]}),s.jsxs("div",{children:[s.jsx("h3",{children:"교수자가 검토"}),s.jsx("p",{children:"블록을 합치거나 나눌지, 관계가 맞는지, 정말 이미지를 쓸지, 최종 카드가 적절한지 확인합니다."})]}),s.jsxs("div",{children:[s.jsx("h3",{children:"제작에서 확정"}),s.jsx("p",{children:"Shape는 SVG/PowerPoint 요소로, Image는 검증된 카드 Prompt로 가져가 최종 슬라이드에서 편집합니다."})]})]}),s.jsxs("p",{className:"guide-note",children:[s.jsx("b",{children:"판정 결과는 정답표가 아닙니다."})," 동일 입력에서도 블록 경계는 모델 실행에 따라 조금 달라질 수 있으므로, 결과 확인 단계에서 교수자의 판단이 최종 기준입니다."]})]}),s.jsxs("section",{className:"panel guide-section",children:[s.jsx("div",{className:"section-title",children:s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"RELATION & CARD"}),s.jsx("h2",{children:"내용의 관계와 이미지 카드는 서로 다른 판단입니다"})]})}),s.jsx("p",{children:"먼저 항목 사이의 관계를 읽습니다. 관계는 글/SVG의 구조를 정하고, 이미지가 필요한 경우에만 A~F 카드가 화면 배치를 정합니다."}),s.jsx("div",{className:"relation-grid",children:p1.map(([u,w,o])=>s.jsxs("article",{className:"relation-card",children:[s.jsx(qe,{tone:"info",children:u}),s.jsx("p",{children:w}),s.jsxs("small",{children:["글/도형 표현: ",o]})]},u))}),s.jsx("h3",{className:"subhead",children:"그림이 필요한 경우의 카드 A~F"}),s.jsx("div",{className:"card-reference",children:Object.entries(fa.cards).map(([u,w])=>s.jsxs("div",{children:[s.jsx(Zu,{card:u}),s.jsxs("div",{children:[s.jsx(qe,{tone:w.status==="verified"||w.status==="verified_after_fix"?"success":"warning",children:u}),s.jsx("b",{className:"card-reference-name",children:w.ko})]}),s.jsx("small",{children:w.status==="verified"||w.status==="verified_after_fix"?"검증됨":"결과 확인 필요"})]},u))}),s.jsxs("p",{className:"guide-note",children:[s.jsx("b",{children:"관계는 내용이 어떻게 묶이는지"}),", ",s.jsx("b",{children:"카드는 이미지가 화면에 어떻게 놓이는지"}),"를 설명합니다."]})]}),s.jsxs("section",{className:"panel guide-section",children:[s.jsxs("div",{className:"section-title",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"ENGINE"}),s.jsx("h2",{children:"판단 기준을 바꿀 때만 엔진 패키지를 교체합니다"})]}),s.jsx(qe,{tone:"success",children:"6.0.0 STABLE"})]}),s.jsxs("p",{children:["배포판의 기본 엔진은 VDF 6.0.0 Stable / Freeze입니다. 왼쪽 ",s.jsx("b",{children:"VDF 엔진 관리"}),"에서 별도 검증된 ZIP 패키지를 등록할 수 있으며, 등록만으로는 실행 기준이 바뀌지 않습니다. 검증 후 ACTIVE로 적용해야 Prompt Bridge와 Checker가 새 엔진을 사용합니다."]})]})]})}function y1({onStartRegression:u}){const w=ec(),o=je.useRef(null),[f,p]=je.useState([]),[d,g]=je.useState(""),[m,_]=je.useState(!1),[y,S]=je.useState(!1),[E,T]=je.useState(null),[b,k]=je.useState(null);async function x(){p(await Sh()),g((await Pi()).id)}je.useEffect(()=>{x();const G=()=>x();return window.addEventListener("vdf-engine-change",G),window.addEventListener("vdf-engine-registry-change",G),()=>{window.removeEventListener("vdf-engine-change",G),window.removeEventListener("vdf-engine-registry-change",G)}},[]);async function A(G){var L;rh(G),g(G),w.push(`${((L=f.find(fe=>fe.id===G))==null?void 0:L.label)||G} 엔진을 ACTIVE로 적용했습니다.`,"success")}async function j(G){if(G)try{_(!0);const L=await R_(G);w.push(`${L.label} 패키지를 등록했습니다. ACTIVE 전환은 별도로 해주세요.`,"success"),await x()}catch(L){w.push(L instanceof Error?L.message:"엔진 패키지 등록에 실패했습니다.","error")}finally{_(!1),o.current&&(o.current.value="")}}async function D(G){if(confirm("등록된 엔진을 삭제할까요?"))try{await N_(G),w.push("엔진 패키지를 삭제했습니다.","success"),await x()}catch(L){w.push(L instanceof Error?L.message:"삭제할 수 없습니다.","error")}}async function M(G){try{await U_(G),w.push(`${G.label} 엔진 ZIP을 저장했습니다.`,"success")}catch(L){w.push(L instanceof Error?L.message:"엔진 ZIP을 만들지 못했습니다.","error")}}function V(G,L){if(L.status==="REFERENCE_ONLY"||!L.input.trim()){w.push("이 케이스는 Historical Reference 전용이며 실행 입력이 확보되지 않았습니다.","info");return}d!==G.id&&(rh(G.id),g(G.id),w.push(`${G.label}을 테스트용 ACTIVE 엔진으로 적용했습니다.`,"success")),u==null||u({engineId:G.id,engineLabel:G.label,test:L,nonce:Date.now()})}const H=f.find(G=>G.id===d);return s.jsxs("div",{className:"page settings-page",children:[s.jsxs("header",{className:"page-head",children:[s.jsx("p",{className:"eyebrow",children:"ENGINE PACKAGE REGISTRY"}),s.jsx("h1",{children:"VDF 엔진 관리"}),s.jsx("p",{children:"배포 기준 엔진은 VDF 6.0.0 Reference / Stable / Freeze입니다. 필요할 때만 별도 엔진 ZIP을 등록해 시험할 수 있으며 등록만으로 ACTIVE가 바뀌지 않습니다."})]}),s.jsxs("section",{className:"panel canonical-lock",children:[s.jsxs("div",{children:[s.jsx(tg,{size:22}),s.jsxs("div",{children:[s.jsx("b",{children:"현재 ACTIVE 엔진"}),s.jsxs("p",{children:[(H==null?void 0:H.label)||"VDF 6.0 Reference / Stable"," · ",H==null?void 0:H.version]})]})]}),s.jsx(qe,{tone:"success",children:"ACTIVE"})]}),s.jsxs("section",{className:"panel canonical-lock",children:[s.jsxs("div",{children:[s.jsx(Lu,{size:22}),s.jsxs("div",{children:[s.jsx("b",{children:"Release Freeze"}),s.jsx("p",{children:"Production 기본값은 VDF 6.0.0입니다. 실험 후보는 배포 런타임에 포함하지 않습니다."})]})]}),s.jsx(qe,{tone:"success",children:"6.0.0"})]}),s.jsxs("section",{className:"panel engine-import-panel",children:[s.jsxs("div",{className:"panel-head",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"OPTIONAL REGISTER"}),s.jsx("h2",{children:"외부 엔진 패키지 등록"})]}),s.jsx(ag,{})]}),s.jsx("p",{children:"고급 검증용입니다. ZIP 안의 manifest.json, rules.json, VDF 규칙/지시문, contract.json을 확인해 등록합니다."}),s.jsx("input",{ref:o,type:"file",accept:".zip,application/zip",hidden:!0,onChange:G=>{var L;return j((L=G.target.files)==null?void 0:L[0])}}),s.jsxs("div",{className:`engine-dropzone ${y?"dragging":""}`,onDragEnter:G=>{G.preventDefault(),S(!0)},onDragOver:G=>G.preventDefault(),onDragLeave:G=>{G.preventDefault(),S(!1)},onDrop:G=>{var L;G.preventDefault(),S(!1),j((L=G.dataTransfer.files)==null?void 0:L[0])},children:[s.jsx(Iu,{}),s.jsxs("div",{children:[s.jsx("b",{children:"VDF Engine ZIP을 여기에 놓으세요"}),s.jsx("span",{children:"등록 후 자동으로 ACTIVE가 되지 않습니다."})]}),s.jsx("button",{className:"button primary",disabled:m,onClick:()=>{var G;return(G=o.current)==null?void 0:G.click()},children:m?"검증 중…":"ZIP 선택"})]})]}),s.jsx("div",{className:"engine-grid",children:f.map(G=>s.jsxs("section",{className:`panel engine-card ${d===G.id?"engine-active":""}`,children:[s.jsxs("div",{className:"panel-head",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:G.source==="BUILT_IN"?"BUILT-IN":"PACKAGE"}),s.jsx("h2",{children:G.label})]}),s.jsx(qe,{tone:G.status==="STABLE"?"success":G.status==="HOLD"||G.status==="CANDIDATE"?"warning":"info",children:G.source==="BUILT_IN"?"REFERENCE / STABLE":G.status})]}),s.jsxs("dl",{className:"engine-meta",children:[s.jsxs("div",{children:[s.jsx("dt",{children:"Version"}),s.jsx("dd",{children:G.version})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"등록일"}),s.jsx("dd",{children:G.registeredAt.slice(0,10)})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"Rules"}),s.jsx("dd",{children:s.jsxs("code",{children:[G.rulesHash.slice(0,14),"…"]})})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"Instruction"}),s.jsx("dd",{children:s.jsxs("code",{children:[G.instructionHash.slice(0,14),"…"]})})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"Contract"}),s.jsx("dd",{children:s.jsxs("code",{children:[G.contractHash.slice(0,14),"…"]})})]}),s.jsxs("div",{children:[s.jsx("dt",{children:"Regression"}),s.jsx("dd",{children:s.jsxs(qe,{tone:G.regressionCases.length?"success":"warning",children:[G.regressionCases.length," CASES"]})})]})]}),E===G.id&&s.jsxs("div",{className:"engine-details",children:[s.jsxs("div",{className:"engine-file-summary",children:[s.jsx("b",{children:"Package contents"}),s.jsx("span",{children:"manifest.json"}),s.jsx("span",{children:"rules.json"}),s.jsx("span",{children:"VDF6_규칙.md"}),s.jsx("span",{children:"VDF6_지시문.md"}),s.jsx("span",{children:"contract.json"}),s.jsxs("span",{children:["regression/ · ",G.regressionCases.length," cases"]})]}),s.jsx("b",{children:"Manifest"}),s.jsx("pre",{children:JSON.stringify(G.manifest,null,2)}),s.jsxs("div",{className:"regression-browser",children:[s.jsxs("div",{className:"panel-head",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"REGRESSION BROWSER"}),s.jsx("h3",{children:"이 엔진의 테스트 케이스"})]}),s.jsx(qe,{tone:G.regressionCases.length?"success":"warning",children:G.regressionCases.length})]}),G.regressionCases.length?G.regressionCases.map(L=>s.jsxs("article",{className:"regression-case",children:[s.jsxs("div",{className:"regression-case-head",children:[s.jsxs("div",{children:[s.jsxs("b",{children:[L.id," · ",L.name]}),s.jsx("p",{children:L.purpose||"저장된 expected 기준으로 엔진 결과를 확인합니다."})]}),s.jsx(qe,{tone:L.status==="GOLDEN"?"success":L.status==="CANDIDATE"?"warning":"info",children:L.status})]}),s.jsxs("div",{className:"action-row",children:[s.jsxs("button",{className:"button primary",disabled:L.status==="REFERENCE_ONLY"||!L.input.trim(),onClick:()=>V(G,L),children:[s.jsx(th,{size:16}),L.status==="REFERENCE_ONLY"?"Reference 전용":"이 엔진으로 테스트"]}),s.jsxs("button",{className:"button secondary",onClick:()=>k(b===`${G.id}:${L.id}`?null:`${G.id}:${L.id}`),children:["Expected ",b===`${G.id}:${L.id}`?"닫기":"보기"]})]}),b===`${G.id}:${L.id}`&&s.jsx("pre",{className:"expected-json",children:JSON.stringify(L.expected,null,2)})]},L.id)):s.jsx("p",{className:"field-help",children:"이 패키지에는 regression case가 없습니다."})]})]}),s.jsxs("div",{className:"action-row engine-actions",children:[s.jsx("button",{className:"button secondary",onClick:()=>T(E===G.id?null:G.id),children:E===G.id?"상세 닫기":"상세 / 테스트"}),s.jsxs("button",{className:"button secondary",onClick:()=>M(G),children:[s.jsx(Ju,{size:17}),"엔진 ZIP 다운로드"]}),d===G.id?s.jsxs("button",{className:"button secondary",disabled:!0,children:[s.jsx(Lu,{size:17}),"현재 적용 중"]}):s.jsxs("button",{className:"button primary",onClick:()=>A(G.id),children:[s.jsx(cg,{size:17}),"이 엔진을 ACTIVE로 적용"]}),G.source==="PACKAGE"&&s.jsx("button",{className:"button ghost danger-button",disabled:d===G.id,"aria-label":`${G.label} 삭제`,title:d===G.id?"ACTIVE 엔진은 삭제할 수 없습니다.":"",onClick:()=>D(G.id),children:s.jsx(dg,{size:17})})]})]},G.id))}),s.jsxs("section",{className:"panel",children:[s.jsxs("div",{className:"panel-head",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"POLICY"}),s.jsx("h2",{children:"Release 운영 원칙"})]}),s.jsx(th,{size:22})]}),s.jsx("p",{children:"6.0.0을 기본 엔진으로 사용합니다. 규칙 변경은 별도 Candidate 패키지로 검증하고 기존 성공 케이스를 회귀검증한 뒤에만 다음 Stable 버전으로 승격합니다."})]})]})}function v1(){return s.jsxs("div",{className:"page",children:[s.jsxs("header",{className:"page-head",children:[s.jsx("p",{className:"eyebrow",children:"ABOUT"}),s.jsx("h1",{children:"VDF Next"}),s.jsx("p",{children:"VDF Engine 6.0.0을 Stable/Freeze 기준으로 사용하는 정적 배포판입니다."})]}),s.jsxs("section",{className:"panel",children:[s.jsx("h2",{children:"배포 기준"}),s.jsxs("div",{className:"architecture-grid",children:[s.jsxs("div",{children:[s.jsx(qe,{tone:"info",children:"APP"}),s.jsx("h3",{children:"v0.3.1.1"}),s.jsx("p",{children:"계획 만들기 → 계획 검사 → 결과 확인 → 제작 활용의 4단계 흐름을 제공합니다."})]}),s.jsxs("div",{children:[s.jsx(qe,{tone:"success",children:"ENGINE"}),s.jsx("h3",{children:"VDF 6.0.0"}),s.jsx("p",{children:"Reference / Stable / Freeze. rules.json을 Source of Truth로 유지합니다."})]}),s.jsxs("div",{children:[s.jsx(qe,{tone:"neutral",children:"RUNTIME"}),s.jsx("h3",{children:"Static Web"}),s.jsx("p",{children:"서버나 계정 없이 브라우저에서 실행하며 Prompt Bridge로 외부 AI와 연결합니다."})]})]})]}),s.jsxs("section",{className:"panel",children:[s.jsx("h2",{children:"버전 분리"}),s.jsxs("p",{children:[s.jsx("b",{children:"App v0.3.1.1"}),"과 ",s.jsx("b",{children:"VDF Engine 6.0.0"}),"은 별도로 관리합니다. UI나 배포 방식이 바뀌어도 엔진 규칙이 바뀌지 않으면 Engine 버전은 유지합니다."]})]}),s.jsxs("section",{className:"panel",children:[s.jsx("h2",{children:"Known limitations"}),s.jsx("p",{children:"원문 표가 shape block으로 재해석될 수 있고, 일부 학습활동이 본문 block으로 포함될 수 있으며, 동일 입력에서도 block granularity가 모델 실행에 따라 달라질 수 있습니다. 최종 제작 전 교수자 검토를 전제로 합니다."})]})]})}function b1(){const[u,w]=je.useState("checker"),[o,f]=je.useState(null);je.useEffect(()=>{requestAnimationFrame(()=>{var d;window.scrollTo({top:0,left:0,behavior:"auto"}),(d=document.getElementById("main"))==null||d.focus({preventScroll:!0})})},[u]);function p(d){f(d),w("checker")}return s.jsx(mg,{page:u,onPage:w,children:u==="checker"?s.jsx(m1,{regressionLaunch:o}):u==="guide"?s.jsx(_1,{}):u==="settings"?s.jsx(y1,{onStartRegression:p}):s.jsx(v1,{})})}Qp.createRoot(document.getElementById("root")).render(s.jsx(je.StrictMode,{children:s.jsx(q_,{children:s.jsx(b1,{})})}));

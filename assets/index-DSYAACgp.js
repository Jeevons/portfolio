function yv(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Nd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var cm={exports:{}},Ll={},um={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Do=Symbol.for("react.element"),Sv=Symbol.for("react.portal"),Mv=Symbol.for("react.fragment"),Ev=Symbol.for("react.strict_mode"),Tv=Symbol.for("react.profiler"),wv=Symbol.for("react.provider"),Cv=Symbol.for("react.context"),Av=Symbol.for("react.forward_ref"),Rv=Symbol.for("react.suspense"),Pv=Symbol.for("react.memo"),Lv=Symbol.for("react.lazy"),Kf=Symbol.iterator;function bv(t){return t===null||typeof t!="object"?null:(t=Kf&&t[Kf]||t["@@iterator"],typeof t=="function"?t:null)}var dm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fm=Object.assign,hm={};function bs(t,e,n){this.props=t,this.context=e,this.refs=hm,this.updater=n||dm}bs.prototype.isReactComponent={};bs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};bs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function pm(){}pm.prototype=bs.prototype;function Dd(t,e,n){this.props=t,this.context=e,this.refs=hm,this.updater=n||dm}var Ud=Dd.prototype=new pm;Ud.constructor=Dd;fm(Ud,bs.prototype);Ud.isPureReactComponent=!0;var Zf=Array.isArray,mm=Object.prototype.hasOwnProperty,Id={current:null},gm={key:!0,ref:!0,__self:!0,__source:!0};function vm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)mm.call(e,i)&&!gm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Do,type:t,key:s,ref:o,props:r,_owner:Id.current}}function Nv(t,e){return{$$typeof:Do,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Fd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Do}function Dv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Jf=/\/+/g;function tc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Dv(""+t.key):e.toString(36)}function Da(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Do:case Sv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+tc(o,0):i,Zf(r)?(n="",t!=null&&(n=t.replace(Jf,"$&/")+"/"),Da(r,e,n,"",function(c){return c})):r!=null&&(Fd(r)&&(r=Nv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Jf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Zf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+tc(s,a);o+=Da(s,e,n,l,r)}else if(l=bv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+tc(s,a++),o+=Da(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xo(t,e,n){if(t==null)return t;var i=[],r=0;return Da(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Uv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xt={current:null},Ua={transition:null},Iv={ReactCurrentDispatcher:Xt,ReactCurrentBatchConfig:Ua,ReactCurrentOwner:Id};function _m(){throw Error("act(...) is not supported in production builds of React.")}ke.Children={map:Xo,forEach:function(t,e,n){Xo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xo(t,function(){e++}),e},toArray:function(t){return Xo(t,function(e){return e})||[]},only:function(t){if(!Fd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ke.Component=bs;ke.Fragment=Mv;ke.Profiler=Tv;ke.PureComponent=Dd;ke.StrictMode=Ev;ke.Suspense=Rv;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iv;ke.act=_m;ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=fm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Id.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)mm.call(e,l)&&!gm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Do,type:t.type,key:r,ref:s,props:i,_owner:o}};ke.createContext=function(t){return t={$$typeof:Cv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:wv,_context:t},t.Consumer=t};ke.createElement=vm;ke.createFactory=function(t){var e=vm.bind(null,t);return e.type=t,e};ke.createRef=function(){return{current:null}};ke.forwardRef=function(t){return{$$typeof:Av,render:t}};ke.isValidElement=Fd;ke.lazy=function(t){return{$$typeof:Lv,_payload:{_status:-1,_result:t},_init:Uv}};ke.memo=function(t,e){return{$$typeof:Pv,type:t,compare:e===void 0?null:e}};ke.startTransition=function(t){var e=Ua.transition;Ua.transition={};try{t()}finally{Ua.transition=e}};ke.unstable_act=_m;ke.useCallback=function(t,e){return Xt.current.useCallback(t,e)};ke.useContext=function(t){return Xt.current.useContext(t)};ke.useDebugValue=function(){};ke.useDeferredValue=function(t){return Xt.current.useDeferredValue(t)};ke.useEffect=function(t,e){return Xt.current.useEffect(t,e)};ke.useId=function(){return Xt.current.useId()};ke.useImperativeHandle=function(t,e,n){return Xt.current.useImperativeHandle(t,e,n)};ke.useInsertionEffect=function(t,e){return Xt.current.useInsertionEffect(t,e)};ke.useLayoutEffect=function(t,e){return Xt.current.useLayoutEffect(t,e)};ke.useMemo=function(t,e){return Xt.current.useMemo(t,e)};ke.useReducer=function(t,e,n){return Xt.current.useReducer(t,e,n)};ke.useRef=function(t){return Xt.current.useRef(t)};ke.useState=function(t){return Xt.current.useState(t)};ke.useSyncExternalStore=function(t,e,n){return Xt.current.useSyncExternalStore(t,e,n)};ke.useTransition=function(){return Xt.current.useTransition()};ke.version="18.3.1";um.exports=ke;var se=um.exports;const xm=Nd(se),Fv=yv({__proto__:null,default:xm},[se]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov=se,kv=Symbol.for("react.element"),Bv=Symbol.for("react.fragment"),zv=Object.prototype.hasOwnProperty,Vv=Ov.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hv={key:!0,ref:!0,__self:!0,__source:!0};function ym(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)zv.call(e,i)&&!Hv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:kv,type:t,key:s,ref:o,props:r,_owner:Vv.current}}Ll.Fragment=Bv;Ll.jsx=ym;Ll.jsxs=ym;cm.exports=Ll;var E=cm.exports,Sm={exports:{}},fn={},Mm={exports:{}},Em={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,Y){var J=D.length;D.push(Y);e:for(;0<J;){var ae=J-1>>>1,Se=D[ae];if(0<r(Se,Y))D[ae]=Y,D[J]=Se,J=ae;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var Y=D[0],J=D.pop();if(J!==Y){D[0]=J;e:for(var ae=0,Se=D.length,Ve=Se>>>1;ae<Ve;){var H=2*(ae+1)-1,ne=D[H],de=H+1,fe=D[de];if(0>r(ne,J))de<Se&&0>r(fe,ne)?(D[ae]=fe,D[de]=J,ae=de):(D[ae]=ne,D[H]=J,ae=H);else if(de<Se&&0>r(fe,J))D[ae]=fe,D[de]=J,ae=de;else break e}}return Y}function r(D,Y){var J=D.sortIndex-Y.sortIndex;return J!==0?J:D.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,m=!1,_=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=D)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function y(D){if(x=!1,v(D),!_)if(n(l)!==null)_=!0,W(P);else{var Y=n(c);Y!==null&&K(y,Y.startTime-D)}}function P(D,Y){_=!1,x&&(x=!1,u(b),b=-1),m=!0;var J=h;try{for(v(Y),f=n(l);f!==null&&(!(f.expirationTime>Y)||D&&!N());){var ae=f.callback;if(typeof ae=="function"){f.callback=null,h=f.priorityLevel;var Se=ae(f.expirationTime<=Y);Y=t.unstable_now(),typeof Se=="function"?f.callback=Se:f===n(l)&&i(l),v(Y)}else i(l);f=n(l)}if(f!==null)var Ve=!0;else{var H=n(c);H!==null&&K(y,H.startTime-Y),Ve=!1}return Ve}finally{f=null,h=J,m=!1}}var A=!1,C=null,b=-1,w=5,S=-1;function N(){return!(t.unstable_now()-S<w)}function G(){if(C!==null){var D=t.unstable_now();S=D;var Y=!0;try{Y=C(!0,D)}finally{Y?V():(A=!1,C=null)}}else A=!1}var V;if(typeof g=="function")V=function(){g(G)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,$=q.port2;q.port1.onmessage=G,V=function(){$.postMessage(null)}}else V=function(){p(G,0)};function W(D){C=D,A||(A=!0,V())}function K(D,Y){b=p(function(){D(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,W(P))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var J=h;h=Y;try{return D()}finally{h=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,Y){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var J=h;h=D;try{return Y()}finally{h=J}},t.unstable_scheduleCallback=function(D,Y,J){var ae=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ae+J:ae):J=ae,D){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=J+Se,D={id:d++,callback:Y,priorityLevel:D,startTime:J,expirationTime:Se,sortIndex:-1},J>ae?(D.sortIndex=J,e(c,D),n(l)===null&&D===n(c)&&(x?(u(b),b=-1):x=!0,K(y,J-ae))):(D.sortIndex=Se,e(l,D),_||m||(_=!0,W(P))),D},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(D){var Y=h;return function(){var J=h;h=Y;try{return D.apply(this,arguments)}finally{h=J}}}})(Em);Mm.exports=Em;var Gv=Mm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv=se,dn=Gv;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tm=new Set,ho={};function Pr(t,e){xs(t,e),xs(t+"Capture",e)}function xs(t,e){for(ho[t]=e,t=0;t<e.length;t++)Tm.add(e[t])}var ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iu=Object.prototype.hasOwnProperty,jv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qf={},eh={};function Xv(t){return iu.call(eh,t)?!0:iu.call(Qf,t)?!1:jv.test(t)?eh[t]=!0:(Qf[t]=!0,!1)}function qv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $v(t,e,n,i){if(e===null||typeof e>"u"||qv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Od=/[\-:]([a-z])/g;function kd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Od,kd);It[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Od,kd);It[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Od,kd);It[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bd(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($v(e,n,r,i)&&(n=null),i||r===null?Xv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var vi=Wv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qo=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),Jr=Symbol.for("react.fragment"),zd=Symbol.for("react.strict_mode"),ru=Symbol.for("react.profiler"),wm=Symbol.for("react.provider"),Cm=Symbol.for("react.context"),Vd=Symbol.for("react.forward_ref"),su=Symbol.for("react.suspense"),ou=Symbol.for("react.suspense_list"),Hd=Symbol.for("react.memo"),Ci=Symbol.for("react.lazy"),Am=Symbol.for("react.offscreen"),th=Symbol.iterator;function Bs(t){return t===null||typeof t!="object"?null:(t=th&&t[th]||t["@@iterator"],typeof t=="function"?t:null)}var lt=Object.assign,nc;function Js(t){if(nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nc=e&&e[1]||""}return`
`+nc+t}var ic=!1;function rc(t,e){if(!t||ic)return"";ic=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ic=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Js(t):""}function Yv(t){switch(t.tag){case 5:return Js(t.type);case 16:return Js("Lazy");case 13:return Js("Suspense");case 19:return Js("SuspenseList");case 0:case 2:case 15:return t=rc(t.type,!1),t;case 11:return t=rc(t.type.render,!1),t;case 1:return t=rc(t.type,!0),t;default:return""}}function au(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Jr:return"Fragment";case Zr:return"Portal";case ru:return"Profiler";case zd:return"StrictMode";case su:return"Suspense";case ou:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Cm:return(t.displayName||"Context")+".Consumer";case wm:return(t._context.displayName||"Context")+".Provider";case Vd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hd:return e=t.displayName||null,e!==null?e:au(t.type)||"Memo";case Ci:e=t._payload,t=t._init;try{return au(t(e))}catch{}}return null}function Kv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return au(e);case 8:return e===zd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Rm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Zv(t){var e=Rm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $o(t){t._valueTracker||(t._valueTracker=Zv(t))}function Pm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Rm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Za(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lu(t,e){var n=e.checked;return lt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function nh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ji(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Lm(t,e){e=e.checked,e!=null&&Bd(t,"checked",e,!1)}function cu(t,e){Lm(t,e);var n=ji(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uu(t,e.type,n):e.hasOwnProperty("defaultValue")&&uu(t,e.type,ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ih(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uu(t,e,n){(e!=="number"||Za(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Qs=Array.isArray;function us(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ji(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function du(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return lt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(Qs(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ji(n)}}function bm(t,e){var n=ji(e.value),i=ji(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function sh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Nm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Nm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Yo,Dm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Yo=Yo||document.createElement("div"),Yo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Yo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function po(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jv=["Webkit","ms","Moz","O"];Object.keys(io).forEach(function(t){Jv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),io[e]=io[t]})});function Um(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||io.hasOwnProperty(t)&&io[t]?(""+e).trim():e+"px"}function Im(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Um(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Qv=lt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hu(t,e){if(e){if(Qv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function pu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mu=null;function Gd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gu=null,ds=null,fs=null;function oh(t){if(t=Fo(t)){if(typeof gu!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=Il(e),gu(t.stateNode,t.type,e))}}function Fm(t){ds?fs?fs.push(t):fs=[t]:ds=t}function Om(){if(ds){var t=ds,e=fs;if(fs=ds=null,oh(t),e)for(t=0;t<e.length;t++)oh(e[t])}}function km(t,e){return t(e)}function Bm(){}var sc=!1;function zm(t,e,n){if(sc)return t(e,n);sc=!0;try{return km(t,e,n)}finally{sc=!1,(ds!==null||fs!==null)&&(Bm(),Om())}}function mo(t,e){var n=t.stateNode;if(n===null)return null;var i=Il(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var vu=!1;if(ui)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){vu=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{vu=!1}function e_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ro=!1,Ja=null,Qa=!1,_u=null,t_={onError:function(t){ro=!0,Ja=t}};function n_(t,e,n,i,r,s,o,a,l){ro=!1,Ja=null,e_.apply(t_,arguments)}function i_(t,e,n,i,r,s,o,a,l){if(n_.apply(this,arguments),ro){if(ro){var c=Ja;ro=!1,Ja=null}else throw Error(ee(198));Qa||(Qa=!0,_u=c)}}function Lr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Vm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ah(t){if(Lr(t)!==t)throw Error(ee(188))}function r_(t){var e=t.alternate;if(!e){if(e=Lr(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ah(r),t;if(s===i)return ah(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function Hm(t){return t=r_(t),t!==null?Gm(t):null}function Gm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Gm(t);if(e!==null)return e;t=t.sibling}return null}var Wm=dn.unstable_scheduleCallback,lh=dn.unstable_cancelCallback,s_=dn.unstable_shouldYield,o_=dn.unstable_requestPaint,ht=dn.unstable_now,a_=dn.unstable_getCurrentPriorityLevel,Wd=dn.unstable_ImmediatePriority,jm=dn.unstable_UserBlockingPriority,el=dn.unstable_NormalPriority,l_=dn.unstable_LowPriority,Xm=dn.unstable_IdlePriority,bl=null,Xn=null;function c_(t){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(bl,t,void 0,(t.current.flags&128)===128)}catch{}}var Un=Math.clz32?Math.clz32:f_,u_=Math.log,d_=Math.LN2;function f_(t){return t>>>=0,t===0?32:31-(u_(t)/d_|0)|0}var Ko=64,Zo=4194304;function eo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function tl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=eo(a):(s&=o,s!==0&&(i=eo(s)))}else o=n&~r,o!==0?i=eo(o):s!==0&&(i=eo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Un(e),r=1<<n,i|=t[n],e&=~r;return i}function h_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function p_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Un(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=h_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function xu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qm(){var t=Ko;return Ko<<=1,!(Ko&4194240)&&(Ko=64),t}function oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Uo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Un(e),t[e]=n}function m_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Un(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function jd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Un(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ze=0;function $m(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ym,Xd,Km,Zm,Jm,yu=!1,Jo=[],Ui=null,Ii=null,Fi=null,go=new Map,vo=new Map,Ri=[],g_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ch(t,e){switch(t){case"focusin":case"focusout":Ui=null;break;case"dragenter":case"dragleave":Ii=null;break;case"mouseover":case"mouseout":Fi=null;break;case"pointerover":case"pointerout":go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(e.pointerId)}}function Vs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Fo(e),e!==null&&Xd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function v_(t,e,n,i,r){switch(e){case"focusin":return Ui=Vs(Ui,t,e,n,i,r),!0;case"dragenter":return Ii=Vs(Ii,t,e,n,i,r),!0;case"mouseover":return Fi=Vs(Fi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return go.set(s,Vs(go.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,vo.set(s,Vs(vo.get(s)||null,t,e,n,i,r)),!0}return!1}function Qm(t){var e=pr(t.target);if(e!==null){var n=Lr(e);if(n!==null){if(e=n.tag,e===13){if(e=Vm(n),e!==null){t.blockedOn=e,Jm(t.priority,function(){Km(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ia(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Su(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);mu=i,n.target.dispatchEvent(i),mu=null}else return e=Fo(n),e!==null&&Xd(e),t.blockedOn=n,!1;e.shift()}return!0}function uh(t,e,n){Ia(t)&&n.delete(e)}function __(){yu=!1,Ui!==null&&Ia(Ui)&&(Ui=null),Ii!==null&&Ia(Ii)&&(Ii=null),Fi!==null&&Ia(Fi)&&(Fi=null),go.forEach(uh),vo.forEach(uh)}function Hs(t,e){t.blockedOn===e&&(t.blockedOn=null,yu||(yu=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,__)))}function _o(t){function e(r){return Hs(r,t)}if(0<Jo.length){Hs(Jo[0],t);for(var n=1;n<Jo.length;n++){var i=Jo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ui!==null&&Hs(Ui,t),Ii!==null&&Hs(Ii,t),Fi!==null&&Hs(Fi,t),go.forEach(e),vo.forEach(e),n=0;n<Ri.length;n++)i=Ri[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ri.length&&(n=Ri[0],n.blockedOn===null);)Qm(n),n.blockedOn===null&&Ri.shift()}var hs=vi.ReactCurrentBatchConfig,nl=!0;function x_(t,e,n,i){var r=Ze,s=hs.transition;hs.transition=null;try{Ze=1,qd(t,e,n,i)}finally{Ze=r,hs.transition=s}}function y_(t,e,n,i){var r=Ze,s=hs.transition;hs.transition=null;try{Ze=4,qd(t,e,n,i)}finally{Ze=r,hs.transition=s}}function qd(t,e,n,i){if(nl){var r=Su(t,e,n,i);if(r===null)gc(t,e,i,il,n),ch(t,i);else if(v_(r,t,e,n,i))i.stopPropagation();else if(ch(t,i),e&4&&-1<g_.indexOf(t)){for(;r!==null;){var s=Fo(r);if(s!==null&&Ym(s),s=Su(t,e,n,i),s===null&&gc(t,e,i,il,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else gc(t,e,i,null,n)}}var il=null;function Su(t,e,n,i){if(il=null,t=Gd(i),t=pr(t),t!==null)if(e=Lr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Vm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return il=t,null}function eg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(a_()){case Wd:return 1;case jm:return 4;case el:case l_:return 16;case Xm:return 536870912;default:return 16}default:return 16}}var bi=null,$d=null,Fa=null;function tg(){if(Fa)return Fa;var t,e=$d,n=e.length,i,r="value"in bi?bi.value:bi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Fa=r.slice(t,1<i?1-i:void 0)}function Oa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qo(){return!0}function dh(){return!1}function hn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qo:dh,this.isPropagationStopped=dh,this}return lt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),e}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yd=hn(Ns),Io=lt({},Ns,{view:0,detail:0}),S_=hn(Io),ac,lc,Gs,Nl=lt({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Gs&&(Gs&&t.type==="mousemove"?(ac=t.screenX-Gs.screenX,lc=t.screenY-Gs.screenY):lc=ac=0,Gs=t),ac)},movementY:function(t){return"movementY"in t?t.movementY:lc}}),fh=hn(Nl),M_=lt({},Nl,{dataTransfer:0}),E_=hn(M_),T_=lt({},Io,{relatedTarget:0}),cc=hn(T_),w_=lt({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),C_=hn(w_),A_=lt({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),R_=hn(A_),P_=lt({},Ns,{data:0}),hh=hn(P_),L_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function D_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=N_[t])?!!e[t]:!1}function Kd(){return D_}var U_=lt({},Io,{key:function(t){if(t.key){var e=L_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Oa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?b_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kd,charCode:function(t){return t.type==="keypress"?Oa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Oa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),I_=hn(U_),F_=lt({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ph=hn(F_),O_=lt({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kd}),k_=hn(O_),B_=lt({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),z_=hn(B_),V_=lt({},Nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),H_=hn(V_),G_=[9,13,27,32],Zd=ui&&"CompositionEvent"in window,so=null;ui&&"documentMode"in document&&(so=document.documentMode);var W_=ui&&"TextEvent"in window&&!so,ng=ui&&(!Zd||so&&8<so&&11>=so),mh=" ",gh=!1;function ig(t,e){switch(t){case"keyup":return G_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qr=!1;function j_(t,e){switch(t){case"compositionend":return rg(e);case"keypress":return e.which!==32?null:(gh=!0,mh);case"textInput":return t=e.data,t===mh&&gh?null:t;default:return null}}function X_(t,e){if(Qr)return t==="compositionend"||!Zd&&ig(t,e)?(t=tg(),Fa=$d=bi=null,Qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ng&&e.locale!=="ko"?null:e.data;default:return null}}var q_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!q_[t.type]:e==="textarea"}function sg(t,e,n,i){Fm(i),e=rl(e,"onChange"),0<e.length&&(n=new Yd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var oo=null,xo=null;function $_(t){gg(t,0)}function Dl(t){var e=ns(t);if(Pm(e))return t}function Y_(t,e){if(t==="change")return e}var og=!1;if(ui){var uc;if(ui){var dc="oninput"in document;if(!dc){var _h=document.createElement("div");_h.setAttribute("oninput","return;"),dc=typeof _h.oninput=="function"}uc=dc}else uc=!1;og=uc&&(!document.documentMode||9<document.documentMode)}function xh(){oo&&(oo.detachEvent("onpropertychange",ag),xo=oo=null)}function ag(t){if(t.propertyName==="value"&&Dl(xo)){var e=[];sg(e,xo,t,Gd(t)),zm($_,e)}}function K_(t,e,n){t==="focusin"?(xh(),oo=e,xo=n,oo.attachEvent("onpropertychange",ag)):t==="focusout"&&xh()}function Z_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dl(xo)}function J_(t,e){if(t==="click")return Dl(e)}function Q_(t,e){if(t==="input"||t==="change")return Dl(e)}function ex(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Fn=typeof Object.is=="function"?Object.is:ex;function yo(t,e){if(Fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!iu.call(e,r)||!Fn(t[r],e[r]))return!1}return!0}function yh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sh(t,e){var n=yh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yh(n)}}function lg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?lg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cg(){for(var t=window,e=Za();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Za(t.document)}return e}function Jd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function tx(t){var e=cg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&lg(n.ownerDocument.documentElement,n)){if(i!==null&&Jd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Sh(n,s);var o=Sh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var nx=ui&&"documentMode"in document&&11>=document.documentMode,es=null,Mu=null,ao=null,Eu=!1;function Mh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Eu||es==null||es!==Za(i)||(i=es,"selectionStart"in i&&Jd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ao&&yo(ao,i)||(ao=i,i=rl(Mu,"onSelect"),0<i.length&&(e=new Yd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=es)))}function ea(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ts={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},fc={},ug={};ui&&(ug=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function Ul(t){if(fc[t])return fc[t];if(!ts[t])return t;var e=ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ug)return fc[t]=e[n];return t}var dg=Ul("animationend"),fg=Ul("animationiteration"),hg=Ul("animationstart"),pg=Ul("transitionend"),mg=new Map,Eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,e){mg.set(t,e),Pr(e,[t])}for(var hc=0;hc<Eh.length;hc++){var pc=Eh[hc],ix=pc.toLowerCase(),rx=pc[0].toUpperCase()+pc.slice(1);$i(ix,"on"+rx)}$i(dg,"onAnimationEnd");$i(fg,"onAnimationIteration");$i(hg,"onAnimationStart");$i("dblclick","onDoubleClick");$i("focusin","onFocus");$i("focusout","onBlur");$i(pg,"onTransitionEnd");xs("onMouseEnter",["mouseout","mouseover"]);xs("onMouseLeave",["mouseout","mouseover"]);xs("onPointerEnter",["pointerout","pointerover"]);xs("onPointerLeave",["pointerout","pointerover"]);Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sx=new Set("cancel close invalid load scroll toggle".split(" ").concat(to));function Th(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,i_(i,e,void 0,t),t.currentTarget=null}function gg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Th(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Th(r,a,c),s=l}}}if(Qa)throw t=_u,Qa=!1,_u=null,t}function tt(t,e){var n=e[Ru];n===void 0&&(n=e[Ru]=new Set);var i=t+"__bubble";n.has(i)||(vg(e,t,2,!1),n.add(i))}function mc(t,e,n){var i=0;e&&(i|=4),vg(n,t,i,e)}var ta="_reactListening"+Math.random().toString(36).slice(2);function So(t){if(!t[ta]){t[ta]=!0,Tm.forEach(function(n){n!=="selectionchange"&&(sx.has(n)||mc(n,!1,t),mc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ta]||(e[ta]=!0,mc("selectionchange",!1,e))}}function vg(t,e,n,i){switch(eg(e)){case 1:var r=x_;break;case 4:r=y_;break;default:r=qd}n=r.bind(null,e,n,t),r=void 0,!vu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function gc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=pr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}zm(function(){var c=s,d=Gd(n),f=[];e:{var h=mg.get(t);if(h!==void 0){var m=Yd,_=t;switch(t){case"keypress":if(Oa(n)===0)break e;case"keydown":case"keyup":m=I_;break;case"focusin":_="focus",m=cc;break;case"focusout":_="blur",m=cc;break;case"beforeblur":case"afterblur":m=cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=fh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=E_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=k_;break;case dg:case fg:case hg:m=C_;break;case pg:m=z_;break;case"scroll":m=S_;break;case"wheel":m=H_;break;case"copy":case"cut":case"paste":m=R_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=ph}var x=(e&4)!==0,p=!x&&t==="scroll",u=x?h!==null?h+"Capture":null:h;x=[];for(var g=c,v;g!==null;){v=g;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,u!==null&&(y=mo(g,u),y!=null&&x.push(Mo(g,y,v)))),p)break;g=g.return}0<x.length&&(h=new m(h,_,null,n,d),f.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==mu&&(_=n.relatedTarget||n.fromElement)&&(pr(_)||_[di]))break e;if((m||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?pr(_):null,_!==null&&(p=Lr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(x=fh,y="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=ph,y="onPointerLeave",u="onPointerEnter",g="pointer"),p=m==null?h:ns(m),v=_==null?h:ns(_),h=new x(y,g+"leave",m,n,d),h.target=p,h.relatedTarget=v,y=null,pr(d)===c&&(x=new x(u,g+"enter",_,n,d),x.target=v,x.relatedTarget=p,y=x),p=y,m&&_)t:{for(x=m,u=_,g=0,v=x;v;v=Dr(v))g++;for(v=0,y=u;y;y=Dr(y))v++;for(;0<g-v;)x=Dr(x),g--;for(;0<v-g;)u=Dr(u),v--;for(;g--;){if(x===u||u!==null&&x===u.alternate)break t;x=Dr(x),u=Dr(u)}x=null}else x=null;m!==null&&wh(f,h,m,x,!1),_!==null&&p!==null&&wh(f,p,_,x,!0)}}e:{if(h=c?ns(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var P=Y_;else if(vh(h))if(og)P=Q_;else{P=Z_;var A=K_}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=J_);if(P&&(P=P(t,c))){sg(f,P,n,d);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&uu(h,"number",h.value)}switch(A=c?ns(c):window,t){case"focusin":(vh(A)||A.contentEditable==="true")&&(es=A,Mu=c,ao=null);break;case"focusout":ao=Mu=es=null;break;case"mousedown":Eu=!0;break;case"contextmenu":case"mouseup":case"dragend":Eu=!1,Mh(f,n,d);break;case"selectionchange":if(nx)break;case"keydown":case"keyup":Mh(f,n,d)}var C;if(Zd)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Qr?ig(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(ng&&n.locale!=="ko"&&(Qr||b!=="onCompositionStart"?b==="onCompositionEnd"&&Qr&&(C=tg()):(bi=d,$d="value"in bi?bi.value:bi.textContent,Qr=!0)),A=rl(c,b),0<A.length&&(b=new hh(b,t,null,n,d),f.push({event:b,listeners:A}),C?b.data=C:(C=rg(n),C!==null&&(b.data=C)))),(C=W_?j_(t,n):X_(t,n))&&(c=rl(c,"onBeforeInput"),0<c.length&&(d=new hh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=C))}gg(f,e)})}function Mo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function rl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=mo(t,n),s!=null&&i.unshift(Mo(t,s,r)),s=mo(t,e),s!=null&&i.push(Mo(t,s,r))),t=t.return}return i}function Dr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=mo(n,s),l!=null&&o.unshift(Mo(n,l,a))):r||(l=mo(n,s),l!=null&&o.push(Mo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ox=/\r\n?/g,ax=/\u0000|\uFFFD/g;function Ch(t){return(typeof t=="string"?t:""+t).replace(ox,`
`).replace(ax,"")}function na(t,e,n){if(e=Ch(e),Ch(t)!==e&&n)throw Error(ee(425))}function sl(){}var Tu=null,wu=null;function Cu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Au=typeof setTimeout=="function"?setTimeout:void 0,lx=typeof clearTimeout=="function"?clearTimeout:void 0,Ah=typeof Promise=="function"?Promise:void 0,cx=typeof queueMicrotask=="function"?queueMicrotask:typeof Ah<"u"?function(t){return Ah.resolve(null).then(t).catch(ux)}:Au;function ux(t){setTimeout(function(){throw t})}function vc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),_o(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);_o(e)}function Oi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Rh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),Gn="__reactFiber$"+Ds,Eo="__reactProps$"+Ds,di="__reactContainer$"+Ds,Ru="__reactEvents$"+Ds,dx="__reactListeners$"+Ds,fx="__reactHandles$"+Ds;function pr(t){var e=t[Gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[di]||n[Gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Rh(t);t!==null;){if(n=t[Gn])return n;t=Rh(t)}return e}t=n,n=t.parentNode}return null}function Fo(t){return t=t[Gn]||t[di],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function Il(t){return t[Eo]||null}var Pu=[],is=-1;function Yi(t){return{current:t}}function it(t){0>is||(t.current=Pu[is],Pu[is]=null,is--)}function et(t,e){is++,Pu[is]=t.current,t.current=e}var Xi={},Vt=Yi(Xi),Jt=Yi(!1),Mr=Xi;function ys(t,e){var n=t.type.contextTypes;if(!n)return Xi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Qt(t){return t=t.childContextTypes,t!=null}function ol(){it(Jt),it(Vt)}function Ph(t,e,n){if(Vt.current!==Xi)throw Error(ee(168));et(Vt,e),et(Jt,n)}function _g(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,Kv(t)||"Unknown",r));return lt({},n,i)}function al(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xi,Mr=Vt.current,et(Vt,t),et(Jt,Jt.current),!0}function Lh(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=_g(t,e,Mr),i.__reactInternalMemoizedMergedChildContext=t,it(Jt),it(Vt),et(Vt,t)):it(Jt),et(Jt,n)}var ii=null,Fl=!1,_c=!1;function xg(t){ii===null?ii=[t]:ii.push(t)}function hx(t){Fl=!0,xg(t)}function Ki(){if(!_c&&ii!==null){_c=!0;var t=0,e=Ze;try{var n=ii;for(Ze=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ii=null,Fl=!1}catch(r){throw ii!==null&&(ii=ii.slice(t+1)),Wm(Wd,Ki),r}finally{Ze=e,_c=!1}}return null}var rs=[],ss=0,ll=null,cl=0,gn=[],vn=0,Er=null,si=1,oi="";function lr(t,e){rs[ss++]=cl,rs[ss++]=ll,ll=t,cl=e}function yg(t,e,n){gn[vn++]=si,gn[vn++]=oi,gn[vn++]=Er,Er=t;var i=si;t=oi;var r=32-Un(i)-1;i&=~(1<<r),n+=1;var s=32-Un(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,si=1<<32-Un(e)+r|n<<r|i,oi=s+t}else si=1<<s|n<<r|i,oi=t}function Qd(t){t.return!==null&&(lr(t,1),yg(t,1,0))}function ef(t){for(;t===ll;)ll=rs[--ss],rs[ss]=null,cl=rs[--ss],rs[ss]=null;for(;t===Er;)Er=gn[--vn],gn[vn]=null,oi=gn[--vn],gn[vn]=null,si=gn[--vn],gn[vn]=null}var cn=null,ln=null,rt=!1,bn=null;function Sg(t,e){var n=xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function bh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,cn=t,ln=Oi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,cn=t,ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Er!==null?{id:si,overflow:oi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,cn=t,ln=null,!0):!1;default:return!1}}function Lu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bu(t){if(rt){var e=ln;if(e){var n=e;if(!bh(t,e)){if(Lu(t))throw Error(ee(418));e=Oi(n.nextSibling);var i=cn;e&&bh(t,e)?Sg(i,n):(t.flags=t.flags&-4097|2,rt=!1,cn=t)}}else{if(Lu(t))throw Error(ee(418));t.flags=t.flags&-4097|2,rt=!1,cn=t}}}function Nh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;cn=t}function ia(t){if(t!==cn)return!1;if(!rt)return Nh(t),rt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cu(t.type,t.memoizedProps)),e&&(e=ln)){if(Lu(t))throw Mg(),Error(ee(418));for(;e;)Sg(t,e),e=Oi(e.nextSibling)}if(Nh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ln=Oi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ln=null}}else ln=cn?Oi(t.stateNode.nextSibling):null;return!0}function Mg(){for(var t=ln;t;)t=Oi(t.nextSibling)}function Ss(){ln=cn=null,rt=!1}function tf(t){bn===null?bn=[t]:bn.push(t)}var px=vi.ReactCurrentBatchConfig;function Ws(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function ra(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dh(t){var e=t._init;return e(t._payload)}function Eg(t){function e(u,g){if(t){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=Vi(u,g),u.index=0,u.sibling=null,u}function s(u,g,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=2,g):v):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,v,y){return g===null||g.tag!==6?(g=wc(v,u.mode,y),g.return=u,g):(g=r(g,v),g.return=u,g)}function l(u,g,v,y){var P=v.type;return P===Jr?d(u,g,v.props.children,y,v.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ci&&Dh(P)===g.type)?(y=r(g,v.props),y.ref=Ws(u,g,v),y.return=u,y):(y=Wa(v.type,v.key,v.props,null,u.mode,y),y.ref=Ws(u,g,v),y.return=u,y)}function c(u,g,v,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Cc(v,u.mode,y),g.return=u,g):(g=r(g,v.children||[]),g.return=u,g)}function d(u,g,v,y,P){return g===null||g.tag!==7?(g=yr(v,u.mode,y,P),g.return=u,g):(g=r(g,v),g.return=u,g)}function f(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=wc(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case qo:return v=Wa(g.type,g.key,g.props,null,u.mode,v),v.ref=Ws(u,null,g),v.return=u,v;case Zr:return g=Cc(g,u.mode,v),g.return=u,g;case Ci:var y=g._init;return f(u,y(g._payload),v)}if(Qs(g)||Bs(g))return g=yr(g,u.mode,v,null),g.return=u,g;ra(u,g)}return null}function h(u,g,v,y){var P=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:a(u,g,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case qo:return v.key===P?l(u,g,v,y):null;case Zr:return v.key===P?c(u,g,v,y):null;case Ci:return P=v._init,h(u,g,P(v._payload),y)}if(Qs(v)||Bs(v))return P!==null?null:d(u,g,v,y,null);ra(u,v)}return null}function m(u,g,v,y,P){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(v)||null,a(g,u,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case qo:return u=u.get(y.key===null?v:y.key)||null,l(g,u,y,P);case Zr:return u=u.get(y.key===null?v:y.key)||null,c(g,u,y,P);case Ci:var A=y._init;return m(u,g,v,A(y._payload),P)}if(Qs(y)||Bs(y))return u=u.get(v)||null,d(g,u,y,P,null);ra(g,y)}return null}function _(u,g,v,y){for(var P=null,A=null,C=g,b=g=0,w=null;C!==null&&b<v.length;b++){C.index>b?(w=C,C=null):w=C.sibling;var S=h(u,C,v[b],y);if(S===null){C===null&&(C=w);break}t&&C&&S.alternate===null&&e(u,C),g=s(S,g,b),A===null?P=S:A.sibling=S,A=S,C=w}if(b===v.length)return n(u,C),rt&&lr(u,b),P;if(C===null){for(;b<v.length;b++)C=f(u,v[b],y),C!==null&&(g=s(C,g,b),A===null?P=C:A.sibling=C,A=C);return rt&&lr(u,b),P}for(C=i(u,C);b<v.length;b++)w=m(C,u,b,v[b],y),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?b:w.key),g=s(w,g,b),A===null?P=w:A.sibling=w,A=w);return t&&C.forEach(function(N){return e(u,N)}),rt&&lr(u,b),P}function x(u,g,v,y){var P=Bs(v);if(typeof P!="function")throw Error(ee(150));if(v=P.call(v),v==null)throw Error(ee(151));for(var A=P=null,C=g,b=g=0,w=null,S=v.next();C!==null&&!S.done;b++,S=v.next()){C.index>b?(w=C,C=null):w=C.sibling;var N=h(u,C,S.value,y);if(N===null){C===null&&(C=w);break}t&&C&&N.alternate===null&&e(u,C),g=s(N,g,b),A===null?P=N:A.sibling=N,A=N,C=w}if(S.done)return n(u,C),rt&&lr(u,b),P;if(C===null){for(;!S.done;b++,S=v.next())S=f(u,S.value,y),S!==null&&(g=s(S,g,b),A===null?P=S:A.sibling=S,A=S);return rt&&lr(u,b),P}for(C=i(u,C);!S.done;b++,S=v.next())S=m(C,u,b,S.value,y),S!==null&&(t&&S.alternate!==null&&C.delete(S.key===null?b:S.key),g=s(S,g,b),A===null?P=S:A.sibling=S,A=S);return t&&C.forEach(function(G){return e(u,G)}),rt&&lr(u,b),P}function p(u,g,v,y){if(typeof v=="object"&&v!==null&&v.type===Jr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case qo:e:{for(var P=v.key,A=g;A!==null;){if(A.key===P){if(P=v.type,P===Jr){if(A.tag===7){n(u,A.sibling),g=r(A,v.props.children),g.return=u,u=g;break e}}else if(A.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ci&&Dh(P)===A.type){n(u,A.sibling),g=r(A,v.props),g.ref=Ws(u,A,v),g.return=u,u=g;break e}n(u,A);break}else e(u,A);A=A.sibling}v.type===Jr?(g=yr(v.props.children,u.mode,y,v.key),g.return=u,u=g):(y=Wa(v.type,v.key,v.props,null,u.mode,y),y.ref=Ws(u,g,v),y.return=u,u=y)}return o(u);case Zr:e:{for(A=v.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(u,g.sibling),g=r(g,v.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=Cc(v,u.mode,y),g.return=u,u=g}return o(u);case Ci:return A=v._init,p(u,g,A(v._payload),y)}if(Qs(v))return _(u,g,v,y);if(Bs(v))return x(u,g,v,y);ra(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,v),g.return=u,u=g):(n(u,g),g=wc(v,u.mode,y),g.return=u,u=g),o(u)):n(u,g)}return p}var Ms=Eg(!0),Tg=Eg(!1),ul=Yi(null),dl=null,os=null,nf=null;function rf(){nf=os=dl=null}function sf(t){var e=ul.current;it(ul),t._currentValue=e}function Nu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ps(t,e){dl=t,nf=os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Zt=!0),t.firstContext=null)}function Mn(t){var e=t._currentValue;if(nf!==t)if(t={context:t,memoizedValue:e,next:null},os===null){if(dl===null)throw Error(ee(308));os=t,dl.dependencies={lanes:0,firstContext:t}}else os=os.next=t;return e}var mr=null;function of(t){mr===null?mr=[t]:mr.push(t)}function wg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,of(e)):(n.next=r.next,r.next=n),e.interleaved=n,fi(t,i)}function fi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ai=!1;function af(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ki(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ge&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,fi(t,n)}return r=i.interleaved,r===null?(e.next=e,of(i)):(e.next=r.next,r.next=e),i.interleaved=e,fi(t,n)}function ka(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,jd(t,n)}}function Uh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fl(t,e,n,i){var r=t.updateQueue;Ai=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,x=a;switch(h=e,m=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){f=_.call(m,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(m,f,h):_,h==null)break e;f=lt({},f,h);break e;case 2:Ai=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=m,l=f):d=d.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);wr|=o,t.lanes=o,t.memoizedState=f}}function Ih(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var Oo={},qn=Yi(Oo),To=Yi(Oo),wo=Yi(Oo);function gr(t){if(t===Oo)throw Error(ee(174));return t}function lf(t,e){switch(et(wo,e),et(To,t),et(qn,Oo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=fu(e,t)}it(qn),et(qn,e)}function Es(){it(qn),it(To),it(wo)}function Ag(t){gr(wo.current);var e=gr(qn.current),n=fu(e,t.type);e!==n&&(et(To,t),et(qn,n))}function cf(t){To.current===t&&(it(qn),it(To))}var ot=Yi(0);function hl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xc=[];function uf(){for(var t=0;t<xc.length;t++)xc[t]._workInProgressVersionPrimary=null;xc.length=0}var Ba=vi.ReactCurrentDispatcher,yc=vi.ReactCurrentBatchConfig,Tr=0,at=null,St=null,Rt=null,pl=!1,lo=!1,Co=0,mx=0;function Ft(){throw Error(ee(321))}function df(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Fn(t[n],e[n]))return!1;return!0}function ff(t,e,n,i,r,s){if(Tr=s,at=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ba.current=t===null||t.memoizedState===null?xx:yx,t=n(i,r),lo){s=0;do{if(lo=!1,Co=0,25<=s)throw Error(ee(301));s+=1,Rt=St=null,e.updateQueue=null,Ba.current=Sx,t=n(i,r)}while(lo)}if(Ba.current=ml,e=St!==null&&St.next!==null,Tr=0,Rt=St=at=null,pl=!1,e)throw Error(ee(300));return t}function hf(){var t=Co!==0;return Co=0,t}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?at.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function En(){if(St===null){var t=at.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Rt===null?at.memoizedState:Rt.next;if(e!==null)Rt=e,St=t;else{if(t===null)throw Error(ee(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Rt===null?at.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function Ao(t,e){return typeof e=="function"?e(t):e}function Sc(t){var e=En(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=St,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Tr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,at.lanes|=d,wr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Fn(i,e.memoizedState)||(Zt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,at.lanes|=s,wr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mc(t){var e=En(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Fn(s,e.memoizedState)||(Zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Rg(){}function Pg(t,e){var n=at,i=En(),r=e(),s=!Fn(i.memoizedState,r);if(s&&(i.memoizedState=r,Zt=!0),i=i.queue,pf(Ng.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,Ro(9,bg.bind(null,n,i,r,e),void 0,null),Lt===null)throw Error(ee(349));Tr&30||Lg(n,e,r)}return r}function Lg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=at.updateQueue,e===null?(e={lastEffect:null,stores:null},at.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function bg(t,e,n,i){e.value=n,e.getSnapshot=i,Dg(e)&&Ug(t)}function Ng(t,e,n){return n(function(){Dg(e)&&Ug(t)})}function Dg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Fn(t,n)}catch{return!0}}function Ug(t){var e=fi(t,1);e!==null&&In(e,t,1,-1)}function Fh(t){var e=zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:t},e.queue=t,t=t.dispatch=_x.bind(null,at,t),[e.memoizedState,t]}function Ro(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=at.updateQueue,e===null?(e={lastEffect:null,stores:null},at.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Ig(){return En().memoizedState}function za(t,e,n,i){var r=zn();at.flags|=t,r.memoizedState=Ro(1|e,n,void 0,i===void 0?null:i)}function Ol(t,e,n,i){var r=En();i=i===void 0?null:i;var s=void 0;if(St!==null){var o=St.memoizedState;if(s=o.destroy,i!==null&&df(i,o.deps)){r.memoizedState=Ro(e,n,s,i);return}}at.flags|=t,r.memoizedState=Ro(1|e,n,s,i)}function Oh(t,e){return za(8390656,8,t,e)}function pf(t,e){return Ol(2048,8,t,e)}function Fg(t,e){return Ol(4,2,t,e)}function Og(t,e){return Ol(4,4,t,e)}function kg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Bg(t,e,n){return n=n!=null?n.concat([t]):null,Ol(4,4,kg.bind(null,e,t),n)}function mf(){}function zg(t,e){var n=En();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&df(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Vg(t,e){var n=En();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&df(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Hg(t,e,n){return Tr&21?(Fn(n,e)||(n=qm(),at.lanes|=n,wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Zt=!0),t.memoizedState=n)}function gx(t,e){var n=Ze;Ze=n!==0&&4>n?n:4,t(!0);var i=yc.transition;yc.transition={};try{t(!1),e()}finally{Ze=n,yc.transition=i}}function Gg(){return En().memoizedState}function vx(t,e,n){var i=zi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Wg(t))jg(e,n);else if(n=wg(t,e,n,i),n!==null){var r=Wt();In(n,t,i,r),Xg(n,e,i)}}function _x(t,e,n){var i=zi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wg(t))jg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Fn(a,o)){var l=e.interleaved;l===null?(r.next=r,of(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=wg(t,e,r,i),n!==null&&(r=Wt(),In(n,t,i,r),Xg(n,e,i))}}function Wg(t){var e=t.alternate;return t===at||e!==null&&e===at}function jg(t,e){lo=pl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Xg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,jd(t,n)}}var ml={readContext:Mn,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},xx={readContext:Mn,useCallback:function(t,e){return zn().memoizedState=[t,e===void 0?null:e],t},useContext:Mn,useEffect:Oh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,za(4194308,4,kg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return za(4194308,4,t,e)},useInsertionEffect:function(t,e){return za(4,2,t,e)},useMemo:function(t,e){var n=zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=vx.bind(null,at,t),[i.memoizedState,t]},useRef:function(t){var e=zn();return t={current:t},e.memoizedState=t},useState:Fh,useDebugValue:mf,useDeferredValue:function(t){return zn().memoizedState=t},useTransition:function(){var t=Fh(!1),e=t[0];return t=gx.bind(null,t[1]),zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=at,r=zn();if(rt){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),Lt===null)throw Error(ee(349));Tr&30||Lg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Oh(Ng.bind(null,i,s,t),[t]),i.flags|=2048,Ro(9,bg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=zn(),e=Lt.identifierPrefix;if(rt){var n=oi,i=si;n=(i&~(1<<32-Un(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=mx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},yx={readContext:Mn,useCallback:zg,useContext:Mn,useEffect:pf,useImperativeHandle:Bg,useInsertionEffect:Fg,useLayoutEffect:Og,useMemo:Vg,useReducer:Sc,useRef:Ig,useState:function(){return Sc(Ao)},useDebugValue:mf,useDeferredValue:function(t){var e=En();return Hg(e,St.memoizedState,t)},useTransition:function(){var t=Sc(Ao)[0],e=En().memoizedState;return[t,e]},useMutableSource:Rg,useSyncExternalStore:Pg,useId:Gg,unstable_isNewReconciler:!1},Sx={readContext:Mn,useCallback:zg,useContext:Mn,useEffect:pf,useImperativeHandle:Bg,useInsertionEffect:Fg,useLayoutEffect:Og,useMemo:Vg,useReducer:Mc,useRef:Ig,useState:function(){return Mc(Ao)},useDebugValue:mf,useDeferredValue:function(t){var e=En();return St===null?e.memoizedState=t:Hg(e,St.memoizedState,t)},useTransition:function(){var t=Mc(Ao)[0],e=En().memoizedState;return[t,e]},useMutableSource:Rg,useSyncExternalStore:Pg,useId:Gg,unstable_isNewReconciler:!1};function Pn(t,e){if(t&&t.defaultProps){e=lt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Du(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:lt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var kl={isMounted:function(t){return(t=t._reactInternals)?Lr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Wt(),r=zi(t),s=ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=ki(t,s,r),e!==null&&(In(e,t,r,i),ka(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Wt(),r=zi(t),s=ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ki(t,s,r),e!==null&&(In(e,t,r,i),ka(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Wt(),i=zi(t),r=ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=ki(t,r,i),e!==null&&(In(e,t,i,n),ka(e,t,i))}};function kh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!yo(n,i)||!yo(r,s):!0}function qg(t,e,n){var i=!1,r=Xi,s=e.contextType;return typeof s=="object"&&s!==null?s=Mn(s):(r=Qt(e)?Mr:Vt.current,i=e.contextTypes,s=(i=i!=null)?ys(t,r):Xi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=kl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Bh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&kl.enqueueReplaceState(e,e.state,null)}function Uu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},af(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Mn(s):(s=Qt(e)?Mr:Vt.current,r.context=ys(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Du(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&kl.enqueueReplaceState(r,r.state,null),fl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ts(t,e){try{var n="",i=e;do n+=Yv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ec(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Iu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Mx=typeof WeakMap=="function"?WeakMap:Map;function $g(t,e,n){n=ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){vl||(vl=!0,ju=i),Iu(t,e)},n}function Yg(t,e,n){n=ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Iu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Iu(t,e),typeof i!="function"&&(Bi===null?Bi=new Set([this]):Bi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function zh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Mx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Fx.bind(null,t,e,n),e.then(t,t))}function Vh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Hh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ci(-1,1),e.tag=2,ki(n,e,1))),n.lanes|=1),t)}var Ex=vi.ReactCurrentOwner,Zt=!1;function Gt(t,e,n,i){e.child=t===null?Tg(e,null,n,i):Ms(e,t.child,n,i)}function Gh(t,e,n,i,r){n=n.render;var s=e.ref;return ps(e,r),i=ff(t,e,n,i,s,r),n=hf(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hi(t,e,r)):(rt&&n&&Qd(e),e.flags|=1,Gt(t,e,i,r),e.child)}function Wh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Ef(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Kg(t,e,s,i,r)):(t=Wa(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:yo,n(o,i)&&t.ref===e.ref)return hi(t,e,r)}return e.flags|=1,t=Vi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Kg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(yo(s,i)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Zt=!0);else return e.lanes=t.lanes,hi(t,e,r)}return Fu(t,e,n,i,r)}function Zg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(ls,an),an|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,et(ls,an),an|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,et(ls,an),an|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,et(ls,an),an|=i;return Gt(t,e,r,n),e.child}function Jg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Fu(t,e,n,i,r){var s=Qt(n)?Mr:Vt.current;return s=ys(e,s),ps(e,r),n=ff(t,e,n,i,s,r),i=hf(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hi(t,e,r)):(rt&&i&&Qd(e),e.flags|=1,Gt(t,e,n,r),e.child)}function jh(t,e,n,i,r){if(Qt(n)){var s=!0;al(e)}else s=!1;if(ps(e,r),e.stateNode===null)Va(t,e),qg(e,n,i),Uu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Mn(c):(c=Qt(n)?Mr:Vt.current,c=ys(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Bh(e,o,i,c),Ai=!1;var h=e.memoizedState;o.state=h,fl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Jt.current||Ai?(typeof d=="function"&&(Du(e,n,d,i),l=e.memoizedState),(a=Ai||kh(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Cg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Pn(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Mn(l):(l=Qt(n)?Mr:Vt.current,l=ys(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Bh(e,o,i,l),Ai=!1,h=e.memoizedState,o.state=h,fl(e,i,o,r);var _=e.memoizedState;a!==f||h!==_||Jt.current||Ai?(typeof m=="function"&&(Du(e,n,m,i),_=e.memoizedState),(c=Ai||kh(e,n,c,i,h,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Ou(t,e,n,i,s,r)}function Ou(t,e,n,i,r,s){Jg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Lh(e,n,!1),hi(t,e,s);i=e.stateNode,Ex.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ms(e,t.child,null,s),e.child=Ms(e,null,a,s)):Gt(t,e,a,s),e.memoizedState=i.state,r&&Lh(e,n,!0),e.child}function Qg(t){var e=t.stateNode;e.pendingContext?Ph(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ph(t,e.context,!1),lf(t,e.containerInfo)}function Xh(t,e,n,i,r){return Ss(),tf(r),e.flags|=256,Gt(t,e,n,i),e.child}var ku={dehydrated:null,treeContext:null,retryLane:0};function Bu(t){return{baseLanes:t,cachePool:null,transitions:null}}function e0(t,e,n){var i=e.pendingProps,r=ot.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),et(ot,r&1),t===null)return bu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Vl(o,i,0,null),t=yr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Bu(n),e.memoizedState=ku,t):gf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Tx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Vi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Vi(a,s):(s=yr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Bu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ku,i}return s=t.child,t=s.sibling,i=Vi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function gf(t,e){return e=Vl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function sa(t,e,n,i){return i!==null&&tf(i),Ms(e,t.child,null,n),t=gf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Tx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Ec(Error(ee(422))),sa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Vl({mode:"visible",children:i.children},r,0,null),s=yr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ms(e,t.child,null,o),e.child.memoizedState=Bu(o),e.memoizedState=ku,s);if(!(e.mode&1))return sa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=Ec(s,i,void 0),sa(t,e,o,i)}if(a=(o&t.childLanes)!==0,Zt||a){if(i=Lt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,fi(t,r),In(i,t,r,-1))}return Mf(),i=Ec(Error(ee(421))),sa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ox.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,ln=Oi(r.nextSibling),cn=e,rt=!0,bn=null,t!==null&&(gn[vn++]=si,gn[vn++]=oi,gn[vn++]=Er,si=t.id,oi=t.overflow,Er=e),e=gf(e,i.children),e.flags|=4096,e)}function qh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Nu(t.return,e,n)}function Tc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function t0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Gt(t,e,i.children,n),i=ot.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qh(t,n,e);else if(t.tag===19)qh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(et(ot,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&hl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Tc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&hl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Tc(e,!0,n,null,s);break;case"together":Tc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Va(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function hi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=Vi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function wx(t,e,n){switch(e.tag){case 3:Qg(e),Ss();break;case 5:Ag(e);break;case 1:Qt(e.type)&&al(e);break;case 4:lf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;et(ul,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(et(ot,ot.current&1),e.flags|=128,null):n&e.child.childLanes?e0(t,e,n):(et(ot,ot.current&1),t=hi(t,e,n),t!==null?t.sibling:null);et(ot,ot.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return t0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),et(ot,ot.current),i)break;return null;case 22:case 23:return e.lanes=0,Zg(t,e,n)}return hi(t,e,n)}var n0,zu,i0,r0;n0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zu=function(){};i0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,gr(qn.current);var s=null;switch(n){case"input":r=lu(t,r),i=lu(t,i),s=[];break;case"select":r=lt({},r,{value:void 0}),i=lt({},i,{value:void 0}),s=[];break;case"textarea":r=du(t,r),i=du(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=sl)}hu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ho.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ho.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&tt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};r0=function(t,e,n,i){n!==i&&(e.flags|=4)};function js(t,e){if(!rt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Cx(t,e,n){var i=e.pendingProps;switch(ef(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return Qt(e.type)&&ol(),Ot(e),null;case 3:return i=e.stateNode,Es(),it(Jt),it(Vt),uf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ia(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,bn!==null&&($u(bn),bn=null))),zu(t,e),Ot(e),null;case 5:cf(e);var r=gr(wo.current);if(n=e.type,t!==null&&e.stateNode!=null)i0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Ot(e),null}if(t=gr(qn.current),ia(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Gn]=e,i[Eo]=s,t=(e.mode&1)!==0,n){case"dialog":tt("cancel",i),tt("close",i);break;case"iframe":case"object":case"embed":tt("load",i);break;case"video":case"audio":for(r=0;r<to.length;r++)tt(to[r],i);break;case"source":tt("error",i);break;case"img":case"image":case"link":tt("error",i),tt("load",i);break;case"details":tt("toggle",i);break;case"input":nh(i,s),tt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},tt("invalid",i);break;case"textarea":rh(i,s),tt("invalid",i)}hu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&na(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&na(i.textContent,a,t),r=["children",""+a]):ho.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&tt("scroll",i)}switch(n){case"input":$o(i),ih(i,s,!0);break;case"textarea":$o(i),sh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=sl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Nm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Gn]=e,t[Eo]=i,n0(t,e,!1,!1),e.stateNode=t;e:{switch(o=pu(n,i),n){case"dialog":tt("cancel",t),tt("close",t),r=i;break;case"iframe":case"object":case"embed":tt("load",t),r=i;break;case"video":case"audio":for(r=0;r<to.length;r++)tt(to[r],t);r=i;break;case"source":tt("error",t),r=i;break;case"img":case"image":case"link":tt("error",t),tt("load",t),r=i;break;case"details":tt("toggle",t),r=i;break;case"input":nh(t,i),r=lu(t,i),tt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=lt({},i,{value:void 0}),tt("invalid",t);break;case"textarea":rh(t,i),r=du(t,i),tt("invalid",t);break;default:r=i}hu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Im(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Dm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&po(t,l):typeof l=="number"&&po(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ho.hasOwnProperty(s)?l!=null&&s==="onScroll"&&tt("scroll",t):l!=null&&Bd(t,s,l,o))}switch(n){case"input":$o(t),ih(t,i,!1);break;case"textarea":$o(t),sh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ji(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?us(t,!!i.multiple,s,!1):i.defaultValue!=null&&us(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=sl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ot(e),null;case 6:if(t&&e.stateNode!=null)r0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=gr(wo.current),gr(qn.current),ia(e)){if(i=e.stateNode,n=e.memoizedProps,i[Gn]=e,(s=i.nodeValue!==n)&&(t=cn,t!==null))switch(t.tag){case 3:na(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&na(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Gn]=e,e.stateNode=i}return Ot(e),null;case 13:if(it(ot),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(rt&&ln!==null&&e.mode&1&&!(e.flags&128))Mg(),Ss(),e.flags|=98560,s=!1;else if(s=ia(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[Gn]=e}else Ss(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ot(e),s=!1}else bn!==null&&($u(bn),bn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ot.current&1?Et===0&&(Et=3):Mf())),e.updateQueue!==null&&(e.flags|=4),Ot(e),null);case 4:return Es(),zu(t,e),t===null&&So(e.stateNode.containerInfo),Ot(e),null;case 10:return sf(e.type._context),Ot(e),null;case 17:return Qt(e.type)&&ol(),Ot(e),null;case 19:if(it(ot),s=e.memoizedState,s===null)return Ot(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)js(s,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=hl(t),o!==null){for(e.flags|=128,js(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return et(ot,ot.current&1|2),e.child}t=t.sibling}s.tail!==null&&ht()>ws&&(e.flags|=128,i=!0,js(s,!1),e.lanes=4194304)}else{if(!i)if(t=hl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!rt)return Ot(e),null}else 2*ht()-s.renderingStartTime>ws&&n!==1073741824&&(e.flags|=128,i=!0,js(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ht(),e.sibling=null,n=ot.current,et(ot,i?n&1|2:n&1),e):(Ot(e),null);case 22:case 23:return Sf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?an&1073741824&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function Ax(t,e){switch(ef(e),e.tag){case 1:return Qt(e.type)&&ol(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Es(),it(Jt),it(Vt),uf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return cf(e),null;case 13:if(it(ot),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));Ss()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return it(ot),null;case 4:return Es(),null;case 10:return sf(e.type._context),null;case 22:case 23:return Sf(),null;case 24:return null;default:return null}}var oa=!1,zt=!1,Rx=typeof WeakSet=="function"?WeakSet:Set,pe=null;function as(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ft(t,e,i)}else n.current=null}function Vu(t,e,n){try{n()}catch(i){ft(t,e,i)}}var $h=!1;function Px(t,e){if(Tu=nl,t=cg(),Jd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wu={focusedElem:t,selectionRange:n},nl=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,p=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:Pn(e.type,x),p);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(y){ft(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return _=$h,$h=!1,_}function co(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Vu(e,n,s)}r=r.next}while(r!==i)}}function Bl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Hu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function s0(t){var e=t.alternate;e!==null&&(t.alternate=null,s0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Gn],delete e[Eo],delete e[Ru],delete e[dx],delete e[fx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function o0(t){return t.tag===5||t.tag===3||t.tag===4}function Yh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||o0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=sl));else if(i!==4&&(t=t.child,t!==null))for(Gu(t,e,n),t=t.sibling;t!==null;)Gu(t,e,n),t=t.sibling}function Wu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Wu(t,e,n),t=t.sibling;t!==null;)Wu(t,e,n),t=t.sibling}var Dt=null,Ln=!1;function xi(t,e,n){for(n=n.child;n!==null;)a0(t,e,n),n=n.sibling}function a0(t,e,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(bl,n)}catch{}switch(n.tag){case 5:zt||as(n,e);case 6:var i=Dt,r=Ln;Dt=null,xi(t,e,n),Dt=i,Ln=r,Dt!==null&&(Ln?(t=Dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(Ln?(t=Dt,n=n.stateNode,t.nodeType===8?vc(t.parentNode,n):t.nodeType===1&&vc(t,n),_o(t)):vc(Dt,n.stateNode));break;case 4:i=Dt,r=Ln,Dt=n.stateNode.containerInfo,Ln=!0,xi(t,e,n),Dt=i,Ln=r;break;case 0:case 11:case 14:case 15:if(!zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Vu(n,e,o),r=r.next}while(r!==i)}xi(t,e,n);break;case 1:if(!zt&&(as(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ft(n,e,a)}xi(t,e,n);break;case 21:xi(t,e,n);break;case 22:n.mode&1?(zt=(i=zt)||n.memoizedState!==null,xi(t,e,n),zt=i):xi(t,e,n);break;default:xi(t,e,n)}}function Kh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Rx),e.forEach(function(i){var r=kx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function wn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Dt=a.stateNode,Ln=!1;break e;case 3:Dt=a.stateNode.containerInfo,Ln=!0;break e;case 4:Dt=a.stateNode.containerInfo,Ln=!0;break e}a=a.return}if(Dt===null)throw Error(ee(160));a0(s,o,r),Dt=null,Ln=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){ft(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)l0(e,t),e=e.sibling}function l0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(wn(e,t),kn(t),i&4){try{co(3,t,t.return),Bl(3,t)}catch(x){ft(t,t.return,x)}try{co(5,t,t.return)}catch(x){ft(t,t.return,x)}}break;case 1:wn(e,t),kn(t),i&512&&n!==null&&as(n,n.return);break;case 5:if(wn(e,t),kn(t),i&512&&n!==null&&as(n,n.return),t.flags&32){var r=t.stateNode;try{po(r,"")}catch(x){ft(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Lm(r,s),pu(a,o);var c=pu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Im(r,f):d==="dangerouslySetInnerHTML"?Dm(r,f):d==="children"?po(r,f):Bd(r,d,f,c)}switch(a){case"input":cu(r,s);break;case"textarea":bm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?us(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?us(r,!!s.multiple,s.defaultValue,!0):us(r,!!s.multiple,s.multiple?[]:"",!1))}r[Eo]=s}catch(x){ft(t,t.return,x)}}break;case 6:if(wn(e,t),kn(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){ft(t,t.return,x)}}break;case 3:if(wn(e,t),kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{_o(e.containerInfo)}catch(x){ft(t,t.return,x)}break;case 4:wn(e,t),kn(t);break;case 13:wn(e,t),kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(xf=ht())),i&4&&Kh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(c=zt)||d,wn(e,t),zt=c):wn(e,t),kn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(pe=t,d=t.child;d!==null;){for(f=pe=d;pe!==null;){switch(h=pe,m=h.child,h.tag){case 0:case 11:case 14:case 15:co(4,h,h.return);break;case 1:as(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){ft(i,n,x)}}break;case 5:as(h,h.return);break;case 22:if(h.memoizedState!==null){Jh(f);continue}}m!==null?(m.return=h,pe=m):Jh(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Um("display",o))}catch(x){ft(t,t.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){ft(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:wn(e,t),kn(t),i&4&&Kh(t);break;case 21:break;default:wn(e,t),kn(t)}}function kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(o0(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(po(r,""),i.flags&=-33);var s=Yh(t);Wu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Yh(t);Gu(t,a,o);break;default:throw Error(ee(161))}}catch(l){ft(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Lx(t,e,n){pe=t,c0(t)}function c0(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||oa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||zt;a=oa;var c=zt;if(oa=o,(zt=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?Qh(r):l!==null?(l.return=o,pe=l):Qh(r);for(;s!==null;)pe=s,c0(s),s=s.sibling;pe=r,oa=a,zt=c}Zh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):Zh(t)}}function Zh(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||Bl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Pn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ih(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ih(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&_o(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}zt||e.flags&512&&Hu(e)}catch(h){ft(e,e.return,h)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Jh(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Qh(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Bl(4,e)}catch(l){ft(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ft(e,r,l)}}var s=e.return;try{Hu(e)}catch(l){ft(e,s,l)}break;case 5:var o=e.return;try{Hu(e)}catch(l){ft(e,o,l)}}}catch(l){ft(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var bx=Math.ceil,gl=vi.ReactCurrentDispatcher,vf=vi.ReactCurrentOwner,Sn=vi.ReactCurrentBatchConfig,Ge=0,Lt=null,yt=null,Ut=0,an=0,ls=Yi(0),Et=0,Po=null,wr=0,zl=0,_f=0,uo=null,Yt=null,xf=0,ws=1/0,ni=null,vl=!1,ju=null,Bi=null,aa=!1,Ni=null,_l=0,fo=0,Xu=null,Ha=-1,Ga=0;function Wt(){return Ge&6?ht():Ha!==-1?Ha:Ha=ht()}function zi(t){return t.mode&1?Ge&2&&Ut!==0?Ut&-Ut:px.transition!==null?(Ga===0&&(Ga=qm()),Ga):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:eg(t.type)),t):1}function In(t,e,n,i){if(50<fo)throw fo=0,Xu=null,Error(ee(185));Uo(t,n,i),(!(Ge&2)||t!==Lt)&&(t===Lt&&(!(Ge&2)&&(zl|=n),Et===4&&Pi(t,Ut)),en(t,i),n===1&&Ge===0&&!(e.mode&1)&&(ws=ht()+500,Fl&&Ki()))}function en(t,e){var n=t.callbackNode;p_(t,e);var i=tl(t,t===Lt?Ut:0);if(i===0)n!==null&&lh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&lh(n),e===1)t.tag===0?hx(ep.bind(null,t)):xg(ep.bind(null,t)),cx(function(){!(Ge&6)&&Ki()}),n=null;else{switch($m(i)){case 1:n=Wd;break;case 4:n=jm;break;case 16:n=el;break;case 536870912:n=Xm;break;default:n=el}n=v0(n,u0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function u0(t,e){if(Ha=-1,Ga=0,Ge&6)throw Error(ee(327));var n=t.callbackNode;if(ms()&&t.callbackNode!==n)return null;var i=tl(t,t===Lt?Ut:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=xl(t,i);else{e=i;var r=Ge;Ge|=2;var s=f0();(Lt!==t||Ut!==e)&&(ni=null,ws=ht()+500,xr(t,e));do try{Ux();break}catch(a){d0(t,a)}while(!0);rf(),gl.current=s,Ge=r,yt!==null?e=0:(Lt=null,Ut=0,e=Et)}if(e!==0){if(e===2&&(r=xu(t),r!==0&&(i=r,e=qu(t,r))),e===1)throw n=Po,xr(t,0),Pi(t,i),en(t,ht()),n;if(e===6)Pi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Nx(r)&&(e=xl(t,i),e===2&&(s=xu(t),s!==0&&(i=s,e=qu(t,s))),e===1))throw n=Po,xr(t,0),Pi(t,i),en(t,ht()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:cr(t,Yt,ni);break;case 3:if(Pi(t,i),(i&130023424)===i&&(e=xf+500-ht(),10<e)){if(tl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Wt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Au(cr.bind(null,t,Yt,ni),e);break}cr(t,Yt,ni);break;case 4:if(Pi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Un(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=ht()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*bx(i/1960))-i,10<i){t.timeoutHandle=Au(cr.bind(null,t,Yt,ni),i);break}cr(t,Yt,ni);break;case 5:cr(t,Yt,ni);break;default:throw Error(ee(329))}}}return en(t,ht()),t.callbackNode===n?u0.bind(null,t):null}function qu(t,e){var n=uo;return t.current.memoizedState.isDehydrated&&(xr(t,e).flags|=256),t=xl(t,e),t!==2&&(e=Yt,Yt=n,e!==null&&$u(e)),t}function $u(t){Yt===null?Yt=t:Yt.push.apply(Yt,t)}function Nx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Fn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pi(t,e){for(e&=~_f,e&=~zl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Un(e),i=1<<n;t[n]=-1,e&=~i}}function ep(t){if(Ge&6)throw Error(ee(327));ms();var e=tl(t,0);if(!(e&1))return en(t,ht()),null;var n=xl(t,e);if(t.tag!==0&&n===2){var i=xu(t);i!==0&&(e=i,n=qu(t,i))}if(n===1)throw n=Po,xr(t,0),Pi(t,e),en(t,ht()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,cr(t,Yt,ni),en(t,ht()),null}function yf(t,e){var n=Ge;Ge|=1;try{return t(e)}finally{Ge=n,Ge===0&&(ws=ht()+500,Fl&&Ki())}}function Cr(t){Ni!==null&&Ni.tag===0&&!(Ge&6)&&ms();var e=Ge;Ge|=1;var n=Sn.transition,i=Ze;try{if(Sn.transition=null,Ze=1,t)return t()}finally{Ze=i,Sn.transition=n,Ge=e,!(Ge&6)&&Ki()}}function Sf(){an=ls.current,it(ls)}function xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,lx(n)),yt!==null)for(n=yt.return;n!==null;){var i=n;switch(ef(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ol();break;case 3:Es(),it(Jt),it(Vt),uf();break;case 5:cf(i);break;case 4:Es();break;case 13:it(ot);break;case 19:it(ot);break;case 10:sf(i.type._context);break;case 22:case 23:Sf()}n=n.return}if(Lt=t,yt=t=Vi(t.current,null),Ut=an=e,Et=0,Po=null,_f=zl=wr=0,Yt=uo=null,mr!==null){for(e=0;e<mr.length;e++)if(n=mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}mr=null}return t}function d0(t,e){do{var n=yt;try{if(rf(),Ba.current=ml,pl){for(var i=at.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}pl=!1}if(Tr=0,Rt=St=at=null,lo=!1,Co=0,vf.current=null,n===null||n.return===null){Et=1,Po=e,yt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Vh(o);if(m!==null){m.flags&=-257,Hh(m,o,a,s,e),m.mode&1&&zh(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){zh(s,c,e),Mf();break e}l=Error(ee(426))}}else if(rt&&a.mode&1){var p=Vh(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Hh(p,o,a,s,e),tf(Ts(l,a));break e}}s=l=Ts(l,a),Et!==4&&(Et=2),uo===null?uo=[s]:uo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=$g(s,l,e);Uh(s,u);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Bi===null||!Bi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Yg(s,a,e);Uh(s,y);break e}}s=s.return}while(s!==null)}p0(n)}catch(P){e=P,yt===n&&n!==null&&(yt=n=n.return);continue}break}while(!0)}function f0(){var t=gl.current;return gl.current=ml,t===null?ml:t}function Mf(){(Et===0||Et===3||Et===2)&&(Et=4),Lt===null||!(wr&268435455)&&!(zl&268435455)||Pi(Lt,Ut)}function xl(t,e){var n=Ge;Ge|=2;var i=f0();(Lt!==t||Ut!==e)&&(ni=null,xr(t,e));do try{Dx();break}catch(r){d0(t,r)}while(!0);if(rf(),Ge=n,gl.current=i,yt!==null)throw Error(ee(261));return Lt=null,Ut=0,Et}function Dx(){for(;yt!==null;)h0(yt)}function Ux(){for(;yt!==null&&!s_();)h0(yt)}function h0(t){var e=g0(t.alternate,t,an);t.memoizedProps=t.pendingProps,e===null?p0(t):yt=e,vf.current=null}function p0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ax(n,e),n!==null){n.flags&=32767,yt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,yt=null;return}}else if(n=Cx(n,e,an),n!==null){yt=n;return}if(e=e.sibling,e!==null){yt=e;return}yt=e=t}while(e!==null);Et===0&&(Et=5)}function cr(t,e,n){var i=Ze,r=Sn.transition;try{Sn.transition=null,Ze=1,Ix(t,e,n,i)}finally{Sn.transition=r,Ze=i}return null}function Ix(t,e,n,i){do ms();while(Ni!==null);if(Ge&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(m_(t,s),t===Lt&&(yt=Lt=null,Ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||aa||(aa=!0,v0(el,function(){return ms(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Sn.transition,Sn.transition=null;var o=Ze;Ze=1;var a=Ge;Ge|=4,vf.current=null,Px(t,n),l0(n,t),tx(wu),nl=!!Tu,wu=Tu=null,t.current=n,Lx(n),o_(),Ge=a,Ze=o,Sn.transition=s}else t.current=n;if(aa&&(aa=!1,Ni=t,_l=r),s=t.pendingLanes,s===0&&(Bi=null),c_(n.stateNode),en(t,ht()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(vl)throw vl=!1,t=ju,ju=null,t;return _l&1&&t.tag!==0&&ms(),s=t.pendingLanes,s&1?t===Xu?fo++:(fo=0,Xu=t):fo=0,Ki(),null}function ms(){if(Ni!==null){var t=$m(_l),e=Sn.transition,n=Ze;try{if(Sn.transition=null,Ze=16>t?16:t,Ni===null)var i=!1;else{if(t=Ni,Ni=null,_l=0,Ge&6)throw Error(ee(331));var r=Ge;for(Ge|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var d=pe;switch(d.tag){case 0:case 11:case 15:co(8,d,s)}var f=d.child;if(f!==null)f.return=d,pe=f;else for(;pe!==null;){d=pe;var h=d.sibling,m=d.return;if(s0(d),d===c){pe=null;break}if(h!==null){h.return=m,pe=h;break}pe=m}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:co(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,pe=u;break e}pe=s.return}}var g=t.current;for(pe=g;pe!==null;){o=pe;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,pe=v;else e:for(o=g;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Bl(9,a)}}catch(P){ft(a,a.return,P)}if(a===o){pe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,pe=y;break e}pe=a.return}}if(Ge=r,Ki(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(bl,t)}catch{}i=!0}return i}finally{Ze=n,Sn.transition=e}}return!1}function tp(t,e,n){e=Ts(n,e),e=$g(t,e,1),t=ki(t,e,1),e=Wt(),t!==null&&(Uo(t,1,e),en(t,e))}function ft(t,e,n){if(t.tag===3)tp(t,t,n);else for(;e!==null;){if(e.tag===3){tp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Bi===null||!Bi.has(i))){t=Ts(n,t),t=Yg(e,t,1),e=ki(e,t,1),t=Wt(),e!==null&&(Uo(e,1,t),en(e,t));break}}e=e.return}}function Fx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Wt(),t.pingedLanes|=t.suspendedLanes&n,Lt===t&&(Ut&n)===n&&(Et===4||Et===3&&(Ut&130023424)===Ut&&500>ht()-xf?xr(t,0):_f|=n),en(t,e)}function m0(t,e){e===0&&(t.mode&1?(e=Zo,Zo<<=1,!(Zo&130023424)&&(Zo=4194304)):e=1);var n=Wt();t=fi(t,e),t!==null&&(Uo(t,e,n),en(t,n))}function Ox(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),m0(t,n)}function kx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),m0(t,n)}var g0;g0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)Zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Zt=!1,wx(t,e,n);Zt=!!(t.flags&131072)}else Zt=!1,rt&&e.flags&1048576&&yg(e,cl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Va(t,e),t=e.pendingProps;var r=ys(e,Vt.current);ps(e,n),r=ff(null,e,i,t,r,n);var s=hf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qt(i)?(s=!0,al(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,af(e),r.updater=kl,e.stateNode=r,r._reactInternals=e,Uu(e,i,t,n),e=Ou(null,e,i,!0,s,n)):(e.tag=0,rt&&s&&Qd(e),Gt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Va(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=zx(i),t=Pn(i,t),r){case 0:e=Fu(null,e,i,t,n);break e;case 1:e=jh(null,e,i,t,n);break e;case 11:e=Gh(null,e,i,t,n);break e;case 14:e=Wh(null,e,i,Pn(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Fu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),jh(t,e,i,r,n);case 3:e:{if(Qg(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Cg(t,e),fl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ts(Error(ee(423)),e),e=Xh(t,e,i,n,r);break e}else if(i!==r){r=Ts(Error(ee(424)),e),e=Xh(t,e,i,n,r);break e}else for(ln=Oi(e.stateNode.containerInfo.firstChild),cn=e,rt=!0,bn=null,n=Tg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ss(),i===r){e=hi(t,e,n);break e}Gt(t,e,i,n)}e=e.child}return e;case 5:return Ag(e),t===null&&bu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Cu(i,r)?o=null:s!==null&&Cu(i,s)&&(e.flags|=32),Jg(t,e),Gt(t,e,o,n),e.child;case 6:return t===null&&bu(e),null;case 13:return e0(t,e,n);case 4:return lf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ms(e,null,i,n):Gt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Gh(t,e,i,r,n);case 7:return Gt(t,e,e.pendingProps,n),e.child;case 8:return Gt(t,e,e.pendingProps.children,n),e.child;case 12:return Gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,et(ul,i._currentValue),i._currentValue=o,s!==null)if(Fn(s.value,o)){if(s.children===r.children&&!Jt.current){e=hi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ci(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Nu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Nu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Gt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ps(e,n),r=Mn(r),i=i(r),e.flags|=1,Gt(t,e,i,n),e.child;case 14:return i=e.type,r=Pn(i,e.pendingProps),r=Pn(i.type,r),Wh(t,e,i,r,n);case 15:return Kg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Va(t,e),e.tag=1,Qt(i)?(t=!0,al(e)):t=!1,ps(e,n),qg(e,i,r),Uu(e,i,r,n),Ou(null,e,i,!0,t,n);case 19:return t0(t,e,n);case 22:return Zg(t,e,n)}throw Error(ee(156,e.tag))};function v0(t,e){return Wm(t,e)}function Bx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(t,e,n,i){return new Bx(t,e,n,i)}function Ef(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zx(t){if(typeof t=="function")return Ef(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Vd)return 11;if(t===Hd)return 14}return 2}function Vi(t,e){var n=t.alternate;return n===null?(n=xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wa(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Ef(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Jr:return yr(n.children,r,s,e);case zd:o=8,r|=8;break;case ru:return t=xn(12,n,e,r|2),t.elementType=ru,t.lanes=s,t;case su:return t=xn(13,n,e,r),t.elementType=su,t.lanes=s,t;case ou:return t=xn(19,n,e,r),t.elementType=ou,t.lanes=s,t;case Am:return Vl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case wm:o=10;break e;case Cm:o=9;break e;case Vd:o=11;break e;case Hd:o=14;break e;case Ci:o=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=xn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function yr(t,e,n,i){return t=xn(7,t,i,e),t.lanes=n,t}function Vl(t,e,n,i){return t=xn(22,t,i,e),t.elementType=Am,t.lanes=n,t.stateNode={isHidden:!1},t}function wc(t,e,n){return t=xn(6,t,null,e),t.lanes=n,t}function Cc(t,e,n){return e=xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Vx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oc(0),this.expirationTimes=oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Tf(t,e,n,i,r,s,o,a,l){return t=new Vx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=xn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},af(s),t}function Hx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function _0(t){if(!t)return Xi;t=t._reactInternals;e:{if(Lr(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(Qt(n))return _g(t,n,e)}return e}function x0(t,e,n,i,r,s,o,a,l){return t=Tf(n,i,!0,t,r,s,o,a,l),t.context=_0(null),n=t.current,i=Wt(),r=zi(n),s=ci(i,r),s.callback=e??null,ki(n,s,r),t.current.lanes=r,Uo(t,r,i),en(t,i),t}function Hl(t,e,n,i){var r=e.current,s=Wt(),o=zi(r);return n=_0(n),e.context===null?e.context=n:e.pendingContext=n,e=ci(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ki(r,e,o),t!==null&&(In(t,r,o,s),ka(t,r,o)),o}function yl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function np(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wf(t,e){np(t,e),(t=t.alternate)&&np(t,e)}function Gx(){return null}var y0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cf(t){this._internalRoot=t}Gl.prototype.render=Cf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));Hl(t,e,null,null)};Gl.prototype.unmount=Cf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Cr(function(){Hl(null,t,null,null)}),e[di]=null}};function Gl(t){this._internalRoot=t}Gl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Zm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ri.length&&e!==0&&e<Ri[n].priority;n++);Ri.splice(n,0,t),n===0&&Qm(t)}};function Af(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ip(){}function Wx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=yl(o);s.call(c)}}var o=x0(e,i,t,0,null,!1,!1,"",ip);return t._reactRootContainer=o,t[di]=o.current,So(t.nodeType===8?t.parentNode:t),Cr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=yl(l);a.call(c)}}var l=Tf(t,0,!1,null,null,!1,!1,"",ip);return t._reactRootContainer=l,t[di]=l.current,So(t.nodeType===8?t.parentNode:t),Cr(function(){Hl(e,l,n,i)}),l}function jl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=yl(o);a.call(l)}}Hl(e,o,t,r)}else o=Wx(n,e,t,r,i);return yl(o)}Ym=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=eo(e.pendingLanes);n!==0&&(jd(e,n|1),en(e,ht()),!(Ge&6)&&(ws=ht()+500,Ki()))}break;case 13:Cr(function(){var i=fi(t,1);if(i!==null){var r=Wt();In(i,t,1,r)}}),wf(t,1)}};Xd=function(t){if(t.tag===13){var e=fi(t,134217728);if(e!==null){var n=Wt();In(e,t,134217728,n)}wf(t,134217728)}};Km=function(t){if(t.tag===13){var e=zi(t),n=fi(t,e);if(n!==null){var i=Wt();In(n,t,e,i)}wf(t,e)}};Zm=function(){return Ze};Jm=function(t,e){var n=Ze;try{return Ze=t,e()}finally{Ze=n}};gu=function(t,e,n){switch(e){case"input":if(cu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Il(i);if(!r)throw Error(ee(90));Pm(i),cu(i,r)}}}break;case"textarea":bm(t,n);break;case"select":e=n.value,e!=null&&us(t,!!n.multiple,e,!1)}};km=yf;Bm=Cr;var jx={usingClientEntryPoint:!1,Events:[Fo,ns,Il,Fm,Om,yf]},Xs={findFiberByHostInstance:pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xx={bundleType:Xs.bundleType,version:Xs.version,rendererPackageName:Xs.rendererPackageName,rendererConfig:Xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Hm(t),t===null?null:t.stateNode},findFiberByHostInstance:Xs.findFiberByHostInstance||Gx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var la=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!la.isDisabled&&la.supportsFiber)try{bl=la.inject(Xx),Xn=la}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jx;fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Af(e))throw Error(ee(200));return Hx(t,e,null,n)};fn.createRoot=function(t,e){if(!Af(t))throw Error(ee(299));var n=!1,i="",r=y0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Tf(t,1,!1,null,null,n,!1,i,r),t[di]=e.current,So(t.nodeType===8?t.parentNode:t),new Cf(e)};fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=Hm(e),t=t===null?null:t.stateNode,t};fn.flushSync=function(t){return Cr(t)};fn.hydrate=function(t,e,n){if(!Wl(e))throw Error(ee(200));return jl(null,t,e,!0,n)};fn.hydrateRoot=function(t,e,n){if(!Af(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=y0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=x0(e,null,t,1,n??null,r,!1,s,o),t[di]=e.current,So(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Gl(e)};fn.render=function(t,e,n){if(!Wl(e))throw Error(ee(200));return jl(null,t,e,!1,n)};fn.unmountComponentAtNode=function(t){if(!Wl(t))throw Error(ee(40));return t._reactRootContainer?(Cr(function(){jl(null,null,t,!1,function(){t._reactRootContainer=null,t[di]=null})}),!0):!1};fn.unstable_batchedUpdates=yf;fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Wl(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return jl(t,e,n,!1,i)};fn.version="18.3.1-next-f1338f8080-20240426";function S0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S0)}catch(t){console.error(t)}}S0(),Sm.exports=fn;var qx=Sm.exports;const $x=Nd(qx);/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lo(){return Lo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Lo.apply(this,arguments)}var Di;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Di||(Di={}));const rp="popstate";function Yx(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Yu("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Sl(r)}return Zx(e,n,null,t)}function pt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function M0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Kx(){return Math.random().toString(36).substr(2,8)}function sp(t,e){return{usr:t.state,key:t.key,idx:e}}function Yu(t,e,n,i){return n===void 0&&(n=null),Lo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Us(e):e,{state:n,key:e&&e.key||i||Kx()})}function Sl(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Us(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function Zx(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Di.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(Lo({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=Di.Pop;let p=d(),u=p==null?null:p-c;c=p,l&&l({action:a,location:x.location,delta:u})}function h(p,u){a=Di.Push;let g=Yu(x.location,p,u);c=d()+1;let v=sp(g,c),y=x.createHref(g);try{o.pushState(v,"",y)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;r.location.assign(y)}s&&l&&l({action:a,location:x.location,delta:1})}function m(p,u){a=Di.Replace;let g=Yu(x.location,p,u);c=d();let v=sp(g,c),y=x.createHref(g);o.replaceState(v,"",y),s&&l&&l({action:a,location:x.location,delta:0})}function _(p){let u=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof p=="string"?p:Sl(p);return g=g.replace(/ $/,"%20"),pt(u,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,u)}let x={get action(){return a},get location(){return t(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(rp,f),l=p,()=>{r.removeEventListener(rp,f),l=null}},createHref(p){return e(r,p)},createURL:_,encodeLocation(p){let u=_(p);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:h,replace:m,go(p){return o.go(p)}};return x}var op;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(op||(op={}));function Jx(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?Us(e):e,r=Rf(i.pathname||"/",n);if(r==null)return null;let s=E0(t);Qx(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=d1(r);o=l1(s[a],l)}return o}function E0(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(pt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Hi([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(pt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),E0(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:o1(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of T0(s.path))r(s,o,l)}),e}function T0(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=T0(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Qx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:a1(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const e1=/^:[\w-]+$/,t1=3,n1=2,i1=1,r1=10,s1=-2,ap=t=>t==="*";function o1(t,e){let n=t.split("/"),i=n.length;return n.some(ap)&&(i+=s1),e&&(i+=n1),n.filter(r=>!ap(r)).reduce((r,s)=>r+(e1.test(s)?t1:s===""?i1:r1),i)}function a1(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function l1(t,e){let{routesMeta:n}=t,i={},r="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=r==="/"?e:e.slice(r.length)||"/",d=c1({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!d)return null;Object.assign(i,d.params);let f=a.route;s.push({params:i,pathname:Hi([r,d.pathname]),pathnameBase:m1(Hi([r,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(r=Hi([r,d.pathnameBase]))}return s}function c1(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=u1(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,d,f)=>{let{paramName:h,isOptional:m}=d;if(h==="*"){let x=a[f]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const _=a[f];return m&&!_?c[h]=void 0:c[h]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function u1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),M0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function d1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return M0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Rf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function f1(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Us(t):t;return{pathname:n?n.startsWith("/")?n:h1(n,e):e,search:g1(i),hash:v1(r)}}function h1(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Ac(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function p1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Pf(t,e){let n=p1(t);return e?n.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Lf(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Us(t):(r=Lo({},t),pt(!r.pathname||!r.pathname.includes("?"),Ac("?","pathname","search",r)),pt(!r.pathname||!r.pathname.includes("#"),Ac("#","pathname","hash",r)),pt(!r.search||!r.search.includes("#"),Ac("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}a=f>=0?e[f]:"/"}let l=f1(r,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Hi=t=>t.join("/").replace(/\/\/+/g,"/"),m1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),g1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,v1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function _1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const w0=["post","put","patch","delete"];new Set(w0);const x1=["get",...w0];new Set(x1);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bo(){return bo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},bo.apply(this,arguments)}const bf=se.createContext(null),y1=se.createContext(null),Zi=se.createContext(null),Xl=se.createContext(null),Ji=se.createContext({outlet:null,matches:[],isDataRoute:!1}),C0=se.createContext(null);function S1(t,e){let{relative:n}=e===void 0?{}:e;Is()||pt(!1);let{basename:i,navigator:r}=se.useContext(Zi),{hash:s,pathname:o,search:a}=P0(t,{relative:n}),l=o;return i!=="/"&&(l=o==="/"?i:Hi([i,o])),r.createHref({pathname:l,search:a,hash:s})}function Is(){return se.useContext(Xl)!=null}function Qi(){return Is()||pt(!1),se.useContext(Xl).location}function A0(t){se.useContext(Zi).static||se.useLayoutEffect(t)}function R0(){let{isDataRoute:t}=se.useContext(Ji);return t?U1():M1()}function M1(){Is()||pt(!1);let t=se.useContext(bf),{basename:e,future:n,navigator:i}=se.useContext(Zi),{matches:r}=se.useContext(Ji),{pathname:s}=Qi(),o=JSON.stringify(Pf(r,n.v7_relativeSplatPath)),a=se.useRef(!1);return A0(()=>{a.current=!0}),se.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let f=Lf(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Hi([e,f.pathname])),(d.replace?i.replace:i.push)(f,d.state,d)},[e,i,o,s,t])}function P0(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=se.useContext(Zi),{matches:r}=se.useContext(Ji),{pathname:s}=Qi(),o=JSON.stringify(Pf(r,i.v7_relativeSplatPath));return se.useMemo(()=>Lf(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function E1(t,e){return T1(t,e)}function T1(t,e,n,i){Is()||pt(!1);let{navigator:r}=se.useContext(Zi),{matches:s}=se.useContext(Ji),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Qi(),d;if(e){var f;let p=typeof e=="string"?Us(e):e;l==="/"||(f=p.pathname)!=null&&f.startsWith(l)||pt(!1),d=p}else d=c;let h=d.pathname||"/",m=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(p.length).join("/")}let _=Jx(t,{pathname:m}),x=P1(_&&_.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:Hi([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:Hi([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&x?se.createElement(Xl.Provider,{value:{location:bo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Di.Pop}},x):x}function w1(){let t=D1(),e=_1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return se.createElement(se.Fragment,null,se.createElement("h2",null,"Unexpected Application Error!"),se.createElement("h3",{style:{fontStyle:"italic"}},e),n?se.createElement("pre",{style:r},n):null,null)}const C1=se.createElement(w1,null);class A1 extends se.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?se.createElement(Ji.Provider,{value:this.props.routeContext},se.createElement(C0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function R1(t){let{routeContext:e,match:n,children:i}=t,r=se.useContext(bf);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),se.createElement(Ji.Provider,{value:e},i)}function P1(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||pt(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:h,errors:m}=n,_=f.route.loader&&h[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||_){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,h)=>{let m,_=!1,x=null,p=null;n&&(m=a&&f.route.id?a[f.route.id]:void 0,x=f.route.errorElement||C1,l&&(c<0&&h===0?(_=!0,p=null):c===h&&(_=!0,p=f.route.hydrateFallbackElement||null)));let u=e.concat(o.slice(0,h+1)),g=()=>{let v;return m?v=x:_?v=p:f.route.Component?v=se.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=d,se.createElement(R1,{match:f,routeContext:{outlet:d,matches:u,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?se.createElement(A1,{location:n.location,revalidation:n.revalidation,component:x,error:m,children:g(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):g()},null)}var L0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(L0||{}),Ml=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ml||{});function L1(t){let e=se.useContext(bf);return e||pt(!1),e}function b1(t){let e=se.useContext(y1);return e||pt(!1),e}function N1(t){let e=se.useContext(Ji);return e||pt(!1),e}function b0(t){let e=N1(),n=e.matches[e.matches.length-1];return n.route.id||pt(!1),n.route.id}function D1(){var t;let e=se.useContext(C0),n=b1(Ml.UseRouteError),i=b0(Ml.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function U1(){let{router:t}=L1(L0.UseNavigateStable),e=b0(Ml.UseNavigateStable),n=se.useRef(!1);return A0(()=>{n.current=!0}),se.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,bo({fromRouteId:e},s)))},[t,e])}function I1(t){let{to:e,replace:n,state:i,relative:r}=t;Is()||pt(!1);let{future:s,static:o}=se.useContext(Zi),{matches:a}=se.useContext(Ji),{pathname:l}=Qi(),c=R0(),d=Lf(e,Pf(a,s.v7_relativeSplatPath),l,r==="path"),f=JSON.stringify(d);return se.useEffect(()=>c(JSON.parse(f),{replace:n,state:i,relative:r}),[c,f,r,n,i]),null}function Bn(t){pt(!1)}function F1(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Di.Pop,navigator:s,static:o=!1,future:a}=t;Is()&&pt(!1);let l=e.replace(/^\/*/,"/"),c=se.useMemo(()=>({basename:l,navigator:s,static:o,future:bo({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=Us(i));let{pathname:d="/",search:f="",hash:h="",state:m=null,key:_="default"}=i,x=se.useMemo(()=>{let p=Rf(d,l);return p==null?null:{location:{pathname:p,search:f,hash:h,state:m,key:_},navigationType:r}},[l,d,f,h,m,_,r]);return x==null?null:se.createElement(Zi.Provider,{value:c},se.createElement(Xl.Provider,{children:n,value:x}))}function O1(t){let{children:e,location:n}=t;return E1(Ku(e),n)}new Promise(()=>{});function Ku(t,e){e===void 0&&(e=[]);let n=[];return se.Children.forEach(t,(i,r)=>{if(!se.isValidElement(i))return;let s=[...e,r];if(i.type===se.Fragment){n.push.apply(n,Ku(i.props.children,s));return}i.type!==Bn&&pt(!1),!i.props.index||!i.props.children||pt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Ku(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zu(){return Zu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Zu.apply(this,arguments)}function k1(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function B1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function z1(t,e){return t.button===0&&(!e||e==="_self")&&!B1(t)}const V1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],H1="6";try{window.__reactRouterVersion=H1}catch{}const G1="startTransition",lp=Fv[G1];function W1(t){let{basename:e,children:n,future:i,window:r}=t,s=se.useRef();s.current==null&&(s.current=Yx({window:r,v5Compat:!0}));let o=s.current,[a,l]=se.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},d=se.useCallback(f=>{c&&lp?lp(()=>l(f)):l(f)},[l,c]);return se.useLayoutEffect(()=>o.listen(d),[o,d]),se.createElement(F1,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}const j1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",X1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mt=se.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:d,unstable_viewTransition:f}=e,h=k1(e,V1),{basename:m}=se.useContext(Zi),_,x=!1;if(typeof c=="string"&&X1.test(c)&&(_=c,j1))try{let v=new URL(window.location.href),y=c.startsWith("//")?new URL(v.protocol+c):new URL(c),P=Rf(y.pathname,m);y.origin===v.origin&&P!=null?c=P+y.search+y.hash:x=!0}catch{}let p=S1(c,{relative:r}),u=q1(c,{replace:o,state:a,target:l,preventScrollReset:d,relative:r,unstable_viewTransition:f});function g(v){i&&i(v),v.defaultPrevented||u(v)}return se.createElement("a",Zu({},h,{href:_||p,onClick:x||s?i:g,ref:n,target:l}))});var cp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(cp||(cp={}));var up;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(up||(up={}));function q1(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=R0(),c=Qi(),d=P0(t,{relative:o});return se.useCallback(f=>{if(z1(f,n)){f.preventDefault();let h=i!==void 0?i:Sl(c)===Sl(d);l(t,{replace:h,state:r,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,l,d,i,r,n,t,s,o,a])}const ca=({to:t,label:e,className:n,backgroundImage:i,smallBg:r,bgClassName:s})=>{const o=n||"";return se.useEffect(()=>{const a=()=>{document.querySelectorAll(`.boxBg.${s}`).forEach(c=>{window.innerWidth<=860?(c.style.backgroundImage=`url(${r})`,c.querySelector(".bg").style.display="none",c.style.opacity=1):(c.style.backgroundImage="none",c.querySelector(".bg").style.display="block",c.style.opacity=1)})};return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[s,i,r]),E.jsx(Mt,{to:t,className:`topic ${o}`,children:E.jsxs("span",{className:"container",children:[E.jsx("div",{className:`boxBg ${s}`,style:{backgroundImage:`url(${i})`},children:E.jsx("img",{src:i,alt:e,className:"bg"})}),E.jsx("div",{className:"hidden__title",children:E.jsx("h1",{children:e})}),E.jsx("div",{className:"topic__title",children:E.jsx("h1",{className:"title",children:e})}),E.jsx("div",{className:"spacer",style:{width:"100%",height:"80px"}}),E.jsx("div",{className:"barCode",children:E.jsx("h3",{children:e})})]})})},$1=()=>{const t="/portfolio/";return E.jsxs("div",{className:"Home hover-target",children:[E.jsx(ca,{to:"/programming",label:"Programming",className:"programming",bgClassName:"progBg",backgroundImage:`${t}assets/images/welcome__Page__img/prog1.png`,smallBg:`${t}assets/images/welcome__Page__img/lstf1.png`}),E.jsx(ca,{to:"/astronomie",label:"Astronomie",className:"astronomie",bgClassName:"astroBg",backgroundImage:`${t}assets/images/welcome__Page__img/nightSky4.png`,smallBg:`${t}assets/images/welcome__Page__img/lstf2.png`}),E.jsx(ca,{to:"/design",label:"My Art",className:"design",bgClassName:"designBg",backgroundImage:`${t}assets/images/welcome__Page__img/jeeL4.png`,smallBg:`${t}assets/images/welcome__Page__img/lstf3.png`}),E.jsx(ca,{to:"/hobbies",label:"Hobbies",className:"hobbies",bgClassName:"hobbiesBg",backgroundImage:`${t}assets/images/welcome__Page__img/youvsyou2.png`,smallBg:`${t}assets/images/welcome__Page__img/lstf4.png`})]})},Fs=()=>(se.useEffect(()=>{const t=document.createElement("link");return t.rel="stylesheet",t.href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",t.integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",t.crossOrigin="anonymous",document.head.appendChild(t),()=>{document.head.removeChild(t)}},[]),E.jsxs("div",{className:"container2",children:[E.jsxs("div",{className:"container",children:[E.jsx("div",{className:"row justify-content-center",children:E.jsxs("div",{className:"col-md-10 main-title",children:[E.jsx("h1",{children:"Bientôt disponible..."}),E.jsx("h2",{children:"Site en construction"})]})}),E.jsx("div",{className:"row align-items-center",children:E.jsx("div",{className:"col-sm-10 col-md-6 col-lg-6 svg-img p-5 paddingOff",children:E.jsxs("svg",{viewBox:"0 0 834 690",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[E.jsxs("g",{id:"undraw_dev_productivity_umsq 1",clipPath:"url(#clip0)",children:[E.jsxs("g",{id:"man",children:[E.jsx("path",{id:"Vector",d:"M435.922 191.941C476.534 191.941 509.458 159.018 509.458 118.405C509.458 77.7923 476.534 44.869 435.922 44.869C395.309 44.869 362.385 77.7923 362.385 118.405C362.385 159.018 395.309 191.941 435.922 191.941Z",fill:"#A0616A"}),E.jsx("path",{id:"Vector_2",d:"M381.036 155.173C381.036 155.173 394.891 259.616 373.576 271.339C352.261 283.062 500.399 284.128 500.399 284.128C500.399 284.128 467.361 193.54 482.281 165.831L381.036 155.173Z",fill:"#A0616A"}),E.jsx("path",{id:"Vector_3",d:"M608.57 284.656L596.25 340.756L570.2 459.446L569.42 465.946L560.43 541.196L554.45 591.186L550.44 624.766C526.06 637.296 508.39 645.946 508.39 645.946C508.39 645.946 506.87 638.326 504.42 628.576C487.31 633.706 455.65 642.216 428.82 643.916C438.59 654.806 443.08 665.036 436.99 672.586C418.61 695.346 342.73 647.666 316.19 629.886C315.572 634.143 315.338 638.447 315.49 642.746L295.18 627.126L297.19 591.186L300.58 530.376L304.84 454.116C303.497 450.851 302.371 447.5 301.47 444.086C295.25 421.966 287.7 377.796 281.91 340.756C277.25 310.946 273.75 285.756 273.01 280.396C272.91 279.696 272.86 279.336 272.86 279.336L385.29 229.656C393.28 248.186 430.59 253.756 430.59 253.756C461.5 251.626 485.73 235.326 485.73 235.326L608.57 284.656Z",fill:"#1d1b1b"}),E.jsx("path",{id:"Vector_4",d:"M374.746 48.8468L360.997 43.3423C360.997 43.3423 389.746 11.6915 429.744 14.4439L418.494 2.05865C418.494 2.05865 445.993 -8.95021 470.992 19.9482C484.134 35.1394 499.339 52.996 508.817 73.1112H523.542L517.396 86.643L538.906 100.175L516.828 97.7442C518.144 105.154 518.346 112.719 517.428 120.189C516.48 127.661 512.667 134.473 506.793 139.187C506.793 139.187 489.741 103.891 489.741 98.387V112.148C489.741 112.148 475.992 99.7631 475.992 91.5065L468.492 101.139L464.742 86.0019L418.494 101.139L425.994 88.7543L397.245 92.8826L408.495 77.7452C408.495 77.7452 375.997 95.6348 374.746 110.772C373.497 125.909 363.984 140.253 363.984 140.253C363.984 140.253 338.498 69.4885 374.746 48.8468Z",fill:"#000000"}),E.jsxs("g",{id:"rightHand",children:[E.jsx("path",{id:"Vector_5",d:"M516.92 624.636C516.92 624.636 512.16 626.266 504.42 628.576C487.31 633.706 455.65 642.216 428.82 643.916C405.72 645.396 386.2 641.836 382.63 626.766C381.1 620.286 383.27 614.956 388 610.576C402.12 597.486 439 592.796 468.25 591.186C476.51 590.736 484.15 590.526 490.51 590.446C501.31 590.306 508.39 590.526 508.39 590.526L508.56 591.186L516.92 624.636Z",fill:"#A0616e"}),E.jsx("path",{id:"Vector_6",d:"M688.5 542.566C681.01 550.686 662.45 562.916 639.95 576.156C631.58 581.076 622.67 586.146 613.58 591.186C591.89 603.216 569.18 615.136 550.44 624.766C526.06 637.296 508.39 645.946 508.39 645.946C508.39 645.946 506.87 638.326 504.42 628.576C501.14 615.526 496.2 598.656 491.05 591.186C490.87 590.926 490.69 590.686 490.51 590.446C489.01 588.476 487.5 587.326 486.01 587.326L560.43 541.196L592.59 521.256L569.42 465.946L540.36 396.566L557.9 340.756L575.53 284.656H608.57C608.57 284.656 619.51 308.536 633.5 341.836C635.59 346.816 637.75 352.006 639.95 357.366C668.73 427.366 704.61 525.116 688.5 542.566Z",fill:"#1d1b1b "})]}),E.jsxs("g",{id:"leftHand",children:[E.jsx("path",{id:"Vector_7",d:"M436.99 672.586C418.61 695.346 342.73 647.666 316.19 629.886C310.41 626.016 306.97 623.566 306.97 623.566L331.25 591.186L338.94 580.936C338.94 580.936 345.82 584.586 355.99 590.526C356.36 590.746 356.73 590.966 357.11 591.186C365.88 596.336 376.89 603.066 388 610.576C403.33 620.946 418.83 632.776 428.82 643.916C438.59 654.806 443.08 665.036 436.99 672.586Z",fill:"#A0616A"}),E.jsx("path",{id:"Vector_8",d:"M355.99 590.526C353.276 590.516 350.567 590.736 347.89 591.186C324.9 595.136 318.12 615.946 316.19 629.886C315.572 634.143 315.338 638.447 315.49 642.746L295.18 627.126L287.78 621.436C269.97 615.226 254.1 604.196 240.34 591.186C228.403 579.7 217.695 567.001 208.39 553.296C199.122 539.788 190.86 525.616 183.67 510.896C181.664 506.788 180.586 502.29 180.512 497.719C180.437 493.148 181.369 488.617 183.24 484.446L208.39 428.396L245.15 346.476C245.42 344.526 245.717 342.619 246.04 340.756C253.33 298.956 272.86 280.396 272.86 280.396H287.78L297.76 340.756L310.16 415.746L301.47 444.086L281.39 509.536L300.58 530.376L355.99 590.526Z",fill:"#1d1b1b"})]}),E.jsx("path",{id:"Vector_9",d:"M372.877 415.806L385.631 430.687C390.37 429.783 395.319 428.721 400.416 427.529L396.752 415.806L405.71 426.256C459.707 412.976 526.637 387.155 526.637 387.155C526.637 387.155 454.38 392.453 400.428 380.666C376.558 375.451 351.998 387.284 342.202 409.669C336.509 422.679 337.403 433.952 357.596 433.952C364.419 433.835 371.224 433.195 377.949 432.037L372.877 415.806Z",fill:"#6610f2"})]}),E.jsxs("g",{id:"allOther",children:[E.jsx("path",{id:"Vector_10",d:"M663.65 660.386V666.456C663.654 668.122 663.345 669.774 662.74 671.326C662.472 672.018 662.147 672.687 661.77 673.326C660.579 675.327 658.887 676.983 656.863 678.133C654.838 679.283 652.549 679.887 650.22 679.886H203.67C201.342 679.887 199.053 679.283 197.028 678.133C195.003 676.983 193.312 675.327 192.12 673.326C191.743 672.687 191.419 672.018 191.15 671.326C190.546 669.774 190.237 668.122 190.24 666.456V660.386C190.24 658.622 190.587 656.876 191.262 655.246C191.936 653.616 192.926 652.136 194.173 650.889C195.42 649.641 196.901 648.652 198.53 647.977C200.16 647.303 201.907 646.956 203.67 646.956H229.41V644.126C229.41 644.053 229.425 643.98 229.453 643.912C229.481 643.844 229.522 643.782 229.574 643.73C229.626 643.678 229.688 643.637 229.756 643.608C229.824 643.58 229.897 643.566 229.97 643.566H243.4C243.474 643.566 243.547 643.58 243.615 643.608C243.683 643.637 243.745 643.678 243.797 643.73C243.849 643.782 243.89 643.844 243.918 643.912C243.946 643.98 243.96 644.053 243.96 644.126V646.956H252.35V644.126C252.35 644.053 252.365 643.98 252.393 643.912C252.421 643.844 252.462 643.782 252.514 643.73C252.566 643.678 252.628 643.637 252.696 643.608C252.764 643.58 252.837 643.566 252.91 643.566H266.34C266.414 643.566 266.487 643.58 266.555 643.608C266.623 643.637 266.684 643.678 266.736 643.73C266.789 643.782 266.83 643.844 266.858 643.912C266.886 643.98 266.9 644.053 266.9 644.126V646.956H275.3V644.126C275.3 644.053 275.315 643.98 275.343 643.912C275.371 643.844 275.412 643.782 275.464 643.73C275.516 643.678 275.578 643.637 275.646 643.608C275.714 643.58 275.787 643.566 275.86 643.566H289.29C289.364 643.566 289.437 643.58 289.505 643.608C289.573 643.637 289.634 643.678 289.687 643.73C289.739 643.782 289.78 643.844 289.808 643.912C289.836 643.98 289.85 644.053 289.85 644.126V646.956H298.24V644.126C298.24 644.053 298.255 643.98 298.283 643.912C298.311 643.844 298.352 643.782 298.404 643.73C298.456 643.678 298.518 643.637 298.586 643.608C298.654 643.58 298.727 643.566 298.8 643.566H312.23C312.304 643.566 312.377 643.58 312.445 643.608C312.513 643.637 312.574 643.678 312.626 643.73C312.679 643.782 312.72 643.844 312.748 643.912C312.776 643.98 312.79 644.053 312.79 644.126V646.956H321.18V644.126C321.18 644.053 321.195 643.98 321.223 643.912C321.251 643.844 321.292 643.782 321.344 643.73C321.396 643.678 321.458 643.637 321.526 643.608C321.594 643.58 321.667 643.566 321.74 643.566H335.17C335.244 643.566 335.317 643.58 335.385 643.608C335.453 643.637 335.514 643.678 335.566 643.73C335.619 643.782 335.66 643.844 335.688 643.912C335.716 643.98 335.73 644.053 335.73 644.126V646.956H344.13V644.126C344.13 644.053 344.145 643.98 344.173 643.912C344.201 643.844 344.242 643.782 344.294 643.73C344.346 643.678 344.408 643.637 344.476 643.608C344.544 643.58 344.617 643.566 344.69 643.566H358.12C358.194 643.566 358.267 643.58 358.335 643.608C358.403 643.637 358.464 643.678 358.516 643.73C358.569 643.782 358.61 643.844 358.638 643.912C358.666 643.98 358.68 644.053 358.68 644.126V646.956H367.07V644.126C367.07 644.053 367.085 643.98 367.113 643.912C367.141 643.844 367.182 643.782 367.234 643.73C367.286 643.678 367.348 643.637 367.416 643.608C367.484 643.58 367.557 643.566 367.63 643.566H472.83C472.904 643.566 472.977 643.58 473.045 643.608C473.113 643.637 473.174 643.678 473.227 643.73C473.279 643.782 473.32 643.844 473.348 643.912C473.376 643.98 473.39 644.053 473.39 644.126V646.956H481.79V644.126C481.79 644.053 481.805 643.98 481.833 643.912C481.861 643.844 481.902 643.782 481.954 643.73C482.006 643.678 482.068 643.637 482.136 643.608C482.204 643.58 482.277 643.566 482.35 643.566H495.78C495.928 643.568 496.07 643.627 496.175 643.732C496.279 643.836 496.339 643.978 496.34 644.126V646.956H504.73V644.126C504.73 644.053 504.745 643.98 504.773 643.912C504.801 643.844 504.842 643.782 504.894 643.73C504.946 643.678 505.008 643.637 505.076 643.608C505.144 643.58 505.217 643.566 505.29 643.566H518.72C518.794 643.566 518.867 643.58 518.935 643.608C519.003 643.637 519.065 643.678 519.117 643.73C519.169 643.782 519.21 643.844 519.238 643.912C519.266 643.98 519.28 644.053 519.28 644.126V646.956H527.67V644.126C527.67 644.053 527.685 643.98 527.713 643.912C527.741 643.844 527.782 643.782 527.834 643.73C527.886 643.678 527.948 643.637 528.016 643.608C528.084 643.58 528.157 643.566 528.23 643.566H541.66C541.734 643.566 541.807 643.58 541.875 643.608C541.943 643.637 542.005 643.678 542.057 643.73C542.109 643.782 542.15 643.844 542.178 643.912C542.206 643.98 542.22 644.053 542.22 644.126V646.956H550.62V644.126C550.62 644.053 550.635 643.98 550.663 643.912C550.691 643.844 550.732 643.782 550.784 643.73C550.836 643.678 550.898 643.637 550.966 643.608C551.034 643.58 551.107 643.566 551.18 643.566H564.61C564.757 643.568 564.898 643.628 565.001 643.733C565.104 643.838 565.161 643.979 565.16 644.126V646.956H573.56V644.126C573.56 644.053 573.575 643.98 573.603 643.912C573.631 643.844 573.672 643.782 573.724 643.73C573.776 643.678 573.838 643.637 573.906 643.608C573.974 643.58 574.047 643.566 574.12 643.566H587.55C587.624 643.566 587.697 643.58 587.765 643.608C587.833 643.637 587.895 643.678 587.947 643.73C587.999 643.782 588.04 643.844 588.068 643.912C588.096 643.98 588.111 644.053 588.11 644.126V646.956H596.5V644.126C596.5 644.053 596.515 643.98 596.543 643.912C596.571 643.844 596.612 643.782 596.664 643.73C596.716 643.678 596.778 643.637 596.846 643.608C596.914 643.58 596.987 643.566 597.06 643.566H610.49C610.564 643.566 610.637 643.58 610.705 643.608C610.773 643.637 610.835 643.678 610.887 643.73C610.939 643.782 610.98 643.844 611.008 643.912C611.036 643.98 611.051 644.053 611.05 644.126V646.956H650.22C651.984 646.956 653.731 647.303 655.36 647.977C656.99 648.652 658.471 649.641 659.718 650.889C660.965 652.136 661.954 653.616 662.629 655.246C663.304 656.876 663.651 658.622 663.65 660.386Z",fill:"#3F3D56"}),E.jsx("path",{id:"Vector_11",d:"M833.5 671.326H60.5002V673.326H833.5V671.326Z",fill:"#3F3D56"}),E.jsx("path",{id:"Vector_12",d:"M627.695 404.757H461.252V401.326H385.78V404.757H218.651C215.665 404.757 212.801 405.943 210.69 408.054C208.579 410.166 207.392 413.029 207.392 416.015V643.927C207.392 646.913 208.578 649.776 210.69 651.888C212.801 653.999 215.665 655.185 218.651 655.185H627.695C630.68 655.185 633.544 653.999 635.656 651.888C637.767 649.776 638.953 646.913 638.953 643.927V416.015C638.953 414.537 638.662 413.073 638.096 411.707C637.53 410.341 636.701 409.1 635.656 408.054C634.61 407.009 633.369 406.179 632.003 405.614C630.637 405.048 629.173 404.757 627.695 404.757Z",fill:"#3F3D56"}),E.jsx("path",{id:"Vector_13",d:"M108.446 661.223H80.446V689.223H108.446V661.223Z",fill:"#D0CDE1"}),E.jsx("path",{id:"Vector_14",d:"M91.45 639.223V673.223H125.45V639.223H91.45ZM123.97 671.743H92.92V640.703H123.97V671.743Z",fill:"#3F3D56"}),E.jsx("path",{id:"Vector_15",d:"M756.446 661.223H728.446V689.223H756.446V661.223Z",fill:"#D0CDE1"}),E.jsx("path",{id:"Vector_16",d:"M739.45 639.223V673.223H773.45V639.223H739.45ZM771.97 671.743H740.92V640.703H771.97V671.743Z",fill:"#3F3D56"}),E.jsx("path",{id:"Vector_17",d:"M94.5801 230.113C138.399 230.113 173.921 194.591 173.921 150.773C173.921 106.954 138.399 71.4324 94.5801 71.4324C50.7616 71.4324 15.2396 106.954 15.2396 150.773C15.2396 194.591 50.7616 230.113 94.5801 230.113Z",fill:"#fb2244"}),E.jsx("path",{id:"Vector_18",d:"M122.229 56.49C115.045 55.5764 107.775 55.5764 100.591 56.49C84.5863 58.5914 69.5206 65.2399 57.1812 75.6466C44.8419 86.0533 35.747 99.7814 30.9756 115.202C28.8056 122.229 27.5767 129.514 27.3211 136.864C27.2851 137.886 27.261 138.92 27.261 139.954C27.2833 162.265 36.1561 183.655 51.9323 199.431C67.7084 215.208 89.0991 224.08 111.41 224.103C113.201 224.103 114.992 224.043 116.759 223.934C120.908 223.674 125.03 223.103 129.093 222.227C148.495 218.055 165.798 207.161 177.947 191.468C190.096 175.776 196.308 156.295 195.487 136.467C194.666 116.638 186.864 97.7381 173.459 83.104C160.054 68.4699 141.909 59.0436 122.229 56.49H122.229ZM137.748 217.347H137.736C130.959 219.659 123.905 221.062 116.759 221.518C114.992 221.638 113.201 221.698 111.41 221.698C89.7379 221.672 68.9613 213.051 53.6369 197.727C38.3126 182.402 29.6917 161.626 29.6652 139.954C29.6652 138.92 29.6892 137.886 29.7253 136.864C30.5517 115.744 39.5159 95.7617 54.7414 81.1009C69.9669 66.4401 90.2733 58.2371 111.41 58.209C130.776 58.2101 149.513 65.0866 164.283 77.6132C179.052 90.1399 188.895 107.503 192.057 126.61C195.22 145.716 191.496 165.325 181.55 181.942C171.604 198.559 156.082 211.106 137.748 217.347H137.748Z",fill:"#000000"}),E.jsx("path",{id:"Vector_19",d:"M112.612 63.0175H110.208V79.8473H112.612V63.0175Z",fill:"#000000"}),E.jsx("path",{id:"Vector_20",d:"M57.8578 84.7016L56.1577 86.4017L68.0582 98.3021L69.7582 96.6021L57.8578 84.7016Z",fill:"#000000"}),E.jsx("path",{id:"Vector_21",d:"M34.4738 138.752V141.156H51.3035V138.752H34.4738Z",fill:"#000000"}),E.jsx("path",{id:"Vector_22",d:"M56.1577 193.506L57.8578 195.206L69.7582 183.305L68.0582 181.605L56.1577 193.506Z",fill:"#000000"}),E.jsx("path",{id:"Vector_23",d:"M153.061 96.602L154.762 98.3021L166.662 86.4016L164.962 84.7016L153.061 96.602Z",fill:"#000000"}),E.jsx("path",{id:"Vector_24",d:"M171.516 138.752V141.156H188.346V138.752H171.516Z",fill:"#000000"}),E.jsx("path",{id:"Vector_25",d:"M154.762 181.605L153.061 183.305L164.962 195.206L166.662 193.506L154.762 181.605Z",fill:"#000000"}),E.jsx("path",{id:"Vector_26",d:"M112.612 200.06H110.208V216.89H112.612V200.06Z",fill:"#000000"}),E.jsx("path",{id:"Vector_27",d:"M122.229 35.3686H100.591V57.0069H122.229V35.3686Z",fill:"#000000"}),E.jsx("path",{id:"Vector_28",d:"M111.41 38.975C127.344 38.975 140.261 34.4002 140.261 28.7569C140.261 23.1136 127.344 18.5388 111.41 18.5388C95.4759 18.5388 82.5588 23.1136 82.5588 28.7569C82.5588 34.4002 95.4759 38.975 111.41 38.975Z",fill:"#000000"}),E.jsx("path",{id:"Vector_29",d:"M226 220.44H0V222.844H226V220.44Z",fill:"#000000"})]}),E.jsxs("g",{id:"clock",children:[E.jsx("path",{id:"Vector_30",d:"M115.016 94.2729H107.803V135.145H115.016V94.2729Z",fill:"#000000"}),E.jsx("path",{id:"Vector_31",d:"M115.016 135.145C113.976 134.365 112.71 133.943 111.41 133.943C110.109 133.943 108.844 134.365 107.803 135.145C107.091 135.686 106.505 136.375 106.084 137.165C105.552 138.181 105.322 139.329 105.421 140.473C105.52 141.616 105.944 142.707 106.643 143.617C107.343 144.527 108.288 145.218 109.368 145.608C110.447 145.998 111.616 146.07 112.735 145.817C113.855 145.564 114.878 144.996 115.685 144.179C116.492 143.363 117.048 142.333 117.288 141.211C117.528 140.088 117.441 138.921 117.039 137.846C116.636 136.771 115.934 135.834 115.016 135.145H115.016ZM111.41 143.56C110.454 143.557 109.539 143.176 108.863 142.501C108.187 141.825 107.806 140.909 107.803 139.954C107.808 139.224 108.03 138.513 108.441 137.91C108.793 137.4 109.271 136.989 109.828 136.718C110.385 136.447 111.003 136.324 111.622 136.361C112.241 136.398 112.84 136.595 113.361 136.931C113.881 137.267 114.306 137.732 114.595 138.281C114.883 138.83 115.025 139.444 115.007 140.063C114.988 140.683 114.811 141.288 114.49 141.818C114.17 142.349 113.718 142.788 113.179 143.093C112.639 143.399 112.03 143.559 111.41 143.56V143.56Z",fill:"#000000"})]}),E.jsxs("g",{id:"leftTree",children:[E.jsx("path",{id:"Vector_32",d:"M150.594 599.754C151.527 631.704 132.859 643.413 109.43 644.097C108.886 644.113 108.345 644.123 107.805 644.126C106.719 644.135 105.643 644.117 104.577 644.072C83.3891 643.193 66.6173 631.945 65.7495 602.232C64.8515 571.482 103.018 531.529 105.882 528.574L105.887 528.571C105.996 528.458 106.052 528.402 106.052 528.402C106.052 528.402 149.661 567.807 150.594 599.754Z",fill:"#D0CDE1"}),E.jsx("path",{id:"Vector_33",d:"M107.744 639.255L122.626 617.124L107.774 641.636L107.805 644.126C106.719 644.135 105.643 644.117 104.577 644.072L105.316 612.06L105.295 611.813L105.323 611.766L105.393 608.741L89.0953 585.078L105.374 606.477L105.432 607.116L105.989 582.93L91.9123 558.397L106.029 578.681L105.882 528.574L105.882 528.407L105.887 528.571L106.822 568.062L119.651 552.021L106.864 571.464L107.144 593.098L118.949 571.984L107.187 596.279L107.343 608.309L124.512 578.897L107.395 612.505L107.744 639.255Z",fill:"#3F3D56"})]}),E.jsxs("g",{id:"righTree",children:[E.jsx("path",{id:"Vector_34",d:"M798.594 599.754C799.527 631.704 780.859 643.413 757.43 644.097C756.886 644.113 756.345 644.123 755.805 644.126C754.719 644.135 753.643 644.117 752.577 644.072C731.389 643.193 714.617 631.945 713.75 602.232C712.852 571.482 751.018 531.529 753.882 528.574L753.887 528.571C753.996 528.458 754.052 528.402 754.052 528.402C754.052 528.402 797.661 567.807 798.594 599.754Z",fill:"#D0CDE1"}),E.jsx("path",{id:"Vector_35",d:"M755.744 639.255L770.626 617.124L755.774 641.636L755.805 644.126C754.719 644.135 753.643 644.117 752.577 644.072L753.316 612.06L753.295 611.813L753.323 611.766L753.393 608.741L737.095 585.078L753.374 606.477L753.432 607.116L753.989 582.93L739.912 558.397L754.029 578.681L753.882 528.574L753.882 528.407L753.887 528.571L754.822 568.062L767.651 552.021L754.864 571.464L755.144 593.098L766.949 571.984L755.187 596.279L755.343 608.309L772.512 578.897L755.395 612.505L755.744 639.255Z",fill:"#3F3D56"})]}),E.jsx("g",{id:"pc-circle",children:E.jsx("path",{id:"Vector_36",d:"M422.5 512.326C436.307 512.326 447.5 501.133 447.5 487.326C447.5 473.519 436.307 462.326 422.5 462.326C408.693 462.326 397.5 473.519 397.5 487.326C397.5 501.133 408.693 512.326 422.5 512.326Z",fill:"#3F3D56"})})]}),E.jsx("defs",{children:E.jsx("clipPath",{id:"clip0",children:E.jsx("rect",{width:"833.5",height:"689.223",fill:"white"})})})]})})})]}),E.jsx("footer",{className:"footer2",children:E.jsx(Mt,{to:"/projets",className:"backToHome hover-target",children:E.jsx("span",{children:"Retour au Portfolio"})})})]})),Y1=()=>E.jsx(E.Fragment,{children:E.jsx(Fs,{})}),K1=()=>E.jsx(E.Fragment,{children:E.jsx(Fs,{})}),Z1=()=>E.jsx(E.Fragment,{children:E.jsx(Fs,{})}),J1=()=>{const t="/portfolio/";return E.jsxs("div",{className:"contact",children:[E.jsxs("div",{className:"contact-content",children:[E.jsx("h2",{children:"Contactez moi"}),E.jsx("p",{children:"Je suis actuellement à la recherche d' contrat d'alternance de 2 ans."})]}),E.jsxs("div",{className:"contact-container",children:[E.jsxs("div",{className:"contactInfo",children:[E.jsxs("div",{className:"infoBox",children:[E.jsxs("div",{className:"infoIcon",children:[E.jsx("b",{}),E.jsx("i",{className:"fa-solid fa-location-dot"})]}),E.jsxs("div",{className:"text",children:[E.jsx("h3",{children:"Adresse"}),E.jsxs("p",{children:["1 rue du terme Boréal 77127 Lieusaint france",E.jsx("br",{}),E.jsx("br",{}),"306 rue Victor hugo, 37000 Tours France"]})]})]}),E.jsxs("div",{className:"infoBox",children:[E.jsxs("div",{className:"infoIcon",children:[E.jsx("b",{}),E.jsx("i",{className:"fa-solid fa-phone"})]}),E.jsxs("div",{className:"text",children:[E.jsx("h3",{children:"Phone"}),E.jsx("p",{children:"07.81.38.43.95"})]})]}),E.jsxs("div",{className:"infoBox",children:[E.jsxs("div",{className:"infoIcon",children:[E.jsx("b",{}),E.jsx("i",{className:"fa-solid fa-envelope"})]}),E.jsxs("div",{className:"text",children:[E.jsx("h3",{children:"Email"}),E.jsx("p",{children:"jeevons.eya.jr@gmail.com"})]})]}),E.jsx("h3",{className:"txt",children:"Suivez moi sur les réseaux"}),E.jsxs("ul",{className:"sci",children:[E.jsx("li",{children:E.jsx("a",{href:"https://www.linkedin.com/in/jeevons-eya-jr-iq-3660a7297/",children:E.jsx("i",{className:"fa-brands fa-linkedin",target:"_blank"})})}),E.jsx("li",{children:E.jsx("a",{href:"https://www.instagram.com/jeevons__?igsh=NDh3eWYyaXE2MHl5&utm_source=qr",target:"_blank",children:E.jsx("i",{className:"fa-brands fa-instagram"})})})]})]}),E.jsxs("div",{className:"contactCV",children:[E.jsx("div",{className:"cv",children:E.jsx("img",{src:`${t}assets/images/cv/cv.png`,alt:"Jeevons Cv"})}),E.jsx("div",{className:"downloadCv",children:E.jsx("a",{href:`${t}assets/images/cv/creativeCv_Jeevons3.0.pdf`,target:"_blank",download:!0,children:"Télécharger CV"})})]})]})]})},Q1=()=>E.jsx("div",{className:"Presentation",children:E.jsxs("div",{className:"pres-container",children:[E.jsxs("div",{className:"left box",children:[E.jsx("div",{className:"title",children:E.jsx("h1",{children:"Salut, moi c'est Jeevons"})}),E.jsx("div",{className:"subtitle",children:E.jsx("h3",{children:"Développeur Web en devenir"})}),E.jsx("div",{className:"text",children:E.jsx("p",{children:"Bienvenue sur mon site internet, enchanté! Je suis étudiant en deuxième année de Bachelor Développement Web. Je suis actuellement à la recherche d'une alternance."})}),E.jsx("div",{className:"wrapper",children:E.jsxs("div",{className:"link_wrapper",children:[E.jsx(Mt,{to:"/biographie",className:"readMoreBtn",children:"Biographie"}),E.jsx("div",{className:"icon",children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 268.832 268.832",children:E.jsx("path",{d:"M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"})})})]})})]}),E.jsx("div",{className:"right box img",children:E.jsx("img",{src:"/portfolio/assets/images/projets/cartoonJee2.png",alt:"presentation"})})]})}),dp={education:[{year:"2024 - En cours",title:"Bachelor Développement Web",description:"Je suis actuellement étudiant à Digital Campus Paris, en deuxième année de Bachelor Développement Web. Je veux effectuer ma deuxième année en alternance pour me professionnaliser et acquérir de l'expérience."},{year:"2023 - 2024",title:"BUT MMI",description:"L'année de ma réorientation ! J'ai découvert les métiers du web, et j'ai réalisé mes premiers projets web à l'IUT de Sénart à Lieusaint. Mais la formation MMI est trop généraliste pour moi, je souhaite me spécialiser dans le développement web."},{year:"2020 - 2023",title:"Licence Eco & Gestion",description:"Après l'obtention de mon BAC, j'ai effectué une Licence d'économie et gestion en parcours international à l'Université de Limoges. Cependant elle ne me correspondait pas du tout. J'ai donc décidé de me réorienter."}],experiences:[{year:"Avril 2024",title:"'Freelance'",description:"Je propose mes services à des connaissances pour réaliser leur sites web. Je n'ai pas le statut officiel de freelance, mais je voulais travailler sur des projets concrets pour progresser plus vite."},{year:"Janvier 2024- En cours",title:"Jd Sport",description:"Depuis Janvier, j'occupe le poster de conseiller de vente à temps partiel le week-end chez Jd Sport Carré Sénart à Lieusaint. J'ai pu améliorer mes compétences en communication et en relation client."},{year:"2022 - 2023",title:"McDonald's",description:"De Septembre 2022 à Août 2023, j'ai travaillé chez McDonald's en tant qu'équipier polyvalent à temps partielle. J'ai pu améliorer mes compétences en communication, en gestion du stress et en travail en équipe."}]},fp=({title:t,items:e})=>E.jsxs("div",{className:`${t.toLowerCase()}-container col`,children:[E.jsx("div",{className:"head",children:E.jsx("h2",{className:`${t.toLowerCase()}-title titles`,children:t})}),E.jsx("div",{className:"contents",children:e.map((n,i)=>E.jsxs("div",{className:`${t.toLowerCase()}-content smBox`,children:[E.jsx("h4",{children:n.year}),E.jsx("h3",{children:n.title}),E.jsx("p",{children:n.description})]},i))})]}),ey=()=>E.jsx("div",{className:"gigaBox",children:E.jsx("div",{className:"bigBox",children:E.jsxs("main",{className:"row",children:[E.jsx(fp,{title:"Education",items:dp.education}),E.jsx(fp,{title:"Experiences",items:dp.experiences})]})})});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nf="166",ty=0,hp=1,ny=2,N0=1,iy=2,ti=3,qi=0,tn=1,ri=2,Gi=0,gs=1,pp=2,mp=3,gp=4,ry=5,fr=100,sy=101,oy=102,ay=103,ly=104,cy=200,uy=201,dy=202,fy=203,Ju=204,Qu=205,hy=206,py=207,my=208,gy=209,vy=210,_y=211,xy=212,yy=213,Sy=214,My=0,Ey=1,Ty=2,El=3,wy=4,Cy=5,Ay=6,Ry=7,D0=0,Py=1,Ly=2,Wi=0,by=1,Ny=2,Dy=3,Uy=4,Iy=5,Fy=6,Oy=7,U0=300,Cs=301,As=302,ed=303,td=304,ql=306,nd=1e3,vr=1001,id=1002,yn=1003,ky=1004,ua=1005,Nn=1006,Rc=1007,_r=1008,pi=1009,I0=1010,F0=1011,No=1012,Df=1013,Ar=1014,ai=1015,ko=1016,Uf=1017,If=1018,Rs=1020,O0=35902,k0=1021,B0=1022,Dn=1023,z0=1024,V0=1025,vs=1026,Ps=1027,H0=1028,Ff=1029,G0=1030,Of=1031,kf=1033,ja=33776,Xa=33777,qa=33778,$a=33779,rd=35840,sd=35841,od=35842,ad=35843,ld=36196,cd=37492,ud=37496,dd=37808,fd=37809,hd=37810,pd=37811,md=37812,gd=37813,vd=37814,_d=37815,xd=37816,yd=37817,Sd=37818,Md=37819,Ed=37820,Td=37821,Ya=36492,wd=36494,Cd=36495,W0=36283,Ad=36284,Rd=36285,Pd=36286,By=3200,zy=3201,Vy=0,Hy=1,Li="",Vn="srgb",er="srgb-linear",Bf="display-p3",$l="display-p3-linear",Tl="linear",nt="srgb",wl="rec709",Cl="p3",Ur=7680,vp=519,Gy=512,Wy=513,jy=514,j0=515,Xy=516,qy=517,$y=518,Yy=519,_p=35044,xp="300 es",li=2e3,Al=2001;class Os{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pc=Math.PI/180,Ld=180/Math.PI;function Bo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[t&255]+kt[t>>8&255]+kt[t>>16&255]+kt[t>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[n&63|128]+kt[n>>8&255]+"-"+kt[n>>16&255]+kt[n>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function Ky(t,e){return(t%e+e)%e}function Lc(t,e,n){return(1-n)*t+n*e}function qs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function $t(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,n,i,r,s,o,a,l,c){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],m=i[5],_=i[8],x=r[0],p=r[3],u=r[6],g=r[1],v=r[4],y=r[7],P=r[2],A=r[5],C=r[8];return s[0]=o*x+a*g+l*P,s[3]=o*p+a*v+l*A,s[6]=o*u+a*y+l*C,s[1]=c*x+d*g+f*P,s[4]=c*p+d*v+f*A,s[7]=c*u+d*y+f*C,s[2]=h*x+m*g+_*P,s[5]=h*p+m*v+_*A,s[8]=h*u+m*y+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,m=c*s-o*l,_=n*f+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*c-d*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(d*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=m*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(bc.makeScale(e,n)),this}rotate(e){return this.premultiply(bc.makeRotation(-e)),this}translate(e,n){return this.premultiply(bc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bc=new Ie;function X0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Rl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Zy(){const t=Rl("canvas");return t.style.display="block",t}const yp={};function q0(t){t in yp||(yp[t]=!0,console.warn(t))}function Jy(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Sp=new Ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mp=new Ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),da={[er]:{transfer:Tl,primaries:wl,toReference:t=>t,fromReference:t=>t},[Vn]:{transfer:nt,primaries:wl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[$l]:{transfer:Tl,primaries:Cl,toReference:t=>t.applyMatrix3(Mp),fromReference:t=>t.applyMatrix3(Sp)},[Bf]:{transfer:nt,primaries:Cl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Mp),fromReference:t=>t.applyMatrix3(Sp).convertLinearToSRGB()}},Qy=new Set([er,$l]),Ke={enabled:!0,_workingColorSpace:er,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Qy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=da[e].toReference,r=da[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return da[t].primaries},getTransfer:function(t){return t===Li?Tl:da[t].transfer}};function _s(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Nc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ir;class eS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ir===void 0&&(Ir=Rl("canvas")),Ir.width=e.width,Ir.height=e.height;const i=Ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ir}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Rl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=_s(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(_s(n[i]/255)*255):n[i]=_s(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tS=0;class $0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=Bo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Dc(r[o].image)):s.push(Dc(r[o]))}else s=Dc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Dc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?eS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nS=0;class jt extends Os{constructor(e=jt.DEFAULT_IMAGE,n=jt.DEFAULT_MAPPING,i=vr,r=vr,s=Nn,o=_r,a=Dn,l=pi,c=jt.DEFAULT_ANISOTROPY,d=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=Bo(),this.name="",this.source=new $0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==U0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nd:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nd:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=U0;jt.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],m=l[5],_=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,y=(m+1)/2,P=(u+1)/2,A=(d+h)/4,C=(f+x)/4,b=(_+p)/4;return v>y&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=C/i):y>P?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=b/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=C/s,r=b/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-_)*(p-_)+(f-x)*(f-x)+(h-d)*(h-d));return Math.abs(g)<.001&&(g=1),this.x=(p-_)/g,this.y=(f-x)/g,this.z=(h-d)/g,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iS extends Os{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new $0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rr extends iS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Y0 extends jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rS extends jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(f!==x||l!==h||c!==m||d!==_){let p=1-a;const u=l*h+c*m+d*_+f*x,g=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const P=Math.sqrt(v),A=Math.atan2(P,u*g);p=Math.sin(p*A)/P,a=Math.sin(a*A)/P}const y=a*g;if(l=l*p+h*y,c=c*p+m*y,d=d*p+_*y,f=f*p+x*y,p===1-a){const P=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=P,c*=P,d*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],h=s[o+1],m=s[o+2],_=s[o+3];return e[n]=a*_+d*f+l*m-c*h,e[n+1]=l*_+d*h+c*f-a*m,e[n+2]=c*_+d*m+a*h-l*f,e[n+3]=d*_-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f-h*m*_;break;case"YXZ":this._x=h*d*f+c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f+h*m*_;break;case"ZXY":this._x=h*d*f-c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f-h*m*_;break;case"ZYX":this._x=h*d*f-c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f+h*m*_;break;case"YZX":this._x=h*d*f+c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f-h*m*_;break;case"XZY":this._x=h*d*f-c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(d-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ep.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ep.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uc.copy(this).projectOnVector(e),this.sub(Uc)}reflect(e){return this.sub(Uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uc=new z,Ep=new zo;class Vo{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Cn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Cn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Cn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Cn):Cn.fromBufferAttribute(s,o),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fa.copy(i.boundingBox)),fa.applyMatrix4(e.matrixWorld),this.union(fa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($s),ha.subVectors(this.max,$s),Fr.subVectors(e.a,$s),Or.subVectors(e.b,$s),kr.subVectors(e.c,$s),yi.subVectors(Or,Fr),Si.subVectors(kr,Or),nr.subVectors(Fr,kr);let n=[0,-yi.z,yi.y,0,-Si.z,Si.y,0,-nr.z,nr.y,yi.z,0,-yi.x,Si.z,0,-Si.x,nr.z,0,-nr.x,-yi.y,yi.x,0,-Si.y,Si.x,0,-nr.y,nr.x,0];return!Ic(n,Fr,Or,kr,ha)||(n=[1,0,0,0,1,0,0,0,1],!Ic(n,Fr,Or,kr,ha))?!1:(pa.crossVectors(yi,Si),n=[pa.x,pa.y,pa.z],Ic(n,Fr,Or,kr,ha))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new z,new z,new z,new z,new z,new z,new z,new z],Cn=new z,fa=new Vo,Fr=new z,Or=new z,kr=new z,yi=new z,Si=new z,nr=new z,$s=new z,ha=new z,pa=new z,ir=new z;function Ic(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ir.fromArray(t,s);const a=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),l=e.dot(ir),c=n.dot(ir),d=i.dot(ir);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const sS=new Vo,Ys=new z,Fc=new z;class zf{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):sS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const n=Ys.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ys,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(Fc)),this.expandByPoint(Ys.copy(e.center).sub(Fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new z,Oc=new z,ma=new z,Mi=new z,kc=new z,ga=new z,Bc=new z;class oS{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Zn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,n),Zn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Oc.copy(e).add(n).multiplyScalar(.5),ma.copy(n).sub(e).normalize(),Mi.copy(this.origin).sub(Oc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ma),a=Mi.dot(this.direction),l=-Mi.dot(ma),c=Mi.lengthSq(),d=Math.abs(1-o*o);let f,h,m,_;if(d>0)if(f=o*l-a,h=o*a-l,_=s*d,f>=0)if(h>=-_)if(h<=_){const x=1/d;f*=x,h*=x,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Oc).addScaledVector(ma,h),m}intersectSphere(e,n){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),r=Zn.dot(Zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,n,i,r,s){kc.subVectors(n,e),ga.subVectors(i,e),Bc.crossVectors(kc,ga);let o=this.direction.dot(Bc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,e);const l=a*this.direction.dot(ga.crossVectors(Mi,ga));if(l<0)return null;const c=a*this.direction.dot(kc.cross(Mi));if(c<0||l+c>o)return null;const d=-a*Mi.dot(Bc);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,n,i,r,s,o,a,l,c,d,f,h,m,_,x,p){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,h,m,_,x,p)}set(e,n,i,r,s,o,a,l,c,d,f,h,m,_,x,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=m,u[7]=_,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Br.setFromMatrixColumn(e,0).length(),s=1/Br.setFromMatrixColumn(e,1).length(),o=1/Br.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,m=o*f,_=a*d,x=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=m+_*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=_+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,m=l*f,_=c*d,x=c*f;n[0]=h+x*a,n[4]=_*a-m,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=m*a-_,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,m=l*f,_=c*d,x=c*f;n[0]=h-x*a,n[4]=-o*f,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*d,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,m=o*f,_=a*d,x=a*f;n[0]=l*d,n[4]=_*c-m,n[8]=h*c+x,n[1]=l*f,n[5]=x*c+h,n[9]=m*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,_=a*l,x=a*c;n[0]=l*d,n[4]=x-h*f,n[8]=_*f+m,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=m*f+_,n[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,m=o*c,_=a*l,x=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+x,n[5]=o*d,n[9]=m*f-_,n[2]=_*f-m,n[6]=a*d,n[10]=x*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aS,e,lS)}lookAt(e,n,i){const r=this.elements;return sn.subVectors(e,n),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),Ei.crossVectors(i,sn),Ei.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),Ei.crossVectors(i,sn)),Ei.normalize(),va.crossVectors(sn,Ei),r[0]=Ei.x,r[4]=va.x,r[8]=sn.x,r[1]=Ei.y,r[5]=va.y,r[9]=sn.y,r[2]=Ei.z,r[6]=va.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],m=i[13],_=i[2],x=i[6],p=i[10],u=i[14],g=i[3],v=i[7],y=i[11],P=i[15],A=r[0],C=r[4],b=r[8],w=r[12],S=r[1],N=r[5],G=r[9],V=r[13],q=r[2],$=r[6],W=r[10],K=r[14],D=r[3],Y=r[7],J=r[11],ae=r[15];return s[0]=o*A+a*S+l*q+c*D,s[4]=o*C+a*N+l*$+c*Y,s[8]=o*b+a*G+l*W+c*J,s[12]=o*w+a*V+l*K+c*ae,s[1]=d*A+f*S+h*q+m*D,s[5]=d*C+f*N+h*$+m*Y,s[9]=d*b+f*G+h*W+m*J,s[13]=d*w+f*V+h*K+m*ae,s[2]=_*A+x*S+p*q+u*D,s[6]=_*C+x*N+p*$+u*Y,s[10]=_*b+x*G+p*W+u*J,s[14]=_*w+x*V+p*K+u*ae,s[3]=g*A+v*S+y*q+P*D,s[7]=g*C+v*N+y*$+P*Y,s[11]=g*b+v*G+y*W+P*J,s[15]=g*w+v*V+y*K+P*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],m=e[14],_=e[3],x=e[7],p=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*m-i*l*m)+x*(+n*l*m-n*c*h+s*o*h-r*o*m+r*c*d-s*l*d)+p*(+n*c*f-n*a*m-s*o*f+i*o*m+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],m=e[11],_=e[12],x=e[13],p=e[14],u=e[15],g=f*p*c-x*h*c+x*l*m-a*p*m-f*l*u+a*h*u,v=_*h*c-d*p*c-_*l*m+o*p*m+d*l*u-o*h*u,y=d*x*c-_*f*c+_*a*m-o*x*m-d*a*u+o*f*u,P=_*f*l-d*x*l-_*a*h+o*x*h+d*a*p-o*f*p,A=n*g+i*v+r*y+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=g*C,e[1]=(x*h*s-f*p*s-x*r*m+i*p*m+f*r*u-i*h*u)*C,e[2]=(a*p*s-x*l*s+x*r*c-i*p*c-a*r*u+i*l*u)*C,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*m-i*l*m)*C,e[4]=v*C,e[5]=(d*p*s-_*h*s+_*r*m-n*p*m-d*r*u+n*h*u)*C,e[6]=(_*l*s-o*p*s-_*r*c+n*p*c+o*r*u-n*l*u)*C,e[7]=(o*h*s-d*l*s+d*r*c-n*h*c-o*r*m+n*l*m)*C,e[8]=y*C,e[9]=(_*f*s-d*x*s-_*i*m+n*x*m+d*i*u-n*f*u)*C,e[10]=(o*x*s-_*a*s+_*i*c-n*x*c-o*i*u+n*a*u)*C,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*m-n*a*m)*C,e[12]=P*C,e[13]=(d*x*r-_*f*r+_*i*h-n*x*h-d*i*p+n*f*p)*C,e[14]=(_*a*r-o*x*r-_*i*l+n*x*l+o*i*p-n*a*p)*C,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,h=s*c,m=s*d,_=s*f,x=o*d,p=o*f,u=a*f,g=l*c,v=l*d,y=l*f,P=i.x,A=i.y,C=i.z;return r[0]=(1-(x+u))*P,r[1]=(m+y)*P,r[2]=(_-v)*P,r[3]=0,r[4]=(m-y)*A,r[5]=(1-(h+u))*A,r[6]=(p+g)*A,r[7]=0,r[8]=(_+v)*C,r[9]=(p-g)*C,r[10]=(1-(h+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Br.set(r[0],r[1],r[2]).length();const o=Br.set(r[4],r[5],r[6]).length(),a=Br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],An.copy(this);const c=1/s,d=1/o,f=1/a;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=d,An.elements[5]*=d,An.elements[6]*=d,An.elements[8]*=f,An.elements[9]*=f,An.elements[10]*=f,n.setFromRotationMatrix(An),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=li){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(a===li)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Al)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=li){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(o-s),h=(n+e)*c,m=(i+r)*d;let _,x;if(a===li)_=(o+s)*f,x=-2*f;else if(a===Al)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Br=new z,An=new Tt,aS=new z(0,0,0),lS=new z(1,1,1),Ei=new z,va=new z,sn=new z,Tp=new Tt,wp=new zo;class mi{constructor(e=0,n=0,i=0,r=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wp.setFromEuler(this),this.setFromQuaternion(wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class K0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cS=0;const Cp=new z,zr=new zo,Jn=new Tt,_a=new z,Ks=new z,uS=new z,dS=new zo,Ap=new z(1,0,0),Rp=new z(0,1,0),Pp=new z(0,0,1),Lp={type:"added"},fS={type:"removed"},Vr={type:"childadded",child:null},zc={type:"childremoved",child:null};class un extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new z,n=new mi,i=new zo,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ie}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new K0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(Ap,e)}rotateY(e){return this.rotateOnAxis(Rp,e)}rotateZ(e){return this.rotateOnAxis(Pp,e)}translateOnAxis(e,n){return Cp.copy(e).applyQuaternion(this.quaternion),this.position.add(Cp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ap,e)}translateY(e){return this.translateOnAxis(Rp,e)}translateZ(e){return this.translateOnAxis(Pp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?_a.copy(e):_a.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Ks,_a,this.up):Jn.lookAt(_a,Ks,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),zr.setFromRotationMatrix(Jn),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lp),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(fS),zc.child=e,this.dispatchEvent(zc),zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lp),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,uS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,dS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}un.DEFAULT_UP=new z(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new z,Qn=new z,Vc=new z,ei=new z,Hr=new z,Gr=new z,bp=new z,Hc=new z,Gc=new z,Wc=new z;class Wn{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Rn.subVectors(e,n),r.cross(Rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Rn.subVectors(r,n),Qn.subVectors(i,n),Vc.subVectors(e,n);const o=Rn.dot(Rn),a=Rn.dot(Qn),l=Rn.dot(Vc),c=Qn.dot(Qn),d=Qn.dot(Vc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-a*d)*h,_=(o*d-a*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static isFrontFacing(e,n,i,r){return Rn.subVectors(i,n),Qn.subVectors(e,n),Rn.cross(Qn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Rn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Hr.subVectors(r,i),Gr.subVectors(s,i),Hc.subVectors(e,i);const l=Hr.dot(Hc),c=Gr.dot(Hc);if(l<=0&&c<=0)return n.copy(i);Gc.subVectors(e,r);const d=Hr.dot(Gc),f=Gr.dot(Gc);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Hr,o);Wc.subVectors(e,s);const m=Hr.dot(Wc),_=Gr.dot(Wc);if(_>=0&&m<=_)return n.copy(s);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Gr,a);const p=d*_-m*f;if(p<=0&&f-d>=0&&m-_>=0)return bp.subVectors(s,r),a=(f-d)/(f-d+(m-_)),n.copy(r).addScaledVector(bp,a);const u=1/(p+x+h);return o=x*u,a=h*u,n.copy(i).addScaledVector(Hr,o).addScaledVector(Gr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},xa={h:0,s:0,l:0};function jc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=Ky(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=jc(o,s,e+1/3),this.g=jc(o,s,e),this.b=jc(o,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,n=Vn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Vn){const i=Z0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}copyLinearToSRGB(e){return this.r=Nc(e.r),this.g=Nc(e.g),this.b=Nc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return Ke.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Kt(Bt.r*255,0,255))*65536+Math.round(Kt(Bt.g*255,0,255))*256+Math.round(Kt(Bt.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Bt.copy(this),n);const i=Bt.r,r=Bt.g,s=Bt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Bt.copy(this),n),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Vn){Ke.fromWorkingColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,r=Bt.b;return e!==Vn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+n,Ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ti),e.getHSL(xa);const i=Lc(Ti.h,xa.h,n),r=Lc(Ti.s,xa.s,n),s=Lc(Ti.l,xa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Qe;Qe.NAMES=Z0;let hS=0;class Yl extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=gs,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ju,this.blendDst=Qu,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=El,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ju&&(i.blendSrc=this.blendSrc),this.blendDst!==Qu&&(i.blendDst=this.blendDst),this.blendEquation!==fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==El&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class J0 extends Yl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=D0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new z,ya=new $e;class $n{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=_p,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return q0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ya.fromBufferAttribute(this,n),ya.applyMatrix3(e),this.setXY(n,ya.x,ya.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix3(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix4(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyNormalMatrix(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.transformDirection(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=qs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=qs(n,this.array)),n}setX(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=qs(n,this.array)),n}setY(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=qs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=qs(n,this.array)),n}setW(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_p&&(e.usage=this.usage),e}}class Q0 extends $n{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ev extends $n{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Sr extends $n{constructor(e,n,i){super(new Float32Array(e),n,i)}}let pS=0;const mn=new Tt,Xc=new un,Wr=new z,on=new Vo,Zs=new Vo,At=new z;class br extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(X0(e)?ev:Q0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ie().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,n,i){return mn.makeTranslation(e,n,i),this.applyMatrix4(mn),this}scale(e,n,i){return mn.makeScale(e,n,i),this.applyMatrix4(mn),this}lookAt(e){return Xc.lookAt(e),Xc.updateMatrix(),this.applyMatrix4(Xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Sr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];on.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Zs.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(on.min,Zs.min),on.expandByPoint(At),At.addVectors(on.max,Zs.max),on.expandByPoint(At)):(on.expandByPoint(Zs.min),on.expandByPoint(Zs.max))}on.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)At.fromBufferAttribute(a,c),l&&(Wr.fromBufferAttribute(e,c),At.add(Wr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new z,l[b]=new z;const c=new z,d=new z,f=new z,h=new $e,m=new $e,_=new $e,x=new z,p=new z;function u(b,w,S){c.fromBufferAttribute(i,b),d.fromBufferAttribute(i,w),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,b),m.fromBufferAttribute(s,w),_.fromBufferAttribute(s,S),d.sub(c),f.sub(c),m.sub(h),_.sub(h);const N=1/(m.x*_.y-_.x*m.y);isFinite(N)&&(x.copy(d).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(N),p.copy(f).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(N),a[b].add(x),a[w].add(x),a[S].add(x),l[b].add(p),l[w].add(p),l[S].add(p))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let b=0,w=g.length;b<w;++b){const S=g[b],N=S.start,G=S.count;for(let V=N,q=N+G;V<q;V+=3)u(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const v=new z,y=new z,P=new z,A=new z;function C(b){P.fromBufferAttribute(r,b),A.copy(P);const w=a[b];v.copy(w),v.sub(P.multiplyScalar(P.dot(w))).normalize(),y.crossVectors(A,w);const N=y.dot(l[b])<0?-1:1;o.setXYZW(b,v.x,v.y,v.z,N)}for(let b=0,w=g.length;b<w;++b){const S=g[b],N=S.start,G=S.count;for(let V=N,q=N+G;V<q;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,d=new z,f=new z;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,p),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(d),l.add(d),c.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let m=0,_=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*d;for(let u=0;u<d;u++)h[_++]=c[m++]}return new $n(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new br,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,m=f.length;h<m;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Np=new Tt,rr=new oS,Sa=new zf,Dp=new z,jr=new z,Xr=new z,qr=new z,qc=new z,Ma=new z,Ea=new $e,Ta=new $e,wa=new $e,Up=new z,Ip=new z,Fp=new z,Ca=new z,Aa=new z;class jn extends un{constructor(e=new br,n=new J0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ma.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(qc.fromBufferAttribute(f,e),o?Ma.addScaledVector(qc,d):Ma.addScaledVector(qc.sub(n),d))}n.add(Ma)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(s),rr.copy(e.ray).recast(e.near),!(Sa.containsPoint(rr.origin)===!1&&(rr.intersectSphere(Sa,Dp)===null||rr.origin.distanceToSquared(Dp)>(e.far-e.near)**2))&&(Np.copy(s).invert(),rr.copy(e.ray).applyMatrix4(Np),!(i.boundingBox!==null&&rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,rr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const p=h[_],u=o[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=g,P=v;y<P;y+=3){const A=a.getX(y),C=a.getX(y+1),b=a.getX(y+2);r=Ra(this,u,e,i,c,d,f,A,C,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const g=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);r=Ra(this,o,e,i,c,d,f,g,v,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const p=h[_],u=o[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=g,P=v;y<P;y+=3){const A=y,C=y+1,b=y+2;r=Ra(this,u,e,i,c,d,f,A,C,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const g=p,v=p+1,y=p+2;r=Ra(this,o,e,i,c,d,f,g,v,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function mS(t,e,n,i,r,s,o,a){let l;if(e.side===tn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===qi,a),l===null)return null;Aa.copy(a),Aa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Aa);return c<n.near||c>n.far?null:{distance:c,point:Aa.clone(),object:t}}function Ra(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,jr),t.getVertexPosition(l,Xr),t.getVertexPosition(c,qr);const d=mS(t,e,n,i,jr,Xr,qr,Ca);if(d){r&&(Ea.fromBufferAttribute(r,a),Ta.fromBufferAttribute(r,l),wa.fromBufferAttribute(r,c),d.uv=Wn.getInterpolation(Ca,jr,Xr,qr,Ea,Ta,wa,new $e)),s&&(Ea.fromBufferAttribute(s,a),Ta.fromBufferAttribute(s,l),wa.fromBufferAttribute(s,c),d.uv1=Wn.getInterpolation(Ca,jr,Xr,qr,Ea,Ta,wa,new $e)),o&&(Up.fromBufferAttribute(o,a),Ip.fromBufferAttribute(o,l),Fp.fromBufferAttribute(o,c),d.normal=Wn.getInterpolation(Ca,jr,Xr,qr,Up,Ip,Fp,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new z,materialIndex:0};Wn.getNormal(jr,Xr,qr,f.normal),d.face=f}return d}class Ho extends br{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Sr(c,3)),this.setAttribute("normal",new Sr(d,3)),this.setAttribute("uv",new Sr(f,2));function _(x,p,u,g,v,y,P,A,C,b,w){const S=y/C,N=P/b,G=y/2,V=P/2,q=A/2,$=C+1,W=b+1;let K=0,D=0;const Y=new z;for(let J=0;J<W;J++){const ae=J*N-V;for(let Se=0;Se<$;Se++){const Ve=Se*S-G;Y[x]=Ve*g,Y[p]=ae*v,Y[u]=q,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[p]=0,Y[u]=A>0?1:-1,d.push(Y.x,Y.y,Y.z),f.push(Se/C),f.push(1-J/b),K+=1}}for(let J=0;J<b;J++)for(let ae=0;ae<C;ae++){const Se=h+ae+$*J,Ve=h+ae+$*(J+1),H=h+(ae+1)+$*(J+1),ne=h+(ae+1)+$*J;l.push(Se,Ve,ne),l.push(Ve,H,ne),D+=6}a.addGroup(m,D,w),m+=D,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ht(t){const e={};for(let n=0;n<t.length;n++){const i=Ls(t[n]);for(const r in i)e[r]=i[r]}return e}function gS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function tv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const vS={clone:Ls,merge:Ht};var _S=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends Yl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_S,this.fragmentShader=xS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=gS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class nv extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=li}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wi=new z,Op=new $e,kp=new $e;class _n extends nv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ld*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ld*2*Math.atan(Math.tan(Pc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,n){return this.getViewBounds(e,Op,kp),n.subVectors(kp,Op)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Pc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const $r=-90,Yr=1;class yS extends un{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n($r,Yr,e,n);r.layers=this.layers,this.add(r);const s=new _n($r,Yr,e,n);s.layers=this.layers,this.add(s);const o=new _n($r,Yr,e,n);o.layers=this.layers,this.add(o);const a=new _n($r,Yr,e,n);a.layers=this.layers,this.add(a);const l=new _n($r,Yr,e,n);l.layers=this.layers,this.add(l);const c=new _n($r,Yr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Al)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class iv extends jt{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Cs,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class SS extends Rr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new iv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Nn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ho(5,5,5),s=new gi({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Gi});s.uniforms.tEquirect.value=n;const o=new jn(r,s),a=n.minFilter;return n.minFilter===_r&&(n.minFilter=Nn),new yS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const $c=new z,MS=new z,ES=new Ie;class ur{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=$c.subVectors(i,n).cross(MS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta($c),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||ES.getNormalMatrix(e),r=this.coplanarPoint($c).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new zf,Pa=new z;class rv{constructor(e=new ur,n=new ur,i=new ur,r=new ur,s=new ur,o=new ur){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=li){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],m=r[8],_=r[9],x=r[10],p=r[11],u=r[12],g=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,p-m,y-u).normalize(),i[1].setComponents(l+s,h+c,p+m,y+u).normalize(),i[2].setComponents(l+o,h+d,p+_,y+g).normalize(),i[3].setComponents(l-o,h-d,p-_,y-g).normalize(),i[4].setComponents(l-a,h-f,p-x,y-v).normalize(),n===li)i[5].setComponents(l+a,h+f,p+x,y+v).normalize();else if(n===Al)i[5].setComponents(a,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Pa.x=r.normal.x>0?e.max.x:e.min.x,Pa.y=r.normal.y>0?e.max.y:e.min.y,Pa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function TS(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const d=l.array,f=l._updateRange,h=l.updateRanges;if(t.bindBuffer(c,a),f.count===-1&&h.length===0&&t.bufferSubData(c,0,d),h.length!==0){for(let m=0,_=h.length;m<_;m++){const x=h[m];t.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(c,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Go extends br{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=n/l,m=[],_=[],x=[],p=[];for(let u=0;u<d;u++){const g=u*h-o;for(let v=0;v<c;v++){const y=v*f-s;_.push(y,-g,0),x.push(0,0,1),p.push(v/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const v=g+c*u,y=g+c*(u+1),P=g+1+c*(u+1),A=g+1+c*u;m.push(v,y,A),m.push(y,P,A)}this.setIndex(m),this.setAttribute("position",new Sr(_,3)),this.setAttribute("normal",new Sr(x,3)),this.setAttribute("uv",new Sr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.widthSegments,e.heightSegments)}}var wS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,AS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,NS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,US=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,BS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,VS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$S=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,YS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,KS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ZS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tM="gl_FragColor = linearToOutputTexel( gl_FragColor );",nM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,iM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_M=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,EM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,TM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,CM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,AM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,UM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,VM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,GM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,WM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$M=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,eE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,aE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_E=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ME=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,EE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,NE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,BE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,GE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$E=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,YE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,QE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,n3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:wS,alphahash_pars_fragment:CS,alphamap_fragment:AS,alphamap_pars_fragment:RS,alphatest_fragment:PS,alphatest_pars_fragment:LS,aomap_fragment:bS,aomap_pars_fragment:NS,batching_pars_vertex:DS,batching_vertex:US,begin_vertex:IS,beginnormal_vertex:FS,bsdfs:OS,iridescence_fragment:kS,bumpmap_pars_fragment:BS,clipping_planes_fragment:zS,clipping_planes_pars_fragment:VS,clipping_planes_pars_vertex:HS,clipping_planes_vertex:GS,color_fragment:WS,color_pars_fragment:jS,color_pars_vertex:XS,color_vertex:qS,common:$S,cube_uv_reflection_fragment:YS,defaultnormal_vertex:KS,displacementmap_pars_vertex:ZS,displacementmap_vertex:JS,emissivemap_fragment:QS,emissivemap_pars_fragment:eM,colorspace_fragment:tM,colorspace_pars_fragment:nM,envmap_fragment:iM,envmap_common_pars_fragment:rM,envmap_pars_fragment:sM,envmap_pars_vertex:oM,envmap_physical_pars_fragment:vM,envmap_vertex:aM,fog_vertex:lM,fog_pars_vertex:cM,fog_fragment:uM,fog_pars_fragment:dM,gradientmap_pars_fragment:fM,lightmap_pars_fragment:hM,lights_lambert_fragment:pM,lights_lambert_pars_fragment:mM,lights_pars_begin:gM,lights_toon_fragment:_M,lights_toon_pars_fragment:xM,lights_phong_fragment:yM,lights_phong_pars_fragment:SM,lights_physical_fragment:MM,lights_physical_pars_fragment:EM,lights_fragment_begin:TM,lights_fragment_maps:wM,lights_fragment_end:CM,logdepthbuf_fragment:AM,logdepthbuf_pars_fragment:RM,logdepthbuf_pars_vertex:PM,logdepthbuf_vertex:LM,map_fragment:bM,map_pars_fragment:NM,map_particle_fragment:DM,map_particle_pars_fragment:UM,metalnessmap_fragment:IM,metalnessmap_pars_fragment:FM,morphinstance_vertex:OM,morphcolor_vertex:kM,morphnormal_vertex:BM,morphtarget_pars_vertex:zM,morphtarget_vertex:VM,normal_fragment_begin:HM,normal_fragment_maps:GM,normal_pars_fragment:WM,normal_pars_vertex:jM,normal_vertex:XM,normalmap_pars_fragment:qM,clearcoat_normal_fragment_begin:$M,clearcoat_normal_fragment_maps:YM,clearcoat_pars_fragment:KM,iridescence_pars_fragment:ZM,opaque_fragment:JM,packing:QM,premultiplied_alpha_fragment:eE,project_vertex:tE,dithering_fragment:nE,dithering_pars_fragment:iE,roughnessmap_fragment:rE,roughnessmap_pars_fragment:sE,shadowmap_pars_fragment:oE,shadowmap_pars_vertex:aE,shadowmap_vertex:lE,shadowmask_pars_fragment:cE,skinbase_vertex:uE,skinning_pars_vertex:dE,skinning_vertex:fE,skinnormal_vertex:hE,specularmap_fragment:pE,specularmap_pars_fragment:mE,tonemapping_fragment:gE,tonemapping_pars_fragment:vE,transmission_fragment:_E,transmission_pars_fragment:xE,uv_pars_fragment:yE,uv_pars_vertex:SE,uv_vertex:ME,worldpos_vertex:EE,background_vert:TE,background_frag:wE,backgroundCube_vert:CE,backgroundCube_frag:AE,cube_vert:RE,cube_frag:PE,depth_vert:LE,depth_frag:bE,distanceRGBA_vert:NE,distanceRGBA_frag:DE,equirect_vert:UE,equirect_frag:IE,linedashed_vert:FE,linedashed_frag:OE,meshbasic_vert:kE,meshbasic_frag:BE,meshlambert_vert:zE,meshlambert_frag:VE,meshmatcap_vert:HE,meshmatcap_frag:GE,meshnormal_vert:WE,meshnormal_frag:jE,meshphong_vert:XE,meshphong_frag:qE,meshphysical_vert:$E,meshphysical_frag:YE,meshtoon_vert:KE,meshtoon_frag:ZE,points_vert:JE,points_frag:QE,shadow_vert:e3,shadow_frag:t3,sprite_vert:n3,sprite_frag:i3},ce={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},Hn={basic:{uniforms:Ht([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Ht([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Ht([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Ht([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Ht([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Ht([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Ht([ce.points,ce.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Ht([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Ht([ce.common,ce.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Ht([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Ht([ce.sprite,ce.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Ht([ce.common,ce.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Ht([ce.lights,ce.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Hn.physical={uniforms:Ht([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const La={r:0,b:0,g:0},or=new mi,r3=new Tt;function s3(t,e,n,i,r,s,o){const a=new Qe(0);let l=s===!0?0:1,c,d,f=null,h=0,m=null;function _(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?n:e).get(v)),v}function x(g){let v=!1;const y=_(g);y===null?u(a,l):y&&y.isColor&&(u(y,1),v=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(g,v){const y=_(v);y&&(y.isCubeTexture||y.mapping===ql)?(d===void 0&&(d=new jn(new Ho(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Ls(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),or.copy(v.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(r3.makeRotationFromEuler(or)),d.material.toneMapped=Ke.getTransfer(y.colorSpace)!==nt,(f!==y||h!==y.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,f=y,h=y.version,m=t.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new jn(new Go(2,2),new gi({name:"BackgroundMaterial",uniforms:Ls(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(y.colorSpace)!==nt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,m=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function u(g,v){g.getRGB(La,tv(t)),i.buffers.color.setClear(La.r,La.g,La.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(g,v=1){a.set(g),l=v,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,u(a,l)},render:x,addToRenderList:p}}function o3(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,N,G,V,q){let $=!1;const W=f(V,G,N);s!==W&&(s=W,c(s.object)),$=m(S,V,G,q),$&&_(S,V,G,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,y(S,N,G,V),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function d(S){return t.deleteVertexArray(S)}function f(S,N,G){const V=G.wireframe===!0;let q=i[S.id];q===void 0&&(q={},i[S.id]=q);let $=q[N.id];$===void 0&&($={},q[N.id]=$);let W=$[V];return W===void 0&&(W=h(l()),$[V]=W),W}function h(S){const N=[],G=[],V=[];for(let q=0;q<n;q++)N[q]=0,G[q]=0,V[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:V,object:S,attributes:{},index:null}}function m(S,N,G,V){const q=s.attributes,$=N.attributes;let W=0;const K=G.getAttributes();for(const D in K)if(K[D].location>=0){const J=q[D];let ae=$[D];if(ae===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),J===void 0||J.attribute!==ae||ae&&J.data!==ae.data)return!0;W++}return s.attributesNum!==W||s.index!==V}function _(S,N,G,V){const q={},$=N.attributes;let W=0;const K=G.getAttributes();for(const D in K)if(K[D].location>=0){let J=$[D];J===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(J=S.instanceColor));const ae={};ae.attribute=J,J&&J.data&&(ae.data=J.data),q[D]=ae,W++}s.attributes=q,s.attributesNum=W,s.index=V}function x(){const S=s.newAttributes;for(let N=0,G=S.length;N<G;N++)S[N]=0}function p(S){u(S,0)}function u(S,N){const G=s.newAttributes,V=s.enabledAttributes,q=s.attributeDivisors;G[S]=1,V[S]===0&&(t.enableVertexAttribArray(S),V[S]=1),q[S]!==N&&(t.vertexAttribDivisor(S,N),q[S]=N)}function g(){const S=s.newAttributes,N=s.enabledAttributes;for(let G=0,V=N.length;G<V;G++)N[G]!==S[G]&&(t.disableVertexAttribArray(G),N[G]=0)}function v(S,N,G,V,q,$,W){W===!0?t.vertexAttribIPointer(S,N,G,q,$):t.vertexAttribPointer(S,N,G,V,q,$)}function y(S,N,G,V){x();const q=V.attributes,$=G.getAttributes(),W=N.defaultAttributeValues;for(const K in $){const D=$[K];if(D.location>=0){let Y=q[K];if(Y===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor)),Y!==void 0){const J=Y.normalized,ae=Y.itemSize,Se=e.get(Y);if(Se===void 0)continue;const Ve=Se.buffer,H=Se.type,ne=Se.bytesPerElement,de=H===t.INT||H===t.UNSIGNED_INT||Y.gpuType===Df;if(Y.isInterleavedBufferAttribute){const fe=Y.data,be=fe.stride,Fe=Y.offset;if(fe.isInstancedInterleavedBuffer){for(let Be=0;Be<D.locationSize;Be++)u(D.location+Be,fe.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Be=0;Be<D.locationSize;Be++)p(D.location+Be);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let Be=0;Be<D.locationSize;Be++)v(D.location+Be,ae/D.locationSize,H,J,be*ne,(Fe+ae/D.locationSize*Be)*ne,de)}else{if(Y.isInstancedBufferAttribute){for(let fe=0;fe<D.locationSize;fe++)u(D.location+fe,Y.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let fe=0;fe<D.locationSize;fe++)p(D.location+fe);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let fe=0;fe<D.locationSize;fe++)v(D.location+fe,ae/D.locationSize,H,J,ae*ne,ae/D.locationSize*fe*ne,de)}}else if(W!==void 0){const J=W[K];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(D.location,J);break;case 3:t.vertexAttrib3fv(D.location,J);break;case 4:t.vertexAttrib4fv(D.location,J);break;default:t.vertexAttrib1fv(D.location,J)}}}}g()}function P(){b();for(const S in i){const N=i[S];for(const G in N){const V=N[G];for(const q in V)d(V[q].object),delete V[q];delete N[G]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const N=i[S.id];for(const G in N){const V=N[G];for(const q in V)d(V[q].object),delete V[q];delete N[G]}delete i[S.id]}function C(S){for(const N in i){const G=i[N];if(G[S.id]===void 0)continue;const V=G[S.id];for(const q in V)d(V[q].object),delete V[q];delete G[S.id]}}function b(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:p,disableUnusedAttributes:g}}function a3(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function a(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let m=0;for(let _=0;_<f;_++)m+=d[_];n.update(m,i,1)}function l(c,d,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],d[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=d[x];for(let x=0;x<h.length;x++)n.update(_,i,h[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function l3(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Dn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===ko&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==pi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ai&&!C)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),u=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=m>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:u,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:y,maxSamples:P}}function c3(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ur,a=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||s&&!p)s?d(null):c();else{const g=s?0:i,v=g*4;let y=u.clippingState||null;l.value=y,y=d(_,h,v,m);for(let P=0;P!==v;++P)y[P]=n[P];u.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,m,_){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const u=m+x*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,y=m;v!==x;++v,y+=4)o.copy(f[v]).applyMatrix4(g,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function u3(t){let e=new WeakMap;function n(o,a){return a===ed?o.mapping=Cs:a===td&&(o.mapping=As),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ed||a===td)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new SS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class d3 extends nv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const cs=4,Bp=[.125,.215,.35,.446,.526,.582],hr=20,Yc=new d3,zp=new Qe;let Kc=null,Zc=0,Jc=0,Qc=!1;const dr=(1+Math.sqrt(5))/2,Kr=1/dr,Vp=[new z(-dr,Kr,0),new z(dr,Kr,0),new z(-Kr,0,dr),new z(Kr,0,dr),new z(0,dr,-Kr),new z(0,dr,Kr),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Hp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kc,Zc,Jc),this._renderer.xr.enabled=Qc,e.scissorTest=!1,ba(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Cs||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:ko,format:Dn,colorSpace:er,depthBuffer:!1},r=Gp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=f3(s)),this._blurMaterial=h3(s,e,n)}return r}_compileMaterial(e){const n=new jn(this._lodPlanes[0],e);this._renderer.compile(n,Yc)}_sceneToCubeUV(e,n,i,r){const a=new _n(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(zp),d.toneMapping=Wi,d.autoClear=!1;const m=new J0({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),_=new jn(new Ho,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(zp),x=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;ba(r,g*v,u>2?v:0,v,v),d.setRenderTarget(r),x&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Cs||e.mapping===As;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new jn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ba(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Yc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Vp[(r-s-1)%Vp.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new jn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*hr-1),x=s/_,p=isFinite(s)?1+Math.floor(d*x):hr;p>hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hr}`);const u=[];let g=0;for(let C=0;C<hr;++C){const b=C/x,w=Math.exp(-b*b/2);u.push(w),C===0?g+=w:C<p&&(g+=2*w)}for(let C=0;C<u.length;C++)u[C]=u[C]/g;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const y=this._sizeLods[r],P=3*y*(r>v-cs?r-v+cs:0),A=4*(this._cubeSize-y);ba(n,P,A,3*y,2*y),l.setRenderTarget(n),l.render(f,Yc)}}function f3(t){const e=[],n=[],i=[];let r=t;const s=t-cs+1+Bp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-cs?l=Bp[o-t+cs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,_=6,x=3,p=2,u=1,g=new Float32Array(x*_*m),v=new Float32Array(p*_*m),y=new Float32Array(u*_*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,b=A>2?0:-1,w=[C,b,0,C+2/3,b,0,C+2/3,b+1,0,C,b,0,C+2/3,b+1,0,C,b+1,0];g.set(w,x*_*A),v.set(h,p*_*A);const S=[A,A,A,A,A,A];y.set(S,u*_*A)}const P=new br;P.setAttribute("position",new $n(g,x)),P.setAttribute("uv",new $n(v,p)),P.setAttribute("faceIndex",new $n(y,u)),e.push(P),r>cs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Gp(t,e,n){const i=new Rr(t,e,n);return i.texture.mapping=ql,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ba(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function h3(t,e,n){const i=new Float32Array(hr),r=new z(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Wp(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function jp(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Vf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function p3(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ed||l===td,d=l===Cs||l===As;if(c||d){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Hp(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||d&&m&&r(m)?(n===null&&(n=new Hp(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function m3(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&q0("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function g3(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let p=0,u=x.length;p<u;p++)e.remove(x[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,u=x.length;p<u;p++)e.update(x[p],t.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,_=f.attributes.position;let x=0;if(m!==null){const g=m.array;x=m.version;for(let v=0,y=g.length;v<y;v+=3){const P=g[v+0],A=g[v+1],C=g[v+2];h.push(P,A,A,C,C,P)}}else if(_!==void 0){const g=_.array;x=_.version;for(let v=0,y=g.length/3-1;v<y;v+=3){const P=v+0,A=v+1,C=v+2;h.push(P,A,A,C,C,P)}}else return;const p=new(X0(h)?ev:Q0)(h,1);p.version=x;const u=s.get(f);u&&e.remove(u),s.set(f,p)}function d(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function v3(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){t.drawElements(i,m,s,h*o),n.update(m,i,1)}function c(h,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,h*o,_),n.update(m,i,_))}function d(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,_);let p=0;for(let u=0;u<_;u++)p+=m[u];n.update(p,i,1)}function f(h,m,_,x){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<h.length;u++)c(h[u]/o,m[u],x[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,x,0,_);let u=0;for(let g=0;g<_;g++)u+=m[g];for(let g=0;g<x.length;g++)n.update(u,i,x[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function _3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function x3(t,e,n){const i=new WeakMap,r=new Pt;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var m=S;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),x===!0&&(y=2),p===!0&&(y=3);let P=a.attributes.position.count*y,A=1;P>e.maxTextureSize&&(A=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const C=new Float32Array(P*A*4*f),b=new Y0(C,P,A,f);b.type=ai,b.needsUpdate=!0;const w=y*4;for(let N=0;N<f;N++){const G=u[N],V=g[N],q=v[N],$=P*A*4*N;for(let W=0;W<G.count;W++){const K=W*w;_===!0&&(r.fromBufferAttribute(G,W),C[$+K+0]=r.x,C[$+K+1]=r.y,C[$+K+2]=r.z,C[$+K+3]=0),x===!0&&(r.fromBufferAttribute(V,W),C[$+K+4]=r.x,C[$+K+5]=r.y,C[$+K+6]=r.z,C[$+K+7]=0),p===!0&&(r.fromBufferAttribute(q,W),C[$+K+8]=r.x,C[$+K+9]=r.y,C[$+K+10]=r.z,C[$+K+11]=q.itemSize===4?r.w:1)}}h={count:f,texture:b,size:new $e(P,A)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function y3(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class ov extends jt{constructor(e,n,i,r,s,o,a,l,c,d=vs){if(d!==vs&&d!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===vs&&(i=Ar),i===void 0&&d===Ps&&(i=Rs),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const av=new jt,Xp=new ov(1,1),lv=new Y0,cv=new rS,uv=new iv,qp=[],$p=[],Yp=new Float32Array(16),Kp=new Float32Array(9),Zp=new Float32Array(4);function ks(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=qp[r];if(s===void 0&&(s=new Float32Array(r),qp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Kl(t,e){let n=$p[e];n===void 0&&(n=new Int32Array(e),$p[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function S3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function M3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function E3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function T3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function w3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(wt(n,i))return;Zp.set(i),t.uniformMatrix2fv(this.addr,!1,Zp),Ct(n,i)}}function C3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(wt(n,i))return;Kp.set(i),t.uniformMatrix3fv(this.addr,!1,Kp),Ct(n,i)}}function A3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(wt(n,i))return;Yp.set(i),t.uniformMatrix4fv(this.addr,!1,Yp),Ct(n,i)}}function R3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function P3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function L3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function b3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function N3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function D3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function U3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function I3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function F3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Xp.compareFunction=j0,s=Xp):s=av,n.setTexture2D(e||s,r)}function O3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||cv,r)}function k3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||uv,r)}function B3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||lv,r)}function z3(t){switch(t){case 5126:return S3;case 35664:return M3;case 35665:return E3;case 35666:return T3;case 35674:return w3;case 35675:return C3;case 35676:return A3;case 5124:case 35670:return R3;case 35667:case 35671:return P3;case 35668:case 35672:return L3;case 35669:case 35673:return b3;case 5125:return N3;case 36294:return D3;case 36295:return U3;case 36296:return I3;case 35678:case 36198:case 36298:case 36306:case 35682:return F3;case 35679:case 36299:case 36307:return O3;case 35680:case 36300:case 36308:case 36293:return k3;case 36289:case 36303:case 36311:case 36292:return B3}}function V3(t,e){t.uniform1fv(this.addr,e)}function H3(t,e){const n=ks(e,this.size,2);t.uniform2fv(this.addr,n)}function G3(t,e){const n=ks(e,this.size,3);t.uniform3fv(this.addr,n)}function W3(t,e){const n=ks(e,this.size,4);t.uniform4fv(this.addr,n)}function j3(t,e){const n=ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function X3(t,e){const n=ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function q3(t,e){const n=ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function $3(t,e){t.uniform1iv(this.addr,e)}function Y3(t,e){t.uniform2iv(this.addr,e)}function K3(t,e){t.uniform3iv(this.addr,e)}function Z3(t,e){t.uniform4iv(this.addr,e)}function J3(t,e){t.uniform1uiv(this.addr,e)}function Q3(t,e){t.uniform2uiv(this.addr,e)}function e2(t,e){t.uniform3uiv(this.addr,e)}function t2(t,e){t.uniform4uiv(this.addr,e)}function n2(t,e,n){const i=this.cache,r=e.length,s=Kl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||av,s[o])}function i2(t,e,n){const i=this.cache,r=e.length,s=Kl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||cv,s[o])}function r2(t,e,n){const i=this.cache,r=e.length,s=Kl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||uv,s[o])}function s2(t,e,n){const i=this.cache,r=e.length,s=Kl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||lv,s[o])}function o2(t){switch(t){case 5126:return V3;case 35664:return H3;case 35665:return G3;case 35666:return W3;case 35674:return j3;case 35675:return X3;case 35676:return q3;case 5124:case 35670:return $3;case 35667:case 35671:return Y3;case 35668:case 35672:return K3;case 35669:case 35673:return Z3;case 5125:return J3;case 36294:return Q3;case 36295:return e2;case 36296:return t2;case 35678:case 36198:case 36298:case 36306:case 35682:return n2;case 35679:case 36299:case 36307:return i2;case 35680:case 36300:case 36308:case 36293:return r2;case 36289:case 36303:case 36311:case 36292:return s2}}class a2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=z3(n.type)}}class l2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=o2(n.type)}}class c2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const eu=/(\w+)(\])?(\[|\.)?/g;function Jp(t,e){t.seq.push(e),t.map[e.id]=e}function u2(t,e,n){const i=t.name,r=i.length;for(eu.lastIndex=0;;){const s=eu.exec(i),o=eu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Jp(n,c===void 0?new a2(a,t,e):new l2(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new c2(a),Jp(n,f)),n=f}}}class Ka{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);u2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Qp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const d2=37297;let f2=0;function h2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function p2(t){const e=Ke.getPrimaries(Ke.workingColorSpace),n=Ke.getPrimaries(t);let i;switch(e===n?i="":e===Cl&&n===wl?i="LinearDisplayP3ToLinearSRGB":e===wl&&n===Cl&&(i="LinearSRGBToLinearDisplayP3"),t){case er:case $l:return[i,"LinearTransferOETF"];case Vn:case Bf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function em(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+h2(t.getShaderSource(e),o)}else return r}function m2(t,e){const n=p2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function g2(t,e){let n;switch(e){case by:n="Linear";break;case Ny:n="Reinhard";break;case Dy:n="OptimizedCineon";break;case Uy:n="ACESFilmic";break;case Fy:n="AgX";break;case Oy:n="Neutral";break;case Iy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function v2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function _2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function x2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function no(t){return t!==""}function tm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y2=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(t){return t.replace(y2,M2)}const S2=new Map;function M2(t,e){let n=Ue[e];if(n===void 0){const i=S2.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bd(n)}const E2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function im(t){return t.replace(E2,T2)}function T2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function w2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===N0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===iy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function C2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Cs:case As:e="ENVMAP_TYPE_CUBE";break;case ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function A2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function R2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case D0:e="ENVMAP_BLENDING_MULTIPLY";break;case Py:e="ENVMAP_BLENDING_MIX";break;case Ly:e="ENVMAP_BLENDING_ADD";break}return e}function P2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function L2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=w2(n),c=C2(n),d=A2(n),f=R2(n),h=P2(n),m=v2(n),_=_2(s),x=r.createProgram();let p,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(no).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(no).join(`
`),u.length>0&&(u+=`
`)):(p=[rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),u=[rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?Ue.tonemapping_pars_fragment:"",n.toneMapping!==Wi?g2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,m2("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(no).join(`
`)),o=bd(o),o=tm(o,n),o=nm(o,n),a=bd(a),a=tm(a,n),a=nm(a,n),o=im(o),a=im(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",n.glslVersion===xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=g+p+o,y=g+u+a,P=Qp(r,r.VERTEX_SHADER,v),A=Qp(r,r.FRAGMENT_SHADER,y);r.attachShader(x,P),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(N){if(t.debug.checkShaderErrors){const G=r.getProgramInfoLog(x).trim(),V=r.getShaderInfoLog(P).trim(),q=r.getShaderInfoLog(A).trim();let $=!0,W=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,P,A);else{const K=em(r,P,"vertex"),D=em(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+G+`
`+K+`
`+D)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(V===""||q==="")&&(W=!1);W&&(N.diagnostics={runnable:$,programLog:G,vertexShader:{log:V,prefix:p},fragmentShader:{log:q,prefix:u}})}r.deleteShader(P),r.deleteShader(A),b=new Ka(r,x),w=x2(r,x)}let b;this.getUniforms=function(){return b===void 0&&C(this),b};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,d2)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=f2++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=A,this}let b2=0;class N2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new D2(e),n.set(e,i)),i}}class D2{constructor(e){this.id=b2++,this.code=e,this.usedTimes=0}}function U2(t,e,n,i,r,s,o){const a=new K0,l=new N2,c=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function p(w,S,N,G,V){const q=G.fog,$=V.geometry,W=w.isMeshStandardMaterial?G.environment:null,K=(w.isMeshStandardMaterial?n:e).get(w.envMap||W),D=K&&K.mapping===ql?K.image.height:null,Y=_[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const J=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ae=J!==void 0?J.length:0;let Se=0;$.morphAttributes.position!==void 0&&(Se=1),$.morphAttributes.normal!==void 0&&(Se=2),$.morphAttributes.color!==void 0&&(Se=3);let Ve,H,ne,de;if(Y){const We=Hn[Y];Ve=We.vertexShader,H=We.fragmentShader}else Ve=w.vertexShader,H=w.fragmentShader,l.update(w),ne=l.getVertexShaderID(w),de=l.getFragmentShaderID(w);const fe=t.getRenderTarget(),be=V.isInstancedMesh===!0,Fe=V.isBatchedMesh===!0,Be=!!w.map,ct=!!w.matcap,L=!!K,mt=!!w.aoMap,Ye=!!w.lightMap,Je=!!w.bumpMap,Me=!!w.normalMap,gt=!!w.displacementMap,Pe=!!w.emissiveMap,Ne=!!w.metalnessMap,R=!!w.roughnessMap,M=w.anisotropy>0,B=w.clearcoat>0,Q=w.dispersion>0,te=w.iridescence>0,Z=w.sheen>0,Ee=w.transmission>0,ue=M&&!!w.anisotropyMap,ge=B&&!!w.clearcoatMap,De=B&&!!w.clearcoatNormalMap,ie=B&&!!w.clearcoatRoughnessMap,me=te&&!!w.iridescenceMap,ze=te&&!!w.iridescenceThicknessMap,Re=Z&&!!w.sheenColorMap,ve=Z&&!!w.sheenRoughnessMap,Le=!!w.specularMap,Oe=!!w.specularColorMap,st=!!w.specularIntensityMap,U=Ee&&!!w.transmissionMap,re=Ee&&!!w.thicknessMap,j=!!w.gradientMap,X=!!w.alphaMap,le=w.alphaTest>0,we=!!w.alphaHash,He=!!w.extensions;let vt=Wi;w.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(vt=t.toneMapping);const bt={shaderID:Y,shaderType:w.type,shaderName:w.name,vertexShader:Ve,fragmentShader:H,defines:w.defines,customVertexShaderID:ne,customFragmentShaderID:de,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Fe,batchingColor:Fe&&V._colorsTexture!==null,instancing:be,instancingColor:be&&V.instanceColor!==null,instancingMorph:be&&V.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:fe===null?t.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:er,alphaToCoverage:!!w.alphaToCoverage,map:Be,matcap:ct,envMap:L,envMapMode:L&&K.mapping,envMapCubeUVHeight:D,aoMap:mt,lightMap:Ye,bumpMap:Je,normalMap:Me,displacementMap:h&&gt,emissiveMap:Pe,normalMapObjectSpace:Me&&w.normalMapType===Hy,normalMapTangentSpace:Me&&w.normalMapType===Vy,metalnessMap:Ne,roughnessMap:R,anisotropy:M,anisotropyMap:ue,clearcoat:B,clearcoatMap:ge,clearcoatNormalMap:De,clearcoatRoughnessMap:ie,dispersion:Q,iridescence:te,iridescenceMap:me,iridescenceThicknessMap:ze,sheen:Z,sheenColorMap:Re,sheenRoughnessMap:ve,specularMap:Le,specularColorMap:Oe,specularIntensityMap:st,transmission:Ee,transmissionMap:U,thicknessMap:re,gradientMap:j,opaque:w.transparent===!1&&w.blending===gs&&w.alphaToCoverage===!1,alphaMap:X,alphaTest:le,alphaHash:we,combine:w.combine,mapUv:Be&&x(w.map.channel),aoMapUv:mt&&x(w.aoMap.channel),lightMapUv:Ye&&x(w.lightMap.channel),bumpMapUv:Je&&x(w.bumpMap.channel),normalMapUv:Me&&x(w.normalMap.channel),displacementMapUv:gt&&x(w.displacementMap.channel),emissiveMapUv:Pe&&x(w.emissiveMap.channel),metalnessMapUv:Ne&&x(w.metalnessMap.channel),roughnessMapUv:R&&x(w.roughnessMap.channel),anisotropyMapUv:ue&&x(w.anisotropyMap.channel),clearcoatMapUv:ge&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:De&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:ve&&x(w.sheenRoughnessMap.channel),specularMapUv:Le&&x(w.specularMap.channel),specularColorMapUv:Oe&&x(w.specularColorMap.channel),specularIntensityMapUv:st&&x(w.specularIntensityMap.channel),transmissionMapUv:U&&x(w.transmissionMap.channel),thicknessMapUv:re&&x(w.thicknessMap.channel),alphaMapUv:X&&x(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Me||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!$.attributes.uv&&(Be||X),fog:!!q,useFog:w.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:V.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Se,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:vt,decodeVideoTexture:Be&&w.map.isVideoTexture===!0&&Ke.getTransfer(w.map.colorSpace)===nt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ri,flipSided:w.side===tn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:He&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&w.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function u(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const N in w.defines)S.push(N),S.push(w.defines[N]);return w.isRawShaderMaterial===!1&&(g(S,w),v(S,w),S.push(t.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function g(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function v(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),w.push(a.mask)}function y(w){const S=_[w.type];let N;if(S){const G=Hn[S];N=vS.clone(G.uniforms)}else N=w.uniforms;return N}function P(w,S){let N;for(let G=0,V=d.length;G<V;G++){const q=d[G];if(q.cacheKey===S){N=q,++N.usedTimes;break}}return N===void 0&&(N=new L2(t,S,w,s),d.push(N)),N}function A(w){if(--w.usedTimes===0){const S=d.indexOf(w);d[S]=d[d.length-1],d.pop(),w.destroy()}}function C(w){l.remove(w)}function b(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:y,acquireProgram:P,releaseProgram:A,releaseShaderCache:C,programs:d,dispose:b}}function I2(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function F2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function sm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function om(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,m,_,x,p){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:x,group:p},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=m,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=x,u.group=p),e++,u}function a(f,h,m,_,x,p){const u=o(f,h,m,_,x,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(f,h,m,_,x,p){const u=o(f,h,m,_,x,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||F2),i.length>1&&i.sort(h||sm),r.length>1&&r.sort(h||sm)}function d(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function O2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new om,t.set(i,[o])):r>=s.length?(o=new om,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function k2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new Qe};break;case"SpotLight":n={position:new z,direction:new z,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function B2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let z2=0;function V2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function H2(t){const e=new k2,n=B2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new Tt,o=new Tt;function a(c){let d=0,f=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,_=0,x=0,p=0,u=0,g=0,v=0,y=0,P=0,A=0,C=0;c.sort(V2);for(let w=0,S=c.length;w<S;w++){const N=c[w],G=N.color,V=N.intensity,q=N.distance,$=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=G.r*V,f+=G.g*V,h+=G.b*V;else if(N.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(N.sh.coefficients[W],V);C++}else if(N.isDirectionalLight){const W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const K=N.shadow,D=n.get(N);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,i.directionalShadow[m]=D,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=N.shadow.matrix,g++}i.directional[m]=W,m++}else if(N.isSpotLight){const W=e.get(N);W.position.setFromMatrixPosition(N.matrixWorld),W.color.copy(G).multiplyScalar(V),W.distance=q,W.coneCos=Math.cos(N.angle),W.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),W.decay=N.decay,i.spot[x]=W;const K=N.shadow;if(N.map&&(i.spotLightMap[P]=N.map,P++,K.updateMatrices(N),N.castShadow&&A++),i.spotLightMatrix[x]=K.matrix,N.castShadow){const D=n.get(N);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,i.spotShadow[x]=D,i.spotShadowMap[x]=$,y++}x++}else if(N.isRectAreaLight){const W=e.get(N);W.color.copy(G).multiplyScalar(V),W.halfWidth.set(N.width*.5,0,0),W.halfHeight.set(0,N.height*.5,0),i.rectArea[p]=W,p++}else if(N.isPointLight){const W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),W.distance=N.distance,W.decay=N.decay,N.castShadow){const K=N.shadow,D=n.get(N);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,D.shadowCameraNear=K.camera.near,D.shadowCameraFar=K.camera.far,i.pointShadow[_]=D,i.pointShadowMap[_]=$,i.pointShadowMatrix[_]=N.shadow.matrix,v++}i.point[_]=W,_++}else if(N.isHemisphereLight){const W=e.get(N);W.skyColor.copy(N.color).multiplyScalar(V),W.groundColor.copy(N.groundColor).multiplyScalar(V),i.hemi[u]=W,u++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const b=i.hash;(b.directionalLength!==m||b.pointLength!==_||b.spotLength!==x||b.rectAreaLength!==p||b.hemiLength!==u||b.numDirectionalShadows!==g||b.numPointShadows!==v||b.numSpotShadows!==y||b.numSpotMaps!==P||b.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,b.directionalLength=m,b.pointLength=_,b.spotLength=x,b.rectAreaLength=p,b.hemiLength=u,b.numDirectionalShadows=g,b.numPointShadows=v,b.numSpotShadows=y,b.numSpotMaps=P,b.numLightProbes=C,i.version=z2++)}function l(c,d){let f=0,h=0,m=0,_=0,x=0;const p=d.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const v=c[u];if(v.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),f++}else if(v.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),h++}else if(v.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function am(t){const e=new H2(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function G2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new am(t),e.set(r,[a])):s>=o.length?(a=new am(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class W2 extends Yl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=By,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class j2 extends Yl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const X2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $2(t,e,n){let i=new rv;const r=new $e,s=new $e,o=new Pt,a=new W2({depthPacking:zy}),l=new j2,c={},d=n.maxTextureSize,f={[qi]:tn,[tn]:qi,[ri]:ri},h=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:X2,fragmentShader:q2}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new br;_.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new jn(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=N0;let u=this.type;this.render=function(A,C,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const w=t.getRenderTarget(),S=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),G=t.state;G.setBlending(Gi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const V=u!==ti&&this.type===ti,q=u===ti&&this.type!==ti;for(let $=0,W=A.length;$<W;$++){const K=A[$],D=K.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const Y=D.getFrameExtents();if(r.multiply(Y),s.copy(D.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Y.x),r.x=s.x*Y.x,D.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Y.y),r.y=s.y*Y.y,D.mapSize.y=s.y)),D.map===null||V===!0||q===!0){const ae=this.type!==ti?{minFilter:yn,magFilter:yn}:{};D.map!==null&&D.map.dispose(),D.map=new Rr(r.x,r.y,ae),D.map.texture.name=K.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const J=D.getViewportCount();for(let ae=0;ae<J;ae++){const Se=D.getViewport(ae);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),G.viewport(o),D.updateMatrices(K,ae),i=D.getFrustum(),y(C,b,D.camera,K,this.type)}D.isPointLightShadow!==!0&&this.type===ti&&g(D,b),D.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(w,S,N)};function g(A,C){const b=e.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Rr(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,b,h,x,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,b,m,x,null)}function v(A,C,b,w){let S=null;const N=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)S=N;else if(S=b.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const G=S.uuid,V=C.uuid;let q=c[G];q===void 0&&(q={},c[G]=q);let $=q[V];$===void 0&&($=S.clone(),q[V]=$,C.addEventListener("dispose",P)),S=$}if(S.visible=C.visible,S.wireframe=C.wireframe,w===ti?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:f[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=t.properties.get(S);G.light=b}return S}function y(A,C,b,w,S){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===ti)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const V=e.update(A),q=A.material;if(Array.isArray(q)){const $=V.groups;for(let W=0,K=$.length;W<K;W++){const D=$[W],Y=q[D.materialIndex];if(Y&&Y.visible){const J=v(A,Y,w,S);A.onBeforeShadow(t,A,C,b,V,J,D),t.renderBufferDirect(b,null,V,J,A,D),A.onAfterShadow(t,A,C,b,V,J,D)}}}else if(q.visible){const $=v(A,q,w,S);A.onBeforeShadow(t,A,C,b,V,$,null),t.renderBufferDirect(b,null,V,$,A,null),A.onAfterShadow(t,A,C,b,V,$,null)}}const G=A.children;for(let V=0,q=G.length;V<q;V++)y(G[V],C,b,w,S)}function P(A){A.target.removeEventListener("dispose",P);for(const b in c){const w=c[b],S=A.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}function Y2(t){function e(){let U=!1;const re=new Pt;let j=null;const X=new Pt(0,0,0,0);return{setMask:function(le){j!==le&&!U&&(t.colorMask(le,le,le,le),j=le)},setLocked:function(le){U=le},setClear:function(le,we,He,vt,bt){bt===!0&&(le*=vt,we*=vt,He*=vt),re.set(le,we,He,vt),X.equals(re)===!1&&(t.clearColor(le,we,He,vt),X.copy(re))},reset:function(){U=!1,j=null,X.set(-1,0,0,0)}}}function n(){let U=!1,re=null,j=null,X=null;return{setTest:function(le){le?de(t.DEPTH_TEST):fe(t.DEPTH_TEST)},setMask:function(le){re!==le&&!U&&(t.depthMask(le),re=le)},setFunc:function(le){if(j!==le){switch(le){case My:t.depthFunc(t.NEVER);break;case Ey:t.depthFunc(t.ALWAYS);break;case Ty:t.depthFunc(t.LESS);break;case El:t.depthFunc(t.LEQUAL);break;case wy:t.depthFunc(t.EQUAL);break;case Cy:t.depthFunc(t.GEQUAL);break;case Ay:t.depthFunc(t.GREATER);break;case Ry:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}j=le}},setLocked:function(le){U=le},setClear:function(le){X!==le&&(t.clearDepth(le),X=le)},reset:function(){U=!1,re=null,j=null,X=null}}}function i(){let U=!1,re=null,j=null,X=null,le=null,we=null,He=null,vt=null,bt=null;return{setTest:function(We){U||(We?de(t.STENCIL_TEST):fe(t.STENCIL_TEST))},setMask:function(We){re!==We&&!U&&(t.stencilMask(We),re=We)},setFunc:function(We,Yn,On){(j!==We||X!==Yn||le!==On)&&(t.stencilFunc(We,Yn,On),j=We,X=Yn,le=On)},setOp:function(We,Yn,On){(we!==We||He!==Yn||vt!==On)&&(t.stencilOp(We,Yn,On),we=We,He=Yn,vt=On)},setLocked:function(We){U=We},setClear:function(We){bt!==We&&(t.clearStencil(We),bt=We)},reset:function(){U=!1,re=null,j=null,X=null,le=null,we=null,He=null,vt=null,bt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},d={},f=new WeakMap,h=[],m=null,_=!1,x=null,p=null,u=null,g=null,v=null,y=null,P=null,A=new Qe(0,0,0),C=0,b=!1,w=null,S=null,N=null,G=null,V=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,W=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(K)[1]),$=W>=1):K.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),$=W>=2);let D=null,Y={};const J=t.getParameter(t.SCISSOR_BOX),ae=t.getParameter(t.VIEWPORT),Se=new Pt().fromArray(J),Ve=new Pt().fromArray(ae);function H(U,re,j,X){const le=new Uint8Array(4),we=t.createTexture();t.bindTexture(U,we),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let He=0;He<j;He++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(re,0,t.RGBA,1,1,X,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D(re+He,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return we}const ne={};ne[t.TEXTURE_2D]=H(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=H(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=H(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=H(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),de(t.DEPTH_TEST),s.setFunc(El),Je(!1),Me(hp),de(t.CULL_FACE),mt(Gi);function de(U){c[U]!==!0&&(t.enable(U),c[U]=!0)}function fe(U){c[U]!==!1&&(t.disable(U),c[U]=!1)}function be(U,re){return d[U]!==re?(t.bindFramebuffer(U,re),d[U]=re,U===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=re),U===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=re),!0):!1}function Fe(U,re){let j=h,X=!1;if(U){j=f.get(re),j===void 0&&(j=[],f.set(re,j));const le=U.textures;if(j.length!==le.length||j[0]!==t.COLOR_ATTACHMENT0){for(let we=0,He=le.length;we<He;we++)j[we]=t.COLOR_ATTACHMENT0+we;j.length=le.length,X=!0}}else j[0]!==t.BACK&&(j[0]=t.BACK,X=!0);X&&t.drawBuffers(j)}function Be(U){return m!==U?(t.useProgram(U),m=U,!0):!1}const ct={[fr]:t.FUNC_ADD,[sy]:t.FUNC_SUBTRACT,[oy]:t.FUNC_REVERSE_SUBTRACT};ct[ay]=t.MIN,ct[ly]=t.MAX;const L={[cy]:t.ZERO,[uy]:t.ONE,[dy]:t.SRC_COLOR,[Ju]:t.SRC_ALPHA,[vy]:t.SRC_ALPHA_SATURATE,[my]:t.DST_COLOR,[hy]:t.DST_ALPHA,[fy]:t.ONE_MINUS_SRC_COLOR,[Qu]:t.ONE_MINUS_SRC_ALPHA,[gy]:t.ONE_MINUS_DST_COLOR,[py]:t.ONE_MINUS_DST_ALPHA,[_y]:t.CONSTANT_COLOR,[xy]:t.ONE_MINUS_CONSTANT_COLOR,[yy]:t.CONSTANT_ALPHA,[Sy]:t.ONE_MINUS_CONSTANT_ALPHA};function mt(U,re,j,X,le,we,He,vt,bt,We){if(U===Gi){_===!0&&(fe(t.BLEND),_=!1);return}if(_===!1&&(de(t.BLEND),_=!0),U!==ry){if(U!==x||We!==b){if((p!==fr||v!==fr)&&(t.blendEquation(t.FUNC_ADD),p=fr,v=fr),We)switch(U){case gs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case pp:t.blendFunc(t.ONE,t.ONE);break;case mp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case gs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case pp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case mp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}u=null,g=null,y=null,P=null,A.set(0,0,0),C=0,x=U,b=We}return}le=le||re,we=we||j,He=He||X,(re!==p||le!==v)&&(t.blendEquationSeparate(ct[re],ct[le]),p=re,v=le),(j!==u||X!==g||we!==y||He!==P)&&(t.blendFuncSeparate(L[j],L[X],L[we],L[He]),u=j,g=X,y=we,P=He),(vt.equals(A)===!1||bt!==C)&&(t.blendColor(vt.r,vt.g,vt.b,bt),A.copy(vt),C=bt),x=U,b=!1}function Ye(U,re){U.side===ri?fe(t.CULL_FACE):de(t.CULL_FACE);let j=U.side===tn;re&&(j=!j),Je(j),U.blending===gs&&U.transparent===!1?mt(Gi):mt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const X=U.stencilWrite;o.setTest(X),X&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Pe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Je(U){w!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),w=U)}function Me(U){U!==ty?(de(t.CULL_FACE),U!==S&&(U===hp?t.cullFace(t.BACK):U===ny?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):fe(t.CULL_FACE),S=U}function gt(U){U!==N&&($&&t.lineWidth(U),N=U)}function Pe(U,re,j){U?(de(t.POLYGON_OFFSET_FILL),(G!==re||V!==j)&&(t.polygonOffset(re,j),G=re,V=j)):fe(t.POLYGON_OFFSET_FILL)}function Ne(U){U?de(t.SCISSOR_TEST):fe(t.SCISSOR_TEST)}function R(U){U===void 0&&(U=t.TEXTURE0+q-1),D!==U&&(t.activeTexture(U),D=U)}function M(U,re,j){j===void 0&&(D===null?j=t.TEXTURE0+q-1:j=D);let X=Y[j];X===void 0&&(X={type:void 0,texture:void 0},Y[j]=X),(X.type!==U||X.texture!==re)&&(D!==j&&(t.activeTexture(j),D=j),t.bindTexture(U,re||ne[U]),X.type=U,X.texture=re)}function B(){const U=Y[D];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(U){Se.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Se.copy(U))}function ve(U){Ve.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Ve.copy(U))}function Le(U,re){let j=l.get(re);j===void 0&&(j=new WeakMap,l.set(re,j));let X=j.get(U);X===void 0&&(X=t.getUniformBlockIndex(re,U.name),j.set(U,X))}function Oe(U,re){const X=l.get(re).get(U);a.get(re)!==X&&(t.uniformBlockBinding(re,X,U.__bindingPointIndex),a.set(re,X))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},D=null,Y={},d={},f=new WeakMap,h=[],m=null,_=!1,x=null,p=null,u=null,g=null,v=null,y=null,P=null,A=new Qe(0,0,0),C=0,b=!1,w=null,S=null,N=null,G=null,V=null,Se.set(0,0,t.canvas.width,t.canvas.height),Ve.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:de,disable:fe,bindFramebuffer:be,drawBuffers:Fe,useProgram:Be,setBlending:mt,setMaterial:Ye,setFlipSided:Je,setCullFace:Me,setLineWidth:gt,setPolygonOffset:Pe,setScissorTest:Ne,activeTexture:R,bindTexture:M,unbindTexture:B,compressedTexImage2D:Q,compressedTexImage3D:te,texImage2D:me,texImage3D:ze,updateUBOMapping:Le,uniformBlockBinding:Oe,texStorage2D:De,texStorage3D:ie,texSubImage2D:Z,texSubImage3D:Ee,compressedTexSubImage2D:ue,compressedTexSubImage3D:ge,scissor:Re,viewport:ve,reset:st}}function lm(t,e,n,i){const r=K2(i);switch(n){case k0:return t*e;case z0:return t*e;case V0:return t*e*2;case H0:return t*e/r.components*r.byteLength;case Ff:return t*e/r.components*r.byteLength;case G0:return t*e*2/r.components*r.byteLength;case Of:return t*e*2/r.components*r.byteLength;case B0:return t*e*3/r.components*r.byteLength;case Dn:return t*e*4/r.components*r.byteLength;case kf:return t*e*4/r.components*r.byteLength;case ja:case Xa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case qa:case $a:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sd:case ad:return Math.max(t,16)*Math.max(e,8)/4;case rd:case od:return Math.max(t,8)*Math.max(e,8)/2;case ld:case cd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ud:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case dd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case fd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case hd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case pd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case md:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case gd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case vd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case _d:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case xd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case yd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Sd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Md:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ed:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Td:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ya:case wd:case Cd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case W0:case Ad:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Rd:case Pd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function K2(t){switch(t){case pi:case I0:return{byteLength:1,components:1};case No:case F0:case ko:return{byteLength:2,components:1};case Uf:case If:return{byteLength:2,components:4};case Ar:case Df:case ai:return{byteLength:4,components:1};case O0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function Z2(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,d=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return m?new OffscreenCanvas(R,M):Rl("canvas")}function x(R,M,B){let Q=1;const te=Ne(R);if((te.width>B||te.height>B)&&(Q=B/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(Q*te.width),Ee=Math.floor(Q*te.height);f===void 0&&(f=_(Z,Ee));const ue=M?_(Z,Ee):f;return ue.width=Z,ue.height=Ee,ue.getContext("2d").drawImage(R,0,0,Z,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+Ee+")."),ue}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==yn&&R.minFilter!==Nn}function u(R){t.generateMipmap(R)}function g(R,M,B,Q,te=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=M;if(M===t.RED&&(B===t.FLOAT&&(Z=t.R32F),B===t.HALF_FLOAT&&(Z=t.R16F),B===t.UNSIGNED_BYTE&&(Z=t.R8)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(Z=t.R8UI),B===t.UNSIGNED_SHORT&&(Z=t.R16UI),B===t.UNSIGNED_INT&&(Z=t.R32UI),B===t.BYTE&&(Z=t.R8I),B===t.SHORT&&(Z=t.R16I),B===t.INT&&(Z=t.R32I)),M===t.RG&&(B===t.FLOAT&&(Z=t.RG32F),B===t.HALF_FLOAT&&(Z=t.RG16F),B===t.UNSIGNED_BYTE&&(Z=t.RG8)),M===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(Z=t.RG8UI),B===t.UNSIGNED_SHORT&&(Z=t.RG16UI),B===t.UNSIGNED_INT&&(Z=t.RG32UI),B===t.BYTE&&(Z=t.RG8I),B===t.SHORT&&(Z=t.RG16I),B===t.INT&&(Z=t.RG32I)),M===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),M===t.RGBA){const Ee=te?Tl:Ke.getTransfer(Q);B===t.FLOAT&&(Z=t.RGBA32F),B===t.HALF_FLOAT&&(Z=t.RGBA16F),B===t.UNSIGNED_BYTE&&(Z=Ee===nt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(R,M){let B;return R?M===null||M===Ar||M===Rs?B=t.DEPTH24_STENCIL8:M===ai?B=t.DEPTH32F_STENCIL8:M===No&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ar||M===Rs?B=t.DEPTH_COMPONENT24:M===ai?B=t.DEPTH_COMPONENT32F:M===No&&(B=t.DEPTH_COMPONENT16),B}function y(R,M){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==yn&&R.minFilter!==Nn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function P(R){const M=R.target;M.removeEventListener("dispose",P),C(M),M.isVideoTexture&&d.delete(M)}function A(R){const M=R.target;M.removeEventListener("dispose",A),w(M)}function C(R){const M=i.get(R);if(M.__webglInit===void 0)return;const B=R.source,Q=h.get(B);if(Q){const te=Q[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&b(R),Object.keys(Q).length===0&&h.delete(B)}i.remove(R)}function b(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const B=R.source,Q=h.get(B);delete Q[M.__cacheKey],o.memory.textures--}function w(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let te=0;te<M.__webglFramebuffer[Q].length;te++)t.deleteFramebuffer(M.__webglFramebuffer[Q][te]);else t.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)t.deleteFramebuffer(M.__webglFramebuffer[Q]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=R.textures;for(let Q=0,te=B.length;Q<te;Q++){const Z=i.get(B[Q]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(B[Q])}i.remove(R)}let S=0;function N(){S=0}function G(){const R=S;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),S+=1,R}function V(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function q(R,M){const B=i.get(R);if(R.isVideoTexture&&gt(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(B,R,M);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function $(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){Ve(B,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function W(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){Ve(B,R,M);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function K(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){H(B,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}const D={[nd]:t.REPEAT,[vr]:t.CLAMP_TO_EDGE,[id]:t.MIRRORED_REPEAT},Y={[yn]:t.NEAREST,[ky]:t.NEAREST_MIPMAP_NEAREST,[ua]:t.NEAREST_MIPMAP_LINEAR,[Nn]:t.LINEAR,[Rc]:t.LINEAR_MIPMAP_NEAREST,[_r]:t.LINEAR_MIPMAP_LINEAR},J={[Gy]:t.NEVER,[Yy]:t.ALWAYS,[Wy]:t.LESS,[j0]:t.LEQUAL,[jy]:t.EQUAL,[$y]:t.GEQUAL,[Xy]:t.GREATER,[qy]:t.NOTEQUAL};function ae(R,M){if(M.type===ai&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Nn||M.magFilter===Rc||M.magFilter===ua||M.magFilter===_r||M.minFilter===Nn||M.minFilter===Rc||M.minFilter===ua||M.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,D[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,D[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,D[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Y[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Y[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,J[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===yn||M.minFilter!==ua&&M.minFilter!==_r||M.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Se(R,M){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",P));const Q=M.source;let te=h.get(Q);te===void 0&&(te={},h.set(Q,te));const Z=V(M);if(Z!==R.__cacheKey){te[Z]===void 0&&(te[Z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),te[Z].usedTimes++;const Ee=te[R.__cacheKey];Ee!==void 0&&(te[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&b(M)),R.__cacheKey=Z,R.__webglTexture=te[Z].texture}return B}function Ve(R,M,B){let Q=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=t.TEXTURE_3D);const te=Se(R,M),Z=M.source;n.bindTexture(Q,R.__webglTexture,t.TEXTURE0+B);const Ee=i.get(Z);if(Z.version!==Ee.__version||te===!0){n.activeTexture(t.TEXTURE0+B);const ue=Ke.getPrimaries(Ke.workingColorSpace),ge=M.colorSpace===Li?null:Ke.getPrimaries(M.colorSpace),De=M.colorSpace===Li||ue===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ie=x(M.image,!1,r.maxTextureSize);ie=Pe(M,ie);const me=s.convert(M.format,M.colorSpace),ze=s.convert(M.type);let Re=g(M.internalFormat,me,ze,M.colorSpace,M.isVideoTexture);ae(Q,M);let ve;const Le=M.mipmaps,Oe=M.isVideoTexture!==!0,st=Ee.__version===void 0||te===!0,U=Z.dataReady,re=y(M,ie);if(M.isDepthTexture)Re=v(M.format===Ps,M.type),st&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,Re,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Re,ie.width,ie.height,0,me,ze,null));else if(M.isDataTexture)if(Le.length>0){Oe&&st&&n.texStorage2D(t.TEXTURE_2D,re,Re,Le[0].width,Le[0].height);for(let j=0,X=Le.length;j<X;j++)ve=Le[j],Oe?U&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ve.width,ve.height,me,ze,ve.data):n.texImage2D(t.TEXTURE_2D,j,Re,ve.width,ve.height,0,me,ze,ve.data);M.generateMipmaps=!1}else Oe?(st&&n.texStorage2D(t.TEXTURE_2D,re,Re,ie.width,ie.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,me,ze,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Re,ie.width,ie.height,0,me,ze,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Oe&&st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,re,Re,Le[0].width,Le[0].height,ie.depth);for(let j=0,X=Le.length;j<X;j++)if(ve=Le[j],M.format!==Dn)if(me!==null)if(Oe){if(U)if(M.layerUpdates.size>0){const le=lm(ve.width,ve.height,M.format,M.type);for(const we of M.layerUpdates){const He=ve.data.subarray(we*le/ve.data.BYTES_PER_ELEMENT,(we+1)*le/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,we,ve.width,ve.height,1,me,He,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,ve.width,ve.height,ie.depth,me,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,Re,ve.width,ve.height,ie.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,ve.width,ve.height,ie.depth,me,ze,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,Re,ve.width,ve.height,ie.depth,0,me,ze,ve.data)}else{Oe&&st&&n.texStorage2D(t.TEXTURE_2D,re,Re,Le[0].width,Le[0].height);for(let j=0,X=Le.length;j<X;j++)ve=Le[j],M.format!==Dn?me!==null?Oe?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,ve.width,ve.height,me,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,j,Re,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?U&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ve.width,ve.height,me,ze,ve.data):n.texImage2D(t.TEXTURE_2D,j,Re,ve.width,ve.height,0,me,ze,ve.data)}else if(M.isDataArrayTexture)if(Oe){if(st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,re,Re,ie.width,ie.height,ie.depth),U)if(M.layerUpdates.size>0){const j=lm(ie.width,ie.height,M.format,M.type);for(const X of M.layerUpdates){const le=ie.data.subarray(X*j/ie.data.BYTES_PER_ELEMENT,(X+1)*j/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,X,ie.width,ie.height,1,me,ze,le)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,me,ze,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,ie.width,ie.height,ie.depth,0,me,ze,ie.data);else if(M.isData3DTexture)Oe?(st&&n.texStorage3D(t.TEXTURE_3D,re,Re,ie.width,ie.height,ie.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,me,ze,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Re,ie.width,ie.height,ie.depth,0,me,ze,ie.data);else if(M.isFramebufferTexture){if(st)if(Oe)n.texStorage2D(t.TEXTURE_2D,re,Re,ie.width,ie.height);else{let j=ie.width,X=ie.height;for(let le=0;le<re;le++)n.texImage2D(t.TEXTURE_2D,le,Re,j,X,0,me,ze,null),j>>=1,X>>=1}}else if(Le.length>0){if(Oe&&st){const j=Ne(Le[0]);n.texStorage2D(t.TEXTURE_2D,re,Re,j.width,j.height)}for(let j=0,X=Le.length;j<X;j++)ve=Le[j],Oe?U&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,me,ze,ve):n.texImage2D(t.TEXTURE_2D,j,Re,me,ze,ve);M.generateMipmaps=!1}else if(Oe){if(st){const j=Ne(ie);n.texStorage2D(t.TEXTURE_2D,re,Re,j.width,j.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,ze,ie)}else n.texImage2D(t.TEXTURE_2D,0,Re,me,ze,ie);p(M)&&u(Q),Ee.__version=Z.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function H(R,M,B){if(M.image.length!==6)return;const Q=Se(R,M),te=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);const Z=i.get(te);if(te.version!==Z.__version||Q===!0){n.activeTexture(t.TEXTURE0+B);const Ee=Ke.getPrimaries(Ke.workingColorSpace),ue=M.colorSpace===Li?null:Ke.getPrimaries(M.colorSpace),ge=M.colorSpace===Li||Ee===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const De=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,me=[];for(let X=0;X<6;X++)!De&&!ie?me[X]=x(M.image[X],!0,r.maxCubemapSize):me[X]=ie?M.image[X].image:M.image[X],me[X]=Pe(M,me[X]);const ze=me[0],Re=s.convert(M.format,M.colorSpace),ve=s.convert(M.type),Le=g(M.internalFormat,Re,ve,M.colorSpace),Oe=M.isVideoTexture!==!0,st=Z.__version===void 0||Q===!0,U=te.dataReady;let re=y(M,ze);ae(t.TEXTURE_CUBE_MAP,M);let j;if(De){Oe&&st&&n.texStorage2D(t.TEXTURE_CUBE_MAP,re,Le,ze.width,ze.height);for(let X=0;X<6;X++){j=me[X].mipmaps;for(let le=0;le<j.length;le++){const we=j[le];M.format!==Dn?Re!==null?Oe?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,le,0,0,we.width,we.height,Re,we.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,le,Le,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,le,0,0,we.width,we.height,Re,ve,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,le,Le,we.width,we.height,0,Re,ve,we.data)}}}else{if(j=M.mipmaps,Oe&&st){j.length>0&&re++;const X=Ne(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,re,Le,X.width,X.height)}for(let X=0;X<6;X++)if(ie){Oe?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,me[X].width,me[X].height,Re,ve,me[X].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Le,me[X].width,me[X].height,0,Re,ve,me[X].data);for(let le=0;le<j.length;le++){const He=j[le].image[X].image;Oe?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,le+1,0,0,He.width,He.height,Re,ve,He.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,le+1,Le,He.width,He.height,0,Re,ve,He.data)}}else{Oe?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Re,ve,me[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Le,Re,ve,me[X]);for(let le=0;le<j.length;le++){const we=j[le];Oe?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,le+1,0,0,Re,ve,we.image[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,le+1,Le,Re,ve,we.image[X])}}}p(M)&&u(t.TEXTURE_CUBE_MAP),Z.__version=te.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ne(R,M,B,Q,te,Z){const Ee=s.convert(B.format,B.colorSpace),ue=s.convert(B.type),ge=g(B.internalFormat,Ee,ue,B.colorSpace);if(!i.get(M).__hasExternalTextures){const ie=Math.max(1,M.width>>Z),me=Math.max(1,M.height>>Z);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,Z,ge,ie,me,M.depth,0,Ee,ue,null):n.texImage2D(te,Z,ge,ie,me,0,Ee,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Me(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,te,i.get(B).__webglTexture,0,Je(M)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,te,i.get(B).__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(R,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const Q=M.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,Z=v(M.stencilBuffer,te),Ee=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=Je(M);Me(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,Z,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,Z,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Z,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,R)}else{const Q=M.textures;for(let te=0;te<Q.length;te++){const Z=Q[te],Ee=s.convert(Z.format,Z.colorSpace),ue=s.convert(Z.type),ge=g(Z.internalFormat,Ee,ue,Z.colorSpace),De=Je(M);B&&Me(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,De,ge,M.width,M.height):Me(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,De,ge,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ge,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function fe(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const Q=i.get(M.depthTexture).__webglTexture,te=Je(M);if(M.depthTexture.format===vs)Me(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(M.depthTexture.format===Ps)Me(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function be(R){const M=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");fe(M.__webglFramebuffer,R)}else if(B){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]=t.createRenderbuffer(),de(M.__webglDepthbuffer[Q],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),de(M.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(R,M,B){const Q=i.get(R);M!==void 0&&ne(Q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&be(R)}function Be(R){const M=R.texture,B=i.get(R),Q=i.get(M);R.addEventListener("dispose",A);const te=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Ee=te.length>1;if(Ee||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=M.version,o.memory.textures++),Z){B.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ue]=[];for(let ge=0;ge<M.mipmaps.length;ge++)B.__webglFramebuffer[ue][ge]=t.createFramebuffer()}else B.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)B.__webglFramebuffer[ue]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let ue=0,ge=te.length;ue<ge;ue++){const De=i.get(te[ue]);De.__webglTexture===void 0&&(De.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Me(R)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ue=0;ue<te.length;ue++){const ge=te[ue];B.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[ue]);const De=s.convert(ge.format,ge.colorSpace),ie=s.convert(ge.type),me=g(ge.internalFormat,De,ie,ge.colorSpace,R.isXRRenderTarget===!0),ze=Je(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,me,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,B.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),de(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),ae(t.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)ne(B.__webglFramebuffer[ue][ge],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge);else ne(B.__webglFramebuffer[ue],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);p(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let ue=0,ge=te.length;ue<ge;ue++){const De=te[ue],ie=i.get(De);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),ae(t.TEXTURE_2D,De),ne(B.__webglFramebuffer,R,De,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),p(De)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,Q.__webglTexture),ae(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)ne(B.__webglFramebuffer[ge],R,M,t.COLOR_ATTACHMENT0,ue,ge);else ne(B.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ue,0);p(M)&&u(ue),n.unbindTexture()}R.depthBuffer&&be(R)}function ct(R){const M=R.textures;for(let B=0,Q=M.length;B<Q;B++){const te=M[B];if(p(te)){const Z=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ee=i.get(te).__webglTexture;n.bindTexture(Z,Ee),u(Z),n.unbindTexture()}}}const L=[],mt=[];function Ye(R){if(R.samples>0){if(Me(R)===!1){const M=R.textures,B=R.width,Q=R.height;let te=t.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(R),ue=M.length>1;if(ue)for(let ge=0;ge<M.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ge=0;ge<M.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);const De=i.get(M[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,De,0)}t.blitFramebuffer(0,0,B,Q,0,0,B,Q,te,t.NEAREST),l===!0&&(L.length=0,mt.length=0,L.push(t.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.resolveDepthBuffer===!1&&(L.push(Z),mt.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,mt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,L))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let ge=0;ge<M.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);const De=i.get(M[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,De,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Je(R){return Math.min(r.maxSamples,R.samples)}function Me(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function gt(R){const M=o.render.frame;d.get(R)!==M&&(d.set(R,M),R.update())}function Pe(R,M){const B=R.colorSpace,Q=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==er&&B!==Li&&(Ke.getTransfer(B)===nt?(Q!==Dn||te!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function Ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=N,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=W,this.setTextureCube=K,this.rebindTextures=Fe,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Me}function J2(t,e){function n(i,r=Li){let s;const o=Ke.getTransfer(r);if(i===pi)return t.UNSIGNED_BYTE;if(i===Uf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===If)return t.UNSIGNED_SHORT_5_5_5_1;if(i===O0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===I0)return t.BYTE;if(i===F0)return t.SHORT;if(i===No)return t.UNSIGNED_SHORT;if(i===Df)return t.INT;if(i===Ar)return t.UNSIGNED_INT;if(i===ai)return t.FLOAT;if(i===ko)return t.HALF_FLOAT;if(i===k0)return t.ALPHA;if(i===B0)return t.RGB;if(i===Dn)return t.RGBA;if(i===z0)return t.LUMINANCE;if(i===V0)return t.LUMINANCE_ALPHA;if(i===vs)return t.DEPTH_COMPONENT;if(i===Ps)return t.DEPTH_STENCIL;if(i===H0)return t.RED;if(i===Ff)return t.RED_INTEGER;if(i===G0)return t.RG;if(i===Of)return t.RG_INTEGER;if(i===kf)return t.RGBA_INTEGER;if(i===ja||i===Xa||i===qa||i===$a)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ja)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ja)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$a)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rd||i===sd||i===od||i===ad)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===rd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===od)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ad)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ld||i===cd||i===ud)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ld||i===cd)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ud)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===dd||i===fd||i===hd||i===pd||i===md||i===gd||i===vd||i===_d||i===xd||i===yd||i===Sd||i===Md||i===Ed||i===Td)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===dd)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fd)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hd)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pd)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===md)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gd)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vd)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_d)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xd)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yd)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sd)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Md)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ed)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Td)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ya||i===wd||i===Cd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ya)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Cd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===W0||i===Ad||i===Rd||i===Pd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ya)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ad)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Q2 extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Na extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eT={type:"move"};class tu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Na;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const tT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class iT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new jt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new gi({vertexShader:tT,fragmentShader:nT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new jn(new Go(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rT extends Os{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,m=null,_=null;const x=new iT,p=n.getContextAttributes();let u=null,g=null;const v=[],y=[],P=new $e;let A=null;const C=new _n;C.layers.enable(1),C.viewport=new Pt;const b=new _n;b.layers.enable(2),b.viewport=new Pt;const w=[C,b],S=new Q2;S.layers.enable(1),S.layers.enable(2);let N=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ne=v[H];return ne===void 0&&(ne=new tu,v[H]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(H){let ne=v[H];return ne===void 0&&(ne=new tu,v[H]=ne),ne.getGripSpace()},this.getHand=function(H){let ne=v[H];return ne===void 0&&(ne=new tu,v[H]=ne),ne.getHandSpace()};function V(H){const ne=y.indexOf(H.inputSource);if(ne===-1)return;const de=v[ne];de!==void 0&&(de.update(H.inputSource,H.frame,c||o),de.dispatchEvent({type:H.type,data:H.inputSource}))}function q(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",$);for(let H=0;H<v.length;H++){const ne=y[H];ne!==null&&(y[H]=null,v[H].disconnect(ne))}N=null,G=null,x.reset(),e.setRenderTarget(u),m=null,h=null,f=null,r=null,g=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",q),r.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const ne={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new Rr(m.framebufferWidth,m.framebufferHeight,{format:Dn,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ne=null,de=null,fe=null;p.depth&&(fe=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=p.stencil?Ps:vs,de=p.stencil?Rs:Ar);const be={colorFormat:n.RGBA8,depthFormat:fe,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(be),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new Rr(h.textureWidth,h.textureHeight,{format:Dn,type:pi,depthTexture:new ov(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(H){for(let ne=0;ne<H.removed.length;ne++){const de=H.removed[ne],fe=y.indexOf(de);fe>=0&&(y[fe]=null,v[fe].disconnect(de))}for(let ne=0;ne<H.added.length;ne++){const de=H.added[ne];let fe=y.indexOf(de);if(fe===-1){for(let Fe=0;Fe<v.length;Fe++)if(Fe>=y.length){y.push(de),fe=Fe;break}else if(y[Fe]===null){y[Fe]=de,fe=Fe;break}if(fe===-1)break}const be=v[fe];be&&be.connect(de)}}const W=new z,K=new z;function D(H,ne,de){W.setFromMatrixPosition(ne.matrixWorld),K.setFromMatrixPosition(de.matrixWorld);const fe=W.distanceTo(K),be=ne.projectionMatrix.elements,Fe=de.projectionMatrix.elements,Be=be[14]/(be[10]-1),ct=be[14]/(be[10]+1),L=(be[9]+1)/be[5],mt=(be[9]-1)/be[5],Ye=(be[8]-1)/be[0],Je=(Fe[8]+1)/Fe[0],Me=Be*Ye,gt=Be*Je,Pe=fe/(-Ye+Je),Ne=Pe*-Ye;ne.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ne),H.translateZ(Pe),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const R=Be+Pe,M=ct+Pe,B=Me-Ne,Q=gt+(fe-Ne),te=L*ct/M*R,Z=mt*ct/M*R;H.projectionMatrix.makePerspective(B,Q,te,Z,R,M),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function Y(H,ne){ne===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ne.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;x.texture!==null&&(H.near=x.depthNear,H.far=x.depthFar),S.near=b.near=C.near=H.near,S.far=b.far=C.far=H.far,(N!==S.near||G!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,G=S.far,C.near=N,C.far=G,b.near=N,b.far=G,C.updateProjectionMatrix(),b.updateProjectionMatrix(),H.updateProjectionMatrix());const ne=H.parent,de=S.cameras;Y(S,ne);for(let fe=0;fe<de.length;fe++)Y(de[fe],ne);de.length===2?D(S,C,b):S.projectionMatrix.copy(C.projectionMatrix),J(H,S,ne)};function J(H,ne,de){de===null?H.matrix.copy(ne.matrixWorld):(H.matrix.copy(de.matrixWorld),H.matrix.invert(),H.matrix.multiply(ne.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ne.projectionMatrix),H.projectionMatrixInverse.copy(ne.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ld*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let ae=null;function Se(H,ne){if(d=ne.getViewerPose(c||o),_=ne,d!==null){const de=d.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let fe=!1;de.length!==S.cameras.length&&(S.cameras.length=0,fe=!0);for(let Fe=0;Fe<de.length;Fe++){const Be=de[Fe];let ct=null;if(m!==null)ct=m.getViewport(Be);else{const mt=f.getViewSubImage(h,Be);ct=mt.viewport,Fe===0&&(e.setRenderTargetTextures(g,mt.colorTexture,h.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(g))}let L=w[Fe];L===void 0&&(L=new _n,L.layers.enable(Fe),L.viewport=new Pt,w[Fe]=L),L.matrix.fromArray(Be.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Be.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(ct.x,ct.y,ct.width,ct.height),Fe===0&&(S.matrix.copy(L.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),fe===!0&&S.cameras.push(L)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const Fe=f.getDepthInformation(de[0]);Fe&&Fe.isValid&&Fe.texture&&x.init(e,Fe,r.renderState)}}for(let de=0;de<v.length;de++){const fe=y[de],be=v[de];fe!==null&&be!==void 0&&be.update(fe,ne,c||o)}ae&&ae(H,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),_=null}const Ve=new sv;Ve.setAnimationLoop(Se),this.setAnimationLoop=function(H){ae=H},this.dispose=function(){}}}const ar=new mi,sT=new Tt;function oT(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,tv(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,g,v,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&m(p,u,y)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),x(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,g,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===tn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===tn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const g=e.get(u),v=g.envMap,y=g.envMapRotation;v&&(p.envMap.value=v,ar.copy(y),ar.x*=-1,ar.y*=-1,ar.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),p.envMapRotation.value.setFromMatrix4(sT.makeRotationFromEuler(ar)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,g,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*g,p.scale.value=v*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,g){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===tn&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const g=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function aT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const y=v.program;i.uniformBlockBinding(g,y)}function c(g,v){let y=r[g.id];y===void 0&&(_(g),y=d(g),r[g.id]=y,g.addEventListener("dispose",p));const P=v.program;i.updateUBOMapping(g,P);const A=e.render.frame;s[g.id]!==A&&(h(g),s[g.id]=A)}function d(g){const v=f();g.__bindingPointIndex=v;const y=t.createBuffer(),P=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,P,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const v=r[g.id],y=g.uniforms,P=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,C=y.length;A<C;A++){const b=Array.isArray(y[A])?y[A]:[y[A]];for(let w=0,S=b.length;w<S;w++){const N=b[w];if(m(N,A,w,P)===!0){const G=N.__offset,V=Array.isArray(N.value)?N.value:[N.value];let q=0;for(let $=0;$<V.length;$++){const W=V[$],K=x(W);typeof W=="number"||typeof W=="boolean"?(N.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,G+q,N.__data)):W.isMatrix3?(N.__data[0]=W.elements[0],N.__data[1]=W.elements[1],N.__data[2]=W.elements[2],N.__data[3]=0,N.__data[4]=W.elements[3],N.__data[5]=W.elements[4],N.__data[6]=W.elements[5],N.__data[7]=0,N.__data[8]=W.elements[6],N.__data[9]=W.elements[7],N.__data[10]=W.elements[8],N.__data[11]=0):(W.toArray(N.__data,q),q+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,v,y,P){const A=g.value,C=v+"_"+y;if(P[C]===void 0)return typeof A=="number"||typeof A=="boolean"?P[C]=A:P[C]=A.clone(),!0;{const b=P[C];if(typeof A=="number"||typeof A=="boolean"){if(b!==A)return P[C]=A,!0}else if(b.equals(A)===!1)return b.copy(A),!0}return!1}function _(g){const v=g.uniforms;let y=0;const P=16;for(let C=0,b=v.length;C<b;C++){const w=Array.isArray(v[C])?v[C]:[v[C]];for(let S=0,N=w.length;S<N;S++){const G=w[S],V=Array.isArray(G.value)?G.value:[G.value];for(let q=0,$=V.length;q<$;q++){const W=V[q],K=x(W),D=y%P;D!==0&&P-D<K.boundary&&(y+=P-D),G.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=K.storage}}}const A=y%P;return A>0&&(y+=P-A),g.__size=y,g.__cache={},this}function x(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function p(g){const v=g.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class lT{constructor(e={}){const{canvas:n=Zy(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vn,this.toneMapping=Wi,this.toneMappingExposure=1;const v=this;let y=!1,P=0,A=0,C=null,b=-1,w=null;const S=new Pt,N=new Pt;let G=null;const V=new Qe(0);let q=0,$=n.width,W=n.height,K=1,D=null,Y=null;const J=new Pt(0,0,$,W),ae=new Pt(0,0,$,W);let Se=!1;const Ve=new rv;let H=!1,ne=!1;const de=new Tt,fe=new z,be=new Pt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function ct(){return C===null?K:1}let L=i;function mt(T,I){return n.getContext(T,I)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Nf}`),n.addEventListener("webglcontextlost",j,!1),n.addEventListener("webglcontextrestored",X,!1),n.addEventListener("webglcontextcreationerror",le,!1),L===null){const I="webgl2";if(L=mt(I,T),L===null)throw mt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ye,Je,Me,gt,Pe,Ne,R,M,B,Q,te,Z,Ee,ue,ge,De,ie,me,ze,Re,ve,Le,Oe,st;function U(){Ye=new m3(L),Ye.init(),Le=new J2(L,Ye),Je=new l3(L,Ye,e,Le),Me=new Y2(L),gt=new _3(L),Pe=new I2,Ne=new Z2(L,Ye,Me,Pe,Je,Le,gt),R=new u3(v),M=new p3(v),B=new TS(L),Oe=new o3(L,B),Q=new g3(L,B,gt,Oe),te=new y3(L,Q,B,gt),ze=new x3(L,Je,Ne),De=new c3(Pe),Z=new U2(v,R,M,Ye,Je,Oe,De),Ee=new oT(v,Pe),ue=new O2,ge=new G2(Ye),me=new s3(v,R,M,Me,te,h,l),ie=new $2(v,te,Je),st=new aT(L,gt,Je,Me),Re=new a3(L,Ye,gt),ve=new v3(L,Ye,gt),gt.programs=Z.programs,v.capabilities=Je,v.extensions=Ye,v.properties=Pe,v.renderLists=ue,v.shadowMap=ie,v.state=Me,v.info=gt}U();const re=new rT(v,L);this.xr=re,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=Ye.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ye.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize($,W,!1))},this.getSize=function(T){return T.set($,W)},this.setSize=function(T,I,O=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,W=I,n.width=Math.floor(T*K),n.height=Math.floor(I*K),O===!0&&(n.style.width=T+"px",n.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set($*K,W*K).floor()},this.setDrawingBufferSize=function(T,I,O){$=T,W=I,K=O,n.width=Math.floor(T*O),n.height=Math.floor(I*O),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(J)},this.setViewport=function(T,I,O,k){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,I,O,k),Me.viewport(S.copy(J).multiplyScalar(K).round())},this.getScissor=function(T){return T.copy(ae)},this.setScissor=function(T,I,O,k){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,I,O,k),Me.scissor(N.copy(ae).multiplyScalar(K).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(T){Me.setScissorTest(Se=T)},this.setOpaqueSort=function(T){D=T},this.setTransparentSort=function(T){Y=T},this.getClearColor=function(T){return T.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(T=!0,I=!0,O=!0){let k=0;if(T){let F=!1;if(C!==null){const oe=C.texture.format;F=oe===kf||oe===Of||oe===Ff}if(F){const oe=C.texture.type,he=oe===pi||oe===Ar||oe===No||oe===Rs||oe===Uf||oe===If,_e=me.getClearColor(),xe=me.getClearAlpha(),Ce=_e.r,Ae=_e.g,Te=_e.b;he?(m[0]=Ce,m[1]=Ae,m[2]=Te,m[3]=xe,L.clearBufferuiv(L.COLOR,0,m)):(_[0]=Ce,_[1]=Ae,_[2]=Te,_[3]=xe,L.clearBufferiv(L.COLOR,0,_))}else k|=L.COLOR_BUFFER_BIT}I&&(k|=L.DEPTH_BUFFER_BIT),O&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",j,!1),n.removeEventListener("webglcontextrestored",X,!1),n.removeEventListener("webglcontextcreationerror",le,!1),ue.dispose(),ge.dispose(),Pe.dispose(),R.dispose(),M.dispose(),te.dispose(),Oe.dispose(),st.dispose(),Z.dispose(),re.dispose(),re.removeEventListener("sessionstart",On),re.removeEventListener("sessionend",Gf),tr.stop()};function j(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=gt.autoReset,I=ie.enabled,O=ie.autoUpdate,k=ie.needsUpdate,F=ie.type;U(),gt.autoReset=T,ie.enabled=I,ie.autoUpdate=O,ie.needsUpdate=k,ie.type=F}function le(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function we(T){const I=T.target;I.removeEventListener("dispose",we),He(I)}function He(T){vt(T),Pe.remove(T)}function vt(T){const I=Pe.get(T).programs;I!==void 0&&(I.forEach(function(O){Z.releaseProgram(O)}),T.isShaderMaterial&&Z.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,O,k,F,oe){I===null&&(I=Fe);const he=F.isMesh&&F.matrixWorld.determinant()<0,_e=gv(T,I,O,k,F);Me.setMaterial(k,he);let xe=O.index,Ce=1;if(k.wireframe===!0){if(xe=Q.getWireframeAttribute(O),xe===void 0)return;Ce=2}const Ae=O.drawRange,Te=O.attributes.position;let je=Ae.start*Ce,ut=(Ae.start+Ae.count)*Ce;oe!==null&&(je=Math.max(je,oe.start*Ce),ut=Math.min(ut,(oe.start+oe.count)*Ce)),xe!==null?(je=Math.max(je,0),ut=Math.min(ut,xe.count)):Te!=null&&(je=Math.max(je,0),ut=Math.min(ut,Te.count));const dt=ut-je;if(dt<0||dt===1/0)return;Oe.setup(F,k,_e,O,xe);let nn,Xe=Re;if(xe!==null&&(nn=B.get(xe),Xe=ve,Xe.setIndex(nn)),F.isMesh)k.wireframe===!0?(Me.setLineWidth(k.wireframeLinewidth*ct()),Xe.setMode(L.LINES)):Xe.setMode(L.TRIANGLES);else if(F.isLine){let ye=k.linewidth;ye===void 0&&(ye=1),Me.setLineWidth(ye*ct()),F.isLineSegments?Xe.setMode(L.LINES):F.isLineLoop?Xe.setMode(L.LINE_LOOP):Xe.setMode(L.LINE_STRIP)}else F.isPoints?Xe.setMode(L.POINTS):F.isSprite&&Xe.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Xe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))Xe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const ye=F._multiDrawStarts,Nt=F._multiDrawCounts,qe=F._multiDrawCount,Tn=xe?B.get(xe).bytesPerElement:1,Nr=Pe.get(k).currentProgram.getUniforms();for(let rn=0;rn<qe;rn++)Nr.setValue(L,"_gl_DrawID",rn),Xe.render(ye[rn]/Tn,Nt[rn])}else if(F.isInstancedMesh)Xe.renderInstances(je,dt,F.count);else if(O.isInstancedBufferGeometry){const ye=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Nt=Math.min(O.instanceCount,ye);Xe.renderInstances(je,dt,Nt)}else Xe.render(je,dt)};function bt(T,I,O){T.transparent===!0&&T.side===ri&&T.forceSinglePass===!1?(T.side=tn,T.needsUpdate=!0,jo(T,I,O),T.side=qi,T.needsUpdate=!0,jo(T,I,O),T.side=ri):jo(T,I,O)}this.compile=function(T,I,O=null){O===null&&(O=T),p=ge.get(O),p.init(I),g.push(p),O.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),T!==O&&T.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const k=new Set;return T.traverse(function(F){const oe=F.material;if(oe)if(Array.isArray(oe))for(let he=0;he<oe.length;he++){const _e=oe[he];bt(_e,O,F),k.add(_e)}else bt(oe,O,F),k.add(oe)}),g.pop(),p=null,k},this.compileAsync=function(T,I,O=null){const k=this.compile(T,I,O);return new Promise(F=>{function oe(){if(k.forEach(function(he){Pe.get(he).currentProgram.isReady()&&k.delete(he)}),k.size===0){F(T);return}setTimeout(oe,10)}Ye.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let We=null;function Yn(T){We&&We(T)}function On(){tr.stop()}function Gf(){tr.start()}const tr=new sv;tr.setAnimationLoop(Yn),typeof self<"u"&&tr.setContext(self),this.setAnimationLoop=function(T){We=T,re.setAnimationLoop(T),T===null?tr.stop():tr.start()},re.addEventListener("sessionstart",On),re.addEventListener("sessionend",Gf),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(I),I=re.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,I,C),p=ge.get(T,g.length),p.init(I),g.push(p),de.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ve.setFromProjectionMatrix(de),ne=this.localClippingEnabled,H=De.init(this.clippingPlanes,ne),x=ue.get(T,u.length),x.init(),u.push(x),re.enabled===!0&&re.isPresenting===!0){const oe=v.xr.getDepthSensingMesh();oe!==null&&Zl(oe,I,-1/0,v.sortObjects)}Zl(T,I,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(D,Y),Be=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Be&&me.addToRenderList(x,T),this.info.render.frame++,H===!0&&De.beginShadows();const O=p.state.shadowsArray;ie.render(O,T,I),H===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=x.opaque,F=x.transmissive;if(p.setupLights(),I.isArrayCamera){const oe=I.cameras;if(F.length>0)for(let he=0,_e=oe.length;he<_e;he++){const xe=oe[he];jf(k,F,T,xe)}Be&&me.render(T);for(let he=0,_e=oe.length;he<_e;he++){const xe=oe[he];Wf(x,T,xe,xe.viewport)}}else F.length>0&&jf(k,F,T,I),Be&&me.render(T),Wf(x,T,I);C!==null&&(Ne.updateMultisampleRenderTarget(C),Ne.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(v,T,I),Oe.resetDefaultState(),b=-1,w=null,g.pop(),g.length>0?(p=g[g.length-1],H===!0&&De.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function Zl(T,I,O,k){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)O=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ve.intersectsSprite(T)){k&&be.setFromMatrixPosition(T.matrixWorld).applyMatrix4(de);const he=te.update(T),_e=T.material;_e.visible&&x.push(T,he,_e,O,be.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ve.intersectsObject(T))){const he=te.update(T),_e=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),be.copy(T.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),be.copy(he.boundingSphere.center)),be.applyMatrix4(T.matrixWorld).applyMatrix4(de)),Array.isArray(_e)){const xe=he.groups;for(let Ce=0,Ae=xe.length;Ce<Ae;Ce++){const Te=xe[Ce],je=_e[Te.materialIndex];je&&je.visible&&x.push(T,he,je,O,be.z,Te)}}else _e.visible&&x.push(T,he,_e,O,be.z,null)}}const oe=T.children;for(let he=0,_e=oe.length;he<_e;he++)Zl(oe[he],I,O,k)}function Wf(T,I,O,k){const F=T.opaque,oe=T.transmissive,he=T.transparent;p.setupLightsView(O),H===!0&&De.setGlobalState(v.clippingPlanes,O),k&&Me.viewport(S.copy(k)),F.length>0&&Wo(F,I,O),oe.length>0&&Wo(oe,I,O),he.length>0&&Wo(he,I,O),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function jf(T,I,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Rr(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?ko:pi,minFilter:_r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const oe=p.state.transmissionRenderTarget[k.id],he=k.viewport||S;oe.setSize(he.z,he.w);const _e=v.getRenderTarget();v.setRenderTarget(oe),v.getClearColor(V),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),Be?me.render(O):v.clear();const xe=v.toneMapping;v.toneMapping=Wi;const Ce=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),H===!0&&De.setGlobalState(v.clippingPlanes,k),Wo(T,O,k),Ne.updateMultisampleRenderTarget(oe),Ne.updateRenderTargetMipmap(oe),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let Te=0,je=I.length;Te<je;Te++){const ut=I[Te],dt=ut.object,nn=ut.geometry,Xe=ut.material,ye=ut.group;if(Xe.side===ri&&dt.layers.test(k.layers)){const Nt=Xe.side;Xe.side=tn,Xe.needsUpdate=!0,Xf(dt,O,k,nn,Xe,ye),Xe.side=Nt,Xe.needsUpdate=!0,Ae=!0}}Ae===!0&&(Ne.updateMultisampleRenderTarget(oe),Ne.updateRenderTargetMipmap(oe))}v.setRenderTarget(_e),v.setClearColor(V,q),Ce!==void 0&&(k.viewport=Ce),v.toneMapping=xe}function Wo(T,I,O){const k=I.isScene===!0?I.overrideMaterial:null;for(let F=0,oe=T.length;F<oe;F++){const he=T[F],_e=he.object,xe=he.geometry,Ce=k===null?he.material:k,Ae=he.group;_e.layers.test(O.layers)&&Xf(_e,I,O,xe,Ce,Ae)}}function Xf(T,I,O,k,F,oe){T.onBeforeRender(v,I,O,k,F,oe),T.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.transparent===!0&&F.side===ri&&F.forceSinglePass===!1?(F.side=tn,F.needsUpdate=!0,v.renderBufferDirect(O,I,k,F,T,oe),F.side=qi,F.needsUpdate=!0,v.renderBufferDirect(O,I,k,F,T,oe),F.side=ri):v.renderBufferDirect(O,I,k,F,T,oe),T.onAfterRender(v,I,O,k,F,oe)}function jo(T,I,O){I.isScene!==!0&&(I=Fe);const k=Pe.get(T),F=p.state.lights,oe=p.state.shadowsArray,he=F.state.version,_e=Z.getParameters(T,F.state,oe,I,O),xe=Z.getProgramCacheKey(_e);let Ce=k.programs;k.environment=T.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(T.isMeshStandardMaterial?M:R).get(T.envMap||k.environment),k.envMapRotation=k.environment!==null&&T.envMap===null?I.environmentRotation:T.envMapRotation,Ce===void 0&&(T.addEventListener("dispose",we),Ce=new Map,k.programs=Ce);let Ae=Ce.get(xe);if(Ae!==void 0){if(k.currentProgram===Ae&&k.lightsStateVersion===he)return $f(T,_e),Ae}else _e.uniforms=Z.getUniforms(T),T.onBeforeCompile(_e,v),Ae=Z.acquireProgram(_e,xe),Ce.set(xe,Ae),k.uniforms=_e.uniforms;const Te=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Te.clippingPlanes=De.uniform),$f(T,_e),k.needsLights=_v(T),k.lightsStateVersion=he,k.needsLights&&(Te.ambientLightColor.value=F.state.ambient,Te.lightProbe.value=F.state.probe,Te.directionalLights.value=F.state.directional,Te.directionalLightShadows.value=F.state.directionalShadow,Te.spotLights.value=F.state.spot,Te.spotLightShadows.value=F.state.spotShadow,Te.rectAreaLights.value=F.state.rectArea,Te.ltc_1.value=F.state.rectAreaLTC1,Te.ltc_2.value=F.state.rectAreaLTC2,Te.pointLights.value=F.state.point,Te.pointLightShadows.value=F.state.pointShadow,Te.hemisphereLights.value=F.state.hemi,Te.directionalShadowMap.value=F.state.directionalShadowMap,Te.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Te.spotShadowMap.value=F.state.spotShadowMap,Te.spotLightMatrix.value=F.state.spotLightMatrix,Te.spotLightMap.value=F.state.spotLightMap,Te.pointShadowMap.value=F.state.pointShadowMap,Te.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Ae,k.uniformsList=null,Ae}function qf(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=Ka.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function $f(T,I){const O=Pe.get(T);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.batchingColor=I.batchingColor,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.instancingMorph=I.instancingMorph,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function gv(T,I,O,k,F){I.isScene!==!0&&(I=Fe),Ne.resetTextureUnits();const oe=I.fog,he=k.isMeshStandardMaterial?I.environment:null,_e=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:er,xe=(k.isMeshStandardMaterial?M:R).get(k.envMap||he),Ce=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ae=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Te=!!O.morphAttributes.position,je=!!O.morphAttributes.normal,ut=!!O.morphAttributes.color;let dt=Wi;k.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(dt=v.toneMapping);const nn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Xe=nn!==void 0?nn.length:0,ye=Pe.get(k),Nt=p.state.lights;if(H===!0&&(ne===!0||T!==w)){const pn=T===w&&k.id===b;De.setState(k,T,pn)}let qe=!1;k.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Nt.state.version||ye.outputColorSpace!==_e||F.isBatchedMesh&&ye.batching===!1||!F.isBatchedMesh&&ye.batching===!0||F.isBatchedMesh&&ye.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&ye.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&ye.instancing===!1||!F.isInstancedMesh&&ye.instancing===!0||F.isSkinnedMesh&&ye.skinning===!1||!F.isSkinnedMesh&&ye.skinning===!0||F.isInstancedMesh&&ye.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&ye.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&ye.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&ye.instancingMorph===!1&&F.morphTexture!==null||ye.envMap!==xe||k.fog===!0&&ye.fog!==oe||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==De.numPlanes||ye.numIntersection!==De.numIntersection)||ye.vertexAlphas!==Ce||ye.vertexTangents!==Ae||ye.morphTargets!==Te||ye.morphNormals!==je||ye.morphColors!==ut||ye.toneMapping!==dt||ye.morphTargetsCount!==Xe)&&(qe=!0):(qe=!0,ye.__version=k.version);let Tn=ye.currentProgram;qe===!0&&(Tn=jo(k,I,F));let Nr=!1,rn=!1,Jl=!1;const _t=Tn.getUniforms(),_i=ye.uniforms;if(Me.useProgram(Tn.program)&&(Nr=!0,rn=!0,Jl=!0),k.id!==b&&(b=k.id,rn=!0),Nr||w!==T){_t.setValue(L,"projectionMatrix",T.projectionMatrix),_t.setValue(L,"viewMatrix",T.matrixWorldInverse);const pn=_t.map.cameraPosition;pn!==void 0&&pn.setValue(L,fe.setFromMatrixPosition(T.matrixWorld)),Je.logarithmicDepthBuffer&&_t.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&_t.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,rn=!0,Jl=!0)}if(F.isSkinnedMesh){_t.setOptional(L,F,"bindMatrix"),_t.setOptional(L,F,"bindMatrixInverse");const pn=F.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),_t.setValue(L,"boneTexture",pn.boneTexture,Ne))}F.isBatchedMesh&&(_t.setOptional(L,F,"batchingTexture"),_t.setValue(L,"batchingTexture",F._matricesTexture,Ne),_t.setOptional(L,F,"batchingIdTexture"),_t.setValue(L,"batchingIdTexture",F._indirectTexture,Ne),_t.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&_t.setValue(L,"batchingColorTexture",F._colorsTexture,Ne));const Ql=O.morphAttributes;if((Ql.position!==void 0||Ql.normal!==void 0||Ql.color!==void 0)&&ze.update(F,O,Tn),(rn||ye.receiveShadow!==F.receiveShadow)&&(ye.receiveShadow=F.receiveShadow,_t.setValue(L,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(_i.envMap.value=xe,_i.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(_i.envMapIntensity.value=I.environmentIntensity),rn&&(_t.setValue(L,"toneMappingExposure",v.toneMappingExposure),ye.needsLights&&vv(_i,Jl),oe&&k.fog===!0&&Ee.refreshFogUniforms(_i,oe),Ee.refreshMaterialUniforms(_i,k,K,W,p.state.transmissionRenderTarget[T.id]),Ka.upload(L,qf(ye),_i,Ne)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ka.upload(L,qf(ye),_i,Ne),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&_t.setValue(L,"center",F.center),_t.setValue(L,"modelViewMatrix",F.modelViewMatrix),_t.setValue(L,"normalMatrix",F.normalMatrix),_t.setValue(L,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const pn=k.uniformsGroups;for(let ec=0,xv=pn.length;ec<xv;ec++){const Yf=pn[ec];st.update(Yf,Tn),st.bind(Yf,Tn)}}return Tn}function vv(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function _v(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,I,O){Pe.get(T.texture).__webglTexture=I,Pe.get(T.depthTexture).__webglTexture=O;const k=Pe.get(T);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=O===void 0,k.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,I){const O=Pe.get(T);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,O=0){C=T,P=I,A=O;let k=!0,F=null,oe=!1,he=!1;if(T){const xe=Pe.get(T);xe.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(L.FRAMEBUFFER,null),k=!1):xe.__webglFramebuffer===void 0?Ne.setupRenderTarget(T):xe.__hasExternalTextures&&Ne.rebindTextures(T,Pe.get(T.texture).__webglTexture,Pe.get(T.depthTexture).__webglTexture);const Ce=T.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(he=!0);const Ae=Pe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ae[I])?F=Ae[I][O]:F=Ae[I],oe=!0):T.samples>0&&Ne.useMultisampledRTT(T)===!1?F=Pe.get(T).__webglMultisampledFramebuffer:Array.isArray(Ae)?F=Ae[O]:F=Ae,S.copy(T.viewport),N.copy(T.scissor),G=T.scissorTest}else S.copy(J).multiplyScalar(K).floor(),N.copy(ae).multiplyScalar(K).floor(),G=Se;if(Me.bindFramebuffer(L.FRAMEBUFFER,F)&&k&&Me.drawBuffers(T,F),Me.viewport(S),Me.scissor(N),Me.setScissorTest(G),oe){const xe=Pe.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,xe.__webglTexture,O)}else if(he){const xe=Pe.get(T.texture),Ce=I||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.__webglTexture,O||0,Ce)}b=-1},this.readRenderTargetPixels=function(T,I,O,k,F,oe,he){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){Me.bindFramebuffer(L.FRAMEBUFFER,_e);try{const xe=T.texture,Ce=xe.format,Ae=xe.type;if(!Je.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-k&&O>=0&&O<=T.height-F&&L.readPixels(I,O,k,F,Le.convert(Ce),Le.convert(Ae),oe)}finally{const xe=C!==null?Pe.get(C).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(T,I,O,k,F,oe,he){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){Me.bindFramebuffer(L.FRAMEBUFFER,_e);try{const xe=T.texture,Ce=xe.format,Ae=xe.type;if(!Je.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=T.width-k&&O>=0&&O<=T.height-F){const Te=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.bufferData(L.PIXEL_PACK_BUFFER,oe.byteLength,L.STREAM_READ),L.readPixels(I,O,k,F,Le.convert(Ce),Le.convert(Ae),0),L.flush();const je=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await Jy(L,je,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,oe)}finally{L.deleteBuffer(Te),L.deleteSync(je)}return oe}}finally{const xe=C!==null?Pe.get(C).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,xe)}}},this.copyFramebufferToTexture=function(T,I=null,O=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,T=arguments[1]);const k=Math.pow(2,-O),F=Math.floor(T.image.width*k),oe=Math.floor(T.image.height*k),he=I!==null?I.x:0,_e=I!==null?I.y:0;Ne.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,O,0,0,he,_e,F,oe),Me.unbindTexture()},this.copyTextureToTexture=function(T,I,O=null,k=null,F=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1],I=arguments[2],F=arguments[3]||0,O=null);let oe,he,_e,xe,Ce,Ae;O!==null?(oe=O.max.x-O.min.x,he=O.max.y-O.min.y,_e=O.min.x,xe=O.min.y):(oe=T.image.width,he=T.image.height,_e=0,xe=0),k!==null?(Ce=k.x,Ae=k.y):(Ce=0,Ae=0);const Te=Le.convert(I.format),je=Le.convert(I.type);Ne.setTexture2D(I,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const ut=L.getParameter(L.UNPACK_ROW_LENGTH),dt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),nn=L.getParameter(L.UNPACK_SKIP_PIXELS),Xe=L.getParameter(L.UNPACK_SKIP_ROWS),ye=L.getParameter(L.UNPACK_SKIP_IMAGES),Nt=T.isCompressedTexture?T.mipmaps[F]:T.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Nt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Nt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,_e),L.pixelStorei(L.UNPACK_SKIP_ROWS,xe),T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,Ce,Ae,oe,he,Te,je,Nt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,Ce,Ae,Nt.width,Nt.height,Te,Nt.data):L.texSubImage2D(L.TEXTURE_2D,F,Ce,Ae,oe,he,Te,je,Nt),L.pixelStorei(L.UNPACK_ROW_LENGTH,ut),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,dt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,nn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Xe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ye),F===0&&I.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(T,I,O=null,k=null,F=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,k=arguments[1]||null,T=arguments[2],I=arguments[3],F=arguments[4]||0);let oe,he,_e,xe,Ce,Ae,Te,je,ut;const dt=T.isCompressedTexture?T.mipmaps[F]:T.image;O!==null?(oe=O.max.x-O.min.x,he=O.max.y-O.min.y,_e=O.max.z-O.min.z,xe=O.min.x,Ce=O.min.y,Ae=O.min.z):(oe=dt.width,he=dt.height,_e=dt.depth,xe=0,Ce=0,Ae=0),k!==null?(Te=k.x,je=k.y,ut=k.z):(Te=0,je=0,ut=0);const nn=Le.convert(I.format),Xe=Le.convert(I.type);let ye;if(I.isData3DTexture)Ne.setTexture3D(I,0),ye=L.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)Ne.setTexture2DArray(I,0),ye=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const Nt=L.getParameter(L.UNPACK_ROW_LENGTH),qe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Tn=L.getParameter(L.UNPACK_SKIP_PIXELS),Nr=L.getParameter(L.UNPACK_SKIP_ROWS),rn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,dt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,dt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ce),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ae),T.isDataTexture||T.isData3DTexture?L.texSubImage3D(ye,F,Te,je,ut,oe,he,_e,nn,Xe,dt.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(ye,F,Te,je,ut,oe,he,_e,nn,dt.data):L.texSubImage3D(ye,F,Te,je,ut,oe,he,_e,nn,Xe,dt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Nt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,qe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Tn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Nr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,rn),F===0&&I.generateMipmaps&&L.generateMipmap(ye),Me.unbindTexture()},this.initRenderTarget=function(T){Pe.get(T).__webglFramebuffer===void 0&&Ne.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ne.setTextureCube(T,0):T.isData3DTexture?Ne.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ne.setTexture2DArray(T,0):Ne.setTexture2D(T,0),Me.unbindTexture()},this.resetState=function(){P=0,A=0,C=null,Me.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Bf?"display-p3":"srgb",n.unpackColorSpace=Ke.workingColorSpace===$l?"display-p3":"srgb"}}class cT extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nf);const uT=({text:t,fontSize:e=80,fontFamily:n="Roboto Light"})=>{const i=se.useRef(null);return se.useEffect(()=>{let r,s,o,a,l;const c=`
      precision mediump float;
      uniform float time;
      uniform float mouseX;
      uniform float mouseY;
      uniform sampler2D u_texture;
      varying vec2 vUv;

      void main() {
        float d = -distance(vec2(mouseX, mouseY), gl_FragCoord.xy);
        float r = dot(gl_FragCoord.xy, vec2(0.005, 0.005)) / d;
        vec2 tex = vec2(vUv.x + r, vUv.y + r);
        vec4 texColor = texture2D(u_texture, tex);
        if (texColor.a < 0.1) discard; // Make the background transparent
        gl_FragColor = vec4(texColor.rgb, texColor.a);
      }
    `,d=`
      precision mediump float;
      varying vec2 vUv;
      uniform float time;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,f=i.current,h=(u,g,v)=>{const y=document.createElement("canvas");y.height=v,y.width=g;const P=y.getContext("2d");P.clearRect(0,0,y.width,y.height),P.font=`300 ${e}px ${n}`,P.fillStyle="#000000";const A=P.measureText(u).width;return P.fillText(u,(y.width-A)/2,y.height/2),y},m=()=>{const u=f.clientWidth/f.clientHeight,g=10,v=g*u,y={aspect:f.clientWidth/f.clientHeight,near:.1,far:1e4,z:g},P=2*Math.atan(g/(2*y.z))*(180/Math.PI);o=new _n(P,y.aspect,y.near,y.far),o.position.z=y.z,s=new cT,s.add(o),r=new lT({antialias:!0,alpha:!0}),r.setSize(f.clientWidth,f.clientHeight),r.domElement.className="custom-canvas",f.innerHTML="",f.appendChild(r.domElement);const A=new jt(h(t,2048,512));A.needsUpdate=!0;const C=new Go(v,g);l={u_texture:{type:"t",value:A},time:{type:"f",value:0},mouseX:{type:"f",value:0},mouseY:{type:"f",value:0}};const b=new gi({uniforms:l,vertexShader:d,fragmentShader:c,transparent:!0});a=new jn(C,b),s.add(a)},_=()=>{requestAnimationFrame(_),r.render(s,o),l.time.value+=.1},x=u=>{const g=f.getBoundingClientRect();l.mouseX.value=u.clientX-g.left,l.mouseY.value=g.height-(u.clientY-g.top)},p=()=>{m()};return window.addEventListener("resize",p),window.addEventListener("mousemove",x),m(),_(),()=>{window.removeEventListener("resize",p),window.removeEventListener("mousemove",x),f.removeChild(r.domElement)}},[t,e,n]),E.jsx("div",{ref:i,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"transparent"}})},nu="/portfolio/",dT=[{title:"Maufeb Mode",subtitle:"Boutique en ligne",description:E.jsxs(E.Fragment,{children:[E.jsx("p",{children:"Dans ce projet, j'ai utilisé un CMS pour créer l'e-shop de la marque Maufeb Mode. La créatrice m'a contacté car elle n'avait aucune compétence en développement web et en communication. Elle m'a demandé de gérer toute la partie digitale de son projet. Elle s'est lancée en investissant pas mal d'argent dans la création de ses produits, donc il lui fallait rapidement générer des revenus. C'est pourquoi je lui ai proposé de créer rapidement une boutique en ligne afin de rendre ses articles disponibles et de toucher un plus large .."}),E.jsx("p",{children:"J'ai donc utilisé un CMS pour créer son site et j'ai également géré la partie communication en créant des visuels pour ses réseaux sociaux. Je l'ai aidée à refaire son logo selon ses souhaits, en utilisant la suite Adobe et notamment Illustrator. J'ai également géré la partie SEO pour qu'elle soit bien référencée sur Google. Ce site est une version de base car il fallait rapidement réaliser des ventes. Je travaille encore activement sur ce projet pour lui créer un site plus complet, plus personnel et plus professionnel, avec WordPress."})]}),link:"https://www.maufeb-mode.com/",imgSrc:`${nu}assets/images/projets/maufeb.png`},{title:"Jeevons Website",subtitle:"Création de mon site Internet",description:E.jsxs(E.Fragment,{children:[E.jsx("p",{children:"Je suis actuellement en train de développer mon propre site internet, un site vitrine utilisant Next.js avec Vite, et PostgreSQL. Pour l'instant il n'y a que la page portfolio et contact de disponible. Next.js me permet de gérer à la fois le front-end et le back-end avec React"}),E.jsx("p",{children:"Le projet est né de mon besoin de créer un portfolio. Cependant, la création d'un portfolio simple ne me semblait pas assez stimulante. Je voulais un projet qui me permettrait de découvrir des fonctionnalités avancées en JavaScript et React. Avec ce site je touche à React pour la première fois. En utilisant Next.js, je peux tirer parti de fonctionnalités telles que le rendu côté serveur (SSR) et la génération de sites statiques (SSG). Je me sert aussi de quelques librairies comme Three.js pour faire du rendu 3D"}),E.jsx("p",{children:"J'ai donc décidé de créer un site complet qui représenterait mon univers et ma personnalité. Ce site ne sera pas seulement un portfolio, mais également un moyen de découvrir ma personne. Mon objectif est de construire un espace en ligne qui non seulement affiche mes compétences, mais aussi reflète ma passion pour la programmation et les technologies modernes."})]}),link:"/",imgSrc:`${nu}assets/images/projets/jeevonsWebsite.png`},{title:"Quantum Website",subtitle:"Projet de fin d'année",description:E.jsxs(E.Fragment,{children:[E.jsx("p",{children:"Nous sommes des brasseurs, mais avant tout, des conteurs et des rêveurs. Chaque bière que nous créons est infusée avec une histoire, un voyage à entreprendre, une expérience à vivre. Nous puisons notre inspiration dans les mystères de la physique quantique, où l'impossible devient possible, et nous l'infusons dans l'art de la brasserie pour créer quelque chose d'unique : des bières qui ne sont pas seulement à boire, mais aussi à vivre."}),E.jsx("p",{children:"Sur ce projet, nous avons créé une marque de bière fictive. Du concept au site web, en passant par toute l'identité marketing et artistique, nous avons réalisé de A à Z ce que nous avons ironiquement nommé : Un voyage à travers l'écho des vibrations de l'espace-temps."}),E.jsx("p",{children:"La plupart des illustrations, le logo et les designs ont été réalisés sur Adobe Illustrator et Photoshop. Les .ités ont été montées à l'aide de Premiere Pro, et After Effect, et nous avons développé notre site web avec PHP, JavaScript, HTML et CSS."}),E.jsx("p",{children:"Ce projet est une petite fierté pour moi car il reflète un peu ma vision du monde et de l'univers. C'est une aventure, une invitation à expérimenter. Nous avons mis en œuvre un procédé narratif pour raconter une histoire. Nous ne voulions pas simplement créer une marque de bière, mais surtout montrer une autre vision du monde. Je me suis principalement occupé du site web. J'ai utilisé PHP pour le backend et JavaScript pour le front. Les données sont gérées par une base de données MySQL. Sur le site, j'ai codé toutes les pages sauf la page 'About Us' et la page 'Fiche de bières'. Je me suis occupé des commentaires, du panier, ainsi que des composants communs comme le header et le footer. J'ai aussi codé la vérification de l'âge de l'utilisateur et supervisé la gestion des sessions et des données."})]}),link:"https://quantum.2024.mmibut1.org/index.php",imgSrc:`${nu}assets/images/projets/quantum.png`}],fT=()=>E.jsxs("div",{className:"projects",children:[E.jsx("div",{className:"section-title",children:E.jsx("h1",{children:"Projets"})}),E.jsx("div",{className:"projects-container",children:dT.map((t,e)=>E.jsxs("div",{className:"prBox",children:[E.jsxs("div",{className:"prLeft",children:[E.jsx("div",{className:"prImg",children:E.jsx("img",{src:t.imgSrc,alt:t.title})}),E.jsx("div",{className:"prTitle",style:{position:"relative",height:"100px"},children:E.jsx(uT,{text:t.title,fontSize:280,fontFamily:"Formula"})})]}),E.jsxs("div",{className:"prRight",children:[E.jsx("div",{className:"prSubtitle",children:E.jsx("h3",{children:t.subtitle})}),E.jsx("div",{className:"prDescription",children:t.description}),E.jsx("div",{className:"prLink-Btn",children:t.link.startsWith("http")?E.jsx("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",children:"Voir projets"}):E.jsx(Mt,{to:t.link,target:"_blank",className:"proLink",children:"Voir projets"})})]})]},e))})]}),hT=()=>E.jsxs(E.Fragment,{children:[E.jsx(Q1,{}),E.jsx(ey,{}),E.jsx(fT,{})]}),pT=()=>E.jsx(E.Fragment,{children:E.jsx(Fs,{})}),mT=()=>E.jsx(E.Fragment,{children:E.jsx(Fs,{})}),gT=()=>E.jsx(E.Fragment,{children:E.jsx(Fs,{})}),vT=()=>E.jsxs(O1,{children:[E.jsx(Bn,{path:"/",element:E.jsx($1,{})}),E.jsx(Bn,{path:"/programming",element:E.jsx(pT,{})}),E.jsx(Bn,{path:"/astronomie",element:E.jsx(Z1,{})}),E.jsx(Bn,{path:"/design",element:E.jsx(mT,{})}),E.jsx(Bn,{path:"/hobbies",element:E.jsx(Y1,{})}),E.jsx(Bn,{path:"/projets",element:E.jsx(hT,{})}),E.jsx(Bn,{path:"/biographie",element:E.jsx(K1,{})}),E.jsx(Bn,{path:"/contact",element:E.jsx(J1,{})}),E.jsx(Bn,{path:"/privacy",element:E.jsx(gT,{})})]});var dv={exports:{}},_T="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",xT=_T,yT=xT;function fv(){}function hv(){}hv.resetWarningCache=fv;var ST=function(){function t(i,r,s,o,a,l){if(l!==yT){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:hv,resetWarningCache:fv};return n.PropTypes=n,n};dv.exports=ST();var MT=dv.exports;const Pl=Nd(MT),pv=({isHomePage:t})=>{const e=se.useRef(null),n=se.useRef(null),i=se.useRef(null),r=se.useRef(null),s=se.useRef(null);return se.useEffect(()=>{const o=e.current,a=n.current,l=i.current;let c=0;const d=x=>{const p=Date.now();p-c<16||(c=p,o.style.left=`${x.clientX}px`,o.style.top=`${x.clientY}px`,a.style.left=`${x.clientX}px`,a.style.top=`${x.clientY}px`,l.style.left=`${x.clientX}px`,l.style.top=`${x.clientY}px`,t&&(a.classList.add("hover"),l.classList.add("hover"),s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{a.classList.remove("hover"),l.classList.remove("hover")},1e3)))},f=()=>{t||(a.classList.add("hover"),l.classList.add("hover"))},h=()=>{a.classList.remove("hover"),l.classList.remove("hover")},m=x=>{r.current&&cancelAnimationFrame(r.current),r.current=requestAnimationFrame(()=>d(x))};document.body.addEventListener("mousemove",m);const _=document.querySelectorAll(".hover-target");return _.forEach(x=>{x.addEventListener("mouseover",f),x.addEventListener("mouseout",h)}),()=>{document.body.removeEventListener("mousemove",m),_.forEach(x=>{x.removeEventListener("mouseover",f),x.removeEventListener("mouseout",h)}),s.current&&clearTimeout(s.current)}},[t]),E.jsxs(E.Fragment,{children:[E.jsx("div",{className:"cursor",id:"cursor",ref:e}),E.jsx("div",{className:"cursor2",id:"cursor2",ref:n}),E.jsx("div",{className:"cursor3",id:"cursor3",ref:i})]})};pv.propTypes={isHomePage:Pl.bool.isRequired};const ET=[{path:"/",label:"Home",number:"(01)"},{path:"/programming",label:"Programmation",number:"(02)"},{path:"/astronomie",label:"Astronomie",number:"(03)"},{path:"/design",label:"My Art",number:"(04)"},{path:"/hobbies",label:"Hobbies",number:"(05)"},{path:"/projets",label:"Portfolio",number:"(06)"},{path:"/biographie",label:"Biographie",number:"(07)"},{path:"/contact",label:"Contact",number:"(08)"}],TT=()=>E.jsxs("section",{className:"sitemap",children:[E.jsx("div",{className:"sitemap-header",children:E.jsx("h1",{className:"hover-target",children:"Plan du site"})}),E.jsx("div",{className:"sitemap-body",children:E.jsx("ul",{className:"sitemap-list",children:ET.map((t,e)=>E.jsx("li",{className:"sitemap-item",children:E.jsxs(Mt,{to:t.path,className:"sitemap-link",children:[E.jsx("span",{children:t.label}),E.jsx("span",{className:"sitemap-item-numb",children:t.number})]})},e))})})]}),wT=[{path:"https://www.linkedin.com/in/jeevons-eya-jr-iq-3660a7297/",label:"LinkedIn"},{path:"https://www.instagram.com/jeevons__?igsh=NDh3eWYyaXE2MHl5&utm_source=qr",label:"Instagram"}],CT=()=>E.jsx("div",{className:"footer-nav footer-social",children:E.jsx("ul",{className:"social-list",children:wT.map((t,e)=>E.jsx("li",{className:"social-item",children:E.jsx(Mt,{to:t.path,className:"social-link hover-target",target:"_blank",children:t.label})},e))})}),AT=["1 rue du Terme Boréal, 77127 Lieusiant France","306 RUE VICTOR HUGO, 37000 Tours France","07.81.38.43.95","jeevons.eya.jr@gmail.com"],RT=()=>E.jsx("div",{className:"footer-adress",children:E.jsx("ul",{className:"adress-list",children:AT.map((t,e)=>E.jsx("li",{className:"adress-item",children:E.jsx("p",{children:t})},e))})}),PT=[{path:"/privacy",label:"Politique de confidentialité"},{path:"/biographie",label:"Biographie"}],LT=()=>E.jsx("ul",{className:"footer-privacy",children:PT.map((t,e)=>E.jsx("li",{className:"privacy-item",children:E.jsx(Mt,{to:t.path,className:"privacy-link hover-target",children:t.label})},e))}),bT=()=>E.jsx("div",{className:"footer-logo",children:E.jsx(Mt,{to:"/",className:"logo hover-target",children:E.jsx("img",{src:"/portfolio/assets/logos/jeevonsLogo.png",alt:"Jeevons Logo"})})}),NT=()=>E.jsxs("footer",{className:`footer ${location.pathname==="/design"||location.pathname==="/projets"?"footer-designPage":""}`,children:[E.jsx(TT,{}),E.jsxs("div",{className:"footer-content",children:[E.jsx("div",{className:"footer-nav footer-press",children:E.jsx("h2",{className:"hover-target",children:"Let's shape the future"})}),E.jsx(CT,{}),E.jsx(RT,{}),E.jsx(LT,{}),E.jsx(bT,{}),E.jsx("div",{className:"footer-copyright",children:E.jsx("p",{children:"© 2024 // Jeevons Eya Jr. All rights reserved."})})]})]}),mv=({onClick:t})=>E.jsx("div",{className:"nav-but-wrap",children:E.jsxs("div",{className:"menu-icon hover-target",onClick:t,children:[E.jsx("span",{className:`menu-icon__line menu-icon__line-left ${location.pathname==="/design"||location.pathname==="/projets"?"menu-icon__line-designPage":""}`}),E.jsx("span",{className:`menu-icon__line ${location.pathname==="/design"||location.pathname==="/projets"?"menu-icon__line-designPage":""}`}),E.jsx("span",{className:`menu-icon__line menu-icon__line-right ${location.pathname==="/design"||location.pathname==="/projets"?"menu-icon__line-designPage":""}`})]})});mv.propTypes={onClick:Pl.func.isRequired};const DT=()=>E.jsx("nav",{className:"navMenu",children:E.jsxs("ul",{className:"navList",children:[E.jsx("li",{children:E.jsx(Mt,{to:"/projets",className:"navItem hover-target",children:"Portfolio"})}),E.jsx("li",{children:E.jsx(Mt,{to:"/biographie",className:"navItem hover-target",children:"qui suis-je ?"})}),E.jsx("li",{children:E.jsx(Mt,{to:"/contact",className:"navItem hover-target",children:"Contact"})})]})}),UT=E.jsxs("svg",{fill:"#000000",height:"20px",width:"20px",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 56 56",xmlSpace:"preserve",stroke:"#000000",children:[E.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),E.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),E.jsx("g",{id:"SVGRepo_iconCarrier",children:E.jsxs("g",{children:[E.jsx("path",{d:"M54.424,28.382c0.101-0.244,0.101-0.519,0-0.764c-0.051-0.123-0.125-0.234-0.217-0.327L42.208,15.293 c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L51.087,27H20.501c-0.552,0-1,0.447-1,1s0.448,1,1,1h30.586L40.794,39.293 c-0.391,0.391-0.391,1.023,0,1.414C40.989,40.902,41.245,41,41.501,41s0.512-0.098,0.707-0.293l11.999-11.999 C54.299,28.616,54.373,28.505,54.424,28.382z"}),E.jsx("path",{d:"M36.501,33c-0.552,0-1,0.447-1,1v20h-32V2h32v20c0,0.553,0.448,1,1,1s1-0.447,1-1V1c0-0.553-0.448-1-1-1h-34 c-0.552,0-1,0.447-1,1v54c0,0.553,0.448,1,1,1h34c0.552,0,1-0.447,1-1V34C37.501,33.447,37.053,33,36.501,33z"})]})})]}),Hf=se.forwardRef(({isNavActive:t,onLinkClick:e},n)=>{const i=Qi();return E.jsx("div",{className:`nav ${t?"active":""}`,ref:n,children:E.jsx("div",{className:"nav__content",children:E.jsxs("ul",{className:"nav__list",children:[E.jsx("li",{className:`nav__list-item ${i.pathname==="/programming"?"active-nav":""}`,children:E.jsx(Mt,{to:"/programming",className:"hover-target",onClick:e,children:"Programmation"})}),E.jsx("li",{className:`nav__list-item ${i.pathname==="/astronomie"?"active-nav":""}`,children:E.jsx(Mt,{to:"/astronomie",className:"hover-target",onClick:e,children:"Astronomie"})}),E.jsx("li",{className:`nav__list-item ${i.pathname==="/design"?"active-nav":""}`,children:E.jsx(Mt,{to:"/design",className:"hover-target",onClick:e,children:"My Art"})}),E.jsx("li",{className:`nav__list-item ${i.pathname==="/hobbies"?"active-nav":""}`,children:E.jsx(Mt,{to:"/hobbies",className:"hover-target",onClick:e,children:"Hobbies"})}),E.jsx("li",{className:`nav__list-item ${i.pathname==="/projets"?"active-nav":""}`,children:E.jsx(Mt,{to:"/projets",className:"hover-target",onClick:e,children:"Projets"})}),E.jsx("li",{className:`nav__list-item ${i.pathname==="/biographie"?"active-nav":""}`,children:E.jsx(Mt,{to:"/biographie",className:"hover-target",onClick:e,children:"Biographie"})}),E.jsx("li",{className:`nav__list-item ${i.pathname==="/contact"?"active-nav":""}`,children:E.jsx(Mt,{to:"/contact",className:"hover-target",onClick:e,children:"Contact"})}),E.jsx("li",{className:"nav__list-item5",children:E.jsx(Mt,{to:"/",className:"hover-target",onClick:e,children:UT})})]})})})});Hf.propTypes={isNavActive:Pl.bool.isRequired,onLinkClick:Pl.func.isRequired};Hf.displayName="DropdownMenus";const IT=()=>{const t=se.useRef(null),e=se.useRef(null),[n,i]=se.useState(!1),r=()=>{i(!n)},s=o=>{e.current&&!e.current.contains(o.target)&&t.current&&!t.current.contains(o.target)&&i(!1)};return se.useEffect(()=>(document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}),[]),se.useEffect(()=>{const o=document.body;n?o.classList.add("nav-active"):o.classList.remove("nav-active")},[n]),E.jsxs(E.Fragment,{children:[E.jsxs("header",{ref:t,className:`header-fixed ${location.pathname==="/design"||location.pathname==="/projets"?"header-design":""}`,children:[E.jsx(mv,{onClick:r}),E.jsx(DT,{})]}),E.jsx(Hf,{ref:e,isNavActive:n,onLinkClick:()=>i(!1)})]})},FT=()=>{const t=Qi(),e=t.pathname==="/",n=t.pathname==="/astronomie",i=t.pathname==="/hobbies",r=t.pathname==="/programming",s=t.pathname==="/biographie",o=t.pathname==="/design",a=!e&&!n&&!i&&!r&&!s&&!o;return se.useEffect(()=>{const l={"/":"Home","/programming":"Programming","/astronomie":"Astronomie","/design":"Design & Art","/hobbies":"Hobbies","/projets":"Projets","/biographie":"Biographie","/contact":"Contact","/privacy":"Politique de confidentialité"};document.title=l[t.pathname]||"My Website"},[t.pathname]),se.useEffect(()=>{const l=document.body,c=[];return["/design","/astronomie","/hobbies","/projets"].includes(t.pathname)&&c.push("designRoot"),["/projets","/contact"].includes(t.pathname)&&c.push("transparentHeader"),["/","/biographie","/contact"].includes(t.pathname)&&c.push("biographieBg","transparentHeader"),l.className=c.join(" "),()=>{l.className=""}},[t.pathname]),E.jsxs(E.Fragment,{children:[E.jsx(pv,{isHomePage:e},t.pathname),a&&E.jsx(IT,{}),E.jsx(vT,{}),a&&E.jsx(NT,{})]})},OT=()=>{const t=Qi();return new URLSearchParams(t.search).get("redirect")?E.jsx(I1,{to:"/projets"}):E.jsx(FT,{})};$x.createRoot(document.getElementById("root")).render(E.jsx(xm.StrictMode,{children:E.jsx(W1,{basename:"/portfolio",children:E.jsx(OT,{})})}));

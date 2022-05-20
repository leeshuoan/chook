function ku(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const gw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vw=ku(gw);function $m(t){return!!t||t===""}function Ds(t){if(X(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Fe(r)?ww(r):Ds(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Fe(t))return t;if(Re(t))return t}}const yw=/;(?![^(]*\))/g,bw=/:(.+)/;function ww(t){const e={};return t.split(yw).forEach(n=>{if(n){const r=n.split(bw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function $n(t){let e="";if(Fe(t))e=t;else if(X(t))for(let n=0;n<t.length;n++){const r=$n(t[n]);r&&(e+=r+" ")}else if(Re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function _w(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Da(t[r],e[r]);return n}function Da(t,e){if(t===e)return!0;let n=Vh(t),r=Vh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=X(t),r=X(e),n||r)return n&&r?_w(t,e):!1;if(n=Re(t),r=Re(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Da(t[o],e[o]))return!1}}return String(t)===String(e)}function Ew(t,e){return t.findIndex(n=>Da(n,e))}const Vm=t=>Fe(t)?t:t==null?"":X(t)||Re(t)&&(t.toString===Hm||!ne(t.toString))?JSON.stringify(t,Bm,2):String(t),Bm=(t,e)=>e&&e.__v_isRef?Bm(t,e.value):Jr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Ma(e)?{[`Set(${e.size})`]:[...e.values()]}:Re(e)&&!X(e)&&!qm(e)?String(e):e,ye={},Xr=[],Ut=()=>{},Tw=()=>!1,Iw=/^on[^a-z]/,La=t=>Iw.test(t),Ou=t=>t.startsWith("onUpdate:"),Be=Object.assign,Ru=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Cw=Object.prototype.hasOwnProperty,ue=(t,e)=>Cw.call(t,e),X=Array.isArray,Jr=t=>Ua(t)==="[object Map]",Ma=t=>Ua(t)==="[object Set]",Vh=t=>t instanceof Date,ne=t=>typeof t=="function",Fe=t=>typeof t=="string",Nu=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",jm=t=>Re(t)&&ne(t.then)&&ne(t.catch),Hm=Object.prototype.toString,Ua=t=>Hm.call(t),Sw=t=>Ua(t).slice(8,-1),qm=t=>Ua(t)==="[object Object]",xu=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ao=ku(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Aw=/-(\w)/g,Jt=Fa(t=>t.replace(Aw,(e,n)=>n?n.toUpperCase():"")),kw=/\B([A-Z])/g,_i=Fa(t=>t.replace(kw,"-$1").toLowerCase()),$a=Fa(t=>t.charAt(0).toUpperCase()+t.slice(1)),ko=Fa(t=>t?`on${$a(t)}`:""),ls=(t,e)=>!Object.is(t,e),Oo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Wo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},us=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Bh;const Ow=()=>Bh||(Bh=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let rn;class Rw{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&rn&&(this.parent=rn,this.index=(rn.scopes||(rn.scopes=[])).push(this)-1)}run(e){if(this.active)try{return rn=this,e()}finally{rn=this.parent}}on(){rn=this}off(){rn=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Nw(t,e=rn){e&&e.active&&e.effects.push(t)}const Pu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},zm=t=>(t.w&Vn)>0,Km=t=>(t.n&Vn)>0,xw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Vn},Pw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];zm(i)&&!Km(i)?i.delete(t):e[n++]=i,i.w&=~Vn,i.n&=~Vn}e.length=n}},wl=new WeakMap;let ji=0,Vn=1;const _l=30;let zt;const ur=Symbol(""),El=Symbol("");class Du{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Nw(this,r)}run(){if(!this.active)return this.fn();let e=zt,n=Dn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=zt,zt=this,Dn=!0,Vn=1<<++ji,ji<=_l?xw(this):jh(this),this.fn()}finally{ji<=_l&&Pw(this),Vn=1<<--ji,zt=this.parent,Dn=n,this.parent=void 0}}stop(){this.active&&(jh(this),this.onStop&&this.onStop(),this.active=!1)}}function jh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Dn=!0;const Wm=[];function Ei(){Wm.push(Dn),Dn=!1}function Ti(){const t=Wm.pop();Dn=t===void 0?!0:t}function Tt(t,e,n){if(Dn&&zt){let r=wl.get(t);r||wl.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Pu()),Gm(i)}}function Gm(t,e){let n=!1;ji<=_l?Km(t)||(t.n|=Vn,n=!zm(t)):n=!t.has(zt),n&&(t.add(zt),zt.deps.push(t))}function dn(t,e,n,r,i,s){const o=wl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&X(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":X(t)?xu(n)&&a.push(o.get("length")):(a.push(o.get(ur)),Jr(t)&&a.push(o.get(El)));break;case"delete":X(t)||(a.push(o.get(ur)),Jr(t)&&a.push(o.get(El)));break;case"set":Jr(t)&&a.push(o.get(ur));break}if(a.length===1)a[0]&&Tl(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Tl(Pu(c))}}function Tl(t,e){for(const n of X(t)?t:[...t])(n!==zt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Dw=ku("__proto__,__v_isRef,__isVue"),Ym=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Nu)),Lw=Lu(),Mw=Lu(!1,!0),Uw=Lu(!0),Hh=Fw();function Fw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=le(this);for(let s=0,o=this.length;s<o;s++)Tt(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(le)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ei();const r=le(this)[e].apply(this,n);return Ti(),r}}),t}function Lu(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?e1:eg:e?Zm:Qm).get(r))return r;const o=X(r);if(!t&&o&&ue(Hh,i))return Reflect.get(Hh,i,s);const a=Reflect.get(r,i,s);return(Nu(i)?Ym.has(i):Dw(i))||(t||Tt(r,"get",i),e)?a:We(a)?!o||!xu(i)?a.value:a:Re(a)?t?tg(a):Ii(a):a}}const $w=Xm(),Vw=Xm(!0);function Xm(t=!1){return function(n,r,i,s){let o=n[r];if(fs(o)&&We(o)&&!We(i))return!1;if(!t&&!fs(i)&&(ng(i)||(i=le(i),o=le(o)),!X(n)&&We(o)&&!We(i)))return o.value=i,!0;const a=X(n)&&xu(r)?Number(r)<n.length:ue(n,r),c=Reflect.set(n,r,i,s);return n===le(s)&&(a?ls(i,o)&&dn(n,"set",r,i):dn(n,"add",r,i)),c}}function Bw(t,e){const n=ue(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&dn(t,"delete",e,void 0),r}function jw(t,e){const n=Reflect.has(t,e);return(!Nu(e)||!Ym.has(e))&&Tt(t,"has",e),n}function Hw(t){return Tt(t,"iterate",X(t)?"length":ur),Reflect.ownKeys(t)}const Jm={get:Lw,set:$w,deleteProperty:Bw,has:jw,ownKeys:Hw},qw={get:Uw,set(t,e){return!0},deleteProperty(t,e){return!0}},zw=Be({},Jm,{get:Mw,set:Vw}),Mu=t=>t,Va=t=>Reflect.getPrototypeOf(t);function ho(t,e,n=!1,r=!1){t=t.__v_raw;const i=le(t),s=le(e);e!==s&&!n&&Tt(i,"get",e),!n&&Tt(i,"get",s);const{has:o}=Va(i),a=r?Mu:n?$u:hs;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function po(t,e=!1){const n=this.__v_raw,r=le(n),i=le(t);return t!==i&&!e&&Tt(r,"has",t),!e&&Tt(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function mo(t,e=!1){return t=t.__v_raw,!e&&Tt(le(t),"iterate",ur),Reflect.get(t,"size",t)}function qh(t){t=le(t);const e=le(this);return Va(e).has.call(e,t)||(e.add(t),dn(e,"add",t,t)),this}function zh(t,e){e=le(e);const n=le(this),{has:r,get:i}=Va(n);let s=r.call(n,t);s||(t=le(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?ls(e,o)&&dn(n,"set",t,e):dn(n,"add",t,e),this}function Kh(t){const e=le(this),{has:n,get:r}=Va(e);let i=n.call(e,t);i||(t=le(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&dn(e,"delete",t,void 0),s}function Wh(){const t=le(this),e=t.size!==0,n=t.clear();return e&&dn(t,"clear",void 0,void 0),n}function go(t,e){return function(r,i){const s=this,o=s.__v_raw,a=le(o),c=e?Mu:t?$u:hs;return!t&&Tt(a,"iterate",ur),o.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function vo(t,e,n){return function(...r){const i=this.__v_raw,s=le(i),o=Jr(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...r),u=n?Mu:e?$u:hs;return!e&&Tt(s,"iterate",c?El:ur),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function _n(t){return function(...e){return t==="delete"?!1:this}}function Kw(){const t={get(s){return ho(this,s)},get size(){return mo(this)},has:po,add:qh,set:zh,delete:Kh,clear:Wh,forEach:go(!1,!1)},e={get(s){return ho(this,s,!1,!0)},get size(){return mo(this)},has:po,add:qh,set:zh,delete:Kh,clear:Wh,forEach:go(!1,!0)},n={get(s){return ho(this,s,!0)},get size(){return mo(this,!0)},has(s){return po.call(this,s,!0)},add:_n("add"),set:_n("set"),delete:_n("delete"),clear:_n("clear"),forEach:go(!0,!1)},r={get(s){return ho(this,s,!0,!0)},get size(){return mo(this,!0)},has(s){return po.call(this,s,!0)},add:_n("add"),set:_n("set"),delete:_n("delete"),clear:_n("clear"),forEach:go(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=vo(s,!1,!1),n[s]=vo(s,!0,!1),e[s]=vo(s,!1,!0),r[s]=vo(s,!0,!0)}),[t,n,e,r]}const[Ww,Gw,Yw,Xw]=Kw();function Uu(t,e){const n=e?t?Xw:Yw:t?Gw:Ww;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(ue(n,i)&&i in r?n:r,i,s)}const Jw={get:Uu(!1,!1)},Qw={get:Uu(!1,!0)},Zw={get:Uu(!0,!1)},Qm=new WeakMap,Zm=new WeakMap,eg=new WeakMap,e1=new WeakMap;function t1(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function n1(t){return t.__v_skip||!Object.isExtensible(t)?0:t1(Sw(t))}function Ii(t){return fs(t)?t:Fu(t,!1,Jm,Jw,Qm)}function r1(t){return Fu(t,!1,zw,Qw,Zm)}function tg(t){return Fu(t,!0,qw,Zw,eg)}function Fu(t,e,n,r,i){if(!Re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=n1(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Qr(t){return fs(t)?Qr(t.__v_raw):!!(t&&t.__v_isReactive)}function fs(t){return!!(t&&t.__v_isReadonly)}function ng(t){return!!(t&&t.__v_isShallow)}function rg(t){return Qr(t)||fs(t)}function le(t){const e=t&&t.__v_raw;return e?le(e):t}function ig(t){return Wo(t,"__v_skip",!0),t}const hs=t=>Re(t)?Ii(t):t,$u=t=>Re(t)?tg(t):t;function sg(t){Dn&&zt&&(t=le(t),Gm(t.dep||(t.dep=Pu())))}function og(t,e){t=le(t),t.dep&&Tl(t.dep)}function We(t){return!!(t&&t.__v_isRef===!0)}function i1(t){return ag(t,!1)}function s1(t){return ag(t,!0)}function ag(t,e){return We(t)?t:new o1(t,e)}class o1{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:le(e),this._value=n?e:hs(e)}get value(){return sg(this),this._value}set value(e){e=this.__v_isShallow?e:le(e),ls(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:hs(e),og(this))}}function Zr(t){return We(t)?t.value:t}const a1={get:(t,e,n)=>Zr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return We(i)&&!We(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function cg(t){return Qr(t)?t:new Proxy(t,a1)}class c1{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Du(e,()=>{this._dirty||(this._dirty=!0,og(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=le(this);return sg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function l1(t,e,n=!1){let r,i;const s=ne(t);return s?(r=t,i=Ut):(r=t.get,i=t.set),new c1(r,i,s||!i,n)}Promise.resolve();function Ln(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Ba(s,e,n)}return i}function kt(t,e,n,r){if(ne(t)){const s=Ln(t,e,n,r);return s&&jm(s)&&s.catch(o=>{Ba(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(kt(t[s],e,n,r));return i}function Ba(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){Ln(c,null,10,[t,o,a]);return}}u1(t,n,i,r)}function u1(t,e,n,r=!0){console.error(t)}let Go=!1,Il=!1;const yt=[];let on=0;const Yi=[];let Hi=null,jr=0;const Xi=[];let An=null,Hr=0;const lg=Promise.resolve();let Vu=null,Cl=null;function Bu(t){const e=Vu||lg;return t?e.then(this?t.bind(this):t):e}function f1(t){let e=on+1,n=yt.length;for(;e<n;){const r=e+n>>>1;ds(yt[r])<t?e=r+1:n=r}return e}function ug(t){(!yt.length||!yt.includes(t,Go&&t.allowRecurse?on+1:on))&&t!==Cl&&(t.id==null?yt.push(t):yt.splice(f1(t.id),0,t),fg())}function fg(){!Go&&!Il&&(Il=!0,Vu=lg.then(pg))}function h1(t){const e=yt.indexOf(t);e>on&&yt.splice(e,1)}function hg(t,e,n,r){X(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),fg()}function d1(t){hg(t,Hi,Yi,jr)}function p1(t){hg(t,An,Xi,Hr)}function ju(t,e=null){if(Yi.length){for(Cl=e,Hi=[...new Set(Yi)],Yi.length=0,jr=0;jr<Hi.length;jr++)Hi[jr]();Hi=null,jr=0,Cl=null,ju(t,e)}}function dg(t){if(Xi.length){const e=[...new Set(Xi)];if(Xi.length=0,An){An.push(...e);return}for(An=e,An.sort((n,r)=>ds(n)-ds(r)),Hr=0;Hr<An.length;Hr++)An[Hr]();An=null,Hr=0}}const ds=t=>t.id==null?1/0:t.id;function pg(t){Il=!1,Go=!0,ju(t),yt.sort((n,r)=>ds(n)-ds(r));const e=Ut;try{for(on=0;on<yt.length;on++){const n=yt[on];n&&n.active!==!1&&Ln(n,null,14)}}finally{on=0,yt.length=0,dg(),Go=!1,Vu=null,(yt.length||Yi.length||Xi.length)&&pg(t)}}function m1(t,e,...n){const r=t.vnode.props||ye;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=r[u]||ye;h?i=n.map(p=>p.trim()):f&&(i=n.map(us))}let a,c=r[a=ko(e)]||r[a=ko(Jt(e))];!c&&s&&(c=r[a=ko(_i(e))]),c&&kt(c,t,6,i);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,kt(l,t,6,i)}}function mg(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ne(t)){const c=l=>{const u=mg(l,e,!0);u&&(a=!0,Be(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(r.set(t,null),null):(X(s)?s.forEach(c=>o[c]=null):Be(o,s),r.set(t,o),o)}function Hu(t,e){return!t||!La(e)?!1:(e=e.slice(2).replace(/Once$/,""),ue(t,e[0].toLowerCase()+e.slice(1))||ue(t,_i(e))||ue(t,e))}let _t=null,ja=null;function Yo(t){const e=_t;return _t=t,ja=t&&t.type.__scopeId||null,e}function DD(t){ja=t}function LD(){ja=null}function Ls(t,e=_t,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&id(-1);const s=Yo(e),o=t(...i);return Yo(s),r._d&&id(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Uc(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:h,setupState:p,ctx:g,inheritAttrs:E}=t;let w,v;const b=Yo(t);try{if(n.shapeFlag&4){const D=i||r;w=qt(u.call(D,D,f,s,p,h,g)),v=c}else{const D=e;w=qt(D.length>1?D(s,{attrs:c,slots:a,emit:l}):D(s,null)),v=e.props?c:g1(c)}}catch(D){Qi.length=0,Ba(D,t,1),w=Ge(Ft)}let x=w;if(v&&E!==!1){const D=Object.keys(v),{shapeFlag:G}=x;D.length&&G&7&&(o&&D.some(Ou)&&(v=v1(v,o)),x=oi(x,v))}return n.dirs&&(x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),w=x,Yo(b),w}const g1=t=>{let e;for(const n in t)(n==="class"||n==="style"||La(n))&&((e||(e={}))[n]=t[n]);return e},v1=(t,e)=>{const n={};for(const r in t)(!Ou(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function y1(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Gh(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==r[h]&&!Hu(l,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Gh(r,o,l):!0:!!o;return!1}function Gh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Hu(n,s))return!0}return!1}function b1({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const w1=t=>t.__isSuspense;function _1(t,e){e&&e.pendingBranch?X(t)?e.effects.push(...t):e.effects.push(t):p1(t)}function Ro(t,e){if(Ve){let n=Ve.provides;const r=Ve.parent&&Ve.parent.provides;r===n&&(n=Ve.provides=Object.create(r)),n[t]=e}}function un(t,e,n=!1){const r=Ve||_t;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ne(e)?e.call(r.proxy):e}}const Yh={};function fr(t,e,n){return gg(t,e,n)}function gg(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=ye){const a=Ve;let c,l=!1,u=!1;if(We(t)?(c=()=>t.value,l=ng(t)):Qr(t)?(c=()=>t,r=!0):X(t)?(u=!0,l=t.some(Qr),c=()=>t.map(v=>{if(We(v))return v.value;if(Qr(v))return sr(v);if(ne(v))return Ln(v,a,2)})):ne(t)?e?c=()=>Ln(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),kt(t,a,3,[h])}:c=Ut,e&&r){const v=c;c=()=>sr(v())}let f,h=v=>{f=w.onStop=()=>{Ln(v,a,4)}};if(gs)return h=Ut,e?n&&kt(e,a,3,[c(),u?[]:void 0,h]):c(),Ut;let p=u?[]:Yh;const g=()=>{if(!!w.active)if(e){const v=w.run();(r||l||(u?v.some((b,x)=>ls(b,p[x])):ls(v,p)))&&(f&&f(),kt(e,a,3,[v,p===Yh?void 0:p,h]),p=v)}else w.run()};g.allowRecurse=!!e;let E;i==="sync"?E=g:i==="post"?E=()=>ut(g,a&&a.suspense):E=()=>{!a||a.isMounted?d1(g):g()};const w=new Du(c,E);return e?n?g():p=w.run():i==="post"?ut(w.run.bind(w),a&&a.suspense):w.run(),()=>{w.stop(),a&&a.scope&&Ru(a.scope.effects,w)}}function E1(t,e,n){const r=this.proxy,i=Fe(t)?t.includes(".")?vg(r,t):()=>r[t]:t.bind(r,r);let s;ne(e)?s=e:(s=e.handler,n=e);const o=Ve;ai(this);const a=gg(i,s.bind(r),n);return o?ai(o):dr(),a}function vg(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function sr(t,e){if(!Re(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),We(t))sr(t.value,e);else if(X(t))for(let n=0;n<t.length;n++)sr(t[n],e);else if(Ma(t)||Jr(t))t.forEach(n=>{sr(n,e)});else if(qm(t))for(const n in t)sr(t[n],e);return t}function yg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Eg(()=>{t.isMounted=!0}),Ig(()=>{t.isUnmounting=!0}),t}const At=[Function,Array],T1={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:At,onEnter:At,onAfterEnter:At,onEnterCancelled:At,onBeforeLeave:At,onLeave:At,onAfterLeave:At,onLeaveCancelled:At,onBeforeAppear:At,onAppear:At,onAfterAppear:At,onAppearCancelled:At},setup(t,{slots:e}){const n=Xu(),r=yg();let i;return()=>{const s=e.default&&qu(e.default(),!0);if(!s||!s.length)return;const o=le(t),{mode:a}=o,c=s[0];if(r.isLeaving)return Fc(c);const l=Xh(c);if(!l)return Fc(c);const u=ps(l,o,r,n);ms(l,u);const f=n.subTree,h=f&&Xh(f);let p=!1;const{getTransitionKey:g}=l.type;if(g){const E=g();i===void 0?i=E:E!==i&&(i=E,p=!0)}if(h&&h.type!==Ft&&(!nr(l,h)||p)){const E=ps(h,o,r,n);if(ms(h,E),a==="out-in")return r.isLeaving=!0,E.afterLeave=()=>{r.isLeaving=!1,n.update()},Fc(c);a==="in-out"&&l.type!==Ft&&(E.delayLeave=(w,v,b)=>{const x=wg(r,h);x[String(h.key)]=h,w._leaveCb=()=>{v(),w._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=b})}return c}}},bg=T1;function wg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ps(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:E,onAppear:w,onAfterAppear:v,onAppearCancelled:b}=e,x=String(t.key),D=wg(n,t),G=(K,he)=>{K&&kt(K,r,9,he)},re={mode:s,persisted:o,beforeEnter(K){let he=a;if(!n.isMounted)if(i)he=E||a;else return;K._leaveCb&&K._leaveCb(!0);const ie=D[x];ie&&nr(t,ie)&&ie.el._leaveCb&&ie.el._leaveCb(),G(he,[K])},enter(K){let he=c,ie=l,Me=u;if(!n.isMounted)if(i)he=w||c,ie=v||l,Me=b||u;else return;let Ue=!1;const B=K._enterCb=ke=>{Ue||(Ue=!0,ke?G(Me,[K]):G(ie,[K]),re.delayedLeave&&re.delayedLeave(),K._enterCb=void 0)};he?(he(K,B),he.length<=1&&B()):B()},leave(K,he){const ie=String(t.key);if(K._enterCb&&K._enterCb(!0),n.isUnmounting)return he();G(f,[K]);let Me=!1;const Ue=K._leaveCb=B=>{Me||(Me=!0,he(),B?G(g,[K]):G(p,[K]),K._leaveCb=void 0,D[ie]===t&&delete D[ie])};D[ie]=t,h?(h(K,Ue),h.length<=1&&Ue()):Ue()},clone(K){return ps(K,e,n,r)}};return re}function Fc(t){if(Ha(t))return t=oi(t),t.children=null,t}function Xh(t){return Ha(t)?t.children?t.children[0]:void 0:t}function ms(t,e){t.shapeFlag&6&&t.component?ms(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function qu(t,e=!1){let n=[],r=0;for(let i=0;i<t.length;i++){const s=t[i];s.type===et?(s.patchFlag&128&&r++,n=n.concat(qu(s.children,e))):(e||s.type!==Ft)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function Rt(t){return ne(t)?{setup:t,name:t.name}:t}const Sl=t=>!!t.type.__asyncLoader,Ha=t=>t.type.__isKeepAlive;function I1(t,e){_g(t,"a",e)}function C1(t,e){_g(t,"da",e)}function _g(t,e,n=Ve){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(qa(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Ha(i.parent.vnode)&&S1(r,e,n,i),i=i.parent}}function S1(t,e,n,r){const i=qa(e,t,r,!0);Cg(()=>{Ru(r[e],i)},n)}function qa(t,e,n=Ve,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ei(),ai(n);const a=kt(e,n,t,o);return dr(),Ti(),a});return r?i.unshift(s):i.push(s),s}}const bn=t=>(e,n=Ve)=>(!gs||t==="sp")&&qa(t,e,n),A1=bn("bm"),Eg=bn("m"),k1=bn("bu"),Tg=bn("u"),Ig=bn("bum"),Cg=bn("um"),O1=bn("sp"),R1=bn("rtg"),N1=bn("rtc");function x1(t,e=Ve){qa("ec",t,e)}let Al=!0;function P1(t){const e=Ag(t),n=t.proxy,r=t.ctx;Al=!1,e.beforeCreate&&Jh(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:E,deactivated:w,beforeDestroy:v,beforeUnmount:b,destroyed:x,unmounted:D,render:G,renderTracked:re,renderTriggered:K,errorCaptured:he,serverPrefetch:ie,expose:Me,inheritAttrs:Ue,components:B,directives:ke,filters:lt}=e;if(l&&D1(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const be in o){const pe=o[be];ne(pe)&&(r[be]=pe.bind(n))}if(i){const be=i.call(n,n);Re(be)&&(t.data=Ii(be))}if(Al=!0,s)for(const be in s){const pe=s[be],mt=ne(pe)?pe.bind(n,n):ne(pe.get)?pe.get.bind(n,n):Ut,Lr=!ne(pe)&&ne(pe.set)?pe.set.bind(n):Ut,nn=xe({get:mt,set:Lr});Object.defineProperty(r,be,{enumerable:!0,configurable:!0,get:()=>nn.value,set:Bt=>nn.value=Bt})}if(a)for(const be in a)Sg(a[be],r,n,be);if(c){const be=ne(c)?c.call(n):c;Reflect.ownKeys(be).forEach(pe=>{Ro(pe,be[pe])})}u&&Jh(u,t,"c");function Oe(be,pe){X(pe)?pe.forEach(mt=>be(mt.bind(n))):pe&&be(pe.bind(n))}if(Oe(A1,f),Oe(Eg,h),Oe(k1,p),Oe(Tg,g),Oe(I1,E),Oe(C1,w),Oe(x1,he),Oe(N1,re),Oe(R1,K),Oe(Ig,b),Oe(Cg,D),Oe(O1,ie),X(Me))if(Me.length){const be=t.exposed||(t.exposed={});Me.forEach(pe=>{Object.defineProperty(be,pe,{get:()=>n[pe],set:mt=>n[pe]=mt})})}else t.exposed||(t.exposed={});G&&t.render===Ut&&(t.render=G),Ue!=null&&(t.inheritAttrs=Ue),B&&(t.components=B),ke&&(t.directives=ke)}function D1(t,e,n=Ut,r=!1){X(t)&&(t=kl(t));for(const i in t){const s=t[i];let o;Re(s)?"default"in s?o=un(s.from||i,s.default,!0):o=un(s.from||i):o=un(s),We(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Jh(t,e,n){kt(X(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sg(t,e,n,r){const i=r.includes(".")?vg(n,r):()=>n[r];if(Fe(t)){const s=e[t];ne(s)&&fr(i,s)}else if(ne(t))fr(i,t.bind(n));else if(Re(t))if(X(t))t.forEach(s=>Sg(s,e,n,r));else{const s=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(s)&&fr(i,s,t)}}function Ag(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(l=>Xo(c,l,o,!0)),Xo(c,e,o)),s.set(e,c),c}function Xo(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Xo(t,s,n,!0),i&&i.forEach(o=>Xo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=L1[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const L1={data:Qh,props:Zn,emits:Zn,methods:Zn,computed:Zn,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:Zn,directives:Zn,watch:U1,provide:Qh,inject:M1};function Qh(t,e){return e?t?function(){return Be(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function M1(t,e){return Zn(kl(t),kl(e))}function kl(t){if(X(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function it(t,e){return t?[...new Set([].concat(t,e))]:e}function Zn(t,e){return t?Be(Be(Object.create(null),t),e):e}function U1(t,e){if(!t)return e;if(!e)return t;const n=Be(Object.create(null),t);for(const r in e)n[r]=it(t[r],e[r]);return n}function F1(t,e,n,r=!1){const i={},s={};Wo(s,za,1),t.propsDefaults=Object.create(null),kg(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:r1(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function $1(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=le(i),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];const p=e[h];if(c)if(ue(s,h))p!==s[h]&&(s[h]=p,l=!0);else{const g=Jt(h);i[g]=Ol(c,a,g,p,t,!1)}else p!==s[h]&&(s[h]=p,l=!0)}}}else{kg(t,e,i,s)&&(l=!0);let u;for(const f in a)(!e||!ue(e,f)&&((u=_i(f))===f||!ue(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Ol(c,a,f,void 0,t,!0)):delete i[f]);if(s!==a)for(const f in s)(!e||!ue(e,f)&&!0)&&(delete s[f],l=!0)}l&&dn(t,"set","$attrs")}function kg(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ao(c))continue;const l=e[c];let u;i&&ue(i,u=Jt(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:Hu(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(s){const c=le(n),l=a||ye;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Ol(i,c,f,l[f],t,!ue(l,f))}}return o}function Ol(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=ue(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&ne(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(ai(i),r=l[n]=c.call(null,e),dr())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===_i(n))&&(r=!0))}return r}function Og(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!ne(t)){const u=f=>{c=!0;const[h,p]=Og(f,e,!0);Be(o,h),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return r.set(t,Xr),Xr;if(X(s))for(let u=0;u<s.length;u++){const f=Jt(s[u]);Zh(f)&&(o[f]=ye)}else if(s)for(const u in s){const f=Jt(u);if(Zh(f)){const h=s[u],p=o[f]=X(h)||ne(h)?{type:h}:h;if(p){const g=nd(Boolean,p.type),E=nd(String,p.type);p[0]=g>-1,p[1]=E<0||g<E,(g>-1||ue(p,"default"))&&a.push(f)}}}const l=[o,a];return r.set(t,l),l}function Zh(t){return t[0]!=="$"}function ed(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function td(t,e){return ed(t)===ed(e)}function nd(t,e){return X(e)?e.findIndex(n=>td(n,t)):ne(e)&&td(e,t)?0:-1}const Rg=t=>t[0]==="_"||t==="$stable",zu=t=>X(t)?t.map(qt):[qt(t)],V1=(t,e,n)=>{const r=Ls((...i)=>zu(e(...i)),n);return r._c=!1,r},Ng=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Rg(i))continue;const s=t[i];if(ne(s))e[i]=V1(i,s,r);else if(s!=null){const o=zu(s);e[i]=()=>o}}},xg=(t,e)=>{const n=zu(e);t.slots.default=()=>n},B1=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=le(e),Wo(e,"_",n)):Ng(e,t.slots={})}else t.slots={},e&&xg(t,e);Wo(t.slots,za,1)},j1=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=ye;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Be(i,e),!n&&a===1&&delete i._):(s=!e.$stable,Ng(e,i)),o=e}else e&&(xg(t,e),o={default:1});if(s)for(const a in i)!Rg(a)&&!(a in o)&&delete i[a]};function MD(t,e){const n=_t;if(n===null)return t;const r=n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,l=ye]=e[s];ne(o)&&(o={mounted:o,updated:o}),o.deep&&sr(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function Xn(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(Ei(),kt(c,n,8,[t.el,a,t,e]),Ti())}}function Pg(){return{app:null,config:{isNativeTag:Tw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let H1=0;function q1(t,e){return function(r,i=null){i!=null&&!Re(i)&&(i=null);const s=Pg(),o=new Set;let a=!1;const c=s.app={_uid:H1++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:u_,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&ne(l.install)?(o.add(l),l.install(c,...u)):ne(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,f){if(!a){const h=Ge(r,i);return h.appContext=s,u&&e?e(h,l):t(h,l,f),a=!0,c._container=l,l.__vue_app__=c,Ju(h.component)||h.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c}};return c}}function Rl(t,e,n,r,i=!1){if(X(t)){t.forEach((h,p)=>Rl(h,e&&(X(e)?e[p]:e),n,r,i));return}if(Sl(r)&&!i)return;const s=r.shapeFlag&4?Ju(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ye?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(Fe(l)?(u[l]=null,ue(f,l)&&(f[l]=null)):We(l)&&(l.value=null)),ne(c))Ln(c,a,12,[o,u]);else{const h=Fe(c),p=We(c);if(h||p){const g=()=>{if(t.f){const E=h?u[c]:c.value;i?X(E)&&Ru(E,s):X(E)?E.includes(s)||E.push(s):h?u[c]=[s]:(c.value=[s],t.k&&(u[t.k]=c.value))}else h?(u[c]=o,ue(f,c)&&(f[c]=o)):We(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,ut(g,n)):g()}}}const ut=_1;function z1(t){return K1(t)}function K1(t,e){const n=Ow();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Ut,cloneNode:g,insertStaticContent:E}=t,w=(d,m,y,C=null,T=null,k=null,P=!1,A=null,R=!!m.dynamicChildren)=>{if(d===m)return;d&&!nr(d,m)&&(C=j(d),St(d,T,k,!0),d=null),m.patchFlag===-2&&(R=!1,m.dynamicChildren=null);const{type:S,ref:H,shapeFlag:U}=m;switch(S){case Gu:v(d,m,y,C);break;case Ft:b(d,m,y,C);break;case No:d==null&&x(m,y,C,P);break;case et:ke(d,m,y,C,T,k,P,A,R);break;default:U&1?re(d,m,y,C,T,k,P,A,R):U&6?lt(d,m,y,C,T,k,P,A,R):(U&64||U&128)&&S.process(d,m,y,C,T,k,P,A,R,we)}H!=null&&T&&Rl(H,d&&d.ref,k,m||d,!m)},v=(d,m,y,C)=>{if(d==null)r(m.el=a(m.children),y,C);else{const T=m.el=d.el;m.children!==d.children&&l(T,m.children)}},b=(d,m,y,C)=>{d==null?r(m.el=c(m.children||""),y,C):m.el=d.el},x=(d,m,y,C)=>{[d.el,d.anchor]=E(d.children,m,y,C,d.el,d.anchor)},D=({el:d,anchor:m},y,C)=>{let T;for(;d&&d!==m;)T=h(d),r(d,y,C),d=T;r(m,y,C)},G=({el:d,anchor:m})=>{let y;for(;d&&d!==m;)y=h(d),i(d),d=y;i(m)},re=(d,m,y,C,T,k,P,A,R)=>{P=P||m.type==="svg",d==null?K(m,y,C,T,k,P,A,R):Me(d,m,T,k,P,A,R)},K=(d,m,y,C,T,k,P,A)=>{let R,S;const{type:H,props:U,shapeFlag:q,transition:Q,patchFlag:ce,dirs:Se}=d;if(d.el&&g!==void 0&&ce===-1)R=d.el=g(d.el);else{if(R=d.el=o(d.type,k,U&&U.is,U),q&8?u(R,d.children):q&16&&ie(d.children,R,null,C,T,k&&H!=="foreignObject",P,A),Se&&Xn(d,null,C,"created"),U){for(const Ee in U)Ee!=="value"&&!Ao(Ee)&&s(R,Ee,null,U[Ee],k,d.children,C,T,N);"value"in U&&s(R,"value",null,U.value),(S=U.onVnodeBeforeMount)&&Ht(S,C,d)}he(R,d,d.scopeId,P,C)}Se&&Xn(d,null,C,"beforeMount");const ge=(!T||T&&!T.pendingBranch)&&Q&&!Q.persisted;ge&&Q.beforeEnter(R),r(R,m,y),((S=U&&U.onVnodeMounted)||ge||Se)&&ut(()=>{S&&Ht(S,C,d),ge&&Q.enter(R),Se&&Xn(d,null,C,"mounted")},T)},he=(d,m,y,C,T)=>{if(y&&p(d,y),C)for(let k=0;k<C.length;k++)p(d,C[k]);if(T){let k=T.subTree;if(m===k){const P=T.vnode;he(d,P,P.scopeId,P.slotScopeIds,T.parent)}}},ie=(d,m,y,C,T,k,P,A,R=0)=>{for(let S=R;S<d.length;S++){const H=d[S]=A?kn(d[S]):qt(d[S]);w(null,H,m,y,C,T,k,P,A)}},Me=(d,m,y,C,T,k,P)=>{const A=m.el=d.el;let{patchFlag:R,dynamicChildren:S,dirs:H}=m;R|=d.patchFlag&16;const U=d.props||ye,q=m.props||ye;let Q;y&&Jn(y,!1),(Q=q.onVnodeBeforeUpdate)&&Ht(Q,y,m,d),H&&Xn(m,d,y,"beforeUpdate"),y&&Jn(y,!0);const ce=T&&m.type!=="foreignObject";if(S?Ue(d.dynamicChildren,S,A,y,C,ce,k):P||mt(d,m,A,null,y,C,ce,k,!1),R>0){if(R&16)B(A,m,U,q,y,C,T);else if(R&2&&U.class!==q.class&&s(A,"class",null,q.class,T),R&4&&s(A,"style",U.style,q.style,T),R&8){const Se=m.dynamicProps;for(let ge=0;ge<Se.length;ge++){const Ee=Se[ge],Nt=U[Ee],Mr=q[Ee];(Mr!==Nt||Ee==="value")&&s(A,Ee,Nt,Mr,T,d.children,y,C,N)}}R&1&&d.children!==m.children&&u(A,m.children)}else!P&&S==null&&B(A,m,U,q,y,C,T);((Q=q.onVnodeUpdated)||H)&&ut(()=>{Q&&Ht(Q,y,m,d),H&&Xn(m,d,y,"updated")},C)},Ue=(d,m,y,C,T,k,P)=>{for(let A=0;A<m.length;A++){const R=d[A],S=m[A],H=R.el&&(R.type===et||!nr(R,S)||R.shapeFlag&70)?f(R.el):y;w(R,S,H,null,C,T,k,P,!0)}},B=(d,m,y,C,T,k,P)=>{if(y!==C){for(const A in C){if(Ao(A))continue;const R=C[A],S=y[A];R!==S&&A!=="value"&&s(d,A,S,R,P,m.children,T,k,N)}if(y!==ye)for(const A in y)!Ao(A)&&!(A in C)&&s(d,A,y[A],null,P,m.children,T,k,N);"value"in C&&s(d,"value",y.value,C.value)}},ke=(d,m,y,C,T,k,P,A,R)=>{const S=m.el=d?d.el:a(""),H=m.anchor=d?d.anchor:a("");let{patchFlag:U,dynamicChildren:q,slotScopeIds:Q}=m;Q&&(A=A?A.concat(Q):Q),d==null?(r(S,y,C),r(H,y,C),ie(m.children,y,H,T,k,P,A,R)):U>0&&U&64&&q&&d.dynamicChildren?(Ue(d.dynamicChildren,q,y,T,k,P,A),(m.key!=null||T&&m===T.subTree)&&Dg(d,m,!0)):mt(d,m,y,H,T,k,P,A,R)},lt=(d,m,y,C,T,k,P,A,R)=>{m.slotScopeIds=A,d==null?m.shapeFlag&512?T.ctx.activate(m,y,C,P,R):tn(m,y,C,T,k,P,R):Oe(d,m,R)},tn=(d,m,y,C,T,k,P)=>{const A=d.component=r_(d,C,T);if(Ha(d)&&(A.ctx.renderer=we),i_(A),A.asyncDep){if(T&&T.registerDep(A,be),!d.el){const R=A.subTree=Ge(Ft);b(null,R,m,y)}return}be(A,d,m,y,T,k,P)},Oe=(d,m,y)=>{const C=m.component=d.component;if(y1(d,m,y))if(C.asyncDep&&!C.asyncResolved){pe(C,m,y);return}else C.next=m,h1(C.update),C.update();else m.component=d.component,m.el=d.el,C.vnode=m},be=(d,m,y,C,T,k,P)=>{const A=()=>{if(d.isMounted){let{next:H,bu:U,u:q,parent:Q,vnode:ce}=d,Se=H,ge;Jn(d,!1),H?(H.el=ce.el,pe(d,H,P)):H=ce,U&&Oo(U),(ge=H.props&&H.props.onVnodeBeforeUpdate)&&Ht(ge,Q,H,ce),Jn(d,!0);const Ee=Uc(d),Nt=d.subTree;d.subTree=Ee,w(Nt,Ee,f(Nt.el),j(Nt),d,T,k),H.el=Ee.el,Se===null&&b1(d,Ee.el),q&&ut(q,T),(ge=H.props&&H.props.onVnodeUpdated)&&ut(()=>Ht(ge,Q,H,ce),T)}else{let H;const{el:U,props:q}=m,{bm:Q,m:ce,parent:Se}=d,ge=Sl(m);if(Jn(d,!1),Q&&Oo(Q),!ge&&(H=q&&q.onVnodeBeforeMount)&&Ht(H,Se,m),Jn(d,!0),U&&te){const Ee=()=>{d.subTree=Uc(d),te(U,d.subTree,d,T,null)};ge?m.type.__asyncLoader().then(()=>!d.isUnmounted&&Ee()):Ee()}else{const Ee=d.subTree=Uc(d);w(null,Ee,y,C,d,T,k),m.el=Ee.el}if(ce&&ut(ce,T),!ge&&(H=q&&q.onVnodeMounted)){const Ee=m;ut(()=>Ht(H,Se,Ee),T)}m.shapeFlag&256&&d.a&&ut(d.a,T),d.isMounted=!0,m=y=C=null}},R=d.effect=new Du(A,()=>ug(d.update),d.scope),S=d.update=R.run.bind(R);S.id=d.uid,Jn(d,!0),S()},pe=(d,m,y)=>{m.component=d;const C=d.vnode.props;d.vnode=m,d.next=null,$1(d,m.props,C,y),j1(d,m.children,y),Ei(),ju(void 0,d.update),Ti()},mt=(d,m,y,C,T,k,P,A,R=!1)=>{const S=d&&d.children,H=d?d.shapeFlag:0,U=m.children,{patchFlag:q,shapeFlag:Q}=m;if(q>0){if(q&128){nn(S,U,y,C,T,k,P,A,R);return}else if(q&256){Lr(S,U,y,C,T,k,P,A,R);return}}Q&8?(H&16&&N(S,T,k),U!==S&&u(y,U)):H&16?Q&16?nn(S,U,y,C,T,k,P,A,R):N(S,T,k,!0):(H&8&&u(y,""),Q&16&&ie(U,y,C,T,k,P,A,R))},Lr=(d,m,y,C,T,k,P,A,R)=>{d=d||Xr,m=m||Xr;const S=d.length,H=m.length,U=Math.min(S,H);let q;for(q=0;q<U;q++){const Q=m[q]=R?kn(m[q]):qt(m[q]);w(d[q],Q,y,null,T,k,P,A,R)}S>H?N(d,T,k,!0,!1,U):ie(m,y,C,T,k,P,A,R,U)},nn=(d,m,y,C,T,k,P,A,R)=>{let S=0;const H=m.length;let U=d.length-1,q=H-1;for(;S<=U&&S<=q;){const Q=d[S],ce=m[S]=R?kn(m[S]):qt(m[S]);if(nr(Q,ce))w(Q,ce,y,null,T,k,P,A,R);else break;S++}for(;S<=U&&S<=q;){const Q=d[U],ce=m[q]=R?kn(m[q]):qt(m[q]);if(nr(Q,ce))w(Q,ce,y,null,T,k,P,A,R);else break;U--,q--}if(S>U){if(S<=q){const Q=q+1,ce=Q<H?m[Q].el:C;for(;S<=q;)w(null,m[S]=R?kn(m[S]):qt(m[S]),y,ce,T,k,P,A,R),S++}}else if(S>q)for(;S<=U;)St(d[S],T,k,!0),S++;else{const Q=S,ce=S,Se=new Map;for(S=ce;S<=q;S++){const gt=m[S]=R?kn(m[S]):qt(m[S]);gt.key!=null&&Se.set(gt.key,S)}let ge,Ee=0;const Nt=q-ce+1;let Mr=!1,Uh=0;const Fi=new Array(Nt);for(S=0;S<Nt;S++)Fi[S]=0;for(S=Q;S<=U;S++){const gt=d[S];if(Ee>=Nt){St(gt,T,k,!0);continue}let jt;if(gt.key!=null)jt=Se.get(gt.key);else for(ge=ce;ge<=q;ge++)if(Fi[ge-ce]===0&&nr(gt,m[ge])){jt=ge;break}jt===void 0?St(gt,T,k,!0):(Fi[jt-ce]=S+1,jt>=Uh?Uh=jt:Mr=!0,w(gt,m[jt],y,null,T,k,P,A,R),Ee++)}const Fh=Mr?W1(Fi):Xr;for(ge=Fh.length-1,S=Nt-1;S>=0;S--){const gt=ce+S,jt=m[gt],$h=gt+1<H?m[gt+1].el:C;Fi[S]===0?w(null,jt,y,$h,T,k,P,A,R):Mr&&(ge<0||S!==Fh[ge]?Bt(jt,y,$h,2):ge--)}}},Bt=(d,m,y,C,T=null)=>{const{el:k,type:P,transition:A,children:R,shapeFlag:S}=d;if(S&6){Bt(d.component.subTree,m,y,C);return}if(S&128){d.suspense.move(m,y,C);return}if(S&64){P.move(d,m,y,we);return}if(P===et){r(k,m,y);for(let U=0;U<R.length;U++)Bt(R[U],m,y,C);r(d.anchor,m,y);return}if(P===No){D(d,m,y);return}if(C!==2&&S&1&&A)if(C===0)A.beforeEnter(k),r(k,m,y),ut(()=>A.enter(k),T);else{const{leave:U,delayLeave:q,afterLeave:Q}=A,ce=()=>r(k,m,y),Se=()=>{U(k,()=>{ce(),Q&&Q()})};q?q(k,ce,Se):Se()}else r(k,m,y)},St=(d,m,y,C=!1,T=!1)=>{const{type:k,props:P,ref:A,children:R,dynamicChildren:S,shapeFlag:H,patchFlag:U,dirs:q}=d;if(A!=null&&Rl(A,null,y,d,!0),H&256){m.ctx.deactivate(d);return}const Q=H&1&&q,ce=!Sl(d);let Se;if(ce&&(Se=P&&P.onVnodeBeforeUnmount)&&Ht(Se,m,d),H&6)$(d.component,y,C);else{if(H&128){d.suspense.unmount(y,C);return}Q&&Xn(d,null,m,"beforeUnmount"),H&64?d.type.remove(d,m,y,T,we,C):S&&(k!==et||U>0&&U&64)?N(S,m,y,!1,!0):(k===et&&U&384||!T&&H&16)&&N(R,m,y),C&&Mc(d)}(ce&&(Se=P&&P.onVnodeUnmounted)||Q)&&ut(()=>{Se&&Ht(Se,m,d),Q&&Xn(d,null,m,"unmounted")},y)},Mc=d=>{const{type:m,el:y,anchor:C,transition:T}=d;if(m===et){_(y,C);return}if(m===No){G(d);return}const k=()=>{i(y),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(d.shapeFlag&1&&T&&!T.persisted){const{leave:P,delayLeave:A}=T,R=()=>P(y,k);A?A(d.el,k,R):R()}else k()},_=(d,m)=>{let y;for(;d!==m;)y=h(d),i(d),d=y;i(m)},$=(d,m,y)=>{const{bum:C,scope:T,update:k,subTree:P,um:A}=d;C&&Oo(C),T.stop(),k&&(k.active=!1,St(P,d,m,y)),A&&ut(A,m),ut(()=>{d.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},N=(d,m,y,C=!1,T=!1,k=0)=>{for(let P=k;P<d.length;P++)St(d[P],m,y,C,T)},j=d=>d.shapeFlag&6?j(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),me=(d,m,y)=>{d==null?m._vnode&&St(m._vnode,null,null,!0):w(m._vnode||null,d,m,null,null,null,y),dg(),m._vnode=d},we={p:w,um:St,m:Bt,r:Mc,mt:tn,mc:ie,pc:mt,pbc:Ue,n:j,o:t};let se,te;return e&&([se,te]=e(we)),{render:me,hydrate:se,createApp:q1(me,se)}}function Jn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Dg(t,e,n=!1){const r=t.children,i=e.children;if(X(r)&&X(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=kn(i[s]),a.el=o.el),n||Dg(o,a))}}function W1(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(i=n[n.length-1],t[i]<l){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const G1=t=>t.__isTeleport,Ku="components";function Ji(t,e){return Mg(Ku,t,!0,e)||t}const Lg=Symbol();function Wu(t){return Fe(t)?Mg(Ku,t,!1)||t:t||Lg}function Mg(t,e,n=!0,r=!1){const i=_t||Ve;if(i){const s=i.type;if(t===Ku){const a=c_(s);if(a&&(a===e||a===Jt(e)||a===$a(Jt(e))))return s}const o=rd(i[t]||s[t],e)||rd(i.appContext[t],e);return!o&&r?s:o}}function rd(t,e){return t&&(t[e]||t[Jt(e)]||t[$a(Jt(e))])}const et=Symbol(void 0),Gu=Symbol(void 0),Ft=Symbol(void 0),No=Symbol(void 0),Qi=[];let hr=null;function Ne(t=!1){Qi.push(hr=t?null:[])}function Y1(){Qi.pop(),hr=Qi[Qi.length-1]||null}let Jo=1;function id(t){Jo+=t}function Ug(t){return t.dynamicChildren=Jo>0?hr||Xr:null,Y1(),Jo>0&&hr&&hr.push(t),t}function Dt(t,e,n,r,i,s){return Ug(kr(t,e,n,r,i,s,!0))}function Kt(t,e,n,r,i){return Ug(Ge(t,e,n,r,i,!0))}function Qo(t){return t?t.__v_isVNode===!0:!1}function nr(t,e){return t.type===e.type&&t.key===e.key}const za="__vInternal",Fg=({key:t})=>t!=null?t:null,xo=({ref:t,ref_key:e,ref_for:n})=>t!=null?Fe(t)||We(t)||ne(t)?{i:_t,r:t,k:e,f:!!n}:t:null;function kr(t,e=null,n=null,r=0,i=null,s=t===et?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Fg(e),ref:e&&xo(e),scopeId:ja,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(Yu(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=Fe(n)?8:16),Jo>0&&!o&&hr&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&hr.push(c),c}const Ge=X1;function X1(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===Lg)&&(t=Ft),Qo(t)){const a=oi(t,e,!0);return n&&Yu(a,n),a}if(l_(t)&&(t=t.__vccOpts),e){e=J1(e);let{class:a,style:c}=e;a&&!Fe(a)&&(e.class=$n(a)),Re(c)&&(rg(c)&&!X(c)&&(c=Be({},c)),e.style=Ds(c))}const o=Fe(t)?1:w1(t)?128:G1(t)?64:Re(t)?4:ne(t)?2:0;return kr(t,e,n,r,i,o,s,!0)}function J1(t){return t?rg(t)||za in t?Be({},t):t:null}function oi(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Wa(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Fg(a),ref:e&&e.ref?n&&i?X(i)?i.concat(xo(e)):[i,xo(e)]:xo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==et?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&oi(t.ssContent),ssFallback:t.ssFallback&&oi(t.ssFallback),el:t.el,anchor:t.anchor}}function Ka(t=" ",e=0){return Ge(Gu,null,t,e)}function UD(t,e){const n=Ge(No,null,t);return n.staticCount=e,n}function $c(t="",e=!1){return e?(Ne(),Kt(Ft,null,t)):Ge(Ft,null,t)}function qt(t){return t==null||typeof t=="boolean"?Ge(Ft):X(t)?Ge(et,null,t.slice()):typeof t=="object"?kn(t):Ge(Gu,null,String(t))}function kn(t){return t.el===null||t.memo?t:oi(t)}function Yu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(X(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Yu(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(za in e)?e._ctx=_t:i===3&&_t&&(_t.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:_t},n=32):(e=String(e),r&64?(n=16,e=[Ka(e)]):n=8);t.children=e,t.shapeFlag|=n}function Wa(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=$n([e.class,r.class]));else if(i==="style")e.style=Ds([e.style,r.style]);else if(La(i)){const s=e[i],o=r[i];o&&s!==o&&!(X(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Ht(t,e,n,r=null){kt(t,e,7,[n,r])}function sd(t,e,n,r){let i;const s=n&&n[r];if(X(t)||Fe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Re(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}function Q1(t,e,n={},r,i){if(_t.isCE)return Ge("slot",e==="default"?null:{name:e},r&&r());let s=t[e];s&&s._c&&(s._d=!1),Ne();const o=s&&$g(s(n)),a=Kt(et,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function $g(t){return t.some(e=>Qo(e)?!(e.type===Ft||e.type===et&&!$g(e.children)):!0)?t:null}function Z1(t){const e={};for(const n in t)e[ko(n)]=t[n];return e}const Nl=t=>t?Vg(t)?Ju(t)||t.proxy:Nl(t.parent):null,Zo=Be(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Nl(t.parent),$root:t=>Nl(t.root),$emit:t=>t.emit,$options:t=>Ag(t),$forceUpdate:t=>()=>ug(t.update),$nextTick:t=>Bu.bind(t.proxy),$watch:t=>E1.bind(t)}),e_={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(r!==ye&&ue(r,e))return o[e]=1,r[e];if(i!==ye&&ue(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&ue(l,e))return o[e]=3,s[e];if(n!==ye&&ue(n,e))return o[e]=4,n[e];Al&&(o[e]=0)}}const u=Zo[e];let f,h;if(u)return e==="$attrs"&&Tt(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ye&&ue(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,ue(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return i!==ye&&ue(i,e)?(i[e]=n,!0):r!==ye&&ue(r,e)?(r[e]=n,!0):ue(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==ye&&ue(t,o)||e!==ye&&ue(e,o)||(a=s[0])&&ue(a,o)||ue(r,o)||ue(Zo,o)||ue(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?this.set(t,e,n.get(),null):n.value!=null&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},t_=Pg();let n_=0;function r_(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||t_,s={uid:n_++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Rw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Og(r,i),emitsOptions:mg(r,i),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:r.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=m1.bind(null,s),t.ce&&t.ce(s),s}let Ve=null;const Xu=()=>Ve||_t,ai=t=>{Ve=t,t.scope.on()},dr=()=>{Ve&&Ve.scope.off(),Ve=null};function Vg(t){return t.vnode.shapeFlag&4}let gs=!1;function i_(t,e=!1){gs=e;const{props:n,children:r}=t.vnode,i=Vg(t);F1(t,n,i,e),B1(t,r);const s=i?s_(t,e):void 0;return gs=!1,s}function s_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ig(new Proxy(t.ctx,e_));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?a_(t):null;ai(t),Ei();const s=Ln(r,t,0,[t.props,i]);if(Ti(),dr(),jm(s)){if(s.then(dr,dr),e)return s.then(o=>{od(t,o,e)}).catch(o=>{Ba(o,t,0)});t.asyncDep=s}else od(t,s,e)}else Bg(t,e)}function od(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Re(e)&&(t.setupState=cg(e)),Bg(t,n)}let ad;function Bg(t,e,n){const r=t.type;if(!t.render){if(!e&&ad&&!r.render){const i=r.template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Be(Be({isCustomElement:s,delimiters:a},o),c);r.render=ad(i,l)}}t.render=r.render||Ut}ai(t),Ei(),P1(t),Ti(),dr()}function o_(t){return new Proxy(t.attrs,{get(e,n){return Tt(t,"get","$attrs"),e[n]}})}function a_(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=o_(t))},slots:t.slots,emit:t.emit,expose:e}}function Ju(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(cg(ig(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Zo)return Zo[n](t)}}))}function c_(t){return ne(t)&&t.displayName||t.name}function l_(t){return ne(t)&&"__vccOpts"in t}const xe=(t,e)=>l1(t,e,gs);function Ms(t,e,n){const r=arguments.length;return r===2?Re(e)&&!X(e)?Qo(e)?Ge(t,null,[e]):Ge(t,e):Ge(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Qo(n)&&(n=[n]),Ge(t,e,n))}const u_="3.2.31",f_="http://www.w3.org/2000/svg",rr=typeof document!="undefined"?document:null,cd=rr&&rr.createElement("template"),h_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?rr.createElementNS(f_,t):rr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>rr.createTextNode(t),createComment:t=>rr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>rr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{cd.innerHTML=r?`<svg>${t}</svg>`:t;const a=cd.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function d_(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function p_(t,e,n){const r=t.style,i=Fe(n);if(n&&!i){for(const s in n)xl(r,s,n[s]);if(e&&!Fe(e))for(const s in e)n[s]==null&&xl(r,s,"")}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const ld=/\s*!important$/;function xl(t,e,n){if(X(n))n.forEach(r=>xl(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=m_(t,e);ld.test(n)?t.setProperty(_i(r),n.replace(ld,""),"important"):t[r]=n}}const ud=["Webkit","Moz","ms"],Vc={};function m_(t,e){const n=Vc[e];if(n)return n;let r=Jt(e);if(r!=="filter"&&r in t)return Vc[e]=r;r=$a(r);for(let i=0;i<ud.length;i++){const s=ud[i]+r;if(s in t)return Vc[e]=s}return e}const fd="http://www.w3.org/1999/xlink";function g_(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(fd,e.slice(6,e.length)):t.setAttributeNS(fd,e,n);else{const s=vw(e);n==null||s&&!$m(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function v_(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=$m(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let ea=Date.now,jg=!1;if(typeof window!="undefined"){ea()>document.createEvent("Event").timeStamp&&(ea=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);jg=!!(t&&Number(t[1])<=53)}let Pl=0;const y_=Promise.resolve(),b_=()=>{Pl=0},w_=()=>Pl||(y_.then(b_),Pl=ea());function ir(t,e,n,r){t.addEventListener(e,n,r)}function __(t,e,n,r){t.removeEventListener(e,n,r)}function E_(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=T_(e);if(r){const l=s[e]=I_(r,i);ir(t,a,l,c)}else o&&(__(t,a,o,c),s[e]=void 0)}}const hd=/(?:Once|Passive|Capture)$/;function T_(t){let e;if(hd.test(t)){e={};let n;for(;n=t.match(hd);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[_i(t.slice(2)),e]}function I_(t,e){const n=r=>{const i=r.timeStamp||ea();(jg||i>=n.attached-1)&&kt(C_(r,n.value),e,5,[r])};return n.value=t,n.attached=w_(),n}function C_(t,e){if(X(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const dd=/^on[a-z]/,S_=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?d_(t,r,i):e==="style"?p_(t,n,r):La(e)?Ou(e)||E_(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):A_(t,e,r,i))?v_(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),g_(t,e,r,i))};function A_(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&dd.test(e)&&ne(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||dd.test(e)&&Fe(n)?!1:e in t}const En="transition",$i="animation",Hg=(t,{slots:e})=>Ms(bg,zg(t),e);Hg.displayName="Transition";const qg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},k_=Hg.props=Be({},bg.props,qg),Qn=(t,e=[])=>{X(t)?t.forEach(n=>n(...e)):t&&t(...e)},pd=t=>t?X(t)?t.some(e=>e.length>1):t.length>1:!1;function zg(t){const e={};for(const B in t)B in qg||(e[B]=t[B]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=O_(i),E=g&&g[0],w=g&&g[1],{onBeforeEnter:v,onEnter:b,onEnterCancelled:x,onLeave:D,onLeaveCancelled:G,onBeforeAppear:re=v,onAppear:K=b,onAppearCancelled:he=x}=e,ie=(B,ke,lt)=>{er(B,ke?u:a),er(B,ke?l:o),lt&&lt()},Me=(B,ke)=>{er(B,p),er(B,h),ke&&ke()},Ue=B=>(ke,lt)=>{const tn=B?K:b,Oe=()=>ie(ke,B,lt);Qn(tn,[ke,Oe]),md(()=>{er(ke,B?c:s),sn(ke,B?u:a),pd(tn)||gd(ke,r,E,Oe)})};return Be(e,{onBeforeEnter(B){Qn(v,[B]),sn(B,s),sn(B,o)},onBeforeAppear(B){Qn(re,[B]),sn(B,c),sn(B,l)},onEnter:Ue(!1),onAppear:Ue(!0),onLeave(B,ke){const lt=()=>Me(B,ke);sn(B,f),Wg(),sn(B,h),md(()=>{er(B,f),sn(B,p),pd(D)||gd(B,r,w,lt)}),Qn(D,[B,lt])},onEnterCancelled(B){ie(B,!1),Qn(x,[B])},onAppearCancelled(B){ie(B,!0),Qn(he,[B])},onLeaveCancelled(B){Me(B),Qn(G,[B])}})}function O_(t){if(t==null)return null;if(Re(t))return[Bc(t.enter),Bc(t.leave)];{const e=Bc(t);return[e,e]}}function Bc(t){return us(t)}function sn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function er(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function md(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let R_=0;function gd(t,e,n,r){const i=t._endId=++R_,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=Kg(t,e);if(!o)return r();const l=o+"end";let u=0;const f=()=>{t.removeEventListener(l,h),s()},h=p=>{p.target===t&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),t.addEventListener(l,h)}function Kg(t,e){const n=window.getComputedStyle(t),r=g=>(n[g]||"").split(", "),i=r(En+"Delay"),s=r(En+"Duration"),o=vd(i,s),a=r($i+"Delay"),c=r($i+"Duration"),l=vd(a,c);let u=null,f=0,h=0;e===En?o>0&&(u=En,f=o,h=s.length):e===$i?l>0&&(u=$i,f=l,h=c.length):(f=Math.max(o,l),u=f>0?o>l?En:$i:null,h=u?u===En?s.length:c.length:0);const p=u===En&&/\b(transform|all)(,|$)/.test(n[En+"Property"]);return{type:u,timeout:f,propCount:h,hasTransform:p}}function vd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>yd(n)+yd(t[r])))}function yd(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Wg(){return document.body.offsetHeight}const Gg=new WeakMap,Yg=new WeakMap,N_={name:"TransitionGroup",props:Be({},k_,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Xu(),r=yg();let i,s;return Tg(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!M_(i[0].el,n.vnode.el,o))return;i.forEach(P_),i.forEach(D_);const a=i.filter(L_);Wg(),a.forEach(c=>{const l=c.el,u=l.style;sn(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=l._moveCb=h=>{h&&h.target!==l||(!h||/transform$/.test(h.propertyName))&&(l.removeEventListener("transitionend",f),l._moveCb=null,er(l,o))};l.addEventListener("transitionend",f)})}),()=>{const o=le(t),a=zg(o);let c=o.tag||et;i=s,s=e.default?qu(e.default()):[];for(let l=0;l<s.length;l++){const u=s[l];u.key!=null&&ms(u,ps(u,a,r,n))}if(i)for(let l=0;l<i.length;l++){const u=i[l];ms(u,ps(u,a,r,n)),Gg.set(u,u.el.getBoundingClientRect())}return Ge(c,null,s)}}},x_=N_;function P_(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function D_(t){Yg.set(t,t.el.getBoundingClientRect())}function L_(t){const e=Gg.get(t),n=Yg.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${i}px)`,s.transitionDuration="0s",t}}function M_(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:s}=Kg(r);return i.removeChild(r),s}const ta=t=>{const e=t.props["onUpdate:modelValue"];return X(e)?n=>Oo(e,n):e};function U_(t){t.target.composing=!0}function bd(t){const e=t.target;e.composing&&(e.composing=!1,F_(e,"input"))}function F_(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const FD={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=ta(i);const s=r||i.props&&i.props.type==="number";ir(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():s&&(a=us(a)),t._assign(a)}),n&&ir(t,"change",()=>{t.value=t.value.trim()}),e||(ir(t,"compositionstart",U_),ir(t,"compositionend",bd),ir(t,"change",bd))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=ta(s),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&us(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},$D={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=Ma(e);ir(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?us(na(o)):na(o));t._assign(t.multiple?i?new Set(s):s:s[0])}),t._assign=ta(r)},mounted(t,{value:e}){wd(t,e)},beforeUpdate(t,e,n){t._assign=ta(n)},updated(t,{value:e}){wd(t,e)}};function wd(t,e){const n=t.multiple;if(!(n&&!X(e)&&!Ma(e))){for(let r=0,i=t.options.length;r<i;r++){const s=t.options[r],o=na(s);if(n)X(e)?s.selected=Ew(e,o)>-1:s.selected=e.has(o);else if(Da(na(s),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function na(t){return"_value"in t?t._value:t.value}const $_=["ctrl","shift","alt","meta"],V_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>$_.some(n=>t[`${n}Key`]&&!e.includes(n))},B_=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=V_[e[i]];if(s&&s(n,e))return}return t(n,...r)},j_=Be({patchProp:S_},h_);let _d;function H_(){return _d||(_d=z1(j_))}const q_=(...t)=>{const e=H_().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=z_(r);if(!i)return;const s=e._component;!ne(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function z_(t){return Fe(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},K_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Jg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(h=64)),r.push(n[u],n[f],n[h],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):K_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||f==null)throw Error();const h=s<<2|a>>4;if(r.push(h),l!==64){const p=a<<4&240|l>>2;if(r.push(p),f!==64){const g=l<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Qg=function(t){const e=Xg(t);return Jg.encodeByteArray(e,!0)},W_=function(t){try{return Jg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zg(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function ev(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Y_(){return je().indexOf("Electron/")>=0}function nv(){const t=je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function X_(){return je().indexOf("MSAppHost/")>=0}function J_(){return typeof indexedDB=="object"}function Q_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="FirebaseError";class Or extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=Z_,Object.setPrototypeOf(this,Or.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Us.prototype.create)}}class Us{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?eE(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Or(i,a,r)}}function eE(t,e){return t.replace(tE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const tE=/\{\$([^}]+)}/g;function nE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ra(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ed(s)&&Ed(o)){if(!ra(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ed(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function zi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function rE(t,e){const n=new iE(t,e);return n.subscribe.bind(n)}class iE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=jc),i.error===void 0&&(i.error=jc),i.complete===void 0&&(i.complete=jc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t){return t&&t._delegate?t._delegate:t}class gr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new G_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cE(e))try{this.getOrInitializeService({instanceIdentifier:tr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=tr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tr){return this.instances.has(e)}getOptions(e=tr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:aE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=tr){return this.component?this.component.multipleInstances?e:tr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aE(t){return t===tr?void 0:t}function cE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new oE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const uE={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},fE=fe.INFO,hE={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},dE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=hE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qu{constructor(e){this.name=e,this._logLevel=fE,this._logHandler=dE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}function pE(t){return Array.prototype.slice.call(t)}function rv(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function Zu(t,e,n){var r,i=new Promise(function(s,o){r=t[e].apply(t,n),rv(r).then(s,o)});return i.request=r,i}function mE(t,e,n){var r=Zu(t,e,n);return r.then(function(i){if(!!i)return new vs(i,r.request)})}function Ci(t,e,n){n.forEach(function(r){Object.defineProperty(t.prototype,r,{get:function(){return this[e][r]},set:function(i){this[e][r]=i}})})}function ef(t,e,n,r){r.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return Zu(this[e],i,arguments)})})}function Ga(t,e,n,r){r.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return this[e][i].apply(this[e],arguments)})})}function iv(t,e,n,r){r.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return mE(this[e],i,arguments)})})}function Rr(t){this._index=t}Ci(Rr,"_index",["name","keyPath","multiEntry","unique"]);ef(Rr,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);iv(Rr,"_index",IDBIndex,["openCursor","openKeyCursor"]);function vs(t,e){this._cursor=t,this._request=e}Ci(vs,"_cursor",["direction","key","primaryKey","value"]);ef(vs,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(vs.prototype[t]=function(){var e=this,n=arguments;return Promise.resolve().then(function(){return e._cursor[t].apply(e._cursor,n),rv(e._request).then(function(r){if(!!r)return new vs(r,e._request)})})})});function Zt(t){this._store=t}Zt.prototype.createIndex=function(){return new Rr(this._store.createIndex.apply(this._store,arguments))};Zt.prototype.index=function(){return new Rr(this._store.index.apply(this._store,arguments))};Ci(Zt,"_store",["name","keyPath","indexNames","autoIncrement"]);ef(Zt,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);iv(Zt,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);Ga(Zt,"_store",IDBObjectStore,["deleteIndex"]);function $s(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}$s.prototype.objectStore=function(){return new Zt(this._tx.objectStore.apply(this._tx,arguments))};Ci($s,"_tx",["objectStoreNames","mode"]);Ga($s,"_tx",IDBTransaction,["abort"]);function Ya(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new $s(n)}Ya.prototype.createObjectStore=function(){return new Zt(this._db.createObjectStore.apply(this._db,arguments))};Ci(Ya,"_db",["name","version","objectStoreNames"]);Ga(Ya,"_db",IDBDatabase,["deleteObjectStore","close"]);function Xa(t){this._db=t}Xa.prototype.transaction=function(){return new $s(this._db.transaction.apply(this._db,arguments))};Ci(Xa,"_db",["name","version","objectStoreNames"]);Ga(Xa,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(t){[Zt,Rr].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var n=pE(arguments),r=n[n.length-1],i=this._store||this._index,s=i[t].apply(i,n.slice(0,-1));s.onsuccess=function(){r(s.result)}})})});[Rr,Zt].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(e,n){var r=this,i=[];return new Promise(function(s){r.iterateCursor(e,function(o){if(!o){s(i);return}if(i.push(o.value),n!==void 0&&i.length==n){s(i);return}o.continue()})})})});function gE(t,e,n){var r=Zu(indexedDB,"open",[t,e]),i=r.request;return i&&(i.onupgradeneeded=function(s){n&&n(new Ya(i.result,s.oldVersion,i.transaction))}),r.then(function(s){return new Xa(s)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dl="@firebase/app",Td="0.7.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=new Qu("@firebase/app"),bE="@firebase/app-compat",wE="@firebase/analytics-compat",_E="@firebase/analytics",EE="@firebase/app-check-compat",TE="@firebase/app-check",IE="@firebase/auth",CE="@firebase/auth-compat",SE="@firebase/database",AE="@firebase/database-compat",kE="@firebase/functions",OE="@firebase/functions-compat",RE="@firebase/installations",NE="@firebase/installations-compat",xE="@firebase/messaging",PE="@firebase/messaging-compat",DE="@firebase/performance",LE="@firebase/performance-compat",ME="@firebase/remote-config",UE="@firebase/remote-config-compat",FE="@firebase/storage",$E="@firebase/storage-compat",VE="@firebase/firestore",BE="@firebase/firestore-compat",jE="firebase",HE="9.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv="[DEFAULT]",qE={[Dl]:"fire-core",[bE]:"fire-core-compat",[_E]:"fire-analytics",[wE]:"fire-analytics-compat",[TE]:"fire-app-check",[EE]:"fire-app-check-compat",[IE]:"fire-auth",[CE]:"fire-auth-compat",[SE]:"fire-rtdb",[AE]:"fire-rtdb-compat",[kE]:"fire-fn",[OE]:"fire-fn-compat",[RE]:"fire-iid",[NE]:"fire-iid-compat",[xE]:"fire-fcm",[PE]:"fire-fcm-compat",[DE]:"fire-perf",[LE]:"fire-perf-compat",[ME]:"fire-rc",[UE]:"fire-rc-compat",[FE]:"fire-gcs",[$E]:"fire-gcs-compat",[VE]:"fire-fst",[BE]:"fire-fst-compat","fire-js":"fire-js",[jE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=new Map,Ll=new Map;function zE(t,e){try{t.container.addComponent(e)}catch(n){tf.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ci(t){const e=t.name;if(Ll.has(e))return tf.debug(`There were multiple attempts to register component ${e}.`),!1;Ll.set(e,t);for(const n of ia.values())zE(n,t);return!0}function nf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Bn=new Us("app","Firebase",KE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=HE;function VD(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:sv,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Bn.create("bad-app-name",{appName:String(r)});const i=ia.get(r);if(i){if(ra(t,i.options)&&ra(n,i.config))return i;throw Bn.create("duplicate-app",{appName:r})}const s=new lE(r);for(const a of Ll.values())s.addComponent(a);const o=new WE(t,n,s);return ia.set(r,o),o}function ov(t=sv){const e=ia.get(t);if(!e)throw Bn.create("no-app",{appName:t});return e}function Mn(t,e,n){var r;let i=(r=qE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tf.warn(a.join(" "));return}ci(new gr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE="firebase-heartbeat-database",YE=1,vr="firebase-heartbeat-store";let Hc=null;function rf(){return Hc||(Hc=gE(GE,YE,t=>{switch(t.oldVersion){case 0:t.createObjectStore(vr)}}).catch(t=>{throw Bn.create("storage-open",{originalErrorMessage:t.message})})),Hc}async function XE(t){try{return(await rf()).transaction(vr).objectStore(vr).get(sf(t))}catch(e){throw Bn.create("storage-get",{originalErrorMessage:e.message})}}async function qc(t,e){try{const r=(await rf()).transaction(vr,"readwrite");return await r.objectStore(vr).put(e,sf(t)),r.complete}catch(n){throw Bn.create("storage-set",{originalErrorMessage:n.message})}}async function JE(t){try{const n=(await rf()).transaction(vr,"readwrite");return await n.objectStore(vr).delete(sf(t)),n.complete}catch(e){throw Bn.create("storage-delete",{originalErrorMessage:e.message})}}function sf(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=1024,ZE=30*24*60*60*1e3;class eT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=tT();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!this._heartbeatsCache.some(i=>i.date===r))return this._heartbeatsCache.push({date:r,userAgent:n}),this._heartbeatsCache=this._heartbeatsCache.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=ZE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null)return"";const{heartbeatsToSend:e,unsentEntries:n}=nT(this._heartbeatsCache),r=Qg(JSON.stringify({version:2,heartbeats:e}));return n.length>0?(this._heartbeatsCache=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache=null,this._storage.deleteAll()),r}}function tT(){return new Date().toISOString().substring(0,10)}function nT(t,e=QE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.userAgent===i.userAgent);if(s){if(s.dates.push(i.date),Id(n)>e){s.dates.pop();break}}else if(n.push({userAgent:i.userAgent,dates:[i.date]}),Id(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class rT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return J_()?Q_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await XE(this.app);return(n==null?void 0:n.heartbeats)||[]}else return[]}async overwrite(e){if(await this._canUseIndexedDBPromise)return qc(this.app,{heartbeats:e})}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return qc(this.app,{heartbeats:[...r,...e]})}else return}async delete(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return qc(this.app,{heartbeats:r.filter(i=>!e.includes(i))})}else return}async deleteAll(){if(await this._canUseIndexedDBPromise)return JE(this.app)}}function Id(t){return Qg(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(t){ci(new gr("platform-logger",e=>new vE(e),"PRIVATE")),ci(new gr("heartbeat",e=>new eT(e),"PRIVATE")),Mn(Dl,Td,t),Mn(Dl,Td,"esm2017"),Mn("fire-js","")}iT("");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function of(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function av(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sT=av,cv=new Us("auth","Firebase",av());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd=new Qu("@firebase/auth");function Po(t,...e){Cd.logLevel<=fe.ERROR&&Cd.error(`Auth (${Vs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t,...e){throw af(t,...e)}function Gt(t,...e){return af(t,...e)}function oT(t,e,n){const r=Object.assign(Object.assign({},sT()),{[e]:n});return new Us("auth","Firebase",r).create(e,{appName:t.name})}function af(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return cv.create(t,...e)}function Y(t,e,...n){if(!t)throw af(e,...n)}function an(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Po(e),new Error(e)}function pn(t,e){t||an(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd=new Map;function cn(t){pn(t instanceof Function,"Expected a class definition");let e=Sd.get(t);return e?(pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sd.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(t,e){const n=nf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ra(s,e!=null?e:{}))return i;$t(i,"already-initialized")}return n.initialize({options:e})}function cT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(cn);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lT(){return Ad()==="http:"||Ad()==="https:"}function Ad(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lT()||ev()||"connection"in navigator)?navigator.onLine:!0}function fT(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n){this.shortDelay=e,this.longDelay=n,pn(n>e,"Short delay should be less than long delay!"),this.isMobile=Zg()||tv()}get(){return uT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(t,e){pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;an("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;an("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;an("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT=new Bs(3e4,6e4);function Si(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Nr(t,e,n,r,i={}){return uv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Fs(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),lv.fetch()(fv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function uv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},hT),e);try{const i=new pT(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw zc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw zc(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw zc(t,"email-already-in-use",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw oT(t,u,l);$t(t,u)}}catch(i){if(i instanceof Or)throw i;$t(t,"network-request-failed")}}async function js(t,e,n,r,i={}){const s=await Nr(t,e,n,r,i);return"mfaPendingCredential"in s&&$t(t,"multi-factor-auth-required",{_serverResponse:s}),s}function fv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?cf(t.config,i):`${t.config.apiScheme}://${i}`}class pT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),dT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Gt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mT(t,e){return Nr(t,"POST","/v1/accounts:delete",e)}async function gT(t,e){return Nr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vT(t,e=!1){const n=rt(t),r=await n.getIdToken(e),i=lf(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Zi(Kc(i.auth_time)),issuedAtTime:Zi(Kc(i.iat)),expirationTime:Zi(Kc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Kc(t){return Number(t)*1e3}function lf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Po("JWT malformed, contained fewer than 3 sections"),null;try{const i=W_(n);return i?JSON.parse(i):(Po("Failed to decode base64 JWT payload"),null)}catch(i){return Po("Caught error parsing JWT payload as JSON",i),null}}function yT(t){const e=lf(t);return Y(e,"internal-error"),Y(typeof e.exp!="undefined","internal-error"),Y(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Or&&bT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function bT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zi(this.lastLoginAt),this.creationTime=Zi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sa(t){var e;const n=t.auth,r=await t.getIdToken(),i=await li(t,gT(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?TT(s.providerUserInfo):[],a=ET(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new hv(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function _T(t){const e=rt(t);await sa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ET(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function TT(t){return t.map(e=>{var{providerId:n}=e,r=of(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IT(t,e){const n=await uv(t,{},async()=>{const r=Fs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=fv(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",lv.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken!="undefined","internal-error"),Y(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):yT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await IT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ys;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ys,this.toJSON())}_performRefresh(){return an("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t,e){Y(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class pr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=of(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new hv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await li(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vT(this,e)}reload(){return _T(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await sa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await li(this,mT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,v=(l=n.createdAt)!==null&&l!==void 0?l:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:x,emailVerified:D,isAnonymous:G,providerData:re,stsTokenManager:K}=n;Y(x&&K,e,"internal-error");const he=ys.fromJSON(this.name,K);Y(typeof x=="string",e,"internal-error"),Tn(f,e.name),Tn(h,e.name),Y(typeof D=="boolean",e,"internal-error"),Y(typeof G=="boolean",e,"internal-error"),Tn(p,e.name),Tn(g,e.name),Tn(E,e.name),Tn(w,e.name),Tn(v,e.name),Tn(b,e.name);const ie=new pr({uid:x,auth:e,email:h,emailVerified:D,displayName:f,isAnonymous:G,photoURL:g,phoneNumber:p,tenantId:E,stsTokenManager:he,createdAt:v,lastLoginAt:b});return re&&Array.isArray(re)&&(ie.providerData=re.map(Me=>Object.assign({},Me))),w&&(ie._redirectEventId=w),ie}static async _fromIdTokenResponse(e,n,r=!1){const i=new ys;i.updateFromServerResponse(n);const s=new pr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await sa(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dv.type="NONE";const kd=dv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t,e,n){return`firebase:${t}:${e}:${n}`}class ei{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Do(this.userKey,i.apiKey,s),this.fullPersistenceKey=Do("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ei(cn(kd),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||cn(kd);const o=Do(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=pr._fromJSON(e,u);l!==s&&(a=f),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new ei(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new ei(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yv(e))return"Blackberry";if(bv(e))return"Webos";if(uf(e))return"Safari";if((e.includes("chrome/")||mv(e))&&!e.includes("edge/"))return"Chrome";if(vv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pv(t=je()){return/firefox\//i.test(t)}function uf(t=je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mv(t=je()){return/crios\//i.test(t)}function gv(t=je()){return/iemobile/i.test(t)}function vv(t=je()){return/android/i.test(t)}function yv(t=je()){return/blackberry/i.test(t)}function bv(t=je()){return/webos/i.test(t)}function Ja(t=je()){return/iphone|ipad|ipod/i.test(t)}function CT(t=je()){var e;return Ja(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function ST(){return nv()&&document.documentMode===10}function wv(t=je()){return Ja(t)||vv(t)||bv(t)||yv(t)||/windows phone/i.test(t)||gv(t)}function AT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(t,e=[]){let n;switch(t){case"Browser":n=Od(je());break;case"Worker":n=`${Od(je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vs}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rd(this),this.idTokenSubscription=new Rd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ei.create(this,e),!this._deleted)){if((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await sa(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?rt(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(cn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Us("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await ei.create(this,[cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Y(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_v(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Qa(t){return rt(t)}class Rd{constructor(e){this.auth=e,this.observer=null,this.addObserver=rE(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return an("not implemented")}_getIdTokenResponse(e){return an("not implemented")}_linkToIdToken(e,n){return an("not implemented")}_getReauthenticationResolver(e){return an("not implemented")}}async function OT(t,e){return Nr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RT(t,e){return js(t,"POST","/v1/accounts:signInWithPassword",Si(t,e))}async function Ev(t,e){return Nr(t,"POST","/v1/accounts:sendOobCode",Si(t,e))}async function NT(t,e){return Ev(t,e)}async function xT(t,e){return Ev(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PT(t,e){return js(t,"POST","/v1/accounts:signInWithEmailLink",Si(t,e))}async function DT(t,e){return js(t,"POST","/v1/accounts:signInWithEmailLink",Si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends ff{constructor(e,n,r,i=null){super("password",r);this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new bs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new bs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return RT(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return PT(e,{email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return OT(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return DT(e,{idToken:n,email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(t,e){return js(t,"POST","/v1/accounts:signInWithIdp",Si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT="http://localhost";class yr extends ff{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=of(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new yr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ti(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ti(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ti(e,n)}buildRequest(){const e={requestUri:LT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UT(t){const e=qi(zi(t)).link,n=e?qi(zi(e)).deep_link_id:null,r=qi(zi(t)).deep_link_id;return(r?qi(zi(r)).link:null)||r||n||e||t}class hf{constructor(e){var n,r,i,s,o,a;const c=qi(zi(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=MT((i=c.mode)!==null&&i!==void 0?i:null);Y(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=UT(e);try{return new hf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.providerId=Ai.PROVIDER_ID}static credential(e,n){return bs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=hf.parseLink(n);return Y(r,"argument-error"),bs._fromEmailAndCode(e,r.code,r.tenantId)}}Ai.PROVIDER_ID="password";Ai.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ai.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends Tv{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Hs{constructor(){super("facebook.com")}static credential(e){return yr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Hs{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return yr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Hs{constructor(){super("github.com")}static credential(e){return yr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.GITHUB_SIGN_IN_METHOD="github.com";xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Hs{constructor(){super("twitter.com")}static credential(e,n){return yr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pn.credential(n,r)}catch{return null}}}Pn.TWITTER_SIGN_IN_METHOD="twitter.com";Pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FT(t,e){return js(t,"POST","/v1/accounts:signUp",Si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await pr._fromIdTokenResponse(e,r,i),o=Nd(r);return new br({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Nd(r);return new br({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Nd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa extends Or{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,Object.setPrototypeOf(this,oa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new oa(e,n,r,i)}}function Iv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?oa._fromErrorAndOperation(t,s,e,r):s})}async function $T(t,e,n=!1){const r=await li(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return br._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VT(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await li(t,Iv(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=lf(s.idToken);Y(o,r,"internal-error");const{sub:a}=o;return Y(t.uid===a,r,"user-mismatch"),br._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$t(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cv(t,e,n=!1){const r="signIn",i=await Iv(t,r,e),s=await br._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function BT(t,e){return Cv(Qa(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(t,e,n){var r;Y(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),Y(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(Y(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(Y(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BD(t,e,n){const r=rt(t),i={requestType:"PASSWORD_RESET",email:e};n&&Sv(r,i,n),await xT(r,i)}async function jD(t,e,n){const r=Qa(t),i=await FT(r,{returnSecureToken:!0,email:e,password:n}),s=await br._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function HD(t,e,n){return BT(rt(t),Ai.credential(e,n))}async function qD(t,e){const n=rt(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&Sv(n.auth,i,e);const{email:s}=await NT(n.auth,i);s!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jT(t,e){return Nr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zD(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=rt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await li(r,jT(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function KD(t,e,n,r){return rt(t).onAuthStateChanged(e,n,r)}function WD(t){return rt(t).signOut()}const aa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(aa,"1"),this.storage.removeItem(aa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(){const t=je();return uf(t)||Ja(t)}const qT=1e3,zT=10;class kv extends Av{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=HT()&&AT(),this.fallbackToPolling=wv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ST()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},qT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kv.type="LOCAL";const KT=kv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov extends Av{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ov.type="SESSION";const Rv=Ov;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Za(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await WT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Za.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=df("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return window}function YT(t){Yt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(){return typeof Yt().WorkerGlobalScope!="undefined"&&typeof Yt().importScripts=="function"}async function XT(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function QT(){return Nv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv="firebaseLocalStorageDb",ZT=1,ca="firebaseLocalStorage",Pv="fbase_key";class qs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ec(t,e){return t.transaction([ca],e?"readwrite":"readonly").objectStore(ca)}function eI(){const t=indexedDB.deleteDatabase(xv);return new qs(t).toPromise()}function Ul(){const t=indexedDB.open(xv,ZT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ca,{keyPath:Pv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ca)?e(r):(r.close(),await eI(),e(await Ul()))})})}async function xd(t,e,n){const r=ec(t,!0).put({[Pv]:e,value:n});return new qs(r).toPromise()}async function tI(t,e){const n=ec(t,!1).get(e),r=await new qs(n).toPromise();return r===void 0?null:r.value}function Pd(t,e){const n=ec(t,!0).delete(e);return new qs(n).toPromise()}const nI=800,rI=3;class Dv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ul(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>rI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Za._getInstance(QT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await XT(),!this.activeServiceWorker)return;this.sender=new GT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ul();return await xd(e,aa,"1"),await Pd(e,aa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>tI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ec(i,!1).getAll();return new qs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dv.type="LOCAL";const iI=Dv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function oI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Gt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",sI().appendChild(r)})}function aI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Bs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(t,e){return e?cn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf extends ff{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return ti(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ti(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ti(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lI(t){return Cv(t.auth,new pf(t),t.bypassAuthState)}function uI(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),VT(n,new pf(t),t.bypassAuthState)}async function fI(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),$T(n,new pf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lI;case"linkViaPopup":case"linkViaRedirect":return fI;case"reauthViaPopup":case"reauthViaRedirect":return uI;default:$t(this.auth,"internal-error")}}resolve(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=new Bs(2e3,1e4);class zr extends Lv{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,zr.currentPopupAction&&zr.currentPopupAction.cancel(),zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){pn(this.filter.length===1,"Popup operations only handle one event");const e=df();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,hI.get())};e()}}zr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI="pendingRedirect",Wc=new Map;class pI extends Lv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=Wc.get(this.auth._key());if(!e){try{const r=await mI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wc.set(this.auth._key(),e)}return this.bypassAuthState||Wc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mI(t,e){const n=vI(e),r=gI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function gI(t){return cn(t._redirectPersistence)}function vI(t){return Do(dI,t.config.apiKey,t.name)}async function yI(t,e,n=!1){const r=Qa(t),i=cI(r,e),o=await new pI(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI=10*60*1e3;class wI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_I(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Mv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dd(e))}saveEventToCache(e){this.cachedEventUids.add(Dd(e)),this.lastProcessedEventTime=Date.now()}}function Dd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Mv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _I(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(t,e={}){return Nr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,II=/^https?/;async function CI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await EI(t);for(const n of e)try{if(SI(n))return}catch{}$t(t,"unauthorized-domain")}function SI(t){const e=Ml(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!II.test(n))return!1;if(TI.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=new Bs(3e4,6e4);function Ld(){const t=Yt().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kI(t){return new Promise((e,n)=>{var r,i,s;function o(){Ld(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ld(),n(Gt(t,"network-request-failed"))},timeout:AI.get()})}if((i=(r=Yt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((s=Yt().gapi)===null||s===void 0?void 0:s.load)o();else{const a=aI("iframefcb");return Yt()[a]=()=>{gapi.load?o():n(Gt(t,"network-request-failed"))},oI(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Lo=null,e})}let Lo=null;function OI(t){return Lo=Lo||kI(t),Lo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=new Bs(5e3,15e3),NI="__/auth/iframe",xI="emulator/auth/iframe",PI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LI(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?cf(e,xI):`https://${t.config.authDomain}/${NI}`,r={apiKey:e.apiKey,appName:t.name,v:Vs},i=DI.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Fs(r).slice(1)}`}async function MI(t){const e=await OI(t),n=Yt().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:LI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),a=Yt().setTimeout(()=>{s(o)},RI.get());function c(){Yt().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FI=500,$I=600,VI="_blank",BI="http://localhost";class Md{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jI(t,e,n,r=FI,i=$I){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},UI),{width:r.toString(),height:i.toString(),top:s,left:o}),l=je().toLowerCase();n&&(a=mv(l)?VI:n),pv(l)&&(e=e||BI,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[p,g])=>`${h}${p}=${g},`,"");if(CT(l)&&a!=="_self")return HI(e||"",a),new Md(null);const f=window.open(e||"",a,u);Y(f,t,"popup-blocked");try{f.focus()}catch{}return new Md(f)}function HI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="__/auth/handler",zI="emulator/auth/handler";function Ud(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vs,eventId:i};if(e instanceof Tv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(e instanceof Hs){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${KI(t)}?${Fs(a).slice(1)}`}function KI({config:t}){return t.emulator?cf(t,zI):`https://${t.authDomain}/${qI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="webStorageSupport";class WI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rv,this._completeRedirectFn=yI}async _openPopup(e,n,r,i){var s;pn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Ud(e,n,r,Ml(),i);return jI(e,o,df())}async _openRedirect(e,n,r,i){return await this._originValidation(e),YT(Ud(e,n,r,Ml(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(pn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await MI(e),r=new wI(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gc,{type:Gc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Gc];o!==void 0&&n(!!o),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return wv()||uf()||Ja()}}const GI=WI;var Fd="@firebase/auth",$d="0.19.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function JI(t){ci(new gr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(o=>{Y(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),Y(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_v(t)},c=new kT(o,a);return cT(c,n),c})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ci(new gr("auth-internal",e=>{const n=Qa(e.getProvider("auth").getImmediate());return(r=>new YI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mn(Fd,$d,XI(t)),Mn(Fd,$d,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(t=ov()){const e=nf(t,"auth");return e.isInitialized()?e.getImmediate():aT(t,{popupRedirectResolver:GI,persistence:[iI,KT,Rv]})}JI("Browser");function QI(){return Uv().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Uv(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const ZI=typeof Proxy=="function",eC="devtools-plugin:setup",tC="plugin:settings:set";class nC{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let s=Object.assign({},r);try{const o=localStorage.getItem(i),a=JSON.parse(o);Object.assign(s,a)}catch{}this.fallbacks={getSettings(){return s},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch{}s=o}},n&&n.on(tC,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function rC(t,e){const n=t,r=Uv(),i=QI(),s=ZI&&n.enableEarlyProxy;if(i&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!s))i.emit(eC,t,e);else{const o=s?new nC(n,i):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Fv=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ki=t=>Fv?Symbol(t):"_vr_"+t,iC=ki("rvlm"),Vd=ki("rvd"),mf=ki("r"),$v=ki("rl"),Fl=ki("rvl"),qr=typeof window!="undefined";function sC(t){return t.__esModule||Fv&&t[Symbol.toStringTag]==="Module"}const ve=Object.assign;function Yc(t,e){const n={};for(const r in e){const i=e[r];n[r]=Array.isArray(i)?i.map(t):t(i)}return n}const es=()=>{},oC=/\/$/,aC=t=>t.replace(oC,"");function Xc(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),s=e.slice(a+1,c>-1?c:e.length),i=t(s)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=fC(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function cC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Bd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function lC(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&ui(e.matched[r],n.matched[i])&&Vv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ui(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Vv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!uC(t[n],e[n]))return!1;return!0}function uC(t,e){return Array.isArray(t)?jd(t,e):Array.isArray(e)?jd(e,t):t===e}function jd(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function fC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],!(i===1||o==="."))if(o==="..")i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var ws;(function(t){t.pop="pop",t.push="push"})(ws||(ws={}));var ts;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ts||(ts={}));function hC(t){if(!t)if(qr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),aC(t)}const dC=/^[^#]+#/;function pC(t,e){return t.replace(dC,"#")+e}function mC(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const tc=()=>({left:window.pageXOffset,top:window.pageYOffset});function gC(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=mC(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Hd(t,e){return(history.state?history.state.position-e:-1)+t}const $l=new Map;function vC(t,e){$l.set(t,e)}function yC(t){const e=$l.get(t);return $l.delete(t),e}let bC=()=>location.protocol+"//"+location.host;function Bv(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),Bd(c,"")}return Bd(n,t)+r+i}function wC(t,e,n,r){let i=[],s=[],o=null;const a=({state:h})=>{const p=Bv(t,location),g=n.value,E=e.value;let w=0;if(h){if(n.value=p,e.value=h,o&&o===g){o=null;return}w=E?h.position-E.position:0}else r(p);i.forEach(v=>{v(n.value,g,{delta:w,type:ws.pop,direction:w?w>0?ts.forward:ts.back:ts.unknown})})};function c(){o=n.value}function l(h){i.push(h);const p=()=>{const g=i.indexOf(h);g>-1&&i.splice(g,1)};return s.push(p),p}function u(){const{history:h}=window;!h.state||h.replaceState(ve({},h.state,{scroll:tc()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:f}}function qd(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?tc():null}}function _C(t){const{history:e,location:n}=window,r={value:Bv(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:bC()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),i.value=l}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function o(c,l){const u=ve({},e.state,qd(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function a(c,l){const u=ve({},i.value,e.state,{forward:c,scroll:tc()});s(u.current,u,!0);const f=ve({},qd(r.value,c,null),{position:u.position+1},l);s(c,f,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function YD(t){t=hC(t);const e=_C(t),n=wC(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=ve({location:"",base:t,go:r,createHref:pC.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function EC(t){return typeof t=="string"||t&&typeof t=="object"}function jv(t){return typeof t=="string"||typeof t=="symbol"}const In={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Hv=ki("nf");var zd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(zd||(zd={}));function fi(t,e){return ve(new Error,{type:t,[Hv]:!0},e)}function Cn(t,e){return t instanceof Error&&Hv in t&&(e==null||!!(t.type&e))}const Kd="[^/]+?",TC={sensitive:!1,strict:!1,start:!0,end:!0},IC=/[.+*?^${}()[\]/\\]/g;function CC(t,e){const n=ve({},TC,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let f=0;f<l.length;f++){const h=l[f];let p=40+(n.sensitive?.25:0);if(h.type===0)f||(i+="/"),i+=h.value.replace(IC,"\\$&"),p+=40;else if(h.type===1){const{value:g,repeatable:E,optional:w,regexp:v}=h;s.push({name:g,repeatable:E,optional:w});const b=v||Kd;if(b!==Kd){p+=10;try{new RegExp(`(${b})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${g}" (${b}): `+D.message)}}let x=E?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;f||(x=w&&l.length<2?`(?:/${x})`:"/"+x),w&&(x+="?"),i+=x,p+=20,w&&(p+=-8),E&&(p+=-20),b===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",g=s[h-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function c(l){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:E,optional:w}=p,v=g in l?l[g]:"";if(Array.isArray(v)&&!E)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const b=Array.isArray(v)?v.join("/"):v;if(!b)if(w)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=b}}return u}return{re:o,score:r,keys:s,parse:a,stringify:c}}function SC(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function AC(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=SC(r[n],i[n]);if(s)return s;n++}return i.length-r.length}const kC={type:0,value:""},OC=/[a-zA-Z0-9_]/;function RC(t){if(!t)return[[]];if(t==="/")return[[kC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,l="",u="";function f(){!l||(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:OC.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),i}function NC(t,e,n){const r=CC(RC(t.path),n),i=ve(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function xC(t,e){const n=[],r=new Map;e=Gd({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,f,h){const p=!h,g=DC(u);g.aliasOf=h&&h.record;const E=Gd(e,u),w=[g];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const D of x)w.push(ve({},g,{components:h?h.record.components:g.components,path:D,aliasOf:h?h.record:g}))}let v,b;for(const x of w){const{path:D}=x;if(f&&D[0]!=="/"){const G=f.record.path,re=G[G.length-1]==="/"?"":"/";x.path=f.record.path+(D&&re+D)}if(v=NC(x,f,E),h?h.alias.push(v):(b=b||v,b!==v&&b.alias.push(v),p&&u.name&&!Wd(v)&&o(u.name)),"children"in g){const G=g.children;for(let re=0;re<G.length;re++)s(G[re],v,h&&h.children[re])}h=h||v,c(v)}return b?()=>{o(b)}:es}function o(u){if(jv(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&AC(u,n[f])>=0&&(u.record.path!==n[f].record.path||!qv(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Wd(u)&&r.set(u.record.name,u)}function l(u,f){let h,p={},g,E;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw fi(1,{location:u});E=h.record.name,p=ve(PC(f.params,h.keys.filter(b=>!b.optional).map(b=>b.name)),u.params),g=h.stringify(p)}else if("path"in u)g=u.path,h=n.find(b=>b.re.test(g)),h&&(p=h.parse(g),E=h.record.name);else{if(h=f.name?r.get(f.name):n.find(b=>b.re.test(f.path)),!h)throw fi(1,{location:u,currentLocation:f});E=h.record.name,p=ve({},f.params,u.params),g=h.stringify(p)}const w=[];let v=h;for(;v;)w.unshift(v.record),v=v.parent;return{name:E,path:g,params:p,matched:w,meta:MC(w)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function PC(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function DC(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:LC(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function LC(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Wd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function MC(t){return t.reduce((e,n)=>ve(e,n.meta),{})}function Gd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function qv(t,e){return e.children.some(n=>n===t||qv(t,n))}const zv=/#/g,UC=/&/g,FC=/\//g,$C=/=/g,VC=/\?/g,Kv=/\+/g,BC=/%5B/g,jC=/%5D/g,Wv=/%5E/g,HC=/%60/g,Gv=/%7B/g,qC=/%7C/g,Yv=/%7D/g,zC=/%20/g;function gf(t){return encodeURI(""+t).replace(qC,"|").replace(BC,"[").replace(jC,"]")}function KC(t){return gf(t).replace(Gv,"{").replace(Yv,"}").replace(Wv,"^")}function Vl(t){return gf(t).replace(Kv,"%2B").replace(zC,"+").replace(zv,"%23").replace(UC,"%26").replace(HC,"`").replace(Gv,"{").replace(Yv,"}").replace(Wv,"^")}function WC(t){return Vl(t).replace($C,"%3D")}function GC(t){return gf(t).replace(zv,"%23").replace(VC,"%3F")}function YC(t){return t==null?"":GC(t).replace(FC,"%2F")}function la(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function XC(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Kv," "),o=s.indexOf("="),a=la(o<0?s:s.slice(0,o)),c=o<0?null:la(s.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Yd(t){let e="";for(let n in t){const r=t[n];if(n=WC(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(s=>s&&Vl(s)):[r&&Vl(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function JC(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}function Vi(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function On(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(fi(4,{from:n,to:e})):f instanceof Error?a(f):EC(f)?a(fi(2,{from:e,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),o())},l=t.call(r&&r.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function Jc(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(QC(a)){const l=(a.__vccOpts||a)[e];l&&i.push(On(l,n,r,s,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=sC(l)?l.default:l;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&On(h,n,r,s,o)()}))}}return i}function QC(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Xd(t){const e=un(mf),n=un($v),r=xe(()=>e.resolve(Zr(t.to))),i=xe(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(ui.bind(null,u));if(h>-1)return h;const p=Jd(c[l-2]);return l>1&&Jd(u)===p&&f[f.length-1].path!==p?f.findIndex(ui.bind(null,c[l-2])):h}),s=xe(()=>i.value>-1&&nS(n.params,r.value.params)),o=xe(()=>i.value>-1&&i.value===n.matched.length-1&&Vv(n.params,r.value.params));function a(c={}){return tS(c)?e[Zr(t.replace)?"replace":"push"](Zr(t.to)).catch(es):Promise.resolve()}return{route:r,href:xe(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const ZC=Rt({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xd,setup(t,{slots:e}){const n=Ii(Xd(t)),{options:r}=un(mf),i=xe(()=>({[Qd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Qd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Ms("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),eS=ZC;function tS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function nS(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Jd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qd=(t,e,n)=>t!=null?t:e!=null?e:n,rS=Rt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=un(Fl),i=xe(()=>t.route||r.value),s=un(Vd,0),o=xe(()=>i.value.matched[s]);Ro(Vd,s+1),Ro(iC,o),Ro(Fl,i);const a=i1();return fr(()=>[a.value,o.value,t.name],([c,l,u],[f,h,p])=>{l&&(l.instances[u]=c,h&&h!==l&&c&&c===f&&(l.leaveGuards.size||(l.leaveGuards=h.leaveGuards),l.updateGuards.size||(l.updateGuards=h.updateGuards))),c&&l&&(!h||!ui(l,h)||!f)&&(l.enterCallbacks[u]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=i.value,l=o.value,u=l&&l.components[t.name],f=t.name;if(!u)return Zd(n.default,{Component:u,route:c});const h=l.props[t.name],p=h?h===!0?c.params:typeof h=="function"?h(c):h:null,E=Ms(u,ve({},p,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(l.instances[f]=null)},ref:a}));return Zd(n.default,{Component:E,route:c})||E}}});function Zd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const iS=rS;function XD(t){const e=xC(t.routes,t),n=t.parseQuery||XC,r=t.stringifyQuery||Yd,i=t.history,s=Vi(),o=Vi(),a=Vi(),c=s1(In);let l=In;qr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Yc.bind(null,_=>""+_),f=Yc.bind(null,YC),h=Yc.bind(null,la);function p(_,$){let N,j;return jv(_)?(N=e.getRecordMatcher(_),j=$):j=_,e.addRoute(j,N)}function g(_){const $=e.getRecordMatcher(_);$&&e.removeRoute($)}function E(){return e.getRoutes().map(_=>_.record)}function w(_){return!!e.getRecordMatcher(_)}function v(_,$){if($=ve({},$||c.value),typeof _=="string"){const te=Xc(n,_,$.path),d=e.resolve({path:te.path},$),m=i.createHref(te.fullPath);return ve(te,d,{params:h(d.params),hash:la(te.hash),redirectedFrom:void 0,href:m})}let N;if("path"in _)N=ve({},_,{path:Xc(n,_.path,$.path).path});else{const te=ve({},_.params);for(const d in te)te[d]==null&&delete te[d];N=ve({},_,{params:f(_.params)}),$.params=f($.params)}const j=e.resolve(N,$),me=_.hash||"";j.params=u(h(j.params));const we=cC(r,ve({},_,{hash:KC(me),path:j.path})),se=i.createHref(we);return ve({fullPath:we,hash:me,query:r===Yd?JC(_.query):_.query||{}},j,{redirectedFrom:void 0,href:se})}function b(_){return typeof _=="string"?Xc(n,_,c.value.path):ve({},_)}function x(_,$){if(l!==_)return fi(8,{from:$,to:_})}function D(_){return K(_)}function G(_){return D(ve(b(_),{replace:!0}))}function re(_){const $=_.matched[_.matched.length-1];if($&&$.redirect){const{redirect:N}=$;let j=typeof N=="function"?N(_):N;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=b(j):{path:j},j.params={}),ve({query:_.query,hash:_.hash,params:_.params},j)}}function K(_,$){const N=l=v(_),j=c.value,me=_.state,we=_.force,se=_.replace===!0,te=re(N);if(te)return K(ve(b(te),{state:me,force:we,replace:se}),$||N);const d=N;d.redirectedFrom=$;let m;return!we&&lC(r,j,N)&&(m=fi(16,{to:d,from:j}),Lr(j,j,!0,!1)),(m?Promise.resolve(m):ie(d,j)).catch(y=>Cn(y)?Cn(y,2)?y:mt(y):be(y,d,j)).then(y=>{if(y){if(Cn(y,2))return K(ve(b(y.to),{state:me,force:we,replace:se}),$||d)}else y=Ue(d,j,!0,se,me);return Me(d,j,y),y})}function he(_,$){const N=x(_,$);return N?Promise.reject(N):Promise.resolve()}function ie(_,$){let N;const[j,me,we]=sS(_,$);N=Jc(j.reverse(),"beforeRouteLeave",_,$);for(const te of j)te.leaveGuards.forEach(d=>{N.push(On(d,_,$))});const se=he.bind(null,_,$);return N.push(se),Ur(N).then(()=>{N=[];for(const te of s.list())N.push(On(te,_,$));return N.push(se),Ur(N)}).then(()=>{N=Jc(me,"beforeRouteUpdate",_,$);for(const te of me)te.updateGuards.forEach(d=>{N.push(On(d,_,$))});return N.push(se),Ur(N)}).then(()=>{N=[];for(const te of _.matched)if(te.beforeEnter&&!$.matched.includes(te))if(Array.isArray(te.beforeEnter))for(const d of te.beforeEnter)N.push(On(d,_,$));else N.push(On(te.beforeEnter,_,$));return N.push(se),Ur(N)}).then(()=>(_.matched.forEach(te=>te.enterCallbacks={}),N=Jc(we,"beforeRouteEnter",_,$),N.push(se),Ur(N))).then(()=>{N=[];for(const te of o.list())N.push(On(te,_,$));return N.push(se),Ur(N)}).catch(te=>Cn(te,8)?te:Promise.reject(te))}function Me(_,$,N){for(const j of a.list())j(_,$,N)}function Ue(_,$,N,j,me){const we=x(_,$);if(we)return we;const se=$===In,te=qr?history.state:{};N&&(j||se?i.replace(_.fullPath,ve({scroll:se&&te&&te.scroll},me)):i.push(_.fullPath,me)),c.value=_,Lr(_,$,N,se),mt()}let B;function ke(){B=i.listen((_,$,N)=>{const j=v(_),me=re(j);if(me){K(ve(me,{replace:!0}),j).catch(es);return}l=j;const we=c.value;qr&&vC(Hd(we.fullPath,N.delta),tc()),ie(j,we).catch(se=>Cn(se,12)?se:Cn(se,2)?(K(se.to,j).then(te=>{Cn(te,20)&&!N.delta&&N.type===ws.pop&&i.go(-1,!1)}).catch(es),Promise.reject()):(N.delta&&i.go(-N.delta,!1),be(se,j,we))).then(se=>{se=se||Ue(j,we,!1),se&&(N.delta?i.go(-N.delta,!1):N.type===ws.pop&&Cn(se,20)&&i.go(-1,!1)),Me(j,we,se)}).catch(es)})}let lt=Vi(),tn=Vi(),Oe;function be(_,$,N){mt(_);const j=tn.list();return j.length?j.forEach(me=>me(_,$,N)):console.error(_),Promise.reject(_)}function pe(){return Oe&&c.value!==In?Promise.resolve():new Promise((_,$)=>{lt.add([_,$])})}function mt(_){return Oe||(Oe=!_,ke(),lt.list().forEach(([$,N])=>_?N(_):$()),lt.reset()),_}function Lr(_,$,N,j){const{scrollBehavior:me}=t;if(!qr||!me)return Promise.resolve();const we=!N&&yC(Hd(_.fullPath,0))||(j||!N)&&history.state&&history.state.scroll||null;return Bu().then(()=>me(_,$,we)).then(se=>se&&gC(se)).catch(se=>be(se,_,$))}const nn=_=>i.go(_);let Bt;const St=new Set;return{currentRoute:c,addRoute:p,removeRoute:g,hasRoute:w,getRoutes:E,resolve:v,options:t,push:D,replace:G,go:nn,back:()=>nn(-1),forward:()=>nn(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:tn.add,isReady:pe,install(_){const $=this;_.component("RouterLink",eS),_.component("RouterView",iS),_.config.globalProperties.$router=$,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Zr(c)}),qr&&!Bt&&c.value===In&&(Bt=!0,D(i.location).catch(me=>{}));const N={};for(const me in In)N[me]=xe(()=>c.value[me]);_.provide(mf,$),_.provide($v,Ii(N)),_.provide(Fl,c);const j=_.unmount;St.add(_),_.unmount=function(){St.delete(_),St.size<1&&(l=In,B&&B(),c.value=In,Bt=!1,Oe=!1),j()}}}}function Ur(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function sS(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(l=>ui(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ui(l,c))||i.push(c))}return[n,r,i]}var oS=Object.defineProperty,ep=Object.getOwnPropertySymbols,aS=Object.prototype.hasOwnProperty,cS=Object.prototype.propertyIsEnumerable,tp=(t,e,n)=>e in t?oS(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,lS=(t,e)=>{for(var n in e||(e={}))aS.call(e,n)&&tp(t,n,e[n]);if(ep)for(var n of ep(e))cS.call(e,n)&&tp(t,n,e[n]);return t},nc=t=>typeof t=="function",rc=t=>typeof t=="string",Xv=t=>rc(t)&&t.trim().length>0,uS=t=>typeof t=="number",or=t=>typeof t=="undefined",_s=t=>typeof t=="object"&&t!==null,fS=t=>Xt(t,"tag")&&Xv(t.tag),Jv=t=>window.TouchEvent&&t instanceof TouchEvent,Qv=t=>Xt(t,"component")&&Zv(t.component),hS=t=>nc(t)||_s(t),Zv=t=>!or(t)&&(rc(t)||hS(t)||Qv(t)),np=t=>_s(t)&&["height","width","right","left","top","bottom"].every(e=>uS(t[e])),Xt=(t,e)=>(_s(t)||nc(t))&&e in t,dS=(t=>()=>t++)(0);function Qc(t){return Jv(t)?t.targetTouches[0].clientX:t.clientX}function rp(t){return Jv(t)?t.targetTouches[0].clientY:t.clientY}var pS=t=>{or(t.remove)?t.parentNode&&t.parentNode.removeChild(t):t.remove()},zs=t=>Qv(t)?zs(t.component):fS(t)?Rt({render(){return t}}):typeof t=="string"?t:le(Zr(t)),mS=t=>{if(typeof t=="string")return t;const e=Xt(t,"props")&&_s(t.props)?t.props:{},n=Xt(t,"listeners")&&_s(t.listeners)?t.listeners:{};return{component:zs(t),props:e,listeners:n}},gS=()=>typeof window!="undefined",vf=class{constructor(){this.allHandlers={}}getHandlers(t){return this.allHandlers[t]||[]}on(t,e){const n=this.getHandlers(t);n.push(e),this.allHandlers[t]=n}off(t,e){const n=this.getHandlers(t);n.splice(n.indexOf(e)>>>0,1)}emit(t,e){this.getHandlers(t).forEach(r=>r(e))}},vS=t=>["on","off","emit"].every(e=>Xt(t,e)&&nc(t[e])),bt;(function(t){t.SUCCESS="success",t.ERROR="error",t.WARNING="warning",t.INFO="info",t.DEFAULT="default"})(bt||(bt={}));var ua;(function(t){t.TOP_LEFT="top-left",t.TOP_CENTER="top-center",t.TOP_RIGHT="top-right",t.BOTTOM_LEFT="bottom-left",t.BOTTOM_CENTER="bottom-center",t.BOTTOM_RIGHT="bottom-right"})(ua||(ua={}));var wt;(function(t){t.ADD="add",t.DISMISS="dismiss",t.UPDATE="update",t.CLEAR="clear",t.UPDATE_DEFAULTS="update_defaults"})(wt||(wt={}));var Lt="Vue-Toastification",xt={type:{type:String,default:bt.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},ey={type:xt.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},Mo={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:xt.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},Bl={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},ty={transition:{type:[Object,String],default:`${Lt}__bounce`}},yS={position:{type:String,default:ua.TOP_RIGHT},draggable:xt.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:xt.trueBoolean,pauseOnHover:xt.trueBoolean,closeOnClick:xt.trueBoolean,timeout:Bl.timeout,hideProgressBar:Bl.hideProgressBar,toastClassName:xt.classNames,bodyClassName:xt.classNames,icon:ey.customIcon,closeButton:Mo.component,closeButtonClassName:Mo.classNames,showCloseButtonOnHover:Mo.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new vf}},bS={id:{type:[String,Number],required:!0,default:0},type:xt.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},wS={container:{type:[Object,Function],default:()=>document.body},newestOnTop:xt.trueBoolean,maxToasts:{type:Number,default:20},transition:ty.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:t=>t},filterToasts:{type:Function,default:t=>t},containerClassName:xt.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},fn={CORE_TOAST:yS,TOAST:bS,CONTAINER:wS,PROGRESS_BAR:Bl,ICON:ey,TRANSITION:ty,CLOSE_BUTTON:Mo},ny=Rt({name:"VtProgressBar",props:fn.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${Lt}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function _S(t,e){return Ne(),Dt("div",{style:Ds(t.style),class:$n(t.cpClass)},null,6)}ny.render=_S;var ES=ny,ry=Rt({name:"VtCloseButton",props:fn.CLOSE_BUTTON,computed:{buttonComponent(){return this.component!==!1?zs(this.component):"button"},classes(){const t=[`${Lt}__close-button`];return this.showOnHover&&t.push("show-on-hover"),t.concat(this.classNames)}}}),TS=Ka(" \xD7 ");function IS(t,e){return Ne(),Kt(Wu(t.buttonComponent),Wa({"aria-label":t.ariaLabel,class:t.classes},t.$attrs),{default:Ls(()=>[TS]),_:1},16,["aria-label","class"])}ry.render=IS;var CS=ry,iy={},SS={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},AS=kr("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),kS=[AS];function OS(t,e){return Ne(),Dt("svg",SS,kS)}iy.render=OS;var RS=iy,sy={},NS={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},xS=kr("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),PS=[xS];function DS(t,e){return Ne(),Dt("svg",NS,PS)}sy.render=DS;var ip=sy,oy={},LS={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},MS=kr("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),US=[MS];function FS(t,e){return Ne(),Dt("svg",LS,US)}oy.render=FS;var $S=oy,ay={},VS={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},BS=kr("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),jS=[BS];function HS(t,e){return Ne(),Dt("svg",VS,jS)}ay.render=HS;var qS=ay,cy=Rt({name:"VtIcon",props:fn.ICON,computed:{customIconChildren(){return Xt(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return rc(this.customIcon)?this.trimValue(this.customIcon):Xt(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return Xt(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:Zv(this.customIcon)?zs(this.customIcon):this.iconTypeComponent},iconTypeComponent(){return{[bt.DEFAULT]:ip,[bt.INFO]:ip,[bt.SUCCESS]:RS,[bt.ERROR]:qS,[bt.WARNING]:$S}[this.type]},iconClasses(){const t=[`${Lt}__icon`];return this.hasCustomIcon?t.concat(this.customIconClass):t}},methods:{trimValue(t,e=""){return Xv(t)?t.trim():e}}});function zS(t,e){return Ne(),Kt(Wu(t.component),{class:$n(t.iconClasses)},{default:Ls(()=>[Ka(Vm(t.customIconChildren),1)]),_:1},8,["class"])}cy.render=zS;var KS=cy,ly=Rt({name:"VtToast",components:{ProgressBar:ES,CloseButton:CS,Icon:KS},inheritAttrs:!1,props:Object.assign({},fn.CORE_TOAST,fn.TOAST),data(){return{isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}}},computed:{classes(){const t=[`${Lt}__toast`,`${Lt}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&t.push("disable-transition"),this.rtl&&t.push(`${Lt}__toast--rtl`),t},bodyClasses(){return[`${Lt}__toast-${rc(this.content)?"body":"component-body"}`].concat(this.bodyClassName)},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return np(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:Xt,getVueComponentFromObj:zs,closeToast(){this.eventBus.emit(wt.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(!this.beingDragged||this.dragStart===this.dragPos.x)&&this.closeToast()},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const t=this.$el;t.addEventListener("touchstart",this.onDragStart,{passive:!0}),t.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const t=this.$el;t.removeEventListener("touchstart",this.onDragStart),t.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(t){this.beingDragged=!0,this.dragPos={x:Qc(t),y:rp(t)},this.dragStart=Qc(t),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(t){this.beingDragged&&(t.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:Qc(t),y:rp(t)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,np(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}}),WS=["role"];function GS(t,e){const n=Ji("Icon"),r=Ji("CloseButton"),i=Ji("ProgressBar");return Ne(),Dt("div",{class:$n(t.classes),style:Ds(t.draggableStyle),onClick:e[0]||(e[0]=(...s)=>t.clickHandler&&t.clickHandler(...s)),onMouseenter:e[1]||(e[1]=(...s)=>t.hoverPause&&t.hoverPause(...s)),onMouseleave:e[2]||(e[2]=(...s)=>t.hoverPlay&&t.hoverPlay(...s))},[t.icon?(Ne(),Kt(n,{key:0,"custom-icon":t.icon,type:t.type},null,8,["custom-icon","type"])):$c("v-if",!0),kr("div",{role:t.accessibility.toastRole||"alert",class:$n(t.bodyClasses)},[typeof t.content=="string"?(Ne(),Dt(et,{key:0},[Ka(Vm(t.content),1)],2112)):(Ne(),Kt(Wu(t.getVueComponentFromObj(t.content)),Wa({key:1,"toast-id":t.id},t.hasProp(t.content,"props")?t.content.props:{},Z1(t.hasProp(t.content,"listeners")?t.content.listeners:{}),{onCloseToast:t.closeToast}),null,16,["toast-id","onCloseToast"]))],10,WS),t.closeButton?(Ne(),Kt(r,{key:1,component:t.closeButton,"class-names":t.closeButtonClassName,"show-on-hover":t.showCloseButtonOnHover,"aria-label":t.accessibility.closeButtonLabel,onClick:B_(t.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):$c("v-if",!0),t.timeout?(Ne(),Kt(i,{key:2,"is-running":t.isRunning,"hide-progress-bar":t.hideProgressBar,timeout:t.timeout,onCloseToast:t.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):$c("v-if",!0)],38)}ly.render=GS;var YS=ly,uy=Rt({name:"VtTransition",props:fn.TRANSITION,emits:["leave"],methods:{hasProp:Xt,leave(t){t instanceof HTMLElement&&(t.style.left=t.offsetLeft+"px",t.style.top=t.offsetTop+"px",t.style.width=getComputedStyle(t).width,t.style.position="absolute")}}});function XS(t,e){return Ne(),Kt(x_,{tag:"div","enter-active-class":t.transition.enter?t.transition.enter:`${t.transition}-enter-active`,"move-class":t.transition.move?t.transition.move:`${t.transition}-move`,"leave-active-class":t.transition.leave?t.transition.leave:`${t.transition}-leave-active`,onLeave:t.leave},{default:Ls(()=>[Q1(t.$slots,"default")]),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}uy.render=XS;var JS=uy,fy=Rt({name:"VueToastification",devtools:{hide:!0},components:{Toast:YS,VtTransition:JS},props:Object.assign({},fn.CORE_TOAST,fn.CONTAINER,fn.TRANSITION),data(){return{count:0,positions:Object.values(ua),toasts:{},defaults:{}}},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const t=this.eventBus;t.on(wt.ADD,this.addToast),t.on(wt.CLEAR,this.clearToasts),t.on(wt.DISMISS,this.dismissToast),t.on(wt.UPDATE,this.updateToast),t.on(wt.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(t){nc(t)&&(t=await t()),pS(this.$el),t.appendChild(this.$el)},setToast(t){or(t.id)||(this.toasts[t.id]=t)},addToast(t){t.content=mS(t.content);const e=Object.assign({},this.defaults,t.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[t.type],t),n=this.defaults.filterBeforeCreate(e,this.toastArray);n&&this.setToast(n)},dismissToast(t){const e=this.toasts[t];!or(e)&&!or(e.onClose)&&e.onClose(),delete this.toasts[t]},clearToasts(){Object.keys(this.toasts).forEach(t=>{this.dismissToast(t)})},getPositionToasts(t){const e=this.filteredToasts.filter(n=>n.position===t).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?e.reverse():e},updateDefaults(t){or(t.container)||this.setup(t.container),this.defaults=Object.assign({},this.defaults,t)},updateToast({id:t,options:e,create:n}){this.toasts[t]?(e.timeout&&e.timeout===this.toasts[t].timeout&&e.timeout++,this.setToast(Object.assign({},this.toasts[t],e))):n&&this.addToast(Object.assign({},{id:t},e))},getClasses(t){return[`${Lt}__container`,t].concat(this.defaults.containerClassName)}}});function QS(t,e){const n=Ji("Toast"),r=Ji("VtTransition");return Ne(),Dt("div",null,[(Ne(!0),Dt(et,null,sd(t.positions,i=>(Ne(),Dt("div",{key:i},[Ge(r,{transition:t.defaults.transition,class:$n(t.getClasses(i))},{default:Ls(()=>[(Ne(!0),Dt(et,null,sd(t.getPositionToasts(i),s=>(Ne(),Kt(n,Wa({key:s.id},s),null,16))),128))]),_:2},1032,["transition","class"])]))),128))])}fy.render=QS;var ZS=fy,sp=(t={},e=!0)=>{const n=t.eventBus=t.eventBus||new vf;e&&Bu(()=>{const s=q_(ZS,lS({},t)),o=s.mount(document.createElement("div")),a=t.onMounted;if(or(a)||a(o,s),t.shareAppContext){const c=t.shareAppContext;c===!0?console.warn(`[${Lt}] App to share context with was not provided.`):(s._context.components=c._context.components,s._context.directives=c._context.directives,s._context.mixins=c._context.mixins,s._context.provides=c._context.provides,s.config.globalProperties=c.config.globalProperties)}});const r=(s,o)=>{const a=Object.assign({},{id:dS(),type:bt.DEFAULT},o,{content:s});return n.emit(wt.ADD,a),a.id};r.clear=()=>n.emit(wt.CLEAR,void 0),r.updateDefaults=s=>{n.emit(wt.UPDATE_DEFAULTS,s)},r.dismiss=s=>{n.emit(wt.DISMISS,s)};function i(s,{content:o,options:a},c=!1){const l=Object.assign({},a,{content:o});n.emit(wt.UPDATE,{id:s,options:l,create:c})}return r.update=i,r.success=(s,o)=>r(s,Object.assign({},o,{type:bt.SUCCESS})),r.info=(s,o)=>r(s,Object.assign({},o,{type:bt.INFO})),r.error=(s,o)=>r(s,Object.assign({},o,{type:bt.ERROR})),r.warning=(s,o)=>r(s,Object.assign({},o,{type:bt.WARNING})),r},eA=()=>{const t=()=>console.warn(`[${Lt}] This plugin does not support SSR!`);return new Proxy(t,{get(){return t}})};function op(t){return gS()?vS(t)?sp({eventBus:t},!1):sp(t,!0):eA()}var tA=Symbol("VueToastification"),nA=new vf,JD=t=>{if(t)return op(t);const e=Xu()?un(tA,void 0):void 0;return e||op(nA)},rA=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},M,yf=yf||{},J=rA||self;function fa(){}function jl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ks(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function iA(t){return Object.prototype.hasOwnProperty.call(t,Zc)&&t[Zc]||(t[Zc]=++sA)}var Zc="closure_uid_"+(1e9*Math.random()>>>0),sA=0;function oA(t,e,n){return t.call.apply(t.bind,arguments)}function aA(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ye(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ye=oA:Ye=aA,Ye.apply(null,arguments)}function yo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ze(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Wn(){this.s=this.s,this.o=this.o}var cA=0,lA={};Wn.prototype.s=!1;Wn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),cA!=0)){var t=iA(this);delete lA[t]}};Wn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const hy=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},dy=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function uA(t){e:{var e=tk;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function ap(t){return Array.prototype.concat.apply([],arguments)}function bf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ha(t){return/^[\s\xa0]*$/.test(t)}var cp=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function st(t,e){return t.indexOf(e)!=-1}function el(t,e){return t<e?-1:t>e?1:0}var ot;e:{var lp=J.navigator;if(lp){var up=lp.userAgent;if(up){ot=up;break e}}ot=""}function wf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function py(t){const e={};for(const n in t)e[n]=t[n];return e}var fp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function my(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<fp.length;s++)n=fp[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function _f(t){return _f[" "](t),t}_f[" "]=fa;function fA(t){var e=pA;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var hA=st(ot,"Opera"),hi=st(ot,"Trident")||st(ot,"MSIE"),gy=st(ot,"Edge"),Hl=gy||hi,vy=st(ot,"Gecko")&&!(st(ot.toLowerCase(),"webkit")&&!st(ot,"Edge"))&&!(st(ot,"Trident")||st(ot,"MSIE"))&&!st(ot,"Edge"),dA=st(ot.toLowerCase(),"webkit")&&!st(ot,"Edge");function yy(){var t=J.document;return t?t.documentMode:void 0}var da;e:{var tl="",nl=function(){var t=ot;if(vy)return/rv:([^\);]+)(\)|;)/.exec(t);if(gy)return/Edge\/([\d\.]+)/.exec(t);if(hi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(dA)return/WebKit\/(\S+)/.exec(t);if(hA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(nl&&(tl=nl?nl[1]:""),hi){var rl=yy();if(rl!=null&&rl>parseFloat(tl)){da=String(rl);break e}}da=tl}var pA={};function mA(){return fA(function(){let t=0;const e=cp(String(da)).split("."),n=cp("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=el(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||el(i[2].length==0,s[2].length==0)||el(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var ql;if(J.document&&hi){var hp=yy();ql=hp||parseInt(da,10)||void 0}else ql=void 0;var gA=ql,vA=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{J.addEventListener("test",fa,e),J.removeEventListener("test",fa,e)}catch{}return t}();function nt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}nt.prototype.h=function(){this.defaultPrevented=!0};function Es(t,e){if(nt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(vy){e:{try{_f(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:yA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Es.Z.h.call(this)}}Ze(Es,nt);var yA={2:"touch",3:"pen",4:"mouse"};Es.prototype.h=function(){Es.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ws="closure_listenable_"+(1e6*Math.random()|0),bA=0;function wA(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++bA,this.ca=this.fa=!1}function ic(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function sc(t){this.src=t,this.g={},this.h=0}sc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Kl(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new wA(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function zl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=hy(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ic(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Kl(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Ef="closure_lm_"+(1e6*Math.random()|0),il={};function by(t,e,n,r,i){if(r&&r.once)return _y(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)by(t,e[s],n,r,i);return null}return n=Cf(n),t&&t[Ws]?t.N(e,n,Ks(r)?!!r.capture:!!r,i):wy(t,e,n,!1,r,i)}function wy(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ks(i)?!!i.capture:!!i,a=If(t);if(a||(t[Ef]=a=new sc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=_A(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)vA||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Ty(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _A(){function t(n){return e.call(t.src,t.listener,n)}var e=EA;return t}function _y(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)_y(t,e[s],n,r,i);return null}return n=Cf(n),t&&t[Ws]?t.O(e,n,Ks(r)?!!r.capture:!!r,i):wy(t,e,n,!0,r,i)}function Ey(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Ey(t,e[s],n,r,i);else r=Ks(r)?!!r.capture:!!r,n=Cf(n),t&&t[Ws]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Kl(s,n,r,i),-1<n&&(ic(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=If(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Kl(e,n,r,i)),(n=-1<t?e[t]:null)&&Tf(n))}function Tf(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Ws])zl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ty(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=If(e))?(zl(n,t),n.h==0&&(n.src=null,e[Ef]=null)):ic(t)}}}function Ty(t){return t in il?il[t]:il[t]="on"+t}function EA(t,e){if(t.ca)t=!0;else{e=new Es(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Tf(t),t=n.call(r,e)}return t}function If(t){return t=t[Ef],t instanceof sc?t:null}var sl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cf(t){return typeof t=="function"?t:(t[sl]||(t[sl]=function(e){return t.handleEvent(e)}),t[sl])}function He(){Wn.call(this),this.i=new sc(this),this.P=this,this.I=null}Ze(He,Wn);He.prototype[Ws]=!0;He.prototype.removeEventListener=function(t,e,n,r){Ey(this,t,e,n,r)};function Xe(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new nt(e,t);else if(e instanceof nt)e.target=e.target||t;else{var i=e;e=new nt(r,t),my(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=bo(o,r,!0,e)&&i}if(o=e.g=t,i=bo(o,r,!0,e)&&i,i=bo(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=bo(o,r,!1,e)&&i}He.prototype.M=function(){if(He.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ic(n[r]);delete t.g[e],t.h--}}this.I=null};He.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};He.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function bo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&zl(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Sf=J.JSON.stringify;function TA(){var t=Cy;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class IA{constructor(){this.h=this.g=null}add(e,n){const r=Iy.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Iy=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new CA,t=>t.reset());class CA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function SA(t){J.setTimeout(()=>{throw t},0)}function Af(t,e){Wl||AA(),Gl||(Wl(),Gl=!0),Cy.add(t,e)}var Wl;function AA(){var t=J.Promise.resolve(void 0);Wl=function(){t.then(kA)}}var Gl=!1,Cy=new IA;function kA(){for(var t;t=TA();){try{t.h.call(t.g)}catch(n){SA(n)}var e=Iy;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Gl=!1}function oc(t,e){He.call(this),this.h=t||1,this.g=e||J,this.j=Ye(this.kb,this),this.l=Date.now()}Ze(oc,He);M=oc.prototype;M.da=!1;M.S=null;M.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Xe(this,"tick"),this.da&&(kf(this),this.start()))}};M.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function kf(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}M.M=function(){oc.Z.M.call(this),kf(this),delete this.g};function Of(t,e,n){if(typeof t=="function")n&&(t=Ye(t,n));else if(t&&typeof t.handleEvent=="function")t=Ye(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:J.setTimeout(t,e||0)}function Sy(t){t.g=Of(()=>{t.g=null,t.i&&(t.i=!1,Sy(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class OA extends Wn{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Sy(this)}M(){super.M(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ts(t){Wn.call(this),this.h=t,this.g={}}Ze(Ts,Wn);var dp=[];function Ay(t,e,n,r){Array.isArray(n)||(n&&(dp[0]=n.toString()),n=dp);for(var i=0;i<n.length;i++){var s=by(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function ky(t){wf(t.g,function(e,n){this.g.hasOwnProperty(n)&&Tf(e)},t),t.g={}}Ts.prototype.M=function(){Ts.Z.M.call(this),ky(this)};Ts.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ac(){this.g=!0}ac.prototype.Aa=function(){this.g=!1};function RA(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function NA(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Kr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+PA(t,n)+(r?" "+r:"")})}function xA(t,e){t.info(function(){return"TIMEOUT: "+e})}ac.prototype.info=function(){};function PA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Sf(n)}catch{return e}}var xr={},pp=null;function cc(){return pp=pp||new He}xr.Ma="serverreachability";function Oy(t){nt.call(this,xr.Ma,t)}Ze(Oy,nt);function Is(t){const e=cc();Xe(e,new Oy(e,t))}xr.STAT_EVENT="statevent";function Ry(t,e){nt.call(this,xr.STAT_EVENT,t),this.stat=e}Ze(Ry,nt);function at(t){const e=cc();Xe(e,new Ry(e,t))}xr.Na="timingevent";function Ny(t,e){nt.call(this,xr.Na,t),this.size=e}Ze(Ny,nt);function Gs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){t()},e)}var lc={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},xy={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Rf(){}Rf.prototype.h=null;function mp(t){return t.h||(t.h=t.i())}function Py(){}var Ys={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Nf(){nt.call(this,"d")}Ze(Nf,nt);function xf(){nt.call(this,"c")}Ze(xf,nt);var Yl;function uc(){}Ze(uc,Rf);uc.prototype.g=function(){return new XMLHttpRequest};uc.prototype.i=function(){return{}};Yl=new uc;function Xs(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Ts(this),this.P=DA,t=Hl?125:void 0,this.W=new oc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Dy}function Dy(){this.i=null,this.g="",this.h=!1}var DA=45e3,Xl={},pa={};M=Xs.prototype;M.setTimeout=function(t){this.P=t};function Jl(t,e,n){t.K=1,t.v=hc(mn(e)),t.s=n,t.U=!0,Ly(t,null)}function Ly(t,e){t.F=Date.now(),Js(t),t.A=mn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),jy(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Dy,t.g=c0(t.l,n?e:null,!t.s),0<t.O&&(t.L=new OA(Ye(t.Ia,t,t.g),t.O)),Ay(t.V,t.g,"readystatechange",t.gb),e=t.H?py(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Is(1),RA(t.j,t.u,t.A,t.m,t.X,t.s)}M.gb=function(t){t=t.target;const e=this.L;e&&ln(t)==3?e.l():this.Ia(t)};M.Ia=function(t){try{if(t==this.g)e:{const u=ln(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>u)&&(u!=3||Hl||this.g&&(this.h.h||this.g.ga()||bp(this.g)))){this.I||u!=4||e==7||(e==8||0>=f?Is(3):Is(2)),fc(this);var n=this.g.ba();this.N=n;t:if(My(this)){var r=bp(this.g);t="";var i=r.length,s=ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){ar(this),ns(this);var o="";break t}this.h.i=new J.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,NA(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ha(a)){var l=a;break t}}l=null}if(n=l)Kr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ql(this,n);else{this.i=!1,this.o=3,at(12),ar(this),ns(this);break e}}this.U?(Uy(this,u,o),Hl&&this.i&&u==3&&(Ay(this.V,this.W,"tick",this.fb),this.W.start())):(Kr(this.j,this.m,o,null),Ql(this,o)),u==4&&ar(this),this.i&&!this.I&&(u==4?i0(this.l,this):(this.i=!1,Js(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),ar(this),ns(this)}}}catch{}finally{}};function My(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Uy(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=LA(t,n),i==pa){e==4&&(t.o=4,at(14),r=!1),Kr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Xl){t.o=4,at(15),Kr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Kr(t.j,t.m,i,null),Ql(t,i);My(t)&&i!=pa&&i!=Xl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,at(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Bf(e),e.L=!0,at(11))):(Kr(t.j,t.m,n,"[Invalid Chunked Response]"),ar(t),ns(t))}M.fb=function(){if(this.g){var t=ln(this.g),e=this.g.ga();this.C<e.length&&(fc(this),Uy(this,t,e),this.i&&t!=4&&Js(this))}};function LA(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?pa:(n=Number(e.substring(n,r)),isNaN(n)?Xl:(r+=1,r+n>e.length?pa:(e=e.substr(r,n),t.C=r+n,e)))}M.cancel=function(){this.I=!0,ar(this)};function Js(t){t.Y=Date.now()+t.P,Fy(t,t.P)}function Fy(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Gs(Ye(t.eb,t),e)}function fc(t){t.B&&(J.clearTimeout(t.B),t.B=null)}M.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(xA(this.j,this.A),this.K!=2&&(Is(3),at(17)),ar(this),this.o=2,ns(this)):Fy(this,this.Y-t)};function ns(t){t.l.G==0||t.I||i0(t.l,t)}function ar(t){fc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,kf(t.W),ky(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ql(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Zl(n.i,t))){if(n.I=t.N,!t.J&&Zl(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ya(n),mc(n);else break e;Vf(n),at(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Gs(Ye(n.ab,n),6e3));if(1>=zy(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else cr(n,11)}else if((t.J||n.g==t)&&ya(n),!ha(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const f=l[4];f!=null&&(n.za=f,n.h.info("SVER="+n.za));const h=l[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;!s.g&&(st(g,"spdy")||st(g,"quic")||st(g,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Lf(s,s.h),s.h=null))}if(r.D){const E=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.sa=E,Ae(r.F,r.D,E))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=a0(r,r.H?r.la:null,r.W),o.J){Ky(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(fc(a),Js(a)),r.g=o}else n0(r);0<n.l.length&&gc(n)}else l[0]!="stop"&&l[0]!="close"||cr(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?cr(n,7):$f(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Is(4)}catch{}}function MA(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(jl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Pf(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(jl(t)||typeof t=="string")dy(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(jl(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=MA(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Oi(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Oi)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}M=Oi.prototype;M.R=function(){Df(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};M.T=function(){return Df(this),this.g.concat()};function Df(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];wr(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],wr(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}M.get=function(t,e){return wr(this.h,t)?this.h[t]:e};M.set=function(t,e){wr(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};M.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function wr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var $y=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function UA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function _r(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof _r){this.g=e!==void 0?e:t.g,ma(this,t.j),this.s=t.s,ga(this,t.i),va(this,t.m),this.l=t.l,e=t.h;var n=new Cs;n.i=e.i,e.g&&(n.g=new Oi(e.g),n.h=e.h),gp(this,n),this.o=t.o}else t&&(n=String(t).match($y))?(this.g=!!e,ma(this,n[1]||"",!0),this.s=rs(n[2]||""),ga(this,n[3]||"",!0),va(this,n[4]),this.l=rs(n[5]||"",!0),gp(this,n[6]||"",!0),this.o=rs(n[7]||"")):(this.g=!!e,this.h=new Cs(null,this.g))}_r.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ki(e,vp,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ki(e,vp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Ki(n,n.charAt(0)=="/"?jA:BA,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ki(n,qA)),t.join("")};function mn(t){return new _r(t)}function ma(t,e,n){t.j=n?rs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ga(t,e,n){t.i=n?rs(e,!0):e}function va(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function gp(t,e,n){e instanceof Cs?(t.h=e,zA(t.h,t.g)):(n||(e=Ki(e,HA)),t.h=new Cs(e,t.g))}function Ae(t,e,n){t.h.set(e,n)}function hc(t){return Ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function FA(t){return t instanceof _r?mn(t):new _r(t,void 0)}function $A(t,e,n,r){var i=new _r(null,void 0);return t&&ma(i,t),e&&ga(i,e),n&&va(i,n),r&&(i.l=r),i}function rs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ki(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,VA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function VA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var vp=/[#\/\?@]/g,BA=/[#\?:]/g,jA=/[#\?]/g,HA=/[#\?@]/g,qA=/#/g;function Cs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Gn(t){t.g||(t.g=new Oi,t.h=0,t.i&&UA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=Cs.prototype;M.add=function(t,e){Gn(this),this.i=null,t=Ri(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Vy(t,e){Gn(t),e=Ri(t,e),wr(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,wr(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Df(t)))}function By(t,e){return Gn(t),e=Ri(t,e),wr(t.g.h,e)}M.forEach=function(t,e){Gn(this),this.g.forEach(function(n,r){dy(n,function(i){t.call(e,i,r,this)},this)},this)};M.T=function(){Gn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};M.R=function(t){Gn(this);var e=[];if(typeof t=="string")By(this,t)&&(e=ap(e,this.g.get(Ri(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=ap(e,t[n])}return e};M.set=function(t,e){return Gn(this),this.i=null,t=Ri(this,t),By(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function jy(t,e,n){Vy(t,e),0<n.length&&(t.i=null,t.g.set(Ri(t,e),bf(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Ri(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function zA(t,e){e&&!t.j&&(Gn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Vy(this,r),jy(this,i,n))},t)),t.j=e}var KA=class{constructor(t,e){this.h=t,this.g=e}};function Hy(t){this.l=t||WA,J.PerformanceNavigationTiming?(t=J.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(J.g&&J.g.Ea&&J.g.Ea()&&J.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var WA=10;function qy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function zy(t){return t.h?1:t.g?t.g.size:0}function Zl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Lf(t,e){t.g?t.g.add(e):t.h=e}function Ky(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Hy.prototype.cancel=function(){if(this.i=Wy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Wy(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return bf(t.i)}function Mf(){}Mf.prototype.stringify=function(t){return J.JSON.stringify(t,void 0)};Mf.prototype.parse=function(t){return J.JSON.parse(t,void 0)};function GA(){this.g=new Mf}function YA(t,e,n){const r=n||"";try{Pf(t,function(i,s){let o=i;Ks(i)&&(o=Sf(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function XA(t,e){const n=new ac;if(J.Image){const r=new Image;r.onload=yo(wo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=yo(wo,n,r,"TestLoadImage: error",!1,e),r.onabort=yo(wo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=yo(wo,n,r,"TestLoadImage: timeout",!1,e),J.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function wo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Qs(t){this.l=t.$b||null,this.j=t.ib||!1}Ze(Qs,Rf);Qs.prototype.g=function(){return new dc(this.l,this.j)};Qs.prototype.i=function(t){return function(){return t}}({});function dc(t,e){He.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Uf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ze(dc,He);var Uf=0;M=dc.prototype;M.open=function(t,e){if(this.readyState!=Uf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ss(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||J).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zs(this)),this.readyState=Uf};M.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ss(this)),this.g&&(this.readyState=3,Ss(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof J.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Gy(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Gy(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}M.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Zs(this):Ss(this),this.readyState==3&&Gy(this)}};M.Ua=function(t){this.g&&(this.response=this.responseText=t,Zs(this))};M.Ta=function(t){this.g&&(this.response=t,Zs(this))};M.ha=function(){this.g&&Zs(this)};function Zs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ss(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ss(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(dc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var JA=J.JSON.parse;function Le(t){He.call(this),this.headers=new Oi,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Yy,this.K=this.L=!1}Ze(Le,He);var Yy="",QA=/^https?$/i,ZA=["POST","PUT"];M=Le.prototype;M.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Yl.g(),this.C=this.u?mp(this.u):mp(Yl),this.g.onreadystatechange=Ye(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){yp(this,s);return}t=n||"";const i=new Oi(this.headers);r&&Pf(r,function(s,o){i.set(o,s)}),r=uA(i.T()),n=J.FormData&&t instanceof J.FormData,!(0<=hy(ZA,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Qy(this),0<this.B&&((this.K=ek(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ye(this.pa,this)):this.A=Of(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){yp(this,s)}};function ek(t){return hi&&mA()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function tk(t){return t.toLowerCase()=="content-type"}M.pa=function(){typeof yf!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Xe(this,"timeout"),this.abort(8))};function yp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Xy(t),pc(t)}function Xy(t){t.D||(t.D=!0,Xe(t,"complete"),Xe(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Xe(this,"complete"),Xe(this,"abort"),pc(this))};M.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),pc(this,!0)),Le.Z.M.call(this)};M.Fa=function(){this.s||(this.F||this.v||this.l?Jy(this):this.cb())};M.cb=function(){Jy(this)};function Jy(t){if(t.h&&typeof yf!="undefined"&&(!t.C[1]||ln(t)!=4||t.ba()!=2)){if(t.v&&ln(t)==4)Of(t.Fa,0,t);else if(Xe(t,"readystatechange"),ln(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match($y)[1]||null;if(!i&&J.self&&J.self.location){var s=J.self.location.protocol;i=s.substr(0,s.length-1)}r=!QA.test(i?i.toLowerCase():"")}n=r}if(n)Xe(t,"complete"),Xe(t,"success");else{t.m=6;try{var o=2<ln(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Xy(t)}}finally{pc(t)}}}}function pc(t,e){if(t.g){Qy(t);const n=t.g,r=t.C[0]?fa:null;t.g=null,t.C=null,e||Xe(t,"ready");try{n.onreadystatechange=r}catch{}}}function Qy(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(J.clearTimeout(t.A),t.A=null)}function ln(t){return t.g?t.g.readyState:0}M.ba=function(){try{return 2<ln(this)?this.g.status:-1}catch{return-1}};M.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),JA(e)}};function bp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Yy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}M.Da=function(){return this.m};M.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function nk(t){let e="";return wf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ff(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=nk(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ae(t,e,n))}function Bi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zy(t){this.za=0,this.l=[],this.h=new ac,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Bi("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Bi("baseRetryDelayMs",5e3,t),this.$a=Bi("retryDelaySeedMs",1e4,t),this.Ya=Bi("forwardChannelMaxRetries",2,t),this.ra=Bi("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Hy(t&&t.concurrentRequestLimit),this.Ca=new GA,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}M=Zy.prototype;M.ma=8;M.G=1;function $f(t){if(e0(t),t.G==3){var e=t.V++,n=mn(t.F);Ae(n,"SID",t.J),Ae(n,"RID",e),Ae(n,"TYPE","terminate"),eo(t,n),e=new Xs(t,t.h,e,void 0),e.K=2,e.v=hc(mn(n)),n=!1,J.navigator&&J.navigator.sendBeacon&&(n=J.navigator.sendBeacon(e.v.toString(),"")),!n&&J.Image&&(new Image().src=e.v,n=!0),n||(e.g=c0(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Js(e)}o0(t)}M.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function mc(t){t.g&&(Bf(t),t.g.cancel(),t.g=null)}function e0(t){mc(t),t.u&&(J.clearTimeout(t.u),t.u=null),ya(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&J.clearTimeout(t.m),t.m=null)}function ol(t,e){t.l.push(new KA(t.Za++,e)),t.G==3&&gc(t)}function gc(t){qy(t.i)||t.m||(t.m=!0,Af(t.Ha,t),t.C=0)}function rk(t,e){return zy(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Gs(Ye(t.Ha,t,e),s0(t,t.C)),t.C++,!0)}M.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Xs(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=py(s),my(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=t0(this,i,e),n=mn(this.F),Ae(n,"RID",t),Ae(n,"CVER",22),this.D&&Ae(n,"X-HTTP-Session-Id",this.D),eo(this,n),this.o&&s&&Ff(n,this.o,s),Lf(this.i,i),this.Ra&&Ae(n,"TYPE","init"),this.ja?(Ae(n,"$req",e),Ae(n,"SID","null"),i.$=!0,Jl(i,n,null)):Jl(i,n,e),this.G=2}}else this.G==3&&(t?wp(this,t):this.l.length==0||qy(this.i)||wp(this))};function wp(t,e){var n;e?n=e.m:n=t.V++;const r=mn(t.F);Ae(r,"SID",t.J),Ae(r,"RID",n),Ae(r,"AID",t.U),eo(t,r),t.o&&t.s&&Ff(r,t.o,t.s),n=new Xs(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=t0(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Lf(t.i,n),Jl(n,r,e)}function eo(t,e){t.j&&Pf({},function(n,r){Ae(e,r,n)})}function t0(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Ye(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=s,0>l)s=Math.max(0,i[c].h-100),a=!1;else try{YA(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function n0(t){t.g||t.u||(t.Y=1,Af(t.Ga,t),t.A=0)}function Vf(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Gs(Ye(t.Ga,t),s0(t,t.A)),t.A++,!0)}M.Ga=function(){if(this.u=null,r0(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Gs(Ye(this.bb,this),t)}};M.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,at(10),mc(this),r0(this))};function Bf(t){t.B!=null&&(J.clearTimeout(t.B),t.B=null)}function r0(t){t.g=new Xs(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=mn(t.oa);Ae(e,"RID","rpc"),Ae(e,"SID",t.J),Ae(e,"CI",t.N?"0":"1"),Ae(e,"AID",t.U),eo(t,e),Ae(e,"TYPE","xmlhttp"),t.o&&t.s&&Ff(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=hc(mn(e)),n.s=null,n.U=!0,Ly(n,t)}M.ab=function(){this.v!=null&&(this.v=null,mc(this),Vf(this),at(19))};function ya(t){t.v!=null&&(J.clearTimeout(t.v),t.v=null)}function i0(t,e){var n=null;if(t.g==e){ya(t),Bf(t),t.g=null;var r=2}else if(Zl(t.i,e))n=e.D,Ky(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=cc(),Xe(r,new Ny(r,n,e,i)),gc(t)}else n0(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&rk(t,e)||r==2&&Vf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:cr(t,5);break;case 4:cr(t,10);break;case 3:cr(t,6);break;default:cr(t,2)}}}function s0(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function cr(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Ye(t.jb,t);n||(n=new _r("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||ma(n,"https"),hc(n)),XA(n.toString(),r)}else at(2);t.G=0,t.j&&t.j.va(e),o0(t),e0(t)}M.jb=function(t){t?(this.h.info("Successfully pinged google.com"),at(2)):(this.h.info("Failed to ping google.com"),at(1))};function o0(t){t.G=0,t.I=-1,t.j&&((Wy(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,bf(t.l),t.l.length=0),t.j.ua())}function a0(t,e,n){let r=FA(n);if(r.i!="")e&&ga(r,e+"."+r.i),va(r,r.m);else{const i=J.location;r=$A(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&wf(t.aa,function(i,s){Ae(r,s,i)}),e=t.D,n=t.sa,e&&n&&Ae(r,e,n),Ae(r,"VER",t.ma),eo(t,r),r}function c0(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Le(new Qs({ib:!0})):new Le(t.qa),e.L=t.H,e}function l0(){}M=l0.prototype;M.xa=function(){};M.wa=function(){};M.va=function(){};M.ua=function(){};M.Oa=function(){};function ba(){if(hi&&!(10<=Number(gA)))throw Error("Environmental error: no available transport.")}ba.prototype.g=function(t,e){return new It(t,e)};function It(t,e){He.call(this),this.g=new Zy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ha(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ha(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ni(this)}Ze(It,He);It.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Af(Ye(t.hb,t,e))),at(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=a0(t,null,t.W),gc(t)};It.prototype.close=function(){$f(this.g)};It.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,ol(this.g,e)}else this.v?(e={},e.__data__=Sf(t),ol(this.g,e)):ol(this.g,t)};It.prototype.M=function(){this.g.j=null,delete this.j,$f(this.g),delete this.g,It.Z.M.call(this)};function u0(t){Nf.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ze(u0,Nf);function f0(){xf.call(this),this.status=1}Ze(f0,xf);function Ni(t){this.g=t}Ze(Ni,l0);Ni.prototype.xa=function(){Xe(this.g,"a")};Ni.prototype.wa=function(t){Xe(this.g,new u0(t))};Ni.prototype.va=function(t){Xe(this.g,new f0(t))};Ni.prototype.ua=function(){Xe(this.g,"b")};ba.prototype.createWebChannel=ba.prototype.g;It.prototype.send=It.prototype.u;It.prototype.open=It.prototype.m;It.prototype.close=It.prototype.close;lc.NO_ERROR=0;lc.TIMEOUT=8;lc.HTTP_ERROR=6;xy.COMPLETE="complete";Py.EventType=Ys;Ys.OPEN="a";Ys.CLOSE="b";Ys.ERROR="c";Ys.MESSAGE="d";He.prototype.listen=He.prototype.N;Le.prototype.listenOnce=Le.prototype.O;Le.prototype.getLastError=Le.prototype.La;Le.prototype.getLastErrorCode=Le.prototype.Da;Le.prototype.getStatus=Le.prototype.ba;Le.prototype.getResponseJson=Le.prototype.Qa;Le.prototype.getResponseText=Le.prototype.ga;Le.prototype.send=Le.prototype.ea;var ik=function(){return new ba},sk=function(){return cc()},al=lc,ok=xy,ak=xr,_p={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},ck=Qs,_o=Py,lk=Le;const Ep="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xi="9.6.7";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new Qu("@firebase/firestore");function Tp(){return Er.logLevel}function V(t,...e){if(Er.logLevel<=fe.DEBUG){const n=e.map(jf);Er.debug(`Firestore (${xi}): ${t}`,...n)}}function jn(t,...e){if(Er.logLevel<=fe.ERROR){const n=e.map(jf);Er.error(`Firestore (${xi}): ${t}`,...n)}}function Ip(t,...e){if(Er.logLevel<=fe.WARN){const n=e.map(jf);Er.warn(`Firestore (${xi}): ${t}`,...n)}}function jf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${xi}) INTERNAL ASSERTION FAILED: `+t;throw jn(e),new Error(e)}function _e(t,e){t||Z()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends Or{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class hk{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Un,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Un)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_e(typeof r.accessToken=="string"),new uk(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string"),new ft(e)}}class dk{constructor(e,n,r){this.type="FirstParty",this.user=ft.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class pk{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new dk(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gk{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_e(typeof n.token=="string"),this.p=n.token,new mk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.I(r),this.T=r=>n.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vk(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hf.A=-1;class h0{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=vk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function di(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Et.fromMillis(Date.now())}static fromDate(e){return Et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Et(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new Et(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Pi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function d0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return As.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof As?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends As{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const yk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends As{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return yk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new F(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new F(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new F(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new F(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this.fields=e,e.sort(ht.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return di(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Qe(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const bk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hn(t){if(_e(!!t),typeof t=="string"){let e=0;const n=bk.exec(t);if(_e(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function pi(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function m0(t){const e=t.mapValue.fields.__previous_value__;return p0(e)?m0(e):e}function ks(t){const e=Hn(t.mapValue.fields.__local_write_time__.timestampValue);return new Et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e,n,r,i,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class mi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new mi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof mi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(t){return t==null}function wa(t){return t===0&&1/t==-1/0}function _k(t){return typeof t=="number"&&Number.isInteger(t)&&!wa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(Te.fromString(e))}static fromName(e){return new W(Te.fromString(e).popFirst(5))}static empty(){return new W(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new Te(e.slice()))}}function Tr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?p0(t)?4:10:Z()}function Qt(t,e){if(t===e)return!0;const n=Tr(t);if(n!==Tr(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ks(t).isEqual(ks(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Hn(r.timestampValue),o=Hn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return pi(r.bytesValue).isEqual(pi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return De(r.geoPointValue.latitude)===De(i.geoPointValue.latitude)&&De(r.geoPointValue.longitude)===De(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return De(r.integerValue)===De(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=De(r.doubleValue),o=De(i.doubleValue);return s===o?wa(s)===wa(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return di(t.arrayValue.values||[],e.arrayValue.values||[],Qt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Cp(s)!==Cp(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Qt(s[a],o[a])))return!1;return!0}(t,e);default:return Z()}}function Os(t,e){return(t.values||[]).find(n=>Qt(n,e))!==void 0}function gi(t,e){if(t===e)return 0;const n=Tr(t),r=Tr(e);if(n!==r)return de(n,r);switch(n){case 0:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=De(i.integerValue||i.doubleValue),a=De(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Sp(t.timestampValue,e.timestampValue);case 4:return Sp(ks(t),ks(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(i,s){const o=pi(i),a=pi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=de(o[c],a[c]);if(l!==0)return l}return de(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=de(De(i.latitude),De(s.latitude));return o!==0?o:de(De(i.longitude),De(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=gi(o[c],a[c]);if(l)return l}return de(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),c=s.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const f=de(a[u],l[u]);if(f!==0)return f;const h=gi(o[a[u]],c[l[u]]);if(h!==0)return h}return de(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Z()}}function Sp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=Hn(t),r=Hn(e),i=de(n.seconds,r.seconds);return i!==0?i:de(n.nanos,r.nanos)}function ni(t){return tu(t)}function tu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Hn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?pi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,W.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=tu(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${tu(r.fields[a])}`;return s+"}"}(t.mapValue):Z();var e,n}function Ap(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function nu(t){return!!t&&"integerValue"in t}function qf(t){return!!t&&"arrayValue"in t}function kp(t){return!!t&&"nullValue"in t}function Op(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Uo(t){return!!t&&"mapValue"in t}function is(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Pi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=is(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=is(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Uo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=is(n)}setAll(e){let n=ht.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=is(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Uo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Qt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Uo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Pi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Pt(is(this.value))}}function g0(t){const e=[];return Pi(t.fields,(n,r)=>{const i=new ht([n]);if(Uo(r)){const s=g0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new eu(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new tt(e,0,oe.min(),oe.min(),Pt.empty(),0)}static newFoundDocument(e,n,r){return new tt(e,1,n,oe.min(),r,0)}static newNoDocument(e,n){return new tt(e,2,n,oe.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,oe.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.P=null}}function Rp(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Ek(t,e,n,r,i,s,o)}function zf(t){const e=ee(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+ni(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Di(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ni(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ni(r)).join(",")),e.P=n}return e.P}function Tk(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${ni(r.value)}`;var r}).join(", ")}]`),Di(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ni(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ni(n)).join(",")),`Target(${e})`}function Kf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Nk(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Qt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!xp(t.startAt,e.startAt)&&xp(t.endAt,e.endAt)}function ru(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ct extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.v(e,n,r):new Ik(e,n,r):n==="array-contains"?new Ak(e,r):n==="in"?new kk(e,r):n==="not-in"?new Ok(e,r):n==="array-contains-any"?new Rk(e,r):new ct(e,n,r)}static v(e,n,r){return n==="in"?new Ck(e,r):new Sk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.V(gi(n,this.value)):n!==null&&Tr(this.value)===Tr(n)&&this.V(gi(n,this.value))}V(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ik extends ct{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.V(n)}}class Ck extends ct{constructor(e,n){super(e,"in",n),this.keys=v0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Sk extends ct{constructor(e,n){super(e,"not-in",n),this.keys=v0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function v0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class Ak extends ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qf(n)&&Os(n.arrayValue,this.value)}}class kk extends ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Os(this.value.arrayValue,n)}}class Ok extends ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(Os(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Os(this.value.arrayValue,n)}}class Rk extends ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Os(this.value.arrayValue,r))}}class _a{constructor(e,n){this.position=e,this.inclusive=n}}class ss{constructor(e,n="asc"){this.field=e,this.dir=n}}function Nk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Np(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=gi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function xp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function xk(t,e,n,r,i,s,o,a){return new to(t,e,n,r,i,s,o,a)}function y0(t){return new to(t)}function Fo(t){return!Di(t.limit)&&t.limitType==="F"}function Ea(t){return!Di(t.limit)&&t.limitType==="L"}function b0(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function w0(t){for(const e of t.filters)if(e.S())return e.field;return null}function _0(t){return t.collectionGroup!==null}function Rs(t){const e=ee(t);if(e.D===null){e.D=[];const n=w0(e),r=b0(e);if(n!==null&&r===null)n.isKeyField()||e.D.push(new ss(n)),e.D.push(new ss(ht.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.D.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new ss(ht.keyField(),s))}}}return e.D}function Ir(t){const e=ee(t);if(!e.C)if(e.limitType==="F")e.C=Rp(e.path,e.collectionGroup,Rs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Rs(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ss(s.field,o))}const r=e.endAt?new _a(e.endAt.position,!e.endAt.inclusive):null,i=e.startAt?new _a(e.startAt.position,!e.startAt.inclusive):null;e.C=Rp(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.C}function Pk(t,e,n){return new to(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function vc(t,e){return Kf(Ir(t),Ir(e))&&t.limitType===e.limitType}function E0(t){return`${zf(Ir(t))}|lt:${t.limitType}`}function iu(t){return`Query(target=${Tk(Ir(t))}; limitType=${t.limitType})`}function Wf(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):W.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Np(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Rs(n),r)||n.endAt&&!function(i,s,o){const a=Np(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Rs(n),r))}(t,e)}function T0(t){return(e,n)=>{let r=!1;for(const i of Rs(t)){const s=Dk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Dk(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?gi(a,c):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wa(e)?"-0":e}}function C0(t){return{integerValue:""+t}}function Lk(t,e){return _k(e)?C0(e):I0(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(){this._=void 0}}function Mk(t,e,n){return t instanceof Ta?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Ns?A0(t,e):t instanceof xs?k0(t,e):function(r,i){const s=S0(r,i),o=Pp(s)+Pp(r.k);return nu(s)&&nu(r.k)?C0(o):I0(r.O,o)}(t,e)}function Uk(t,e,n){return t instanceof Ns?A0(t,e):t instanceof xs?k0(t,e):n}function S0(t,e){return t instanceof Ia?nu(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ta extends yc{}class Ns extends yc{constructor(e){super(),this.elements=e}}function A0(t,e){const n=O0(e);for(const r of t.elements)n.some(i=>Qt(i,r))||n.push(r);return{arrayValue:{values:n}}}class xs extends yc{constructor(e){super(),this.elements=e}}function k0(t,e){let n=O0(e);for(const r of t.elements)n=n.filter(i=>!Qt(i,r));return{arrayValue:{values:n}}}class Ia extends yc{constructor(e,n){super(),this.O=e,this.k=n}}function Pp(t){return De(t.integerValue||t.doubleValue)}function O0(t){return qf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Fk(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ns&&r instanceof Ns||n instanceof xs&&r instanceof xs?di(n.elements,r.elements,Qt):n instanceof Ia&&r instanceof Ia?Qt(n.k,r.k):n instanceof Ta&&r instanceof Ta}(t.transform,e.transform)}class $k{constructor(e,n){this.version=e,this.transformResults=n}}class ri{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ri}static exists(e){return new ri(void 0,e)}static updateTime(e){return new ri(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $o(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class bc{}function Vk(t,e,n){t instanceof wc?function(r,i,s){const o=r.value.clone(),a=Mp(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof no?function(r,i,s){if(!$o(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Mp(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(R0(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function su(t,e,n){t instanceof wc?function(r,i,s){if(!$o(r.precondition,i))return;const o=r.value.clone(),a=Up(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(Lp(i),o).setHasLocalMutations()}(t,e,n):t instanceof no?function(r,i,s){if(!$o(r.precondition,i))return;const o=Up(r.fieldTransforms,s,i),a=i.data;a.setAll(R0(r)),a.setAll(o),i.convertToFoundDocument(Lp(i),a).setHasLocalMutations()}(t,e,n):function(r,i){$o(r.precondition,i)&&i.convertToNoDocument(oe.min())}(t,e)}function Bk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=S0(r.transform,i||null);s!=null&&(n==null&&(n=Pt.empty()),n.set(r.field,s))}return n||null}function Dp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&di(n,r,(i,s)=>Fk(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Lp(t){return t.isFoundDocument()?t.version:oe.min()}class wc extends bc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class no extends bc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function R0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Mp(t,e,n){const r=new Map;_e(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Uk(o,a,n[i]))}return r}function Up(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Mk(s,o,e))}return r}class jk extends bc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Hk extends bc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe,ae;function zk(t){switch(t){default:return Z();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function N0(t){if(t===void 0)return jn("GRPC error has no .code"),I.UNKNOWN;switch(t){case Pe.OK:return I.OK;case Pe.CANCELLED:return I.CANCELLED;case Pe.UNKNOWN:return I.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return I.INTERNAL;case Pe.UNAVAILABLE:return I.UNAVAILABLE;case Pe.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Pe.NOT_FOUND:return I.NOT_FOUND;case Pe.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Pe.ABORTED:return I.ABORTED;case Pe.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Pe.DATA_LOSS:return I.DATA_LOSS;default:return Z()}}(ae=Pe||(Pe={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){this.comparator=e,this.root=n||Ke.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Eo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Eo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Eo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Eo(this.root,e,this.comparator,!0)}}class Eo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Ke.RED,this.left=i!=null?i:Ke.EMPTY,this.right=s!=null?s:Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ke(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ke.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ke(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Fp(this.data.getIterator())}getIteratorFrom(e){return new Fp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class Fp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk=new qe(W.comparator);function Cr(){return Kk}const Wk=new qe(W.comparator);function ou(){return Wk}const Gk=new qe(W.comparator),Yk=new Je(W.comparator);function Ie(...t){let e=Yk;for(const n of t)e=e.add(n);return e}const Xk=new Je(de);function x0(){return Xk}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,ro.createSynthesizedTargetChangeForCurrentChange(e,n)),new _c(oe.min(),r,x0(),Cr(),Ie())}}class ro{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new ro(Qe.EMPTY_BYTE_STRING,n,Ie(),Ie(),Ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n,r,i){this.M=e,this.removedTargetIds=n,this.key=r,this.$=i}}class P0{constructor(e,n){this.targetId=e,this.F=n}}class D0{constructor(e,n,r=Qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class $p{constructor(){this.B=0,this.L=Bp(),this.U=Qe.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=Ie(),n=Ie(),r=Ie();return this.L.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Z()}}),new ro(this.U,this.q,e,n,r)}J(){this.K=!1,this.L=Bp()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class Jk{constructor(e){this.nt=e,this.st=new Map,this.it=Cr(),this.rt=Vp(),this.ot=new Je(de)}ct(e){for(const n of e.M)e.$&&e.$.isFoundDocument()?this.ut(n,e.$):this.at(n,e.key,e.$);for(const n of e.removedTargetIds)this.at(n,e.key,e.$)}ht(e){this.forEachTarget(e,n=>{const r=this.lt(n);switch(e.state){case 0:this.ft(n)&&r.W(e.resumeToken);break;case 1:r.tt(),r.G||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.G||this.removeTarget(n);break;case 3:this.ft(n)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),r.W(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((r,i)=>{this.ft(i)&&n(i)})}_t(e){const n=e.targetId,r=e.F.count,i=this.wt(n);if(i){const s=i.target;if(ru(s))if(r===0){const o=new W(s.path);this.at(n,o,tt.newNoDocument(o,oe.min()))}else _e(r===1);else this.gt(n)!==r&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((s,o)=>{const a=this.wt(o);if(a){if(s.current&&ru(a.target)){const c=new W(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.at(o,c,tt.newNoDocument(c,e))}s.j&&(n.set(o,s.H()),s.J())}});let r=Ie();this.rt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.wt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.it.forEach((s,o)=>o.setReadTime(e));const i=new _c(e,n,this.ot,this.it,r);return this.it=Cr(),this.rt=Vp(),this.ot=new Je(de),i}ut(e,n){if(!this.ft(e))return;const r=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,r),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Et(n.key).add(e))}at(e,n,r){if(!this.ft(e))return;const i=this.lt(e);this.It(e,n)?i.Y(n,1):i.X(n),this.rt=this.rt.insert(n,this.Et(n).delete(e)),r&&(this.it=this.it.insert(n,r))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new $p,this.st.set(e,n)),n}Et(e){let n=this.rt.get(e);return n||(n=new Je(de),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Tt(e)}dt(e){this.st.set(e,new $p),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function Vp(){return new qe(W.comparator)}function Bp(){return new qe(W.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Zk=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class eO{constructor(e,n){this.databaseId=e,this.N=n}}function Ca(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function L0(t,e){return t.N?e.toBase64():e.toUint8Array()}function tO(t,e){return Ca(t,e.toTimestamp())}function hn(t){return _e(!!t),oe.fromTimestamp(function(e){const n=Hn(e);return new Et(n.seconds,n.nanos)}(t))}function Gf(t,e){return function(n){return new Te(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function M0(t){const e=Te.fromString(t);return _e($0(e)),e}function au(t,e){return Gf(t.databaseId,e.path)}function cl(t,e){const n=M0(e);if(n.get(1)!==t.databaseId.projectId)throw new F(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(U0(n))}function cu(t,e){return Gf(t.databaseId,e)}function nO(t){const e=M0(t);return e.length===4?Te.emptyPath():U0(e)}function lu(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function U0(t){return _e(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function jp(t,e,n){return{name:au(t,e),fields:n.value.mapValue.fields}}function rO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,l){return c.N?(_e(l===void 0||typeof l=="string"),Qe.fromBase64String(l||"")):(_e(l===void 0||l instanceof Uint8Array),Qe.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:N0(c.code);return new F(l,c.message||"")}(o);n=new D0(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=cl(t,r.document.name),s=hn(r.document.updateTime),o=new Pt({mapValue:{fields:r.document.fields}}),a=tt.newFoundDocument(i,s,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Vo(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=cl(t,r.document),s=r.readTime?hn(r.readTime):oe.min(),o=tt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Vo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=cl(t,r.document),s=r.removedTargetIds||[];n=new Vo([],s,i,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new qk(i),o=r.targetId;n=new P0(o,s)}}return n}function iO(t,e){let n;if(e instanceof wc)n={update:jp(t,e.key,e.value)};else if(e instanceof jk)n={delete:au(t,e.key)};else if(e instanceof no)n={update:jp(t,e.key,e.data),updateMask:pO(e.fieldMask)};else{if(!(e instanceof Hk))return Z();n={verify:au(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Ta)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ns)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof xs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ia)return{fieldPath:s.field.canonicalString(),increment:o.k};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:tO(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z()}(t,e.precondition)),n}function sO(t,e){return t&&t.length>0?(_e(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?hn(r.updateTime):hn(i);return s.isEqual(oe.min())&&(s=hn(i)),new $k(s,r.transformResults||[])}(n,e))):[]}function oO(t,e){return{documents:[cu(t,e.path)]}}function aO(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=cu(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=cu(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length===0)return;const l=c.map(u=>function(f){if(f.op==="=="){if(Op(f.value))return{unaryFilter:{field:Fr(f.field),op:"IS_NAN"}};if(kp(f.value))return{unaryFilter:{field:Fr(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(Op(f.value))return{unaryFilter:{field:Fr(f.field),op:"IS_NOT_NAN"}};if(kp(f.value))return{unaryFilter:{field:Fr(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fr(f.field),op:fO(f.op),value:f.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Fr(u.field),direction:uO(u.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(c,l){return c.N||Di(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function cO(t){let e=nO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){_e(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=F0(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(f){return new ss(Wr(f.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(u)));let a=null;n.limit&&(a=function(u){let f;return f=typeof u=="object"?u.value:u,Di(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(u){const f=!!u.before,h=u.values||[];return new _a(h,f)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const f=!u.before,h=u.values||[];return new _a(h,f)}(n.endAt)),xk(e,i,o,s,a,"F",c,l)}function lO(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Z()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function F0(t){return t?t.unaryFilter!==void 0?[dO(t)]:t.fieldFilter!==void 0?[hO(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>F0(e)).reduce((e,n)=>e.concat(n)):Z():[]}function uO(t){return Qk[t]}function fO(t){return Zk[t]}function Fr(t){return{fieldPath:t.canonicalString()}}function Wr(t){return ht.fromServerFormat(t.fieldPath)}function hO(t){return ct.create(Wr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(t.fieldFilter.op),t.fieldFilter.value)}function dO(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Wr(t.unaryFilter.field);return ct.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Wr(t.unaryFilter.field);return ct.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Wr(t.unaryFilter.field);return ct.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Wr(t.unaryFilter.field);return ct.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}function pO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}function io(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Vk(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&su(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&su(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(oe.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ie())}isEqual(e){return this.batchId===e.batchId&&di(this.mutations,e.mutations,(n,r)=>Dp(n,r))&&di(this.baseMutations,e.baseMutations,(n,r)=>Dp(n,r))}}class Yf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){_e(e.mutations.length===r.length);let i=Gk;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Yf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n,r,i,s=oe.min(),o=oe.min(),a=Qe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e){this.Ht=e}}function wO(t){const e=cO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Pk(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(){this.xe=new EO}addToCollectionParentIndex(e,n){return this.xe.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.xe.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n,r){return O.resolve(Ie())}getFieldIndex(e,n){return O.resolve(null)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class EO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Je(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Je(Te.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.ze=e}next(){return this.ze+=2,this.ze}static He(){return new vi(0)}static Je(){return new vi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function so(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==mO)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i!==void 0){for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),!0;return!1}forEach(e){Pi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return d0(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(){this.changes=new oo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e,n,r){this.qn=e,this.gs=n,this.indexManager=r}ys(e,n){return this.gs.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.ps(e,n,r))}ps(e,n,r){return this.qn.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}Is(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}Es(e,n){return this.qn.getEntries(e,n).next(r=>this.Ts(e,r).next(()=>r))}Ts(e,n){return this.gs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.Is(n,r))}As(e,n,r){return function(i){return W.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Rs(e,n.path):_0(n)?this.Ps(e,n,r):this.bs(e,n,r)}Rs(e,n){return this.ys(e,new W(n)).next(r=>{let i=ou();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Ps(e,n,r){const i=n.collectionGroup;let s=ou();return this.indexManager.getCollectionParents(e,i).next(o=>O.forEach(o,a=>{const c=function(l,u){return new to(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.bs(e,c,r).next(l=>{l.forEach((u,f)=>{s=s.insert(u,f)})})}).next(()=>s))}bs(e,n,r){let i;return this.qn.getAll(e,n.path,r).next(s=>(i=s,this.gs.getAllMutationBatchesAffectingQuery(e,n))).next(s=>{for(const o of s)for(const a of o.mutations){const c=a.key;let l=i.get(c);l==null&&(l=tt.newInvalidDocument(c),i=i.insert(c,l)),su(a,l,o.localWriteTime),l.isFoundDocument()||(i=i.remove(c))}}).next(()=>(i.forEach((s,o)=>{Wf(n,o)||(i=i.remove(s))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.vs=r,this.Vs=i}static Ss(e,n){let r=Ie(),i=Ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Xf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{Ds(e){this.Cs=e}As(e,n,r,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(oe.min())?this.Ns(e,n):this.Cs.Es(e,i).next(s=>{const o=this.xs(n,s);return(Fo(n)||Ea(n))&&this.ks(n.limitType,o,i,r)?this.Ns(e,n):(Tp()<=fe.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),iu(n)),this.Cs.As(e,n,r).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}xs(e,n){let r=new Je(T0(e));return n.forEach((i,s)=>{Wf(e,s)&&(r=r.add(s))}),r}ks(e,n,r,i){if(r.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ns(e,n){return Tp()<=fe.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",iu(n)),this.Cs.As(e,n,oe.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e,n,r,i){this.persistence=e,this.Os=n,this.O=i,this.Ms=new qe(de),this.$s=new oo(s=>zf(s),Kf),this.Fs=oe.min(),this.Bs=e.getRemoteDocumentCache(),this.Un=e.getTargetCache(),this.Kn=e.getBundleCache(),this.Ls(r)}Ls(e){this.indexManager=this.persistence.getIndexManager(e),this.gs=this.persistence.getMutationQueue(e,this.indexManager),this.Us=new IO(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function AO(t,e,n,r){return new SO(t,e,n,r)}async function V0(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.gs.getAllMutationBatches(r).next(s=>(i=s,n.Ls(e),n.gs.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=Ie();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.Us.Es(r,c).next(l=>({qs:l,removedBatchIds:o,addedBatchIds:a}))})})}function kO(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Bs.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,f=u.keys();let h=O.resolve();return f.forEach(p=>{h=h.next(()=>l.getEntry(a,p)).next(g=>{const E=c.docVersions.get(p);_e(E!==null),g.version.compareTo(E)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),l.addEntry(g)))})}),h.next(()=>o.gs.removeMutationBatch(a,u))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.gs.performConsistencyCheck(r)).next(()=>n.Us.Es(r,i))})}function B0(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Un.getLastRemoteSnapshotVersion(n))}function OO(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});i=n.Ms;const a=[];e.targetChanges.forEach((l,u)=>{const f=i.get(u);if(!f)return;a.push(n.Un.removeMatchingKeys(s,l.removedDocuments,u).next(()=>n.Un.addMatchingKeys(s,l.addedDocuments,u)));let h=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(u)?h=h.withResumeToken(Qe.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):l.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(l.resumeToken,r)),i=i.insert(u,h),function(p,g,E){return p.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(f,h,l)&&a.push(n.Un.updateTargetData(s,h))});let c=Cr();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(RO(s,o,e.documentUpdates).next(l=>{c=l})),!r.isEqual(oe.min())){const l=n.Un.getLastRemoteSnapshotVersion(s).next(u=>n.Un.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return O.waitFor(a).next(()=>o.apply(s)).next(()=>n.Us.Ts(s,c)).next(()=>c)}).then(s=>(n.Ms=i,s))}function RO(t,e,n){let r=Ie();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let s=Cr();return n.forEach((o,a)=>{const c=i.get(o);a.isNoDocument()&&a.version.isEqual(oe.min())?(e.removeEntry(o,a.readTime),s=s.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),s=s.insert(o,a)):V("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),s})}function NO(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.gs.getNextMutationBatchAfterBatchId(r,e)))}function xO(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Un.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.Un.allocateTargetId(r).next(o=>(i=new mr(e,o,0,r.currentSequenceNumber),n.Un.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.$s.set(e,r.targetId)),r})}async function uu(t,e,n){const r=ee(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!io(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.$s.delete(i.target)}function Hp(t,e,n){const r=ee(t);let i=oe.min(),s=Ie();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ee(a),f=u.$s.get(l);return f!==void 0?O.resolve(u.Ms.get(f)):u.Un.getTargetData(c,l)}(r,o,Ir(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Un.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Os.As(o,e,n?i:oe.min(),n?s:Ie())).next(a=>({documents:a,Ks:s})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e){this.O=e,this.Ws=new Map,this.zs=new Map}getBundleMetadata(e,n){return O.resolve(this.Ws.get(n))}saveBundleMetadata(e,n){var r;return this.Ws.set(n.id,{id:(r=n).id,version:r.version,createTime:hn(r.createTime)}),O.resolve()}getNamedQuery(e,n){return O.resolve(this.zs.get(n))}saveNamedQuery(e,n){return this.zs.set(n.name,function(r){return{name:r.name,query:wO(r.bundledQuery),readTime:hn(r.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(){this.overlays=new qe(W.comparator),this.Hs=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}saveOverlays(e,n,r){return r.forEach(i=>{this.Yt(e,n,i)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Hs.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Hs.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=new Map,s=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new qe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=new Map,s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=new Map,c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(u,l)),!(a.size>=i)););return O.resolve(a)}Yt(e,n,r){if(r===null)return;const i=this.overlays.get(r.key);i!==null&&this.Hs.get(i.largestBatchId).delete(r.key),this.overlays=this.overlays.insert(r.key,new yO(n,r));let s=this.Hs.get(n);s===void 0&&(s=new Set,this.Hs.set(n,s)),s.add(r.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(){this.Js=new Je($e.Ys),this.Xs=new Je($e.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(e,n){const r=new $e(e,n);this.Js=this.Js.add(r),this.Xs=this.Xs.add(r)}ti(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ei(new $e(e,n))}ni(e,n){e.forEach(r=>this.removeReference(r,n))}si(e){const n=new W(new Te([])),r=new $e(n,e),i=new $e(n,e+1),s=[];return this.Xs.forEachInRange([r,i],o=>{this.ei(o),s.push(o.key)}),s}ii(){this.Js.forEach(e=>this.ei(e))}ei(e){this.Js=this.Js.delete(e),this.Xs=this.Xs.delete(e)}ri(e){const n=new W(new Te([])),r=new $e(n,e),i=new $e(n,e+1);let s=Ie();return this.Xs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new $e(e,0),r=this.Js.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.oi=n}static Ys(e,n){return W.comparator(e.key,n.key)||de(e.oi,n.oi)}static Zs(e,n){return de(e.oi,n.oi)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.gs=[],this.ci=1,this.ui=new Je($e.Ys)}checkEmpty(e){return O.resolve(this.gs.length===0)}addMutationBatch(e,n,r,i){const s=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const o=new vO(s,n,r,i);this.gs.push(o);for(const a of i)this.ui=this.ui.add(new $e(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.ai(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.hi(r),s=i<0?0:i;return O.resolve(this.gs.length>s?this.gs[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.gs.length===0?-1:this.ci-1)}getAllMutationBatches(e){return O.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),s=[];return this.ui.forEachInRange([r,i],o=>{const a=this.ai(o.oi);s.push(a)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(de);return n.forEach(i=>{const s=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this.ui.forEachInRange([s,o],a=>{r=r.add(a.oi)})}),O.resolve(this.li(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new $e(new W(s),0);let a=new Je(de);return this.ui.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.oi)),!0)},o),O.resolve(this.li(a))}li(e){const n=[];return e.forEach(r=>{const i=this.ai(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){_e(this.fi(n.batchId,"removed")===0),this.gs.shift();let r=this.ui;return O.forEach(n.mutations,i=>{const s=new $e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ui=r})}Qe(e){}containsKey(e,n){const r=new $e(n,0),i=this.ui.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.gs.length,O.resolve()}fi(e,n){return this.hi(e)}hi(e){return this.gs.length===0?0:e-this.gs[0].batchId}ai(e){const n=this.hi(e);return n<0||n>=this.gs.length?null:this.gs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e){this.di=e,this.docs=new qe(W.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.di(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let r=Cr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():tt.newInvalidDocument(i))}),O.resolve(r)}getAll(e,n,r){let i=Cr();const s=new W(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||c.readTime.compareTo(r)<=0||(i=i.insert(c.key,c.mutableCopy()))}return O.resolve(i)}_i(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new UO(this)}getSize(e){return O.resolve(this.size)}}class UO extends TO{constructor(e){super(),this.Tn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Tn.addEntry(e,i)):this.Tn.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Tn.getEntry(e,n)}getAllFromCache(e,n){return this.Tn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(e){this.persistence=e,this.wi=new oo(n=>zf(n),Kf),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.mi=0,this.gi=new Jf,this.targetCount=0,this.yi=vi.He()}forEachTarget(e,n){return this.wi.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.mi)}allocateTargetId(e){return this.highestTargetId=this.yi.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.mi&&(this.mi=n),O.resolve()}Ze(e){this.wi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.yi=new vi(n),this.highestTargetId=n),e.sequenceNumber>this.mi&&(this.mi=e.sequenceNumber)}addTargetData(e,n){return this.Ze(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Ze(n),O.resolve()}removeTargetData(e,n){return this.wi.delete(n.target),this.gi.si(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.wi.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.wi.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.wi.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.gi.ti(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.gi.ni(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.gi.si(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.gi.ri(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.gi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e,n){this.pi={},this.overlays={},this.Nn=new Hf(0),this.xn=!1,this.xn=!0,this.referenceDelegate=e(this),this.Un=new FO(this),this.indexManager=new _O,this.qn=function(r){return new MO(r)}(r=>this.referenceDelegate.Ii(r)),this.O=new bO(n),this.Kn=new PO(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new DO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.pi[e.toKey()];return r||(r=new LO(n,this.referenceDelegate),this.pi[e.toKey()]=r),r}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(e,n,r){V("MemoryPersistence","Starting transaction:",e);const i=new VO(this.Nn.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.Ti(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return O.or(Object.values(this.pi).map(r=>()=>r.containsKey(e,n)))}}class VO extends gO{constructor(e){super(),this.currentSequenceNumber=e}}class Qf{constructor(e){this.persistence=e,this.Ri=new Jf,this.Pi=null}static bi(e){return new Qf(e)}get vi(){if(this.Pi)return this.Pi;throw Z()}addReference(e,n,r){return this.Ri.addReference(r,n),this.vi.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.vi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.vi.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ri.si(n.targetId).forEach(i=>this.vi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.vi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Pi=new Set}Ti(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.vi,r=>{const i=W.fromPath(r);return this.Vi(e,i).next(s=>{s||n.removeEntry(i,oe.min())})}).next(()=>(this.Pi=null,n.apply(e)))}updateLimboDocument(e,n){return this.Vi(e,n).next(r=>{r?this.vi.delete(n.toString()):this.vi.add(n.toString())})}Ii(e){return 0}Vi(e,n){return O.or([()=>O.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class qp{constructor(){this.activeTargetIds=x0()}Ci(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ni(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Di(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class BO{constructor(){this._r=new qp,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this._r.Ci(e),this.wr[e]||"not-current"}updateQueryState(e,n,r){this.wr[e]=n}removeLocalQueryTarget(e){this._r.Ni(e)}isLocalQueryTarget(e){return this._r.activeTargetIds.has(e)}clearQueryState(e){delete this.wr[e]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(e){return this._r.activeTargetIds.has(e)}start(){return this._r=new qp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{mr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}mr(e){this.Er.push(e)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Er)e(0)}Ir(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Er)e(1)}static Vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(e){this.Ar=e.Ar,this.Rr=e.Rr}Pr(e){this.br=e}vr(e){this.Vr=e}onMessage(e){this.Sr=e}close(){this.Rr()}send(e){this.Ar(e)}Dr(){this.br()}Cr(e){this.Vr(e)}Nr(e){this.Sr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.kr=n+"://"+e.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(e,n,r,i,s){const o=this.$r(e,n);V("RestConnection","Sending: ",o,r);const a={};return this.Fr(a,i,s),this.Br(e,o,a,r).then(c=>(V("RestConnection","Received: ",c),c),c=>{throw Ip("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}Lr(e,n,r,i,s){return this.Mr(e,n,r,i,s)}Fr(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+xi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}$r(e,n){const r=HO[e];return`${this.kr}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Br(e,n,r,i){return new Promise((s,o)=>{const a=new lk;a.listenOnce(ok.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case al.NO_ERROR:const l=a.getResponseJson();V("Connection","XHR received:",JSON.stringify(l)),s(l);break;case al.TIMEOUT:V("Connection",'RPC "'+e+'" timed out'),o(new F(I.DEADLINE_EXCEEDED,"Request time out"));break;case al.HTTP_ERROR:const u=a.getStatus();if(V("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const f=a.getResponseJson().error;if(f&&f.status&&f.message){const h=function(p){const g=p.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(g)>=0?g:I.UNKNOWN}(f.status);o(new F(h,f.message))}else o(new F(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new F(I.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{V("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,r,15)})}Ur(e,n,r){const i=[this.kr,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=ik(),o=sk(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new ck({})),this.Fr(a.initMessageHeaders,n,r),Zg()||tv()||Y_()||nv()||X_()||ev()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");V("Connection","Creating WebChannel: "+c,a);const l=s.createWebChannel(c,a);let u=!1,f=!1;const h=new qO({Ar:g=>{f?V("Connection","Not sending because WebChannel is closed:",g):(u||(V("Connection","Opening WebChannel transport."),l.open(),u=!0),V("Connection","WebChannel sending:",g),l.send(g))},Rr:()=>l.close()}),p=(g,E,w)=>{g.listen(E,v=>{try{w(v)}catch(b){setTimeout(()=>{throw b},0)}})};return p(l,_o.EventType.OPEN,()=>{f||V("Connection","WebChannel transport opened.")}),p(l,_o.EventType.CLOSE,()=>{f||(f=!0,V("Connection","WebChannel transport closed"),h.Cr())}),p(l,_o.EventType.ERROR,g=>{f||(f=!0,Ip("Connection","WebChannel transport errored:",g),h.Cr(new F(I.UNAVAILABLE,"The operation could not be completed")))}),p(l,_o.EventType.MESSAGE,g=>{var E;if(!f){const w=g.data[0];_e(!!w);const v=w,b=v.error||((E=v[0])===null||E===void 0?void 0:E.error);if(b){V("Connection","WebChannel received error:",b);const x=b.status;let D=function(re){const K=Pe[re];if(K!==void 0)return N0(K)}(x),G=b.message;D===void 0&&(D=I.INTERNAL,G="Unknown error status: "+x+" with message "+b.message),f=!0,h.Cr(new F(D,G)),l.close()}else V("Connection","WebChannel received:",w),h.Nr(w)}}),p(o,ak.STAT_EVENT,g=>{g.stat===_p.PROXY?V("Connection","Detected buffering proxy"):g.stat===_p.NOPROXY&&V("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.Dr()},0),h}}function ll(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(t){return new eO(t,!0)}class j0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Sn=e,this.timerId=n,this.qr=r,this.Kr=i,this.Gr=s,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(e){this.cancel();const n=Math.floor(this.jr+this.Jr()),r=Math.max(0,Date.now()-this.Wr),i=Math.max(0,n-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.jr} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,i,()=>(this.Wr=Date.now(),e())),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){this.Qr!==null&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){this.Qr!==null&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e,n,r,i,s,o,a,c){this.Sn=e,this.Xr=r,this.Zr=i,this.eo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new j0(e,n)}oo(){return this.state===1||this.state===5||this.co()}co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&this.so===null&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,()=>this.lo()))}fo(e){this._o(),this.stream.send(e)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(e,n){this._o(),this.wo(),this.ro.cancel(),this.no++,e!==4?this.ro.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(jn(n.toString()),jn("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.mo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.vr(n)}mo(){}auth(){this.state=1;const e=this.yo(this.no),n=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.no===n&&this.po(r,i)},r=>{e(()=>{const i=new F(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Io(i)})})}po(e,n){const r=this.yo(this.no);this.stream=this.Eo(e,n),this.stream.Pr(()=>{r(()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,()=>(this.co()&&(this.state=3),Promise.resolve())),this.listener.Pr()))}),this.stream.vr(i=>{r(()=>this.Io(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}uo(){this.state=5,this.ro.Hr(async()=>{this.state=0,this.start()})}Io(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}yo(e){return n=>{this.Sn.enqueueAndForget(()=>this.no===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class KO extends H0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.O=s}Eo(e,n){return this.eo.Ur("Listen",e,n)}onMessage(e){this.ro.reset();const n=rO(this.O,e),r=function(i){if(!("targetChange"in i))return oe.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?oe.min():s.readTime?hn(s.readTime):oe.min()}(e);return this.listener.To(n,r)}Ao(e){const n={};n.database=lu(this.O),n.addTarget=function(i,s){let o;const a=s.target;return o=ru(a)?{documents:oO(i,a)}:{query:aO(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=L0(i,s.resumeToken):s.snapshotVersion.compareTo(oe.min())>0&&(o.readTime=Ca(i,s.snapshotVersion.toTimestamp())),o}(this.O,e);const r=lO(this.O,e);r&&(n.labels=r),this.fo(n)}Ro(e){const n={};n.database=lu(this.O),n.removeTarget=e,this.fo(n)}}class WO extends H0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.O=s,this.Po=!1}get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(e,n){return this.eo.Ur("Write",e,n)}onMessage(e){if(_e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Po){this.ro.reset();const n=sO(e.writeResults,e.commitTime),r=hn(e.commitTime);return this.listener.Vo(r,n)}return _e(!e.writeResults||e.writeResults.length===0),this.Po=!0,this.listener.So()}Do(){const e={};e.database=lu(this.O),this.fo(e)}vo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>iO(this.O,r))};this.fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.eo=r,this.O=i,this.Co=!1}No(){if(this.Co)throw new F(I.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(e,n,r){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.eo.Mr(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(I.UNKNOWN,i.toString())})}Lr(e,n,r){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.eo.Lr(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(I.UNKNOWN,i.toString())})}terminate(){this.Co=!0}}class YO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){this.xo===0&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve())))}Bo(e){this.state==="Online"?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.$o("Offline")))}set(e){this.Lo(),this.xo=0,e==="Online"&&(this.Oo=!1),this.$o(e)}$o(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Fo(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(jn(n),this.Oo=!1):V("OnlineStateTracker",n)}Lo(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=s,this.jo.mr(o=>{r.enqueueAndForget(async()=>{Pr(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ee(a);c.Ko.add(4),await ao(c),c.Qo.set("Unknown"),c.Ko.delete(4),await Tc(c)}(this))})}),this.Qo=new YO(r,i)}}async function Tc(t){if(Pr(t))for(const e of t.Go)await e(!0)}async function ao(t){for(const e of t.Go)await e(!1)}function q0(t,e){const n=ee(t);n.qo.has(e.targetId)||(n.qo.set(e.targetId,e),th(n)?eh(n):Li(n).co()&&Zf(n,e))}function z0(t,e){const n=ee(t),r=Li(n);n.qo.delete(e),r.co()&&K0(n,e),n.qo.size===0&&(r.co()?r.ho():Pr(n)&&n.Qo.set("Unknown"))}function Zf(t,e){t.Wo.Z(e.targetId),Li(t).Ao(e)}function K0(t,e){t.Wo.Z(e),Li(t).Ro(e)}function eh(t){t.Wo=new Jk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.qo.get(e)||null}),Li(t).start(),t.Qo.Mo()}function th(t){return Pr(t)&&!Li(t).oo()&&t.qo.size>0}function Pr(t){return ee(t).Ko.size===0}function W0(t){t.Wo=void 0}async function JO(t){t.qo.forEach((e,n)=>{Zf(t,e)})}async function QO(t,e){W0(t),th(t)?(t.Qo.Bo(e),eh(t)):t.Qo.set("Unknown")}async function ZO(t,e,n){if(t.Qo.set("Online"),e instanceof D0&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.qo.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.qo.delete(o),r.Wo.removeTarget(o))}(t,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Sa(t,r)}else if(e instanceof Vo?t.Wo.ct(e):e instanceof P0?t.Wo._t(e):t.Wo.ht(e),!n.isEqual(oe.min()))try{const r=await B0(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Wo.yt(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.qo.get(c);l&&i.qo.set(c,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=i.qo.get(a);if(!c)return;i.qo.set(a,c.withResumeToken(Qe.EMPTY_BYTE_STRING,c.snapshotVersion)),K0(i,a);const l=new mr(c.target,a,1,c.sequenceNumber);Zf(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await Sa(t,r)}}async function Sa(t,e,n){if(!io(e))throw e;t.Ko.add(1),await ao(t),t.Qo.set("Offline"),n||(n=()=>B0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.Ko.delete(1),await Tc(t)})}function G0(t,e){return e().catch(n=>Sa(t,n,e))}async function Ic(t){const e=ee(t),n=qn(e);let r=e.Uo.length>0?e.Uo[e.Uo.length-1].batchId:-1;for(;eR(e);)try{const i=await NO(e.localStore,r);if(i===null){e.Uo.length===0&&n.ho();break}r=i.batchId,tR(e,i)}catch(i){await Sa(e,i)}Y0(e)&&X0(e)}function eR(t){return Pr(t)&&t.Uo.length<10}function tR(t,e){t.Uo.push(e);const n=qn(t);n.co()&&n.bo&&n.vo(e.mutations)}function Y0(t){return Pr(t)&&!qn(t).oo()&&t.Uo.length>0}function X0(t){qn(t).start()}async function nR(t){qn(t).Do()}async function rR(t){const e=qn(t);for(const n of t.Uo)e.vo(n.mutations)}async function iR(t,e,n){const r=t.Uo.shift(),i=Yf.from(r,e,n);await G0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ic(t)}async function sR(t,e){e&&qn(t).bo&&await async function(n,r){if(i=r.code,zk(i)&&i!==I.ABORTED){const s=n.Uo.shift();qn(n).ao(),await G0(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Ic(n)}var i}(t,e),Y0(t)&&X0(t)}async function Kp(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=Pr(n);n.Ko.add(3),await ao(n),r&&n.Qo.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ko.delete(3),await Tc(n)}async function oR(t,e){const n=ee(t);e?(n.Ko.delete(2),await Tc(n)):e||(n.Ko.add(2),await ao(n),n.Qo.set("Unknown"))}function Li(t){return t.zo||(t.zo=function(e,n,r){const i=ee(e);return i.No(),new KO(n,i.eo,i.authCredentials,i.appCheckCredentials,i.O,r)}(t.datastore,t.asyncQueue,{Pr:JO.bind(null,t),vr:QO.bind(null,t),To:ZO.bind(null,t)}),t.Go.push(async e=>{e?(t.zo.ao(),th(t)?eh(t):t.Qo.set("Unknown")):(await t.zo.stop(),W0(t))})),t.zo}function qn(t){return t.Ho||(t.Ho=function(e,n,r){const i=ee(e);return i.No(),new WO(n,i.eo,i.authCredentials,i.appCheckCredentials,i.O,r)}(t.datastore,t.asyncQueue,{Pr:nR.bind(null,t),vr:sR.bind(null,t),So:rR.bind(null,t),Vo:iR.bind(null,t)}),t.Go.push(async e=>{e?(t.Ho.ao(),await Ic(t)):(await t.Ho.stop(),t.Uo.length>0&&(V("RemoteStore",`Stopping write stream with ${t.Uo.length} pending writes`),t.Uo=[]))})),t.Ho}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new nh(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rh(t,e){if(jn("AsyncQueue",`${e}: ${t}`),io(t))return new F(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=ou(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new ii(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ii)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ii;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(){this.Jo=new qe(W.comparator)}track(e){const n=e.doc.key,r=this.Jo.get(n);r?e.type!==0&&r.type===3?this.Jo=this.Jo.insert(n,e):e.type===3&&r.type!==1?this.Jo=this.Jo.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Jo=this.Jo.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Jo=this.Jo.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Jo=this.Jo.remove(n):e.type===1&&r.type===2?this.Jo=this.Jo.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Jo=this.Jo.insert(n,{type:2,doc:e.doc}):Z():this.Jo=this.Jo.insert(n,e)}Yo(){const e=[];return this.Jo.inorderTraversal((n,r)=>{e.push(r)}),e}}class yi{constructor(e,n,r,i,s,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new yi(e,n,ii.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(){this.Xo=void 0,this.listeners=[]}}class cR{constructor(){this.queries=new oo(e=>E0(e),vc),this.onlineState="Unknown",this.Zo=new Set}}async function lR(t,e){const n=ee(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new aR),i)try{s.Xo=await n.onListen(r)}catch(o){const a=rh(o,`Initialization of query '${iu(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.tc(n.onlineState),s.Xo&&e.ec(s.Xo)&&ih(n)}async function uR(t,e){const n=ee(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function fR(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.ec(i)&&(r=!0);o.Xo=i}}r&&ih(n)}function hR(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function ih(t){t.Zo.forEach(e=>{e.next()})}class dR{constructor(e,n,r){this.query=e,this.nc=n,this.sc=!1,this.ic=null,this.onlineState="Unknown",this.options=r||{}}ec(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new yi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.sc?this.rc(e)&&(this.nc.next(e),n=!0):this.oc(e,this.onlineState)&&(this.cc(e),n=!0),this.ic=e,n}onError(e){this.nc.error(e)}tc(e){this.onlineState=e;let n=!1;return this.ic&&!this.sc&&this.oc(this.ic,e)&&(this.cc(this.ic),n=!0),n}oc(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.uc||!r)&&(!e.docs.isEmpty()||n==="Offline")}rc(e){if(e.docChanges.length>0)return!0;const n=this.ic&&this.ic.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}cc(e){e=yi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.sc=!0,this.nc.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e){this.key=e}}class Q0{constructor(e){this.key=e}}class pR{constructor(e,n){this.query=e,this.dc=n,this._c=null,this.current=!1,this.wc=Ie(),this.mutatedKeys=Ie(),this.mc=T0(e),this.gc=new ii(this.mc)}get yc(){return this.dc}Ic(e,n){const r=n?n.Ec:new Wp,i=n?n.gc:this.gc;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=Fo(this.query)&&i.size===this.query.limit?i.last():null,l=Ea(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,f)=>{const h=i.get(u),p=Wf(this.query,f)?f:null,g=!!h&&this.mutatedKeys.has(h.key),E=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;h&&p?h.data.isEqual(p.data)?g!==E&&(r.track({type:3,doc:p}),w=!0):this.Tc(h,p)||(r.track({type:2,doc:p}),w=!0,(c&&this.mc(p,c)>0||l&&this.mc(p,l)<0)&&(a=!0)):!h&&p?(r.track({type:0,doc:p}),w=!0):h&&!p&&(r.track({type:1,doc:h}),w=!0,(c||l)&&(a=!0)),w&&(p?(o=o.add(p),s=E?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),Fo(this.query)||Ea(this.query))for(;o.size>this.query.limit;){const u=Fo(this.query)?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{gc:o,Ec:r,ks:a,mutatedKeys:s}}Tc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.gc;this.gc=e.gc,this.mutatedKeys=e.mutatedKeys;const s=e.Ec.Yo();s.sort((l,u)=>function(f,h){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return p(f)-p(h)}(l.type,u.type)||this.mc(l.doc,u.doc)),this.Ac(r);const o=n?this.Rc():[],a=this.wc.size===0&&this.current?1:0,c=a!==this._c;return this._c=a,s.length!==0||c?{snapshot:new yi(this.query,e.gc,i,s,e.mutatedKeys,a===0,c,!1),Pc:o}:{Pc:o}}tc(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({gc:this.gc,Ec:new Wp,mutatedKeys:this.mutatedKeys,ks:!1},!1)):{Pc:[]}}bc(e){return!this.dc.has(e)&&!!this.gc.has(e)&&!this.gc.get(e).hasLocalMutations}Ac(e){e&&(e.addedDocuments.forEach(n=>this.dc=this.dc.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.dc=this.dc.delete(n)),this.current=e.current)}Rc(){if(!this.current)return[];const e=this.wc;this.wc=Ie(),this.gc.forEach(r=>{this.bc(r.key)&&(this.wc=this.wc.add(r.key))});const n=[];return e.forEach(r=>{this.wc.has(r)||n.push(new Q0(r))}),this.wc.forEach(r=>{e.has(r)||n.push(new J0(r))}),n}vc(e){this.dc=e.Ks,this.wc=Ie();const n=this.Ic(e.documents);return this.applyChanges(n,!0)}Vc(){return yi.fromInitialDocuments(this.query,this.gc,this.mutatedKeys,this._c===0)}}class mR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class gR{constructor(e){this.key=e,this.Sc=!1}}class vR{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Dc={},this.Cc=new oo(a=>E0(a),vc),this.Nc=new Map,this.xc=new Set,this.kc=new qe(W.comparator),this.Oc=new Map,this.Mc=new Jf,this.$c={},this.Fc=new Map,this.Bc=vi.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return this.Lc===!0}}async function yR(t,e){const n=kR(t);let r,i;const s=n.Cc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Vc();else{const o=await xO(n.localStore,Ir(e));n.isPrimaryClient&&q0(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await bR(n,e,r,a==="current")}return i}async function bR(t,e,n,r){t.Uc=(u,f,h)=>async function(p,g,E,w){let v=g.view.Ic(E);v.ks&&(v=await Hp(p.localStore,g.query,!1).then(({documents:D})=>g.view.Ic(D,v)));const b=w&&w.targetChanges.get(g.targetId),x=g.view.applyChanges(v,p.isPrimaryClient,b);return Yp(p,g.targetId,x.Pc),x.snapshot}(t,u,f,h);const i=await Hp(t.localStore,e,!0),s=new pR(e,i.Ks),o=s.Ic(i.documents),a=ro.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=s.applyChanges(o,t.isPrimaryClient,a);Yp(t,n,c.Pc);const l=new mR(e,n,s);return t.Cc.set(e,l),t.Nc.has(n)?t.Nc.get(n).push(e):t.Nc.set(n,[e]),c.snapshot}async function wR(t,e){const n=ee(t),r=n.Cc.get(e),i=n.Nc.get(r.targetId);if(i.length>1)return n.Nc.set(r.targetId,i.filter(s=>!vc(s,e))),void n.Cc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await uu(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),z0(n.remoteStore,r.targetId),fu(n,r.targetId)}).catch(so)):(fu(n,r.targetId),await uu(n.localStore,r.targetId,!0))}async function _R(t,e,n){const r=OR(t);try{const i=await function(s,o){const a=ee(s),c=Et.now(),l=o.reduce((f,h)=>f.add(h.key),Ie());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>a.Us.Es(f,l).next(h=>{u=h;const p=[];for(const g of o){const E=Bk(g,u.get(g.key));E!=null&&p.push(new no(g.key,E,g0(E.value.mapValue),ri.exists(!0)))}return a.gs.addMutationBatch(f,c,p,o)})).then(f=>(f.applyToLocalDocumentSet(u),{batchId:f.batchId,changes:u}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.$c[s.currentUser.toKey()];c||(c=new qe(de)),c=c.insert(o,a),s.$c[s.currentUser.toKey()]=c}(r,i.batchId,n),await co(r,i.changes),await Ic(r.remoteStore)}catch(i){const s=rh(i,"Failed to persist write");n.reject(s)}}async function Z0(t,e){const n=ee(t);try{const r=await OO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Oc.get(s);o&&(_e(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Sc=!0:i.modifiedDocuments.size>0?_e(o.Sc):i.removedDocuments.size>0&&(_e(o.Sc),o.Sc=!1))}),await co(n,r,e)}catch(r){await so(r)}}function Gp(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Cc.forEach((s,o)=>{const a=o.view.tc(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ee(s);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const f of u.listeners)f.tc(o)&&(c=!0)}),c&&ih(a)}(r.eventManager,e),i.length&&r.Dc.To(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ER(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Oc.get(e),s=i&&i.key;if(s){let o=new qe(W.comparator);o=o.insert(s,tt.newNoDocument(s,oe.min()));const a=Ie().add(s),c=new _c(oe.min(),new Map,new Je(de),o,a);await Z0(r,c),r.kc=r.kc.remove(s),r.Oc.delete(e),sh(r)}else await uu(r.localStore,e,!1).then(()=>fu(r,e,n)).catch(so)}async function TR(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await kO(n.localStore,e);tb(n,r,null),eb(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await co(n,i)}catch(i){await so(i)}}async function IR(t,e,n){const r=ee(t);try{const i=await function(s,o){const a=ee(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.gs.lookupMutationBatch(c,o).next(u=>(_e(u!==null),l=u.keys(),a.gs.removeMutationBatch(c,u))).next(()=>a.gs.performConsistencyCheck(c)).next(()=>a.Us.Es(c,l))})}(r.localStore,e);tb(r,e,n),eb(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await co(r,i)}catch(i){await so(i)}}function eb(t,e){(t.Fc.get(e)||[]).forEach(n=>{n.resolve()}),t.Fc.delete(e)}function tb(t,e,n){const r=ee(t);let i=r.$c[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.$c[r.currentUser.toKey()]=i}}function fu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Nc.get(e))t.Cc.delete(r),n&&t.Dc.qc(r,n);t.Nc.delete(e),t.isPrimaryClient&&t.Mc.si(e).forEach(r=>{t.Mc.containsKey(r)||nb(t,r)})}function nb(t,e){t.xc.delete(e.path.canonicalString());const n=t.kc.get(e);n!==null&&(z0(t.remoteStore,n),t.kc=t.kc.remove(e),t.Oc.delete(n),sh(t))}function Yp(t,e,n){for(const r of n)r instanceof J0?(t.Mc.addReference(r.key,e),CR(t,r)):r instanceof Q0?(V("SyncEngine","Document no longer in limbo: "+r.key),t.Mc.removeReference(r.key,e),t.Mc.containsKey(r.key)||nb(t,r.key)):Z()}function CR(t,e){const n=e.key,r=n.path.canonicalString();t.kc.get(n)||t.xc.has(r)||(V("SyncEngine","New document in limbo: "+n),t.xc.add(r),sh(t))}function sh(t){for(;t.xc.size>0&&t.kc.size<t.maxConcurrentLimboResolutions;){const e=t.xc.values().next().value;t.xc.delete(e);const n=new W(Te.fromString(e)),r=t.Bc.next();t.Oc.set(r,new gR(n)),t.kc=t.kc.insert(n,r),q0(t.remoteStore,new mr(Ir(y0(n.path)),r,2,Hf.A))}}async function co(t,e,n){const r=ee(t),i=[],s=[],o=[];r.Cc.isEmpty()||(r.Cc.forEach((a,c)=>{o.push(r.Uc(c,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),i.push(l);const u=Xf.Ss(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.Dc.To(i),await async function(a,c){const l=ee(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>O.forEach(c,f=>O.forEach(f.vs,h=>l.persistence.referenceDelegate.addReference(u,f.targetId,h)).next(()=>O.forEach(f.Vs,h=>l.persistence.referenceDelegate.removeReference(u,f.targetId,h)))))}catch(u){if(!io(u))throw u;V("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const f=u.targetId;if(!u.fromCache){const h=l.Ms.get(f),p=h.snapshotVersion,g=h.withLastLimboFreeSnapshotVersion(p);l.Ms=l.Ms.insert(f,g)}}}(r.localStore,s))}async function SR(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await V0(n.localStore,e);n.currentUser=e,function(i,s){i.Fc.forEach(o=>{o.forEach(a=>{a.reject(new F(I.CANCELLED,s))})}),i.Fc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await co(n,r.qs)}}function AR(t,e){const n=ee(t),r=n.Oc.get(e);if(r&&r.Sc)return Ie().add(r.key);{let i=Ie();const s=n.Nc.get(e);if(!s)return i;for(const o of s){const a=n.Cc.get(o);i=i.unionWith(a.view.yc)}return i}}function kR(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Z0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=AR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ER.bind(null,e),e.Dc.To=fR.bind(null,e.eventManager),e.Dc.qc=hR.bind(null,e.eventManager),e}function OR(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=IR.bind(null,e),e}class RR{constructor(){this.synchronizeTabs=!1}async initialize(e){this.O=Ec(e.databaseInfo.databaseId),this.sharedClientState=this.Gc(e),this.persistence=this.jc(e),await this.persistence.start(),this.gcScheduler=this.Qc(e),this.localStore=this.Wc(e)}Qc(e){return null}Wc(e){return AO(this.persistence,new CO,e.initialUser,this.O)}jc(e){return new $O(Qf.bi,this.O)}Gc(e){return new BO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class NR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Gp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=SR.bind(null,this.syncEngine),await oR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new cR}createDatastore(e){const n=Ec(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new zO(i));var i;return function(s,o,a,c){return new GO(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Gp(this.syncEngine,a,0),o=zp.Vt()?new zp:new jO,new XO(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,c,l){const u=new vR(r,i,s,o,a,c);return l&&(u.Lc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ee(e);V("RemoteStore","RemoteStore shutting down."),n.Ko.add(5),await ao(n),n.jo.shutdown(),n.Qo.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Hc(this.observer.next,e)}error(e){this.observer.error?this.Hc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Jc(){this.muted=!0}Hc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=h0.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{V("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(V("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=rh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function DR(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await V0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function LR(t,e){t.asyncQueue.verifyOperationInProgress();const n=await MR(t);V("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Kp(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Kp(e.remoteStore,s)),t.onlineComponents=e}async function MR(t){return t.offlineComponents||(V("FirestoreClient","Using default OfflineComponentProvider"),await DR(t,new RR)),t.offlineComponents}async function rb(t){return t.onlineComponents||(V("FirestoreClient","Using default OnlineComponentProvider"),await LR(t,new NR)),t.onlineComponents}function UR(t){return rb(t).then(e=>e.syncEngine)}async function FR(t){const e=await rb(t),n=e.eventManager;return n.onListen=yR.bind(null,e.syncEngine),n.onUnlisten=wR.bind(null,e.syncEngine),n}function $R(t,e,n={}){const r=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const l=new xR({next:f=>{s.enqueueAndForget(()=>uR(i,u)),f.fromCache&&a.source==="server"?c.reject(new F(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),u=new dR(o,l,{includeMetadataChanges:!0,uc:!0});return lR(i,u)}(await FR(t),t.asyncQueue,e,n,r)),r.promise}const Xp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(t,e,n){if(!n)throw new F(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function VR(t,e,n,r){if(e===!0&&r===!0)throw new F(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Jp(t){if(!W.isDocumentKey(t))throw new F(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Qp(t){if(W.isDocumentKey(t))throw new F(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Cc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function hu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cc(t);throw new F(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new F(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,VR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zp({}),this._settingsFrozen=!1,e instanceof mi?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new F(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mi(i.options.projectId)}(e))}get app(){if(!this._app)throw new F(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zp(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new fk;switch(n.type){case"gapi":const r=n.client;return _e(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new pk(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new F(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Xp.get(e);n&&(V("ComponentProvider","Removing Datastore"),Xp.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ot(this.firestore,e,this._key)}}class lo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lo(this.firestore,e,this._query)}}class Fn extends lo{constructor(e,n,r){super(e,n,y0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ot(this.firestore,null,new W(e))}withConverter(e){return new Fn(this.firestore,e,this._path)}}function QD(t,e,...n){if(t=rt(t),ib("collection","path",e),t instanceof oh){const r=Te.fromString(e,...n);return Qp(r),new Fn(t,null,r)}{if(!(t instanceof Ot||t instanceof Fn))throw new F(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Qp(r),new Fn(t.firestore,null,r)}}function BR(t,e,...n){if(t=rt(t),arguments.length===1&&(e=h0.R()),ib("doc","path",e),t instanceof oh){const r=Te.fromString(e,...n);return Jp(r),new Ot(t,null,new W(r))}{if(!(t instanceof Ot||t instanceof Fn))throw new F(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Jp(r),new Ot(t.firestore,t instanceof Fn?t.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new j0(this,"async_queue_retry"),this.yu=()=>{const n=ll();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ro.Yr()};const e=ll();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.fu){this.fu=!0,this.mu=e||!1;const n=ll();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.yu)}}enqueue(e){if(this.pu(),this.fu)return new Promise(()=>{});const n=new Un;return this.Iu(()=>this.fu&&this.mu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.lu.push(e),this.Eu()))}async Eu(){if(this.lu.length!==0){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(e){if(!io(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.lu.length>0&&this.ro.Hr(()=>this.Eu())}}Iu(e){const n=this.hu.then(()=>(this.wu=!0,e().catch(r=>{this._u=r,this.wu=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw jn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.wu=!1,r))));return this.hu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.gu.indexOf(e)>-1&&(n=0);const i=nh.createAndSchedule(this,e,n,r,s=>this.Tu(s));return this.du.push(i),i}pu(){this._u&&Z()}verifyOperationInProgress(){}async Au(){let e;do e=this.hu,await e;while(e!==this.hu)}Ru(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}Pu(e){return this.Au().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Au()})}bu(e){this.gu.push(e)}Tu(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class ah extends oh{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new jR,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ob(this),this._firestoreClient.terminate()}}function ZD(t=ov()){return nf(t,"firestore").getImmediate()}function sb(t){return t._firestoreClient||ob(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ob(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new wk(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new PR(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bi(Qe.fromBase64String(e))}catch(n){throw new F(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bi(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=/^__.*__$/;class qR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new no(e,this.data,this.fieldMask,n,this.fieldTransforms):new wc(e,this.data,n,this.fieldTransforms)}}function cb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class uh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.O=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}Su(e){return new uh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.O,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Du(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Cu:!1});return i.Nu(e),i}xu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Cu:!1});return i.vu(),i}ku(e){return this.Su({path:void 0,Cu:!0})}Ou(e){return Aa(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.$u)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Nu(this.path.get(e))}Nu(e){if(e.length===0)throw this.Ou("Document fields must not be empty");if(cb(this.Vu)&&HR.test(e))throw this.Ou('Document fields cannot begin and end with "__"')}}class zR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.O=r||Ec(e)}Fu(e,n,r,i=!1){return new uh({Vu:e,methodName:n,$u:r,path:ht.emptyPath(),Cu:!1,Mu:i},this.databaseId,this.O,this.ignoreUndefinedProperties)}}function lb(t){const e=t._freezeSettings(),n=Ec(t._databaseId);return new zR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function KR(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);hb("Data must be an object, but it was:",o,r);const a=ub(r,o);let c,l;if(s.merge)c=new eu(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const f of s.mergeFields){const h=GR(e,f,n);if(!o.contains(h))throw new F(I.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);XR(u,h)||u.push(h)}c=new eu(u),l=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,l=o.fieldTransforms;return new qR(new Pt(a),c,l)}function WR(t,e,n,r=!1){return fh(n,t.Fu(r?4:3,e))}function fh(t,e){if(fb(t=rt(t)))return hb("Unsupported field value:",e,t),ub(t,e);if(t instanceof ab)return function(n,r){if(!cb(r.Vu))throw r.Ou(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Ou(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Cu&&e.Vu!==4)throw e.Ou("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=fh(o,r.ku(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=rt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Lk(r.O,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Et.fromDate(n);return{timestampValue:Ca(r.O,i)}}if(n instanceof Et){const i=new Et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ca(r.O,i)}}if(n instanceof lh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof bi)return{bytesValue:L0(r.O,n._byteString)};if(n instanceof Ot){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.Ou(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Gf(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Ou(`Unsupported field value: ${Cc(n)}`)}(t,e)}function ub(t,e){const n={};return d0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pi(t,(r,i)=>{const s=fh(i,e.Du(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function fb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Et||t instanceof lh||t instanceof bi||t instanceof Ot||t instanceof ab)}function hb(t,e,n){if(!fb(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Cc(n);throw r==="an object"?e.Ou(t+" a custom object"):e.Ou(t+" "+r)}}function GR(t,e,n){if((e=rt(e))instanceof ch)return e._internalPath;if(typeof e=="string")return db(t,e);throw Aa("Field path arguments must be of type string or ",t,!1,void 0,n)}const YR=new RegExp("[~\\*/\\[\\]]");function db(t,e,n){if(e.search(YR)>=0)throw Aa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ch(...e.split("."))._internalPath}catch{throw Aa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Aa(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new F(I.INVALID_ARGUMENT,a+t+c)}function XR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class JR extends pb{data(){return super.data()}}function hh(t,e){return typeof e=="string"?db(t,e):e instanceof ch?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class QR extends pb{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Bo extends QR{data(e={}){return super.data(e)}}class ZR{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new To(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Bo(this._firestore,this._userDataWriter,r.key,r,new To(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Bo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new To(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Bo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new To(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:eN(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function eN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tN(t){if(Ea(t)&&t.explicitOrderBy.length===0)throw new F(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class nN{}function e2(t,...e){for(const n of e)t=n._apply(t);return t}class rN extends nN{constructor(e,n,r){super(),this.Uu=e,this.qu=n,this.Ku=r,this.type="where"}_apply(e){const n=lb(e.firestore),r=function(i,s,o,a,c,l,u){let f;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new F(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){tm(u,l);const p=[];for(const g of u)p.push(em(a,i,g));f={arrayValue:{values:p}}}else f=em(a,i,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||tm(u,l),f=WR(o,s,u,l==="in"||l==="not-in");const h=ct.create(c,l,f);return function(p,g){if(g.S()){const w=w0(p);if(w!==null&&!w.isEqual(g.field))throw new F(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${w.toString()}' and '${g.field.toString()}'`);const v=b0(p);v!==null&&iN(p,g.field,v)}const E=function(w,v){for(const b of w.filters)if(v.indexOf(b.op)>=0)return b.op;return null}(p,function(w){switch(w){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(g.op));if(E!==null)throw E===g.op?new F(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${g.op.toString()}' filter.`):new F(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${g.op.toString()}' filters with '${E.toString()}' filters.`)}(i,h),h}(e._query,"where",n,e.firestore._databaseId,this.Uu,this.qu,this.Ku);return new lo(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new to(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function t2(t,e,n){const r=e,i=hh("where",t);return new rN(i,r,n)}function em(t,e,n){if(typeof(n=rt(n))=="string"){if(n==="")throw new F(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_0(e)&&n.indexOf("/")!==-1)throw new F(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!W.isDocumentKey(r))throw new F(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ap(t,new W(r))}if(n instanceof Ot)return Ap(t,n._key);throw new F(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Cc(n)}.`)}function tm(t,e){if(!Array.isArray(t)||t.length===0)throw new F(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new F(I.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function iN(t,e,n){if(!n.isEqual(e))throw new F(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{convertValue(e,n="none"){switch(Tr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(pi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Z()}}convertObject(e,n){const r={};return Pi(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new lh(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=m0(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ks(e));default:return null}}convertTimestamp(e){const n=Hn(e);return new Et(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);_e($0(r));const i=new mi(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||jn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class aN extends sN{constructor(e){super(),this.firestore=e}convertBytes(e){return new bi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ot(this.firestore,null,n)}}function n2(t){t=hu(t,lo);const e=hu(t.firestore,ah),n=sb(e),r=new aN(e);return tN(t._query),$R(n,t._query).then(i=>new ZR(e,r,t,i))}function r2(t,e){const n=hu(t.firestore,ah),r=BR(t),i=oN(t.converter,e);return cN(n,[KR(lb(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ri.exists(!1))]).then(()=>r)}function cN(t,e){return function(n,r){const i=new Un;return n.asyncQueue.enqueueAndForget(async()=>_R(await UR(n),r,i)),i.promise}(sb(t),e)}(function(t,e=!0){(function(n){xi=n})(Vs),ci(new gr("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new ah(i,new hk(n.getProvider("auth-internal")),new gk(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),Mn(Ep,"3.4.5",t),Mn(Ep,"3.4.5","esm2017")})();/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var lN="store";function Mi(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function uN(t){return t!==null&&typeof t=="object"}function fN(t){return t&&typeof t.then=="function"}function hN(t,e){return function(){return t(e)}}function mb(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function gb(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Sc(t,n,[],t._modules.root,!0),dh(t,n,e)}function dh(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,s={};Mi(i,function(o,a){s[a]=hN(o,t),Object.defineProperty(t.getters,a,{get:function(){return s[a]()},enumerable:!0})}),t._state=Ii({data:e}),t.strict&&vN(t),r&&n&&t._withCommit(function(){r.data=null})}function Sc(t,e,n,r,i){var s=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!s&&!i){var a=ph(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var l=r.context=dN(t,o,n);r.forEachMutation(function(u,f){var h=o+f;pN(t,h,u,l)}),r.forEachAction(function(u,f){var h=u.root?f:o+f,p=u.handler||u;mN(t,h,p,l)}),r.forEachGetter(function(u,f){var h=o+f;gN(t,h,u,l)}),r.forEachChild(function(u,f){Sc(t,e,n.concat(f),u,i)})}function dN(t,e,n){var r=e==="",i={dispatch:r?t.dispatch:function(s,o,a){var c=ka(s,o,a),l=c.payload,u=c.options,f=c.type;return(!u||!u.root)&&(f=e+f),t.dispatch(f,l)},commit:r?t.commit:function(s,o,a){var c=ka(s,o,a),l=c.payload,u=c.options,f=c.type;(!u||!u.root)&&(f=e+f),t.commit(f,l,u)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return vb(t,e)}},state:{get:function(){return ph(t.state,n)}}}),i}function vb(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,r)===e){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function pN(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(o){n.call(t,r.state,o)})}function mN(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return fN(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function gN(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(s){return n(r.state,r.getters,s.state,s.getters)})}function vN(t){fr(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function ph(t,e){return e.reduce(function(n,r){return n[r]},t)}function ka(t,e,n){return uN(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var yN="vuex bindings",nm="vuex:mutations",ul="vuex:actions",$r="vuex",bN=0;function wN(t,e){rC({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[yN]},function(n){n.addTimelineLayer({id:nm,label:"Vuex Mutations",color:rm}),n.addTimelineLayer({id:ul,label:"Vuex Actions",color:rm}),n.addInspector({id:$r,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===$r)if(r.filter){var i=[];_b(i,e._modules.root,r.filter,""),r.rootNodes=i}else r.rootNodes=[wb(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===$r){var i=r.nodeId;vb(e,i),r.state=TN(CN(e._modules,i),i==="root"?e.getters:e._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===$r){var i=r.nodeId,s=r.path;i!=="root"&&(s=i.split("/").filter(Boolean).concat(s)),e._withCommit(function(){r.set(e._state.data,s,r.state.value)})}}),e.subscribe(function(r,i){var s={};r.payload&&(s.payload=r.payload),s.state=i,n.notifyComponentUpdate(),n.sendInspectorTree($r),n.sendInspectorState($r),n.addTimelineEvent({layerId:nm,event:{time:Date.now(),title:r.type,data:s}})}),e.subscribeAction({before:function(r,i){var s={};r.payload&&(s.payload=r.payload),r._id=bN++,r._time=Date.now(),s.state=i,n.addTimelineEvent({layerId:ul,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:s}})},after:function(r,i){var s={},o=Date.now()-r._time;s.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(s.payload=r.payload),s.state=i,n.addTimelineEvent({layerId:ul,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:s}})}})})}var rm=8702998,_N=6710886,EN=16777215,yb={label:"namespaced",textColor:EN,backgroundColor:_N};function bb(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function wb(t,e){return{id:e||"root",label:bb(e),tags:t.namespaced?[yb]:[],children:Object.keys(t._children).map(function(n){return wb(t._children[n],e+n+"/")})}}function _b(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[yb]:[]}),Object.keys(e._children).forEach(function(i){_b(t,e._children[i],n,r+i+"/")})}function TN(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),i={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var s=IN(e);i.getters=Object.keys(s).map(function(o){return{key:o.endsWith("/")?bb(o):o,editable:!1,value:du(function(){return s[o]})}})}return i}function IN(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var i=e,s=r.pop();r.forEach(function(o){i[o]||(i[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),i=i[o]._custom.value}),i[s]=du(function(){return t[n]})}else e[n]=du(function(){return t[n]})}),e}function CN(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,i,s){var o=r[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+e+'".');return s===n.length-1?o:o._children},e==="root"?t:t.root._children)}function du(t){try{return t()}catch(e){return e}}var Vt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},Eb={namespaced:{configurable:!0}};Eb.namespaced.get=function(){return!!this._rawModule.namespaced};Vt.prototype.addChild=function(e,n){this._children[e]=n};Vt.prototype.removeChild=function(e){delete this._children[e]};Vt.prototype.getChild=function(e){return this._children[e]};Vt.prototype.hasChild=function(e){return e in this._children};Vt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Vt.prototype.forEachChild=function(e){Mi(this._children,e)};Vt.prototype.forEachGetter=function(e){this._rawModule.getters&&Mi(this._rawModule.getters,e)};Vt.prototype.forEachAction=function(e){this._rawModule.actions&&Mi(this._rawModule.actions,e)};Vt.prototype.forEachMutation=function(e){this._rawModule.mutations&&Mi(this._rawModule.mutations,e)};Object.defineProperties(Vt.prototype,Eb);var Dr=function(e){this.register([],e,!1)};Dr.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};Dr.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,i){return n=n.getChild(i),r+(n.namespaced?i+"/":"")},"")};Dr.prototype.update=function(e){Tb([],this.root,e)};Dr.prototype.register=function(e,n,r){var i=this;r===void 0&&(r=!0);var s=new Vt(n,r);if(e.length===0)this.root=s;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],s)}n.modules&&Mi(n.modules,function(a,c){i.register(e.concat(c),a,r)})};Dr.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],i=n.getChild(r);!i||!i.runtime||n.removeChild(r)};Dr.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function Tb(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;Tb(t.concat(r),e.getChild(r),n.modules[r])}}function i2(t){return new dt(t)}var dt=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var i=e.strict;i===void 0&&(i=!1);var s=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Dr(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(h,p){return c.call(o,h,p)},this.commit=function(h,p,g){return l.call(o,h,p,g)},this.strict=i;var u=this._modules.root.state;Sc(this,u,[],this._modules.root),dh(this,u),r.forEach(function(f){return f(n)})},mh={state:{configurable:!0}};dt.prototype.install=function(e,n){e.provide(n||lN,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&wN(e,this)};mh.state.get=function(){return this._state.data};mh.state.set=function(t){};dt.prototype.commit=function(e,n,r){var i=this,s=ka(e,n,r),o=s.type,a=s.payload,c={type:o,payload:a},l=this._mutations[o];!l||(this._withCommit(function(){l.forEach(function(f){f(a)})}),this._subscribers.slice().forEach(function(u){return u(c,i.state)}))};dt.prototype.dispatch=function(e,n){var r=this,i=ka(e,n),s=i.type,o=i.payload,a={type:s,payload:o},c=this._actions[s];if(!!c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,f){l.then(function(h){try{r._actionSubscribers.filter(function(p){return p.after}).forEach(function(p){return p.after(a,r.state)})}catch{}u(h)},function(h){try{r._actionSubscribers.filter(function(p){return p.error}).forEach(function(p){return p.error(a,r.state,h)})}catch{}f(h)})})}};dt.prototype.subscribe=function(e,n){return mb(e,this._subscribers,n)};dt.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return mb(r,this._actionSubscribers,n)};dt.prototype.watch=function(e,n,r){var i=this;return fr(function(){return e(i.state,i.getters)},n,Object.assign({},r))};dt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};dt.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Sc(this,this.state,e,this._modules.get(e),r.preserveState),dh(this,this.state)};dt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=ph(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),gb(this)};dt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};dt.prototype.hotUpdate=function(e){this._modules.update(e),gb(this,!0)};dt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(dt.prototype,mh);var gh={exports:{}},Ib=function(e,n){return function(){for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];return e.apply(n,i)}},SN=Ib,Yn=Object.prototype.toString;function vh(t){return Array.isArray(t)}function pu(t){return typeof t=="undefined"}function AN(t){return t!==null&&!pu(t)&&t.constructor!==null&&!pu(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function Cb(t){return Yn.call(t)==="[object ArrayBuffer]"}function kN(t){return Yn.call(t)==="[object FormData]"}function ON(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Cb(t.buffer),e}function RN(t){return typeof t=="string"}function NN(t){return typeof t=="number"}function Sb(t){return t!==null&&typeof t=="object"}function jo(t){if(Yn.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function xN(t){return Yn.call(t)==="[object Date]"}function PN(t){return Yn.call(t)==="[object File]"}function DN(t){return Yn.call(t)==="[object Blob]"}function Ab(t){return Yn.call(t)==="[object Function]"}function LN(t){return Sb(t)&&Ab(t.pipe)}function MN(t){return Yn.call(t)==="[object URLSearchParams]"}function UN(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function FN(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function yh(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),vh(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function mu(){var t={};function e(i,s){jo(t[s])&&jo(i)?t[s]=mu(t[s],i):jo(i)?t[s]=mu({},i):vh(i)?t[s]=i.slice():t[s]=i}for(var n=0,r=arguments.length;n<r;n++)yh(arguments[n],e);return t}function $N(t,e,n){return yh(e,function(i,s){n&&typeof i=="function"?t[s]=SN(i,n):t[s]=i}),t}function VN(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var pt={isArray:vh,isArrayBuffer:Cb,isBuffer:AN,isFormData:kN,isArrayBufferView:ON,isString:RN,isNumber:NN,isObject:Sb,isPlainObject:jo,isUndefined:pu,isDate:xN,isFile:PN,isBlob:DN,isFunction:Ab,isStream:LN,isURLSearchParams:MN,isStandardBrowserEnv:FN,forEach:yh,merge:mu,extend:$N,trim:UN,stripBOM:VN},Vr=pt;function im(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var kb=function(e,n,r){if(!n)return e;var i;if(r)i=r(n);else if(Vr.isURLSearchParams(n))i=n.toString();else{var s=[];Vr.forEach(n,function(c,l){c===null||typeof c=="undefined"||(Vr.isArray(c)?l=l+"[]":c=[c],Vr.forEach(c,function(f){Vr.isDate(f)?f=f.toISOString():Vr.isObject(f)&&(f=JSON.stringify(f)),s.push(im(l)+"="+im(f))}))}),i=s.join("&")}if(i){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e},BN=pt;function Ac(){this.handlers=[]}Ac.prototype.use=function(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1};Ac.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};Ac.prototype.forEach=function(e){BN.forEach(this.handlers,function(r){r!==null&&e(r)})};var jN=Ac,HN=pt,qN=function(e,n){HN.forEach(e,function(i,s){s!==n&&s.toUpperCase()===n.toUpperCase()&&(e[n]=i,delete e[s])})},Ob=function(e,n,r,i,s){return e.config=n,r&&(e.code=r),e.request=i,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},Rb={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},zN=Ob,Nb=function(e,n,r,i,s){var o=new Error(e);return zN(o,n,r,i,s)},KN=Nb,WN=function(e,n,r){var i=r.config.validateStatus;!r.status||!i||i(r.status)?e(r):n(KN("Request failed with status code "+r.status,r.config,null,r.request,r))},Io=pt,GN=Io.isStandardBrowserEnv()?function(){return{write:function(n,r,i,s,o,a){var c=[];c.push(n+"="+encodeURIComponent(r)),Io.isNumber(i)&&c.push("expires="+new Date(i).toGMTString()),Io.isString(s)&&c.push("path="+s),Io.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){var r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),YN=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},XN=function(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e},JN=YN,QN=XN,ZN=function(e,n){return e&&!JN(n)?QN(e,n):n},fl=pt,ex=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],tx=function(e){var n={},r,i,s;return e&&fl.forEach(e.split(`
`),function(a){if(s=a.indexOf(":"),r=fl.trim(a.substr(0,s)).toLowerCase(),i=fl.trim(a.substr(s+1)),r){if(n[r]&&ex.indexOf(r)>=0)return;r==="set-cookie"?n[r]=(n[r]?n[r]:[]).concat([i]):n[r]=n[r]?n[r]+", "+i:i}}),n},sm=pt,nx=sm.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a"),r;function i(s){var o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){var a=sm.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function bh(t){this.message=t}bh.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};bh.prototype.__CANCEL__=!0;var kc=bh,Co=pt,rx=WN,ix=GN,sx=kb,ox=ZN,ax=tx,cx=nx,hl=Nb,lx=Rb,ux=kc,om=function(e){return new Promise(function(r,i){var s=e.data,o=e.headers,a=e.responseType,c;function l(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}Co.isFormData(s)&&delete o["Content-Type"];var u=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(f+":"+h)}var p=ox(e.baseURL,e.url);u.open(e.method.toUpperCase(),sx(p,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function g(){if(!!u){var w="getAllResponseHeaders"in u?ax(u.getAllResponseHeaders()):null,v=!a||a==="text"||a==="json"?u.responseText:u.response,b={data:v,status:u.status,statusText:u.statusText,headers:w,config:e,request:u};rx(function(D){r(D),l()},function(D){i(D),l()},b),u=null}}if("onloadend"in u?u.onloadend=g:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(g)},u.onabort=function(){!u||(i(hl("Request aborted",e,"ECONNABORTED",u)),u=null)},u.onerror=function(){i(hl("Network Error",e,null,u)),u=null},u.ontimeout=function(){var v=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",b=e.transitional||lx;e.timeoutErrorMessage&&(v=e.timeoutErrorMessage),i(hl(v,e,b.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",u)),u=null},Co.isStandardBrowserEnv()){var E=(e.withCredentials||cx(p))&&e.xsrfCookieName?ix.read(e.xsrfCookieName):void 0;E&&(o[e.xsrfHeaderName]=E)}"setRequestHeader"in u&&Co.forEach(o,function(v,b){typeof s=="undefined"&&b.toLowerCase()==="content-type"?delete o[b]:u.setRequestHeader(b,v)}),Co.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(c=function(w){!u||(i(!w||w&&w.type?new ux("canceled"):w),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c))),s||(s=null),u.send(s)})},ze=pt,am=qN,fx=Ob,hx=Rb,dx={"Content-Type":"application/x-www-form-urlencoded"};function cm(t,e){!ze.isUndefined(t)&&ze.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function px(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=om),t}function mx(t,e,n){if(ze.isString(t))try{return(e||JSON.parse)(t),ze.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}var Oc={transitional:hx,adapter:px(),transformRequest:[function(e,n){return am(n,"Accept"),am(n,"Content-Type"),ze.isFormData(e)||ze.isArrayBuffer(e)||ze.isBuffer(e)||ze.isStream(e)||ze.isFile(e)||ze.isBlob(e)?e:ze.isArrayBufferView(e)?e.buffer:ze.isURLSearchParams(e)?(cm(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):ze.isObject(e)||n&&n["Content-Type"]==="application/json"?(cm(n,"application/json"),mx(e)):e}],transformResponse:[function(e){var n=this.transitional||Oc.transitional,r=n&&n.silentJSONParsing,i=n&&n.forcedJSONParsing,s=!r&&this.responseType==="json";if(s||i&&ze.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(s)throw o.name==="SyntaxError"?fx(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};ze.forEach(["delete","get","head"],function(e){Oc.headers[e]={}});ze.forEach(["post","put","patch"],function(e){Oc.headers[e]=ze.merge(dx)});var wh=Oc,gx=pt,vx=wh,yx=function(e,n,r){var i=this||vx;return gx.forEach(r,function(o){e=o.call(i,e,n)}),e},xb=function(e){return!!(e&&e.__CANCEL__)},lm=pt,dl=yx,bx=xb,wx=wh,_x=kc;function pl(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new _x("canceled")}var Ex=function(e){pl(e),e.headers=e.headers||{},e.data=dl.call(e,e.data,e.headers,e.transformRequest),e.headers=lm.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),lm.forEach(["delete","get","head","post","put","patch","common"],function(i){delete e.headers[i]});var n=e.adapter||wx.adapter;return n(e).then(function(i){return pl(e),i.data=dl.call(e,i.data,i.headers,e.transformResponse),i},function(i){return bx(i)||(pl(e),i&&i.response&&(i.response.data=dl.call(e,i.response.data,i.response.headers,e.transformResponse))),Promise.reject(i)})},vt=pt,Pb=function(e,n){n=n||{};var r={};function i(u,f){return vt.isPlainObject(u)&&vt.isPlainObject(f)?vt.merge(u,f):vt.isPlainObject(f)?vt.merge({},f):vt.isArray(f)?f.slice():f}function s(u){if(vt.isUndefined(n[u])){if(!vt.isUndefined(e[u]))return i(void 0,e[u])}else return i(e[u],n[u])}function o(u){if(!vt.isUndefined(n[u]))return i(void 0,n[u])}function a(u){if(vt.isUndefined(n[u])){if(!vt.isUndefined(e[u]))return i(void 0,e[u])}else return i(void 0,n[u])}function c(u){if(u in n)return i(e[u],n[u]);if(u in e)return i(void 0,e[u])}var l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return vt.forEach(Object.keys(e).concat(Object.keys(n)),function(f){var h=l[f]||s,p=h(f);vt.isUndefined(p)&&h!==c||(r[f]=p)}),r},Db={version:"0.26.1"},Tx=Db.version,_h={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){_h[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});var um={};_h.transitional=function(e,n,r){function i(s,o){return"[Axios v"+Tx+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return function(s,o,a){if(e===!1)throw new Error(i(o," has been removed"+(n?" in "+n:"")));return n&&!um[o]&&(um[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function Ix(t,e,n){if(typeof t!="object")throw new TypeError("options must be an object");for(var r=Object.keys(t),i=r.length;i-- >0;){var s=r[i],o=e[s];if(o){var a=t[s],c=a===void 0||o(a,s,t);if(c!==!0)throw new TypeError("option "+s+" must be "+c);continue}if(n!==!0)throw Error("Unknown option "+s)}}var Cx={assertOptions:Ix,validators:_h},Lb=pt,Sx=kb,fm=jN,hm=Ex,Rc=Pb,Mb=Cx,Br=Mb.validators;function uo(t){this.defaults=t,this.interceptors={request:new fm,response:new fm}}uo.prototype.request=function(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Rc(this.defaults,n),n.method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var r=n.transitional;r!==void 0&&Mb.assertOptions(r,{silentJSONParsing:Br.transitional(Br.boolean),forcedJSONParsing:Br.transitional(Br.boolean),clarifyTimeoutError:Br.transitional(Br.boolean)},!1);var i=[],s=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(n)===!1||(s=s&&p.synchronous,i.unshift(p.fulfilled,p.rejected))});var o=[];this.interceptors.response.forEach(function(p){o.push(p.fulfilled,p.rejected)});var a;if(!s){var c=[hm,void 0];for(Array.prototype.unshift.apply(c,i),c=c.concat(o),a=Promise.resolve(n);c.length;)a=a.then(c.shift(),c.shift());return a}for(var l=n;i.length;){var u=i.shift(),f=i.shift();try{l=u(l)}catch(h){f(h);break}}try{a=hm(l)}catch(h){return Promise.reject(h)}for(;o.length;)a=a.then(o.shift(),o.shift());return a};uo.prototype.getUri=function(e){return e=Rc(this.defaults,e),Sx(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};Lb.forEach(["delete","get","head","options"],function(e){uo.prototype[e]=function(n,r){return this.request(Rc(r||{},{method:e,url:n,data:(r||{}).data}))}});Lb.forEach(["post","put","patch"],function(e){uo.prototype[e]=function(n,r,i){return this.request(Rc(i||{},{method:e,url:n,data:r}))}});var Ax=uo,kx=kc;function wi(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(i){e=i});var n=this;this.promise.then(function(r){if(!!n._listeners){var i,s=n._listeners.length;for(i=0;i<s;i++)n._listeners[i](r);n._listeners=null}}),this.promise.then=function(r){var i,s=new Promise(function(o){n.subscribe(o),i=o}).then(r);return s.cancel=function(){n.unsubscribe(i)},s},t(function(i){n.reason||(n.reason=new kx(i),e(n.reason))})}wi.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};wi.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};wi.prototype.unsubscribe=function(e){if(!!this._listeners){var n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}};wi.source=function(){var e,n=new wi(function(i){e=i});return{token:n,cancel:e}};var Ox=wi,Rx=function(e){return function(r){return e.apply(null,r)}},Nx=pt,xx=function(e){return Nx.isObject(e)&&e.isAxiosError===!0},dm=pt,Px=Ib,Ho=Ax,Dx=Pb,Lx=wh;function Ub(t){var e=new Ho(t),n=Px(Ho.prototype.request,e);return dm.extend(n,Ho.prototype,e),dm.extend(n,e),n.create=function(i){return Ub(Dx(t,i))},n}var en=Ub(Lx);en.Axios=Ho;en.Cancel=kc;en.CancelToken=Ox;en.isCancel=xb;en.VERSION=Db.version;en.all=function(e){return Promise.all(e)};en.spread=Rx;en.isAxiosError=xx;gh.exports=en;gh.exports.default=en;var s2=gh.exports;function Eh(t){return(Eh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function ml(t,e){if(!t.vueAxiosInstalled){var n=Fb(e)?Fx(e):e;if($x(n)){var r=Vx(t);if(r){var i=r<3?Mx:Ux;Object.keys(n).forEach(function(s){i(t,s,n[s])}),t.vueAxiosInstalled=!0}else console.error("[vue-axios] unknown Vue version")}else console.error("[vue-axios] configuration is invalid, expected options are either <axios_instance> or { <registration_key>: <axios_instance> }")}}function Mx(t,e,n){Object.defineProperty(t.prototype,e,{get:function(){return n}}),t[e]=n}function Ux(t,e,n){t.config.globalProperties[e]=n,t[e]=n}function Fb(t){return t&&typeof t.get=="function"&&typeof t.post=="function"}function Fx(t){return{axios:t,$http:t}}function $x(t){return Eh(t)==="object"&&Object.keys(t).every(function(e){return Fb(t[e])})}function Vx(t){return t&&t.version&&Number(t.version.split(".")[0])}(typeof exports=="undefined"?"undefined":Eh(exports))=="object"?module.exports=ml:typeof define=="function"&&define.amd?define([],function(){return ml}):window.Vue&&window.axios&&window.Vue.use&&Vue.use(ml,window.axios);/*!
 * Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function pm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?pm(Object(n),!0).forEach(function(r){Hx(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):pm(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Oa(t){return Oa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Oa(t)}function Bx(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function mm(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function jx(t,e,n){return e&&mm(t.prototype,e),n&&mm(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Hx(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Th(t,e){return zx(t)||Wx(t,e)||$b(t,e)||Yx()}function Nc(t){return qx(t)||Kx(t)||$b(t)||Gx()}function qx(t){if(Array.isArray(t))return gu(t)}function zx(t){if(Array.isArray(t))return t}function Kx(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Wx(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(c){s=!0,a=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function $b(t,e){if(!!t){if(typeof t=="string")return gu(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return gu(t,e)}}function gu(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Gx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gm=function(){},Ih={},Vb={},Bb=null,jb={mark:gm,measure:gm};try{typeof window!="undefined"&&(Ih=window),typeof document!="undefined"&&(Vb=document),typeof MutationObserver!="undefined"&&(Bb=MutationObserver),typeof performance!="undefined"&&(jb=performance)}catch{}var Xx=Ih.navigator||{},vm=Xx.userAgent,ym=vm===void 0?"":vm,zn=Ih,Ce=Vb,bm=Bb,So=jb;zn.document;var wn=!!Ce.documentElement&&!!Ce.head&&typeof Ce.addEventListener=="function"&&typeof Ce.createElement=="function",Hb=~ym.indexOf("MSIE")||~ym.indexOf("Trident/"),gn="___FONT_AWESOME___",vu=16,qb="fa",zb="svg-inline--fa",Sr="data-fa-i2svg",yu="data-fa-pseudo-element",Jx="data-fa-pseudo-element-pending",Ch="data-prefix",Sh="data-icon",wm="fontawesome-i2svg",Qx="async",Zx=["HTML","HEAD","STYLE","SCRIPT"],Kb=function(){try{return!0}catch{return!1}}(),Ah={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Ra={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Wb={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},eP={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},tP=/fa[srltdbk\-\ ]/,Gb="fa-layers-text",nP=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,rP={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},Yb=[1,2,3,4,5,6,7,8,9,10],iP=Yb.concat([11,12,13,14,15,16,17,18,19,20]),sP=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],lr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},oP=[].concat(Nc(Object.keys(Ra)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",lr.GROUP,lr.SWAP_OPACITY,lr.PRIMARY,lr.SECONDARY]).concat(Yb.map(function(t){return"".concat(t,"x")})).concat(iP.map(function(t){return"w-".concat(t)})),Xb=zn.FontAwesomeConfig||{};function aP(t){var e=Ce.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function cP(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ce&&typeof Ce.querySelector=="function"){var lP=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];lP.forEach(function(t){var e=Th(t,2),n=e[0],r=e[1],i=cP(aP(n));i!=null&&(Xb[r]=i)})}var uP={familyPrefix:qb,styleDefault:"solid",replacementClass:zb,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},os=L(L({},uP),Xb);os.autoReplaceSvg||(os.observeMutations=!1);var z={};Object.keys(os).forEach(function(t){Object.defineProperty(z,t,{enumerable:!0,set:function(n){os[t]=n,qo.forEach(function(r){return r(z)})},get:function(){return os[t]}})});zn.FontAwesomeConfig=z;var qo=[];function fP(t){return qo.push(t),function(){qo.splice(qo.indexOf(t),1)}}var Sn=vu,Wt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function hP(t){if(!(!t||!wn)){var e=Ce.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ce.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Ce.head.insertBefore(e,r),t}}var dP="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ps(){for(var t=12,e="";t-- >0;)e+=dP[Math.random()*62|0];return e}function Ui(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function kh(t){return t.classList?Ui(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Jb(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function pP(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Jb(t[n]),'" ')},"").trim()}function xc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Oh(t){return t.size!==Wt.size||t.x!==Wt.x||t.y!==Wt.y||t.rotate!==Wt.rotate||t.flipX||t.flipY}function mP(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:l}}function gP(t){var e=t.transform,n=t.width,r=n===void 0?vu:n,i=t.height,s=i===void 0?vu:i,o=t.startCentered,a=o===void 0?!1:o,c="";return a&&Hb?c+="translate(".concat(e.x/Sn-r/2,"em, ").concat(e.y/Sn-s/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/Sn,"em), calc(-50% + ").concat(e.y/Sn,"em)) "):c+="translate(".concat(e.x/Sn,"em, ").concat(e.y/Sn,"em) "),c+="scale(".concat(e.size/Sn*(e.flipX?-1:1),", ").concat(e.size/Sn*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var vP=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Qb(){var t=qb,e=zb,n=z.familyPrefix,r=z.replacementClass,i=vP;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var _m=!1;function gl(){z.autoAddCss&&!_m&&(hP(Qb()),_m=!0)}var yP={mixout:function(){return{dom:{css:Qb,insertCss:gl}}},hooks:function(){return{beforeDOMElementCreation:function(){gl()},beforeI2svg:function(){gl()}}}},vn=zn||{};vn[gn]||(vn[gn]={});vn[gn].styles||(vn[gn].styles={});vn[gn].hooks||(vn[gn].hooks={});vn[gn].shims||(vn[gn].shims=[]);var Mt=vn[gn],Zb=[],bP=function t(){Ce.removeEventListener("DOMContentLoaded",t),Na=1,Zb.map(function(e){return e()})},Na=!1;wn&&(Na=(Ce.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ce.readyState),Na||Ce.addEventListener("DOMContentLoaded",bP));function wP(t){!wn||(Na?setTimeout(t,0):Zb.push(t))}function fo(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?Jb(t):"<".concat(e," ").concat(pP(r),">").concat(s.map(fo).join(""),"</").concat(e,">")}function Em(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var _P=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},vl=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?_P(n,i):n,c,l,u;for(r===void 0?(c=1,u=e[s[0]]):(c=0,u=r);c<o;c++)l=s[c],u=a(u,e[l],l,e);return u};function EP(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function bu(t){var e=EP(t);return e.length===1?e[0].toString(16):null}function TP(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Tm(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function wu(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Tm(e);typeof Mt.hooks.addPack=="function"&&!i?Mt.hooks.addPack(t,Tm(e)):Mt.styles[t]=L(L({},Mt.styles[t]||{}),s),t==="fas"&&wu("fa",e)}var as=Mt.styles,IP=Mt.shims,CP=Object.values(Wb),Rh=null,ew={},tw={},nw={},rw={},iw={},SP=Object.keys(Ah);function AP(t){return~oP.indexOf(t)}function kP(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!AP(i)?i:null}var sw=function(){var e=function(s){return vl(as,function(o,a,c){return o[c]=vl(a,s,{}),o},{})};ew=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){i[c.toString(16)]=o})}return i}),tw=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){i[c]=o})}return i}),iw=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(c){i[c]=o}),i});var n="far"in as||z.autoFetchSvg,r=vl(IP,function(i,s){var o=s[0],a=s[1],c=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:c}),i},{names:{},unicodes:{}});nw=r.names,rw=r.unicodes,Rh=Pc(z.styleDefault)};fP(function(t){Rh=Pc(t.styleDefault)});sw();function Nh(t,e){return(ew[t]||{})[e]}function OP(t,e){return(tw[t]||{})[e]}function Gr(t,e){return(iw[t]||{})[e]}function ow(t){return nw[t]||{prefix:null,iconName:null}}function RP(t){var e=rw[t],n=Nh("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Kn(){return Rh}var xh=function(){return{prefix:null,iconName:null,rest:[]}};function Pc(t){var e=Ah[t],n=Ra[t]||Ra[e],r=t in Mt.styles?t:null;return n||r||null}function Dc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,i=null,s=t.reduce(function(o,a){var c=kP(z.familyPrefix,a);if(as[a]?(a=CP.includes(a)?eP[a]:a,i=a,o.prefix=a):SP.indexOf(a)>-1?(i=a,o.prefix=Pc(a)):c?o.iconName=c:a!==z.replacementClass&&o.rest.push(a),!r&&o.prefix&&o.iconName){var l=i==="fa"?ow(o.iconName):{},u=Gr(o.prefix,o.iconName);l.prefix&&(i=null),o.iconName=l.iconName||u||o.iconName,o.prefix=l.prefix||o.prefix,o.prefix==="far"&&!as.far&&as.fas&&!z.autoFetchSvg&&(o.prefix="fas")}return o},xh());return(s.prefix==="fa"||i==="fa")&&(s.prefix=Kn()||"fas"),s}var NP=function(){function t(){Bx(this,t),this.definitions={}}return jx(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=L(L({},n.definitions[a]||{}),o[a]),wu(a,o[a]);var c=Wb[a];c&&wu(c,o[a]),sw()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,c=o.iconName,l=o.icon,u=l[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[a][f]=l)}),n[a][c]=l}),n}}]),t}(),Im=[],Yr={},si={},xP=Object.keys(si);function PP(t,e){var n=e.mixoutsTo;return Im=t,Yr={},Object.keys(si).forEach(function(r){xP.indexOf(r)===-1&&delete si[r]}),Im.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Oa(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Yr[o]||(Yr[o]=[]),Yr[o].push(s[o])})}r.provides&&r.provides(si)}),n}function _u(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Yr[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Ar(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Yr[t]||[];i.forEach(function(s){s.apply(null,n)})}function yn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return si[t]?si[t].apply(null,e):void 0}function Eu(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Kn();if(!!e)return e=Gr(n,e)||e,Em(aw.definitions,n,e)||Em(Mt.styles,n,e)}var aw=new NP,DP=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,Ar("noAuto")},LP={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return wn?(Ar("beforeI2svg",e),yn("pseudoElements2svg",e),yn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,wP(function(){UP({autoReplaceSvgRoot:n}),Ar("watch",e)})}},MP={icon:function(e){if(e===null)return null;if(Oa(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Gr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Pc(e[0]);return{prefix:r,iconName:Gr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(z.familyPrefix,"-"))>-1||e.match(tP))){var i=Dc(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Kn(),iconName:Gr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Kn();return{prefix:s,iconName:Gr(s,e)||e}}}},Ct={noAuto:DP,config:z,dom:LP,parse:MP,library:aw,findIconDefinition:Eu,toHtml:fo},UP=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Ce:n;(Object.keys(Mt.styles).length>0||z.autoFetchSvg)&&wn&&z.autoReplaceSvg&&Ct.dom.i2svg({node:r})};function Lc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return fo(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!wn){var r=Ce.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function FP(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Oh(o)&&n.found&&!r.found){var a=n.width,c=n.height,l={x:a/c/2,y:.5};i.style=xc(L(L({},s),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function $P(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(z.familyPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:L(L({},i),{},{id:o}),children:r}]}]}function Ph(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,c=t.title,l=t.maskId,u=t.titleId,f=t.extra,h=t.watchable,p=h===void 0?!1:h,g=r.found?r:n,E=g.width,w=g.height,v=i==="fak",b=[z.replacementClass,s?"".concat(z.familyPrefix,"-").concat(s):""].filter(function(ie){return f.classes.indexOf(ie)===-1}).filter(function(ie){return ie!==""||!!ie}).concat(f.classes).join(" "),x={children:[],attributes:L(L({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:b,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(w)})},D=v&&!~f.classes.indexOf("fa-fw")?{width:"".concat(E/w*16*.0625,"em")}:{};p&&(x.attributes[Sr]=""),c&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(u||Ps())},children:[c]}),delete x.attributes.title);var G=L(L({},x),{},{prefix:i,iconName:s,main:n,mask:r,maskId:l,transform:o,symbol:a,styles:L(L({},D),f.styles)}),re=r.found&&n.found?yn("generateAbstractMask",G)||{children:[],attributes:{}}:yn("generateAbstractIcon",G)||{children:[],attributes:{}},K=re.children,he=re.attributes;return G.children=K,G.attributes=he,a?$P(G):FP(G)}function Cm(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,c=a===void 0?!1:a,l=L(L(L({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});c&&(l[Sr]="");var u=L({},o.styles);Oh(i)&&(u.transform=gP({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=xc(u);f.length>0&&(l.style=f);var h=[];return h.push({tag:"span",attributes:l,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function VP(t){var e=t.content,n=t.title,r=t.extra,i=L(L(L({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=xc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var yl=Mt.styles;function Tu(t){var e=t[0],n=t[1],r=t.slice(4),i=Th(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(z.familyPrefix,"-").concat(lr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.familyPrefix,"-").concat(lr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(z.familyPrefix,"-").concat(lr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var BP={found:!1,width:512,height:512};function jP(t,e){!Kb&&!z.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Iu(t,e){var n=e;return e==="fa"&&z.styleDefault!==null&&(e=Kn()),new Promise(function(r,i){if(yn("missingIconAbstract"),n==="fa"){var s=ow(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&yl[e]&&yl[e][t]){var o=yl[e][t];return r(Tu(o))}jP(t,e),r(L(L({},BP),{},{icon:z.showMissingIcons&&t?yn("missingIconAbstract")||{}:{}}))})}var Sm=function(){},Cu=z.measurePerformance&&So&&So.mark&&So.measure?So:{mark:Sm,measure:Sm},Wi='FA "6.0.0"',HP=function(e){return Cu.mark("".concat(Wi," ").concat(e," begins")),function(){return cw(e)}},cw=function(e){Cu.mark("".concat(Wi," ").concat(e," ends")),Cu.measure("".concat(Wi," ").concat(e),"".concat(Wi," ").concat(e," begins"),"".concat(Wi," ").concat(e," ends"))},Dh={begin:HP,end:cw},zo=function(){};function Am(t){var e=t.getAttribute?t.getAttribute(Sr):null;return typeof e=="string"}function qP(t){var e=t.getAttribute?t.getAttribute(Ch):null,n=t.getAttribute?t.getAttribute(Sh):null;return e&&n}function zP(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(z.replacementClass)}function KP(){if(z.autoReplaceSvg===!0)return Ko.replace;var t=Ko[z.autoReplaceSvg];return t||Ko.replace}function WP(t){return Ce.createElementNS("http://www.w3.org/2000/svg",t)}function GP(t){return Ce.createElement(t)}function lw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?WP:GP:n;if(typeof t=="string")return Ce.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(lw(o,{ceFn:r}))}),i}function YP(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Ko={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(lw(i),n)}),n.getAttribute(Sr)===null&&z.keepOriginalSource){var r=Ce.createComment(YP(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~kh(n).indexOf(z.replacementClass))return Ko.replace(e);var i=new RegExp("".concat(z.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,c){return c===z.replacementClass||c.match(i)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return fo(a)}).join(`
`);n.setAttribute(Sr,""),n.innerHTML=o}};function km(t){t()}function uw(t,e){var n=typeof e=="function"?e:zo;if(t.length===0)n();else{var r=km;z.mutateApproach===Qx&&(r=zn.requestAnimationFrame||km),r(function(){var i=KP(),s=Dh.begin("mutate");t.map(i),s(),n()})}}var Lh=!1;function fw(){Lh=!0}function Su(){Lh=!1}var xa=null;function Om(t){if(!!bm&&!!z.observeMutations){var e=t.treeCallback,n=e===void 0?zo:e,r=t.nodeCallback,i=r===void 0?zo:r,s=t.pseudoElementsCallback,o=s===void 0?zo:s,a=t.observeMutationsRoot,c=a===void 0?Ce:a;xa=new bm(function(l){if(!Lh){var u=Kn();Ui(l).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Am(f.addedNodes[0])&&(z.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&z.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Am(f.target)&&~sP.indexOf(f.attributeName))if(f.attributeName==="class"&&qP(f.target)){var h=Dc(kh(f.target)),p=h.prefix,g=h.iconName;f.target.setAttribute(Ch,p||u),g&&f.target.setAttribute(Sh,g)}else zP(f.target)&&i(f.target)})}}),!!wn&&xa.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function XP(){!xa||xa.disconnect()}function JP(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function QP(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Dc(kh(t));return i.prefix||(i.prefix=Kn()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||i.prefix&&r.length>0&&(i.iconName=OP(i.prefix,t.innerText)||Nh(i.prefix,bu(t.innerText))),i}function ZP(t){var e=Ui(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return z.autoA11y&&(n?e["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||Ps()):(e["aria-hidden"]="true",e.focusable="false")),e}function eD(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Wt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Rm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=QP(t),r=n.iconName,i=n.prefix,s=n.rest,o=ZP(t),a=_u("parseNodeAttributes",{},t),c=e.styleParser?JP(t):[];return L({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Wt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:o}},a)}var tD=Mt.styles;function hw(t){var e=z.autoReplaceSvg==="nest"?Rm(t,{styleParser:!1}):Rm(t);return~e.extra.classes.indexOf(Gb)?yn("generateLayersText",t,e):yn("generateSvgReplacementMutation",t,e)}function Nm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!wn)return Promise.resolve();var n=Ce.documentElement.classList,r=function(f){return n.add("".concat(wm,"-").concat(f))},i=function(f){return n.remove("".concat(wm,"-").concat(f))},s=z.autoFetchSvg?Object.keys(Ah):Object.keys(tD),o=[".".concat(Gb,":not([").concat(Sr,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(Sr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Ui(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var c=Dh.begin("onTree"),l=a.reduce(function(u,f){try{var h=hw(f);h&&u.push(h)}catch(p){Kb||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,f){Promise.all(l).then(function(h){uw(h,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),c(),u()})}).catch(function(h){c(),f(h)})})}function nD(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;hw(t).then(function(n){n&&uw([n],e)})}function rD(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Eu(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Eu(i||{})),t(r,L(L({},n),{},{mask:i}))}}var iD=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Wt:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,c=a===void 0?null:a,l=n.maskId,u=l===void 0?null:l,f=n.title,h=f===void 0?null:f,p=n.titleId,g=p===void 0?null:p,E=n.classes,w=E===void 0?[]:E,v=n.attributes,b=v===void 0?{}:v,x=n.styles,D=x===void 0?{}:x;if(!!e){var G=e.prefix,re=e.iconName,K=e.icon;return Lc(L({type:"icon"},e),function(){return Ar("beforeDOMElementCreation",{iconDefinition:e,params:n}),z.autoA11y&&(h?b["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(g||Ps()):(b["aria-hidden"]="true",b.focusable="false")),Ph({icons:{main:Tu(K),mask:c?Tu(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:G,iconName:re,transform:L(L({},Wt),i),symbol:o,title:h,maskId:u,titleId:g,extra:{attributes:b,styles:D,classes:w}})})}},sD={mixout:function(){return{icon:rD(iD)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Nm,n.nodeCallback=nD,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Ce:r,s=n.callback,o=s===void 0?function(){}:s;return Nm(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,c=r.transform,l=r.symbol,u=r.mask,f=r.maskId,h=r.extra;return new Promise(function(p,g){Promise.all([Iu(i,a),u.iconName?Iu(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var w=Th(E,2),v=w[0],b=w[1];p([n,Ph({icons:{main:v,mask:b},prefix:a,iconName:i,transform:c,symbol:l,maskId:f,title:s,titleId:o,extra:h,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,c=xc(a);c.length>0&&(i.style=c);var l;return Oh(o)&&(l=yn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(l||s.icon),{children:r,attributes:i}}}},oD={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Lc({type:"layer"},function(){Ar("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(z.familyPrefix,"-layers")].concat(Nc(s)).join(" ")},children:o}]})}}}},aD={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,c=r.attributes,l=c===void 0?{}:c,u=r.styles,f=u===void 0?{}:u;return Lc({type:"counter",content:n},function(){return Ar("beforeDOMElementCreation",{content:n,params:r}),VP({content:n.toString(),title:s,extra:{attributes:l,styles:f,classes:["".concat(z.familyPrefix,"-layers-counter")].concat(Nc(a))}})})}}}},cD={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Wt:i,o=r.title,a=o===void 0?null:o,c=r.classes,l=c===void 0?[]:c,u=r.attributes,f=u===void 0?{}:u,h=r.styles,p=h===void 0?{}:h;return Lc({type:"text",content:n},function(){return Ar("beforeDOMElementCreation",{content:n,params:r}),Cm({content:n,transform:L(L({},Wt),s),title:a,extra:{attributes:f,styles:p,classes:["".concat(z.familyPrefix,"-layers-text")].concat(Nc(l))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,c=null;if(Hb){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/l,c=u.height/l}return z.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Cm({content:n.innerHTML,width:a,height:c,transform:s,title:i,extra:o,watchable:!0})])}}},lD=new RegExp('"',"ug"),xm=[1105920,1112319];function uD(t){var e=t.replace(lD,""),n=TP(e,0),r=n>=xm[0]&&n<=xm[1],i=e.length===2?e[0]===e[1]:!1;return{value:bu(i?e[0]:e),isSecondary:r||i}}function Pm(t,e){var n="".concat(Jx).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Ui(t.children),o=s.filter(function(re){return re.getAttribute(yu)===e})[0],a=zn.getComputedStyle(t,e),c=a.getPropertyValue("font-family").match(nP),l=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&u!=="none"&&u!==""){var f=a.getPropertyValue("content"),h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Ra[c[2].toLowerCase()]:rP[l],p=uD(f),g=p.value,E=p.isSecondary,w=c[0].startsWith("FontAwesome"),v=Nh(h,g),b=v;if(w){var x=RP(g);x.iconName&&x.prefix&&(v=x.iconName,h=x.prefix)}if(v&&!E&&(!o||o.getAttribute(Ch)!==h||o.getAttribute(Sh)!==b)){t.setAttribute(n,b),o&&t.removeChild(o);var D=eD(),G=D.extra;G.attributes[yu]=e,Iu(v,h).then(function(re){var K=Ph(L(L({},D),{},{icons:{main:re,mask:xh()},prefix:h,iconName:b,extra:G,watchable:!0})),he=Ce.createElement("svg");e==="::before"?t.insertBefore(he,t.firstChild):t.appendChild(he),he.outerHTML=K.map(function(ie){return fo(ie)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function fD(t){return Promise.all([Pm(t,"::before"),Pm(t,"::after")])}function hD(t){return t.parentNode!==document.head&&!~Zx.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(yu)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Dm(t){if(!!wn)return new Promise(function(e,n){var r=Ui(t.querySelectorAll("*")).filter(hD).map(fD),i=Dh.begin("searchPseudoElements");fw(),Promise.all(r).then(function(){i(),Su(),e()}).catch(function(){i(),Su(),n()})})}var dD={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Dm,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ce:r;z.searchPseudoElements&&Dm(i)}}},Lm=!1,pD={mixout:function(){return{dom:{unwatch:function(){fw(),Lm=!0}}}},hooks:function(){return{bootstrap:function(){Om(_u("mutationObserverCallbacks",{}))},noAuto:function(){XP()},watch:function(n){var r=n.observeMutationsRoot;Lm?Su():Om(_u("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Mm=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},mD={mixout:function(){return{parse:{transform:function(n){return Mm(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Mm(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(c," ").concat(l," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:f,path:h};return{tag:"g",attributes:L({},p.outer),children:[{tag:"g",attributes:L({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:L(L({},r.icon.attributes),p.path)}]}]}}}},bl={x:0,y:0,width:"100%",height:"100%"};function Um(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function gD(t){return t.tag==="g"?t.children:[t]}var vD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Dc(i.split(" ").map(function(o){return o.trim()})):xh();return s.prefix||(s.prefix=Kn()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,c=n.transform,l=s.width,u=s.icon,f=o.width,h=o.icon,p=mP({transform:c,containerWidth:f,iconWidth:l}),g={tag:"rect",attributes:L(L({},bl),{},{fill:"white"})},E=u.children?{children:u.children.map(Um)}:{},w={tag:"g",attributes:L({},p.inner),children:[Um(L({tag:u.tag,attributes:L(L({},u.attributes),p.path)},E))]},v={tag:"g",attributes:L({},p.outer),children:[w]},b="mask-".concat(a||Ps()),x="clip-".concat(a||Ps()),D={tag:"mask",attributes:L(L({},bl),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,v]},G={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:gD(h)},D]};return r.push(G,{tag:"rect",attributes:L({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(b,")")},bl)}),{children:r,attributes:i}}}},yD={provides:function(e){var n=!1;zn.matchMedia&&(n=zn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:L(L({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=L(L({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:L(L({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:L(L({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:L(L({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:L(L({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:L(L({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:L(L({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:L(L({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},bD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},wD=[yP,sD,oD,aD,cD,dD,pD,mD,vD,yD,bD];PP(wD,{mixoutsTo:Ct});Ct.noAuto;var dw=Ct.config,o2=Ct.library;Ct.dom;var pw=Ct.parse;Ct.findIconDefinition;Ct.toHtml;var _D=Ct.icon;Ct.layer;var ED=Ct.text;Ct.counter;/*!
 * Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var a2={prefix:"fas",iconName:"arrow-right-from-bracket",icon:[512,512,["sign-out"],"f08b","M160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64c17.67 0 32-14.33 32-32S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256c0 53.02 42.98 96 96 96h64c17.67 0 32-14.33 32-32S177.7 416 160 416zM502.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L402.8 224H192C174.3 224 160 238.3 160 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C515.1 266.1 515.1 245.9 502.6 233.4z"]},c2={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M464 16c-17.67 0-32 14.31-32 32v74.09C392.1 66.52 327.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.89 5.5 34.88-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c50.5 0 96.26 24.55 124.4 64H336c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32V48C496 30.31 481.7 16 464 16zM441.8 289.6c-16.92-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-50.5 0-96.25-24.55-124.4-64H176c17.67 0 32-14.31 32-32s-14.33-32-32-32h-128c-17.67 0-32 14.31-32 32v144c0 17.69 14.33 32 32 32s32-14.31 32-32v-74.09C119.9 445.5 184.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z"]},l2={prefix:"fas",iconName:"ban",icon:[512,512,[128683,"cancel"],"f05e","M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM99.5 144.8C77.15 176.1 64 214.5 64 256C64 362 149.1 448 256 448C297.5 448 335.9 434.9 367.2 412.5L99.5 144.8zM448 256C448 149.1 362 64 256 64C214.5 64 176.1 77.15 144.8 99.5L412.5 367.2C434.9 335.9 448 297.5 448 256V256z"]},u2={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"]},f2={prefix:"fas",iconName:"check",icon:[448,512,[10004,10003],"f00c","M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"]},h2={prefix:"fas",iconName:"filter",icon:[512,512,[],"f0b0","M3.853 54.87C10.47 40.9 24.54 32 40 32H472C487.5 32 501.5 40.9 508.1 54.87C514.8 68.84 512.7 85.37 502.1 97.33L320 320.9V448C320 460.1 313.2 471.2 302.3 476.6C291.5 482 278.5 480.9 268.8 473.6L204.8 425.6C196.7 419.6 192 410.1 192 400V320.9L9.042 97.33C-.745 85.37-2.765 68.84 3.854 54.87L3.853 54.87z"]},d2={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"]},p2={prefix:"fas",iconName:"sort",icon:[320,512,["unsorted"],"f0dc","M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"]},TD=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function ID(t,e){return e={exports:{}},t(e,e.exports),e.exports}var CD=ID(function(t){(function(e){var n=function(v,b,x){if(!l(b)||f(b)||h(b)||p(b)||c(b))return b;var D,G=0,re=0;if(u(b))for(D=[],re=b.length;G<re;G++)D.push(n(v,b[G],x));else{D={};for(var K in b)Object.prototype.hasOwnProperty.call(b,K)&&(D[v(K,x)]=n(v,b[K],x))}return D},r=function(v,b){b=b||{};var x=b.separator||"_",D=b.split||/(?=[A-Z])/;return v.split(D).join(x)},i=function(v){return g(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(b,x){return x?x.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},s=function(v){var b=i(v);return b.substr(0,1).toUpperCase()+b.substr(1)},o=function(v,b){return r(v,b).toLowerCase()},a=Object.prototype.toString,c=function(v){return typeof v=="function"},l=function(v){return v===Object(v)},u=function(v){return a.call(v)=="[object Array]"},f=function(v){return a.call(v)=="[object Date]"},h=function(v){return a.call(v)=="[object RegExp]"},p=function(v){return a.call(v)=="[object Boolean]"},g=function(v){return v=v-0,v===v},E=function(v,b){var x=b&&"process"in b?b.process:b;return typeof x!="function"?v:function(D,G){return x(D,v,G)}},w={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(v,b){return n(E(i,b),v)},decamelizeKeys:function(v,b){return n(E(o,b),v,b)},pascalizeKeys:function(v,b){return n(E(s,b),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=w:e.humps=w})(TD)}),SD=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Gi=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},Pa=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},AD=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(t,r)||(n[r]=t[r]);return n},Au=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}else return Array.from(t)};function kD(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=CD.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function OD(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Mh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return Mh(c)}),i=Object.keys(t.attributes||{}).reduce(function(c,l){var u=t.attributes[l];switch(l){case"class":c.class=OD(u);break;case"style":c.style=kD(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=AD(n,["class","style"]);return Ms(t.tag,Pa({},e,{class:i.class,style:Pa({},i.style,o)},i.attrs,a),r)}var mw=!1;try{mw=!0}catch{}function RD(){if(!mw&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function cs(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Gi({},t,e):{}}function ND(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Gi(e,"fa-"+t.size,t.size!==null),Gi(e,"fa-rotate-"+t.rotation,t.rotation!==null),Gi(e,"fa-pull-"+t.pull,t.pull!==null),Gi(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Fm(t){if(t===null)return null;if((typeof t=="undefined"?"undefined":SD(t))==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var m2=Rt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(e){return["horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=xe(function(){return Fm(e.icon)}),s=xe(function(){return cs("classes",ND(e))}),o=xe(function(){return cs("transform",typeof e.transform=="string"?pw.transform(e.transform):e.transform)}),a=xe(function(){return cs("mask",Fm(e.mask))}),c=xe(function(){return _D(i.value,Pa({},s.value,o.value,a.value,{symbol:e.symbol,title:e.title}))});fr(c,function(u){if(!u)return RD("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var l=xe(function(){return c.value?Mh(c.value.abstract[0],{},r):null});return function(){return l.value}}});Rt({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,i=dw.familyPrefix,s=xe(function(){return[i+"-layers"].concat(Au(e.fixedWidth?[i+"-fw"]:[]))});return function(){return Ms("div",{class:s.value},r.default?r.default():[])}}});Rt({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,i=dw.familyPrefix,s=xe(function(){return cs("classes",[].concat(Au(e.counter?[i+"-layers-counter"]:[]),Au(e.position?[i+"-layers-"+e.position]:[])))}),o=xe(function(){return cs("transform",typeof e.transform=="string"?pw.transform(e.transform):e.transform)}),a=xe(function(){var l=ED(e.value.toString(),Pa({},o.value,s.value)),u=l.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),c=xe(function(){return Mh(a.value,{},r)});return function(){return c.value}}});var xD="firebase",PD="9.6.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mn(xD,PD,"app");export{QD as A,n2 as B,HD as C,jD as D,zD as E,et as F,r2 as G,qD as H,BD as I,XD as J,YD as K,VD as L,o2 as M,d2 as N,p2 as O,h2 as P,u2 as Q,a2 as R,c2 as S,Hg as T,f2 as U,l2 as V,q_ as W,m2 as X,i2 as Y,ml as Z,s2 as _,Ne as a,kr as b,Dt as c,Ge as d,Ka as e,Kt as f,GD as g,LD as h,MD as i,We as j,$c as k,UD as l,sd as m,Ds as n,KD as o,DD as p,$D as q,Ji as r,WD as s,Vm as t,JD as u,FD as v,Ls as w,ZD as x,e2 as y,t2 as z};

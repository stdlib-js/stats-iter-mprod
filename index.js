// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).itermprod=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,u=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,n.get),p&&u&&u.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function p(r){return"boolean"==typeof r}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function w(r,t){return null!=r&&d.call(r,t)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var h=b()?function(r){var t,n,e;if(null==r)return s.call(r);n=r[m],t=w(r,m);try{r[m]=void 0}catch(t){return s.call(r)}return e=s.call(r),t?r[m]=n:delete r[m],e}:function(r){return s.call(r)},A=Boolean.prototype.toString;var j=b();function g(r){return"object"==typeof r&&(r instanceof Boolean||(j?function(r){try{return A.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===h(r)))}function _(r){return p(r)||g(r)}function U(){return new Function("return this;")()}l(_,"isPrimitive",p),l(_,"isObject",g);var O="object"==typeof self?self:null,S="object"==typeof window?window:null,E="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof E?E:null;var T=function(r){if(arguments.length){if(!p(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return U()}if(O)return O;if(S)return S;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),I=T.document&&T.document.childNodes,x=Int8Array;function F(){return/^\s*function\s*([^(]*)/i}var P=/^\s*function\s*([^(]*)/i;l(F,"REGEXP",P);var G=Array.isArray?Array.isArray:function(r){return"[object Array]"===h(r)};function H(r){return null!==r&&"object"==typeof r}function B(r){var t,n,e,o;if(("Object"===(n=h(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=P.exec(e.toString()))return t[1]}return H(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(H,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!G(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(H));var L="function"==typeof y||"object"==typeof x||"function"==typeof I?function(r){return B(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?B(r).toLowerCase():t};function V(r){return"function"===L(r)}function M(r){return"number"==typeof r}var k=Number,C=k.prototype.toString;var W=b();function R(r){return"object"==typeof r&&(r instanceof k||(W?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===h(r)))}function Y(r){return M(r)||R(r)}l(Y,"isPrimitive",M),l(Y,"isObject",R);var X=Number.POSITIVE_INFINITY,q=k.NEGATIVE_INFINITY,z=Math.floor;function D(r){return r<X&&r>q&&z(t=r)===t;var t}function J(r){return M(r)&&D(r)}function K(r){return R(r)&&D(r.valueOf())}function Q(r){return J(r)||K(r)}function Z(r){return J(r)&&r>0}function $(r){return K(r)&&r.valueOf()>0}function rr(r){return Z(r)||$(r)}l(Q,"isPrimitive",J),l(Q,"isObject",K),l(rr,"isPrimitive",Z),l(rr,"isObject",$);var tr="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function nr(r){return r!=r}function er(r){return r===X||r===q}function or(r,t,n,e){return nr(r)||er(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}l((function(r){return or(r,[0,0],1,0)}),"assign",or);var ir="function"==typeof Uint32Array;var ur="function"==typeof Uint32Array?Uint32Array:null;var fr,ar="function"==typeof Uint32Array?Uint32Array:void 0;fr=function(){var r,t,n;if("function"!=typeof ur)return!1;try{t=new ur(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(ir&&n instanceof Uint32Array||"[object Uint32Array]"===h(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var cr=fr,lr="function"==typeof Float64Array;var yr="function"==typeof Float64Array?Float64Array:null;var pr,vr="function"==typeof Float64Array?Float64Array:void 0;pr=function(){var r,t,n;if("function"!=typeof yr)return!1;try{t=new yr([1,3.14,-3.14,NaN]),n=t,r=(lr&&n instanceof Float64Array||"[object Float64Array]"===h(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var br=pr,sr="function"==typeof Uint8Array;var dr="function"==typeof Uint8Array?Uint8Array:null;var wr,mr="function"==typeof Uint8Array?Uint8Array:void 0;wr=function(){var r,t,n;if("function"!=typeof dr)return!1;try{t=new dr(t=[1,3.14,-3.14,256,257]),n=t,r=(sr&&n instanceof Uint8Array||"[object Uint8Array]"===h(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var hr=wr,Ar="function"==typeof Uint16Array;var jr="function"==typeof Uint16Array?Uint16Array:null;var gr,_r="function"==typeof Uint16Array?Uint16Array:void 0;gr=function(){var r,t,n;if("function"!=typeof jr)return!1;try{t=new jr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Ar&&n instanceof Uint16Array||"[object Uint16Array]"===h(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Ur,Or={uint16:gr,uint8:hr};(Ur=new Or.uint16(1))[0]=4660;var Sr=52===new Or.uint8(Ur.buffer)[0],Er=!0===Sr?1:0,Nr=new br(1),Tr=new cr(Nr.buffer);function Ir(r){return Nr[0]=r,Tr[Er]}var xr,Fr;function Pr(r){var t=Ir(r);return(t=(2146435072&t)>>>20)-1023|0}!0===Sr?(xr=1,Fr=0):(xr=0,Fr=1);var Gr,Hr,Br={HIGH:xr,LOW:Fr},Lr=new br(1),Vr=new cr(Lr.buffer),Mr=Br.HIGH,kr=Br.LOW;function Cr(r,t){return Lr[0]=t,r[0]=Vr[Mr],r[1]=Vr[kr],r}function Wr(r,t){return 1===arguments.length?Cr([0,0],r):Cr(r,t)}!0===Sr?(Gr=1,Hr=0):(Gr=0,Hr=1);var Rr={HIGH:Gr,LOW:Hr},Yr=new br(1),Xr=new cr(Yr.buffer),qr=Rr.HIGH,zr=Rr.LOW;function Dr(r,t){return Xr[qr]=r,Xr[zr]=t,Yr[0]}var Jr=[0,0],Kr=[0,0];function Qr(r,t){var n,e;return 0===t||nr(t)||er(t)?(r[0]=t,r[1]=0,r):(or(t,Jr,1,0),e=Pr(Jr[0])+Jr[1]+1,Wr(Kr,Jr[0]),n=Kr[0],n&=2148532223,t=Dr(n|=1071644672,Kr[1]),r[0]=t,r[1]=e,r)}function Zr(r,t){return 1===arguments.length?Qr([0,0],r):Qr(r,t)}var $r=[0,0];var rt=[0,0],tt=[0,0];function nt(r,t){var n,e,o,i,u;return 0===t||0===r||nr(r)||er(r)?r:(or(r,rt,1,0),t+=rt[1],(t+=Pr(r=rt[0]))<-1074?(o=r,Wr($r,0),i=$r[0],i&=2147483647,u=Ir(o),Dr(i|=u&=2147483648,$r[1])):t>1023?r<0?q:X:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Wr(tt,r),n=tt[0],n&=2148532223,e*Dr(n|=t+1023<<20,tt[1])))}function et(r,t,n){return Zr(r,n),t.frac*=r[0],t.exp+=r[1],t.frac>-.5&&t.frac<.5&&(Zr(r,t.frac),t.frac=r[0],t.exp+=r[1]),nt(t.frac,t.exp)}function ot(){var r,t=arguments,n=t[0],e="https://stdlib.io/e/"+n+"?";for(r=1;r<t.length;r++)e+="&arg[]="+encodeURIComponent(t[r]);return e}return function r(t,n){var e,o,i,u,f;if(f=typeof(u=t),null===u||"object"!==f&&"function"!==f||!V(u.next))throw new TypeError(ot("0fT48",t));if(!Z(n))throw new TypeError(ot("0fT4I",n));return i=function(r){var t,n,e,o,i,u;if(!Z(r))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+r+"`.");return e=new br(r),u=-1,i=0,t=[0,0],n=1,(o={}).frac=.5,o.exp=1,function(f){var a,c;if(0===arguments.length)return 0===i?null:n;if(u=(u+1)%r,nr(f))i=r,n=NaN;else if(i<r)i+=1,n=et(t,o,f);else if(0===e[u]||nr(e[u])||er(e[u])){for(i=1,o.frac=.5,o.exp=1,et(t,o,f),a=0;a<r;a++)if(a!==u){if(nr(c=e[a])){i=r,n=NaN;break}i+=1,n=et(t,o,c)}}else!1===nr(n)&&(c=f/e[u],n=et(t,o,c));return e[u]=f,n}}(n),l(e={},"next",(function(){var r;if(o)return{done:!0};if((r=t.next()).done)return o=!0,{done:!0};r="number"==typeof r.value?i(r.value):i(NaN);return{value:r,done:!1}})),l(e,"return",(function(r){if(o=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),tr&&V(t[tr])&&l(e,tr,(function(){return r(t[tr](),n)})),e}}));
//# sourceMappingURL=index.js.map
// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).itermprod=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,t=Object.prototype,i=t.toString,o=t.__defineGetter__,a=t.__defineSetter__,u=t.__lookupGetter__,c=t.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,e,n){var f,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(u.call(r,e)||c.call(r,e)?(f=r.__proto__,r.__proto__=t,delete r[e],r[e]=n.value,r.__proto__=f):r[e]=n.value),s="get"in n,p="set"in n,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&o&&o.call(r,e,n.get),p&&a&&a.call(r,e,n.set),r};var f=e;function l(r,e,n){f(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var s=/./;function p(r){return"boolean"==typeof r}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function d(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function b(r,e){return null!=r&&g.call(r,e)}var h="function"==typeof Symbol?Symbol.toStringTag:"";var w=d()?function(r){var e,n,t;if(null==r)return v.call(r);n=r[h],e=b(r,h);try{r[h]=void 0}catch(e){return v.call(r)}return t=v.call(r),e?r[h]=n:delete r[h],t}:function(r){return v.call(r)},m=Boolean.prototype.toString;var A=d();function j(r){return"object"==typeof r&&(r instanceof Boolean||(A?function(r){try{return m.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===w(r)))}function E(r){return p(r)||j(r)}function _(){return new Function("return this;")()}l(E,"isPrimitive",p),l(E,"isObject",j);var x="object"==typeof self?self:null,S="object"==typeof window?window:null,U="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},I="object"==typeof U?U:null;var T=function(r){if(arguments.length){if(!p(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return _()}if(x)return x;if(S)return S;if(I)return I;throw new Error("unexpected error. Unable to resolve global object.")}(),O=T.document&&T.document.childNodes,k=Int8Array;function F(){return/^\s*function\s*([^(]*)/i}var N=/^\s*function\s*([^(]*)/i;l(F,"REGEXP",N);var V=Array.isArray?Array.isArray:function(r){return"[object Array]"===w(r)};function P(r){return null!==r&&"object"==typeof r}function C(r){var e,n,t,i;if(("Object"===(n=w(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(t=r.constructor).name)return t.name;if(e=N.exec(t.toString()))return e[1]}return P(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}l(P,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var n,t;if(!V(e))return!1;if(0===(n=e.length))return!1;for(t=0;t<n;t++)if(!1===r(e[t]))return!1;return!0}}(P));var G="function"==typeof s||"object"==typeof k||"function"==typeof O?function(r){return C(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?C(r).toLowerCase():e};function L(r){return"function"===G(r)}function $(r){return"number"==typeof r}var H=Number,R=H.prototype.toString;var W=d();function B(r){return"object"==typeof r&&(r instanceof H||(W?function(r){try{return R.call(r),!0}catch(r){return!1}}(r):"[object Number]"===w(r)))}function M(r){return $(r)||B(r)}l(M,"isPrimitive",$),l(M,"isObject",B);var Z=Number.POSITIVE_INFINITY,X=H.NEGATIVE_INFINITY,Y=Math.floor;function z(r){return r<Z&&r>X&&Y(e=r)===e;var e}function q(r){return $(r)&&z(r)}function D(r){return B(r)&&z(r.valueOf())}function J(r){return q(r)||D(r)}function K(r){return q(r)&&r>0}function Q(r){return D(r)&&r.valueOf()>0}function rr(r){return K(r)||Q(r)}l(J,"isPrimitive",q),l(J,"isObject",D),l(rr,"isPrimitive",K),l(rr,"isObject",Q);var er="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&b(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function nr(r){return r!=r}function tr(r){return r===Z||r===X}function ir(r,e,n,t){return nr(r)||tr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}l((function(r){return ir(r,[0,0],1,0)}),"assign",ir);var or="function"==typeof Uint32Array;var ar="function"==typeof Uint32Array?Uint32Array:null;var ur,cr="function"==typeof Uint32Array?Uint32Array:void 0;ur=function(){var r,e,n;if("function"!=typeof ar)return!1;try{e=new ar(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(or&&n instanceof Uint32Array||"[object Uint32Array]"===w(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var fr=ur,lr="function"==typeof Float64Array;var sr="function"==typeof Float64Array?Float64Array:null;var pr,yr="function"==typeof Float64Array?Float64Array:void 0;pr=function(){var r,e,n;if("function"!=typeof sr)return!1;try{e=new sr([1,3.14,-3.14,NaN]),n=e,r=(lr&&n instanceof Float64Array||"[object Float64Array]"===w(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var dr=pr,vr="function"==typeof Uint8Array;var gr="function"==typeof Uint8Array?Uint8Array:null;var br,hr="function"==typeof Uint8Array?Uint8Array:void 0;br=function(){var r,e,n;if("function"!=typeof gr)return!1;try{e=new gr(e=[1,3.14,-3.14,256,257]),n=e,r=(vr&&n instanceof Uint8Array||"[object Uint8Array]"===w(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var wr=br,mr="function"==typeof Uint16Array;var Ar="function"==typeof Uint16Array?Uint16Array:null;var jr,Er="function"==typeof Uint16Array?Uint16Array:void 0;jr=function(){var r,e,n;if("function"!=typeof Ar)return!1;try{e=new Ar(e=[1,3.14,-3.14,65536,65537]),n=e,r=(mr&&n instanceof Uint16Array||"[object Uint16Array]"===w(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var _r,xr={uint16:jr,uint8:wr};(_r=new xr.uint16(1))[0]=4660;var Sr=52===new xr.uint8(_r.buffer)[0],Ur=!0===Sr?1:0,Ir=new dr(1),Tr=new fr(Ir.buffer);function Or(r){return Ir[0]=r,Tr[Ur]}var kr,Fr;function Nr(r){var e=Or(r);return(e=(2146435072&e)>>>20)-1023|0}!0===Sr?(kr=1,Fr=0):(kr=0,Fr=1);var Vr,Pr,Cr={HIGH:kr,LOW:Fr},Gr=new dr(1),Lr=new fr(Gr.buffer),$r=Cr.HIGH,Hr=Cr.LOW;function Rr(r,e,n,t){return Gr[0]=r,e[t]=Lr[$r],e[t+n]=Lr[Hr],e}function Wr(r){return Rr(r,[0,0],1,0)}l(Wr,"assign",Rr),!0===Sr?(Vr=1,Pr=0):(Vr=0,Pr=1);var Br={HIGH:Vr,LOW:Pr},Mr=new dr(1),Zr=new fr(Mr.buffer),Xr=Br.HIGH,Yr=Br.LOW;function zr(r,e){return Zr[Xr]=r,Zr[Yr]=e,Mr[0]}var qr=[0,0],Dr=[0,0];function Jr(r,e,n,t){var i,o;return 0===r||nr(r)||tr(r)?(e[t]=r,e[t+n]=0,e):(ir(r,qr,1,0),o=Nr(qr[0])+qr[1]+1,Wr.assign(qr[0],Dr,1,0),i=Dr[0],i&=2148532223,r=zr(i|=1071644672,Dr[1]),e[t]=r,e[t+n]=o,e)}l((function(r){return Jr(r,[0,0],1,0)}),"assign",Jr);var Kr=[0,0];var Qr=[0,0],re=[0,0];function ee(r,e){var n,t,i,o,a,u;return 0===e||0===r||nr(r)||tr(r)?r:(ir(r,Qr,1,0),e+=Qr[1],(e+=Nr(r=Qr[0]))<-1074?(i=0,o=r,Wr.assign(i,Kr,1,0),a=Kr[0],a&=2147483647,u=Or(o),zr(a|=u&=2147483648,Kr[1])):e>1023?r<0?X:Z:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Wr.assign(r,re,1,0),n=re[0],n&=2148532223,t*zr(n|=e+1023<<20,re[1])))}function ne(r){return"number"==typeof r}function te(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function ie(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+te(i):te(i)+r,t&&(r="-"+r)),r}var oe=String.prototype.toLowerCase,ae=String.prototype.toUpperCase;function ue(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!ne(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=ie(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=ie(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===ae.call(r.specifier)?ae.call(n):oe.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function ce(r){return"string"==typeof r}var fe=Math.abs,le=String.prototype.toLowerCase,se=String.prototype.toUpperCase,pe=String.prototype.replace,ye=/e\+(\d)$/,de=/e-(\d)$/,ve=/^(\d+)$/,ge=/^(\d+)e/,be=/\.0$/,he=/\.0*e/,we=/(\..*[^0])0*e/;function me(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!ne(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":fe(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=pe.call(n,we,"$1e"),n=pe.call(n,he,"e"),n=pe.call(n,be,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=pe.call(n,ye,"e+0$1"),n=pe.call(n,de,"e-0$1"),r.alternate&&(n=pe.call(n,ve,"$1."),n=pe.call(n,ge,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===se.call(r.specifier)?se.call(n):le.call(n)}function Ae(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function je(r,e,n){var t=e-r.length;return t<0?r:r=n?r+Ae(t):Ae(t)+r}var Ee=String.fromCharCode,_e=isNaN,xe=Array.isArray;function Se(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Ue(r){var e,n,t,i,o,a,u,c,f;if(!xe(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(ce(t=r[c]))a+=t;else{if(e=void 0!==t.precision,!(t=Se(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,_e(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,_e(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=ue(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!_e(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_e(o)?String(t.arg):Ee(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=me(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ie(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=je(t.arg,t.width,t.padRight)),a+=t.arg||"",u+=1}return a}var Ie=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Te(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Oe(r){var e,n,t,i;for(n=[],i=0,t=Ie.exec(r);t;)(e=r.slice(i,Ie.lastIndex-t[0].length)).length&&n.push(e),n.push(Te(t)),i=Ie.lastIndex,t=Ie.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function ke(r){return"string"==typeof r}function Fe(r){var e,n,t;if(!ke(r))throw new TypeError(Fe("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Oe(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return Ue.apply(null,n)}function Ne(r,e,n){return Jr(n,r,1,0),e.frac*=r[0],e.exp+=r[1],e.frac>-.5&&e.frac<.5&&(Jr(e.frac,r,1,0),e.frac=r[0],e.exp+=r[1]),ee(e.frac,e.exp)}function Ve(r){var e,n,t,i,o,a;if(!K(r))throw new TypeError(Fe("invalid argument. Must provide a positive integer. Value: `%s`.",r));return t=new dr(r),a=-1,o=0,e=[0,0],n=1,(i={}).frac=.5,i.exp=1,function(u){var c,f;if(0===arguments.length)return 0===o?null:n;if(a=(a+1)%r,nr(u))o=r,n=NaN;else if(o<r)o+=1,n=Ne(e,i,u);else if(0===t[a]||nr(t[a])||tr(t[a])){for(o=1,i.frac=.5,i.exp=1,Ne(e,i,u),c=0;c<r;c++)if(c!==a){if(nr(f=t[c])){o=r,n=NaN;break}o+=1,n=Ne(e,i,f)}}else!1===nr(n)&&(f=u/t[a],n=Ne(e,i,f));return t[a]=u,n}}function Pe(){var r,e=arguments,n=e[0],t="https://stdlib.io/e/"+n+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}return function r(e,n){var t,i,o,a,u;if(u=typeof(a=e),null===a||"object"!==u&&"function"!==u||!L(a.next))throw new TypeError(Pe("0fT48",e));if(!K(n))throw new TypeError(Pe("0fT4I",n));return o=Ve(n),l(t={},"next",(function(){var r;if(i)return{done:!0};if((r=e.next()).done)return i=!0,{done:!0};r="number"==typeof r.value?o(r.value):o(NaN);return{value:r,done:!1}})),l(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),er&&L(e[er])&&l(t,er,(function(){return r(e[er](),n)})),t}}));
//# sourceMappingURL=browser.js.map
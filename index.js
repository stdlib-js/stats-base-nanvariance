// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,a=t.__defineSetter__,i=t.__lookupGetter__,u=t.__lookupSetter__,f=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,f){var l,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof f||null===f||"[object Array]"===n.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((c="value"in f)&&(i.call(e,r)||u.call(e,r)?(l=e.__proto__,e.__proto__=t,delete e[r],e[r]=f.value,e.__proto__=l):e[r]=f.value),_="get"in f,p="set"in f,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(e,r,f.get),p&&a&&a.call(e,r,f.set),e};function l(e,r,t){f(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var c=Math.floor;function _(e,r,t,n,o){var a,i,u,f,l,p,d,y,b,s,v,N,j,m;if(a=o,e<8){for(v=0,N=0,m=0;m<e;m++)(j=t[a])==j&&(v+=j,N+=1),a+=n;return r[0]+=v,r[1]+=N,r}if(e<=128){for(i=0,u=0,f=0,l=0,p=0,d=0,y=0,b=0,N=0,s=e%8,m=0;m<e-s;m+=8)(j=t[a])==j&&(i+=j,N+=1),(j=t[a+=n])==j&&(u+=j,N+=1),(j=t[a+=n])==j&&(f+=j,N+=1),(j=t[a+=n])==j&&(l+=j,N+=1),(j=t[a+=n])==j&&(p+=j,N+=1),(j=t[a+=n])==j&&(d+=j,N+=1),(j=t[a+=n])==j&&(y+=j,N+=1),(j=t[a+=n])==j&&(b+=j,N+=1),a+=n;for(v=i+u+(f+l)+(p+d+(y+b));m<e;m++)(j=t[a])==j&&(v+=j,N+=1),a+=n;return r[0]+=v,r[1]+=N,r}return N=c(e/2),_(N-=N%8,r,t,n,a)+_(e-N,r,t,n,a+N*n)}var p=[0,0];function d(e,r,t,n){var o,a,i,u,f,l,c,d,y;if(e<=0)return NaN;if(1===e||0===n)return(c=t[0])==c&&e-r>0?0:NaN;if(a=n<0?(1-e)*n:0,p[0]=0,p[1]=0,_(e,p,t,n,a),(u=(d=p[1])-r)<=0)return NaN;for(o=p[0]/d,i=0,f=0,y=0;y<e;y++)(c=t[a])==c&&(i+=(l=c-o)*l,f+=l),a+=n;return i/u-f/d*(f/u)}var y=[0,0];l(d,"ndarray",(function(e,r,t,n,o){var a,i,u,f,l,c,p,d,b;if(e<=0)return NaN;if(1===e||0===n)return(p=t[o])==p&&e-r>0?0:NaN;if(y[0]=0,y[1]=0,_(e,y,t,n,o),(f=(d=y[1])-r)<=0)return NaN;for(a=y[0]/d,i=o,u=0,l=0,b=0;b<e;b++)(p=t[i])==p&&(u+=(c=p-a)*c,l+=c),i+=n;return u/f-l/d*(l/f)}));const{ndarray:b}=d;function s(e,r,t,n){return d(e,r,t,n)}return l(s,"ndarray",(function(e,r,t,n,o){return b(e,r,t,n,o)})),s},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).nanvariance=r();
//# sourceMappingURL=index.js.map

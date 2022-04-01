// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,n=Object.prototype,a=n.toString,o=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,f=n.__lookupSetter__;var l=t,c=function(r,e,t){var l,c,_,v;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(i.call(r,e)||f.call(r,e)?(l=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=l):r[e]=t.value),_="get"in t,v="set"in t,c&&(_||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(r,e,t.get),v&&u&&u.call(r,e,t.set),r},_=e()?l:c;var v=function(r,e,t){_(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},p=Math.floor;var y=function r(e,t,n,a,o){var u,i,f,l,c,_,v,y,b,d,s,N,j,g;if(u=o,e<8){for(s=0,N=0,g=0;g<e;g++)(j=n[u])==j&&(s+=j,N+=1),u+=a;return t[0]+=s,t[1]+=N,t}if(e<=128){for(i=0,f=0,l=0,c=0,_=0,v=0,y=0,b=0,N=0,d=e%8,g=0;g<e-d;g+=8)(j=n[u])==j&&(i+=j,N+=1),(j=n[u+=a])==j&&(f+=j,N+=1),(j=n[u+=a])==j&&(l+=j,N+=1),(j=n[u+=a])==j&&(c+=j,N+=1),(j=n[u+=a])==j&&(_+=j,N+=1),(j=n[u+=a])==j&&(v+=j,N+=1),(j=n[u+=a])==j&&(y+=j,N+=1),(j=n[u+=a])==j&&(b+=j,N+=1),u+=a;for(s=i+f+(l+c)+(_+v+(y+b));g<e;g++)(j=n[u])==j&&(s+=j,N+=1),u+=a;return t[0]+=s,t[1]+=N,t}return N=p(e/2),r(N-=N%8,t,n,a,u)+r(e-N,t,n,a,u+N*a)},b=y,d=[0,0];var s=y,N=[0,0];var j=function(r,e,t,n){var a,o,u,i,f,l,c,_,v;if(r<=0)return NaN;if(1===r||0===n)return(c=t[0])==c&&r-e>0?0:NaN;if(o=n<0?(1-r)*n:0,d[0]=0,d[1]=0,b(r,d,t,n,o),(i=(_=d[1])-e)<=0)return NaN;for(a=d[0]/_,u=0,f=0,v=0;v<r;v++)(c=t[o])==c&&(u+=(l=c-a)*l,f+=l),o+=n;return u/i-f/_*(f/i)};v(j,"ndarray",(function(r,e,t,n,a){var o,u,i,f,l,c,_,v,p;if(r<=0)return NaN;if(1===r||0===n)return(_=t[a])==_&&r-e>0?0:NaN;if(N[0]=0,N[1]=0,s(r,N,t,n,a),(f=(v=N[1])-e)<=0)return NaN;for(o=N[0]/v,u=a,i=0,l=0,p=0;p<r;p++)(_=t[u])==_&&(i+=(c=_-o)*c,l+=c),u+=n;return i/f-l/v*(l/f)}));var g=j;var m=j.ndarray;var w=function(r,e,t,n){return g(r,e,t,n)};v(w,"ndarray",(function(r,e,t,n,a){return m(r,e,t,n,a)}));var h=w;export{h as default};
//# sourceMappingURL=mod.js.map

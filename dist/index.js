"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=i(function(g,u){
var p=require('@stdlib/stats-base-nanvariancepn/dist').ndarray;function y(e,r,n,a,d){return p(e,r,n,a,d)}u.exports=y
});var v=i(function(h,s){
var f=require('@stdlib/strided-base-stride2offset/dist'),x=t();function l(e,r,n,a){return x(e,r,n,a,f(e,a))}s.exports=l
});var q=i(function(j,o){
var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=v(),O=t();m(c,"ndarray",O);o.exports=c
});var R=q();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

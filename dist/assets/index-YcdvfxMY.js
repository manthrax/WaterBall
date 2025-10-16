var ot=Object.defineProperty;var ct=(p,h,z)=>h in p?ot(p,h,{enumerable:!0,configurable:!0,writable:!0,value:z}):p[h]=z;var b=(p,h,z)=>ct(p,typeof h!="symbol"?h+"":h,z);(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const P of document.querySelectorAll('link[rel="modulepreload"]'))B(P);new MutationObserver(P=>{for(const A of P)if(A.type==="childList")for(const D of A.addedNodes)D.tagName==="LINK"&&D.rel==="modulepreload"&&B(D)}).observe(document,{childList:!0,subtree:!0});function z(P){const A={};return P.integrity&&(A.integrity=P.integrity),P.referrerPolicy&&(A.referrerPolicy=P.referrerPolicy),P.crossOrigin==="use-credentials"?A.credentials="include":P.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function B(P){if(P.ep)return;P.ep=!0;const A=z(P);fetch(P.href,A)}})();function at(p,h){return class extends p{constructor(...z){super(...z),h(this)}}}const lt=at(Array,p=>p.fill(0));let O=1e-6;function ut(p){function h(e=0,o=0){const t=new p(2);return e!==void 0&&(t[0]=e,o!==void 0&&(t[1]=o)),t}const z=h;function B(e,o,t){const r=t??new p(2);return r[0]=e,r[1]=o,r}function P(e,o){const t=o??new p(2);return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t}function A(e,o){const t=o??new p(2);return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t}function D(e,o){const t=o??new p(2);return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t}function q(e,o=0,t=1,r){const a=r??new p(2);return a[0]=Math.min(t,Math.max(o,e[0])),a[1]=Math.min(t,Math.max(o,e[1])),a}function $(e,o,t){const r=t??new p(2);return r[0]=e[0]+o[0],r[1]=e[1]+o[1],r}function J(e,o,t,r){const a=r??new p(2);return a[0]=e[0]+o[0]*t,a[1]=e[1]+o[1]*t,a}function H(e,o){const t=e[0],r=e[1],a=o[0],g=o[1],w=Math.sqrt(t*t+r*r),c=Math.sqrt(a*a+g*g),l=w*c,v=l&&Me(e,o)/l;return Math.acos(v)}function X(e,o,t){const r=t??new p(2);return r[0]=e[0]-o[0],r[1]=e[1]-o[1],r}const K=X;function W(e,o){return Math.abs(e[0]-o[0])<O&&Math.abs(e[1]-o[1])<O}function j(e,o){return e[0]===o[0]&&e[1]===o[1]}function G(e,o,t,r){const a=r??new p(2);return a[0]=e[0]+t*(o[0]-e[0]),a[1]=e[1]+t*(o[1]-e[1]),a}function ne(e,o,t,r){const a=r??new p(2);return a[0]=e[0]+t[0]*(o[0]-e[0]),a[1]=e[1]+t[1]*(o[1]-e[1]),a}function Q(e,o,t){const r=t??new p(2);return r[0]=Math.max(e[0],o[0]),r[1]=Math.max(e[1],o[1]),r}function Z(e,o,t){const r=t??new p(2);return r[0]=Math.min(e[0],o[0]),r[1]=Math.min(e[1],o[1]),r}function L(e,o,t){const r=t??new p(2);return r[0]=e[0]*o,r[1]=e[1]*o,r}const C=L;function de(e,o,t){const r=t??new p(2);return r[0]=e[0]/o,r[1]=e[1]/o,r}function ye(e,o){const t=o??new p(2);return t[0]=1/e[0],t[1]=1/e[1],t}const he=ye;function ae(e,o,t){const r=t??new p(3),a=e[0]*o[1]-e[1]*o[0];return r[0]=0,r[1]=0,r[2]=a,r}function Me(e,o){return e[0]*o[0]+e[1]*o[1]}function ie(e){const o=e[0],t=e[1];return Math.sqrt(o*o+t*t)}const Se=ie;function R(e){const o=e[0],t=e[1];return o*o+t*t}const V=R;function U(e,o){const t=e[0]-o[0],r=e[1]-o[1];return Math.sqrt(t*t+r*r)}const ve=U;function N(e,o){const t=e[0]-o[0],r=e[1]-o[1];return t*t+r*r}const Pe=N;function ee(e,o){const t=o??new p(2),r=e[0],a=e[1],g=Math.sqrt(r*r+a*a);return g>1e-5?(t[0]=r/g,t[1]=a/g):(t[0]=0,t[1]=0),t}function ge(e,o){const t=o??new p(2);return t[0]=-e[0],t[1]=-e[1],t}function Y(e,o){const t=o??new p(2);return t[0]=e[0],t[1]=e[1],t}const ce=Y;function se(e,o,t){const r=t??new p(2);return r[0]=e[0]*o[0],r[1]=e[1]*o[1],r}const Ie=se;function be(e,o,t){const r=t??new p(2);return r[0]=e[0]/o[0],r[1]=e[1]/o[1],r}const Te=be;function ze(e=1,o){const t=o??new p(2),r=Math.random()*2*Math.PI;return t[0]=Math.cos(r)*e,t[1]=Math.sin(r)*e,t}function i(e){const o=e??new p(2);return o[0]=0,o[1]=0,o}function f(e,o,t){const r=t??new p(2),a=e[0],g=e[1];return r[0]=a*o[0]+g*o[4]+o[12],r[1]=a*o[1]+g*o[5]+o[13],r}function n(e,o,t){const r=t??new p(2),a=e[0],g=e[1];return r[0]=o[0]*a+o[4]*g+o[8],r[1]=o[1]*a+o[5]*g+o[9],r}function s(e,o,t,r){const a=r??new p(2),g=e[0]-o[0],w=e[1]-o[1],c=Math.sin(t),l=Math.cos(t);return a[0]=g*l-w*c+o[0],a[1]=g*c+w*l+o[1],a}function u(e,o,t){const r=t??new p(2);return ee(e,r),L(r,o,r)}function d(e,o,t){const r=t??new p(2);return ie(e)>o?u(e,o,r):Y(e,r)}function x(e,o,t){const r=t??new p(2);return G(e,o,.5,r)}return{create:h,fromValues:z,set:B,ceil:P,floor:A,round:D,clamp:q,add:$,addScaled:J,angle:H,subtract:X,sub:K,equalsApproximately:W,equals:j,lerp:G,lerpV:ne,max:Q,min:Z,mulScalar:L,scale:C,divScalar:de,inverse:ye,invert:he,cross:ae,dot:Me,length:ie,len:Se,lengthSq:R,lenSq:V,distance:U,dist:ve,distanceSq:N,distSq:Pe,normalize:ee,negate:ge,copy:Y,clone:ce,multiply:se,mul:Ie,divide:be,div:Te,random:ze,zero:i,transformMat4:f,transformMat3:n,rotate:s,setLength:u,truncate:d,midpoint:x}}const Ke=new Map;function st(p){let h=Ke.get(p);return h||(h=ut(p),Ke.set(p,h)),h}function ft(p){function h(c,l,v){const _=new p(3);return c!==void 0&&(_[0]=c,l!==void 0&&(_[1]=l,v!==void 0&&(_[2]=v))),_}const z=h;function B(c,l,v,_){const m=_??new p(3);return m[0]=c,m[1]=l,m[2]=v,m}function P(c,l){const v=l??new p(3);return v[0]=Math.ceil(c[0]),v[1]=Math.ceil(c[1]),v[2]=Math.ceil(c[2]),v}function A(c,l){const v=l??new p(3);return v[0]=Math.floor(c[0]),v[1]=Math.floor(c[1]),v[2]=Math.floor(c[2]),v}function D(c,l){const v=l??new p(3);return v[0]=Math.round(c[0]),v[1]=Math.round(c[1]),v[2]=Math.round(c[2]),v}function q(c,l=0,v=1,_){const m=_??new p(3);return m[0]=Math.min(v,Math.max(l,c[0])),m[1]=Math.min(v,Math.max(l,c[1])),m[2]=Math.min(v,Math.max(l,c[2])),m}function $(c,l,v){const _=v??new p(3);return _[0]=c[0]+l[0],_[1]=c[1]+l[1],_[2]=c[2]+l[2],_}function J(c,l,v,_){const m=_??new p(3);return m[0]=c[0]+l[0]*v,m[1]=c[1]+l[1]*v,m[2]=c[2]+l[2]*v,m}function H(c,l){const v=c[0],_=c[1],m=c[2],y=l[0],M=l[1],S=l[2],I=Math.sqrt(v*v+_*_+m*m),F=Math.sqrt(y*y+M*M+S*S),T=I*F,E=T&&Me(c,l)/T;return Math.acos(E)}function X(c,l,v){const _=v??new p(3);return _[0]=c[0]-l[0],_[1]=c[1]-l[1],_[2]=c[2]-l[2],_}const K=X;function W(c,l){return Math.abs(c[0]-l[0])<O&&Math.abs(c[1]-l[1])<O&&Math.abs(c[2]-l[2])<O}function j(c,l){return c[0]===l[0]&&c[1]===l[1]&&c[2]===l[2]}function G(c,l,v,_){const m=_??new p(3);return m[0]=c[0]+v*(l[0]-c[0]),m[1]=c[1]+v*(l[1]-c[1]),m[2]=c[2]+v*(l[2]-c[2]),m}function ne(c,l,v,_){const m=_??new p(3);return m[0]=c[0]+v[0]*(l[0]-c[0]),m[1]=c[1]+v[1]*(l[1]-c[1]),m[2]=c[2]+v[2]*(l[2]-c[2]),m}function Q(c,l,v){const _=v??new p(3);return _[0]=Math.max(c[0],l[0]),_[1]=Math.max(c[1],l[1]),_[2]=Math.max(c[2],l[2]),_}function Z(c,l,v){const _=v??new p(3);return _[0]=Math.min(c[0],l[0]),_[1]=Math.min(c[1],l[1]),_[2]=Math.min(c[2],l[2]),_}function L(c,l,v){const _=v??new p(3);return _[0]=c[0]*l,_[1]=c[1]*l,_[2]=c[2]*l,_}const C=L;function de(c,l,v){const _=v??new p(3);return _[0]=c[0]/l,_[1]=c[1]/l,_[2]=c[2]/l,_}function ye(c,l){const v=l??new p(3);return v[0]=1/c[0],v[1]=1/c[1],v[2]=1/c[2],v}const he=ye;function ae(c,l,v){const _=v??new p(3),m=c[2]*l[0]-c[0]*l[2],y=c[0]*l[1]-c[1]*l[0];return _[0]=c[1]*l[2]-c[2]*l[1],_[1]=m,_[2]=y,_}function Me(c,l){return c[0]*l[0]+c[1]*l[1]+c[2]*l[2]}function ie(c){const l=c[0],v=c[1],_=c[2];return Math.sqrt(l*l+v*v+_*_)}const Se=ie;function R(c){const l=c[0],v=c[1],_=c[2];return l*l+v*v+_*_}const V=R;function U(c,l){const v=c[0]-l[0],_=c[1]-l[1],m=c[2]-l[2];return Math.sqrt(v*v+_*_+m*m)}const ve=U;function N(c,l){const v=c[0]-l[0],_=c[1]-l[1],m=c[2]-l[2];return v*v+_*_+m*m}const Pe=N;function ee(c,l){const v=l??new p(3),_=c[0],m=c[1],y=c[2],M=Math.sqrt(_*_+m*m+y*y);return M>1e-5?(v[0]=_/M,v[1]=m/M,v[2]=y/M):(v[0]=0,v[1]=0,v[2]=0),v}function ge(c,l){const v=l??new p(3);return v[0]=-c[0],v[1]=-c[1],v[2]=-c[2],v}function Y(c,l){const v=l??new p(3);return v[0]=c[0],v[1]=c[1],v[2]=c[2],v}const ce=Y;function se(c,l,v){const _=v??new p(3);return _[0]=c[0]*l[0],_[1]=c[1]*l[1],_[2]=c[2]*l[2],_}const Ie=se;function be(c,l,v){const _=v??new p(3);return _[0]=c[0]/l[0],_[1]=c[1]/l[1],_[2]=c[2]/l[2],_}const Te=be;function ze(c=1,l){const v=l??new p(3),_=Math.random()*2*Math.PI,m=Math.random()*2-1,y=Math.sqrt(1-m*m)*c;return v[0]=Math.cos(_)*y,v[1]=Math.sin(_)*y,v[2]=m*c,v}function i(c){const l=c??new p(3);return l[0]=0,l[1]=0,l[2]=0,l}function f(c,l,v){const _=v??new p(3),m=c[0],y=c[1],M=c[2],S=l[3]*m+l[7]*y+l[11]*M+l[15]||1;return _[0]=(l[0]*m+l[4]*y+l[8]*M+l[12])/S,_[1]=(l[1]*m+l[5]*y+l[9]*M+l[13])/S,_[2]=(l[2]*m+l[6]*y+l[10]*M+l[14])/S,_}function n(c,l,v){const _=v??new p(3),m=c[0],y=c[1],M=c[2];return _[0]=m*l[0*4+0]+y*l[1*4+0]+M*l[2*4+0],_[1]=m*l[0*4+1]+y*l[1*4+1]+M*l[2*4+1],_[2]=m*l[0*4+2]+y*l[1*4+2]+M*l[2*4+2],_}function s(c,l,v){const _=v??new p(3),m=c[0],y=c[1],M=c[2];return _[0]=m*l[0]+y*l[4]+M*l[8],_[1]=m*l[1]+y*l[5]+M*l[9],_[2]=m*l[2]+y*l[6]+M*l[10],_}function u(c,l,v){const _=v??new p(3),m=l[0],y=l[1],M=l[2],S=l[3]*2,I=c[0],F=c[1],T=c[2],E=y*T-M*F,k=M*I-m*T,te=m*F-y*I;return _[0]=I+E*S+(y*te-M*k)*2,_[1]=F+k*S+(M*E-m*te)*2,_[2]=T+te*S+(m*k-y*E)*2,_}function d(c,l){const v=l??new p(3);return v[0]=c[12],v[1]=c[13],v[2]=c[14],v}function x(c,l,v){const _=v??new p(3),m=l*4;return _[0]=c[m+0],_[1]=c[m+1],_[2]=c[m+2],_}function e(c,l){const v=l??new p(3),_=c[0],m=c[1],y=c[2],M=c[4],S=c[5],I=c[6],F=c[8],T=c[9],E=c[10];return v[0]=Math.sqrt(_*_+m*m+y*y),v[1]=Math.sqrt(M*M+S*S+I*I),v[2]=Math.sqrt(F*F+T*T+E*E),v}function o(c,l,v,_){const m=_??new p(3),y=[],M=[];return y[0]=c[0]-l[0],y[1]=c[1]-l[1],y[2]=c[2]-l[2],M[0]=y[0],M[1]=y[1]*Math.cos(v)-y[2]*Math.sin(v),M[2]=y[1]*Math.sin(v)+y[2]*Math.cos(v),m[0]=M[0]+l[0],m[1]=M[1]+l[1],m[2]=M[2]+l[2],m}function t(c,l,v,_){const m=_??new p(3),y=[],M=[];return y[0]=c[0]-l[0],y[1]=c[1]-l[1],y[2]=c[2]-l[2],M[0]=y[2]*Math.sin(v)+y[0]*Math.cos(v),M[1]=y[1],M[2]=y[2]*Math.cos(v)-y[0]*Math.sin(v),m[0]=M[0]+l[0],m[1]=M[1]+l[1],m[2]=M[2]+l[2],m}function r(c,l,v,_){const m=_??new p(3),y=[],M=[];return y[0]=c[0]-l[0],y[1]=c[1]-l[1],y[2]=c[2]-l[2],M[0]=y[0]*Math.cos(v)-y[1]*Math.sin(v),M[1]=y[0]*Math.sin(v)+y[1]*Math.cos(v),M[2]=y[2],m[0]=M[0]+l[0],m[1]=M[1]+l[1],m[2]=M[2]+l[2],m}function a(c,l,v){const _=v??new p(3);return ee(c,_),L(_,l,_)}function g(c,l,v){const _=v??new p(3);return ie(c)>l?a(c,l,_):Y(c,_)}function w(c,l,v){const _=v??new p(3);return G(c,l,.5,_)}return{create:h,fromValues:z,set:B,ceil:P,floor:A,round:D,clamp:q,add:$,addScaled:J,angle:H,subtract:X,sub:K,equalsApproximately:W,equals:j,lerp:G,lerpV:ne,max:Q,min:Z,mulScalar:L,scale:C,divScalar:de,inverse:ye,invert:he,cross:ae,dot:Me,length:ie,len:Se,lengthSq:R,lenSq:V,distance:U,dist:ve,distanceSq:N,distSq:Pe,normalize:ee,negate:ge,copy:Y,clone:ce,multiply:se,mul:Ie,divide:be,div:Te,random:ze,zero:i,transformMat4:f,transformMat4Upper3x3:n,transformMat3:s,transformQuat:u,getTranslation:d,getAxis:x,getScaling:e,rotateX:o,rotateY:t,rotateZ:r,setLength:a,truncate:g,midpoint:w}}const et=new Map;function We(p){let h=et.get(p);return h||(h=ft(p),et.set(p,h)),h}function pt(p){const h=st(p),z=We(p);function B(i,f,n,s,u,d,x,e,o){const t=new p(12);return t[3]=0,t[7]=0,t[11]=0,i!==void 0&&(t[0]=i,f!==void 0&&(t[1]=f,n!==void 0&&(t[2]=n,s!==void 0&&(t[4]=s,u!==void 0&&(t[5]=u,d!==void 0&&(t[6]=d,x!==void 0&&(t[8]=x,e!==void 0&&(t[9]=e,o!==void 0&&(t[10]=o))))))))),t}function P(i,f,n,s,u,d,x,e,o,t){const r=t??new p(12);return r[0]=i,r[1]=f,r[2]=n,r[3]=0,r[4]=s,r[5]=u,r[6]=d,r[7]=0,r[8]=x,r[9]=e,r[10]=o,r[11]=0,r}function A(i,f){const n=f??new p(12);return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=0,n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=0,n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=0,n}function D(i,f){const n=f??new p(12),s=i[0],u=i[1],d=i[2],x=i[3],e=s+s,o=u+u,t=d+d,r=s*e,a=u*e,g=u*o,w=d*e,c=d*o,l=d*t,v=x*e,_=x*o,m=x*t;return n[0]=1-g-l,n[1]=a+m,n[2]=w-_,n[3]=0,n[4]=a-m,n[5]=1-r-l,n[6]=c+v,n[7]=0,n[8]=w+_,n[9]=c-v,n[10]=1-r-g,n[11]=0,n}function q(i,f){const n=f??new p(12);return n[0]=-i[0],n[1]=-i[1],n[2]=-i[2],n[4]=-i[4],n[5]=-i[5],n[6]=-i[6],n[8]=-i[8],n[9]=-i[9],n[10]=-i[10],n}function $(i,f){const n=f??new p(12);return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[8]=i[8],n[9]=i[9],n[10]=i[10],n}const J=$;function H(i,f){return Math.abs(i[0]-f[0])<O&&Math.abs(i[1]-f[1])<O&&Math.abs(i[2]-f[2])<O&&Math.abs(i[4]-f[4])<O&&Math.abs(i[5]-f[5])<O&&Math.abs(i[6]-f[6])<O&&Math.abs(i[8]-f[8])<O&&Math.abs(i[9]-f[9])<O&&Math.abs(i[10]-f[10])<O}function X(i,f){return i[0]===f[0]&&i[1]===f[1]&&i[2]===f[2]&&i[4]===f[4]&&i[5]===f[5]&&i[6]===f[6]&&i[8]===f[8]&&i[9]===f[9]&&i[10]===f[10]}function K(i){const f=i??new p(12);return f[0]=1,f[1]=0,f[2]=0,f[4]=0,f[5]=1,f[6]=0,f[8]=0,f[9]=0,f[10]=1,f}function W(i,f){const n=f??new p(12);if(n===i){let g;return g=i[1],i[1]=i[4],i[4]=g,g=i[2],i[2]=i[8],i[8]=g,g=i[6],i[6]=i[9],i[9]=g,n}const s=i[0*4+0],u=i[0*4+1],d=i[0*4+2],x=i[1*4+0],e=i[1*4+1],o=i[1*4+2],t=i[2*4+0],r=i[2*4+1],a=i[2*4+2];return n[0]=s,n[1]=x,n[2]=t,n[4]=u,n[5]=e,n[6]=r,n[8]=d,n[9]=o,n[10]=a,n}function j(i,f){const n=f??new p(12),s=i[0*4+0],u=i[0*4+1],d=i[0*4+2],x=i[1*4+0],e=i[1*4+1],o=i[1*4+2],t=i[2*4+0],r=i[2*4+1],a=i[2*4+2],g=a*e-o*r,w=-a*x+o*t,c=r*x-e*t,l=1/(s*g+u*w+d*c);return n[0]=g*l,n[1]=(-a*u+d*r)*l,n[2]=(o*u-d*e)*l,n[4]=w*l,n[5]=(a*s-d*t)*l,n[6]=(-o*s+d*x)*l,n[8]=c*l,n[9]=(-r*s+u*t)*l,n[10]=(e*s-u*x)*l,n}function G(i){const f=i[0],n=i[0*4+1],s=i[0*4+2],u=i[1*4+0],d=i[1*4+1],x=i[1*4+2],e=i[2*4+0],o=i[2*4+1],t=i[2*4+2];return f*(d*t-o*x)-u*(n*t-o*s)+e*(n*x-d*s)}const ne=j;function Q(i,f,n){const s=n??new p(12),u=i[0],d=i[1],x=i[2],e=i[4],o=i[5],t=i[6],r=i[8],a=i[9],g=i[10],w=f[0],c=f[1],l=f[2],v=f[4],_=f[5],m=f[6],y=f[8],M=f[9],S=f[10];return s[0]=u*w+e*c+r*l,s[1]=d*w+o*c+a*l,s[2]=x*w+t*c+g*l,s[4]=u*v+e*_+r*m,s[5]=d*v+o*_+a*m,s[6]=x*v+t*_+g*m,s[8]=u*y+e*M+r*S,s[9]=d*y+o*M+a*S,s[10]=x*y+t*M+g*S,s}const Z=Q;function L(i,f,n){const s=n??K();return i!==s&&(s[0]=i[0],s[1]=i[1],s[2]=i[2],s[4]=i[4],s[5]=i[5],s[6]=i[6]),s[8]=f[0],s[9]=f[1],s[10]=1,s}function C(i,f){const n=f??h.create();return n[0]=i[8],n[1]=i[9],n}function de(i,f,n){const s=n??h.create(),u=f*4;return s[0]=i[u+0],s[1]=i[u+1],s}function ye(i,f,n,s){const u=s===i?i:$(i,s),d=n*4;return u[d+0]=f[0],u[d+1]=f[1],u}function he(i,f){const n=f??h.create(),s=i[0],u=i[1],d=i[4],x=i[5];return n[0]=Math.sqrt(s*s+u*u),n[1]=Math.sqrt(d*d+x*x),n}function ae(i,f){const n=f??z.create(),s=i[0],u=i[1],d=i[2],x=i[4],e=i[5],o=i[6],t=i[8],r=i[9],a=i[10];return n[0]=Math.sqrt(s*s+u*u+d*d),n[1]=Math.sqrt(x*x+e*e+o*o),n[2]=Math.sqrt(t*t+r*r+a*a),n}function Me(i,f){const n=f??new p(12);return n[0]=1,n[1]=0,n[2]=0,n[4]=0,n[5]=1,n[6]=0,n[8]=i[0],n[9]=i[1],n[10]=1,n}function ie(i,f,n){const s=n??new p(12),u=f[0],d=f[1],x=i[0],e=i[1],o=i[2],t=i[1*4+0],r=i[1*4+1],a=i[1*4+2],g=i[2*4+0],w=i[2*4+1],c=i[2*4+2];return i!==s&&(s[0]=x,s[1]=e,s[2]=o,s[4]=t,s[5]=r,s[6]=a),s[8]=x*u+t*d+g,s[9]=e*u+r*d+w,s[10]=o*u+a*d+c,s}function Se(i,f){const n=f??new p(12),s=Math.cos(i),u=Math.sin(i);return n[0]=s,n[1]=u,n[2]=0,n[4]=-u,n[5]=s,n[6]=0,n[8]=0,n[9]=0,n[10]=1,n}function R(i,f,n){const s=n??new p(12),u=i[0*4+0],d=i[0*4+1],x=i[0*4+2],e=i[1*4+0],o=i[1*4+1],t=i[1*4+2],r=Math.cos(f),a=Math.sin(f);return s[0]=r*u+a*e,s[1]=r*d+a*o,s[2]=r*x+a*t,s[4]=r*e-a*u,s[5]=r*o-a*d,s[6]=r*t-a*x,i!==s&&(s[8]=i[8],s[9]=i[9],s[10]=i[10]),s}function V(i,f){const n=f??new p(12),s=Math.cos(i),u=Math.sin(i);return n[0]=1,n[1]=0,n[2]=0,n[4]=0,n[5]=s,n[6]=u,n[8]=0,n[9]=-u,n[10]=s,n}function U(i,f,n){const s=n??new p(12),u=i[4],d=i[5],x=i[6],e=i[8],o=i[9],t=i[10],r=Math.cos(f),a=Math.sin(f);return s[4]=r*u+a*e,s[5]=r*d+a*o,s[6]=r*x+a*t,s[8]=r*e-a*u,s[9]=r*o-a*d,s[10]=r*t-a*x,i!==s&&(s[0]=i[0],s[1]=i[1],s[2]=i[2]),s}function ve(i,f){const n=f??new p(12),s=Math.cos(i),u=Math.sin(i);return n[0]=s,n[1]=0,n[2]=-u,n[4]=0,n[5]=1,n[6]=0,n[8]=u,n[9]=0,n[10]=s,n}function N(i,f,n){const s=n??new p(12),u=i[0*4+0],d=i[0*4+1],x=i[0*4+2],e=i[2*4+0],o=i[2*4+1],t=i[2*4+2],r=Math.cos(f),a=Math.sin(f);return s[0]=r*u-a*e,s[1]=r*d-a*o,s[2]=r*x-a*t,s[8]=r*e+a*u,s[9]=r*o+a*d,s[10]=r*t+a*x,i!==s&&(s[4]=i[4],s[5]=i[5],s[6]=i[6]),s}const Pe=Se,ee=R;function ge(i,f){const n=f??new p(12);return n[0]=i[0],n[1]=0,n[2]=0,n[4]=0,n[5]=i[1],n[6]=0,n[8]=0,n[9]=0,n[10]=1,n}function Y(i,f,n){const s=n??new p(12),u=f[0],d=f[1];return s[0]=u*i[0*4+0],s[1]=u*i[0*4+1],s[2]=u*i[0*4+2],s[4]=d*i[1*4+0],s[5]=d*i[1*4+1],s[6]=d*i[1*4+2],i!==s&&(s[8]=i[8],s[9]=i[9],s[10]=i[10]),s}function ce(i,f){const n=f??new p(12);return n[0]=i[0],n[1]=0,n[2]=0,n[4]=0,n[5]=i[1],n[6]=0,n[8]=0,n[9]=0,n[10]=i[2],n}function se(i,f,n){const s=n??new p(12),u=f[0],d=f[1],x=f[2];return s[0]=u*i[0*4+0],s[1]=u*i[0*4+1],s[2]=u*i[0*4+2],s[4]=d*i[1*4+0],s[5]=d*i[1*4+1],s[6]=d*i[1*4+2],s[8]=x*i[2*4+0],s[9]=x*i[2*4+1],s[10]=x*i[2*4+2],s}function Ie(i,f){const n=f??new p(12);return n[0]=i,n[1]=0,n[2]=0,n[4]=0,n[5]=i,n[6]=0,n[8]=0,n[9]=0,n[10]=1,n}function be(i,f,n){const s=n??new p(12);return s[0]=f*i[0*4+0],s[1]=f*i[0*4+1],s[2]=f*i[0*4+2],s[4]=f*i[1*4+0],s[5]=f*i[1*4+1],s[6]=f*i[1*4+2],i!==s&&(s[8]=i[8],s[9]=i[9],s[10]=i[10]),s}function Te(i,f){const n=f??new p(12);return n[0]=i,n[1]=0,n[2]=0,n[4]=0,n[5]=i,n[6]=0,n[8]=0,n[9]=0,n[10]=i,n}function ze(i,f,n){const s=n??new p(12);return s[0]=f*i[0*4+0],s[1]=f*i[0*4+1],s[2]=f*i[0*4+2],s[4]=f*i[1*4+0],s[5]=f*i[1*4+1],s[6]=f*i[1*4+2],s[8]=f*i[2*4+0],s[9]=f*i[2*4+1],s[10]=f*i[2*4+2],s}return{clone:J,create:B,set:P,fromMat4:A,fromQuat:D,negate:q,copy:$,equalsApproximately:H,equals:X,identity:K,transpose:W,inverse:j,invert:ne,determinant:G,mul:Z,multiply:Q,setTranslation:L,getTranslation:C,getAxis:de,setAxis:ye,getScaling:he,get3DScaling:ae,translation:Me,translate:ie,rotation:Se,rotate:R,rotationX:V,rotateX:U,rotationY:ve,rotateY:N,rotationZ:Pe,rotateZ:ee,scaling:ge,scale:Y,uniformScaling:Ie,uniformScale:be,scaling3D:ce,scale3D:se,uniformScaling3D:Te,uniformScale3D:ze}}const tt=new Map;function dt(p){let h=tt.get(p);return h||(h=pt(p),tt.set(p,h)),h}function ht(p){const h=We(p);function z(e,o,t,r,a,g,w,c,l,v,_,m,y,M,S,I){const F=new p(16);return e!==void 0&&(F[0]=e,o!==void 0&&(F[1]=o,t!==void 0&&(F[2]=t,r!==void 0&&(F[3]=r,a!==void 0&&(F[4]=a,g!==void 0&&(F[5]=g,w!==void 0&&(F[6]=w,c!==void 0&&(F[7]=c,l!==void 0&&(F[8]=l,v!==void 0&&(F[9]=v,_!==void 0&&(F[10]=_,m!==void 0&&(F[11]=m,y!==void 0&&(F[12]=y,M!==void 0&&(F[13]=M,S!==void 0&&(F[14]=S,I!==void 0&&(F[15]=I)))))))))))))))),F}function B(e,o,t,r,a,g,w,c,l,v,_,m,y,M,S,I,F){const T=F??new p(16);return T[0]=e,T[1]=o,T[2]=t,T[3]=r,T[4]=a,T[5]=g,T[6]=w,T[7]=c,T[8]=l,T[9]=v,T[10]=_,T[11]=m,T[12]=y,T[13]=M,T[14]=S,T[15]=I,T}function P(e,o){const t=o??new p(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=0,t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function A(e,o){const t=o??new p(16),r=e[0],a=e[1],g=e[2],w=e[3],c=r+r,l=a+a,v=g+g,_=r*c,m=a*c,y=a*l,M=g*c,S=g*l,I=g*v,F=w*c,T=w*l,E=w*v;return t[0]=1-y-I,t[1]=m+E,t[2]=M-T,t[3]=0,t[4]=m-E,t[5]=1-_-I,t[6]=S+F,t[7]=0,t[8]=M+T,t[9]=S-F,t[10]=1-_-y,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function D(e,o){const t=o??new p(16);return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t[4]=-e[4],t[5]=-e[5],t[6]=-e[6],t[7]=-e[7],t[8]=-e[8],t[9]=-e[9],t[10]=-e[10],t[11]=-e[11],t[12]=-e[12],t[13]=-e[13],t[14]=-e[14],t[15]=-e[15],t}function q(e,o){const t=o??new p(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}const $=q;function J(e,o){return Math.abs(e[0]-o[0])<O&&Math.abs(e[1]-o[1])<O&&Math.abs(e[2]-o[2])<O&&Math.abs(e[3]-o[3])<O&&Math.abs(e[4]-o[4])<O&&Math.abs(e[5]-o[5])<O&&Math.abs(e[6]-o[6])<O&&Math.abs(e[7]-o[7])<O&&Math.abs(e[8]-o[8])<O&&Math.abs(e[9]-o[9])<O&&Math.abs(e[10]-o[10])<O&&Math.abs(e[11]-o[11])<O&&Math.abs(e[12]-o[12])<O&&Math.abs(e[13]-o[13])<O&&Math.abs(e[14]-o[14])<O&&Math.abs(e[15]-o[15])<O}function H(e,o){return e[0]===o[0]&&e[1]===o[1]&&e[2]===o[2]&&e[3]===o[3]&&e[4]===o[4]&&e[5]===o[5]&&e[6]===o[6]&&e[7]===o[7]&&e[8]===o[8]&&e[9]===o[9]&&e[10]===o[10]&&e[11]===o[11]&&e[12]===o[12]&&e[13]===o[13]&&e[14]===o[14]&&e[15]===o[15]}function X(e){const o=e??new p(16);return o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=1,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=1,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,o}function K(e,o){const t=o??new p(16);if(t===e){let k;return k=e[1],e[1]=e[4],e[4]=k,k=e[2],e[2]=e[8],e[8]=k,k=e[3],e[3]=e[12],e[12]=k,k=e[6],e[6]=e[9],e[9]=k,k=e[7],e[7]=e[13],e[13]=k,k=e[11],e[11]=e[14],e[14]=k,t}const r=e[0*4+0],a=e[0*4+1],g=e[0*4+2],w=e[0*4+3],c=e[1*4+0],l=e[1*4+1],v=e[1*4+2],_=e[1*4+3],m=e[2*4+0],y=e[2*4+1],M=e[2*4+2],S=e[2*4+3],I=e[3*4+0],F=e[3*4+1],T=e[3*4+2],E=e[3*4+3];return t[0]=r,t[1]=c,t[2]=m,t[3]=I,t[4]=a,t[5]=l,t[6]=y,t[7]=F,t[8]=g,t[9]=v,t[10]=M,t[11]=T,t[12]=w,t[13]=_,t[14]=S,t[15]=E,t}function W(e,o){const t=o??new p(16),r=e[0*4+0],a=e[0*4+1],g=e[0*4+2],w=e[0*4+3],c=e[1*4+0],l=e[1*4+1],v=e[1*4+2],_=e[1*4+3],m=e[2*4+0],y=e[2*4+1],M=e[2*4+2],S=e[2*4+3],I=e[3*4+0],F=e[3*4+1],T=e[3*4+2],E=e[3*4+3],k=M*E,te=T*S,oe=v*E,re=T*_,le=v*S,ue=M*_,_e=g*E,fe=T*w,me=g*S,pe=M*w,Be=g*_,xe=v*w,De=m*F,we=I*y,Ve=c*F,Ae=I*l,Ge=c*y,qe=m*l,Ee=r*F,Re=I*a,Ye=r*y,Le=m*a,Ne=r*l,je=c*a,Qe=k*l+re*y+le*F-(te*l+oe*y+ue*F),Ze=te*a+_e*y+pe*F-(k*a+fe*y+me*F),Ce=oe*a+fe*l+Be*F-(re*a+_e*l+xe*F),Je=ue*a+me*l+xe*y-(le*a+pe*l+Be*y),Fe=1/(r*Qe+c*Ze+m*Ce+I*Je);return t[0]=Fe*Qe,t[1]=Fe*Ze,t[2]=Fe*Ce,t[3]=Fe*Je,t[4]=Fe*(te*c+oe*m+ue*I-(k*c+re*m+le*I)),t[5]=Fe*(k*r+fe*m+me*I-(te*r+_e*m+pe*I)),t[6]=Fe*(re*r+_e*c+xe*I-(oe*r+fe*c+Be*I)),t[7]=Fe*(le*r+pe*c+Be*m-(ue*r+me*c+xe*m)),t[8]=Fe*(De*_+Ae*S+Ge*E-(we*_+Ve*S+qe*E)),t[9]=Fe*(we*w+Ee*S+Le*E-(De*w+Re*S+Ye*E)),t[10]=Fe*(Ve*w+Re*_+Ne*E-(Ae*w+Ee*_+je*E)),t[11]=Fe*(qe*w+Ye*_+je*S-(Ge*w+Le*_+Ne*S)),t[12]=Fe*(Ve*M+qe*T+we*v-(Ge*T+De*v+Ae*M)),t[13]=Fe*(Ye*T+De*g+Re*M-(Ee*M+Le*T+we*g)),t[14]=Fe*(Ee*v+je*T+Ae*g-(Ne*T+Ve*g+Re*v)),t[15]=Fe*(Ne*M+Ge*g+Le*v-(Ye*v+je*M+qe*g)),t}function j(e){const o=e[0],t=e[0*4+1],r=e[0*4+2],a=e[0*4+3],g=e[1*4+0],w=e[1*4+1],c=e[1*4+2],l=e[1*4+3],v=e[2*4+0],_=e[2*4+1],m=e[2*4+2],y=e[2*4+3],M=e[3*4+0],S=e[3*4+1],I=e[3*4+2],F=e[3*4+3],T=m*F,E=I*y,k=c*F,te=I*l,oe=c*y,re=m*l,le=r*F,ue=I*a,_e=r*y,fe=m*a,me=r*l,pe=c*a,Be=T*w+te*_+oe*S-(E*w+k*_+re*S),xe=E*t+le*_+fe*S-(T*t+ue*_+_e*S),De=k*t+ue*w+me*S-(te*t+le*w+pe*S),we=re*t+_e*w+pe*_-(oe*t+fe*w+me*_);return o*Be+g*xe+v*De+M*we}const G=W;function ne(e,o,t){const r=t??new p(16),a=e[0],g=e[1],w=e[2],c=e[3],l=e[4],v=e[5],_=e[6],m=e[7],y=e[8],M=e[9],S=e[10],I=e[11],F=e[12],T=e[13],E=e[14],k=e[15],te=o[0],oe=o[1],re=o[2],le=o[3],ue=o[4],_e=o[5],fe=o[6],me=o[7],pe=o[8],Be=o[9],xe=o[10],De=o[11],we=o[12],Ve=o[13],Ae=o[14],Ge=o[15];return r[0]=a*te+l*oe+y*re+F*le,r[1]=g*te+v*oe+M*re+T*le,r[2]=w*te+_*oe+S*re+E*le,r[3]=c*te+m*oe+I*re+k*le,r[4]=a*ue+l*_e+y*fe+F*me,r[5]=g*ue+v*_e+M*fe+T*me,r[6]=w*ue+_*_e+S*fe+E*me,r[7]=c*ue+m*_e+I*fe+k*me,r[8]=a*pe+l*Be+y*xe+F*De,r[9]=g*pe+v*Be+M*xe+T*De,r[10]=w*pe+_*Be+S*xe+E*De,r[11]=c*pe+m*Be+I*xe+k*De,r[12]=a*we+l*Ve+y*Ae+F*Ge,r[13]=g*we+v*Ve+M*Ae+T*Ge,r[14]=w*we+_*Ve+S*Ae+E*Ge,r[15]=c*we+m*Ve+I*Ae+k*Ge,r}const Q=ne;function Z(e,o,t){const r=t??X();return e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11]),r[12]=o[0],r[13]=o[1],r[14]=o[2],r[15]=1,r}function L(e,o){const t=o??h.create();return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function C(e,o,t){const r=t??h.create(),a=o*4;return r[0]=e[a+0],r[1]=e[a+1],r[2]=e[a+2],r}function de(e,o,t,r){const a=r===e?r:q(e,r),g=t*4;return a[g+0]=o[0],a[g+1]=o[1],a[g+2]=o[2],a}function ye(e,o){const t=o??h.create(),r=e[0],a=e[1],g=e[2],w=e[4],c=e[5],l=e[6],v=e[8],_=e[9],m=e[10];return t[0]=Math.sqrt(r*r+a*a+g*g),t[1]=Math.sqrt(w*w+c*c+l*l),t[2]=Math.sqrt(v*v+_*_+m*m),t}function he(e,o,t,r,a){const g=a??new p(16),w=Math.tan(Math.PI*.5-.5*e);if(g[0]=w/o,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=w,g[6]=0,g[7]=0,g[8]=0,g[9]=0,g[11]=-1,g[12]=0,g[13]=0,g[15]=0,Number.isFinite(r)){const c=1/(t-r);g[10]=r*c,g[14]=r*t*c}else g[10]=-1,g[14]=-t;return g}function ae(e,o,t,r=1/0,a){const g=a??new p(16),w=1/Math.tan(e*.5);if(g[0]=w/o,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=w,g[6]=0,g[7]=0,g[8]=0,g[9]=0,g[11]=-1,g[12]=0,g[13]=0,g[15]=0,r===1/0)g[10]=0,g[14]=t;else{const c=1/(r-t);g[10]=t*c,g[14]=r*t*c}return g}function Me(e,o,t,r,a,g,w){const c=w??new p(16);return c[0]=2/(o-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(r-t),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1/(a-g),c[11]=0,c[12]=(o+e)/(e-o),c[13]=(r+t)/(t-r),c[14]=a/(a-g),c[15]=1,c}function ie(e,o,t,r,a,g,w){const c=w??new p(16),l=o-e,v=r-t,_=a-g;return c[0]=2*a/l,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*a/v,c[6]=0,c[7]=0,c[8]=(e+o)/l,c[9]=(r+t)/v,c[10]=g/_,c[11]=-1,c[12]=0,c[13]=0,c[14]=a*g/_,c[15]=0,c}function Se(e,o,t,r,a,g=1/0,w){const c=w??new p(16),l=o-e,v=r-t;if(c[0]=2*a/l,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*a/v,c[6]=0,c[7]=0,c[8]=(e+o)/l,c[9]=(r+t)/v,c[11]=-1,c[12]=0,c[13]=0,c[15]=0,g===1/0)c[10]=0,c[14]=a;else{const _=1/(g-a);c[10]=a*_,c[14]=g*a*_}return c}const R=h.create(),V=h.create(),U=h.create();function ve(e,o,t,r){const a=r??new p(16);return h.normalize(h.subtract(o,e,U),U),h.normalize(h.cross(t,U,R),R),h.normalize(h.cross(U,R,V),V),a[0]=R[0],a[1]=R[1],a[2]=R[2],a[3]=0,a[4]=V[0],a[5]=V[1],a[6]=V[2],a[7]=0,a[8]=U[0],a[9]=U[1],a[10]=U[2],a[11]=0,a[12]=e[0],a[13]=e[1],a[14]=e[2],a[15]=1,a}function N(e,o,t,r){const a=r??new p(16);return h.normalize(h.subtract(e,o,U),U),h.normalize(h.cross(t,U,R),R),h.normalize(h.cross(U,R,V),V),a[0]=R[0],a[1]=R[1],a[2]=R[2],a[3]=0,a[4]=V[0],a[5]=V[1],a[6]=V[2],a[7]=0,a[8]=U[0],a[9]=U[1],a[10]=U[2],a[11]=0,a[12]=e[0],a[13]=e[1],a[14]=e[2],a[15]=1,a}function Pe(e,o,t,r){const a=r??new p(16);return h.normalize(h.subtract(e,o,U),U),h.normalize(h.cross(t,U,R),R),h.normalize(h.cross(U,R,V),V),a[0]=R[0],a[1]=V[0],a[2]=U[0],a[3]=0,a[4]=R[1],a[5]=V[1],a[6]=U[1],a[7]=0,a[8]=R[2],a[9]=V[2],a[10]=U[2],a[11]=0,a[12]=-(R[0]*e[0]+R[1]*e[1]+R[2]*e[2]),a[13]=-(V[0]*e[0]+V[1]*e[1]+V[2]*e[2]),a[14]=-(U[0]*e[0]+U[1]*e[1]+U[2]*e[2]),a[15]=1,a}function ee(e,o){const t=o??new p(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}function ge(e,o,t){const r=t??new p(16),a=o[0],g=o[1],w=o[2],c=e[0],l=e[1],v=e[2],_=e[3],m=e[1*4+0],y=e[1*4+1],M=e[1*4+2],S=e[1*4+3],I=e[2*4+0],F=e[2*4+1],T=e[2*4+2],E=e[2*4+3],k=e[3*4+0],te=e[3*4+1],oe=e[3*4+2],re=e[3*4+3];return e!==r&&(r[0]=c,r[1]=l,r[2]=v,r[3]=_,r[4]=m,r[5]=y,r[6]=M,r[7]=S,r[8]=I,r[9]=F,r[10]=T,r[11]=E),r[12]=c*a+m*g+I*w+k,r[13]=l*a+y*g+F*w+te,r[14]=v*a+M*g+T*w+oe,r[15]=_*a+S*g+E*w+re,r}function Y(e,o){const t=o??new p(16),r=Math.cos(e),a=Math.sin(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=a,t[7]=0,t[8]=0,t[9]=-a,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function ce(e,o,t){const r=t??new p(16),a=e[4],g=e[5],w=e[6],c=e[7],l=e[8],v=e[9],_=e[10],m=e[11],y=Math.cos(o),M=Math.sin(o);return r[4]=y*a+M*l,r[5]=y*g+M*v,r[6]=y*w+M*_,r[7]=y*c+M*m,r[8]=y*l-M*a,r[9]=y*v-M*g,r[10]=y*_-M*w,r[11]=y*m-M*c,e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function se(e,o){const t=o??new p(16),r=Math.cos(e),a=Math.sin(e);return t[0]=r,t[1]=0,t[2]=-a,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=a,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Ie(e,o,t){const r=t??new p(16),a=e[0*4+0],g=e[0*4+1],w=e[0*4+2],c=e[0*4+3],l=e[2*4+0],v=e[2*4+1],_=e[2*4+2],m=e[2*4+3],y=Math.cos(o),M=Math.sin(o);return r[0]=y*a-M*l,r[1]=y*g-M*v,r[2]=y*w-M*_,r[3]=y*c-M*m,r[8]=y*l+M*a,r[9]=y*v+M*g,r[10]=y*_+M*w,r[11]=y*m+M*c,e!==r&&(r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function be(e,o){const t=o??new p(16),r=Math.cos(e),a=Math.sin(e);return t[0]=r,t[1]=a,t[2]=0,t[3]=0,t[4]=-a,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Te(e,o,t){const r=t??new p(16),a=e[0*4+0],g=e[0*4+1],w=e[0*4+2],c=e[0*4+3],l=e[1*4+0],v=e[1*4+1],_=e[1*4+2],m=e[1*4+3],y=Math.cos(o),M=Math.sin(o);return r[0]=y*a+M*l,r[1]=y*g+M*v,r[2]=y*w+M*_,r[3]=y*c+M*m,r[4]=y*l-M*a,r[5]=y*v-M*g,r[6]=y*_-M*w,r[7]=y*m-M*c,e!==r&&(r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function ze(e,o,t){const r=t??new p(16);let a=e[0],g=e[1],w=e[2];const c=Math.sqrt(a*a+g*g+w*w);a/=c,g/=c,w/=c;const l=a*a,v=g*g,_=w*w,m=Math.cos(o),y=Math.sin(o),M=1-m;return r[0]=l+(1-l)*m,r[1]=a*g*M+w*y,r[2]=a*w*M-g*y,r[3]=0,r[4]=a*g*M-w*y,r[5]=v+(1-v)*m,r[6]=g*w*M+a*y,r[7]=0,r[8]=a*w*M+g*y,r[9]=g*w*M-a*y,r[10]=_+(1-_)*m,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}const i=ze;function f(e,o,t,r){const a=r??new p(16);let g=o[0],w=o[1],c=o[2];const l=Math.sqrt(g*g+w*w+c*c);g/=l,w/=l,c/=l;const v=g*g,_=w*w,m=c*c,y=Math.cos(t),M=Math.sin(t),S=1-y,I=v+(1-v)*y,F=g*w*S+c*M,T=g*c*S-w*M,E=g*w*S-c*M,k=_+(1-_)*y,te=w*c*S+g*M,oe=g*c*S+w*M,re=w*c*S-g*M,le=m+(1-m)*y,ue=e[0],_e=e[1],fe=e[2],me=e[3],pe=e[4],Be=e[5],xe=e[6],De=e[7],we=e[8],Ve=e[9],Ae=e[10],Ge=e[11];return a[0]=I*ue+F*pe+T*we,a[1]=I*_e+F*Be+T*Ve,a[2]=I*fe+F*xe+T*Ae,a[3]=I*me+F*De+T*Ge,a[4]=E*ue+k*pe+te*we,a[5]=E*_e+k*Be+te*Ve,a[6]=E*fe+k*xe+te*Ae,a[7]=E*me+k*De+te*Ge,a[8]=oe*ue+re*pe+le*we,a[9]=oe*_e+re*Be+le*Ve,a[10]=oe*fe+re*xe+le*Ae,a[11]=oe*me+re*De+le*Ge,e!==a&&(a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15]),a}const n=f;function s(e,o){const t=o??new p(16);return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function u(e,o,t){const r=t??new p(16),a=o[0],g=o[1],w=o[2];return r[0]=a*e[0*4+0],r[1]=a*e[0*4+1],r[2]=a*e[0*4+2],r[3]=a*e[0*4+3],r[4]=g*e[1*4+0],r[5]=g*e[1*4+1],r[6]=g*e[1*4+2],r[7]=g*e[1*4+3],r[8]=w*e[2*4+0],r[9]=w*e[2*4+1],r[10]=w*e[2*4+2],r[11]=w*e[2*4+3],e!==r&&(r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function d(e,o){const t=o??new p(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function x(e,o,t){const r=t??new p(16);return r[0]=o*e[0*4+0],r[1]=o*e[0*4+1],r[2]=o*e[0*4+2],r[3]=o*e[0*4+3],r[4]=o*e[1*4+0],r[5]=o*e[1*4+1],r[6]=o*e[1*4+2],r[7]=o*e[1*4+3],r[8]=o*e[2*4+0],r[9]=o*e[2*4+1],r[10]=o*e[2*4+2],r[11]=o*e[2*4+3],e!==r&&(r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}return{create:z,set:B,fromMat3:P,fromQuat:A,negate:D,copy:q,clone:$,equalsApproximately:J,equals:H,identity:X,transpose:K,inverse:W,determinant:j,invert:G,multiply:ne,mul:Q,setTranslation:Z,getTranslation:L,getAxis:C,setAxis:de,getScaling:ye,perspective:he,perspectiveReverseZ:ae,ortho:Me,frustum:ie,frustumReverseZ:Se,aim:ve,cameraAim:N,lookAt:Pe,translation:ee,translate:ge,rotationX:Y,rotateX:ce,rotationY:se,rotateY:Ie,rotationZ:be,rotateZ:Te,axisRotation:ze,rotation:i,axisRotate:f,rotate:n,scaling:s,scale:u,uniformScaling:d,uniformScale:x}}const nt=new Map;function vt(p){let h=nt.get(p);return h||(h=ht(p),nt.set(p,h)),h}function gt(p){const h=We(p);function z(i,f,n,s){const u=new p(4);return i!==void 0&&(u[0]=i,f!==void 0&&(u[1]=f,n!==void 0&&(u[2]=n,s!==void 0&&(u[3]=s)))),u}const B=z;function P(i,f,n,s,u){const d=u??new p(4);return d[0]=i,d[1]=f,d[2]=n,d[3]=s,d}function A(i,f,n){const s=n??new p(4),u=f*.5,d=Math.sin(u);return s[0]=d*i[0],s[1]=d*i[1],s[2]=d*i[2],s[3]=Math.cos(u),s}function D(i,f){const n=f??h.create(3),s=Math.acos(i[3])*2,u=Math.sin(s*.5);return u>O?(n[0]=i[0]/u,n[1]=i[1]/u,n[2]=i[2]/u):(n[0]=1,n[1]=0,n[2]=0),{angle:s,axis:n}}function q(i,f){const n=ie(i,f);return Math.acos(2*n*n-1)}function $(i,f,n){const s=n??new p(4),u=i[0],d=i[1],x=i[2],e=i[3],o=f[0],t=f[1],r=f[2],a=f[3];return s[0]=u*a+e*o+d*r-x*t,s[1]=d*a+e*t+x*o-u*r,s[2]=x*a+e*r+u*t-d*o,s[3]=e*a-u*o-d*t-x*r,s}const J=$;function H(i,f,n){const s=n??new p(4),u=f*.5,d=i[0],x=i[1],e=i[2],o=i[3],t=Math.sin(u),r=Math.cos(u);return s[0]=d*r+o*t,s[1]=x*r+e*t,s[2]=e*r-x*t,s[3]=o*r-d*t,s}function X(i,f,n){const s=n??new p(4),u=f*.5,d=i[0],x=i[1],e=i[2],o=i[3],t=Math.sin(u),r=Math.cos(u);return s[0]=d*r-e*t,s[1]=x*r+o*t,s[2]=e*r+d*t,s[3]=o*r-x*t,s}function K(i,f,n){const s=n??new p(4),u=f*.5,d=i[0],x=i[1],e=i[2],o=i[3],t=Math.sin(u),r=Math.cos(u);return s[0]=d*r+x*t,s[1]=x*r-d*t,s[2]=e*r+o*t,s[3]=o*r-e*t,s}function W(i,f,n,s){const u=s??new p(4),d=i[0],x=i[1],e=i[2],o=i[3];let t=f[0],r=f[1],a=f[2],g=f[3],w=d*t+x*r+e*a+o*g;w<0&&(w=-w,t=-t,r=-r,a=-a,g=-g);let c,l;if(1-w>O){const v=Math.acos(w),_=Math.sin(v);c=Math.sin((1-n)*v)/_,l=Math.sin(n*v)/_}else c=1-n,l=n;return u[0]=c*d+l*t,u[1]=c*x+l*r,u[2]=c*e+l*a,u[3]=c*o+l*g,u}function j(i,f){const n=f??new p(4),s=i[0],u=i[1],d=i[2],x=i[3],e=s*s+u*u+d*d+x*x,o=e?1/e:0;return n[0]=-s*o,n[1]=-u*o,n[2]=-d*o,n[3]=x*o,n}function G(i,f){const n=f??new p(4);return n[0]=-i[0],n[1]=-i[1],n[2]=-i[2],n[3]=i[3],n}function ne(i,f){const n=f??new p(4),s=i[0]+i[5]+i[10];if(s>0){const u=Math.sqrt(s+1);n[3]=.5*u;const d=.5/u;n[0]=(i[6]-i[9])*d,n[1]=(i[8]-i[2])*d,n[2]=(i[1]-i[4])*d}else{let u=0;i[5]>i[0]&&(u=1),i[10]>i[u*4+u]&&(u=2);const d=(u+1)%3,x=(u+2)%3,e=Math.sqrt(i[u*4+u]-i[d*4+d]-i[x*4+x]+1);n[u]=.5*e;const o=.5/e;n[3]=(i[d*4+x]-i[x*4+d])*o,n[d]=(i[d*4+u]+i[u*4+d])*o,n[x]=(i[x*4+u]+i[u*4+x])*o}return n}function Q(i,f,n,s,u){const d=u??new p(4),x=i*.5,e=f*.5,o=n*.5,t=Math.sin(x),r=Math.cos(x),a=Math.sin(e),g=Math.cos(e),w=Math.sin(o),c=Math.cos(o);switch(s){case"xyz":d[0]=t*g*c+r*a*w,d[1]=r*a*c-t*g*w,d[2]=r*g*w+t*a*c,d[3]=r*g*c-t*a*w;break;case"xzy":d[0]=t*g*c-r*a*w,d[1]=r*a*c-t*g*w,d[2]=r*g*w+t*a*c,d[3]=r*g*c+t*a*w;break;case"yxz":d[0]=t*g*c+r*a*w,d[1]=r*a*c-t*g*w,d[2]=r*g*w-t*a*c,d[3]=r*g*c+t*a*w;break;case"yzx":d[0]=t*g*c+r*a*w,d[1]=r*a*c+t*g*w,d[2]=r*g*w-t*a*c,d[3]=r*g*c-t*a*w;break;case"zxy":d[0]=t*g*c-r*a*w,d[1]=r*a*c+t*g*w,d[2]=r*g*w+t*a*c,d[3]=r*g*c-t*a*w;break;case"zyx":d[0]=t*g*c-r*a*w,d[1]=r*a*c+t*g*w,d[2]=r*g*w-t*a*c,d[3]=r*g*c+t*a*w;break;default:throw new Error(`Unknown rotation order: ${s}`)}return d}function Z(i,f){const n=f??new p(4);return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n}const L=Z;function C(i,f,n){const s=n??new p(4);return s[0]=i[0]+f[0],s[1]=i[1]+f[1],s[2]=i[2]+f[2],s[3]=i[3]+f[3],s}function de(i,f,n){const s=n??new p(4);return s[0]=i[0]-f[0],s[1]=i[1]-f[1],s[2]=i[2]-f[2],s[3]=i[3]-f[3],s}const ye=de;function he(i,f,n){const s=n??new p(4);return s[0]=i[0]*f,s[1]=i[1]*f,s[2]=i[2]*f,s[3]=i[3]*f,s}const ae=he;function Me(i,f,n){const s=n??new p(4);return s[0]=i[0]/f,s[1]=i[1]/f,s[2]=i[2]/f,s[3]=i[3]/f,s}function ie(i,f){return i[0]*f[0]+i[1]*f[1]+i[2]*f[2]+i[3]*f[3]}function Se(i,f,n,s){const u=s??new p(4);return u[0]=i[0]+n*(f[0]-i[0]),u[1]=i[1]+n*(f[1]-i[1]),u[2]=i[2]+n*(f[2]-i[2]),u[3]=i[3]+n*(f[3]-i[3]),u}function R(i){const f=i[0],n=i[1],s=i[2],u=i[3];return Math.sqrt(f*f+n*n+s*s+u*u)}const V=R;function U(i){const f=i[0],n=i[1],s=i[2],u=i[3];return f*f+n*n+s*s+u*u}const ve=U;function N(i,f){const n=f??new p(4),s=i[0],u=i[1],d=i[2],x=i[3],e=Math.sqrt(s*s+u*u+d*d+x*x);return e>1e-5?(n[0]=s/e,n[1]=u/e,n[2]=d/e,n[3]=x/e):(n[0]=0,n[1]=0,n[2]=0,n[3]=1),n}function Pe(i,f){return Math.abs(i[0]-f[0])<O&&Math.abs(i[1]-f[1])<O&&Math.abs(i[2]-f[2])<O&&Math.abs(i[3]-f[3])<O}function ee(i,f){return i[0]===f[0]&&i[1]===f[1]&&i[2]===f[2]&&i[3]===f[3]}function ge(i){const f=i??new p(4);return f[0]=0,f[1]=0,f[2]=0,f[3]=1,f}const Y=h.create(),ce=h.create(),se=h.create();function Ie(i,f,n){const s=n??new p(4),u=h.dot(i,f);return u<-.999999?(h.cross(ce,i,Y),h.len(Y)<1e-6&&h.cross(se,i,Y),h.normalize(Y,Y),A(Y,Math.PI,s),s):u>.999999?(s[0]=0,s[1]=0,s[2]=0,s[3]=1,s):(h.cross(i,f,Y),s[0]=Y[0],s[1]=Y[1],s[2]=Y[2],s[3]=1+u,N(s,s))}const be=new p(4),Te=new p(4);function ze(i,f,n,s,u,d){const x=d??new p(4);return W(i,s,u,be),W(f,n,u,Te),W(be,Te,2*u*(1-u),x),x}return{create:z,fromValues:B,set:P,fromAxisAngle:A,toAxisAngle:D,angle:q,multiply:$,mul:J,rotateX:H,rotateY:X,rotateZ:K,slerp:W,inverse:j,conjugate:G,fromMat:ne,fromEuler:Q,copy:Z,clone:L,add:C,subtract:de,sub:ye,mulScalar:he,scale:ae,divScalar:Me,dot:ie,lerp:Se,length:R,len:V,lengthSq:U,lenSq:ve,normalize:N,equalsApproximately:Pe,equals:ee,identity:ge,rotationTo:Ie,sqlerp:ze}}const rt=new Map;function _t(p){let h=rt.get(p);return h||(h=gt(p),rt.set(p,h)),h}function mt(p){function h(n,s,u,d){const x=new p(4);return n!==void 0&&(x[0]=n,s!==void 0&&(x[1]=s,u!==void 0&&(x[2]=u,d!==void 0&&(x[3]=d)))),x}const z=h;function B(n,s,u,d,x){const e=x??new p(4);return e[0]=n,e[1]=s,e[2]=u,e[3]=d,e}function P(n,s){const u=s??new p(4);return u[0]=Math.ceil(n[0]),u[1]=Math.ceil(n[1]),u[2]=Math.ceil(n[2]),u[3]=Math.ceil(n[3]),u}function A(n,s){const u=s??new p(4);return u[0]=Math.floor(n[0]),u[1]=Math.floor(n[1]),u[2]=Math.floor(n[2]),u[3]=Math.floor(n[3]),u}function D(n,s){const u=s??new p(4);return u[0]=Math.round(n[0]),u[1]=Math.round(n[1]),u[2]=Math.round(n[2]),u[3]=Math.round(n[3]),u}function q(n,s=0,u=1,d){const x=d??new p(4);return x[0]=Math.min(u,Math.max(s,n[0])),x[1]=Math.min(u,Math.max(s,n[1])),x[2]=Math.min(u,Math.max(s,n[2])),x[3]=Math.min(u,Math.max(s,n[3])),x}function $(n,s,u){const d=u??new p(4);return d[0]=n[0]+s[0],d[1]=n[1]+s[1],d[2]=n[2]+s[2],d[3]=n[3]+s[3],d}function J(n,s,u,d){const x=d??new p(4);return x[0]=n[0]+s[0]*u,x[1]=n[1]+s[1]*u,x[2]=n[2]+s[2]*u,x[3]=n[3]+s[3]*u,x}function H(n,s,u){const d=u??new p(4);return d[0]=n[0]-s[0],d[1]=n[1]-s[1],d[2]=n[2]-s[2],d[3]=n[3]-s[3],d}const X=H;function K(n,s){return Math.abs(n[0]-s[0])<O&&Math.abs(n[1]-s[1])<O&&Math.abs(n[2]-s[2])<O&&Math.abs(n[3]-s[3])<O}function W(n,s){return n[0]===s[0]&&n[1]===s[1]&&n[2]===s[2]&&n[3]===s[3]}function j(n,s,u,d){const x=d??new p(4);return x[0]=n[0]+u*(s[0]-n[0]),x[1]=n[1]+u*(s[1]-n[1]),x[2]=n[2]+u*(s[2]-n[2]),x[3]=n[3]+u*(s[3]-n[3]),x}function G(n,s,u,d){const x=d??new p(4);return x[0]=n[0]+u[0]*(s[0]-n[0]),x[1]=n[1]+u[1]*(s[1]-n[1]),x[2]=n[2]+u[2]*(s[2]-n[2]),x[3]=n[3]+u[3]*(s[3]-n[3]),x}function ne(n,s,u){const d=u??new p(4);return d[0]=Math.max(n[0],s[0]),d[1]=Math.max(n[1],s[1]),d[2]=Math.max(n[2],s[2]),d[3]=Math.max(n[3],s[3]),d}function Q(n,s,u){const d=u??new p(4);return d[0]=Math.min(n[0],s[0]),d[1]=Math.min(n[1],s[1]),d[2]=Math.min(n[2],s[2]),d[3]=Math.min(n[3],s[3]),d}function Z(n,s,u){const d=u??new p(4);return d[0]=n[0]*s,d[1]=n[1]*s,d[2]=n[2]*s,d[3]=n[3]*s,d}const L=Z;function C(n,s,u){const d=u??new p(4);return d[0]=n[0]/s,d[1]=n[1]/s,d[2]=n[2]/s,d[3]=n[3]/s,d}function de(n,s){const u=s??new p(4);return u[0]=1/n[0],u[1]=1/n[1],u[2]=1/n[2],u[3]=1/n[3],u}const ye=de;function he(n,s){return n[0]*s[0]+n[1]*s[1]+n[2]*s[2]+n[3]*s[3]}function ae(n){const s=n[0],u=n[1],d=n[2],x=n[3];return Math.sqrt(s*s+u*u+d*d+x*x)}const Me=ae;function ie(n){const s=n[0],u=n[1],d=n[2],x=n[3];return s*s+u*u+d*d+x*x}const Se=ie;function R(n,s){const u=n[0]-s[0],d=n[1]-s[1],x=n[2]-s[2],e=n[3]-s[3];return Math.sqrt(u*u+d*d+x*x+e*e)}const V=R;function U(n,s){const u=n[0]-s[0],d=n[1]-s[1],x=n[2]-s[2],e=n[3]-s[3];return u*u+d*d+x*x+e*e}const ve=U;function N(n,s){const u=s??new p(4),d=n[0],x=n[1],e=n[2],o=n[3],t=Math.sqrt(d*d+x*x+e*e+o*o);return t>1e-5?(u[0]=d/t,u[1]=x/t,u[2]=e/t,u[3]=o/t):(u[0]=0,u[1]=0,u[2]=0,u[3]=0),u}function Pe(n,s){const u=s??new p(4);return u[0]=-n[0],u[1]=-n[1],u[2]=-n[2],u[3]=-n[3],u}function ee(n,s){const u=s??new p(4);return u[0]=n[0],u[1]=n[1],u[2]=n[2],u[3]=n[3],u}const ge=ee;function Y(n,s,u){const d=u??new p(4);return d[0]=n[0]*s[0],d[1]=n[1]*s[1],d[2]=n[2]*s[2],d[3]=n[3]*s[3],d}const ce=Y;function se(n,s,u){const d=u??new p(4);return d[0]=n[0]/s[0],d[1]=n[1]/s[1],d[2]=n[2]/s[2],d[3]=n[3]/s[3],d}const Ie=se;function be(n){const s=n??new p(4);return s[0]=0,s[1]=0,s[2]=0,s[3]=0,s}function Te(n,s,u){const d=u??new p(4),x=n[0],e=n[1],o=n[2],t=n[3];return d[0]=s[0]*x+s[4]*e+s[8]*o+s[12]*t,d[1]=s[1]*x+s[5]*e+s[9]*o+s[13]*t,d[2]=s[2]*x+s[6]*e+s[10]*o+s[14]*t,d[3]=s[3]*x+s[7]*e+s[11]*o+s[15]*t,d}function ze(n,s,u){const d=u??new p(4);return N(n,d),Z(d,s,d)}function i(n,s,u){const d=u??new p(4);return ae(n)>s?ze(n,s,d):ee(n,d)}function f(n,s,u){const d=u??new p(4);return j(n,s,.5,d)}return{create:h,fromValues:z,set:B,ceil:P,floor:A,round:D,clamp:q,add:$,addScaled:J,subtract:H,sub:X,equalsApproximately:K,equals:W,lerp:j,lerpV:G,max:ne,min:Q,mulScalar:Z,scale:L,divScalar:C,inverse:de,invert:ye,dot:he,length:ae,len:Me,lengthSq:ie,lenSq:Se,distance:R,dist:V,distanceSq:U,distSq:ve,normalize:N,negate:Pe,copy:ee,clone:ge,multiply:Y,mul:ce,divide:se,div:Ie,zero:be,transformMat4:Te,setLength:ze,truncate:i,midpoint:f}}const it=new Map;function xt(p){let h=it.get(p);return h||(h=mt(p),it.set(p,h)),h}function $e(p,h,z,B,P,A){return{mat3:dt(p),mat4:vt(h),quat:_t(z),vec2:st(B),vec3:We(P),vec4:xt(A)}}const{mat3:Yt,mat4:Ue,quat:kt,vec2:Lt,vec3:Nt,vec4:jt}=$e(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);$e(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);$e(lt,Array,Array,Array,Array,Array);const Oe=new ArrayBuffer(272),ke={texel_size:new Float32Array(Oe,0,2),sphere_size:new Float32Array(Oe,8,2),inv_projection_matrix:new Float32Array(Oe,16,16),projection_matrix:new Float32Array(Oe,80,16),view_matrix:new Float32Array(Oe,144,16),inv_view_matrix:new Float32Array(Oe,208,16)},He=2e5;class wt{constructor(h){b(this,"isDragging");b(this,"prevX");b(this,"prevY");b(this,"prevHoverX");b(this,"prevHoverY");b(this,"currentHoverX");b(this,"currentHoverY");b(this,"currentXtheta");b(this,"currentYtheta");b(this,"maxYTheta");b(this,"minYTheta");b(this,"sensitivity");b(this,"currentDistance");b(this,"maxDistance");b(this,"minDistance");b(this,"target");b(this,"fov");b(this,"zoomRate");b(this,"canvas");this.canvas=h,this.canvas.addEventListener("mousedown",z=>{this.isDragging=!0,this.prevX=z.clientX,this.prevY=z.clientY}),this.canvas.addEventListener("wheel",z=>{z.preventDefault();var B=z.deltaY;this.currentDistance+=(B>0?1:-1)*this.zoomRate,this.currentDistance<this.minDistance&&(this.currentDistance=this.minDistance),this.currentDistance>this.maxDistance&&(this.currentDistance=this.maxDistance),this.recalculateView()}),this.canvas.addEventListener("mousemove",z=>{if(this.currentHoverX=z.clientX,this.currentHoverY=z.clientY,this.isDragging){const B=this.prevX-z.clientX,P=this.prevY-z.clientY;this.currentXtheta+=this.sensitivity*B,this.currentYtheta+=this.sensitivity*P,this.currentYtheta>this.maxYTheta&&(this.currentYtheta=this.maxYTheta),this.currentYtheta<this.minYTheta&&(this.currentYtheta=this.minYTheta),this.prevX=z.clientX,this.prevY=z.clientY,this.recalculateView()}}),this.canvas.addEventListener("mouseup",()=>{this.isDragging&&(this.isDragging=!1)})}reset(h,z,B,P){this.isDragging=!1,this.prevX=0,this.prevY=0,this.currentXtheta=-Math.PI/2*1,this.currentYtheta=-Math.PI/12,this.maxYTheta=80*Math.PI/180,this.minYTheta=-80*Math.PI/180,this.sensitivity=.005,this.currentDistance=h,this.maxDistance=2*this.currentDistance,this.minDistance=.7*this.currentDistance,this.target=z,this.fov=B,this.zoomRate=P;const A=this.canvas.clientWidth/this.canvas.clientHeight,D=Ue.perspective(B,A,.1,300);ke.projection_matrix.set(D),ke.inv_projection_matrix.set(Ue.inverse(D)),this.recalculateView()}recalculateView(){var h=Ue.identity();Ue.translate(h,this.target,h),Ue.rotateY(h,this.currentXtheta,h),Ue.rotateX(h,this.currentYtheta,h),Ue.translate(h,[0,0,this.currentDistance],h);var z=Ue.multiply(h,[0,0,0,1]);const B=Ue.lookAt([z[0],z[1],z[2]],this.target,[0,1,0]);ke.view_matrix.set(B),ke.inv_view_matrix.set(Ue.inverse(B))}calcMouseVelocity(){if(this.isDragging)return[0,0];let[h,z]=this.calcPlaneCoord(this.currentHoverX,this.currentHoverY),[B,P]=this.calcPlaneCoord(this.prevHoverX,this.prevHoverY),A=h-B,D=z-P,q=[A,D,0,0];return(this.currentHoverX-this.prevHoverX)/this.canvas.width*(this.canvas.width/this.canvas.height),-(this.currentHoverY-this.prevHoverY)/this.canvas.height,q}calcPlaneCoord(h,z){let B=h/this.canvas.width,P=z/this.canvas.height,A=2*B-1,D=(1-P)*2-1,q=[A*Math.tan(this.fov/2)*(this.canvas.width/this.canvas.height),D*Math.tan(this.fov/2),-1];return[q[0]*this.currentDistance,q[1]*this.currentDistance]}setNewPrevMouseCoord(){this.prevHoverX=this.currentHoverX,this.prevHoverY=this.currentHoverY}stepAngle(){this.currentXtheta+=.012,this.recalculateView()}}var yt=`struct Cell {\r
    vx: i32, \r
    vy: i32, \r
    vz: i32, \r
    mass: i32, \r
}

@group(0) @binding(0) var<storage, read_write> cells: array<Cell>;

@compute @workgroup_size(64)\r
fn clearGrid(@builtin(global_invocation_id) id: vec3<u32>) {\r
    if (id.x < arrayLength(&cells)) {\r
        cells[id.x].mass = 0;\r
        cells[id.x].vx = 0;\r
        cells[id.x].vy = 0;\r
        cells[id.x].vz = 0;\r
    }\r
}`,Mt=`struct Particle {\r
    position: vec3f,\r
    material_type: u32,\r
    v: vec3f,\r
    _padding: u32,\r
    C: mat3x3f,\r
    F: mat3x3f,  
}

@group(0) @binding(0) var<storage, read_write> particles: array<Particle>;\r
@group(0) @binding(1) var<uniform> init_box_size: vec3f;\r
@group(0) @binding(2) var<uniform> numParticles: i32;\r
@group(0) @binding(3) var<uniform> spawnMaterialType: u32;

@compute @workgroup_size(1)\r
fn spawn() {\r
    let dx: f32 = 0.5;\r
    let center: vec3f = init_box_size / 2;\r
    
    let beg: vec3f = vec3f(center.x - 2.5, init_box_size.y - 8.0, center.z - 2.5);\r
    let base: vec3f = beg + vec3f(4.5 * dx, 4.5 * dx, 0);\r
    let vScale: f32 = 0.0;  

    let dummy = numParticles;

    for (var i = 0; i < 10; i++) {\r
        for (var j = 0; j < 10; j++) {\r
            var offset = 10 * i + j;\r
            
            let pos = beg + vec3f(f32(i), 0.0, f32(j)) * dx;\r
            particles[(numParticles - 1) - offset].position = pos;\r
            particles[(numParticles - 1) - offset].material_type = spawnMaterialType;\r
            
            particles[(numParticles - 1) - offset].v = vec3f(0.0, -0.5, 0.0);\r
            particles[(numParticles - 1) - offset].C = mat3x3f(vec3f(0.), vec3f(0.), vec3f(0.));\r
            
            particles[(numParticles - 1) - offset].F = mat3x3f(\r
                vec3f(1., 0., 0.),\r
                vec3f(0., 1., 0.),\r
                vec3f(0., 0., 1.)\r
            );\r
        }\r
    }\r
}`,Pt=`struct Particle {\r
    position: vec3f,\r
    material_type: u32,\r
    v: vec3f,\r
    _padding: u32,\r
    C: mat3x3f,\r
    F: mat3x3f,\r
}\r
struct Cell {\r
    vx: atomic<i32>, \r
    vy: atomic<i32>, \r
    vz: atomic<i32>, \r
    mass: atomic<i32>, \r
}

override fixed_point_multiplier: f32; 

fn encodeFixedPoint(floating_point: f32) -> i32 {\r
	return i32(floating_point * fixed_point_multiplier);\r
}\r

@group(0) @binding(0) var<storage, read> particles: array<Particle>;\r
@group(0) @binding(1) var<storage, read_write> cells: array<Cell>;\r
@group(0) @binding(2) var<uniform> init_box_size: vec3f;\r
@group(0) @binding(3) var<uniform> numParticles: u32;

@compute @workgroup_size(64)\r
fn p2g_1(@builtin(global_invocation_id) id: vec3<u32>) {\r
    if (id.x < numParticles) {\r
        var weights: array<vec3f, 3>;

        let particle = particles[id.x];\r
        let cell_idx: vec3f = floor(particle.position);\r
        let cell_diff: vec3f = particle.position - (cell_idx + 0.5f);\r
        weights[0] = 0.5f * (0.5f - cell_diff) * (0.5f - cell_diff);\r
        weights[1] = 0.75f - cell_diff * cell_diff;\r
        weights[2] = 0.5f * (0.5f + cell_diff) * (0.5f + cell_diff);

        let C: mat3x3f = particle.C;

        for (var gx = 0; gx < 3; gx++) {\r
            for (var gy = 0; gy < 3; gy++) {\r
                for (var gz = 0; gz < 3; gz++) {\r
                    let weight: f32 = weights[gx].x * weights[gy].y * weights[gz].z;\r
                    let cell_x: vec3f = vec3f(\r
                            cell_idx.x + f32(gx) - 1., \r
                            cell_idx.y + f32(gy) - 1.,\r
                            cell_idx.z + f32(gz) - 1.  \r
                        );\r
                    let cell_dist = (cell_x + 0.5f) - particle.position;

                    let Q: vec3f = C * cell_dist;

                    let mass_contrib: f32 = weight * 1.0; 
                    let vel_contrib: vec3f = mass_contrib * (particle.v + Q);\r
                    let cell_index: i32 = \r
                        i32(cell_x.x) * i32(init_box_size.y) * i32(init_box_size.z) + \r
                        i32(cell_x.y) * i32(init_box_size.z) + \r
                        i32(cell_x.z);\r
                    atomicAdd(&cells[cell_index].mass, encodeFixedPoint(mass_contrib));\r
                    atomicAdd(&cells[cell_index].vx, encodeFixedPoint(vel_contrib.x));\r
                    atomicAdd(&cells[cell_index].vy, encodeFixedPoint(vel_contrib.y));\r
                    atomicAdd(&cells[cell_index].vz, encodeFixedPoint(vel_contrib.z));\r
                }\r
            }\r
        }\r
    }\r
}`,bt=`struct Particle {\r
    position: vec3f,\r
    material_type: u32,\r
    v: vec3f,\r
    _padding: u32,\r
    C: mat3x3f,\r
    F: mat3x3f,\r
}\r
struct Cell {\r
    vx: atomic<i32>, \r
    vy: atomic<i32>, \r
    vz: atomic<i32>, \r
    mass: i32, \r
}

override fixed_point_multiplier: f32; \r
override stiffness: f32;\r
override rest_density: f32;\r
override dynamic_viscosity: f32;\r
override dt: f32;

const MATERIAL_TYPE_0: u32 = 0u;  
const MATERIAL_TYPE_1: u32 = 1u;  
const MATERIAL_TYPE_2: u32 = 2u;  
const MATERIAL_TYPE_3: u32 = 3u;  
const MATERIAL_TYPE_4: u32 = 4u;  
const MATERIAL_TYPE_5: u32 = 5u;  
const MATERIAL_TYPE_6: u32 = 6u;  
const MATERIAL_TYPE_7: u32 = 7u;  
const MATERIAL_TYPE_8: u32 = 8u;  
const MATERIAL_TYPE_9: u32 = 9u;  

struct MaterialProperties {\r
    
    youngs_modulus: f32,      
    poissons_ratio: f32,      
    \r
    
    cohesion: f32,            
    friction_angle: f32,      
    \r
    
    viscosity: f32,           
    \r
    
    is_fluid: bool,           
}

fn getMaterialProperties(material_type: u32) -> MaterialProperties {\r
    var props: MaterialProperties;\r
    \r
    if (material_type == MATERIAL_TYPE_0) {\r
        
        props.is_fluid = true;\r
        props.viscosity = 0.1;\r
        props.youngs_modulus = 0.0;\r
        props.poissons_ratio = 0.0;\r
        props.cohesion = 0.0;\r
        props.friction_angle = 0.0;\r
    } else if (material_type == MATERIAL_TYPE_1) {\r
        
        props.is_fluid = true;\r
        props.viscosity = 0.15;\r
        props.youngs_modulus = 0.0;\r
        props.poissons_ratio = 0.0;\r
        props.cohesion = 0.0;\r
        props.friction_angle = 0.0;\r
    } else if (material_type == MATERIAL_TYPE_2) {\r
        
        props.is_fluid = true;\r
        props.viscosity = 0.25;\r
        props.youngs_modulus = 0.0;\r
        props.poissons_ratio = 0.0;\r
        props.cohesion = 0.0;\r
        props.friction_angle = 0.0;\r
    } else if (material_type == MATERIAL_TYPE_3) {\r
        
        props.is_fluid = true;\r
        props.viscosity = 0.4;\r
        props.youngs_modulus = 0.0;\r
        props.poissons_ratio = 0.0;\r
        props.cohesion = 0.0;\r
        props.friction_angle = 0.0;\r
    } else if (material_type == MATERIAL_TYPE_4) {\r
        
        props.is_fluid = false;\r
        props.viscosity = 0.0;\r
        props.youngs_modulus = 140.0;      
        props.poissons_ratio = 0.2;        
        props.cohesion = 0.0;              
        props.friction_angle = 0.6;        
    } else if (material_type == MATERIAL_TYPE_5) {\r
        
        props.is_fluid = false;\r
        props.viscosity = 0.0;\r
        props.youngs_modulus = 180.0;\r
        props.poissons_ratio = 0.2;\r
        props.cohesion = 15.0;             
        props.friction_angle = 0.6;\r
    } else if (material_type == MATERIAL_TYPE_6) {\r
        
        props.is_fluid = false;\r
        props.viscosity = 0.0;\r
        props.youngs_modulus = 100.0;      
        props.poissons_ratio = 0.15;\r
        props.cohesion = 10.0;             
        props.friction_angle = 0.7;        
    } else if (material_type == MATERIAL_TYPE_7) {\r
        
        props.is_fluid = false;\r
        props.viscosity = 0.0;\r
        props.youngs_modulus = 200.0;      
        props.poissons_ratio = 0.3;\r
        props.cohesion = 40.0;             
        props.friction_angle = 0.4;        
    } else if (material_type == MATERIAL_TYPE_8) {\r
        
        props.is_fluid = false;\r
        props.viscosity = 0.0;\r
        props.youngs_modulus = 800.0;      
        props.poissons_ratio = 0.48;       
        props.cohesion = 100.0;            
        props.friction_angle = 0.1;        
    } else {\r
        
        props.is_fluid = false;\r
        props.viscosity = 0.0;\r
        props.youngs_modulus = 2000.0;     
        props.poissons_ratio = 0.25;       
        props.cohesion = 200.0;            
        props.friction_angle = 0.8;        
    }\r
    \r
    
    props.youngs_modulus *= elasticityMultiplier;\r
    props.cohesion *= cohesionMultiplier;\r
    props.friction_angle *= frictionMultiplier;\r
    \r
    return props;\r
}

fn getMaterialViscosity(material_type: u32) -> f32 {\r
    let props = getMaterialProperties(material_type);\r
    return props.viscosity;\r
}

fn mat3_determinant(m: mat3x3f) -> f32 {\r
    return m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1])\r
         - m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0])\r
         + m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]);\r
}

fn mat3_trace(m: mat3x3f) -> f32 {\r
    return m[0][0] + m[1][1] + m[2][2];\r
}

fn mat3_transpose(m: mat3x3f) -> mat3x3f {\r
    return mat3x3f(\r
        vec3f(m[0][0], m[1][0], m[2][0]),\r
        vec3f(m[0][1], m[1][1], m[2][1]),\r
        vec3f(m[0][2], m[1][2], m[2][2])\r
    );\r
}

fn computeElasticStress(F: mat3x3f, E: f32, nu: f32) -> mat3x3f {\r
    let J = mat3_determinant(F);\r
    \r
    
    let mu = E / (2.0 * (1.0 + nu));          
    let lambda = E * nu / ((1.0 + nu) * (1.0 - 2.0 * nu));  
    \r
    
    
    let logJ = log(max(J, 0.01));  
    \r
    
    let FtF = mat3_transpose(F) * F;\r
    \r
    
    
    
    \r
    let I = mat3x3f(\r
        vec3f(1., 0., 0.),\r
        vec3f(0., 1., 0.),\r
        vec3f(0., 0., 1.)\r
    );\r
    \r
    
    let strain = 0.5 * (FtF - I);\r
    let traceStrain = mat3_trace(strain);\r
    \r
    
    let stress = lambda * traceStrain * I + 2.0 * mu * strain;\r
    \r
    return stress;\r
}

fn druckerPragerYield(stress: mat3x3f, cohesion: f32, friction_angle: f32) -> f32 {\r
    
    let trace_stress = mat3_trace(stress);\r
    let pressure = trace_stress / 3.0;\r
    \r
    
    let I = mat3x3f(\r
        vec3f(1., 0., 0.),\r
        vec3f(0., 1., 0.),\r
        vec3f(0., 0., 1.)\r
    );\r
    let deviatoric = stress - pressure * I;\r
    \r
    
    
    let s11 = deviatoric[0][0];\r
    let s22 = deviatoric[1][1];\r
    let s33 = deviatoric[2][2];\r
    let s12 = deviatoric[0][1];\r
    let s13 = deviatoric[0][2];\r
    let s23 = deviatoric[1][2];\r
    \r
    let J2 = 0.5 * (s11*s11 + s22*s22 + s33*s33) + s12*s12 + s13*s13 + s23*s23;\r
    let q = sqrt(3.0 * J2);\r
    \r
    
    
    let alpha = friction_angle;\r
    let k = cohesion;\r
    \r
    let yield_val = q - alpha * pressure - k;\r
    \r
    return yield_val;\r
}

fn applyPlasticity(stress: mat3x3f, cohesion: f32, friction_angle: f32) -> mat3x3f {\r
    let yield_val = druckerPragerYield(stress, cohesion, friction_angle);\r
    \r
    
    if (yield_val <= 0.0) {\r
        return stress;\r
    }\r
    \r
    
    let trace_stress = mat3_trace(stress);\r
    let pressure = trace_stress / 3.0;\r
    \r
    let I = mat3x3f(\r
        vec3f(1., 0., 0.),\r
        vec3f(0., 1., 0.),\r
        vec3f(0., 0., 1.)\r
    );\r
    let deviatoric = stress - pressure * I;\r
    \r
    
    let s11 = deviatoric[0][0];\r
    let s22 = deviatoric[1][1];\r
    let s33 = deviatoric[2][2];\r
    let s12 = deviatoric[0][1];\r
    let s13 = deviatoric[0][2];\r
    let s23 = deviatoric[1][2];\r
    \r
    let J2 = 0.5 * (s11*s11 + s22*s22 + s33*s33) + s12*s12 + s13*s13 + s23*s23;\r
    let q = sqrt(3.0 * J2);\r
    \r
    
    let target_q = friction_angle * pressure + cohesion;\r
    var scale = 1.0;\r
    if (q > 0.001) {\r
        scale = target_q / q;\r
    }\r
    \r
    let projected_deviatoric = deviatoric * scale;\r
    let projected_stress = projected_deviatoric + pressure * I;\r
    \r
    return projected_stress;\r
}

fn encodeFixedPoint(floating_point: f32) -> i32 {\r
	return i32(floating_point * fixed_point_multiplier);\r
}\r
fn decodeFixedPoint(fixed_point: i32) -> f32 {\r
	return f32(fixed_point) / fixed_point_multiplier;\r
}

@group(0) @binding(0) var<storage, read> particles: array<Particle>;\r
@group(0) @binding(1) var<storage, read_write> cells: array<Cell>;\r
@group(0) @binding(2) var<uniform> init_box_size: vec3f;\r
@group(0) @binding(3) var<uniform> numParticles: u32;\r
@group(0) @binding(4) var<storage, read_write> densities: array<f32>;\r
@group(0) @binding(5) var<uniform> stiffnessMultiplier: f32;\r
@group(0) @binding(6) var<uniform> cohesionMultiplier: f32;\r
@group(0) @binding(7) var<uniform> elasticityMultiplier: f32;\r
@group(0) @binding(8) var<uniform> frictionMultiplier: f32;

@compute @workgroup_size(64)\r
fn p2g_2(@builtin(global_invocation_id) id: vec3<u32>) {\r
    if (id.x < numParticles) {\r
        var weights: array<vec3f, 3>;

        let particle = particles[id.x];\r
        let cell_idx: vec3f = floor(particle.position);\r
        let cell_diff: vec3f = particle.position - (cell_idx + 0.5f);\r
        weights[0] = 0.5f * (0.5f - cell_diff) * (0.5f - cell_diff);\r
        weights[1] = 0.75f - cell_diff * cell_diff;\r
        weights[2] = 0.5f * (0.5f + cell_diff) * (0.5f + cell_diff);

        var density: f32 = 0.;\r
        for (var gx = 0; gx < 3; gx++) {\r
            for (var gy = 0; gy < 3; gy++) {    \r
                for (var gz = 0; gz < 3; gz++) {\r
                    let weight: f32 = weights[gx].x * weights[gy].y * weights[gz].z;\r
                    let cell_x: vec3f = vec3f(\r
                            cell_idx.x + f32(gx) - 1., \r
                            cell_idx.y + f32(gy) - 1.,\r
                            cell_idx.z + f32(gz) - 1.  \r
                        );\r
                    let cell_index: i32 = \r
                        i32(cell_x.x) * i32(init_box_size.y) * i32(init_box_size.z) + \r
                        i32(cell_x.y) * i32(init_box_size.z) + \r
                        i32(cell_x.z);\r
                    density += decodeFixedPoint(cells[cell_index].mass) * weight;\r
                }\r
            }\r
        }

        
        
        let clamped_density = max(density, rest_density * 0.5);  
        let volume: f32 = 1.0 / clamped_density; 
        let safe_volume = min(volume, 5.0);  
        densities[id.x] = density;

        
        let mat_props = getMaterialProperties(particle.material_type);\r
        \r
        var stress: mat3x3f;\r
        \r
        if (mat_props.is_fluid) {\r
            
            let pressure: f32 = max(-0.0, stiffness * stiffnessMultiplier * (pow(density / rest_density, 5.) - 1));\r
            stress = mat3x3f(-pressure, 0, 0, 0, -pressure, 0, 0, 0, -pressure);\r
            \r
            
            let dudv: mat3x3f = particle.C;\r
            let strain: mat3x3f = dudv + transpose(dudv);\r
            stress += mat_props.viscosity * strain;\r
        } else {\r
            
            
            \r
            
            let pressure: f32 = max(0.0, stiffness * stiffnessMultiplier * (pow(density / rest_density, 3.) - 1));\r
            stress = mat3x3f(-pressure, 0, 0, 0, -pressure, 0, 0, 0, -pressure);\r
            \r
            
            let F = particle.F;\r
            var elastic_stress = computeElasticStress(F, mat_props.youngs_modulus, mat_props.poissons_ratio);\r
            \r
            
            let trace_elastic = (elastic_stress[0][0] + elastic_stress[1][1] + elastic_stress[2][2]) / 3.0;\r
            let I = mat3x3f(\r
                vec3f(1., 0., 0.),\r
                vec3f(0., 1., 0.),\r
                vec3f(0., 0., 1.)\r
            );\r
            let deviatoric_stress = elastic_stress - trace_elastic * I;\r
            \r
            
            var full_elastic = deviatoric_stress + trace_elastic * I;\r
            full_elastic = applyPlasticity(full_elastic, mat_props.cohesion, mat_props.friction_angle);\r
            let deviatoric_after_plasticity = full_elastic - (full_elastic[0][0] + full_elastic[1][1] + full_elastic[2][2]) / 3.0 * I;\r
            \r
            
            stress += deviatoric_after_plasticity * 0.002;  
            \r
            
            let stress_mag = sqrt(\r
                stress[0][0]*stress[0][0] + stress[1][1]*stress[1][1] + stress[2][2]*stress[2][2] +\r
                2.0 * (stress[0][1]*stress[0][1] + stress[0][2]*stress[0][2] + stress[1][2]*stress[1][2])\r
            );\r
            if (stress_mag > 50.0) {\r
                stress = stress * (50.0 / stress_mag);\r
            }\r
        }

        let eq_16_term0 = -safe_volume * 4 * stress * dt;

        for (var gx = 0; gx < 3; gx++) {\r
            for (var gy = 0; gy < 3; gy++) {\r
                for (var gz = 0; gz < 3; gz++) {\r
                    let weight: f32 = weights[gx].x * weights[gy].y * weights[gz].z;\r
                    let cell_x: vec3f = vec3f(\r
                            cell_idx.x + f32(gx) - 1., \r
                            cell_idx.y + f32(gy) - 1.,\r
                            cell_idx.z + f32(gz) - 1.  \r
                        );\r
                    let cell_dist = (cell_x + 0.5f) - particle.position;\r
                    let cell_index: i32 = \r
                        i32(cell_x.x) * i32(init_box_size.y) * i32(init_box_size.z) + \r
                        i32(cell_x.y) * i32(init_box_size.z) + \r
                        i32(cell_x.z);\r
                    let momentum: vec3f = eq_16_term0 * weight * cell_dist;\r
                    atomicAdd(&cells[cell_index].vx, encodeFixedPoint(momentum.x));\r
                    atomicAdd(&cells[cell_index].vy, encodeFixedPoint(momentum.y));\r
                    atomicAdd(&cells[cell_index].vz, encodeFixedPoint(momentum.z));\r
                }\r
            }\r
        }\r
    }\r
}`,zt=`struct Cell {\r
    vx: i32, \r
    vy: i32, \r
    vz: i32, \r
    mass: i32, \r
}\r
struct RenderUniforms {\r
    texel_size: vec2f, \r
    sphere_size: f32, \r
    inv_projection_matrix: mat4x4f, \r
    projection_matrix: mat4x4f, \r
    view_matrix: mat4x4f, \r
    inv_view_matrix: mat4x4f, \r
}\r
struct MouseInfo {\r
    screenSize: vec2f, \r
    mouseCoord : vec2f, \r
    mouseVel : vec2f, \r
    mouseRadius: f32, \r
}

override fixed_point_multiplier: f32; \r
override dt: f32; 

@group(0) @binding(0) var<storage, read_write> cells: array<Cell>;\r
@group(0) @binding(1) var<uniform> real_box_size: vec3f;\r
@group(0) @binding(2) var<uniform> init_box_size: vec3f;\r
@group(0) @binding(3) var<uniform> uniforms: RenderUniforms;\r
@group(0) @binding(4) var depthTexture: texture_2d<f32>;\r
@group(0) @binding(5) var<uniform> mouseInfo: MouseInfo; 

fn encodeFixedPoint(floating_point: f32) -> i32 {\r
	return i32(floating_point * fixed_point_multiplier);\r
}\r
fn decodeFixedPoint(fixed_point: i32) -> f32 {\r
	return f32(fixed_point) / fixed_point_multiplier;\r
}

fn computeViewPosFromUVDepth(tex_coord: vec2f, depth: f32) -> vec3f {\r
    var ndc: vec4f = vec4f(tex_coord.x * 2.0 - 1.0, 1.0 - 2.0 * tex_coord.y, 0.0, 1.0);\r
    ndc.z = -uniforms.projection_matrix[2].z + uniforms.projection_matrix[3].z / depth;\r
    ndc.w = 1.0;

    var eye_pos: vec4f = uniforms.inv_projection_matrix * ndc;

    return eye_pos.xyz / eye_pos.w;\r
}

fn getViewPosFromTexCoord(tex_coord: vec2f, iuv: vec2f) -> vec3f {\r
    var depth: f32 = abs(textureLoad(depthTexture, vec2u(iuv), 0).x);\r
    return computeViewPosFromUVDepth(tex_coord, depth);\r
}

@compute @workgroup_size(64)\r
fn updateGrid(@builtin(global_invocation_id) id: vec3<u32>) {\r
    if (id.x < arrayLength(&cells)) { 
        let uv: vec2f = mouseInfo.mouseCoord;\r
        let iuv = uv * mouseInfo.screenSize;\r
        let depth: f32 = abs(textureLoad(depthTexture, vec2u(iuv), 0).x);\r
        var mouseCellIndex: u32 = 1000000000; 
        var cellSquareDistToMouse: f32 = 1e9;\r
        var forceDir = vec3f(0.);\r
        if (depth < 1e5) {\r
            let mouseViewPos = getViewPosFromTexCoord(uv, iuv);\r
            let mouseWorldPos = uniforms.inv_view_matrix * vec4f(mouseViewPos, 1.); 
            let mouseCellPos: vec3i = vec3i(floor(mouseWorldPos).xyz);\r
            mouseCellIndex =    u32(mouseCellPos.x) * u32(init_box_size.y) * u32(init_box_size.z) + \r
                                u32(mouseCellPos.y) * u32(init_box_size.z) + \r
                                u32(mouseCellPos.z);\r
            let center = real_box_size / 2;\r
            
            
            if (dot(mouseInfo.mouseVel, mouseInfo.mouseVel) > 0.) {\r
                forceDir = (uniforms.inv_view_matrix * vec4f(mouseInfo.mouseVel, 0.0, 0)).xyz; 
            } else {\r
                forceDir = vec3f(0.);\r
            }

            var x: f32 = f32(i32(id.x) / i32(init_box_size.z) / i32(init_box_size.y));\r
            var y: f32 = f32((i32(id.x) / i32(init_box_size.z)) % i32(init_box_size.y));\r
            var z: f32 = f32(i32(id.x) % i32(init_box_size.z));\r
            let cellPos = vec3f(x, y, z);\r
            let diff = floor(mouseWorldPos).xyz - cellPos;\r
            cellSquareDistToMouse = dot(diff, diff);\r
        }

        let dt = dt;\r
        let r = mouseInfo.mouseRadius;

        if (cells[id.x].mass > 0) { 
            var float_v: vec3f = vec3f(\r
                decodeFixedPoint(cells[id.x].vx), \r
                decodeFixedPoint(cells[id.x].vy), \r
                decodeFixedPoint(cells[id.x].vz)\r
            );\r
            float_v /= decodeFixedPoint(cells[id.x].mass);\r
            \r
            if (cellSquareDistToMouse < r * r) { \r
                let strength = (r * r - cellSquareDistToMouse) / (r * r) * 0.15;\r
                cells[id.x].vx = encodeFixedPoint(float_v.x + strength * forceDir.x); \r
                cells[id.x].vy = encodeFixedPoint(float_v.y + strength * forceDir.y); \r
                cells[id.x].vz = encodeFixedPoint(float_v.z + strength * forceDir.z); \r
            } else {\r
                cells[id.x].vx = encodeFixedPoint(float_v.x);\r
                cells[id.x].vy = encodeFixedPoint(float_v.y); \r
                cells[id.x].vz = encodeFixedPoint(float_v.z);\r
            } 

            var x: i32 = i32(id.x) / i32(init_box_size.z) / i32(init_box_size.y);\r
            var y: i32 = (i32(id.x) / i32(init_box_size.z)) % i32(init_box_size.y);\r
            var z: i32 = i32(id.x) % i32(init_box_size.z);\r
            
            if (x < 2 || x > i32(ceil(real_box_size.x) - 3)) { cells[id.x].vx = 0; } \r
            if (y < 2 || y > i32(ceil(real_box_size.y) - 3)) { cells[id.x].vy = 0; }\r
            if (z < 2 || z > i32(ceil(real_box_size.z) - 3)) { cells[id.x].vz = 0; }\r
        }\r
    }\r
}`,Bt=`struct Particle {\r
    position: vec3f,\r
    material_type: u32,\r
    v: vec3f,\r
    _padding: u32,\r
    C: mat3x3f,\r
    F: mat3x3f,\r
}\r
struct Cell {\r
    vx: i32, \r
    vy: i32, \r
    vz: i32, \r
    mass: i32, \r
}

override fixed_point_multiplier: f32; \r
override dt: f32; 

@group(0) @binding(0) var<storage, read_write> particles: array<Particle>;\r
@group(0) @binding(1) var<storage, read> cells: array<Cell>;\r
@group(0) @binding(2) var<uniform> real_box_size: vec3f;\r
@group(0) @binding(3) var<uniform> init_box_size: vec3f;\r
@group(0) @binding(4) var<uniform> numParticles: u32;\r
@group(0) @binding(5) var<uniform> sphereRadius: f32;\r
@group(0) @binding(6) var<uniform> gravityMode: u32;\r
@group(0) @binding(7) var<uniform> damping: f32;\r
@group(0) @binding(8) var<uniform> wallFriction: f32;\r
@group(0) @binding(9) var<uniform> wallRestitution: f32;\r
@group(0) @binding(10) var<uniform> sphericalConstraintStrength: f32;\r
@group(0) @binding(11) var<uniform> gravityStrength: f32;

fn decodeFixedPoint(fixed_point: i32) -> f32 {\r
	return f32(fixed_point) / fixed_point_multiplier;\r
}

fn boxSDF(p: vec3f, boxMin: vec3f, boxMax: vec3f) -> f32 {\r
    let center = (boxMin + boxMax) * 0.5;\r
    let halfSize = (boxMax - boxMin) * 0.5;\r
    let q = abs(p - center) - halfSize;\r
    return length(max(q, vec3f(0.0))) + min(max(q.x, max(q.y, q.z)), 0.0);\r
}

fn boxSDFGradient(p: vec3f, boxMin: vec3f, boxMax: vec3f) -> vec3f {\r
    let epsilon = 0.01;\r
    let dx = boxSDF(p + vec3f(epsilon, 0.0, 0.0), boxMin, boxMax) - boxSDF(p - vec3f(epsilon, 0.0, 0.0), boxMin, boxMax);\r
    let dy = boxSDF(p + vec3f(0.0, epsilon, 0.0), boxMin, boxMax) - boxSDF(p - vec3f(0.0, epsilon, 0.0), boxMin, boxMax);\r
    let dz = boxSDF(p + vec3f(0.0, 0.0, epsilon), boxMin, boxMax) - boxSDF(p - vec3f(0.0, 0.0, epsilon), boxMin, boxMax);\r
    return normalize(vec3f(dx, dy, dz));\r
}\r

@compute @workgroup_size(64)\r
fn g2p(@builtin(global_invocation_id) id: vec3<u32>) {\r
    if (id.x < numParticles) {\r
        particles[id.x].v = vec3f(0.);\r
        var weights: array<vec3f, 3>;

        let particle = particles[id.x];\r
        let cell_idx: vec3f = floor(particle.position);\r
        let cell_diff: vec3f = particle.position - (cell_idx + 0.5f);\r
        weights[0] = 0.5f * (0.5f - cell_diff) * (0.5f - cell_diff);\r
        weights[1] = 0.75f - cell_diff * cell_diff;\r
        weights[2] = 0.5f * (0.5f + cell_diff) * (0.5f + cell_diff);

        var B: mat3x3f = mat3x3f(vec3f(0.), vec3f(0.), vec3f(0.));\r
        for (var gx = 0; gx < 3; gx++) {\r
            for (var gy = 0; gy < 3; gy++) {\r
                for (var gz = 0; gz < 3; gz++) {\r
                    let weight: f32 = weights[gx].x * weights[gy].y * weights[gz].z;\r
                    let cell_x: vec3f = vec3f(\r
                        cell_idx.x + f32(gx) - 1., \r
                        cell_idx.y + f32(gy) - 1.,\r
                        cell_idx.z + f32(gz) - 1.  \r
                    );\r
                    let cell_dist: vec3f = (cell_x + 0.5f) - particle.position;\r
                    let cell_index: i32 = \r
                        i32(cell_x.x) * i32(init_box_size.y) * i32(init_box_size.z) + \r
                        i32(cell_x.y) * i32(init_box_size.z) + \r
                        i32(cell_x.z);\r
                    let weighted_velocity: vec3f = vec3f(\r
                        decodeFixedPoint(cells[cell_index].vx), \r
                        decodeFixedPoint(cells[cell_index].vy), \r
                        decodeFixedPoint(cells[cell_index].vz)\r
                    ) * weight;\r
                    let term: mat3x3f = mat3x3f(\r
                        weighted_velocity * cell_dist.x, \r
                        weighted_velocity * cell_dist.y, \r
                        weighted_velocity * cell_dist.z\r
                    );

                    B += term;

                    particles[id.x].v += weighted_velocity;\r
                }\r
            }\r
        }

        particles[id.x].C = B * 4.0f;\r
        \r
        
        
        let I = mat3x3f(\r
            vec3f(1., 0., 0.),\r
            vec3f(0., 1., 0.),\r
            vec3f(0., 0., 1.)\r
        );\r
        let grad_v = B * 4.0f;  
        var new_F = (I + dt * grad_v) * particles[id.x].F;\r
        \r
        
        
        let det_F = new_F[0][0] * (new_F[1][1] * new_F[2][2] - new_F[1][2] * new_F[2][1])\r
                  - new_F[0][1] * (new_F[1][0] * new_F[2][2] - new_F[1][2] * new_F[2][0])\r
                  + new_F[0][2] * (new_F[1][0] * new_F[2][1] - new_F[1][1] * new_F[2][0]);\r
        \r
        
        if (det_F < 0.1 || det_F > 10.0) {\r
            new_F = I;\r
        }\r
        \r
        
        new_F[0][0] = clamp(new_F[0][0], 0.2, 5.0);\r
        new_F[1][1] = clamp(new_F[1][1], 0.2, 5.0);\r
        new_F[2][2] = clamp(new_F[2][2], 0.2, 5.0);\r
        new_F[0][1] = clamp(new_F[0][1], -2.0, 2.0);\r
        new_F[0][2] = clamp(new_F[0][2], -2.0, 2.0);\r
        new_F[1][0] = clamp(new_F[1][0], -2.0, 2.0);\r
        new_F[1][2] = clamp(new_F[1][2], -2.0, 2.0);\r
        new_F[2][0] = clamp(new_F[2][0], -2.0, 2.0);\r
        new_F[2][1] = clamp(new_F[2][1], -2.0, 2.0);\r
        \r
        particles[id.x].F = new_F;\r
        \r
        particles[id.x].position += particles[id.x].v * dt;\r
        \r
        
        let wall_margin = 3.0;\r
        let wall_min = vec3f(wall_margin);\r
        let wall_max = real_box_size - wall_margin;\r
        \r
        let sdf_distance = boxSDF(particles[id.x].position, wall_min, wall_max);\r
        \r
        if (sdf_distance > 0.0) {\r
            
            let normal = boxSDFGradient(particles[id.x].position, wall_min, wall_max);\r
            \r
            
            particles[id.x].position -= normal * sdf_distance;\r
            \r
            
            let v_dot_n = dot(particles[id.x].v, normal);\r
            let v_normal = normal * v_dot_n;\r
            let v_tangent = particles[id.x].v - v_normal;\r
            \r
            
            let v_normal_new = v_normal * -wallRestitution;\r
            \r
            
            let v_tangent_new = v_tangent * (1.0 - wallFriction);\r
            \r
            
            particles[id.x].v = v_normal_new + v_tangent_new;\r
            \r
            
            
            let material_type_local = particles[id.x].material_type;\r
            if (material_type_local >= 4u && material_type_local <= 9u) {\r
                
                
                if (material_type_local >= 8u) {\r
                    
                    let I = mat3x3f(\r
                        vec3f(1., 0., 0.),\r
                        vec3f(0., 1., 0.),\r
                        vec3f(0., 0., 1.)\r
                    );\r
                    particles[id.x].F = particles[id.x].F * 0.5 + I * 0.5;  
                    particles[id.x].v *= 0.9;  
                } else {\r
                    
                    particles[id.x].F = mat3x3f(\r
                        vec3f(1., 0., 0.),\r
                        vec3f(0., 1., 0.),\r
                        vec3f(0., 0., 1.)\r
                    );\r
                    particles[id.x].v *= 0.8;  
                }\r
            }\r
        }

        
        if (gravityMode == 1u) {\r
            
            let gravity = vec3f(0.0, -1.0, 0.0) * gravityStrength;\r
            particles[id.x].v += gravity * dt;\r
        } else {\r
            
            let center = vec3f(real_box_size.x / 2, real_box_size.y / 2, real_box_size.z / 2);\r
            let dist = center - particles[id.x].position;\r
            let dirToOrigin = normalize(dist);\r
            \r
            let r: f32 = sphereRadius;\r
            \r
            
            if (dot(dist, dist) < r * r) {\r
                particles[id.x].v += -(r - sqrt(dot(dist, dist))) * dirToOrigin * 3.0 * sphericalConstraintStrength;\r
            }\r
            \r
            
            particles[id.x].v += dirToOrigin * 0.1 * sphericalConstraintStrength;\r
        }\r
        \r
        
        particles[id.x].v *= damping;\r
        \r
        
        let material_type = particles[id.x].material_type;\r
        if (material_type >= 4u && material_type <= 9u) {\r
            particles[id.x].v *= 0.99;  
            \r
            
            
            let I = mat3x3f(\r
                vec3f(1., 0., 0.),\r
                vec3f(0., 1., 0.),\r
                vec3f(0., 0., 1.)\r
            );\r
            \r
            
            var relaxation = 0.02;  
            if (material_type == 8u || material_type == 9u) {\r
                
                relaxation = 0.005;  
            }\r
            \r
            particles[id.x].F = particles[id.x].F * (1.0 - relaxation) + I * relaxation;\r
        }\r
    }\r
}`,Dt=`struct Particle {\r
    position: vec3f,\r
    material_type: u32,\r
    v: vec3f,\r
    _padding: u32,\r
    C: mat3x3f,\r
    F: mat3x3f,\r
}

struct PosVel {\r
    position: vec3f,\r
    material_type: u32,\r
    v: vec3f,\r
    density: f32,\r
}

@group(0) @binding(0) var<storage, read> particles: array<Particle>;\r
@group(0) @binding(1) var<storage, read_write> posvel: array<PosVel>;\r
@group(0) @binding(2) var<uniform> numParticles: u32;\r
@group(0) @binding(3) var<storage, read> densities: array<f32>;

@compute @workgroup_size(64)\r
fn copyPosition(@builtin(global_invocation_id) id: vec3<u32>) {\r
    if (id.x < numParticles) { \r
        posvel[id.x].position = particles[id.x].position;\r
        posvel[id.x].material_type = particles[id.x].material_type;\r
        posvel[id.x].v = particles[id.x].v;\r
        posvel[id.x].density = densities[id.x];\r
    }\r
}`;const Xe=128;class Ft{constructor(h,z,B,P,A,D,q){b(this,"max_x_grids",80);b(this,"max_y_grids",80);b(this,"max_z_grids",80);b(this,"cellStructSize",16);b(this,"realBoxSizeBuffer");b(this,"initBoxSizeBuffer");b(this,"numParticlesBuffer");b(this,"densityBuffer");b(this,"mouseInfoUniformBuffer");b(this,"sphereRadiusBuffer");b(this,"spawnMaterialTypeBuffer");b(this,"gravityModeBuffer");b(this,"dampingBuffer");b(this,"wallFrictionBuffer");b(this,"wallRestitutionBuffer");b(this,"sphericalConstraintStrengthBuffer");b(this,"gravityStrengthBuffer");b(this,"stiffnessMultiplierBuffer");b(this,"cohesionMultiplierBuffer");b(this,"elasticityMultiplierBuffer");b(this,"frictionMultiplierBuffer");b(this,"numParticles",0);b(this,"gridCount",0);b(this,"currentSpawnMaterialType",0);b(this,"spawnPaused",!0);b(this,"gravityMode",!1);b(this,"damping",1);b(this,"wallFriction",0);b(this,"wallRestitution",1);b(this,"sphericalConstraintStrength",1);b(this,"gravityStrength",.5);b(this,"stiffnessMultiplier",1);b(this,"cohesionMultiplier",1);b(this,"elasticityMultiplier",1);b(this,"frictionMultiplier",1);b(this,"clearGridPipeline");b(this,"spawnParticlesPipeline");b(this,"p2g1Pipeline");b(this,"p2g2Pipeline");b(this,"updateGridPipeline");b(this,"g2pPipeline");b(this,"copyPositionPipeline");b(this,"clearGridBindGroup");b(this,"spawnParticlesBindGroup");b(this,"p2g1BindGroup");b(this,"p2g2BindGroup");b(this,"updateGridBindGroup");b(this,"g2pBindGroup");b(this,"copyPositionBindGroup");b(this,"particleBuffer");b(this,"device");b(this,"renderDiameter");b(this,"frameCount");b(this,"spawned");b(this,"mouseInfoValues");b(this,"restDensity");this.device=P,this.renderDiameter=B,this.frameCount=0,this.spawned=!1,this.numParticles=0;const $=P.createShaderModule({code:yt}),J=P.createShaderModule({code:Mt}),H=P.createShaderModule({code:Pt}),X=P.createShaderModule({code:bt}),K=P.createShaderModule({code:zt}),W=P.createShaderModule({code:Bt}),j=P.createShaderModule({code:Dt});this.restDensity=4;const G={stiffness:3,restDensity:this.restDensity,dynamic_viscosity:.1,dt:.2,fixed_point_multiplier:1e7};this.clearGridPipeline=P.createComputePipeline({label:"clear grid pipeline",layout:"auto",compute:{module:$}}),this.spawnParticlesPipeline=P.createComputePipeline({label:"spawn particles pipeline",layout:"auto",compute:{module:J}}),this.p2g1Pipeline=P.createComputePipeline({label:"p2g 1 pipeline",layout:"auto",compute:{module:H,constants:{fixed_point_multiplier:G.fixed_point_multiplier}}}),this.p2g2Pipeline=P.createComputePipeline({label:"p2g 2 pipeline",layout:"auto",compute:{module:X,constants:{fixed_point_multiplier:G.fixed_point_multiplier,stiffness:G.stiffness,rest_density:G.restDensity,dynamic_viscosity:G.dynamic_viscosity,dt:G.dt}}}),this.updateGridPipeline=P.createComputePipeline({label:"update grid pipeline",layout:"auto",compute:{module:K,constants:{fixed_point_multiplier:G.fixed_point_multiplier,dt:G.dt}}}),this.g2pPipeline=P.createComputePipeline({label:"g2p pipeline",layout:"auto",compute:{module:W,constants:{fixed_point_multiplier:G.fixed_point_multiplier,dt:G.dt}}}),this.copyPositionPipeline=P.createComputePipeline({label:"copy position pipeline",layout:"auto",compute:{module:j}});const ne=this.max_x_grids*this.max_y_grids*this.max_z_grids,Q=new ArrayBuffer(12),Z=new ArrayBuffer(12),L=new ArrayBuffer(4);this.mouseInfoValues=new ArrayBuffer(32);const C=P.createBuffer({label:"cells buffer",size:this.cellStructSize*ne,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});this.densityBuffer=P.createBuffer({label:"density buffer",size:4*He,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.realBoxSizeBuffer=P.createBuffer({label:"real box size buffer",size:Q.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.initBoxSizeBuffer=P.createBuffer({label:"init box size buffer",size:Z.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.numParticlesBuffer=P.createBuffer({label:"number of particles buffer",size:L.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.mouseInfoUniformBuffer=P.createBuffer({label:"mouse info buffer",size:this.mouseInfoValues.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.sphereRadiusBuffer=P.createBuffer({label:"sphere radius buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.spawnMaterialTypeBuffer=P.createBuffer({label:"spawn material type buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.gravityModeBuffer=P.createBuffer({label:"gravity mode buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.dampingBuffer=P.createBuffer({label:"damping buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.wallFrictionBuffer=P.createBuffer({label:"wall friction buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.wallRestitutionBuffer=P.createBuffer({label:"wall restitution buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.sphericalConstraintStrengthBuffer=P.createBuffer({label:"spherical constraint strength buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.gravityStrengthBuffer=P.createBuffer({label:"gravity strength buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.stiffnessMultiplierBuffer=P.createBuffer({label:"stiffness multiplier buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.cohesionMultiplierBuffer=P.createBuffer({label:"cohesion multiplier buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.elasticityMultiplierBuffer=P.createBuffer({label:"elasticity multiplier buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.frictionMultiplierBuffer=P.createBuffer({label:"friction multiplier buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),{screenSize:new Float32Array(this.mouseInfoValues,0,2),mouseCoord:new Float32Array(this.mouseInfoValues,8,2),mouseVel:new Float32Array(this.mouseInfoValues,16,2),mouseRadius:new Float32Array(this.mouseInfoValues,24,1)}.screenSize.set([q.width,q.height]),this.device.queue.writeBuffer(this.mouseInfoUniformBuffer,0,this.mouseInfoValues),this.clearGridBindGroup=P.createBindGroup({layout:this.clearGridPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:C}}]}),this.spawnParticlesBindGroup=P.createBindGroup({layout:this.spawnParticlesPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:h}},{binding:1,resource:{buffer:this.initBoxSizeBuffer}},{binding:2,resource:{buffer:this.numParticlesBuffer}},{binding:3,resource:{buffer:this.spawnMaterialTypeBuffer}}]}),this.p2g1BindGroup=P.createBindGroup({layout:this.p2g1Pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:h}},{binding:1,resource:{buffer:C}},{binding:2,resource:{buffer:this.initBoxSizeBuffer}},{binding:3,resource:{buffer:this.numParticlesBuffer}}]}),this.p2g2BindGroup=P.createBindGroup({layout:this.p2g2Pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:h}},{binding:1,resource:{buffer:C}},{binding:2,resource:{buffer:this.initBoxSizeBuffer}},{binding:3,resource:{buffer:this.numParticlesBuffer}},{binding:4,resource:{buffer:this.densityBuffer}},{binding:5,resource:{buffer:this.stiffnessMultiplierBuffer}},{binding:6,resource:{buffer:this.cohesionMultiplierBuffer}},{binding:7,resource:{buffer:this.elasticityMultiplierBuffer}},{binding:8,resource:{buffer:this.frictionMultiplierBuffer}}]}),this.updateGridBindGroup=P.createBindGroup({layout:this.updateGridPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:C}},{binding:1,resource:{buffer:this.realBoxSizeBuffer}},{binding:2,resource:{buffer:this.initBoxSizeBuffer}},{binding:3,resource:{buffer:A}},{binding:4,resource:D},{binding:5,resource:{buffer:this.mouseInfoUniformBuffer}}]}),this.g2pBindGroup=P.createBindGroup({layout:this.g2pPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:h}},{binding:1,resource:{buffer:C}},{binding:2,resource:{buffer:this.realBoxSizeBuffer}},{binding:3,resource:{buffer:this.initBoxSizeBuffer}},{binding:4,resource:{buffer:this.numParticlesBuffer}},{binding:5,resource:{buffer:this.sphereRadiusBuffer}},{binding:6,resource:{buffer:this.gravityModeBuffer}},{binding:7,resource:{buffer:this.dampingBuffer}},{binding:8,resource:{buffer:this.wallFrictionBuffer}},{binding:9,resource:{buffer:this.wallRestitutionBuffer}},{binding:10,resource:{buffer:this.sphericalConstraintStrengthBuffer}},{binding:11,resource:{buffer:this.gravityStrengthBuffer}}]}),this.copyPositionBindGroup=P.createBindGroup({layout:this.copyPositionPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:h}},{binding:1,resource:{buffer:z}},{binding:2,resource:{buffer:this.numParticlesBuffer}},{binding:3,resource:{buffer:this.densityBuffer}}]}),this.particleBuffer=h}initDambreak(h,z){let B=new ArrayBuffer(Xe*He);const P=.55;this.numParticles=0;for(let $=3;$<h[1]*.8&&this.numParticles<z;$+=P)for(let J=3;J<h[0]-4&&this.numParticles<z;J+=P)for(let H=3;H<h[2]/2&&this.numParticles<z;H+=P){const X=Xe*this.numParticles,K={position:new Float32Array(B,X+0,3),material_type:new Uint32Array(B,X+12,1),v:new Float32Array(B,X+16,3),C:new Float32Array(B,X+32,12),F:new Float32Array(B,X+80,12)},W=2*Math.random();K.position.set([J+W,$+W,H+W]),K.F.set([1,0,0,0,0,1,0,0,0,0,1,0]);const j=H/(h[2]/2);let G=0;j<.25?G=0:j<.5?G=1:j<.75?G=2:G=3,K.material_type.set([G]),this.numParticles++}let A=new ArrayBuffer(Xe*this.numParticles);const D=new Uint8Array(B),q=new Uint8Array(A);return q.set(D.subarray(0,q.length)),A}reset(h,z){ke.sphere_size.set([this.renderDiameter]);const B=this.max_x_grids*this.max_y_grids*this.max_z_grids;if(this.gridCount=Math.ceil(h[0])*Math.ceil(h[1])*Math.ceil(h[2]),this.gridCount>B)throw new Error("gridCount should be equal to or less than maxGridCount");const P=new ArrayBuffer(12);new Float32Array(P).set(h);const D=new ArrayBuffer(4);new Float32Array(D).set([z]),this.device.queue.writeBuffer(this.initBoxSizeBuffer,0,P),this.device.queue.writeBuffer(this.sphereRadiusBuffer,0,D),this.frameCount=0,this.changeBoxSize(h),this.changeNumParticles(0)}execute(h,z,B,P,A){const D=h.beginComputePass(),q={screenSize:new Float32Array(this.mouseInfoValues,0,2),mouseCoord:new Float32Array(this.mouseInfoValues,8,2),mouseVel:new Float32Array(this.mouseInfoValues,16,2),mouseRadius:new Float32Array(this.mouseInfoValues,24,2)};q.mouseCoord.set([z[0],z[1]]),q.mouseVel.set([B[0],B[1]]),q.mouseRadius.set([A]),this.device.queue.writeBuffer(this.mouseInfoUniformBuffer,0,this.mouseInfoValues);const $=new Uint32Array([this.currentSpawnMaterialType]);this.device.queue.writeBuffer(this.spawnMaterialTypeBuffer,0,$);const J=new Uint32Array([this.gravityMode?1:0]);this.device.queue.writeBuffer(this.gravityModeBuffer,0,J);const H=new Float32Array([this.damping]);this.device.queue.writeBuffer(this.dampingBuffer,0,H);const X=new Float32Array([this.wallFriction]);this.device.queue.writeBuffer(this.wallFrictionBuffer,0,X);const K=new Float32Array([this.wallRestitution]);this.device.queue.writeBuffer(this.wallRestitutionBuffer,0,K);const W=new Float32Array([this.sphericalConstraintStrength]);this.device.queue.writeBuffer(this.sphericalConstraintStrengthBuffer,0,W);const j=new Float32Array([this.gravityStrength]);this.device.queue.writeBuffer(this.gravityStrengthBuffer,0,j);const G=new Float32Array([this.stiffnessMultiplier]);this.device.queue.writeBuffer(this.stiffnessMultiplierBuffer,0,G);const ne=new Float32Array([this.cohesionMultiplier]);this.device.queue.writeBuffer(this.cohesionMultiplierBuffer,0,ne);const Q=new Float32Array([this.elasticityMultiplier]);this.device.queue.writeBuffer(this.elasticityMultiplierBuffer,0,Q);const Z=new Float32Array([this.frictionMultiplier]);this.device.queue.writeBuffer(this.frictionMultiplierBuffer,0,Z),!this.spawnPaused&&this.frameCount%2==0&&this.numParticles<P&&(console.log("spawn material type:",this.currentSpawnMaterialType),D.setBindGroup(0,this.spawnParticlesBindGroup),D.setPipeline(this.spawnParticlesPipeline),D.dispatchWorkgroups(1),this.changeNumParticles(this.numParticles+100));for(let L=0;L<2;L++)D.setBindGroup(0,this.clearGridBindGroup),D.setPipeline(this.clearGridPipeline),D.dispatchWorkgroups(Math.ceil(this.gridCount/64)),D.setBindGroup(0,this.p2g1BindGroup),D.setPipeline(this.p2g1Pipeline),D.dispatchWorkgroups(Math.ceil(this.numParticles/64)),D.setBindGroup(0,this.p2g2BindGroup),D.setPipeline(this.p2g2Pipeline),D.dispatchWorkgroups(Math.ceil(this.numParticles/64)),D.setBindGroup(0,this.updateGridBindGroup),D.setPipeline(this.updateGridPipeline),D.dispatchWorkgroups(Math.ceil(this.gridCount/64)),D.setBindGroup(0,this.g2pBindGroup),D.setPipeline(this.g2pPipeline),D.dispatchWorkgroups(Math.ceil(this.numParticles/64)),D.setBindGroup(0,this.copyPositionBindGroup),D.setPipeline(this.copyPositionPipeline),D.dispatchWorkgroups(Math.ceil(this.numParticles/64)),D.setBindGroup(0,this.copyPositionBindGroup),D.setPipeline(this.copyPositionPipeline),D.dispatchWorkgroups(Math.ceil(this.numParticles/64));D.end(),this.frameCount++}changeBoxSize(h){const z=new ArrayBuffer(12),B=new Float32Array(z);B.set(h),this.device.queue.writeBuffer(this.realBoxSizeBuffer,0,B)}changeNumParticles(h){const z=new ArrayBuffer(4),B=new Int32Array(z);B.set([h]),this.device.queue.writeBuffer(this.numParticlesBuffer,0,B),this.numParticles=h}setSpawnMaterialType(h){this.currentSpawnMaterialType=h}setSpawnPaused(h){this.spawnPaused=h}clearParticles(){this.changeNumParticles(0),this.frameCount=0,this.spawned=!1}setGravityMode(h){this.gravityMode=h}setDamping(h){this.damping=h}setWallFriction(h){this.wallFriction=h}setWallRestitution(h){this.wallRestitution=h}setSphericalConstraintStrength(h){this.sphericalConstraintStrength=h}setGravityStrength(h){this.gravityStrength=h}setStiffnessMultiplier(h){this.stiffnessMultiplier=h}setCohesionMultiplier(h){this.cohesionMultiplier=h}setElasticityMultiplier(h){this.elasticityMultiplier=h}setFrictionMultiplier(h){this.frictionMultiplier=h}}var St=`struct VertexOutput {\r
    @builtin(position) position: vec4f, \r
    @location(0) uv: vec2f, \r
    @location(1) view_position: vec3f,\r
    @location(2) @interpolate(flat) material_type: u32,\r
}

struct FragmentInput {\r
    @location(0) uv: vec2f, \r
    @location(1) view_position: vec3f,\r
    @location(2) @interpolate(flat) material_type: u32,\r
}

struct FragmentOutput {\r
    @location(0) frag_color: vec4f,\r
    @location(1) material: vec4u,\r
    @builtin(frag_depth) frag_depth: f32, \r
}

struct RenderUniforms {\r
    texel_size: vec2f, \r
    sphere_size: f32, \r
    inv_projection_matrix: mat4x4f, \r
    projection_matrix: mat4x4f, \r
    view_matrix: mat4x4f, \r
    inv_view_matrix: mat4x4f, \r
}

struct PosVel {\r
    position: vec3f,\r
    material_type: u32,\r
    v: vec3f, \r
    density: f32, \r
}

@group(0) @binding(0) var<storage> particles: array<PosVel>;\r
@group(0) @binding(1) var<uniform> uniforms: RenderUniforms;\r
@group(0) @binding(2) var<uniform> stretchStrength: f32;

override restDensity: f32;\r
override densitySizeScale: f32;

fn computeStretchedVertex(position: vec2f, velocity_dir: vec2f, strength: f32) -> vec2f {\r
    
    let stretch_offset: vec2f = dot(velocity_dir, position) * velocity_dir;\r
    return position + stretch_offset * strength;\r
}

fn area(v1: vec2f, v2: vec2f, v3: vec2f, v4: vec2f) -> f32 {\r
    let ab = v2 - v1;\r
    let ad = v4 - v1;\r
    let s = abs(ab.x * ad.y - ab.y * ad.x);\r
    return s;\r
}

fn scaleQuad(vel: vec2f, r: f32, strength: f32) -> f32 {\r
    let s1: f32 = r * r;\r
    let v1 = computeStretchedVertex(vec2f(0.5 * r, 0.5 * r), vel, strength);\r
    let v2 = computeStretchedVertex(vec2f(-0.5 * r, 0.5 * r), vel, strength);\r
    let v3 = computeStretchedVertex(vec2f(-0.5 * r, -0.5 * r), vel, strength);\r
    let v4 = computeStretchedVertex(vec2f(0.5 * r, -0.5 * r), vel, strength);\r
    let s2: f32 = area(v1, v2, v3, v4);\r
    return sqrt(s1 / s2);\r
}\r

@vertex\r
fn vs(    \r
    @builtin(vertex_index) vertex_index: u32, \r
    @builtin(instance_index) instance_index: u32\r
) -> VertexOutput {\r
    var corner_positions = array(\r
        vec2( 0.5,  0.5),\r
        vec2( 0.5, -0.5),\r
        vec2(-0.5, -0.5),\r
        vec2( 0.5,  0.5),\r
        vec2(-0.5, -0.5),\r
        vec2(-0.5,  0.5),\r
    );

    let size = uniforms.sphere_size * clamp(particles[instance_index].density / restDensity * densitySizeScale, 0.0, 1.0);\r
    let projected_velocity = (uniforms.view_matrix * vec4f(particles[instance_index].v, 0.0)).xy;\r
    let stretched_position = computeStretchedVertex(corner_positions[vertex_index] * size, projected_velocity, stretchStrength);\r
    let corner = vec3(stretched_position, 0.0) * scaleQuad(projected_velocity, size, stretchStrength);

    let uv = corner_positions[vertex_index] + 0.5;

    let real_position = particles[instance_index].position;\r
    let view_position = (uniforms.view_matrix * vec4f(real_position, 1.0)).xyz;

    let out_position = uniforms.projection_matrix * vec4f(view_position + corner, 1.0);

    let material_type = particles[instance_index].material_type;\r
    return VertexOutput(out_position, uv, view_position, material_type);\r
}

@fragment\r
fn fs(input: FragmentInput) -> FragmentOutput {\r
    var out: FragmentOutput;

    var normalxy: vec2f = input.uv * 2.0 - 1.0;\r
    var r2: f32 = dot(normalxy, normalxy);\r
    if (r2 > 1.0) {\r
        discard;\r
    }\r
    var normalz = sqrt(1.0 - r2);\r
    var normal = vec3(normalxy, normalz);

    var radius = uniforms.sphere_size / 2;\r
    var real_view_pos: vec4f = vec4f(input.view_position + normal * radius, 1.0);\r
    var clip_space_pos: vec4f = uniforms.projection_matrix * real_view_pos;\r
    out.frag_depth = clip_space_pos.z / clip_space_pos.w;

    out.frag_color = vec4(real_view_pos.z, 0., 0., 1.);\r
    out.material = vec4u(input.material_type, 0u, 0u, 1u);\r
    return out;\r
}`,Tt=`@group(0) @binding(1) var texture: texture_2d<f32>;\r
@group(0) @binding(2) var<uniform> uniforms: FilterUniforms;

struct FragmentInput {\r
    @location(0) uv: vec2f,  \r
    @location(1) iuv: vec2f\r
}

override depth_threshold: f32;  \r
override projected_particle_constant: f32; \r
override max_filter_size: f32;

struct FilterUniforms {\r
    blur_dir: vec2f,\r
}\r

@fragment\r
fn fs(input: FragmentInput) -> @location(0) vec4f {\r
    var depth: f32 = abs(textureLoad(texture, vec2u(input.iuv), 0).r);

    if (depth >= 1e4) {\r
        return vec4f(vec3f(depth), 1.);\r
    }

    var filter_size: i32 = min(i32(max_filter_size), i32(ceil(projected_particle_constant / depth)));

    var sigma: f32 = f32(filter_size) / 3.0; \r
    var two_sigma: f32 = 2.0 * sigma * sigma;\r
    var sigma_depth: f32 = depth_threshold / 3.0;\r
    var two_sigma_depth: f32 = 2.0 * sigma_depth * sigma_depth;

    var sum: f32 = 0.0;\r
    var wsum: f32 = 0.0;\r
    for (var x: i32 = -filter_size; x <= filter_size; x++) {\r
        var coords: vec2f = vec2f(f32(x));\r
        var sampled_depth: f32 = abs(textureLoad(texture, vec2u(input.iuv + coords * uniforms.blur_dir), 0).r);

        var rr: f32 = dot(coords, coords);\r
        var w: f32 = exp(-rr / two_sigma);

        var r_depth: f32 = sampled_depth - depth;\r
        var wd: f32 = exp(-r_depth * r_depth / two_sigma_depth);\r
        sum += sampled_depth * w * wd;\r
        wsum += w * wd;\r
    }

    sum /= wsum;

    return vec4f(sum, 0., 0., 1.);\r
}`,Vt=`@group(0) @binding(0) var texture_sampler: sampler;\r
@group(0) @binding(1) var texture: texture_2d<f32>;\r
@group(0) @binding(2) var<uniform> uniforms: RenderUniforms;\r
@group(0) @binding(3) var thickness_texture: texture_2d<f32>;\r
@group(0) @binding(4) var envmap_texture: texture_cube<f32>;\r
@group(0) @binding(5) var material_texture: texture_2d<u32>;

struct RenderUniforms {\r
    texel_size: vec2f, \r
    sphere_size: f32, \r
    inv_projection_matrix: mat4x4f, \r
    projection_matrix: mat4x4f, \r
    view_matrix: mat4x4f, \r
    inv_view_matrix: mat4x4f, \r
}

struct FragmentInput {\r
    @location(0) uv: vec2f, \r
    @location(1) iuv: vec2f, \r
}

fn computeViewPosFromUVDepth(tex_coord: vec2f, depth: f32) -> vec3f {\r
    var ndc: vec4f = vec4f(tex_coord.x * 2.0 - 1.0, 1.0 - 2.0 * tex_coord.y, 0.0, 1.0);\r
    
    ndc.z = -uniforms.projection_matrix[2].z + uniforms.projection_matrix[3].z / depth;\r
    ndc.w = 1.0;

    var eye_pos: vec4f = uniforms.inv_projection_matrix * ndc;

    return eye_pos.xyz / eye_pos.w;\r
}

fn getViewPosFromTexCoord(tex_coord: vec2f, iuv: vec2f) -> vec3f {\r
    var depth: f32 = abs(textureLoad(texture, vec2u(iuv), 0).x);\r
    return computeViewPosFromUVDepth(tex_coord, depth);\r
}

@fragment\r
fn fs(input: FragmentInput) -> @location(0) vec4f {\r
    var depth: f32 = abs(textureLoad(texture, vec2u(input.iuv), 0).r);

    let bgColor: vec3f = vec3f(0.7, 0.7, 0.75);

    if (depth >= 1e4) {\r
        return vec4f(bgColor, 1.);\r
    }

    var viewPos: vec3f = computeViewPosFromUVDepth(input.uv, depth); 

    var ddx: vec3f = getViewPosFromTexCoord(input.uv + vec2f(uniforms.texel_size.x, 0.), input.iuv + vec2f(1.0, 0.0)) - viewPos; \r
    var ddy: vec3f = getViewPosFromTexCoord(input.uv + vec2f(0., uniforms.texel_size.y), input.iuv + vec2f(0.0, 1.0)) - viewPos; \r
    var ddx2: vec3f = viewPos - getViewPosFromTexCoord(input.uv + vec2f(-uniforms.texel_size.x, 0.), input.iuv + vec2f(-1.0, 0.0));\r
    var ddy2: vec3f = viewPos - getViewPosFromTexCoord(input.uv + vec2f(0., -uniforms.texel_size.y), input.iuv + vec2f(0.0, -1.0));

    if (abs(ddx.z) > abs(ddx2.z)) {\r
        ddx = ddx2; \r
    }\r
    if (abs(ddy.z) > abs(ddy2.z)) {\r
        ddy = ddy2;\r
    }

    var normal: vec3f = -normalize(cross(ddx, ddy)); \r
    var rayDir = normalize(viewPos);\r
    var lightDir = normalize((uniforms.view_matrix * vec4f(-1, 1, -1, 0.)).xyz);\r
    var H: vec3f        = normalize(lightDir - rayDir);\r
    var specular: f32   = pow(max(0.0, dot(H, normal)), 250.);\r
    var diffuse: f32  = max(0.0, dot(lightDir, normal)) * 1.0;

    var density = 0.7; \r
    \r
    var thickness = textureLoad(thickness_texture, vec2u(input.iuv), 0).r;\r
    var material_type = textureLoad(material_texture, vec2u(input.iuv), 0).r;

    
    var diffuseColor = vec3f(0.0, 0.7375, 0.95); 
    if (material_type == 1u) {\r
        diffuseColor = vec3f(0.95, 0.2, 0.1); 
    } else if (material_type == 2u) {\r
        diffuseColor = vec3f(0.2, 0.95, 0.3); 
    } else if (material_type == 3u) {\r
        diffuseColor = vec3f(0.95, 0.85, 0.1); 
    } else if (material_type == 4u) {\r
        diffuseColor = vec3f(0.9, 0.85, 0.65); 
    } else if (material_type == 5u) {\r
        diffuseColor = vec3f(0.7, 0.6, 0.4); 
    } else if (material_type == 6u) {\r
        diffuseColor = vec3f(0.95, 0.95, 1.0); 
    } else if (material_type == 7u) {\r
        diffuseColor = vec3f(0.55, 0.45, 0.35); 
    } else if (material_type == 8u) {\r
        diffuseColor = vec3f(0.85, 0.1, 0.85); 
    } else if (material_type == 9u) {\r
        diffuseColor = vec3f(0.4, 0.4, 0.45); 
    }\r
    var transmittance: vec3f = exp(-density * thickness * (1.0 - diffuseColor)); \r
    var refractionColor: vec3f = bgColor * transmittance;

    let F0 = 0.02;\r
    var fresnel: f32 = clamp(F0 + (1.0 - F0) * pow(1.0 - dot(normal, -rayDir), 5.0) + 0.0, 0., 1.);

    var reflectionDir: vec3f = reflect(rayDir, normal);\r
    var reflectionDirWorld: vec3f = (uniforms.inv_view_matrix * vec4f(reflectionDir, 0.0)).xyz;\r
    var reflectionColor: vec3f = textureSampleLevel(envmap_texture, texture_sampler, reflectionDirWorld, 0.).rgb; \r
    var finalColor = 0.0 * specular + mix(refractionColor, reflectionColor, fresnel);\r

    let maxDeltaZ = max(max(abs(ddx.z), abs(ddy.z)), max(abs(ddx2.z), abs(ddy2.z)));\r
    if (maxDeltaZ > 1.5 * uniforms.sphere_size) {\r
        return vec4f(mix(finalColor, vec3f(0.9), 0.4), 1.0);\r
    }

    return vec4f(finalColor, 1.0);

    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}`,At=`struct VertexOutput {\r
  @builtin(position) position : vec4f,\r
  @location(0) uv : vec2f,\r
  @location(1) iuv : vec2f,\r
}

override screenWidth: f32;\r
override screenHeight: f32;

@vertex\r
fn vs(@builtin(vertex_index) vertex_index : u32) -> VertexOutput {\r
    var out: VertexOutput;

    var pos = array(\r
        vec2( 1.0,  1.0),\r
        vec2( 1.0, -1.0),\r
        vec2(-1.0, -1.0),\r
        vec2( 1.0,  1.0),\r
        vec2(-1.0, -1.0),\r
        vec2(-1.0,  1.0),\r
    );

    var uv = array(\r
        vec2(1.0, 0.0),\r
        vec2(1.0, 1.0),\r
        vec2(0.0, 1.0),\r
        vec2(1.0, 0.0),\r
        vec2(0.0, 1.0),\r
        vec2(0.0, 0.0),\r
    );

    out.position = vec4(pos[vertex_index], 0.0, 1.0);\r
    out.uv = uv[vertex_index];\r
    out.iuv = out.uv * vec2f(screenWidth, screenHeight);

    return out;\r
}`,Gt=`struct RenderUniforms {\r
    texel_size: vec2f, \r
    sphere_size: f32, \r
    inv_projection_matrix: mat4x4f, \r
    projection_matrix: mat4x4f, \r
    view_matrix: mat4x4f, \r
    inv_view_matrix: mat4x4f, \r
}

struct VertexOutput {\r
    @builtin(position) position: vec4f, \r
    @location(0) uv: vec2f, \r
}

struct FragmentInput {\r
    @location(0) uv: vec2f, \r
}

struct PosVel {\r
    position: vec3f,\r
    material_type: u32,\r
    v: vec3f, \r
    density: f32, \r
}

@group(0) @binding(0) var<storage> particles: array<PosVel>;\r
@group(0) @binding(1) var<uniform> uniforms: RenderUniforms;\r
@group(0) @binding(2) var<uniform> stretchStrength: f32;

override restDensity: f32;\r
override densitySizeScale: f32;

fn computeStretchedVertex(position: vec2f, velocity_dir: vec2f, strength: f32) -> vec2f {\r
    
    let stretch_offset: vec2f = dot(velocity_dir, position) * velocity_dir;\r
    return position + stretch_offset * strength;\r
}

fn area(v1: vec2f, v2: vec2f, v3: vec2f, v4: vec2f) -> f32 {\r
    let ab = v2 - v1;\r
    let ad = v4 - v1;\r
    let s = abs(ab.x * ad.y - ab.y * ad.x);\r
    return s;\r
}

fn scaleQuad(vel: vec2f, r: f32, strength: f32) -> f32 {\r
    let s1: f32 = r * r;\r
    let v1 = computeStretchedVertex(vec2f(0.5 * r, 0.5 * r), vel, strength);\r
    let v2 = computeStretchedVertex(vec2f(-0.5 * r, 0.5 * r), vel, strength);\r
    let v3 = computeStretchedVertex(vec2f(-0.5 * r, -0.5 * r), vel, strength);\r
    let v4 = computeStretchedVertex(vec2f(0.5 * r, -0.5 * r), vel, strength);\r
    let s2: f32 = area(v1, v2, v3, v4);\r
    return sqrt(s1 / s2);\r
}

@vertex\r
fn vs(    \r
    @builtin(vertex_index) vertex_index: u32, \r
    @builtin(instance_index) instance_index: u32\r
) -> VertexOutput {\r
    var corner_positions = array(\r
        vec2( 0.5,  0.5),\r
        vec2( 0.5, -0.5),\r
        vec2(-0.5, -0.5),\r
        vec2( 0.5,  0.5),\r
        vec2(-0.5, -0.5),\r
        vec2(-0.5,  0.5),\r
    );

    let size = uniforms.sphere_size * clamp(particles[instance_index].density / restDensity * densitySizeScale, 0.0, 1.0);\r
    let projected_velocity = (uniforms.view_matrix * vec4f(particles[instance_index].v, 0.0)).xy;\r
    let stretched_position = computeStretchedVertex(corner_positions[vertex_index] * size, projected_velocity, stretchStrength);\r
    let corner = vec3(stretched_position, 0.0) * scaleQuad(projected_velocity, size, stretchStrength);

    let uv = corner_positions[vertex_index] + 0.5;

    let real_position = particles[instance_index].position;\r
    let view_position = (uniforms.view_matrix * vec4f(real_position, 1.0)).xyz;

    let out_position = uniforms.projection_matrix * vec4f(view_position + corner, 1.0);

    return VertexOutput(out_position, uv);\r
}

@fragment\r
fn fs(input: FragmentInput) -> @location(0) vec4f {\r
    var normalxy: vec2f = input.uv * 2.0 - 1.0;\r
    var r2: f32 = dot(normalxy, normalxy);\r
    if (r2 > 1.0) {\r
        discard;\r
    }\r
    var thickness: f32 = sqrt(1.0 - r2);\r
    let particle_alpha = 0.05;

    return vec4f(vec3f(particle_alpha * thickness), 1.0);\r
}`,It=`@group(0) @binding(1) var texture: texture_2d<f32>;\r
@group(0) @binding(2) var<uniform> uniforms: FilterUniforms;

struct FragmentInput {\r
    @location(0) uv: vec2f,  \r
    @location(1) iuv: vec2f\r
}

struct FilterUniforms {\r
    blur_dir: vec2f, \r
}

@fragment\r
fn fs(input: FragmentInput) -> @location(0) vec4f {\r
    
    var thickness: f32 = textureLoad(texture, vec2u(input.iuv), 0).r;\r
    if (thickness == 0.) {\r
        return vec4f(0., 0., 0., 1.);\r
    }

    var filter_size: i32 = 30; 
    var sigma: f32 = f32(filter_size) / 3.0;\r
    var two_sigma: f32 = 2.0 * sigma * sigma;

    var sum = 0.;\r
    var wsum = 0.;

    for (var x: i32 = -filter_size; x <= filter_size; x++) {\r
        var coords: vec2f = vec2f(f32(x));\r
        var sampled_thickness: f32 = textureLoad(texture, vec2u(input.iuv + uniforms.blur_dir * coords), 0).r;

        var w: f32 = exp(-coords.x * coords.x / two_sigma);

        sum += sampled_thickness * w;\r
        wsum += w;\r
    }

    sum /= wsum;

    return vec4f(sum, 0., 0., 1.);\r
}`,Ut=`struct VertexOutput {\r
    @builtin(position) position: vec4f, \r
    @location(0) uv: vec2f, \r
    @location(1) view_position: vec3f, \r
    @location(2) speed: f32,\r
    @location(3) @interpolate(flat) material_type: u32,\r
}

struct FragmentInput {\r
    @location(0) uv: vec2f, \r
    @location(1) view_position: vec3f, \r
    @location(2) speed: f32,\r
    @location(3) @interpolate(flat) material_type: u32,\r
}

struct FragmentOutput {\r
    @location(0) color: vec4f, \r
    @location(1) depth: vec4f,\r
    @location(2) material: vec4u,\r
    @builtin(frag_depth) frag_depth: f32, \r
}

struct RenderUniforms {\r
    texel_size: vec2f, \r
    sphere_size: f32, \r
    inv_projection_matrix: mat4x4f, \r
    projection_matrix: mat4x4f, \r
    view_matrix: mat4x4f, \r
    inv_view_matrix: mat4x4f, \r
}

struct PosVel {\r
    position: vec3f,\r
    material_type: u32,\r
    v: vec3f, \r
    density: f32, \r
}

@group(0) @binding(0) var<storage> particles: array<PosVel>;\r
@group(0) @binding(1) var<uniform> uniforms: RenderUniforms;\r
@group(0) @binding(2) var<uniform> stretchStrength: f32;

override restDensity: f32;\r
override densitySizeScale: f32;

fn computeStretchedVertex(position: vec2f, velocity_dir: vec2f, strength: f32) -> vec2f {\r
    
    let stretch_offset: vec2f = dot(velocity_dir, position) * velocity_dir;\r
    return position + stretch_offset * strength;\r
}

fn area(v1: vec2f, v2: vec2f, v3: vec2f, v4: vec2f) -> f32 {\r
    let ab = v2 - v1;\r
    let ad = v4 - v1;\r
    let s = abs(ab.x * ad.y - ab.y * ad.x);\r
    return s;\r
}

fn scaleQuad(vel: vec2f, r: f32, strength: f32) -> f32 {\r
    let s1: f32 = r * r;\r
    let v1 = computeStretchedVertex(vec2f(0.5 * r, 0.5 * r), vel, strength);\r
    let v2 = computeStretchedVertex(vec2f(-0.5 * r, 0.5 * r), vel, strength);\r
    let v3 = computeStretchedVertex(vec2f(-0.5 * r, -0.5 * r), vel, strength);\r
    let v4 = computeStretchedVertex(vec2f(0.5 * r, -0.5 * r), vel, strength);\r
    let s2: f32 = area(v1, v2, v3, v4);\r
    return sqrt(s1 / s2);\r
}

@vertex\r
fn vs(    \r
    @builtin(vertex_index) vertex_index: u32, \r
    @builtin(instance_index) instance_index: u32\r
) -> VertexOutput {\r
    var corner_positions = array(\r
        vec2( 0.5,  0.5),\r
        vec2( 0.5, -0.5),\r
        vec2(-0.5, -0.5),\r
        vec2( 0.5,  0.5),\r
        vec2(-0.5, -0.5),\r
        vec2(-0.5,  0.5),\r
    );

    let size = uniforms.sphere_size * clamp(particles[instance_index].density / restDensity * densitySizeScale, 0.0, 1.0);\r
    let projected_velocity = (uniforms.view_matrix * vec4f(particles[instance_index].v, 0.0)).xy;\r
    let stretched_position = computeStretchedVertex(corner_positions[vertex_index] * size, projected_velocity, stretchStrength);\r
    let corner = vec3(stretched_position, 0.0) * scaleQuad(projected_velocity, size, stretchStrength);

    let speed = sqrt(dot(particles[instance_index].v, particles[instance_index].v));

    let uv = corner_positions[vertex_index] + 0.5;

    let real_position = particles[instance_index].position;\r
    let view_position = (uniforms.view_matrix * vec4f(real_position, 1.0)).xyz;

    let out_position = uniforms.projection_matrix * vec4f(view_position + corner, 1.0);

    let material_type = particles[instance_index].material_type;\r
    return VertexOutput(out_position, uv, view_position, speed, material_type);\r
}

fn value_to_color(value: f32) -> vec3<f32> {\r
    
    let col0 = vec3f(0, 0.4, 0.8);\r
    let col1 = vec3f(35, 161, 165) / 256;\r
    let col2 = vec3f(95, 254, 150) / 256;\r
    let col3 = vec3f(243, 250, 49) / 256;\r
    let col4 = vec3f(255, 165, 0) / 256;\r

    if (0 <= value && value < 0.25) {\r
        let t = value / 0.25;\r
        return mix(col0, col1, t);\r
    } else if (0.25 <= value && value < 0.50) {\r
        let t = (value - 0.25) / 0.25;\r
        return mix(col1, col2, t);\r
    } else if (0.50 <= value && value < 0.75) {\r
        let t = (value - 0.50) / 0.25;\r
        return mix(col2, col3, t);\r
    } else {\r
        let t = (value - 0.75) / 0.25;\r
        return mix(col3, col4, t);\r
    }

}

@fragment\r
fn fs(input: FragmentInput) -> FragmentOutput {\r
    var out: FragmentOutput;

    var normalxy: vec2f = input.uv * 2.0 - 1.0;\r
    var r2: f32 = dot(normalxy, normalxy);\r
    if (r2 > 1.0) {\r
        discard;\r
    }\r
    var normalz = sqrt(1.0 - r2);\r
    var normal = vec3(normalxy, normalz);

    var radius = uniforms.sphere_size / 2;\r
    var real_view_pos: vec4f = vec4f(input.view_position + normal * radius, 1.0);\r
    var clip_space_pos: vec4f = uniforms.projection_matrix * real_view_pos;\r
    out.frag_depth = clip_space_pos.z / clip_space_pos.w;

    var diffuse: f32 = max(0.0, dot(normal, normalize(vec3(1.0, 1.0, 1.0))));\r
    \r
    
    var baseColor: vec3f;\r
    if (input.material_type == 1u) {\r
        baseColor = vec3f(0.95, 0.2, 0.1); 
    } else if (input.material_type == 2u) {\r
        baseColor = vec3f(0.2, 0.95, 0.3); 
    } else if (input.material_type == 3u) {\r
        baseColor = vec3f(0.95, 0.85, 0.1); 
    } else if (input.material_type == 4u) {\r
        baseColor = vec3f(0.9, 0.85, 0.65); 
    } else if (input.material_type == 5u) {\r
        baseColor = vec3f(0.7, 0.6, 0.4); 
    } else if (input.material_type == 6u) {\r
        baseColor = vec3f(0.95, 0.95, 1.0); 
    } else if (input.material_type == 7u) {\r
        baseColor = vec3f(0.55, 0.45, 0.35); 
    } else if (input.material_type == 8u) {\r
        baseColor = vec3f(0.85, 0.1, 0.85); 
    } else if (input.material_type == 9u) {\r
        baseColor = vec3f(0.4, 0.4, 0.45); 
    } else {\r
        baseColor = vec3f(0.0, 0.7375, 0.95); 
    }

    out.color = vec4(diffuse * baseColor, 1.);\r
    out.depth = vec4(real_view_pos.z, 0., 0., 1.);\r
    out.material = vec4u(input.material_type, 0u, 0u, 1u);\r
    return out;\r
}`;class Et{constructor(h,z,B,P,A,D,q,$,J,H){b(this,"depthMapPipeline");b(this,"depthFilterPipeline");b(this,"thicknessMapPipeline");b(this,"thicknessFilterPipeline");b(this,"fluidPipeline");b(this,"spherePipeline");b(this,"depthMapTextureView");b(this,"tmpDepthMapTextureView");b(this,"thicknessTextureView");b(this,"tmpThicknessTextureView");b(this,"depthTestTextureView");b(this,"materialTextureView");b(this,"depthMapBindGroup");b(this,"depthFilterBindGroups");b(this,"thicknessMapBindGroup");b(this,"thicknessFilterBindGroups");b(this,"fluidBindGroup");b(this,"sphereBindGroup");b(this,"stretchStrengthBuffer");b(this,"device");this.device=h;const X=100,K=10,W=2*P,j=12,G={screenHeight:z.height,screenWidth:z.width},ne={depth_threshold:P*K,max_filter_size:X,projected_particle_constant:j*W*.05*(z.height/2)/Math.tan(A/2)},Q={restDensity:H,densitySizeScale:4},Z=h.createSampler({magFilter:"linear",minFilter:"linear"}),L=h.createShaderModule({code:At}),C=h.createShaderModule({code:St}),de=h.createShaderModule({code:Tt}),ye=h.createShaderModule({code:Vt}),he=h.createShaderModule({code:Ut}),ae=h.createShaderModule({code:Gt}),Me=h.createShaderModule({code:It});this.spherePipeline=h.createRenderPipeline({label:"ball pipeline",layout:"auto",vertex:{module:he,constants:Q},fragment:{module:he,targets:[{format:B},{format:"r32float"},{format:"r32uint"}]},primitive:{topology:"triangle-list"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth32float"}}),this.depthMapPipeline=h.createRenderPipeline({label:"depth map pipeline",layout:"auto",vertex:{module:C,constants:Q},fragment:{module:C,targets:[{format:"r32float"},{format:"r32uint"}]},primitive:{topology:"triangle-list"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth32float"}}),this.depthFilterPipeline=h.createRenderPipeline({label:"filter pipeline",layout:"auto",vertex:{module:L,constants:G},fragment:{module:de,constants:ne,targets:[{format:"r32float"}]},primitive:{topology:"triangle-list"}}),this.thicknessMapPipeline=h.createRenderPipeline({label:"thickness map pipeline",layout:"auto",vertex:{module:ae,constants:Q},fragment:{module:ae,targets:[{format:"r16float",writeMask:GPUColorWrite.RED,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}}]},primitive:{topology:"triangle-list"}}),this.thicknessFilterPipeline=h.createRenderPipeline({label:"thickness filter pipeline",layout:"auto",vertex:{module:L,constants:G},fragment:{module:Me,targets:[{format:"r16float"}]},primitive:{topology:"triangle-list"}}),this.fluidPipeline=h.createRenderPipeline({label:"fluid rendering pipeline",layout:"auto",vertex:{module:L,constants:G},fragment:{module:ye,targets:[{format:B}]},primitive:{topology:"triangle-list"}});const ie=h.createTexture({label:"temporary depth map texture",size:[z.width,z.height,1],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"r32float"}),Se=h.createTexture({label:"thickness map texture",size:[z.width,z.height,1],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"r16float"}),R=h.createTexture({label:"temporary thickness map texture",size:[z.width,z.height,1],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"r16float"}),V=h.createTexture({size:[z.width,z.height,1],format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT}),U=h.createTexture({label:"material type texture",size:[z.width,z.height,1],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"r32uint"});this.depthMapTextureView=J,this.tmpDepthMapTextureView=ie.createView(),this.thicknessTextureView=Se.createView(),this.tmpThicknessTextureView=R.createView(),this.depthTestTextureView=V.createView(),this.materialTextureView=U.createView();const ve=new ArrayBuffer(8),N=new ArrayBuffer(8),Pe=new Float32Array(ve),ee=new Float32Array(N);Pe.set([1,0]),ee.set([0,1]);const ge=h.createBuffer({label:"filter uniform buffer",size:ve.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),Y=h.createBuffer({label:"filter uniform buffer",size:N.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});this.stretchStrengthBuffer=h.createBuffer({label:"stretch strength buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),h.queue.writeBuffer(ge,0,ve),h.queue.writeBuffer(Y,0,N),this.depthMapBindGroup=h.createBindGroup({label:"depth map bind group",layout:this.depthMapPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:D}},{binding:1,resource:{buffer:q}},{binding:2,resource:{buffer:this.stretchStrengthBuffer}}]}),this.depthFilterBindGroups=[],this.depthFilterBindGroups=[h.createBindGroup({label:"filterX bind group",layout:this.depthFilterPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:this.depthMapTextureView},{binding:2,resource:{buffer:ge}}]}),h.createBindGroup({label:"filterY bind group",layout:this.depthFilterPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:this.tmpDepthMapTextureView},{binding:2,resource:{buffer:Y}}]})],this.thicknessMapBindGroup=h.createBindGroup({label:"thickness map bind group",layout:this.thicknessMapPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:D}},{binding:1,resource:{buffer:q}},{binding:2,resource:{buffer:this.stretchStrengthBuffer}}]}),this.thicknessFilterBindGroups=[],this.thicknessFilterBindGroups=[h.createBindGroup({label:"thickness filterX bind group",layout:this.thicknessFilterPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:this.thicknessTextureView},{binding:2,resource:{buffer:ge}}]}),h.createBindGroup({label:"thickness filterY bind group",layout:this.thicknessFilterPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:this.tmpThicknessTextureView},{binding:2,resource:{buffer:Y}}]})],this.fluidBindGroup=h.createBindGroup({label:"fluid bind group",layout:this.fluidPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:Z},{binding:1,resource:this.depthMapTextureView},{binding:2,resource:{buffer:q}},{binding:3,resource:this.thicknessTextureView},{binding:4,resource:$},{binding:5,resource:this.materialTextureView}]}),this.sphereBindGroup=h.createBindGroup({label:"ball bind group",layout:this.spherePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:D}},{binding:1,resource:{buffer:q}},{binding:2,resource:{buffer:this.stretchStrengthBuffer}}]})}execute(h,z,B,P,A){const D=new ArrayBuffer(4),q=new Float32Array(D);q.set([A]),this.device.queue.writeBuffer(this.stretchStrengthBuffer,0,q);const $={colorAttachments:[{view:this.depthMapTextureView,clearValue:{r:1e6,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"},{view:this.materialTextureView,clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:this.depthTestTextureView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},J=[{colorAttachments:[{view:this.tmpDepthMapTextureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},{colorAttachments:[{view:this.depthMapTextureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]}],H={colorAttachments:[{view:this.thicknessTextureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},X=[{colorAttachments:[{view:this.tmpThicknessTextureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},{colorAttachments:[{view:this.thicknessTextureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]}],K={colorAttachments:[{view:h.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},W={colorAttachments:[{view:h.getCurrentTexture().createView(),clearValue:{r:.7,g:.7,b:.75,a:1},loadOp:"clear",storeOp:"store"},{view:this.depthMapTextureView,clearValue:{r:1e6,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"},{view:this.materialTextureView,clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:this.depthTestTextureView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}};if(P){const G=z.beginRenderPass(W);G.setBindGroup(0,this.sphereBindGroup),G.setPipeline(this.spherePipeline),G.draw(6,B),G.end()}else{const G=z.beginRenderPass($);G.setBindGroup(0,this.depthMapBindGroup),G.setPipeline(this.depthMapPipeline),G.draw(6,B),G.end();for(var j=0;j<4;j++){const Z=z.beginRenderPass(J[0]);Z.setBindGroup(0,this.depthFilterBindGroups[0]),Z.setPipeline(this.depthFilterPipeline),Z.draw(6),Z.end();const L=z.beginRenderPass(J[1]);L.setBindGroup(0,this.depthFilterBindGroups[1]),L.setPipeline(this.depthFilterPipeline),L.draw(6),L.end()}const ne=z.beginRenderPass(H);ne.setBindGroup(0,this.thicknessMapBindGroup),ne.setPipeline(this.thicknessMapPipeline),ne.draw(6,B),ne.end();for(var j=0;j<1;j++){const L=z.beginRenderPass(X[0]);L.setBindGroup(0,this.thicknessFilterBindGroups[0]),L.setPipeline(this.thicknessFilterPipeline),L.draw(6),L.end();const C=z.beginRenderPass(X[1]);C.setBindGroup(0,this.thicknessFilterBindGroups[1]),C.setPipeline(this.thicknessFilterPipeline),C.draw(6),C.end()}const Q=z.beginRenderPass(K);Q.setBindGroup(0,this.fluidBindGroup),Q.setPipeline(this.fluidPipeline),Q.draw(6),Q.end()}}}async function Rt(){const p=document.querySelector("canvas");if(!navigator.gpu)throw alert("WebGPU is not supported on your browser."),new Error;const h=await navigator.gpu.requestAdapter();if(!h)throw alert("Adapter is not available."),new Error;const z=await h.requestDevice(),B=p.getContext("webgpu");if(!B)throw new Error;let P=.7;p.width=P*p.clientWidth,p.height=P*p.clientHeight;const A=navigator.gpu.getPreferredCanvasFormat();return B.configure({device:z,format:A}),{canvas:p,device:z,presentationFormat:A,context:B}}async function Ot(){const{canvas:p,device:h,presentationFormat:z,context:B}=await Rt();let P=document.getElementById("number-button"),A=!1,D="1";P.addEventListener("change",function(f){const n=f.target;(n==null?void 0:n.name)==="options"&&(A=!0,D=n.value)});const q=document.getElementById("small-value"),$=document.getElementById("medium-value"),J=document.getElementById("large-value");console.log("initialization done"),B.configure({device:h,format:z});let H;{const n=["cubemap/posx.png","cubemap/negx.png","cubemap/posy.png","cubemap/negy.png","cubemap/posz.png","cubemap/negz.png"].map(async u=>{const d=await fetch(u);return createImageBitmap(await d.blob())}),s=await Promise.all(n);H=h.createTexture({dimension:"2d",size:[s[0].width,s[0].height,6],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});for(let u=0;u<s.length;u++){const d=s[u];h.queue.copyExternalImageToTexture({source:d},{texture:H,origin:[0,0,u]},[d.width,d.height])}}const X=H.createView({dimension:"cube"});console.log("cubemap initialization done"),ke.texel_size.set([1/p.width,1/p.height]);const K=Xe,W=h.createBuffer({label:"particles buffer",size:K*He,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),j=h.createBuffer({label:"position buffer",size:32*He,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),G=h.createBuffer({label:"filter uniform buffer",size:Oe.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});console.log("buffer allocating done");let ne=[3e4,6e4,1e5],Q=[[52,52,52],[60,60,60],[72,72,72]],Z=[60,70,90],L=[15,20,25],C=[5,6,8],de=[2.5,2,1.5];const ye=document.getElementById("fluidCanvas"),he=45*Math.PI/180,ae=.7,Me=2*ae,ie=.7,R=h.createTexture({label:"depth map texture",size:[p.width,p.height,1],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"r32float"}).createView(),V=new Ft(W,j,Me,h,G,R,p),U=new Et(h,p,z,ae,he,j,G,X,R,V.restDensity);console.log("simulator initialization done");let ve=document.getElementById("material-select");ve.addEventListener("change",function(){const f=parseInt(ve.value);V.setSpawnMaterialType(f),console.log("Changed spawn material type to:",f)});let N=document.getElementById("faucet");N.addEventListener("mousedown",()=>{V.setSpawnPaused(!1),N.style.background="#2ecc71",N.textContent="💧 SPAWNING..."}),N.addEventListener("mouseup",()=>{V.setSpawnPaused(!0),N.style.background="#4a90e2",N.textContent="💧 FAUCET (Hold)"}),N.addEventListener("mouseleave",()=>{V.setSpawnPaused(!0),N.style.background="#4a90e2",N.textContent="💧 FAUCET (Hold)"}),N.addEventListener("touchstart",f=>{f.preventDefault(),V.setSpawnPaused(!1),N.style.background="#2ecc71",N.textContent="💧 SPAWNING..."}),N.addEventListener("touchend",f=>{f.preventDefault(),V.setSpawnPaused(!0),N.style.background="#4a90e2",N.textContent="💧 FAUCET (Hold)"});let Pe=document.getElementById("clear");Pe.addEventListener("click",()=>{V.clearParticles(),console.log("Cleared all particles"),Pe.style.background="#c0392b",setTimeout(()=>{Pe.style.background="#e74c3c"},100)});const ee=new wt(ye);let ge=document.getElementById("error-reason");ge.textContent="",h.lost.then(f=>{const n=f.reason?`reason: ${f.reason}`:"unknown reason";ge.textContent=n});let Y=1,ce=Q[Y],se=[...ce];q.textContent="30,000",$.textContent="60,000",J.textContent="100,000";let Ie=!1,be=!1,Te=!0,ze=1;console.log("simulation start");async function i(){if(performance.now(),A||Te){Y=parseInt(D),ce=Q[Y],V.reset(ce,L[Y]),ee.reset(Z[Y],[ce[0]/2,ce[1]/2,ce[2]/2],he,ie),se=[...ce];let Ye=document.getElementById("slider");Ye.value="100",A=!1,Te=!1}const f=document.getElementById("slider"),n=document.getElementById("particle"),s=document.getElementById("autorotate"),u=document.getElementById("gravity");document.getElementById("faucet"),document.getElementById("clear");const d=document.getElementById("damping-slider"),x=document.getElementById("damping-value"),e=document.getElementById("wall-friction-slider"),o=document.getElementById("wall-friction-value"),t=document.getElementById("wall-restitution-slider"),r=document.getElementById("wall-restitution-value"),a=document.getElementById("spherical-constraint-slider"),g=document.getElementById("spherical-constraint-value"),w=document.getElementById("gravity-strength-slider"),c=document.getElementById("gravity-strength-value"),l=document.getElementById("stiffness-slider"),v=document.getElementById("stiffness-value"),_=document.getElementById("cohesion-slider"),m=document.getElementById("cohesion-value"),y=document.getElementById("elasticity-slider"),M=document.getElementById("elasticity-value"),S=document.getElementById("friction-slider"),I=document.getElementById("friction-value");Ie=n.checked,be=s.checked,V.setGravityMode(u.checked);const F=parseInt(d.value),T=.95+F/100*.05;V.setDamping(T),x.textContent=F.toString();const E=parseInt(e.value),k=E/100*.5;V.setWallFriction(k),o.textContent=E.toString();const te=parseInt(t.value),oe=.5+te/100*.5;V.setWallRestitution(oe),r.textContent=te.toString();const re=parseInt(a.value),le=re/100;V.setSphericalConstraintStrength(le),g.textContent=re.toString();const ue=parseInt(w.value),_e=ue/100;V.setGravityStrength(_e),c.textContent=ue.toString();const fe=parseInt(l.value),me=fe/100*2;V.setStiffnessMultiplier(me),v.textContent=fe.toString();const pe=parseInt(_.value),Be=pe/100;V.setCohesionMultiplier(Be),m.textContent=pe.toString();const xe=parseInt(y.value),De=xe/100;V.setElasticityMultiplier(De),M.textContent=xe.toString();const we=parseInt(S.value),Ve=we/100*2;V.setFrictionMultiplier(Ve),I.textContent=we.toString();let Ae=parseInt(f.value)/200+.5;const Ge=-.01,qe=.04;let Ee=Math.max(Ae-ze,Ge);Ee=Math.min(Ee,qe),ze+=Ee,se[2]=ce[2]*ze,V.changeBoxSize(se),ee.target=[se[0]/2,se[1]/2,se[2]/2],ee.recalculateView(),h.queue.writeBuffer(G,0,Oe);const Re=h.createCommandEncoder();V.execute(Re,[ee.currentHoverX/p.clientWidth,ee.currentHoverY/p.clientHeight],ee.calcMouseVelocity(),ne[Y],C[Y]),U.execute(B,Re,V.numParticles,Ie,de[Y]),h.queue.submit([Re.finish()]),ee.setNewPrevMouseCoord(),be&&ee.stepAngle(),performance.now(),requestAnimationFrame(i)}requestAnimationFrame(i)}Ot();

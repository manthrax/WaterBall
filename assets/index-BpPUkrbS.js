var cn=Object.defineProperty;var an=(f,g,M)=>g in f?cn(f,g,{enumerable:!0,configurable:!0,writable:!0,value:M}):f[g]=M;var b=(f,g,M)=>an(f,typeof g!="symbol"?g+"":g,M);(function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const P of document.querySelectorAll('link[rel="modulepreload"]'))B(P);new MutationObserver(P=>{for(const D of P)if(D.type==="childList")for(const I of D.addedNodes)I.tagName==="LINK"&&I.rel==="modulepreload"&&B(I)}).observe(document,{childList:!0,subtree:!0});function M(P){const D={};return P.integrity&&(D.integrity=P.integrity),P.referrerPolicy&&(D.referrerPolicy=P.referrerPolicy),P.crossOrigin==="use-credentials"?D.credentials="include":P.crossOrigin==="anonymous"?D.credentials="omit":D.credentials="same-origin",D}function B(P){if(P.ep)return;P.ep=!0;const D=M(P);fetch(P.href,D)}})();function un(f,g){return class extends f{constructor(...M){super(...M),g(this)}}}const ln=un(Array,f=>f.fill(0));let O=1e-6;function fn(f){function g(e=0,o=0){const n=new f(2);return e!==void 0&&(n[0]=e,o!==void 0&&(n[1]=o)),n}const M=g;function B(e,o,n){const i=n??new f(2);return i[0]=e,i[1]=o,i}function P(e,o){const n=o??new f(2);return n[0]=Math.ceil(e[0]),n[1]=Math.ceil(e[1]),n}function D(e,o){const n=o??new f(2);return n[0]=Math.floor(e[0]),n[1]=Math.floor(e[1]),n}function I(e,o){const n=o??new f(2);return n[0]=Math.round(e[0]),n[1]=Math.round(e[1]),n}function R(e,o=0,n=1,i){const a=i??new f(2);return a[0]=Math.min(n,Math.max(o,e[0])),a[1]=Math.min(n,Math.max(o,e[1])),a}function N(e,o,n){const i=n??new f(2);return i[0]=e[0]+o[0],i[1]=e[1]+o[1],i}function J(e,o,n,i){const a=i??new f(2);return a[0]=e[0]+o[0]*n,a[1]=e[1]+o[1]*n,a}function W(e,o){const n=e[0],i=e[1],a=o[0],v=o[1],m=Math.sqrt(n*n+i*i),c=Math.sqrt(a*a+v*v),u=m*c,h=u&&ge(e,o)/u;return Math.acos(h)}function L(e,o,n){const i=n??new f(2);return i[0]=e[0]-o[0],i[1]=e[1]-o[1],i}const ie=L;function j(e,o){return Math.abs(e[0]-o[0])<O&&Math.abs(e[1]-o[1])<O}function $(e,o){return e[0]===o[0]&&e[1]===o[1]}function U(e,o,n,i){const a=i??new f(2);return a[0]=e[0]+n*(o[0]-e[0]),a[1]=e[1]+n*(o[1]-e[1]),a}function C(e,o,n,i){const a=i??new f(2);return a[0]=e[0]+n[0]*(o[0]-e[0]),a[1]=e[1]+n[1]*(o[1]-e[1]),a}function Q(e,o,n){const i=n??new f(2);return i[0]=Math.max(e[0],o[0]),i[1]=Math.max(e[1],o[1]),i}function Z(e,o,n){const i=n??new f(2);return i[0]=Math.min(e[0],o[0]),i[1]=Math.min(e[1],o[1]),i}function k(e,o,n){const i=n??new f(2);return i[0]=e[0]*o,i[1]=e[1]*o,i}const H=k;function le(e,o,n){const i=n??new f(2);return i[0]=e[0]/o,i[1]=e[1]/o,i}function fe(e,o){const n=o??new f(2);return n[0]=1/e[0],n[1]=1/e[1],n}const de=fe;function pe(e,o,n){const i=n??new f(3),a=e[0]*o[1]-e[1]*o[0];return i[0]=0,i[1]=0,i[2]=a,i}function ge(e,o){return e[0]*o[0]+e[1]*o[1]}function oe(e){const o=e[0],n=e[1];return Math.sqrt(o*o+n*n)}const we=oe;function A(e){const o=e[0],n=e[1];return o*o+n*n}const E=A;function F(e,o){const n=e[0]-o[0],i=e[1]-o[1];return Math.sqrt(n*n+i*i)}const he=F;function K(e,o){const n=e[0]-o[0],i=e[1]-o[1];return n*n+i*i}const se=K;function ee(e,o){const n=o??new f(2),i=e[0],a=e[1],v=Math.sqrt(i*i+a*a);return v>1e-5?(n[0]=i/v,n[1]=a/v):(n[0]=0,n[1]=0),n}function ve(e,o){const n=o??new f(2);return n[0]=-e[0],n[1]=-e[1],n}function X(e,o){const n=o??new f(2);return n[0]=e[0],n[1]=e[1],n}const Ge=X;function xe(e,o,n){const i=n??new f(2);return i[0]=e[0]*o[0],i[1]=e[1]*o[1],i}const Fe=xe;function re(e,o,n){const i=n??new f(2);return i[0]=e[0]/o[0],i[1]=e[1]/o[1],i}const ne=re;function ce(e=1,o){const n=o??new f(2),i=Math.random()*2*Math.PI;return n[0]=Math.cos(i)*e,n[1]=Math.sin(i)*e,n}function s(e){const o=e??new f(2);return o[0]=0,o[1]=0,o}function d(e,o,n){const i=n??new f(2),a=e[0],v=e[1];return i[0]=a*o[0]+v*o[4]+o[12],i[1]=a*o[1]+v*o[5]+o[13],i}function t(e,o,n){const i=n??new f(2),a=e[0],v=e[1];return i[0]=o[0]*a+o[4]*v+o[8],i[1]=o[1]*a+o[5]*v+o[9],i}function r(e,o,n,i){const a=i??new f(2),v=e[0]-o[0],m=e[1]-o[1],c=Math.sin(n),u=Math.cos(n);return a[0]=v*u-m*c+o[0],a[1]=v*c+m*u+o[1],a}function l(e,o,n){const i=n??new f(2);return ee(e,i),k(i,o,i)}function p(e,o,n){const i=n??new f(2);return oe(e)>o?l(e,o,i):X(e,i)}function _(e,o,n){const i=n??new f(2);return U(e,o,.5,i)}return{create:g,fromValues:M,set:B,ceil:P,floor:D,round:I,clamp:R,add:N,addScaled:J,angle:W,subtract:L,sub:ie,equalsApproximately:j,equals:$,lerp:U,lerpV:C,max:Q,min:Z,mulScalar:k,scale:H,divScalar:le,inverse:fe,invert:de,cross:pe,dot:ge,length:oe,len:we,lengthSq:A,lenSq:E,distance:F,dist:he,distanceSq:K,distSq:se,normalize:ee,negate:ve,copy:X,clone:Ge,multiply:xe,mul:Fe,divide:re,div:ne,random:ce,zero:s,transformMat4:d,transformMat3:t,rotate:r,setLength:l,truncate:p,midpoint:_}}const Ce=new Map;function on(f){let g=Ce.get(f);return g||(g=fn(f),Ce.set(f,g)),g}function dn(f){function g(c,u,h){const x=new f(3);return c!==void 0&&(x[0]=c,u!==void 0&&(x[1]=u,h!==void 0&&(x[2]=h))),x}const M=g;function B(c,u,h,x){const w=x??new f(3);return w[0]=c,w[1]=u,w[2]=h,w}function P(c,u){const h=u??new f(3);return h[0]=Math.ceil(c[0]),h[1]=Math.ceil(c[1]),h[2]=Math.ceil(c[2]),h}function D(c,u){const h=u??new f(3);return h[0]=Math.floor(c[0]),h[1]=Math.floor(c[1]),h[2]=Math.floor(c[2]),h}function I(c,u){const h=u??new f(3);return h[0]=Math.round(c[0]),h[1]=Math.round(c[1]),h[2]=Math.round(c[2]),h}function R(c,u=0,h=1,x){const w=x??new f(3);return w[0]=Math.min(h,Math.max(u,c[0])),w[1]=Math.min(h,Math.max(u,c[1])),w[2]=Math.min(h,Math.max(u,c[2])),w}function N(c,u,h){const x=h??new f(3);return x[0]=c[0]+u[0],x[1]=c[1]+u[1],x[2]=c[2]+u[2],x}function J(c,u,h,x){const w=x??new f(3);return w[0]=c[0]+u[0]*h,w[1]=c[1]+u[1]*h,w[2]=c[2]+u[2]*h,w}function W(c,u){const h=c[0],x=c[1],w=c[2],y=u[0],z=u[1],V=u[2],T=Math.sqrt(h*h+x*x+w*w),S=Math.sqrt(y*y+z*z+V*V),G=T*S,q=G&&ge(c,u)/G;return Math.acos(q)}function L(c,u,h){const x=h??new f(3);return x[0]=c[0]-u[0],x[1]=c[1]-u[1],x[2]=c[2]-u[2],x}const ie=L;function j(c,u){return Math.abs(c[0]-u[0])<O&&Math.abs(c[1]-u[1])<O&&Math.abs(c[2]-u[2])<O}function $(c,u){return c[0]===u[0]&&c[1]===u[1]&&c[2]===u[2]}function U(c,u,h,x){const w=x??new f(3);return w[0]=c[0]+h*(u[0]-c[0]),w[1]=c[1]+h*(u[1]-c[1]),w[2]=c[2]+h*(u[2]-c[2]),w}function C(c,u,h,x){const w=x??new f(3);return w[0]=c[0]+h[0]*(u[0]-c[0]),w[1]=c[1]+h[1]*(u[1]-c[1]),w[2]=c[2]+h[2]*(u[2]-c[2]),w}function Q(c,u,h){const x=h??new f(3);return x[0]=Math.max(c[0],u[0]),x[1]=Math.max(c[1],u[1]),x[2]=Math.max(c[2],u[2]),x}function Z(c,u,h){const x=h??new f(3);return x[0]=Math.min(c[0],u[0]),x[1]=Math.min(c[1],u[1]),x[2]=Math.min(c[2],u[2]),x}function k(c,u,h){const x=h??new f(3);return x[0]=c[0]*u,x[1]=c[1]*u,x[2]=c[2]*u,x}const H=k;function le(c,u,h){const x=h??new f(3);return x[0]=c[0]/u,x[1]=c[1]/u,x[2]=c[2]/u,x}function fe(c,u){const h=u??new f(3);return h[0]=1/c[0],h[1]=1/c[1],h[2]=1/c[2],h}const de=fe;function pe(c,u,h){const x=h??new f(3),w=c[2]*u[0]-c[0]*u[2],y=c[0]*u[1]-c[1]*u[0];return x[0]=c[1]*u[2]-c[2]*u[1],x[1]=w,x[2]=y,x}function ge(c,u){return c[0]*u[0]+c[1]*u[1]+c[2]*u[2]}function oe(c){const u=c[0],h=c[1],x=c[2];return Math.sqrt(u*u+h*h+x*x)}const we=oe;function A(c){const u=c[0],h=c[1],x=c[2];return u*u+h*h+x*x}const E=A;function F(c,u){const h=c[0]-u[0],x=c[1]-u[1],w=c[2]-u[2];return Math.sqrt(h*h+x*x+w*w)}const he=F;function K(c,u){const h=c[0]-u[0],x=c[1]-u[1],w=c[2]-u[2];return h*h+x*x+w*w}const se=K;function ee(c,u){const h=u??new f(3),x=c[0],w=c[1],y=c[2],z=Math.sqrt(x*x+w*w+y*y);return z>1e-5?(h[0]=x/z,h[1]=w/z,h[2]=y/z):(h[0]=0,h[1]=0,h[2]=0),h}function ve(c,u){const h=u??new f(3);return h[0]=-c[0],h[1]=-c[1],h[2]=-c[2],h}function X(c,u){const h=u??new f(3);return h[0]=c[0],h[1]=c[1],h[2]=c[2],h}const Ge=X;function xe(c,u,h){const x=h??new f(3);return x[0]=c[0]*u[0],x[1]=c[1]*u[1],x[2]=c[2]*u[2],x}const Fe=xe;function re(c,u,h){const x=h??new f(3);return x[0]=c[0]/u[0],x[1]=c[1]/u[1],x[2]=c[2]/u[2],x}const ne=re;function ce(c=1,u){const h=u??new f(3),x=Math.random()*2*Math.PI,w=Math.random()*2-1,y=Math.sqrt(1-w*w)*c;return h[0]=Math.cos(x)*y,h[1]=Math.sin(x)*y,h[2]=w*c,h}function s(c){const u=c??new f(3);return u[0]=0,u[1]=0,u[2]=0,u}function d(c,u,h){const x=h??new f(3),w=c[0],y=c[1],z=c[2],V=u[3]*w+u[7]*y+u[11]*z+u[15]||1;return x[0]=(u[0]*w+u[4]*y+u[8]*z+u[12])/V,x[1]=(u[1]*w+u[5]*y+u[9]*z+u[13])/V,x[2]=(u[2]*w+u[6]*y+u[10]*z+u[14])/V,x}function t(c,u,h){const x=h??new f(3),w=c[0],y=c[1],z=c[2];return x[0]=w*u[0*4+0]+y*u[1*4+0]+z*u[2*4+0],x[1]=w*u[0*4+1]+y*u[1*4+1]+z*u[2*4+1],x[2]=w*u[0*4+2]+y*u[1*4+2]+z*u[2*4+2],x}function r(c,u,h){const x=h??new f(3),w=c[0],y=c[1],z=c[2];return x[0]=w*u[0]+y*u[4]+z*u[8],x[1]=w*u[1]+y*u[5]+z*u[9],x[2]=w*u[2]+y*u[6]+z*u[10],x}function l(c,u,h){const x=h??new f(3),w=u[0],y=u[1],z=u[2],V=u[3]*2,T=c[0],S=c[1],G=c[2],q=y*G-z*S,Y=z*T-w*G,te=w*S-y*T;return x[0]=T+q*V+(y*te-z*Y)*2,x[1]=S+Y*V+(z*q-w*te)*2,x[2]=G+te*V+(w*Y-y*q)*2,x}function p(c,u){const h=u??new f(3);return h[0]=c[12],h[1]=c[13],h[2]=c[14],h}function _(c,u,h){const x=h??new f(3),w=u*4;return x[0]=c[w+0],x[1]=c[w+1],x[2]=c[w+2],x}function e(c,u){const h=u??new f(3),x=c[0],w=c[1],y=c[2],z=c[4],V=c[5],T=c[6],S=c[8],G=c[9],q=c[10];return h[0]=Math.sqrt(x*x+w*w+y*y),h[1]=Math.sqrt(z*z+V*V+T*T),h[2]=Math.sqrt(S*S+G*G+q*q),h}function o(c,u,h,x){const w=x??new f(3),y=[],z=[];return y[0]=c[0]-u[0],y[1]=c[1]-u[1],y[2]=c[2]-u[2],z[0]=y[0],z[1]=y[1]*Math.cos(h)-y[2]*Math.sin(h),z[2]=y[1]*Math.sin(h)+y[2]*Math.cos(h),w[0]=z[0]+u[0],w[1]=z[1]+u[1],w[2]=z[2]+u[2],w}function n(c,u,h,x){const w=x??new f(3),y=[],z=[];return y[0]=c[0]-u[0],y[1]=c[1]-u[1],y[2]=c[2]-u[2],z[0]=y[2]*Math.sin(h)+y[0]*Math.cos(h),z[1]=y[1],z[2]=y[2]*Math.cos(h)-y[0]*Math.sin(h),w[0]=z[0]+u[0],w[1]=z[1]+u[1],w[2]=z[2]+u[2],w}function i(c,u,h,x){const w=x??new f(3),y=[],z=[];return y[0]=c[0]-u[0],y[1]=c[1]-u[1],y[2]=c[2]-u[2],z[0]=y[0]*Math.cos(h)-y[1]*Math.sin(h),z[1]=y[0]*Math.sin(h)+y[1]*Math.cos(h),z[2]=y[2],w[0]=z[0]+u[0],w[1]=z[1]+u[1],w[2]=z[2]+u[2],w}function a(c,u,h){const x=h??new f(3);return ee(c,x),k(x,u,x)}function v(c,u,h){const x=h??new f(3);return oe(c)>u?a(c,u,x):X(c,x)}function m(c,u,h){const x=h??new f(3);return U(c,u,.5,x)}return{create:g,fromValues:M,set:B,ceil:P,floor:D,round:I,clamp:R,add:N,addScaled:J,angle:W,subtract:L,sub:ie,equalsApproximately:j,equals:$,lerp:U,lerpV:C,max:Q,min:Z,mulScalar:k,scale:H,divScalar:le,inverse:fe,invert:de,cross:pe,dot:ge,length:oe,len:we,lengthSq:A,lenSq:E,distance:F,dist:he,distanceSq:K,distSq:se,normalize:ee,negate:ve,copy:X,clone:Ge,multiply:xe,mul:Fe,divide:re,div:ne,random:ce,zero:s,transformMat4:d,transformMat4Upper3x3:t,transformMat3:r,transformQuat:l,getTranslation:p,getAxis:_,getScaling:e,rotateX:o,rotateY:n,rotateZ:i,setLength:a,truncate:v,midpoint:m}}const en=new Map;function We(f){let g=en.get(f);return g||(g=dn(f),en.set(f,g)),g}function pn(f){const g=on(f),M=We(f);function B(s,d,t,r,l,p,_,e,o){const n=new f(12);return n[3]=0,n[7]=0,n[11]=0,s!==void 0&&(n[0]=s,d!==void 0&&(n[1]=d,t!==void 0&&(n[2]=t,r!==void 0&&(n[4]=r,l!==void 0&&(n[5]=l,p!==void 0&&(n[6]=p,_!==void 0&&(n[8]=_,e!==void 0&&(n[9]=e,o!==void 0&&(n[10]=o))))))))),n}function P(s,d,t,r,l,p,_,e,o,n){const i=n??new f(12);return i[0]=s,i[1]=d,i[2]=t,i[3]=0,i[4]=r,i[5]=l,i[6]=p,i[7]=0,i[8]=_,i[9]=e,i[10]=o,i[11]=0,i}function D(s,d){const t=d??new f(12);return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=0,t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=0,t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=0,t}function I(s,d){const t=d??new f(12),r=s[0],l=s[1],p=s[2],_=s[3],e=r+r,o=l+l,n=p+p,i=r*e,a=l*e,v=l*o,m=p*e,c=p*o,u=p*n,h=_*e,x=_*o,w=_*n;return t[0]=1-v-u,t[1]=a+w,t[2]=m-x,t[3]=0,t[4]=a-w,t[5]=1-i-u,t[6]=c+h,t[7]=0,t[8]=m+x,t[9]=c-h,t[10]=1-i-v,t[11]=0,t}function R(s,d){const t=d??new f(12);return t[0]=-s[0],t[1]=-s[1],t[2]=-s[2],t[4]=-s[4],t[5]=-s[5],t[6]=-s[6],t[8]=-s[8],t[9]=-s[9],t[10]=-s[10],t}function N(s,d){const t=d??new f(12);return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[8]=s[8],t[9]=s[9],t[10]=s[10],t}const J=N;function W(s,d){return Math.abs(s[0]-d[0])<O&&Math.abs(s[1]-d[1])<O&&Math.abs(s[2]-d[2])<O&&Math.abs(s[4]-d[4])<O&&Math.abs(s[5]-d[5])<O&&Math.abs(s[6]-d[6])<O&&Math.abs(s[8]-d[8])<O&&Math.abs(s[9]-d[9])<O&&Math.abs(s[10]-d[10])<O}function L(s,d){return s[0]===d[0]&&s[1]===d[1]&&s[2]===d[2]&&s[4]===d[4]&&s[5]===d[5]&&s[6]===d[6]&&s[8]===d[8]&&s[9]===d[9]&&s[10]===d[10]}function ie(s){const d=s??new f(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function j(s,d){const t=d??new f(12);if(t===s){let v;return v=s[1],s[1]=s[4],s[4]=v,v=s[2],s[2]=s[8],s[8]=v,v=s[6],s[6]=s[9],s[9]=v,t}const r=s[0*4+0],l=s[0*4+1],p=s[0*4+2],_=s[1*4+0],e=s[1*4+1],o=s[1*4+2],n=s[2*4+0],i=s[2*4+1],a=s[2*4+2];return t[0]=r,t[1]=_,t[2]=n,t[4]=l,t[5]=e,t[6]=i,t[8]=p,t[9]=o,t[10]=a,t}function $(s,d){const t=d??new f(12),r=s[0*4+0],l=s[0*4+1],p=s[0*4+2],_=s[1*4+0],e=s[1*4+1],o=s[1*4+2],n=s[2*4+0],i=s[2*4+1],a=s[2*4+2],v=a*e-o*i,m=-a*_+o*n,c=i*_-e*n,u=1/(r*v+l*m+p*c);return t[0]=v*u,t[1]=(-a*l+p*i)*u,t[2]=(o*l-p*e)*u,t[4]=m*u,t[5]=(a*r-p*n)*u,t[6]=(-o*r+p*_)*u,t[8]=c*u,t[9]=(-i*r+l*n)*u,t[10]=(e*r-l*_)*u,t}function U(s){const d=s[0],t=s[0*4+1],r=s[0*4+2],l=s[1*4+0],p=s[1*4+1],_=s[1*4+2],e=s[2*4+0],o=s[2*4+1],n=s[2*4+2];return d*(p*n-o*_)-l*(t*n-o*r)+e*(t*_-p*r)}const C=$;function Q(s,d,t){const r=t??new f(12),l=s[0],p=s[1],_=s[2],e=s[4],o=s[5],n=s[6],i=s[8],a=s[9],v=s[10],m=d[0],c=d[1],u=d[2],h=d[4],x=d[5],w=d[6],y=d[8],z=d[9],V=d[10];return r[0]=l*m+e*c+i*u,r[1]=p*m+o*c+a*u,r[2]=_*m+n*c+v*u,r[4]=l*h+e*x+i*w,r[5]=p*h+o*x+a*w,r[6]=_*h+n*x+v*w,r[8]=l*y+e*z+i*V,r[9]=p*y+o*z+a*V,r[10]=_*y+n*z+v*V,r}const Z=Q;function k(s,d,t){const r=t??ie();return s!==r&&(r[0]=s[0],r[1]=s[1],r[2]=s[2],r[4]=s[4],r[5]=s[5],r[6]=s[6]),r[8]=d[0],r[9]=d[1],r[10]=1,r}function H(s,d){const t=d??g.create();return t[0]=s[8],t[1]=s[9],t}function le(s,d,t){const r=t??g.create(),l=d*4;return r[0]=s[l+0],r[1]=s[l+1],r}function fe(s,d,t,r){const l=r===s?s:N(s,r),p=t*4;return l[p+0]=d[0],l[p+1]=d[1],l}function de(s,d){const t=d??g.create(),r=s[0],l=s[1],p=s[4],_=s[5];return t[0]=Math.sqrt(r*r+l*l),t[1]=Math.sqrt(p*p+_*_),t}function pe(s,d){const t=d??M.create(),r=s[0],l=s[1],p=s[2],_=s[4],e=s[5],o=s[6],n=s[8],i=s[9],a=s[10];return t[0]=Math.sqrt(r*r+l*l+p*p),t[1]=Math.sqrt(_*_+e*e+o*o),t[2]=Math.sqrt(n*n+i*i+a*a),t}function ge(s,d){const t=d??new f(12);return t[0]=1,t[1]=0,t[2]=0,t[4]=0,t[5]=1,t[6]=0,t[8]=s[0],t[9]=s[1],t[10]=1,t}function oe(s,d,t){const r=t??new f(12),l=d[0],p=d[1],_=s[0],e=s[1],o=s[2],n=s[1*4+0],i=s[1*4+1],a=s[1*4+2],v=s[2*4+0],m=s[2*4+1],c=s[2*4+2];return s!==r&&(r[0]=_,r[1]=e,r[2]=o,r[4]=n,r[5]=i,r[6]=a),r[8]=_*l+n*p+v,r[9]=e*l+i*p+m,r[10]=o*l+a*p+c,r}function we(s,d){const t=d??new f(12),r=Math.cos(s),l=Math.sin(s);return t[0]=r,t[1]=l,t[2]=0,t[4]=-l,t[5]=r,t[6]=0,t[8]=0,t[9]=0,t[10]=1,t}function A(s,d,t){const r=t??new f(12),l=s[0*4+0],p=s[0*4+1],_=s[0*4+2],e=s[1*4+0],o=s[1*4+1],n=s[1*4+2],i=Math.cos(d),a=Math.sin(d);return r[0]=i*l+a*e,r[1]=i*p+a*o,r[2]=i*_+a*n,r[4]=i*e-a*l,r[5]=i*o-a*p,r[6]=i*n-a*_,s!==r&&(r[8]=s[8],r[9]=s[9],r[10]=s[10]),r}function E(s,d){const t=d??new f(12),r=Math.cos(s),l=Math.sin(s);return t[0]=1,t[1]=0,t[2]=0,t[4]=0,t[5]=r,t[6]=l,t[8]=0,t[9]=-l,t[10]=r,t}function F(s,d,t){const r=t??new f(12),l=s[4],p=s[5],_=s[6],e=s[8],o=s[9],n=s[10],i=Math.cos(d),a=Math.sin(d);return r[4]=i*l+a*e,r[5]=i*p+a*o,r[6]=i*_+a*n,r[8]=i*e-a*l,r[9]=i*o-a*p,r[10]=i*n-a*_,s!==r&&(r[0]=s[0],r[1]=s[1],r[2]=s[2]),r}function he(s,d){const t=d??new f(12),r=Math.cos(s),l=Math.sin(s);return t[0]=r,t[1]=0,t[2]=-l,t[4]=0,t[5]=1,t[6]=0,t[8]=l,t[9]=0,t[10]=r,t}function K(s,d,t){const r=t??new f(12),l=s[0*4+0],p=s[0*4+1],_=s[0*4+2],e=s[2*4+0],o=s[2*4+1],n=s[2*4+2],i=Math.cos(d),a=Math.sin(d);return r[0]=i*l-a*e,r[1]=i*p-a*o,r[2]=i*_-a*n,r[8]=i*e+a*l,r[9]=i*o+a*p,r[10]=i*n+a*_,s!==r&&(r[4]=s[4],r[5]=s[5],r[6]=s[6]),r}const se=we,ee=A;function ve(s,d){const t=d??new f(12);return t[0]=s[0],t[1]=0,t[2]=0,t[4]=0,t[5]=s[1],t[6]=0,t[8]=0,t[9]=0,t[10]=1,t}function X(s,d,t){const r=t??new f(12),l=d[0],p=d[1];return r[0]=l*s[0*4+0],r[1]=l*s[0*4+1],r[2]=l*s[0*4+2],r[4]=p*s[1*4+0],r[5]=p*s[1*4+1],r[6]=p*s[1*4+2],s!==r&&(r[8]=s[8],r[9]=s[9],r[10]=s[10]),r}function Ge(s,d){const t=d??new f(12);return t[0]=s[0],t[1]=0,t[2]=0,t[4]=0,t[5]=s[1],t[6]=0,t[8]=0,t[9]=0,t[10]=s[2],t}function xe(s,d,t){const r=t??new f(12),l=d[0],p=d[1],_=d[2];return r[0]=l*s[0*4+0],r[1]=l*s[0*4+1],r[2]=l*s[0*4+2],r[4]=p*s[1*4+0],r[5]=p*s[1*4+1],r[6]=p*s[1*4+2],r[8]=_*s[2*4+0],r[9]=_*s[2*4+1],r[10]=_*s[2*4+2],r}function Fe(s,d){const t=d??new f(12);return t[0]=s,t[1]=0,t[2]=0,t[4]=0,t[5]=s,t[6]=0,t[8]=0,t[9]=0,t[10]=1,t}function re(s,d,t){const r=t??new f(12);return r[0]=d*s[0*4+0],r[1]=d*s[0*4+1],r[2]=d*s[0*4+2],r[4]=d*s[1*4+0],r[5]=d*s[1*4+1],r[6]=d*s[1*4+2],s!==r&&(r[8]=s[8],r[9]=s[9],r[10]=s[10]),r}function ne(s,d){const t=d??new f(12);return t[0]=s,t[1]=0,t[2]=0,t[4]=0,t[5]=s,t[6]=0,t[8]=0,t[9]=0,t[10]=s,t}function ce(s,d,t){const r=t??new f(12);return r[0]=d*s[0*4+0],r[1]=d*s[0*4+1],r[2]=d*s[0*4+2],r[4]=d*s[1*4+0],r[5]=d*s[1*4+1],r[6]=d*s[1*4+2],r[8]=d*s[2*4+0],r[9]=d*s[2*4+1],r[10]=d*s[2*4+2],r}return{clone:J,create:B,set:P,fromMat4:D,fromQuat:I,negate:R,copy:N,equalsApproximately:W,equals:L,identity:ie,transpose:j,inverse:$,invert:C,determinant:U,mul:Z,multiply:Q,setTranslation:k,getTranslation:H,getAxis:le,setAxis:fe,getScaling:de,get3DScaling:pe,translation:ge,translate:oe,rotation:we,rotate:A,rotationX:E,rotateX:F,rotationY:he,rotateY:K,rotationZ:se,rotateZ:ee,scaling:ve,scale:X,uniformScaling:Fe,uniformScale:re,scaling3D:Ge,scale3D:xe,uniformScaling3D:ne,uniformScale3D:ce}}const nn=new Map;function hn(f){let g=nn.get(f);return g||(g=pn(f),nn.set(f,g)),g}function vn(f){const g=We(f);function M(e,o,n,i,a,v,m,c,u,h,x,w,y,z,V,T){const S=new f(16);return e!==void 0&&(S[0]=e,o!==void 0&&(S[1]=o,n!==void 0&&(S[2]=n,i!==void 0&&(S[3]=i,a!==void 0&&(S[4]=a,v!==void 0&&(S[5]=v,m!==void 0&&(S[6]=m,c!==void 0&&(S[7]=c,u!==void 0&&(S[8]=u,h!==void 0&&(S[9]=h,x!==void 0&&(S[10]=x,w!==void 0&&(S[11]=w,y!==void 0&&(S[12]=y,z!==void 0&&(S[13]=z,V!==void 0&&(S[14]=V,T!==void 0&&(S[15]=T)))))))))))))))),S}function B(e,o,n,i,a,v,m,c,u,h,x,w,y,z,V,T,S){const G=S??new f(16);return G[0]=e,G[1]=o,G[2]=n,G[3]=i,G[4]=a,G[5]=v,G[6]=m,G[7]=c,G[8]=u,G[9]=h,G[10]=x,G[11]=w,G[12]=y,G[13]=z,G[14]=V,G[15]=T,G}function P(e,o){const n=o??new f(16);return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=0,n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=0,n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function D(e,o){const n=o??new f(16),i=e[0],a=e[1],v=e[2],m=e[3],c=i+i,u=a+a,h=v+v,x=i*c,w=a*c,y=a*u,z=v*c,V=v*u,T=v*h,S=m*c,G=m*u,q=m*h;return n[0]=1-y-T,n[1]=w+q,n[2]=z-G,n[3]=0,n[4]=w-q,n[5]=1-x-T,n[6]=V+S,n[7]=0,n[8]=z+G,n[9]=V-S,n[10]=1-x-y,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function I(e,o){const n=o??new f(16);return n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n[3]=-e[3],n[4]=-e[4],n[5]=-e[5],n[6]=-e[6],n[7]=-e[7],n[8]=-e[8],n[9]=-e[9],n[10]=-e[10],n[11]=-e[11],n[12]=-e[12],n[13]=-e[13],n[14]=-e[14],n[15]=-e[15],n}function R(e,o){const n=o??new f(16);return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}const N=R;function J(e,o){return Math.abs(e[0]-o[0])<O&&Math.abs(e[1]-o[1])<O&&Math.abs(e[2]-o[2])<O&&Math.abs(e[3]-o[3])<O&&Math.abs(e[4]-o[4])<O&&Math.abs(e[5]-o[5])<O&&Math.abs(e[6]-o[6])<O&&Math.abs(e[7]-o[7])<O&&Math.abs(e[8]-o[8])<O&&Math.abs(e[9]-o[9])<O&&Math.abs(e[10]-o[10])<O&&Math.abs(e[11]-o[11])<O&&Math.abs(e[12]-o[12])<O&&Math.abs(e[13]-o[13])<O&&Math.abs(e[14]-o[14])<O&&Math.abs(e[15]-o[15])<O}function W(e,o){return e[0]===o[0]&&e[1]===o[1]&&e[2]===o[2]&&e[3]===o[3]&&e[4]===o[4]&&e[5]===o[5]&&e[6]===o[6]&&e[7]===o[7]&&e[8]===o[8]&&e[9]===o[9]&&e[10]===o[10]&&e[11]===o[11]&&e[12]===o[12]&&e[13]===o[13]&&e[14]===o[14]&&e[15]===o[15]}function L(e){const o=e??new f(16);return o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=1,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=1,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,o}function ie(e,o){const n=o??new f(16);if(n===e){let Y;return Y=e[1],e[1]=e[4],e[4]=Y,Y=e[2],e[2]=e[8],e[8]=Y,Y=e[3],e[3]=e[12],e[12]=Y,Y=e[6],e[6]=e[9],e[9]=Y,Y=e[7],e[7]=e[13],e[13]=Y,Y=e[11],e[11]=e[14],e[14]=Y,n}const i=e[0*4+0],a=e[0*4+1],v=e[0*4+2],m=e[0*4+3],c=e[1*4+0],u=e[1*4+1],h=e[1*4+2],x=e[1*4+3],w=e[2*4+0],y=e[2*4+1],z=e[2*4+2],V=e[2*4+3],T=e[3*4+0],S=e[3*4+1],G=e[3*4+2],q=e[3*4+3];return n[0]=i,n[1]=c,n[2]=w,n[3]=T,n[4]=a,n[5]=u,n[6]=y,n[7]=S,n[8]=v,n[9]=h,n[10]=z,n[11]=G,n[12]=m,n[13]=x,n[14]=V,n[15]=q,n}function j(e,o){const n=o??new f(16),i=e[0*4+0],a=e[0*4+1],v=e[0*4+2],m=e[0*4+3],c=e[1*4+0],u=e[1*4+1],h=e[1*4+2],x=e[1*4+3],w=e[2*4+0],y=e[2*4+1],z=e[2*4+2],V=e[2*4+3],T=e[3*4+0],S=e[3*4+1],G=e[3*4+2],q=e[3*4+3],Y=z*q,te=G*V,ae=h*q,ue=G*x,_e=h*V,me=z*x,ye=v*q,ze=G*m,Me=v*V,Pe=z*m,be=v*x,Be=h*m,Se=w*S,Ve=T*y,Te=c*S,Ae=T*u,Ue=c*y,Re=w*u,Ye=i*S,ke=T*a,Ee=i*y,Xe=w*a,Le=i*u,je=c*a,Qe=Y*u+ue*y+_e*S-(te*u+ae*y+me*S),Ze=te*a+ye*y+Pe*S-(Y*a+ze*y+Me*S),Ke=ae*a+ze*u+be*S-(ue*a+ye*u+Be*S),Je=me*a+Me*u+Be*y-(_e*a+Pe*u+be*y),De=1/(i*Qe+c*Ze+w*Ke+T*Je);return n[0]=De*Qe,n[1]=De*Ze,n[2]=De*Ke,n[3]=De*Je,n[4]=De*(te*c+ae*w+me*T-(Y*c+ue*w+_e*T)),n[5]=De*(Y*i+ze*w+Me*T-(te*i+ye*w+Pe*T)),n[6]=De*(ue*i+ye*c+Be*T-(ae*i+ze*c+be*T)),n[7]=De*(_e*i+Pe*c+be*w-(me*i+Me*c+Be*w)),n[8]=De*(Se*x+Ae*V+Ue*q-(Ve*x+Te*V+Re*q)),n[9]=De*(Ve*m+Ye*V+Xe*q-(Se*m+ke*V+Ee*q)),n[10]=De*(Te*m+ke*x+Le*q-(Ae*m+Ye*x+je*q)),n[11]=De*(Re*m+Ee*x+je*V-(Ue*m+Xe*x+Le*V)),n[12]=De*(Te*z+Re*G+Ve*h-(Ue*G+Se*h+Ae*z)),n[13]=De*(Ee*G+Se*v+ke*z-(Ye*z+Xe*G+Ve*v)),n[14]=De*(Ye*h+je*G+Ae*v-(Le*G+Te*v+ke*h)),n[15]=De*(Le*z+Ue*v+Xe*h-(Ee*h+je*z+Re*v)),n}function $(e){const o=e[0],n=e[0*4+1],i=e[0*4+2],a=e[0*4+3],v=e[1*4+0],m=e[1*4+1],c=e[1*4+2],u=e[1*4+3],h=e[2*4+0],x=e[2*4+1],w=e[2*4+2],y=e[2*4+3],z=e[3*4+0],V=e[3*4+1],T=e[3*4+2],S=e[3*4+3],G=w*S,q=T*y,Y=c*S,te=T*u,ae=c*y,ue=w*u,_e=i*S,me=T*a,ye=i*y,ze=w*a,Me=i*u,Pe=c*a,be=G*m+te*x+ae*V-(q*m+Y*x+ue*V),Be=q*n+_e*x+ze*V-(G*n+me*x+ye*V),Se=Y*n+me*m+Me*V-(te*n+_e*m+Pe*V),Ve=ue*n+ye*m+Pe*x-(ae*n+ze*m+Me*x);return o*be+v*Be+h*Se+z*Ve}const U=j;function C(e,o,n){const i=n??new f(16),a=e[0],v=e[1],m=e[2],c=e[3],u=e[4],h=e[5],x=e[6],w=e[7],y=e[8],z=e[9],V=e[10],T=e[11],S=e[12],G=e[13],q=e[14],Y=e[15],te=o[0],ae=o[1],ue=o[2],_e=o[3],me=o[4],ye=o[5],ze=o[6],Me=o[7],Pe=o[8],be=o[9],Be=o[10],Se=o[11],Ve=o[12],Te=o[13],Ae=o[14],Ue=o[15];return i[0]=a*te+u*ae+y*ue+S*_e,i[1]=v*te+h*ae+z*ue+G*_e,i[2]=m*te+x*ae+V*ue+q*_e,i[3]=c*te+w*ae+T*ue+Y*_e,i[4]=a*me+u*ye+y*ze+S*Me,i[5]=v*me+h*ye+z*ze+G*Me,i[6]=m*me+x*ye+V*ze+q*Me,i[7]=c*me+w*ye+T*ze+Y*Me,i[8]=a*Pe+u*be+y*Be+S*Se,i[9]=v*Pe+h*be+z*Be+G*Se,i[10]=m*Pe+x*be+V*Be+q*Se,i[11]=c*Pe+w*be+T*Be+Y*Se,i[12]=a*Ve+u*Te+y*Ae+S*Ue,i[13]=v*Ve+h*Te+z*Ae+G*Ue,i[14]=m*Ve+x*Te+V*Ae+q*Ue,i[15]=c*Ve+w*Te+T*Ae+Y*Ue,i}const Q=C;function Z(e,o,n){const i=n??L();return e!==i&&(i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=e[7],i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=e[11]),i[12]=o[0],i[13]=o[1],i[14]=o[2],i[15]=1,i}function k(e,o){const n=o??g.create();return n[0]=e[12],n[1]=e[13],n[2]=e[14],n}function H(e,o,n){const i=n??g.create(),a=o*4;return i[0]=e[a+0],i[1]=e[a+1],i[2]=e[a+2],i}function le(e,o,n,i){const a=i===e?i:R(e,i),v=n*4;return a[v+0]=o[0],a[v+1]=o[1],a[v+2]=o[2],a}function fe(e,o){const n=o??g.create(),i=e[0],a=e[1],v=e[2],m=e[4],c=e[5],u=e[6],h=e[8],x=e[9],w=e[10];return n[0]=Math.sqrt(i*i+a*a+v*v),n[1]=Math.sqrt(m*m+c*c+u*u),n[2]=Math.sqrt(h*h+x*x+w*w),n}function de(e,o,n,i,a){const v=a??new f(16),m=Math.tan(Math.PI*.5-.5*e);if(v[0]=m/o,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=m,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[11]=-1,v[12]=0,v[13]=0,v[15]=0,Number.isFinite(i)){const c=1/(n-i);v[10]=i*c,v[14]=i*n*c}else v[10]=-1,v[14]=-n;return v}function pe(e,o,n,i=1/0,a){const v=a??new f(16),m=1/Math.tan(e*.5);if(v[0]=m/o,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=m,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[11]=-1,v[12]=0,v[13]=0,v[15]=0,i===1/0)v[10]=0,v[14]=n;else{const c=1/(i-n);v[10]=n*c,v[14]=i*n*c}return v}function ge(e,o,n,i,a,v,m){const c=m??new f(16);return c[0]=2/(o-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(i-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1/(a-v),c[11]=0,c[12]=(o+e)/(e-o),c[13]=(i+n)/(n-i),c[14]=a/(a-v),c[15]=1,c}function oe(e,o,n,i,a,v,m){const c=m??new f(16),u=o-e,h=i-n,x=a-v;return c[0]=2*a/u,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*a/h,c[6]=0,c[7]=0,c[8]=(e+o)/u,c[9]=(i+n)/h,c[10]=v/x,c[11]=-1,c[12]=0,c[13]=0,c[14]=a*v/x,c[15]=0,c}function we(e,o,n,i,a,v=1/0,m){const c=m??new f(16),u=o-e,h=i-n;if(c[0]=2*a/u,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*a/h,c[6]=0,c[7]=0,c[8]=(e+o)/u,c[9]=(i+n)/h,c[11]=-1,c[12]=0,c[13]=0,c[15]=0,v===1/0)c[10]=0,c[14]=a;else{const x=1/(v-a);c[10]=a*x,c[14]=v*a*x}return c}const A=g.create(),E=g.create(),F=g.create();function he(e,o,n,i){const a=i??new f(16);return g.normalize(g.subtract(o,e,F),F),g.normalize(g.cross(n,F,A),A),g.normalize(g.cross(F,A,E),E),a[0]=A[0],a[1]=A[1],a[2]=A[2],a[3]=0,a[4]=E[0],a[5]=E[1],a[6]=E[2],a[7]=0,a[8]=F[0],a[9]=F[1],a[10]=F[2],a[11]=0,a[12]=e[0],a[13]=e[1],a[14]=e[2],a[15]=1,a}function K(e,o,n,i){const a=i??new f(16);return g.normalize(g.subtract(e,o,F),F),g.normalize(g.cross(n,F,A),A),g.normalize(g.cross(F,A,E),E),a[0]=A[0],a[1]=A[1],a[2]=A[2],a[3]=0,a[4]=E[0],a[5]=E[1],a[6]=E[2],a[7]=0,a[8]=F[0],a[9]=F[1],a[10]=F[2],a[11]=0,a[12]=e[0],a[13]=e[1],a[14]=e[2],a[15]=1,a}function se(e,o,n,i){const a=i??new f(16);return g.normalize(g.subtract(e,o,F),F),g.normalize(g.cross(n,F,A),A),g.normalize(g.cross(F,A,E),E),a[0]=A[0],a[1]=E[0],a[2]=F[0],a[3]=0,a[4]=A[1],a[5]=E[1],a[6]=F[1],a[7]=0,a[8]=A[2],a[9]=E[2],a[10]=F[2],a[11]=0,a[12]=-(A[0]*e[0]+A[1]*e[1]+A[2]*e[2]),a[13]=-(E[0]*e[0]+E[1]*e[1]+E[2]*e[2]),a[14]=-(F[0]*e[0]+F[1]*e[1]+F[2]*e[2]),a[15]=1,a}function ee(e,o){const n=o??new f(16);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function ve(e,o,n){const i=n??new f(16),a=o[0],v=o[1],m=o[2],c=e[0],u=e[1],h=e[2],x=e[3],w=e[1*4+0],y=e[1*4+1],z=e[1*4+2],V=e[1*4+3],T=e[2*4+0],S=e[2*4+1],G=e[2*4+2],q=e[2*4+3],Y=e[3*4+0],te=e[3*4+1],ae=e[3*4+2],ue=e[3*4+3];return e!==i&&(i[0]=c,i[1]=u,i[2]=h,i[3]=x,i[4]=w,i[5]=y,i[6]=z,i[7]=V,i[8]=T,i[9]=S,i[10]=G,i[11]=q),i[12]=c*a+w*v+T*m+Y,i[13]=u*a+y*v+S*m+te,i[14]=h*a+z*v+G*m+ae,i[15]=x*a+V*v+q*m+ue,i}function X(e,o){const n=o??new f(16),i=Math.cos(e),a=Math.sin(e);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=i,n[6]=a,n[7]=0,n[8]=0,n[9]=-a,n[10]=i,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Ge(e,o,n){const i=n??new f(16),a=e[4],v=e[5],m=e[6],c=e[7],u=e[8],h=e[9],x=e[10],w=e[11],y=Math.cos(o),z=Math.sin(o);return i[4]=y*a+z*u,i[5]=y*v+z*h,i[6]=y*m+z*x,i[7]=y*c+z*w,i[8]=y*u-z*a,i[9]=y*h-z*v,i[10]=y*x-z*m,i[11]=y*w-z*c,e!==i&&(i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}function xe(e,o){const n=o??new f(16),i=Math.cos(e),a=Math.sin(e);return n[0]=i,n[1]=0,n[2]=-a,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=a,n[9]=0,n[10]=i,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Fe(e,o,n){const i=n??new f(16),a=e[0*4+0],v=e[0*4+1],m=e[0*4+2],c=e[0*4+3],u=e[2*4+0],h=e[2*4+1],x=e[2*4+2],w=e[2*4+3],y=Math.cos(o),z=Math.sin(o);return i[0]=y*a-z*u,i[1]=y*v-z*h,i[2]=y*m-z*x,i[3]=y*c-z*w,i[8]=y*u+z*a,i[9]=y*h+z*v,i[10]=y*x+z*m,i[11]=y*w+z*c,e!==i&&(i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=e[7],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}function re(e,o){const n=o??new f(16),i=Math.cos(e),a=Math.sin(e);return n[0]=i,n[1]=a,n[2]=0,n[3]=0,n[4]=-a,n[5]=i,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function ne(e,o,n){const i=n??new f(16),a=e[0*4+0],v=e[0*4+1],m=e[0*4+2],c=e[0*4+3],u=e[1*4+0],h=e[1*4+1],x=e[1*4+2],w=e[1*4+3],y=Math.cos(o),z=Math.sin(o);return i[0]=y*a+z*u,i[1]=y*v+z*h,i[2]=y*m+z*x,i[3]=y*c+z*w,i[4]=y*u-z*a,i[5]=y*h-z*v,i[6]=y*x-z*m,i[7]=y*w-z*c,e!==i&&(i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=e[11],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}function ce(e,o,n){const i=n??new f(16);let a=e[0],v=e[1],m=e[2];const c=Math.sqrt(a*a+v*v+m*m);a/=c,v/=c,m/=c;const u=a*a,h=v*v,x=m*m,w=Math.cos(o),y=Math.sin(o),z=1-w;return i[0]=u+(1-u)*w,i[1]=a*v*z+m*y,i[2]=a*m*z-v*y,i[3]=0,i[4]=a*v*z-m*y,i[5]=h+(1-h)*w,i[6]=v*m*z+a*y,i[7]=0,i[8]=a*m*z+v*y,i[9]=v*m*z-a*y,i[10]=x+(1-x)*w,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}const s=ce;function d(e,o,n,i){const a=i??new f(16);let v=o[0],m=o[1],c=o[2];const u=Math.sqrt(v*v+m*m+c*c);v/=u,m/=u,c/=u;const h=v*v,x=m*m,w=c*c,y=Math.cos(n),z=Math.sin(n),V=1-y,T=h+(1-h)*y,S=v*m*V+c*z,G=v*c*V-m*z,q=v*m*V-c*z,Y=x+(1-x)*y,te=m*c*V+v*z,ae=v*c*V+m*z,ue=m*c*V-v*z,_e=w+(1-w)*y,me=e[0],ye=e[1],ze=e[2],Me=e[3],Pe=e[4],be=e[5],Be=e[6],Se=e[7],Ve=e[8],Te=e[9],Ae=e[10],Ue=e[11];return a[0]=T*me+S*Pe+G*Ve,a[1]=T*ye+S*be+G*Te,a[2]=T*ze+S*Be+G*Ae,a[3]=T*Me+S*Se+G*Ue,a[4]=q*me+Y*Pe+te*Ve,a[5]=q*ye+Y*be+te*Te,a[6]=q*ze+Y*Be+te*Ae,a[7]=q*Me+Y*Se+te*Ue,a[8]=ae*me+ue*Pe+_e*Ve,a[9]=ae*ye+ue*be+_e*Te,a[10]=ae*ze+ue*Be+_e*Ae,a[11]=ae*Me+ue*Se+_e*Ue,e!==a&&(a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15]),a}const t=d;function r(e,o){const n=o??new f(16);return n[0]=e[0],n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=e[1],n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=e[2],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function l(e,o,n){const i=n??new f(16),a=o[0],v=o[1],m=o[2];return i[0]=a*e[0*4+0],i[1]=a*e[0*4+1],i[2]=a*e[0*4+2],i[3]=a*e[0*4+3],i[4]=v*e[1*4+0],i[5]=v*e[1*4+1],i[6]=v*e[1*4+2],i[7]=v*e[1*4+3],i[8]=m*e[2*4+0],i[9]=m*e[2*4+1],i[10]=m*e[2*4+2],i[11]=m*e[2*4+3],e!==i&&(i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}function p(e,o){const n=o??new f(16);return n[0]=e,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=e,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=e,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function _(e,o,n){const i=n??new f(16);return i[0]=o*e[0*4+0],i[1]=o*e[0*4+1],i[2]=o*e[0*4+2],i[3]=o*e[0*4+3],i[4]=o*e[1*4+0],i[5]=o*e[1*4+1],i[6]=o*e[1*4+2],i[7]=o*e[1*4+3],i[8]=o*e[2*4+0],i[9]=o*e[2*4+1],i[10]=o*e[2*4+2],i[11]=o*e[2*4+3],e!==i&&(i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15]),i}return{create:M,set:B,fromMat3:P,fromQuat:D,negate:I,copy:R,clone:N,equalsApproximately:J,equals:W,identity:L,transpose:ie,inverse:j,determinant:$,invert:U,multiply:C,mul:Q,setTranslation:Z,getTranslation:k,getAxis:H,setAxis:le,getScaling:fe,perspective:de,perspectiveReverseZ:pe,ortho:ge,frustum:oe,frustumReverseZ:we,aim:he,cameraAim:K,lookAt:se,translation:ee,translate:ve,rotationX:X,rotateX:Ge,rotationY:xe,rotateY:Fe,rotationZ:re,rotateZ:ne,axisRotation:ce,rotation:s,axisRotate:d,rotate:t,scaling:r,scale:l,uniformScaling:p,uniformScale:_}}const tn=new Map;function xn(f){let g=tn.get(f);return g||(g=vn(f),tn.set(f,g)),g}function gn(f){const g=We(f);function M(s,d,t,r){const l=new f(4);return s!==void 0&&(l[0]=s,d!==void 0&&(l[1]=d,t!==void 0&&(l[2]=t,r!==void 0&&(l[3]=r)))),l}const B=M;function P(s,d,t,r,l){const p=l??new f(4);return p[0]=s,p[1]=d,p[2]=t,p[3]=r,p}function D(s,d,t){const r=t??new f(4),l=d*.5,p=Math.sin(l);return r[0]=p*s[0],r[1]=p*s[1],r[2]=p*s[2],r[3]=Math.cos(l),r}function I(s,d){const t=d??g.create(3),r=Math.acos(s[3])*2,l=Math.sin(r*.5);return l>O?(t[0]=s[0]/l,t[1]=s[1]/l,t[2]=s[2]/l):(t[0]=1,t[1]=0,t[2]=0),{angle:r,axis:t}}function R(s,d){const t=oe(s,d);return Math.acos(2*t*t-1)}function N(s,d,t){const r=t??new f(4),l=s[0],p=s[1],_=s[2],e=s[3],o=d[0],n=d[1],i=d[2],a=d[3];return r[0]=l*a+e*o+p*i-_*n,r[1]=p*a+e*n+_*o-l*i,r[2]=_*a+e*i+l*n-p*o,r[3]=e*a-l*o-p*n-_*i,r}const J=N;function W(s,d,t){const r=t??new f(4),l=d*.5,p=s[0],_=s[1],e=s[2],o=s[3],n=Math.sin(l),i=Math.cos(l);return r[0]=p*i+o*n,r[1]=_*i+e*n,r[2]=e*i-_*n,r[3]=o*i-p*n,r}function L(s,d,t){const r=t??new f(4),l=d*.5,p=s[0],_=s[1],e=s[2],o=s[3],n=Math.sin(l),i=Math.cos(l);return r[0]=p*i-e*n,r[1]=_*i+o*n,r[2]=e*i+p*n,r[3]=o*i-_*n,r}function ie(s,d,t){const r=t??new f(4),l=d*.5,p=s[0],_=s[1],e=s[2],o=s[3],n=Math.sin(l),i=Math.cos(l);return r[0]=p*i+_*n,r[1]=_*i-p*n,r[2]=e*i+o*n,r[3]=o*i-e*n,r}function j(s,d,t,r){const l=r??new f(4),p=s[0],_=s[1],e=s[2],o=s[3];let n=d[0],i=d[1],a=d[2],v=d[3],m=p*n+_*i+e*a+o*v;m<0&&(m=-m,n=-n,i=-i,a=-a,v=-v);let c,u;if(1-m>O){const h=Math.acos(m),x=Math.sin(h);c=Math.sin((1-t)*h)/x,u=Math.sin(t*h)/x}else c=1-t,u=t;return l[0]=c*p+u*n,l[1]=c*_+u*i,l[2]=c*e+u*a,l[3]=c*o+u*v,l}function $(s,d){const t=d??new f(4),r=s[0],l=s[1],p=s[2],_=s[3],e=r*r+l*l+p*p+_*_,o=e?1/e:0;return t[0]=-r*o,t[1]=-l*o,t[2]=-p*o,t[3]=_*o,t}function U(s,d){const t=d??new f(4);return t[0]=-s[0],t[1]=-s[1],t[2]=-s[2],t[3]=s[3],t}function C(s,d){const t=d??new f(4),r=s[0]+s[5]+s[10];if(r>0){const l=Math.sqrt(r+1);t[3]=.5*l;const p=.5/l;t[0]=(s[6]-s[9])*p,t[1]=(s[8]-s[2])*p,t[2]=(s[1]-s[4])*p}else{let l=0;s[5]>s[0]&&(l=1),s[10]>s[l*4+l]&&(l=2);const p=(l+1)%3,_=(l+2)%3,e=Math.sqrt(s[l*4+l]-s[p*4+p]-s[_*4+_]+1);t[l]=.5*e;const o=.5/e;t[3]=(s[p*4+_]-s[_*4+p])*o,t[p]=(s[p*4+l]+s[l*4+p])*o,t[_]=(s[_*4+l]+s[l*4+_])*o}return t}function Q(s,d,t,r,l){const p=l??new f(4),_=s*.5,e=d*.5,o=t*.5,n=Math.sin(_),i=Math.cos(_),a=Math.sin(e),v=Math.cos(e),m=Math.sin(o),c=Math.cos(o);switch(r){case"xyz":p[0]=n*v*c+i*a*m,p[1]=i*a*c-n*v*m,p[2]=i*v*m+n*a*c,p[3]=i*v*c-n*a*m;break;case"xzy":p[0]=n*v*c-i*a*m,p[1]=i*a*c-n*v*m,p[2]=i*v*m+n*a*c,p[3]=i*v*c+n*a*m;break;case"yxz":p[0]=n*v*c+i*a*m,p[1]=i*a*c-n*v*m,p[2]=i*v*m-n*a*c,p[3]=i*v*c+n*a*m;break;case"yzx":p[0]=n*v*c+i*a*m,p[1]=i*a*c+n*v*m,p[2]=i*v*m-n*a*c,p[3]=i*v*c-n*a*m;break;case"zxy":p[0]=n*v*c-i*a*m,p[1]=i*a*c+n*v*m,p[2]=i*v*m+n*a*c,p[3]=i*v*c-n*a*m;break;case"zyx":p[0]=n*v*c-i*a*m,p[1]=i*a*c+n*v*m,p[2]=i*v*m-n*a*c,p[3]=i*v*c+n*a*m;break;default:throw new Error(`Unknown rotation order: ${r}`)}return p}function Z(s,d){const t=d??new f(4);return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t}const k=Z;function H(s,d,t){const r=t??new f(4);return r[0]=s[0]+d[0],r[1]=s[1]+d[1],r[2]=s[2]+d[2],r[3]=s[3]+d[3],r}function le(s,d,t){const r=t??new f(4);return r[0]=s[0]-d[0],r[1]=s[1]-d[1],r[2]=s[2]-d[2],r[3]=s[3]-d[3],r}const fe=le;function de(s,d,t){const r=t??new f(4);return r[0]=s[0]*d,r[1]=s[1]*d,r[2]=s[2]*d,r[3]=s[3]*d,r}const pe=de;function ge(s,d,t){const r=t??new f(4);return r[0]=s[0]/d,r[1]=s[1]/d,r[2]=s[2]/d,r[3]=s[3]/d,r}function oe(s,d){return s[0]*d[0]+s[1]*d[1]+s[2]*d[2]+s[3]*d[3]}function we(s,d,t,r){const l=r??new f(4);return l[0]=s[0]+t*(d[0]-s[0]),l[1]=s[1]+t*(d[1]-s[1]),l[2]=s[2]+t*(d[2]-s[2]),l[3]=s[3]+t*(d[3]-s[3]),l}function A(s){const d=s[0],t=s[1],r=s[2],l=s[3];return Math.sqrt(d*d+t*t+r*r+l*l)}const E=A;function F(s){const d=s[0],t=s[1],r=s[2],l=s[3];return d*d+t*t+r*r+l*l}const he=F;function K(s,d){const t=d??new f(4),r=s[0],l=s[1],p=s[2],_=s[3],e=Math.sqrt(r*r+l*l+p*p+_*_);return e>1e-5?(t[0]=r/e,t[1]=l/e,t[2]=p/e,t[3]=_/e):(t[0]=0,t[1]=0,t[2]=0,t[3]=1),t}function se(s,d){return Math.abs(s[0]-d[0])<O&&Math.abs(s[1]-d[1])<O&&Math.abs(s[2]-d[2])<O&&Math.abs(s[3]-d[3])<O}function ee(s,d){return s[0]===d[0]&&s[1]===d[1]&&s[2]===d[2]&&s[3]===d[3]}function ve(s){const d=s??new f(4);return d[0]=0,d[1]=0,d[2]=0,d[3]=1,d}const X=g.create(),Ge=g.create(),xe=g.create();function Fe(s,d,t){const r=t??new f(4),l=g.dot(s,d);return l<-.999999?(g.cross(Ge,s,X),g.len(X)<1e-6&&g.cross(xe,s,X),g.normalize(X,X),D(X,Math.PI,r),r):l>.999999?(r[0]=0,r[1]=0,r[2]=0,r[3]=1,r):(g.cross(s,d,X),r[0]=X[0],r[1]=X[1],r[2]=X[2],r[3]=1+l,K(r,r))}const re=new f(4),ne=new f(4);function ce(s,d,t,r,l,p){const _=p??new f(4);return j(s,r,l,re),j(d,t,l,ne),j(re,ne,2*l*(1-l),_),_}return{create:M,fromValues:B,set:P,fromAxisAngle:D,toAxisAngle:I,angle:R,multiply:N,mul:J,rotateX:W,rotateY:L,rotateZ:ie,slerp:j,inverse:$,conjugate:U,fromMat:C,fromEuler:Q,copy:Z,clone:k,add:H,subtract:le,sub:fe,mulScalar:de,scale:pe,divScalar:ge,dot:oe,lerp:we,length:A,len:E,lengthSq:F,lenSq:he,normalize:K,equalsApproximately:se,equals:ee,identity:ve,rotationTo:Fe,sqlerp:ce}}const sn=new Map;function wn(f){let g=sn.get(f);return g||(g=gn(f),sn.set(f,g)),g}function _n(f){function g(t,r,l,p){const _=new f(4);return t!==void 0&&(_[0]=t,r!==void 0&&(_[1]=r,l!==void 0&&(_[2]=l,p!==void 0&&(_[3]=p)))),_}const M=g;function B(t,r,l,p,_){const e=_??new f(4);return e[0]=t,e[1]=r,e[2]=l,e[3]=p,e}function P(t,r){const l=r??new f(4);return l[0]=Math.ceil(t[0]),l[1]=Math.ceil(t[1]),l[2]=Math.ceil(t[2]),l[3]=Math.ceil(t[3]),l}function D(t,r){const l=r??new f(4);return l[0]=Math.floor(t[0]),l[1]=Math.floor(t[1]),l[2]=Math.floor(t[2]),l[3]=Math.floor(t[3]),l}function I(t,r){const l=r??new f(4);return l[0]=Math.round(t[0]),l[1]=Math.round(t[1]),l[2]=Math.round(t[2]),l[3]=Math.round(t[3]),l}function R(t,r=0,l=1,p){const _=p??new f(4);return _[0]=Math.min(l,Math.max(r,t[0])),_[1]=Math.min(l,Math.max(r,t[1])),_[2]=Math.min(l,Math.max(r,t[2])),_[3]=Math.min(l,Math.max(r,t[3])),_}function N(t,r,l){const p=l??new f(4);return p[0]=t[0]+r[0],p[1]=t[1]+r[1],p[2]=t[2]+r[2],p[3]=t[3]+r[3],p}function J(t,r,l,p){const _=p??new f(4);return _[0]=t[0]+r[0]*l,_[1]=t[1]+r[1]*l,_[2]=t[2]+r[2]*l,_[3]=t[3]+r[3]*l,_}function W(t,r,l){const p=l??new f(4);return p[0]=t[0]-r[0],p[1]=t[1]-r[1],p[2]=t[2]-r[2],p[3]=t[3]-r[3],p}const L=W;function ie(t,r){return Math.abs(t[0]-r[0])<O&&Math.abs(t[1]-r[1])<O&&Math.abs(t[2]-r[2])<O&&Math.abs(t[3]-r[3])<O}function j(t,r){return t[0]===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}function $(t,r,l,p){const _=p??new f(4);return _[0]=t[0]+l*(r[0]-t[0]),_[1]=t[1]+l*(r[1]-t[1]),_[2]=t[2]+l*(r[2]-t[2]),_[3]=t[3]+l*(r[3]-t[3]),_}function U(t,r,l,p){const _=p??new f(4);return _[0]=t[0]+l[0]*(r[0]-t[0]),_[1]=t[1]+l[1]*(r[1]-t[1]),_[2]=t[2]+l[2]*(r[2]-t[2]),_[3]=t[3]+l[3]*(r[3]-t[3]),_}function C(t,r,l){const p=l??new f(4);return p[0]=Math.max(t[0],r[0]),p[1]=Math.max(t[1],r[1]),p[2]=Math.max(t[2],r[2]),p[3]=Math.max(t[3],r[3]),p}function Q(t,r,l){const p=l??new f(4);return p[0]=Math.min(t[0],r[0]),p[1]=Math.min(t[1],r[1]),p[2]=Math.min(t[2],r[2]),p[3]=Math.min(t[3],r[3]),p}function Z(t,r,l){const p=l??new f(4);return p[0]=t[0]*r,p[1]=t[1]*r,p[2]=t[2]*r,p[3]=t[3]*r,p}const k=Z;function H(t,r,l){const p=l??new f(4);return p[0]=t[0]/r,p[1]=t[1]/r,p[2]=t[2]/r,p[3]=t[3]/r,p}function le(t,r){const l=r??new f(4);return l[0]=1/t[0],l[1]=1/t[1],l[2]=1/t[2],l[3]=1/t[3],l}const fe=le;function de(t,r){return t[0]*r[0]+t[1]*r[1]+t[2]*r[2]+t[3]*r[3]}function pe(t){const r=t[0],l=t[1],p=t[2],_=t[3];return Math.sqrt(r*r+l*l+p*p+_*_)}const ge=pe;function oe(t){const r=t[0],l=t[1],p=t[2],_=t[3];return r*r+l*l+p*p+_*_}const we=oe;function A(t,r){const l=t[0]-r[0],p=t[1]-r[1],_=t[2]-r[2],e=t[3]-r[3];return Math.sqrt(l*l+p*p+_*_+e*e)}const E=A;function F(t,r){const l=t[0]-r[0],p=t[1]-r[1],_=t[2]-r[2],e=t[3]-r[3];return l*l+p*p+_*_+e*e}const he=F;function K(t,r){const l=r??new f(4),p=t[0],_=t[1],e=t[2],o=t[3],n=Math.sqrt(p*p+_*_+e*e+o*o);return n>1e-5?(l[0]=p/n,l[1]=_/n,l[2]=e/n,l[3]=o/n):(l[0]=0,l[1]=0,l[2]=0,l[3]=0),l}function se(t,r){const l=r??new f(4);return l[0]=-t[0],l[1]=-t[1],l[2]=-t[2],l[3]=-t[3],l}function ee(t,r){const l=r??new f(4);return l[0]=t[0],l[1]=t[1],l[2]=t[2],l[3]=t[3],l}const ve=ee;function X(t,r,l){const p=l??new f(4);return p[0]=t[0]*r[0],p[1]=t[1]*r[1],p[2]=t[2]*r[2],p[3]=t[3]*r[3],p}const Ge=X;function xe(t,r,l){const p=l??new f(4);return p[0]=t[0]/r[0],p[1]=t[1]/r[1],p[2]=t[2]/r[2],p[3]=t[3]/r[3],p}const Fe=xe;function re(t){const r=t??new f(4);return r[0]=0,r[1]=0,r[2]=0,r[3]=0,r}function ne(t,r,l){const p=l??new f(4),_=t[0],e=t[1],o=t[2],n=t[3];return p[0]=r[0]*_+r[4]*e+r[8]*o+r[12]*n,p[1]=r[1]*_+r[5]*e+r[9]*o+r[13]*n,p[2]=r[2]*_+r[6]*e+r[10]*o+r[14]*n,p[3]=r[3]*_+r[7]*e+r[11]*o+r[15]*n,p}function ce(t,r,l){const p=l??new f(4);return K(t,p),Z(p,r,p)}function s(t,r,l){const p=l??new f(4);return pe(t)>r?ce(t,r,p):ee(t,p)}function d(t,r,l){const p=l??new f(4);return $(t,r,.5,p)}return{create:g,fromValues:M,set:B,ceil:P,floor:D,round:I,clamp:R,add:N,addScaled:J,subtract:W,sub:L,equalsApproximately:ie,equals:j,lerp:$,lerpV:U,max:C,min:Q,mulScalar:Z,scale:k,divScalar:H,inverse:le,invert:fe,dot:de,length:pe,len:ge,lengthSq:oe,lenSq:we,distance:A,dist:E,distanceSq:F,distSq:he,normalize:K,negate:se,copy:ee,clone:ve,multiply:X,mul:Ge,divide:xe,div:Fe,zero:re,transformMat4:ne,setLength:ce,truncate:s,midpoint:d}}const rn=new Map;function mn(f){let g=rn.get(f);return g||(g=_n(f),rn.set(f,g)),g}function $e(f,g,M,B,P,D){return{mat3:hn(f),mat4:xn(g),quat:wn(M),vec2:on(B),vec3:We(P),vec4:mn(D)}}const{mat3:En,mat4:Ie,quat:Xn,vec2:Ln,vec3:jn,vec4:Hn}=$e(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);$e(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);$e(ln,Array,Array,Array,Array,Array);const Oe=new ArrayBuffer(272),qe={texel_size:new Float32Array(Oe,0,2),sphere_size:new Float32Array(Oe,8,2),inv_projection_matrix:new Float32Array(Oe,16,16),projection_matrix:new Float32Array(Oe,80,16),view_matrix:new Float32Array(Oe,144,16),inv_view_matrix:new Float32Array(Oe,208,16)},Ne=2e5;class yn{constructor(g){b(this,"isDragging");b(this,"prevX");b(this,"prevY");b(this,"prevHoverX");b(this,"prevHoverY");b(this,"currentHoverX");b(this,"currentHoverY");b(this,"currentXtheta");b(this,"currentYtheta");b(this,"maxYTheta");b(this,"minYTheta");b(this,"sensitivity");b(this,"currentDistance");b(this,"maxDistance");b(this,"minDistance");b(this,"target");b(this,"fov");b(this,"zoomRate");b(this,"canvas");this.canvas=g,this.canvas.addEventListener("mousedown",M=>{this.isDragging=!0,this.prevX=M.clientX,this.prevY=M.clientY}),this.canvas.addEventListener("wheel",M=>{M.preventDefault();var B=M.deltaY;this.currentDistance+=(B>0?1:-1)*this.zoomRate,this.currentDistance<this.minDistance&&(this.currentDistance=this.minDistance),this.currentDistance>this.maxDistance&&(this.currentDistance=this.maxDistance),this.recalculateView()}),this.canvas.addEventListener("mousemove",M=>{if(this.currentHoverX=M.clientX,this.currentHoverY=M.clientY,this.isDragging){const B=this.prevX-M.clientX;this.currentXtheta+=this.sensitivity*B,this.currentYtheta>this.maxYTheta&&(this.currentYtheta=this.maxYTheta),this.currentYtheta<this.minYTheta&&(this.currentYtheta=this.minYTheta),this.prevX=M.clientX,this.prevY=M.clientY,this.recalculateView()}}),this.canvas.addEventListener("mouseup",()=>{this.isDragging&&(this.isDragging=!1)})}reset(g,M,B,P){this.isDragging=!1,this.prevX=0,this.prevY=0,this.currentXtheta=-Math.PI/2*1,this.currentYtheta=0,this.maxYTheta=0,this.minYTheta=-.99*Math.PI/2,this.sensitivity=.005,this.currentDistance=g,this.maxDistance=2*this.currentDistance,this.minDistance=.7*this.currentDistance,this.target=M,this.fov=B,this.zoomRate=P;const D=this.canvas.clientWidth/this.canvas.clientHeight,I=Ie.perspective(B,D,.1,300);qe.projection_matrix.set(I),qe.inv_projection_matrix.set(Ie.inverse(I)),this.recalculateView()}recalculateView(){var g=Ie.identity();Ie.translate(g,this.target,g),Ie.rotateY(g,this.currentXtheta,g),Ie.rotateX(g,this.currentYtheta,g),Ie.translate(g,[0,0,this.currentDistance],g);var M=Ie.multiply(g,[0,0,0,1]);const B=Ie.lookAt([M[0],M[1],M[2]],this.target,[0,1,0]);qe.view_matrix.set(B),qe.inv_view_matrix.set(Ie.inverse(B))}calcMouseVelocity(){if(this.isDragging)return[0,0];let[g,M]=this.calcPlaneCoord(this.currentHoverX,this.currentHoverY),[B,P]=this.calcPlaneCoord(this.prevHoverX,this.prevHoverY),D=g-B,I=M-P,R=[D,I,0,0];return(this.currentHoverX-this.prevHoverX)/this.canvas.width*(this.canvas.width/this.canvas.height),-(this.currentHoverY-this.prevHoverY)/this.canvas.height,R}calcPlaneCoord(g,M){let B=g/this.canvas.width,P=M/this.canvas.height,D=2*B-1,I=(1-P)*2-1,R=[D*Math.tan(this.fov/2)*(this.canvas.width/this.canvas.height),I*Math.tan(this.fov/2),-1];return[R[0]*this.currentDistance,R[1]*this.currentDistance]}setNewPrevMouseCoord(){this.prevHoverX=this.currentHoverX,this.prevHoverY=this.currentHoverY}stepAngle(){this.currentXtheta+=.012,this.recalculateView()}}var zn=`struct Cell {
    vx: i32, 
    vy: i32, 
    vz: i32, 
    mass: i32, 
}

@group(0) @binding(0) var<storage, read_write> cells: array<Cell>;

@compute @workgroup_size(64)
fn clearGrid(@builtin(global_invocation_id) id: vec3<u32>) {
    if (id.x < arrayLength(&cells)) {
        cells[id.x].mass = 0;
        cells[id.x].vx = 0;
        cells[id.x].vy = 0;
        cells[id.x].vz = 0;
    }
}`,Mn=`struct Particle {
    position: vec3f, 
    v: vec3f, 
    C: mat3x3f, 
}

@group(0) @binding(0) var<storage, read_write> particles: array<Particle>;
@group(0) @binding(1) var<uniform> init_box_size: vec3f;
@group(0) @binding(2) var<uniform> numParticles: i32;

@compute @workgroup_size(1)
fn spawn() {
    let dx: f32 = 0.5;
    let center: vec3f = init_box_size / 2;
    let beg: vec3f = vec3f(center.x, 5, 5);
    let base: vec3f = beg + vec3f(4.5 * dx, 4.5 * dx, 0);
    let vScale: f32 = 0.6;

    let dummy = numParticles;

    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            var offset = 10 * i + j;
            let pos = beg + vec3f(f32(i), f32(j), 0) * dx;
            particles[(numParticles - 1) - offset].position = pos;
            let vDir = normalize(center - pos);
            particles[(numParticles - 1) - offset].v = vDir * vScale; 
            particles[(numParticles - 1) - offset].C = mat3x3f(vec3f(0.), vec3f(0.), vec3f(0.));
        }
    }
}`,Pn=`struct Particle {
    position: vec3f, 
    v: vec3f, 
    C: mat3x3f, 
}
struct Cell {
    vx: atomic<i32>, 
    vy: atomic<i32>, 
    vz: atomic<i32>, 
    mass: atomic<i32>, 
}

override fixed_point_multiplier: f32; 

fn encodeFixedPoint(floating_point: f32) -> i32 {
	return i32(floating_point * fixed_point_multiplier);
}

@group(0) @binding(0) var<storage, read> particles: array<Particle>;
@group(0) @binding(1) var<storage, read_write> cells: array<Cell>;
@group(0) @binding(2) var<uniform> init_box_size: vec3f;
@group(0) @binding(3) var<uniform> numParticles: u32;

@compute @workgroup_size(64)
fn p2g_1(@builtin(global_invocation_id) id: vec3<u32>) {
    if (id.x < numParticles) {
        var weights: array<vec3f, 3>;

        let particle = particles[id.x];
        let cell_idx: vec3f = floor(particle.position);
        let cell_diff: vec3f = particle.position - (cell_idx + 0.5f);
        weights[0] = 0.5f * (0.5f - cell_diff) * (0.5f - cell_diff);
        weights[1] = 0.75f - cell_diff * cell_diff;
        weights[2] = 0.5f * (0.5f + cell_diff) * (0.5f + cell_diff);

        let C: mat3x3f = particle.C;

        for (var gx = 0; gx < 3; gx++) {
            for (var gy = 0; gy < 3; gy++) {
                for (var gz = 0; gz < 3; gz++) {
                    let weight: f32 = weights[gx].x * weights[gy].y * weights[gz].z;
                    let cell_x: vec3f = vec3f(
                            cell_idx.x + f32(gx) - 1., 
                            cell_idx.y + f32(gy) - 1.,
                            cell_idx.z + f32(gz) - 1.  
                        );
                    let cell_dist = (cell_x + 0.5f) - particle.position;

                    let Q: vec3f = C * cell_dist;

                    let mass_contrib: f32 = weight * 1.0; 
                    let vel_contrib: vec3f = mass_contrib * (particle.v + Q);
                    let cell_index: i32 = 
                        i32(cell_x.x) * i32(init_box_size.y) * i32(init_box_size.z) + 
                        i32(cell_x.y) * i32(init_box_size.z) + 
                        i32(cell_x.z);
                    atomicAdd(&cells[cell_index].mass, encodeFixedPoint(mass_contrib));
                    atomicAdd(&cells[cell_index].vx, encodeFixedPoint(vel_contrib.x));
                    atomicAdd(&cells[cell_index].vy, encodeFixedPoint(vel_contrib.y));
                    atomicAdd(&cells[cell_index].vz, encodeFixedPoint(vel_contrib.z));
                }
            }
        }
    }
}`,Dn=`struct Particle {
    position: vec3f, 
    v: vec3f, 
    C: mat3x3f, 
}
struct Cell {
    vx: atomic<i32>, 
    vy: atomic<i32>, 
    vz: atomic<i32>, 
    mass: i32, 
}

override fixed_point_multiplier: f32; 
override stiffness: f32;
override rest_density: f32;
override dynamic_viscosity: f32;
override dt: f32;

fn encodeFixedPoint(floating_point: f32) -> i32 {
	return i32(floating_point * fixed_point_multiplier);
}
fn decodeFixedPoint(fixed_point: i32) -> f32 {
	return f32(fixed_point) / fixed_point_multiplier;
}

@group(0) @binding(0) var<storage, read> particles: array<Particle>;
@group(0) @binding(1) var<storage, read_write> cells: array<Cell>;
@group(0) @binding(2) var<uniform> init_box_size: vec3f;
@group(0) @binding(3) var<uniform> numParticles: u32;
@group(0) @binding(4) var<storage, read_write> densities: array<f32>;

@compute @workgroup_size(64)
fn p2g_2(@builtin(global_invocation_id) id: vec3<u32>) {
    if (id.x < numParticles) {
        var weights: array<vec3f, 3>;

        let particle = particles[id.x];
        let cell_idx: vec3f = floor(particle.position);
        let cell_diff: vec3f = particle.position - (cell_idx + 0.5f);
        weights[0] = 0.5f * (0.5f - cell_diff) * (0.5f - cell_diff);
        weights[1] = 0.75f - cell_diff * cell_diff;
        weights[2] = 0.5f * (0.5f + cell_diff) * (0.5f + cell_diff);

        var density: f32 = 0.;
        for (var gx = 0; gx < 3; gx++) {
            for (var gy = 0; gy < 3; gy++) {    
                for (var gz = 0; gz < 3; gz++) {
                    let weight: f32 = weights[gx].x * weights[gy].y * weights[gz].z;
                    let cell_x: vec3f = vec3f(
                            cell_idx.x + f32(gx) - 1., 
                            cell_idx.y + f32(gy) - 1.,
                            cell_idx.z + f32(gz) - 1.  
                        );
                    let cell_index: i32 = 
                        i32(cell_x.x) * i32(init_box_size.y) * i32(init_box_size.z) + 
                        i32(cell_x.y) * i32(init_box_size.z) + 
                        i32(cell_x.z);
                    density += decodeFixedPoint(cells[cell_index].mass) * weight;
                }
            }
        }

        let volume: f32 = 1.0 / density; 
        densities[id.x] = density;

        let pressure: f32 = max(-0.0, stiffness * (pow(density / rest_density, 5.) - 1));

        var stress: mat3x3f = mat3x3f(-pressure, 0, 0, 0, -pressure, 0, 0, 0, -pressure);
        let dudv: mat3x3f = particle.C;
        let strain: mat3x3f = dudv + transpose(dudv);
        stress += dynamic_viscosity * strain;

        let eq_16_term0 = -volume * 4 * stress * dt;

        for (var gx = 0; gx < 3; gx++) {
            for (var gy = 0; gy < 3; gy++) {
                for (var gz = 0; gz < 3; gz++) {
                    let weight: f32 = weights[gx].x * weights[gy].y * weights[gz].z;
                    let cell_x: vec3f = vec3f(
                            cell_idx.x + f32(gx) - 1., 
                            cell_idx.y + f32(gy) - 1.,
                            cell_idx.z + f32(gz) - 1.  
                        );
                    let cell_dist = (cell_x + 0.5f) - particle.position;
                    let cell_index: i32 = 
                        i32(cell_x.x) * i32(init_box_size.y) * i32(init_box_size.z) + 
                        i32(cell_x.y) * i32(init_box_size.z) + 
                        i32(cell_x.z);
                    let momentum: vec3f = eq_16_term0 * weight * cell_dist;
                    atomicAdd(&cells[cell_index].vx, encodeFixedPoint(momentum.x));
                    atomicAdd(&cells[cell_index].vy, encodeFixedPoint(momentum.y));
                    atomicAdd(&cells[cell_index].vz, encodeFixedPoint(momentum.z));
                }
            }
        }
    }
}`,bn=`struct Cell {
    vx: i32, 
    vy: i32, 
    vz: i32, 
    mass: i32, 
}
struct RenderUniforms {
    texel_size: vec2f, 
    sphere_size: f32, 
    inv_projection_matrix: mat4x4f, 
    projection_matrix: mat4x4f, 
    view_matrix: mat4x4f, 
    inv_view_matrix: mat4x4f, 
}
struct CanvasInfo {
    screenSize: vec2f, 
    mouseCoord : vec2f, 
    mouseVel : vec2f, 
}

override fixed_point_multiplier: f32; 
override dt: f32; 

@group(0) @binding(0) var<storage, read_write> cells: array<Cell>;
@group(0) @binding(1) var<uniform> real_box_size: vec3f;
@group(0) @binding(2) var<uniform> init_box_size: vec3f;
@group(0) @binding(3) var<uniform> uniforms: RenderUniforms;
@group(0) @binding(4) var depthTexture: texture_2d<f32>;
@group(0) @binding(5) var<uniform> mouseInfo: CanvasInfo; 

fn encodeFixedPoint(floating_point: f32) -> i32 {
	return i32(floating_point * fixed_point_multiplier);
}
fn decodeFixedPoint(fixed_point: i32) -> f32 {
	return f32(fixed_point) / fixed_point_multiplier;
}

fn computeViewPosFromUVDepth(tex_coord: vec2f, depth: f32) -> vec3f {
    var ndc: vec4f = vec4f(tex_coord.x * 2.0 - 1.0, 1.0 - 2.0 * tex_coord.y, 0.0, 1.0);
    ndc.z = -uniforms.projection_matrix[2].z + uniforms.projection_matrix[3].z / depth;
    ndc.w = 1.0;

    var eye_pos: vec4f = uniforms.inv_projection_matrix * ndc;

    return eye_pos.xyz / eye_pos.w;
}

fn getViewPosFromTexCoord(tex_coord: vec2f, iuv: vec2f) -> vec3f {
    var depth: f32 = abs(textureLoad(depthTexture, vec2u(iuv), 0).x);
    return computeViewPosFromUVDepth(tex_coord, depth);
}

@compute @workgroup_size(64)
fn updateGrid(@builtin(global_invocation_id) id: vec3<u32>) {
    if (id.x < arrayLength(&cells)) { 
        let uv: vec2f = mouseInfo.mouseCoord;
        let iuv = uv * mouseInfo.screenSize;
        let depth: f32 = abs(textureLoad(depthTexture, vec2u(iuv), 0).x);
        var mouseCellIndex: u32 = 1000000000; 
        var cellSquareDistToMouse: f32 = 1e9;
        var forceDir = vec3f(0.);
        if (depth < 1e5) {
            let mouseViewPos = getViewPosFromTexCoord(uv, iuv);
            let mouseWorldPos = uniforms.inv_view_matrix * vec4f(mouseViewPos, 1.); 
            let mouseCellPos: vec3i = vec3i(floor(mouseWorldPos).xyz);
            mouseCellIndex =    u32(mouseCellPos.x) * u32(init_box_size.y) * u32(init_box_size.z) + 
                                u32(mouseCellPos.y) * u32(init_box_size.z) + 
                                u32(mouseCellPos.z);
            let center = real_box_size / 2;
            
            
            if (dot(mouseInfo.mouseVel, mouseInfo.mouseVel) > 0.) {
                forceDir = (uniforms.inv_view_matrix * vec4f(mouseInfo.mouseVel, 0.0, 0)).xyz; 
            } else {
                forceDir = vec3f(0.);
            }

            var x: f32 = f32(i32(id.x) / i32(init_box_size.z) / i32(init_box_size.y));
            var y: f32 = f32((i32(id.x) / i32(init_box_size.z)) % i32(init_box_size.y));
            var z: f32 = f32(i32(id.x) % i32(init_box_size.z));
            let cellPos = vec3f(x, y, z);
            let diff = floor(mouseWorldPos).xyz - cellPos;
            cellSquareDistToMouse = dot(diff, diff);
        }

        let dt = dt;
        let r = 5.;

        if (cells[id.x].mass > 0) { 
            var float_v: vec3f = vec3f(
                decodeFixedPoint(cells[id.x].vx), 
                decodeFixedPoint(cells[id.x].vy), 
                decodeFixedPoint(cells[id.x].vz)
            );
            float_v /= decodeFixedPoint(cells[id.x].mass);
            
            if (cellSquareDistToMouse < r * r) { 
                let strength = (r * r - cellSquareDistToMouse) / (r * r) * 0.15;
                cells[id.x].vx = encodeFixedPoint(float_v.x + strength * forceDir.x); 
                cells[id.x].vy = encodeFixedPoint(float_v.y + strength * forceDir.y); 
                cells[id.x].vz = encodeFixedPoint(float_v.z + strength * forceDir.z); 
            } else {
                cells[id.x].vx = encodeFixedPoint(float_v.x);
                cells[id.x].vy = encodeFixedPoint(float_v.y); 
                cells[id.x].vz = encodeFixedPoint(float_v.z);
            } 

            var x: i32 = i32(id.x) / i32(init_box_size.z) / i32(init_box_size.y);
            var y: i32 = (i32(id.x) / i32(init_box_size.z)) % i32(init_box_size.y);
            var z: i32 = i32(id.x) % i32(init_box_size.z);
            
            if (x < 2 || x > i32(ceil(real_box_size.x) - 3)) { cells[id.x].vx = 0; } 
            if (y < 2 || y > i32(ceil(real_box_size.y) - 3)) { cells[id.x].vy = 0; }
            if (z < 2 || z > i32(ceil(real_box_size.z) - 3)) { cells[id.x].vz = 0; }
        }
    }
}`,Bn=`struct Particle {
    position: vec3f, 
    v: vec3f, 
    C: mat3x3f, 
}
struct Cell {
    vx: i32, 
    vy: i32, 
    vz: i32, 
    mass: i32, 
}

override fixed_point_multiplier: f32; 
override dt: f32; 

@group(0) @binding(0) var<storage, read_write> particles: array<Particle>;
@group(0) @binding(1) var<storage, read> cells: array<Cell>;
@group(0) @binding(2) var<uniform> real_box_size: vec3f;
@group(0) @binding(3) var<uniform> init_box_size: vec3f;
@group(0) @binding(4) var<uniform> numParticles: u32;
@group(0) @binding(5) var<uniform> sphereRadius: f32;

fn decodeFixedPoint(fixed_point: i32) -> f32 {
	return f32(fixed_point) / fixed_point_multiplier;
}

@compute @workgroup_size(64)
fn g2p(@builtin(global_invocation_id) id: vec3<u32>) {
    if (id.x < numParticles) {
        particles[id.x].v = vec3f(0.);
        var weights: array<vec3f, 3>;

        let particle = particles[id.x];
        let cell_idx: vec3f = floor(particle.position);
        let cell_diff: vec3f = particle.position - (cell_idx + 0.5f);
        weights[0] = 0.5f * (0.5f - cell_diff) * (0.5f - cell_diff);
        weights[1] = 0.75f - cell_diff * cell_diff;
        weights[2] = 0.5f * (0.5f + cell_diff) * (0.5f + cell_diff);

        var B: mat3x3f = mat3x3f(vec3f(0.), vec3f(0.), vec3f(0.));
        for (var gx = 0; gx < 3; gx++) {
            for (var gy = 0; gy < 3; gy++) {
                for (var gz = 0; gz < 3; gz++) {
                    let weight: f32 = weights[gx].x * weights[gy].y * weights[gz].z;
                    let cell_x: vec3f = vec3f(
                        cell_idx.x + f32(gx) - 1., 
                        cell_idx.y + f32(gy) - 1.,
                        cell_idx.z + f32(gz) - 1.  
                    );
                    let cell_dist: vec3f = (cell_x + 0.5f) - particle.position;
                    let cell_index: i32 = 
                        i32(cell_x.x) * i32(init_box_size.y) * i32(init_box_size.z) + 
                        i32(cell_x.y) * i32(init_box_size.z) + 
                        i32(cell_x.z);
                    let weighted_velocity: vec3f = vec3f(
                        decodeFixedPoint(cells[cell_index].vx), 
                        decodeFixedPoint(cells[cell_index].vy), 
                        decodeFixedPoint(cells[cell_index].vz)
                    ) * weight;
                    let term: mat3x3f = mat3x3f(
                        weighted_velocity * cell_dist.x, 
                        weighted_velocity * cell_dist.y, 
                        weighted_velocity * cell_dist.z
                    );

                    B += term;

                    particles[id.x].v += weighted_velocity;
                }
            }
        }

        particles[id.x].C = B * 4.0f;
        particles[id.x].position += particles[id.x].v * dt;
        particles[id.x].position = vec3f(
            clamp(particles[id.x].position.x, 1., real_box_size.x - 2.), 
            clamp(particles[id.x].position.y, 1., real_box_size.y - 2.), 
            clamp(particles[id.x].position.z, 1., real_box_size.z - 2.)
        );

        let center = vec3f(real_box_size.x / 2, real_box_size.y / 2, real_box_size.z / 2);
        let dist = center - particles[id.x].position;
        let dirToOrigin = normalize(dist);
        var rForce = vec3f(0);

        
        let r: f32 = sphereRadius; 
        

        if (dot(dist, dist) < r * r) {
            particles[id.x].v += -(r - sqrt(dot(dist, dist))) * dirToOrigin * 3.0;
        }

        particles[id.x].v += dirToOrigin * 0.1;

        
        let k = 3.0;
        let wall_stiffness = 1.0;
        let x_n: vec3f = particles[id.x].position + particles[id.x].v * dt * k;
        let wall_min: vec3f = vec3f(3.);
        let wall_max: vec3f = real_box_size - 4.;
        if (x_n.x < wall_min.x) { particles[id.x].v.x += wall_stiffness * (wall_min.x - x_n.x); }
        if (x_n.x > wall_max.x) { particles[id.x].v.x += wall_stiffness * (wall_max.x - x_n.x); }
        if (x_n.y < wall_min.y) { particles[id.x].v.y += wall_stiffness * (wall_min.y - x_n.y); }
        if (x_n.y > wall_max.y) { particles[id.x].v.y += wall_stiffness * (wall_max.y - x_n.y); }
        if (x_n.z < wall_min.z) { particles[id.x].v.z += wall_stiffness * (wall_min.z - x_n.z); }
        if (x_n.z > wall_max.z) { particles[id.x].v.z += wall_stiffness * (wall_max.z - x_n.z); }
    }
}`,Sn=`struct Particle {
    position: vec3f, 
    v: vec3f, 
    C: mat3x3f, 
}

struct PosVel {
    position: vec3f, 
    v: vec3f, 
    density: f32, 
}

@group(0) @binding(0) var<storage, read> particles: array<Particle>;
@group(0) @binding(1) var<storage, read_write> posvel: array<PosVel>;
@group(0) @binding(2) var<uniform> numParticles: u32;
@group(0) @binding(3) var<storage, read> densities: array<f32>;

@compute @workgroup_size(64)
fn copyPosition(@builtin(global_invocation_id) id: vec3<u32>) {
    if (id.x < numParticles) { 
        posvel[id.x].position = particles[id.x].position;
        posvel[id.x].v = particles[id.x].v;
        posvel[id.x].density = densities[id.x];
    }
}`;const He=80;class Vn{constructor(g,M,B,P,D,I,R){b(this,"max_x_grids",80);b(this,"max_y_grids",80);b(this,"max_z_grids",80);b(this,"cellStructSize",16);b(this,"realBoxSizeBuffer");b(this,"initBoxSizeBuffer");b(this,"numParticlesBuffer");b(this,"densityBuffer");b(this,"canvasInfoUniformBuffer");b(this,"sphereRadiusBuffer");b(this,"numParticles",0);b(this,"gridCount",0);b(this,"clearGridPipeline");b(this,"spawnParticlesPipeline");b(this,"p2g1Pipeline");b(this,"p2g2Pipeline");b(this,"updateGridPipeline");b(this,"g2pPipeline");b(this,"copyPositionPipeline");b(this,"clearGridBindGroup");b(this,"spawnParticlesBindGroup");b(this,"p2g1BindGroup");b(this,"p2g2BindGroup");b(this,"updateGridBindGroup");b(this,"g2pBindGroup");b(this,"copyPositionBindGroup");b(this,"particleBuffer");b(this,"device");b(this,"renderDiameter");b(this,"frameCount");b(this,"spawned");b(this,"canvasInfoValues");b(this,"restDensity");this.device=P,this.renderDiameter=B,this.frameCount=0,this.spawned=!1,this.numParticles=0;const N=P.createShaderModule({code:zn}),J=P.createShaderModule({code:Mn}),W=P.createShaderModule({code:Pn}),L=P.createShaderModule({code:Dn}),ie=P.createShaderModule({code:bn}),j=P.createShaderModule({code:Bn}),$=P.createShaderModule({code:Sn});this.restDensity=4;const U={stiffness:3,restDensity:this.restDensity,dynamic_viscosity:.1,dt:.2,fixed_point_multiplier:1e7};this.clearGridPipeline=P.createComputePipeline({label:"clear grid pipeline",layout:"auto",compute:{module:N}}),this.spawnParticlesPipeline=P.createComputePipeline({label:"spawn particles pipeline",layout:"auto",compute:{module:J}}),this.p2g1Pipeline=P.createComputePipeline({label:"p2g 1 pipeline",layout:"auto",compute:{module:W,constants:{fixed_point_multiplier:U.fixed_point_multiplier}}}),this.p2g2Pipeline=P.createComputePipeline({label:"p2g 2 pipeline",layout:"auto",compute:{module:L,constants:{fixed_point_multiplier:U.fixed_point_multiplier,stiffness:U.stiffness,rest_density:U.restDensity,dynamic_viscosity:U.dynamic_viscosity,dt:U.dt}}}),this.updateGridPipeline=P.createComputePipeline({label:"update grid pipeline",layout:"auto",compute:{module:ie,constants:{fixed_point_multiplier:U.fixed_point_multiplier,dt:U.dt}}}),this.g2pPipeline=P.createComputePipeline({label:"g2p pipeline",layout:"auto",compute:{module:j,constants:{fixed_point_multiplier:U.fixed_point_multiplier,dt:U.dt}}}),this.copyPositionPipeline=P.createComputePipeline({label:"copy position pipeline",layout:"auto",compute:{module:$}});const C=this.max_x_grids*this.max_y_grids*this.max_z_grids,Q=new ArrayBuffer(12),Z=new ArrayBuffer(12),k=new ArrayBuffer(4);this.canvasInfoValues=new ArrayBuffer(24);const H=P.createBuffer({label:"cells buffer",size:this.cellStructSize*C,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});this.densityBuffer=P.createBuffer({label:"density buffer",size:4*Ne,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.realBoxSizeBuffer=P.createBuffer({label:"real box size buffer",size:Q.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.initBoxSizeBuffer=P.createBuffer({label:"init box size buffer",size:Z.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.numParticlesBuffer=P.createBuffer({label:"number of particles buffer",size:k.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.canvasInfoUniformBuffer=P.createBuffer({label:"canvas info buffer",size:this.canvasInfoValues.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.sphereRadiusBuffer=P.createBuffer({label:"sphere radius buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),{screenSize:new Float32Array(this.canvasInfoValues,0,2),mouseCoord:new Float32Array(this.canvasInfoValues,8,2),mouseVel:new Float32Array(this.canvasInfoValues,16,2)}.screenSize.set([R.width,R.height]),this.device.queue.writeBuffer(this.canvasInfoUniformBuffer,0,this.canvasInfoValues),this.clearGridBindGroup=P.createBindGroup({layout:this.clearGridPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:H}}]}),this.spawnParticlesBindGroup=P.createBindGroup({layout:this.spawnParticlesPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:g}},{binding:1,resource:{buffer:this.initBoxSizeBuffer}},{binding:2,resource:{buffer:this.numParticlesBuffer}}]}),this.p2g1BindGroup=P.createBindGroup({layout:this.p2g1Pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:g}},{binding:1,resource:{buffer:H}},{binding:2,resource:{buffer:this.initBoxSizeBuffer}},{binding:3,resource:{buffer:this.numParticlesBuffer}}]}),this.p2g2BindGroup=P.createBindGroup({layout:this.p2g2Pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:g}},{binding:1,resource:{buffer:H}},{binding:2,resource:{buffer:this.initBoxSizeBuffer}},{binding:3,resource:{buffer:this.numParticlesBuffer}},{binding:4,resource:{buffer:this.densityBuffer}}]}),this.updateGridBindGroup=P.createBindGroup({layout:this.updateGridPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:H}},{binding:1,resource:{buffer:this.realBoxSizeBuffer}},{binding:2,resource:{buffer:this.initBoxSizeBuffer}},{binding:3,resource:{buffer:D}},{binding:4,resource:I},{binding:5,resource:{buffer:this.canvasInfoUniformBuffer}}]}),this.g2pBindGroup=P.createBindGroup({layout:this.g2pPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:g}},{binding:1,resource:{buffer:H}},{binding:2,resource:{buffer:this.realBoxSizeBuffer}},{binding:3,resource:{buffer:this.initBoxSizeBuffer}},{binding:4,resource:{buffer:this.numParticlesBuffer}},{binding:5,resource:{buffer:this.sphereRadiusBuffer}}]}),this.copyPositionBindGroup=P.createBindGroup({layout:this.copyPositionPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:g}},{binding:1,resource:{buffer:M}},{binding:2,resource:{buffer:this.numParticlesBuffer}},{binding:3,resource:{buffer:this.densityBuffer}}]}),this.particleBuffer=g}initDambreak(g,M){let B=new ArrayBuffer(He*Ne);const P=.55;this.numParticles=0;for(let N=3;N<g[1]*.8&&this.numParticles<M;N+=P)for(let J=3;J<g[0]-4&&this.numParticles<M;J+=P)for(let W=3;W<g[2]/2&&this.numParticles<M;W+=P){const L=He*this.numParticles,ie={position:new Float32Array(B,L+0,3),v:new Float32Array(B,L+16,3),C:new Float32Array(B,L+32,12)},j=2*Math.random();ie.position.set([J+j,N+j,W+j]),this.numParticles++}let D=new ArrayBuffer(He*this.numParticles);const I=new Uint8Array(B),R=new Uint8Array(D);return R.set(I.subarray(0,R.length)),D}reset(g,M){qe.sphere_size.set([this.renderDiameter]);const B=this.max_x_grids*this.max_y_grids*this.max_z_grids;if(this.gridCount=Math.ceil(g[0])*Math.ceil(g[1])*Math.ceil(g[2]),this.gridCount>B)throw new Error("gridCount should be equal to or less than maxGridCount");const P=new ArrayBuffer(12);new Float32Array(P).set(g);const I=new ArrayBuffer(4);new Float32Array(I).set([M]),this.device.queue.writeBuffer(this.initBoxSizeBuffer,0,P),this.device.queue.writeBuffer(this.sphereRadiusBuffer,0,I),this.frameCount=0,this.changeBoxSize(g),this.changeNumParticles(0)}execute(g,M,B,P){const D=g.beginComputePass(),I={screenSize:new Float32Array(this.canvasInfoValues,0,2),mouseCoord:new Float32Array(this.canvasInfoValues,8,2),mouseVel:new Float32Array(this.canvasInfoValues,16,2)};I.mouseCoord.set([M[0],M[1]]),I.mouseVel.set([B[0],B[1]]),this.device.queue.writeBuffer(this.canvasInfoUniformBuffer,0,this.canvasInfoValues),this.frameCount%2==0&&this.numParticles<P&&(console.log("spawn"),D.setBindGroup(0,this.spawnParticlesBindGroup),D.setPipeline(this.spawnParticlesPipeline),D.dispatchWorkgroups(1),this.changeNumParticles(this.numParticles+100));for(let R=0;R<2;R++)D.setBindGroup(0,this.clearGridBindGroup),D.setPipeline(this.clearGridPipeline),D.dispatchWorkgroups(Math.ceil(this.gridCount/64)),D.setBindGroup(0,this.p2g1BindGroup),D.setPipeline(this.p2g1Pipeline),D.dispatchWorkgroups(Math.ceil(this.numParticles/64)),D.setBindGroup(0,this.p2g2BindGroup),D.setPipeline(this.p2g2Pipeline),D.dispatchWorkgroups(Math.ceil(this.numParticles/64)),D.setBindGroup(0,this.updateGridBindGroup),D.setPipeline(this.updateGridPipeline),D.dispatchWorkgroups(Math.ceil(this.gridCount/64)),D.setBindGroup(0,this.g2pBindGroup),D.setPipeline(this.g2pPipeline),D.dispatchWorkgroups(Math.ceil(this.numParticles/64)),D.setBindGroup(0,this.copyPositionBindGroup),D.setPipeline(this.copyPositionPipeline),D.dispatchWorkgroups(Math.ceil(this.numParticles/64)),D.setBindGroup(0,this.copyPositionBindGroup),D.setPipeline(this.copyPositionPipeline),D.dispatchWorkgroups(Math.ceil(this.numParticles/64));D.end(),this.frameCount++}changeBoxSize(g){const M=new ArrayBuffer(12),B=new Float32Array(M);B.set(g),this.device.queue.writeBuffer(this.realBoxSizeBuffer,0,B)}changeNumParticles(g){const M=new ArrayBuffer(4),B=new Int32Array(M);B.set([g]),this.device.queue.writeBuffer(this.numParticlesBuffer,0,B),this.numParticles=g}}var Gn=`struct VertexOutput {
    @builtin(position) position: vec4f, 
    @location(0) uv: vec2f, 
    @location(1) view_position: vec3f, 
}

struct FragmentInput {
    @location(0) uv: vec2f, 
    @location(1) view_position: vec3f, 
}

struct FragmentOutput {
    @location(0) frag_color: vec4f, 
    @builtin(frag_depth) frag_depth: f32, 
}

struct RenderUniforms {
    texel_size: vec2f, 
    sphere_size: f32, 
    inv_projection_matrix: mat4x4f, 
    projection_matrix: mat4x4f, 
    view_matrix: mat4x4f, 
    inv_view_matrix: mat4x4f, 
}

struct PosVel {
    position: vec3f, 
    v: vec3f, 
    density: f32, 
}

@group(0) @binding(0) var<storage> particles: array<PosVel>;
@group(0) @binding(1) var<uniform> uniforms: RenderUniforms;
@group(0) @binding(2) var<uniform> stretchStrength: f32;

override restDensity: f32;
override densitySizeScale: f32;

fn computeStretchedVertex(position: vec2f, velocity_dir: vec2f, strength: f32) -> vec2f {
    
    let stretch_offset: vec2f = dot(velocity_dir, position) * velocity_dir;
    return position + stretch_offset * strength;
}

fn area(v1: vec2f, v2: vec2f, v3: vec2f, v4: vec2f) -> f32 {
    let ab = v2 - v1;
    let ad = v4 - v1;
    let s = abs(ab.x * ad.y - ab.y * ad.x);
    return s;
}

fn scaleQuad(vel: vec2f, r: f32, strength: f32) -> f32 {
    let s1: f32 = r * r;
    let v1 = computeStretchedVertex(vec2f(0.5 * r, 0.5 * r), vel, strength);
    let v2 = computeStretchedVertex(vec2f(-0.5 * r, 0.5 * r), vel, strength);
    let v3 = computeStretchedVertex(vec2f(-0.5 * r, -0.5 * r), vel, strength);
    let v4 = computeStretchedVertex(vec2f(0.5 * r, -0.5 * r), vel, strength);
    let s2: f32 = area(v1, v2, v3, v4);
    return sqrt(s1 / s2);
}

@vertex
fn vs(    
    @builtin(vertex_index) vertex_index: u32, 
    @builtin(instance_index) instance_index: u32
) -> VertexOutput {
    var corner_positions = array(
        vec2( 0.5,  0.5),
        vec2( 0.5, -0.5),
        vec2(-0.5, -0.5),
        vec2( 0.5,  0.5),
        vec2(-0.5, -0.5),
        vec2(-0.5,  0.5),
    );

    let size = uniforms.sphere_size * clamp(particles[instance_index].density / restDensity * densitySizeScale, 0.0, 1.0);
    let projected_velocity = (uniforms.view_matrix * vec4f(particles[instance_index].v, 0.0)).xy;
    let stretched_position = computeStretchedVertex(corner_positions[vertex_index] * size, projected_velocity, stretchStrength);
    let corner = vec3(stretched_position, 0.0) * scaleQuad(projected_velocity, size, stretchStrength);

    let uv = corner_positions[vertex_index] + 0.5;

    let real_position = particles[instance_index].position;
    let view_position = (uniforms.view_matrix * vec4f(real_position, 1.0)).xyz;

    let out_position = uniforms.projection_matrix * vec4f(view_position + corner, 1.0);

    return VertexOutput(out_position, uv, view_position);
}

@fragment
fn fs(input: FragmentInput) -> FragmentOutput {
    var out: FragmentOutput;

    var normalxy: vec2f = input.uv * 2.0 - 1.0;
    var r2: f32 = dot(normalxy, normalxy);
    if (r2 > 1.0) {
        discard;
    }
    var normalz = sqrt(1.0 - r2);
    var normal = vec3(normalxy, normalz);

    var radius = uniforms.sphere_size / 2;
    var real_view_pos: vec4f = vec4f(input.view_position + normal * radius, 1.0);
    var clip_space_pos: vec4f = uniforms.projection_matrix * real_view_pos;
    out.frag_depth = clip_space_pos.z / clip_space_pos.w;

    out.frag_color = vec4(real_view_pos.z, 0., 0., 1.);
    return out;
}`,Fn=`@group(0) @binding(1) var texture: texture_2d<f32>;
@group(0) @binding(2) var<uniform> uniforms: FilterUniforms;

struct FragmentInput {
    @location(0) uv: vec2f,  
    @location(1) iuv: vec2f
}

override depth_threshold: f32;  
override projected_particle_constant: f32; 
override max_filter_size: f32;

struct FilterUniforms {
    blur_dir: vec2f,
}

@fragment
fn fs(input: FragmentInput) -> @location(0) vec4f {
    var depth: f32 = abs(textureLoad(texture, vec2u(input.iuv), 0).r);

    if (depth >= 1e4) {
        return vec4f(vec3f(depth), 1.);
    }

    var filter_size: i32 = min(i32(max_filter_size), i32(ceil(projected_particle_constant / depth)));

    var sigma: f32 = f32(filter_size) / 3.0; 
    var two_sigma: f32 = 2.0 * sigma * sigma;
    var sigma_depth: f32 = depth_threshold / 3.0;
    var two_sigma_depth: f32 = 2.0 * sigma_depth * sigma_depth;

    var sum: f32 = 0.0;
    var wsum: f32 = 0.0;
    for (var x: i32 = -filter_size; x <= filter_size; x++) {
        var coords: vec2f = vec2f(f32(x));
        var sampled_depth: f32 = abs(textureLoad(texture, vec2u(input.iuv + coords * uniforms.blur_dir), 0).r);

        var rr: f32 = dot(coords, coords);
        var w: f32 = exp(-rr / two_sigma);

        var r_depth: f32 = sampled_depth - depth;
        var wd: f32 = exp(-r_depth * r_depth / two_sigma_depth);
        sum += sampled_depth * w * wd;
        wsum += w * wd;
    }

    sum /= wsum;

    return vec4f(sum, 0., 0., 1.);
}`,Tn=`@group(0) @binding(0) var texture_sampler: sampler;
@group(0) @binding(1) var texture: texture_2d<f32>;
@group(0) @binding(2) var<uniform> uniforms: RenderUniforms;
@group(0) @binding(3) var thickness_texture: texture_2d<f32>;
@group(0) @binding(4) var envmap_texture: texture_cube<f32>;

struct RenderUniforms {
    texel_size: vec2f, 
    sphere_size: f32, 
    inv_projection_matrix: mat4x4f, 
    projection_matrix: mat4x4f, 
    view_matrix: mat4x4f, 
    inv_view_matrix: mat4x4f, 
}

struct FragmentInput {
    @location(0) uv: vec2f, 
    @location(1) iuv: vec2f, 
}

fn computeViewPosFromUVDepth(tex_coord: vec2f, depth: f32) -> vec3f {
    var ndc: vec4f = vec4f(tex_coord.x * 2.0 - 1.0, 1.0 - 2.0 * tex_coord.y, 0.0, 1.0);
    
    ndc.z = -uniforms.projection_matrix[2].z + uniforms.projection_matrix[3].z / depth;
    ndc.w = 1.0;

    var eye_pos: vec4f = uniforms.inv_projection_matrix * ndc;

    return eye_pos.xyz / eye_pos.w;
}

fn getViewPosFromTexCoord(tex_coord: vec2f, iuv: vec2f) -> vec3f {
    var depth: f32 = abs(textureLoad(texture, vec2u(iuv), 0).x);
    return computeViewPosFromUVDepth(tex_coord, depth);
}

@fragment
fn fs(input: FragmentInput) -> @location(0) vec4f {
    var depth: f32 = abs(textureLoad(texture, vec2u(input.iuv), 0).r);

    let bgColor: vec3f = vec3f(0.7, 0.7, 0.75);

    if (depth >= 1e4) {
        return vec4f(bgColor, 1.);
    }

    var viewPos: vec3f = computeViewPosFromUVDepth(input.uv, depth); 

    var ddx: vec3f = getViewPosFromTexCoord(input.uv + vec2f(uniforms.texel_size.x, 0.), input.iuv + vec2f(1.0, 0.0)) - viewPos; 
    var ddy: vec3f = getViewPosFromTexCoord(input.uv + vec2f(0., uniforms.texel_size.y), input.iuv + vec2f(0.0, 1.0)) - viewPos; 
    var ddx2: vec3f = viewPos - getViewPosFromTexCoord(input.uv + vec2f(-uniforms.texel_size.x, 0.), input.iuv + vec2f(-1.0, 0.0));
    var ddy2: vec3f = viewPos - getViewPosFromTexCoord(input.uv + vec2f(0., -uniforms.texel_size.y), input.iuv + vec2f(0.0, -1.0));

    if (abs(ddx.z) > abs(ddx2.z)) {
        ddx = ddx2; 
    }
    if (abs(ddy.z) > abs(ddy2.z)) {
        ddy = ddy2;
    }

    var normal: vec3f = -normalize(cross(ddx, ddy)); 
    var rayDir = normalize(viewPos);
    var lightDir = normalize((uniforms.view_matrix * vec4f(-1, 1, -1, 0.)).xyz);
    var H: vec3f        = normalize(lightDir - rayDir);
    var specular: f32   = pow(max(0.0, dot(H, normal)), 250.);
    var diffuse: f32  = max(0.0, dot(lightDir, normal)) * 1.0;

    var density = 0.7; 
    
    var thickness = textureLoad(thickness_texture, vec2u(input.iuv), 0).r;

    
    var diffuseColor = vec3f(0.0, 0.7375, 0.95);
    var transmittance: vec3f = exp(-density * thickness * (1.0 - diffuseColor)); 
    var refractionColor: vec3f = bgColor * transmittance;

    let F0 = 0.02;
    var fresnel: f32 = clamp(F0 + (1.0 - F0) * pow(1.0 - dot(normal, -rayDir), 5.0) + 0.03, 0., 1.);

    var reflectionDir: vec3f = reflect(rayDir, normal);
    var reflectionDirWorld: vec3f = (uniforms.inv_view_matrix * vec4f(reflectionDir, 0.0)).xyz;
    var reflectionColor: vec3f = textureSampleLevel(envmap_texture, texture_sampler, reflectionDirWorld, 0.).rgb; 
    var finalColor = 0.0 * specular + mix(refractionColor, reflectionColor, fresnel);

    let maxDeltaZ = max(max(abs(ddx.z), abs(ddy.z)), max(abs(ddx2.z), abs(ddy2.z)));
    if (maxDeltaZ > 1.5 * uniforms.sphere_size) {
        return vec4f(mix(finalColor, vec3f(0.9), 0.4), 1.0);
    }

    return vec4f(finalColor, 1.0);

    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}`,An=`struct VertexOutput {
  @builtin(position) position : vec4f,
  @location(0) uv : vec2f,
  @location(1) iuv : vec2f,
}

override screenWidth: f32;
override screenHeight: f32;

@vertex
fn vs(@builtin(vertex_index) vertex_index : u32) -> VertexOutput {
    var out: VertexOutput;

    var pos = array(
        vec2( 1.0,  1.0),
        vec2( 1.0, -1.0),
        vec2(-1.0, -1.0),
        vec2( 1.0,  1.0),
        vec2(-1.0, -1.0),
        vec2(-1.0,  1.0),
    );

    var uv = array(
        vec2(1.0, 0.0),
        vec2(1.0, 1.0),
        vec2(0.0, 1.0),
        vec2(1.0, 0.0),
        vec2(0.0, 1.0),
        vec2(0.0, 0.0),
    );

    out.position = vec4(pos[vertex_index], 0.0, 1.0);
    out.uv = uv[vertex_index];
    out.iuv = out.uv * vec2f(screenWidth, screenHeight);

    return out;
}`,Un=`struct RenderUniforms {
    texel_size: vec2f, 
    sphere_size: f32, 
    inv_projection_matrix: mat4x4f, 
    projection_matrix: mat4x4f, 
    view_matrix: mat4x4f, 
    inv_view_matrix: mat4x4f, 
}

struct VertexOutput {
    @builtin(position) position: vec4f, 
    @location(0) uv: vec2f, 
}

struct FragmentInput {
    @location(0) uv: vec2f, 
}

struct PosVel {
    position: vec3f, 
    v: vec3f, 
    density: f32, 
}

@group(0) @binding(0) var<storage> particles: array<PosVel>;
@group(0) @binding(1) var<uniform> uniforms: RenderUniforms;
@group(0) @binding(2) var<uniform> stretchStrength: f32;

override restDensity: f32;
override densitySizeScale: f32;

fn computeStretchedVertex(position: vec2f, velocity_dir: vec2f, strength: f32) -> vec2f {
    
    let stretch_offset: vec2f = dot(velocity_dir, position) * velocity_dir;
    return position + stretch_offset * strength;
}

fn area(v1: vec2f, v2: vec2f, v3: vec2f, v4: vec2f) -> f32 {
    let ab = v2 - v1;
    let ad = v4 - v1;
    let s = abs(ab.x * ad.y - ab.y * ad.x);
    return s;
}

fn scaleQuad(vel: vec2f, r: f32, strength: f32) -> f32 {
    let s1: f32 = r * r;
    let v1 = computeStretchedVertex(vec2f(0.5 * r, 0.5 * r), vel, strength);
    let v2 = computeStretchedVertex(vec2f(-0.5 * r, 0.5 * r), vel, strength);
    let v3 = computeStretchedVertex(vec2f(-0.5 * r, -0.5 * r), vel, strength);
    let v4 = computeStretchedVertex(vec2f(0.5 * r, -0.5 * r), vel, strength);
    let s2: f32 = area(v1, v2, v3, v4);
    return sqrt(s1 / s2);
}

@vertex
fn vs(    
    @builtin(vertex_index) vertex_index: u32, 
    @builtin(instance_index) instance_index: u32
) -> VertexOutput {
    var corner_positions = array(
        vec2( 0.5,  0.5),
        vec2( 0.5, -0.5),
        vec2(-0.5, -0.5),
        vec2( 0.5,  0.5),
        vec2(-0.5, -0.5),
        vec2(-0.5,  0.5),
    );

    let size = uniforms.sphere_size * clamp(particles[instance_index].density / restDensity * densitySizeScale, 0.0, 1.0);
    let projected_velocity = (uniforms.view_matrix * vec4f(particles[instance_index].v, 0.0)).xy;
    let stretched_position = computeStretchedVertex(corner_positions[vertex_index] * size, projected_velocity, stretchStrength);
    let corner = vec3(stretched_position, 0.0) * scaleQuad(projected_velocity, size, stretchStrength);

    let uv = corner_positions[vertex_index] + 0.5;

    let real_position = particles[instance_index].position;
    let view_position = (uniforms.view_matrix * vec4f(real_position, 1.0)).xyz;

    let out_position = uniforms.projection_matrix * vec4f(view_position + corner, 1.0);

    return VertexOutput(out_position, uv);
}

@fragment
fn fs(input: FragmentInput) -> @location(0) vec4f {
    var normalxy: vec2f = input.uv * 2.0 - 1.0;
    var r2: f32 = dot(normalxy, normalxy);
    if (r2 > 1.0) {
        discard;
    }
    var thickness: f32 = sqrt(1.0 - r2);
    let particle_alpha = 0.05;

    return vec4f(vec3f(particle_alpha * thickness), 1.0);
}`,In=`@group(0) @binding(1) var texture: texture_2d<f32>;
@group(0) @binding(2) var<uniform> uniforms: FilterUniforms;

struct FragmentInput {
    @location(0) uv: vec2f,  
    @location(1) iuv: vec2f
}

struct FilterUniforms {
    blur_dir: vec2f, 
}

@fragment
fn fs(input: FragmentInput) -> @location(0) vec4f {
    
    var thickness: f32 = textureLoad(texture, vec2u(input.iuv), 0).r;
    if (thickness == 0.) {
        return vec4f(0., 0., 0., 1.);
    }

    var filter_size: i32 = 30; 
    var sigma: f32 = f32(filter_size) / 3.0;
    var two_sigma: f32 = 2.0 * sigma * sigma;

    var sum = 0.;
    var wsum = 0.;

    for (var x: i32 = -filter_size; x <= filter_size; x++) {
        var coords: vec2f = vec2f(f32(x));
        var sampled_thickness: f32 = textureLoad(texture, vec2u(input.iuv + uniforms.blur_dir * coords), 0).r;

        var w: f32 = exp(-coords.x * coords.x / two_sigma);

        sum += sampled_thickness * w;
        wsum += w;
    }

    sum /= wsum;

    return vec4f(sum, 0., 0., 1.);
}`,On=`struct VertexOutput {
    @builtin(position) position: vec4f, 
    @location(0) uv: vec2f, 
    @location(1) view_position: vec3f, 
    @location(2) speed: f32, 
}

struct FragmentInput {
    @location(0) uv: vec2f, 
    @location(1) view_position: vec3f, 
    @location(2) speed: f32, 
}

struct FragmentOutput {
    @location(0) color: vec4f, 
    @location(1) depth: vec4f, 
    @builtin(frag_depth) frag_depth: f32, 
}

struct RenderUniforms {
    texel_size: vec2f, 
    sphere_size: f32, 
    inv_projection_matrix: mat4x4f, 
    projection_matrix: mat4x4f, 
    view_matrix: mat4x4f, 
    inv_view_matrix: mat4x4f, 
}

struct PosVel {
    position: vec3f, 
    v: vec3f, 
    density: f32, 
}

@group(0) @binding(0) var<storage> particles: array<PosVel>;
@group(0) @binding(1) var<uniform> uniforms: RenderUniforms;
@group(0) @binding(2) var<uniform> stretchStrength: f32;

override restDensity: f32;
override densitySizeScale: f32;

fn computeStretchedVertex(position: vec2f, velocity_dir: vec2f, strength: f32) -> vec2f {
    
    let stretch_offset: vec2f = dot(velocity_dir, position) * velocity_dir;
    return position + stretch_offset * strength;
}

fn area(v1: vec2f, v2: vec2f, v3: vec2f, v4: vec2f) -> f32 {
    let ab = v2 - v1;
    let ad = v4 - v1;
    let s = abs(ab.x * ad.y - ab.y * ad.x);
    return s;
}

fn scaleQuad(vel: vec2f, r: f32, strength: f32) -> f32 {
    let s1: f32 = r * r;
    let v1 = computeStretchedVertex(vec2f(0.5 * r, 0.5 * r), vel, strength);
    let v2 = computeStretchedVertex(vec2f(-0.5 * r, 0.5 * r), vel, strength);
    let v3 = computeStretchedVertex(vec2f(-0.5 * r, -0.5 * r), vel, strength);
    let v4 = computeStretchedVertex(vec2f(0.5 * r, -0.5 * r), vel, strength);
    let s2: f32 = area(v1, v2, v3, v4);
    return sqrt(s1 / s2);
}

@vertex
fn vs(    
    @builtin(vertex_index) vertex_index: u32, 
    @builtin(instance_index) instance_index: u32
) -> VertexOutput {
    var corner_positions = array(
        vec2( 0.5,  0.5),
        vec2( 0.5, -0.5),
        vec2(-0.5, -0.5),
        vec2( 0.5,  0.5),
        vec2(-0.5, -0.5),
        vec2(-0.5,  0.5),
    );

    let size = uniforms.sphere_size * clamp(particles[instance_index].density / restDensity * densitySizeScale, 0.0, 1.0);
    let projected_velocity = (uniforms.view_matrix * vec4f(particles[instance_index].v, 0.0)).xy;
    let stretched_position = computeStretchedVertex(corner_positions[vertex_index] * size, projected_velocity, stretchStrength);
    let corner = vec3(stretched_position, 0.0) * scaleQuad(projected_velocity, size, stretchStrength);

    let speed = sqrt(dot(particles[instance_index].v, particles[instance_index].v));

    let uv = corner_positions[vertex_index] + 0.5;

    let real_position = particles[instance_index].position;
    let view_position = (uniforms.view_matrix * vec4f(real_position, 1.0)).xyz;

    let out_position = uniforms.projection_matrix * vec4f(view_position + corner, 1.0);

    return VertexOutput(out_position, uv, view_position, speed);
}

fn value_to_color(value: f32) -> vec3<f32> {
    
    let col0 = vec3f(0, 0.4, 0.8);
    let col1 = vec3f(35, 161, 165) / 256;
    let col2 = vec3f(95, 254, 150) / 256;
    let col3 = vec3f(243, 250, 49) / 256;
    let col4 = vec3f(255, 165, 0) / 256;

    if (0 <= value && value < 0.25) {
        let t = value / 0.25;
        return mix(col0, col1, t);
    } else if (0.25 <= value && value < 0.50) {
        let t = (value - 0.25) / 0.25;
        return mix(col1, col2, t);
    } else if (0.50 <= value && value < 0.75) {
        let t = (value - 0.50) / 0.25;
        return mix(col2, col3, t);
    } else {
        let t = (value - 0.75) / 0.25;
        return mix(col3, col4, t);
    }

}

@fragment
fn fs(input: FragmentInput) -> FragmentOutput {
    var out: FragmentOutput;

    var normalxy: vec2f = input.uv * 2.0 - 1.0;
    var r2: f32 = dot(normalxy, normalxy);
    if (r2 > 1.0) {
        discard;
    }
    var normalz = sqrt(1.0 - r2);
    var normal = vec3(normalxy, normalz);

    var radius = uniforms.sphere_size / 2;
    var real_view_pos: vec4f = vec4f(input.view_position + normal * radius, 1.0);
    var clip_space_pos: vec4f = uniforms.projection_matrix * real_view_pos;
    out.frag_depth = clip_space_pos.z / clip_space_pos.w;

    var diffuse: f32 = max(0.0, dot(normal, normalize(vec3(1.0, 1.0, 1.0))));
    var color: vec3f = value_to_color(input.speed / 2);

    out.color = vec4(diffuse * color, 1.);
    out.depth = vec4(real_view_pos.z, 0., 0., 1.);
    return out;
}`;class qn{constructor(g,M,B,P,D,I,R,N,J,W){b(this,"depthMapPipeline");b(this,"depthFilterPipeline");b(this,"thicknessMapPipeline");b(this,"thicknessFilterPipeline");b(this,"fluidPipeline");b(this,"spherePipeline");b(this,"depthMapTextureView");b(this,"tmpDepthMapTextureView");b(this,"thicknessTextureView");b(this,"tmpThicknessTextureView");b(this,"depthTestTextureView");b(this,"depthMapBindGroup");b(this,"depthFilterBindGroups");b(this,"thicknessMapBindGroup");b(this,"thicknessFilterBindGroups");b(this,"fluidBindGroup");b(this,"sphereBindGroup");b(this,"stretchStrengthBuffer");b(this,"device");this.device=g;const L=100,ie=10,j=2*P,$=12,U={screenHeight:M.height,screenWidth:M.width},C={depth_threshold:P*ie,max_filter_size:L,projected_particle_constant:$*j*.05*(M.height/2)/Math.tan(D/2)},Q={restDensity:W,densitySizeScale:4},Z=g.createSampler({magFilter:"linear",minFilter:"linear"}),k=g.createShaderModule({code:An}),H=g.createShaderModule({code:Gn}),le=g.createShaderModule({code:Fn}),fe=g.createShaderModule({code:Tn}),de=g.createShaderModule({code:On}),pe=g.createShaderModule({code:Un}),ge=g.createShaderModule({code:In});this.spherePipeline=g.createRenderPipeline({label:"ball pipeline",layout:"auto",vertex:{module:de,constants:Q},fragment:{module:de,targets:[{format:B},{format:"r32float"}]},primitive:{topology:"triangle-list"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth32float"}}),this.depthMapPipeline=g.createRenderPipeline({label:"depth map pipeline",layout:"auto",vertex:{module:H,constants:Q},fragment:{module:H,targets:[{format:"r32float"}]},primitive:{topology:"triangle-list"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth32float"}}),this.depthFilterPipeline=g.createRenderPipeline({label:"filter pipeline",layout:"auto",vertex:{module:k,constants:U},fragment:{module:le,constants:C,targets:[{format:"r32float"}]},primitive:{topology:"triangle-list"}}),this.thicknessMapPipeline=g.createRenderPipeline({label:"thickness map pipeline",layout:"auto",vertex:{module:pe,constants:Q},fragment:{module:pe,targets:[{format:"r16float",writeMask:GPUColorWrite.RED,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}}]},primitive:{topology:"triangle-list"}}),this.thicknessFilterPipeline=g.createRenderPipeline({label:"thickness filter pipeline",layout:"auto",vertex:{module:k,constants:U},fragment:{module:ge,targets:[{format:"r16float"}]},primitive:{topology:"triangle-list"}}),this.fluidPipeline=g.createRenderPipeline({label:"fluid rendering pipeline",layout:"auto",vertex:{module:k,constants:U},fragment:{module:fe,targets:[{format:B}]},primitive:{topology:"triangle-list"}});const oe=g.createTexture({label:"temporary depth map texture",size:[M.width,M.height,1],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"r32float"}),we=g.createTexture({label:"thickness map texture",size:[M.width,M.height,1],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"r16float"}),A=g.createTexture({label:"temporary thickness map texture",size:[M.width,M.height,1],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"r16float"}),E=g.createTexture({size:[M.width,M.height,1],format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT});this.depthMapTextureView=J,this.tmpDepthMapTextureView=oe.createView(),this.thicknessTextureView=we.createView(),this.tmpThicknessTextureView=A.createView(),this.depthTestTextureView=E.createView();const F=new ArrayBuffer(8),he=new ArrayBuffer(8),K=new Float32Array(F),se=new Float32Array(he);K.set([1,0]),se.set([0,1]);const ee=g.createBuffer({label:"filter uniform buffer",size:F.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),ve=g.createBuffer({label:"filter uniform buffer",size:he.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});this.stretchStrengthBuffer=g.createBuffer({label:"stretch strength buffer",size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),g.queue.writeBuffer(ee,0,F),g.queue.writeBuffer(ve,0,he),this.depthMapBindGroup=g.createBindGroup({label:"depth map bind group",layout:this.depthMapPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:I}},{binding:1,resource:{buffer:R}},{binding:2,resource:{buffer:this.stretchStrengthBuffer}}]}),this.depthFilterBindGroups=[],this.depthFilterBindGroups=[g.createBindGroup({label:"filterX bind group",layout:this.depthFilterPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:this.depthMapTextureView},{binding:2,resource:{buffer:ee}}]}),g.createBindGroup({label:"filterY bind group",layout:this.depthFilterPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:this.tmpDepthMapTextureView},{binding:2,resource:{buffer:ve}}]})],this.thicknessMapBindGroup=g.createBindGroup({label:"thickness map bind group",layout:this.thicknessMapPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:I}},{binding:1,resource:{buffer:R}},{binding:2,resource:{buffer:this.stretchStrengthBuffer}}]}),this.thicknessFilterBindGroups=[],this.thicknessFilterBindGroups=[g.createBindGroup({label:"thickness filterX bind group",layout:this.thicknessFilterPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:this.thicknessTextureView},{binding:2,resource:{buffer:ee}}]}),g.createBindGroup({label:"thickness filterY bind group",layout:this.thicknessFilterPipeline.getBindGroupLayout(0),entries:[{binding:1,resource:this.tmpThicknessTextureView},{binding:2,resource:{buffer:ve}}]})],this.fluidBindGroup=g.createBindGroup({label:"fluid bind group",layout:this.fluidPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:Z},{binding:1,resource:this.depthMapTextureView},{binding:2,resource:{buffer:R}},{binding:3,resource:this.thicknessTextureView},{binding:4,resource:N}]}),this.sphereBindGroup=g.createBindGroup({label:"ball bind group",layout:this.spherePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:I}},{binding:1,resource:{buffer:R}},{binding:2,resource:{buffer:this.stretchStrengthBuffer}}]})}execute(g,M,B,P,D){const I=new ArrayBuffer(4),R=new Float32Array(I);R.set([D]),this.device.queue.writeBuffer(this.stretchStrengthBuffer,0,R);const N={colorAttachments:[{view:this.depthMapTextureView,clearValue:{r:1e6,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:this.depthTestTextureView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},J=[{colorAttachments:[{view:this.tmpDepthMapTextureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},{colorAttachments:[{view:this.depthMapTextureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]}],W={colorAttachments:[{view:this.thicknessTextureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},L=[{colorAttachments:[{view:this.tmpThicknessTextureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},{colorAttachments:[{view:this.thicknessTextureView,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]}],ie={colorAttachments:[{view:g.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},j={colorAttachments:[{view:g.getCurrentTexture().createView(),clearValue:{r:.7,g:.7,b:.75,a:1},loadOp:"clear",storeOp:"store"},{view:this.depthMapTextureView,clearValue:{r:1e6,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:this.depthTestTextureView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}};if(P){const U=M.beginRenderPass(j);U.setBindGroup(0,this.sphereBindGroup),U.setPipeline(this.spherePipeline),U.draw(6,B),U.end()}else{const U=M.beginRenderPass(N);U.setBindGroup(0,this.depthMapBindGroup),U.setPipeline(this.depthMapPipeline),U.draw(6,B),U.end();for(var $=0;$<4;$++){const Z=M.beginRenderPass(J[0]);Z.setBindGroup(0,this.depthFilterBindGroups[0]),Z.setPipeline(this.depthFilterPipeline),Z.draw(6),Z.end();const k=M.beginRenderPass(J[1]);k.setBindGroup(0,this.depthFilterBindGroups[1]),k.setPipeline(this.depthFilterPipeline),k.draw(6),k.end()}const C=M.beginRenderPass(W);C.setBindGroup(0,this.thicknessMapBindGroup),C.setPipeline(this.thicknessMapPipeline),C.draw(6,B),C.end();for(var $=0;$<1;$++){const k=M.beginRenderPass(L[0]);k.setBindGroup(0,this.thicknessFilterBindGroups[0]),k.setPipeline(this.thicknessFilterPipeline),k.draw(6),k.end();const H=M.beginRenderPass(L[1]);H.setBindGroup(0,this.thicknessFilterBindGroups[1]),H.setPipeline(this.thicknessFilterPipeline),H.draw(6),H.end()}const Q=M.beginRenderPass(ie);Q.setBindGroup(0,this.fluidBindGroup),Q.setPipeline(this.fluidPipeline),Q.draw(6),Q.end()}}}async function Rn(){const f=document.querySelector("canvas");if(!navigator.gpu)throw alert("WebGPU is not supported on your browser."),new Error;const g=await navigator.gpu.requestAdapter();if(!g)throw alert("Adapter is not available."),new Error;const M=await g.requestDevice(),B=f.getContext("webgpu");if(!B)throw new Error;let P=.7;f.width=P*f.clientWidth,f.height=P*f.clientHeight;const D=navigator.gpu.getPreferredCanvasFormat();return B.configure({device:M,format:D}),{canvas:f,device:M,presentationFormat:D,context:B}}async function Yn(){const{canvas:f,device:g,presentationFormat:M,context:B}=await Rn();let P=document.getElementById("number-button"),D=!1,I="1";P.addEventListener("change",function(re){const ne=re.target;(ne==null?void 0:ne.name)==="options"&&(D=!0,I=ne.value)});const R=document.getElementById("small-value"),N=document.getElementById("medium-value"),J=document.getElementById("large-value");console.log("initialization done"),B.configure({device:g,format:M});let W;{const ne=["cubemap/posx.png","cubemap/negx.png","cubemap/posy.png","cubemap/negy.png","cubemap/posz.png","cubemap/negz.png"].map(async s=>{const d=await fetch(s);return createImageBitmap(await d.blob())}),ce=await Promise.all(ne);W=g.createTexture({dimension:"2d",size:[ce[0].width,ce[0].height,6],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});for(let s=0;s<ce.length;s++){const d=ce[s];g.queue.copyExternalImageToTexture({source:d},{texture:W,origin:[0,0,s]},[d.width,d.height])}}const L=W.createView({dimension:"cube"});console.log("cubemap initialization done"),qe.texel_size.set([1/f.width,1/f.height]);const ie=He,j=g.createBuffer({label:"particles buffer",size:ie*Ne,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),$=g.createBuffer({label:"position buffer",size:32*Ne,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),U=g.createBuffer({label:"filter uniform buffer",size:Oe.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});console.log("buffer allocating done");let C=[3e4,6e4,1e5],Q=[[52,52,52],[60,60,60],[72,72,72]],Z=[60,70,90],k=[15,20,25],H=[2.5,2,1.5];const le=document.getElementById("fluidCanvas"),fe=45*Math.PI/180,de=.7,pe=2*de,ge=.7,we=g.createTexture({label:"depth map texture",size:[f.width,f.height,1],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"r32float"}).createView(),A=new Vn(j,$,pe,g,U,we,f),E=new qn(g,f,M,de,fe,$,U,L,we,A.restDensity);console.log("simulator initialization done");const F=new yn(le);let he=document.getElementById("error-reason");he.textContent="",g.lost.then(re=>{const ne=re.reason?`reason: ${re.reason}`:"unknown reason";he.textContent=ne});let K=1,se=Q[K],ee=[...se];R.textContent="30,000",N.textContent="60,000",J.textContent="100,000";let ve=!1,X=!1,Ge=!0,xe=1;console.log("simulation start");async function Fe(){if(performance.now(),D||Ge){K=parseInt(I),se=Q[K],A.reset(se,k[K]),F.reset(Z[K],[se[0]/2,se[1]/2,se[2]/2],fe,ge),ee=[...se];let p=document.getElementById("slider");p.value="100",D=!1,Ge=!1}const re=document.getElementById("slider"),ne=document.getElementById("particle"),ce=document.getElementById("autorotate");ve=ne.checked,X=ce.checked;let s=parseInt(re.value)/200+.5;const d=-.01,t=.04;let r=Math.max(s-xe,d);r=Math.min(r,t),xe+=r,ee[2]=se[2]*xe,A.changeBoxSize(ee),g.queue.writeBuffer(U,0,Oe);const l=g.createCommandEncoder();A.execute(l,[F.currentHoverX/f.clientWidth,F.currentHoverY/f.clientHeight],F.calcMouseVelocity(),C[K]),E.execute(B,l,A.numParticles,ve,H[K]),g.queue.submit([l.finish()]),F.setNewPrevMouseCoord(),X&&F.stepAngle(),performance.now(),requestAnimationFrame(Fe)}requestAnimationFrame(Fe)}Yn();

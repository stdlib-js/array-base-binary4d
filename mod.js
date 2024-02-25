// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function f(f,o,r){var a,t,e,i,n,u,c,d,l,p,s,v,x,b,g,h,j,k,m,q;if(a=o[3],t=o[2],e=o[1],i=o[0],!(a<=0||t<=0||e<=0||i<=0))for(k=f[0],m=f[1],q=f[2],d=0;d<i;d++)for(s=k[d],b=m[d],j=q[d],c=0;c<e;c++)for(p=s[c],x=b[c],h=j[c],u=0;u<t;u++)for(l=p[u],v=x[u],g=h[u],n=0;n<a;n++)g[n]=r(l[n],v[n])}export{f as default};
//# sourceMappingURL=mod.js.map

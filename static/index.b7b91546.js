import{_ as n,e as a,o as e,b as s,y as r,a as i,h as t,i as o}from"./index.1b623266.js";const d={class:"app-container"};const c=n({},[["render",function(n,s){return e(),a("div",d,"Admin 权限可见")}]]),u={class:"app-container"};const l=n({},[["render",function(n,s){return e(),a("div",u,"Editor 权限可见")}]]),m=s({__name:"index",setup(n){const a=r(),s=i("admin");return a.roles.includes("admin")||(s.value="editor"),(n,a)=>(e(),t(o("admin"===s.value?c:l)))}});export{m as default};
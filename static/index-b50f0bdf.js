import{a1 as e,ap as t,X as o,a6 as s,aN as n,ad as a,aa as l,ae as i,m as r,n as u,T as c,ab as p,aO as d,ak as f,R as m,ai as v,ag as y,r as g,bx as b}from"./index-98eefc51.js";import{x as h,as as C,j as x,ad as k,ak as S,k as T,b2 as _,b4 as E,n as I,a4 as L,aS as H,a6 as M,ay as N,l as j,aK as w,av as B,m as $,F as z,u as F,$ as O,bb as q}from"./runtime-core.esm-bundler-1857aef3.js";const A=["success","info","warning","error"],U=e({customClass:{type:String,default:""},dangerouslyUseHTMLString:{type:Boolean,default:!1},duration:{type:Number,default:4500},icon:{type:t},id:{type:String,default:""},message:{type:o([String,Object]),default:""},offset:{type:Number,default:0},onClick:{type:o(Function),default:()=>{}},onClose:{type:o(Function),required:!0},position:{type:String,values:["top-right","top-left","bottom-right","bottom-left"],default:"top-right"},showClose:{type:Boolean,default:!0},title:{type:String,default:""},type:{type:String,values:[...A,""],default:""},zIndex:{type:Number,default:0}}),W=["id"],D=["textContent"],K={key:0},R=["innerHTML"],X=h({name:"ElNotification"});var Z=p(h({...X,props:U,emits:{destroy:()=>!0},setup(e,{expose:t}){const o=e,p=s("notification"),{Close:m}=n,v=C(!1);let y;const g=x((()=>{const e=o.type;return e&&a[o.type]?p.m(e):""})),b=x((()=>o.type&&a[o.type]||o.icon)),h=x((()=>o.position.endsWith("right")?"right":"left")),O=x((()=>o.position.startsWith("top")?"top":"bottom")),q=x((()=>({[O.value]:`${o.offset}px`,zIndex:o.zIndex})));function A(){o.duration>0&&({stop:y}=d((()=>{v.value&&X()}),o.duration))}function U(){null==y||y()}function X(){v.value=!1}return k((()=>{A(),v.value=!0})),l(document,"keydown",(function({code:e}){e===f.delete||e===f.backspace?U():e===f.esc?v.value&&X():A()})),t({visible:v,close:X}),(e,t)=>(S(),T(c,{name:H(p).b("fade"),onBeforeLeave:e.onClose,onAfterLeave:t[1]||(t[1]=t=>e.$emit("destroy")),persisted:""},{default:_((()=>[E(I("div",{id:e.id,class:L([H(p).b(),e.customClass,H(h)]),style:M(H(q)),role:"alert",onMouseenter:U,onMouseleave:A,onClick:t[0]||(t[0]=(...t)=>e.onClick&&e.onClick(...t))},[H(b)?(S(),T(H(i),{key:0,class:L([H(p).e("icon"),H(g)])},{default:_((()=>[(S(),T(N(H(b))))])),_:1},8,["class"])):j("v-if",!0),I("div",{class:L(H(p).e("group"))},[I("h2",{class:L(H(p).e("title")),textContent:w(e.title)},null,10,D),E(I("div",{class:L(H(p).e("content")),style:M(e.title?void 0:{margin:0})},[B(e.$slots,"default",{},(()=>[e.dangerouslyUseHTMLString?(S(),$(z,{key:1},[j(" Caution here, message could've been compromised, never use user's input as message "),I("p",{innerHTML:e.message},null,8,R)],2112)):(S(),$("p",K,w(e.message),1))]))],6),[[r,e.message]]),e.showClose?(S(),T(H(i),{key:0,class:L(H(p).e("closeBtn")),onClick:u(X,["stop"])},{default:_((()=>[F(H(m))])),_:1},8,["class","onClick"])):j("v-if",!0)],2)],46,W),[[r,v.value]])])),_:3},8,["name","onBeforeLeave"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/notification/src/notification.vue"]]);const G={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[]},J=16;let P=1;const Q=function(e={},t=null){if(!m)return{close:()=>{}};("string"==typeof e||O(e))&&(e={message:e});const o=e.position||"top-right";let s=e.offset||0;G[o].forEach((({vm:e})=>{var t;s+=((null==(t=e.el)?void 0:t.offsetHeight)||0)+J})),s+=J;const{nextZIndex:n}=v(),a="notification_"+P++,l=e.onClose,i={zIndex:n(),...e,offset:s,id:a,onClose:()=>{!function(e,t,o){const s=G[t],n=s.findIndex((({vm:t})=>{var o;return(null==(o=t.component)?void 0:o.props.id)===e}));if(-1===n)return;const{vm:a}=s[n];if(!a)return;null==o||o(a);const l=a.el.offsetHeight,i=t.split("-")[0];s.splice(n,1);const r=s.length;if(r<1)return;for(let u=n;u<r;u++){const{el:e,component:t}=s[u].vm,o=Number.parseInt(e.style[i],10)-l-J;t.props.offset=o}}(a,o,l)}};let r=document.body;y(e.appendTo)?r=e.appendTo:q(e.appendTo)&&(r=document.querySelector(e.appendTo)),y(r)||(r=document.body);const u=document.createElement("div"),c=F(Z,i,O(i.message)?{default:()=>i.message}:null);return c.appContext=null!=t?t:Q._context,c.props.onDestroy=()=>{g(null,u)},g(c,u),G[o].push({vm:c}),r.appendChild(u.firstElementChild),{close:()=>{c.component.exposed.visible.value=!1}}};A.forEach((e=>{Q[e]=(t={})=>(("string"==typeof t||O(t))&&(t={message:t}),Q({...t,type:e}))})),Q.closeAll=function(){for(const e of Object.values(G))e.forEach((({vm:e})=>{e.component.exposed.visible.value=!1}))},Q._context=null;const V=b(Q,"$notify");export{V as E};
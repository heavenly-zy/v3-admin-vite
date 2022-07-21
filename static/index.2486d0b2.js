import{d as e,a as t,c as a,o as n,b as r,e as i,w as l,T as s,f as o,u as c,r as d,g as u,h,_ as f,i as m,j as p,k as g,l as w,F as v,m as A,n as b,t as y,p as C,q as k,s as x,v as E,E as S,x as V,y as T,z as B,A as L,B as D,C as F,D as _,G as R,H as M,I as O,J as I,K as N,L as z,M as P,N as Y,O as j,P as Q,Q as H,R as q,S as U,U as J,V as X,W as G}from"./index.6cc655ae.js";import{_ as K}from"./index.vue_vue_type_script_setup_true_lang.33ec9a02.js";const W=!0,Z=!0,$=!0,ee=!0,te=!0,ae=!0,ne=e({id:"settings",state:()=>({fixedHeader:$,showSettings:W,showTagsView:Z,showSidebarLogo:ee,showThemeSwitch:te,showScreenfull:ae}),actions:{changeSetting(e){const{key:t,value:a}=e;switch(t){case"fixedHeader":this.fixedHeader=a;break;case"showSettings":this.showSettings=a;break;case"showSidebarLogo":this.showSidebarLogo=a;break;case"showTagsView":this.showTagsView=a;break;case"showThemeSwitch":this.showThemeSwitch=a;break;case"showScreenfull":this.showScreenfull=a}}}}),re={class:"app-main"},ie=f(t({__name:"AppMain",setup(e){const t=h(),f=a((()=>t.path));return(e,t)=>{const a=u("router-view");return n(),r("section",re,[i(a,null,{default:l((({Component:e})=>[i(s,{name:"fade-transform",mode:"out-in"},{default:l((()=>[(n(),o(d(e),{key:c(f)}))])),_:2},1024)])),_:1})])}}}),[["__scopeId","data-v-0058dddf"]]);function le(e,t){void 0===t&&(t={});for(var a=function(e){for(var t=[],a=0;a<e.length;){var n=e[a];if("*"!==n&&"+"!==n&&"?"!==n)if("\\"!==n)if("{"!==n)if("}"!==n)if(":"!==n)if("("!==n)t.push({type:"CHAR",index:a,value:e[a++]});else{var r=1,i="";if("?"===e[s=a+1])throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;)if("\\"!==e[s]){if(")"===e[s]){if(0==--r){s++;break}}else if("("===e[s]&&(r++,"?"!==e[s+1]))throw new TypeError("Capturing groups are not allowed at ".concat(s));i+=e[s++]}else i+=e[s++]+e[s++];if(r)throw new TypeError("Unbalanced pattern at ".concat(a));if(!i)throw new TypeError("Missing pattern at ".concat(a));t.push({type:"PATTERN",index:a,value:i}),a=s}else{for(var l="",s=a+1;s<e.length;){var o=e.charCodeAt(s);if(!(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||95===o))break;l+=e[s++]}if(!l)throw new TypeError("Missing parameter name at ".concat(a));t.push({type:"NAME",index:a,value:l}),a=s}else t.push({type:"CLOSE",index:a,value:e[a++]});else t.push({type:"OPEN",index:a,value:e[a++]});else t.push({type:"ESCAPED_CHAR",index:a++,value:e[a++]});else t.push({type:"MODIFIER",index:a,value:e[a++]})}return t.push({type:"END",index:a,value:""}),t}(e),n=t.prefixes,r=void 0===n?"./":n,i="[^".concat(function(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}(t.delimiter||"/#?"),"]+?"),l=[],s=0,o=0,c="",d=function(e){if(o<a.length&&a[o].type===e)return a[o++].value},u=function(e){var t=d(e);if(void 0!==t)return t;var n=a[o],r=n.type,i=n.index;throw new TypeError("Unexpected ".concat(r," at ").concat(i,", expected ").concat(e))},h=function(){for(var e,t="";e=d("CHAR")||d("ESCAPED_CHAR");)t+=e;return t};o<a.length;){var f=d("CHAR"),m=d("NAME"),p=d("PATTERN");if(m||p){var g=f||"";-1===r.indexOf(g)&&(c+=g,g=""),c&&(l.push(c),c=""),l.push({name:m||s++,prefix:g,suffix:"",pattern:p||i,modifier:d("MODIFIER")||""})}else{var w=f||d("ESCAPED_CHAR");if(w)c+=w;else if(c&&(l.push(c),c=""),d("OPEN")){g=h();var v=d("NAME")||"",A=d("PATTERN")||"",b=h();u("CLOSE"),l.push({name:v||(A?s++:""),pattern:v&&!A?i:A,prefix:g,suffix:b,modifier:d("MODIFIER")||""})}else u("END")}}return l}function se(e,t){return function(e,t){void 0===t&&(t={});var a=function(e){return e&&e.sensitive?"":"i"}(t),n=t.encode,r=void 0===n?function(e){return e}:n,i=t.validate,l=void 0===i||i,s=e.map((function(e){if("object"==typeof e)return new RegExp("^(?:".concat(e.pattern,")$"),a)}));return function(t){for(var a="",n=0;n<e.length;n++){var i=e[n];if("string"!=typeof i){var o=t?t[i.name]:void 0,c="?"===i.modifier||"*"===i.modifier,d="*"===i.modifier||"+"===i.modifier;if(Array.isArray(o)){if(!d)throw new TypeError('Expected "'.concat(i.name,'" to not repeat, but got an array'));if(0===o.length){if(c)continue;throw new TypeError('Expected "'.concat(i.name,'" to not be empty'))}for(var u=0;u<o.length;u++){var h=r(o[u],i);if(l&&!s[n].test(h))throw new TypeError('Expected all "'.concat(i.name,'" to match "').concat(i.pattern,'", but got "').concat(h,'"'));a+=i.prefix+h+i.suffix}}else if("string"!=typeof o&&"number"!=typeof o){if(!c){var f=d?"an array":"a string";throw new TypeError('Expected "'.concat(i.name,'" to be ').concat(f))}}else{h=r(String(o),i);if(l&&!s[n].test(h))throw new TypeError('Expected "'.concat(i.name,'" to match "').concat(i.pattern,'", but got "').concat(h,'"'));a+=i.prefix+h+i.suffix}}else a+=i}return a}}(le(e,t),t)}const oe={key:0,class:"no-redirect"},ce=["onClick"],de=f(t({__name:"index",setup(e){const t=h(),a=b(),s=m({breadcrumbs:[],getBreadcrumb:()=>{const e=t.matched.filter((e=>e.meta&&e.meta.title));s.breadcrumbs=e.filter((e=>e.meta&&e.meta.title&&!1!==e.meta.breadcrumb))},handleLink(e){const{redirect:n,path:r}=e;n?a.push(n).catch((e=>{console.warn(e)})):a.push((e=>{const{params:a}=t;return se(e)(a)})(r)).catch((e=>{console.warn(e)}))}});return p((()=>t.path),(e=>{e.startsWith("/redirect/")||s.getBreadcrumb()})),g((()=>{s.getBreadcrumb()})),(e,t)=>{const a=u("el-breadcrumb-item"),c=u("el-breadcrumb");return n(),o(c,{class:"app-breadcrumb"},{default:l((()=>[i(A,{name:"breadcrumb"},{default:l((()=>[(n(!0),r(v,null,w(s.breadcrumbs,((e,t)=>(n(),o(a,{key:e.path},{default:l((()=>["noRedirect"===e.redirect||t===s.breadcrumbs.length-1?(n(),r("span",oe,y(e.meta.title),1)):(n(),r("a",{key:1,onClick:C((t=>s.handleLink(e)),["prevent"])},y(e.meta.title),9,ce))])),_:2},1024)))),128))])),_:1})])),_:1})}}}),[["__scopeId","data-v-056a6c9e"]]),ue=f(t({__name:"index",props:{isActive:{type:Boolean,default:!1}},emits:["toggle-click"],setup(e,{emit:t}){const a=()=>{t("toggle-click")};return(t,s)=>{const d=u("el-icon");return n(),r("div",{onClick:a},[i(d,{size:20,class:"icon"},{default:l((()=>[e.isActive?(n(),o(c(k),{key:0})):(n(),o(c(x),{key:1}))])),_:1})])}}}),[["__scopeId","data-v-89af9c3d"]]),he=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],fe=(()=>{if("undefined"==typeof document)return!1;const e=he[0],t={};for(const a of he){if((null==a?void 0:a[1])in document){for(const[n,r]of a.entries())t[e[n]]=r;return t}}return!1})(),me={change:fe.fullscreenchange,error:fe.fullscreenerror};let pe={request:(e=document.documentElement,t)=>new Promise(((a,n)=>{const r=()=>{pe.off("change",r),a()};pe.on("change",r);const i=e[fe.requestFullscreen](t);i instanceof Promise&&i.then(r).catch(n)})),exit:()=>new Promise(((e,t)=>{if(!pe.isFullscreen)return void e();const a=()=>{pe.off("change",a),e()};pe.on("change",a);const n=document[fe.exitFullscreen]();n instanceof Promise&&n.then(a).catch(t)})),toggle:(e,t)=>pe.isFullscreen?pe.exit():pe.request(e,t),onchange(e){pe.on("change",e)},onerror(e){pe.on("error",e)},on(e,t){const a=me[e];a&&document.addEventListener(a,t,!1)},off(e,t){const a=me[e];a&&document.removeEventListener(a,t,!1)},raw:fe};Object.defineProperties(pe,{isFullscreen:{get:()=>Boolean(document[fe.fullscreenElement])},element:{enumerable:!0,get:()=>{var e;return null!=(e=document[fe.fullscreenElement])?e:void 0}},isEnabled:{enumerable:!0,get:()=>Boolean(document[fe.fullscreenEnabled])}}),fe||(pe={isEnabled:!1});const ge=pe,we=t({__name:"index",setup(e){const t=()=>{ge.isEnabled?ge.toggle():S.warning("您的浏览器无法工作")};return(e,a)=>{const s=u("el-icon"),o=u("el-tooltip");return n(),r("div",{onClick:t},[i(o,{effect:"dark",content:"全屏",placement:"bottom"},{default:l((()=>[i(s,{size:20},{default:l((()=>[i(c(E))])),_:1})])),_:1})])}}}),ve=e=>(_("data-v-a947686c"),e=e(),R(),e),Ae={class:"navbar"},be={class:"right-menu"},ye={target:"_blank",href:"https://juejin.cn/post/7089377403717287972"},Ce=F("V3-Admin-Vite 中文文档"),ke={target:"_blank",href:"https://github.com/un-pany/v3-admin-vite"},xe=F("V3-Admin-Vite GitHub"),Ee={target:"_blank",href:"https://gitee.com/un-pany/v3-admin-vite"},Se=F("V3-Admin-Vite Gitee"),Ve={target:"_blank",href:"https://juejin.cn/post/6963876125428678693"},Te=F("V3-Admin 中文文档"),Be={target:"_blank",href:"https://github.com/un-pany/v3-admin/blob/master/README.en.md"},Le=F("V3-Admin English Docs"),De={target:"_blank",href:"https://github.com/un-pany/v3-admin"},Fe=F("V3-Admin GitHub"),_e={target:"_blank",href:"https://gitee.com/un-pany/v3-admin"},Re=F("V3-Admin Gitee"),Me=ve((()=>B("span",{style:{display:"block"}},"退出登录",-1))),Oe=f(t({__name:"index",setup(e){const t=b(),s=V(),d=ne(),h=T(),f=a((()=>s.sidebar)),p=a((()=>d.showThemeSwitch)),g=a((()=>d.showScreenfull)),w=m({toggleSideBar:()=>{s.toggleSidebar(!1)},logout:()=>{h.logout(),t.push("/login").catch((e=>{console.warn(e)}))}});return(e,t)=>{const a=u("el-avatar"),s=u("el-dropdown-item"),d=u("el-dropdown-menu"),h=u("el-dropdown");return n(),r("div",Ae,[i(ue,{"is-active":c(f).opened,class:"hamburger",onToggleClick:w.toggleSideBar},null,8,["is-active","onToggleClick"]),i(de,{class:"breadcrumb"}),B("div",be,[c(g)?(n(),o(we,{key:0,class:"right-menu-item"})):L("",!0),c(p)?(n(),o(K,{key:1,class:"right-menu-item"})):L("",!0),i(h,{class:"right-menu-item"},{dropdown:l((()=>[i(d,null,{default:l((()=>[B("a",ye,[i(s,null,{default:l((()=>[Ce])),_:1})]),B("a",ke,[i(s,null,{default:l((()=>[xe])),_:1})]),B("a",Ee,[i(s,null,{default:l((()=>[Se])),_:1})]),B("a",Ve,[i(s,{divided:""},{default:l((()=>[Te])),_:1})]),B("a",Be,[i(s,null,{default:l((()=>[Le])),_:1})]),B("a",De,[i(s,null,{default:l((()=>[Fe])),_:1})]),B("a",_e,[i(s,null,{default:l((()=>[Re])),_:1})]),i(s,{divided:"",onClick:w.logout},{default:l((()=>[Me])),_:1},8,["onClick"])])),_:1})])),default:l((()=>[i(a,{icon:c(D),size:34},null,8,["icon"])])),_:1})])])}}}),[["__scopeId","data-v-a947686c"]]),Ie=e=>(_("data-v-df8029fa"),e=e(),R(),e),Ne={class:"drawer-container"},ze=Ie((()=>B("h3",{class:"drawer-title"},"系统布局配置",-1))),Pe={class:"drawer-item"},Ye=Ie((()=>B("span",null,"显示标签栏",-1))),je={class:"drawer-item"},Qe=Ie((()=>B("span",null,"显示侧边栏 Logo",-1))),He={class:"drawer-item"},qe=Ie((()=>B("span",null,"固定 Header",-1))),Ue={class:"drawer-item"},Je=Ie((()=>B("span",null,"显示切换主题按钮",-1))),Xe={class:"drawer-item"},Ge=Ie((()=>B("span",null,"显示全屏按钮",-1))),Ke=f(t({__name:"index",setup(e){const t=ne(),a=m({fixedHeader:t.fixedHeader,showTagsView:t.showTagsView,showSidebarLogo:t.showSidebarLogo,showThemeSwitch:t.showThemeSwitch,showScreenfull:t.showScreenfull});return p((()=>a.fixedHeader),(e=>{t.changeSetting({key:"fixedHeader",value:e})})),p((()=>a.showTagsView),(e=>{t.changeSetting({key:"showTagsView",value:e})})),p((()=>a.showSidebarLogo),(e=>{t.changeSetting({key:"showSidebarLogo",value:e})})),p((()=>a.showThemeSwitch),(e=>{t.changeSetting({key:"showThemeSwitch",value:e})})),p((()=>a.showScreenfull),(e=>{t.changeSetting({key:"showScreenfull",value:e})})),(e,t)=>{const l=u("el-switch");return n(),r("div",Ne,[B("div",null,[ze,B("div",Pe,[Ye,i(l,{modelValue:a.showTagsView,"onUpdate:modelValue":t[0]||(t[0]=e=>a.showTagsView=e),class:"drawer-switch"},null,8,["modelValue"])]),B("div",je,[Qe,i(l,{modelValue:a.showSidebarLogo,"onUpdate:modelValue":t[1]||(t[1]=e=>a.showSidebarLogo=e),class:"drawer-switch"},null,8,["modelValue"])]),B("div",He,[qe,i(l,{modelValue:a.fixedHeader,"onUpdate:modelValue":t[2]||(t[2]=e=>a.fixedHeader=e),class:"drawer-switch"},null,8,["modelValue"])]),B("div",Ue,[Je,i(l,{modelValue:a.showThemeSwitch,"onUpdate:modelValue":t[3]||(t[3]=e=>a.showThemeSwitch=e),class:"drawer-switch"},null,8,["modelValue"])]),B("div",Xe,[Ge,i(l,{modelValue:a.showScreenfull,"onUpdate:modelValue":t[4]||(t[4]=e=>a.showScreenfull=e),class:"drawer-switch"},null,8,["modelValue"])])])])}}}),[["__scopeId","data-v-df8029fa"]]),We=e=>/^(https?:|mailto:|tel:)/.test(e);function Ze(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function $e(e,t){for(var a,n="",r=0,i=-1,l=0,s=0;s<=e.length;++s){if(s<e.length)a=e.charCodeAt(s);else{if(47===a)break;a=47}if(47===a){if(i===s-1||1===l);else if(i!==s-1&&2===l){if(n.length<2||2!==r||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var o=n.lastIndexOf("/");if(o!==n.length-1){-1===o?(n="",r=0):r=(n=n.slice(0,o)).length-1-n.lastIndexOf("/"),i=s,l=0;continue}}else if(2===n.length||1===n.length){n="",r=0,i=s,l=0;continue}t&&(n.length>0?n+="/..":n="..",r=2)}else n.length>0?n+="/"+e.slice(i+1,s):n=e.slice(i+1,s),r=s-i-1;i=s,l=0}else 46===a&&-1!==l?++l:l=-1}return n}var et={resolve:function(){for(var e,t="",a=!1,n=arguments.length-1;n>=-1&&!a;n--){var r;n>=0?r=arguments[n]:(void 0===e&&(e=process.cwd()),r=e),Ze(r),0!==r.length&&(t=r+"/"+t,a=47===r.charCodeAt(0))}return t=$e(t,!a),a?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(Ze(e),0===e.length)return".";var t=47===e.charCodeAt(0),a=47===e.charCodeAt(e.length-1);return 0!==(e=$e(e,!t)).length||t||(e="."),e.length>0&&a&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return Ze(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var a=arguments[t];Ze(a),a.length>0&&(void 0===e?e=a:e+="/"+a)}return void 0===e?".":et.normalize(e)},relative:function(e,t){if(Ze(e),Ze(t),e===t)return"";if((e=et.resolve(e))===(t=et.resolve(t)))return"";for(var a=1;a<e.length&&47===e.charCodeAt(a);++a);for(var n=e.length,r=n-a,i=1;i<t.length&&47===t.charCodeAt(i);++i);for(var l=t.length-i,s=r<l?r:l,o=-1,c=0;c<=s;++c){if(c===s){if(l>s){if(47===t.charCodeAt(i+c))return t.slice(i+c+1);if(0===c)return t.slice(i+c)}else r>s&&(47===e.charCodeAt(a+c)?o=c:0===c&&(o=0));break}var d=e.charCodeAt(a+c);if(d!==t.charCodeAt(i+c))break;47===d&&(o=c)}var u="";for(c=a+o+1;c<=n;++c)c!==n&&47!==e.charCodeAt(c)||(0===u.length?u+="..":u+="/..");return u.length>0?u+t.slice(i+o):(i+=o,47===t.charCodeAt(i)&&++i,t.slice(i))},_makeLong:function(e){return e},dirname:function(e){if(Ze(e),0===e.length)return".";for(var t=e.charCodeAt(0),a=47===t,n=-1,r=!0,i=e.length-1;i>=1;--i)if(47===(t=e.charCodeAt(i))){if(!r){n=i;break}}else r=!1;return-1===n?a?"/":".":a&&1===n?"//":e.slice(0,n)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw new TypeError('"ext" argument must be a string');Ze(e);var a,n=0,r=-1,i=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var l=t.length-1,s=-1;for(a=e.length-1;a>=0;--a){var o=e.charCodeAt(a);if(47===o){if(!i){n=a+1;break}}else-1===s&&(i=!1,s=a+1),l>=0&&(o===t.charCodeAt(l)?-1==--l&&(r=a):(l=-1,r=s))}return n===r?r=s:-1===r&&(r=e.length),e.slice(n,r)}for(a=e.length-1;a>=0;--a)if(47===e.charCodeAt(a)){if(!i){n=a+1;break}}else-1===r&&(i=!1,r=a+1);return-1===r?"":e.slice(n,r)},extname:function(e){Ze(e);for(var t=-1,a=0,n=-1,r=!0,i=0,l=e.length-1;l>=0;--l){var s=e.charCodeAt(l);if(47!==s)-1===n&&(r=!1,n=l+1),46===s?-1===t?t=l:1!==i&&(i=1):-1!==t&&(i=-1);else if(!r){a=l+1;break}}return-1===t||-1===n||0===i||1===i&&t===n-1&&t===a+1?"":e.slice(t,n)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var a=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return a?a===t.root?a+n:a+e+n:n}("/",e)},parse:function(e){Ze(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var a,n=e.charCodeAt(0),r=47===n;r?(t.root="/",a=1):a=0;for(var i=-1,l=0,s=-1,o=!0,c=e.length-1,d=0;c>=a;--c)if(47!==(n=e.charCodeAt(c)))-1===s&&(o=!1,s=c+1),46===n?-1===i?i=c:1!==d&&(d=1):-1!==i&&(d=-1);else if(!o){l=c+1;break}return-1===i||-1===s||0===d||1===d&&i===s-1&&i===l+1?-1!==s&&(t.base=t.name=0===l&&r?e.slice(1,s):e.slice(l,s)):(0===l&&r?(t.name=e.slice(1,i),t.base=e.slice(1,s)):(t.name=e.slice(l,i),t.base=e.slice(l,s)),t.ext=e.slice(i,s)),l>0?t.dir=e.slice(0,l-1):r&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};et.posix=et;var tt=et;const at=["href"],nt=t({__name:"SidebarItemLink",props:{to:{type:String,required:!0}},setup(e){const t=e,a=b(),i=()=>{a.push(t.to).catch((e=>{console.warn(e)}))};return(t,a)=>c(We)(e.to)?(n(),r("a",{key:0,href:e.to,target:"_blank",rel:"noopener"},[M(t.$slots,"default")],8,at)):(n(),r("div",{key:1,onClick:i},[M(t.$slots,"default")]))}}),rt={key:1},it=f(t({__name:"SidebarItem",props:{item:{type:Object,required:!0},isCollapse:{type:Boolean,required:!1},isFirstLevel:{type:Boolean,default:!0},basePath:{type:String,required:!0}},setup(e){const t=e,s=a((()=>!(!t.item.meta||!t.item.meta.alwaysShow))),d=a((()=>{if(t.item.children){return t.item.children.filter((e=>!(e.meta&&e.meta.hidden))).length}return 0})),h=a((()=>{if(d.value>1)return null;if(t.item.children)for(const e of t.item.children)if(!e.meta||!e.meta.hidden)return e;return{...t.item,path:""}})),f=e=>We(e)?e:We(t.basePath)?t.basePath:tt.resolve(t.basePath,e);return(t,a)=>{const d=u("svg-icon"),m=u("el-menu-item"),p=u("sidebar-item",!0),g=u("el-sub-menu");return e.item.meta&&e.item.meta.hidden?L("",!0):(n(),r("div",{key:0,class:I({"simple-mode":e.isCollapse,"first-level":e.isFirstLevel})},[c(s)||!c(h)||c(h).children?(n(),o(g,{key:1,index:f(e.item.path),"popper-append-to-body":""},{title:l((()=>[e.item.meta&&e.item.meta.icon?(n(),o(d,{key:0,name:e.item.meta.icon},null,8,["name"])):L("",!0),e.item.meta&&e.item.meta.title?(n(),r("span",rt,y(e.item.meta.title),1)):L("",!0)])),default:l((()=>[e.item.children?(n(!0),r(v,{key:0},w(e.item.children,(t=>(n(),o(p,{key:t.path,item:t,"is-collapse":e.isCollapse,"is-first-level":!1,"base-path":f(t.path)},null,8,["item","is-collapse","base-path"])))),128)):L("",!0)])),_:1},8,["index"])):(n(),r(v,{key:0},[c(h).meta?(n(),o(nt,{key:0,to:f(c(h).path)},{default:l((()=>[i(m,{index:f(c(h).path)},O({default:l((()=>[c(h).meta.icon?(n(),o(d,{key:0,name:c(h).meta.icon},null,8,["name"])):L("",!0)])),_:2},[c(h).meta.title?{name:"title",fn:l((()=>[F(y(c(h).meta.title),1)]))}:void 0]),1032,["index"])])),_:1},8,["to"])):L("",!0)],64))],2))}}}),[["__scopeId","data-v-5ec0161c"]]),lt=""+new URL("logo-text-1.0f451132.png",import.meta.url).href,st=e=>(_("data-v-3a14b2a4"),e=e(),R(),e),ot=st((()=>B("img",{src:"data:image/png;base64,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",class:"sidebar-logo"},null,-1))),ct=st((()=>B("img",{src:lt,class:"sidebar-logo-text"},null,-1))),dt=f(t({__name:"SidebarLogo",props:{collapse:{type:Boolean,default:!0}},setup:e=>(t,a)=>{const c=u("router-link");return n(),r("div",{class:I(["sidebar-logo-container",{collapse:e.collapse}])},[i(s,{name:"sidebarLogoFade"},{default:l((()=>[e.collapse?(n(),o(c,{key:"collapse",class:"sidebar-logo-link",to:"/"},{default:l((()=>[ot])),_:1})):(n(),o(c,{key:"expand",class:"sidebar-logo-link",to:"/"},{default:l((()=>[ct])),_:1}))])),_:1})],2)}}),[["__scopeId","data-v-3a14b2a4"]]),ut=e=>{let t="";try{t=getComputedStyle(document.documentElement).getPropertyValue(e)}catch(a){console.error(a)}return t},ht=f(t({__name:"index",setup(e){const t=ut("--v3-sidebar-menu-bg-color"),s=ut("--v3-sidebar-menu-text-color"),d=ut("--v3-sidebar-menu-active-text-color"),f=h(),m=a((()=>V().sidebar)),p=a((()=>N().routes)),g=a((()=>ne().showSidebarLogo)),A=a((()=>{const{meta:e,path:t}=f;return null===e&&void 0===e||!e.activeMenu?t:e.activeMenu})),b=a((()=>!m.value.opened));return(e,a)=>{const h=u("el-menu"),f=u("el-scrollbar");return n(),r("div",{class:I({"has-logo":c(g)})},[c(g)?(n(),o(dt,{key:0,collapse:c(b)},null,8,["collapse"])):L("",!0),i(f,{"wrap-class":"scrollbar-wrapper"},{default:l((()=>[i(h,{collapse:c(b),"unique-opened":!0,"default-active":c(A),"background-color":c(t),"text-color":c(s),"active-text-color":c(d),mode:"vertical"},{default:l((()=>[(n(!0),r(v,null,w(c(p),(e=>(n(),o(it,{key:e.path,item:e,"base-path":e.path,"is-collapse":c(b)},null,8,["item","base-path","is-collapse"])))),128))])),_:1},8,["collapse","default-active","background-color","text-color","active-text-color"])])),_:1})],2)}}}),[["__scopeId","data-v-69e8dfff"]]),ft=e({id:"tags-view",state:()=>({visitedViews:[]}),actions:{addVisitedView(e){var t;this.visitedViews.some((t=>t.path===e.path))||this.visitedViews.push(Object.assign({},e,{title:(null==(t=e.meta)?void 0:t.title)||"no-name"}))},delVisitedView(e){for(const[t,a]of this.visitedViews.entries())if(a.path===e.path){this.visitedViews.splice(t,1);break}},delOthersVisitedViews(e){this.visitedViews=this.visitedViews.filter((t=>{var a;return(null==(a=t.meta)?void 0:a.affix)||t.path===e.path}))},delAllVisitedViews(){const e=this.visitedViews.filter((e=>{var t;return null==(t=e.meta)?void 0:t.affix}));this.visitedViews=e},updateVisitedView(e){for(let t of this.visitedViews)if(t.path===e.path){t=Object.assign(t,e);break}}}});const mt=f({},[["render",function(e,t){const a=u("el-scrollbar");return n(),o(a,{vertical:!1,class:"scroll-container"},{default:l((()=>[M(e.$slots,"default",{},void 0,!0)])),_:3})}],["__scopeId","data-v-1320289d"]]),pt={class:"tags-view-container"},gt=f(t({__name:"index",setup(e){const t=Q(),s=b(),d=h(),f=ft(),A=N(),k=(e,t)=>{const a=e.slice(-1)[0];void 0!==a&&void 0!==a.fullPath?s.push(a.fullPath).catch((e=>{console.warn(e)})):"Dashboard"===t.name?s.push({path:"/redirect"+t.fullPath}).catch((e=>{console.warn(e)})):s.push("/").catch((e=>{console.warn(e)}))},x=m({visible:!1,top:0,left:0,selectedTag:{},affixTags:[],isActive:e=>e.path===d.path,isAffix:e=>e.meta&&e.meta.affix,refreshSelectedTag:e=>{const{fullPath:t}=e;z((()=>{s.replace({path:"/redirect"+t}).catch((e=>{console.warn(e)}))}))},closeSelectedTag:e=>{f.delVisitedView(e),x.isActive(e)&&k(f.visitedViews,e)},closeOthersTags:()=>{x.selectedTag.fullPath!==d.path&&void 0!==x.selectedTag.fullPath&&s.push(x.selectedTag.fullPath).catch((e=>{console.warn(e)})),f.delOthersVisitedViews(x.selectedTag)},closeAllTags:e=>{f.delAllVisitedViews(),x.affixTags.some((e=>e.path===d.path))||k(f.visitedViews,e)},openMenu:(e,a)=>{const n=t.proxy.$el.getBoundingClientRect().left,r=t.proxy.$el.offsetWidth-105,i=a.clientX-n+15;x.left=i>r?r:i,x.top=a.clientY,x.visible=!0,x.selectedTag=e},closeMenu:()=>{x.visible=!1}}),E=a((()=>f.visitedViews)),S=a((()=>A.routes)),V=(e,t="/")=>{let a=[];return e.forEach((e=>{if(e.meta&&e.meta.affix){const n=tt.resolve(t,e.path);a.push({fullPath:n,path:n,name:e.name,meta:{...e.meta}})}if(e.children){const t=V(e.children,e.path);t.length>=1&&(a=a.concat(t))}})),a},T=()=>(d.name&&f.addVisitedView(d),!1);return p((()=>d.name),(()=>{T(),(()=>{const e=null==t?void 0:t.refs.tag;if(null!=e&&Array.isArray(e))for(const t of e)t.to.path===d.path&&t.to.fullPath!==d.fullPath&&f.updateVisitedView(d)})()})),p((()=>x.visible),(e=>{e?document.body.addEventListener("click",x.closeMenu):document.body.removeEventListener("click",x.closeMenu)})),g((()=>{(()=>{x.affixTags=V(S.value);for(const e of x.affixTags)e.name&&f.addVisitedView(e)})(),T()})),(e,t)=>{const a=u("el-icon"),s=u("router-link");return n(),r("div",pt,[i(mt,{class:"tags-view-wrapper"},{default:l((()=>[(n(!0),r(v,null,w(c(E),(e=>(n(),o(s,{ref_for:!0,ref:"tag",key:e.path,class:I([x.isActive(e)?"active":"","tags-view-item"]),to:{path:e.path,query:e.query},onMouseup:C((t=>x.isAffix(e)?"":x.closeSelectedTag(e)),["middle"]),onContextmenu:C((t=>x.openMenu(e,t)),["prevent"])},{default:l((()=>{var t;return[F(y(null==(t=e.meta)?void 0:t.title)+" ",1),x.isAffix(e)?L("",!0):(n(),o(a,{key:0,size:12,onClick:C((t=>x.closeSelectedTag(e)),["prevent","stop"])},{default:l((()=>[i(c(H))])),_:2},1032,["onClick"]))]})),_:2},1032,["class","to","onMouseup","onContextmenu"])))),128))])),_:1}),P(B("ul",{style:j({left:x.left+"px",top:x.top+"px"}),class:"contextmenu"},[B("li",{onClick:t[0]||(t[0]=e=>x.refreshSelectedTag(x.selectedTag))},"刷新"),x.isAffix(x.selectedTag)?L("",!0):(n(),r("li",{key:0,onClick:t[1]||(t[1]=e=>x.closeSelectedTag(x.selectedTag))},"关闭")),B("li",{onClick:t[2]||(t[2]=(...e)=>x.closeOthersTags&&x.closeOthersTags(...e))},"关闭其它"),B("li",{onClick:t[3]||(t[3]=e=>x.closeAllTags(x.selectedTag))},"关闭所有")],4),[[Y,x.visible]])])}}}),[["__scopeId","data-v-d6dd5844"]]),wt=f(t({__name:"index",props:{buttonTop:{type:Number,default:250}},setup(e){const t=q(!1);return(a,s)=>{const o=u("el-icon"),d=u("el-drawer");return n(),r(v,null,[B("div",{class:"handle-button",style:j({top:e.buttonTop+"px"}),onClick:s[0]||(s[0]=e=>t.value=!0)},[i(o,{size:24},{default:l((()=>[i(c(U))])),_:1})],4),i(d,{modelValue:t.value,"onUpdate:modelValue":s[1]||(s[1]=e=>t.value=e),size:"300px","with-header":!1},{default:l((()=>[M(a.$slots,"default",{},void 0,!0)])),_:3},8,["modelValue"])],64)}}}),[["__scopeId","data-v-ffc2745c"]]),vt=f(t({__name:"index",setup(e){const t=V(),s=ne(),{sidebar:d,device:u,addEventListenerOnResize:f,resizeMounted:w,removeEventListenerResize:v,watchRouter:A}=(()=>{const e=h(),t=V(),n=a((()=>t.device)),r=a((()=>t.sidebar)),i=p((()=>e.name),(()=>{t.device===J.Mobile&&t.sidebar.opened&&t.closeSidebar(!1)})),l=()=>document.body.getBoundingClientRect().width-1<992,s=()=>{document.hidden||(t.toggleDevice(l()?J.Mobile:J.Desktop),l()&&t.closeSidebar(!0))};return{device:n,sidebar:r,resizeMounted:()=>{l()&&(t.toggleDevice(J.Mobile),t.closeSidebar(!0))},addEventListenerOnResize:()=>{window.addEventListener("resize",s)},removeEventListenerResize:()=>{window.removeEventListener("resize",s)},watchRouter:i}})(),b=m({handleClickOutside:()=>{t.closeSidebar(!1)}}),y=a((()=>({hideSidebar:!d.value.opened,openSidebar:d.value.opened,withoutAnimation:d.value.withoutAnimation,mobile:u.value===J.Mobile}))),C=a((()=>s.showSettings)),k=a((()=>s.showTagsView)),x=a((()=>s.fixedHeader));return A(),g((()=>{f()})),X((()=>{w()})),G((()=>{v()})),(e,t)=>(n(),r("div",{class:I([c(y),"app-wrapper"])},[c(y).mobile&&c(d).opened?(n(),r("div",{key:0,class:"drawer-bg",onClick:t[0]||(t[0]=(...e)=>b.handleClickOutside&&b.handleClickOutside(...e))})):L("",!0),i(c(ht),{class:"sidebar-container"}),B("div",{class:I([{hasTagsView:c(k)},"main-container"])},[B("div",{class:I({"fixed-header":c(x)})},[i(c(Oe)),c(k)?(n(),o(c(gt),{key:0})):L("",!0)],2),i(c(ie)),c(C)?(n(),o(c(wt),{key:0},{default:l((()=>[i(c(Ke))])),_:1})):L("",!0)],2)],2))}}),[["__scopeId","data-v-80129a6c"]]);export{vt as default};

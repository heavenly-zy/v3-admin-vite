import{w as e,bE as a,bF as r,bG as s,bH as l,am as o,n as t}from"./index-a49147f4.js";import{b as i}from"./vue-router-98b91c90.js";import{f as d,b as n}from"./user-c9017a77.js";import{_ as u}from"./index.vue_vue_type_script_setup_true_lang-b1d20f3c.js";import{w as m,ar as p,ap as c,l as f,t as g,m as _,b1 as v,av as x,an as b,ak as h,aj as w,aR as y,s as V}from"./runtime-core.esm-bundler-42d2bde8.js";import{_ as j}from"./_plugin-vue_export-helper-1b428a4d.js";import"./useTheme-07577bf8.js";const k={class:"login-container"},z={class:"login-card"},q=(e=>(b("data-v-6f4945e9"),e=e(),h(),e))((()=>_("div",{class:"title"},[_("img",{src:"/v3-admin-vite/static/logo-text-2-eef467fb.png"})],-1))),C={class:"content"},M=j(m({__name:"index",setup(m){const b=i(),h=p(null),j=p(!1),M=p(""),U=c({username:"admin",password:"12345678",code:""}),F={username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:8,max:16,message:"长度在 8 到 16 个字符",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},K=()=>{var e;null==(e=h.value)||e.validate((e=>{if(!e)return!1;j.value=!0,n().login({username:U.username,password:U.password,code:U.code}).then((()=>{b.push({path:"/"})})).catch((()=>{R(),U.password=""})).finally((()=>{j.value=!1}))}))},R=()=>{U.code="",M.value="",d().then((e=>{M.value=e.data}))};return R(),(i,d)=>{const n=x("el-input"),m=x("el-form-item"),p=x("el-icon"),c=x("el-image"),b=x("el-button"),E=x("el-form");return w(),f("div",k,[g(u,{class:"theme-switch"}),_("div",z,[q,_("div",C,[g(E,{ref_key:"loginFormRef",ref:h,model:U,rules:F,onKeyup:e(K,["enter"])},{default:v((()=>[g(m,{prop:"username"},{default:v((()=>[g(n,{modelValue:U.username,"onUpdate:modelValue":d[0]||(d[0]=e=>U.username=e),modelModifiers:{trim:!0},placeholder:"用户名",type:"text",tabindex:"1","prefix-icon":y(a),size:"large"},null,8,["modelValue","prefix-icon"])])),_:1}),g(m,{prop:"password"},{default:v((()=>[g(n,{modelValue:U.password,"onUpdate:modelValue":d[1]||(d[1]=e=>U.password=e),modelModifiers:{trim:!0},placeholder:"密码",type:"password",tabindex:"2","prefix-icon":y(r),size:"large","show-password":""},null,8,["modelValue","prefix-icon"])])),_:1}),g(m,{prop:"code"},{default:v((()=>[g(n,{modelValue:U.code,"onUpdate:modelValue":d[2]||(d[2]=e=>U.code=e),modelModifiers:{trim:!0},placeholder:"验证码",type:"text",tabindex:"3","prefix-icon":y(s),maxlength:"7",size:"large"},{append:v((()=>[g(c,{src:M.value,onClick:R,draggable:"false"},{placeholder:v((()=>[g(p,null,{default:v((()=>[g(y(l))])),_:1})])),error:v((()=>[g(p,null,{default:v((()=>[g(y(o))])),_:1})])),_:1},8,["src"])])),_:1},8,["modelValue","prefix-icon"])])),_:1}),g(b,{loading:j.value,type:"primary",size:"large",onClick:t(K,["prevent"])},{default:v((()=>[V(" 登 录 ")])),_:1},8,["loading","onClick"])])),_:1},8,["model","onKeyup"])])])])}}}),[["__scopeId","data-v-6f4945e9"]]);export{M as default};
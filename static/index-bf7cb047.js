import{H as k,aF as C,r as f,_ as z,ah as s,l as F,m as I,V as e,p as c,P as a,u as i,a3 as U,T as M,a9 as R,aI as S,aJ as q}from"./vue-2e6427a0.js";import{e as B,d as K,_ as N}from"./index-e55f407d.js";import{v as L,w as T,x as A,y as D,z as E}from"./element-e3d67198.js";import{_ as H}from"./index.vue_vue_type_script_setup_true_lang-e0ed04f5.js";import"./vxe-b72fda76.js";const J="/v3-admin-vite/static/logo-text-2-eef467fb.png",P=d=>(S("data-v-de8307a8"),d=d(),q(),d),$={class:"login-container"},j={class:"login-card"},G=P(()=>c("div",{class:"title"},[c("img",{src:J})],-1)),O={class:"content"},Q=k({__name:"index",setup(d){const h=C(),g=f(null),u=f(!1),p=f(""),o=z({username:"admin",password:"12345678",code:""}),w={username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:8,max:16,message:"长度在 8 到 16 个字符",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},x=()=>{var l;(l=g.value)==null||l.validate((t,r)=>{t?(u.value=!0,K().login(o).then(()=>{h.push({path:"/"})}).catch(()=>{m(),o.password=""}).finally(()=>{u.value=!1})):console.error("表单校验不通过",r)})},m=()=>{o.code="",p.value="",B().then(l=>{p.value=l.data})};return m(),(l,t)=>{const r=s("el-input"),_=s("el-form-item"),v=s("el-icon"),y=s("el-image"),V=s("el-button"),b=s("el-form");return F(),I("div",$,[e(H,{class:"theme-switch"}),c("div",j,[G,c("div",O,[e(b,{ref_key:"loginFormRef",ref:g,model:o,rules:w,onKeyup:R(x,["enter"])},{default:a(()=>[e(_,{prop:"username"},{default:a(()=>[e(r,{modelValue:o.username,"onUpdate:modelValue":t[0]||(t[0]=n=>o.username=n),modelModifiers:{trim:!0},placeholder:"用户名",type:"text",tabindex:"1","prefix-icon":i(L),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),e(_,{prop:"password"},{default:a(()=>[e(r,{modelValue:o.password,"onUpdate:modelValue":t[1]||(t[1]=n=>o.password=n),modelModifiers:{trim:!0},placeholder:"密码",type:"password",tabindex:"2","prefix-icon":i(T),size:"large","show-password":""},null,8,["modelValue","prefix-icon"])]),_:1}),e(_,{prop:"code"},{default:a(()=>[e(r,{modelValue:o.code,"onUpdate:modelValue":t[2]||(t[2]=n=>o.code=n),modelModifiers:{trim:!0},placeholder:"验证码",type:"text",tabindex:"3","prefix-icon":i(A),maxlength:"7",size:"large"},{append:a(()=>[e(y,{src:p.value,onClick:m,draggable:"false"},{placeholder:a(()=>[e(v,null,{default:a(()=>[e(i(D))]),_:1})]),error:a(()=>[e(v,null,{default:a(()=>[e(i(E))]),_:1})]),_:1},8,["src"])]),_:1},8,["modelValue","prefix-icon"])]),_:1}),e(V,{loading:u.value,type:"primary",size:"large",onClick:U(x,["prevent"])},{default:a(()=>[M("登 录")]),_:1},8,["loading","onClick"])]),_:1},8,["model","onKeyup"])])])])}}});const oe=N(Q,[["__scopeId","data-v-de8307a8"]]);export{oe as default};
(function(t){function e(e){for(var a,i,s=e[0],u=e[1],l=e[2],d=0,m=[];d<s.length;d++)i=s[d],n[i]&&m.push(n[i][0]),n[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);c&&c(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,s=1;s<r.length;s++){var u=r[s];0!==n[u]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={app:0},o=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("64a9"),n=r.n(a);n.a},"4b76":function(t,e,r){"use strict";var a=r("961f"),n=r.n(a);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=r("9f7b"),o=r.n(n);r("ab8b"),r("2dd8");a["default"].use(o.a);var i=r("d847"),s=r.n(i),u=r("795b"),l=r.n(u),c=r("bc3a"),d=r.n(c),m={},f=d.a.create(m);f.interceptors.request.use(function(t){return t},function(t){return l.a.reject(t)}),f.interceptors.response.use(function(t){return t},function(t){return l.a.reject(t)}),Plugin.install=function(t,e){t.axios=f,window.axios=f,s()(t.prototype,{axios:{get:function(){return f}},$axios:{get:function(){return f}}})},a["default"].use(Plugin);Plugin;var p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("b-navbar",{staticClass:"navbar",attrs:{type:"dark",variant:"dark"}},[r("b-navbar-brand",[t._v("Auth with JWT")]),r("div",{staticClass:"right"},[r("b-nav-item",{attrs:{href:"#",to:"/login"}},[t._v("Login")]),r("b-nav-item",{attrs:{href:"#",to:"/"}},[t._v("Register")]),r("b-nav-item",{attrs:{href:"#"},on:{click:function(e){return t.logout()}}},[t._v("Logout")])],1)],1)],1),r("router-view")],1)},b=[],h={name:"App",data:function(){return{}},methods:{logout:function(){localStorage.removeItem("token"),this.$router.push("/login")}}},v=h,g=(r("034f"),r("2877")),w=Object(g["a"])(v,p,b,!1,null,null,null),_=w.exports,x=r("8c4f"),$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"mt-3"},[r("section",[t._l(t.users,function(e){return r("h2",{key:e._id},[t._v("Welcome, "+t._s(e.username))])}),r("b-form",{staticClass:"mt-5 mb-4 section-width",on:{submit:function(e){return e.preventDefault(),t.addNote()}}},[r("b-form-group",{attrs:{label:"Add Note:","label-for":"note"}},[r("b-form-input",{attrs:{id:"note",type:"text",required:"",placeholder:"Enter Note"},model:{value:t.note.title,callback:function(e){t.$set(t.note,"title",e)},expression:"note.title"}})],1),r("b-form-group",{attrs:{label:"Add description","label-for":"desc"}},[r("b-form-textarea",{attrs:{id:"desc",placeholder:"Enter Note...",rows:"3","max-rows":"6"},model:{value:t.note.desc,callback:function(e){t.$set(t.note,"desc",e)},expression:"note.desc"}})],1),r("b-form-group",[r("b-button",{attrs:{block:"",type:"submit",variant:"success"}},[t._v("Add Note")])],1)],1),0==t.notes?r("p",[t._v("You have no notes, add some :)")]):r("b-card-group",{staticClass:"section-width"},[r("b-row",t._l(t.notes,function(e){return r("b-col",{key:e._id,staticClass:"d-flex flex-row mb-3 flex-md-wrap justify-content width",attrs:{xs:"12",sm:"6",md:"6",lg:"6",xl:"4"}},[r("b-card",{staticClass:"width",attrs:{"border-variant":"primary",header:e.title,"header-bg-variant":"primary","header-text-variant":"white",align:"center"}},[r("b-card-text",[t._v(t._s(e.description))]),r("b-button",{attrs:{block:"",variant:"danger",size:"sm"},on:{click:function(r){return t.deletenote(e._id)}}},[t._v("Delete Note")])],1)],1)}),1)],1)],2)])},k=[],y="https://vueauthapp.herokuapp.com",q={name:"Home",data:function(){return{users:[],note:{title:"",desc:"",id:null},notes:[],boxTwo:""}},created:function(){var t=this;d.a.get("".concat(y,"/api/auth"),{headers:{authorization:"Bearer ".concat(localStorage.token)}}).then(function(e){e.data?(t.users.push(e.data),t.note.id=e.data._id):(localStorage.removeItem("token"),t.$router.push("/login"))}).catch(function(t){console.log("user error:",t)}),this.getNotes()},methods:{addNote:function(){var t=this,e={userID:this.note.id,title:this.note.title,description:this.note.desc};d.a.post("".concat(y,"/api/v1/notes"),e,{headers:{authorization:"Bearer ".concat(localStorage.token)}}).then(function(e){t.note.title="",t.note.desc="",t.notes.push(e.data),t.newNote={title:"",desc:""}}).catch(function(t){console.log("err created:",t)})},getNotes:function(){var t=this;d.a.get("".concat(y,"/api/v1/notes"),{headers:{authorization:"Bearer ".concat(localStorage.token)}}).then(function(e){t.notes=e.data})},deletenote:function(t){var e=this;confirm("Are you sure you want to delete this note")&&d.a.delete("".concat(y,"/api/v1/notes/").concat(t),{headers:{authorization:"Bearer ".concat(localStorage.token)}}).then(function(){e.getNotes()}).catch(function(t){t&&console.log("not deleted",t)})}}},L=q,j=(r("8b71"),Object(g["a"])(L,$,k,!1,null,null,null)),C=j.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"mt-2 container-height"},[r("b-row",{staticClass:"row-height"},[r("b-col",[t.isLoading?r("div",{staticClass:"d-flex justify-content-center align-item-center spinner-height"},[r("b-spinner",{staticStyle:{width:"4rem",height:"4rem"},attrs:{variant:"primary",label:"Loading..."}})],1):t._e(),r("div",{staticClass:"form-flex"},[r("h3",{staticClass:"mb-3"},[t._v("Login")]),r("b-form",{staticClass:"border p-3 form-width"},[t.errorMessage?r("b-alert",{attrs:{variant:"danger",show:""}},[t._v(t._s(t.errorMessage))]):t._e(),r("b-form-group",{attrs:{label:"Email"}},[r("b-form-input",{class:{"is-invalid":t.submitted&&t.$v.email.$error},attrs:{type:"email",required:"",placeholder:"Your email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t.submitted&&!t.$v.email.email?r("b-form-text",{attrs:{"text-variant":"danger"}},[t._v("Must be a valid email")]):t._e(),t.submitted&&!t.$v.email.required?r("b-form-text",{attrs:{"text-variant":"danger"}},[t._v("Field is required")]):t._e()],1),r("b-form-group",{attrs:{label:"Password"}},[r("b-form-input",{class:{"is-invalid":t.submitted&&t.$v.password.$error},attrs:{type:"password",required:"",placeholder:"Your password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t.submitted&&!t.$v.password.required?r("b-form-text",{attrs:{"text-variant":"danger"}},[t._v("Field is required")]):t._e(),t.submitted&&!t.$v.password.minLength?r("b-form-text",{attrs:{"text-variant":"danger"}},[t._v("Password needs to be at least 8 characters long")]):t._e()],1),r("b-form-group",[r("b-button",{attrs:{block:"",variant:"success"},on:{click:function(e){return t.login()}}},[t._v("Login")])],1)],1)],1)])],1)],1)},E=[],O=r("b5ae"),M="https://vueauthapp.herokuapp.com",P={name:"Login",data:function(){return{isLoading:!1,errorMessage:"",email:"",password:"",submitted:!1}},validations:{email:{required:O["required"],email:O["email"]},password:{required:O["required"],minLength:Object(O["minLength"])(8)}},methods:{login:function(){this.submitted=!0,this.$v.$touch(),this.$v.$invalid||this.submitData()},submitData:function(){var t=this,e={email:this.email,password:this.password};this.isLoading=!0,d.a.post("".concat(M,"/api/auth/login"),e).then(function(e){e.data&&(t.isLoading=!1,localStorage.token=e.data.token,t.$router.push("/homepage"))}).catch(function(e){e&&(t.isLoading=!1,t.errorMessage="Unable to login",setInterval(function(){t.errorMessage=""},5e3))})}}},N=P,D=(r("f1d8"),Object(g["a"])(N,S,E,!1,null,"59e6006a",null)),A=D.exports,z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"mt-2 container-height"},[r("b-row",{staticClass:"row-height"},[r("b-col",[t.isLoading?r("div",{staticClass:"d-flex justify-content-center align-item-center spinner-height"},[r("b-spinner",{staticStyle:{width:"4rem",height:"4rem"},attrs:{variant:"primary",label:"Loading..."}})],1):t._e(),r("div",{staticClass:"form-flex"},[r("h3",{staticClass:"mb-3"},[t._v("Register to Manage Notes")]),r("b-form",{staticClass:"border p-3 form-width"},[t.dataError?r("b-alert",{attrs:{variant:"danger",show:""}},[t._v(t._s(t.dataError))]):t._e(),r("b-form-group",{attrs:{label:"Username"}},[r("b-form-input",{class:{"is-invalid":t.submitted&&t.$v.username.$error},attrs:{placeholder:"Enter name"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t.submitted&&!t.$v.username.required?r("b-form-text",{attrs:{"text-variant":"danger"}},[t._v("Field is required")]):t._e(),t.submitted&&!t.$v.username.minLength?r("b-form-text",{attrs:{"text-variant":"danger"}},[t._v("Must be 4 characters long")]):t._e()],1),r("b-form-group",{attrs:{label:"Email"}},[r("b-form-input",{class:{"is-invalid":t.submitted&&t.$v.email.$error},attrs:{type:"email",required:"",placeholder:"Your email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t.submitted&&!t.$v.email.email?r("b-form-text",{attrs:{"text-variant":"danger"}},[t._v("Must be a valid email")]):t._e(),t.submitted&&!t.$v.email.required?r("b-form-text",{attrs:{"text-variant":"danger"}},[t._v("Field is required")]):t._e()],1),r("b-form-group",{attrs:{label:"Password"}},[r("b-form-input",{class:{"is-invalid":t.submitted&&t.$v.password.$error},attrs:{type:"password",required:"",placeholder:"Your password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t.submitted&&!t.$v.password.required?r("b-form-text",{attrs:{"text-variant":"danger"}},[t._v("Field is required")]):t._e(),t.submitted&&!t.$v.password.minLength?r("b-form-text",{attrs:{"text-variant":"danger"}},[t._v("Password needs to be at least 8 characters long")]):t._e()],1),r("b-form-group",[r("b-button",{attrs:{block:"",variant:"success"},on:{click:function(e){return t.registerUser()}}},[t._v("Register")])],1)],1)],1)])],1)],1)},F=[],I="https://vueauthapp.herokuapp.com",T={name:"Register",data:function(){return{dataError:"",submitted:!1,username:"",email:"",password:"",isLoading:!1}},validations:{username:{required:O["required"],minLength:Object(O["minLength"])(4)},email:{required:O["required"],email:O["email"]},password:{required:O["required"],minLength:Object(O["minLength"])(8)}},methods:{registerUser:function(){this.submitted=!0,this.$v.$touch(),this.$v.$invalid||this.submitData()},submitData:function(){var t=this,e={username:this.username,email:this.email,password:this.password};this.isLoading=!0,d.a.post("".concat(I,"/api/auth"),e).then(function(e){e&&(t.isLoading=!1,localStorage.token=e.data.token,t.$router.push("/homepage"))}).catch(function(e){e&&(t.isLoading=!1,t.dataError="User already exist",setInterval(function(){t.dataError=""},4e3))})}}},U=T,Y=(r("4b76"),Object(g["a"])(U,z,F,!1,null,"11b1db0e",null)),B=Y.exports;a["default"].use(x["a"]);var R=new x["a"]({mode:"history",base:"/",routes:[{path:"/",name:"register",component:B,beforeEnter:function(t,e,r){localStorage.token?r("/homepage"):r()}},{path:"/login",name:"login",component:A,beforeEnter:function(t,e,r){localStorage.token?r("/homepage"):r()}},{path:"/homepage",name:"homepage",component:C,beforeEnter:function(t,e,r){localStorage.token?r():r("/login")}}]}),J=r("1dce"),W=r.n(J);a["default"].use(W.a),a["default"].config.productionTip=!1,new a["default"]({router:R,render:function(t){return t(_)}}).$mount("#app")},"64a9":function(t,e,r){},7019:function(t,e,r){},"8b71":function(t,e,r){"use strict";var a=r("e3a2"),n=r.n(a);n.a},"961f":function(t,e,r){},e3a2:function(t,e,r){},f1d8:function(t,e,r){"use strict";var a=r("7019"),n=r.n(a);n.a}});
//# sourceMappingURL=app.fc1f7e6d.js.map
(this.webpackJsonpsocial_media=this.webpackJsonpsocial_media||[]).push([[0],{180:function(e,t,n){},308:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(0),c=n.n(a),o=n(10),i=n.n(o),s=(n(180),n(26)),l=n(339),u=n(341),d=n(343),j=n(359),b=n(12),h=n.n(b),f=n(22),p=n(52),O=n(36),m=n(142),x=n.n(m).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"ca0951c1-2a9d-481e-a273-3d5f60141d92"}}),g=function(){return x.get("auth/me").then((function(e){return e.data}))},v=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0;return x.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},w=function(){return x.delete("auth/login")},y=function(){return x.get("security/get-captcha-url").then((function(e){return e.data}))},C=Object(O.b)({name:"auth",initialState:{id:null,email:null,login:null,isAuth:!1,captchaUrl:null,errorMessage:null},reducers:{setCaptchaUrl:function(e,t){e.captchaUrl=t.payload},setAuthUserData:function(e,t){return Object(p.a)({state:e},t.payload)},setErrorMessage:function(e,t){e.errorMessage=t.payload}}}),k=C.actions,_=k.setCaptchaUrl,I=k.setAuthUserData,S=k.setErrorMessage,F=function(){return function(){var e=Object(f.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:0===(n=e.sent).resultCode&&(n.data.isAuth=!0,t(I(n.data)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},U=C.reducer,A=n(9),N=function(e){return x.get("profile/"+e).then((function(e){return e.data}))},P=function(e){return x.get("profile/status/"+e).then((function(e){return e.data}))},E=function(e){return x.put("profile/status",{status:e}).then((function(e){return e.data}))},z=function(e){var t=new FormData;return t.append("image",e),x.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},M=function(e){return x.get("follow/".concat(e)).then((function(e){return e.data}))},D=function(e){return x.put("profile",e).then((function(e){return e.data}))},T=Object(O.b)({name:"profile",initialState:{AuthUser:null,profile:null,status:"",formEdit:!1,formError:""},reducers:{setUserProfile:function(e,t){e.profile=t.payload},setUserStatus:function(e,t){e.status=t.payload},setAuthUser:function(e,t){e.AuthUser=t.payload},setNewAvatar:function(e,t){e.AuthUser.photos=e.profile.photos=t.payload},setFormEdit:function(e,t){var n=t.payload;e.formEdit=n},setFormError:function(e,t){var n=t.payload;e.formError=n},setUserFollowStatus:function(e,t){var n=t.payload;e.profile=Object(p.a)(Object(p.a)({},e.profile),{},{followed:n})}}}),J=T.actions,R=J.setUserFollowStatus,B=J.setFormError,q=J.setFormEdit,L=(J.addPost,J.setUserProfile),W=J.setUserStatus,H=J.setAuthUser,Y=J.setNewAvatar,V=function(e){return function(){var t=Object(f.a)(h.a.mark((function t(n){var r,a,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e);case 2:return r=t.sent,t.next=5,P(e);case 5:return a=t.sent,t.next=8,M(e);case 8:c=t.sent,n(L(r)),n(W(a)),n(R(c));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},K=function(e){return function(){var t=Object(f.a)(h.a.mark((function t(n){var r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e);case 2:r=t.sent,n(H(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},$=T.reducer,G=n(148),Q=n.n(G),X=n(32),Z=Object(l.a)((function(e){return{header__container:{color:"white",width:1200,margin:"10px auto",display:"flex",alignItems:"center"},header__profile:{justifyContent:"flex-end",alignItems:"center"},header:Object(s.a)({background:"-webkit-linear-gradient(to top, #232526, #414345)"},"background","linear-gradient(to top, #232526, #414345)")}})),ee=function(){var e=Z(),t=Object(A.c)((function(e){return e.profile.AuthUser})),n=Object(A.c)((function(e){return e.auth})),a=n.isAuth,o=n.id,i=Object(A.b)();c.a.useEffect((function(){o&&i(K(o))}),[i,o]);return Object(r.jsx)(u.a,{position:"sticky",className:e.header,children:Object(r.jsxs)(d.a,{className:e.header__container,children:[Object(r.jsx)(d.a,{container:!0,spacing:6,children:["home","profile","chat","users"].map((function(e){return Object(r.jsx)(d.a,{item:!0,children:Object(r.jsx)(X.c,{to:"/"+e,activeClassName:"active",children:Object(r.jsxs)("h2",{children:[" ",e.toLocaleUpperCase()]})})},e)}))}),Object(r.jsx)("a",{href:"https://social-network.samuraijs.com/docs",children:Object(r.jsx)("h2",{children:"API"})}),a&&Object(r.jsxs)(d.a,{container:!0,spacing:2,className:e.header__profile,children:[Object(r.jsxs)(X.b,{to:"/profile",children:[Object(r.jsx)("h4",{children:null===t||void 0===t?void 0:t.fullName})," "]}),Object(r.jsx)(d.a,{item:!0,children:Object(r.jsx)(j.a,{alt:"Remy Sharp",src:null===t||void 0===t?void 0:t.photos.small})}),Object(r.jsx)("a",{children:Object(r.jsx)(Q.a,{onClick:function(){return i(function(){var e=Object(f.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:0===e.sent.data.resultCode&&t(I({id:null,email:null,login:null,isAuth:!1}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},fontSize:"large"})})]})]})})},te=n(89),ne=n(163),re=n(311),ae=n(357),ce=n(346),oe=n(358),ie=n(348),se=n(155),le=n.n(se),ue=n(90),de=n(154),je=n.n(de),be=Object(l.a)((function(e){var t;return{login__container:(t={margin:"0 auto",display:"flex",padding:e.spacing(2)},Object(s.a)(t,"margin",e.spacing(1)),Object(s.a)(t,"flexDirection","column"),Object(s.a)(t,"textAlign","center"),Object(s.a)(t,"&>*",{paddingBottom:e.spacing(1)}),t),login__icon:{fontSize:80,width:"100%",color:"#61dafb"},login__captcha:{margin:"0 auto",width:"100px"},login__error:{color:"red"}}})),he=function(){var e=Object(A.c)((function(e){return e.auth.captchaUrl})),t=Object(A.c)((function(e){return e.auth.errorMessage})),n=Object(A.b)(),a=be(),c=Object(te.a)({initialValues:{login:"",password:"",captcha:"",rememberMe:!1},validationSchema:ue.a({login:ue.b().email("Insert correct email ").required("Required"),password:ue.b().min(4,"Password must be longer than 4 characters.").max(12,"Password must be shorter than 12 characters.").required("Required")}),onSubmit:function(e){var t=e.login,r=e.password,a=e.captcha,c=e.rememberMe;console.log(t,r,a,c),n(function(e,t,n,r){return function(){var a=Object(f.a)(h.a.mark((function a(c){var o,i;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v(e,t,n,r);case 2:0===(o=a.sent).resultCode?c(F()):(10===o.resultCode&&c(function(){var e=Object(f.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:n=e.sent,r=n.url,t(_(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),i=o.messages.length>0?o.messages[0]:"Some Error",c(S(i)));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(t,r,c,a))}}),o=c.handleSubmit,i=c.handleChange,s=c.values,l=c.errors,u=c.touched,j=c.handleBlur;return console.log(l,u),Object(r.jsx)(d.a,{container:!0,justify:"center",children:Object(r.jsx)("form",{onSubmit:o,children:Object(r.jsx)(ne.a,{children:Object(r.jsxs)(d.a,{item:!0,className:a.login__container,children:[Object(r.jsx)(je.a,{className:a.login__icon}),Object(r.jsxs)(re.a,{variant:"h6",className:a.login__error,children:[t," "]}),Object(r.jsx)(ae.a,{label:"Email",onBlur:j,size:"small",onChange:i,id:"login",name:"login",value:s.login}),l.login&&u.login&&Object(r.jsx)("div",{className:a.login__error,children:l.login}),Object(r.jsx)(ae.a,{label:"Password",onBlur:j,size:"small",type:"password",onChange:i,id:"password",name:"password",value:s.password}),l.password&&u.password&&Object(r.jsx)("div",{className:a.login__error,children:l.password}),Object(r.jsx)(ce.a,{control:Object(r.jsx)(oe.a,{checked:s.rememberMe,onChange:i,name:"rememberMe",color:"primary"}),label:"Remember me"}),e&&Object(r.jsx)("img",{className:a.login__captcha,src:e,width:"100px",alt:"captcha"}),e&&Object(r.jsx)("div",{children:Object(r.jsx)(ae.a,{label:"Capcha",type:"text",onChange:i,id:"captcha",size:"small",name:"captcha",value:s.captcha})}),Object(r.jsx)(ie.a,{variant:"contained",startIcon:Object(r.jsx)(le.a,{}),size:"large",type:"submit",color:"primary",children:" Log In"}),Object(r.jsx)("p",{children:"\u0414\u043b\u044f \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043f\u0430\u0440\u0443 \u043b\u043e\u0433\u0438\u043d/\u043f\u0430\u0440\u043e\u043b\u044c: "}),Object(r.jsx)("p",{children:"free@socialnet.com / free"})]})})})})},fe=n(350),pe=n(351),Oe=n(352),me=n(353),xe=n(21),ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return x.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},ve=function(e){return x.post("follow/".concat(e)).then((function(e){return e.data}))},we=function(e){return x.delete("follow/".concat(e)).then((function(e){return e.data}))},ye=Object(O.b)({name:"users",initialState:{users:[],pageSize:100,totalUsersCount:5e3,currentPage:15,isFetching:!0,followingInProgress:[]},reducers:{setIsFetching:function(e,t){e.isFetching=t.payload},setUsers:function(e,t){e.users=t.payload},setCurrentPage:function(e,t){e.currentPage=t.payload},setTotalUsersCount:function(e,t){e.totalUsersCount=t.payload},toggleFollow:function(e,t){var n=t.payload;e.users=e.users.map((function(e){return e.id===n?Object(p.a)(Object(p.a)({},e),{},{followed:!e.followed}):e}))},setFollowingInProgress:function(e,t){var n=t.payload;e.followingInProgress=n.isFetching?[].concat(Object(xe.a)(e.followingInProgress),[n.userId]):e.followingInProgress.filter((function(e){return e!==n.userId}))},setPageSize:function(e,t){var n=t.payload;e.pageSize=n}}}),Ce=ye.actions,ke=Ce.setCurrentPage,_e=Ce.setPageSize,Ie=Ce.setIsFetching,Se=Ce.setUsers,Fe=Ce.setTotalUsersCount,Ue=Ce.toggleFollow,Ae=Ce.setFollowingInProgress,Ne=function(e,t){return function(){var n=Object(f.a)(h.a.mark((function n(r){var a,c;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r(Ae({isFetching:!0,userId:e})),t){n.next=7;break}return n.next=4,ve(e);case 4:n.t0=n.sent,n.next=10;break;case 7:return n.next=9,we(e);case 9:n.t0=n.sent;case 10:return a=n.t0,n.next=13,M(e);case 13:c=n.sent,0===a.resultCode&&(r(Ue(e)),r(R(c))),r(Ae({isFetching:!1,userId:e}));case 16:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},Pe=ye.reducer,Ee=n(356),ze=function(e){var t=e.id,n=e.followed,a=Object(A.c)((function(e){return e.users.followingInProgress})),c=Object(A.b)();return Object(r.jsx)(r.Fragment,{children:n?Object(r.jsx)(ie.a,{color:"secondary",variant:"contained",fullWidth:!0,disabled:a.some((function(e){return e===t})),onClick:function(){c(Ne(t,!0))},children:"UNFRIEND"}):Object(r.jsx)(ie.a,{color:"primary",fullWidth:!0,variant:"contained",disabled:a.some((function(e){return e===t})),onClick:function(){c(Ne(t,!1))},children:"FREIND"})})},Me=n(349),De=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(Me.a,{size:200,color:"primary",style:{position:"absolute",top:"50%",left:"50%",marginLeft:"-100px",marginTop:"-60px"}})})},Te=n.p+"static/media/defaultAvatar.832028ea.png",Je=function(){var e=Object(A.c)((function(e){return e.users})),t=e.users,n=e.currentPage,c=e.pageSize,o=e.isFetching,i=e.totalUsersCount,s=Object(A.b)();Object(a.useEffect)((function(){s(function(e,t){return function(){var n=Object(f.a)(h.a.mark((function n(r){var a;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(Ie(!0)),r(ke(e)),n.next=4,ge(e,t);case 4:a=n.sent,r(Ie(!1)),r(Se(a.items)),r(Fe(a.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(n,c))}),[n,c]);return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)(d.a,{container:!0,direction:"column",alignItems:"center",children:[Object(r.jsx)(re.a,{variant:"h5",children:"Users "}),Object(r.jsx)(Ee.a,{component:"div",count:i,page:n,onChangePage:function(e,t){s(ke(t))},rowsPerPage:c,onChangeRowsPerPage:function(e){s(_e(parseInt(e.target.value,10))),s(ke(1))}})]}),o?Object(r.jsx)(De,{}):Object(r.jsx)(d.a,{container:!0,spacing:2,style:{overflowY:"scroll",height:500,marginTop:1},children:t&&t.map((function(e){return Object(r.jsx)(d.a,{item:!0,xs:6,md:4,lg:3,children:Object(r.jsxs)(fe.a,{raised:!0,children:[Object(r.jsx)(pe.a,{style:{height:"100%"},children:Object(r.jsxs)(X.c,{to:"/profile/"+e.id,children:[Object(r.jsx)(Oe.a,{style:{height:210},image:(null===e||void 0===e?void 0:e.photos.large)||Te,title:"user photo"}),Object(r.jsxs)(me.a,{children:[Object(r.jsxs)(re.a,{gutterBottom:!0,variant:"h5",component:"h2",children:[null===e||void 0===e?void 0:e.name," "]}),Object(r.jsxs)(re.a,{variant:"body2",color:"textSecondary",component:"p",children:[(null===e||void 0===e?void 0:e.status)||"\ud83d\ude21"," "]})]})]})}),Object(r.jsx)(ze,{id:e.id,followed:e.followed})]})},e.id)}))})]})},Re=Object(O.b)({name:"app",initialState:{isInit:!1},reducers:{setInit:function(e){e.isInit=!0}}}),Be=Re.actions.setInit,qe=Re.reducer,Le=n(15),We=n(347),He=function(){var e,t=Object(A.c)((function(e){return e.profile})),n=t.profile,c=t.formError,o=Object(A.b)(),i=Object(te.a)({initialValues:n,onSubmit:function(e){o(function(e){return function(){var t=Object(f.a)(h.a.mark((function t(n){var r,a,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(e);case 2:0===(r=t.sent).resultCode?(n(V(e.userId)),n(K(e.userId)),n(q(!1))):1===r.resultCode&&(console.log(r.messages),a=r.messages[0].match(/Contacts->(\w+)/)[1],c=a[0].toLowerCase()+a.slice(1),n(B(c)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}}),l=i.handleSubmit,u=i.handleChange,j=i.values;return Object(a.useEffect)((function(){return function(){o(q(!1)),o(B(""))}}),[]),Object(r.jsxs)("form",{onSubmit:l,style:{flexDirection:"column",alignItems:"center",textAlign:"center"},children:[Object(r.jsxs)(d.a,{container:!0,spacing:2,children:[Object(r.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(r.jsx)(ae.a,{label:"Name",type:"text",required:!0,value:null===j||void 0===j?void 0:j.fullName,onChange:u,placeholder:"Enter your name",id:"fullName"})}),Object(r.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(r.jsx)(ce.a,{labelPlacement:"start",control:Object(r.jsx)(oe.a,{checked:null===j||void 0===j?void 0:j.lookingForAJob,onChange:u,color:"primary",id:"lookingForAJob"}),label:"Are you looking for a job?"})}),Object(r.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(r.jsx)(ae.a,(e={label:"About",multiline:!0,rowsMax:4,required:!0,type:"text",value:null===j||void 0===j?void 0:j.aboutMe},Object(s.a)(e,"multiline",!0),Object(s.a)(e,"onChange",u),Object(s.a)(e,"id","aboutMe"),e))}),Object(r.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(r.jsx)(ae.a,{label:"Skills",type:"text",multiline:!0,rowsMax:4,required:!0,value:null===j||void 0===j?void 0:j.lookingForAJobDescription,onChange:u,id:"lookingForAJobDescription"})})]}),Object(r.jsx)(re.a,{variant:"h5",children:" Contacts "}),!c||Object(r.jsxs)(re.a,{style:{color:"red"},children:[" invalid url format for ",c," "]}),Object(r.jsx)(d.a,{container:!0,spacing:3,children:n?Object.keys(n.contacts).map((function(e){return Object(r.jsxs)(d.a,{item:!0,xs:12,md:6,children:[!c===e?Object(r.jsxs)(re.a,{style:{color:"red"},children:[" invalid url format for ",c," "]}):null,Object(r.jsx)(ae.a,{value:j.contacts[e]||"",name:"contacts."+e,id:e,type:"text",label:e,onChange:u})]},e)})):null}),Object(r.jsxs)(d.a,{container:!0,justify:"space-around",style:{marginTop:"20px"},children:[Object(r.jsx)(ie.a,{variant:"contained",type:"submit",color:"primary",children:"Save"}),Object(r.jsx)(ie.a,{variant:"contained",type:"submit",color:"secondary",onClick:function(){o(q(!1))},children:"Cancel"})]})]})},Ye=n(34),Ve=n(344),Ke=n(156),$e=n.n(Ke),Ge=n(158),Qe=n.n(Ge),Xe=n(157),Ze=n.n(Xe),et=function(e){var t,n=e.routerId,c=Object(A.c)((function(e){return e.profile})),o=c.status,i=c.profile,s=Object(A.c)((function(e){return e.auth.id})),l=Object(a.useState)(!1),u=Object(Ye.a)(l,2),j=u[0],b=u[1],p=Object(a.useState)(o),O=Object(Ye.a)(p,2),m=O[0],x=O[1],g=Object(A.b)();Object(a.useEffect)((function(){x(o)}),[o]);var v=function(e){e?(b(!1),g(function(e){return function(){var t=Object(f.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(e);case 2:0===t.sent.resultCode&&n(W(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(m))):(x(o),b(!1))};return console.log(n!=s&&!!n||!0),Object(r.jsxs)(d.a,{container:!0,direction:"column",children:[Object(r.jsx)(d.a,{item:!0,xs:!0,children:Object(r.jsx)(re.a,{variant:"h5",children:null===(t=i.fullName)||void 0===t?void 0:t.toUpperCase()})}),Object(r.jsxs)(d.a,{item:!0,children:[j&&!n?Object(r.jsxs)("div",{children:[Object(r.jsx)(Ve.a,{autoFocus:!0,onChange:function(e){x(e.currentTarget.value)},value:m}),Object(r.jsx)(We.a,{onClick:function(){return v(!0)},children:Object(r.jsx)($e.a,{fontSize:"small",color:"primary"})}),Object(r.jsx)(We.a,{color:"inherit",onClick:function(){return v(!1)},children:Object(r.jsx)(Ze.a,{fontSize:"small",color:"secondary"})})]}):Object(r.jsx)(d.a,{children:Object(r.jsxs)(re.a,{variant:"body1",style:{cursor:"pointer",color:"#ffc800"},onClick:function(){b(!0)},children:[o,!n&&Object(r.jsx)(Qe.a,{fontSize:"small",color:"inherit"})]})}),Object(r.jsx)("hr",{}),Object(r.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(r.jsx)(re.a,{variant:"h6",color:(null===i||void 0===i?void 0:i.lookingForAJob)?"primary":"secondary",children:(null===i||void 0===i?void 0:i.lookingForAJob)?"Im looking for a job":"Im not looking for a job"})}),Object(r.jsx)("hr",{}),Object(r.jsxs)(d.a,{item:!0,xs:12,md:6,children:[Object(r.jsx)(re.a,{variant:"h5",children:" About me "}),Object(r.jsxs)(re.a,{children:[" ",null===i||void 0===i?void 0:i.aboutMe," "]})]}),Object(r.jsxs)(d.a,{item:!0,xs:12,md:6,children:[Object(r.jsx)(re.a,{variant:"h5",children:" Skills "}),Object(r.jsx)(re.a,{children:null===i||void 0===i?void 0:i.lookingForAJobDescription})]})]}),Object(r.jsx)(re.a,{variant:"h5",children:" Contacts "}),Object(r.jsx)(d.a,{container:!0,direction:"column",children:i.contacts?Object.keys(i.contacts).map((function(e){return i.contacts[e]&&Object(r.jsx)(d.a,{item:!0,children:Object(r.jsxs)(ie.a,{size:"small",style:{color:"grey"},href:"//"+i.contacts[e],children:[" ",i.contacts[e]," "]})},e)})):null})]})},tt=n(159),nt=n.n(tt),rt=n(160),at=n.n(rt),ct=Object(l.a)((function(e){return{avatar__block:{padding:e.spacing(2),borderRadius:e.spacing(1),"&>*":{width:"100%"}},userInfo__block:{padding:e.spacing(2)},useInfo__status:{width:"100%",justifyContent:"left",textTransform:"none"},avatar_img:{borderRadius:e.spacing(1),width:"100%",height:"100%",marginBottom:e.spacing(1)}}})),ot=Object(Le.g)((function(e){var t,n=ct(),c=Object(A.c)((function(e){return e.profile})),o=c.profile,i=c.formEdit,s=Object(A.c)((function(e){return e.auth.id})),l=e.match.params.userId,u=l||s,b=Object(A.b)();return Object(a.useEffect)((function(){return u&&b(V(u)),function(){return b(L(null))}}),[b,u]),o?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(re.a,{style:{textAlign:"center"},variant:"h5",children:"Profile "}),Object(r.jsxs)(d.a,{container:!0,spacing:2,children:[Object(r.jsx)(d.a,{item:!0,xs:3,children:Object(r.jsxs)(ne.a,{className:n.avatar__block,elevation:0,children:[Object(r.jsx)(j.a,{className:n.avatar_img,alt:"user foto",src:null===(t=o.photos)||void 0===t?void 0:t.large}),l?Object(r.jsx)(ze,{id:l,followed:o.followed}):Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{accept:"image/*",className:n.input,id:"contained-button-file",multiple:!0,type:"file",style:{display:"none"},onChange:function(e){return b((t=e.target.files[0],function(){var e=Object(f.a)(h.a.mark((function e(n){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(t);case 2:r=e.sent,console.log(r.data.photos),0===r.resultCode&&n(Y(r.data.photos));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));var t}}),Object(r.jsx)("label",{htmlFor:"contained-button-file",children:Object(r.jsx)(We.a,{variant:"contained",color:"primary",component:"span",children:Object(r.jsx)(nt.a,{})})}),i||Object(r.jsx)(We.a,{color:"secondary",variant:"contained",onClick:function(){return b(q(!0))},children:Object(r.jsx)(at.a,{})})]})]})}),Object(r.jsx)(d.a,{item:!0,xs:5,children:Object(r.jsx)(ne.a,{className:n.userInfo__block,children:i?Object(r.jsx)(He,{}):Object(r.jsx)(et,{routerId:l})})})]})]}):Object(r.jsx)(De,{})})),it=n(355),st=n(161),lt=n.n(st),ut=function(){var e,t=Object(a.useState)([]),n=Object(Ye.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(""),s=Object(Ye.a)(i,2),l=s[0],u=s[1],b=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx");Object(a.useEffect)((function(){b.addEventListener("message",(function(e){var t=JSON.parse(e.data);o((function(e){return[].concat(Object(xe.a)(e),Object(xe.a)(t))}))}))}),[]);var h=function(){var t=e.scrollHeight-e.clientHeight;e.scrollTop=t>0?t:0};return Object(a.useEffect)((function(){h()}),[c,h]),Object(r.jsx)(ne.a,{style:{width:600},children:Object(r.jsxs)(d.a,{item:!0,xs:12,style:{width:"100%",overflow:"hidden",height:"100%"},children:[Object(r.jsx)(d.a,{style:{overflowY:"scroll",height:"65vh",width:"100%"},ref:function(t){e=t},children:c.map((function(e,t){return Object(r.jsx)(it.a,{p:1,children:Object(r.jsxs)(d.a,{container:!0,direction:"row",children:[Object(r.jsx)(X.b,{to:"/profile/"+e.userId,children:Object(r.jsx)(j.a,{alt:"avatar",src:e.photo})}),Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginLeft:10},children:[Object(r.jsxs)("strong",{children:[" ",e.userName]}),e.message]})]})},t)}))}),Object(r.jsx)(it.a,{direction:"row",p:3,children:Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l&&(b.send(l),u(""))},children:[Object(r.jsx)(ae.a,{type:"text",style:{width:500},autoFocus:!0,variant:"outlined",placeholder:"white a message",size:"small",name:"message",onChange:function(e){return u(e.currentTarget.value)},value:l,id:"message__input"}),Object(r.jsx)(We.a,{type:"submit",children:Object(r.jsx)(lt.a,{color:"primary"})})]})})]})})},dt=Object(l.a)((function(e){return{app__container:{width:1200,margin:"0 auto",paddingTop:e.spacing(1)}}}));var jt=function(){var e=Object(A.c)((function(e){return e.app.isInit})),t=Object(A.c)((function(e){return e.auth.isAuth})),n=Object(A.c)((function(e){return e.auth.id}));console.log(n);var c=Object(A.b)();Object(a.useEffect)((function(){return c((function(e){var t=e(F());Promise.all([t]).then((function(){e(Be())}))}))}),[c]);var o=dt();return e?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ee,{}),Object(r.jsx)(d.a,{container:!0,className:o.app__container,children:Object(r.jsx)(d.a,{item:!0,xs:12,children:t?Object(r.jsxs)(Le.d,{children:[Object(r.jsx)(Le.b,{exact:!0,path:"/",render:function(){return Object(r.jsx)(Le.a,{to:"/profile"})}}),Object(r.jsx)(Le.b,{exact:!0,path:"/profile/"+n,render:function(){return Object(r.jsx)(Le.a,{to:"/profile"})}}),Object(r.jsx)(Le.b,{exact:!0,path:"/profile/:userId?",render:function(){return Object(r.jsx)(ot,{})}}),Object(r.jsx)(Le.b,{exact:!0,path:"/users",render:function(){return Object(r.jsx)(Je,{})}}),Object(r.jsx)(Le.b,{exact:!0,path:"/chat",render:function(){return Object(r.jsx)(ut,{})}}),Object(r.jsx)(Le.b,{exact:!0,path:"*",render:function(){return Object(r.jsx)("div",{children:"NOT FOUND 404"})}})]}):Object(r.jsx)(he,{})})})]}):Object(r.jsx)(De,{})},bt=Object(O.a)({reducer:{app:qe,users:Pe,auth:U,profile:$}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(X.a,{children:Object(r.jsx)(A.a,{store:bt,children:Object(r.jsx)(jt,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[308,1,2]]]);
//# sourceMappingURL=main.741a41f8.chunk.js.map
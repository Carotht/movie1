(this.webpackJsonpbc10=this.webpackJsonpbc10||[]).push([[11],{148:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return Kn}));var r=e(0),o=e(28),a=e(2),i=e(39),c=e(30),s=e(10),u=e(18),l=e(4),d=e(1);var f=Object(s.b)((function(n){return{loading:n.signinReducer.loading,error:n.signinReducer.error}}),(function(n){return{signIn:function(t,e){n(Object(c.b)(t,e))}}}))((function(n){var t=n.loading,e=Object(r.useState)({taiKhoan:"",matKhau:""}),c=Object(i.a)(e,2),s=c[0],f=c[1],p=function(n){var t=n.target,e=t.name,r=t.value;f(Object(a.a)(Object(a.a)({},s),{},Object(o.a)({},e,r)))};return localStorage.getItem("User")?Object(d.jsx)(l.a,{to:"/"}):t?Object(d.jsx)(u.a,{}):Object(d.jsx)("div",{className:"form-container sign-in-container",children:Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),n.signIn(s,n.props.history),console.log(12312)},children:[Object(d.jsx)("h1",{children:"Sign in"}),Object(d.jsx)("input",{type:"text",placeholder:"Username",name:"taiKhoan",onChange:p}),Object(d.jsx)("input",{type:"password",placeholder:"Password",name:"matKhau",onChange:p}),function(){var t=n.error;return console.log(t),t&&Object(d.jsx)("div",{className:"alert alert-danger",children:t.response.data})}(),Object(d.jsx)("button",{className:"button1 fs-5",type:"submit",children:"Sign In"})]})})})),p=e(15),m=e.n(p),b=e(19),v=e(23),h=e(14),g=function(){return{type:v.c}},j=function(n){return{type:v.d,payload:n}},y=function(n){return{type:v.b,payload:n}},O={data:""},x=function(n){return"object"==typeof window?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||O},T=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/g,S=/\/\*[^]*?\*\/|\s\s+|\n/g,E=function n(t,e){var r,o="",a="",i="",c=function(c){var u=t[c];"object"==typeof u?(r=e?e.replace(/([^,])+/g,(function(n){return c.replace(/([^,])+/g,(function(t){return/&/.test(t)?t.replace(/&/g,n):n?n+" "+t:t}))})):c,a+="@"==c[0]?"f"==c[1]?n(u,c):c+"{"+n(u,"k"==c[1]?"":e)+"}":n(u,r)):"@"==c[0]&&"i"==c[1]?o=c+" "+u+";":(c=c.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=n.p?n.p(c,u):c+":"+u+";"),s=c};for(var s in t)c(s);return i[0]?o+(r=e?e+"{"+i+"}":i)+a:o+a},A={},w=function n(t){var e="";for(var r in t)e+=r+("object"==typeof t[r]?n(t[r]):t[r]);return e},D=function(n,t,e,r,a){var i="object"==typeof n?w(n):n,c=A[i]||(A[i]=function(n){for(var t=0,e=11;t<n.length;)e=101*e+n.charCodeAt(t++)>>>0;return"go"+e}(i));if(!A[c]){var s="object"==typeof n?n:function(n){for(var t,e=[{}];t=T.exec(n.replace(S,""));)t[4]&&e.shift(),t[3]?e.unshift(e[0][t[3]]=e[0][t[3]]||{}):t[4]||(e[0][t[1]]=t[2]);return e[0]}(n);A[c]=E(a?Object(o.a)({},"@keyframes "+c,s):s,e?"":"."+c)}return function(n,t,e){-1==t.data.indexOf(n)&&(t.data=e?n+t.data:t.data+n)}(A[c],t,r),c},N=function(n,t,e){return n.reduce((function(n,r,o){var a=t[o];if(a&&a.call){var i=a(e),c=i&&i.props&&i.props.className||/^go/.test(i)&&i;a=c?"."+c:i&&"object"==typeof i?i.props?"":E(i,""):i}return n+r+(null==a?"":a)}),"")};function _(n){var t=this||{},e=n.call?n(t.p):n;return D(e.unshift?e.raw?N(e,[].slice.call(arguments,1),t.p):e.reduce((function(n,e){return e?Object.assign(n,e.call?e(t.p):e):n}),{}):e,x(t.target),t.g,t.o,t.k)}_.bind({g:1});var P,I,U,k=_.bind({k:1});function R(n,t){var e=this||{};return function(){var r=arguments;function o(a,i){var c=Object.assign({},a),s=c.className||o.className;e.p=Object.assign({theme:I&&I()},c),e.o=/ *go\d+/.test(s),c.className=_.apply(e,r)+(s?" "+s:""),t&&(c.ref=i);var u=c.as||n;return delete c.as,U&&u[0]&&U(c),P(u,c)}return t?t(o):o}}function C(){return(C=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function M(n,t){return t||(t=n.slice(0)),n.raw=t,n}var K,z=function(n,t){return function(n){return"function"===typeof n}(n)?n(t):n},L=function(){var n=0;return function(){return(++n).toString()}}(),F=function(){var n=void 0;return function(){if(void 0===n&&"undefined"!==typeof window){var t=matchMedia("(prefers-reduced-motion: reduce)");n=!t||t.matches}return n}}();!function(n){n[n.ADD_TOAST=0]="ADD_TOAST",n[n.UPDATE_TOAST=1]="UPDATE_TOAST",n[n.UPSERT_TOAST=2]="UPSERT_TOAST",n[n.DISMISS_TOAST=3]="DISMISS_TOAST",n[n.REMOVE_TOAST=4]="REMOVE_TOAST",n[n.START_PAUSE=5]="START_PAUSE",n[n.END_PAUSE=6]="END_PAUSE"}(K||(K={}));var B=new Map,H=function(n){if(!B.has(n)){var t=setTimeout((function(){B.delete(n),G({type:K.REMOVE_TOAST,toastId:n})}),1e3);B.set(n,t)}},V=function n(t,e){switch(e.type){case K.ADD_TOAST:return C({},t,{toasts:[e.toast].concat(t.toasts).slice(0,20)});case K.UPDATE_TOAST:return e.toast.id&&function(n){var t=B.get(n);t&&clearTimeout(t)}(e.toast.id),C({},t,{toasts:t.toasts.map((function(n){return n.id===e.toast.id?C({},n,e.toast):n}))});case K.UPSERT_TOAST:var r=e.toast;return t.toasts.find((function(n){return n.id===r.id}))?n(t,{type:K.UPDATE_TOAST,toast:r}):n(t,{type:K.ADD_TOAST,toast:r});case K.DISMISS_TOAST:var o=e.toastId;return o?H(o):t.toasts.forEach((function(n){H(n.id)})),C({},t,{toasts:t.toasts.map((function(n){return n.id===o||void 0===o?C({},n,{visible:!1}):n}))});case K.REMOVE_TOAST:return void 0===e.toastId?C({},t,{toasts:[]}):C({},t,{toasts:t.toasts.filter((function(n){return n.id!==e.toastId}))});case K.START_PAUSE:return C({},t,{pausedAt:e.time});case K.END_PAUSE:var a=e.time-(t.pausedAt||0);return C({},t,{pausedAt:void 0,toasts:t.toasts.map((function(n){return C({},n,{pauseDuration:n.pauseDuration+a})}))})}},J=[],q={toasts:[],pausedAt:void 0},G=function(n){q=V(q,n),J.forEach((function(n){n(q)}))},Q={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},W=function(n){return function(t,e){var r=function(n,t,e){return void 0===t&&(t="blank"),C({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0},e,{id:(null==e?void 0:e.id)||L()})}(t,n,e);return G({type:K.UPSERT_TOAST,toast:r}),r.id}},Y=function(n,t){return W("blank")(n,t)};Y.error=W("error"),Y.success=W("success"),Y.loading=W("loading"),Y.custom=W("custom"),Y.dismiss=function(n){G({type:K.DISMISS_TOAST,toastId:n})},Y.remove=function(n){return G({type:K.REMOVE_TOAST,toastId:n})},Y.promise=function(n,t,e){var r=Y.loading(t.loading,C({},e,null==e?void 0:e.loading));return n.then((function(n){return Y.success(z(t.success,n),C({id:r},e,null==e?void 0:e.success)),n})).catch((function(n){Y.error(z(t.error,n),C({id:r},e,null==e?void 0:e.error))})),n};var Z=function(n){var t=function(n){void 0===n&&(n={});var t=Object(r.useState)(q),e=t[0],o=t[1];Object(r.useEffect)((function(){return J.push(o),function(){var n=J.indexOf(o);n>-1&&J.splice(n,1)}}),[e]);var a=e.toasts.map((function(t){var e,r,o;return C({},n,n[t.type],t,{duration:t.duration||(null==(e=n[t.type])?void 0:e.duration)||(null==(r=n)?void 0:r.duration)||Q[t.type],style:C({},n.style,null==(o=n[t.type])?void 0:o.style,t.style)})}));return C({},e,{toasts:a})}(n),e=t.toasts,o=t.pausedAt;Object(r.useEffect)((function(){if(!o){var n=Date.now(),t=e.map((function(t){if(t.duration!==1/0){var e=(t.duration||0)+t.pauseDuration-(n-t.createdAt);if(!(e<0))return setTimeout((function(){return Y.dismiss(t.id)}),e);t.visible&&Y.dismiss(t.id)}}));return function(){t.forEach((function(n){return n&&clearTimeout(n)}))}}}),[e,o]);var a=Object(r.useMemo)((function(){return{startPause:function(){G({type:K.START_PAUSE,time:Date.now()})},endPause:function(){o&&G({type:K.END_PAUSE,time:Date.now()})},updateHeight:function(n,t){return G({type:K.UPDATE_TOAST,toast:{id:n,height:t}})},calculateOffset:function(n,t){var r,o=t||{},a=o.reverseOrder,i=void 0!==a&&a,c=o.gutter,s=void 0===c?8:c,u=o.defaultPosition,l=e.filter((function(t){return(t.position||u)===(n.position||u)&&t.height})),d=l.findIndex((function(t){return t.id===n.id})),f=l.filter((function(n,t){return t<d&&n.visible})).length;return(r=l.filter((function(n){return n.visible}))).slice.apply(r,i?[f+1]:[0,f]).reduce((function(n,t){return n+(t.height||0)+s}),0)}}}),[e,o]);return{toasts:e,handlers:a}};function $(){var n=M(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"]);return $=function(){return n},n}function X(){var n=M(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]);return X=function(){return n},n}function nn(){var n=M(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return nn=function(){return n},n}function tn(){var n=M(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]);return tn=function(){return n},n}var en=k(tn()),rn=k(nn()),on=k(X()),an=R("div")($(),(function(n){return n.primary||"#ff4b4b"}),en,rn,(function(n){return n.secondary||"#fff"}),on);function cn(){var n=M(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"]);return cn=function(){return n},n}function sn(){var n=M(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return sn=function(){return n},n}var un=k(sn()),ln=R("div")(cn(),(function(n){return n.secondary||"#e0e0e0"}),(function(n){return n.primary||"#616161"}),un);function dn(){var n=M(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"]);return dn=function(){return n},n}function fn(){var n=M(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]);return fn=function(){return n},n}function pn(){var n=M(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]);return pn=function(){return n},n}var mn=k(pn()),bn=k(fn()),vn=R("div")(dn(),(function(n){return n.primary||"#61d345"}),mn,bn,(function(n){return n.secondary||"#fff"}));function hn(){var n=M(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"]);return hn=function(){return n},n}function gn(){var n=M(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return gn=function(){return n},n}function jn(){var n=M(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]);return jn=function(){return n},n}function yn(){var n=M(["\n  position: absolute;\n"]);return yn=function(){return n},n}var On=R("div")(yn()),xn=R("div")(jn()),Tn=k(gn()),Sn=R("div")(hn(),Tn),En=function(n){var t=n.toast,e=t.icon,o=t.type,a=t.iconTheme;return void 0!==e?"string"===typeof e?Object(r.createElement)(Sn,null,e):e:"blank"===o?null:Object(r.createElement)(xn,null,Object(r.createElement)(ln,Object.assign({},a)),"loading"!==o&&Object(r.createElement)(On,null,"error"===o?Object(r.createElement)(an,Object.assign({},a)):Object(r.createElement)(vn,Object.assign({},a))))};function An(){var n=M(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n"]);return An=function(){return n},n}function wn(){var n=M(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]);return wn=function(){return n},n}var Dn=function(n){return"\n0% {transform: translate3d(0,"+-200*n+"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n"},Nn=function(n){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,"+-150*n+"%,-1px) scale(.6); opacity:0;}\n"},_n=R("div",r.forwardRef)(wn()),Pn=R("div")(An()),In=Object(r.memo)((function(n){var t=n.toast,e=n.position,o=n.style,a=n.children,i=null!=t&&t.height?function(n,t){var e=n.includes("top")?1:-1,r=F()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Dn(e),Nn(e)],o=r[1];return{animation:t?k(r[0])+" 0.35s cubic-bezier(.21,1.02,.73,1) forwards":k(o)+" 0.4s forwards cubic-bezier(.06,.71,.55,1)"}}(t.position||e||"top-center",t.visible):{opacity:0},c=Object(r.createElement)(En,{toast:t}),s=Object(r.createElement)(Pn,Object.assign({},t.ariaProps),z(t.message,t));return Object(r.createElement)(_n,{className:t.className,style:C({},i,o,t.style)},"function"===typeof a?a({icon:c,message:s}):Object(r.createElement)(r.Fragment,null,c,s))}));function Un(){var n=M(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]);return Un=function(){return n},n}!function(n,t,e,r){E.p=t,P=n,I=e,U=r}(r.createElement);var kn=_(Un()),Rn=function(n){var t=n.reverseOrder,e=n.position,o=void 0===e?"top-center":e,a=n.toastOptions,i=n.gutter,c=n.children,s=n.containerStyle,u=n.containerClassName,l=Z(a),d=l.toasts,f=l.handlers;return Object(r.createElement)("div",{style:C({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},s),className:u,onMouseEnter:f.startPause,onMouseLeave:f.endPause},d.map((function(n){var e,a=n.position||o,s=function(n,t){var e=n.includes("top"),r=e?{top:0}:{bottom:0},o=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return C({left:0,right:0,display:"flex",position:"absolute",transition:F()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY("+t*(e?1:-1)+"px)"},r,o)}(a,f.calculateOffset(n,{reverseOrder:t,gutter:i,defaultPosition:o})),u=n.height?void 0:(e=function(t){f.updateHeight(n.id,t.height)},function(n){n&&setTimeout((function(){var t=n.getBoundingClientRect();e(t)}))});return Object(r.createElement)("div",{ref:u,className:n.visible?kn:"",key:n.id,style:s},"custom"===n.type?z(n.message,n):c?c(n):Object(r.createElement)(In,{toast:n,position:a}))})))},Cn=Y;var Mn=Object(s.b)((function(n){return{loading:n.signupReducer.loading,error:n.signupReducer.error}}),null)((function(n){var t=Object(r.useState)({taiKhoan:"",matKhau:"",email:"",soDt:"",maNhom:"GP09",maLoaiNguoiDung:"KhachHang",hoTen:""}),e=Object(i.a)(t,2),c=e[0],l=e[1],f=Object(s.c)(),p=function(n){var t=n.target,e=t.name,r=t.value;console.log(r),r?l(Object(a.a)(Object(a.a)({},c),{},Object(o.a)({},e,r))):Cn.error("l\xe0m \u01a1n l\xe0m ph\u01b0\u1edbc \u0111i\u1ec1n v\xe0o ".concat(e," gi\xfap em"))};return Object(s.d)((function(n){return n.signupReducer.loading}))?Object(d.jsx)(u.a,{}):Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"form-container sign-up-container ",children:Object(d.jsxs)("form",{onSubmit:function(t){var e,r=n.error;t.preventDefault(),r&&Cn.error(r.response.data),f((e=c,localStorage.getItem("User")&&JSON.parse(localStorage.getItem("User")).accessToken,function(){var n=Object(b.a)(m.a.mark((function n(t){var r;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t(g()),n.next=4,h.a.post("QuanLyNguoiDung/DangKy",e);case 4:"OK"===(r=n.sent).statusText?t(j(r.data)):t(y(r)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),t(y(n.t0));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}()))},className:"row",children:[Object(d.jsx)("h1",{children:"Create Account"}),function(){var t=n.error;console.log(c),setTimeout((function(){t?Cn.error(t.response.data):c.taiKhoan&&c.matKhau&&c.hoTen&&c.email&&c.soDt?(Cn.success("321321"),document.getElementById("container").classList.remove("right-panel-active")):Cn.error("l\xe0m \u01a1n l\xe0m ph\u01b0\u1edbc \u0111i\u1ec1n v\xe0o gi\xfap em")}),2e3)}(),Object(d.jsx)("input",{className:"col-2",onChange:p,type:"text",placeholder:"Username",name:"taiKhoan"}),Object(d.jsx)("input",{className:"col-2",onChange:p,type:"password",placeholder:"Password",name:"matKhau"}),Object(d.jsx)("input",{onChange:p,type:"text",placeholder:"Name",name:"hoTen"}),Object(d.jsx)("input",{onChange:p,type:"email",placeholder:"Email",name:"email"}),Object(d.jsx)("input",{onChange:p,type:"text",placeholder:"Phone Number",name:"soDt"}),Object(d.jsx)("button",{className:"button1",children:"Sign Up"}),Object(d.jsx)(Rn,{position:"bottom-left",reverseOrder:!1})]})})})}));function Kn(n){var t=n;return Object(d.jsx)("div",{className:"loginPage",children:Object(d.jsxs)("div",{className:"container",id:"container",children:[Object(d.jsx)(f,{props:t}),Object(d.jsx)(Mn,{}),Object(d.jsx)("div",{className:"overlay-container",children:Object(d.jsxs)("div",{className:"overlay",children:[Object(d.jsxs)("div",{className:"overlay-panel overlay-left",children:[Object(d.jsx)("h1",{children:"Welcome Back!"}),Object(d.jsxs)("p",{children:["To keep connected with us ",Object(d.jsx)("br",{})," please login with your personal info"]}),Object(d.jsx)("button",{className:" button1",onClick:function(){document.getElementById("container").classList.remove("right-panel-active")},children:"Sign In"})]}),Object(d.jsxs)("div",{className:"overlay-panel overlay-right",children:[Object(d.jsx)("h1",{children:"Hello, Friend!"}),Object(d.jsxs)("p",{children:["Enter your personal details ",Object(d.jsx)("br",{}),"And start journey with us"]}),Object(d.jsx)("button",{className:"button1",onClick:function(){document.getElementById("container").classList.add("right-panel-active")},children:"Sign Up"})]})]})})]})})}}}]);
//# sourceMappingURL=11.138585ad.chunk.js.map
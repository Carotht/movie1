(this.webpackJsonpbc10=this.webpackJsonpbc10||[]).push([[5],{122:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var c=a(24),i=a(25),n=a(27),s=a(26),o=a(0),l=a(6),r=a(1),d=function(e){Object(n.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.movie,t=e.trailer,a=(t.replace("watch?v=","embed/"),t.replace("youtu.be/","youtube.com/embed/"));return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("img",{className:"img-fluid",src:e.hinhAnh,alt:"L\u1ed7i T\u1ea3i \u1ea2nh"}),Object(r.jsxs)("div",{className:"face face2",children:[Object(r.jsx)("div",{className:"trailer",children:Object(r.jsx)("i",{className:"far fa-play-circle btn","data-toggle":"tooltip",title:"Play Trailer","data-bs-toggle":"modal","data-bs-target":"#"+e.biDanh,onClick:function(){document.getElementById("".concat(e.biDanh,"1")).setAttribute("src","".concat(a))}})}),Object(r.jsx)(l.b,{to:"/detail/".concat(e.maPhim),"data-toggle":"tooltip",title:e.tenPhim,children:Object(r.jsx)("h2",{children:e.tenPhim})}),Object(r.jsx)("span",{className:"ageType mt-3 mb-0",children:"C16"}),Object(r.jsxs)("p",{className:"text-white mt-3 mb-3",style:{fontSize:"14px",letterSpacing:"1px"},children:["Ng\xe0y Kh\u1edfi Chi\u1ebfu:"," ",new Date(e.ngayKhoiChieu).toLocaleDateString()]}),Object(r.jsxs)("span",{style:{fontSize:"14px",letterSpacing:"1px"},className:"text-white",children:[Object(r.jsx)("i",{className:"fas fa-star"})," ",e.danhGia]}),Object(r.jsx)("button",{className:"button1",children:Object(r.jsx)(l.b,{to:"/detail/".concat(e.maPhim),children:"Detail"})})]}),Object(r.jsx)("div",{className:"modal fade",id:e.biDanh,tabIndex:-1,"aria-labelledby":"exampleModalLabel","aria-hidden":"true",onClick:function(){document.getElementById("".concat(e.biDanh,"1")).setAttribute("src","")},children:Object(r.jsx)("div",{className:"modal-dialog modal-dialog-centered justify-content-center",role:"document",children:Object(r.jsx)("div",{className:"modal-content",children:Object(r.jsxs)("div",{className:"modal-body",children:[Object(r.jsx)("i",{className:"fas fa-times-circle btn ","data-bs-dismiss":"modal","aria-label":"Close"}),Object(r.jsx)("iframe",{id:e.biDanh+"1",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})})})})]})}}]),a}(o.Component)},123:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var c=a(32),i=a(14),n=function(){return function(e){e(s()),i.a.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP09").then((function(t){console.log(t.data),e(o(t.data))})).catch((function(t){e(l(t))}))}},s=function(){return{type:c.b}},o=function(e){return{type:c.c,payload:e}},l=function(e){return{type:c.a,payload:e}}},145:function(e,t,a){"use strict";a.r(t);var c=a(24),i=a(25),n=a(27),s=a(26),o=a(0),l=a.n(o),r=a(122),d=a(18),u=a(123),m=a(10),b=a(1),h=function(e){Object(n.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchData()}},{key:"renderListMovie",value:function(){var e=this.props,t=e.loading,a=e.data;return t?Object(b.jsx)(d.a,{}):null===a||void 0===a?void 0:a.map((function(e){return Object(b.jsx)("div",{className:"col-3 colMovie",children:Object(b.jsx)(r.a,{movie:e},e.maPhim)})}))}},{key:"render",value:function(){var e=this;return Object(b.jsx)(l.a.Fragment,{children:Object(b.jsx)("div",{className:"movieItem pt-5 bg-dark",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"mb-4 ",children:[Object(b.jsx)("button",{id:"dangchieu",className:" button1 active ",onClick:function(){e.props.dangChieu(),document.getElementById("sapchieu").classList.remove("active"),document.getElementById("dangchieu").classList.add("active")},children:"Now Showing"}),Object(b.jsx)("button",{id:"sapchieu",className:"button1 ms-5",onClick:function(){e.props.sapChieu(),document.getElementById("sapchieu").classList.add("active"),document.getElementById("dangchieu").classList.remove("active")},children:"Coming Soon"})]}),Object(b.jsx)("div",{className:"row",children:this.renderListMovie()})]})})})}}]),a}(o.Component);t.default=Object(m.b)((function(e){return{loading:e.listMovieReducer.loading,data:e.listMovieReducer.data}}),(function(e){return{fetchData:function(){e(Object(u.a)())},dangChieu:function(){e({type:"DangChieu"})},sapChieu:function(){e({type:"SapChieu"})}}}))(h)}}]);
//# sourceMappingURL=5.9a469213.chunk.js.map
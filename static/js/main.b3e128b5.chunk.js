(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{14:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__3ugCZ",imageGalleryItemImage:"ImageGalleryItem_imageGalleryItemImage__2Qr0z"}},15:function(e,t,a){e.exports={overlay:"Modal_overlay__14w0Y",modal:"Modal_modal__3ksDs"}},26:function(e,t,a){e.exports={btn:"Button_btn__38sP0"}},28:function(e,t,a){e.exports={loader:"Loader_loader__1sK3g"}},30:function(e,t,a){e.exports={list:"ImageGallery_list__2vglx"}},35:function(e,t,a){},36:function(e,t,a){},5:function(e,t,a){e.exports={searchBar:"SearchBar_searchBar__1P6xg",btnSearch:"SearchBar_btnSearch__3wKQA",svg:"SearchBar_svg__2KSgc",input:"SearchBar_input__3HLt1"}},77:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),i=a(9),o=a.n(i),s=(a(35),a(4)),l=(a(36),a(5)),u=a.n(l),d=["title","titleId"];function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m.apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function f(e,t){var a=e.title,c=e.titleId,i=b(e,d);return r.createElement("svg",m({width:24,height:24,xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",ref:t,"aria-labelledby":c},i),a?r.createElement("title",{id:c},a):null,n||(n=r.createElement("path",{d:"M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"})))}var j=r.forwardRef(f),g=(a.p,a(1)),h=function(e){var t=e.onSubmit,a=Object(r.useState)(""),n=Object(s.a)(a,2),c=n[0],i=n[1];return Object(g.jsx)("header",{className:u.a.searchBar,children:Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(c),i("")},className:u.a.form,children:[Object(g.jsx)("button",{type:"submit",className:u.a.btnSearch,children:Object(g.jsx)("span",{className:u.a.btnLabel,children:Object(g.jsx)(j,{width:"20",height:"20",className:u.a.svg})})}),Object(g.jsx)("input",{className:u.a.input,onChange:function(e){var t=e.target.value;i(t)},name:"query",value:c,type:"text",placeholder:"Search images and photos"})]})})},p=a(11),O=a(13),v=a.n(O),x=a(16),y=a(25),_=a(14),w=a.n(_);var I=function(e){var t=e.tags,a=e.webformatURL,n=e.onClick;return Object(g.jsx)("li",{className:w.a.imageGalleryItem,children:Object(g.jsx)("img",{className:w.a.imageGalleryItemImage,src:a,alt:t,onClick:n})})},L=a(26),S=a.n(L),k=function(e){var t=e.title,a=e.onClick;return Object(g.jsx)("button",{className:S.a.btn,onClick:a,type:"button",children:t})},N=a(27),E=a.n(N),R=a(28),B=a.n(R),C=function(){return Object(g.jsx)("div",{className:B.a.loader,children:Object(g.jsx)(E.a,{type:"ThreeDots",color:"#1b6e10",height:80,width:80})})},G=a(15),P=a.n(G),U=document.getElementById("modal-root"),M=function(e){var t=e.closeModal,a=e.children;Object(r.useEffect)((function(){return window.addEventListener("keydown",n),function(){window.addEventListener("keydown",n)}}),[]);var n=function(e){if("Escape"===e.code)return t();e.currentTarget===e.target&&t()};return Object(i.createPortal)(Object(g.jsx)("div",{className:P.a.overlay,onClick:n,children:Object(g.jsx)("div",{className:P.a.modal,children:a})}),U)},q=a(29),z=a.n(q).a.create({baseURL:"https://pixabay.com/api/",params:{key:"24480892-2cf9ff0ac9dbac3af2a958edd",per_page:12,image_type:"photo",orientation:"horizontal"}}),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return z.get("/",{params:{page:e,q:t}})},K=a(30),A=a.n(K),J=function(e){var t=e.url,a=e.tags;return Object(g.jsx)("img",{src:t,alt:a})},Q={items:[],isLoading:!1,error:null,finish:!1,modalOpen:!1,largeImageURL:""},T=function(e){var t=e.queryProp,a=Object(r.useState)(Q),n=Object(s.a)(a,2),c=n[0],i=n[1],o=Object(r.useState)(1),l=Object(s.a)(o,2),u=l[0],d=l[1];Object(r.useEffect)((function(){}),[]),Object(r.useEffect)((function(){t&&(i({items:[],isLoading:!0,finish:!1}),m())}),[t]),Object(r.useEffect)((function(){t&&m()}),[u]);var m=function(){var e=Object(y.a)(v.a.mark((function e(){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D(u,t);case 3:a=e.sent,n=a.data,i((function(e){var t=e.items,a={items:[].concat(Object(x.a)(t),Object(x.a)(n.hits)),isLoading:!1,error:!1};return n.hits.length<12&&(a.finish=!0),n.hits.length||(a.error=!0),a})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),i({error:e.t0,isLoading:!1});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),b=c.items,f=c.error,j=c.isLoading,h=c.finish,O=c.modalOpen,_=c.largeImageURL,w=c.tags,L=b.map((function(e){return Object(g.jsx)(I,{tags:e.tags,webformatURL:e.webformatURL,onClick:function(){return t=e.id,void i((function(e){var a=e.items.find((function(e){return e.id===t})),n=a.largeImageURL,r=a.tags;return e.modalOpen=!0,e.largeImageURL=n,e.tags=r,Object(p.a)({},e)}));var t}},e.id)}));return Object(g.jsxs)("div",{children:[console.log("render"),f&&Object(g.jsx)("p",{children:"Impossible to load the pictures!"}),!f&&Object(g.jsx)("ul",{className:A.a.list,children:L}),j&&Object(g.jsx)(C,{}),!h&&0!==b.length&&Object(g.jsx)(k,{onClick:function(){d((function(e){return e+1})),c.isLoading=!0,i(Object(p.a)({},c))},title:"Load more"}),O&&Object(g.jsx)(M,{closeModal:function(e){c.modalOpen=!1,i(Object(p.a)({},c))},children:Object(g.jsx)(J,{url:_,tags:w})})]})},H=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(h,{onSubmit:function(e){n(e)}}),Object(g.jsx)(T,{queryProp:a})]})};o.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(H,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.b3e128b5.chunk.js.map
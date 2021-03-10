(this["webpackJsonpzarla-homepage-redux"]=this["webpackJsonpzarla-homepage-redux"]||[]).push([[0],{103:function(e,t,r){},105:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(28),o=r.n(a),s=(r(70),r(61)),i=r(6),l=r(64),u=r(9),d=r(55),b=r(14),j=Object(b.b)("COLOR_TOGGLED"),h=Object(b.b)("COLORS_REQUESTED"),O=Object(b.b)("COLORS_RECEIVED"),f=Object(b.b)("COLORS_REQUEST_FAILED"),p=r(4),v=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),r=t[0],c=t[1],a=Object(u.c)(),o=Object(d.useDebouncedCallback)(a,500);return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:"============"}),Object(p.jsx)("div",{children:"Search Colors"}),Object(p.jsx)("input",{"aria-label":"Enter search keywords",value:r,onChange:function(e){var t=e.currentTarget.value;c(t),t&&o.callback(h(t))}})]})},x=r(62),g=r(63),m=r(56),w=r(16),y=r(8),k={colors:Object(b.c)({colors:[],status:"idle",error:null},(function(e){e.addCase(j,(function(e,t){var r=e.colors.find((function(e){return e.id===t.payload.id}));r&&(r.selected=!r.selected)})),e.addCase(h,(function(e){e.status="requesting"})),e.addCase(O,(function(e,t){e.colors=t.payload,e.status="succeeded"})),e.addCase(f,(function(e,t){e.error=t.payload,e.status="failed"}))}))};Object(y.c)(Object(w.a)({},k));function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(y.c)(Object(w.a)(Object(w.a)({},k),e))}var E=r(15),S=r.n(E),T=r(19),R=r(65),L=r(57),D=r(58),N=r(59),_=r(60),A=r.n(_)()(fetch),F=function(){function e(){Object(D.a)(this,e),this.controller=void 0,this.controller=new AbortController}return Object(N.a)(e,[{key:"abort",value:function(){this.controller.abort()}},{key:"execute",value:function(){var e=Object(L.a)(S.a.mark((function e(t){var r,n,c,a,o,s,i,l=arguments;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:{},n=r.body,c=Object(R.a)(r,["body"]),a={"Content-Type":"application/json"},o=Object(w.a)(Object(w.a)({method:n?"POST":"GET"},c),{},{headers:Object(w.a)(Object(w.a)({},a),c.headers),signal:this.controller.signal,retryOn:[503]}),n&&(o.body=JSON.stringify(n)),e.prev=5,e.next=8,A(t,o);case 8:if(i=e.sent,console.log("api response: ",i),!i.ok){e.next=16;break}return e.next=13,i.json();case 13:return s=e.sent,console.log("data",s),e.abrupt("return",s);case 16:throw new Error(i.statusText);case 19:return e.prev=19,e.t0=e.catch(5),e.abrupt("return",Promise.reject(e.t0.message?e.t0.message:s));case 22:case"end":return e.stop()}}),e,this,[[5,19]])})));return function(t){return e.apply(this,arguments)}}()}]),e}();function G(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[r],e[r]=n}return e}var I=S.a.mark(W),J=S.a.mark(z),M=S.a.mark(B);function W(e){var t,r,n,c;return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=new F,a.prev=1,a.next=4,t.execute("http://localhost:4000/colors");case 4:return r=a.sent,n=r.colors,c=G(n),console.log(c),a.next=10,Object(T.d)(O(c.slice(0,e.payload.length)));case 10:a.next=16;break;case 12:return a.prev=12,a.t0=a.catch(1),a.next=16,Object(T.d)(f(a.t0));case 16:return a.prev=16,Object(T.c)()&&t.abort(),a.finish(16);case 19:case"end":return a.stop()}}),I,null,[[1,12,16,19]])}function z(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.e)(h,W);case 2:case"end":return e.stop()}}),J)}function B(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.a)([Object(T.b)(z)]);case 2:case"end":return e.stop()}}),M)}var P=u.d,Q=function(){var e=P((function(e){return e.colors})),t=P((function(e){return e.colors.status})),r=Object(u.c)();Object(n.useEffect)((function(){"idle"===t&&r(h("default"))}),[t,r]);var c=e.colors.map((function(e){return Object(p.jsx)("div",{className:"color-wrapper",style:{width:"100px",height:"100px",userSelect:"none"},children:Object(p.jsx)("div",{className:"color",style:{width:"100%",height:"100%",backgroundColor:e.hex,cursor:"pointer",outline:e.selected?"5px green solid":"none"},onClick:function(){return r(j(e))},children:e.name})},e.id)}));return Object(p.jsxs)("section",{className:"colors-list",children:[Object(p.jsx)("h2",{children:"Colors!"}),Object(p.jsxs)("p",{children:["status of asyncFetchColors: ",t]}),Object(p.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:c})]})};r(103);var U=function(){return Object(p.jsx)(s.a,{children:Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(i.d,{children:[Object(p.jsx)(i.b,{exact:!0,path:"/",render:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(v,{}),Object(p.jsx)(Q,{})]})}}),Object(p.jsx)(i.a,{to:"/"})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={},r=Object(g.a)(t),n=r.run,c=[r],a=[Object(m.a)({createReducer:C,runSaga:n})],o=Object(b.a)({reducer:C(),middleware:[].concat(Object(x.a)(Object(b.d)()),c),preloadedState:e,devTools:!1,enhancers:a});return r.run(B),o}({});o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(u.a,{store:q,children:Object(p.jsx)(U,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,t,r){}},[[105,1,2]]]);
//# sourceMappingURL=main.e737e002.chunk.js.map
(this.webpackJsonpdripping=this.webpackJsonpdripping||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n(1),a=n.n(s),i=n(4),o=n.n(i),r=(n(10),n(2));n(11);var l=function(){var t=Object(s.useState)(30),e=Object(r.a)(t,2),n=e[0],a=e[1],i=Object(s.useState)(!0),o=Object(r.a)(i,2),l=o[0],u=o[1],b=Object(s.useState)(),d=Object(r.a)(b,2),j=d[0],p=d[1],h=new Audio("./beep.mp3"),O=function(){h.play()};return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)("div",{className:"drip-container",children:l&&Object(c.jsx)("div",{className:"drop",style:{"animation-duration":"".concat(60/n,"s")},children:" "})}),Object(c.jsxs)("div",{className:"control-panel",children:[Object(c.jsxs)("p",{className:"text",children:[n," drops per minute"]}),Object(c.jsx)("button",{type:"button",className:"frequency",onClick:function(){n>0&&a(n-1)},children:"-"}),Object(c.jsx)("button",{type:"button",className:"frequency",onClick:function(){a(n+1)},children:"+"})]}),Object(c.jsx)("div",{className:"control-panel",children:Object(c.jsx)("button",{type:"button",className:"start-button",onClick:function(){u(!l),l&&(clearInterval(j),p(void 0))},children:"Start/Stop"})}),Object(c.jsx)("div",{className:"control-panel",children:Object(c.jsx)("button",{type:"button",className:"start-button",onClick:function(){h.play().then((function(){return h.pause()})),!j&&p(setInterval(O,60/n*1e3))},children:"beep"})})]})})},u=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),s(t),a(t),i(t)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(l,{})}),document.getElementById("root")),u()}},[[12,1,2]]]);
//# sourceMappingURL=main.67973ac1.chunk.js.map
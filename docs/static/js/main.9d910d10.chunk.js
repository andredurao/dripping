(this.webpackJsonpdripping=this.webpackJsonpdripping||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),s=n(4),r=n.n(s),o=(n(10),n(2));n(11);function l(e){localStorage.setItem("drippingFrequency",e)}var u=function(){var e=Object(a.useState)(function(){var e=localStorage.getItem("drippingFrequency");return e?parseInt(e):60}()),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)(!1),r=Object(o.a)(s,2),u=r[0],d=r[1],p=Object(a.useState)(),b=Object(o.a)(p,2),j=b[0],h=b[1],O=new Audio("./beep.mp3"),m=function(){O.play()};return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)("div",{className:"drip-container",children:u&&Object(c.jsx)("div",{className:"drop",style:{"animation-duration":"".concat(60/n,"s")},children:" "})}),Object(c.jsxs)("div",{className:"control-panel",children:[Object(c.jsxs)("p",{className:"text",children:[n," drops per minute"]}),Object(c.jsx)("button",{type:"button",className:"frequency",disabled:u,onClick:function(){n>0&&(l(n-1),i(n-1))},children:"-"}),Object(c.jsx)("button",{type:"button",className:"frequency",disabled:u,onClick:function(){l(n+1),i(n+1)},children:"+"})]}),Object(c.jsx)("div",{className:"control-panel",children:Object(c.jsx)("button",{type:"button",className:"start-button",onClick:function(){(d(!u),u)?(clearInterval(j),h(void 0)):(O.play().then((function(){return O.pause()})),!j&&h(setInterval(m,60/n*1e3)))},children:u?"Stop \u23f9":"Start \u25b6\ufe0f"})})]})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(u,{})}),document.getElementById("root")),d()}},[[12,1,2]]]);
//# sourceMappingURL=main.9d910d10.chunk.js.map
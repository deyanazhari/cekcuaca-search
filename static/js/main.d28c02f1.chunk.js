(this.webpackJsonpwebcuaca=this.webpackJsonpwebcuaca||[]).push([[0],{46:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var c=t(3),n=t(21),s=t.n(n),r=t(4),i=t.n(r),o=t(6),h=t(11),u=t(22),j=t.n(u),l=(t(20),function(){var e=Object(o.a)(i.a.mark((function e(a){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://api.openweathermap.org/data/2.5/weather",{params:{q:a,units:"metric",APPID:"58d2b33e14c4a78e0c1ecb0e089bac14"}});case 2:return t=e.sent,c=t.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),b=t(54),d=t(53),p=(t(46),t(1)),m=function(){var e=Object(c.useState)(""),a=Object(h.a)(e,2),t=a[0],n=a[1],s=Object(c.useState)({}),r=Object(h.a)(s,2),u=r[0],j=r[1],m=function(){var e=Object(o.a)(i.a.mark((function e(a){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==a.key){e.next=6;break}return e.next=3,l(t);case 3:c=e.sent,j(c),n("");case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(p.jsx)("body",{children:Object(p.jsx)("div",{class:"Back jumbotron-fluid",children:Object(p.jsxs)("div",{class:"container",children:[Object(p.jsxs)("div",{class:"container",children:[Object(p.jsx)("h1",{className:"navibar-brand",href:"/",children:"Cek Cuaca"}),Object(p.jsx)(b.a,{outline:!0,color:"warning",size:"sm",className:"home",active:!0,href:"https://deyanazhari.github.io/cekcuaca/",children:"Home"}),Object(p.jsx)(b.a,{outline:!0,color:"warning",size:"sm",className:"about",active:!0,href:"https://deyanazhari.github.io/cekcuaca-about/",children:"About"}),Object(p.jsx)(b.a,{outline:!0,color:"warning",size:"sm",className:"cek",active:!0,href:"https://deyanazhari.github.io/cekcuaca-search/",children:"Cek Cuaca"}),Object(p.jsx)(d.a,{className:"navibar-img",children:Object(p.jsx)("img",{width:"80px",src:"./logo.png"})}),Object(p.jsx)("h1",{className:"contoh",children:" (Contoh: Jakarta) "})]}),Object(p.jsxs)("div",{className:"main-container",children:[Object(p.jsx)("input",{type:"text",className:"search",placeholder:"search...",value:t,onChange:function(e){return n(e.target.value)},onKeyPress:m}),u.main&&Object(p.jsxs)("div",{className:"city",children:[Object(p.jsxs)("h2",{className:"city-name",children:[Object(p.jsx)("span",{children:u.name}),Object(p.jsx)("sup",{children:u.sys.country})]}),Object(p.jsxs)("div",{className:"city-temp",children:[Math.round(u.main.temp),Object(p.jsx)("sup",{children:"\xb0C"})]}),Object(p.jsxs)("div",{className:"info",children:[Object(p.jsx)("img",{className:"city-icon",src:"https://openweathermap.org/img/wn/".concat(u.weather[0].icon,"@2x.png"),alt:u.weather[0].description}),Object(p.jsx)("p",{children:u.weather[0].description})]})]})]})]})})})};t(50);s.a.render(Object(p.jsx)(m,{}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.d28c02f1.chunk.js.map
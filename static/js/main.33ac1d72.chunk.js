(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),o=n.n(s),a=n(6),r=n(8),i=n(1),u=(n(13),n(14),n(4)),l=n.n(u),b=n(0),d=function(t){var e=t.good;return Object(b.jsx)("li",{"data-cy":"Good",children:e})};!function(t){t.default="default",t.name="name",t.length="length"}(c||(c={}));var h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(){var t=Object(i.useState)(c.default),e=Object(a.a)(t,2),n=e[0],s=e[1],o=Object(i.useState)(!1),u=Object(a.a)(o,2),j=u[0],f=u[1],g=function(t,e,n){var s=Object(r.a)(t);return e&&s.sort((function(t,n){switch(e){case c.name:return t.localeCompare(n);case c.length:return t.length-n.length;case c.default:default:return 0}})),n&&(s=s.reverse()),s}(h,n,j);return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":n!==c.name}),onClick:function(){return s(c.name)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":n!==c.length}),onClick:function(){return s(c.length)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!j}),onClick:function(){return f(!j)},children:"Reverse"}),(n!==c.default||j)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){return s(c.default),void f(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:g.map((function(t){return Object(b.jsx)(d,{good:t},t)}))})]})};o.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.33ac1d72.chunk.js.map
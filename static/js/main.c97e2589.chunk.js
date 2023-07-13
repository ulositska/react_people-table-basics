(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{37:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);n(28),n(29);var c=n(27),r=n.n(c),a=n(10),s=n(3),i=(n(37),n(14)),j=n.n(i),l=n(2),o=function(e){var t=e.title,n=e.redirectTo;return Object(l.jsx)(a.b,{className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},to:"".concat(n),children:t})},b=function(){return Object(l.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(o,{title:"Home",redirectTo:"/"}),Object(l.jsx)(o,{title:"People",redirectTo:"/people"})]})})})},d=function(){return Object(l.jsxs)("div",{"data-cy":"app",children:[Object(l.jsx)(b,{}),Object(l.jsx)("main",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(s.a,{})})})]})},h=n(0),u=function(){var e=Object(s.n)(),t=Object(s.l)();return Object(h.useEffect)((function(){"/home"===t.pathname&&e("/")}),[t,e]),null},O=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{}),Object(l.jsx)("h1",{className:"title",children:"Home Page"})]})},p=n(4),x=n(7),m=n(5);function f(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}n(39);var v=function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(l.jsx)("div",{className:"Loader__content"})})},g=function(e){var t=e.person;return Object(l.jsx)(a.a,{to:"/people/".concat(null===t||void 0===t?void 0:t.slug),className:j()({"has-text-danger":"f"===(null===t||void 0===t?void 0:t.sex)}),children:null===t||void 0===t?void 0:t.name})},N=function(e){var t=e.person,n=e.personSlug,c=t.sex,r=t.born,a=t.died,s=t.mother,i=t.father,o=t.motherName,b=t.fatherName,d=n===t.slug;return Object(l.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":d}),children:[Object(l.jsx)("td",{children:Object(l.jsx)(g,{person:t})}),Object(l.jsx)("td",{children:c}),Object(l.jsx)("td",{children:r}),Object(l.jsx)("td",{children:a}),Object(l.jsx)("td",{children:s?Object(l.jsx)(g,{person:s}):Object(l.jsx)("p",{children:o||"-"})}),Object(l.jsx)("td",{children:i?Object(l.jsx)(g,{person:i}):Object(l.jsx)("p",{children:b||"-"})})]})},w=function(e){var t=e.people,n=Object(s.p)().personSlug;return Object(l.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Sex"}),Object(l.jsx)("th",{children:"Born"}),Object(l.jsx)("th",{children:"Died"}),Object(l.jsx)("th",{children:"Mother"}),Object(l.jsx)("th",{children:"Father"})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsx)(N,{person:e,personSlug:n},e.slug)}))})]})},y=n(25),S=function(){var e=Object(h.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1],r=Object(h.useState)(null),a=Object(m.a)(r,2),s=a[0],i=a[1],j=Object(h.useState)(!1),o=Object(m.a)(j,2),b=o[0],d=o[1],u=function(){var e=Object(x.a)(Object(p.a)().mark((function e(){var t;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),i("Something went wrong with ".concat(String(e.t0)));case 10:return e.prev=10,d(!0),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();Object(h.useEffect)((function(){u()}),[]);var O=function(e){return e.map((function(t){var n=e.find((function(e){return e.name===t.motherName})),c=e.find((function(e){return e.name===t.fatherName}));return Object(y.a)(Object(y.a)({},t),{},{mother:n||null,father:c||null})}))}(n),g=b&&!s&&0===n.length;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"People Page"}),Object(l.jsx)("div",{className:"block",children:Object(l.jsxs)("div",{className:"box table-container",children:[s&&Object(l.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:s}),g&&Object(l.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),b?Object(l.jsx)(w,{people:O}):Object(l.jsx)(v,{})]})})]})},k=function(){return Object(l.jsx)("h1",{className:"title",children:"Page not found"})},P=Object(a.c)([{path:"/",element:Object(l.jsx)(d,{}),children:[{path:"/",element:Object(l.jsx)(O,{})},{path:"/home",element:Object(l.jsx)(O,{})},{path:"/people",element:Object(l.jsx)(S,{})},{path:"/people/:personSlug",element:Object(l.jsx)(S,{})},{path:"/*",element:Object(l.jsx)(k,{})}]}]),T=function(){return Object(l.jsx)(s.c,{router:P})};r.a.render(Object(l.jsx)(T,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.c97e2589.chunk.js.map
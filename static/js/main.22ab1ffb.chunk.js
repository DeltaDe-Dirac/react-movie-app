(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{52:function(e,n,t){},53:function(e,n,t){},55:function(e,n,t){},73:function(e,n,t){},82:function(e,n,t){},83:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(15),i=t.n(r),o=(t(52),t(53),t(54),t(16)),s=(t(55),t(45)),l=t(92),j=t(39),u=t.n(j),b=t(87),d=t(88),h=t(89),f=(t(73),t(90)),g=t(91),m=t(86),O=t(93),v=t(40),x=t(19),p=t(20),w=t(47),y=t(46),k=t(41),C=t.n(k),S=t(4),A=function(e){Object(w.a)(t,e);var n=Object(y.a)(t);function t(e){var a;return Object(x.a)(this,t),(a=n.call(this,e)).handleChange=e.handleChange,a}return Object(p.a)(t,[{key:"render",value:function(){var e=this;return Object(S.jsx)(C.a,{options:[{key:0,label:"First Name"},{key:1,label:"Last Name"},{key:2,label:"Age"},{key:3,label:"Descending"}],name:"sort-criteria",placeholder:"Sort By:",handleOnChange:function(n){return e.handleChange(n)}})}}]),t}(c.a.Component);function B(e){var n=e.onChange,t=e.onSelect;return Object(S.jsxs)(f.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(S.jsx)(f.a.Brand,{children:Object(S.jsx)(v.a,{className:"fa-icon",icon:"film"})}),Object(S.jsx)(f.a.Brand,{children:"Actors Gallery"}),Object(S.jsx)(f.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(S.jsxs)(f.a.Collapse,{id:"responsive-navbar-nav",children:[Object(S.jsx)(g.a,{className:"search",children:Object(S.jsxs)(m.a,{onChange:function(e){return e.target.value.trim().length>1?n(e.target.value.trim()):n("")},children:[Object(S.jsx)(m.a.Prepend,{children:Object(S.jsx)(m.a.Text,{id:"basic-addon1",children:"Filter By:"})}),Object(S.jsx)(O.a,{placeholder:"First Name, Second Name or Age","aria-label":"Username","aria-describedby":"basic-addon1"})]})}),Object(S.jsx)(g.a,{className:"navDivider"}),Object(S.jsx)(g.a,{children:Object(S.jsx)(A,{handleChange:function(e){var n=Array(4).fill(!1);e.forEach((function(e){return n[e]=!0})),t(n)}})})]})]})}t(82);var F=t(94);function N(e){var n=e.fname,t=e.lname,a=e.imgsrc,c=e.born,r=e.age;return Object(S.jsxs)(F.a,{className:"text-center",children:[Object(S.jsx)(F.a.Header,{children:Object(S.jsxs)(F.a.Title,{"data-testid":"cardTitle",onClick:function(e){var n=e.target.innerText.split(" ");window.open("https://www.imdb.com/find?q=".concat("".concat(n[0],"+").concat(n[1])),"_blank")},children:[n," ",t," (",r,")"]})}),Object(S.jsx)(F.a.Img,{variant:"top",src:a,alt:"".concat(n," ").concat(t)}),Object(S.jsx)(F.a.Body,{children:Object(S.jsx)(F.a.Text,{children:c})})]})}var T=function(){function e(n,t,a,c){Object(x.a)(this,e),this.fname=n,this.lname=t,this.born=a,this.imgsrc=c}return Object(p.a)(e,[{key:"age",get:function(){return this.calcAge()}},{key:"calcAge",value:function(){var e=new RegExp(/(?:^Born):\s([a-zA-Z]+)\s([0-9]{1,2}),\s([0-9]{4,4})(?:.*)/,"i"),n=[],t=0;return e.test(this.born)&&(n=this.born.match(e)),n&&n.length>3&&(t=new Date(Date.now()-Date.parse("".concat(n[1]," ").concat(n[2]," ").concat(n[3]))).getFullYear()-1970),t}}]),e}();function P(e){var n=e.dataPath,t=e.pathPre,c=e.rowSize,r=Object(a.useState)(""),i=Object(o.a)(r,2),j=i[0],f=i[1],g=Object(a.useState)(Array(4).fill(!1)),m=Object(o.a)(g,2),O=m[0],v=m[1],x=Object(a.useState)(null),p=Object(o.a)(x,2),w=p[0],y=p[1];return Object(a.useEffect)((function(){(function(e,n,t,a,c){var r=e.trim().length<2?new RegExp(/.*/,"i"):new RegExp(e.trim().replace(/ /g,"|"),"i");return u.a.get(t).then((function(e){var t=e.data.map((function(e){return new T(e.fname,e.lname,e.born,e.imgsrc)})).filter((function(e){return r.test(e.fname)||r.test(e.lname)||r.test(e.age)})).sort((function(e,t){return function(e,n,t){var a=Object(o.a)(t,4),c=a[0],r=a[1],i=a[2],s=a[3];s=s?-1:1;var l=0;c&&(l=D(e.fname,n.fname));r&&0===l&&(l=D(e.lname,n.lname));i&&0===l&&(l=e.age-n.age);return s*l}(e,t,n)})).map((function(e){return Object(S.jsx)(d.a,{children:Object(S.jsx)(N,{fname:e.fname,lname:e.lname,imgsrc:a.concat(e.imgsrc),born:e.born,age:e.age},Object(l.a)())},Object(l.a)())}));return s.a.chunk(t,c).map((function(e){return Object(S.jsx)(h.a,{children:e},Object(l.a)())}))}))})(j,O,n,t,c).then((function(e){y(e)})).catch((function(e){return console.log(e)}))}),[j,O,n,t,c]),Object(S.jsxs)(b.a,{children:[Object(S.jsx)(B,{onChange:f,onSelect:v}),Object(S.jsx)("div",{"data-testid":"actorsGrid",children:w})]})}function D(e,n){return e<n?-1:e>n?1:0}var E=t(13),z=t(44),I=t(25);E.b.add(z.a,I.a,I.b,I.c);var L=function(){var e="/react-movie-app";return Object(S.jsx)(P,{dataPath:e.concat("/data/actors.json"),pathPre:e,rowSize:3})},R=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,95)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(L,{})}),document.getElementById("root")),R()}},[[83,1,2]]]);
//# sourceMappingURL=main.22ab1ffb.chunk.js.map
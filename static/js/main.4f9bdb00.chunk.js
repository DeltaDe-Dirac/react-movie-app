(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{46:function(e,n,a){},47:function(e,n,a){},49:function(e,n,a){},51:function(e,n,a){},57:function(e,n,a){},58:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),c=a(16),i=a.n(c),o=(a(46),a(47),a(48),a(25)),s=(a(49),a(41)),l=a(70),m=a(65),j=a(66),b=a(67),u=a(34),g=(a(51),a(69)),d=a(71),f=a(64),h=a(72),O=a(68),p=a(6);function v(e){var n=e.onChange,a=e.onSelect,r=Object(t.useState)(Array(4).fill(!1)),c=Object(o.a)(r,2),i=c[0],s=c[1];return Object(p.jsxs)(g.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(p.jsx)(g.a.Brand,{children:"Actors Gallery"}),Object(p.jsx)(g.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(p.jsxs)(g.a.Collapse,{id:"responsive-navbar-nav",children:[Object(p.jsx)(d.a,{className:"search",children:Object(p.jsxs)(f.a,{onChange:function(e){return n(e.target.value)},children:[Object(p.jsx)(f.a.Prepend,{children:Object(p.jsx)(f.a.Text,{id:"basic-addon1",children:"Filter By:"})}),Object(p.jsx)(h.a,{placeholder:"First Name, Second Name or Age","aria-label":"Username","aria-describedby":"basic-addon1"})]})}),Object(p.jsx)(d.a,{className:"mr-auto",onSelect:function(e){4===parseInt(e)?(s(Array(4).fill(!1)),a(Array(4).fill(!1))):(i[e]=!i[e],s(Object(u.a)(i)),a(Object(u.a)(i)))},children:Object(p.jsxs)(O.a,{title:"Sort By",id:"collapsible-nav-dropdown",children:[Object(p.jsx)(O.a.Item,{eventKey:"0",active:!!i[0],children:"First Name"}),Object(p.jsx)(O.a.Item,{eventKey:"1",active:!!i[1],children:"Second Name"}),Object(p.jsx)(O.a.Item,{eventKey:"2",active:!!i[2],children:"Age"}),Object(p.jsx)(O.a.Divider,{}),Object(p.jsx)(O.a.Item,{eventKey:"3",active:!!i[3],children:"Descending Order"}),Object(p.jsx)(O.a.Divider,{}),Object(p.jsx)(O.a.Item,{eventKey:"4",active:!1,children:"Clear All"})]})})]})]})}a(57);var x=a(73);function y(e){var n=e.fname,a=e.lname,t=e.imgsrc,r=e.born,c=e.age;return Object(p.jsxs)(x.a,{className:"text-center",children:[Object(p.jsx)(x.a.Header,{children:Object(p.jsxs)(x.a.Title,{onClick:function(){return alert()},children:[n," ",a," (",c,")"]})}),Object(p.jsx)(x.a.Img,{variant:"top",src:t,alt:"".concat(n," ").concat(a)}),Object(p.jsx)(x.a.Body,{children:Object(p.jsx)(x.a.Text,{children:r})})]})}var A=a(39),B=a(40),S=function(){function e(n,a,t,r){Object(A.a)(this,e),this.fname=n,this.lname=a,this.born=t,this.imgsrc=r}return Object(B.a)(e,[{key:"age",get:function(){return this.calcAge()}},{key:"calcAge",value:function(){var e=new RegExp(/(?:^Born):\s([a-zA-Z]+)\s([0-9]{1,2}),\s([0-9]{4,4})(?:.*)/,"i"),n=[],a=0;return e.test(this.born)&&(n=this.born.match(e)),n&&n.length>3&&(a=new Date(Date.now()-Date.parse("".concat(n[1]," ").concat(n[2]," ").concat(n[3]))).getFullYear()-1970),a}}]),e}(),C=[{fname:"Gal",lname:"Gadot",imgsrc:"/img/actors/GalGadot.jpg",born:"Born: April 30, 1985 in Rosh Ha'ayin, Israel"},{fname:"Gal",lname:"Gadot",imgsrc:"/img/actors/GalGadot.jpg",born:"Born: July 14, 1981 in Rosh Ha'ayin, Israel"},{fname:"Ben",lname:"Affleck",imgsrc:"/img/actors/BenAffleck.jpg",born:"Born: August 15, 1972 in Berkeley, California, USA"},{fname:"Jennifer",lname:"Connelly",imgsrc:"/img/actors/JenniferConnelly.jpg",born:"Born: December 12, 1970 in Catskill Mountains, New York, USA"},{fname:"Keanu",lname:"Reeves",imgsrc:"/img/actors/KeanuReeves.jpg",born:"Born: September 2, 1964 in Beirut, Lebanon"},{fname:"Keanu",lname:"ZReeves",imgsrc:"/img/actors/KeanuReeves.jpg",born:"Born: September 2, 1965 in Beirut, Lebanon"},{fname:"Christina",lname:"Hendricks",imgsrc:"/img/actors/ChristinaHendricks.jpg",born:"Born: May 3, 1975 in Knoxville, Tennessee, USA"},{fname:"Tom",lname:"Hanks",imgsrc:"/img/actors/TomHanks.jpg",born:"Born: July 9, 1956 in Concord, California, USA"},{fname:"Jonny",lname:"Depp",imgsrc:"/img/actors/JohnnyDepp.jpg",born:"Born: June 9, 1963 in Owensboro, Kentucky, USA"},{fname:"Anthony",lname:"Mackie",imgsrc:"/img/actors/AnthonyMackie.jpg",born:"Born: September 23, 1978 in New Orleans, Louisiana, USA"},{fname:"Wallis",lname:"Day",imgsrc:"/img/actors/WallisDay.jpg",born:"Born: September 20, 1994 in London"}];function k(){var e=Object(t.useState)(null),n=Object(o.a)(e,2),a=n[0],r=n[1],c=Object(t.useState)(Array(4).fill(!1)),i=Object(o.a)(c,2),u=i[0],g=i[1],d=C.map((function(e){return new S(e.fname,e.lname,e.born,e.imgsrc)})).filter((function(e){return null===a||0===a.length||a.toLowerCase().includes(e.fname.toLowerCase())||a.toLowerCase().includes(e.lname.toLowerCase())||a.includes(e.age)})).sort((function(e,n){return function(e,n){var a=u[0],t=u[1],r=u[2],c=u[3]?-1:1,i=0;a&&(i=h(e.fname,n.fname));t&&0===i&&(i=h(e.lname,n.lname));r&&0===i&&(i=e.age-n.age);return c*i}(e,n)})).map((function(e){return Object(p.jsx)(m.a,{children:Object(p.jsx)(y,{fname:e.fname,lname:e.lname,imgsrc:"/react-movie-app".concat(e.imgsrc),born:e.born,age:e.age},Object(l.a)())},Object(l.a)())})),f=s.a.chunk(d,3).map((function(e){return Object(p.jsx)(j.a,{children:e},Object(l.a)())}));function h(e,n){return e<n?-1:e>n?1:0}return Object(p.jsxs)(b.a,{children:[Object(p.jsx)(v,{onChange:r,onSelect:g}),f]})}var w=function(){return Object(p.jsx)(k,{})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,74)).then((function(n){var a=n.getCLS,t=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;a(e),t(e),r(e),c(e),i(e)}))};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(w,{})}),document.getElementById("root")),D()}},[[58,1,2]]]);
//# sourceMappingURL=main.4f9bdb00.chunk.js.map
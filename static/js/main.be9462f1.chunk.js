(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{46:function(e,n,a){},47:function(e,n,a){},49:function(e,n,a){},51:function(e,n,a){},57:function(e,n,a){},58:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),c=a(16),i=a.n(c),o=(a(46),a(47),a(48),a(21)),s=(a(49),a(40)),l=a(70),m=a(65),j=a(66),b=a(67),g=a(41),u=(a(51),a(69)),d=a(71),f=a(64),h=a(72),p=a(68),O=a(6);function v(e){var n=e.onChange,a=e.onSelect,r=Object(t.useState)(Array(4).fill(!1)),c=Object(o.a)(r,2),i=c[0],s=c[1];return Object(O.jsxs)(u.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(O.jsx)(u.a.Brand,{children:"Actors Gallery"}),Object(O.jsx)(u.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(O.jsxs)(u.a.Collapse,{id:"responsive-navbar-nav",children:[Object(O.jsx)(d.a,{className:"search",children:Object(O.jsxs)(f.a,{onChange:function(e){return e.target.value.trim().length>1?n(e.target.value.trim()):n("")},children:[Object(O.jsx)(f.a.Prepend,{children:Object(O.jsx)(f.a.Text,{id:"basic-addon1",children:"Filter By:"})}),Object(O.jsx)(h.a,{placeholder:"First Name, Second Name or Age","aria-label":"Username","aria-describedby":"basic-addon1"})]})}),Object(O.jsx)(d.a,{className:"mr-auto",onSelect:function(e){4===parseInt(e)?(s(Array(4).fill(!1)),a(Array(4).fill(!1))):(i[e]=!i[e],s(Object(g.a)(i)),a(i))},children:Object(O.jsxs)(p.a,{title:"Sort By",id:"collapsible-nav-dropdown",drop:"left",children:[Object(O.jsx)(p.a.Item,{eventKey:"0",active:!!i[0],children:"First Name"}),Object(O.jsx)(p.a.Item,{eventKey:"1",active:!!i[1],children:"Last Name"}),Object(O.jsx)(p.a.Item,{eventKey:"2",active:!!i[2],children:"Age"}),Object(O.jsx)(p.a.Divider,{}),Object(O.jsx)(p.a.Item,{eventKey:"3",active:!!i[3],children:"Descending Order"}),Object(O.jsx)(p.a.Divider,{}),Object(O.jsx)(p.a.Item,{eventKey:"4",active:!1,children:"Clear All"})]})})]})]})}a(57);var x=a(73);function y(e){var n=e.fname,a=e.lname,t=e.imgsrc,r=e.born,c=e.age;return Object(O.jsxs)(x.a,{className:"text-center",children:[Object(O.jsx)(x.a.Header,{children:Object(O.jsxs)(x.a.Title,{onClick:function(e){var n=e.target.innerText.split(" ");window.open("https://www.imdb.com/find?q=".concat("".concat(n[0],"+").concat(n[1])),"_blank")},children:[n," ",a," (",c,")"]})}),Object(O.jsx)(x.a.Img,{variant:"top",src:t,alt:"".concat(n," ").concat(a)}),Object(O.jsx)(x.a.Body,{children:Object(O.jsx)(x.a.Text,{children:r})})]})}var A=a(38),B=a(39),k=function(){function e(n,a,t,r){Object(A.a)(this,e),this.fname=n,this.lname=a,this.born=t,this.imgsrc=r}return Object(B.a)(e,[{key:"age",get:function(){return this.calcAge()}},{key:"calcAge",value:function(){var e=new RegExp(/(?:^Born):\s([a-zA-Z]+)\s([0-9]{1,2}),\s([0-9]{4,4})(?:.*)/,"i"),n=[],a=0;return e.test(this.born)&&(n=this.born.match(e)),n&&n.length>3&&(a=new Date(Date.now()-Date.parse("".concat(n[1]," ").concat(n[2]," ").concat(n[3]))).getFullYear()-1970),a}}]),e}(),S=[{fname:"Gal",lname:"Gadot",imgsrc:"/img/actors/GalGadot.jpg",born:"Born: April 30, 1985 in Rosh Ha'ayin, Israel"},{fname:"Gal",lname:"Gadot",imgsrc:"/img/actors/GalGadot.jpg",born:"Born: July 14, 1981 in Rosh Ha'ayin, Israel"},{fname:"Ben",lname:"Affleck",imgsrc:"/img/actors/BenAffleck.jpg",born:"Born: August 15, 1972 in Berkeley, California, USA"},{fname:"Jennifer",lname:"Connelly",imgsrc:"/img/actors/JenniferConnelly.jpg",born:"Born: December 12, 1970 in Catskill Mountains, New York, USA"},{fname:"Keanu",lname:"Reeves",imgsrc:"/img/actors/KeanuReeves.jpg",born:"Born: September 2, 1964 in Beirut, Lebanon"},{fname:"Keanu",lname:"ZReeves",imgsrc:"/img/actors/KeanuReeves.jpg",born:"Born: September 2, 1965 in Beirut, Lebanon"},{fname:"Christina",lname:"Hendricks",imgsrc:"/img/actors/ChristinaHendricks.jpg",born:"Born: May 3, 1975 in Knoxville, Tennessee, USA"},{fname:"Tom",lname:"Hanks",imgsrc:"/img/actors/TomHanks.jpg",born:"Born: July 9, 1956 in Concord, California, USA"},{fname:"Jonny",lname:"Depp",imgsrc:"/img/actors/JohnnyDepp.jpg",born:"Born: June 9, 1963 in Owensboro, Kentucky, USA"},{fname:"Anthony",lname:"Mackie",imgsrc:"/img/actors/AnthonyMackie.jpg",born:"Born: September 23, 1978 in New Orleans, Louisiana, USA"},{fname:"Wallis",lname:"Day",imgsrc:"/img/actors/WallisDay.jpg",born:"Born: September 20, 1994 in London"}];function w(){var e=Object(t.useState)(""),n=Object(o.a)(e,2),a=n[0],r=n[1],c=Object(t.useState)(Array(4).fill(!1)),i=Object(o.a)(c,2),g=i[0],u=i[1],d=a.trim().length<2?new RegExp(/.*/,"i"):new RegExp(a.trim().replace(/ /g,"|"),"i"),f=S.map((function(e){return new k(e.fname,e.lname,e.born,e.imgsrc)})).filter((function(e){return d.test(e.fname)||d.test(e.lname)||d.test(e.age)})).sort((function(e,n){return function(e,n){var a=Object(o.a)(g,4),t=a[0],r=a[1],c=a[2],i=a[3];i=i?-1:1;var s=0;t&&(s=p(e.fname,n.fname));r&&0===s&&(s=p(e.lname,n.lname));c&&0===s&&(s=e.age-n.age);return i*s}(e,n)})).map((function(e){return Object(O.jsx)(m.a,{children:Object(O.jsx)(y,{fname:e.fname,lname:e.lname,imgsrc:"/react-movie-app".concat(e.imgsrc),born:e.born,age:e.age},Object(l.a)())},Object(l.a)())})),h=s.a.chunk(f,3).map((function(e){return Object(O.jsx)(j.a,{children:e},Object(l.a)())}));function p(e,n){return e<n?-1:e>n?1:0}return Object(O.jsxs)(b.a,{children:[Object(O.jsx)(v,{onChange:r,onSelect:u}),h]})}var C=function(){return Object(O.jsx)(w,{})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,74)).then((function(n){var a=n.getCLS,t=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;a(e),t(e),r(e),c(e),i(e)}))};i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root")),D()}},[[58,1,2]]]);
//# sourceMappingURL=main.be9462f1.chunk.js.map
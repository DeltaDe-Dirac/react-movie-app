(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(26),i=a.n(r),s=(a(65),a(66),a(67),a(16)),o=(a(68),a(57)),l=a(113),d=a(21),j=a.n(d),u=a(108),b=a(109),h=a(110),m=(a(86),a(111)),O=a(112),f=a(107),x=a(114),g=a(31),p=a(24),v=a(25),y=a(60),k=a(58),N=a(51),C=a.n(N),S=a(1),w=function(e){Object(y.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).handleChange=e.handleChange,n}return Object(v.a)(a,[{key:"render",value:function(){var e=this;return Object(S.jsx)(C.a,{options:[{key:0,label:"First Name"},{key:1,label:"Last Name"},{key:2,label:"Age"},{key:3,label:"Descending"}],name:"sort-criteria",placeholder:"Sort By:",handleOnChange:function(t){return e.handleChange(t)}})}}]),a}(c.a.Component);function T(e){var t=e.onChange,a=e.onSelect;return Object(S.jsxs)(m.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",className:"actorsNavbar",children:[Object(S.jsx)(m.a.Brand,{children:Object(S.jsx)(g.a,{className:"fa-icon",icon:"film"})}),Object(S.jsx)(m.a.Brand,{children:"Actors Gallery"}),Object(S.jsx)(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(S.jsxs)(m.a.Collapse,{id:"responsive-navbar-nav",children:[Object(S.jsx)(O.a,{className:"search",children:Object(S.jsxs)(f.a,{children:[Object(S.jsx)(f.a.Prepend,{children:Object(S.jsx)(f.a.Text,{id:"basic-addon1",children:"Filter By:"})}),Object(S.jsx)(x.a,{onChange:function(e){return e.target.value.trim().length>1?t(e.target.value.trim()):t("")},placeholder:"First Name, Second Name or Age","aria-label":"Search by First Name, Second Name or Age","aria-describedby":"basic-addon1"})]})}),Object(S.jsx)(O.a,{className:"navDivider"}),Object(S.jsx)(O.a,{children:Object(S.jsx)(w,{handleChange:function(e){var t=Array(4).fill(!1);e.forEach((function(e){return t[e]=!0})),a(t)}})})]})]})}a(95);var _=a(115);function A(e){var t=e.fname,a=e.lname,n=e.imgsrc,c=e.born,r=e.age;return Object(S.jsxs)(_.a,{className:"actorCard text-center",children:[Object(S.jsx)(_.a.Header,{children:Object(S.jsxs)(_.a.Title,{"data-testid":"cardTitle",onClick:function(e){var t=e.target.innerText.split(" ");window.open("https://www.imdb.com/find?q=".concat("".concat(t[0],"+").concat(t[1])),"_blank")},children:[t," ",a," (",r,")"]})}),Object(S.jsx)(_.a.Img,{variant:"top",src:n,alt:"".concat(t," ").concat(a)}),Object(S.jsx)(_.a.Body,{children:Object(S.jsx)(_.a.Text,{children:c})})]})}var B=function(){function e(t,a,n,c){Object(p.a)(this,e),this.fname=t,this.lname=a,this.born=n,this.imgsrc=c}return Object(v.a)(e,[{key:"age",get:function(){return this.calcAge()}},{key:"calcAge",value:function(){var e=new RegExp(/(?:^Born):\s([a-zA-Z]+)\s([0-9]{1,2}),\s([0-9]{4,4})(?:.*)/,"i"),t=[],a=0;return e.test(this.born)&&(t=this.born.match(e)),t&&t.length>3&&(a=new Date(Date.now()-Date.parse("".concat(t[1]," ").concat(t[2]," ").concat(t[3]))).getFullYear()-1970),a}}]),e}();function F(e){var t=e.dataPath,a=e.pathPre,c=e.rowSize,r=Object(n.useState)(""),i=Object(s.a)(r,2),d=i[0],m=i[1],O=Object(n.useState)(Array(4).fill(!1)),f=Object(s.a)(O,2),x=f[0],g=f[1],p=Object(n.useState)(null),v=Object(s.a)(p,2),y=v[0],k=v[1];return Object(n.useEffect)((function(){(function(e,t,a,n,c){var r=e.trim().length<2?new RegExp(/.*/,"i"):new RegExp(e.trim().replace(/ /g,"|"),"i");return j.a.get(a).then((function(e){var a=e.data.map((function(e){return new B(e.fname,e.lname,e.born,e.imgsrc)})).filter((function(e){return r.test(e.fname)||r.test(e.lname)||r.test(e.age)})).sort((function(e,a){return function(e,t,a){var n=Object(s.a)(a,4),c=n[0],r=n[1],i=n[2],o=n[3];o=o?-1:1;var l=0;c&&(l=D(e.fname,t.fname));r&&0===l&&(l=D(e.lname,t.lname));i&&0===l&&(l=e.age-t.age);return o*l}(e,a,t)})).map((function(e){return Object(S.jsx)(b.a,{children:Object(S.jsx)(A,{fname:e.fname,lname:e.lname,imgsrc:n.concat(e.imgsrc),born:e.born,age:e.age},Object(l.a)())},Object(l.a)())}));return o.a.chunk(a,c).map((function(e){return Object(S.jsx)(h.a,{children:e},Object(l.a)())}))}))})(d,x,t,a,c).then((function(e){k(e)})).catch((function(e){return console.log(e)}))}),[d,x,t,a,c]),Object(S.jsxs)(u.a,{children:[Object(S.jsx)(T,{onChange:m,onSelect:g}),Object(S.jsx)("div",{"data-testid":"actorsGrid",children:y})]})}function D(e,t){return e<t?-1:e>t?1:0}a(96);var L=a(59),P=(a(97),a(54)),E=function(){function e(t){Object(p.a)(this,e),this.id=parseInt(t.id),this.title=t.title,this.release_date=new Date(t.release_date),this.overview=t.overview,this.original_language=t.original_language}return Object(v.a)(e,[{key:"lang",get:function(){return this.original_language.toUpperCase()}},{key:"year",get:function(){return this.release_date.getFullYear()}},{key:"imgsrc",get:function(){return"https://image.tmdb.org/t/p/w500".concat(this.path)}},{key:"poster_path",set:function(e){this.path=e}},{key:"runtime",set:function(e){this.duration=e}},{key:"director_name",set:function(e){var t,a=Object(P.a)(e);try{for(a.s();!(t=a.n()).done;){var n=t.value;if("Director"===n.job){this.director=n.name;break}}}catch(c){a.e(c)}finally{a.f()}}},{key:"casting",set:function(e){this.actors=e.filter((function(e){return"Acting"===e.known_for_department})).sort((function(e,t){return t.popularity-e.popularity})).map((function(e){return e.name})),this.actors=this.actors.length>5?this.actors.slice(0,5):this.actors}}]),e}();function M(e){e.movieCards;var t=e.addMovieCard,a=Object(n.useState)(""),c=Object(s.a)(a,2),r=c[0],i=c[1],o=Object(n.useState)(null),l=Object(s.a)(o,2),d=l[0],u=l[1];return Object(n.useEffect)((function(){r?j.a.create({baseURL:"https://api.themoviedb.org/3/search/movie?api_key=da05aa3114b146b2dd9303dad161c614&language=en-US&query="+r,timeout:2e3,headers:{"Content-Type":"application/json;charset=utf-8"}}).get().then((function(e){return e.data.results.map((function(e){return new E(e)}))})).then((function(e){return u(e)})).catch((function(e){console.log(e),u(null)})):u(null)}),[r]),Object(S.jsxs)("div",{className:"moviesNavbar",children:[Object(S.jsxs)(m.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(S.jsx)(m.a.Brand,{children:Object(S.jsx)(g.a,{className:"fa-icon",icon:"film"})}),Object(S.jsx)(m.a.Brand,{children:"Movies Gallery"}),Object(S.jsx)(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(S.jsx)(m.a.Collapse,{id:"responsive-navbar-nav",className:"searchNav",children:Object(S.jsx)(O.a,{className:"search",children:Object(S.jsxs)(f.a,{children:[Object(S.jsx)(f.a.Prepend,{children:Object(S.jsx)(f.a.Text,{children:"Seach Movies"})}),Object(S.jsx)(x.a,{value:r,onChange:function(e){return i(e.target.value)},placeholder:"ex: Life of Pi","aria-label":"Search movies"})]})})})]}),null===d?null:0===d.length?Object(S.jsx)(m.a,{bg:"dark",variant:"dark",className:"result-box",children:Object(S.jsx)(O.a,{className:"flex-column",children:Object(S.jsx)(O.a.Link,{disabled:!0,children:"Nothing Found"})})}):Object(S.jsx)(m.a,{bg:"dark",variant:"dark",className:"result-box",children:Object(S.jsx)(O.a,{className:"flex-column",onSelect:function(e){return function(e){u(Object(L.a)(d.filter((function(a){return a.id!==parseInt(e)||(t(a),!1)})))),i("")}(e)},children:d.map((function(e){return Object(S.jsxs)(O.a.Link,{eventKey:e.id,children:[e.title," - ",e.year," (",e.lang,")"]},e.id)}))})})]})}a(98);function R(e){var t=e.movie;return Object(S.jsxs)(_.a,{className:"movieCard",children:[Object(S.jsx)(_.a.Header,{children:Object(S.jsxs)(_.a.Title,{className:"text-center","data-testid":"movieTitle",children:[t.title," (",t.year,")"]})}),Object(S.jsx)(_.a.Img,{variant:"top",src:t.imgsrc,alt:"".concat(t.title)}),Object(S.jsxs)(_.a.Body,{className:"text-start",children:[Object(S.jsxs)(_.a.Text,{children:["Duration: ",t.duration," [min]"]}),Object(S.jsxs)(_.a.Text,{children:["Director: ",t.director]}),Object(S.jsxs)(_.a.Text,{children:["Stars: ",t.actors.join(", ")]}),Object(S.jsx)(_.a.Text,{children:t.overview})]})]})}function U(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(S.jsxs)(u.a,{children:[Object(S.jsx)(M,{addMovieCard:function(e){j.a.create({baseURL:"https://api.themoviedb.org/3/movie/".concat(e.id,"?api_key=da05aa3114b146b2dd9303dad161c614&language=en-US"),timeout:2e3,headers:{"Content-Type":"application/json;charset=utf-8"}}).get().then((function(t){e.poster_path=t.data.poster_path,e.runtime=t.data.runtime,j.a.create({baseURL:"https://api.themoviedb.org/3/movie/".concat(e.id,"/credits?api_key=da05aa3114b146b2dd9303dad161c614&language=en-US"),timeout:2e3,headers:{"Content-Type":"application/json;charset=utf-8"}}).get().then((function(t){e.director_name=t.data.crew,e.casting=t.data.cast,c(a.filter((function(t){return t.id!==e.id})).concat(e))})).catch((function(e){console.error("/movie/credits ",e)}))})).catch((function(e){console.error("/movie ",e)}))},movieCards:a}),Object(S.jsx)("div",{"data-testid":"moviesGrid",children:Object(S.jsx)(h.a,{children:a.map((function(e){return Object(S.jsx)(b.a,{lg:4,md:6,children:Object(S.jsx)(R,{movie:e})},e.id)}))})})]})}var I=a(27);function z(e){return Object(S.jsxs)(u.a,{children:[Object(S.jsx)("h1",{className:"display-1",children:"React Movie App"}),Object(S.jsx)("p",{children:"Amazing movie app!"}),Object(S.jsx)(I.b,{className:"btn btn-primary",to:"/movies",children:"Movies"}),Object(S.jsx)(I.b,{className:"btn btn-primary",to:"/actors",children:"Actors"}),Object(S.jsx)(I.b,{className:"btn btn-primary",to:"/bla",children:"Bla"})]})}function G(e){return Object(S.jsx)(u.a,{children:Object(S.jsx)("h1",{className:"display-1",children:"404"})})}var q=a(22),H=a(56),J=a(35),Y=a(9);q.b.add(H.a,J.a,J.b,J.c);var K=function(){var e="/react-movie-app";return Object(S.jsx)(I.a,{children:Object(S.jsxs)(Y.c,{children:[Object(S.jsx)(Y.a,{exact:!0,path:"/",children:Object(S.jsx)(z,{})}),Object(S.jsx)(Y.a,{exact:!0,path:"/movies",children:Object(S.jsx)(U,{})}),Object(S.jsx)(Y.a,{exact:!0,path:"/actors",children:Object(S.jsx)(F,{dataPath:e.concat("/data/actors.json"),pathPre:e,rowSize:3})}),Object(S.jsx)(Y.a,{path:"/",children:Object(S.jsx)(G,{})})]})})},Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,116)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(K,{})}),document.getElementById("root")),Z()},65:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},86:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[104,1,2]]]);
//# sourceMappingURL=main.859ead2a.chunk.js.map
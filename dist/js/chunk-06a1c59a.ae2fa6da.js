(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06a1c59a"],{"14fa":function(t,e,a){"use strict";var n=a("f2e5"),r=a.n(n);r.a},"3ca3":function(t,e,a){"use strict";var n=a("6547").charAt,r=a("69f3"),i=a("7dd0"),s="String Iterator",o=r.set,c=r.getterFor(s);i(String,"String",(function(t){o(this,{type:s,string:String(t),index:0})}),(function(){var t,e=c(this),a=e.string,r=e.index;return r>=a.length?{value:void 0,done:!0}:(t=n(a,r),e.index+=t.length,{value:t,done:!1})}))},"434e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"page-section"},[a("b-container",[a("HeaderPage",{attrs:{title:"Gestão de Animais"}}),a("b-row",{staticClass:"mb-4"},[a("b-col",{attrs:{cols:"2"}}),a("b-col",[a("router-link",{staticClass:"btn btn-outline-success mr-2 mt-2",attrs:{to:{name:"addAnimal"},tag:"button"}},[a("i",{staticClass:"fas fa-plus-square"}),t._v(" ADICIONAR ANIMAL ")]),a("router-link",{staticClass:"btn btn-outline-info mr-2 mt-2",attrs:{to:{name:"admin"},tag:"button"}},[a("i",{staticClass:"fas fa-bars"}),t._v(" MENU PRINCIPAL ")])],1),a("b-col",{attrs:{cols:"2"}})],1),a("b-row",[a("b-col",{attrs:{cols:"2"}}),a("b-col",[a("table",{staticClass:"table table-striped"},[a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v(" NOME "),1===t.sortType?a("i",{staticClass:"fas fa-arrow-up",on:{click:function(e){return t.sort()}}}):a("i",{staticClass:"fas fa-arrow-down",on:{click:function(e){return t.sort()}}})]),a("th",{attrs:{scope:"col"}},[t._v("GRUPO")]),a("th",{attrs:{scope:"col"}},[t._v("NÍVEL")]),a("th",{attrs:{scope:"col"}},[t._v("AÇÕES")])])]),a("tbody",t._l(t.animals,(function(e){return a("tr",{key:e._id},[a("td",{staticClass:"pt-4"},[t._v(t._s(e.name))]),a("td",{staticClass:"pt-4"},[t._v(t._s(e.group))]),a("td",{staticClass:"pt-4"},[t._v(t._s(e.level))]),a("td",[a("router-link",{staticClass:"btn btn-outline-success mr-2 mt-2",attrs:{to:{name:"editAnimal",params:{animalId:e._id}},tag:"button"}},[a("i",{staticClass:"fas fa-edit"}),t._v(" EDITAR ")]),a("button",{staticClass:"btn btn-outline-success mr-2 mt-2",attrs:{type:"button"},on:{click:function(a){return t.viewAnimal(e._id)}}},[a("i",{staticClass:"fas fa-search"}),t._v(" VER ")]),a("button",{staticClass:"btn btn-outline-danger mr-2 mt-2",attrs:{type:"button"},on:{click:function(a){return t.removeAnimal(e._id)}}},[a("i",{staticClass:"fas fa-trash-alt"}),t._v(" REMOVER ")])],1)])})),0)])]),a("b-col",{attrs:{cols:"2"}})],1)],1)],1)},r=[],i=(a("a4d3"),a("e01a"),a("d28b"),a("99af"),a("4de4"),a("7db0"),a("4160"),a("4e82"),a("b0c0"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("3ca3"),a("159b"),a("ddb0"),a("2fa7")),s=a("ec45"),o=a("e9c6"),c=a("2f62");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(a,!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f={name:"ManageAnimals",components:{HeaderPage:o["a"]},data:function(){return{animals:[],sortType:1}},computed:u({},Object(c["b"])("animal",["getAnimals","getMessage"])),methods:{fetchAnimals:function(){var t=this;this.$store.dispatch("animal/".concat(s["c"])).then((function(){t.animals=t.getAnimals}),(function(e){t.$alert("".concat(e.message),"Erro","error")}))},sort:function(){this.animals.sort(this.compareNames),this.sortType*=-1},compareNames:function(t,e){return t.name>e.name?1*this.sortType:t.name<e.name?-1*this.sortType:0},viewAnimal:function(t){var e=this.animals.find((function(e){return e._id===t}));this.$fire({title:e.name,html:this.generateTemplate(e),imageUrl:e.links[0].url,imageWidth:400,imageHeight:200,imageAlt:"Imagem desconhecida"})},generateTemplate:function(t){var e="\n          <h4>Grupo:</b> ".concat(t.group,"</h4>\n          <h5>(nível:</b> ").concat(t.level,")</h5>\n          <p>").concat(t.description,"</p> \n          <p>Elementos multimédia:\n        "),a=!0,n=!1,r=void 0;try{for(var i,s=t.links[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var o=i.value;e+=" <a href='".concat(o.url,"' target='_blank'>").concat(o.types,"</a>")}}catch(c){n=!0,r=c}finally{try{a||null==s.return||s.return()}finally{if(n)throw r}}return e+="</p><p>Comentários: ".concat(t.comments.length," Avaliações: ").concat(t.evaluation.length,"</p> "),e},removeAnimal:function(t){var e=this;this.$confirm("Se sim, clique em OK","Deseja mesmo remover o animal?","warning",{confirmButtonText:"OK",cancelButtonText:"Cancelar"}).then((function(){e.$store.dispatch("animal/".concat(s["d"]),t).then((function(){e.$alert(e.getMessage,"Animal removido!","success"),e.fetchAnimals()}))}),(function(){e.$alert("Remoção cancelada!","Informação","info")}))}},created:function(){this.fetchAnimals()}},d=f,m=a("2877"),b=Object(m["a"])(d,n,r,!1,null,null,null);e["default"]=b.exports},"4e82":function(t,e,a){"use strict";var n=a("23e7"),r=a("1c0b"),i=a("7b0b"),s=a("d039"),o=a("b301"),c=[].sort,l=[1,2,3],u=s((function(){l.sort(void 0)})),f=s((function(){l.sort(null)})),d=o("sort"),m=u||!f||d;n({target:"Array",proto:!0,forced:m},{sort:function(t){return void 0===t?c.call(i(this)):c.call(i(this),r(t))}})},6547:function(t,e,a){var n=a("a691"),r=a("1d80"),i=function(t){return function(e,a){var i,s,o=String(r(e)),c=n(a),l=o.length;return c<0||c>=l?t?"":void 0:(i=o.charCodeAt(c),i<55296||i>56319||c+1===l||(s=o.charCodeAt(c+1))<56320||s>57343?t?o.charAt(c):i:t?o.slice(c,c+2):s-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},d28b:function(t,e,a){var n=a("746f");n("iterator")},ddb0:function(t,e,a){var n=a("da84"),r=a("fdbc"),i=a("e260"),s=a("9112"),o=a("b622"),c=o("iterator"),l=o("toStringTag"),u=i.values;for(var f in r){var d=n[f],m=d&&d.prototype;if(m){if(m[c]!==u)try{s(m,c,u)}catch(p){m[c]=u}if(m[l]||s(m,l,f),r[f])for(var b in i)if(m[b]!==i[b])try{s(m,b,i[b])}catch(p){m[b]=i[b]}}}},e01a:function(t,e,a){"use strict";var n=a("23e7"),r=a("83ab"),i=a("da84"),s=a("5135"),o=a("861d"),c=a("9bf2").f,l=a("e893"),u=i.Symbol;if(r&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(f[e]=!0),e};l(d,u);var m=d.prototype=u.prototype;m.constructor=d;var b=m.toString,p="Symbol(test)"==String(u("test")),v=/^Symbol\((.*)\)[^)]+$/;c(m,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=b.call(t);if(s(f,t))return"";var a=p?e.slice(7,-1):e.replace(v,"$1");return""===a?void 0:a}}),n({global:!0,forced:!0},{Symbol:d})}},e9c6:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("b-row",{staticClass:"text-center"},[a("b-col",[a("h2",{staticClass:"page-section-heading mt-5"},[t._v(t._s(t.title.toUpperCase()))])])],1),a("b-row",{staticClass:"text-center"},[a("b-col",[a("div",{staticClass:"divider-custom"},[a("div",{staticClass:"divider-custom-line"}),a("div",{staticClass:"divider-custom-icon"},[a("i",{staticClass:"fas fa-star"})]),a("div",{staticClass:"divider-custom-line"})])])],1)],1)},r=[],i={name:"HeaderPage",props:["title"]},s=i,o=(a("14fa"),a("2877")),c=Object(o["a"])(s,n,r,!1,null,"4b0c4b4e",null);e["a"]=c.exports},f2e5:function(t,e,a){}}]);
//# sourceMappingURL=chunk-06a1c59a.ae2fa6da.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dd3e213"],{"14fa":function(t,e,s){"use strict";var r=s("f2e5"),i=s.n(r);i.a},"2e44":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"page-section"},[s("b-container",[s("HeaderPage",{attrs:{title:"Quiz nº"+t.quiz.level+" - "+t.quiz.name}}),s("b-row",[s("b-col",{attrs:{cols:"1"}}),s("b-col",{attrs:{cols:"10",align:"right"}},[t._v(t._s(t.seconds))]),s("b-col",{attrs:{cols:"1"}})],1),s("b-row",[s("b-col",{attrs:{cols:"1"}}),s("b-col",{attrs:{cols:"10"}},[s("div",[s("b-card",{attrs:{"no-body":""}},[s("b-tabs",{attrs:{pills:"",card:"",vertical:""}},[t._l(t.quiz.questions,(function(e,r){return s("b-tab",{key:e.id,attrs:{disabled:t.currentQuestion!==r+1,title:"QUESTÃO #"+(r+1)}},[s("b-card",{attrs:{title:e.question,"sub-title":"nível: "+e.level+" | tipo: "+e.type}},[s("b-card-text",{domProps:{innerHTML:t._s(e.description)}}),s("b-form-group",{attrs:{label:"Respostas possíveis"}},t._l(e.answers,(function(e){return s("b-form-radio",{key:e.id,attrs:{name:"some-radios",value:e._id},model:{value:t.option,callback:function(e){t.option=e},expression:"option"}},[t._v(t._s(e.title))])})),1),s("b-button",{attrs:{variant:"outline-success"},on:{click:function(e){return t.setAnswer()}}},[t._v("RESPONDER")])],1)],1)})),s("b-tab",{attrs:{title:"RESULTADOS",disabled:t.currentQuestion<=t.quiz.questions.length}},[s("b-card-text",{staticClass:"text-center"},[s("div",[s("h5",[t._v("Respostas certas")]),s("b-progress",{staticClass:"mb-3",attrs:{value:t.correctAnswers,max:t.quiz.questions.length,variant:"success","show-value":""}}),s("h5",[t._v("Respostas erradas")]),s("b-progress",{staticClass:"mb-3",attrs:{value:t.quiz.questions.length-t.correctAnswers,max:t.quiz.questions.length,variant:"danger","show-value":""}})],1),t.quiz.questions.length===t.correctAnswers?s("div",[s("i",{staticClass:"fas fa-smile fa-3x"}),s("br"),s("h2",[t._v("PARABÉNS, GANHASTE "+t._s(t.quiz.points)+" PONTOS!")]),s("br"),s("router-link",{staticClass:"mr-2",attrs:{to:{name:"quizzes"},tag:"b-button",variant:"outline-success"}},[s("i",{staticClass:"fas fa-poll-h"}),t._v(" JOGAR NOVO NÍVEL DO QUIZ ")]),s("router-link",{staticClass:"mr-2",attrs:{to:{name:"home"},tag:"b-button",variant:"outline-success"}},[s("i",{staticClass:"fas fa-home"}),t._v(" PÁGINA PRINCIPAL ")]),s("b-button",{attrs:{variant:"outline-info"},on:{click:function(e){return t.evaluate()}}},[t._v("VER ANIMAIS")])],1):s("div",[s("i",{staticClass:"fas fa-frown fa-3x"}),s("br"),s("h2",[t._v("PACIÊNCIA, JOGA DE NOVO!")]),s("br"),s("b-button",{staticClass:"mr-2",attrs:{variant:"outline-success"},on:{click:function(e){return t.evaluate()}}},[t._v("JOGAR NOVAMENTE ESTE QUIZ")]),s("b-button",{attrs:{variant:"outline-info"},on:{click:function(e){return t.evaluate()}}},[t._v("VER ANIMAIS")])],1)])],1)],2)],1)],1)]),s("b-col",{attrs:{cols:"1"}})],1)],1),s("pre",[t._v("  "+t._s(this.$data)+"\n")])],1)},i=[],n=(s("a4d3"),s("e01a"),s("d28b"),s("4de4"),s("4160"),s("e439"),s("dbb4"),s("b64b"),s("d3b7"),s("3ca3"),s("159b"),s("ddb0"),s("2fa7")),a=s("e9c6"),o=s("2f62"),c=s("e680");function u(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?u(s,!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):u(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var d={name:"Animal",components:{HeaderPage:a["a"]},data:function(){return{quiz:"",option:"",currentQuestion:1,answers:[],correctAnswers:0,seconds:30}},computed:l({},Object(o["b"])("auth",["getProfile"]),{},Object(o["b"])("user",["getUsersById"]),{},Object(o["b"])("quiz",["getQuizById"])),methods:{setAnswer:function(){this.answers.push(this.option),this.currentQuestion+=1,this.currentQuestion>this.quiz.questions.length&&this.evaluate()},evaluate:function(){var t=0,e=!0,s=!1,r=void 0;try{for(var i,n=this.quiz.questions[Symbol.iterator]();!(e=(i=n.next()).done);e=!0){var a=i.value,o=a.answers.filter((function(t){return!0===t.correct}))[0]._id;o==this.answers[t]&&(this.correctAnswers+=1),t++}}catch(c){s=!0,r=c}finally{try{e||null==n.return||n.return()}finally{if(s)throw r}}this.correctAnswers===this.quiz.questions.length&&this.setScore(this.quiz.points)},setScore:function(t){var e=this,s=this.getProfile;s.gamification.points+=t,s.gamification.quiz+=1,this.$store.dispatch("user/".concat(c["b"]),s).then((function(){}),(function(t){e.$alert("".concat(t.message),"Erro","error")}))}},created:function(){this.quiz=this.getQuizById(this.$route.params.quizId);var t=setInterval((function(){this.seconds-=1,this.seconds<0&&(clearInterval(t),this.seconds="EXPIRED")}),1e3)}},f=d,b=(s("ab04"),s("2877")),v=Object(b["a"])(f,r,i,!1,null,null,null);e["default"]=v.exports},"3ca3":function(t,e,s){"use strict";var r=s("6547").charAt,i=s("69f3"),n=s("7dd0"),a="String Iterator",o=i.set,c=i.getterFor(a);n(String,"String",(function(t){o(this,{type:a,string:String(t),index:0})}),(function(){var t,e=c(this),s=e.string,i=e.index;return i>=s.length?{value:void 0,done:!0}:(t=r(s,i),e.index+=t.length,{value:t,done:!1})}))},6547:function(t,e,s){var r=s("a691"),i=s("1d80"),n=function(t){return function(e,s){var n,a,o=String(i(e)),c=r(s),u=o.length;return c<0||c>=u?t?"":void 0:(n=o.charCodeAt(c),n<55296||n>56319||c+1===u||(a=o.charCodeAt(c+1))<56320||a>57343?t?o.charAt(c):n:t?o.slice(c,c+2):a-56320+(n-55296<<10)+65536)}};t.exports={codeAt:n(!1),charAt:n(!0)}},ab04:function(t,e,s){"use strict";var r=s("ed4f"),i=s.n(r);i.a},d28b:function(t,e,s){var r=s("746f");r("iterator")},ddb0:function(t,e,s){var r=s("da84"),i=s("fdbc"),n=s("e260"),a=s("9112"),o=s("b622"),c=o("iterator"),u=o("toStringTag"),l=n.values;for(var d in i){var f=r[d],b=f&&f.prototype;if(b){if(b[c]!==l)try{a(b,c,l)}catch(h){b[c]=l}if(b[u]||a(b,u,d),i[d])for(var v in n)if(b[v]!==n[v])try{a(b,v,n[v])}catch(h){b[v]=n[v]}}}},e01a:function(t,e,s){"use strict";var r=s("23e7"),i=s("83ab"),n=s("da84"),a=s("5135"),o=s("861d"),c=s("9bf2").f,u=s("e893"),l=n.Symbol;if(i&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new l(t):void 0===t?l():l(t);return""===t&&(d[e]=!0),e};u(f,l);var b=f.prototype=l.prototype;b.constructor=f;var v=b.toString,h="Symbol(test)"==String(l("test")),p=/^Symbol\((.*)\)[^)]+$/;c(b,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=v.call(t);if(a(d,t))return"";var s=h?e.slice(7,-1):e.replace(p,"$1");return""===s?void 0:s}}),r({global:!0,forced:!0},{Symbol:f})}},e9c6:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",[s("b-row",{staticClass:"text-center"},[s("b-col",[s("h2",{staticClass:"page-section-heading mt-5"},[t._v(t._s(t.title.toUpperCase()))])])],1),s("b-row",{staticClass:"text-center"},[s("b-col",[s("div",{staticClass:"divider-custom"},[s("div",{staticClass:"divider-custom-line"}),s("div",{staticClass:"divider-custom-icon"},[s("i",{staticClass:"fas fa-star"})]),s("div",{staticClass:"divider-custom-line"})])])],1)],1)},i=[],n={name:"HeaderPage",props:["title"]},a=n,o=(s("14fa"),s("2877")),c=Object(o["a"])(a,r,i,!1,null,"4b0c4b4e",null);e["a"]=c.exports},ed4f:function(t,e,s){},f2e5:function(t,e,s){}}]);
//# sourceMappingURL=chunk-1dd3e213.1d640a79.js.map
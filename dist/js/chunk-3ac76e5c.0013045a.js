(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ac76e5c"],{"14fa":function(t,e,a){"use strict";var r=a("f2e5"),o=a.n(r);o.a},"73cf":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"page-section"},[a("b-container",[a("HeaderPage",{attrs:{title:"Registo"}}),a("b-row",[a("b-col",{attrs:{cols:"4"}}),a("b-col",{attrs:{cols:"4"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control form-control-lg",attrs:{type:"text",value:"ricardo queiros",id:"txtName",placeholder:"escreve o teu nome",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.birth_date,expression:"birth_date"}],staticClass:"form-control form-control-lg",attrs:{type:"text",value:"2019-11-11",onmouseenter:"(this.type='date')",onmouseleave:"(this.type='text')",id:"txtBirthDate",placeholder:"escreve a tua data de nascimento",required:""},domProps:{value:t.birth_date},on:{input:function(e){e.target.composing||(t.birth_date=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.location.city,expression:"location.city"}],staticClass:"form-control form-control-lg",attrs:{type:"text",id:"txtCity",placeholder:"escreve a cidade onde vives",required:""},domProps:{value:t.location.city},on:{input:function(e){e.target.composing||t.$set(t.location,"city",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.location.country,expression:"location.country"}],staticClass:"form-control form-control-lg",attrs:{type:"text",id:"txtCountry",placeholder:"escreve o teu país",required:""},domProps:{value:t.location.country},on:{input:function(e){e.target.composing||t.$set(t.location,"country",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.auth.username,expression:"auth.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",value:"ricardo.queiros@gmail.com",id:"txtEmail",placeholder:"escreve o teu username",required:""},domProps:{value:t.auth.username},on:{input:function(e){e.target.composing||t.$set(t.auth,"username",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.auth.password,expression:"auth.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",id:"txtPassword",placeholder:"escreve  a tua password",required:""},domProps:{value:t.auth.password},on:{input:function(e){e.target.composing||t.$set(t.auth,"password",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{staticClass:"form-control form-control-lg",attrs:{type:"password",id:"txtConfirmPassword",placeholder:"confirma a tua password"}})]),a("button",{staticClass:"btn btn-success mr-2",attrs:{type:"submit"}},[a("i",{staticClass:"fas fa-file-signature"}),t._v(" REGISTAR ")]),a("router-link",{staticClass:"btn btn-danger",attrs:{to:{name:"login"},tag:"button"}},[a("i",{staticClass:"fas fa-window-close"}),t._v(" CANCELAR")])],1)]),a("b-col",{attrs:{cols:"4"}})],1)],1)],1)},o=[],s=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("2fa7")),i=a("17d5"),n=a("e9c6"),c=a("a18c"),l=a("2f62");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var m={name:"Register",components:{HeaderPage:n["a"]},data:function(){return{location:{city:"",district:"",country:""},auth:{username:"",password:""},gamification:{points:0,quiz:0},active:!0,name:"",type:"user",birth_date:"",description:""}},computed:d({},Object(l["b"])("auth",["getMessage"])),methods:{register:function(){var t=this;document.querySelector("#txtPassword").value!==document.querySelector("#txtConfirmPassword").value?this.$alert("Campos password não coincidem","Erro de validação do formulário","error"):this.$store.dispatch("auth/".concat(i["e"]),this.$data).then((function(){t.$alert(t.getMessage,"Registo","success"),c["a"].push({name:"home"})})).catch((function(e){t.$alert(e.message,"Erro","error")}))}}},p=m,v=a("2877"),f=Object(v["a"])(p,r,o,!1,null,null,null);e["default"]=f.exports},e9c6:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("b-row",{staticClass:"text-center"},[a("b-col",[a("h2",{staticClass:"page-section-heading mt-5"},[t._v(t._s(t.title.toUpperCase()))])])],1),a("b-row",{staticClass:"text-center"},[a("b-col",[a("div",{staticClass:"divider-custom"},[a("div",{staticClass:"divider-custom-line"}),a("div",{staticClass:"divider-custom-icon"},[a("i",{staticClass:"fas fa-star"})]),a("div",{staticClass:"divider-custom-line"})])])],1)],1)},o=[],s={name:"HeaderPage",props:["title"]},i=s,n=(a("14fa"),a("2877")),c=Object(n["a"])(i,r,o,!1,null,"4b0c4b4e",null);e["a"]=c.exports},f2e5:function(t,e,a){}}]);
//# sourceMappingURL=chunk-3ac76e5c.0013045a.js.map
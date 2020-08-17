(this["webpackJsonppop-form"]=this["webpackJsonppop-form"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(2),l=a.n(r),i=(a(13),a(3)),o=a(4),u=a(5),c=a(6),h=a(7),m=function(e){return s.a.createElement("div",{className:"form__item form__item--select"},s.a.createElement("label",{className:"form__label",htmlFor:e.name},e.label),e.isRequired&&s.a.createElement("span",{className:"form__label","aria-hidden":"true"},"*"),s.a.createElement("select",{id:e.name,className:"form__select",name:e.name,onChange:e.handleChange,"aria-required":e.isRequired,required:e.isRequired},s.a.createElement("option",{className:"form__select-option",value:""}),e.values.map((function(e,t){return s.a.createElement("option",{key:t+1,className:"form__select-option",value:e},e)}))))},d=function(e){return s.a.createElement("fieldset",{className:"form__item form__item--radio","aria-required":e.isRequired,required:e.isRequired},s.a.createElement("legend",{className:"form__legend"},e.label,e.isRequired&&s.a.createElement("span",{"aria-hidden":"true"},"*")),e.instructions&&s.a.createElement("span",{id:"".concat(e.id,"-instructions"),className:"form__label form__label--instructions"},e.instructions),e.values.map((function(t,a){return s.a.createElement("div",{key:a,className:"form__radio-button-item"},s.a.createElement("input",{id:"".concat(e.id,"-").concat(a),className:"form__radio-button",type:"radio",name:e.name,value:t,checked:e.checked===t,onChange:e.handleChange}),s.a.createElement("label",{className:"form__label",htmlFor:"".concat(e.id,"-").concat(a)},t))})))},g=function(e){Object(h.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={alreadyPlays:null,yearsPlaying:"",grade:"",instrument:"",hasWorkingInstrument:null,school:"",isInPhilly:null,isReturningStudent:null},e.gradeValues=["Kindergarten","1st","2nd","3rd or 4th","5th","6th or 7th","8th","9th, 10th, 11th, or 12th"],e.instrumentValues=["Bass","Bassoon","Cello","Clarinet","Flute","French Horn","Harp","Oboe","Percussion","Trombone","Trumpet","Tuba/Euphonium","Viola","Violin","Other"],e.schoolValues=["Freire Charter Middle School","Independence Charter School West","St. Francis de Sales","No, my student will be attending a different school"],e.getEligibility=function(t,a){if(a)return!0;switch(t){case"Kindergarten":case"1st":case"3rd or 4th":return"St. Francis de Sales"===e.state.school||"Independence Charter School West"===e.state.school;case"5th":return"St. Francis de Sales"===e.state.school||"Independence Charter School West"===e.state.school||"Freire Charter Middle School"===e.state.school||e.state.yearsPlaying>=4;case"6th or 7th":return"Freire Charter Middle School"===e.state.school||e.state.yearsPlaying>=4;case"8th":case"9th, 10th, 11th, or 12th":return e.state.yearsPlaying>=4;default:return!1}},e.getDivision=function(t){var a="yes"===e.state.alreadyPlays,n="yes"===e.state.hasWorkingInstrument||"yes"===e.state.isInPhilly;if(a){if("Bass"===e.state.instrument||"Cello"===e.state.instrument||"Viola"===e.state.instument||"Violin"===e.state.instrument)switch(t){case"1st":case"2nd":return e.state.yearsPlaying>=1?"2A":null;case"3rd or 4th":return e.state.yearsPlaying>=1?"2B":null;case"5th":case"6th or 7th":return"4"!==e.state.yearsPlaying&&"5"!==e.state.yearsPlaying||!n?null:"3A";case"8th":case"9th, 10th, 11th, or 12th":return e.state.yearsPlaying>=6&&n?"3C":null;default:return null}else if("Bassoon"===e.state.instrument||"Clarinet"===e.state.instrument||"Flute"===e.state.instrument||"French Horn"===e.state.instrument||"Harp"===e.state.instrument||"Oboe"===e.state.instrument||"Percussion"===e.state.instrument||"Trombone"===e.state.instrument||"Trumpet"===e.state.instrument||"Tuba/Euphonium"===e.state.instrument)switch(t){case"3rd or 4th":case"5th":case"6th or 7th":return 1!==e.state.yearsPlaying&&2!==e.state.yearsPlaying||!n?null:"3B";case"8th":case"9th, 10th, 11th, or 12th":return e.state.yearsPlaying>=3&&n?"3D":null;default:return null}}else switch(t){case"Kindergarten":case"1st":case"2nd":return"1A";case"3rd or 4th":return"1B";case"5th":case"6th or 7th":return"1C";default:return null}},e.cleanupState=function(){var t={};"Kindergarten"===e.state.grade&&(t.alreadyPlays=null,t.instrument="",t.yearsPlaying="",t.hasWorkingInstrument=null),"no"===e.state.alreadyPlays&&(t.instrument="",t.yearsPlaying="",t.hasWorkingInstrument=null),"no"===e.state.isInPhilly&&(t.isReturningStudent=null,t.school=""),Object.keys(t).length>0&&e.setState(t)},e.handleChange=function(t){e.setState(Object(i.a)({},t.target.name,t.target.value),(function(){e.cleanupState()}))},e.handleSubmit=function(t){var a="yes"===e.state.isInPhilly,n="yes"===e.state.isReturningStudent,s=e.getEligibility(e.state.grade,n)&&a,r=s&&n,l=e.getDivision(e.state.grade);t.preventDefault(),console.group(),console.log("virtual eligible",!0),console.log("in person eligible",s),console.log("in person eligible, returning POP student",r),console.log("division",l),console.groupEnd()},e}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},s.a.createElement(m,{name:"grade",label:"Student Grade",values:this.gradeValues,handleChange:this.handleChange,isRequired:!0}),this.state.grade&&"Kindergarten"!==this.state.grade&&s.a.createElement(d,{label:"Does your student already play an instrument?",values:["yes","no"],id:"already-play",name:"alreadyPlays",checked:this.state.alreadyPlays,handleChange:this.handleChange,isRequired:!0}),"yes"===this.state.alreadyPlays&&s.a.createElement(n.Fragment,null,s.a.createElement(m,{name:"instrument",label:"Select which instrument",values:this.instrumentValues,handleChange:this.handleChange,isRequired:!0}),s.a.createElement("div",{className:"form__item"},s.a.createElement("label",{htmlFor:"years",className:"form__label"},"How long has your student been playing (# of years)?"),s.a.createElement("span",{className:"form__label","aria-hidden":"true"},"*"),s.a.createElement("span",{id:"years-instructions",className:"form__label form__label--instructions"},"If your student has been playing for less than a year, type 0"),s.a.createElement("input",{className:"form__input",type:"number",min:"0",id:"years",name:"yearsPlaying",onChange:this.handleChange,"aria-describedby":"years-instructions"})),s.a.createElement(d,{label:"Do you have a working instrument and the needed supplies at home?",values:["yes","no"],id:"working-instrument",name:"hasWorkingInstrument",checked:this.state.hasWorkingInstrument,handleChange:this.handleChange,isRequired:!0})),s.a.createElement(d,{label:"Does your student live in the Philadelphia, PA region?",values:["yes","no"],id:"in-philly",name:"isInPhilly",checked:this.state.isInPhilly,handleChange:this.handleChange,isRequired:!0}),"yes"===this.state.isInPhilly&&s.a.createElement(d,{label:"Is your student a returning POP student?",instructions:"Includes students who have participated in our regular, school year programming",values:["yes","no"],id:"returning-student",name:"isReturningStudent",checked:this.state.isReturningStudent,handleChange:this.handleChange,isRequired:!0}),"yes"===this.state.isInPhilly&&this.state.grade&&"9th, 10th, 11th, or 12th"!==this.state.grade&&s.a.createElement(m,{name:"school",label:"Will your student be attending any of these schools?",values:this.schoolValues,handleChange:this.handleChange,isRequired:!0}),s.a.createElement("input",{className:"form__button",type:"submit",value:"Submit"}))}}]),a}(n.Component);a(14);var y=function(){return s.a.createElement("div",{className:"app"},s.a.createElement("header",{className:"app-header"},s.a.createElement("a",{href:"https://playonphilly.org"},s.a.createElement("img",{src:"https://21ekz81r9uz03z97uj2tly5i-wpengine.netdna-ssl.com/wp-content/themes/pop/images/logo.png",className:"logo",alt:"Play On Philly"}))),s.a.createElement("h1",null,"Eligibility Survey"),s.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Laila:wght@500;600;700&display=swap",rel:"stylesheet"}),s.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;800;900&display=swap",rel:"stylesheet"}),s.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.359eea16.chunk.js.map
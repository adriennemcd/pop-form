(this["webpackJsonppop-form"]=this["webpackJsonppop-form"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('{"1A":{"inPersonReturning":"https://airtable.com/shrmfWWAZwaFv3WyB","inPerson":"https://airtable.com/shrh1loEFwshffQZz","virtual":"https://airtable.com/shr2Y58hN9RMvcgP0"},"1B":{"inPersonReturning":"https://airtable.com/shr6xFbA2AbPWnQfM","inPerson":"https://airtable.com/shrQWZNYIcBK5Hj72","virtual":"https://airtable.com/shrPI7qNdEFsJdlwI"},"1C":{"inPersonReturning":"https://airtable.com/shrdniZDqIeVwUHvK","inPerson":"https://airtable.com/shr3NbnCPJuXWJmvG","virtual":"https://airtable.com/shr0Eb1SA0oYwV8Os"},"2A":{"inPersonReturning":"https://airtable.com/shrJX0sC6Ae3qmuIw","inPerson":"https://airtable.com/shrPVgYpJpjjFI8kE","virtual":"https://airtable.com/shrtEaUe2uVOXJq4H"},"2B":{"inPersonReturning":"https://airtable.com/shrhunOCtcMoXw7jc","inPerson":"https://airtable.com/shrTvfvrTN3XmOBbg","virtual":"https://airtable.com/shrUV8gY6LiRMGG7f"},"3A":{"inPersonReturning":"https://airtable.com/shrT1CjTnOyW6pMM8","inPerson":"https://airtable.com/shrr0oMZyB6aCnsF2","virtual":"https://airtable.com/shrI4IwBQueVKS7ox"},"3B":{"inPersonReturning":"https://airtable.com/shrevqECns168wJd5","inPerson":"https://airtable.com/shruBbtc0nLOc0nBg","virtual":"https://airtable.com/shrc1pADyaOao1Ntt"},"3C":{"inPersonReturning":"https://airtable.com/shrMZOeQnyTiJM1fH","inPerson":"https://airtable.com/shrmjKlmGZKgbf2FB","virtual":"https://airtable.com/shrAnDqHG6tBICRan"},"3D":{"inPersonReturning":"https://airtable.com/shrSt4jjLk9kkP6PU","inPerson":"https://airtable.com/shrSoDSmrfo0tXV1t","virtual":"https://airtable.com/shrBt4Elc3vUpg6Sk"}}')},function(e){e.exports=JSON.parse('{"ineligible":{"ieTitle":"Thank you for completing our eligibility survey!","ineligibility":"At this time, we are unable to provide programming for your student. If you have any questions, please reach out to our Program Manager at"},"eligible":{"title":"Congratulations!","eligibility1":"Your student is eligible for","eligibility2":"of our virtual programming","schedule":"If you register, your student\'s classes would take place on:","inPerson":"Your student is also eligible for our in-person programming. We\'re unable to determine when we will go back to in-person programming at this time, but we will provide you with more information when we have it.","register":"Register now"},"waitingList":{"wlTitle":"Thank you for completing our eligibility survey!","wlEligibility1":"Your student is eligible for","wlEligibility2":"of our virtual programming","message":"Unfortunately, this division is currently at capacity and cannot accept any additional students. Please complete our waiting list form and we will contact you if a slot opens up.","CTA":"Join waiting list","wlLink":"https://airtable.com/shrt6OmHWFSJmv0nf"}}')},function(e){e.exports=JSON.parse('{"1A":true,"1B":false,"1C":false,"2A":false,"2B":false,"3A":false,"3B":false,"3C":false,"3D":false}')},function(e){e.exports=JSON.parse('{"1A":{"days":"Monday, Wednesday, Friday","time":"3:30 - 4:00pm"},"1B":{"days":"Monday, Wednesday, Friday","time":"3:30 - 4:00pm"},"1C":{"days":"Monday, Wednesday, Friday","time":"4:45 - 5:45pm"},"2A":{"days":"Monday, Wednesday, Friday","time":"3:30 - 4:00pm"},"2B":{"days":"Monday, Wednesday, Friday","time":"3:30 - 4:00pm"},"3A":{"days":"Tuesday, Thursday, Friday","time":"4:45 - 5:15pm"},"3B":{"days":"Tuesday, Thursday, Friday","time":"4:45 - 5:15pm"},"3C":{"days":"Tuesday, Thursday, Friday","time":"3:30 - 4:30pm"},"3D":{"days":"Tuesday, Thursday, Friday","time":"3:30 - 4:30pm"}}')},,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(11),s=a.n(r),l=(a(18),a(1)),o=a(2),c=a(3),u=a(4),m=a(5),h=a(12),d=function(e,t){return i.a.createElement("div",{className:"form__item form__item--select"},i.a.createElement("label",{className:"form__label",htmlFor:e.name},e.label),e.isRequired&&i.a.createElement("span",{className:"form__label","aria-hidden":"true"},"*"),i.a.createElement("select",{id:e.name,className:"form__select",name:e.name,onChange:e.handleChange,"aria-required":e.isRequired,required:e.isRequired,ref:t,"aria-describedby":"".concat(e.id,"-instructions ").concat(e.id,"-error"),"aria-invalid":e.invalid},i.a.createElement("option",{className:"form__select-option",value:""}),e.values.map((function(e,t){return i.a.createElement("option",{key:t+1,className:"form__select-option",value:e},e)}))),e.invalid&&i.a.createElement("span",{id:"".concat(e.id,"-error"),className:"form__label form__label--error"},"This field is required"))};d.displayName="Select";var y=Object(n.forwardRef)(d),f=function(e,t){return i.a.createElement("fieldset",{className:"form__item form__item--radio","aria-required":e.isRequired,required:e.isRequired},i.a.createElement("legend",{className:"form__legend"},e.label,e.isRequired&&i.a.createElement("span",{"aria-hidden":"true"},"*")),e.instructions&&i.a.createElement("span",{id:"".concat(e.id,"-instructions"),className:"form__label form__label--instructions"},e.instructions),e.values.map((function(a,n){return i.a.createElement("div",{key:n,className:"form__radio-button-item"},i.a.createElement("input",{id:"".concat(e.id,"-").concat(n),className:"form__radio-button",type:"radio",name:e.name,value:a,checked:e.checked===a,onChange:e.handleChange,ref:t,"aria-describedby":"".concat(e.id,"-instructions ").concat(e.id,"-error"),"aria-invalid":e.invalid}),i.a.createElement("label",{className:"form__label",htmlFor:"".concat(e.id,"-").concat(n)},a))})),e.invalid&&i.a.createElement("span",{id:"".concat(e.id,"-error"),className:"form__label form__label--error"},"This field is required"))};f.displayName="RadioGroup";var g=Object(n.forwardRef)(f),p=a(6),b=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={alreadyPlays:null,yearsPlaying:"",grade:"",instrument:"",hasWorkingInstrument:null,school:"",isInPhilly:null,isReturningStudent:null,invalidInputs:[]},e.alreadyPlaysRef=Object(n.createRef)(),e.yearsPlayingRef=Object(n.createRef)(),e.gradeRef=Object(n.createRef)(),e.instrumentRef=Object(n.createRef)(),e.hasWorkingInstrumentRef=Object(n.createRef)(),e.schoolRef=Object(n.createRef)(),e.isInPhillyRef=Object(n.createRef)(),e.isReturningStudentRef=Object(n.createRef)(),e.gradeValues=["Kindergarten","1st","2nd","3rd or 4th","5th","6th or 7th","8th","9th, 10th, 11th, or 12th"],e.instrumentValues=["Bass","Bassoon","Cello","Clarinet","Flute","French Horn","Harp","Oboe","Percussion","Trombone","Trumpet","Tuba/Euphonium","Viola","Violin","Other"],e.schoolValues=["Freire Charter Middle School","Independence Charter School West","St. Francis de Sales","No, my student will be attending a different school"],e.getEligibility=function(t,a){if(a)return!0;switch(t){case"Kindergarten":case"1st":case"3rd or 4th":return"St. Francis de Sales"===e.state.school||"Independence Charter School West"===e.state.school;case"5th":return"St. Francis de Sales"===e.state.school||"Independence Charter School West"===e.state.school||"Freire Charter Middle School"===e.state.school||e.state.yearsPlaying>=4;case"6th or 7th":return"Freire Charter Middle School"===e.state.school||e.state.yearsPlaying>=4;case"8th":case"9th, 10th, 11th, or 12th":return e.state.yearsPlaying>=4;default:return!1}},e.getDivision=function(t){var a="yes"===e.state.alreadyPlays,n="yes"===e.state.hasWorkingInstrument||"yes"===e.state.isInPhilly;if(a){if("Bass"===e.state.instrument||"Cello"===e.state.instrument||"Viola"===e.state.instument||"Violin"===e.state.instrument)switch(t){case"1st":case"2nd":return e.state.yearsPlaying>=1?"2A":null;case"3rd or 4th":return e.state.yearsPlaying>=1?"2B":null;case"5th":case"6th or 7th":return e.state.yearsPlaying>="4"&&n?"3A":null;case"8th":case"9th, 10th, 11th, or 12th":return e.state.yearsPlaying>=6&&n?"3C":null;default:return null}else if("Bassoon"===e.state.instrument||"Clarinet"===e.state.instrument||"Flute"===e.state.instrument||"French Horn"===e.state.instrument||"Harp"===e.state.instrument||"Oboe"===e.state.instrument||"Percussion"===e.state.instrument||"Trombone"===e.state.instrument||"Trumpet"===e.state.instrument||"Tuba/Euphonium"===e.state.instrument)switch(t){case"3rd or 4th":case"5th":case"6th or 7th":return e.state.yearsPlaying>=1&&n?"3B":null;case"8th":case"9th, 10th, 11th, or 12th":return e.state.yearsPlaying>=3&&n?"3D":null;default:return null}}else switch(t){case"Kindergarten":case"1st":case"2nd":return"1A";case"3rd or 4th":return"1B";case"5th":case"6th or 7th":return"1C";default:return null}},e.cleanupState=function(){var t={};"Kindergarten"===e.state.grade&&(t.alreadyPlays=null,t.instrument="",t.yearsPlaying="",t.hasWorkingInstrument=null),"no"===e.state.alreadyPlays&&(t.instrument="",t.yearsPlaying="",t.hasWorkingInstrument=null),"no"===e.state.isInPhilly&&(t.isReturningStudent=null,t.school=""),Object.keys(t).length>0&&e.setState(t)},e.validateErrors=function(){var t=e.state,a=(t.invalidInputs,Object(h.a)(t,["invalidInputs"])),n=[];return Object.keys(a).map((function(t,a){e["".concat(t,"Ref")].current&&!e.state[t]&&n.push(t)})),n},e.assignPlacement=function(){var t="yes"===e.state.isInPhilly,a="yes"===e.state.isReturningStudent,n=e.getEligibility(e.state.grade,a)&&t,i=n&&a,r=e.getDivision(e.state.grade);return{link:r?i?p[r].inPersonReturning:n?p[r].inPerson:p[r].virtual:"",division:r,inPersonEligible:n,inPersonEligibleReturning:i}},e.handleChange=function(t){var a=t.target,n=a.name,i=a.value;if(e.state.invalidInputs.includes(n)){var r,s=e.state.invalidInputs.filter((function(e){return e!==n}));e.setState((r={},Object(m.a)(r,n,i),Object(m.a)(r,"invalidInputs",s),r),(function(){e.cleanupState()}))}else e.setState(Object(m.a)({},n,i),(function(){e.cleanupState()}))},e.handleSubmit=function(t){t.preventDefault(),e.setState({invalidInputs:[]},(function(){var t=e.validateErrors();if(t.length>0)e.setState({invalidInputs:t});else{var a=e.assignPlacement();e.props.handleSubmit(a)}}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.invalidInputs;return i.a.createElement("form",{className:"form",onSubmit:this.handleSubmit,noValidate:!0},i.a.createElement(y,{name:"grade",label:"Student Grade",values:this.gradeValues,handleChange:this.handleChange,isRequired:!0,ref:this.gradeRef,invalid:e.includes("grade")}),this.state.grade&&"Kindergarten"!==this.state.grade&&i.a.createElement(g,{label:"Does your student already play an instrument?",values:["yes","no"],id:"already-play",name:"alreadyPlays",checked:this.state.alreadyPlays,handleChange:this.handleChange,isRequired:!0,ref:this.alreadyPlaysRef,invalid:e.includes("alreadyPlays")}),"yes"===this.state.alreadyPlays&&i.a.createElement(n.Fragment,null,i.a.createElement(y,{name:"instrument",label:"Select which instrument",values:this.instrumentValues,handleChange:this.handleChange,isRequired:!0,ref:this.instrumentRef,invalid:e.includes("instrument")}),i.a.createElement("div",{className:"form__item"},i.a.createElement("label",{htmlFor:"years",className:"form__label"},"How long has your student been playing (# of years)?"),i.a.createElement("span",{className:"form__label","aria-hidden":"true"},"*"),i.a.createElement("span",{id:"years-instructions",className:"form__label form__label--instructions"},"If your student has been playing for less than a year, type 0"),i.a.createElement("input",{className:"form__input",type:"number",min:"0",id:"years",name:"yearsPlaying",onChange:this.handleChange,"aria-describedby":"years-instructions years-error",ref:this.yearsPlayingRef,"aria-invalid":e.includes("yearsPlaying")}),e.includes("yearsPlaying")&&i.a.createElement("span",{id:"years-error",className:"form__label form__label--error"},"This field is required")),i.a.createElement(g,{label:"Do you have a working instrument and the needed supplies at home?",values:["yes","no"],id:"working-instrument",name:"hasWorkingInstrument",checked:this.state.hasWorkingInstrument,handleChange:this.handleChange,isRequired:!0,ref:this.hasWorkingInstrumentRef,invalid:e.includes("hasWorkingInstrument")})),i.a.createElement(g,{label:"Does your student live in the Philadelphia, PA region?",values:["yes","no"],id:"in-philly",name:"isInPhilly",checked:this.state.isInPhilly,handleChange:this.handleChange,isRequired:!0,ref:this.isInPhillyRef,invalid:e.includes("isInPhilly")}),"yes"===this.state.isInPhilly&&i.a.createElement(g,{label:"Is your student a returning POP student?",instructions:"Includes students who have participated in our regular, school year programming",values:["yes","no"],id:"returning-student",name:"isReturningStudent",checked:this.state.isReturningStudent,handleChange:this.handleChange,isRequired:!0,ref:this.isReturningStudentRef,invalid:e.includes("isReturningStudent")}),"yes"===this.state.isInPhilly&&this.state.grade&&"9th, 10th, 11th, or 12th"!==this.state.grade&&i.a.createElement(y,{name:"school",label:"Will your student be attending any of these schools?",values:this.schoolValues,handleChange:this.handleChange,isRequired:!0,ref:this.schoolRef,invalid:e.includes("school")}),i.a.createElement("input",{className:"form__button",type:"submit",value:"Submit"}))}}]),a}(n.Component),v=a(7),_=a(8),E=a(9);var P=function(e){var t=e.placement,a=t.division,r=t.link,s=t.inPersonEligible,l=v.ineligible,o=l.ieTitle,c=l.ineligibility,u=v.eligible,m=u.title,h=u.eligibility1,d=u.eligibility2,y=u.schedule,f=u.inPerson,g=u.register,p=v.waitingList,b=p.wlTitle,P=p.wlEligibility1,R=p.wlEligibility2,w=p.message,N=p.CTA,S=p.wlLink;return i.a.createElement("div",{className:"confirmation"},!a&&i.a.createElement(n.Fragment,null,i.a.createElement("p",{className:"confirmation__title"},o),i.a.createElement("p",{className:"confirmation__text"},c," ",i.a.createElement("a",{href:"mailto: michael@playonphilly.org"},"michael@playonphilly.org"),".")),a&&!_[a]&&i.a.createElement(n.Fragment,null,i.a.createElement("p",{className:"confirmation__title"},m),i.a.createElement("p",{className:"confirmation__text"},h," ",i.a.createElement("span",{className:"confirmation__text confirmation__text--emphasis"},"Division ",a)," ",d,"."),i.a.createElement("p",{className:"confirmation__text"},y,i.a.createElement("br",null),i.a.createElement("span",{className:"confirmation__text confirmation__text--emphasis"},E[a].days,i.a.createElement("br",null),E[a].time)),s&&i.a.createElement("p",{className:"confirmation__text"},f),i.a.createElement("a",{href:r,className:"confirmation__button"},g)),a&&_[a]&&i.a.createElement(n.Fragment,null,i.a.createElement("p",{className:"confirmation__title"},b),i.a.createElement("p",{className:"confirmation__text"},P," ",i.a.createElement("span",{className:"confirmation__text confirmation__text--emphasis"},"Division ",a)," ",R,"."),i.a.createElement("p",{className:"confirmation__text"},w),i.a.createElement("a",{href:"".concat(S),className:"confirmation__button"},N)))},R=(a(19),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={placement:{}},e.handleSubmit=function(t){e.setState({placement:t})},e}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"app"},i.a.createElement("header",{className:"app-header"}),Object.keys(this.state.placement).length>0?i.a.createElement(P,{placement:this.state.placement}):i.a.createElement(b,{handleSubmit:this.handleSubmit}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Laila:wght@500;600;700&display=swap",rel:"stylesheet"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;800;900&display=swap",rel:"stylesheet"}),i.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.52a29e41.chunk.js.map
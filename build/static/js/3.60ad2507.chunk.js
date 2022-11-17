/*! For license information please see 3.60ad2507.chunk.js.LICENSE.txt */
(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[3],{1173:function(e,t,r){"use strict";var n=r(1),a=r(4),o=r(0),i=r(3),c=r(7),l=o.forwardRef((function(e,t){var r=e.classes,c=e.className,l=e.component,s=void 0===l?"div":l,u=Object(a.a)(e,["classes","className","component"]);return o.createElement(s,Object(n.a)({className:Object(i.a)(r.root,c),ref:t},u))}));t.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)},1595:function(e,t,r){"use strict";var n=r(1),a=r(4),o=r(0),i=r(3),c=r(55),l=r(135),s=r(81),u=r(7),d=r(1062),m=o.forwardRef((function(e,t){var r=e.autoFocus,u=e.checked,m=e.checkedIcon,h=e.classes,p=e.className,f=e.defaultChecked,v=e.disabled,y=e.icon,b=e.id,g=e.inputProps,w=e.inputRef,E=e.name,x=e.onBlur,k=e.onChange,O=e.onFocus,j=e.readOnly,N=e.required,S=e.tabIndex,L=e.type,B=e.value,C=Object(a.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),I=Object(l.a)({controlled:u,default:Boolean(f),name:"SwitchBase",state:"checked"}),P=Object(c.a)(I,2),z=P[0],F=P[1],_=Object(s.a)(),T=v;_&&"undefined"===typeof T&&(T=_.disabled);var q="checkbox"===L||"radio"===L;return o.createElement(d.a,Object(n.a)({component:"span",className:Object(i.a)(h.root,p,z&&h.checked,T&&h.disabled),disabled:T,tabIndex:null,role:void 0,onFocus:function(e){O&&O(e),_&&_.onFocus&&_.onFocus(e)},onBlur:function(e){x&&x(e),_&&_.onBlur&&_.onBlur(e)},ref:t},C),o.createElement("input",Object(n.a)({autoFocus:r,checked:u,defaultChecked:f,className:h.input,disabled:T,id:q&&b,name:E,onChange:function(e){var t=e.target.checked;F(t),k&&k(e,t)},readOnly:j,ref:w,required:N,tabIndex:S,type:L,value:B},g)),z?m:y)})),h=Object(u.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(m),p=r(118),f=Object(p.a)(o.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),v=Object(p.a)(o.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),y=r(26),b=Object(p.a)(o.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),g=r(8),w=o.createElement(v,null),E=o.createElement(f,null),x=o.createElement(b,null),k=o.forwardRef((function(e,t){var r=e.checkedIcon,c=void 0===r?w:r,l=e.classes,s=e.color,u=void 0===s?"secondary":s,d=e.icon,m=void 0===d?E:d,p=e.indeterminate,f=void 0!==p&&p,v=e.indeterminateIcon,y=void 0===v?x:v,b=e.inputProps,k=e.size,O=void 0===k?"medium":k,j=Object(a.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),N=f?y:m,S=f?y:c;return o.createElement(h,Object(n.a)({type:"checkbox",classes:{root:Object(i.a)(l.root,l["color".concat(Object(g.a)(u))],f&&l.indeterminate),checked:l.checked,disabled:l.disabled},color:u,inputProps:Object(n.a)({"data-indeterminate":f},b),icon:o.cloneElement(N,{fontSize:void 0===N.props.fontSize&&"small"===O?O:N.props.fontSize}),checkedIcon:o.cloneElement(S,{fontSize:void 0===S.props.fontSize&&"small"===O?O:S.props.fontSize}),ref:t},j))}));t.a=Object(u.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(y.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(y.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(k)},1603:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(43),i=r(21),c=r(1017),l=r(1067),s=r(1072),u=r(1051),d=r(1172),m=r(1173),h=r(1019),p=r(1055),f=r(1050),v=r(317),y=r(97),b=r(79),g=r(36),w=r(54),E=r(3),x=r(1128),k=r(1131),O=r(1063),j=r(1595),N=r(1033),S=r(66),L=["className","onSubmitSuccess"];function B(){B=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(N){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof d?t:d,o=Object.create(a.prototype),i=new k(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(N){return{type:"throw",arg:N}}}e.wrap=l;var u={};function d(){}function m(){}function h(){}var p={};c(p,a,(function(){return this}));var f=Object.getPrototypeOf,v=f&&f(f(O([])));v&&v!==t&&r.call(v,a)&&(p=v);var y=h.prototype=d.prototype=Object.create(p);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return m.prototype=h,c(y,"constructor",h),c(h,"constructor",m),m.displayName=c(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(g.prototype),c(g.prototype,o,(function(){return this})),e.AsyncIterator=g,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new g(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(y),c(y,i,"Generator"),c(y,a,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}var C=Object(c.a)((function(){return{root:{}}}));function I(e){var t=e.className,r=e.onSubmitSuccess,n=Object(g.a)(e,L),o=C(),i=Object(w.b)();return a.a.createElement(k.a,{initialValues:{firstName:"",lastName:"",email:"",password:"",policy:!1},validationSchema:x.b().shape({firstName:x.c().max(255).required("First name is required"),lastName:x.c().max(255).required("Last name is required"),email:x.c().email("Must be a valid email").max(255).required("Email is required"),password:x.c().min(7).max(255).required("Password is required"),policy:x.a().oneOf([!0],"This field must be checked")}),onSubmit:function(){var e=Object(b.a)(B().mark((function e(t,n){var a,o,c;return B().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.setErrors,o=n.setStatus,c=n.setSubmitting,e.prev=1,e.next=4,i(Object(S.i)(t));case 4:r(),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(1),o({success:!1}),a({submit:e.t0.message}),c(!1);case 12:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,r){return e.apply(this,arguments)}}()},(function(e){var r=e.errors,i=e.handleBlur,c=e.handleChange,l=e.handleSubmit,d=e.isSubmitting,m=e.touched,p=e.values;return a.a.createElement("form",Object.assign({className:Object(E.a)(o.root,t),onSubmit:l},n),a.a.createElement(O.a,{error:Boolean(m.firstName&&r.firstName),fullWidth:!0,helperText:m.firstName&&r.firstName,label:"First Name",margin:"normal",name:"firstName",onBlur:i,onChange:c,type:"firstName",value:p.firstName,variant:"outlined"}),a.a.createElement(O.a,{error:Boolean(m.lastName&&r.lastName),fullWidth:!0,helperText:m.lastName&&r.lastName,label:"Last Name",margin:"normal",name:"lastName",onBlur:i,onChange:c,type:"lastName",value:p.lastName,variant:"outlined"}),a.a.createElement(O.a,{error:Boolean(m.email&&r.email),fullWidth:!0,helperText:m.email&&r.email,label:"Email Address",margin:"normal",name:"email",onBlur:i,onChange:c,type:"email",value:p.email,variant:"outlined"}),a.a.createElement(O.a,{error:Boolean(m.password&&r.password),fullWidth:!0,helperText:m.password&&r.password,label:"Password",margin:"normal",name:"password",onBlur:i,onChange:c,type:"password",value:p.password,variant:"outlined"}),a.a.createElement(s.a,{alignItems:"center",display:"flex",mt:2,ml:-1},a.a.createElement(j.a,{checked:p.policy,name:"policy",onChange:c}),a.a.createElement(h.a,{variant:"body2",color:"textSecondary"},"I have read the"," ",a.a.createElement(f.a,{component:"a",href:"#",color:"secondary"},"Terms and Conditions"))),Boolean(m.policy&&r.policy)&&a.a.createElement(N.a,{error:!0},r.policy),a.a.createElement(s.a,{mt:2},a.a.createElement(u.a,{color:"secondary",disabled:d,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Create account")))}))}I.default={onSubmitSuccess:function(){}};var P=I,z=Object(c.a)((function(e){return{root:{justifyContent:"center",backgroundColor:e.palette.background.dark,display:"flex",height:"100%",minHeight:"100%",flexDirection:"column",paddingBottom:80,paddingTop:80}}}));t.default=function(){var e=z(),t=Object(i.g)();return a.a.createElement(v.a,{className:e.root,title:"Register"},a.a.createElement(l.a,{maxWidth:"sm"},a.a.createElement(s.a,{mb:5,display:"flex",alignItems:"center"},a.a.createElement(o.a,{to:"/"},a.a.createElement(y.a,null)),a.a.createElement(u.a,{component:o.a,to:"/",className:e.backButton},"Back to home")),a.a.createElement(d.a,null,a.a.createElement(m.a,null,a.a.createElement(h.a,{gutterBottom:!0,variant:"h2",color:"textPrimary"},"Sign up"),a.a.createElement(h.a,{variant:"subtitle1"},"Sign up on the internal platform"),a.a.createElement(s.a,{mt:3},a.a.createElement(P,{onSubmitSuccess:function(){t.push("/app/login")}})),a.a.createElement(s.a,{my:2},a.a.createElement(p.a,null)),a.a.createElement(f.a,{component:o.a,to:"/login",variant:"body2",color:"textSecondary"},"Have an account?")))))}}}]);
//# sourceMappingURL=3.60ad2507.chunk.js.map
/*!
  * Vuesax v4.0.1-alpha.21 🖖 (https://lusaxweb.github.io/vuesax/)
  * Forged by Luis Daniel Rovira
  * Released under the MIT License.
  * Donate: https://www.patreon.com/bePatron?c=1567892
  * © 2019, Lusaxweb. (https://lusaxweb.net)
  */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):"object"==typeof exports?exports.vsoAlert=t(require("vue")):e.vsoAlert=t(e.Vue)}("undefined"!=typeof self?self:this,function(n){return(i={},o.m=r=[function(e,t,n){"use strict";var r=n(4),l=n.n(r),c="undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function s(n,r,o){(o?Reflect.getOwnMetadataKeys(r,o):Reflect.getOwnMetadataKeys(r)).forEach(function(e){var t=o?Reflect.getOwnMetadata(e,r,o):Reflect.getOwnMetadata(e,r);o?Reflect.defineMetadata(e,t,n,o):Reflect.defineMetadata(e,t,n)})}var u={__proto__:[]}instanceof Array;function a(o){return function(e,t,n){var r="function"==typeof e?e:e.constructor;r.__decorators__||(r.__decorators__=[]),"number"!=typeof n&&(n=void 0),r.__decorators__.push(function(e){return o(e,t,n)})}}var p=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function o(e,r){void 0===r&&(r={}),r.name=r.name||e._componentTag||e.name;var o=e.prototype;Object.getOwnPropertyNames(o).forEach(function(t){if("constructor"!==t)if(-1<p.indexOf(t))r[t]=o[t];else{var n=Object.getOwnPropertyDescriptor(o,t);void 0!==n.value?"function"==typeof n.value?(r.methods||(r.methods={}))[t]=n.value:(r.mixins||(r.mixins=[])).push({data:function(){var e;return(e={})[t]=n.value,e}}):(n.get||n.set)&&((r.computed||(r.computed={}))[t]={get:n.get,set:n.set})}}),(r.mixins||(r.mixins=[])).push({data:function(){return function(r,e){var t=e.prototype._init;e.prototype._init=function(){var e=this,t=Object.getOwnPropertyNames(r);if(r.$options.props)for(var n in r.$options.props)r.hasOwnProperty(n)||t.push(n);t.forEach(function(t){"_"!==t.charAt(0)&&Object.defineProperty(e,t,{get:function(){return r[t]},set:function(e){r[t]=e},configurable:!0})})};var n=new e;e.prototype._init=t;var o={};return Object.keys(n).forEach(function(e){void 0!==n[e]&&(o[e]=n[e])}),o}(this,e)}});var t=e.__decorators__;t&&(t.forEach(function(e){return e(r)}),delete e.__decorators__);var n=Object.getPrototypeOf(e.prototype),i=n instanceof l.a?n.constructor:l.a,a=i.extend(r);return function(o,i,a){Object.getOwnPropertyNames(i).forEach(function(e){if(!d[e]){var t=Object.getOwnPropertyDescriptor(o,e);if(!t||t.configurable){var n=Object.getOwnPropertyDescriptor(i,e);if(!u){if("cid"===e)return;var r=Object.getOwnPropertyDescriptor(a,e);if(!function(e){var t=typeof e;return null==e||"object"!=t&&"function"!=t}(n.value)&&r&&r.value===n.value)return}0,Object.defineProperty(o,e,n)}}})}(a,e,i),c&&function(t,n){s(t,n),Object.getOwnPropertyNames(n.prototype).forEach(function(e){s(t.prototype,n.prototype,e)}),Object.getOwnPropertyNames(n).forEach(function(e){s(t,n,e)})}(a,e),a}var d={prototype:!0,arguments:!0,callee:!0,caller:!0};function i(t){return"function"==typeof t?o(t):function(e){return o(e,t)}}i.registerHooks=function(e){p.push.apply(p,e)};var f=i;n.d(t,"b",function(){return g}),n.d(t,"c",function(){return y}),n.d(t,"a",function(){return f});var h="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function b(e,t,n){h&&(Array.isArray(e)||"function"==typeof e||void 0!==e.type||(e.type=Reflect.getMetadata("design:type",t,n)))}function g(n){return void 0===n&&(n={}),function(e,t){b(n,e,t),a(function(e,t){(e.props||(e.props={}))[t]=n})(e,t)}}function y(r,e){void 0===e&&(e={});var t=e.deep,o=void 0!==t&&t,n=e.immediate,i=void 0!==n&&n;return a(function(e,t){"object"!=typeof e.watch&&(e.watch=Object.create(null));var n=e.watch;"object"!=typeof n[r]||Array.isArray(n[r])?void 0===n[r]&&(n[r]=[]):n[r]=[n[r]],n[r].push({handler:t,deep:o,immediate:i})})}},function(e,t){e.exports=function(n,r,e,t,o){var i={};return Object.keys(t).forEach(function(e){i[e]=t[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=e.slice().reverse().reduce(function(e,t){return t(n,r,e)||e},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(n,r,i),i=null),i}},function(e,t){e.exports=function(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){e.exports=n},function(e,t){e.exports=function(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}},function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return a});function u(e,t,n){n?"#comment"!==n.nodeName&&n.style.setProperty("--vso-"+e,t):document.documentElement.style.setProperty("--vso-"+e,t)}var r=function(e,t,n,r){var o,i=/^(rgb|rgba)/.test(t),a=/^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(t),l=/^(#)/.test(t);if("dark"==t&&n&&n.classList.add("vso-component-dark"),i){var c=t.replace(/[rgba()]/g,"").split(",");o=c[0]+","+c[1]+","+c[2],u(e,o,n),r&&n.classList.add("vso-change-color")}else if(l){var s=function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,r){return t+t+n+n+r+r});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}(t);o=s.r+","+s.g+","+s.b,u(e,o,n),r&&n.classList.add("vso-change-color")}else if(function(e){return["primary","secondary","success","danger","warning","dark","light","warn","facebook","twitter","youtube","pinterest","linkedin","snapchat","whatsapp","tumblr","reddit","spotify","amazon","medium","vimeo","skype","dribbble","slack","yahoo","twitch","discord","telegram","google-plus","messenger"].includes(e)}(t)){o=getComputedStyle(document.body).getPropertyValue("--vso-"+t),u(e,o,n),r&&n.classList.add("vso-change-color")}else a&&(u(e,t,n),r&&n.classList.add("vso-change-color"))},o=function(e,t){var n=t||document.body;n.insertBefore(e,n.lastChild)},i=function(e,t){var n=t.getBoundingClientRect(),r=n.x,o=n.y,i=n.width,a=n.height,l=e.style,c=window.pageYOffset,s=e.clientHeight+n.y+c;c+window.innerHeight-s<30?(l.top=o+c-e.clientHeight-4+"px",l.left=r+"px",l.width=i+"px",e.classList.add("top"),t.classList.add("top")):(l.top=o+c+a-4+"px",l.left=r+"px",l.width=i+"px",e.classList.remove("top"),t.classList.remove("top"))},a=function(e,t,n){var r=t.getBoundingClientRect(),o=r.x,i=r.y,a=r.width,l=r.height,c=e.style,s=window.pageYOffset,u=e.clientHeight+r.y+s,p=s+window.innerHeight;if(o+a+10+e.getBoundingClientRect().width>window.innerWidth&&"right"==n&&(n="left",e.classList.remove("right"),e.classList.add("left")),o-10<e.getBoundingClientRect().width&&"left"==n&&(n="top",e.classList.remove("left"),e.classList.add("top")),p-u<30||"top"==n){c.top=i+s-e.clientHeight-8+"px";var d=o+(a-e.getBoundingClientRect().width)/2;d+e.getBoundingClientRect().width<window.innerWidth?0<d?c.left=d+"px":(c.left="10px",e.classList.add("notArrow")):(c.left="auto",c.right="10px",e.classList.add("notArrow"))}else if("bottom"==n){c.top=i+s+l+8+"px";var f=o+(a-e.getBoundingClientRect().width)/2;f+e.getBoundingClientRect().width<window.innerWidth?0<f?c.left=f+"px":(c.left="10px",e.classList.add("notArrow")):(c.left="auto",c.right="10px",e.classList.add("notArrow"))}else"left"==n?(c.top=i+s+(l-e.getBoundingClientRect().height)/2+"px",c.left=o-e.getBoundingClientRect().width-8+"px"):"right"==n&&(c.top=i+s+(l-e.getBoundingClientRect().height)/2+"px",c.left=o+a+8+"px")}},function(e,t){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t){e.exports=function(e,t){throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.")}},function(e,t,n){"use strict";n.d(t,"a",function(){return T});var r,o,i,a,l,c,s,u,p,d,f,h,b,g,y,v,m,w,O,j,C,_,P,x,k=n(2),$=n.n(k),z=n(7),B=n.n(z),W=n(3),D=n.n(W),H=n(5),R=n.n(H),L=n(1),E=n.n(L),A=(n(8),n(4)),M=n.n(A),S=n(0),N=n(6),T=(r=Object(S.b)({type:String,default:null}),o=Object(S.b)({type:Boolean,default:!1}),i=Object(S.b)({type:Boolean,default:!1}),a=Object(S.b)({type:Boolean,default:!1}),l=Object(S.b)({type:Boolean,default:!1}),c=Object(S.b)({type:Boolean,default:!1}),s=Object(S.b)({type:Boolean,default:!1}),u=Object(S.c)("color"),p=Object(S.c)("primary"),d=Object(S.c)("danger"),f=Object(S.c)("success"),h=Object(S.c)("warn"),b=Object(S.c)("dark"),Object(S.a)((x=P=function(o){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=o.call.apply(o,[this].concat(n))||this).componentColor=null,$()(e,"color",v,D()(e)),$()(e,"danger",m,D()(e)),$()(e,"success",w,D()(e)),$()(e,"warn",O,D()(e)),$()(e,"dark",j,D()(e)),$()(e,"primary",C,D()(e)),$()(e,"active",_,D()(e)),e}R()(e,o);var t=e.prototype;return t.changeColor=function(){this.$el&&"#comment"!=this.$el.nodeName&&(this.componentColor=(this.danger?"danger":this.success&&"success")||this.warn&&"warn"||this.dark&&"dark"||this.primary&&"primary",(this.color||this.componentColor)&&(Object(N.b)("color",this.componentColor||this.color||"primary",this.$el,!0),this.$refs.options&&Object(N.b)("color",this.componentColor||this.color||"primary",this.$refs.options,!0),this.$refs.tooltip&&Object(N.b)("color",this.componentColor||this.color||"primary",this.$refs.tooltip,!0)),"dark"==this.componentColor||"dark"==this.color?this.$el.classList.add("vso-component-dark"):this.$el.classList.remove("vso-component-dark"),"white"==this.componentColor?this.$el.classList.add("vso-component-white"):this.$el.classList.remove("vso-component-white"))},t.handleWatchColor=function(){this.changeColor()},t.handleWatchPrimary=function(){this.changeColor()},t.handleWatchDanger=function(){this.changeColor()},t.handleWatchSuccess=function(){this.changeColor()},t.handleWatchWarn=function(){this.changeColor()},t.handleWatchDark=function(){this.changeColor()},t.updated=function(){this.changeColor()},t.mounted=function(){this.changeColor()},B()(e,[{key:"isColorDark",get:function(){return"dark"===this.color||this.dark||"dark"===this.componentColor}}]),e}(M.a),P.install=void 0,P.use=void 0,y=x,v=E()(y.prototype,"color",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=E()(y.prototype,"danger",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=E()(y.prototype,"success",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=E()(y.prototype,"warn",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=E()(y.prototype,"dark",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=E()(y.prototype,"primary",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=E()(y.prototype,"active",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),E()(y.prototype,"handleWatchColor",[u],Object.getOwnPropertyDescriptor(y.prototype,"handleWatchColor"),y.prototype),E()(y.prototype,"handleWatchPrimary",[p],Object.getOwnPropertyDescriptor(y.prototype,"handleWatchPrimary"),y.prototype),E()(y.prototype,"handleWatchDanger",[d],Object.getOwnPropertyDescriptor(y.prototype,"handleWatchDanger"),y.prototype),E()(y.prototype,"handleWatchSuccess",[f],Object.getOwnPropertyDescriptor(y.prototype,"handleWatchSuccess"),y.prototype),E()(y.prototype,"handleWatchWarn",[h],Object.getOwnPropertyDescriptor(y.prototype,"handleWatchWarn"),y.prototype),E()(y.prototype,"handleWatchDark",[b],Object.getOwnPropertyDescriptor(y.prototype,"handleWatchDark"),y.prototype),g=y))||g)},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){},,function(e,t,n){"use strict";n.d(t,"a",function(){return v});var r,o,i,a,l=n(2),c=n.n(l),s=n(3),u=n.n(s),p=n(5),d=n.n(p),f=n(1),h=n.n(f),b=(n(8),n(4)),g=n.n(b),y=n(0),v=(n(11),r=Object(y.b)({type:String,default:null}),Object(y.a)((i=function(o){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e=o.call.apply(o,[this].concat(n))||this,c()(e,"hover",a,u()(e)),e}return d()(e,o),e.prototype.render=function(e){return e("i",{staticClass:"vso-icon-close",class:["vso-icon-hover-"+this.hover],ref:"icon"})},e}(g.a),a=h()(i.prototype,"hover",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),o=i))||o)},,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);n(19);var r,o,i,a,l=n(2),c=n.n(l),s=n(7),u=n.n(s),p=n(3),d=n.n(p),f=n(5),h=n.n(f),b=n(1),g=n.n(b),y=(n(8),n(0)),v=n(13),m=n(10),w=n.n(m),O=n(4),j=n.n(O);n(11);function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}var _,P,x,k,$,z,B,W,D,H,R,L,E,A,M,S,N,T,V,I,K,q,Y,U,F,G,J=(r=Object(y.b)({type:Boolean,default:!1}),Object(y.a)((i=function(o){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e=o.call.apply(o,[this].concat(n))||this,c()(e,"less",a,d()(e)),e}return h()(e,o),e.prototype.render=function(e){return e("i",{staticClass:"vso-icon-plus",class:{less:this.less},ref:"icon",on:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(n,!0).forEach(function(e){w()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},this.$listeners)})},e}(j.a),a=g()(i.prototype,"less",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),o=i))||o),Q=n(9),X=(_=Object(y.b)({type:Boolean,default:!1}),P=Object(y.b)({type:Boolean,default:!1}),x=Object(y.b)({type:Boolean,default:!1}),k=Object(y.b)({type:Boolean,default:!1}),$=Object(y.b)({type:Boolean,default:!1}),z=Object(y.b)({type:Boolean,default:!1}),B=Object(y.b)({default:!0}),W=Object(y.b)({type:Boolean,default:null}),D=Object(y.b)({type:Boolean,default:!1}),H=Object(y.b)({type:[Number,String],default:0}),R=Object(y.b)({type:[Number,String],default:0}),L=Object(y.c)("page"),E=Object(y.c)("hiddenContent"),Object(y.a)((M=function(o){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e=o.call.apply(o,[this].concat(n))||this,c()(e,"solid",S,d()(e)),c()(e,"border",N,d()(e)),c()(e,"shadow",T,d()(e)),c()(e,"gradient",V,d()(e)),c()(e,"flat",I,d()(e)),c()(e,"relief",K,d()(e)),c()(e,"value",q,d()(e)),c()(e,"hiddenContent",Y,d()(e)),c()(e,"closable",U,d()(e)),c()(e,"progress",F,d()(e)),c()(e,"page",G,d()(e)),e}h()(e,o);var t=e.prototype;return t.handleWatchPage=function(){var e=this,t=this.$refs.content;t.style.minHeight=t.scrollHeight+"px",this.$nextTick(function(){e.$el.style.height=e.$el.scrollHeight-1+"px"})},t.mounted=function(){if(this.$el&&this.$refs.content){this.$el.style.height=this.$el.scrollHeight-1+"px";var e=this.$refs.content;e.style.minHeight=e.scrollHeight+"px"}},t.handleHiddenContent=function(e){var t=this;if(this.value){var n=this.$el,r=this.$refs.content;e?n.style.height=this.$el.scrollHeight-r.scrollHeight+"px":(n.style.height="auto",setTimeout(function(){n.style.height=t.$el.scrollHeight-1+"px"},250))}},t.beforeEnter=function(e){e.style.height=0},t.enter=function(e,t){var n=e.scrollHeight;e.style.height=n-1+"px",t()},t.leave=function(e,t){e.style.minHeight="0px",e.style.height="0px"},t.handleClickClose=function(){this.$emit("input",!this.value)},t.handleClickHidden=function(){this.$emit("update:hiddenContent",!this.hiddenContent)},t.handleClickPrevPage=function(){1<this.page&&this.$emit("update:page",Number(this.page)-1)},t.handleClickNextPage=function(){this.page<this.getTotalPages&&this.$emit("update:page",Number(this.page)+1)},t.render=function(e){var t,n,r,o,i,a,l,c=e("div",{staticClass:"vso-alert__icon",ref:"icon"},[this.$slots.icon]),s=e("div",{staticClass:"vso-alert__content__text",ref:"text"},[this.$slots.default].concat(this.getPages)),u=e("transition",{on:{beforeEnter:this.beforeEnter,enter:this.enter,leave:this.leave}},[!this.hiddenContent&&e("div",{staticClass:"vso-alert__content",ref:"content"},[s])]),p=e("div",{staticClass:"vso-alert__title",class:{"vso-alert__title--clickHidden":"boolean"==typeof this.hiddenContent},on:{click:this.handleClickHidden}},[this.$slots.title,!this.closable&&"boolean"==typeof this.hiddenContent&&e(J,{props:{less:!this.hiddenContent},on:{click:this.handleClickHidden}})]),d=e("button",{staticClass:"vso-alert__close",on:{click:this.handleClickClose}},[e(v.a,{props:{hover:"less"}})]),f=e("div",{staticClass:"vso-alert__pagination"},[e("button",{on:{click:this.handleClickPrevPage}},"<"),e("span",this.page+" / "+this.getTotalPages),e("button",{on:{click:this.handleClickNextPage}},">")]),h=e("div",{staticClass:"vso-alert__footer"},[this.$slots.footer]),b=e("div",{staticClass:"vso-alert__progress"},[e("div",{staticClass:"vso-alert__progress__bar",style:{width:this.progress+"%"}})]),g=e("div",{staticClass:"vso-alert",class:[(t={},t["vso-alert--solid"]=!!this.solid,t),(n={},n["vso-alert--border"]=!!this.border,n),(r={},r["vso-alert--shadow"]=!!this.shadow,r),(o={},o["vso-alert--gradient"]=!!this.gradient,o),(i={},i["vso-alert--flat"]=!!this.flat,i),(a={},a["vso-alert--relief"]=!!this.relief,a),(l={},l["vso-alert--pages"]=0<this.getPages.length,l)]},[this.$slots.icon&&c,this.$slots.title&&p,u,this.closable&&d,this.$slots.footer&&h,!!this.progress&&b,0<this.getTotalPages&&f]);return e("transition",{on:{beforeEnter:this.beforeEnter,enter:this.enter,leave:this.leave}},[this.value&&g])},u()(e,[{key:"getTotalPages",get:function(){return Object.keys(this.$slots).filter(function(e){return-1!==e.indexOf("page")}).length}},{key:"getPages",get:function(){var t=this,e=Object.keys(this.$slots).filter(function(e){return-1!==e.indexOf("page")}),n=[];return e.forEach(function(e){n.push(t.page==e.split("-")[1]&&t.$slots[e])}),n}}]),e}(Q.a),S=g()(M.prototype,"solid",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),N=g()(M.prototype,"border",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=g()(M.prototype,"shadow",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),V=g()(M.prototype,"gradient",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=g()(M.prototype,"flat",[$],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),K=g()(M.prototype,"relief",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),q=g()(M.prototype,"value",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Y=g()(M.prototype,"hiddenContent",[W],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),U=g()(M.prototype,"closable",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=g()(M.prototype,"progress",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),G=g()(M.prototype,"page",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g()(M.prototype,"handleWatchPage",[L],Object.getOwnPropertyDescriptor(M.prototype,"handleWatchPage"),M.prototype),g()(M.prototype,"handleHiddenContent",[E],Object.getOwnPropertyDescriptor(M.prototype,"handleHiddenContent"),M.prototype),A=M))||A);X.install=function(e){e.component("vso-alert",X)},"undefined"!=typeof window&&window.Vue&&X.install(window.Vue);t.default=X}],o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist/",o(o.s=41)).default;function o(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var r,i});
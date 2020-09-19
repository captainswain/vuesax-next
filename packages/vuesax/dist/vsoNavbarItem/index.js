/*!
  * Vuesax v4.0.1-alpha.22 🖖 (https://lusaxweb.github.io/vuesax/)
  * Forged by Luis Daniel Rovira
  * Released under the MIT License.
  * Donate: https://www.patreon.com/bePatron?c=1567892
  * © 2019, Lusaxweb. (https://lusaxweb.net)
  */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):"object"==typeof exports?exports.vsoNavbarItem=t(require("vue")):e.vsoNavbarItem=t(e.Vue)}("undefined"!=typeof self?self:this,function(n){return(i={},o.m=r={0:function(e,t,n){"use strict";var r=n(4),c=n.n(r),l="undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function s(n,r,o){(o?Reflect.getOwnMetadataKeys(r,o):Reflect.getOwnMetadataKeys(r)).forEach(function(e){var t=o?Reflect.getOwnMetadata(e,r,o):Reflect.getOwnMetadata(e,r);o?Reflect.defineMetadata(e,t,n,o):Reflect.defineMetadata(e,t,n)})}var u={__proto__:[]}instanceof Array;function a(o){return function(e,t,n){var r="function"==typeof e?e:e.constructor;r.__decorators__||(r.__decorators__=[]),"number"!=typeof n&&(n=void 0),r.__decorators__.push(function(e){return o(e,t,n)})}}var p=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function o(e,r){void 0===r&&(r={}),r.name=r.name||e._componentTag||e.name;var o=e.prototype;Object.getOwnPropertyNames(o).forEach(function(t){if("constructor"!==t)if(-1<p.indexOf(t))r[t]=o[t];else{var n=Object.getOwnPropertyDescriptor(o,t);void 0!==n.value?"function"==typeof n.value?(r.methods||(r.methods={}))[t]=n.value:(r.mixins||(r.mixins=[])).push({data:function(){var e;return(e={})[t]=n.value,e}}):(n.get||n.set)&&((r.computed||(r.computed={}))[t]={get:n.get,set:n.set})}}),(r.mixins||(r.mixins=[])).push({data:function(){return function(r,e){var t=e.prototype._init;e.prototype._init=function(){var e=this,t=Object.getOwnPropertyNames(r);if(r.$options.props)for(var n in r.$options.props)r.hasOwnProperty(n)||t.push(n);t.forEach(function(t){"_"!==t.charAt(0)&&Object.defineProperty(e,t,{get:function(){return r[t]},set:function(e){r[t]=e},configurable:!0})})};var n=new e;e.prototype._init=t;var o={};return Object.keys(n).forEach(function(e){void 0!==n[e]&&(o[e]=n[e])}),o}(this,e)}});var t=e.__decorators__;t&&(t.forEach(function(e){return e(r)}),delete e.__decorators__);var n=Object.getPrototypeOf(e.prototype),i=n instanceof c.a?n.constructor:c.a,a=i.extend(r);return function(o,i,a){Object.getOwnPropertyNames(i).forEach(function(e){if(!d[e]){var t=Object.getOwnPropertyDescriptor(o,e);if(!t||t.configurable){var n=Object.getOwnPropertyDescriptor(i,e);if(!u){if("cid"===e)return;var r=Object.getOwnPropertyDescriptor(a,e);if(!function(e){var t=typeof e;return null==e||"object"!=t&&"function"!=t}(n.value)&&r&&r.value===n.value)return}0,Object.defineProperty(o,e,n)}}})}(a,e,i),l&&function(t,n){s(t,n),Object.getOwnPropertyNames(n.prototype).forEach(function(e){s(t.prototype,n.prototype,e)}),Object.getOwnPropertyNames(n).forEach(function(e){s(t,n,e)})}(a,e),a}var d={prototype:!0,arguments:!0,callee:!0,caller:!0};function i(t){return"function"==typeof t?o(t):function(e){return o(e,t)}}i.registerHooks=function(e){p.push.apply(p,e)};var f=i;n.d(t,"b",function(){return y}),n.d(t,"c",function(){return g}),n.d(t,"a",function(){return f});var h="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function b(e,t,n){h&&(Array.isArray(e)||"function"==typeof e||void 0!==e.type||(e.type=Reflect.getMetadata("design:type",t,n)))}function y(n){return void 0===n&&(n={}),function(e,t){b(n,e,t),a(function(e,t){(e.props||(e.props={}))[t]=n})(e,t)}}function g(r,e){void 0===e&&(e={});var t=e.deep,o=void 0!==t&&t,n=e.immediate,i=void 0!==n&&n;return a(function(e,t){"object"!=typeof e.watch&&(e.watch=Object.create(null));var n=e.watch;"object"!=typeof n[r]||Array.isArray(n[r])?void 0===n[r]&&(n[r]=[]):n[r]=[n[r]],n[r].push({handler:t,deep:o,immediate:i})})}},1:function(e,t){e.exports=function(n,r,e,t,o){var i={};return Object.keys(t).forEach(function(e){i[e]=t[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=e.slice().reverse().reduce(function(e,t){return t(n,r,e)||e},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(n,r,i),i=null),i}},2:function(e,t){e.exports=function(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}},3:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},39:function(e,t,n){},4:function(e,t){e.exports=n},5:function(e,t){e.exports=function(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}},52:function(e,t,n){"use strict";n.r(t);n(39);var r,o,i,a,c,l,s,u,p,d,f,h,b,y=n(2),g=n.n(y),v=n(3),m=n.n(v),w=n(5),O=n.n(w),j=n(1),x=n.n(j),_=(n(8),n(0)),C=n(9),P=(r=Object(_.b)({default:!1,type:Boolean}),o=Object(_.b)({}),i=Object(_.b)({}),a=Object(_.b)({}),c=Object(_.b)({default:"_blank"}),l=Object(_.c)("active"),Object(_.a)((u=function(o){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e=o.call.apply(o,[this].concat(n))||this,g()(e,"active",p,m()(e)),g()(e,"to",d,m()(e)),g()(e,"id",f,m()(e)),g()(e,"href",h,m()(e)),g()(e,"target",b,m()(e)),e}O()(e,o);var t=e.prototype;return t.handleWatchActive=function(){this.handleLine()},t.handleLine=function(){var r=this;this.$nextTick(function(){if(r.active){var e=r.$parent,t=r.$el.offsetLeft;e.setLeftLine(t);var n=r.$el.scrollWidth;e.setWidthLine(n)}})},t.handleClick=function(){this.to?this.$router.push(this.to):this.href&&window.open(this.href,this.target)},t.handleActive=function(){this.$parent.setModel(this.id),this.handleLine()},t.mounted=function(){var o=this;setTimeout(function(){if(o.active){var e=o.$el,t=o.$parent,n=e.offsetLeft;t.setLeftLine(n);var r=e.scrollWidth;t.setWidthLine(r)}},150)},t.render=function(e){var t=this;return e("button",{staticClass:"vso-navbar__item",class:{active:this.active},on:{click:function(e){t.$emit("click",e),t.handleLine(),t.handleClick(),t.handleActive()}}},this.$slots.default)},e}(C.a),p=x()(u.prototype,"active",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=x()(u.prototype,"to",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=x()(u.prototype,"id",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=x()(u.prototype,"href",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=x()(u.prototype,"target",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x()(u.prototype,"handleWatchActive",[l],Object.getOwnPropertyDescriptor(u.prototype,"handleWatchActive"),u.prototype),s=u))||s);P.install=function(e){e.component("vso-navbar-item",P)},"undefined"!=typeof window&&window.Vue&&P.install(window.Vue);t.default=P},6:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return a});function u(e,t,n){n?"#comment"!==n.nodeName&&n.style.setProperty("--vso-"+e,t):document.documentElement.style.setProperty("--vso-"+e,t)}var r=function(e,t,n,r){var o,i=/^(rgb|rgba)/.test(t),a=/^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(t),c=/^(#)/.test(t);if("dark"==t&&n&&n.classList.add("vso-component-dark"),i){var l=t.replace(/[rgba()]/g,"").split(",");o=l[0]+","+l[1]+","+l[2],u(e,o,n),r&&n.classList.add("vso-change-color")}else if(c){var s=function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,r){return t+t+n+n+r+r});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}(t);o=s.r+","+s.g+","+s.b,u(e,o,n),r&&n.classList.add("vso-change-color")}else if(function(e){return["primary","secondary","success","danger","warning","dark","light","warn","facebook","twitter","youtube","pinterest","linkedin","snapchat","whatsapp","tumblr","reddit","spotify","amazon","medium","vimeo","skype","dribbble","slack","yahoo","twitch","discord","telegram","google-plus","messenger"].includes(e)}(t)){o=getComputedStyle(document.body).getPropertyValue("--vso-"+t),u(e,o,n),r&&n.classList.add("vso-change-color")}else a&&(u(e,t,n),r&&n.classList.add("vso-change-color"))},o=function(e,t){var n=t||document.body;n.insertBefore(e,n.lastChild)},i=function(e,t){var n=t.getBoundingClientRect(),r=n.x,o=n.y,i=n.width,a=n.height,c=e.style,l=window.pageYOffset,s=e.clientHeight+n.y+l;l+window.innerHeight-s<30?(c.top=o+l-e.clientHeight-4+"px",c.left=r+"px",c.width=i+"px",e.classList.add("top"),t.classList.add("top")):(c.top=o+l+a-4+"px",c.left=r+"px",c.width=i+"px",e.classList.remove("top"),t.classList.remove("top"))},a=function(e,t,n){var r=t.getBoundingClientRect(),o=r.x,i=r.y,a=r.width,c=r.height,l=e.style,s=window.pageYOffset,u=e.clientHeight+r.y+s,p=s+window.innerHeight;if(o+a+10+e.getBoundingClientRect().width>window.innerWidth&&"right"==n&&(n="left",e.classList.remove("right"),e.classList.add("left")),o-10<e.getBoundingClientRect().width&&"left"==n&&(n="top",e.classList.remove("left"),e.classList.add("top")),p-u<30||"top"==n){l.top=i+s-e.clientHeight-8+"px";var d=o+(a-e.getBoundingClientRect().width)/2;d+e.getBoundingClientRect().width<window.innerWidth?0<d?l.left=d+"px":(l.left="10px",e.classList.add("notArrow")):(l.left="auto",l.right="10px",e.classList.add("notArrow"))}else if("bottom"==n){l.top=i+s+c+8+"px";var f=o+(a-e.getBoundingClientRect().width)/2;f+e.getBoundingClientRect().width<window.innerWidth?0<f?l.left=f+"px":(l.left="10px",e.classList.add("notArrow")):(l.left="auto",l.right="10px",e.classList.add("notArrow"))}else"left"==n?(l.top=i+s+(c-e.getBoundingClientRect().height)/2+"px",l.left=o-e.getBoundingClientRect().width-8+"px"):"right"==n&&(l.top=i+s+(c-e.getBoundingClientRect().height)/2+"px",l.left=o+a+8+"px")}},7:function(e,t){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},8:function(e,t){e.exports=function(e,t){throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.")}},9:function(e,t,n){"use strict";n.d(t,"a",function(){return I});var r,o,i,a,c,l,s,u,p,d,f,h,b,y,g,v,m,w,O,j,x,_,C,P,k=n(2),L=n.n(k),W=n(7),$=n.n(W),R=n(3),z=n.n(R),D=n(5),B=n.n(D),A=n(1),M=n.n(A),E=(n(8),n(4)),S=n.n(E),N=n(0),H=n(6),I=(r=Object(N.b)({type:String,default:null}),o=Object(N.b)({type:Boolean,default:!1}),i=Object(N.b)({type:Boolean,default:!1}),a=Object(N.b)({type:Boolean,default:!1}),c=Object(N.b)({type:Boolean,default:!1}),l=Object(N.b)({type:Boolean,default:!1}),s=Object(N.b)({type:Boolean,default:!1}),u=Object(N.c)("color"),p=Object(N.c)("primary"),d=Object(N.c)("danger"),f=Object(N.c)("success"),h=Object(N.c)("warn"),b=Object(N.c)("dark"),Object(N.a)((P=C=function(o){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=o.call.apply(o,[this].concat(n))||this).componentColor=null,L()(e,"color",v,z()(e)),L()(e,"danger",m,z()(e)),L()(e,"success",w,z()(e)),L()(e,"warn",O,z()(e)),L()(e,"dark",j,z()(e)),L()(e,"primary",x,z()(e)),L()(e,"active",_,z()(e)),e}B()(e,o);var t=e.prototype;return t.changeColor=function(){this.$el&&"#comment"!=this.$el.nodeName&&(this.componentColor=(this.danger?"danger":this.success&&"success")||this.warn&&"warn"||this.dark&&"dark"||this.primary&&"primary",(this.color||this.componentColor)&&(Object(H.b)("color",this.componentColor||this.color||"primary",this.$el,!0),this.$refs.options&&Object(H.b)("color",this.componentColor||this.color||"primary",this.$refs.options,!0),this.$refs.tooltip&&Object(H.b)("color",this.componentColor||this.color||"primary",this.$refs.tooltip,!0)),"dark"==this.componentColor||"dark"==this.color?this.$el.classList.add("vso-component-dark"):this.$el.classList.remove("vso-component-dark"),"white"==this.componentColor?this.$el.classList.add("vso-component-white"):this.$el.classList.remove("vso-component-white"))},t.handleWatchColor=function(){this.changeColor()},t.handleWatchPrimary=function(){this.changeColor()},t.handleWatchDanger=function(){this.changeColor()},t.handleWatchSuccess=function(){this.changeColor()},t.handleWatchWarn=function(){this.changeColor()},t.handleWatchDark=function(){this.changeColor()},t.updated=function(){this.changeColor()},t.mounted=function(){this.changeColor()},$()(e,[{key:"isColorDark",get:function(){return"dark"===this.color||this.dark||"dark"===this.componentColor}}]),e}(S.a),C.install=void 0,C.use=void 0,g=P,v=M()(g.prototype,"color",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=M()(g.prototype,"danger",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=M()(g.prototype,"success",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=M()(g.prototype,"warn",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=M()(g.prototype,"dark",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=M()(g.prototype,"primary",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=M()(g.prototype,"active",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),M()(g.prototype,"handleWatchColor",[u],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchColor"),g.prototype),M()(g.prototype,"handleWatchPrimary",[p],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchPrimary"),g.prototype),M()(g.prototype,"handleWatchDanger",[d],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchDanger"),g.prototype),M()(g.prototype,"handleWatchSuccess",[f],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchSuccess"),g.prototype),M()(g.prototype,"handleWatchWarn",[h],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchWarn"),g.prototype),M()(g.prototype,"handleWatchDark",[b],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchDark"),g.prototype),y=g))||y)}},o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist/",o(o.s=52)).default;function o(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var r,i});
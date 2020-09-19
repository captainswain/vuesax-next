/*!
  * Vuesax v4.0.1-alpha.22 🖖 (https://lusaxweb.github.io/vuesax/)
  * Forged by Luis Daniel Rovira
  * Released under the MIT License.
  * Donate: https://www.patreon.com/bePatron?c=1567892
  * © 2019, Lusaxweb. (https://lusaxweb.net)
  */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):"object"==typeof exports?exports.vsoNavbar=t(require("vue")):e.vsoNavbar=t(e.Vue)}("undefined"!=typeof self?self:this,function(o){return(i={},n.m=r={0:function(e,t,o){"use strict";var r=o(4),l=o.n(r),c="undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function s(o,r,n){(n?Reflect.getOwnMetadataKeys(r,n):Reflect.getOwnMetadataKeys(r)).forEach(function(e){var t=n?Reflect.getOwnMetadata(e,r,n):Reflect.getOwnMetadata(e,r);n?Reflect.defineMetadata(e,t,o,n):Reflect.defineMetadata(e,t,o)})}var d={__proto__:[]}instanceof Array;function a(n){return function(e,t,o){var r="function"==typeof e?e:e.constructor;r.__decorators__||(r.__decorators__=[]),"number"!=typeof o&&(o=void 0),r.__decorators__.push(function(e){return n(e,t,o)})}}var p=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function n(e,r){void 0===r&&(r={}),r.name=r.name||e._componentTag||e.name;var n=e.prototype;Object.getOwnPropertyNames(n).forEach(function(t){if("constructor"!==t)if(-1<p.indexOf(t))r[t]=n[t];else{var o=Object.getOwnPropertyDescriptor(n,t);void 0!==o.value?"function"==typeof o.value?(r.methods||(r.methods={}))[t]=o.value:(r.mixins||(r.mixins=[])).push({data:function(){var e;return(e={})[t]=o.value,e}}):(o.get||o.set)&&((r.computed||(r.computed={}))[t]={get:o.get,set:o.set})}}),(r.mixins||(r.mixins=[])).push({data:function(){return function(r,e){var t=e.prototype._init;e.prototype._init=function(){var e=this,t=Object.getOwnPropertyNames(r);if(r.$options.props)for(var o in r.$options.props)r.hasOwnProperty(o)||t.push(o);t.forEach(function(t){"_"!==t.charAt(0)&&Object.defineProperty(e,t,{get:function(){return r[t]},set:function(e){r[t]=e},configurable:!0})})};var o=new e;e.prototype._init=t;var n={};return Object.keys(o).forEach(function(e){void 0!==o[e]&&(n[e]=o[e])}),n}(this,e)}});var t=e.__decorators__;t&&(t.forEach(function(e){return e(r)}),delete e.__decorators__);var o=Object.getPrototypeOf(e.prototype),i=o instanceof l.a?o.constructor:l.a,a=i.extend(r);return function(n,i,a){Object.getOwnPropertyNames(i).forEach(function(e){if(!u[e]){var t=Object.getOwnPropertyDescriptor(n,e);if(!t||t.configurable){var o=Object.getOwnPropertyDescriptor(i,e);if(!d){if("cid"===e)return;var r=Object.getOwnPropertyDescriptor(a,e);if(!function(e){var t=typeof e;return null==e||"object"!=t&&"function"!=t}(o.value)&&r&&r.value===o.value)return}0,Object.defineProperty(n,e,o)}}})}(a,e,i),c&&function(t,o){s(t,o),Object.getOwnPropertyNames(o.prototype).forEach(function(e){s(t.prototype,o.prototype,e)}),Object.getOwnPropertyNames(o).forEach(function(e){s(t,o,e)})}(a,e),a}var u={prototype:!0,arguments:!0,callee:!0,caller:!0};function i(t){return"function"==typeof t?n(t):function(e){return n(e,t)}}i.registerHooks=function(e){p.push.apply(p,e)};var f=i;o.d(t,"b",function(){return y}),o.d(t,"c",function(){return g}),o.d(t,"a",function(){return f});var h="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function b(e,t,o){h&&(Array.isArray(e)||"function"==typeof e||void 0!==e.type||(e.type=Reflect.getMetadata("design:type",t,o)))}function y(o){return void 0===o&&(o={}),function(e,t){b(o,e,t),a(function(e,t){(e.props||(e.props={}))[t]=o})(e,t)}}function g(r,e){void 0===e&&(e={});var t=e.deep,n=void 0!==t&&t,o=e.immediate,i=void 0!==o&&o;return a(function(e,t){"object"!=typeof e.watch&&(e.watch=Object.create(null));var o=e.watch;"object"!=typeof o[r]||Array.isArray(o[r])?void 0===o[r]&&(o[r]=[]):o[r]=[o[r]],o[r].push({handler:t,deep:n,immediate:i})})}},1:function(e,t){e.exports=function(o,r,e,t,n){var i={};return Object.keys(t).forEach(function(e){i[e]=t[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=e.slice().reverse().reduce(function(e,t){return t(o,r,e)||e},i),n&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(n):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(o,r,i),i=null),i}},2:function(e,t){e.exports=function(e,t,o,r){o&&Object.defineProperty(e,t,{enumerable:o.enumerable,configurable:o.configurable,writable:o.writable,value:o.initializer?o.initializer.call(r):void 0})}},3:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},38:function(e,t,o){},4:function(e,t){e.exports=o},5:function(e,t){e.exports=function(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}},6:function(e,t,o){"use strict";o.d(t,"b",function(){return r}),o.d(t,"a",function(){return n}),o.d(t,"c",function(){return i}),o.d(t,"d",function(){return a});function d(e,t,o){o?"#comment"!==o.nodeName&&o.style.setProperty("--vso-"+e,t):document.documentElement.style.setProperty("--vso-"+e,t)}var r=function(e,t,o,r){var n,i=/^(rgb|rgba)/.test(t),a=/^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(t),l=/^(#)/.test(t);if("dark"==t&&o&&o.classList.add("vso-component-dark"),i){var c=t.replace(/[rgba()]/g,"").split(",");n=c[0]+","+c[1]+","+c[2],d(e,n,o),r&&o.classList.add("vso-change-color")}else if(l){var s=function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,o,r){return t+t+o+o+r+r});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}(t);n=s.r+","+s.g+","+s.b,d(e,n,o),r&&o.classList.add("vso-change-color")}else if(function(e){return["primary","secondary","success","danger","warning","dark","light","warn","facebook","twitter","youtube","pinterest","linkedin","snapchat","whatsapp","tumblr","reddit","spotify","amazon","medium","vimeo","skype","dribbble","slack","yahoo","twitch","discord","telegram","google-plus","messenger"].includes(e)}(t)){n=getComputedStyle(document.body).getPropertyValue("--vso-"+t),d(e,n,o),r&&o.classList.add("vso-change-color")}else a&&(d(e,t,o),r&&o.classList.add("vso-change-color"))},n=function(e,t){var o=t||document.body;o.insertBefore(e,o.lastChild)},i=function(e,t){var o=t.getBoundingClientRect(),r=o.x,n=o.y,i=o.width,a=o.height,l=e.style,c=window.pageYOffset,s=e.clientHeight+o.y+c;c+window.innerHeight-s<30?(l.top=n+c-e.clientHeight-4+"px",l.left=r+"px",l.width=i+"px",e.classList.add("top"),t.classList.add("top")):(l.top=n+c+a-4+"px",l.left=r+"px",l.width=i+"px",e.classList.remove("top"),t.classList.remove("top"))},a=function(e,t,o){var r=t.getBoundingClientRect(),n=r.x,i=r.y,a=r.width,l=r.height,c=e.style,s=window.pageYOffset,d=e.clientHeight+r.y+s,p=s+window.innerHeight;if(n+a+10+e.getBoundingClientRect().width>window.innerWidth&&"right"==o&&(o="left",e.classList.remove("right"),e.classList.add("left")),n-10<e.getBoundingClientRect().width&&"left"==o&&(o="top",e.classList.remove("left"),e.classList.add("top")),p-d<30||"top"==o){c.top=i+s-e.clientHeight-8+"px";var u=n+(a-e.getBoundingClientRect().width)/2;u+e.getBoundingClientRect().width<window.innerWidth?0<u?c.left=u+"px":(c.left="10px",e.classList.add("notArrow")):(c.left="auto",c.right="10px",e.classList.add("notArrow"))}else if("bottom"==o){c.top=i+s+l+8+"px";var f=n+(a-e.getBoundingClientRect().width)/2;f+e.getBoundingClientRect().width<window.innerWidth?0<f?c.left=f+"px":(c.left="10px",e.classList.add("notArrow")):(c.left="auto",c.right="10px",e.classList.add("notArrow"))}else"left"==o?(c.top=i+s+(l-e.getBoundingClientRect().height)/2+"px",c.left=n-e.getBoundingClientRect().width-8+"px"):"right"==o&&(c.top=i+s+(l-e.getBoundingClientRect().height)/2+"px",c.left=n+a+8+"px")}},60:function(e,t,o){"use strict";o.r(t);o(38);var r,n,i,a,l,c,s,d,p,u,f,h,b,y,g,v,w,m,O,j,x,C,S,_,L,W,P,$,z,k=o(2),B=o.n(k),R=o(3),A=o.n(R),D=o(5),M=o.n(D),E=o(1),T=o.n(E),N=(o(8),o(0)),q=o(9),F=(r=Object(N.b)({default:!1,type:Boolean}),n=Object(N.b)({default:!1,type:Boolean}),i=Object(N.b)({default:!1,type:Boolean}),a=Object(N.b)({default:!1,type:Boolean}),l=Object(N.b)({default:!1,type:Boolean}),c=Object(N.b)({default:!1,type:Boolean}),s=Object(N.b)({default:!1,type:Boolean}),d=Object(N.b)({default:!1,type:Boolean}),p=Object(N.b)({default:!1,type:Boolean}),u=Object(N.b)({default:!1,type:Boolean}),f=Object(N.b)({default:!1,type:Boolean}),h=Object(N.b)({default:null}),b=Object(N.c)("hideScroll"),y=Object(N.c)("paddingScroll"),g=Object(N.c)("shadowScroll"),Object(N.a)((w=function(n){function e(){for(var e,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return e=n.call.apply(n,[this].concat(o))||this,B()(e,"fixed",m,A()(e)),B()(e,"shadow",O,A()(e)),B()(e,"shadowScroll",j,A()(e)),B()(e,"hideScroll",x,A()(e)),B()(e,"textWhite",C,A()(e)),B()(e,"square",S,A()(e)),B()(e,"paddingScroll",_,A()(e)),B()(e,"notLine",L,A()(e)),B()(e,"leftCollapsed",W,A()(e)),B()(e,"centerCollapsed",P,A()(e)),B()(e,"rightCollapsed",$,A()(e)),B()(e,"targetScroll",z,A()(e)),e.leftLine=0,e.widthLine=0,e.scrollTop=0,e.collapsedWidth=0,e.hidden=!1,e.shadowActive=!1,e.paddingScrollActive=!1,e.lineNotTransition=!1,e.collapsedForced=!1,e}M()(e,n);var t=e.prototype;return t.handleShadowScroll=function(){this.handleScroll()},t.setModel=function(e){this.$emit("input",e)},t.setLeftLine=function(e,t){var o=this;void 0===t&&(t=!0),this.lineNotTransition=!t,this.$nextTick(function(){o.leftLine=e})},t.setWidthLine=function(e){var t=this;this.$nextTick(function(){t.widthLine=e})},t.scroll=function(e){var t=this.targetScroll?document.querySelector(this.targetScroll).scrollTop:window.pageYOffset;this.hideScroll&&(1===Math.sign(t-this.scrollTop)?this.hidden=!0:this.hidden=!1),this.shadowScroll&&(this.shadowActive=0<t),this.paddingScroll&&(this.paddingScrollActive=0<t),this.scrollTop=t},t.handleScroll=function(){(this.hideScroll||this.shadowScroll||this.paddingScroll)&&(this.targetScroll?document.querySelector(this.targetScroll).addEventListener("scroll",this.scroll):window.addEventListener("scroll",this.scroll))},t.handleResize=function(){var e=this.$el.querySelector(".vso-navbar__item.active");e?this.setLeftLine(e.offsetLeft,!1):this.widthLine=0;var t=this.$el;(this.leftCollapsed||this.centerCollapsed||this.rightCollapsed)&&t.offsetWidth<this.collapsedWidth&&(this.collapsedForced=!0),this.collapsedForced?this.$emit("collapsed",!0):this.$emit("collapsed",!1),t.offsetWidth<this.collapsedWidth?this.$emit("collapsed",!0):(this.$emit("collapsed",!1),this.collapsedForced=!1)},t.mounted=function(){var r=this;setTimeout(function(){var e=r.$refs.left,t=r.$refs.center,o=r.$refs.right;r.collapsedWidth=e.offsetWidth+t.offsetWidth+o.offsetWidth+150,r.$el.offsetWidth<r.collapsedWidth&&(r.collapsedForced=!0,r.$emit("collapsed",!0),r.widthLine=0,r.handleResize())},150),this.handleScroll(),window.addEventListener("resize",this.handleResize)},t.render=function(e){var t=e("div",{staticClass:"vso-navbar__left",ref:"left"},[this.$slots.left]),o=e("div",{staticClass:"vso-navbar__center",ref:"center"},[this.$slots.default]),r=e("div",{staticClass:"vso-navbar__right",ref:"right"},[this.$slots.right]),n=e("div",{staticClass:"vso-navbar__line",class:{notTransition:this.lineNotTransition},style:{left:this.leftLine+"px",width:this.widthLine+"px"}}),i=e("div",{staticClass:"vso-navbar"},[(!this.leftCollapsed||!this.collapsedForced)&&t,(!this.centerCollapsed||!this.collapsedForced)&&o,(!this.rightCollapsed||!this.collapsedForced)&&r]);return e("div",{staticClass:"vso-navbar-content",class:{fixed:this.fixed,shadow:this.shadow,hidden:this.hidden,shadowActive:this.shadowActive,textWhite:this.textWhite,paddingScroll:this.paddingScroll,paddingScrollActive:this.paddingScrollActive,vsNavbarSquare:this.square}},[i,!this.notLine&&n])},e}(q.a),m=T()(w.prototype,"fixed",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=T()(w.prototype,"shadow",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=T()(w.prototype,"shadowScroll",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=T()(w.prototype,"hideScroll",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=T()(w.prototype,"textWhite",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=T()(w.prototype,"square",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=T()(w.prototype,"paddingScroll",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=T()(w.prototype,"notLine",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),W=T()(w.prototype,"leftCollapsed",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=T()(w.prototype,"centerCollapsed",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),$=T()(w.prototype,"rightCollapsed",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=T()(w.prototype,"targetScroll",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T()(w.prototype,"handleShadowScroll",[b,y,g],Object.getOwnPropertyDescriptor(w.prototype,"handleShadowScroll"),w.prototype),v=w))||v);F.install=function(e){e.component("vso-navbar",F)},"undefined"!=typeof window&&window.Vue&&F.install(window.Vue);t.default=F},7:function(e,t){function r(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,o){return t&&r(e.prototype,t),o&&r(e,o),e}},8:function(e,t){e.exports=function(e,t){throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.")}},9:function(e,t,o){"use strict";o.d(t,"a",function(){return q});var r,n,i,a,l,c,s,d,p,u,f,h,b,y,g,v,w,m,O,j,x,C,S,_,L=o(2),W=o.n(L),P=o(7),$=o.n(P),z=o(3),k=o.n(z),B=o(5),R=o.n(B),A=o(1),D=o.n(A),M=(o(8),o(4)),E=o.n(M),T=o(0),N=o(6),q=(r=Object(T.b)({type:String,default:null}),n=Object(T.b)({type:Boolean,default:!1}),i=Object(T.b)({type:Boolean,default:!1}),a=Object(T.b)({type:Boolean,default:!1}),l=Object(T.b)({type:Boolean,default:!1}),c=Object(T.b)({type:Boolean,default:!1}),s=Object(T.b)({type:Boolean,default:!1}),d=Object(T.c)("color"),p=Object(T.c)("primary"),u=Object(T.c)("danger"),f=Object(T.c)("success"),h=Object(T.c)("warn"),b=Object(T.c)("dark"),Object(T.a)((_=S=function(n){function e(){for(var e,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))||this).componentColor=null,W()(e,"color",v,k()(e)),W()(e,"danger",w,k()(e)),W()(e,"success",m,k()(e)),W()(e,"warn",O,k()(e)),W()(e,"dark",j,k()(e)),W()(e,"primary",x,k()(e)),W()(e,"active",C,k()(e)),e}R()(e,n);var t=e.prototype;return t.changeColor=function(){this.$el&&"#comment"!=this.$el.nodeName&&(this.componentColor=(this.danger?"danger":this.success&&"success")||this.warn&&"warn"||this.dark&&"dark"||this.primary&&"primary",(this.color||this.componentColor)&&(Object(N.b)("color",this.componentColor||this.color||"primary",this.$el,!0),this.$refs.options&&Object(N.b)("color",this.componentColor||this.color||"primary",this.$refs.options,!0),this.$refs.tooltip&&Object(N.b)("color",this.componentColor||this.color||"primary",this.$refs.tooltip,!0)),"dark"==this.componentColor||"dark"==this.color?this.$el.classList.add("vso-component-dark"):this.$el.classList.remove("vso-component-dark"),"white"==this.componentColor?this.$el.classList.add("vso-component-white"):this.$el.classList.remove("vso-component-white"))},t.handleWatchColor=function(){this.changeColor()},t.handleWatchPrimary=function(){this.changeColor()},t.handleWatchDanger=function(){this.changeColor()},t.handleWatchSuccess=function(){this.changeColor()},t.handleWatchWarn=function(){this.changeColor()},t.handleWatchDark=function(){this.changeColor()},t.updated=function(){this.changeColor()},t.mounted=function(){this.changeColor()},$()(e,[{key:"isColorDark",get:function(){return"dark"===this.color||this.dark||"dark"===this.componentColor}}]),e}(E.a),S.install=void 0,S.use=void 0,g=_,v=D()(g.prototype,"color",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=D()(g.prototype,"danger",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=D()(g.prototype,"success",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=D()(g.prototype,"warn",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=D()(g.prototype,"dark",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=D()(g.prototype,"primary",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=D()(g.prototype,"active",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D()(g.prototype,"handleWatchColor",[d],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchColor"),g.prototype),D()(g.prototype,"handleWatchPrimary",[p],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchPrimary"),g.prototype),D()(g.prototype,"handleWatchDanger",[u],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchDanger"),g.prototype),D()(g.prototype,"handleWatchSuccess",[f],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchSuccess"),g.prototype),D()(g.prototype,"handleWatchWarn",[h],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchWarn"),g.prototype),D()(g.prototype,"handleWatchDark",[b],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchDark"),g.prototype),y=g))||y)}},n.c=i,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=60)).default;function n(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var r,i});
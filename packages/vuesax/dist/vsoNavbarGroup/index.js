/*!
  * Vuesax v4.0.1-alpha.22 🖖 (https://lusaxweb.github.io/vuesax/)
  * Forged by Luis Daniel Rovira
  * Released under the MIT License.
  * Donate: https://www.patreon.com/bePatron?c=1567892
  * © 2019, Lusaxweb. (https://lusaxweb.net)
  */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define(["vue"],e):"object"==typeof exports?exports.vsoNavbarGroup=e(require("vue")):t.vsoNavbarGroup=e(t.Vue)}("undefined"!=typeof self?self:this,function(o){return(i={},n.m=r={0:function(t,e,o){"use strict";var r=o(4),c=o.n(r),s="undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function l(o,r,n){(n?Reflect.getOwnMetadataKeys(r,n):Reflect.getOwnMetadataKeys(r)).forEach(function(t){var e=n?Reflect.getOwnMetadata(t,r,n):Reflect.getOwnMetadata(t,r);n?Reflect.defineMetadata(t,e,o,n):Reflect.defineMetadata(t,e,o)})}var u={__proto__:[]}instanceof Array;function a(n){return function(t,e,o){var r="function"==typeof t?t:t.constructor;r.__decorators__||(r.__decorators__=[]),"number"!=typeof o&&(o=void 0),r.__decorators__.push(function(t){return n(t,e,o)})}}var p=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function n(t,r){void 0===r&&(r={}),r.name=r.name||t._componentTag||t.name;var n=t.prototype;Object.getOwnPropertyNames(n).forEach(function(e){if("constructor"!==e)if(-1<p.indexOf(e))r[e]=n[e];else{var o=Object.getOwnPropertyDescriptor(n,e);void 0!==o.value?"function"==typeof o.value?(r.methods||(r.methods={}))[e]=o.value:(r.mixins||(r.mixins=[])).push({data:function(){var t;return(t={})[e]=o.value,t}}):(o.get||o.set)&&((r.computed||(r.computed={}))[e]={get:o.get,set:o.set})}}),(r.mixins||(r.mixins=[])).push({data:function(){return function(r,t){var e=t.prototype._init;t.prototype._init=function(){var t=this,e=Object.getOwnPropertyNames(r);if(r.$options.props)for(var o in r.$options.props)r.hasOwnProperty(o)||e.push(o);e.forEach(function(e){"_"!==e.charAt(0)&&Object.defineProperty(t,e,{get:function(){return r[e]},set:function(t){r[e]=t},configurable:!0})})};var o=new t;t.prototype._init=e;var n={};return Object.keys(o).forEach(function(t){void 0!==o[t]&&(n[t]=o[t])}),n}(this,t)}});var e=t.__decorators__;e&&(e.forEach(function(t){return t(r)}),delete t.__decorators__);var o=Object.getPrototypeOf(t.prototype),i=o instanceof c.a?o.constructor:c.a,a=i.extend(r);return function(n,i,a){Object.getOwnPropertyNames(i).forEach(function(t){if(!d[t]){var e=Object.getOwnPropertyDescriptor(n,t);if(!e||e.configurable){var o=Object.getOwnPropertyDescriptor(i,t);if(!u){if("cid"===t)return;var r=Object.getOwnPropertyDescriptor(a,t);if(!function(t){var e=typeof t;return null==t||"object"!=e&&"function"!=e}(o.value)&&r&&r.value===o.value)return}0,Object.defineProperty(n,t,o)}}})}(a,t,i),s&&function(e,o){l(e,o),Object.getOwnPropertyNames(o.prototype).forEach(function(t){l(e.prototype,o.prototype,t)}),Object.getOwnPropertyNames(o).forEach(function(t){l(e,o,t)})}(a,t),a}var d={prototype:!0,arguments:!0,callee:!0,caller:!0};function i(e){return"function"==typeof e?n(e):function(t){return n(t,e)}}i.registerHooks=function(t){p.push.apply(p,t)};var f=i;o.d(e,"b",function(){return b}),o.d(e,"c",function(){return g}),o.d(e,"a",function(){return f});var h="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function y(t,e,o){h&&(Array.isArray(t)||"function"==typeof t||void 0!==t.type||(t.type=Reflect.getMetadata("design:type",e,o)))}function b(o){return void 0===o&&(o={}),function(t,e){y(o,t,e),a(function(t,e){(t.props||(t.props={}))[e]=o})(t,e)}}function g(r,t){void 0===t&&(t={});var e=t.deep,n=void 0!==e&&e,o=t.immediate,i=void 0!==o&&o;return a(function(t,e){"object"!=typeof t.watch&&(t.watch=Object.create(null));var o=t.watch;"object"!=typeof o[r]||Array.isArray(o[r])?void 0===o[r]&&(o[r]=[]):o[r]=[o[r]],o[r].push({handler:e,deep:n,immediate:i})})}},1:function(t,e){t.exports=function(o,r,t,e,n){var i={};return Object.keys(e).forEach(function(t){i[t]=e[t]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=t.slice().reverse().reduce(function(t,e){return e(o,r,t)||t},i),n&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(n):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(o,r,i),i=null),i}},2:function(t,e){t.exports=function(t,e,o,r){o&&Object.defineProperty(t,e,{enumerable:o.enumerable,configurable:o.configurable,writable:o.writable,value:o.initializer?o.initializer.call(r):void 0})}},3:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},4:function(t,e){t.exports=o},40:function(t,e,o){},5:function(t,e){t.exports=function(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}},50:function(t,e,o){"use strict";o.r(e);o(40);var r,n=o(5),i=o.n(n),a=o(0),c=o(9),s=Object(a.a)(r=function(t){function e(){return t.apply(this,arguments)||this}i()(e,t);var o=e.prototype;return o.setModel=function(t){this.$parent.setModel(t)},o.setLeftLine=function(){var t=this.$parent,e=this.$el.offsetLeft;t.setLeftLine(e);var o=this.$refs.item.scrollWidth;t.setWidthLine(o)},o.setWidthLine=function(){},o.render=function(t){return t("div",{staticClass:"vso-navbar__group"},[t("button",{staticClass:"vso-navbar__group__item",ref:"item"},[this.$slots.default]),t("div",{staticClass:"vso-navbar__group__items"},[this.$slots.items])])},e}(c.a))||r;s.install=function(t){t.component("vso-navbar-group",s)},"undefined"!=typeof window&&window.Vue&&s.install(window.Vue);e.default=s},6:function(t,e,o){"use strict";o.d(e,"b",function(){return r}),o.d(e,"a",function(){return n}),o.d(e,"c",function(){return i}),o.d(e,"d",function(){return a});function u(t,e,o){o?"#comment"!==o.nodeName&&o.style.setProperty("--vso-"+t,e):document.documentElement.style.setProperty("--vso-"+t,e)}var r=function(t,e,o,r){var n,i=/^(rgb|rgba)/.test(e),a=/^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(e),c=/^(#)/.test(e);if("dark"==e&&o&&o.classList.add("vso-component-dark"),i){var s=e.replace(/[rgba()]/g,"").split(",");n=s[0]+","+s[1]+","+s[2],u(t,n,o),r&&o.classList.add("vso-change-color")}else if(c){var l=function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,o,r){return e+e+o+o+r+r});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}(e);n=l.r+","+l.g+","+l.b,u(t,n,o),r&&o.classList.add("vso-change-color")}else if(function(t){return["primary","secondary","success","danger","warning","dark","light","warn","facebook","twitter","youtube","pinterest","linkedin","snapchat","whatsapp","tumblr","reddit","spotify","amazon","medium","vimeo","skype","dribbble","slack","yahoo","twitch","discord","telegram","google-plus","messenger"].includes(t)}(e)){n=getComputedStyle(document.body).getPropertyValue("--vso-"+e),u(t,n,o),r&&o.classList.add("vso-change-color")}else a&&(u(t,e,o),r&&o.classList.add("vso-change-color"))},n=function(t,e){var o=e||document.body;o.insertBefore(t,o.lastChild)},i=function(t,e){var o=e.getBoundingClientRect(),r=o.x,n=o.y,i=o.width,a=o.height,c=t.style,s=window.pageYOffset,l=t.clientHeight+o.y+s;s+window.innerHeight-l<30?(c.top=n+s-t.clientHeight-4+"px",c.left=r+"px",c.width=i+"px",t.classList.add("top"),e.classList.add("top")):(c.top=n+s+a-4+"px",c.left=r+"px",c.width=i+"px",t.classList.remove("top"),e.classList.remove("top"))},a=function(t,e,o){var r=e.getBoundingClientRect(),n=r.x,i=r.y,a=r.width,c=r.height,s=t.style,l=window.pageYOffset,u=t.clientHeight+r.y+l,p=l+window.innerHeight;if(n+a+10+t.getBoundingClientRect().width>window.innerWidth&&"right"==o&&(o="left",t.classList.remove("right"),t.classList.add("left")),n-10<t.getBoundingClientRect().width&&"left"==o&&(o="top",t.classList.remove("left"),t.classList.add("top")),p-u<30||"top"==o){s.top=i+l-t.clientHeight-8+"px";var d=n+(a-t.getBoundingClientRect().width)/2;d+t.getBoundingClientRect().width<window.innerWidth?0<d?s.left=d+"px":(s.left="10px",t.classList.add("notArrow")):(s.left="auto",s.right="10px",t.classList.add("notArrow"))}else if("bottom"==o){s.top=i+l+c+8+"px";var f=n+(a-t.getBoundingClientRect().width)/2;f+t.getBoundingClientRect().width<window.innerWidth?0<f?s.left=f+"px":(s.left="10px",t.classList.add("notArrow")):(s.left="auto",s.right="10px",t.classList.add("notArrow"))}else"left"==o?(s.top=i+l+(c-t.getBoundingClientRect().height)/2+"px",s.left=n-t.getBoundingClientRect().width-8+"px"):"right"==o&&(s.top=i+l+(c-t.getBoundingClientRect().height)/2+"px",s.left=n+a+8+"px")}},7:function(t,e){function r(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,o){return e&&r(t.prototype,e),o&&r(t,o),t}},8:function(t,e){t.exports=function(t,e){throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.")}},9:function(t,e,o){"use strict";o.d(e,"a",function(){return V});var r,n,i,a,c,s,l,u,p,d,f,h,y,b,g,v,m,w,O,j,_,x,C,P,k=o(2),L=o.n(k),W=o(7),R=o.n(W),$=o(3),D=o.n($),B=o(5),M=o.n(B),z=o(1),E=o.n(z),A=(o(8),o(4)),S=o.n(A),N=o(0),H=o(6),V=(r=Object(N.b)({type:String,default:null}),n=Object(N.b)({type:Boolean,default:!1}),i=Object(N.b)({type:Boolean,default:!1}),a=Object(N.b)({type:Boolean,default:!1}),c=Object(N.b)({type:Boolean,default:!1}),s=Object(N.b)({type:Boolean,default:!1}),l=Object(N.b)({type:Boolean,default:!1}),u=Object(N.c)("color"),p=Object(N.c)("primary"),d=Object(N.c)("danger"),f=Object(N.c)("success"),h=Object(N.c)("warn"),y=Object(N.c)("dark"),Object(N.a)((P=C=function(n){function t(){for(var t,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return(t=n.call.apply(n,[this].concat(o))||this).componentColor=null,L()(t,"color",v,D()(t)),L()(t,"danger",m,D()(t)),L()(t,"success",w,D()(t)),L()(t,"warn",O,D()(t)),L()(t,"dark",j,D()(t)),L()(t,"primary",_,D()(t)),L()(t,"active",x,D()(t)),t}M()(t,n);var e=t.prototype;return e.changeColor=function(){this.$el&&"#comment"!=this.$el.nodeName&&(this.componentColor=(this.danger?"danger":this.success&&"success")||this.warn&&"warn"||this.dark&&"dark"||this.primary&&"primary",(this.color||this.componentColor)&&(Object(H.b)("color",this.componentColor||this.color||"primary",this.$el,!0),this.$refs.options&&Object(H.b)("color",this.componentColor||this.color||"primary",this.$refs.options,!0),this.$refs.tooltip&&Object(H.b)("color",this.componentColor||this.color||"primary",this.$refs.tooltip,!0)),"dark"==this.componentColor||"dark"==this.color?this.$el.classList.add("vso-component-dark"):this.$el.classList.remove("vso-component-dark"),"white"==this.componentColor?this.$el.classList.add("vso-component-white"):this.$el.classList.remove("vso-component-white"))},e.handleWatchColor=function(){this.changeColor()},e.handleWatchPrimary=function(){this.changeColor()},e.handleWatchDanger=function(){this.changeColor()},e.handleWatchSuccess=function(){this.changeColor()},e.handleWatchWarn=function(){this.changeColor()},e.handleWatchDark=function(){this.changeColor()},e.updated=function(){this.changeColor()},e.mounted=function(){this.changeColor()},R()(t,[{key:"isColorDark",get:function(){return"dark"===this.color||this.dark||"dark"===this.componentColor}}]),t}(S.a),C.install=void 0,C.use=void 0,g=P,v=E()(g.prototype,"color",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=E()(g.prototype,"danger",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=E()(g.prototype,"success",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=E()(g.prototype,"warn",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=E()(g.prototype,"dark",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=E()(g.prototype,"primary",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=E()(g.prototype,"active",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),E()(g.prototype,"handleWatchColor",[u],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchColor"),g.prototype),E()(g.prototype,"handleWatchPrimary",[p],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchPrimary"),g.prototype),E()(g.prototype,"handleWatchDanger",[d],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchDanger"),g.prototype),E()(g.prototype,"handleWatchSuccess",[f],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchSuccess"),g.prototype),E()(g.prototype,"handleWatchWarn",[h],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchWarn"),g.prototype),E()(g.prototype,"handleWatchDark",[y],Object.getOwnPropertyDescriptor(g.prototype,"handleWatchDark"),g.prototype),b=g))||b)}},n.c=i,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=50)).default;function n(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,n),e.l=!0,e.exports}var r,i});
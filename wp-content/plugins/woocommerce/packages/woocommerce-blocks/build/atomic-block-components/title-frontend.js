(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[13],{144:function(e,t,c){"use strict";var n=c(10),o=c.n(n),r=c(14),a=c.n(r),i=(c(3),c(17)),l=c(4),s=c.n(l),u=(c(163),["className","disabled","name","permalink"]);t.a=function(e){var t=e.className,c=void 0===t?"":t,n=e.disabled,r=void 0!==n&&n,l=e.name,p=e.permalink,b=void 0===p?"":p,d=a()(e,u),f=s()("wc-block-components-product-name",c);return r?React.createElement("span",o()({className:f},d),Object(i.decodeEntities)(l)):React.createElement("a",o()({className:f,href:b},d),Object(i.decodeEntities)(l))}},163:function(e,t){},202:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var n=function(e,t){var c=[];return Object.keys(e).forEach((function(n){if(void 0!==t[n])switch(e[n].type){case"boolean":c[n]="false"!==t[n]&&!1!==t[n];break;case"number":c[n]=parseInt(t[n],10);break;case"array":case"object":c[n]=JSON.parse(t[n]);break;default:c[n]=t[n]}else c[n]=e[n].default})),c}},295:function(e,t,c){"use strict";var n=c(10),o=c.n(n),r=c(202);t.a=function(e){return function(t){return function(c){var n=Object(r.a)(e,c);return React.createElement(t,o()({},c,n))}}}},299:function(e,t){},319:function(e,t,c){"use strict";c.r(t);var n=c(295),o=c(7),r=c.n(o),a=(c(3),c(4)),i=c.n(a),l=c(82),s=c(212),u=c(12),p=function(e){var t=e.color,c=e.fontSize;return Object(u.l)()?{color:t,fontSize:c}:{}},b=c(211),d=c(144),f=c(57),m=(c(299),Object(b.withProductDataContext)((function(e){var t,c,n,o=e.className,a=e.headingLevel,b=void 0===a?2:a,m=e.productLink,O=void 0===m||m,j=e.align,v=e.color,y=e.customColor,k=e.fontSize,w=e.customFontSize,g=Object(l.useInnerBlockLayoutContext)().parentClassName,h=Object(l.useProductDataContext)().product,S=Object(f.a)().dispatchStoreEvent,E="h".concat(b),N=Object(s.getColorClassName)("color",v),z=Object(s.getFontSizeClass)(k),C=i()((t={"has-text-color":v||y,"has-font-size":k||w},r()(t,N,N),r()(t,z,z),t));return h.id?React.createElement(E,{className:i()(o,"wc-block-components-product-title",(c={},r()(c,"".concat(g,"__product-title"),g),r()(c,"wc-block-components-product-title--align-".concat(j),j&&Object(u.l)()),c))},React.createElement(d.a,{className:i()(r()({},C,Object(u.l)())),disabled:!O,name:h.name,permalink:h.permalink,rel:O?"nofollow":null,style:p({color:y,fontSize:w}),onClick:function(){S("product-view-link",{product:h})}})):React.createElement(E,{className:i()(o,"wc-block-components-product-title",(n={},r()(n,"".concat(g,"__product-title"),g),r()(n,"wc-block-components-product-title--align-".concat(j),j&&Object(u.l)()),r()(n,C,Object(u.l)()),n)),style:p({color:y,fontSize:w})})})));function O(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function j(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?O(Object(c),!0).forEach((function(t){r()(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):O(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}var v={headingLevel:{type:"number",default:2},productLink:{type:"boolean",default:!0},productId:{type:"number",default:0}};Object(u.l)()&&(v=j(j({},v),{},{align:{type:"string"},color:{type:"string"},customColor:{type:"string"},fontSize:{type:"string"},customFontSize:{type:"number"}}));var y=v;t.default=Object(n.a)(y)(m)}}]);
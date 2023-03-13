/*! For license information please see 334.206869ad.chunk.js.LICENSE.txt */
(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[334],{541:function(e,t,n){"use strict";n.d(t,{h:function(){return c}});var r,o=n(1413),i=n(4925),a=n(168),s=n(6444).ZP.button(r||(r=(0,a.Z)(["\n   display: flex;\n  column-gap: 10px;\n  min-width: 40px;\n  align-self: center;\n  align-items: center;\n  padding: 10px 30px;\n  background-color: #fde7f0;\n  color: black; \n  border: 5px solid transparent;\n  border-radius: 10px;\n  font-size: 20px;\n  font-weight: 800;\n  text-transform: uppercase;\n  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);\n  cursor: pointer;\n  transition: 250ms background-color cubic-bezier(0.4, 0, 0.2, 1), 250ms color cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    background-color: #f787b4;\n    color: white;\n  }\n"]))),l=n(184),u=["children","onClick"];function c(e){var t=e.children,n=e.onClick,r=(0,i.Z)(e,u);return(0,l.jsx)(s,(0,o.Z)((0,o.Z)({type:"button",onClick:n},r),{},{children:t}))}},6680:function(e,t,n){"use strict";n.d(t,{E:function(){return r}});var r=Object.freeze({sm:30,md:45,lg:80})},2334:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var r,o,i,a,s=n(5861),l=n(9439),u=n(7757),c=n.n(u),f=n(2791),p=n(1087),d=n(7689),h=n(541),v=n(4390),y=n(3605),g=n(6680),m=n(168),x=n(6444),b=x.ZP.main(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 30px;\n  "]))),S=x.ZP.div(o||(o=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 30px;\n\n  h3 {\n  font-weight: 700;\n  color: #f787b4;\n  font-size: 30px;\n  }\n\n"]))),j=x.ZP.ul(i||(i=(0,m.Z)(["\n  display: flex;\n  column-gap: 30px;\n"]))),w=(0,x.ZP)(p.OL)(a||(a=(0,m.Z)(["\n  display: flex;\n  column-gap: 10px;\n  min-width: 200px;\n  justify-content: center;\n  padding: 10px 30px;\n  background-color: white;\n  color: black;\n  border: 5px solid transparent;\n  border-radius: 10px;\n  font-size: 20px;\n  font-weight: 800;\n  text-transform: uppercase;\n  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);\n  cursor: pointer;\n  transition: 250ms background-color ease-in, 250ms color ease-in;\n  &.active {\n    color: white;\n    background-color: #fc458e;\n   \n  }\n\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    background-color: #fde7f0;\n    color: #fc458e;;\n  }\n"])));function _(e){var t=Math.floor(e/60),n=t>0?"".concat(t," h"):"",r="".concat(e-60*t," min");return"".concat(n,"  ").concat(r," ")}var k,R,C,O,P,E,Z,I,N,q=n(5778),z=x.ZP.div(k||(k=(0,m.Z)(["\n  display: flex;\n  column-gap: 30px;\n"]))),H=x.ZP.img(R||(R=(0,m.Z)(["\n    width: 394px;\n    height: 574px;\n    border-radius: 10px;\n    box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);\n"]))),$=x.ZP.div(C||(C=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 30px;\n  padding-left: 20px;\n  padding-right: 20px;\n  color: black;\n  font-size: 24px;\n\n  .info {\n    display:flex;\n    column-gap: 5px;\n  }\n"]))),M=x.ZP.h2(O||(O=(0,m.Z)(["\n  color: #fc458e; \n  font-size: 38px ;\n"]))),F=x.ZP.p(P||(P=(0,m.Z)(["\n  color: #fc458e; \n  font-size: 38px ;\n  font-weight: 700;\n"]))),T=x.ZP.h3(E||(E=(0,m.Z)(["\n  font-size: 30px ;\n  margin-bottom: 10px;\n"]))),D=x.ZP.div(Z||(Z=(0,m.Z)(["\n  display: flex;\n  align-items:center;\n  justify-content: space-between;\n  column-gap:20px;\n  font-size: 30px ;\n  font-weight: 600;\n  .votes {\n    display: flex;\n   column-gap:10px;\n  }\n   li {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    row-gap:5px;\n    font-size: 26px;\n    font-style:italic;\n   }\n\n   p {\n    margin: 0;\n    font-size:40px;\n    padding: 10px;\n    border-radius:10px;\n    background-color:#fde7f0;\n   }\n\n   .full-star, .like {\n    fill: #fc458e; \n   } \n   span {\n    font-size: 22px;\n   }\n\n"]))),A=x.ZP.ul(I||(I=(0,m.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap:20px;\n"]))),L=x.ZP.span(N||(N=(0,m.Z)(["\n  display: flex;\n  padding: 10px;\n  border-radius: 5px;\n  justify-content: center;\n  background-color: #fde7f0;\n  font-weight: 500;\n  font-style: italic;\n"]))),V=n(184),B=function(e){var t=e.movieDetails,n=t.title,r=t.vote_average,o=t.runtime,i=t.vote_count,a=t.release_date,s=t.poster_path,l=t.overview,u=t.genres,c=r.toFixed(2),f=""!==a?new Date(a).getFullYear():null,p=Math.round(i*r/10),d=Math.round(i-p);return(0,V.jsxs)(z,{children:[(0,V.jsx)(H,{src:s?"https://image.tmdb.org/t/p/original".concat(s):"https://img.freepik.com/free-vector/coming-soon-shop-announcement-vector_53876-57828.jpg",alt:"Movie ".concat(n," poster"),width:"394",height:"574"}),(0,V.jsxs)($,{children:[(0,V.jsxs)("div",{className:"info",children:[(0,V.jsxs)(M,{children:[n," "]}),f&&(0,V.jsxs)(F,{children:[" (",f,") "]})]}),0!==r?(0,V.jsxs)(D,{children:[(0,V.jsx)(q.Z,{rating:r,starRatedColor:"#fc458e",starDimension:"40px",starEmptyColor:"#fde7f0",numberOfStars:10,name:"rating",starSpacing:"2px"}),(0,V.jsx)("p",{children:c}),(0,V.jsxs)("ul",{className:"votes",children:[(0,V.jsxs)("li",{children:[(0,V.jsx)("span",{children:(0,y.t)("dislike",g.E.sm)}),(0,V.jsx)("span",{children:d})]}),(0,V.jsxs)("li",{children:[(0,V.jsx)("span",{children:(0,y.t)("like",g.E.sm)}),(0,V.jsx)("span",{children:p})]})]})]}):(0,V.jsx)("p",{children:"There are no details about movie rating"}),(0,V.jsxs)("div",{children:[(0,V.jsx)(T,{children:"Overview"}),l?(0,V.jsx)("p",{children:l}):(0,V.jsx)("p",{children:"There are no details about movie genres"})]}),(0,V.jsxs)("div",{children:[(0,V.jsx)(T,{children:"Duration"}),o?(0,V.jsx)("span",{children:_(o)}):(0,V.jsx)("p",{children:"There are is no info about movie runtime"})]}),(0,V.jsxs)("div",{children:[(0,V.jsx)(T,{children:"Genres"}),(null===u||void 0===u?void 0:u.length)>0?(0,V.jsx)(A,{children:u.map((function(e){var t=e.id,n=e.name;return(0,V.jsx)("li",{children:(0,V.jsx)(L,{children:n})},t)}))}):(0,V.jsx)("p",{children:"There are no details about movie genres"})]})]})]})},U=function(){var e,t,n,r,o=(0,f.useState)(null),i=(0,l.Z)(o,2),a=i[0],u=i[1],m=(0,f.useState)(!1),x=(0,l.Z)(m,2),_=(x[0],x[1]),k=(0,f.useState)(!1),R=(0,l.Z)(k,2),C=R[0],O=R[1],P=(0,d.UO)().movieId,E=(0,d.TH)();if((0,f.useEffect)((function(){function e(){return e=(0,s.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_(!0),e.next=4,v.TP(t);case 4:n=e.sent,u(n),O(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),O(!0);case 12:return e.prev=12,_(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])}))),e.apply(this,arguments)}!function(t){e.apply(this,arguments)}(P)}),[P]),!a)return null;var Z=null!==(e=null===(t=E.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,V.jsxs)(b,{children:[(0,V.jsx)(p.rU,{to:Z,children:(0,V.jsx)(h.h,{"aria-label":"Back to previous page",children:(0,y.t)("back",g.E.sm)})}),C&&(0,V.jsx)("p",{children:"Something went wrong. Please try again"}),(0,V.jsx)(B,{movieDetails:a}),(0,V.jsxs)(S,{children:[(0,V.jsx)("h3",{children:"Additional information"}),(0,V.jsxs)(j,{children:[(0,V.jsx)("li",{children:(0,V.jsx)(w,{to:"cast",state:{from:null===(n=E.state)||void 0===n?void 0:n.from},children:"Cast"})}),(0,V.jsx)("li",{children:(0,V.jsx)(w,{to:"reviews",state:{from:null===(r=E.state)||void 0===r?void 0:r.from},children:"Reviews"})})]})]}),(0,V.jsx)(f.Suspense,{children:(0,V.jsx)(d.j3,{})})]})}},4390:function(e,t,n){"use strict";n.d(t,{Df:function(){return l},M1:function(){return h},TP:function(){return p},Wf:function(){return c},tx:function(){return y}});var r=n(5861),o=n(7757),i=n.n(o),a=n(1243);a.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="5e62b2453973c629f1496ace3a4b7719";function l(e){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/trending/movie/day?api_key=".concat(s,"&&page=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e,t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function e(t,n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/search/movie?api_key=".concat(s,"&query=").concat(t,"&&page=").concat(n));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/movie/".concat(t,"?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/movie/".concat(t,"/credits?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},3605:function(e,t,n){"use strict";n.d(t,{t:function(){return f}});var r=n(1578),o=n(4373),i=n(5863),a=n(828),s=n(6355),l=n(8820),u=n(8617),c=n(184);function f(e,t){switch(e){case"movie":return(0,c.jsx)(r.hlg,{size:t,className:"contact-form__icon"});case"back":return(0,c.jsx)(o.D_,{size:t,className:"contact-form__icon"});case"film":return(0,c.jsx)(i.TRU,{size:t,className:"contact-form__icon"});case"search":return(0,c.jsx)(a.Yfv,{size:t,className:"contact-form__icon"});case"error":return(0,c.jsx)(s.rs_,{size:t,className:"contact-form__icon"});case"star":return(0,c.jsx)(a.aQ4,{size:t,className:"contact-form__icon full-star"});case"like":return(0,c.jsx)(l.L7p,{size:t,className:"contact-form__icon like"});case"dislike":return(0,c.jsx)(l.Ov5,{size:t,className:"contact-form__icon like"});case"ellipsis":return(0,c.jsx)(u.JEI,{size:t,className:"contact-form__icon like"});case"left":return(0,c.jsx)(u.siY,{size:t,className:"contact-form__icon like"});case"right":return(0,c.jsx)(u.WFu,{size:t,className:"contact-form__icon like"});default:return(0,c.jsx)("span",{children:"icon"})}}},1694:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},1725:function(e){"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,s,l=o(e),u=1;u<arguments.length;u++){for(var c in a=Object(arguments[u]))n.call(a,c)&&(l[c]=a[c]);if(t){s=t(a);for(var f=0;f<s.length;f++)r.call(a,s[f])&&(l[s[f]]=a[s[f]])}}return l}},5778:function(e,t,n){"use strict";var r,o=n(8810),i=(r=o)&&r.__esModule?r:{default:r};Number.isInteger=Number.isInteger||function(e){return"number"===typeof e&&isFinite(e)&&Math.floor(e)===e},t.Z=i.default},8810:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=s(n(6600)),i=s(n(2007)),a=s(n(4683));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var c=function(e){function t(){var e,n,r;l(this,t);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=r=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.state={highestStarHovered:-1/0},r.fillId="starGrad"+Math.random().toFixed(15).slice(2),r.hoverOverStar=function(e){return function(){r.setState({highestStarHovered:e})}},r.unHoverOverStar=function(){r.setState({highestStarHovered:-1/0})},u(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"stopColorStyle",value:function(e){var t={stopColor:e,stopOpacity:"1"};return this.props.ignoreInlineStyles?{}:t}},{key:"render",value:function(){var e=this.props,t=e.starRatedColor,n=e.starEmptyColor;return o.default.createElement("div",{className:"star-ratings",title:this.titleText,style:this.starRatingsStyle},o.default.createElement("svg",{className:"star-grad",style:this.starGradientStyle},o.default.createElement("defs",null,o.default.createElement("linearGradient",{id:this.fillId,x1:"0%",y1:"0%",x2:"100%",y2:"0%"},o.default.createElement("stop",{offset:"0%",className:"stop-color-first",style:this.stopColorStyle(t)}),o.default.createElement("stop",{offset:this.offsetValue,className:"stop-color-first",style:this.stopColorStyle(t)}),o.default.createElement("stop",{offset:this.offsetValue,className:"stop-color-final",style:this.stopColorStyle(n)}),o.default.createElement("stop",{offset:"100%",className:"stop-color-final",style:this.stopColorStyle(n)})))),this.renderStars)}},{key:"starRatingsStyle",get:function(){return this.props.ignoreInlineStyles?{}:{position:"relative",boxSizing:"border-box",display:"inline-block"}}},{key:"starGradientStyle",get:function(){return this.props.ignoreInlineStyles?{}:{position:"absolute",zIndex:"0",width:"0",height:"0",visibility:"hidden"}}},{key:"titleText",get:function(){var e=this.props,t=e.typeOfWidget,n=e.rating,r=this.state.highestStarHovered,o=r>0?r:n,i=parseFloat(o.toFixed(2)).toString();Number.isInteger(o)&&(i=String(o));var a=t+"s";return"1"===i&&(a=t),i+" "+a}},{key:"offsetValue",get:function(){var e=this.props.rating,t="0%";Number.isInteger(e)||(t=e.toFixed(2).split(".")[1].slice(0,2)+"%");return t}},{key:"renderStars",get:function(){var e=this,t=this.props,n=t.changeRating,r=t.rating,i=t.numberOfStars,s=t.starDimension,l=t.starSpacing,u=t.starRatedColor,c=t.starEmptyColor,f=t.starHoverColor,p=t.gradientPathName,d=t.ignoreInlineStyles,h=t.svgIconPath,v=t.svgIconViewBox,y=t.name,g=this.state.highestStarHovered;return Array.apply(null,Array(i)).map((function(t,m){var x=m+1,b=x<=r,S=g>0,j=x<=g,w=x===g,_=x>r&&x-1<r,k=1===x,R=x===i;return o.default.createElement(a.default,{key:x,fillId:e.fillId,changeRating:n?function(){return n(x,y)}:null,hoverOverStar:n?e.hoverOverStar(x):null,unHoverOverStar:n?e.unHoverOverStar:null,isStarred:b,isPartiallyFullStar:_,isHovered:j,hoverMode:S,isCurrentHoveredStar:w,isFirstStar:k,isLastStar:R,starDimension:s,starSpacing:l,starHoverColor:f,starRatedColor:u,starEmptyColor:c,gradientPathName:p,ignoreInlineStyles:d,svgIconPath:h,svgIconViewBox:v})}))}}]),t}(o.default.Component);c.propTypes={rating:i.default.number.isRequired,numberOfStars:i.default.number.isRequired,changeRating:i.default.func,starHoverColor:i.default.string.isRequired,starRatedColor:i.default.string.isRequired,starEmptyColor:i.default.string.isRequired,starDimension:i.default.string.isRequired,starSpacing:i.default.string.isRequired,gradientPathName:i.default.string.isRequired,ignoreInlineStyles:i.default.bool.isRequired,svgIconPath:i.default.string.isRequired,svgIconViewBox:i.default.string.isRequired,name:i.default.string},c.defaultProps={rating:0,typeOfWidget:"Star",numberOfStars:5,changeRating:null,starHoverColor:"rgb(230, 67, 47)",starRatedColor:"rgb(109, 122, 130)",starEmptyColor:"rgb(203, 211, 227)",starDimension:"50px",starSpacing:"7px",gradientPathName:"",ignoreInlineStyles:!1,svgIconPath:"m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z",svgIconViewBox:"0 0 51 48"},t.default=c},4683:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=s(n(6600)),i=s(n(1694)),a=s(n(2007));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var c=function(e){function t(){return l(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props,t=e.changeRating,n=e.hoverOverStar,r=e.unHoverOverStar,i=e.svgIconViewBox,a=e.svgIconPath;return o.default.createElement("div",{className:"star-container",style:this.starContainerStyle,onMouseEnter:n,onMouseLeave:r,onClick:t},o.default.createElement("svg",{viewBox:i,className:this.starClasses,style:this.starSvgStyle},o.default.createElement("path",{className:"star",style:this.pathStyle,d:a})))}},{key:"starContainerStyle",get:function(){var e=this.props,t=e.changeRating,n=e.starSpacing,r=e.isFirstStar,o=e.isLastStar;return e.ignoreInlineStyles?{}:{position:"relative",display:"inline-block",verticalAlign:"middle",paddingLeft:r?void 0:n,paddingRight:o?void 0:n,cursor:t?"pointer":void 0}}},{key:"starSvgStyle",get:function(){var e=this.props,t=e.ignoreInlineStyles,n=e.isCurrentHoveredStar,r=e.starDimension;return t?{}:{width:r,height:r,transition:"transform .2s ease-in-out",transform:n?"scale(1.1)":void 0}}},{key:"pathStyle",get:function(){var e=this.props,t=e.isStarred,n=e.isPartiallyFullStar,r=e.isHovered,o=e.hoverMode,i=e.starEmptyColor,a=e.starRatedColor,s=e.starHoverColor,l=e.gradientPathName,u=e.fillId,c=void 0;return c=o?r?s:i:n?"url('"+l+"#"+u+"')":t?a:i,e.ignoreInlineStyles?{}:{fill:c,transition:"fill .2s ease-in-out"}}},{key:"starClasses",get:function(){var e=this.props,t=e.isSelected,n=e.isPartiallyFullStar,r=e.isHovered,o=e.isCurrentHoveredStar,a=e.ignoreInlineStyles,s=(0,i.default)({"widget-svg":!0,"widget-selected":t,"multi-widget-selected":n,hovered:r,"current-hovered":o});return a?{}:s}}]),t}(o.default.Component);c.propTypes={fillId:a.default.string.isRequired,changeRating:a.default.func,hoverOverStar:a.default.func,unHoverOverStar:a.default.func,isStarred:a.default.bool.isRequired,isPartiallyFullStar:a.default.bool.isRequired,isHovered:a.default.bool.isRequired,hoverMode:a.default.bool.isRequired,isCurrentHoveredStar:a.default.bool.isRequired,isFirstStar:a.default.bool.isRequired,isLastStar:a.default.bool.isRequired,starDimension:a.default.string.isRequired,starSpacing:a.default.string.isRequired,starHoverColor:a.default.string.isRequired,starRatedColor:a.default.string.isRequired,starEmptyColor:a.default.string.isRequired,gradientPathName:a.default.string.isRequired,ignoreInlineStyles:a.default.bool.isRequired,svgIconPath:a.default.string.isRequired,svgIconViewBox:a.default.string.isRequired},t.default=c},7381:function(e,t,n){"use strict";var r=n(1725),o="function"===typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,s=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,c=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.memo"):60115,v=o?Symbol.for("react.lazy"):60116,y="function"===typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x={};function b(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||m}function S(){}function j(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||m}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=b.prototype;var w=j.prototype=new S;w.constructor=j,r(w,b.prototype),w.isPureReactComponent=!0;var _={current:null},k=Object.prototype.hasOwnProperty,R={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r,o={},a=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,r)&&!R.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:i,type:e,key:a,ref:s,props:o,_owner:_.current}}function O(e){return"object"===typeof e&&null!==e&&e.$$typeof===i}var P=/\/+/g,E=[];function Z(e,t,n,r){if(E.length){var o=E.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function N(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var s=!1;if(null===e)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case i:case a:s=!0}}if(s)return n(r,e,""===t?"."+z(e,0):t),1;if(s=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=t+z(o=e[l],l);s+=N(o,u,n,r)}else if(null===e||"object"!==typeof e?u=null:u="function"===typeof(u=y&&e[y]||e["@@iterator"])?u:null,"function"===typeof u)for(e=u.call(e),l=0;!(o=e.next()).done;)s+=N(o=o.value,u=t+z(o,l++),n,r);else if("object"===o)throw n=""+e,Error(g(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return s}function q(e,t,n){return null==e?0:N(e,"",t,n)}function z(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function H(e,t){e.func.call(e.context,t,e.count++)}function $(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,r,n,(function(e){return e})):null!=e&&(O(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n)),r.push(e))}function M(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(P,"$&/")+"/"),q(e,$,t=Z(t,i,r,o)),I(t)}var F={current:null};function T(){var e=F.current;if(null===e)throw Error(g(321));return e}var D={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return M(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;q(e,H,t=Z(null,null,t,n)),I(t)},count:function(e){return q(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!O(e))throw Error(g(143));return e}},t.Component=b,t.Fragment=s,t.Profiler=u,t.PureComponent=j,t.StrictMode=l,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error(g(267,e));var o=r({},e.props),a=e.key,s=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,l=_.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)k.call(t,c)&&!R.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){u=Array(c);for(var f=0;f<c;f++)u[f]=arguments[f+2];o.children=u}return{$$typeof:i,type:e.type,key:a,ref:s,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:v,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return T().useCallback(e,t)},t.useContext=function(e,t){return T().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return T().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return T().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return T().useLayoutEffect(e,t)},t.useMemo=function(e,t){return T().useMemo(e,t)},t.useReducer=function(e,t,n){return T().useReducer(e,t,n)},t.useRef=function(e){return T().useRef(e)},t.useState=function(e){return T().useState(e)},t.version="16.14.0"},6600:function(e,t,n){"use strict";e.exports=n(7381)}}]);
//# sourceMappingURL=334.206869ad.chunk.js.map
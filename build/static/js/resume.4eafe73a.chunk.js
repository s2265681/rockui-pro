(this.webpackJsonphookWidthTypeScript=this.webpackJsonphookWidthTypeScript||[]).push([[12],{109:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.visible,n=e.onMouseMove,r=e.onMouseUp;return t?a.a.createElement("div",{className:"show_mask",onMouseMove:n,onMouseUp:r}):a.a.createElement(a.a.Fragment,null)}},149:function(e,t,n){"use strict";var r=n(39),a=n(0),o=n.n(a),c=n(109);n(150);t.a=function(e){var t=e.Data,n=e.index,i=e.setList,u=e.lineHeight,l=e.children,s=e.onMouseUp,m=Object(a.useState)(!1),f=Object(r.a)(m,2),d=f[0],p=f[1],b=Object(a.useState)(0),v=Object(r.a)(b,2),y=v[0],h=v[1],E=Object(a.useState)(0),g=Object(r.a)(E,2),w=g[0],S=g[1],O=Object(a.useState)(-1),j=Object(r.a)(O,2),_=j[0],M=j[1];function k(e,t,n){return console.log(e,t,n),(e=e.slice()).splice(n,0,e.splice(t,1)[0]),e}return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{onMouseDown:function(e){return function(e,t){M(t),h(e.pageY),p(!0)}(e,n)},key:n,style:function(e){return e!==_?{}:{transform:"translate(5px,".concat(w,"px)")}}(n),className:"mask-li-style ".concat(n==_?" chooseSty":"")},l),o.a.createElement(c.a,{visible:d,onMouseMove:function(e){var n=e.pageY-y;if(n>u&&_<t.length){n-=u;var r=k(t,_,_+1);i(r),M(_+1),h(y+u)}else if(n<-u&&_>0){n+=u;var a=k(t,_-1,_);i(a),M(_-1),h(y-u)}S(n)},onMouseUp:function(e){p(!1),h(0),M(-1),s&&s(e)}}))}},150:function(e,t,n){},151:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=function(e){var t=Object(r.useRef)(null),n=e.type,o=e.content,c=e.isEdit,i=e.onChange;return a.a.createElement("div",{onBlur:function(e){return function(e,n){if(t&&t.current){var r=t.current;i&&i(r,n)}}(0,n)},className:"content-info-wrapper",onKeyUp:function(t){return e.handleSelectMouseUp&&e.handleSelectMouseUp(t)},onDrop:function(t){return e.onDrop&&e.onDrop(t)},onDragOver:function(e){return e.preventDefault()}},"label-bar"===n&&a.a.createElement("div",{className:"label_wrapper",ref:t,style:{minHeight:100},contentEditable:c,suppressContentEditableWarning:!0,dangerouslySetInnerHTML:{__html:o[0]}}),"one-column"===n&&a.a.createElement("div",{className:"one-wrapper",ref:t,style:{minHeight:300},contentEditable:c,suppressContentEditableWarning:!0,dangerouslySetInnerHTML:{__html:o[0]}}),"two-column"===n&&a.a.createElement("div",{className:"two_wrapper",style:{minHeight:300},ref:t},a.a.createElement("div",{className:"left_wrapper",contentEditable:c,suppressContentEditableWarning:!0,dangerouslySetInnerHTML:{__html:o[0]}}),a.a.createElement("div",{className:"right_wrapper",contentEditable:c,suppressContentEditableWarning:!0,dangerouslySetInnerHTML:{__html:o[1]}})))};o.defaultProps={content:["\u8bf7\u8f93\u5165\u5185\u5bb9","\u8bf7\u8f93\u5165\u5185\u5bb9"],isEdit:!0},t.a=o},39:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(47);var a=n(45),o=n(48);function c(e,t){return Object(r.a)(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}(e,t)||Object(a.a)(e,t)||Object(o.a)()}},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(46);function a(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},46:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},47:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return r}))},48:function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,"a",(function(){return r}))},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(46);var a=n(99),o=n(45);function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||Object(a.a)(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},57:function(e,t){},603:function(e,t,n){"use strict";n.r(t);var r=n(54),a=n(39),o=n(0),c=n.n(o),i=n(19),u=n(56),l=n(149),s=n(151),m=["<Button contentEditable>Button\u7ec4\u4ef6</Button>",'<img width="100" height="100" src="https://www.w3school.com.cn/i/eg_dragdrop_w3school.gif"/>','<div contentEditable style="height:100px;background:#ff0">\u6211\u662fDiv</div>'],f=[{id:1,color:"#f00",name:"\u7ea2\u8272"},{id:2,color:"#ff0",name:"\u9ec4\u8272"},{id:3,color:"#00f",name:"\u84dd\u8272"}],d=[{name:"label-bar",key:"label-bar"},{name:"\u4e00\u680f\u5e03\u5c40",key:"one-column"},{name:"\u4e24\u680f\u5e03\u5c40",key:"two-column"}],p=u.h.MenuItem,b=u.h.SubMenu;t.default=function(e){var t=localStorage.getItem("resume_content"),n=t?JSON.parse(t):[],v=Object(o.useState)(n),y=Object(a.a)(v,2),h=y[0],E=y[1],g=Object(o.useState)(-1),w=Object(a.a)(g,2),S=w[0],O=w[1];Object(o.useEffect)((function(){localStorage.setItem("resume_content",JSON.stringify(h))}),[h]);var j=function(e){var t;if(null===(t=document.getSelection())||void 0===t?void 0:t.anchorNode){var n=document.getSelection();console.log(null===n||void 0===n?void 0:n.extentNode,"anchorNode>>")}};return c.a.createElement("div",{className:"resume_wrapper"},c.a.createElement("div",{className:"resume_left_wrapper"},c.a.createElement(u.h,{mode:"vertical",defaultIndex:"0"},c.a.createElement(b,{title:"\u9009\u62e9\u5e03\u5c40"},d.map((function(e){return c.a.createElement(p,{key:e.key},c.a.createElement(u.e,{onClick:function(){return function(e){var t={type:e,content:["\u6dfb\u52a0\u5185\u5bb9"]};E([].concat(Object(r.a)(h),[t]));var n=document.getElementById("anchorEnd");n&&n.scrollIntoView({block:"start",behavior:"smooth"})}(e.key)}},e.name))}))),c.a.createElement(b,{title:"\u62d6\u62fd\u7ec4\u4ef6"},m.map((function(e,t){return c.a.createElement(p,null,c.a.createElement("div",{dangerouslySetInnerHTML:{__html:e},draggable:"true",onDragStart:function(){return O(t)},onDragEnd:function(){return O(-1)}}))}))))),c.a.createElement("div",{className:"resume_right_wrapper"},c.a.createElement("div",{className:"resume_edit_wrapper"},"\u7f16\u8f91\u533a",h.map((function(e,t){return c.a.createElement(l.a,{Data:h,setList:E,index:t,lineHeight:200,onMouseUp:function(e){return j()}},c.a.createElement("div",{key:e.typeId},c.a.createElement(u.g,{onMouseDown:function(e){!function(e,t){e.stopPropagation(),E(Object(r.a)(h.filter((function(e,n){return n!==t}))))}(e,t)},icon:"times-circle",size:"1x",className:"resume_delete_btn"}),c.a.createElement(s.a,{type:e.type,onChange:function(n){return function(e,t,n){if("two-column"===e){var a=n.children[0].innerText,o=n.children[1].innerText;h[t].content=[a,o]}else h[t].content=[n.innerHTML];E(Object(r.a)(h))}(e.type,t,n)},content:h[t].content,handleSelectMouseUp:function(e){return j()},onDrop:function(e){return function(e,t){e.preventDefault();var n=h[t].content[0].concat(m[S]);h[t].content[0]=n,E(Object(r.a)(h))}(e,t)}})))})),c.a.createElement("div",{id:"anchorEnd",style:{visibility:"hidden"}},"\u901a\u8fc7\u951a\u70b9\u65b9\u5f0f\u914d\u5408scrollIntoView\u5b9e\u73b0\u5e73\u6ed1\u5411\u4e0b\u6eda\u52a8")),c.a.createElement("div",{className:"preview_wrapper"},c.a.createElement("div",{className:"btn_preview"},c.a.createElement(i.b,{to:"/resume/preview"},c.a.createElement(u.e,{btnType:"primary"},"\u9884\u89c8")),c.a.createElement("br",null),c.a.createElement(i.b,{to:"/resume/preview?id=0"},c.a.createElement(u.e,{btnType:"primary"},"\u5e7b\u706f\u7247\u9884\u89c8")),c.a.createElement("br",null),c.a.createElement(u.e,{btnType:"primary",onClick:function(){return E([])}},"\u6e05\u7a7a")),c.a.createElement("div",null,"\u64cd\u4f5c\u9762\u677f",c.a.createElement("br",null),f.map((function(e){return c.a.createElement(u.e,{key:e.id,onClick:function(){e.color}},e.name)}))))))}},99:function(e,t,n){"use strict";function r(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=resume.4eafe73a.chunk.js.map
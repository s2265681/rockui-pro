(this.webpackJsonphookWidthTypeScript=this.webpackJsonphookWidthTypeScript||[]).push([[0],{247:function(e,t,n){e.exports=n(581)},252:function(e,t,n){},254:function(e,t,n){},259:function(e,t,n){},389:function(e,t){},425:function(e,t,n){},426:function(e,t,n){},528:function(e,t,n){},578:function(e,t,n){},579:function(e,t,n){},581:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(16),c=n.n(l),o=(n(252),n(253),n(11)),i=n(24),m=n(3),s=(n(254),function(e){return r.a.createElement("div",{className:"header"},"\u9879\u76ee\u96c6",r.a.createElement("div",{className:"nav"},r.a.createElement(o.b,{to:"/home"},"home"),r.a.createElement(o.b,{to:"/uidoc"},"\u6587\u6863"),r.a.createElement(o.b,{to:"/function"},"\u529f\u80fd"),r.a.createElement(o.b,{to:"/resume"},"\u7b80\u5386"),r.a.createElement(o.b,{to:"/recipe"},"\u98df\u8c31"),r.a.createElement(o.b,{to:"/"},"\u9000\u51fa")))}),u=(n(259),function(e){var t=window.location.hash,n=Object(a.useState)(!1),l=Object(m.a)(n,2),c=l[0],o=l[1];return Object(a.useEffect)((function(){t&&"#/"!==t&&"#/resume/preview"!==t&&o(!0),window.addEventListener("hashchange",(function(){var e=window.location.hash;o("#/"!==e&&"#/resume/preview"!==e)}))})),console.log(c,"isNav"),r.a.createElement("div",{className:"layout"},c&&r.a.createElement(s,null),e.children)}),d=n(37),p=n(111),h=n.n(p),E=n(4),g=E.h.MenuItem,f=E.h.SubMenu,b=E.k.TabItem,v=[{title:"ID",dataIndex:"id",key:"id"},{title:"\u59d3\u540d",dataIndex:"name",key:"name"},{title:"\u56fe\u7247",dataIndex:"Pic",key:"Pic",render:function(e){return r.a.createElement("img",{style:{width:150,height:150},src:e,alt:e})}},{title:"\u5e74\u9f84",dataIndex:"age",key:"age",sorter:{compare:function(e,t){return e.age-t.age}}},{title:"\u4f4f\u5740",dataIndex:"address",key:"address"},{title:"\u7c7b\u578b",dataIndex:"type",key:"type",render:function(e,t,n){return r.a.createElement("span",null,1===e?"\u852c\u83dc":2===e?"\u6c34\u679c":"\u4e3b\u98df")}}],y=[{id:"1",name:"\u80e1\u5f66\u658c",age:32,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7",type:1,description:"\u80e1\u5f66\u658c\u662f\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\u7684",Pic:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg"},{id:"2",name:"\u80e1\u5f66\u7956",age:42,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7",type:2,description:"\u80e1\u5f66\u7956\u662f\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\u7684",Pic:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg"},{id:"3",name:"\u738b\u7956\u84dd",age:22,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7",type:3,description:"\u738b\u7956\u84dd\u662f\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\u7684",Pic:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg"},{id:"4",name:"\u738b\u7956\u84dd",age:22,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7",type:3,description:"\u738b\u7956\u84dd\u662f\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\u7684",Pic:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg"},{id:"5",name:"\u738b\u7956\u84dd",age:22,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7",type:3,description:"\u738b\u7956\u84dd\u662f\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\u7684",Pic:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg"},{id:"6",name:"\u738b\u7956\u84dd",age:22,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7",type:3,Pic:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg",description:"\u738b\u7956\u84dd\u662f\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\u7684"},{id:"7",name:"\u738b\u7956\u84dd",age:22,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7",type:3,description:"\u738b\u7956\u84dd\u662f\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\u7684",Pic:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg"},{id:"8",name:"\u738b\u7956\u84dd",age:22,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7",type:3,description:"\u738b\u7956\u84dd\u662f\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\u7684",Pic:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg"}],w=[{id:1,title:"",content:""}],S=function(e){var t=localStorage.getItem("PLANDATA")||"",n=t&&JSON.parse(t)||[],l=0!==n.length?n:w||[],c=Object(a.useState)(l),o=Object(m.a)(c,2),i=o[0],s=o[1];Object(a.useEffect)((function(){localStorage.setItem("PLANDATA",JSON.stringify(i))}),[i]);return r.a.createElement(E.b,null,r.a.createElement("div",{className:"home_wrapper"},"\u9996\u9875",r.a.createElement("br",null),r.a.createElement("h3",null,"\u4f7f\u7528rockui\u7ec4\u4ef6\u6d4b\u8bd5"),r.a.createElement(E.h,{defaultIndex:"0",onSelect:function(e){return console.log(e)}},r.a.createElement(g,null,"\u9879\u76ee1"),r.a.createElement(g,null,"\u9879\u76ee2"),r.a.createElement(g,{disabled:!0},"\u9879\u76ee3"),r.a.createElement(f,{title:"dropdown"},r.a.createElement(g,null,"dropdown1"),r.a.createElement(g,null,"dropdown2"),r.a.createElement(g,null,"dropdown3"))),r.a.createElement("br",null),r.a.createElement(E.c,{fetchSuggestions:function(e){return fetch("https://api.github.com/search/users?q=".concat(e)).then((function(e){return e.json()})).then((function(e){var t=e.items;return console.log(t),t.slice(0,10).map((function(e){return Object(d.a)({value:e.login},e)}))}))},onSelect:function(e){console.log(e)},renderOption:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Name: ",e.value),r.a.createElement("p",null,"url: ",e.url))}}),r.a.createElement("br",null),r.a.createElement(E.l,{beforeUpload:function(e){var t=new File([e],"new_name.png",{type:e.type});return Promise.resolve(t)},action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",onChange:function(){return console.log("changed")},onRemove:function(){return console.log("removed")},name:"fileName",multiple:!0,drag:!0},r.a.createElement(E.g,{icon:"upload",size:"5x",theme:"secondary"}),r.a.createElement("br",null),r.a.createElement("p",null,"Drag file over to upload")),r.a.createElement("br",null),r.a.createElement(E.k,{defaultIndex:0,onSelect:function(e){return console.log(e)}},r.a.createElement(b,{label:"Button"},r.a.createElement(E.e,{btnType:"primary",size:"lg"},"primary-btn"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.e,{btnType:"danger",size:"lg"},"danger-btn"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.e,{btnType:"danger",size:"lg"},"danger-btn"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.e,{btnType:"link",size:"lg"},"link-btn")),r.a.createElement(b,{label:"Alert"},r.a.createElement(E.a,{message:"Alert Success"}),r.a.createElement(E.a,{message:"Alert Success",type:"info"}),r.a.createElement(E.a,{message:"Alert Success",type:"error"})),r.a.createElement(b,{label:"Icon"},r.a.createElement("a",{href:"https://fontawesome.com/icons?d=gallery",target:"_blank"},"\u60a8\u53ef\u4ee5\u4f7f\u7528\u8fd9\u91cc\u9762\u7684icon"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.g,{icon:"coffee",theme:"warning",size:"2x"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.g,{icon:"angle-down",theme:"info",size:"2x"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.g,{icon:"bell-slash",theme:"success",size:"2x"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.g,{icon:"allergies",theme:"danger",size:"2x"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.g,{icon:"ambulance",theme:"success",size:"3x"}))),r.a.createElement(E.i,{autoplay:!1,initIdx:0,deployTime:3e3,height:400},r.a.createElement("img",{src:"http://img3.imgtn.bdimg.com/it/u=1553709961,3652782060&fm=26&gp=0.jpg",alt:"\u56fe\u4e00"}),r.a.createElement("img",{src:"http://img4.imgtn.bdimg.com/it/u=3471735586,1899139408&fm=26&gp=0.jpg",alt:"\u56fe\u4e8c"}),r.a.createElement("img",{src:"http://img2.imgtn.bdimg.com/it/u=1303806583,1572175195&fm=26&gp=0.jpg",alt:"\u56fe\u4e09"})),r.a.createElement("br",null),r.a.createElement(E.j,{dataSource:y,columns:v,scroll:{y:700},isDrag:!0}),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(E.f,{dataSource:i,isHandle:!0,theme:"info",onChange:function(e,t,n){s(h.a.cloneDeep(n))},isEditable:!0}))))},k=[{id:1,title:"<h2>rokui\u7ec4\u4ef6</h2>",content:'## \n\u4f7f\u7528\uff1a \n```\nnpm install rockui \nimport "rockui/dist/rockui.css";\nimport { Button, Icon } from "rockui"\n\n\u6587\u6863\uff1ahttps://s2265681.github.io/code/React_Hook_UI/rockui/storybook-static/?path=/story/*\nnpm \u5730\u5740\uff1a https://www.npmjs.com/package/rockui\n\n```\n\n\n\n',children:[],isDone:!0},{id:4,title:"<h2>Button\u7ec4\u4ef6</h2>",content:'## \n// \u4f7f\u7528\n```\n   <Button\n      size={ButtonSize.Small}\n      autoFocus\n      onClick={e => {\n        e.preventDefault();\n      }}\n      className="btn"\n   >\n```',children:[{id:5,title:"<h3>\u53c2\u6570\u5217\u8868</h3>",content:'# \n\n\u5c5e\u6027 |  \u7c7b\u578b| \u662f\u5426\u5fc5\u586b | \u9ed8\u8ba4\u503c | \u53ef\u9009\u53c2\u6570 \n|-|-|-|-|-|\nbtnType | | String |  \u5426 |  "primary" |"default" \\| "dashed" \\|"danger" \\|"link" | "default" \nsize | \u5426 | "lg" \\| "sm" | "sm" \ndisabled| Boolean |\u5426  | true \\| false | false \nhref | String | \u5426 | "" | ""  \n'},{id:10,title:"<h3>\u9884\u89c8</h3>",content:' ![\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0](https://img-blog.csdnimg.cn/20200607191155103.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDE2MDM4NQ==,size_16,color_FFFFFF,t_70,zoom="20%")'}]},{id:6,title:"<h2>Spider</h2>",content:'## \n// \u4f7f\u7528\n```js\n  <Spider   \n      autoplay={false}\n    >\n      <img src="http://img3.imgtn.bdimg.com/it/u=1553709961,3652782060&fm=26&gp=0.jpg" alt="\u56fe\u4e00"/>\n      <img src="http://img4.imgtn.bdimg.com/it/u=3471735586,1899139408&fm=26&gp=0.jpg" alt="\u56fe\u4e8c"/>\n      <img src="http://img2.imgtn.bdimg.com/it/u=1303806583,1572175195&fm=26&gp=0.jpg" alt="\u56fe\u4e09"/>\n  </Spider>\n  ```',children:[{id:7,title:"<h3>\u53c2\u6570\u5217\u8868</h3>",content:'### \n\n\u5c5e\u6027 | \u8bf4\u660e | \u7c7b\u578b| \u662f\u5426\u5fc5\u586b | \u9ed8\u8ba4\u503c | \u53ef\u9009\u53c2\u6570 \n|-|-|-|-|-|-|\nautoplay | \u662f\u5426\u81ea\u52a8\u8f6e\u64ad | | Boolean |  false |  true\\|false | "true" \ndeployTime | \u5ef6\u8fdf\u65f6\u95f4 |  Number | \u5426 | 1000  | "--" \ninitIdx| \u7b2c\u51e0\u4e2a\u5f00\u59cb | Boolean |\u5426  | true \\| false | false \nheight | \u8f6e\u64ad\u56fe\u9ad8\u5ea6| Number | \u5426 | 300 | ""  \n'},{id:11,title:"<h3>\u9884\u89c8</h3>",content:' <img  height="300" width="800" src="https://img-blog.csdnimg.cn/20200607191459690.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDE2MDM4NQ==,size_16,color_FFFFFF,t_70"/>'}]},{id:8,title:"<h2>Table</h2>",content:'\n##\n// \u4f7f\u7528\n```js\nconst columns = [\n  {\n    title: "\u59d3\u540d",\n    dataIndex: "name",\n    key: "name",\n     sorter: {\n      compare: (a: { id: number }, b: { id: number }) => a.id - b.id,\n    },\n    render:(t:string)=><img style={{width:150,height:150}} src={t} alt={t}></img>\n  }]\nconst dataSource = [\n  {\n    id: "1",\n    name: "\u80e1\u5f66\u658c",\n    age: 32,\n    address: "\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7",\n    type: 1,\n    description: "\u80e1\u5f66\u658c\u662f\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\u7684",\n    Pic:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg",\n  }\n]\n\n  <Table\n    dataSource={dataSource}\n    columns={columns}\n    borderd\n    isTheme={"sepia(.6)"}\n    scroll={{ y: 600 }}\n    expandable={{\n      expandedRowRender: (record) => (\n        <span style={{ color: "rgb(100, 155, 0)" }}>{record.description}</span>\n      ),\n      onExpand: (key) => console.log(key, "key1111"),\n      rowExpandable: (record) => record.name !== "\u738b\u7956\u84dd",\n    }}\n    rowSelection={{\n      type: "checkbox",\n      rowKey: "id",\n      rowChoosed: false, // \u70b9\u51fb\u884c\u662f\u5426\u9009\u4e2d\n      onChange: (selectedRowKeys: any) =>\n        console.log(selectedRowKeys, "selectedRowKeys>>"),\n    }}\n  />\n  ```\n',children:[{id:9,title:"<h3>\u53c2\u6570\u5217\u8868</h3>",content:"## \n\n\u5c5e\u6027 | \u8bf4\u660e | \u7c7b\u578b| \u662f\u5426\u5fc5\u586b | \u9ed8\u8ba4\u503c | \u53ef\u9009\u53c2\u6570 \n|-|-|-|-|-|-|\ndataSource | \u6570\u636e\u6e90 | | Array |  true |  -- | -- \ncolumns | \u5217\u5185\u5bb9 |  Array | true | --  | --\nrowSelection| \u8bbe\u7f6e\u884c | Object | \u5426  | {} | --\nborderd | \u8bbe\u7f6etable\u8fb9\u6846 | Boolean | \u5426 | -- | -- \nloading | \u8bbe\u7f6etable Loading | Boolean | \u5426 | -- | -- \nisTheme | \u8bbe\u7f6etable filter\u7684\u5c5e\u6027 | string | \u5426 | -- | -- \nexpandable| \u8bbe\u7f6e\u884c\u5c55\u5f00 | Object | \u5426  | {} | --\nscroll| \u8bbe\u7f6e\u8d85\u51fa\u9ad8\u5ea6\u6eda\u52a8| Object | \u5426 | {x:300,y:300} | --\n"},{id:12,title:"<h3>\u9884\u89c8</h3>",content:'<img  height="300" width="800" src="https://img-blog.csdnimg.cn/20200607192110378.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDE2MDM4NQ==,size_16,color_FFFFFF,t_70"/>'}]}],O=function(e){var t=localStorage.getItem(e.localStr)||"",n=t&&JSON.parse(t)||[],l=0!==n.length?n:e.commissionData||[],c=Object(a.useState)(l),o=Object(m.a)(c,2),i=o[0],s=o[1];return Object(a.useEffect)((function(){localStorage.setItem(e.localStr,JSON.stringify(i))}),[i]),r.a.createElement(E.b,null,r.a.createElement("div",null,r.a.createElement("h3",null,e.title),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(E.f,{dataSource:i,isHandle:!0,theme:"info",onChange:function(e,t,n){s(h.a.cloneDeep(n))},isEditable:!0}))))},N=function(e){return r.a.createElement(O,{title:"rockUi\u6587\u6863",localStr:"PLANDATA1",commissionData:k})},_=[{id:1,title:"",content:""}],j=function(e){return r.a.createElement(O,{title:"\u6587\u68631",localStr:"PLANDATA2",commissionData:_})},x=[{id:1,title:"",content:""}],T=function(e){return r.a.createElement(O,{title:"\u6587\u68632",localStr:"PLANDATA3",commissionData:x})},D=E.h.MenuItem,I=(E.h.SubMenu,function(e){return r.a.createElement("div",{className:"uidoc_wrapper"},r.a.createElement("div",{className:"left_menu"},r.a.createElement(E.h,{mode:"vertical",defaultIndex:"0",onSelect:function(e){return console.log(e)}},r.a.createElement(D,{key:1},r.a.createElement(o.b,{to:"/uidoc/"},r.a.createElement("div",null,"RockUi"))),r.a.createElement(D,{key:2},r.a.createElement(o.b,{to:"/uidoc/doc1"},r.a.createElement("div",null,"\u6587\u68631"))),r.a.createElement(D,{key:3},r.a.createElement(o.b,{to:"/uidoc/doc2"},r.a.createElement("div",null,"\u6587\u68632"))))),r.a.createElement("div",{className:"right_menu"},r.a.createElement(o.a,null,r.a.createElement(i.a,{path:"/uidoc",exact:!0,component:N}),r.a.createElement(i.a,{path:"/uidoc/doc1",component:j}),r.a.createElement(i.a,{path:"/uidoc/doc2",component:T}))))}),F=function(e){return r.a.createElement("div",{className:"index_wrapper"},r.a.createElement("div",{className:"text_wrapper"},"hello\uff0c\u4f60\u6765\u5566,",r.a.createElement("br",null),r.a.createElement(o.b,{to:"/home",className:"into_text_color"},"\u70b9\u51fb\u8fdb\u5165")),r.a.createElement(E.d,{type:"start",animationType:"down"}))},M=(n(425),function(e){var t=[{title:"ID",dataIndex:"id",key:"id"},{title:"\u540d\u79f0",dataIndex:"recipeName",key:"recipeName"},{title:"\u56fe\u7247",dataIndex:"recipePic",key:"recipePic",render:function(e){return r.a.createElement("img",{style:{width:150,height:150},src:e,alt:e})}},{title:"\u5185\u5bb9",dataIndex:"content",key:"content",width:500},{title:"\u72b6\u6001",dataIndex:"status",key:"status",render:function(e){return"1"===e?"\u5df2\u4e0a\u67b6":"\u5f00\u53d1\u4e2d"}},{title:"\u64cd\u4f5c",key:"operation",render:function(e,t){return"1"===t.status?r.a.createElement(r.a.Fragment,null,r.a.createElement(E.e,{btnType:"link"},"\u67e5\u770b"),r.a.createElement(E.e,{btnType:"link"},"\u4e0b\u67b6")):r.a.createElement(r.a.Fragment,null,r.a.createElement(E.e,{btnType:"link"},"\u7f16\u8f91"),r.a.createElement(E.e,{btnType:"link"},"\u4e0a\u67b6"))}}];return r.a.createElement("div",{className:"wrapper-list"},r.a.createElement("div",{className:"header"},r.a.createElement("h3",null,"\u5185\u5bb9\u5217\u8868"),r.a.createElement(o.b,{to:"editRecipe"},r.a.createElement(E.e,{btnType:"primary"},"\u65b0\u589e\u98df\u8c31"))),r.a.createElement(E.j,{columns:t,dataSource:[{id:1,recipeName:"\u62d4\u4e1d\u5730\u74dc",recipePic:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=892160461,3145855963&fm=26&gp=0.jpg",status:"1",content:"\u62d4\u4e1d\u5730\u74dc\u771f\u597d\u5403"}]}))}),L=function(e){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("h2",{style:{margin:20}},"\u7f16\u8f91\u5217\u8868"),r.a.createElement(M,null))},A=n(586),H=n(583),P=n(587),C=n(582),U=n(584),G=n(80),Y=n(590),W=(n(426),n(588)),z=n(589),B=function(e){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(H.a.List,{name:"recipeIngredientList[0].foodName"},(function(e,t){var n=t.add,a=t.remove;return r.a.createElement("div",null,e.map((function(t,n){return r.a.createElement(H.a.Item,{label:"",required:!1,key:t.key},r.a.createElement(H.a.Item,Object.assign({},t,{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input passenger's name or delete this field."}],noStyle:!0}),r.a.createElement(A.a,{placeholder:"passenger name",style:{width:"60%"}})),e.length>1?r.a.createElement(W.a,{className:"dynamic-delete-button",style:{margin:"0 8px"},onClick:function(){a(t.name)}}):null)})),r.a.createElement(H.a.Item,null,r.a.createElement(G.a,{type:"dashed",onClick:function(){n()},style:{width:"60%"}},r.a.createElement(z.a,null)," Add field")))})))},R=(n(528),function(e){console.log(e,"props"),Object(a.useEffect)((function(){e.onChange([1])}),[]);return r.a.createElement("div",{className:"label-wrapper"},r.a.createElement(G.a,null,"\u70ed\u83dc"))}),K=A.a.TextArea,X={labelCol:{span:2},wrapperCol:{span:9}},Q={wrapperCol:{offset:2,span:8}},V=function(e){return r.a.createElement("div",null,r.a.createElement(H.a,Object.assign({},X,{name:"basic",initialValues:{remember:!0},onFinish:function(e){console.log("Success:",e)},onFinishFailed:function(e){console.log("Failed:",e)}}),r.a.createElement(H.a.Item,{label:"\u98df\u8c31\u540d\u79f0",name:"username",rules:[{required:!0,message:"\u98df\u8c31\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a!"}]},r.a.createElement(A.a,{placeholder:"\u8bf7\u586b\u5199\u98df\u8c31\u540d\u79f0"})),r.a.createElement(H.a.Item,{label:"\u8bbe\u5907\u54c1\u7c7b",name:"devType",rules:[{required:!0,message:"\u8bbe\u5907\u54c1\u7c7b\u4e0d\u80fd\u4e3a\u7a7a!"}]},r.a.createElement(P.a,{placeholder:"\u8bf7\u9009\u62e9\u8bbe\u5907\u54c1\u7c7b"},r.a.createElement(P.a.Option,{value:"1"},"\u9ad8\u538b\u9505"),r.a.createElement(P.a.Option,{value:"2"},"\u7535\u997c\u94db"))),r.a.createElement(H.a.Item,{label:"\u56fe\u6587\u7c7b\u578b",name:"recipeType",rules:[{required:!0,message:"\u56fe\u6587\u7c7b\u578b\u4e0d\u80fd\u4e3a\u7a7a!"}],initialValue:"1"},r.a.createElement(C.default.Group,null,r.a.createElement(C.default,{value:"1"},"\u56fe\u6587"),r.a.createElement(C.default,{value:"0"},"\u89c6\u9891"))),r.a.createElement(H.a.Item,{name:"recipePic",label:"\u98df\u54c1\u5c01\u9762",valuePropName:"fileList",getValueFromEvent:function(e){return console.log("Upload event:",e),Array.isArray(e)?e:e&&e.fileList},rules:[{required:!0,message:"\u98df\u54c1\u5c01\u9762\u4e0d\u80fd\u4e3a\u7a7a!"}],extra:"\u652f\u6301240*375px,jpg/jepg/png\u683c\u5f0f,\u6700\u5927\u4e0d\u8d85\u8fc75M"},r.a.createElement(U.a,{name:"file",action:"https://bizapi.csdn.net/blog-console-api/v3/upload/img?shuiyin=2",listType:"picture"},r.a.createElement(G.a,null,r.a.createElement(Y.a,null),"\u4e0a\u4f20\u6587\u4ef6"))),r.a.createElement(H.a.Item,{label:"\u4ecb\u7ecd\u8bf4\u660e",name:"content",rules:[{required:!0,message:"\u4ecb\u7ecd\u8bf4\u660e\u4e0d\u80fd\u4e3a\u7a7a!"}]},r.a.createElement(K,{placeholder:"\u8bf7\u586b\u5199\u4ecb\u7ecd\u8bf4\u660e"})),r.a.createElement(H.a.Item,{label:"\u5c0f\u8d34\u58eb",name:"tip"},r.a.createElement(K,{placeholder:"\u8bf7\u586b\u5199\u5c0f\u8d34\u58eb"})),r.a.createElement(H.a.Item,{label:"\u9009\u62e9\u6807\u7b7e",name:"tagIdList",valuePropName:"value",initialValue:[],rules:[{required:!0,message:"\u6807\u7b7e\u4e0d\u80fd\u4e3a\u7a7a!"}]},r.a.createElement(R,null)),r.a.createElement(H.a.Item,{name:"recipeIngredientList",label:"\u98df\u6750\u51c6\u5907",initialValue:[],rules:[{required:!0,message:"\u98df\u6750\u51c6\u5907\u4e0d\u80fd\u4e3a\u7a7a!"}]},r.a.createElement(B,null)),r.a.createElement(H.a.Item,Q,r.a.createElement(o.b,{to:"/recipe"},r.a.createElement(G.a,{type:"default",style:{marginRight:20}},"\u53d6\u6d88")),r.a.createElement(G.a,{type:"primary",htmlType:"submit"},"\u4fdd\u5b58"))))},q=n(585),J=q.a.TabPane,Z=[{tab:"\u57fa\u672c\u4fe1\u606f",key:"1",disabled:!1,content:r.a.createElement(V,null)},{tab:"\u521b\u5efa\u6b65\u9aa4",key:"2",disabled:!1,content:"step"}],$=function(e){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("h2",{style:{margin:20}},"\u7f16\u8f91\u98df\u8c31"),r.a.createElement(q.a,{defaultActiveKey:"1"},Z.map((function(e){return r.a.createElement(J,e,e.content)}))))},ee=function(e){return r.a.createElement("div",null,"nav\u5bfc\u822a")},te=[{id:1,title:"\u6807\u98981",content:"\u6211\u662f\u5185\u5bb91"},{id:2,title:"\u6807\u98982",content:"\u6211\u662f\u5185\u5bb92"},{id:3,title:"\u6807\u98983",content:"\u6211\u662f\u5185\u5bb93"},{id:4,title:"\u6807\u98984",content:"\u6211\u662f\u5185\u5bb94"}],ne=function(e){var t=e.visible,n=e.onMouseMove,a=e.onMouseUp;return t?r.a.createElement("div",{className:"show_mask",onMouseMove:n,onMouseUp:a}):r.a.createElement(r.a.Fragment,null)},ae=(n(578),function(e){var t=e.Data,n=e.index,l=e.setList,c=e.lineHeight,o=e.children,i=e.onMouseUp,s=Object(a.useState)(!1),u=Object(m.a)(s,2),d=u[0],p=u[1],h=Object(a.useState)(0),E=Object(m.a)(h,2),g=E[0],f=E[1],b=Object(a.useState)(0),v=Object(m.a)(b,2),y=v[0],w=v[1],S=Object(a.useState)(-1),k=Object(m.a)(S,2),O=k[0],N=k[1];function _(e,t,n){return console.log(e,t,n),(e=e.slice()).splice(n,0,e.splice(t,1)[0]),e}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{onMouseDown:function(e){return function(e,t){N(t),f(e.pageY),p(!0)}(e,n)},key:n,style:function(e){return e!==O?{}:{transform:"translate(5px,".concat(y,"px)")}}(n),className:"mask-li-style ".concat(n==O?" chooseSty":"")},o),r.a.createElement(ne,{visible:d,onMouseMove:function(e){var n=e.pageY-g;if(n>c&&O<t.length){n-=c;var a=_(t,O,O+1);l(a),N(O+1),f(g+c)}else if(n<-c&&O>0){n+=c;var r=_(t,O-1,O);l(r),N(O-1),f(g-c)}w(n)},onMouseUp:function(e){p(!1),f(0),N(-1),i&&i(e)}}))}),re=function(e){var t=Object(a.useState)(te),n=Object(m.a)(t,2),l=n[0],c=n[1];return r.a.createElement("div",{className:"drag_wrapper"},r.a.createElement("h3",null,"react\u5b9e\u73b0\u62d6\u62fd\u6392\u5e8f\u7ec4\u4ef6\u300aDragSortCom\u300b"),r.a.createElement("hr",null),r.a.createElement("ul",null,l.map((function(e,t){return r.a.createElement("li",null,r.a.createElement(ae,{Data:l,key:e.id,index:t,setList:c,lineHeight:40},e.id," \u2014\u2014 ",e.title,"\u2014\u2014 ",e.content))}))))},le={STATUS_TODO:"\u5f85\u5904\u7406",STATUS_DOING:"\u8fdb\u884c\u4e2d",STATUS_DONE:"\u5df2\u5b8c\u6210"},ce=[{id:1,status:"STATUS_TODO",title:"\u6bcf\u6b21\u9605\u8bfb\u4e94\u6b21\uff0c\u6bcf\u6b21\u9605\u8bfb\u5b8c\u3001\u8981\u505a100\u5b57\u7684\u8bfb\u4e66\u7b14\u8bb0",username:"\u5c0f\u590f",point:7},{id:2,status:"STATUS_TODO",title:"\u6bcf\u6b21\u5065\u8eab4\u6b21\uff0c\u6bcf\u6b21\u5065\u8eab\u65f6\u95f4\u9700\u8981\u5927\u4e8e30\u5206\u949f",username:"\u6a58\u5b50\ud83c\udf4a",point:4},{id:3,status:"STATUS_TODO",title:"\u5355\u8bcd*100",username:"\u5c0f\u738b\u5983",point:1},{id:4,status:"STATUS_TODO",title:"\u5355\u8bcd*130",username:"\u5c0f\u738b\u5983",point:4},{id:5,status:"STATUS_TODO",title:"\u5355\u8bcd*150",username:"\u5c0f\u738b\u5983",point:2}],oe=function(e){var t=Object(a.useState)(!1),n=Object(m.a)(t,2),l=n[0],c=n[1],o=e.status,i=e.children,s=function(e,t){e.preventDefault(),c(t)};return r.a.createElement("div",{id:"col-".concat(o),key:o,className:"col",onDragEnter:function(e){return s(e,!0)},onDragOver:function(e){return s(e,!0)},onDragLeave:function(e){return s(e,!1)},onDrop:function(t){e.onDrop(t),c(!1)}},r.a.createElement("header",{className:"col-header"},le[o]),r.a.createElement("div",{className:"col-main"+(l?" active":"")},i))};oe.defaultProps={status:"STATUS_TODO"};var ie=oe,me=function(e){var t=e.id,n=e.title,a=e.point,l=e.username,c=e.active,o=e.handleDragStart,i=e.onDragEnd;return r.a.createElement("div",{id:"item-".concat(t),key:"item-".concat(t),className:"item"+(c?" active":""),draggable:"true",onDragStart:o,onDragEnd:i},r.a.createElement("header",{className:"item-header"},r.a.createElement("span",{className:"item-header-username"},l),r.a.createElement("span",{className:"item-header-point"},a)),r.a.createElement("main",{className:"item-main"},n))},se=function(e){var t=Object(a.useState)(-1),n=Object(m.a)(t,2),l=n[0],c=n[1];return r.a.createElement("div",{className:"task-wrapper"},Object.keys(le).map((function(e){return r.a.createElement(ie,{status:e,key:e,onDrop:function(t){return function(e,t){e.preventDefault(),ce.filter((function(e){return e.id===l}))[0].status=t}(t,e)}},ce.filter((function(t){return t.status===e})).map((function(e){return r.a.createElement(me,{key:e.id,active:e.id===l,id:e.id,title:e.title,point:e.point,username:e.username,handleDragStart:function(){return c(e.id)},onDragEnd:function(){return c(-1)}})})))})))},ue=(n(579),function(e){var t=e.onChange,n=e.blockInfo,l=Object(a.useState)(n||{width:200,height:200,pointX:300,pointY:100}),c=Object(m.a)(l,2),o=c[0],i=c[1],s=Object(a.useState)(!1),u=Object(m.a)(s,2),p=u[0],h=u[1],E=Object(a.useState)("move"),g=Object(m.a)(E,2),f=g[0],b=g[1],v=Object(a.useState)({startX:0,startY:0}),y=Object(m.a)(v,2),w=y[0],S=y[1],k=Object(a.useState)("right"),O=Object(m.a)(k,2),N=O[0],_=O[1];Object(a.useEffect)((function(){localStorage.setItem("block-demo",JSON.stringify(o)),t&&t(o)}),[o]);var j=function(e,t){e.stopPropagation(),h(!0),b("scale"),_(t),S({startX:e.pageX-o.width,startY:e.pageY-o.height})};return r.a.createElement("div",{className:"handle_box_wrapper"},r.a.createElement("div",{className:"box",style:{left:o.pointX,top:o.pointY,width:o.width,height:o.height},onMouseDown:function(e){return function(e){h(!0),e.stopPropagation(),b("move");var t=e.pageX,n=e.pageY,a=document.querySelector("#handle_box"),r=null===a||void 0===a?void 0:a.clientWidth,l=null===a||void 0===a?void 0:a.clientHeight;i(Object(d.a)(Object(d.a)({},o),{},{pointX:t-r/2,pointY:n-l/2}))}(e)},id:"handle_box"},r.a.createElement("div",{className:"move-right",onMouseDown:function(e){return j(e,"right")},style:{height:o.height}},"||"),r.a.createElement("div",{className:"move-bottom",onMouseDown:function(e){return j(e,"bottom")},style:{width:o.width}},"="),r.a.createElement("div",{className:"move-right-bottom",onMouseDown:function(e){return j(e,"left-bottom")}},"*")),r.a.createElement(ne,{visible:p,onMouseMove:function(e){e.stopPropagation();var t=e.pageX,n=e.pageY;if("move"===f){var a=document.querySelector("#handle_box"),r=null===a||void 0===a?void 0:a.clientWidth,l=null===a||void 0===a?void 0:a.clientHeight;i(Object(d.a)(Object(d.a)({},o),{},{pointX:t-r/2,pointY:n-l/2}))}else if("scale"===f){var c=e.pageX-w.startX,m=e.pageY-w.startY;"right"===N&&i(Object(d.a)(Object(d.a)({},o),{},{width:c})),"bottom"===N&&i(Object(d.a)(Object(d.a)({},o),{},{height:m})),"left-bottom"===N&&i(Object(d.a)(Object(d.a)({},o),{},{width:c,height:m}))}},onMouseUp:function(e){e.stopPropagation(),h(!1),b("move"),_("right")}}))}),de=localStorage.getItem("block-demo"),pe=de&&JSON.parse(de),he=function(e){var t=Object(a.useState)(pe||{width:200,height:200,pointX:300,pointY:100}),n=Object(m.a)(t,2),l=n[0],c=n[1];Object(a.useEffect)((function(){localStorage.setItem("block-demo",JSON.stringify(l))}),[l]);return r.a.createElement("div",{className:"handle_box_wrapper"},r.a.createElement(ue,{blockInfo:l,onChange:function(e){c(e)}}))},Ee=E.h.MenuItem,ge=(E.h.SubMenu,function(e){return r.a.createElement("div",{className:"function_wrapper"},r.a.createElement("div",{className:"left_menu"},r.a.createElement(E.h,{mode:"vertical",defaultIndex:"0",onSelect:function(e){return console.log(e)}},r.a.createElement(Ee,{key:1},r.a.createElement(o.b,{to:"/function/"},r.a.createElement("div",null,"\u5bfc\u822a"))),r.a.createElement(Ee,{key:2},r.a.createElement(o.b,{to:"/function/drag"},r.a.createElement("div",null,"\u62d6\u62fd"))),r.a.createElement(Ee,{key:3},r.a.createElement(o.b,{to:"/function/drag-demo"},r.a.createElement("div",null,"\u62d6\u62fddemo"))),r.a.createElement(Ee,{key:4},r.a.createElement(o.b,{to:"/function/handlebox"},r.a.createElement("div",null,"\u64cd\u4f5c\u76d2\u5b50"))))),r.a.createElement("div",{className:"right_menu"},r.a.createElement(o.a,null,r.a.createElement(i.a,{path:"/function",exact:!0,component:ee}),r.a.createElement(i.a,{path:"/function/drag",component:re}),r.a.createElement(i.a,{path:"/function/drag-demo",component:se}),r.a.createElement(i.a,{path:"/function/handlebox",component:he}))))}),fe=n(5),be=function(e){var t=Object(a.useRef)(null),n=e.type,l=e.content,c=e.isEdit,o=e.onChange;return r.a.createElement("div",{onBlur:function(e){return function(e,n){if(t&&t.current){var a=t.current;o&&o(a,n)}}(0,n)},className:"content-info-wrapper",onKeyUp:function(t){return e.handleSelectMouseUp&&e.handleSelectMouseUp(t)},onDrop:function(t){return e.onDrop&&e.onDrop(t)},onDragOver:function(e){return e.preventDefault()}},"label-bar"===n&&r.a.createElement("div",{className:"label_wrapper",ref:t,style:{minHeight:100},contentEditable:c,suppressContentEditableWarning:!0,dangerouslySetInnerHTML:{__html:l[0]}}),"one-column"===n&&r.a.createElement("div",{className:"one-wrapper",ref:t,style:{minHeight:300},contentEditable:c,suppressContentEditableWarning:!0,dangerouslySetInnerHTML:{__html:l[0]}}),"two-column"===n&&r.a.createElement("div",{className:"two_wrapper",style:{minHeight:300},ref:t},r.a.createElement("div",{className:"left_wrapper",contentEditable:c,suppressContentEditableWarning:!0,dangerouslySetInnerHTML:{__html:l[0]}}),r.a.createElement("div",{className:"right_wrapper",contentEditable:c,suppressContentEditableWarning:!0,dangerouslySetInnerHTML:{__html:l[1]}})))};be.defaultProps={content:["\u8bf7\u8f93\u5165\u5185\u5bb9","\u8bf7\u8f93\u5165\u5185\u5bb9"],isEdit:!0};var ve,ye=be,we=["<Button contentEditable>Button\u7ec4\u4ef6</Button>",'<img width="100" height="100" src="https://www.w3school.com.cn/i/eg_dragdrop_w3school.gif"/>','<div contentEditable style="height:100px;background:#ff0">\u6211\u662fDiv</div>'],Se=[{id:1,color:"#f00",name:"\u7ea2\u8272"},{id:2,color:"#ff0",name:"\u9ec4\u8272"},{id:3,color:"#00f",name:"\u84dd\u8272"}],ke=[{name:"label-bar",key:"label-bar"},{name:"\u4e00\u680f\u5e03\u5c40",key:"one-column"},{name:"\u4e24\u680f\u5e03\u5c40",key:"two-column"}],Oe=E.h.MenuItem,Ne=E.h.SubMenu,_e=function(e){var t=localStorage.getItem("resume_content"),n=t?JSON.parse(t):[],l=Object(a.useState)(n),c=Object(m.a)(l,2),i=c[0],s=c[1],u=Object(a.useState)(-1),d=Object(m.a)(u,2),p=d[0],h=d[1];Object(a.useEffect)((function(){localStorage.setItem("resume_content",JSON.stringify(i))}),[i]);var g=function(e){var t;if(null===(t=document.getSelection())||void 0===t?void 0:t.anchorNode){var n=document.getSelection();console.log(null===n||void 0===n?void 0:n.extentNode,"anchorNode>>")}};return r.a.createElement("div",{className:"resume_wrapper"},r.a.createElement("div",{className:"resume_left_wrapper"},r.a.createElement(E.h,{mode:"vertical",defaultIndex:"0"},r.a.createElement(Ne,{title:"\u9009\u62e9\u5e03\u5c40"},ke.map((function(e){return r.a.createElement(Oe,{key:e.key},r.a.createElement(E.e,{onClick:function(){return function(e){var t={type:e,content:["\u6dfb\u52a0\u5185\u5bb9"]};s([].concat(Object(fe.a)(i),[t]));var n=document.getElementById("anchorEnd");n&&n.scrollIntoView({block:"start",behavior:"smooth"})}(e.key)}},e.name))}))),r.a.createElement(Ne,{title:"\u62d6\u62fd\u7ec4\u4ef6"},we.map((function(e,t){return r.a.createElement(Oe,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e},draggable:"true",onDragStart:function(){return h(t)},onDragEnd:function(){return h(-1)}}))}))))),r.a.createElement("div",{className:"resume_right_wrapper"},r.a.createElement("div",{className:"resume_edit_wrapper"},"\u7f16\u8f91\u533a",i.map((function(e,t){return r.a.createElement(ae,{Data:i,setList:s,index:t,lineHeight:200,onMouseUp:function(e){return g()}},r.a.createElement("div",{key:e.typeId},r.a.createElement(E.g,{onMouseDown:function(e){!function(e,t){e.stopPropagation(),s(Object(fe.a)(i.filter((function(e,n){return n!==t}))))}(e,t)},icon:"times-circle",size:"1x",className:"resume_delete_btn"}),r.a.createElement(ye,{type:e.type,onChange:function(n){return function(e,t,n){if("two-column"===e){var a=n.children[0].innerText,r=n.children[1].innerText;i[t].content=[a,r]}else i[t].content=[n.innerHTML];s(Object(fe.a)(i))}(e.type,t,n)},content:i[t].content,handleSelectMouseUp:function(e){return g()},onDrop:function(e){return function(e,t){e.preventDefault();var n=i[t].content[0].concat(we[p]);i[t].content[0]=n,s(Object(fe.a)(i))}(e,t)}})))})),r.a.createElement("div",{id:"anchorEnd",style:{visibility:"hidden"}},"\u901a\u8fc7\u951a\u70b9\u65b9\u5f0f\u914d\u5408scrollIntoView\u5b9e\u73b0\u5e73\u6ed1\u5411\u4e0b\u6eda\u52a8")),r.a.createElement("div",{className:"preview_wrapper"},r.a.createElement("div",{className:"btn_preview"},r.a.createElement(o.b,{to:"/resume/preview"},r.a.createElement(E.e,{btnType:"primary"},"\u9884\u89c8")),r.a.createElement("br",null),r.a.createElement(o.b,{to:"/resume/preview?id=0"},r.a.createElement(E.e,{btnType:"primary"},"\u5e7b\u706f\u7247\u9884\u89c8")),r.a.createElement("br",null),r.a.createElement(E.e,{btnType:"primary",onClick:function(){return s([])}},"\u6e05\u7a7a")),r.a.createElement("div",null,"\u64cd\u4f5c\u9762\u677f",r.a.createElement("br",null),Se.map((function(e){return r.a.createElement(E.e,{key:e.id,onClick:function(){e.color}},e.name)}))))))},je=function(e){var t,n,l=localStorage.getItem("resume_content"),c=l?JSON.parse(l):[],o=Object(a.useState)(-1),i=Object(m.a)(o,2),s=i[0],u=i[1];Object(a.useEffect)((function(){var t=e.history.location.search.replace(/\?id=+/,"");if(t)return t>c.length&&e.history.push("/resume/preview?id=0"),u(Number(t)),d(),function(){clearTimeout(ve)}}),[s]);var d=function(){ve=setTimeout((function(){h("next")}),3e3)},p=function(e){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(t)},h=function(t){var n;if("return"!==t){if("prev"===t)n=s>0?s-1:0,0===s&&alert("\u5df2\u7ecf\u662f\u7b2c\u4e00\u5f20\u4e86");else{n=s+1<c.length-1?s+1:c.length-1;var a=s+1;console.log(a,"cc"),console.log(c.length,"initData.length"),a===c.length&&alert("\u5df2\u7ecf\u662f\u6700\u540e\u4e00\u5f20\u4e86")&&clearTimeout(ve)}u(n),e.history.push("/resume/preview?id="+n)}else e.history.push("/resume")};return r.a.createElement("div",{className:"resume_wrapper"},s<0&&r.a.createElement("div",{className:"box_wrapper"},r.a.createElement("h2",null,"\u7b80\u5386\u9884\u89c8"),c.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(ye,{type:e.type,content:c[t].content,isEdit:!1}))})),r.a.createElement("div",{className:"resumen_preview_right_wrapper"},r.a.createElement(E.e,{onClick:function(){return function(e){var t=document.documentElement.outerHTML,n=window.URL||window.webkitURL||window,a=new Blob([t]),r=document.createElement("a");r.href=n.createObjectURL(a),r.download=e,p(r)}("resume.html")}},"\u5bfc\u51fahtml\u6587\u4ef6"))),s>=0&&r.a.createElement(E.b,{changeChild:!0},r.a.createElement("div",{className:"box_wrapper"},r.a.createElement("h3",null,"\u5e7b\u706f\u7247"),r.a.createElement(ye,{type:null===(t=c[s])||void 0===t?void 0:t.type,content:null===(n=c[s])||void 0===n?void 0:n.content,isEdit:!1}),r.a.createElement(E.e,{onClick:function(){return h("prev")}},"\u4e0a\u4e00\u5f20"),r.a.createElement(E.e,{onClick:function(){return h("next")}},"\u4e0b\u4e00\u5f20"),r.a.createElement(E.e,{onClick:function(){return h("return")}},"\u8fd4\u56de"))))},xe=function(e){return r.a.createElement(o.a,null,r.a.createElement(u,null,r.a.createElement(i.a,{path:"/",pathName:"index",name:"index",exact:!0,component:F}),r.a.createElement(i.a,{path:"/home",component:S}),r.a.createElement(i.a,{path:"/uidoc",component:I}),r.a.createElement(i.a,{path:"/recipe",component:L}),r.a.createElement(i.a,{path:"/editRecipe",component:$}),r.a.createElement(i.a,{path:"/function",component:ge}),r.a.createElement(i.a,{path:"/resume",exact:!0,component:_e}),r.a.createElement(i.a,{path:"/resume/preview",component:je})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(580);c.a.render(r.a.createElement(xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[247,1,2]]]);
//# sourceMappingURL=main.4c241f91.chunk.js.map